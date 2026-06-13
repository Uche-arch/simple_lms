"use client";

import { LessonNode } from "@/types/roadmap";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ExternalLink, Video, Clock, FolderGit2, FileText } from "lucide-react";

interface RoadmapNodeCardProps {
  node: LessonNode;
  isCompleted: boolean;
  onToggle: () => void;
}

export function RoadmapNodeCard({
  node,
  isCompleted,
  onToggle,
}: RoadmapNodeCardProps) {
  return (
    <div
      className={`group relative flex flex-col justify-between border rounded-xl bg-card text-card-foreground p-5 transition-all duration-200 hover:shadow-md ${isCompleted ? " bg-primary/[0.01]" : "hover:border-border"}`}
    >
      {/* Header Info */}
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-semibold text-lg tracking-tight group-hover:text-primary transition-colors">
            {node.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary/60 px-2.5 py-1 rounded-full shrink-0">
            <Clock className="w-3 h-3" />
            {node.duration}
          </div>
        </div>

        {/* Killer 2-line Takeaway Summary */}
        {/* <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {node.summary}
        </p> */}
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 hover:line-clamp-none transition-all leading-relaxed">
          {node.summary}
        </p>

        {/* Curated Media Actions */}
        <div className="flex flex-wrap gap-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 text-xs"
            asChild
          >
            <a href={node.videoUrl} target="_blank" rel="noopener noreferrer">
              <Video className="w-3.5 h-3.5 text-red-500" />
              Watch Video
            </a>
          </Button>

          {node.articleUrl && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
              asChild
            >
              <a
                href={node.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Docs
              </a>
            </Button>
          )}
        </div>

        {/* Bait Assets/Resource Pack */}
        <div className="mt-4 pt-4 border-t border-dashed space-y-3 bg-muted/30 p-3 rounded-lg">
          <div>
            <h4 className="text-xs font-semibold text-foreground">
              Project To Build
            </h4>

            <p className="text-xs text-muted-foreground mt-1">
              {node.project.description}
            </p>
          </div>

          {node.project.referenceUrl && (
            <a
              href={node.project.referenceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              {node.project.referenceLabel || "Reference"}
            </a>
          )}
        </div>
      </div>

      {/* Checkbox Execution Area at Bottom */}
      <div className="mt-5 pt-3 border-t flex items-center justify-between">
        <label
          htmlFor={`check-${node.id}`}
          className="text-xs font-medium text-muted-foreground cursor-pointer select-none group-hover:text-foreground transition-colors"
        >
          {isCompleted ? "Completed! Awesome job" : "Mark as completed"}
        </label>
        <Checkbox
          id={`check-${node.id}`}
          checked={isCompleted}
          onCheckedChange={onToggle}
          className="h-5 w-5 rounded-md"
        />
      </div>
    </div>
  );
}
