"use client";

import { motion } from "framer-motion";
import { Calendar, LineChart, Briefcase, ArrowRight, TrendingUp, TrendingDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Chart, ChartContainer } from "@/components/ui/chart";
import { Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, BarChart } from "recharts";

export function AlumniDashboard() {
  // Sample data
  const networkStats = [
    { title: "Connections", value: "124", change: "+12%", trend: "up" },
    { title: "Messages", value: "45", change: "+5%", trend: "up" },
    { title: "Mentees", value: "3", change: "0%", trend: "neutral" },
    { title: "Events Attended", value: "8", change: "+2", trend: "up" }
  ];

  const activityData = [
    { month: "Jan", connections: 5, messages: 12, events: 1 },
    { month: "Feb", connections: 8, messages: 15, events: 0 },
    { month: "Mar", connections: 12, messages: 20, events: 2 },
    { month: "Apr", connections: 15, messages: 18, events: 1 },
    { month: "May", connections: 20, messages: 25, events: 3 },
    { month: "Jun", connections: 25, messages: 30, events: 1 }
  ];

  const mentorshipRequests = [
    {
      id: 1,
      name: "Alex Johnson",
      program: "Computer Science",
      year: "Junior",
      message: "I'm interested in learning more about your career path in software development.",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      id: 2,
      name: "Jamie Smith",
      program: "Business Administration",
      year: "Senior",
      message: "Would love to get your insights on breaking into the marketing industry.",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Alumni Meetup",
      date: "March 15, 2025",
      location: "Main Campus Auditorium",
      role: "Attendee"
    },
    {
      id: 2,
      title: "Career Fair 2025",
      date: "April 5, 2025",
      location: "Business School Building",
      role: "Speaker"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Alumni Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your alumni network and activities.</p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {networkStats.map((stat, index) => (
          <motion.div key={index} variants={item}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.trend === "up" && <TrendingUp className="h-4 w-4 text-green-500" />}
                {stat.trend === "down" && <TrendingDown className="h-4 w-4 text-red-500" />}
                {stat.trend === "neutral" && <LineChart className="h-4 w-4 text-gray-500" />}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${stat.trend === "up" ? "text-green-500" : stat.trend === "down" ? "text-red-500" : "text-gray-500"}`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Network Activity</CardTitle>
            <CardDescription>Your connections, messages, and events over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer>
                <Chart>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={activityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="connections" fill="#3b82f6" name="Connections" />
                      <Bar dataKey="messages" fill="#8b5cf6" name="Messages" />
                      <Bar dataKey="events" fill="#10b981" name="Events" />
                    </BarChart>
                  </ResponsiveContainer>
                </Chart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Events you're registered for</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.date} • {event.location}</p>
                  </div>
                  <Badge>{event.role}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
