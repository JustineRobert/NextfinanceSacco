"use client"; // This is a client component
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs';
import { ThemeToggler } from './ThemeToggler';
import { Button } from './ui/button';
import {  Fragment, useState } from 'react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import {
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "Save Funds to Build a Home",
    description: "Get a better understanding of your Savings with a Plan",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "SMS Reminder",
    description: "Send an SMS to Members",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Contact our Support Team",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
];

const callsToAction = [
  { name: "See Demo On How to Save", href: "https://youtu.be/W4YozokJjOA", icon: PlayCircleIcon },
  { name: "Contact Support", href: "#", icon: PhoneIcon },
];






function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="px-5 flex items-center justify-between">
      <nav className="max-auto max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="global"
      >
      <div className="flex lg:flex-1">  
      <Link href ="/" className="-m-1.5 p-1.5" >
        <span className="sr-only">Sacco Management App</span>
          <img
            src="https://i1.wp.com/nextlifefinance.com/wp-content/uploads/2020/09/cropped-nextlife-3.png?w=208&ssl=1"
            //src="https://media.licdn.com/dms/image/C4D0BAQF7p2ljJ4oxZA/company-logo_100_100/0/1630543152635?e=1709769600&v=beta&t=z6iR0ukkzSkjdD1NvLDuJntQg4nGY5PoGnWwsi7Ig0Y"
            alt="logo"
            className="h-12 w-auto"
            height={50}
            width={50}
           />
     
      </Link>
      </div >
      
      <div className="flex lg:hidden">
        <button type="button"
        className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
        onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open Main Menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true"/>

        </button>

      </div>
      
     
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              SAVINGS
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <item.icon
                          className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-[#013B94]"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-[#013B94]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013B94] hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-[#013B94]"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-white">
            WEEK
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            DEPOSITS
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            BONUS
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            ACTUAL BALANCE
          </a>
        </Popover.Group>



      </nav>
      <div className='px-5 flex space-x-2 items-center'>

        {/*User toggler*/}
        <ThemeToggler/>
        
        <UserButton afterSignOutUrl='/'/>

        <SignedOut>
            <SignInButton afterSignInUrl='/dashboard' mode='modal'/>
        </SignedOut>
      </div>
    </header>
  )
}

export default Header;
