import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton";
import { SignOutButton, useUser } from "@clerk/nextjs"


export default function SignOutLink(){
    const { isSignedIn, isLoaded } = useUser()
    if(!isLoaded)
        return <Skeleton />;

    if(!isSignedIn)
        return null;
    return (
        <SignOutButton>
            <Button 
                type="button" 
                variant={"ghost"} 
                size={'sm'} 
                className="text-sm/6 font-semibold text-gray-900"
            >
                Sign out
            </Button>
        </SignOutButton>
    )
}