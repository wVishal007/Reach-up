"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data - in a real app, this would come from an API
const ageData = [
  { name: "18-24", value: 25 },
  { name: "25-34", value: 40 },
  { name: "35-44", value: 20 },
  { name: "45-54", value: 10 },
  { name: "55+", value: 5 },
]

const locationData = [
  { name: "United States", value: 45 },
  { name: "United Kingdom", value: 15 },
  { name: "Canada", value: 10 },
  { name: "Australia", value: 8 },
  { name: "Germany", value: 7 },
  { name: "Other", value: 15 },
]

const interestData = [
  { name: "Technology", value: 35 },
  { name: "Startups", value: 25 },
  { name: "Crypto", value: 15 },
  { name: "Gaming", value: 12 },
  { name: "Memes", value: 13 },
]

export default function AudienceInsights() {
  return (
    <Tabs defaultValue="demographics" className="space-y-4">
      <TabsList>
        <TabsTrigger value="demographics">Demographics</TabsTrigger>
        <TabsTrigger value="location">Location</TabsTrigger>
        <TabsTrigger value="interests">Interests</TabsTrigger>
      </TabsList>

      <TabsContent value="demographics">
        <Card>
          <CardContent className="pt-6">
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  "18-24": { label: "18-24", color: "hsl(var(--chart-1))" },
                  "25-34": { label: "25-34", color: "hsl(var(--chart-2))" },
                  "35-44": { label: "35-44", color: "hsl(var(--chart-3))" },
                  "45-54": { label: "45-54", color: "hsl(var(--chart-4))" },
                  "55+": { label: "55+", color: "hsl(var(--chart-5))" },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ageData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {ageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`var(--color-${entry.name})`} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="location">
        <Card>
          <CardContent className="pt-6">
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  "United States": { label: "United States", color: "hsl(var(--chart-1))" },
                  "United Kingdom": { label: "United Kingdom", color: "hsl(var(--chart-2))" },
                  Canada: { label: "Canada", color: "hsl(var(--chart-3))" },
                  Australia: { label: "Australia", color: "hsl(var(--chart-4))" },
                  Germany: { label: "Germany", color: "hsl(var(--chart-5))" },
                  Other: { label: "Other", color: "hsl(var(--chart-6))" },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={locationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {locationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`var(--color-${entry.name.replace(/\s+/g, "")})`} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="interests">
        <Card>
          <CardContent className="pt-6">
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  Technology: { label: "Technology", color: "hsl(var(--chart-1))" },
                  Startups: { label: "Startups", color: "hsl(var(--chart-2))" },
                  Crypto: { label: "Crypto", color: "hsl(var(--chart-3))" },
                  Gaming: { label: "Gaming", color: "hsl(var(--chart-4))" },
                  Memes: { label: "Memes", color: "hsl(var(--chart-5))" },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={interestData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {interestData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`var(--color-${entry.name})`} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

