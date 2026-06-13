// // // "use client";

// // // import React from "react";
// // // import { Coffee, Heart, Sparkles } from "lucide-react";
// // // import {
// // //   Dialog,
// // //   DialogContent,
// // //   DialogDescription,
// // //   DialogHeader,
// // //   DialogTitle,
// // // } from "@/components/ui/dialog";
// // // import { Button } from "@/components/ui/button";

// // // interface CoffeeModalProps {
// // //   isOpen: boolean;
// // //   onOpenChange: (open: boolean) => void;
// // //   roadmapTitle: string;
// // //   progress: number;
// // // }

// // // export function CoffeeModal({ isOpen, onOpenChange, roadmapTitle, progress }: CoffeeModalProps) {
// // //   const isTargetFinished = progress === 100;

// // //   return (
// // //     <Dialog open={isOpen} onOpenChange={onOpenChange}>
// // //       <DialogContent className="sm:max-w-[420px] rounded-xl p-6 overflow-hidden border border-muted/40 shadow-2xl">
// // //         {/* Subtle, premium background glow design effect */}
// // //         <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
// // //         <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

// // //         <DialogHeader className="flex flex-col items-center text-center space-y-3">
// // //           {/* Circular Icon Container */}
// // //           <div className="h-12 w-12 rounded-full bg-amber-500/[0.08] dark:bg-amber-500/[0.15] flex items-center justify-center border border-amber-500/20 shadow-inner">
// // //             <Coffee className="h-6 w-6 text-amber-500 animate-bounce" style={{ animationDuration: '3s' }} />
// // //           </div>

// // //           <div className="space-y-1">
// // //             <DialogTitle className="text-xl font-bold tracking-tight flex items-center justify-center gap-1.5">
// // //               {isTargetFinished ? "Track Complete! 🎉" : "Milestone Unlocked! 🚀"}
// // //             </DialogTitle>
// // //             <DialogDescription className="text-sm text-muted-foreground px-2">
// // //               {isTargetFinished ? (
// // //                 <span>You completely finished the <strong>{roadmapTitle}</strong>! That takes massive focus and dedication.</span>
// // //               ) : (
// // //                 <span>You just crossed <strong>50%</strong> of the <strong>{roadmapTitle}</strong>. You are out-pacing the competition!</span>
// // //               )}
// // //             </DialogDescription>
// // //           </div>
// // //         </DialogHeader>

// // //         <div className="mt-4 bg-muted/40 rounded-xl p-4 border border-muted/60 text-center space-y-1">
// // //           <span className="text-xs uppercase font-semibold text-muted-foreground tracking-wider flex items-center justify-center gap-1 text-amber-600 dark:text-amber-400">
// // //             <Sparkles className="h-3 w-3" /> Note from the developer
// // //           </span>
// // //           <p className="text-xs text-foreground/80 leading-relaxed">
// // //             Hey! I'm building this layout completely ad-free to help devs skip code-chaos. If this interface saved you hours of searching, consider buying me a coffee to fuel the next update!
// // //           </p>
// // //         </div>

// // //         <div className="flex flex-col gap-2 pt-4">
// // //           <Button
// // //             className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium shadow-md group transition-all"
// // //             onClick={() => {
// // //               window.open("https://buymeacoffee.com/yourusername", "_blank");
// // //               onOpenChange(false);
// // //             }}
// // //           >
// // //             <Heart className="mr-2 h-4 w-4 fill-current group-hover:scale-110 transition-transform" />
// // //             Buy me a coffee ($3)
// // //           </Button>

// // //           <Button
// // //             variant="ghost"
// // //             className="w-full text-muted-foreground text-xs hover:bg-transparent hover:text-foreground"
// // //             onClick={() => onOpenChange(false)}
// // //           >
// // //             Keep learning
// // //           </Button>
// // //         </div>
// // //       </DialogContent>
// // //     </Dialog>
// // //   );
// // // }

// // "use client";

// // import React from "react";
// // import { Coffee, Heart, Sparkles, Trophy } from "lucide-react";
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogDescription,
// //   DialogHeader,
// //   DialogTitle,
// // } from "@/components/ui/dialog";
// // import { Button } from "@/components/ui/button";

// // interface CoffeeModalProps {
// //   isOpen: boolean;
// //   onOpenChange: (open: boolean) => void;
// //   roadmapTitle: string;
// // }

// // export function CoffeeModal({ isOpen, onOpenChange, roadmapTitle }: CoffeeModalProps) {
// //   return (
// //     <Dialog open={isOpen} onOpenChange={onOpenChange}>
// //       <DialogContent className="sm:max-w-[420px] rounded-xl p-6 overflow-hidden border border-muted/40 shadow-2xl">
// //         {/* Subtle background glow effect */}
// //         <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
// //         <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

// //         <DialogHeader className="flex flex-col items-center text-center space-y-3">
// //           {/* Circular Trophy Container */}
// //           <div className="h-12 w-12 rounded-full bg-amber-500/[0.08] dark:bg-amber-500/[0.15] flex items-center justify-center border border-amber-500/20 shadow-inner">
// //             <Trophy className="h-6 w-6 text-amber-500" />
// //           </div>

// //           <div className="space-y-1">
// //             <DialogTitle className="text-xl font-bold tracking-tight">
// //               Track Completed! 🎉
// //             </DialogTitle>
// //             <DialogDescription className="text-sm text-muted-foreground px-2">
// //               You completely finished the <strong>{roadmapTitle}</strong>! That takes massive focus and dedication. Outstanding job.
// //             </DialogDescription>
// //           </div>
// //         </DialogHeader>

// //         <div className="mt-4 bg-muted/40 rounded-xl p-4 border border-muted/60 text-center space-y-1">
// //           <span className="text-xs uppercase font-semibold text-amber-600 dark:text-amber-400 tracking-wider flex items-center justify-center gap-1">
// //             <Sparkles className="h-3 w-3" /> Support the Creator
// //           </span>
// //           <p className="text-xs text-foreground/80 leading-relaxed">
// //             I'm building this layout completely ad-free to help devs skip code-chaos. If this track saved you hours of scouring the web, consider buying me a coffee to fuel the next update!
// //           </p>
// //         </div>

// //         <div className="flex flex-col gap-2 pt-4">
// //           <Button
// //             className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium shadow-md group transition-all"
// //             onClick={() => {
// //               window.open("https://buymeacoffee.com/yourusername", "_blank");
// //               onOpenChange(false);
// //             }}
// //           >
// //             <Heart className="mr-2 h-4 w-4 fill-current group-hover:scale-110 transition-transform" />
// //             Buy me a coffee ($3)
// //           </Button>

// //           <Button
// //             variant="ghost"
// //             className="w-full text-muted-foreground text-xs hover:bg-transparent hover:text-foreground"
// //             onClick={() => onOpenChange(false)}
// //           >
// //             Return to Workspace
// //           </Button>
// //         </div>
// //       </DialogContent>
// //     </Dialog>
// //   );
// // }

// "use client";

// import React from "react";
// import { Coffee, Heart, Sparkles, Trophy } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";

// interface CoffeeModalProps {
//   isOpen: boolean;
//   onOpenChange: (open: boolean) => void;
//   roadmapTitle: string;
// }

// export function CoffeeModal({ isOpen, onOpenChange, roadmapTitle }: CoffeeModalProps) {
//   // Check if the modal was opened from the generic header button vs course completion
//   const isManualClick = !roadmapTitle || roadmapTitle.trim() === "";

//   return (
//     <Dialog open={isOpen} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-[420px] rounded-xl p-6 overflow-hidden border border-muted/40 shadow-2xl">
//         {/* Subtle background glow effect */}
//         <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

//         <DialogHeader className="flex flex-col items-center text-center space-y-3">
//           {/* Dynamic Icon Container based on trigger context */}
//           <div className="h-12 w-12 rounded-full bg-amber-500/[0.08] dark:bg-amber-500/[0.15] flex items-center justify-center border border-amber-500/20 shadow-inner">
//             {isManualClick ? (
//               <Coffee className="h-6 w-6 text-amber-500 animate-pulse" />
//             ) : (
//               <Trophy className="h-6 w-6 text-amber-500" />
//             )}
//           </div>

//           <div className="space-y-1">
//             <DialogTitle className="text-xl font-bold tracking-tight">
//               {isManualClick ? "Support the Platform! ☕" : "Track Completed! 🎉"}
//             </DialogTitle>
//             <DialogDescription className="text-sm text-muted-foreground px-2">
//               {isManualClick ? (
//                 <span>If this workspace has helped you organize your learning pipeline and skip code chaos, consider fueling the project!</span>
//               ) : (
//                 <span>You completely finished the <strong>{roadmapTitle}</strong>! That takes massive focus and dedication. Outstanding job.</span>
//               )}
//             </DialogDescription>
//           </div>
//         </DialogHeader>

//         <div className="mt-4 bg-muted/40 rounded-xl p-4 border border-muted/60 text-center space-y-1">
//           <span className="text-xs uppercase font-semibold text-amber-600 dark:text-amber-400 tracking-wider flex items-center justify-center gap-1">
//             <Sparkles className="h-3 w-3" /> Note from the developer
//           </span>
//           <p className="text-xs text-foreground/80 leading-relaxed">
//             I'm building this layout completely ad-free to help devs bypass complexity. If these structures save you hours of scouring the web, consider buying me a coffee to fuel the next update pipeline!
//           </p>
//         </div>

//         <div className="flex flex-col gap-2 pt-4">
//           <Button
//             className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium shadow-md group transition-all"
//             onClick={() => {
//               window.open("https://buymeacoffee.com/yourusername", "_blank");
//               onOpenChange(false);
//             }}
//           >
//             <Heart className="mr-2 h-4 w-4 fill-current group-hover:scale-110 transition-transform" />
//             Buy me a coffee ($3)
//           </Button>

//           <Button
//             variant="ghost"
//             className="w-full text-muted-foreground text-xs hover:bg-transparent hover:text-foreground"
//             onClick={() => onOpenChange(false)}
//           >
//             {isManualClick ? "Back to Dashboard" : "Return to Workspace"}
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

  "use client";

  import React from "react";
  import { Coffee, Heart, Trophy } from "lucide-react";
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";

  interface CoffeeModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    roadmapTitle: string;
  }

  export function CoffeeModal({
    isOpen,
    onOpenChange,
    roadmapTitle,
  }: CoffeeModalProps) {
    const isManualClick = !roadmapTitle || roadmapTitle.trim() === "";

    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[440px] rounded-xl p-6 overflow-hidden border border-border shadow-lg bg-background">
          {/* Subtle top primary accent line for high-end SaaS feel */}
          {/* <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary/80" /> */}

          <DialogHeader className="flex flex-col items-center text-center space-y-4 pt-2">
            {/* Minimalist Icon Container aligned to theme variables */}
            <div className="h-11 w-11 rounded-full bg-muted flex items-center justify-center border border-border">
              {isManualClick ? (
                <Coffee className="h-5 w-5 text-foreground/80 animate-pulse" />
              ) : (
                <Trophy className="h-5 w-5 text-foreground/80" />
              )}
            </div>

            <div className="space-y-1.5">
              <DialogTitle className="text-lg font-semibold tracking-tight">
                {isManualClick ? "Support the project" : "Roadmap complete!"}
              </DialogTitle>
              {/* <DialogDescription className="text-sm text-muted-foreground max-w-[280px] mx-auto">
                {isManualClick ? (
                  "Help keep this tool open-source and ad-free."
                ) : (
                  <>
                    You finished <strong>{roadmapTitle}</strong>. That's no small feat.
                  </>
                )}
              </DialogDescription> */}
              <DialogDescription className="text-sm text-muted-foreground max-w-[400px] mx-auto">
                {isManualClick ? (
                  "Help keep this platform free and growing for every developer."
                ) : (
                  <>
                    You completed <strong>{roadmapTitle}</strong>. That's the kind of
        consistency that turns learners into developers.
                  </>
                )}
              </DialogDescription>
            </div>
          </DialogHeader>

          {/* Shortened, professional note using purely theme colors */}
          <div className="mt-2 bg-muted/50 rounded-lg p-3.5 border border-border/60 text-center">
            {/* <p className="text-xs text-muted-foreground leading-relaxed">
              No ads, no paywalls — just a developer trying to build something useful. If this saved you time, a coffee goes a long way.
            </p> */}

            <p className="text-xs text-muted-foreground leading-relaxed">
              {isManualClick
                ? "Contributions help cover maintenance and future roadmap updates."
                : "If this roadmap helped you level up, consider supporting what comes next."}
            </p>
          </div>

          {/* Clean, horizontal flex design-system row */}
          <div className="flex flex-row gap-2.5 pt-4 w-full">
            <Button
              variant="ghost"
              className="flex-1 text-xs h-9 border border-input text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => onOpenChange(false)}
            >
              {isManualClick ? "Cancel" : "Dismiss"}
            </Button>

            <Button
              disabled
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-medium shadow-sm group h-9 transition-colors"
              onClick={() => {
                window.open("https://buymeacoffee.com/yourusername", "_blank");
                onOpenChange(false);
              }}
            >
              <Heart className="mr-1.5 h-3.5 w-3.5 fill-current group-hover:scale-105 transition-transform" />
              Buy a coffee
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
