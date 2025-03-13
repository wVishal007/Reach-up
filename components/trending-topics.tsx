"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Flame, ArrowUp, ArrowRight } from "lucide-react"

// Sample data - in a real app, this would come from an API
const trendingData = {
  tech: [
    { id: 1, topic: "AI Ethics Debate", growth: "+245%", posts: "12.5K", sentiment: "Mixed" },
    { id: 2, topic: "Tech Layoffs", growth: "+180%", posts: "8.7K", sentiment: "Negative" },
    { id: 3, topic: "GPT-5 Rumors", growth: "+156%", posts: "7.2K", sentiment: "Positive" },
    { id: 4, topic: "Web3 Failures", growth: "+120%", posts: "5.4K", sentiment: "Negative" },
    { id: 5, topic: "Apple Vision Pro", growth: "+95%", posts: "4.8K", sentiment: "Positive" },
  ],
  memes: [
    { id: 1, topic: "Startup Founder Stereotypes", growth: "+320%", posts: "18.3K", sentiment: "Humorous" },
    { id: 2, topic: "Programming Language Wars", growth: "+210%", posts: "11.2K", sentiment: "Humorous" },
    { id: 3, topic: "AI Generated Art Fails", growth: "+175%", posts: "9.6K", sentiment: "Humorous" },
    { id: 4, topic: "Tech Conference Bingo", growth: "+130%", posts: "6.8K", sentiment: "Humorous" },
    { id: 5, topic: "Crypto Bros", growth: "+115%", posts: "5.9K", sentiment: "Humorous" },
  ],
  business: [
    { id: 1, topic: "Remote Work Debates", growth: "+190%", posts: "10.1K", sentiment: "Mixed" },
    { id: 2, topic: "Startup Funding Winter", growth: "+165%", posts: "8.9K", sentiment: "Negative" },
    { id: 3, topic: "Tech Monopoly Concerns", growth: "+140%", posts: "7.5K", sentiment: "Negative" },
    { id: 4, topic: "AI Productivity Tools", growth: "+125%", posts: "6.7K", sentiment: "Positive" },
    { id: 5, topic: "Four-Day Workweek", growth: "+110%", posts: "5.8K", sentiment: "Positive" },
  ],
}

export default function TrendingTopics() {
  const [category, setCategory] = useState("tech")

  return (
    <div className="space-y-4">
      <Tabs defaultValue="tech" onValueChange={setCategory}>
        <TabsList>
          <TabsTrigger value="tech">Tech</TabsTrigger>
          <TabsTrigger value="memes">Memes</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
        </TabsList>

        <TabsContent value="tech" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trendingData.tech.map((item) => (
              <TrendCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="memes" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trendingData.memes.map((item) => (
              <TrendCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="business" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trendingData.business.map((item) => (
              <TrendCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TrendCard({ item }: { item: any }) {
  return (
    <Card className="p-4 flex flex-col">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-medium">{item.topic}</h3>
        <Badge
          variant={
            item.sentiment === "Positive"
              ? "default"
              : item.sentiment === "Negative"
                ? "destructive"
                : item.sentiment === "Humorous"
                  ? "secondary"
                  : "outline"
          }
        >
          {item.sentiment}
        </Badge>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
        <Flame className="h-4 w-4 text-orange-500" />
        <span>{item.posts} posts</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-green-600 mb-4">
        <ArrowUp className="h-4 w-4" />
        <span>{item.growth} growth</span>
      </div>
      <div className="mt-auto">
        <Button variant="ghost" size="sm" className="w-full flex items-center justify-center gap-1">
          Create Post <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}

