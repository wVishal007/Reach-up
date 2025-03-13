import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flame, TrendingUp, Clock } from "lucide-react"

export default function RecommendationPanel() {
  // This would normally come from an API
  const trendingTopics = [
    { name: "AI memes", score: 98 },
    { name: "Tech fails", score: 87 },
    { name: "Startup culture", score: 82 },
    { name: "Programming humor", score: 79 },
    { name: "Web3 jokes", score: 75 },
  ]

  const bestTimes = [
    { day: "Monday", time: "12:00 PM - 1:00 PM" },
    { day: "Wednesday", time: "3:00 PM - 5:00 PM" },
    { day: "Friday", time: "7:00 PM - 9:00 PM" },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="h-4 w-4 text-primary" />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {trendingTopics.map((topic, i) => (
              <li key={i} className="flex justify-between items-center">
                <span className="text-sm">{topic.name}</span>
                <Badge variant={i === 0 ? "default" : "secondary"} className="text-xs">
                  {topic.score}
                </Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Clock className="h-4 w-4 text-primary" />
            Best Posting Times
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {bestTimes.map((time, i) => (
              <li key={i} className="text-sm">
                <span className="font-medium">{time.day}:</span> {time.time}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Flame className="h-4 w-4 text-primary" />
            Viral Formulas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>• Start with a controversial opinion</li>
            <li>• Use the "They don't want you to know" format</li>
            <li>• Create a numbered list of unexpected facts</li>
            <li>• Share a "hot take" on a trending topic</li>
            <li>• Use the "Unpopular opinion:" format</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

