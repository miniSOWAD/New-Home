import Link from "next/link";
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

type ListingType = "TOLET" | "SERVICE";

type ManagedListing = {
  id: string;
  title: string;
  type: ListingType;
  category: string;
  owner: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  createdAt: string;
};

const listings: ManagedListing[] = [
  {
    id: "tolet-001",
    title: "Family flat near main road",
    type: "TOLET",
    category: "Family Flat",
    owner: "Rahim Provider",
    status: "APPROVED",
    createdAt: "May 28, 2026"
  },
  {
    id: "service-001",
    title: "Experienced Home Cook",
    type: "SERVICE",
    category: "Cook",
    owner: "Nusrat Akter",
    status: "PENDING",
    createdAt: "May 27, 2026"
  },
  {
    id: "tolet-002",
    title: "Bachelor room for students",
    type: "TOLET",
    category: "Bachelor Room",
    owner: "Karim Owner",
    status: "REJECTED",
    createdAt: "May 26, 2026"
  }
];

type ListingManagementTableProps = {
  title?: string;
  filterType?: ListingType;
};

function getStatusBadge(status: ManagedListing["status"]) {
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
  filterType
}: ListingManagementTableProps) {
  const filteredListings = filterType
    ? listings.filter((listing) => listing.type === filterType)
    : listings;

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
            {filteredListings.map((listing) => (
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

                <TableCell>{listing.owner}</TableCell>
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
                      <DropdownMenuItem asChild>
                        <Link
                          href={
                            listing.type === "TOLET"
                              ? `/to-let/${listing.id}`
                              : `/services/${listing.id}`
                          }
                        >
                          <Eye className="mr-2 size-4" />
                          View
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <Edit className="mr-2 size-4" />
                        Edit
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <CheckCircle2 className="mr-2 size-4 text-green-600" />
                        Approve
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <XCircle className="mr-2 size-4 text-orange-600" />
                        Reject
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