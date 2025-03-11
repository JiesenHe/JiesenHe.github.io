---
title: Docker容器化技术入门指南
date: 2024-03-22
author: CodeCargo
tags: [Docker, 容器化, DevOps]
---

# Docker容器化技术入门指南

## Docker基础概念

### 1. 什么是Docker？

Docker是一个开源的容器化平台，它可以让开发者将应用程序和依赖打包到一个可移植的容器中，实现"一次构建，到处运行"的目标。

### 2. 核心概念

- **镜像（Image）**：应用程序和依赖的只读模板
- **容器（Container）**：镜像的运行实例
- **仓库（Repository）**：存储和分发镜像的服务

## 基本操作指南

### 1. 安装Docker

```bash
# Ubuntu系统安装
sudo apt update
sudo apt install docker.io

# 启动Docker服务
sudo systemctl start docker
sudo systemctl enable docker
```

### 2. 常用命令

```bash
# 拉取镜像
docker pull nginx:latest

# 运行容器
docker run -d -p 80:80 nginx

# 查看运行中的容器
docker ps

# 停止容器
docker stop <容器ID>

# 删除容器
docker rm <容器ID>
```

## Dockerfile编写

### 1. 基本结构

```dockerfile
# 使用官方Node.js镜像作为基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制源代码
COPY . .

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["npm", "start"]
```

### 2. 常用指令说明

- `FROM`：指定基础镜像
- `WORKDIR`：设置工作目录
- `COPY`：复制文件
- `RUN`：执行命令
- `EXPOSE`：声明端口
- `CMD`：容器启动命令

## Docker Compose使用

### 1. 多容器应用编排

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
  db:
    image: mongo:latest
    volumes:
      - db-data:/data/db

volumes:
  db-data:
```

### 2. 常用命令

```bash
# 启动服务
docker-compose up -d

# 停止服务
docker-compose down

# 查看日志
docker-compose logs
```

## 最佳实践

### 1. 镜像优化

- 使用多阶段构建
- 合并RUN命令减少层数
- 及时清理不需要的文件

```dockerfile
# 多阶段构建示例
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 2. 安全性建议

- 使用非root用户运行应用
- 定期更新基础镜像
- 扫描镜像漏洞
- 使用`.dockerignore`文件

## 常见问题处理

### 1. 容器无法启动

检查步骤：
1. 查看容器日志：`docker logs <容器ID>`
2. 检查端口占用：`docker port <容器ID>`
3. 验证配置文件正确性

### 2. 性能优化

- 合理设置容器资源限制
- 使用数据卷而非容器存储
- 启用日志轮转

```bash
# 设置容器资源限制
docker run -d \
  --name myapp \
  --memory="512m" \
  --cpus="0.5" \
  myapp:latest
```

## 总结

- Docker简化了应用部署流程
- 容器化提高了环境一致性
- 合理使用Docker工具链
- 注意安全性和性能优化

掌握Docker技术将帮助你更好地管理应用部署和运维工作！