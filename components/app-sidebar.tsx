"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Compass,
  Terminal,
  Rocket,
  Monitor,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      // name: "Acme Inc",
      // logo: GalleryVerticalEnd,
      // plan: "Enterprise",
      name: "Future Developer",
      logo: Rocket,
      plan: "Leveling up...",
    },
    {
      // name: "Acme Corp.",
      // logo: AudioWaveform,
      // plan: "Startup",
      name: "Aspiring Builder",
      logo: Terminal,
      plan: "Grinding layout...",
    },
    {
      // name: "Evil Corp.",
      // logo: Command,
      // plan: "Free",
      name: "Pathfinder",
      logo: Compass,
      plan: "Exploring tracks",
    },
  ],

  navMain: [
    {
      title: "Frontend Development",
      url: "/dashboard", // Main home overview (the file we just edited)
      icon: Monitor,
      isActive: true,
      items: [
        {
          title: "HTML",
          url: "/dashboard2/roadmap/html", // Map to dashboard/history/page.tsx
        },
        {
          title: "CSS",
          url: "/dashboard2/roadmap/css", // Map to dashboard/starred/page.tsx
        },
      ],
    },    
    // {
    //   title: "Models",
    //   url: "/dashboard/models",
    //   icon: Bot,
    //   items: [
    //     {
    //       title: "Explorer",
    //       url: "/dashboard/models/explorer",
    //     },
    //   ],
    // },
  ],
  projects: [
    {
      name: "Frontend Development",
      url: "/dashboard2/docs/frontend",
      icon: BookOpen,
    },
    // {
    //   name: "Sales & Marketing",
    //   url: "/dashboard2/docs/devops",
    //   icon: PieChart,
    // },
    // {
    //   name: "Travel",
    //   url: "#",
    //   icon: Map,
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <>
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        {/* <TeamSwitcher /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    </>
  );
}
