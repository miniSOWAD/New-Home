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
import { EmptyState } from "@/components/shared/EmptyState";

export type ApprovalTableItem = {
  id: string;
  title: string;
  type: "USER" | "TOLET" | "SERVICE";
  submittedBy: string;
  submittedAt: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
};

type ApprovalTableProps = {
  items: ApprovalTableItem[];
  isLoading?: boolean;
  onView?: (id: string) => void;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
};

function getStatusBadge(status: ApprovalTableItem["status"]) {
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

export function ApprovalTable({
  items,
  isLoading = false,
  onView,
  onApprove,
  onReject
}: ApprovalTableProps) {
  return (
    <Card className="border-orange-100 bg-white shadow-sm">
      <CardHeader className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Review Queue
          </p>

          <CardTitle className="mt-1 text-2xl font-black text-slate-950">
            Approval Requests
          </CardTitle>
        </div>

        <Button className="rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300">
          <ShieldCheck className="mr-2 size-5" />
          Review Queue
        </Button>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <EmptyState
            title="Loading approvals..."
            description="Please wait while approval requests are being fetched."
          />
        ) : items.length === 0 ? (
          <EmptyState
            title="No approval requests"
            description="There are no pending approval requests right now."
          />
        ) : (
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
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div>
                      <p className="font-black text-slate-950">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        ID: {item.id}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                      {item.type}
                    </Badge>
                  </TableCell>

                  <TableCell>{item.submittedBy}</TableCell>
                  <TableCell>{item.submittedAt}</TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>

                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onView?.(item.id)}>
                          <Eye className="mr-2 size-4" />
                          View Details
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => onApprove?.(item.id)}>
                          <CheckCircle2 className="mr-2 size-4 text-green-600" />
                          Approve
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          className="text-red-600 focus:text-red-600"
                          onClick={() => onReject?.(item.id)}
                        >
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
        )}
      </CardContent>
    </Card>
  );
}