import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  Clock,
  Edit,
  Eye,
  HousePlus,
  MoreHorizontal,
  Trash2
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { DashboardStatsCard } from "@/components/dashboard/DashboardStatsCard";

const myTolets = [
  {
    id: "tolet-001",
    title: "Family flat near main road",
    category: "Family Flat",
    location: "Mirzapur, Tangail",
    rent: "৳12,000/month",
    status: "APPROVED",
    views: 128
  },
  {
    id: "tolet-002",
    title: "Bachelor room for students",
    category: "Bachelor Room",
    location: "Dhanmondi, Dhaka",
    rent: "৳6,000/month",
    status: "PENDING",
    views: 42
  },
  {
    id: "tolet-003",
    title: "Small office space",
    category: "Office Space",
    location: "Uttara, Dhaka",
    rent: "৳18,000/month",
    status: "APPROVED",
    views: 96
  }
];

function getStatusBadge(status: string) {
  if (status === "APPROVED") {
    return (
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
        Approved
      </Badge>
    );
  }

  if (status === "PENDING") {
    return (
      <Badge className="bg-yellow-100 text-slate-900 hover:bg-yellow-100">
        Pending
      </Badge>
    );
  }

  return (
    <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Rejected</Badge>
  );
}

export default function ProviderMyToletsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-5 rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)] md:flex-row md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
            Provider / To-let Hub
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight">
            My To-let Posts
          </h1>

          <p className="mt-3 max-w-2xl text-white/85">
            Manage your rental listings, edit details, track approval status,
            and create new To-let posts.
          </p>
        </div>

        <Button
          asChild
          className="rounded-2xl bg-yellow-400 font-black text-slate-950 shadow-lg shadow-yellow-400/25 hover:bg-yellow-300"
        >
          <Link href="/dashboard/provider/my-tolets/create">
            <HousePlus className="mr-2 size-5" />
            Add To-let
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardStatsCard
          title="Total Posts"
          value="3"
          description="All created rental listings"
          icon={Building2}
        />

        <DashboardStatsCard
          title="Approved"
          value="2"
          description="Visible to customers"
          icon={CheckCircle2}
        />

        <DashboardStatsCard
          title="Pending"
          value="1"
          description="Waiting for admin approval"
          icon={Clock}
        />

        <DashboardStatsCard
          title="Total Views"
          value="266"
          description="Listing views by customers"
          icon={Eye}
        />
      </div>

      <Card className="border-orange-100 bg-white shadow-sm">
        <CardHeader className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              Listings
            </p>
            <CardTitle className="mt-1 text-2xl font-black text-slate-950">
              Rental Post List
            </CardTitle>
          </div>

          <Button
            asChild
            variant="outline"
            className="rounded-2xl border-orange-200 text-orange-600 hover:bg-orange-50"
          >
            <Link href="/to-let">View Public To-let Page</Link>
          </Button>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Post</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Rent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Views</TableHead>
                <TableHead className="w-[70px]">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {myTolets.map((tolet) => (
                <TableRow key={tolet.id}>
                  <TableCell>
                    <div>
                      <p className="font-black text-slate-950">
                        {tolet.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        ID: {tolet.id}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>{tolet.category}</TableCell>
                  <TableCell>{tolet.location}</TableCell>
                  <TableCell className="font-bold text-orange-600">
                    {tolet.rent}
                  </TableCell>
                  <TableCell>{getStatusBadge(tolet.status)}</TableCell>
                  <TableCell>{tolet.views}</TableCell>

                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/to-let/${tolet.id}`}>
                            <Eye className="mr-2 size-4" />
                            View
                          </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                          <Link
                            href={`/dashboard/provider/my-tolets/${tolet.id}/edit`}
                          >
                            <Edit className="mr-2 size-4" />
                            Edit
                          </Link>
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
    </div>
  );
}