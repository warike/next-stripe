import { Separator } from "@radix-ui/react-separator";
import { AppSidebar } from "@/components/nav/app-sidebar";
import { MainBreadcrumb } from "@/components/nav/main-breadcrumb";
import { NavUser } from "@/components/nav/nav-user";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

export default function MainLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>){
    return(
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
            <header className="flex h-16 shrink-0 justify-between items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b-2 border-b-gray-100">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator className="mr-2 h-4" />
                    <MainBreadcrumb />
                </div>
                <div className="flex gap-2 px-4">
                    <NavUser />
                </div>
            </header>
            <div>
                <main className="mt-4">
                {children}
                </main>
            </div>
            </SidebarInset>
        </SidebarProvider>
    )
  }