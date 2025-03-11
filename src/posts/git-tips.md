---
title: Git使用技巧与工作流程
date: 2024-03-21
author: CodeCargo
tags: [Git, 版本控制, 开发工具]
---

# Git使用技巧与工作流程

## 基础命令速查

### 1. 仓库初始化与配置

```bash
# 初始化新仓库
git init

# 配置用户信息
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"

# 克隆远程仓库
git clone <仓库URL>
```

### 2. 日常操作命令

```bash
# 查看状态
git status

# 添加文件到暂存区
git add <文件名>
git add .  # 添加所有改动

# 提交更改
git commit -m "提交说明"

# 推送到远程
git push origin <分支名>
```

## 分支管理

### 1. 分支操作

```bash
# 创建并切换到新分支
git checkout -b feature/new-feature

# 切换分支
git checkout main

# 合并分支
git merge feature/new-feature
```

### 2. Git Flow工作流

主要分支：
- `main`: 主分支，存放稳定版本
- `develop`: 开发分支，日常开发在此进行

辅助分支：
- `feature/*`: 功能分支
- `hotfix/*`: 紧急修复分支
- `release/*`: 发布分支

## 进阶技巧

### 1. 撤销操作

```bash
# 撤销工作区修改
git checkout -- <文件名>

# 撤销暂存区修改
git reset HEAD <文件名>

# 撤销最后一次提交
git reset --soft HEAD^
```

### 2. 储藏修改

```bash
# 储藏当前修改
git stash

# 查看储藏列表
git stash list

# 应用最近的储藏
git stash pop
```

## 最佳实践

### 1. 提交规范

```
<type>(<scope>): <subject>

<body>

<footer>
```

常用type：
- feat: 新功能
- fix: 修复bug
- docs: 文档更新
- style: 代码格式调整
- refactor: 重构
- test: 测试相关
- chore: 构建过程或辅助工具的变动

### 2. 分支管理策略

- 功能开发使用feature分支
- 版本发布使用release分支
- 线上问题使用hotfix分支
- 定期合并develop到main分支

## 常见问题解决

### 1. 解决冲突

当遇到合并冲突时：
1. 打开冲突文件
2. 寻找冲突标记 `<<<<<<<`, `=======`, `>>>>>>>`
3. 手动解决冲突
4. 提交解决结果

### 2. 清理仓库

```bash
# 清理未跟踪的文件
git clean -fd

# 清理远程已删除的分支
git remote prune origin
```

## 总结

- 养成良好的Git使用习惯
- 遵循团队的工作流程
- 保持提交信息清晰明确
- 定期同步和清理仓库

掌握这些Git技巧将帮助你更好地管理代码，提高团队协作效率！