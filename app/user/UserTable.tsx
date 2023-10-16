import { z } from "zod";
import { columns } from "./columns";
import { taskSchema } from "./schema";
import { users } from "./users";
import { DataTable } from "./data-table";


export default function UserTable() {

  return (
    <div className="h-full flex-1 flex-col space-y-8 md:flex">
      <DataTable data={z.array(taskSchema).parse(users)} columns={columns} />
    </div>
  )
}
