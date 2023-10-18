"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupList, AvatarImage, AvatarOverflowIndicator } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { labels } from "../data/data"
import { Vessel } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export const columns: ColumnDef<Vessel>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vessel id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "vesselName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("vesselName")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("title")}
          </span>
        </div>
      )
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "packageWeight",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Package weight (ton)" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.getValue("packageWeight")}</span>
        </div>
      )
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "owner",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Owner" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span><AvatarGroup limit={3}>
            <AvatarGroupList>
              {row.original.owner.map((email: string, i) => (
                <TooltipProvider key={email}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Avatar>
                        <AvatarImage
                          src={`https://xsgames.co/randomusers/assets/avatars/female/${i}.jpg`}
                          alt="@shadcn"
                        />
                        <AvatarFallback>{email.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      {email}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

              ))}
            </AvatarGroupList>
            <AvatarOverflowIndicator />
          </AvatarGroup></span>
        </div>
      )
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions id={row.original.id} />,
  },
]