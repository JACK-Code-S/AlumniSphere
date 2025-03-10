import { motion } from "framer-motion";
import { Calendar, LineChart, Users, Download, Filter, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Chart, ChartContainer } from "@/components/ui/chart";
import { Bar, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, BarChart } from "recharts";

export function AdminDashboard() {
  // Sample data
  const overviewStats = [
    { title: "Total Alumni", value: "5,234", change: "+120", changeLabel: "new this year" },
    { title: "Active Students", value: "2,845", change: "92%", changeLabel: "engagement rate" },
    { title: "Events Hosted", value: "48", change: "+12", changeLabel: "from last year" },
    { title: "Donations", value: "$245K", change: "+18%", changeLabel: "from last year" },
  ];

  const alumniGrowthData = [
    { year: "2018", alumni: 3200 },
    { year: "2019", alumni: 3600 },
    { year: "2020", alumni: 4100 },
    { year: "2021", alumni: 4400 },
    { year: "2022", alumni: 4700 },
    { year: "2023", alumni: 5000 },
    { year: "2024", alumni: 5234 },
  ];

  const engagementData = [
    { month: "Jan", events: 4, mentorships: 24, donations: 15 },
    { month: "Feb", events: 3, mentorships: 28, donations: 18 },
    { month: "Mar", events: 5, mentorships: 30, donations: 20 },
    { month: "Apr", events: 4, mentorships: 35, donations: 22 },
    { month: "May", events: 6, mentorships: 32, donations: 25 },
    { month: "Jun", events: 8, mentorships: 40, donations: 30 },
  ];

  const upcomingEvents = [
    { id: 1, title: "Annual Alumni Meetup", date: "March 15, 2025", location: "Main Campus Auditorium", registrations: 120, capacity: 200 },
    { id: 2, title: "Career Fair 2025", date: "April 5, 2025", location: "Business School Building", registrations: 250, capacity: 300 },
    { id: 3, title: "Tech Industry Panel", date: "March 28, 2025", location: "Virtual Event", registrations: 180, capacity: 500 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage alumni relations, events, and track engagement metrics.</p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewStats.map((stat, index) => (
          <motion.div key={index} variants={item}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.title === "Total Alumni" && <Users className="h-4 w-4 text-blue-500" />}
                {stat.title === "Active Students" && <Users className="h-4 w-4 text-green-500" />}
                {stat.title === "Events Hosted" && <Calendar className="h-4 w-4 text-purple-500" />}
                {stat.title === "Donations" && <LineChart className="h-4 w-4 text-amber-500" />}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.change} {stat.changeLabel}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Alumni Growth</CardTitle>
            <CardDescription>Total alumni over the years</CardDescription>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" /> Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer>
            <Chart>
              <ResponsiveContainer width="100%" height="300px">
                <LineChart data={alumniGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="alumni" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Alumni" />
                </LineChart>
              </ResponsiveContainer>
            </Chart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Manage and monitor event registrations</CardDescription>
            <div className="flex items-center gap-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input type="search" placeholder="Search events..." className="pl-8 w-[200px]" />
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button>Create Event</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {upcomingEvents.map((event) => (
            <div key={event.id} className="border-b p-4 flex justify-between">
              <div>
                <h3 className="font-medium">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.date} - {event.location}</p>
              </div>
              <Button variant="ghost" size="sm">Edit</Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}