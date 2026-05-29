import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Edit,
  Eye,
  MoreHorizontal,
  PlusCircle,
  Star,
  Trash2,
  Wrench
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

const myServices = [
  {
    id: "service-001",
    title: "Experienced Home Cook",
    category: "Cook",
    location: "Mirzapur, Tangail",
    rate: "৳8,000/month",
    status: "APPROVED",
    rating: "4.8"
  },
  {
    id: "service-002",
    title: "Part-time Cleaning Service",
    category: "Cleaner",
    location: "Tangail Sadar",
    rate: "৳500/visit",
    status: "PENDING",
    rating: "N/A"
  },
  {
    id: "service-003",
    title: "Emergency Electrician",
    category: "Electrician",
    location: "Uttara, Dhaka",
    rate: "৳600/visit",
    status: "APPROVED",
    rating: "4.6"
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

export default function ProviderMyServicesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-5 rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)] md:flex-row md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
            Provider / Service Pro
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight">
            My Service Posts
          </h1>

          <p className="mt-3 max-w-2xl text-white/85">
            Manage your service posts, update rates and availability, track
            approval status, and create new service offers.
          </p>
        </div>

        <Button
          asChild
          className="rounded-2xl bg-yellow-400 font-black text-slate-950 shadow-lg shadow-yellow-400/25 hover:bg-yellow-300"
        >
          <Link href="/dashboard/provider/my-services/create">
            <PlusCircle className="mr-2 size-5" />
            Add Service
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardStatsCard
          title="Total Services"
          value="3"
          description="All created service posts"
          icon={Wrench}
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
          title="Average Rating"
          value="4.7"
          description="Based on customer reviews"
          icon={Star}
        />
      </div>

      <Card className="border-orange-100 bg-white shadow-sm">
        <CardHeader className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              Services
            </p>
            <CardTitle className="mt-1 text-2xl font-black text-slate-950">
              Service Post List
            </CardTitle>
          </div>

          <Button
            asChild
            variant="outline"
            className="rounded-2xl border-orange-200 text-orange-600 hover:bg-orange-50"
          >
            <Link href="/services">View Public Service Page</Link>
          </Button>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="w-[70px]">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {myServices.map((service) => (
                <TableRow key={service.id}>
                  <TableCell>
                    <div>
                      <p className="font-black text-slate-950">
                        {service.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        ID: {service.id}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>{service.category}</TableCell>
                  <TableCell>{service.location}</TableCell>
                  <TableCell className="font-bold text-orange-600">
                    {service.rate}
                  </TableCell>
                  <TableCell>{getStatusBadge(service.status)}</TableCell>
                  <TableCell>{service.rating}</TableCell>

                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/services/${service.id}`}>
                            <Eye className="mr-2 size-4" />
                            View
                          </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                          <Link
                            href={`/dashboard/provider/my-services/${service.id}/edit`}
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