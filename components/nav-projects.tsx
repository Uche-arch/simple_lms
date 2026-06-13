// // "use client"

// // import {
// //   Folder,
// //   Forward,
// //   MoreHorizontal,
// //   Trash2,
// //   type LucideIcon,
// // } from "lucide-react"

// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// //   DropdownMenuSeparator,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu"
// // import {
// //   SidebarGroup,
// //   SidebarGroupLabel,
// //   SidebarMenu,
// //   SidebarMenuAction,
// //   SidebarMenuButton,
// //   SidebarMenuItem,
// //   useSidebar,
// // } from "@/components/ui/sidebar"


// // export function NavProjects({
// //   projects,
// // }: {
// //   projects: {
// //     name: string
// //     url: string
// //     icon: LucideIcon
// //   }[]
// // }) {
// //   const { isMobile } = useSidebar()

// //   return (
// //     <SidebarGroup className="group-data-[collapsible=icon]:hidden">
// //       <SidebarGroupLabel>Projects</SidebarGroupLabel>
// //       <SidebarMenu>
// //         {projects.map((item) => (
// //           <SidebarMenuItem key={item.name}>
// //             <SidebarMenuButton asChild>
// //               <a href={item.url}>
// //                 <item.icon />
// //                 <span>{item.name}</span>
// //               </a>
// //             </SidebarMenuButton>
// //             <DropdownMenu>
// //               <DropdownMenuTrigger asChild>
// //                 <SidebarMenuAction showOnHover>
// //                   <MoreHorizontal />
// //                   <span className="sr-only">More</span>
// //                 </SidebarMenuAction>
// //               </DropdownMenuTrigger>
// //               <DropdownMenuContent
// //                 className="w-48 rounded-lg"
// //                 side={isMobile ? "bottom" : "right"}
// //                 align={isMobile ? "end" : "start"}
// //               >
// //                 <DropdownMenuItem>
// //                   <Folder className="text-muted-foreground" />
// //                   <span>View Project</span>
// //                 </DropdownMenuItem>
// //                 <DropdownMenuItem>
// //                   <Forward className="text-muted-foreground" />
// //                   <span>Share Project</span>
// //                 </DropdownMenuItem>
// //                 <DropdownMenuSeparator />
// //                 <DropdownMenuItem>
// //                   <Trash2 className="text-muted-foreground" />
// //                   <span>Delete Project</span>
// //                 </DropdownMenuItem>
// //               </DropdownMenuContent>
// //             </DropdownMenu>
// //           </SidebarMenuItem>
// //         ))}
// //         <SidebarMenuItem>
// //           <SidebarMenuButton className="text-sidebar-foreground/70">
// //             <MoreHorizontal className="text-sidebar-foreground/70" />
// //             <span>More</span>
// //           </SidebarMenuButton>
// //         </SidebarMenuItem>
// //       </SidebarMenu>
// //     </SidebarGroup>
// //   )
// // }


// "use client"

// import {
//   Folder,
//   Forward,
//   MoreHorizontal,
//   Trash2,
//   type LucideIcon,
// } from "lucide-react"

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuAction,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   useSidebar,
// } from "@/components/ui/sidebar"
// import { useToast } from "@/hooks/use-toast" // Import the toast hook

// export function NavProjects({
//   projects,
// }: {
//   projects: {
//     name: string
//     url: string
//     icon: LucideIcon
//   }[]
// }) {
//   const { isMobile } = useSidebar()
//   const { toast } = useToast() // Initialize the toaster

//   // Premium share handler that builds an absolute URL from relative routing tokens
//   const handleShare = async (e: React.MouseEvent, projectName: string, relativeUrl: string) => {
//     e.preventDefault();
    
//     try {
//       // Build the absolute origin path regardless of deployment tier (localhost, Vercel, etc.)
//       const absoluteUrl = `${window.location.origin}${relativeUrl}`;
      
//       await navigator.clipboard.writeText(absoluteUrl);
      
//       toast({
//         title: "Link Copied!",
//         description: `The career document link for "${projectName}" is ready to share with friends.`,
//         variant: "default",
//         className: "border-emerald-500/20 bg-emerald-500/[0.02] text-foreground dark:border-emerald-500/30",
//       });
//     } catch (err) {
//       toast({
//         title: "Sharing Failed",
//         description: "Could not write to your device clipboard automatically.",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <SidebarGroup className="group-data-[collapsible=icon]:hidden">
//       <SidebarGroupLabel>Projects</SidebarGroupLabel>
//       <SidebarMenu>
//         {projects.map((item) => (
//           <SidebarMenuItem key={item.name}>
//             <SidebarMenuButton asChild>
//               <a href={item.url}>
//                 <item.icon />
//                 <span>{item.name}</span>
//               </a>
//             </SidebarMenuButton>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <SidebarMenuAction showOnHover>
//                   <MoreHorizontal />
//                   <span className="sr-only">More</span>
//                 </SidebarMenuAction>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent
//                 className="w-48 rounded-lg"
//                 side={isMobile ? "bottom" : "right"}
//                 align={isMobile ? "end" : "start"}
//               >
//                 <DropdownMenuItem>
//                   <Folder className="text-muted-foreground" />
//                   <span>View Project</span>
//                 </DropdownMenuItem>
                
//                 {/* MODIFIED: Added custom touch/click handlers to trigger clipboard copy state */}
//                 <DropdownMenuItem onClick={(e) => handleShare(e, item.name, item.url)}>
//                   <Forward className="text-muted-foreground" />
//                   <span>Share Project</span>
//                 </DropdownMenuItem>
                
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <Trash2 className="text-muted-foreground" />
//                   <span>Delete Project</span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </SidebarMenuItem>
//         ))}
//         <SidebarMenuItem>
//           <SidebarMenuButton className="text-sidebar-foreground/70">
//             <MoreHorizontal className="text-sidebar-foreground/70" />
//             <span>More</span>
//           </SidebarMenuButton>
//         </SidebarMenuItem>
//       </SidebarMenu>
//     </SidebarGroup>
//   )
// }

"use client"

import {
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
  type LucideIcon,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { toast } from "sonner" // Import directly from sonner

export function NavProjects({
  projects,
}: {
  projects: {
    name: string
    url: string
    icon: LucideIcon
  }[]
}) {
  const { isMobile } = useSidebar()

  // Sonner share handler using direct object styling API options
  const handleShare = async (e: React.MouseEvent, projectName: string, relativeUrl: string) => {
    e.preventDefault();
    
    try {
      const absoluteUrl = `${window.location.origin}${relativeUrl}`;
      await navigator.clipboard.writeText(absoluteUrl);
      
      // Sonner cleanly handles a description as the second argument, or via an options object
      toast.success("Link Copied!", {
        description: `The career document link for "${projectName}" is ready to share with friends.`,
        duration: 6000,
      });
    } catch (err) {
      toast.error("Sharing Failed", {
        description: "Could not write to your device clipboard automatically.",
      });
    }
  };

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Career Guides</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                {/* <DropdownMenuItem>
                  <Folder className="text-muted-foreground" />
                  <span>View Project</span>
                </DropdownMenuItem> */}
                
                {/* Triggering share with clean modern sonner implementation hooks */}
                <DropdownMenuItem onClick={(e) => handleShare(e, item.name, item.url)}>
                  <Forward className="text-muted-foreground" />
                  <span>Share Project</span>
                </DropdownMenuItem>
                
                {/* <DropdownMenuSeparator /> */}
                {/* <DropdownMenuItem>
                  <Trash2 className="text-muted-foreground" />
                  <span>Delete Project</span>
                </DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        {/* <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem> */}
      </SidebarMenu>
    </SidebarGroup>
  )
}