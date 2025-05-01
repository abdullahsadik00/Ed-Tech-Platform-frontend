import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CircularProgress } from '@/components/ui/circular-progress'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import React from 'react'

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
              <TabsList>
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="inProgress">In Progress</TabsTrigger>
                <TabsTrigger value="upcomming">Upcomming</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              <TabsContent value="home">
                <Card className="bg-white">
                  <CardContent>
                    <div className="flex">
                      <div className="w-full   flex">
                        <div className="pr-4">
                          <Card className="w-[180px] p-0 rounded-md border-none">
                            <CardContent className="p-0 border-none shadow-md rounded-md">
                              <img
                                className="rounded-md"
                                src="https://picsum.photos/180/180"
                                alt="Random"
                              />
                            </CardContent>
                          </Card>
                        </div>
                        <div className="flex flex-col justify-evenly">
                          <CardTitle>Course Title</CardTitle>
                          <CardDescription>
                            <span className='text-sm font-medium text-gray-500 my-2 block'>25 Videos | 20 hours</span>
                            <p className='leading-5'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore maiores eaque accusantium esse laboriosam unde natus optio consequatur, ratione deserunt, eveniet architecto! Voluptatibus voluptatum aliquid aut ratione molestiae, eveniet nesciunt.</p>
                          </CardDescription>
                          <div className='mt-4'>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md">Default</span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md">Default</span>

                          </div>
                          {/* Add content here if needed */}
                        </div>
                      </div>

                      {/* 1/3 Section */}
                      <div className="w-1/3 border-l-2 ml-3 flex flex-col items-center justify-center">
                        <Button className='bg-[#3AC4FE] text-white '>Resume Course</Button>
                        <span className='text-[#27b998] text-sm my-4'>In person course</span>
                        {/* Add content here if needed */}
                        {/* <!-- Circular Progress --> */}
                        <div className="flex items-center gap-2">
                          <CircularProgress value={80} />
                          <Label>80% completed</Label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className='bg-blue-300/20 p-3 my-4'>
                  <CardContent className='flex justify-between px-3'>
                    <Label>You have enrolled in 5 course</Label>
                    <div className='text-sm font-semibold text-gray-700 cursor-pointer'>View all   &#8594;
                    </div>
                  </CardContent>
                </Card>
<div>
  <h3 className='leading-none font-semibold'>Upcomming course</h3>
</div>

              </TabsContent>
              <TabsContent value="inProgress">Change your password here.</TabsContent>
              <TabsContent value="upcomming">Change your password here.</TabsContent>
              <TabsContent value="completed">Change your password here.</TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default MyCourse