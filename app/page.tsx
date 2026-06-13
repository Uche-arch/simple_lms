// import Link from "next/link";

// // import {
// //   LoginLink,
// //   RegisterLink,
// // } from "@kinde-oss/kinde-auth-nextjs/components";

// // import {
// //   getKindeServerSession,
// // } from "@kinde-oss/kinde-auth-nextjs/server";

// export default async function HomePage() {
//   // const { getUser } =
//   //   getKindeServerSession();

//   // const user = await getUser();

//   return (
//     <main className="min-h-screen bg-black text-white">
//       {/* NAVBAR */}
//       <header className="border-b border-white/10">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
//           <h1 className="text-2xl font-bold">
//             DevAcademy
//           </h1>
//           </div>

//       </header>

//       {/* HERO */}
//       <section className="mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
//         <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
//           Learn Through Structured Roadmaps
//         </div>

//         <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
//           Become A Better Developer With Guided Learning
//         </h1>

//         <p className="mt-6 max-w-2xl text-lg text-white/70">
//           Learn frontend, backend, and fullstack development
//           through curated roadmaps, practical projects, and
//           real-world lessons.
//         </p>

//         <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//           <Link
//             href="/dashboard2"
//             className="rounded-xl bg-white px-8 py-4 font-semibold text-black"
//           >
//             Explore Courses
//           </Link>

//           {/* <Link
//             href="/roadmaps"
//             className="rounded-xl border border-white/20 px-8 py-4"
//           >
//             View Roadmaps
//           </Link> */}
//         </div>
//       </section>
//     </main>
//   );
// }

// import Link from "next/link";
// import { ArrowRight, Code2, Layers, Cpu, Compass } from "lucide-react";

// export default async function HomePage() {
//   return (
//     // Uses structural semantic background tokens that inherit straight from globals.css
//     <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">

//       {/* NAVBAR */}
//       <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
//           <div className="flex items-center gap-2.5">
//             <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/20">
//               <Code2 className="size-5" />
//             </div>
//             <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
//               DevAcademy
//             </span>
//           </div>

//           <Link
//             href="/dashboard2"
//             className="group flex items-center gap-1.5 rounded-xl bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary/80"
//           >
//             Go to Console
//             <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
//           </Link>
//         </div>
//       </header>

//       {/* HERO SECTION */}
//       <section className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 pt-12 pb-20 text-center overflow-hidden">
//         {/* Subtle dynamic backdrop glowing ambient circles fueled by your primary css variable */}
//         <div className="absolute top-1/4 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

//         <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur-sm shadow-inner">
//           <Compass className="size-3.5 text-primary animate-pulse" />
//           Learn Through Structured Roadmaps
//         </div>

//         <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl leading-[1.15]">
//           Become A Better Developer With{" "}
//           <span className="bg-gradient-to-r from-primary via-primary/90 to-muted-foreground bg-clip-text text-transparent">
//             Guided Learning
//           </span>
//         </h1>

//         <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
//           Learn frontend, backend, and fullstack development through curated
//           roadmaps, practical projects, and real-world milestones built for modern creators.
//         </p>

//         <div className="mt-10 flex flex-col gap-4 w-full sm:w-auto sm:flex-row justify-center px-4">
//           <Link
//             href="/dashboard2"
//             className="group flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99]"
//           >
//             Explore Courses
//             <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
//           </Link>
//         </div>
//       </section>

//       {/* CURATED TRACKS GRID SECTION */}
//       <section className="border-t border-border bg-muted/30 py-20">
//         <div className="mx-auto max-w-6xl px-6">
//           <div className="text-center max-w-2xl mx-auto mb-14">
//             <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Engineered for Quick Mastery</h2>
//             <p className="text-muted-foreground mt-2 text-sm sm:text-base">
//               Skip the tutorial hell. Focus on the core building blocks of the engineering industry stack.
//             </p>
//           </div>

//           <div className="grid gap-6 sm:grid-cols-3">
//             {/* Frontend Card */}
//             <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md hover:border-border/80">
//               <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
//                 <Code2 className="size-5" />
//               </div>
//               <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Frontend Architecture</h3>
//               <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
//                 Master React, Next.js, and advanced design engines to construct stunning, performant interfaces.
//               </p>
//             </div>

//             {/* Backend Card */}
//             <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md hover:border-border/80">
//               <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
//                 <Cpu className="size-5" />
//               </div>
//               <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Backend Engineering</h3>
//               <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
//                 Architect scalable database models, custom API microservices, and reliable multitenant software systems.
//               </p>
//             </div>

//             {/* DevOps/Fullstack Card */}
//             <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md hover:border-border/80">
//               <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
//                 <Layers className="size-5" />
//               </div>
//               <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Fullstack Deployment</h3>
//               <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
//                 Connect your logic streams together, handling local storage hydration, server authentication, and fast clouds.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// import Link from "next/link";
// import {
//   ArrowRight,
//   Code2,
//   Sparkles,
//   BookOpen,
//   Trophy,
// } from "lucide-react";

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-background text-foreground overflow-hidden">
//       {/* Navbar */}
//       <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
//               <Code2 className="h-5 w-5" />
//             </div>

//             <span className="text-xl font-bold">DevAcademy</span>
//           </div>

//           <Link
//             href="/dashboard2"
//             className="rounded-xl border px-4 py-2 text-sm font-medium transition hover:bg-muted"
//           >
//             Dashboard
//           </Link>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="relative flex min-h-[calc(100vh-73px)] items-center justify-center px-6">
//         {/* Background Glow */}
//         <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

//         <div className="relative mx-auto max-w-5xl text-center">
//           {/* Badge */}
//           <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/60 px-4 py-2 text-xs font-medium text-muted-foreground">
//             <Sparkles className="h-3.5 w-3.5 text-primary" />
//             Structured Developer Roadmaps
//           </div>

//           {/* Heading */}
//           <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
//             Learn Development
//             <br />
//             Through Clear
//             <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
//               {" "}
//               Roadmaps
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
//             Stop jumping between random tutorials. Follow structured lessons,
//             complete projects, track your progress, and become a better
//             developer one step at a time.
//           </p>

//           {/* CTA */}
//           <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
//             <Link
//               href="/dashboard2"
//               className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:scale-[1.02]"
//             >
//               Start Learning
//               <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//             </Link>

//           </div>

//           {/* Small Stats */}
//           <div className="mt-12 grid gap-4 sm:grid-cols-3">
//             <div className="rounded-2xl border bg-card p-5">
//               <div className="text-2xl font-bold">HTML</div>
//               <p className="text-sm text-muted-foreground">
//                 Foundation roadmap available
//               </p>
//             </div>

//             <div className="rounded-2xl border bg-card p-5">
//               <div className="text-2xl font-bold">CSS</div>
//               <p className="text-sm text-muted-foreground">
//                 Projects and challenges included
//               </p>
//             </div>

//             <div className="rounded-2xl border bg-card p-5">
//               <div className="flex items-center justify-center gap-2 text-2xl font-bold">
//                 <Trophy className="h-5 w-5 text-primary" />
//                 Streaks
//               </div>

//               <p className="text-sm text-muted-foreground">
//                 Track learning consistency
//               </p>
//             </div>
//           </div>

//           {/* Current Status */}
//           <p className="mt-8 text-sm text-muted-foreground">
//             🚧 Currently focused on Frontend Development. More learning tracks
//             are being added over time.
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }

// import Link from "next/link";
// import { ArrowRight, Code2, Sparkles, Trophy } from "lucide-react";
// import { Hero7 } from "@/components/hero7";
// import { Navbar1 } from "@/components/navbar1";

// export default function HomePage() {
//   return (
//     <>
//       <main className="p-2">
//         <Navbar1></Navbar1>
//         <Hero7></Hero7>
//       </main>
//     </>
//   );
// }


import { Hero7 } from "@/components/hero7";
import { Navbar1 } from "@/components/navbar1";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar1 />
      <Hero7 />
    </main>
  );
}