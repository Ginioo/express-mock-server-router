## Mock Server Docker

#### Get Started to build up your local mock server
Change to `mock-server` directory.
```
cd mock-server
```
Build mock server base image
```
docker build ./config/docker/baseImage -t ms-alpine
```
Build mock server service image
```
docker build ./config/docker -t ms-service
```
Run a mock server on port 3001
```
 docker run -itd -v $(pwd)/data:/root/mock-server/data -p 3001:3001 --name local-ms-service ms-service 
```