import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Schedule() {
  const [currentDate, setCurrentDate] = useState(new Date());


  return (
    <div className="container mx-auto p-6">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="">
            Class Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border">
            <div className="bg-white rounded-t-2xl">
              <div className="header bg-[#f9fafc] p-4 rounded-t-2xl flex justify-between">
                <Label htmlFor="text" className="text-base">
                  January 2022
                </Label>
                <div className="flex items-center gap-4">
                  <div className="bg-white flex gap-4 border items-center rounded-md">
                    <ChevronLeft className="h-6 w-6 p-1 m-1 rounded-md bg-gray-100/70" />
                    <span className="text-sm font-semibold py-0.5">Today</span>
                    <ChevronRight className="h-6 w-6 p-1 m-1 rounded-md bg-gray-100/70" />
                  </div>
                  <div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="px-4 py-2 bg-white">
                          View Options
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <h4 className="font-medium leading-none">Dimensions</h4>
                            <p className="text-sm text-muted-foreground">
                              Set the dimensions for the layer.
                            </p>
                          </div>
                          <div className="grid gap-2">
                            <div className="grid grid-cols-3 items-center gap-4">
                              <Label htmlFor="width">Width</Label>
                              <Input
                                id="width"
                                defaultValue="100%"
                                className="col-span-2 h-8"
                              />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                              <Label htmlFor="maxWidth">Max. width</Label>
                              <Input
                                id="maxWidth"
                                defaultValue="300px"
                                className="col-span-2 h-8"
                              />
                            </div>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <hr className="bg-gray-300 h-6 w-[1px]" />
                  <Button variant='default' className="bg-blue-200">Add Event</Button>
                </div>
              </div>
              <div className="weekName">
                <div className="grid grid-cols-7 grid-rows-1 justify-items-stretch">
                  <div className="p-4 font-semibold border flex items-center justify-center">Sun</div>
                  <div className="p-4 font-semibold border flex items-center justify-center">Mon</div>
                  <div className="p-4 font-semibold border flex items-center justify-center">Tue</div>
                  <div className="p-4 font-semibold border flex items-center justify-center">Wed</div>
                  <div className="p-4 font-semibold border flex items-center justify-center">Thu</div>
                  <div className="p-4 font-semibold border flex items-center justify-center">Fri</div>
                  <div className="p-4 font-semibold border flex items-center justify-center">Sat</div>
                </div>
              </div>
              <div className="weekDays">
                <div className="grid grid-cols-7 grid-rows-6 justify-items-stretch">
                  <div className="p-4 font-semibold border flex items-center justify-center h-28">1</div>
                  <div className="p-4 font-semibold border flex items-center justify-center">2</div>
                  <div className="p-4 font-semibold border flex items-center justify-center">3</div>
                  <div className="p-4 font-semibold border flex items-center justify-center">4</div>
                  <div className="p-4 font-semibold border flex items-center justify-center">5</div>
                  <div className="p-4 font-semibold border flex items-center justify-center">6</div>
                  <div className="p-4 font-semibold border flex items-center justify-center">7</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}