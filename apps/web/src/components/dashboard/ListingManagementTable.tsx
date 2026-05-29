import {
  CheckCircle2,
  Edit,
  Eye,
  MoreHorizontal,
  Trash2,
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

export type ManagedListingItem = {
  id: string;
  title: string;
  type: "TOLET" | "SERVICE";
  category: string;
  ownerName: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  createdAt: string;
};

type ListingManagementTableProps = {
  title?: string;
  listings: ManagedListingItem[];
  isLoading?: boolean;
  onView?: (item: ManagedListingItem) => void;
  onEdit?: (item: ManagedListingItem) => void;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
  onDelete?: (id: string) => void;
};

function getStatusBadge(status: ManagedListingItem["status"]) {
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

export function ListingManagementTable({
  title = "Listing Management",
  listings,
  isLoading = false,
  onView,
  onEdit,
  onApprove,
  onReject,
  onDelete
}: ListingManagementTableProps) {
  return (
    <Card className="border-orange-100 bg-white shadow-sm">
      <CardHeader>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
          Listings
        </p>

        <CardTitle className="mt-1 text-2xl font-black text-slate-950">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <EmptyState
            title="Loading listings..."
            description="Please wait while listings are being fetched."
          />
        ) : listings.length === 0 ? (
          <EmptyState
            title="No listings found"
            description="There are no listing records available right now."
          />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Listing</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="w-[70px]">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {listings.map((listing) => (
                <TableRow key={listing.id}>
                  <TableCell>
                    <div>
                      <p className="font-black text-slate-950">
                        {listing.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {listing.category}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                      {listing.type}
                    </Badge>
                  </TableCell>

                  <TableCell>{listing.ownerName}</TableCell>
                  <TableCell>{getStatusBadge(listing.status)}</TableCell>
                  <TableCell>{listing.createdAt}</TableCell>

                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onView?.(listing)}>
                          <Eye className="mr-2 size-4" />
                          View
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => onEdit?.(listing)}>
                          <Edit className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => onApprove?.(listing.id)}>
                          <CheckCircle2 className="mr-2 size-4 text-green-600" />
                          Approve
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => onReject?.(listing.id)}>
                          <XCircle className="mr-2 size-4 text-orange-600" />
                          Reject
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          className="text-red-600 focus:text-red-600"
                          onClick={() => onDelete?.(listing.id)}
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