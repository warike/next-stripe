import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton";
import { useUser, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInLink(){
    const { isSignedIn, isLoaded } = useUser()

    if(!isLoaded)
        return <Skeleton />;

    if(isSignedIn)
        return (
          <Button 
            type="button" 
            variant={'outline'}
            size={'sm'} 
            className="slate-900"
          >
              <Link 
                title="Dashboard link"
                href={ { pathname: '/dashboard'}}
              >
                Dashboard
              </Link>
          </Button>
        )
      return (
        <SignInButton>
             <Button 
                type="button" 
                variant={"ghost"} 
                size={'sm'} 
                className="text-sm font-semibold text-gray-900"
            >
                Sign in <span aria-hidden="true">&rarr;</span>
            </Button>
        </SignInButton>
      )
}