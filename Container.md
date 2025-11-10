# Docker Containers Guide 🐳

This document provides a comprehensive overview of Docker containers and hands-on practice routines for our projects.

![Docker Containers](https://github.com/gaurav0973/docker/blob/main/images/docker_containers.png)

## 🐳 📘 Docker Container Management Commands (Latest Version – v25+)

### 🧱 1️⃣ List Containers

| Command                | Description                              | Example                |
| ---------------------- | ---------------------------------------- | ---------------------- |
| docker container ls    | Lists running containers                 | docker container ls    |
| docker container ls -a | Lists all containers (running + stopped) | docker container ls -a |

### 🚀 2️⃣ Run Containers

| Command                                              | Description                           | Example                                        |
| ---------------------------------------------------- | ------------------------------------- | ---------------------------------------------- |
| docker container run \<image>                        | Creates & runs a new container        | docker container run ubuntu                    |
| docker container run -d \<image>                     | Run in detached mode (background)     | docker container run -d nginx                  |
| docker container run -it \<image>                    | Run in interactive terminal           | docker container run -it ubuntu                |
| docker container run --name \<n> \<image>            | Assign a custom name                  | docker container run --name myweb nginx        |
| docker container run -p \<host:container>            | Publish port from container to host   | docker container run -d -p 8080:80 nginx       |
| docker container run -v \<host_dir>:\<container_dir> | Mount volume between host & container | docker container run -v /data:/app/data ubuntu |
| docker container run --env \<key=value>              | Set environment variables             | docker container run --env APP_MODE=prod myapp |

### ⚙️ 3️⃣ Container Lifecycle Control

| Command                             | Description                         | Example                        |
| ----------------------------------- | ----------------------------------- | ------------------------------ |
| docker container start \<name/id>   | Start an existing container         | docker container start myweb   |
| docker container stop \<name/id>    | Gracefully stop a running container | docker container stop myweb    |
| docker container restart \<name/id> | Restart a container                 | docker container restart myweb |
| docker container pause \<name/id>   | Temporarily pause processes inside  | docker container pause myweb   |
| docker container unpause \<name/id> | Resume a paused container           | docker container unpause myweb |
| docker container kill \<name/id>    | Force-stop immediately              | docker container kill myweb    |

### 🧭 4️⃣ Inspect, View, and Monitor

| Command                             | Description                         | Example                        |
| ----------------------------------- | ----------------------------------- | ------------------------------ |
| docker container inspect \<name/id> | Detailed container configuration    | docker container inspect myweb |
| docker container logs \<name/id>    | View container logs                 | docker container logs myweb    |
| docker container logs -f \<name/id> | Follow (stream) live logs           | docker container logs -f myweb |
| docker container top \<name/id>     | Show running processes in container | docker container top myweb     |
| docker container stats              | Live CPU & memory usage             | docker container stats         |
| docker container port \<name/id>    | Show port mappings                  | docker container port myweb    |
| docker container diff \<name/id>    | Show file changes since start       | docker container diff myweb    |

### 💻 5️⃣ Execute Commands in Running Containers

| Command                                   | Description                                 | Example                                              |
| ----------------------------------------- | ------------------------------------------- | ---------------------------------------------------- |
| docker container exec -it \<name/id> bash | Open interactive shell                      | docker container exec -it myweb bash                 |
| docker container exec \<name/id> \<cmd>   | Run a single command                        | docker container exec myweb ls /usr/share/nginx/html |
| docker container attach \<name/id>        | Attach your terminal to a running container | docker container attach myweb                        |

### 📦 6️⃣ Copy Files Between Host and Container

| Command                                  | Description                     | Example                                                       |
| ---------------------------------------- | ------------------------------- | ------------------------------------------------------------- |
| docker container cp \<src> \<dest>       | Copy files to or from container | docker container cp myweb:/etc/nginx/nginx.conf ./nginx.conf  |
| docker container cp ./index.html \<dest> | Copy file to container          | docker container cp ./index.html myweb:/usr/share/nginx/html/ |

### 🧹 7️⃣ Remove / Clean Containers

| Command                           | Description                    | Example                      |
| --------------------------------- | ------------------------------ | ---------------------------- |
| docker container rm \<name/id>    | Remove a container             | docker container rm myweb    |
| docker container rm -f \<name/id> | Force-remove running container | docker container rm -f myweb |
| docker container prune            | Remove all stopped containers  | docker container prune       |
| docker container prune -f         | Same (no confirmation prompt)  | docker container prune -f    |

### 🧾 8️⃣ Export / Import Containers

| Command                                        | Description                        | Example                                         |
| ---------------------------------------------- | ---------------------------------- | ----------------------------------------------- |
| docker container export \<name/id> -o file.tar | Export container filesystem        | docker container export myweb -o web_backup.tar |
| docker import file.tar \<new_image_name>       | Create new image from exported tar | docker import web_backup.tar myweb:restored     |

### 🧰 9️⃣ Rename & Update Containers

| Command                                         | Description           | Example                                             |
| ----------------------------------------------- | --------------------- | --------------------------------------------------- |
| docker container rename \<old_name> \<new_name> | Rename container      | docker container rename myweb nginx-prod            |
| docker container update --restart=always \<n>   | Change restart policy | docker container update --restart=always nginx-prod |

### 🧠 🔟 Check Container Health and Info

| Command                                                           | Description                   | Example                                                                 |
| ----------------------------------------------------------------- | ----------------------------- | ----------------------------------------------------------------------- |
| docker container inspect --format '{{.State.Health.Status}}' \<n> | Check container health status | docker container inspect --format '{{.State.Health.Status}}' nginx-prod |
| docker container ls --filter status=running                       | List only running containers  | docker container ls --filter status=running                             |
| docker container stats --no-stream                                | Snapshot of resource usage    | docker container stats --no-stream                                      |

## ⚡ 🔥 Top 10 Most Frequently Used Commands (Dev + Interview)

| #   | Command                                             | Purpose                  |
| --- | --------------------------------------------------- | ------------------------ |
| 1️⃣  | docker container run -d --name web -p 8080:80 nginx | Create + run container   |
| 2️⃣  | docker container ls -a                              | List all containers      |
| 3️⃣  | docker container logs -f web                        | Stream logs              |
| 4️⃣  | docker container exec -it web bash                  | Access inside container  |
| 5️⃣  | docker container stop web                           | Stop container           |
| 6️⃣  | docker container start web                          | Start container          |
| 7️⃣  | docker container rm web                             | Remove container         |
| 8️⃣  | docker container prune -f                           | Clean stopped containers |
| 9️⃣  | docker container stats                              | Monitor CPU/RAM          |
| 🔟  | docker container inspect web                        | Check detailed metadata  |

## 💪 Mini Practice Routine (2025 Syntax)

Do this 5-minute drill daily to lock it in muscle memory 💥

### 1️⃣ Run a container

```bash
docker container run -d --name mynginx -p 8080:80 nginx
```

### 2️⃣ View it

```bash
docker container ls
```

### 3️⃣ Access shell

```bash
docker container exec -it mynginx bash
```

### 4️⃣ View logs

```bash
docker container logs -f mynginx
```

### 5️⃣ Copy a file

```bash
docker container cp mynginx:/etc/nginx/nginx.conf ./nginx.conf
```

### 6️⃣ Stop and restart

```bash
docker container stop mynginx
docker container start mynginx
```

### 7️⃣ Remove it

```bash
docker container rm -f mynginx
```

### 8️⃣ Clean up

```bash
docker container prune -f
```

## ✅ Interview One-Liner Summary:

"In the latest Docker CLI, container management is handled via docker container subcommands like run, ls, exec, logs, stop, and rm. These cover the full container lifecycle — from creation and monitoring to cleanup."
