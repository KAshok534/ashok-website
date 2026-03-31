import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPosts() {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.mdx'))

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const filePath = path.join(postsDirectory, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContent)

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      readTime: data.readTime || '',
      tags: data.tags || [],
    }
  })

  return posts.sort((a, b) => {
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date) - new Date(a.date)
  })
}

export function getPost(slug) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)

  return {
    slug,
    frontmatter: {
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      readTime: data.readTime || '',
      tags: data.tags || [],
    },
    content,
  }
}
