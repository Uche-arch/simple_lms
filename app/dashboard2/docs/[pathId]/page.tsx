// "use client";

// import { useParams, useRouter } from "next/navigation";
// import { ArrowLeft, BookOpen, Compass, CheckSquare } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { careerDocsData } from "@/config/career-docs";

// export default function CareerDocumentationPage() {
//   const params = useParams();
//   const router = useRouter();

//   const pathId = params.pathId as string;
//   const doc = careerDocsData[pathId];

//   if (!doc) {
//     return (
//       <div className="flex flex-col items-center justify-center h-96 space-y-4">
//         <p className="text-muted-foreground text-sm">Documentation path profile not found.</p>
//         <Button size="sm" variant="outline" onClick={() => router.push("/dashboard")}>
//           <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto w-full max-w-4xl space-y-6 py-2">
//       {/* Back navigation button link */}
//       <Button
//         variant="ghost"
//         size="sm"
//         onClick={() => router.push("/dashboard2")}
//         className="text-muted-foreground hover:text-foreground -ml-2 text-xs gap-1.5"
//       >
//         <ArrowLeft className="h-3.5 w-3.5" /> Back to Workspace
//       </Button>

//       {/* Hero Header Context Panel */}
//       <div className="space-y-2">
//         <div className="flex items-center gap-2 text-primary font-mono text-[10px] uppercase tracking-wider font-semibold">
//           <BookOpen className="h-3.5 w-3.5" /> Career Path Documentation
//         </div>
//         <h1 className="text-2xl font-bold tracking-tight text-foreground">{doc.title}</h1>
//         <p className="text-sm leading-relaxed text-muted-foreground/90 max-w-2xl">
//           {doc.overview}
//         </p>
//       </div>

//       <hr className="border-muted/60" />

//       {/* Main Structural Breakdown Details */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

//         {/* Core Competencies Checklist Sidebar Panel */}
//         <div className="md:col-span-1 space-y-3">
//           <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 px-0.5">
//             <CheckSquare className="h-3.5 w-3.5 text-primary" /> Key Benchmarks
//           </h2>
//           <Card className="bg-muted/10 border-muted/80 shadow-none">
//             <CardContent className="p-3.5 space-y-2">
//               {doc.coreSkills.map((skill) => (
//                 <div key={skill} className="flex items-center gap-2 text-xs text-foreground/80 font-medium bg-background border px-2.5 py-1.5 rounded-lg shadow-sm">
//                   <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
//                   <span className="truncate">{skill}</span>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>
//         </div>

//         {/* Phase Timeline Milestones */}
//         <div className="md:col-span-2 space-y-3">
//           <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 px-0.5">
//             <Compass className="h-3.5 w-3.5 text-primary" /> Core Architectural Blueprints
//           </h2>

//           <div className="space-y-4">
//             {doc.blueprints.map((blueprint, index) => (
//               <Card key={index} className="shadow-sm border-muted/80 hover:border-muted-foreground/30 transition-all">
//                 <CardHeader className="p-4 pb-1">
//                   <CardTitle className="text-xs font-bold text-foreground/90">{blueprint.phase}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-4 pt-1">
//                   <p className="text-xs leading-relaxed text-muted-foreground">
//                     {blueprint.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { careerDocsData } from "@/config/career-docs";

export default function CareerDocumentationPage() {
  const params = useParams();
  const router = useRouter();

  const pathId = params.pathId as string;
  const doc = careerDocsData[pathId];

  if (!doc) {
    return (
      <div className="flex flex-col items-center justify-center h-96 gap-4">
        <p className="text-sm text-muted-foreground">
          Documentation not found.
        </p>

        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push("/dashboard")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl w-full py-2 space-y-8">
      {/* Back Button */}
      {/* <Button
        variant="ghost"
        size="sm"
        onClick={() => router.back()}
        className="-ml-2"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back
      </Button> */}

      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">{doc.title}</h1>

        {/* <p className="max-w-3xl text-muted-foreground leading-relaxed">
          {doc.overview}
        </p> */}
        {doc.overview.map((paragraph, index) => (
          <p key={index} className="text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Skills You'll Learn</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {doc.coreSkills.map((skill) => (
              <div
                key={skill}
                className="rounded-full border px-3 py-1 text-sm bg-muted/40"
              >
                {skill}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Path */}
      <Card>
        <CardHeader>
          <CardTitle>Learning Path</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {doc.learningPath.map((step, index) => (
            <div key={step.title} className="border-l-2 border-primary/20 pl-5">
              <h3 className="font-semibold">
                {index + 1}. {step.title}
              </h3>

              {/* <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p> */}
              {step.description.map((item, i) => (
                <p
                  key={i}
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* CTA */}
      <Card>
  <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h3 className="font-medium">Ready to start learning?</h3>

      <p className="text-sm text-muted-foreground">
        Start with HTML and CSS. More frontend tracks are coming soon.
      </p>
    </div>

    <Button onClick={() => router.push(doc.roadmapLink)}>
      Start Roadmap
    </Button>
  </CardContent>
</Card>
    </div>
  );
}
