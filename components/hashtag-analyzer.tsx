"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Users, BarChart } from "lucide-react"
import { analyzeHashtag } from "@/lib/api"

export default function HashtagAnalyzer() {
  const [hashtag, setHashtag] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleAnalyze = async () => {
    if (!hashtag.trim()) return

    setIsAnalyzing(true)
    try {
      const data = await analyzeHashtag(hashtag)
      setResults(data)
    } catch (error) {
      console.error("Error analyzing hashtag:", error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="Enter a hashtag..."
          value={hashtag}
          onChange={(e) => setHashtag(e.target.value.replace(/\s+/g, ""))}
          className="font-mono"
        />
        <Button onClick={handleAnalyze} disabled={!hashtag.trim() || isAnalyzing}>
          {isAnalyzing ? "Analyzing..." : "Analyze"}
          {!isAnalyzing && <Search className="ml-2 h-4 w-4" />}
        </Button>
      </div>

      {results && (
        <div className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 border rounded-md">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-blue-500" />
                <h4 className="font-medium text-sm">Popularity</h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{results.popularity}/10</span>
                <Badge variant={results.popularity > 7 ? "default" : "secondary"}>
                  {results.popularity > 7 ? "Trending" : "Moderate"}
                </Badge>
              </div>
            </div>

            <div className="p-3 border rounded-md">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-green-500" />
                <h4 className="font-medium text-sm">Reach</h4>
              </div>
              <p className="text-2xl font-bold">{results.reach}</p>
              <p className="text-xs text-muted-foreground">Potential accounts reached</p>
            </div>
          </div>

          <div className="p-3 border rounded-md">
            <div className="flex items-center gap-2 mb-2">
              <BarChart className="h-4 w-4 text-purple-500" />
              <h4 className="font-medium text-sm">Related Hashtags</h4>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {results.relatedHashtags.map((tag: string, i: number) => (
                <Badge key={i} variant="outline" className="cursor-pointer hover:bg-secondary">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>Best used with: {results.bestUsedWith.join(", ")}</p>
          </div>
        </div>
      )}
    </div>
  )
}

