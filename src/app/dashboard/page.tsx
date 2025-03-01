"use client";
import React from 'react';
import {
  Title,
  Group,
  Text,
  Stack,
  useMantineTheme,
  Paper
} from '@mantine/core';
import BentoGrid from '@/components/dashboard/BentoGrid';
import { Activity, Users, BookOpen, Calendar, TrendingUp, FileText } from 'lucide-react';

export default function DashboardPage() {
  const theme = useMantineTheme();

  // const statsItems = [
  //   {
  //     id: 'total-users',
  //     content: (
  //       <Group>
  //         <Users size={32} />
  //         <Stack gap="sm">
  //           <Text size="sm" color="dimmed">Total Users</Text>
  //           <Text size="xl" fw={700}>1,234</Text>
  //         </Stack>
  //       </Group>
  //     ),
  //     className: 'col-span-1',
  //   },
  //   {
  //     id: 'active-courses',
  //     content: (
  //       <Group>
  //         <BookOpen size={32} />
  //         <Stack gap="sm">
  //           <Text size="sm" color="dimmed">Active Courses</Text>
  //           <Text size="xl" fw={700}>42</Text>
  //         </Stack>
  //       </Group>
  //     ),
  //     className: 'col-span-1',
  //   },
  //   {
  //     id: 'upcoming-events',
  //     content: (
  //       <Group>
  //         <Calendar size={32} />
  //         <Stack gap="sm">
  //           <Text size="sm" color="dimmed">Upcoming Events</Text>
  //           <Text size="xl" fw={700}>8</Text>
  //         </Stack>
  //       </Group>
  //     ),
  //     className: 'col-span-1',
  //   },
  //   {
  //     id: 'performance',
  //     content: (
  //       <Group>
  //         <TrendingUp size={32} />
  //         <Stack gap="sm">
  //           <Text size="sm" color="dimmed">Performance</Text>
  //           <Text size="xl" fw={700}>89%</Text>
  //         </Stack>
  //       </Group>
  //     ),
  //     className: 'col-span-1 row-span-2',
  //   },
  //   {
  //     id: 'assignments',
  //     content: (
  //       <Group>
  //         <FileText size={32} />
  //         <Stack gap="sm">
  //           <Text size="sm" color="dimmed">Assignments</Text>
  //           <Text size="xl" fw={700}>12</Text>
  //         </Stack>
  //       </Group>
  //     ),
  //     className: 'col-span-2',
  //   },
  // ];
  return (
    <Stack gap="lg">
      <Title order={2}>Dashboard</Title>
	  <div id="webcrumbs"> 
        	<div className=" h-[800px] bg-gray-50 font-sans overflow-hidden rounded-xl shadow-lg">
	  <div className="flex h-full">
	    {/* <div className="w-64 bg-white border-r border-gray-200 py-4 flex flex-col">
	      <div className="px-6 mb-8">
	        <h1 className="text-xl font-bold flex items-center">
	          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 text-purple-600">
	            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
	            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
	            <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
	          </svg>
	          EduPulse
	        </h1>
	      </div>
	      
	      <nav className="flex-1">
	        <ul>
	          <li className="mb-1">
	            <a href="#" className="flex items-center px-6 py-3 text-gray-900 bg-purple-50 border-l-4 border-purple-600 transition-all duration-200">
	              <span className="material-symbols-outlined mr-3">home</span>
	              Learning Hub
	            </a>
	          </li>
	          <li className="mb-1">
	            <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200">
	              <span className="material-symbols-outlined mr-3">menu_book</span>
	              My Courses
	            </a>
	          </li>
	          <li className="mb-1">
	            <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200">
	              <span className="material-symbols-outlined mr-3">assignment</span>
	              Assignments
	            </a>
	          </li>
	          <li className="mb-1">
	            <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200">
	              <span className="material-symbols-outlined mr-3">calendar_month</span>
	              Calendar
	            </a>
	          </li>
	          <li className="mb-1">
	            <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200">
	              <span className="material-symbols-outlined mr-3">school</span>
	              Grades
	            </a>
	          </li>
	          <li className="mb-1">
	            <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200">
	              <span className="material-symbols-outlined mr-3">forum</span>
	              Discussions
	            </a>
	          </li>
	        </ul>
	      </nav>
	      
	      <div className="px-6 mt-auto">
	        <div className="p-4 bg-purple-50 rounded-lg">
	          <div className="flex items-center mb-3">
	            <span className="material-symbols-outlined text-purple-600 mr-2">workspace_premium</span>
	            <h3 className="font-semibold">Study Streak</h3>
	          </div>
	          <p className="text-sm text-gray-600 mb-3">You've studied for 12 days in a row! Keep it up!</p>
	          <div className="flex justify-between mb-2">
	            <div className="flex space-x-1">
	              {[...Array(7)].map((_, i) => (
	                <div key={i} className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
	                  <span className="material-symbols-outlined text-white text-sm">check</span>
	                </div>
	              ))}
	              {[...Array(5)].map((_, i) => (
	                <div key={i+7} className="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center">
	                  <span className="material-symbols-outlined text-purple-600 text-sm">check</span>
	                </div>
	              ))}
	            </div>
	          </div>
	          <button className="w-full py-2 px-3 bg-purple-600 text-white rounded-md font-medium shadow-sm hover:bg-purple-700 transform hover:scale-[1.02] transition-all duration-200">
	            Claim Daily Reward
	          </button>
	        </div>
	      </div>
	    </div> */}
	    
	    <div className="flex-1 overflow-y-auto p-8">
	      <header className="flex justify-between items-center mb-8">
	        <div>
	          <h1 className="text-2xl font-bold">Learning Hub</h1>
	          <p className="text-gray-600">Welcome back, let's continue your learning journey</p>
	        </div>
	        
	        <div className="flex items-center space-x-4">
	          <div className="relative">
	            <input type="text" placeholder="Search courses, assignments..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 w-64" />
	            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">search</span>
	          </div>
	          
	          <details className="relative">
	            <summary className="list-none flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-200">
	              <span className="material-symbols-outlined">notifications</span>
	              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
	            </summary>
	            <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-10 py-2">
	              <div className="px-4 py-2 border-b border-gray-200">
	                <h3 className="font-semibold">Notifications</h3>
	              </div>
	              <div className="p-2">
	                <a href="#" className="block p-2 hover:bg-gray-50 rounded-lg transition-all duration-200">
	                  <div className="flex items-start">
	                    <span className="material-symbols-outlined mr-3 mt-1 text-red-500">event_upcoming</span>
	                    <div>
	                      <p className="font-medium">Math Assignment Due Soon</p>
	                      <p className="text-xs text-gray-500 mt-1">Due in 2 hours</p>
	                    </div>
	                  </div>
	                </a>
	                <a href="#" className="block p-2 hover:bg-gray-50 rounded-lg transition-all duration-200">
	                  <div className="flex items-start">
	                    <span className="material-symbols-outlined mr-3 mt-1 text-purple-500">video_camera_front</span>
	                    <div>
	                      <p className="font-medium">Live Class: Physics 101</p>
	                      <p className="text-xs text-gray-500 mt-1">Starts in 30 minutes</p>
	                    </div>
	                  </div>
	                </a>
	                <a href="#" className="block p-2 hover:bg-gray-50 rounded-lg transition-all duration-200">
	                  <div className="flex items-start">
	                    <span className="material-symbols-outlined mr-3 mt-1 text-green-500">comment</span>
	                    <div>
	                      <p className="font-medium">New reply to your discussion post</p>
	                      <p className="text-xs text-gray-500 mt-1">15 minutes ago</p>
	                    </div>
	                  </div>
	                </a>
	              </div>
	              <div className="px-4 py-2 border-t border-gray-200">
	                <a href="#" className="text-sm text-purple-600 font-medium hover:text-purple-700">Mark all as read</a>
	              </div>
	            </div>
	          </details>
	          
	          <details className="relative">
	            <summary className="list-none flex items-center cursor-pointer">
	              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-2">
	                <span className="text-purple-700 font-semibold">JS</span>
	              </div>
	              <span className="material-symbols-outlined text-gray-500">expand_more</span>
	            </summary>
	            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 py-2">
	              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all duration-200">My Profile</a>
	              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all duration-200">Account Settings</a>
	              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all duration-200">Help Center</a>
	              <div className="border-t border-gray-200 my-1"></div>
	              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all duration-200">Sign out</a>
	            </div>
	          </details>
	        </div>
	      </header>
	      
	      <div className="mb-8">
	        <div className="flex justify-between items-center mb-4">
	          <h2 className="text-xl font-bold">Active Courses</h2>
	          <div className="flex space-x-2">
	            <button className="p-1 rounded hover:bg-gray-100 transition-all duration-200">
	              <span className="material-symbols-outlined">chevron_left</span>
	            </button>
	            <button className="p-1 rounded hover:bg-gray-100 transition-all duration-200">
	              <span className="material-symbols-outlined">chevron_right</span>
	            </button>
	          </div>
	        </div>
	        
	        <div className="grid grid-cols-3 gap-6">
	          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]">
	            <div className="flex justify-between mb-4">
	              <div className="flex items-center">
	                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mr-3">
	                  <span className="material-symbols-outlined">calculate</span>
	                </span>
	                <h3 className="font-semibold">Advanced Mathematics</h3>
	              </div>
	              <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full">In Progress</span>
	            </div>
	            <div className="mb-4">
	              <div className="flex justify-between text-sm mb-1">
	                <span>Progress</span>
	                <span className="font-medium">68%</span>
	              </div>
	              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
	                <div className="h-full bg-blue-500 rounded-full" style={{width: '68%'}}></div>
	              </div>
	            </div>
	            <div className="flex justify-between items-center text-sm">
	              <span>Next class: Today, 2:00 PM</span>
	              <button className="text-blue-600 hover:text-blue-800 transition-all duration-200">Continue</button>
	            </div>
	          </div>
	          
	          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]">
	            <div className="flex justify-between mb-4">
	              <div className="flex items-center">
	                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 mr-3">
	                  <span className="material-symbols-outlined">science</span>
	                </span>
	                <h3 className="font-semibold">Physics 101</h3>
	              </div>
	              <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full">In Progress</span>
	            </div>
	            <div className="mb-4">
	              <div className="flex justify-between text-sm mb-1">
	                <span>Progress</span>
	                <span className="font-medium">42%</span>
	              </div>
	              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
	                <div className="h-full bg-green-500 rounded-full" style={{width: '42%'}}></div>
	              </div>
	            </div>
	            <div className="flex justify-between items-center text-sm">
	              <span>Next class: Today, 4:30 PM</span>
	              <button className="text-green-600 hover:text-green-800 transition-all duration-200">Continue</button>
	            </div>
	          </div>
	          
	          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]">
	            <div className="flex justify-between mb-4">
	              <div className="flex items-center">
	                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 mr-3">
	                  <span className="material-symbols-outlined">code</span>
	                </span>
	                <h3 className="font-semibold">Computer Science</h3>
	              </div>
	              <span className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-700 rounded-full">In Progress</span>
	            </div>
	            <div className="mb-4">
	              <div className="flex justify-between text-sm mb-1">
	                <span>Progress</span>
	                <span className="font-medium">78%</span>
	              </div>
	              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
	                <div className="h-full bg-purple-500 rounded-full" style={{width: '78%'}}></div>
	              </div>
	            </div>
	            <div className="flex justify-between items-center text-sm">
	              <span>Next class: Tomorrow, 10:00 AM</span>
	              <button className="text-purple-600 hover:text-purple-800 transition-all duration-200">Continue</button>
	            </div>
	          </div>
	        </div>
	      </div>
	      
	      <div className="grid grid-cols-3 gap-6 mb-8">
	        <div className="col-span-2">
	          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-6">
	            <div className="flex items-center justify-between mb-6">
	              <h3 className="text-lg font-semibold">Upcoming Assignments</h3>
	              <a href="#" className="text-purple-600 hover:text-purple-800 transition-all duration-200 text-sm font-medium flex items-center">
	                View All
	                <span className="material-symbols-outlined text-sm ml-1">chevron_right</span>
	              </a>
	            </div>
	            
	            <div className="space-y-4">
	              <div className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200">
	                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
	                  <span className="material-symbols-outlined text-red-600">assignment</span>
	                </div>
	                <div className="flex-1">
	                  <div className="flex justify-between">
	                    <h4 className="font-medium">Calculus Problem Set #5</h4>
	                    <span className="text-xs font-medium px-2 py-1 bg-red-100 text-red-700 rounded-full">Due Today</span>
	                  </div>
	                  <p className="text-sm text-gray-500">Advanced Mathematics</p>
	                </div>
	                <button className="ml-4 px-3 py-1.5 text-sm bg-purple-600 text-white rounded hover:bg-purple-700 transition-all duration-200">
	                  Submit
	                </button>
	              </div>
	              
	              <div className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200">
	                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
	                  <span className="material-symbols-outlined text-yellow-600">assignment</span>
	                </div>
	                <div className="flex-1">
	                  <div className="flex justify-between">
	                    <h4 className="font-medium">Lab Report: Motion & Forces</h4>
	                    <span className="text-xs font-medium px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">Due Tomorrow</span>
	                  </div>
	                  <p className="text-sm text-gray-500">Physics 101</p>
	                </div>
	                <button className="ml-4 px-3 py-1.5 text-sm bg-purple-600 text-white rounded hover:bg-purple-700 transition-all duration-200">
	                  Start
	                </button>
	              </div>
	              
	              <div className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200">
	                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
	                  <span className="material-symbols-outlined text-blue-600">assignment</span>
	                </div>
	                <div className="flex-1">
	                  <div className="flex justify-between">
	                    <h4 className="font-medium">Algorithm Analysis Project</h4>
	                    <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full">Due in 3 Days</span>
	                  </div>
	                  <p className="text-sm text-gray-500">Computer Science</p>
	                </div>
	                <button className="ml-4 px-3 py-1.5 text-sm bg-purple-600 text-white rounded hover:bg-purple-700 transition-all duration-200">
	                  Start
	                </button>
	              </div>
	            </div>
	          </div>
	          
	          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
	            <div className="flex items-center justify-between mb-6">
	              <h3 className="text-lg font-semibold">Live Classes Today</h3>
	              <a href="#" className="text-purple-600 hover:text-purple-800 transition-all duration-200 text-sm font-medium flex items-center">
	                View Calendar
	                <span className="material-symbols-outlined text-sm ml-1">chevron_right</span>
	              </a>
	            </div>
	            
	            <div className="space-y-4">
	              <div className="flex items-center p-4 rounded-lg border border-gray-200 bg-purple-50 hover:bg-purple-100 transition-all duration-200">
	                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
	                  <span className="material-symbols-outlined text-green-600">videocam</span>
	                </div>
	                <div className="flex-1">
	                  <div className="flex justify-between">
	                    <h4 className="font-medium">Vectors & Matrices</h4>
	                    <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full">Starting in 30 min</span>
	                  </div>
	                  <p className="text-sm text-gray-600">2:00 PM - 3:30 PM • Professor Johnson</p>
	                </div>
	                <button className="ml-4 px-3 py-1.5 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-200">
	                  Join
	                </button>
	              </div>
	              
	              <div className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200">
	                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
	                  <span className="material-symbols-outlined text-blue-600">videocam</span>
	                </div>
	                <div className="flex-1">
	                  <div className="flex justify-between">
	                    <h4 className="font-medium">Kinematics & Newton's Laws</h4>
	                    <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full">Today 4:30 PM</span>
	                  </div>
	                  <p className="text-sm text-gray-500">4:30 PM - 6:00 PM • Professor Smith</p>
	                </div>
	                <button className="ml-4 px-3 py-1.5 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition-all duration-200">
	                  Reminder
	                </button>
	              </div>
	            </div>
	          </div>
	        </div>
	        
	        <div className="space-y-6">
	          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
	            <div className="flex items-center justify-between mb-6">
	              <h3 className="text-lg font-semibold">To-Do List</h3>
	              <button className="text-purple-600 hover:text-purple-800 transition-all duration-200">
	                <span className="material-symbols-outlined">add</span>
	              </button>
	            </div>
	            
	            <div className="space-y-3">
	              <div className="flex items-center">
	                <input type="checkbox" id="task1" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
	                <label htmlFor="task1" className="ml-3 text-sm font-medium">Review calculus notes</label>
	                <span className="ml-auto text-xs text-gray-500">Today</span>
	              </div>
	              
	              <div className="flex items-center">
	                <input type="checkbox" id="task2" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
	                <label htmlFor="task2" className="ml-3 text-sm font-medium">Complete practice quiz</label>
	                <span className="ml-auto text-xs text-gray-500">Today</span>
	              </div>
	              
	              <div className="flex items-center">
	                <input type="checkbox" id="task3" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
	                <label htmlFor="task3" className="ml-3 text-sm font-medium">Start physics lab report</label>
	                <span className="ml-auto text-xs text-gray-500">Tomorrow</span>
	              </div>
	              
	              <div className="flex items-center">
	                <input type="checkbox" id="task4" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
	                <label htmlFor="task4" className="ml-3 text-sm font-medium">Research algorithm types</label>
	                <span className="ml-auto text-xs text-gray-500">Wed</span>
	              </div>
	              
	              <div className="flex items-center">
	                <input type="checkbox" id="task5" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
	                <label htmlFor="task5" className="ml-3 text-sm font-medium">Group study session</label>
	                <span className="ml-auto text-xs text-gray-500">Thu</span>
	              </div>
	            </div>
	          </div>
	          
	          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
	            <div className="flex items-center justify-between mb-6">
	              <h3 className="text-lg font-semibold">Quick Access</h3>
	              <button className="text-purple-600 hover:text-purple-800 transition-all duration-200">
	                <span className="material-symbols-outlined">settings</span>
	              </button>
	            </div>
	            
	            <div className="grid grid-cols-2 gap-3">
	              <button className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-200 flex flex-col items-center">
	                <span className="material-symbols-outlined text-blue-600 mb-1">assignment_add</span>
	                <span className="text-sm">Submit Assignment</span>
	              </button>
	              
	              <button className="p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-200 flex flex-col items-center">
	                <span className="material-symbols-outlined text-green-600 mb-1">groups</span>
	                <span className="text-sm">Join Class</span>
	              </button>
	              
	              <button className="p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-all duration-200 flex flex-col items-center">
	                <span className="material-symbols-outlined text-purple-600 mb-1">calendar_add_on</span>
	                <span className="text-sm">Schedule</span>
	              </button>
	              
	              <button className="p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-all duration-200 flex flex-col items-center">
	                <span className="material-symbols-outlined text-yellow-600 mb-1">forum</span>
	                <span className="text-sm">Discussion</span>
	              </button>
	            </div>
	          </div>
	          
	          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
	            <div className="flex items-center justify-between mb-4">
	              <h3 className="text-lg font-semibold">Resources</h3>
	              <a href="#" className="text-purple-600 hover:text-purple-800 transition-all duration-200 text-sm">View All</a>
	            </div>
	            
	            <div className="space-y-3">
	              <a href="#" className="block p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200">
	                <div className="flex items-center">
	                  <span className="material-symbols-outlined text-red-600 mr-3">picture_as_pdf</span>
	                  <div>
	                    <h4 className="text-sm font-medium">Calculus Textbook</h4>
	                    <p className="text-xs text-gray-500">PDF • 12.4 MB</p>
	                  </div>
	                </div>
	              </a>
	              
	              <a href="#" className="block p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200">
	                <div className="flex items-center">
	                  <span className="material-symbols-outlined text-blue-600 mr-3">video_library</span>
	                  <div>
	                    <h4 className="text-sm font-medium">Newton's Laws Lecture</h4>
	                    <p className="text-xs text-gray-500">Video • 48 min</p>
	                  </div>
	                </div>
	              </a>
	              
	              </div></div></div></div></div></div></div> 
        </div>
    </Stack>
  );
}