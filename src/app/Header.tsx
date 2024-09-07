"use client"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Link from "next/link"

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between px-2 py-3 fixed top-0 w-full z-20 bg-[#fafafa]">
        <h1 className="flex items-center text-xl font-bold tracking-wide">Cisco NetConnect</h1>
        <div className="hidden md:flex items-center gap-3">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-1 grid-cols-2 p-4 md:w-[300px] lg:w-[400px]">
                    <div className="gap-1 grid">
                      <Link href="/#hero">
                        <Button variant="link" className="justify-start p-0 m-0">Hero</Button>
                      </Link>
                      <Link href="/#about">
                        <Button variant="link" className="justify-start p-0 m-0">About</Button>
                      </Link>
                      <Link href="/#missionVision">
                        <Button variant="link" className="justify-start p-0 m-0">Mission & Vision</Button>
                      </Link>
                    </div>
                    <div className="gap-1 grid">
                      <Link href="/#department">
                        <Button variant="link" className="justify-start p-0 m-0">Departments</Button>
                      </Link>
                      <Link href="/#faq">
                        <Button variant="link" className="justify-start p-0 m-0">FAQs</Button>
                      </Link>
                      <Link href="/#contact">
                        <Button variant="link" className="justify-start p-0 m-0">Contacts</Button>
                      </Link>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Updates</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-1 grid-cols-2 p-4 md:w-[300px] lg:w-[400px]">
                    <Link href="/news">
                      <Button variant="link" className="justify-start p-0 m-0">News</Button>
                    </Link>
                    <Link href="/blog">
                      <Button variant="link" className="justify-start p-0 m-0">Blogs</Button>
                    </Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/learning-hub" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Learning Hub
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/museo" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>  
                    Museo
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="/join">
            <Button className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-900 active:bg-neutral-700">Join us!</Button>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button  
                variant="ghost" 
                className="text-neutral-900"
              >
                <MenuIcon 
                  className="w-15 h-16 text-neutral-900"
                />
              </Button>
            </SheetTrigger>
            <SheetContent className="">
              <SheetHeader>
                <SheetTitle className="text-start">Cisco NetConnect</SheetTitle>
                <SheetDescription className="flex flex-col items-start gap-2">
                  <Link href="/">
                    <Button variant="link" className="pl-0">Home</Button>
                  </Link>
                  <Link href="/news">
                    <Button variant="link" className="pl-0">News</Button>
                  </Link>
                  <Link href="/blog">
                    <Button variant="link" className="pl-0">Blogs</Button>
                  </Link>
                  <Link href="/learning-hub">
                    <Button variant="link" className="pl-0">Learning hub</Button>
                  </Link>
                  <Link href="/museo">
                    <Button variant="link" className="pl-0">Museo</Button>
                  </Link>
                  <Link href="/join">
                    <Button className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-900 active:bg-neutral-700">Join us!</Button>
                  </Link>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

export default Header;