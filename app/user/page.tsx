'use client'
import {
  Tabs,
  TabsContent,
  TabsList, TabsTrigger
} from "@/components/ui/tabs"
import { useState } from "react"
import UserTable from "./UserTable"

export default function User() {
  const [active, setActive] = useState('all')

  const handleChangeTab = (newTab: string) => {
    if (newTab != active) {
      setActive(newTab)
    }
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Tabs value={active} className="space-y-4">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">User management</h2>
            </div>
          </div>
          <TabsList>
            <TabsTrigger value="all" onClick={() => handleChangeTab('all')}>All</TabsTrigger>
            <TabsTrigger value="admin" onClick={() => handleChangeTab('admin')}>
              Admin
            </TabsTrigger>
            <TabsTrigger value="user" onClick={() => handleChangeTab('user')}>
              User
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <UserTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
