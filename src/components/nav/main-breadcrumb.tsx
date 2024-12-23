'use client'

import { 
    Breadcrumb, 
    BreadcrumbItem, 
    BreadcrumbLink, 
    BreadcrumbList, 
    BreadcrumbPage, 
    BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { filter, split, get, startCase } from "lodash";
import { usePathname } from "next/navigation";

/**
 * https://nextjs.org/docs/app/api-reference/functions/use-pathname
 * @returns 
 */
export function MainBreadcrumb(){
  const pathname = usePathname()
  const segments = filter(split(pathname,'/'), Boolean) || [];
  const dynamicPage = startCase(get(segments, 1, 'Overview')); 

    return(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href={'/dashboard/'}>
             Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>{dynamicPage}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
}