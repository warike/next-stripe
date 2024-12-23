import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-10 text-center">
      <h1 className="text-5xl font-bold lg:text-7xl">
        Unlock your business potential
      </h1>
      <p className="text-lg lg:text-2xl">
        We are a team of experts who have the skills and experience to help you
        unlock your business potential.
      </p>
      <div className="flex gap-4 items-center">

        <Button 
            variant="default" 
        >
            <Link
                href={'/dashboard/'}
                title="Dashboard"
            >
                Getting started
            </Link>
        </Button>

        <Button 
            variant="ghost"
        >
            <Link
                href={'/dashboard/'}
                title="Dashboard"
            >
                Contact us
            </Link>
        </Button>
            
            
      </div>
    </div>
  );
}