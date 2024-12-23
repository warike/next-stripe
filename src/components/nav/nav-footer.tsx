import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { Icons } from "../shared/Icons"

export function SidebarSupportForm() {
  return (
    <Card className="shadow-none">
      <form>
        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-sm">Do you need help?</CardTitle>
          <CardDescription>
            Book free session
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2.5 p-4">
            <Button
                variant={`default`}
                className="w-full shadow-none"
                size="sm"
            >
                <Link 
                    title={`Link to call`}
                    href={{ pathname: ''}}
                    className="flex gap-2 justify-start"
                >
                    <Icons.calendar className="size-8" />
                    Schedule a call
                </Link>
                
            </Button>
            <Button
                variant={'outline'}
                className="w-full shadow-none"
                size="sm"
            >
                <Link 
                    title={`Link to email`}
                    href={{ pathname: ''}}
                    className="flex gap-2 justify-start"
                >
                    <Icons.email className="size-8" />
                    Email support
                </Link>
                
            </Button>
        </CardContent>
      </form>
    </Card>
  )
}
