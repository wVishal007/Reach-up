"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Flame, Sparkles, Zap, Clock, Hash, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { analyzePost } from "@/lib/api"

export default function PostCreator() {
  const [post, setPost] = useState("")
  const [viralityLevel, setViralityLevel] = useState([50])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("write")

  const handleAnalyze = async () => {
    if (!post.trim()) return

    setIsAnalyzing(true)
    try {
      const data = await analyzePost(post, viralityLevel[0])
      setResults(data)
      setActiveTab("results")
    } catch (error) {
      console.error("Error analyzing post:", error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="write">Write</TabsTrigger>
          <TabsTrigger value="results" disabled={!results}>
            Results
          </TabsTrigger>
        </TabsList>

        <TabsContent value="write" className="space-y-4">
          <Textarea
            placeholder="Type your post here..."
            className="min-h-[150px] resize-none"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="virality">Virality Level</Label>
              <span className="text-sm text-muted-foreground">{viralityLevel[0]}%</span>
            </div>
            <Slider id="virality" min={0} max={100} step={1} value={viralityLevel} onValueChange={setViralityLevel} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Subtle</span>
              <span>Balanced</span>
              <span>Extreme</span>
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={handleAnalyze} disabled={!post.trim() || isAnalyzing} className="gap-2">
              {isAnalyzing ? (
                <>
                  Analyzing
                  <Sparkles className="h-4 w-4 animate-pulse" />
                </>
              ) : (
                <>
                  Analyze Post
                  <Zap className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="results" className="space-y-4">
          {results && (
            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-muted/50">
                <h3 className="font-medium mb-2">Optimized Post</h3>
                <p className="text-sm">{results.optimizedPost}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Flame className="h-4 w-4 text-orange-500" />
                    <h4 className="font-medium text-sm">Engagement Score</h4>
                  </div>
                  <p className="text-2xl font-bold">{results.engagementScore}/100</p>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4 text-blue-500" />
                    <h4 className="font-medium text-sm">Target Audience</h4>
                  </div>
                  <p className="text-sm">{results.targetAudience}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Hash className="h-4 w-4 text-purple-500" />
                  <h4 className="font-medium text-sm">Recommended Hashtags</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {results.hashtags.map((tag: string, i: number) => (
                    <Badge key={i} variant="secondary">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-500" />
                  <h4 className="font-medium text-sm">Best Posting Time</h4>
                </div>
                <p className="text-sm">{results.bestTime}</p>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("write")}>
                  Edit Post
                </Button>
                <Button>Use This Version</Button>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

