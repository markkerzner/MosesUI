# MosesUI

This is the UI for Moses. It is a React application that uses FastAPI as a backend.

## Backend

The backend is a FastAPI application that serves the React application and provides an API for the UI to interact with
the Moses server.

You can find the backend code [here](https://github.com/markkerzner/MosesUI).

## Dependencies

- [Ubuntu 20.04](https://ubuntu.com/download/desktop) (Could be any other OS)
- [Docker](https://docs.docker.com/get-docker/)
- [Nodejs](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Notes:

- This setup uses docker to simplify the deployment, while it is possible to run the UI without docker by
  using `npm start`, it is not recommended.
- We will not create an image for the docker, we only use nginx to serve the static files.

## Steps

### Install nodejs

Install nodejs and npm

```bash
sudo apt update
sudo apt install nodejs npm
````

### Install docker

Follow the instructions [here](https://github.com/farshidmh/docker-labs/blob/main/install/install-ubuntu.md)

### Clone the repository

To get the UI code, clone the repository

```bash
git clone https://github.com/markkerzner/MosesUI.git
```

If you simply want to update to the latest version, run

```bash
git pull
```

### Configure the UI

you need to create a file called `.env` in the root directory of the UI, and add the following variables

```bash
sudo nano .env
```

content of the file

```bash
REACT_APP_URL=MOSES_BACKEND_NO_SLASH
```

### Build the UI

After each update, you need to build the UI

```bash
cd MosesUI
npm run build
```

### Run the UI

As we mentioned before, we will not create an image for the docker, we only use nginx to serve the static files.

To run the UI, we need to mount the build folder to the nginx container.

```bash
sudo docker run -d -p 80:80 -v /home/ubuntu/MosesUI/build:/usr/share/nginx/html:ro -v /home/ubuntu/MosesUI/nginx/default.conf:/etc/nginx/conf.d/default.conf:ro  nginx 
```

NOTE:

- This guide assumes that you are cloning the repository to the home directory of the user `ubuntu`.
- You need to change the paths to the build folder and config file based on your setup.

Now you can access the UI at `http://<your-ip>/`

You don't need to restart the container after each update, just run the build command and refresh the page.

## Run by using npm

If you want to run the UI without docker, you can do so by using `npm start`

This is not practical nor recommended for production since it would be very slow and will lock you to port 3000, but it
is useful for development.

```bash
cd MosesUI
npm start
```

## Important notes

- The UI is not secured, you need to use a reverse proxy to secure it.(Cloudflare is highly recommended)
- Make sure to add the backend URL without the trailing slash.
- Do not forget to add the UI URL to the CORS list in the backend.
- Using FQDN is highly recommended.

## Summary

Congratulations! You have successfully deployed the UI for MosesAI.




