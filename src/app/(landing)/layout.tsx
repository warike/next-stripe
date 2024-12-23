import { cn } from "@/lib/utils";
import Header from "./_components/Header";

export default function LandingLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return(
        <div>
            <Header />
            <main 
              className={cn(
                "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                "py-10 sm:py-14"
              )}
            >
                {children}
            </main>
            
        </div>
    )
  }