# day5 : Demystifying Docker for dummies

- I have been using docker containers for running some apps time to time but it never stuck in my head and had to read about it and find its commands. I decided to have a proper session with Docker, de-structuring its components to understand it fully.




## Keywords
- Containers: Virtual Environment more like a sandbox where apps and its dependencies are installed to run
- Images : Blueprint. (where containers are created from)
- Dockerfile : A list of instructions that defines what goes inside(environment of) the container. Such as which ports to map to (the outside world), which files to be copied in the container. This makes sure that the app built inside the container based on that Dockerfile behaves the same wherever it runs.
- Docker Daemon : OS Background service in the host that handles building and running docker containers.
- Docker Client : Terminal tool that the user uses to talk to Daemon.
- Docker Hub : A storage of Docker images. User can host their docker image or can use existing docker images from the Docker Hub by 'pulling' it.




## commands
- "docker build (-t nameOfImage) ." : Creates an image. Using -t, tag allows users to give a name to the image for convenience.

- "docker run <image ID or Repository Name>" : Creates a container based on the chosen Image. This is why Image is referred as blueprint; containers are created based on the instructions of Images.

- "docker run -it <image> sh" : Creates a container and able to interact with that container on the terminal so it enables navigation around container on the host terminal. Containers are created without '-it' will run in the background and the users cant see it nor access it from the terminal.



## Usage
1. Clone/Download this repository, day 5.

2. Create a Docker Image from Dockerfile. Command : 'docker build -t simple_app .' (dont forget the dot which means use the Dockerfile found in the current directory. 'simple_app' is the name I gave to docker image, it can be anything. Just make sure to remember the name of the image as we will need it later)

3. See if the image is built. Command : 'docker image ls'. (ls stands for list. so list docker images)

4. Create a container from the image built and run the app inside the container. Command : 'docker run -p 4000:80 simple_app' (-p stands for Publish port. It maps my machine's port 4000 to Docker container's port 80. Remember in Dockerfile, it EXPOSE 80 ? It exposes port 80 of docker container to the outside world, here in our case is our own laptop or computer. Always remember it is 'Machine/Outside Port':'Docker Port' structure. 'simpleApp' is the name of the image I gave earlier when I was creating the image.)

5. See the app by opening in the browser with the correct URL. There should be a message indicating that the app is running at http://0.0.0.0:80. but the message is from inside the Docker Container, which doesn't know that I have mapped port 80 of that container to 4000 of my machine. So the correct url is http://localhost:4000.

6. Exit from the container. Command : Ctrl + C. then it prompts you back to terminal. The docker container could be still running even though the user existed out of it.

7. List running docker containers. Command : 'docker container ls'. It shows a list of running containers with its ID, Image, Status etc.. OR 'docker container ls -a' (-a stands for all, it shows all docker containers including the exited ones)

8. Kill/Stop docker containers. Command : 'docker container stop <container ID>'

9. Remove unused docker containers to save space in the machine. Command : 'docker rm [containder ID]'
