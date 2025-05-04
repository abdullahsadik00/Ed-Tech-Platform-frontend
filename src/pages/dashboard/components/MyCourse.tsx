import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import InProgressTab from './InProgressTab'
import HomeTab from './HomeTab'
import UpcomingTab from './UpcomingTab'

const MyCourse: React.FC = () => {
  
  return (
    <div className="bg-[#f6f6f6]">
      <div className="space-y-4">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>
              My Course
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="home" className="">
              <TabsList className="flex h-12 space-x-1 bg-gray-50 p-1 rounded-lg border border-gray-200 w-full">
                <TabsTrigger
                  value="home"
                  className="px-4 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-apple-sm rounded-md transition-all duration-200 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  Home
                </TabsTrigger>
                <TabsTrigger
                  value="inProgress"
                  className="px-4 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-apple-sm rounded-md transition-all duration-200 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  In Progress
                </TabsTrigger>
                <TabsTrigger
                  value="upcomming"
                  className="px-4 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-apple-sm rounded-md transition-all duration-200 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  Upcoming
                </TabsTrigger>
                <TabsTrigger
                  value="completed"
                  className="px-4 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-apple-sm rounded-md transition-all duration-200 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  Completed
                </TabsTrigger>
              </TabsList>
              <TabsContent value="home">
               <HomeTab/>
              </TabsContent>
              <TabsContent value="inProgress">
                {/* <InProgressTab /> */}
                <InProgressTab/>
              </TabsContent>
              <TabsContent value="upcomming">
                <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-4">
                  <div className="max-w-7xl mx-auto">
                    <UpcomingTab />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="completed">Change your password here.</TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default MyCourse