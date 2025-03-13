import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TrendingTopics from "@/components/trending-topics"
import ContentIdeas from "@/components/content-ideas"
import HashtagAnalyzer from "@/components/hashtag-analyzer"

export default function TrendsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Trending Topics</h1>
        <p className="text-muted-foreground">Discover what's trending and get content ideas</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Hot Topics Right Now</CardTitle>
            <CardDescription>Topics with high engagement in the last 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <TrendingTopics />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Ideas Generator</CardTitle>
            <CardDescription>AI-powered suggestions based on trending topics</CardDescription>
          </CardHeader>
          <CardContent>
            <ContentIdeas />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hashtag Analyzer</CardTitle>
            <CardDescription>Find the best hashtags for your content</CardDescription>
          </CardHeader>
          <CardContent>
            <HashtagAnalyzer />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

