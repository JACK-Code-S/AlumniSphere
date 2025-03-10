"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, MessageSquare, Users, Briefcase, ArrowRight, Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

export function StudentDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Alumni Meetup",
      date: "March 15, 2025",
      location: "Main Campus Auditorium",
      attendees: 120,
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 2,
      title: "Career Fair 2025",
      date: "April 5, 2025",
      location: "Business School Building",
      attendees: 250,
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 3,
      title: "Tech Industry Panel",
      date: "March 28, 2025",
      location: "Virtual Event",
      attendees: 180,
      image: "/placeholder.svg?height=100&width=200",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
        <p className="text-muted-foreground">Connect with alumni, explore opportunities, and grow your network.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div className="col-span-1 md:col-span-1">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="secondary" className="w-full justify-start" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message Alumni
                </Button>
                <Button variant="secondary" className="w-full justify-start" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  Register for Events
                </Button>
                <Button variant="secondary" className="w-full justify-start" size="sm">
                  <Users className="mr-2 h-4 w-4" />
                  Find a Mentor
                </Button>
                <Button variant="secondary" className="w-full justify-start" size="sm">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Browse Jobs
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
