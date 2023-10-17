import React from 'react'
import { DataTable } from './components/data-table'
import { tasks } from './data/tasks'
import { columns } from './components/columns'

const Vessel = () => {
  return (
    <div className="flex container h-full flex-1 flex-col space-y-8 p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Vessel management</h2>
          <p className="text-muted-foreground">
            Here&apos;s  list of Vessel for you
          </p>
        </div>
      </div>
      <DataTable data={tasks} columns={columns} />
    </div>
  )
}

export default Vessel