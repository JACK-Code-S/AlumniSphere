"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  Calendar,
  Home,
  LogOut,
  MessageSquare,
  Moon,
  Search,
  Sun,
  Users,
  Briefcase,
  Heart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/components/theme-provider";

export function MainLayout(props) {
  const { children, userRole } = props;
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navigation = [
    { name: "Home", href: `/dashboard/${userRole}`, icon: Home },
    { name: "Events", href: `/dashboard/${userRole}/events`, icon: Calendar },
    { name: "Jobs", href: `/dashboard/${userRole}/jobs`, icon: Briefcase },
    { name: "Mentorship", href: `/dashboard/${userRole}/mentorship`, icon: Users },
    { name: "Donations", href: `/dashboard/${userRole}/donations`, icon: Heart },
    { name: "Messages", href: `/dashboard/${userRole}/messages`, icon: MessageSquare },
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-6">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                          isActive
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100"
                            : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href={`/dashboard/${userRole}`} className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
                  <path d="M9 12v6" />
                  <path d="M13 12v6" />
                  <path d="M14 7.5c-1 0-1.64.4-2 1-.36-.6-1-1-2-1-1.1 0-2 .9-2 2 0 1.5 2 3 4 5 2-2 4-3.5 4-5 0-1.1-.9-2-2-2z" />
                </svg>
              </div>
              <span className="font-bold text-xl hidden sm:inline-block text-blue-800 dark:text-blue-200">
                AlumniSphere
              </span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="container px-4 py-6 md:px-6 md:py-8"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
