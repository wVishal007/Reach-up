"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart2 } from "lucide-react"

// Sample data - in a real app, this would come from an API
const topPosts = [
  {
    id: "1",
    content:
      'Just found out that 90% of startup founders can\'t explain their own product without using the word "disruptive" 💀',
    date: "2023-01-15",
    likes: 2453,
    shares: 1289,
    comments: 342,
    viralScore: 98,
  },
  {
    id: "2",
    content: 'Unpopular opinion: Most "AI-powered" products are just if-else statements in a trench coat',
    date: "2023-01-10",
    likes: 1876,
    shares: 945,
    comments: 231,
    viralScore: 87,
  },
  {
    id: "3",
    content: "They don't want you to know this but you can solve 90% of coding problems by turning it off and on again",
    date: "2023-01-05",
    likes: 1543,
    shares: 876,
    comments: 198,
    viralScore: 82,
  },
  {
    id: "4",
    content:
      "10 signs you're becoming a tech bro: 1. You say \"let's circle back\" unironically 2-10. You own multiple Patagonia vests",
    date: "2023-01-01",
    likes: 1298,
    shares: 654,
    comments: 187,
    viralScore: 75,
  },
  {
    id: "5",
    content: "Web3 explained: It's like Web2 but with more screenshots of monkeys that cost as much as a house",
    date: "2022-12-28",
    likes: 1187,
    shares: 598,
    comments: 165,
    viralScore: 72,
  },
]

export default function TopPostsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Content</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Likes</TableHead>
            <TableHead>Shares</TableHead>
            <TableHead>Comments</TableHead>
            <TableHead>Viral Score</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium">{post.content}</TableCell>
              <TableCell>{post.date}</TableCell>
              <TableCell>{post.likes.toLocaleString()}</TableCell>
              <TableCell>{post.shares.toLocaleString()}</TableCell>
              <TableCell>{post.comments.toLocaleString()}</TableCell>
              <TableCell>
                <Badge variant={post.viralScore > 90 ? "default" : "secondary"} className="font-medium">
                  {post.viralScore}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <BarChart2 className="h-4 w-4" />
                  <span className="sr-only">View analytics</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

