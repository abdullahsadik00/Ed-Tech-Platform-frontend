import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Bell, Clock, AlertTriangle, BookOpen } from "lucide-react"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"

export function Overview() {
  const deadlines = [
    { title: "Math Assignment", due: "Tomorrow", priority: "high" },
    { title: "Science Project", due: "3 days", priority: "medium" }
  ]

  const announcements = [
    "New course material uploaded for Math 101",
    "System maintenance scheduled for Friday night"
  ]

  const recommendations = ["Physics 101", "Computer Science Basics"]

  return (
    <div className="space-y-6">
      <BentoGrid className="max-w-6xl mx-auto">
        {/* Upcoming Deadlines */}
        <BentoGridItem
          title="Upcoming Deadlinessdsd"
          header={<Clock className="h-5 w-5" />}
          className="md:col-span-2"
        > Upcpmming deadlinesw3232
          <div className="grid gap-4">
            {deadlines.map((item, index) => (
              <Card key={index} className={item.priority === "high" ? "border-red-200" : "border-yellow-200"}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>{item.title}</CardTitle>
                  {item.priority === "high" ? (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">High Priority</span>
                  ) : (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Medium Priority</span>
                  )}
                </CardHeader>
                <CardContent>
                  <p>Due: {item.due}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </BentoGridItem>

        {/* Recent Announcements */}
        <BentoGridItem
          title="Announcements"
          header={<Bell className="h-5 w-5" />}
        >
          <div className="space-y-3">
            {announcements.map((item, index) => (
              <Alert key={index} variant="default">
                <AlertDescription>{item}</AlertDescription>
              </Alert>
            ))}
          </div>
        </BentoGridItem>

        {/* System Alerts */}
        <BentoGridItem
          title="System Status"
          header={<AlertTriangle className="h-5 w-5" />}
          className="bg-red-50 dark:bg-red-900/20"
        >
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Scheduled maintenance this Friday from 10PM to 2AM
            </AlertDescription>
          </Alert>
        </BentoGridItem>

        {/* Course Recommendations */}
        <BentoGridItem
          title="Recommended Courses"
          header={<BookOpen className="h-5 w-5" />}
          className="md:col-span-2"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {recommendations.map((course, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{course}</CardTitle>
                </CardHeader>
                <CardContent>
                  <button className="text-sm text-primary">View Details</button>
                </CardContent>
              </Card>
            ))}
          </div>
        </BentoGridItem>
      </BentoGrid>
    </div>
  )
}