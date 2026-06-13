// "use client"

// import * as React from "react"
// import { ChevronsUpDown, Plus } from "lucide-react"

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   useSidebar,
// } from "@/components/ui/sidebar"

// export function TeamSwitcher({
//   teams,
// }: {
//   teams: {
//     name: string
//     logo: React.ElementType
//     plan: string
//   }[]
// }) {
//   const { isMobile } = useSidebar()
//   const [activeTeam, setActiveTeam] = React.useState(teams[0])

//   if (!activeTeam) {
//     return null
//   }

//   return (
//     <SidebarMenu>
//       <SidebarMenuItem>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <SidebarMenuButton
//               size="lg"
//               className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
//             >
//               <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
//                 <activeTeam.logo className="size-4" />
//               </div>
//               <div className="grid flex-1 text-left text-sm leading-tight">
//                 <span className="truncate font-medium">{activeTeam.name}</span>
//                 <span className="truncate text-xs">{activeTeam.plan}</span>
//               </div>
//               <ChevronsUpDown className="ml-auto" />
//             </SidebarMenuButton>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent
//             className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
//             align="start"
//             side={isMobile ? "bottom" : "right"}
//             sideOffset={4}
//           >
//             <DropdownMenuLabel className="text-xs text-muted-foreground">
//               Your Identity
//             </DropdownMenuLabel>
//             {teams.map((team, index) => (
//               <DropdownMenuItem
//                 key={team.name}
//                 onClick={() => setActiveTeam(team)}
//                 className="gap-2 p-2"
//               >
//                 <div className="flex size-6 items-center justify-center rounded-md border">
//                   <team.logo className="size-3.5 shrink-0" />
//                 </div>
//                 {team.name}
//                 {/* <DropdownMenuShortcut>{index + 1}</DropdownMenuShortcut> */}
//               </DropdownMenuItem>
//             ))}
//             {/* <DropdownMenuSeparator />
//             <DropdownMenuItem className="gap-2 p-2">
//               <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
//                 <Plus className="size-4" />
//               </div>
//               <div className="font-medium text-muted-foreground">Add team</div>
//             </DropdownMenuItem> */}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </SidebarMenuItem>
//     </SidebarMenu>
//   )
// }


"use client"

import * as React from "react"
import { ChevronsUpDown, Settings2 } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const { isMobile } = useSidebar()
  
  // Initialize with the first team item as a baseline
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  // Hydrate the state from localStorage safely after the component mounts on the client
  React.useEffect(() => {
    try {
      const savedTeamName = localStorage.getItem("selected_identity_name")
      if (savedTeamName) {
        // Find the matching object from the original array configuration
        const matchedTeam = teams.find((t) => t.name === savedTeamName)
        if (matchedTeam) {
          setActiveTeam(matchedTeam)
        }
      }
    } catch (error) {
      console.error("Failed to parse identity from localStorage", error)
    }
  }, [teams])

  // Wrap the state setter to save updates directly into localStorage
  const handleTeamChange = (team: typeof teams[number]) => {
    setActiveTeam(team)
    try {
      localStorage.setItem("selected_identity_name", team.name)
    } catch (error) {
      console.error("Failed to write identity preference to storage", error)
    }
  }

  if (!activeTeam) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <activeTeam.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{activeTeam.name}</span>
                <span className="truncate text-xs text-muted-foreground">{activeTeam.plan}</span>
              </div>
              <Settings2 className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Your Identity
            </DropdownMenuLabel>
            {teams.map((team) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => handleTeamChange(team)}
                className="gap-2 p-2 cursor-pointer"
              >
                <div className="flex size-6 items-center justify-center rounded-md border">
                  <team.logo className="size-3.5 shrink-0" />
                </div>
                <div className="flex flex-col text-left text-xs leading-tight">
                  <span className="font-medium">{team.name}</span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}


// // // "use client"

// // // import * as React from "react"
// // // import { Check, Edit2, Sparkles } from "lucide-react"

// // // import {
// // //   DropdownMenu,
// // //   DropdownMenuContent,
// // //   DropdownMenuLabel,
// // //   DropdownMenuSeparator,
// // //   DropdownMenuTrigger,
// // // } from "@/components/ui/dropdown-menu"
// // // import {
// // //   SidebarMenu,
// // //   SidebarMenuButton,
// // //   SidebarMenuItem,
// // // } from "@/components/ui/sidebar"
// // // import { Input } from "@/components/ui/input"
// // // import { Button } from "@/components/ui/button"

// // // // Fun, preset emojis they can quickly tap to set their vibe
// // // const PRESET_EMOJIS = ["💻", "🚀", "🎨", "🧠", "💼", "🤖", "📈", "🦖", "⚡", "🔮"]

// // // export function TeamSwitcher() {
// // //   // Personal default state that they can overwrite instantly
// // //   const [title, setTitle] = React.useState("Future Fullstack Dev")
// // //   const [subText, setSubText] = React.useState("Leveling up...")
// // //   const [emoji, setEmoji] = React.useState("🚀")
  
// // //   // Temporary states to hold inputs while editing
// // //   const [inputTitle, setInputTitle] = React.useState(title)
// // //   const [inputSubText, setInputSubText] = React.useState(subText)
// // //   const [isOpen, setIsOpen] = React.useState(false)

// // //   const handleSave = (e: React.FormEvent) => {
// // //     e.preventDefault()
// // //     if (inputTitle.trim()) setTitle(inputTitle)
// // //     setSubText(inputSubText)
// // //     setIsOpen(false)
// // //   }

// // //   return (
// // //     <SidebarMenu>
// // //       <SidebarMenuItem>
// // //         <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          
// // //           {/* Trigger: Displays their custom crafted title */}
// // //           <DropdownMenuTrigger asChild>
// // //             <SidebarMenuButton
// // //               size="lg"
// // //               className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group relative"
// // //             >
// // //               <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary/10 text-base border border-primary/20">
// // //                 {emoji}
// // //               </div>
// // //               <div className="grid flex-1 text-left text-sm leading-tight max-w-[140px]">
// // //                 <span className="truncate font-semibold text-foreground/90 group-hover:text-primary transition-colors">
// // //                   {title}
// // //                 </span>
// // //                 <span className="truncate text-xs text-muted-foreground">
// // //                   {subText || "Set a subtitle"}
// // //                 </span>
// // //               </div>
// // //               <Edit2 className="ml-auto size-3 opacity-0 group-hover:opacity-40 transition-opacity" />
// // //             </SidebarMenuButton>
// // //           </DropdownMenuTrigger>
          
// // //           {/* Content: The Customization Panel */}
// // //           <DropdownMenuContent
// // //             className="w-64 rounded-xl p-4 border border-border shadow-md bg-background space-y-3"
// // //             align="start"
// // //             side="right"
// // //             sideOffset={10}
// // //           >
// // //             <DropdownMenuLabel className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 px-0 pt-0">
// // //               <Sparkles className="size-3 text-primary" /> Manifest your target role
// // //             </DropdownMenuLabel>
            
// // //             <DropdownMenuSeparator className="-mx-4" />
            
// // //             {/* Quick Emoji Vibe Selector */}
// // //             <div className="space-y-1.5">
// // //               <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80">Choose your vibe</span>
// // //               <div className="grid grid-cols-5 gap-1.5">
// // //                 {PRESET_EMOJIS.map((item) => (
// // //                   <button
// // //                     key={item}
// // //                     type="button"
// // //                     onClick={() => setEmoji(item)}
// // //                     className={`h-8 rounded-md text-base transition-all border ${
// // //                       emoji === item 
// // //                         ? "bg-primary/10 border-primary scale-105" 
// // //                         : "bg-muted/40 border-transparent hover:bg-muted"
// // //                     }`}
// // //                   >
// // //                     {item}
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Form to type out custom strings */}
// // //             <form onSubmit={handleSave} className="space-y-3 pt-1">
// // //               <div className="space-y-1">
// // //                 <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80">What are you becoming?</span>
// // //                 <Input
// // //                   value={inputTitle}
// // //                   onChange={(e) => setInputTitle(e.target.value)}
// // //                   placeholder="e.g., Senior Frontend Architect"
// // //                   maxLength={30}
// // //                   className="h-8 text-xs bg-muted/30 focus-visible:ring-1 border-border focus-visible:ring-primary"
// // //                 />
// // //               </div>

// // //               <div className="space-y-1">
// // //                 <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80">Current Subtitle / Focus</span>
// // //                 <Input
// // //                   value={inputSubText}
// // //                   onChange={(e) => setInputSubText(e.target.value)}
// // //                   placeholder="e.g., Grinding CSS..."
// // //                   maxLength={25}
// // //                   className="h-8 text-xs bg-muted/30 focus-visible:ring-1 border-border focus-visible:ring-primary"
// // //                 />
// // //               </div>

// // //               <Button type="submit" size="sm" className="w-full h-8 text-xs gap-1 bg-primary font-medium text-primary-foreground hover:bg-primary/90">
// // //                 <Check className="size-3" /> Update Profile Vibe
// // //               </Button>
// // //             </form>

// // //           </DropdownMenuContent>
// // //         </DropdownMenu>
// // //       </SidebarMenuItem>
// // //     </SidebarMenu>
// // //   )
// // // }

// // "use client"

// // import * as React from "react"
// // import { Check, Edit2, Sparkles } from "lucide-react"

// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuLabel,
// //   DropdownMenuSeparator,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu"
// // import {
// //   SidebarMenu,
// //   SidebarMenuButton,
// //   SidebarMenuItem,
// // } from "@/components/ui/sidebar"
// // import { Input } from "@/components/ui/input"
// // import { Button } from "@/components/ui/button"

// // const PRESET_EMOJIS = ["💻", "🚀", "🎨", "🧠", "💼", "🤖", "📈", "⚡", "🔮", "👑"]

// // export function TeamSwitcher() {
// //   // Core application states
// //   const [title, setTitle] = React.useState("Future Fullstack Dev")
// //   const [subText, setSubText] = React.useState("Leveling up...")
// //   const [emoji, setEmoji] = React.useState("🚀")
  
// //   // Input tracking states
// //   const [inputTitle, setInputTitle] = React.useState("")
// //   const [inputSubText, setInputSubText] = React.useState("")
// //   const [isOpen, setIsOpen] = React.useState(false)

// //   // 1. On Mount: Hydrate data directly from LocalStorage safely
// //   React.useEffect(() => {
// //     const savedTitle = localStorage.getItem("vibe_title")
// //     const savedSubText = localStorage.getItem("vibe_subtext")
// //     const savedEmoji = localStorage.getItem("vibe_emoji")

// //     if (savedTitle) {
// //       setTitle(savedTitle)
// //       setInputTitle(savedTitle)
// //     } else {
// //       setInputTitle("Future Fullstack Dev")
// //     }

// //     if (savedSubText) {
// //       setSubText(savedSubText)
// //       setInputSubText(savedSubText)
// //     } else {
// //       setInputSubText("Leveling up...")
// //     }

// //     if (savedEmoji) {
// //       setEmoji(savedEmoji)
// //     }
// //   }, [])

// //   // Sync inputs if a user opens the modal after changing their mind mid-edit
// //   React.useEffect(() => {
// //     if (isOpen) {
// //       setInputTitle(title)
// //       setInputSubText(subText)
// //     }
// //   }, [isOpen, title, subText])

// //   // 2. On Save: Commit adjustments to both State and LocalStorage
// //   const handleSave = (e: React.FormEvent) => {
// //     e.preventDefault()
    
// //     const finalTitle = inputTitle.trim() || "Future Dev"
// //     const finalSubText = inputSubText.trim() || "Learning..."

// //     setTitle(finalTitle)
// //     setSubText(finalSubText)
    
// //     localStorage.setItem("vibe_title", finalTitle)
// //     localStorage.setItem("vibe_subtext", finalSubText)
// //     localStorage.setItem("vibe_emoji", emoji)
    
// //     setIsOpen(false)
// //   }

// //   // Quick select updates the emoji instantly in localStorage
// //   const handleEmojiSelect = (selectedEmoji: string) => {
// //     setEmoji(selectedEmoji)
// //     localStorage.setItem("vibe_emoji", selectedEmoji)
// //   }

// //   return (
// //     <SidebarMenu>
// //       <SidebarMenuItem>
// //         <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          
// //           <DropdownMenuTrigger asChild>
// //             <SidebarMenuButton
// //               size="lg"
// //               className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group relative"
// //             >
// //               <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary/10 text-base border border-primary/20">
// //                 {emoji}
// //               </div>
// //               <div className="grid flex-1 text-left text-sm leading-tight max-w-[140px]">
// //                 <span className="truncate font-semibold text-foreground/90 group-hover:text-primary transition-colors">
// //                   {title}
// //                 </span>
// //                 <span className="truncate text-xs text-muted-foreground">
// //                   {subText}
// //                 </span>
// //               </div>
// //               <Edit2 className="ml-auto size-3 opacity-0 group-hover:opacity-40 transition-opacity" />
// //             </SidebarMenuButton>
// //           </DropdownMenuTrigger>
          
// //           <DropdownMenuContent
// //             className="w-64 rounded-xl p-4 border border-border shadow-md bg-background space-y-3"
// //             align="start"
// //             side="right"
// //             sideOffset={10}
// //           >
// //             <DropdownMenuLabel className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 px-0 pt-0">
// //               <Sparkles className="size-3 text-primary" /> Manifest your target role
// //             </DropdownMenuLabel>
            
// //             <DropdownMenuSeparator className="-mx-4" />
            
// //             <div className="space-y-1.5">
// //               <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80">Choose your vibe</span>
// //               <div className="grid grid-cols-5 gap-1.5">
// //                 {PRESET_EMOJIS.map((item) => (
// //                   <button
// //                     key={item}
// //                     type="button"
// //                     onClick={() => handleEmojiSelect(item)}
// //                     className={`h-8 rounded-md text-base transition-all border ${
// //                       emoji === item 
// //                         ? "bg-primary/10 border-primary scale-105" 
// //                         : "bg-muted/40 border-transparent hover:bg-muted"
// //                     }`}
// //                   >
// //                     {item}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             <form onSubmit={handleSave} className="space-y-3 pt-1">
// //               <div className="space-y-1">
// //                 <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80">What are you becoming?</span>
// //                 <Input
// //                   value={inputTitle}
// //                   onChange={(e) => setInputTitle(e.target.value)}
// //                   placeholder="e.g., Senior Frontend Architect"
// //                   maxLength={30}
// //                   className="h-8 text-xs bg-muted/30 focus-visible:ring-1 border-border focus-visible:ring-primary"
// //                 />
// //               </div>

// //               <div className="space-y-1">
// //                 <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80">Current Subtitle / Focus</span>
// //                 <Input
// //                   value={inputSubText}
// //                   onChange={(e) => setInputSubText(e.target.value)}
// //                   placeholder="e.g., Grinding CSS..."
// //                   maxLength={25}
// //                   className="h-8 text-xs bg-muted/30 focus-visible:ring-1 border-border focus-visible:ring-primary"
// //                 />
// //               </div>

// //               <Button type="submit" size="sm" className="w-full h-8 text-xs gap-1 bg-primary font-medium text-primary-foreground hover:bg-primary/90">
// //                 <Check className="size-3" /> Update Profile Vibe
// //               </Button>
// //             </form>

// //           </DropdownMenuContent>
// //         </DropdownMenu>
// //       </SidebarMenuItem>
// //     </SidebarMenu>
// //   )
// // }

// "use client"

// import * as React from "react"
// import { 
//   Check, 
//   Edit2, 
//   Sparkles,
//   Laptop,     // 💻 Code / Developer
//   Rocket,     // 🚀 Fast growth / Startup
//   Palette,    // 🎨 UI/UX Design
//   Brain,      // 🧠 AI / Engineering
//   Briefcase,  // 💼 Business / Product Manager
//   Bot,        // 🤖 Automation / Machine Learning
//   TrendingUp, // 📈 Growth / Marketing
//   Zap,        // ⚡ Performance / Edge
//   Terminal,   // 🐚 Backend / Systems
//   Crown       // 👑 Founder / Lead
// } from "lucide-react"

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

// // 1. Create a dictionary mapping keys to components for easy rendering & persistence
// const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
//   laptop: Laptop,
//   rocket: Rocket,
//   palette: Palette,
//   brain: Brain,
//   briefcase: Briefcase,
//   bot: Bot,
//   trending: TrendingUp,
//   zap: Zap,
//   terminal: Terminal,
//   crown: Crown,
// }

// export function TeamSwitcher() {
//   const [title, setTitle] = React.useState("Future Fullstack Dev")
//   const [subText, setSubText] = React.useState("Leveling up...")
//   const [iconKey, setIconKey] = React.useState("rocket") // Save key as string for localStorage compatibility
  
//   const [inputTitle, setInputTitle] = React.useState("")
//   const [inputSubText, setInputSubText] = React.useState("")
//   const [isOpen, setIsOpen] = React.useState(false)

//   // Get active component from dictionary
//   const ActiveIcon = ICON_MAP[iconKey] || Rocket

//   // Hydrate data from LocalStorage on mount
//   React.useEffect(() => {
//     const savedTitle = localStorage.getItem("vibe_title")
//     const savedSubText = localStorage.getItem("vibe_subtext")
//     const savedIconKey = localStorage.getItem("vibe_icon_key")

//     if (savedTitle) {
//       setTitle(savedTitle)
//       setInputTitle(savedTitle)
//     } else {
//       setInputTitle("Future Fullstack Dev")
//     }

//     if (savedSubText) {
//       setSubText(savedSubText)
//       setInputSubText(savedSubText)
//     } else {
//       setInputSubText("Leveling up...")
//     }

//     if (savedIconKey && ICON_MAP[savedIconKey]) {
//       setIconKey(savedIconKey)
//     }
//   }, [])

//   React.useEffect(() => {
//     if (isOpen) {
//       setInputTitle(title)
//       setInputSubText(subText)
//     }
//   }, [isOpen, title, subText])

//   const handleSave = (e: React.FormEvent) => {
//     e.preventDefault()
    
//     const finalTitle = inputTitle.trim() || "Future Dev"
//     const finalSubText = inputSubText.trim() || "Learning..."

//     setTitle(finalTitle)
//     setSubText(finalSubText)
    
//     localStorage.setItem("vibe_title", finalTitle)
//     localStorage.setItem("vibe_subtext", finalSubText)
//     localStorage.setItem("vibe_icon_key", iconKey)
    
//     setIsOpen(false)
//   }

//   const handleIconSelect = (key: string) => {
//     setIconKey(key)
//     localStorage.setItem("vibe_icon_key", key)
//   }

//   return (
//     <SidebarMenu>
//       <SidebarMenuItem>
//         <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          
//           <DropdownMenuTrigger asChild>
//             <SidebarMenuButton
//               size="lg"
//               className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group relative"
//             >
//               <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
//                 <ActiveIcon className="size-4" />
//               </div>
//               <div className="grid flex-1 text-left text-sm leading-tight max-w-[140px]">
//                 <span className="truncate font-semibold text-foreground/90 group-hover:text-primary transition-colors">
//                   {title}
//                 </span>
//                 <span className="truncate text-xs text-muted-foreground">
//                   {subText}
//                 </span>
//               </div>
//               <Edit2 className="ml-auto size-3 opacity-0 group-hover:opacity-40 transition-opacity" />
//             </SidebarMenuButton>
//           </DropdownMenuTrigger>
          
//           <DropdownMenuContent
//             className="w-64 rounded-xl p-4 border border-border shadow-md bg-background space-y-3"
//             align="start"
//             side="right"
//             sideOffset={10}
//           >
//             <DropdownMenuLabel className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 px-0 pt-0">
//               <Sparkles className="size-3 text-primary" /> Manifest your target role
//             </DropdownMenuLabel>
            
//             <DropdownMenuSeparator className="-mx-4" />
            
//             {/* Clean Icon Selector Grid */}
//             <div className="space-y-1.5">
//               <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80">Choose your badge</span>
//               <div className="grid grid-cols-5 gap-1.5">
//                 {Object.entries(ICON_MAP).map(([key, IconComponent]) => (
//                   <button
//                     key={key}
//                     type="button"
//                     onClick={() => handleIconSelect(key)}
//                     className={`h-8 rounded-md flex items-center justify-center transition-all border ${
//                       iconKey === key 
//                         ? "bg-primary/10 border-primary text-primary scale-105" 
//                         : "bg-muted/40 border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
//                     }`}
//                   >
//                     <IconComponent className="size-4" />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <form onSubmit={handleSave} className="space-y-3 pt-1">
//               <div className="space-y-1">
//                 <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80">What are you becoming?</span>
//                 <Input
//                   value={inputTitle}
//                   onChange={(e) => setInputTitle(e.target.value)}
//                   placeholder="e.g., Senior Frontend Architect"
//                   maxLength={30}
//                   className="h-8 text-xs bg-muted/30 focus-visible:ring-1 border-border focus-visible:ring-primary"
//                 />
//               </div>

//               <div className="space-y-1">
//                 <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80">Current Subtitle / Focus</span>
//                 <Input
//                   value={inputSubText}
//                   onChange={(e) => setInputSubText(e.target.value)}
//                   placeholder="e.g., Grinding CSS..."
//                   maxLength={25}
//                   className="h-8 text-xs bg-muted/30 focus-visible:ring-1 border-border focus-visible:ring-primary"
//                 />
//               </div>

//               <Button type="submit" size="sm" className="w-full h-8 text-xs gap-1 bg-primary font-medium text-primary-foreground hover:bg-primary/90">
//                 <Check className="size-3" /> Update Profile Vibe
//               </Button>
//             </form>

//           </DropdownMenuContent>
//         </DropdownMenu>
//       </SidebarMenuItem>
//     </SidebarMenu>
//   )
// }

// "use client"

// import * as React from "react"
// import { 
//   Check, 
//   Edit2, 
//   Sparkles,
//   Laptop,     
//   Rocket,     
//   Palette,    
//   Brain,      
//   Briefcase,  
//   Bot,        
//   TrendingUp, 
//   Zap,        
//   Terminal,   
//   Crown       
// } from "lucide-react"

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip"

// const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
//   laptop: Laptop,
//   rocket: Rocket,
//   palette: Palette,
//   brain: Brain,
//   briefcase: Briefcase,
//   bot: Bot,
//   trending: TrendingUp,
//   zap: Zap,
//   terminal: Terminal,
//   crown: Crown,
// }

// export function TeamSwitcher() {
//   const [title, setTitle] = React.useState("Future Fullstack Dev")
//   const [subText, setSubText] = React.useState("Leveling up...")
//   const [iconKey, setIconKey] = React.useState("rocket") 
  
//   const [inputTitle, setInputTitle] = React.useState("")
//   const [inputSubText, setInputSubText] = React.useState("")
//   const [isOpen, setIsOpen] = React.useState(false)

//   const ActiveIcon = ICON_MAP[iconKey] || Rocket

//   // Hydrate data from LocalStorage on mount
//   React.useEffect(() => {
//     const savedTitle = localStorage.getItem("vibe_title")
//     const savedSubText = localStorage.getItem("vibe_subtext")
//     const savedIconKey = localStorage.getItem("vibe_icon_key")

//     if (savedTitle) {
//       setTitle(savedTitle)
//       setInputTitle(savedTitle)
//     } else {
//       setInputTitle("Future Fullstack Dev")
//     }

//     if (savedSubText) {
//       setSubText(savedSubText)
//       setInputSubText(savedSubText)
//     } else {
//       setInputSubText("Leveling up...")
//     }

//     if (savedIconKey && ICON_MAP[savedIconKey]) {
//       setIconKey(savedIconKey)
//     }
//   }, [])

//   React.useEffect(() => {
//     if (isOpen) {
//       setInputTitle(title)
//       setInputSubText(subText)
//     }
//   }, [isOpen, title, subText])

//   const handleSave = (e: React.FormEvent) => {
//     e.preventDefault()
    
//     const finalTitle = inputTitle.trim() || "Future Dev"
//     const finalSubText = inputSubText.trim() || "Learning..."

//     setTitle(finalTitle)
//     setSubText(finalSubText)
    
//     localStorage.setItem("vibe_title", finalTitle)
//     localStorage.setItem("vibe_subtext", finalSubText)
//     localStorage.setItem("vibe_icon_key", iconKey)
    
//     setIsOpen(false)
//   }

//   const handleIconSelect = (key: string) => {
//     setIconKey(key)
//     localStorage.setItem("vibe_icon_key", key)
//   }

//   return (
//     <TooltipProvider delayDuration={400}>
//       <SidebarMenu>
//         <SidebarMenuItem>
//           <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            
//             {/* Tooltip wrapper around the sidebar trigger button */}
//             <Tooltip disableHoverableContent={isOpen}>
//               <TooltipTrigger asChild>
//                 <DropdownMenuTrigger asChild>
//                   <SidebarMenuButton
//                     size="lg"
//                     className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group relative cursor-pointer"
//                   >
//                     <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
//                       <ActiveIcon className="size-4" />
//                     </div>
//                     <div className="grid flex-1 text-left text-sm leading-tight max-w-[140px]">
//                       <span className="truncate font-semibold text-foreground/90 group-hover:text-primary transition-colors">
//                         {title}
//                       </span>
//                       <span className="truncate text-xs text-muted-foreground">
//                         {subText}
//                       </span>
//                     </div>
//                     <Edit2 className="ml-auto size-3 opacity-0 group-hover:opacity-40 transition-opacity" />
//                   </SidebarMenuButton>
//                 </DropdownMenuTrigger>
//               </TooltipTrigger>
              
//               {/* Tooltip clean popup view */}
//               <TooltipContent 
//                 side="bottom" 
//                 align="center" 
//                 className="bg-popover text-popover-foreground border border-border shadow-md rounded-lg flex flex-col p-2.5"
//               >
//                 <p className="text-xs font-semibold leading-tight">{title}</p>
//                 <p className="text-[11px] text-muted-foreground leading-normal">{subText}</p>
//               </TooltipContent>
//             </Tooltip>
            
//             <DropdownMenuContent
//               className="w-64 rounded-xl p-4 border border-border shadow-md bg-background space-y-3"
//               align="start"
//               side="right"
//               sideOffset={10}
//             >
//               <DropdownMenuLabel className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 px-0 pt-0">
//                 <Sparkles className="size-3 text-primary" /> Manifest your target role
//               </DropdownMenuLabel>
              
//               <DropdownMenuSeparator className="-mx-4" />
              
//               <div className="space-y-1.5">
//                 <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80">Choose your badge</span>
//                 <div className="grid grid-cols-5 gap-1.5">
//                   {Object.entries(ICON_MAP).map(([key, IconComponent]) => (
//                     <button
//                       key={key}
//                       type="button"
//                       onClick={() => handleIconSelect(key)}
//                       className={`h-8 rounded-md flex items-center justify-center transition-all border ${
//                         iconKey === key 
//                           ? "bg-primary/10 border-primary text-primary scale-105" 
//                           : "bg-muted/40 border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
//                       }`}
//                     >
//                       <IconComponent className="size-4" />
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <form onSubmit={handleSave} className="space-y-3 pt-1">
//                 <div className="space-y-1">
//                   <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80">What are you becoming?</span>
//                   <Input
//                     value={inputTitle}
//                     onChange={(e) => setInputTitle(e.target.value)}
//                     placeholder="e.g., Senior Frontend Architect"
//                     maxLength={50} // Increased string length since tooltips handle overflow perfectly
//                     className="h-8 text-xs bg-muted/30 focus-visible:ring-1 border-border focus-visible:ring-primary"
//                   />
//                 </div>

//                 <div className="space-y-1">
//                   <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80">Current Subtitle / Focus</span>
//                   <Input
//                     value={inputSubText}
//                     onChange={(e) => setInputSubText(e.target.value)}
//                     placeholder="e.g., Grinding CSS..."
//                     maxLength={45} // Increased string length here as well
//                     className="h-8 text-xs bg-muted/30 focus-visible:ring-1 border-border focus-visible:ring-primary"
//                   />
//                 </div>

//                 <Button type="submit" size="sm" className="w-full h-8 text-xs gap-1 bg-primary font-medium text-primary-foreground hover:bg-primary/90">
//                   <Check className="size-3" /> Update Profile Vibe
//                 </Button>
//               </form>

//             </DropdownMenuContent>
//           </DropdownMenu>
//         </SidebarMenuItem>
//       </SidebarMenu>
//     </TooltipProvider>
//   )
// }