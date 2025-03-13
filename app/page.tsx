import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PostCreator from "@/components/post-creator"
import RecommendationPanel from "@/components/recommendation-panel"

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Craft Viral Content with AI</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our AI analyzes trending topics and engagement patterns to help you create content that goes viral.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Create Your Post</CardTitle>
              <CardDescription>
                Enter your post idea and our AI will help optimize it for maximum engagement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PostCreator />
            </CardContent>
          </Card>
        </div>
        <div>
          <RecommendationPanel />
        </div>
      </div>
    </div>
  )
}

