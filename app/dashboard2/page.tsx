// // // // import { AppSidebar } from "@/components/app-sidebar"
// // // // import {
// // // //   SidebarInset,
// // // //   SidebarProvider,
// // // //   SidebarTrigger,
// // // // } from "@/components/ui/sidebar"

// // // // export default function Page() {
// // // //   return (
// // // //     <SidebarProvider>
// // // //       <AppSidebar />
// // // //       <SidebarInset>
// // // //         <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
// // // //           <div className="flex items-center gap-2 px-4">
// // // //             <SidebarTrigger className="-ml-1" />
// // // //           </div>
// // // //         </header>
// // // //         <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
// // // //           <div className="grid auto-rows-min gap-4 md:grid-cols-3">
// // // //             <div className="aspect-video rounded-xl bg-muted/50" />
// // // //             <div className="aspect-video rounded-xl bg-muted/50" />
// // // //             <div className="aspect-video rounded-xl bg-muted/50" />
// // // //           </div>
// // // //           <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
// // // //         </div>
// // // //       </SidebarInset>
// // // //     </SidebarProvider>
// // // //   )
// // // // }

// // // "use client";

// // // import {
// // //   BookOpen,
// // //   Clock3,
// // //   Flame,
// // //   Brain,
// // // } from "lucide-react";

// // // import {
// // //   Card,
// // //   CardContent,
// // //   CardHeader,
// // //   CardTitle,
// // // } from "@/components/ui/card";

// // // import { Badge } from "@/components/ui/badge";

// // // import {
// // //   Table,
// // //   TableBody,
// // //   TableCell,
// // //   TableHead,
// // //   TableHeader,
// // //   TableRow,
// // // } from "@/components/ui/table";

// // // import { AppSidebar } from "@/components/app-sidebar";

// // // import {
// // //   SidebarInset,
// // //   SidebarProvider,
// // //   SidebarTrigger,
// // // } from "@/components/ui/sidebar";

// // // import {
// // //   ResponsiveContainer,
// // //   LineChart,
// // //   Line,
// // //   XAxis,
// // //   YAxis,
// // //   Tooltip,
// // //   CartesianGrid,
// // // } from "recharts";

// // // const chartData = [
// // //   { day: "Mon", hours: 12 },
// // //   { day: "Tue", hours: 3.5 },
// // //   { day: "Wed", hours: 1.5 },
// // //   { day: "Thu", hours: 4 },
// // //   { day: "Fri", hours: 2.5 },
// // //   { day: "Sat", hours: 5 },
// // //   { day: "Sun", hours: 3 },
// // // ];

// // // const courses = [
// // //   {
// // //     name: "React Fundamentals",
// // //     progress: "75%",
// // //     time: "12 hrs",
// // //     lastStudied: "Today",
// // //     status: "In Progress",
// // //   },
// // //   {
// // //     name: "Next.js Mastery",
// // //     progress: "100%",
// // //     time: "18 hrs",
// // //     lastStudied: "Yesterday",
// // //     status: "Completed",
// // //   },
// // //   {
// // //     name: "UI/UX Essentials",
// // //     progress: "42%",
// // //     time: "5 hrs",
// // //     lastStudied: "2 days ago",
// // //     status: "In Progress",
// // //   },
// // // ];

// // // export default function Page() {
// // //   return (
// // //     <SidebarProvider>
// // //       <AppSidebar />

// // //       <SidebarInset>
// // //         <header className="flex h-16 items-center px-4 border-b">
// // //           <SidebarTrigger />

// // //           <div className="ml-4">
// // //             <h1 className="text-xl font-semibold">
// // //               Dashboard
// // //             </h1>
// // //           </div>
// // //         </header>

// // //         <main className="flex flex-1 flex-col gap-6 p-6">
// // //           {/* Stats Cards */}

// // //           <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
// // //             <Card>
// // //               <CardHeader className="flex flex-row items-center justify-between pb-2">
// // //                 <CardTitle className="text-sm">
// // //                   Study Hours
// // //                 </CardTitle>

// // //                 <Clock3 className="h-4 w-4" />
// // //               </CardHeader>

// // //               <CardContent>
// // //                 <div className="text-3xl font-bold">
// // //                   124h
// // //                 </div>

// // //                 <p className="text-sm text-muted-foreground">
// // //                   +12h this week
// // //                 </p>
// // //               </CardContent>
// // //             </Card>

// // //             <Card>
// // //               <CardHeader className="flex flex-row items-center justify-between pb-2">
// // //                 <CardTitle className="text-sm">
// // //                   Courses Completed
// // //                 </CardTitle>

// // //                 <BookOpen className="h-4 w-4" />
// // //               </CardHeader>

// // //               <CardContent>
// // //                 <div className="text-3xl font-bold">
// // //                   8
// // //                 </div>

// // //                 <p className="text-sm text-muted-foreground">
// // //                   2 completed this month
// // //                 </p>
// // //               </CardContent>
// // //             </Card>

// // //             <Card>
// // //               <CardHeader className="flex flex-row items-center justify-between pb-2">
// // //                 <CardTitle className="text-sm">
// // //                   Current Streak
// // //                 </CardTitle>

// // //                 <Flame className="h-4 w-4" />
// // //               </CardHeader>

// // //               <CardContent>
// // //                 <div className="text-3xl font-bold">
// // //                   14 Days
// // //                 </div>

// // //                 <p className="text-sm text-muted-foreground">
// // //                   Personal best: 21 days
// // //                 </p>
// // //               </CardContent>
// // //             </Card>

// // //             <Card>
// // //               <CardHeader className="flex flex-row items-center justify-between pb-2">
// // //                 <CardTitle className="text-sm">
// // //                   Daily Focus
// // //                 </CardTitle>

// // //                 <Brain className="h-4 w-4" />
// // //               </CardHeader>

// // //               <CardContent>
// // //                 <div className="text-3xl font-bold">
// // //                   3.4h
// // //                 </div>

// // //                 <p className="text-sm text-muted-foreground">
// // //                   Average per day
// // //                 </p>
// // //               </CardContent>
// // //             </Card>
// // //           </div>

// // //           {/* Study Graph */}

// // //           <Card>
// // //             <CardHeader>
// // //               <CardTitle>
// // //                 Weekly Study Activity
// // //               </CardTitle>
// // //             </CardHeader>

// // //             <CardContent>
// // //               <div className="h-[350px]">
// // //                 <ResponsiveContainer
// // //                   width="100%"
// // //                   height="100%"
// // //                 >
// // //                   <LineChart data={chartData}>
// // //                     <CartesianGrid strokeDasharray="3 3" />

// // //                     <XAxis dataKey="day" />

// // //                     <YAxis />

// // //                     <Tooltip />

// // //                     <Line
// // //                       type="monotone"
// // //                       dataKey="hours"
// // //                       strokeWidth={3}
// // //                     />
// // //                   </LineChart>
// // //                 </ResponsiveContainer>
// // //               </div>
// // //             </CardContent>
// // //           </Card>

// // //           {/* Recent Courses */}

// // //           <Card>
// // //             <CardHeader>
// // //               <CardTitle>
// // //                 Recent Courses
// // //               </CardTitle>
// // //             </CardHeader>

// // //             <CardContent>
// // //               <Table>
// // //                 <TableHeader>
// // //                   <TableRow>
// // //                     <TableHead>
// // //                       Course
// // //                     </TableHead>

// // //                     <TableHead>
// // //                       Progress
// // //                     </TableHead>

// // //                     <TableHead>
// // //                       Time Spent
// // //                     </TableHead>

// // //                     <TableHead>
// // //                       Last Studied
// // //                     </TableHead>

// // //                     <TableHead>
// // //                       Status
// // //                     </TableHead>
// // //                   </TableRow>
// // //                 </TableHeader>

// // //                 <TableBody>
// // //                   {courses.map((course) => (
// // //                     <TableRow key={course.name}>
// // //                       <TableCell className="font-medium">
// // //                         {course.name}
// // //                       </TableCell>

// // //                       <TableCell>
// // //                         {course.progress}
// // //                       </TableCell>

// // //                       <TableCell>
// // //                         {course.time}
// // //                       </TableCell>

// // //                       <TableCell>
// // //                         {course.lastStudied}
// // //                       </TableCell>

// // //                       <TableCell>
// // //                         <Badge variant="secondary">
// // //                           {course.status}
// // //                         </Badge>
// // //                       </TableCell>
// // //                     </TableRow>
// // //                   ))}
// // //                 </TableBody>
// // //               </Table>
// // //             </CardContent>
// // //           </Card>
// // //         </main>
// // //       </SidebarInset>
// // //     </SidebarProvider>
// // //   );
// // // }

// // "use client";

// // import { BookOpen, Clock3, Flame, Brain } from "lucide-react";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { useDashboard } from "@/hooks/use-dashboard";
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// // } from "@/components/ui/table";
// // import {
// //   ResponsiveContainer,
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   CartesianGrid,
// // } from "recharts";

// // const chartData = [
// //   { day: "Mon", hours: 12 },
// //   { day: "Tue", hours: 3.5 },
// //   { day: "Wed", hours: 1.5 },
// //   { day: "Thu", hours: 4 },
// //   { day: "Fri", hours: 2.5 },
// //   { day: "Sat", hours: 5 },
// //   { day: "Sun", hours: 3 },
// // ];

// // const courses = [
// //   {
// //     name: "React Fundamentals",
// //     progress: "75%",
// //     time: "12 hrs",
// //     lastStudied: "Today",
// //     status: "In Progress",
// //   },
// //   {
// //     name: "Next.js Mastery",
// //     progress: "100%",
// //     time: "18 hrs",
// //     lastStudied: "Yesterday",
// //     status: "Completed",
// //   },
// //   {
// //     name: "UI/UX Essentials",
// //     progress: "42%",
// //     time: "5 hrs",
// //     lastStudied: "2 days ago",
// //     status: "In Progress",
// //   },
// // ];

// // export default function Page() {
// //   const { loading, data } = useDashboard();
// //   console.log("Dashboard Data:", data);

// // if (loading) {
// //   return <div>Loading...</div>;
// // }
// //   return (
// //     <>
// //       {/* Stats Cards */}
// //       <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
// //         <Card>
// //           <CardHeader className="flex flex-row items-center justify-between pb-2">
// //             <CardTitle className="text-sm">Study Hours</CardTitle>
// //             <Clock3 className="h-4 w-4" />
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-3xl font-bold">{data?.studyHours}h</div>
// //             <p className="text-sm text-muted-foreground">+12h this week</p>
// //           </CardContent>
// //         </Card>

// //         <Card>
// //           <CardHeader className="flex flex-row items-center justify-between pb-2">
// //             <CardTitle className="text-sm">Courses Completed</CardTitle>
// //             <BookOpen className="h-4 w-4" />
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-3xl font-bold">{data?.completedCourses}</div>
// //             <p className="text-sm text-muted-foreground">2 completed this month</p>
// //           </CardContent>
// //         </Card>

// //         <Card>
// //           <CardHeader className="flex flex-row items-center justify-between pb-2">
// //             <CardTitle className="text-sm">Current Streak</CardTitle>
// //             <Flame className="h-4 w-4" />
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-3xl font-bold">{data?.streak} Days</div>
// //             <p className="text-sm text-muted-foreground">Personal best: 21 days</p>
// //           </CardContent>
// //         </Card>

// //         <Card>
// //           <CardHeader className="flex flex-row items-center justify-between pb-2">
// //             <CardTitle className="text-sm">Daily Focus</CardTitle>
// //             <Brain className="h-4 w-4" />
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-3xl font-bold">{data?.dailyFocus}h</div>
// //             <p className="text-sm text-muted-foreground">Average per day</p>
// //           </CardContent>
// //         </Card>
// //       </div>

// //       {/* Study Graph */}
// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Weekly Study Activity</CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <div className="h-[350px]">
// //             <ResponsiveContainer width="100%" height="100%">
// //               <LineChart data={data?.chartData || []}>
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="day" />
// //                 <YAxis />
// //                 <Tooltip />
// //                 <Line type="monotone" dataKey="hours" strokeWidth={3} />
// //               </LineChart>
// //             </ResponsiveContainer>
// //           </div>
// //         </CardContent>
// //       </Card>

// //       {/* Recent Courses */}
// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Recent Courses</CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <table className="w-full text-sm text-left">
// //             <thead>
// //               <tr className="border-b text-muted-foreground">
// //                 <th className="pb-3 font-medium">Course</th>
// //                 <th className="pb-3 font-medium">Progress</th>
// //                 <th className="pb-3 font-medium">Time Spent</th>
// //                 <th className="pb-3 font-medium">Last Studied</th>
// //                 <th className="pb-3 font-medium">Status</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {data?.courses?.map((course : any) => (
// //                 <tr key={course.name} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
// //                   <td className="py-3 font-medium text-black">{course.name}</td>
// //                   <td className="py-3">{course.progress}</td>
// //                   <td className="py-3">{course.time}</td>
// //                   <td className="py-3">{course.lastStudied}</td>
// //                   <td className="py-3">
// //                     <Badge variant="secondary">{course.status}</Badge>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </CardContent>
// //       </Card>
// //     </>
// //   );
// // }

// "use client";
// import { useEffect, useState } from "react";
// import { BookOpen, Clock3, Flame, Brain } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
// } from "recharts";

// const chartData = [
//   { day: "Mon", hours: 12 },
//   { day: "Tue", hours: 3.5 },
//   { day: "Wed", hours: 1.5 },
//   { day: "Thu", hours: 4 },
//   { day: "Fri", hours: 2.5 },
//   { day: "Sat", hours: 5 },
//   { day: "Sun", hours: 3 },
// ];

// const courses = [
//   {
//     name: "React Fundamentals",
//     progress: "75%",
//     time: "12 hrs",
//     lastStudied: "Today",
//     status: "In Progress",
//   },
//   {
//     name: "Next.js Mastery",
//     progress: "100%",
//     time: "18 hrs",
//     lastStudied: "Yesterday",
//     status: "Completed",
//   },
//   {
//     name: "UI/UX Essentials",
//     progress: "42%",
//     time: "5 hrs",
//     lastStudied: "2 days ago",
//     status: "In Progress",
//   },
// ];

// export default function Page() {
//   const [activity, setActivity] = useState<any[]>([]);

// useEffect(() => {
//   const stored = localStorage.getItem(
//     "dashboard-activity"
//   );

//   if (stored) {
//     setActivity(JSON.parse(stored));
//   }
// }, []);
//   return (
//     <>
//       {/* Stats Cards */}
//       <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm">Study Hours</CardTitle>
//             <Clock3 className="h-4 w-4" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-3xl font-bold">124h</div>
//             <p className="text-sm text-muted-foreground">+12h this week</p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm">Courses Completed</CardTitle>
//             <BookOpen className="h-4 w-4" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-3xl font-bold">8</div>
//             <p className="text-sm text-muted-foreground">2 completed this month</p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm">Current Streak</CardTitle>
//             <Flame className="h-4 w-4" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-3xl font-bold">14 Days</div>
//             <p className="text-sm text-muted-foreground">Personal best: 21 days</p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm">Daily Focus</CardTitle>
//             <Brain className="h-4 w-4" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-3xl font-bold">3.4h</div>
//             <p className="text-sm text-muted-foreground">Average per day</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Study Graph */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Weekly Study Activity</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="h-[350px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={chartData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="day" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="hours" strokeWidth={3} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Recent Courses */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Recent Courses</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <table className="w-full text-sm text-left">
//             <thead>
//               <tr className="border-b text-muted-foreground">
//                 <th className="pb-3 font-medium">Course</th>
//                 <th className="pb-3 font-medium">Progress</th>
//                 <th className="pb-3 font-medium">Time Spent</th>
//                 <th className="pb-3 font-medium">Last Studied</th>
//                 <th className="pb-3 font-medium">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {courses.map((course) => (
//                 <tr key={course.name} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
//                   <td className="py-3 font-medium text-black">{course.name}</td>
//                   <td className="py-3">{course.progress}</td>
//                   <td className="py-3">{course.time}</td>
//                   <td className="py-3">{course.lastStudied}</td>
//                   <td className="py-3">
//                     <Badge variant="secondary">{course.status}</Badge>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </CardContent>
//       </Card>
//     </>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { Users, Eye, Flame, Trophy } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
// } from "recharts";

// import {
//   getActivities,
//   getChartData,
//   getCompletedRoadmapsCount,
//   getDashboardStats,
//   getStudyStreak,
//   updateDashboardStats,
// } from "@/lib/dashboard-storage";

// interface Activity {
//   name: string;
//   progress: string;
//   lastStudied: string;
//   status: string;
// }

// export default function DashboardPage() {
//   const [platformVisits, setPlatformVisits] = useState(0);
//   const [activeStudents, setActiveStudents] = useState(0);
//   const [streak, setStreak] = useState(0);
//   const [completedRoadmaps, setCompletedRoadmaps] = useState(0);

//   const [chartData, setChartData] = useState<any[]>([]);
//   const [activities, setActivities] = useState<Activity[]>([]);

//   useEffect(() => {
//     const stats = getDashboardStats();

//     setPlatformVisits(stats.platformVisits);
//     setActiveStudents(stats.activeStudents);

//     setCompletedRoadmaps(
//       getCompletedRoadmapsCount()
//     );

//     setStreak(getStudyStreak());

//     setChartData(getChartData());

//     setActivities(getActivities());

//     const interval = setInterval(() => {
//       const updated = updateDashboardStats();

//       setPlatformVisits(updated.platformVisits);

//       setActiveStudents(updated.activeStudents);
//     }, 72000); // 1.2 minutes

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {/* Dashboard Cards */}

//       <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm">
//               Global Platform Visits
//             </CardTitle>

//             <Eye className="h-4 w-4" />
//           </CardHeader>

//           <CardContent>
//             <div className="text-3xl font-bold">
//               {platformVisits.toLocaleString()}
//             </div>

//             <p className="text-sm text-muted-foreground">
//               Live platform activity
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm">
//               Active Students
//             </CardTitle>

//             <Users className="h-4 w-4" />
//           </CardHeader>

//           <CardContent>
//             <div className="text-3xl font-bold">
//               {activeStudents}
//             </div>

//             <p className="text-sm text-muted-foreground">
//               Currently learning
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm">
//               Study Streak
//             </CardTitle>

//             <Flame className="h-4 w-4" />
//           </CardHeader>

//           <CardContent>
//             <div className="text-3xl font-bold">
//               {streak}
//             </div>

//             <p className="text-sm text-muted-foreground">
//               Consecutive learning days
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm">
//               Completed Career Roadmaps
//             </CardTitle>

//             <Trophy className="h-4 w-4" />
//           </CardHeader>

//           <CardContent>
//             <div className="text-3xl font-bold">
//               {completedRoadmaps}
//             </div>

//             <p className="text-sm text-muted-foreground">
//               Total finished roadmaps
//             </p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Graph */}

//       <Card>
//         <CardHeader>
//           <CardTitle>
//             Platform Users This Week
//           </CardTitle>
//         </CardHeader>

//         <CardContent>
//           <div className="h-[350px]">
//             <ResponsiveContainer
//               width="100%"
//               height="100%"
//             >
//               <LineChart data={chartData}>
//                 <CartesianGrid strokeDasharray="3 3" />

//                 <XAxis dataKey="day" />

//                 <YAxis />

//                 <Tooltip />

//                 <Line
//                   type="monotone"
//                   dataKey="users"
//                   strokeWidth={3}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Activity Table */}

// <Card>
//   <CardHeader>
//     <CardTitle>
//       Learning Activity
//     </CardTitle>
//   </CardHeader>

//   <CardContent>
//     <table className="w-full text-sm text-left">
//       <thead>
//         <tr className="border-b text-muted-foreground">
//           <th className="pb-3 font-medium">
//             Roadmap
//           </th>

//           <th className="pb-3 font-medium">
//             Progress
//           </th>

//           <th className="pb-3 font-medium">
//             Last Studied
//           </th>

//           <th className="pb-3 font-medium">
//             Status
//           </th>
//         </tr>
//       </thead>

//       <tbody>
//         {activities.length === 0 ? (
//           <tr>
//             <td
//               colSpan={4}
//               className="py-6 text-center text-muted-foreground"
//             >
//               No roadmap activity yet.
//             </td>
//           </tr>
//         ) : (
//           activities.map((item) => (
//             <tr
//               key={item.name}
//               className="border-b last:border-0"
//             >
//               <td className="py-3 font-medium">
//                 {item.name}
//               </td>

//               <td className="py-3">
//                 {item.progress}
//               </td>

//               <td className="py-3">
//                 {item.lastStudied}
//               </td>

//               <td className="py-3">
//                 <Badge variant="secondary">
//                   {item.status}
//                 </Badge>
//               </td>
//             </tr>
//           ))
//         )}
//       </tbody>
//     </table>
//   </CardContent>
// </Card>
//     </>
//   );
// }

"use client";

import { useEffect, useState, useMemo } from "react";
import { Users, Eye, Flame, Trophy } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatRelativeTime } from "@/lib/utils";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import {
  getActivities,
  getChartData,
  getCompletedRoadmapsCount,
  getDashboardStats,
  getStudyStreak,
  updateDashboardStats,
  getPersonalBest,
} from "@/lib/dashboard-storage";

interface Activity {
  name: string;
  progress: string;
  lastStudied: string;
  status: string;
}

type Timeframe = "7d" | "30d" | "12m";

export default function DashboardPage() {
  const [platformVisits, setPlatformVisits] = useState(0);
  const [activeStudents, setActiveStudents] = useState(0);
  const [streak, setStreak] = useState(0);
  const [personalBest, setPersonalBest] = useState(0);
  const [completedRoadmaps, setCompletedRoadmaps] = useState(0);

  const [rawChartData, setRawChartData] = useState<any>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [timeframe, setTimeframe] = useState<Timeframe>("7d");

  useEffect(() => {
    const stats = getDashboardStats();
    setPlatformVisits(stats.platformVisits);
    setActiveStudents(stats.activeStudents);
    setCompletedRoadmaps(getCompletedRoadmapsCount());
    setStreak(getStudyStreak());
    setPersonalBest(getPersonalBest());
    setRawChartData(getChartData());
    setActivities(getActivities());

    const interval = setInterval(() => {
      const updated = updateDashboardStats();
      setPlatformVisits(updated.platformVisits);
      setActiveStudents(updated.activeStudents);
    }, 72000); // 1.2 minutes

    return () => clearInterval(interval);
  }, []);

  // Process data to dynamically shift and slice the timeline based on today's real date
  const processedChartData = useMemo(() => {
    if (!rawChartData) return [];

    const now = new Date();
    const currentData = rawChartData[timeframe] || [];

    if (timeframe === "7d") {
      // JavaScript getDay(): 0 is Sun, 1 is Mon, 2 is Tue, 3 is Wed, 4 is Thu, 5 is Fri, 6 is Sat
      const geoDayIndex = now.getDay();
      // Map to your default7d array indices (Mon=0, Tue=1, ..., Sat=5, Sun=6)
      const currentDayIndex = geoDayIndex === 0 ? 6 : geoDayIndex - 1;

      // Rotate the data array so it cleanly concludes exactly on today's day of the week
      const rotatedData = [
        ...currentData.slice(currentDayIndex + 1),
        ...currentData.slice(0, currentDayIndex + 1),
      ];

      return rotatedData;
    }

    // if (timeframe === "30d") {
    //   const currentDayOfMonth = now.getDate(); // e.g., 29

    //   // Slice out only the data slots up to the current day numbers of the month
    //   return currentData.slice(0, currentDayOfMonth);
    // }

    if (timeframe === "30d") {
      return currentData.map((item: any, index: number) => {
        const date = new Date();
        date.setDate(date.getDate() - (29 - index));

        return {
          ...item,
          label: date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
        };
      });
    }

    if (timeframe === "12m") {
      const currentMonthIndex = now.getMonth(); // 0-11 (Jan-Dec)

      // Rotate months so the final data point displayed is exactly the current month
      const rotatedMonths = [
        ...currentData.slice(currentMonthIndex + 1),
        ...currentData.slice(0, currentMonthIndex + 1),
      ];

      return rotatedMonths;
    }

    return currentData;
  }, [rawChartData, timeframe]);

  // Dynamic titles for professional presentation
  const chartTitle = {
    "7d": "Platform Activity This Week",
    "30d": "Platform Activity This Month",
    "12m": "Platform Performance Year-to-Date",
  }[timeframe];

  return (
    <div className="space-y-6">
      {/* Dashboard Cards */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Global Platform Visits
            </CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {platformVisits.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Live platform activity
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Active Students
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{activeStudents}</div>
            <p className="text-xs text-muted-foreground">Currently learning</p>
          </CardContent>
        </Card>

        {/* <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Flame className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{streak}</div>
            <p className="text-xs text-muted-foreground">
              Consecutive learning days
            </p>
          </CardContent>
        </Card> */}

        <Card>
  <CardHeader className="flex flex-row items-center justify-between pb-2">
    <CardTitle className="text-sm font-medium">
      Study Streak
    </CardTitle>
    <Flame className="h-4 w-4 text-muted-foreground" />
  </CardHeader>

  <CardContent>
    <div className="text-3xl font-bold">
      {streak}
    </div>

    <p className="text-xs text-muted-foreground">
      Personal best: {personalBest} days
    </p>
  </CardContent>
</Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Career Roadmaps
            </CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{completedRoadmaps}</div>
            <p className="text-xs text-muted-foreground">
              Total finished roadmaps
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Upgraded Professional Graph Card */}
      <Card className="col-span-4">
        <CardHeader className="flex flex-col items-start justify-between space-y-2 border-b sm:flex-row sm:items-center sm:space-y-0 pb-4">
          <div className="space-y-0.5">
            <CardTitle className="text-xl font-semibold tracking-tight">
              {chartTitle}
            </CardTitle>
            <CardDescription>
              Real-time analytics vs projected user baselines
            </CardDescription>
          </div>
          <Tabs
            value={timeframe}
            onValueChange={(value: any) => setTimeframe(value as Timeframe)}
            className="w-full sm:w-auto"
          >
            <TabsList className="grid w-full grid-cols-3 sm:w-[260px]">
              <TabsTrigger value="7d">7 Days</TabsTrigger>
              <TabsTrigger value="30d">30 Days</TabsTrigger>
              <TabsTrigger value="12m">12 Months</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>

        {/* 
    1. Added overflow-x-auto to ensure the card container wraps long content gracefully.
    2. Optional: custom scrollbar classes can be added here if needed, like scrollbar-thin 
  */}
        <CardContent className="pt-6 overflow-x-auto">
          {/* 
      We force a min-width context on mobile screen variants so the labels and axis scales 
      have space to render beautifully without overlapping.
    */}
          <div className="h-[350px] w-full min-w-[600px] sm:min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={processedChartData}
                margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  className="stroke-muted/90"
                />
                <XAxis
                  dataKey="label"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const val = payload[0].value;
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm text-xs">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <span className="text-[10px] uppercase text-muted-foreground font-medium">
                                {payload[0].payload.label}
                              </span>
                              <span className="font-bold text-foreground">
                                {val !== undefined
                                  ? `${val} Users`
                                  : "No data yet"}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="currentColor"
                  className="text-primary"
                  strokeWidth={2}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                  dot={false}
                  connectNulls={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Learning Activity Table Card */}
      <Card>
        <CardHeader>
          <CardTitle>Learning Activity</CardTitle>
        </CardHeader>

        {/* 
    Wrapping the native table block inside an overflow container preserves layout scale 
    while activating native multi-touch horizontal swipes on mobile views.
  */}
        <CardContent className="overflow-x-auto w-full">
          {/* 
      Adding a clean min-w configuration forces the columns to space out beautifully 
      on mobile browsers instead of squishing text columns.
    */}
          <table className="w-full text-sm text-left min-w-[500px] sm:min-w-0">
            <thead>
              <tr className="border-b text-muted-foreground">
                <th className="pb-3 font-medium">Roadmap</th>
                <th className="pb-3 font-medium">Progress</th>
                <th className="pb-3 font-medium">Last Studied</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>

            <tbody>
              {activities.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="py-6 text-center text-muted-foreground"
                  >
                    No roadmap activity yet.
                  </td>
                </tr>
              ) : (
                activities.map((item) => (
                  <tr key={item.name} className="border-b last:border-0">
                    <td className="py-3 font-medium">{item.name}</td>

                    <td className="py-3">{item.progress}</td>

                    <td className="py-3 text-muted-foreground">
                      {formatRelativeTime(item.lastStudied)}
                    </td>

                    <td className="py-3">
                      <Badge variant="secondary">{item.status}</Badge>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
