import {
  CheckCircle2,
  Eye,
  FileWarning,
  MoreHorizontal,
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

export type ManagedReportItem = {
  id: string;
  reason: string;
  targetTitle: string;
  reporterName: string;
  status: "PENDING" | "REVIEWED" | "RESOLVED" | "REJECTED";
  createdAt: string;
};

type ReportManagementTableProps = {
  reports: ManagedReportItem[];
  isLoading?: boolean;
  onView?: (id: string) => void;
  onResolve?: (id: string) => void;
  onReject?: (id: string) => void;
};

function getStatusBadge(status: ManagedReportItem["status"]) {
  if (status === "RESOLVED") {
    return (
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
        Resolved
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

  if (status === "REVIEWED") {
    return (
      <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
        Reviewed
      </Badge>
    );
  }

  return (
    <Badge className="bg-yellow-100 text-slate-900 hover:bg-yellow-100">
      Pending
    </Badge>
  );
}

export function ReportManagementTable({
  reports,
  isLoading = false,
  onView,
  onResolve,
  onReject
}: ReportManagementTableProps) {
  return (
    <Card className="border-orange-100 bg-white shadow-sm">
      <CardHeader className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Safety
          </p>

          <CardTitle className="mt-1 text-2xl font-black text-slate-950">
            Report Management
          </CardTitle>
        </div>

        <Button className="rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300">
          <FileWarning className="mr-2 size-5" />
          Review Reports
        </Button>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <EmptyState
            title="Loading reports..."
            description="Please wait while reports are being fetched."
          />
        ) : reports.length === 0 ? (
          <EmptyState
            title="No reports found"
            description="There are no report records available right now."
          />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reason</TableHead>
                <TableHead>Target</TableHead>
                <TableHead>Reporter</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-[70px]">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>
                    <div>
                      <p className="font-black text-slate-950">
                        {report.reason}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        ID: {report.id}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>{report.targetTitle}</TableCell>
                  <TableCell>{report.reporterName}</TableCell>
                  <TableCell>{getStatusBadge(report.status)}</TableCell>
                  <TableCell>{report.createdAt}</TableCell>

                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onView?.(report.id)}>
                          <Eye className="mr-2 size-4" />
                          View Details
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => onResolve?.(report.id)}>
                          <CheckCircle2 className="mr-2 size-4 text-green-600" />
                          Mark Resolved
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          className="text-red-600 focus:text-red-600"
                          onClick={() => onReject?.(report.id)}
                        >
                          <XCircle className="mr-2 size-4" />
                          Reject Report
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