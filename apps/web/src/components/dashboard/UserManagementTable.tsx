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
import { EmptyState } from "@/components/shared/EmptyState";

export type ManagedUserItem = {
  id: string;
  name: string;
  email: string;
  role: "SUPER_ADMIN" | "ADMIN" | "CUSTOMER" | "PROVIDER";
  approvalStatus: "PENDING" | "APPROVED" | "REJECTED" | "SUSPENDED";
  joinedAt: string;
};

type UserManagementTableProps = {
  users: ManagedUserItem[];
  isLoading?: boolean;
  onView?: (id: string) => void;
  onApprove?: (id: string) => void;
  onSuspend?: (id: string) => void;
  onDelete?: (id: string) => void;
};

function getStatusBadge(status: ManagedUserItem["approvalStatus"]) {
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

  if (status === "REJECTED") {
    return (
      <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
        Rejected
      </Badge>
    );
  }

  return (
    <Badge className="bg-yellow-100 text-slate-900 hover:bg-yellow-100">
      Pending
    </Badge>
  );
}

export function UserManagementTable({
  users,
  isLoading = false,
  onView,
  onApprove,
  onSuspend,
  onDelete
}: UserManagementTableProps) {
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
          Manage Users
        </Button>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <EmptyState
            title="Loading users..."
            description="Please wait while users are being fetched."
          />
        ) : users.length === 0 ? (
          <EmptyState
            title="No users found"
            description="No user records are available right now."
          />
        ) : (
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
                      <p className="mt-1 text-xs text-slate-500">
                        {user.email}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                      {user.role}
                    </Badge>
                  </TableCell>

                  <TableCell>{getStatusBadge(user.approvalStatus)}</TableCell>
                  <TableCell>{user.joinedAt}</TableCell>

                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onView?.(user.id)}>
                          <Eye className="mr-2 size-4" />
                          View Profile
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => onApprove?.(user.id)}>
                          <ShieldCheck className="mr-2 size-4 text-green-600" />
                          Approve
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => onSuspend?.(user.id)}>
                          <Ban className="mr-2 size-4 text-orange-600" />
                          Suspend
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          className="text-red-600 focus:text-red-600"
                          onClick={() => onDelete?.(user.id)}
                        >
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
        )}
      </CardContent>
    </Card>
  );
}