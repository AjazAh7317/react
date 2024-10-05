import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SetupWizard() {
  const [step, setStep] = useState(1)

  const handleNext = () => {
    setStep(step + 1)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Set Up Inventory Management System</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="dbName">Name of MySQL Database</Label>
                <Input id="dbName" placeholder="Database Name" required />
              </div>
              <div>
                <Label htmlFor="dbUsername">Database Username</Label>
                <Input id="dbUsername" placeholder="Username" required />
              </div>
              <div>
                <Label htmlFor="dbPassword">Database Password</Label>
                <Input id="dbPassword" type="password" placeholder="Password" required />
              </div>
              <div>
                <Label htmlFor="dbHost">Your Database Host Name</Label>
                <Input id="dbHost" placeholder="Host Name" required />
              </div>
              <div>
                <Label htmlFor="baseUrl">Define Base Url of Inventory Management System</Label>
                <Input id="baseUrl" placeholder="https://example.com" required />
              </div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Set Up Master Account</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="masterUsername">Master User Name</Label>
                <Input id="masterUsername" placeholder="Username" required />
              </div>
              <div>
                <Label htmlFor="masterEmail">Email Address</Label>
                <Input id="masterEmail" type="email" placeholder="Email" required />
              </div>
              <div>
                <Label htmlFor="masterPassword">Password</Label>
                <Input id="masterPassword" type="password" placeholder="Password" required />
              </div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Set Up Store</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <Input id="businessName" placeholder="Business Name" required />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Address" required />
              </div>
              <div>
                <Label htmlFor="contactNo">Contact No.</Label>
                <Input id="contactNo" placeholder="Contact Number" required />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Email" required />
              </div>
              <div>
                <Label htmlFor="timezone">Timezone</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">EST</SelectItem>
                    <SelectItem value="pst">PST</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="currency">Currency</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="gbp">GBP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Setup Complete</h2>
          <p>Your Inventory Management System is now set up. You can log in using your master account credentials.</p>
          <Button onClick={() => window.location.href = '/login'}>Go to Login</Button>
        </div>
      )}
    </div>
  )
}