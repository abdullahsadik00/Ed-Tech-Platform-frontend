import React from 'react';
import SubmittedTestsCard from './cards/SubmittedTestsCard';
import TopStudentsCard from './cards/TopStudentsCard';
import TeacherProfileCard from './cards/TeacherProfileCard';
import WelcomeCard from './cards/WelcomeCard';
const HomeContent = () => {
  return (
    <div className="container mx-auto p-4 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 bg-primary-50 dark:bg-background">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        <WelcomeCard />
        <SubmittedTestsCard />

        <div className="grid md:grid-cols-2 gap-6">
          <TopStudentsCard />
          <TopStudentsCard />
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        <TeacherProfileCard />
        {/* <TimelineCard /> */}
      </div>
    </div>
  );
};

export default HomeContent;

// import React from 'react';
// import DropdownMenu from '../../uiElements/DropdownMenu';
// import CalendarComponent from '../../uiElements/CalendarComponent';
// import teacherWelcomeImg from '../../../assets/img/teacherWelcomeImg.png';

// const HomeContent = () => {
//   const menuItems = [
//     { label: 'Account settings', href: '#' },
//     { label: 'Support', href: '#' },
//     { label: 'License', href: '#' },
//     { label: 'Sign out', onClick: () => alert('Signing out...') },
//   ];

//   return (
//     <div className="bg-[#f8f8fe] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-2 p-4">
//       {/* Left Column: Cards 1, 2, and 3 */}
//       <div className="space-y-4 col-span-1 sm:col-span-1 lg:col-span-2 lg:mr-4 mr-0">
//         {/* Card 1 */}
//         <div className="bg-gradient-to-r from-[#4c4ac7] to-[#736fe7] rounded-lg w-full h-28 flex items-center justify-between p-4 pr-0">
//           <div className="flex w-[70%]">
//             <p className="text-base font-normal font-lato tracking-wide text-white">
//               Your students are doing great
//               <span className="font-bold ml-1 mr-1">60%</span>
//               students have completed the exam
//             </p>
//           </div>

//           <div className="w-[30%] h-[135px]">
//             <img
//               src={teacherWelcomeImg}
//               alt="Teacher Welcome"
//               className="h-full object-contain"
//             />
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="border border-white rounded-lg w-full h-[350px] flex shadow-sm bg-white">
//           <div className="w-full px-4 py-2">
//             <div className="flex justify-between items-center">
//               <h2 className="font-poppins font-semibold leading-5 tracking-wide">
//                 Submitted Test
//               </h2>
//               <div>
//                 <DropdownMenu buttonLabel="Options" items={menuItems} />
//               </div>
//             </div>
//             {/* Table */}
//             <section className="antialiased text-richblack-600 mt-2">
//               <div className="flex flex-col justify-center h-full">
//                 <div className="w-full max-w-2xl mx-auto bg-white rounded-lg border border-[#e4e4ea] overflow-hidden">
//                   <div className="overflow-x-auto">
//                     <table className="table-auto w-full rounded-lg">
//                       <thead className="text-xs font-semibold uppercase text-richblack-400 bg-[#f9f9f1]">
//                         <tr>
//                           <th className="p-2 whitespace-nowrap">
//                             <div className="font-semibold text-left">Name</div>
//                           </th>
//                           <th className="p-2 whitespace-nowrap">
//                             <div className="font-semibold text-left">
//                               Date of Submission
//                             </div>
//                           </th>
//                           <th className="p-2 whitespace-nowrap">
//                             <div className="font-semibold text-left">
//                               Status
//                             </div>
//                           </th>
//                           <th className="p-2 whitespace-nowrap">
//                             <div className="font-semibold text-center">
//                               Action
//                             </div>
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody className="text-sm divide-y divide-[#e4e4ea]">
//                         <tr>
//                           <td className="p-2 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
//                                 <img
//                                   className="rounded-full"
//                                   src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
//                                   width="40"
//                                   height="40"
//                                   alt="Alex Shatov"
//                                 />
//                               </div>
//                               <div className="font-medium text-richblack-800">
//                                 Alex Shatov
//                               </div>
//                             </div>
//                           </td>
//                           <td className="p-2 whitespace-nowrap">
//                             <div className="text-left">December 17, 2024</div>
//                           </td>
//                           <td className="p-2 whitespace-nowrap">
//                             <div className="text-left font-medium text-green-500">
//                               <div class="rounded-full font-bold bg-[#ececfc] py-0.5 px-2 text-center border border-transparent text-sm text-[#8682ea] transition-all shadow-sm">
//                                 Active
//                               </div>
//                             </div>
//                           </td>
//                           <td className="p-2 whitespace-nowrap">
//                             <div className="text-lg text-center">🇺🇸</div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td className="p-2 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
//                                 <img
//                                   className="rounded-full"
//                                   src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
//                                   width="40"
//                                   height="40"
//                                   alt="Philip Harbach"
//                                 />
//                               </div>
//                               <div className="font-medium text-richblack-800">
//                                 Philip Harbach
//                               </div>
//                             </div>
//                           </td>
//                           <td className="p-2 whitespace-nowrap">
//                             <div className="text-left">December 17, 2024</div>
//                           </td>
//                           <td className="p-2 whitespace-nowrap">
//                             <div class="rounded-full font-bold bg-[#ececfc] py-0.5 px-2 text-center border border-transparent text-sm text-[#8682ea] transition-all shadow-sm">
//                               Active
//                             </div>
//                           </td>
//                           <td className="p-2 whitespace-nowrap">
//                             <div className="text-lg text-center">🇩🇪</div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td className="p-2 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
//                                 <img
//                                   className="rounded-full"
//                                   src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
//                                   width="40"
//                                   height="40"
//                                   alt="Philip Harbach"
//                                 />
//                               </div>
//                               <div className="font-medium text-richblack-800">
//                                 Philip Harbach
//                               </div>
//                             </div>
//                           </td>
//                           <td className="p-2 whitespace-nowrap">
//                             <div className="text-left">December 17, 2024</div>
//                           </td>
//                           <td className="p-2 whitespace-nowrap">
//                             <div class="rounded-full bg-[#f6e4d0] py-0.5 px-2 border border-transparent text-sm text-center text-[#f5b070] font-bold transition-all shadow-sm">
//                               Opened
//                             </div>
//                           </td>
//                           <td className="p-2 whitespace-nowrap">
//                             <div className="text-lg text-center">🇩🇪</div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td className="p-2 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
//                                 <img
//                                   className="rounded-full"
//                                   src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
//                                   width="40"
//                                   height="40"
//                                   alt="Mirko Fisuk"
//                                 />
//                               </div>
//                               <div className="font-medium text-richblack-800">
//                                 Mirko Fisuk
//                               </div>
//                             </div>
//                           </td>
//                           <td className="p-2 whitespace-nowrap">
//                             <div className="text-left">December 17, 2024</div>
//                           </td>
//                           <td className="p-2 whitespace-nowrap">
//                             <div class="rounded-full bg-[#ffc8c3] py-0.5 px-2 border border-transparent text-sm text-[#f59582] font-bold text-center transition-all shadow-sm">
//                               Completed
//                             </div>
//                           </td>
//                           <td className="p-2 whitespace-nowrap">
//                             <div className="text-lg text-center">🇫🇷</div>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//                 <div className="flex justify-end px-4 mt-1">
//                   <p className="font-semibold text-sm text-[#bdbcbc] hover:text-[#8E8E93] cursor-pointer">
//                     View more
//                   </p>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>

//         {/* Cards 3 and 4 in a row */}
//         <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
//           <div className="col-span-1 shadow-md rounded-lg bg-white flex flex-col">
//             <div className="flex justify-between p-4 items-center">
//               <h2 className="font-poppins font-semibold leading-5 tracking-wide">
//                 Top Students
//               </h2>
//               <div>
//                 <DropdownMenu buttonLabel="Options" items={menuItems} />
//               </div>
//             </div>
//             <div>
//               <div className="mt-4 bg-[#f8f8fe] rounded-md shadow-sm p-4 m-4 flex flex-col space-y-3 border border-white">
//                 {/* Student item */}
//                 <div className="flex items-center space-x-2">
//                   <div className="w-14 h-14 flex-shrink-0 mr-2 sm:mr-3 rounded-full shadow-lg">
//                     <img
//                       className="rounded-full shadow-lg"
//                       src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
//                       width="60"
//                       height="60"
//                       alt="Mirko Fisuk"
//                     />
//                   </div>
//                   <div>
//                     <h2 className="font-poppins font-semibold leading-5 tracking-normal">
//                       Sadik Shaikh
//                     </h2>
//                     <p className="text-sm font-normal font-lato tracking-wide text-[#f2816c]">
//                       Overall Score 90%
//                     </p>
//                   </div>
//                 </div>
//               </div>{' '}
//               <div className="mt-4 bg-[#f8f8fe] rounded-md shadow-sm p-4 m-4 flex flex-col space-y-3">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-14 h-14 flex-shrink-0 mr-2 sm:mr-3 rounded-full shadow-lg">
//                     <img
//                       className="rounded-full shadow-lg"
//                       src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
//                       width="60"
//                       height="60"
//                       alt="Mirko Fisuk"
//                     />
//                   </div>
//                   <div>
//                     <h2 className="font-poppins font-semibold leading-5 tracking-normal">
//                       Sadik Shaikh
//                     </h2>
//                     <p className="text-sm font-normal font-lato tracking-wide text-[#f2816c]">
//                       Overall Score 90%
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-span-1 shadow-md rounded-lg bg-white flex flex-col">
//             <div className="flex justify-between p-4 items-center">
//               <h2 className="font-poppins font-semibold leading-5 tracking-wide">
//                 Groups
//               </h2>
//               <div>
//                 <p className="font-semibold text-sm text-[#bdbcbc] hover:text-[#8E8E93] cursor-pointer">
//                   View All &rarr;
//                 </p>
//               </div>
//             </div>
//             <div className="m-4 bg-[#f8f8fe] rounded-md shadow-sm px-1 py-3 flex flex-col space-y-3 border border-white">
//               {/* Group items */}
//               <div className="flex items-center space-x-1">
//                 <div className="w-14 h-14 flex-shrink-0 mr-2 sm:mr-3 rounded-md shadow-lg">
//                   <img
//                     className="rounded-md shadow-lg"
//                     src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
//                     width="60"
//                     height="60"
//                     alt="Mirko Fisuk"
//                   />
//                 </div>
//                 <div className="w-full">
//                   <div className="flex justify-between">
//                     <h2 className="font-poppins font-semibold leading-5 tracking-normal">
//                       Teacher's Group
//                     </h2>
//                     <div className="w-2 h-2 rounded-full bg-[#4540df]"></div>
//                   </div>
//                   <p className="text-sm font-normal font-lato tracking-wide text-[#bdbcbc] overflow-hidden whitespace-nowrap text-ellipsis max-w-[150px]">
//                     Faisal Shaikh: I'm facing issue with the following topic ...
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Column: Card 2 */}
//       <div className="rounded-lg leading-3 h-full w-full flex flex-col font-bold sm:col-span-1 sm:mt-0 mt-4">
//         <div className="p-4 flex justify-between border-b border-[#e4e4ea] bg-white">
//           <div className="flex items-center space-x-2">
//             <div className="w-14 h-14 flex-shrink-0 mr-2 sm:mr-3 rounded-full shadow-lg">
//               <img
//                 className="rounded-full shadow-lg"
//                 src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
//                 width="60"
//                 height="60"
//                 alt="Mirko Fisuk"
//               />
//             </div>
//             <div>
//               <h2 className="font-poppins font-semibold leading-5 tracking-normal">
//                 Monica Howard
//               </h2>
//               <p className="text-sm font-normal font-lato tracking-wide text-[#8F8B8B]">
//                 Maths Teacher
//               </p>
//             </div>
//           </div>
//           <div className="flex space-x-1">
//             <div className="w-2 h-2 rounded-full bg-[#3cb493]"></div>
//             <p className="text-[#3cb493]">online</p>
//           </div>
//         </div>
//         {/* Calendar */}
//         <CalendarComponent />
//         {/* TimeLine */}
//         <div className="p-4 flex justify-between border-b flex-col border-[#e4e4ea] bg-white">
//           <h2 className="text-xl font-medium">TimeLine</h2>
//           <div>
//             <div className="mt-4 bg-[#f8f8fe] rounded-md shadow-sm p-4 flex flex-col space-y-3">
//               <div className="font-medium text-base text-[#333333]">
//                 Solve real time problem
//               </div>
//               <div className="flex justify-between">
//                 <div className="font-semibold text-sm text-[#f2816c]">
//                   Class 10th
//                 </div>
//                 <div className="font-normal text-sm text-[#4540df]">
//                   10:00 AM
//                 </div>
//               </div>
//             </div>
//             <div className="mt-4 bg-[#f8f8fe] rounded-md shadow-sm p-4 flex flex-col space-y-3">
//               <div className="font-medium text-base text-[#333333]">
//                 Solve real time problem
//               </div>
//               <div className="flex justify-between">
//                 <div className="font-semibold text-sm text-[#f2816c]">
//                   Class 10th
//                 </div>
//                 <div className="font-normal text-sm text-[#4540df]">
//                   10:00 AM
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeContent;
