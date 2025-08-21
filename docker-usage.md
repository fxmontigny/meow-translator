# Docker Usage Guide for Meow Translator

## Build the Docker Image

```bash
docker build -t meow-translator:latest .
```

## Run the Container

```bash
# Run on port 8080
docker run -d -p 8080:80 --name meow-translator meow-translator:latest

# Or run on port 3000
docker run -d -p 3000:80 --name meow-translator meow-translator:latest
```

## Access the Application

Once the container is running, open your browser and go to:
- http://localhost:8080 (if you used port 8080)
- http://localhost:3000 (if you used port 3000)

## Container Management

```bash
# Stop the container
docker stop meow-translator

# Start the container
docker start meow-translator

# Remove the container
docker rm meow-translator

# View container logs
docker logs meow-translator

# List running containers
docker ps
```

## Docker Image Information

- **Base Image**: nginx:alpine
- **Application**: Vue.js static files served via Nginx
- **Port**: 80 (inside container)
- **Size**: Optimized with Alpine Linux

The Dockerfile uses the pre-built static files from the `docs` folder, avoiding the need to rebuild the Vue.js application and its problematic dependencies during the Docker build process.
