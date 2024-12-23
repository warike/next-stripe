import { Icons } from "@/components/shared/Icons"


export const MenuItems = {
  navMain: [
    {
      title: "Application",
      url: "#",
      icon: Icons.admin,
      isActive: true,
      items: [ 
        {
          title: "Plan and Billing",
          icon: Icons.billing,
          url: {
            pathname: '/dashboard/billing'
          },
        },    
        {
          title: "Settings",
          icon: Icons.settings,
          url: {
            pathname: '/dashboard/account'
          },
        },   
      ],
    },
  ],
}
  export const navigation = {
    solutions: [
      { name: 'Marketing', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Automation', href: '#' },
      { name: 'Commerce', href: '#' },
      { name: 'Insights', href: '#' },
    ],
    support: [
      { name: 'Submit ticket', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
    ],
    legal: [
      { name: 'Terms of service', href: '#' },
      { name: 'Privacy policy', href: '#' },
      { name: 'License', href: '#' },
    ],
  }
