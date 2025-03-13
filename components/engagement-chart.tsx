"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data - in a real app, this would come from an API
const data = [
  { date: "01/01", likes: 400, shares: 240, comments: 180 },
  { date: "01/02", likes: 300, shares: 139, comments: 221 },
  { date: "01/03", likes: 200, shares: 980, comments: 290 },
  { date: "01/04", likes: 278, shares: 390, comments: 200 },
  { date: "01/05", likes: 189, shares: 480, comments: 181 },
  { date: "01/06", likes: 239, shares: 380, comments: 250 },
  { date: "01/07", likes: 349, shares: 430, comments: 210 },
  { date: "01/08", likes: 568, shares: 590, comments: 350 },
  { date: "01/09", likes: 467, shares: 430, comments: 280 },
  { date: "01/10", likes: 359, shares: 280, comments: 190 },
  { date: "01/11", likes: 420, shares: 310, comments: 220 },
  { date: "01/12", likes: 580, shares: 490, comments: 310 },
  { date: "01/13", likes: 460, shares: 380, comments: 270 },
  { date: "01/14", likes: 390, shares: 320, comments: 230 },
]

export default function EngagementChart() {
  return (
    <ChartContainer
      config={{
        likes: {
          label: "Likes",
          color: "hsl(var(--chart-1))",
        },
        shares: {
          label: "Shares",
          color: "hsl(var(--chart-2))",
        },
        comments: {
          label: "Comments",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="date" className="text-sm text-muted-foreground" />
          <YAxis className="text-sm text-muted-foreground" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Line type="monotone" dataKey="likes" stroke="var(--color-likes)" strokeWidth={2} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="shares" stroke="var(--color-shares)" strokeWidth={2} />
          <Line type="monotone" dataKey="comments" stroke="var(--color-comments)" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

