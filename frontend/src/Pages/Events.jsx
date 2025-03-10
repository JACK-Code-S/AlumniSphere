"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Search, MapPin, Users, Clock, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function EventsPage({ userRole }) {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data
  const events = [
    {
      id: 1,
      title: "Annual Alumni Meetup",
      date: "March 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Main Campus Auditorium",
      description:
        "Join us for our annual alumni gathering to reconnect with old friends, make new connections, and hear updates from the university.",
      category: "Networking",
      attendees: 120,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Career Fair 2025",
      date: "April 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Business School Building",
      description:
        "Connect with top employers from various industries. Perfect for students seeking internships and alumni looking for new opportunities.",
      category: "Career",
      attendees: 250,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Tech Industry Panel",
      date: "March 28, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual Event",
      description:
        "Hear from alumni working at leading tech companies about current trends and career opportunities in the technology sector.",
      category: "Panel",
      attendees: 180,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "Homecoming Weekend",
      date: "October 15-17, 2025",
      time: "Various Times",
      location: "University Campus",
      description:
        "A weekend full of activities, sports events, and celebrations for alumni to revisit their alma mater and reconnect with the community.",
      category: "Social",
      attendees: 500,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "Alumni Mentorship Workshop",
      date: "May 10, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Student Center",
      description: "Learn how to become an effective mentor and make a difference in students' lives and careers.",
      category: "Workshop",
      attendees: 75,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "Fundraising Gala",
      date: "June 20, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "Grand Hotel Ballroom",
      description:
        "An elegant evening to raise funds for student scholarships and university initiatives. Dinner, entertainment, and silent auction included.",
      category: "Fundraising",
      attendees: 200,
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Events</h1>
        <p className="text-muted-foreground">
          Discover and register for upcoming events hosted by alumni and the institution.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            type="search"
            placeholder="Search events..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="networking">Networking</SelectItem>
              <SelectItem value="career">Career</SelectItem>
              <SelectItem value="panel">Panel</SelectItem>
              <SelectItem value="social">Social</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
              <SelectItem value="fundraising">Fundraising</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="upcoming">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="past">Past Events</SelectItem>
              <SelectItem value="thisMonth">This Month</SelectItem>
              <SelectItem value="nextMonth">Next Month</SelectItem>
            </SelectContent>
          </Select>

          {userRole === "admin" && <Button>Create Event</Button>}
        </div>
      </div>

      <Tabs defaultValue="grid" className="w-full">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="grid">Grid</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>

          <div className="text-sm text-muted-foreground">Showing {events.length} events</div>
        </div>

        <TabsContent value="grid" className="mt-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {events.map((event) => (
              <motion.div key={event.id} variants={item}>
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-3 right-3">{event.category}</Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {event.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2 flex-1">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="h-3.5 w-3.5" />
                        {event.attendees} attending
                      </div>
                      <p className="line-clamp-3 mt-2">{event.description}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button className="w-full">{userRole === "admin" ? "Manage Event" : "Register Now"}</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="list" className="mt-6">
          <div className="space-y-4">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge>{event.category}</Badge>
                          <h3 className="text-xl font-bold">{event.title}</h3>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {event.location}
                          </div>
                        </div>
                        <p className="line-clamp-2">{event.description}</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{event.attendees}</div>
                          <div className="text-xs text-muted-foreground">Attending</div>
                        </div>
                        <Button>{userRole === "admin" ? "Manage" : "Register"}</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>March 2025</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Today
                  </Button>
                  <div className="flex">
                    <Button variant="outline" size="icon" className="rounded-r-none">
                      <ChevronDown className="h-4 w-4 rotate-90" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-l-none">
                      <ChevronDown className="h-4 w-4 -rotate-90" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-800 rounded-md overflow-hidden">
                {/* Calendar header */}
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="p-2 text-center font-medium bg-white dark:bg-gray-950">
                    {day}
                  </div>
                ))}

                {/* Calendar days */}
                {Array.from({ length: 35 }).map((_, index) => {
                  const day = index - 5 // Adjust to start with last days of previous month
                  const isCurrentMonth = day > 0 && day <= 31
                  const isToday = day === 15 // Assuming today is the 15th
                  const hasEvent = [5, 15, 28].includes(day) // Days with events

                  return (
                    <div
                      key={index}
                      className={`min-h-24 p-2 bg-white dark:bg-gray-950 ${
                        !isCurrentMonth ? "text-gray-400 dark:text-gray-600" : ""
                      } ${isToday ? "bg-blue-50 dark:bg-blue-950/30" : ""}`}
                    >
                      <div className="flex justify-between">
                        <span
                          className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
                            isToday ? "bg-blue-600 text-white" : ""
                          }`}
                        >
                          {isCurrentMonth ? day : day <= 0 ? 31 + day : day - 31}
                        </span>
                      </div>

                      {hasEvent && isCurrentMonth && (
                        <div className="mt-2">
                          <div className="text-xs p-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded truncate">
                            {day === 5 ? "Career Fair" : day === 15 ? "Alumni Meetup" : "Tech Panel"}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

