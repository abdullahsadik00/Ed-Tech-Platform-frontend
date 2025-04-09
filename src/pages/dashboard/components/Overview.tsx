import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WelcomeBanner from "./WelcomeBanner"
import { ProgressCard } from "./ProgressCard"
import { CourseSection } from "./CourseSection"
import { DeadlineSection } from "./DeadlineSection"
import { ResourceSection } from "./ResourceSection"

export function Overview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
        </CardContent>
      </Card>
      <Card className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
        </CardContent>
      </Card>
      <Card className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
        </CardContent>
      </Card>

      {/* Add more dashboard cards */}
      {/* Dashboard Content Grid */}
        <div className="p-6 grid gap-6">
          {/* Welcome Banner */}
          <WelcomeBanner />

          {/* Progress Overview */}
          <div className="grid md:grid-cols-3 gap-6">
            <ProgressCard 
              title="Course Progress" 
              value="78%" 
              color="primary" 
            />
            <ProgressCard 
              title="Assignments Completed" 
              value="12/15" 
              color="secondary" 
            />
            <ProgressCard 
              title="Streak Days" 
              value="7" 
              color="success" 
            />
          </div>

          {/* Current Courses */}
          <CourseSection />

          {/* Upcoming Deadlines */}
          <DeadlineSection />

          {/* Learning Resources */}
          <ResourceSection />
        </div>
    </div>
  )
}