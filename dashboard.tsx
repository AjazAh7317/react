"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { CalendarIcon, Users, Category, MapPin, Building, UserPlus, Package, ShoppingCart, LogOut } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const data = [
  { name: '2022-05-13', sales: 0 },
  { name: '2022-05-14', sales: 10000 },
  { name: '2022-05-15', sales: 30000 },
  { name: '2022-05-16', sales: 45000 },
]

export default function Dashboard() {
  const [dateRange, setDateRange] = useState('April 17, 2022 - May 16, 2022')

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">PHP Project</h2>
        <nav>
          <ul className="space-y-2">
            <li><Button variant="ghost" className="w-full justify-start"><Users className="mr-2" /> Users</Button></li>
            <li><Button variant="ghost" className="w-full justify-start"><Category className="mr-2" /> Category</Button></li>
            <li><Button variant="ghost" className="w-full justify-start"><MapPin className="mr-2" /> Location Rack</Button></li>
            <li><Button variant="ghost" className="w-full justify-start"><Building className="mr-2" /> Company</Button></li>
            <li><Button variant="ghost" className="w-full justify-start"><UserPlus className="mr-2" /> Supplier</Button></li>
            <li><Button variant="ghost" className="w-full justify-start"><Package className="mr-2" /> Product</Button></li>
            <li><Button variant="ghost" className="w-full justify-start"><ShoppingCart className="mr-2" /> Product Purchase</Button></li>
            <li><Button variant="ghost" className="w-full justify-start"><Package className="mr-2" /> Order</Button></li>
            <li><Button variant="ghost" className="w-full justify-start"><LogOut className="mr-2" /> Logout</Button></li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-blue-500 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Stock Product</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">31</div>
            </CardContent>
          </Card>
          <Card className="bg-yellow-500 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Out of Stock Product</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
            </CardContent>
          </Card>
          <Card className="bg-red-500 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Purchase</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹ 328,075.00</div>
            </CardContent>
          </Card>
          <Card className="bg-green-500 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sale</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹ 47,020.94</div>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Sale Status</CardTitle>
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-[280px]">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <SelectValue placeholder={dateRange} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="April 17, 2022 - May 16, 2022">April 17, 2022 - May 16, 2022</SelectItem>
                <SelectItem value="May 17, 2022 - June 16, 2022">May 17, 2022 - June 16, 2022</SelectItem>
                <SelectItem value="June 17, 2022 - July 16, 2022">June 17, 2022 - July 16, 2022</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Out of Product List */}
        <Button variant="outline">
          <Package className="mr-2 h-4 w-4" /> List of Out of Product
        </Button>
      </main>
    </div>
  )
}