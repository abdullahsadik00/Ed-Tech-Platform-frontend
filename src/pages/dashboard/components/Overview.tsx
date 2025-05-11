import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Clock, AlertTriangle, BookOpen, Users } from "lucide-react"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export function Overview() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const examSchedule = [
    {
      subject: "Mathematics",
      date: "2025-05-03",
      time: "10:00 AM",
      duration: "2 hours",
      location: "Room 204, Building A",
      notes: "Bring calculator and geometry set.",
      status:"completed"
    },
    {
      subject: "Physics",
      date: "2025-05-05",
      time: "1:00 PM",
      duration: "3 hours",
      location: "Lab 3, Science Block",
      notes: "Lab coat required.",
      status:"ongoing"
    },
    {
      subject: "English Literature",
      date: "2025-05-07",
      time: "9:00 AM",
      duration: "2.5 hours",
      location: "Main Hall",
      notes: "Essay-based questions. No electronic devices allowed.",
      status:"completed"
    },
    {
      subject: "Computer Science",
      date: "2025-05-09",
      time: "11:30 AM",
      duration: "2 hours",
      location: "Computer Lab 1",
      notes: "Practical + theory sections.",
      status:"completed"
    },
    {
      subject: "History",
      date: "2025-05-11",
      time: "8:00 AM",
      duration: "3 hours",
      location: "Room 101, Humanities Wing",
      notes: "Open book exam. Bring all course materials.",
      status:"completed"
    }
  ]
  
  const deadlines = [
    { title: "Math Assignment", due: "Tomorrow", priority: "high" },
    { title: "Science Project", due: "3 days", priority: "medium" }
  ]

  const recommendations = ["Physics 101", "Computer Science Basics"]

  const user =
  {
    imageUrl: "",
    gradeLevel: '', name: '', program: "", initials: ""
  }

  return (
    <div className="space-y-6">

{/* Welcome card */}
<div className="max-w-6xl mx-auto">
<Card className="bg-blue-200/10 border-0">
  <CardContent>
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary-600 to-primary-500">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">
            Welcome Back, Teacher!
          </h2>
          <p className="text-primary-100 ">
            Your students are doing great!
            <span className="mx-1 font-bold text-slate-900">60%</span>
            have completed their exams.
          </p>
        </div>
        <div className="hidden md:block">
          <Users className="h-24 w-24 text-primary-200/50" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-400/20 " />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary-400/20 " />
    </div>
  </CardContent>
</Card></div>

{/* submitted test */}
<Card className="max-w-6xl mx-auto bg-white"> 
  <CardHeader className="font-semibold">Exam Schedule</CardHeader>
  <CardContent>
<Table>
  {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">No</TableHead>
      <TableHead>Date</TableHead>
      <TableHead>Time</TableHead>
      <TableHead>Subject </TableHead>
      <TableHead className="text-center">Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
      {examSchedule.map((examDetail,i)=>(
    <TableRow>
      <TableCell className="font-medium" key={i}>{i + 1}</TableCell>  
      <TableCell className="font-medium">{examDetail.date}</TableCell>
      <TableCell>{examDetail.time}</TableCell>
      <TableCell>{examDetail.subject}</TableCell>
      <TableCell className="text-center">{examDetail.status}</TableCell>
      
      {/* <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell> */}
      {/* <TableCell className="text-right">$250.00</TableCell> */}
    </TableRow>
      ))}
  </TableBody>
</Table>
</CardContent>
</Card>

{/* chat card */}
<div className="max-w-6xl mx-auto ">
      <div className="flex gap-4">

      <Card className="w-[71%]">
        <CardHeader>
          <CardTitle>All Chats</CardTitle>
        </CardHeader>
        <CardContent>

        <Card>
          <CardContent className="flex justify-between">
            <div className="flex items-center justify-between gap-2">
              <div>
                <Avatar className="w-12 h-12">
                <AvatarImage src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg" className="w-12 h-12"/>
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
              </div>
              <p className="pl-2">Sadik Shaikh</p>
            </div>
            <div>View</div>
          </CardContent>
        </Card>
        </CardContent>
      </Card>
      <Card className="w-[35%]">
      <CardContent>

Card
</CardContent>
      </Card>
      </div>
</div>
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
            {/* <Card className="p-6 flex items-center gap-4">
              <Avatar>
                <AvatarImage src={user.imageUrl} />
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>{user.program} • {user.gradeLevel}</CardDescription>
                <div className="flex gap-2 mt-2">
                  <Button variant="outline" size="sm">
                    <BellIcon className="w-4 h-4 mr-1" /> Notifications
                  </Button>
                  <Button variant="outline" size="sm">
                    <SettingsIcon className="w-4 h-4 mr-1" /> Settings
                  </Button>
                </div>
              </div>
            </Card> */}
          </div>
        </BentoGridItem>

        {/* Recent Announcements */}
        <BentoGridItem
          title=""
          // header={<Bell className="h-5 w-5" />}
          className="p-0 bg-amber-100/10">
          <div className="">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            /></div>
          {/* <div className="space-y-3">
            {announcements.map((item, index) => (
              <Alert key={index} variant="default">
                <AlertDescription>{item}</AlertDescription>
              </Alert>
            ))}
          </div> */}
        </BentoGridItem>

        {/* System Alerts */}
        <BentoGridItem
          title="System Status"
          header={<AlertTriangle className="h-5 w-5" />}
          className="bg-red-50"
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