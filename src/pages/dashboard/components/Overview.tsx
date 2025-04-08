import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
    </div>
  )
}