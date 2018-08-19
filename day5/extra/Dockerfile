# Instructions copied from - https://hub.docker.com/_/python/
FROM python:3.6-onbuild

# python 3.6.6 Installed
# ON build
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# ONBUILD COPY requirements.txt /usr/src/app/
# ONBUILD RUN pip install --no-cache-dir -r requirements.txt
# ONBUILD COPY . /usr/src/app

# tell the port number the container should expose
EXPOSE 5000

# run the command
CMD ["python", "./app.py"]

# docker run -p 8888:5000 -v /Users/jin/projects/30days/day5/extra/:/usr/src/app/ -it flasktf:1 bash
