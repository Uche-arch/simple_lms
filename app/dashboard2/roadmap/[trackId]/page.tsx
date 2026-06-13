// "use client";

// import { useParams, useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import { ArrowLeft, LayoutDashboard, AlertCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { useRoadmap } from "@/hooks/use-roadmap";
// import { RoadmapNodeCard } from "@/components/roadmap-node-card";
// import { RoadmapCompletionModal } from "@/components/roadmap-completion-modal";
// import { roadmapsData } from "@/config/roadmaps";

// export default function DynamicRoadmapWorkspacePage() {
//   const params = useParams();
//   const router = useRouter();

//   // Read URL parameter dynamically (e.g., /dashboard/html or /dashboard/css)
//   const trackId = params.trackId as string;
//   const track = roadmapsData[trackId];

//   // Initialize your modal open state engine
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Hook activation happens conditionally to prevent crash on incorrect track routes
//   const { checked, progress, toggle, completed } = useRoadmap(
//     track?.id || "unknown",
//     track?.title || "Unknown Track",
//     track?.nodes || []
//   );

//   // Watch for track structural completeness to toggle the modal open
//   useEffect(() => {
//     if (completed) {
//       setIsModalOpen(true);
//     }
//   }, [completed]);

//   // Handle missing tracking profiles gracefully
//   if (!track) {
//     return (
//       <div className="flex flex-col items-center justify-center h-[70vh] space-y-4 max-w-md mx-auto text-center px-4">
//         <div className="h-12 w-12 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center">
//           <AlertCircle className="h-6 w-6" />
//         </div>
//         <div>
//           <h3 className="font-bold text-lg text-foreground">Track Profile Not Found</h3>
//           <p className="text-xs text-muted-foreground mt-1">
//             The learning roadmap track route "{trackId}" hasn't been configured inside your data registry files yet.
//           </p>
//         </div>
//         <Button size="sm" variant="outline" onClick={() => router.push("/dashboard")} className="gap-2 text-xs">
//           <ArrowLeft className="h-3.5 w-3.5" /> Return to Workspace
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-5xl p-6 mx-auto space-y-6">
      
//       {/* Dynamic Back-Link Action Row */}
//       <Button 
//         variant="ghost" 
//         size="sm" 
//         onClick={() => router.push("/dashboard")} 
//         className="text-muted-foreground hover:text-foreground -ml-2 text-xs gap-1.5"
//       >
//         <ArrowLeft className="h-3.5 w-3.5" /> Back to Dashboard Overview
//       </Button>

//       {/* Dynamic Context Header */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
//         <div className="space-y-1">
//           <h1 className="text-3xl font-bold tracking-tight text-foreground">{track.title}</h1>
//           <p className="text-sm text-muted-foreground">{track.description}</p>
//         </div>
        
//         <div className="min-w-[240px] bg-muted/20 border p-3 rounded-xl shadow-sm">
//           <div className="flex justify-between text-xs mb-1.5 font-semibold">
//             <span className="text-muted-foreground">Track Progress</span>
//             <span className="text-primary font-mono">{progress}%</span>
//           </div>
//           <Progress value={progress} className="h-2" />
//         </div>
//       </div>

//       {/* Shared Grid Layout mapping the chosen track metadata loop */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
//         {track.nodes.map((node) => (
//           <RoadmapNodeCard
//             key={node.id}
//             node={node}
//             isCompleted={checked.includes(node.id)}
//             onToggle={() => toggle(node.id)}
//           />
//         ))}
//       </div>

//       {/* Standardized Modal Trigger Instance */}
//       <RoadmapCompletionModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         trackTitle={track.title}
//       />
//     </div>
//   );
// }


"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useRoadmap } from "@/hooks/use-roadmap";
import { RoadmapNodeCard } from "@/components/roadmap-node-card";
// Import the new unified CoffeeModal instead of the old completion modal
import { CoffeeModal } from "@/components/coffee-modal"; 
import { roadmapsData } from "@/config/roadmaps";
import { useEffect } from "react";
import {
  getRoadmap,
  saveRoadmap,
  saveActivity,
} from "@/lib/dashboard-storage";

export default function DynamicRoadmapWorkspacePage() {




  const params = useParams();
  const router = useRouter();

  const trackId = params.trackId as string;
  const track = roadmapsData[trackId];

  // Pull states directly from your updated hook execution
  const { 
    checked, 
    progress, 
    toggle, 
    isCoffeeModalOpen, 
    setIsCoffeeModalOpen 
  } = useRoadmap(
    track?.id || "unknown",
    track?.title || "Unknown Track",
    track?.nodes || []
  );

    useEffect(() => {
  if (!track) return;

  const roadmap = getRoadmap(track.id, track.title);

  if (!roadmap) return;

  const today = new Date().toISOString();

  const updatedRoadmap = {
    ...roadmap,
    lastStudied: today,
  };

  saveRoadmap(track.id, updatedRoadmap);

  saveActivity({
    name: track.title,
    progress: `${roadmap.progress}%`,
    lastStudied: today,
    status: roadmap.status,
  });
}, [track]);

  // Handle missing tracking profiles gracefully
  if (!track) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] space-y-4 max-w-md mx-auto text-center px-4">
        <div className="h-12 w-12 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center">
          <AlertCircle className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-foreground">Track Profile Not Found</h3>
          <p className="text-xs text-muted-foreground mt-1">
            The learning roadmap track route "{trackId}" hasn't been configured inside your data registry files yet.
          </p>
        </div>
        <Button size="sm" variant="outline" onClick={() => router.back()} className="gap-2 text-xs">
          <ArrowLeft className="h-3.5 w-3.5" /> Back
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl p-6 mx-auto space-y-6">
      
      {/* Dynamic Back-Link Action Row */}
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => router.push("/dashboard2")}
        className="text-muted-foreground hover:text-foreground -ml-2 text-xs gap-1.5"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back to dashboard
      </Button>

      {/* Dynamic Context Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">{track.title}</h1>
          <p className="text-sm text-muted-foreground">{track.description}</p>
        </div>
        
        <div className="min-w-[240px] bg-muted/20 border p-3 rounded-xl shadow-sm">
          <div className="flex justify-between text-xs mb-1.5 font-semibold">
            <span className="text-muted-foreground">Track Progress</span>
            <span className="text-primary font-mono">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Shared Grid Layout mapping the chosen track metadata loop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {track.nodes.map((node) => (
          <RoadmapNodeCard
            key={node.id}
            node={node}
            isCompleted={checked.includes(node.id)}
            onToggle={() => toggle(node.id)}
          />
        ))}
      </div>

      {/* The Single Unified Milestone & Monetization Modal */}
      <CoffeeModal
        isOpen={isCoffeeModalOpen}
        onOpenChange={setIsCoffeeModalOpen}
        roadmapTitle={track.title}
        // progress={progress}
      />
    </div>
  );
}