import { prisma } from "@/db/prisma";
import type { ApprovalStatus, ReportStatus } from "@prisma/client";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

function timeAgo(date: Date) {
  const diffMs = Date.now() - date.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMinutes < 1) return "Just now";
  if (diffMinutes < 60) return `${diffMinutes} min ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;

  return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
}

function normalizeAnalyticsValue(value: number, max: number) {
  if (max <= 0) return 0;
  return Math.round((value / max) * 100);
}

export const dashboardService = {
  async getUsers(filters?: {
    role?: string;
    status?: ApprovalStatus;
  }) {
    const users = await prisma.user.findMany({
      where: {
        role: filters?.role as never,
        approvalStatus: filters?.status
      },
      orderBy: {
        createdAt: "desc"
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        approvalStatus: true,
        createdAt: true
      }
    });

    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      approvalStatus: user.approvalStatus,
      joinedAt: formatDate(user.createdAt)
    }));
  },

  async getApprovals() {
    const [users, toletPosts, servicePosts] = await Promise.all([
      prisma.user.findMany({
        where: {
          approvalStatus: "PENDING"
        },
        orderBy: {
          createdAt: "desc"
        },
        select: {
          id: true,
          name: true,
          role: true,
          createdAt: true
        }
      }),

      prisma.toletPost.findMany({
        where: {
          approvalStatus: "PENDING"
        },
        orderBy: {
          createdAt: "desc"
        },
        include: {
          provider: {
            select: {
              name: true
            }
          }
        }
      }),

      prisma.servicePost.findMany({
        where: {
          approvalStatus: "PENDING"
        },
        orderBy: {
          createdAt: "desc"
        },
        include: {
          provider: {
            select: {
              name: true
            }
          }
        }
      })
    ]);

    const userApprovals = users.map((user) => ({
      id: user.id,
      title: `${user.role} account request`,
      type: "USER" as const,
      submittedBy: user.name,
      submittedAt: formatDate(user.createdAt),
      status: "PENDING" as const
    }));

    const toletApprovals = toletPosts.map((post) => ({
      id: post.id,
      title: post.title,
      type: "TOLET" as const,
      submittedBy: post.provider.name,
      submittedAt: formatDate(post.createdAt),
      status: "PENDING" as const
    }));

    const serviceApprovals = servicePosts.map((post) => ({
      id: post.id,
      title: post.title,
      type: "SERVICE" as const,
      submittedBy: post.provider.name,
      submittedAt: formatDate(post.createdAt),
      status: "PENDING" as const
    }));

    return [...userApprovals, ...toletApprovals, ...serviceApprovals];
  },

  async getListings(filters?: {
    type?: "TOLET" | "SERVICE";
  }) {
    const results = [];

    if (!filters?.type || filters.type === "TOLET") {
      const toletPosts = await prisma.toletPost.findMany({
        orderBy: {
          createdAt: "desc"
        },
        include: {
          provider: {
            select: {
              name: true
            }
          }
        }
      });

      results.push(
        ...toletPosts.map((post) => ({
          id: post.id,
          title: post.title,
          type: "TOLET" as const,
          category: post.category,
          ownerName: post.provider.name,
          status: post.approvalStatus as "PENDING" | "APPROVED" | "REJECTED",
          createdAt: formatDate(post.createdAt)
        }))
      );
    }

    if (!filters?.type || filters.type === "SERVICE") {
      const servicePosts = await prisma.servicePost.findMany({
        orderBy: {
          createdAt: "desc"
        },
        include: {
          provider: {
            select: {
              name: true
            }
          }
        }
      });

      results.push(
        ...servicePosts.map((post) => ({
          id: post.id,
          title: post.title,
          type: "SERVICE" as const,
          category: post.category,
          ownerName: post.provider.name,
          status: post.approvalStatus as "PENDING" | "APPROVED" | "REJECTED",
          createdAt: formatDate(post.createdAt)
        }))
      );
    }

    return results;
  },

  async getReports(filters?: {
    status?: ReportStatus;
  }) {
    const reports = await prisma.report.findMany({
      where: {
        status: filters?.status
      },
      orderBy: {
        createdAt: "desc"
      },
      include: {
        reporter: {
          select: {
            name: true
          }
        },
        reportedUser: {
          select: {
            name: true
          }
        },
        toletPost: {
          select: {
            title: true
          }
        },
        servicePost: {
          select: {
            title: true
          }
        }
      }
    });

    return reports.map((report) => ({
      id: report.id,
      reason: report.reason,
      targetTitle:
        report.toletPost?.title ??
        report.servicePost?.title ??
        report.reportedUser?.name ??
        "Unknown target",
      reporterName: report.reporter.name,
      status: report.status,
      createdAt: formatDate(report.createdAt)
    }));
  },

  async getAnalytics() {
    const [
      totalUsers,
      totalTolets,
      totalServices,
      totalRequests,
      totalReports
    ] = await Promise.all([
      prisma.user.count(),
      prisma.toletPost.count(),
      prisma.servicePost.count(),
      prisma.request.count(),
      prisma.report.count()
    ]);

    const max = Math.max(
      totalUsers,
      totalTolets,
      totalServices,
      totalRequests,
      totalReports,
      1
    );

    return [
      {
        label: `Users (${totalUsers})`,
        value: normalizeAnalyticsValue(totalUsers, max),
        type: "USERS" as const
      },
      {
        label: `To-lets (${totalTolets})`,
        value: normalizeAnalyticsValue(totalTolets, max),
        type: "TOLETS" as const
      },
      {
        label: `Services (${totalServices})`,
        value: normalizeAnalyticsValue(totalServices, max),
        type: "SERVICES" as const
      },
      {
        label: `Requests (${totalRequests})`,
        value: normalizeAnalyticsValue(totalRequests, max),
        type: "REQUESTS" as const
      },
      {
        label: `Reports (${totalReports})`,
        value: normalizeAnalyticsValue(totalReports, max),
        type: "REPORTS" as const
      }
    ];
  },

  async getRecentActivities() {
    const [users, toletPosts, servicePosts, reports] = await Promise.all([
      prisma.user.findMany({
        take: 5,
        orderBy: {
          createdAt: "desc"
        },
        select: {
          id: true,
          name: true,
          role: true,
          createdAt: true
        }
      }),

      prisma.toletPost.findMany({
        take: 5,
        orderBy: {
          createdAt: "desc"
        },
        select: {
          id: true,
          title: true,
          createdAt: true
        }
      }),

      prisma.servicePost.findMany({
        take: 5,
        orderBy: {
          createdAt: "desc"
        },
        select: {
          id: true,
          title: true,
          createdAt: true
        }
      }),

      prisma.report.findMany({
        take: 5,
        orderBy: {
          createdAt: "desc"
        },
        select: {
          id: true,
          reason: true,
          createdAt: true
        }
      })
    ]);

    const activities = [
      ...users.map((user) => ({
        id: `user-${user.id}`,
        title: "New user registered",
        description: `${user.name} registered as ${user.role}.`,
        time: timeAgo(user.createdAt),
        createdAt: user.createdAt
      })),

      ...toletPosts.map((post) => ({
        id: `tolet-${post.id}`,
        title: "New To-let post created",
        description: post.title,
        time: timeAgo(post.createdAt),
        createdAt: post.createdAt
      })),

      ...servicePosts.map((post) => ({
        id: `service-${post.id}`,
        title: "New service post created",
        description: post.title,
        time: timeAgo(post.createdAt),
        createdAt: post.createdAt
      })),

      ...reports.map((report) => ({
        id: `report-${report.id}`,
        title: "New report submitted",
        description: report.reason,
        time: timeAgo(report.createdAt),
        createdAt: report.createdAt
      }))
    ];

    return activities
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 8)
      .map(({ createdAt: _createdAt, ...activity }) => activity);
  }
};