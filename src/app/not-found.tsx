"use client"
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { env } from "@/env";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {

    const router = useRouter();
    const contact_url: string = env.NEXT_PUBLIC_CONTACT_URL
	return (
        <Container>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                <p className="text-base font-semibold">404</p>
                
                <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                    Page not found
                </h1>
                <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button 
                        onClick={()=>router.push("/")} 
                        type="button" 
                        size={'lg'} 
                        className="text-md"
                    >
                        Go Back
                    </Button>
                    <Button 
                        type="button" 
                        variant={"ghost"}  
                        size={'lg'} 
                        className="text-md"
                    >
                        <Link 
                            title='Link to call schedule'
                            href={contact_url}
                        >
                            Contact us
                        </Link>
                    </Button>
                </div>
                </div>
            </main>
        </Container>
	);
};