"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Copy, ThumbsUp, ThumbsDown } from "lucide-react"
import { generateContentIdeas } from "@/lib/api"

export default function ContentIdeas() {
  const [topic, setTopic] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [ideas, setIdeas] = useState<string[]>([])

  const handleGenerate = async () => {
    if (!topic.trim()) return

    setIsGenerating(true)
    try {
      const generatedIdeas = await generateContentIdeas(topic)
      setIdeas(generatedIdeas)
    } catch (error) {
      console.error("Error generating ideas:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input placeholder="Enter a topic..." value={topic} onChange={(e) => setTopic(e.target.value)} />
        <Button onClick={handleGenerate} disabled={!topic.trim() || isGenerating}>
          {isGenerating ? "Generating..." : "Generate"}
          {!isGenerating && <Sparkles className="ml-2 h-4 w-4" />}
        </Button>
      </div>

      {ideas.length > 0 && (
        <div className="space-y-3 mt-4">
          <h3 className="text-sm font-medium">Generated Ideas:</h3>
          {ideas.map((idea, index) => (
            <div key={index} className="p-3 border rounded-md bg-muted/30">
              <p className="text-sm mb-2">{idea}</p>
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ThumbsDown className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleCopy(idea)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

