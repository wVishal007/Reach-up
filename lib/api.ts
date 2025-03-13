// This file simulates API calls to a backend service
// In a real application, these would make actual API requests

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function analyzePost(post: string, viralityLevel: number) {
  // Simulate API call
  await delay(1500)

  // Generate a simulated response
  const optimizedPost = post.length > 100 ? post : post + " #trending #viral"

  const hashtags = ["tech", "memes", "startup", "programming", "ai"].sort(() => Math.random() - 0.5).slice(0, 3)

  const times = ["9:00 AM - 11:00 AM", "12:00 PM - 2:00 PM", "7:00 PM - 9:00 PM"]

  return {
    originalPost: post,
    optimizedPost,
    engagementScore: Math.floor(60 + viralityLevel * 0.4),
    targetAudience: "Tech enthusiasts, 25-34 years old",
    hashtags,
    bestTime: times[Math.floor(Math.random() * times.length)],
  }
}

export async function generateContentIdeas(topic: string) {
  // Simulate API call
  await delay(1200)

  // Generate simulated content ideas
  const ideas = [
    `10 things nobody tells you about ${topic}`,
    `Why ${topic} is about to change everything`,
    `The truth about ${topic} that experts don't want you to know`,
    `I spent a week trying ${topic} so you don't have to`,
    `${topic} explained in 5 simple steps`,
  ]

  return ideas
}

export async function analyzeHashtag(hashtag: string) {
  // Simulate API call
  await delay(1000)

  // Generate a simulated response
  const popularity = Math.floor(Math.random() * 10) + 1
  const reach = `${Math.floor(Math.random() * 900) + 100}K`

  const relatedHashtagsPool = [
    "tech",
    "startup",
    "programming",
    "webdev",
    "javascript",
    "python",
    "ai",
    "machinelearning",
    "datascience",
    "blockchain",
    "crypto",
    "nft",
    "web3",
    "coding",
    "developer",
    "ux",
    "design",
    "product",
    "saas",
    "founder",
  ]

  // Randomly select 5-8 related hashtags
  const relatedHashtags = relatedHashtagsPool
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.floor(Math.random() * 4) + 5)

  const bestUsedWithPool = ["images", "questions", "statistics", "quotes", "threads"]

  // Randomly select 2-3 content types
  const bestUsedWith = bestUsedWithPool.sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * 2) + 2)

  return {
    hashtag,
    popularity,
    reach,
    relatedHashtags,
    bestUsedWith,
  }
}

