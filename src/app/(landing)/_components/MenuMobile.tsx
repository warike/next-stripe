
import { siteConfig } from '@/config';
import { Icons } from '@/components/shared/Icons';
import { useNavBar } from '@/components/context/NavBarContext';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Dialog, DialogTitle, DialogOverlay } from '@/components/ui/dialog';
import { products } from '@/config/nav';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MenuMobile() {
  const { mobileMenuOpen, setMobileMenuOpen } = useNavBar();
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/pricing')
    router.prefetch('/about')
  }, [router])

  return (
    <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <DialogOverlay className="fixed inset-0 z-10 bg-black/50" />
      <DialogPrimitive.Content className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <DialogTitle className="sr-only">Mobile Menu</DialogTitle>
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">{siteConfig.siteName}</span>
            <Icons.logo className="h-8 text-stone-700" />
          </a>
          <Button
            type="button"
            variant={"ghost"}
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <Icons.close aria-hidden="true" className="size-6" />
          </Button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Collapsible>
                <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Product
                  <Icons.chevronDown aria-hidden="true" className="size-5 flex-none data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-2">
                  {products.map((item) => (
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      key={item.name}
                      href={item.href}
                      title={`Link to ${item.name}`}
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
              <Link 
                onClick={() => setMobileMenuOpen(false)}
                title={'Link to pricing'}
                href={{pathname: '/pricing'}}
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Pricing
              </Link>
             
              <Link 
                onClick={() => setMobileMenuOpen(false)}
                title={'Link to bio'}
                href={{ pathname: '/about'}} 
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                About
              </Link>
            </div>
            <div className="flex flex-col gap-2 py-6">
              <SignInLink />
              <SignOutLink />  
            </div>
          </div>
        </div>
      </DialogPrimitive.Content>
    </Dialog>
  );
}
