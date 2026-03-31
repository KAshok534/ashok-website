import { getPosts } from '@/lib/posts'

export default function sitemap() {
  let posts = []
  try {
    posts = getPosts()
  } catch {
    posts = []
  }

  const postUrls = posts.map((post) => ({
    url: `https://ashokkunchala.com/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: 'https://ashokkunchala.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://ashokkunchala.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...postUrls,
  ]
}
