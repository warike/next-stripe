"use client"

import { Icons } from '@/components/shared/Icons'
import { siteConfig } from '@/config'
import { useNavBar } from '@/components/context/NavBarContext'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverPortal, PopoverTrigger } from '@/components/ui/popover'
import { PopoverArrow } from '@radix-ui/react-popover'
import { products } from '@/config/nav'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'


export default function MenuNavBar(){
    const {setMobileMenuOpen } = useNavBar();
    return(
        <>
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href={'/'} className='-m-1.5 p-1.5' title={siteConfig.siteName} >
                        <span className="sr-only">{siteConfig.siteName}</span>
                        <Icons.logo className="size-6 text-stone-700" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <Button
                        type="button"
                        variant={'ghost'}
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Icons.bars className="size-6 text-stone-700" />
                    </Button>
                </div>
                <div className="hidden lg:flex lg:gap-x-24">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button 
                                variant={'ghost'}
                                className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
                            >
                                Experiments
                                <Icons.chevronDown
                                    aria-hidden="true"
                                    className="size-5 flex-none text-gray-400"
                                />
                            </Button>
                        </PopoverTrigger>
                        <PopoverPortal>
                            <PopoverContent
                                sideOffset={4}
                                align="start"
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-transform data-[state=closed]:translate-y-1 data-[state=closed]:opacity-0 data-[state=open]:duration-200 data-[state=closed]:duration-150 data-[state=open]:ease-out data-[state=closed]:ease-in"
                            >
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                        >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="h-6 text-gray-600 group-hover:text-gray-900" />
                                        </div>
                                        <div className="flex-auto">
                                            <Link
                                                href={item.href}
                                                className="block font-semibold text-gray-900"
                                                title={item.name}
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                        </div>
                                    ))}
                                </div>
                                <PopoverArrow className="fill-white" />
                            </PopoverContent>
                        </PopoverPortal>
                    </Popover>
                    <Link
                        title={'Link to pricing'}
                        href={{pathname: '/pricing'}}
                        className="text-sm/6 font-semibold text-gray-900"
                    >
                        <Button
                            variant={'ghost'}
                        >
                            Pricing
                        </Button>
                    </Link>
                    <div>
                        <Link
                            title="Link to bio"
                            href={{ pathname: '/about'}}
                            className="text-sm/6 font-semibold text-gray-900"
                        >
                            <Button
                                variant={'ghost'}
                            >
                                About
                            </Button>
                        </Link>
                    </div>
                    
                    
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
                    <SignOutLink />
                    <SignInLink />
                </div>
            </nav>
        </>
    )
}

