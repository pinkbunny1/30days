# day5 : Demystifying Docker for dummies

- I have been using docker containers for running some apps time to time but it never stuck in my head and had to read about it and find its commands. I decided to have a proper session with Docker, de-structuring its components to understand it fully.
- Source : https://docs.docker.com/get-started/



## Keywords
- <b>Containers</b>: Virtual Environment more like a sandbox where apps and its dependencies are installed to run
- <b>Images</b> : Blueprint. (where containers are created from)
- <b>Dockerfile</b> : A list of instructions that defines what goes inside(environment of) the container. Such as which ports to map to (the outside world), which files to be copied in the container. This makes sure that the app built inside the container based on that Dockerfile behaves the same wherever it runs.
- <b>Docker Daemon</b> : OS Background service in the host that handles building and running docker containers.
- <b>Docker Client</b> : Terminal tool that the user uses to talk to Daemon.
- <b>Docker Hub</b> : A storage of Docker images. User can host their docker image or can use existing docker images from the Docker Hub by 'pulling' it.




## commands
- `docker build (-t nameOfImage) .` : Creates an image. Using -t, tag allows users to give a name to the image for convenience.

- `docker run [image ID or Repository Name]` : Creates a container based on the chosen Image. This is why Image is referred as blueprint; containers are created based on the instructions of Images.

- `docker run -it [image] sh` : Creates a container and able to interact with that container on the terminal so it enables navigation around container on the host terminal. Containers are created without '-it' will run in the background and the users cant see it nor access it from the terminal.

## Dockerfile Keywords
- Dockerfile uses its set of keywords to define the instructions. There are a few common ones such as `ADD`, `CMD`, `EXPOSE`, `ENTERYPOINT`, `ENV`
- I found a good source on that. Go to this link for more detailed info : [Tutorial Point](https://www.tutorialspoint.com/docker/docker_instruction_commands.htm)


## Usage
1. Clone/Download this repository, day 5.

2. Create a Docker Image from Dockerfile. Command : `docker build -t simple_app .` (dont forget the dot which means use the Dockerfile found in the current directory. 'simple_app' is the name I gave to docker image, it can be anything. Just make sure to remember the name of the image as we will need it later)

3. See if the image is built. Command : `docker image ls` (ls stands for list. so list docker images)

4. Create a container from the image built and run the app inside the container. Command : `docker run -p 4000:80 simple_app` (-p stands for Publish port. It maps my machine's port 4000 to Docker container's port 80. Remember in Dockerfile, it EXPOSE 80 ? It exposes port 80 of docker container to the outside world, here in our case is our own laptop or computer. Always remember it is 'Machine/Outside Port':'Docker Port' structure. 'simple_app' is the name of the image I gave earlier when I was creating the image.)

5. See the app by opening in the browser with the correct URL. There should be a message indicating that the app is running at http://0.0.0.0:80. but the message is from inside the Docker Container, which doesn't know that I have mapped port 80 of that container to 4000 of my machine. So the correct url is http://localhost:4000.

6. Exit from the container. Command : `Ctrl + C` then it prompts you back to terminal. The docker container could be still running even though the user exited out of it.

7. List running docker containers. Command : `docker container ls` It shows a list of running containers with its ID, Image, Status etc.. OR `docker container ls -a` (-a stands for all, it shows all docker containers including the exited ones)

8. Kill/Stop docker containers. Command : `docker container stop [container ID]`

9. Remove unused docker containers to save space in the machine. Command : `docker rm [container ID]`

## Optionals
- Below are the optionals that people can use but not a must in order to use docker

## Sharing Image
- Once the image is created, this can be pushed into a docker repository and can be used remotely. For example, Users can run the container using the image remotely stored at a repository. This is useful as the user does not necessarily need to have the image with them all the time.

## Usage for Sharing Image
1. Login to docker `docker login`

2. Tag the image. Image needs to be tagged to be identified later on in the docker repository. The syntax is `docker tag image username/repository:tag` -->
`docker tag simple_app snowytrees/get_started:part2`
simple_app : name of image
snowytrees : username
repository : name of repository, it can be anything
tag : versioning system for repository. Optional but recommended

3. See the newly created image tagged. `docker image ls` It shows the tagged image newly created along side the old ones.

4. Publish image to the repository. `docker push username/repository:tag` --> `docker push snowytrees/get_started:part2` This pushes the image(get_started:part2) to the [Docker Hub(repository)](https://hub.docker.com/) and type 'username/repository'

5. Run container using the remote image. Once the image is pushed in the remote hub, it can be used anywhere. `docker run -p username/repository:tag` --> `docker run -p snowytrees/get_started:part2` This pulls the image from the repository hub to the local machine if the image is not locally available. And runs the container once the image is available on the local machine.
