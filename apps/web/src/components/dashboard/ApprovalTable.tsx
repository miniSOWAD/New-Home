import Link from "next/link";
import {
  CheckCircle2,
  Eye,
  MoreHorizontal,
  ShieldCheck,
  XCircle
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

type ApprovalItem = {
  id: string;
  name: string;
  type: "CUSTOMER" | "PROVIDER" | "TOLET" | "SERVICE";
  submittedBy: string;
  submittedAt: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
};

const approvals: ApprovalItem[] = [
  {
    id: "approval-001",
    name: "Provider account request",
    type: "PROVIDER",
    submittedBy: "Rahim Provider",
    submittedAt: "May 29, 2026",
    status: "PENDING"
  },
  {
    id: "approval-002",
    name: "Family flat near main road",
    type: "TOLET",
    submittedBy: "Karim Owner",
    submittedAt: "May 28, 2026",
    status: "PENDING"
  },
  {
    id: "approval-003",
    name: "Experienced Home Cook",
    type: "SERVICE",
    submittedBy: "Nusrat Akter",
    submittedAt: "May 27, 2026",
    status: "APPROVED"
  }
];

function getStatusBadge(status: ApprovalItem["status"]) {
  if (status === "APPROVED") {
    return (
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
        Approved
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

function getTypeBadge(type: ApprovalItem["type"]) {
  return (
    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
      {type}
    </Badge>
  );
}

export function ApprovalTable() {
  return (
    <Card className="border-orange-100 bg-white shadow-sm">
      <CardHeader className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Review Queue
          </p>
          <CardTitle className="mt-1 text-2xl font-black text-slate-950">
            Pending Approvals
          </CardTitle>
        </div>

        <Button className="rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300">
          <ShieldCheck className="mr-2 size-5" />
          Bulk Review
        </Button>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Request</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Submitted By</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[70px]">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {approvals.map((approval) => (
              <TableRow key={approval.id}>
                <TableCell>
                  <div>
                    <p className="font-black text-slate-950">
                      {approval.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      ID: {approval.id}
                    </p>
                  </div>
                </TableCell>

                <TableCell>{getTypeBadge(approval.type)}</TableCell>
                <TableCell>{approval.submittedBy}</TableCell>
                <TableCell>{approval.submittedAt}</TableCell>
                <TableCell>{getStatusBadge(approval.status)}</TableCell>

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="size-5" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/admin/approvals/${approval.id}`}>
                          <Eye className="mr-2 size-4" />
                          View Details
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <CheckCircle2 className="mr-2 size-4 text-green-600" />
                        Approve
                      </DropdownMenuItem>

                      <DropdownMenuItem className="text-red-600 focus:text-red-600">
                        <XCircle className="mr-2 size-4" />
                        Reject
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