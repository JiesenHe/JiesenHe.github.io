<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const posts = ref([])
const router = useRouter()

onMounted(async () => {
  const modules = import.meta.glob('../posts/*.md', { as: 'raw', eager: true })
  posts.value = Object.entries(modules).map(([path, content]) => {
    const frontMatter = content.split('---')[1]
    const metadata = {}
    frontMatter.split('\n').forEach(line => {
      const [key, value] = line.split(': ')
      if (key && value) {
        metadata[key.trim()] = value.trim()
      }
    })
    return {
      id: path.split('/').pop().replace('.md', ''),
      ...metadata
    }
  })
})

const goToPost = (id) => {
  router.push(`/post/${id}`)
}
</script>

<template>
  <div class="blog-container">
    <header>
      <h1>「Hope for the best, prepare for the worst.」</h1>
    </header>
    <main>
      <div class="post-list">
        <article v-for="post in posts" :key="post.id" class="post-card" @click="goToPost(post.id)">
          <h2>{{ post.title }}</h2>
          <div class="post-meta">
            <span>{{ post.date }}</span>
            <span>作者: {{ post.author }}</span>
          </div>
        </article>
      </div>
    </main>
  </div>
</template>

<style scoped>
.blog-container {
  width: 100%;
  margin: 0 auto;
  padding: clamp(16px, 5vw, 60px);
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
}

header {
  text-align: center;
  margin-bottom: clamp(20px, 5vw, 60px);
  padding: clamp(1rem, 3vw, 3rem) 0;
}

header h1 {
  width: 100%;
  margin: 0 auto;
  font-size: clamp(1.5rem, 3vw, 3rem);
  color: #2c3e50;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: 1px;
}

.post-list {
  display: grid;
  gap: clamp(20px, 3vw, 40px);
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 350px), 1fr));
  width: 100%;
}

.post-card {
  padding: clamp(20px, 4vw, 40px);
  border: none;
  border-radius: clamp(12px, 2vw, 20px);
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
}

.post-card h2 {
  color: #2c3e50;
  margin-bottom: 0.8rem;
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
}

.post-meta {
  margin-top: clamp(10px, 2vw, 15px);
  color: #666;
  font-size: clamp(0.9em, 2vw, 1em);
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.post-meta span {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .blog-container {
    padding: clamp(15px, 3vw, 25px);
  }

  .post-list {
    grid-template-columns: 1fr;
  }
}
</style>