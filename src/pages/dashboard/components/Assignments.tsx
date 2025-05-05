import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"

export function Assignments() {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="space-y-4">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>
              Assignments
              {/* <h1 className="text-2xl font-bold mb-4">Assignments</h1> */}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="flex gap-4">
              {/* Sidebar with fixed width */}
              <TabsList className="w-[600px] h-auto bg-neutral-200/10 border rounded-md p-2">
                <TabsTrigger value="all">All Assignments</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              {/* Content takes full remaining width */}
              <div className="flex-1">
                <TabsContent value="all">
                  <div className="flex flex-col gap-4">
                    <Card >
                      <CardContent className="flex justify-between gap-4 items-center paddd ">
                        {/* Left */}
                        <div className="flex gap-4 items-center">
                          <div className="w-9 h-9">
                            <img
                              className="w-full rounded-md"
                              src="https://github.com/shadcn.png"
                              alt=""
                            />
                          </div>
                          <div>
                            {/* <h2 className="font-medium">Introduction to HTML</h2> */}
                            <Label className="text-lg mb-1.5">Introduction to HTML</Label>
                            <div className="text-sm text-muted-foreground">
                              <span className="mr-2 text-slate-500">🕒 6 days left</span>
                              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                                Pending
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card >
                      <CardContent className="flex justify-between gap-4 items-center paddd ">
                        {/* Left */}
                        <div className="flex gap-4 items-center">
                          <div className="w-9 h-9">
                            <img
                              className="w-full rounded-md"
                              src="https://github.com/shadcn.png"
                              alt=""
                            />
                          </div>
                          <div>
                            {/* <h2 className="font-medium">Introduction to HTML</h2> */}
                            <Label className="text-lg mb-1.5">Introduction to HTML</Label>
                            <div className="text-sm text-muted-foreground">
                              <span className="mr-2 text-slate-500">🕒 6 days left</span>
                              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                                Pending
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card >
                      <CardContent className="flex justify-between gap-4 items-center paddd ">
                        {/* Left */}
                        <div className="flex gap-4 items-center">
                          <div className="w-9 h-9">
                            <img
                              className="w-full rounded-md"
                              src="https://github.com/shadcn.png"
                              alt=""
                            />
                          </div>
                          <div>
                            {/* <h2 className="font-medium">Introduction to HTML</h2> */}
                            <Label className="text-lg mb-1.5">Introduction to HTML</Label>
                            <div className="text-sm text-muted-foreground">
                              <span className="mr-2 text-slate-500">🕒 6 days left</span>
                              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                                Pending
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="pending">
                  <p className="p-4">Pending assignments go here</p>
                </TabsContent>

                <TabsContent value="completed">
                  <p className="p-4">Completed assignments go here</p>
                </TabsContent>
              </div>
            </Tabs>
            {/* paggination */}
            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">10</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}