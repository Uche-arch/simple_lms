// "use client";

// import React from "react";
// import { AppSidebar } from "@/components/app-sidebar";
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <SidebarProvider>
//       {/* The sidebar stays locked here on the left side */}
//       <AppSidebar />

//       <SidebarInset>
//         {/* The top navigation bar stays permanently fixed here */}
//         <header className="flex h-16 items-center px-4 border-b">
//           <SidebarTrigger />
//           <div className="ml-4">
//             <h1 className="text-xl font-semibold">Dashboard</h1>
//           </div>
//         </header>

//         {/* Next.js injects the changing page views directly right here */}
//         <main className="flex flex-1 flex-col gap-6 p-6">
//           {children}
//         </main>
//       </SidebarInset>
//     </SidebarProvider>
//   );
// }

"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import { CoffeeModal } from "@/components/coffee-modal";
import { Banner1 } from "@/components/banner1";
import { useRouter } from "next/navigation";
import { Info } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Local state to control manual header button trigger clicks
  const [isCoffeeOpen, setIsCoffeeOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <SidebarProvider>
        {/* The sidebar stays locked here on the left side */}
        <AppSidebar />

        <SidebarInset>
          {pathname === "/dashboard2" && (
           <Banner1
           icon={Info}
  title="Platform Notice"
  description="Some analytics and activity metrics displayed on this dashboard are demonstration data and may not represent real platform usage."
/>
          )}
          {/* The top navigation bar stays permanently fixed here */}
          <header className="flex h-16 items-center px-4 border-b justify-between">
            <div className="flex items-center">
              <SidebarTrigger />
              <div className="ml-4">
                {/* <h1 className="text-xl font-semibold hover:cursor-pointer" onClick={/dashboard2}>Overview</h1> */}
                <h1
                  className="text-xl font-semibold cursor-pointer hover:text-primary transition-colors"
                  onClick={() => router.push("/dashboard2")}
                >
                  Overview
                </h1>
              </div>
            </div>

            {/* Premium Header Monetization Button
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsCoffeeOpen(true)}
            className="flex items-center gap-2 border-amber-500/20 bg-amber-500/[0.04] text-amber-600 hover:bg-amber-500/[0.08] hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 dark:hover:bg-amber-500/[0.12] transition-colors rounded-lg font-medium text-xs h-9 px-3"
          >
            <Coffee className="h-4 w-4 text-amber-500 animate-pulse" />
            <span className="hidden sm:inline">Buy me a coffee</span>
          </Button> */}
            {/* Premium Header Monetization Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsCoffeeOpen(true)}
              className="flex items-center gap-2 h-9 px-3 text-xs font-medium rounded-lg border-border bg-muted/40 hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all shadow-sm group"
            >
              <Coffee className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <span className="hidden sm:inline">Support</span>
            </Button>
          </header>

          {/* Next.js injects the changing page views directly right here */}
          <main className="flex flex-1 flex-col gap-6 p-6">{children}</main>
        </SidebarInset>

        {/* Global Persistent Context-Free Trigger Modal Layout */}
        <CoffeeModal
          isOpen={isCoffeeOpen}
          onOpenChange={setIsCoffeeOpen}
          roadmapTitle="" // Passed blank so the modal copy dynamically shifts for context-free support!
        />
      </SidebarProvider>
    </>
  );
}
