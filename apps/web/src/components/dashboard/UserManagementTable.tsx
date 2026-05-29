import Link from "next/link";
import {
  Ban,
  Eye,
  MoreHorizontal,
  ShieldCheck,
  Trash2,
  UserCheck
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

type ManagedUser = {
  id: string;
  name: string;
  email: string;
  role: "CUSTOMER" | "PROVIDER" | "ADMIN";
  status: "PENDING" | "APPROVED" | "SUSPENDED";
  joinedAt: string;
};

const users: ManagedUser[] = [
  {
    id: "user-001",
    name: "Rahim Provider",
    email: "rahim@newhome.com",
    role: "PROVIDER",
    status: "PENDING",
    joinedAt: "May 29, 2026"
  },
  {
    id: "user-002",
    name: "Customer User",
    email: "customer@newhome.com",
    role: "CUSTOMER",
    status: "APPROVED",
    joinedAt: "May 25, 2026"
  },
  {
    id: "user-003",
    name: "Admin User",
    email: "admin@newhome.com",
    role: "ADMIN",
    status: "APPROVED",
    joinedAt: "May 20, 2026"
  }
];

function getRoleBadge(role: ManagedUser["role"]) {
  return (
    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
      {role}
    </Badge>
  );
}

function getStatusBadge(status: ManagedUser["status"]) {
  if (status === "APPROVED") {
    return (
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
        Approved
      </Badge>
    );
  }

  if (status === "SUSPENDED") {
    return (
      <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
        Suspended
      </Badge>
    );
  }

  return (
    <Badge className="bg-yellow-100 text-slate-900 hover:bg-yellow-100">
      Pending
    </Badge>
  );
}

export function UserManagementTable() {
  return (
    <Card className="border-orange-100 bg-white shadow-sm">
      <CardHeader className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Users
          </p>
          <CardTitle className="mt-1 text-2xl font-black text-slate-950">
            User Management
          </CardTitle>
        </div>

        <Button className="rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300">
          <UserCheck className="mr-2 size-5" />
          Add / Approve User
        </Button>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="w-[70px]">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div>
                    <p className="font-black text-slate-950">{user.name}</p>
                    <p className="mt-1 text-xs text-slate-500">{user.email}</p>
                  </div>
                </TableCell>

                <TableCell>{getRoleBadge(user.role)}</TableCell>
                <TableCell>{getStatusBadge(user.status)}</TableCell>
                <TableCell>{user.joinedAt}</TableCell>

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="size-5" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/super-admin/users/${user.id}`}>
                          <Eye className="mr-2 size-4" />
                          View Profile
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <ShieldCheck className="mr-2 size-4 text-green-600" />
                        Approve
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <Ban className="mr-2 size-4 text-orange-600" />
                        Suspend
                      </DropdownMenuItem>

                      <DropdownMenuItem className="text-red-600 focus:text-red-600">
                        <Trash2 className="mr-2 size-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}