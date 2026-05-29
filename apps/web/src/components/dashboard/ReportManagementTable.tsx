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

type ManagedReport = {
  id: string;
  reason: string;
  target: string;
  reporter: string;
  status: "PENDING" | "REVIEWED" | "RESOLVED" | "REJECTED";
  createdAt: string;
};

const reports: ManagedReport[] = [
  {
    id: "report-001",
    reason: "Fake rental listing",
    target: "Family flat near main road",
    reporter: "Customer User",
    status: "PENDING",
    createdAt: "May 29, 2026"
  },
  {
    id: "report-002",
    reason: "Wrong service information",
    target: "Emergency Electrician",
    reporter: "Rahim Customer",
    status: "REVIEWED",
    createdAt: "May 28, 2026"
  },
  {
    id: "report-003",
    reason: "Suspicious account",
    target: "Unknown Provider",
    reporter: "Admin User",
    status: "RESOLVED",
    createdAt: "May 27, 2026"
  }
];

function getStatusBadge(status: ManagedReport["status"]) {
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

export function ReportManagementTable() {
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

                <TableCell>{report.target}</TableCell>
                <TableCell>{report.reporter}</TableCell>
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
                      <DropdownMenuItem>
                        <Eye className="mr-2 size-4" />
                        View Details
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <CheckCircle2 className="mr-2 size-4 text-green-600" />
                        Mark Resolved
                      </DropdownMenuItem>

                      <DropdownMenuItem className="text-red-600 focus:text-red-600">
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
      </CardContent>
    </Card>
  );
}