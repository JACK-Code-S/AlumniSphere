"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (role) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(`/dashboard/${role.toLowerCase()}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <div className="flex items-center justify-center mb-2">
              <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
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
                  className="text-white"
                >
                  <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
                  <path d="M9 12v6" />
                  <path d="M13 12v6" />
                  <path d="M14 7.5c-1 0-1.64.4-2 1-.36-.6-1-1-2-1-1.1 0-2 .9-2 2 0 1.5 2 3 4 5 2-2 4-3.5 4-5 0-1.1-.9-2-2-2z" />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-200">AlumniSphere</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Connect, Collaborate, Grow</p>
          </motion.div>
        </div>

        <Card className="border-blue-100 dark:border-blue-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl">Welcome Back</CardTitle>
            <CardDescription className="text-center">Sign in to your account to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="alumni" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="alumni">Alumni</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
                <TabsTrigger value="student">Student</TabsTrigger>
              </TabsList>

              {["alumni", "admin", "student"].map((role) => (
                <TabsContent key={role} value={role} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`${role}-email`}>Email</Label>
                    <Input id={`${role}-email`} type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor={`${role}-password`}>Password</Label>
                      <a href="#" className="text-xs text-blue-600 hover:underline dark:text-blue-400">
                        Forgot password?
                      </a>
                    </div>
                    <Input id={`${role}-password`} type="password" />
                  </div>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => handleLogin(role)}
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : `Sign in as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
                  </Button>

                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-300 dark:border-gray-600" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="w-full gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-500"
                      >
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                        <path d="m10 15 5-3-5-3z" />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" className="w-full gap-2">
                      <Linkedin className="h-4 w-4 text-blue-600" />
                      LinkedIn
                    </Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
                Register here
              </a>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
