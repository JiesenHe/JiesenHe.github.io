<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'
import fm from 'markdown-it-front-matter'

const route = useRoute()
const post = ref({})

const md = new MarkdownIt()
md.use(fm, (metadata) => {
  const lines = metadata.split('\n')
  lines.forEach(line => {
    const [key, value] = line.split(': ')
    if (key && value) {
      post.value[key.trim()] = value.trim()
    }
  })
})

onMounted(async () => {
  const postId = route.params.id
  const postModule = await import(`../posts/${postId}.md?raw`)
  const content = postModule.default
  const body = content.split('---').slice(2).join('---')
  if (!post.value.title) {
    post.value.title = '无标题'
    post.value.date = '未知日期'
    post.value.author = '匿名'
  }
  post.value = {
    ...post.value,
    content: md.render(body)
  }
})
</script>

<template>
  <div class="post-page">
    <div class="post-container">
      <article class="post-content">
        <header class="post-header">
          <h1>{{ post.title }}</h1>
          <div class="post-meta">
            <span>📅 {{ post.date }}</span>
            <span>✍️ {{ post.author }}</span>
          </div>
        </header>
        <div class="markdown-body" v-html="post.content"></div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.post-page {
  min-height: 100vh;
  width: 100%;
  padding: clamp(1rem, 4vw, 2rem);
  background: linear-gradient(135deg, #89f7fe, #66a6ff);
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.post-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  border-radius: clamp(10px, 2vw, 15px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  padding: clamp(1.5rem, 5vw, 3rem);
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.post-header {
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(102, 166, 255, 0.2);
}

.post-header h1 {
  color: #2c3e50;
  font-size: clamp(1.8em, 5vw, 2.5em);
  margin-bottom: clamp(0.8rem, 2vw, 1rem);
  line-height: 1.3;
  word-wrap: break-word;
}

.post-meta {
  color: #666;
  font-size: 1em;
}

.post-meta span {
  margin: 0 10px;
  display: inline-block;
}

.markdown-body {
  line-height: 1.8;
  color: #2c3e50;
  font-size: clamp(1em, 1.5vw, 1.2em);
  padding: 0 clamp(0.5rem, 2vw, 2rem);
  max-width: 100%;
  margin: 0 auto;
}

.markdown-body :deep(h1),
.markdown-body :deep(h2) {
  margin-top: 2em;
  margin-bottom: 1em;
  color: #2c3e50;
}

.markdown-body :deep(h3) {
  margin-top: 1.5em;
  margin-bottom: 1em;
  color: #34495e;
}

.markdown-body :deep(p) {
  margin-bottom: 1.2em;
}

.markdown-body :deep(code) {
  background-color: #f8f9fa;
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
}

.markdown-body :deep(pre) {
  background-color: #f8f9fa;
  padding: clamp(1em, 3vw, 1.5em);
  border-radius: clamp(4px, 1vw, 8px);
  overflow-x: auto;
  margin: clamp(1em, 3vw, 1.5em) 0;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
  font-size: clamp(0.9em, 1.5vw, 1em);
}

.markdown-body :deep(blockquote) {
  border-left: 4px solid #66a6ff;
  padding: 1em 1.5em;
  margin: 1.5em 0;
  color: #5c6b7f;
  background-color: rgba(102, 166, 255, 0.1);
  border-radius: 0 8px 8px 0;
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  padding-left: 1.5em;
  margin: 1em 0;
}

.markdown-body :deep(li) {
  margin: 0.5em 0;
}

@media (max-width: 768px) {
  .post-page {
    padding: 1rem;
  }

  .post-container {
    padding: 2rem;
  }
  
  .post-header h1 {
    font-size: 2em;
  }

  .markdown-body {
    font-size: 1em;
  }
}
</style>