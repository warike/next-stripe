import type { Metadata } from "next";

import { Icons } from "@/components/shared/Icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";


const includedFeatures = [
    'Dashboard Analytics',
    'Member resources',
    'Private forum access',
    'Premium Support', 
];
export const metadata: Metadata = {
    title: "Pricing",
};

export default function Pricing() {
    
    return (
        <div className="bg-white ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl sm:text-center">
                <h1 className="text-pretty text-5xl font-semibold tracking-tight sm:text-balance sm:text-6xl">
                    Simple no-tricks pricing
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                    Unlock all features including unlimited posts for your blog.
                </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                    <h2 className="text-3xl font-semibold tracking-tight">Lifetime membership</h2>
                    {/* <p className="mt-6 text-base/7 text-gray-600">
                        Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                        repellendus etur quidem assumenda.
                    </p> */}
                    <div className="mt-10 flex items-center gap-x-4">
                        <h3 className="flex-none text-sm/6 font-semibold ">What&apos;s included in the PRO plan</h3>
                        <div className="h-px flex-auto bg-gray-100" />
                    </div>
                    <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                    {includedFeatures.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                            <Icons.check aria-hidden="true" className="h-6 w-5 flex-none" />
                            {feature}
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
                    <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                        <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                            <span className="text-5xl font-semibold tracking-tight text-gray-900">$999</span>
                            <span className="text-sm/6 font-semibold tracking-wide text-gray-600">USD</span>
                        </p>
                        <Button
                            variant={"default"}
                            className={cn(
                                "mt-10 block w-full",
                            )}
                        > 
                            <Link
                                href={{ pathname: 'dashboard/billing'}}
                                title="Link to upgrade account"
                            >
                                Getting started
                            </Link>

                        </Button>
                        
                        <p className="mt-6 text-xs/5 text-gray-600">
                            Invoices and receipts available for easy company reimbursement
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}