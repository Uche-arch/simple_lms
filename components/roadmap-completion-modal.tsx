"use client";

import React from "react";
import { Check, Trophy, ArrowRight, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface RoadmapCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  trackTitle: string;
}

export function RoadmapCompletionModal({ isOpen, onClose, trackTitle }: RoadmapCompletionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md border-muted/80 shadow-2xl rounded-2xl overflow-hidden p-0 gap-0 bg-background animate-in fade-in zoom-in-95 duration-200">
        
        {/* Subtle glowing decorative gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.04] to-transparent pointer-events-none" />

        <div className="p-6 flex flex-col items-center text-center relative">
          
          {/* Animated Decorative Trophy Badge Cluster */}
          <div className="relative flex items-center justify-center h-16 w-16 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4 ring-8 ring-emerald-500/[0.02]">
            <Trophy className="h-8 w-8" />
            <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-amber-500 animate-pulse" />
          </div>

          <DialogHeader className="space-y-1.5">
            <DialogTitle className="text-xl font-bold tracking-tight text-foreground">
              {trackTitle} Complete!
            </DialogTitle>
            <DialogDescription className="text-xs leading-relaxed text-muted-foreground max-w-sm px-2">
              Brilliant execution! You have locked down structural blueprints and cleared every core benchmark mapped inside this curriculum timeline.
            </DialogDescription>
          </DialogHeader>

          {/* Micro Summary Checklist Preview Box */}
          <div className="mt-4 w-full bg-muted/30 border border-muted/80 rounded-xl p-3 flex items-center justify-between text-left">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="h-6 w-6 rounded-lg bg-emerald-500 fill-emerald-500 text-white flex items-center justify-center shrink-0">
                <Check className="h-3.5 w-3.5 stroke-[3]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-foreground truncate">Track Certificate Verified</p>
                <p className="text-[10px] text-muted-foreground truncate">100% Core Requirements Fulfilled</p>
              </div>
            </div>
            <span className="text-[10px] font-mono font-medium tracking-tight bg-background border px-2 py-0.5 rounded text-emerald-600 dark:text-emerald-400">
              +100XP
            </span>
          </div>

        </div>

        {/* Action Button Controls Footer */}
        <DialogFooter className="p-4 bg-muted/20 border-t flex sm:justify-between items-center gap-2 w-full">
          <Button 
            type="button" 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground text-xs font-medium h-9 rounded-xl px-4"
          >
            Review Progress
          </Button>
          <Button 
            type="button" 
            size="sm" 
            onClick={onClose}
            className="shadow-sm font-semibold text-xs h-9 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl px-4 gap-1.5 transition-all group shrink-0"
          >
            Advance to Next Track
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}