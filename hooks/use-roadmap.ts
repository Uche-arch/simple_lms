// // // "use client";

// // // import { useEffect, useState } from "react";

// // // import {
// // //   saveRoadmap,
// // //   getRoadmap,
// // //   saveActivity,
// // //   updateStudyStreak,
// // // } from "@/lib/dashboard-storage";

// // // export function useRoadmap(
// // //   roadmapName: string,
// // //   roadmapTitle: string,
// // //   roadmap: string[]
// // // ) {
// // //   const [checked, setChecked] = useState<string[]>([]);

// // //   useEffect(() => {
// // //     const data = getRoadmap(roadmapName);

// // //     if (data) {
// // //       setChecked(data.completedSections);
// // //     }

// // //     updateStudyStreak();
// // //   }, [roadmapName]);

// // //   const progress = Math.round(
// // //     (checked.length / roadmap.length) * 100
// // //   );

// // // const saveEverything = (updated: string[]) => {
// // //   const today = new Date().toLocaleDateString();

// // //   const currentProgress = Math.round(
// // //     (updated.length / roadmap.length) * 100
// // //   );

// // //   const status:
// // //     | "Not Started"
// // //     | "In Progress"
// // //     | "Completed" =
// // //     updated.length === roadmap.length
// // //       ? "Completed"
// // //       : updated.length > 0
// // //       ? "In Progress"
// // //       : "Not Started";

// // //   saveRoadmap(roadmapName, {
// // //     completedSections: updated,
// // //     progress: currentProgress,
// // //     lastStudied: today,
// // //     status,
// // //   });

// // //   saveActivity({
// // //     name: roadmapTitle,
// // //     progress: `${currentProgress}%`,
// // //     lastStudied: today,
// // //     status,
// // //   });
// // // };

// // //   const toggle = (item: string) => {
// // //     let updated: string[];

// // //     if (checked.includes(item)) {
// // //       updated = checked.filter(
// // //         (i) => i !== item
// // //       );
// // //     } else {
// // //       updated = [...checked, item];
// // //     }

// // //     setChecked(updated);

// // //     saveEverything(updated);
// // //   };

// // //   return {
// // //     checked,
// // //     progress,
// // //     toggle,
// // //     completed:
// // //       checked.length === roadmap.length,
// // //   };
// // // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import { LessonNode } from "@/types/roadmap";
// // import {
// //   saveRoadmap,
// //   getRoadmap,
// //   saveActivity,
// //   updateStudyStreak,
// // } from "@/lib/dashboard-storage";

// // export function useRoadmap(
// //   roadmapName: string,
// //   roadmapTitle: string,
// //   roadmap: LessonNode[]
// // ) {
// //   const [checked, setChecked] = useState<string[]>([]); // Tracks array of completed node IDs

// //   useEffect(() => {
// //     const data = getRoadmap(roadmapName);

// //     if (data) {
// //       setChecked(data.completedSections || []);
// //     }

// //     updateStudyStreak();
// //   }, [roadmapName]);

// //   const progress = roadmap.length > 0
// //     ? Math.round((checked.length / roadmap.length) * 100)
// //     : 0;

// //   const saveEverything = (updated: string[]) => {
// //     const today = new Date().toLocaleDateString();
// //     const currentProgress = roadmap.length > 0
// //       ? Math.round((updated.length / roadmap.length) * 100)
// //       : 0;

// //     const status: "Active" | "In Progress" | "Completed" =
// //       updated.length === roadmap.length
// //         ? "Completed"
// //         : updated.length > 0
// //         ? "In Progress"
// //         : "Active";

// //     saveRoadmap(roadmapName, {
// //       completedSections: updated,
// //       progress: currentProgress,
// //       lastStudied: today,
// //       status,
// //     });

// //     saveActivity({
// //       name: roadmapTitle,
// //       progress: `${currentProgress}%`,
// //       lastStudied: today,
// //       status,
// //     });
// //   };

// //   const toggle = (nodeId: string) => {
// //     const updated = checked.includes(nodeId)
// //       ? checked.filter((id) => id !== nodeId)
// //       : [...checked, nodeId];

// //     setChecked(updated);
// //     saveEverything(updated);
// //   };

// //   return {
// //     checked,
// //     progress,
// //     toggle,
// //     completed: roadmap.length > 0 && checked.length === roadmap.length,
// //   };
// // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import { LessonNode } from "@/types/roadmap";
// // import {
// //   saveRoadmap,
// //   getRoadmap,
// //   saveActivity,
// //   updateStudyStreak,
// // } from "@/lib/dashboard-storage";
// // import { toast } from "sonner"; // <--- ADD THIS LINE HERE

// // export function useRoadmap(
// //   roadmapName: string,
// //   roadmapTitle: string,
// //   roadmap: LessonNode[]
// // ) {
// //   const [checked, setChecked] = useState<string[]>([]);

// //   useEffect(() => {
// //     // MODIFIED: Passes roadmapTitle to enable correct tracking inside the initial saveActivity pass
// //     const data = getRoadmap(roadmapName, roadmapTitle);

// //     if (data) {
// //       setChecked(data.completedSections || []);
// //     }

// //     updateStudyStreak();
// //   }, [roadmapName, roadmapTitle]);

// //   const progress = roadmap.length > 0
// //     ? Math.round((checked.length / roadmap.length) * 100)
// //     : 0;

// //   const saveEverything = (updated: string[]) => {
// //     const today = new Date().toLocaleDateString();
// //     const currentProgress = roadmap.length > 0
// //       ? Math.round((updated.length / roadmap.length) * 100)
// //       : 0;

// //     // MODIFIED: Fallback defaults directly to "Active" instead of "Not Started"
// //     const status: "Active" | "In Progress" | "Completed" =
// //       updated.length === roadmap.length
// //         ? "Completed"
// //         : updated.length > 0
// //         ? "In Progress"
// //         : "Active";

// //     saveRoadmap(roadmapName, {
// //       completedSections: updated,
// //       progress: currentProgress,
// //       lastStudied: today,
// //       status,
// //     });

// //     saveActivity({
// //       name: roadmapTitle,
// //       progress: `${currentProgress}%`,
// //       lastStudied: today,
// //       status,
// //     });

// //     // --- MONETIZATION LOGIC ENGINE ---
// //     // Fires an interactive premium Sonner toast at exact achievement milestones
// //     if (currentProgress === 50 || currentProgress === 100) {
// //       setTimeout(() => {
// //         toast("Halfway there! ☕", {
// //           description: currentProgress === 100
// //             ? `You completely finished the ${roadmapTitle}! That deserves a celebration.`
// //             : `You've completed 50% of the ${roadmapTitle}. You're making incredible progress!`,
// //           action: {
// //             label: "Buy me a coffee",
// //             onClick: () => window.open("https://buymeacoffee.com/yourusername", "_blank")
// //           },
// //           duration: 8000, // Keep it open a bit longer so they can read and click it
// //         });
// //       }, 800); // 800ms delay so it doesn't clash with the checking animation
// //     }
// //   };

// //   const toggle = (nodeId: string) => {
// //     const updated = checked.includes(nodeId)
// //       ? checked.filter((id) => id !== nodeId)
// //       : [...checked, nodeId];

// //     setChecked(updated);
// //     saveEverything(updated);
// //   };

// //   return {
// //     checked,
// //     progress,
// //     toggle,
// //     completed: roadmap.length > 0 && checked.length === roadmap.length,
// //   };
// // }

// "use client";

// import { useEffect, useState } from "react";
// import { LessonNode } from "@/types/roadmap";
// import {
//   saveRoadmap,
//   getRoadmap,
//   saveActivity,
//   updateStudyStreak,
// } from "@/lib/dashboard-storage";

// export function useRoadmap(
//   roadmapName: string,
//   roadmapTitle: string,
//   roadmap: LessonNode[]
// ) {
//   const [checked, setChecked] = useState<string[]>([]);
//   // NEW: State to control the Buy Me A Coffee Modal visibility
//   const [isCoffeeModalOpen, setIsCoffeeModalOpen] = useState(false);

//   useEffect(() => {
//     const data = getRoadmap(roadmapName, roadmapTitle);
//     if (data) {
//       setChecked(data.completedSections || []);
//     }
//     updateStudyStreak();
//   }, [roadmapName, roadmapTitle]);

//   const progress = roadmap.length > 0
//     ? Math.round((checked.length / roadmap.length) * 100)
//     : 0;

//   const saveEverything = (updated: string[]) => {
//     const today = new Date().toLocaleDateString();
//     const currentProgress = roadmap.length > 0
//       ? Math.round((updated.length / roadmap.length) * 100)
//       : 0;

//     const status: "Active" | "In Progress" | "Completed" =
//       updated.length === roadmap.length
//         ? "Completed"
//         : updated.length > 0
//         ? "In Progress"
//         : "Active";

//     saveRoadmap(roadmapName, {
//       completedSections: updated,
//       progress: currentProgress,
//       lastStudied: today,
//       status,
//     });

//     saveActivity({
//       name: roadmapTitle,
//       progress: `${currentProgress}%`,
//       lastStudied: today,
//       status,
//     });

//     // NEW: Trigger the modal right at the sweet spot achievements!
//     if (currentProgress === 50 || currentProgress === 100) {
//       setTimeout(() => {
//         setIsCoffeeModalOpen(true);
//       }, 600); // Small delay so they see the checkbox completion animation finish first
//     }
//   };

//   const toggle = (nodeId: string) => {
//     const updated = checked.includes(nodeId)
//       ? checked.filter((id) => id !== nodeId)
//       : [...checked, nodeId];

//     setChecked(updated);
//     saveEverything(updated);
//   };

//   return {
//     checked,
//     progress,
//     toggle,
//     completed: roadmap.length > 0 && checked.length === roadmap.length,
//     // NEW: Expose these so your page.tsx file can control the dialog
//     isCoffeeModalOpen,
//     setIsCoffeeModalOpen,
//   };
// }

"use client";

import { useEffect, useState } from "react";
import { LessonNode } from "@/types/roadmap";
import { toast } from "sonner"; // Ensure toast is imported
import {
  saveRoadmap,
  getRoadmap,
  saveActivity,
  updateStudyStreak,
} from "@/lib/dashboard-storage";

export function useRoadmap(
  roadmapName: string,
  roadmapTitle: string,
  roadmap: LessonNode[],
) {
  const [checked, setChecked] = useState<string[]>([]);
  const [isCoffeeModalOpen, setIsCoffeeModalOpen] = useState(false);

  useEffect(() => {
    const data = getRoadmap(roadmapName, roadmapTitle);
    if (data) {
      setChecked(data.completedSections || []);
    }
    updateStudyStreak();
  }, [roadmapName, roadmapTitle]);

  const progress =
    roadmap.length > 0
      ? Math.round((checked.length / roadmap.length) * 100)
      : 0;

  // const saveEverything = (updated: string[]) => {
  //   const today = new Date().toLocaleDateString();
  //   const currentProgress = roadmap.length > 0
  //     ? Math.round((updated.length / roadmap.length) * 100)
  //     : 0;

  //   const status: "Active" | "In Progress" | "Completed" =
  //     updated.length === roadmap.length
  //       ? "Completed"
  //       : updated.length > 0
  //       ? "In Progress"
  //       : "Active";

  //   saveRoadmap(roadmapName, {
  //     completedSections: updated,
  //     progress: currentProgress,
  //     lastStudied: today,
  //     status,
  //   });

  //   saveActivity({
  //     name: roadmapTitle,
  //     progress: `${currentProgress}%`,
  //     lastStudied: today,
  //     status,
  //   });

  //   // --- ADJUSTED TRIGGER LOGIC ---
  //   // 50% Milestone: Clean, non-intrusive high-five toast
  //   if (currentProgress === 50) {
  //     setTimeout(() => {
  //       toast.success("Halfway there! 🚀", {
  //         description: `You've completed 50% of the ${roadmapTitle}. Incredible work, keep pushing!`,
  //         duration: 4000,
  //       });
  //     }, 600);
  //   }

  //   // 100% Milestone: Full screen completion modal with buy me a coffee focus
  //   if (currentProgress === 100) {
  //     setTimeout(() => {
  //       setIsCoffeeModalOpen(true);
  //     }, 600);
  //   }
  // };

  const saveEverything = (updated: string[]) => {
    const today = new Date().toLocaleDateString();

    // 1. Calculate previous progress before this update
    const previousProgress =
      roadmap.length > 0
        ? Math.round((checked.length / roadmap.length) * 100)
        : 0;

    // 2. Calculate the new progress
    const currentProgress =
      roadmap.length > 0
        ? Math.round((updated.length / roadmap.length) * 100)
        : 0;

    const status: "Active" | "In Progress" | "Completed" =
      updated.length === roadmap.length
        ? "Completed"
        : updated.length > 0
          ? "In Progress"
          : "Active";

    saveRoadmap(roadmapName, {
      completedSections: updated,
      progress: currentProgress,
      lastStudied: today,
      status,
    });

    saveActivity({
      name: roadmapTitle,
      progress: `${currentProgress}%`,
      lastStudied: today,
      status,
    });

    // --- DYNAMIC PROGRESS CROSSING LOGIC ---

    // Trigger 50% Toast: If they were BELOW 50% and are now AT or ABOVE 50%
    // (This works perfectly whether the jump is to 50%, 60%, or 67%)
    if (
      previousProgress < 50 &&
      currentProgress >= 50 &&
      currentProgress < 100
    ) {
      setTimeout(() => {
        toast.success("Halfway there!", {
          description: `${currentProgress}% of ${roadmapTitle} done. Keep that momentum going.`,
          duration: 4000,
        });
      }, 600);
    }

    // Trigger 100% Modal: Only when they hit total completion
    if (currentProgress === 100) {
      setTimeout(() => {
        setIsCoffeeModalOpen(true);
      }, 600);
    }
  };

  const toggle = (nodeId: string) => {
    const updated = checked.includes(nodeId)
      ? checked.filter((id) => id !== nodeId)
      : [...checked, nodeId];

    setChecked(updated);
    saveEverything(updated);
  };

  return {
    checked,
    progress,
    toggle,
    completed: roadmap.length > 0 && checked.length === roadmap.length,
    isCoffeeModalOpen,
    setIsCoffeeModalOpen,
  };
}
