import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding New Home database...");

  await prisma.auditLog.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.message.deleteMany();
  await prisma.conversation.deleteMany();
  await prisma.report.deleteMany();
  await prisma.review.deleteMany();
  await prisma.request.deleteMany();
  await prisma.servicePost.deleteMany();
  await prisma.toletPost.deleteMany();
  await prisma.user.deleteMany();

  const password = await bcrypt.hash("Password123", 10);

  const superAdmin = await prisma.user.create({
    data: {
      name: "Super Admin",
      email: "superadmin@newhome.com",
      phone: "+8801000000001",
      password,
      address: "Bangladesh",
      role: "SUPER_ADMIN",
      approvalStatus: "APPROVED",
      isEmailVerified: true
    }
  });

  const admin = await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@newhome.com",
      phone: "+8801000000002",
      password,
      address: "Dhaka, Bangladesh",
      role: "ADMIN",
      approvalStatus: "APPROVED",
      isEmailVerified: true
    }
  });

  const customer = await prisma.user.create({
    data: {
      name: "Customer User",
      email: "customer@newhome.com",
      phone: "+8801000000003",
      password,
      address: "Mirzapur, Tangail",
      role: "CUSTOMER",
      approvalStatus: "APPROVED",
      isEmailVerified: true
    }
  });

  const provider = await prisma.user.create({
    data: {
      name: "Provider User",
      email: "provider@newhome.com",
      phone: "+8801000000004",
      password,
      address: "Tangail, Bangladesh",
      role: "PROVIDER",
      approvalStatus: "APPROVED",
      isEmailVerified: true
    }
  });

  const pendingProvider = await prisma.user.create({
    data: {
      name: "Pending Provider",
      email: "pending.provider@newhome.com",
      phone: "+8801000000005",
      password,
      address: "Uttara, Dhaka",
      role: "PROVIDER",
      approvalStatus: "PENDING",
      isEmailVerified: false
    }
  });

  const toletOne = await prisma.toletPost.create({
    data: {
      title: "Family flat near main road",
      slug: "family-flat-near-main-road",
      description:
        "A clean family flat near the main road with gas, water, electricity, and security facilities.",
      category: "Family House",
      propertyFor: "Family",
      rentAmount: 12000,
      rentType: "Monthly",
      advanceAmount: 24000,
      location: "Mirzapur, Tangail",
      address: "Main Road, Mirzapur, Tangail",
      bedrooms: 2,
      bathrooms: 2,
      sizeSqft: 900,
      facilities: ["Gas", "Water", "Electricity", "Security", "Balcony"],
      images: [],
      approvalStatus: "APPROVED",
      isAvailable: true,
      providerId: provider.id
    }
  });

  const toletTwo = await prisma.toletPost.create({
    data: {
      title: "Bachelor room for students",
      slug: "bachelor-room-for-students",
      description:
        "Affordable bachelor room suitable for students and job holders with Wi-Fi and water facilities.",
      category: "Bachelor Seat",
      propertyFor: "Bachelor",
      rentAmount: 6000,
      rentType: "Monthly",
      advanceAmount: 6000,
      location: "Dhanmondi, Dhaka",
      address: "Dhanmondi 15, Dhaka",
      bedrooms: 1,
      bathrooms: 1,
      sizeSqft: 250,
      facilities: ["Water", "Wi-Fi", "Electricity"],
      images: [],
      approvalStatus: "PENDING",
      isAvailable: true,
      providerId: provider.id
    }
  });

  const serviceOne = await prisma.servicePost.create({
    data: {
      title: "Experienced Home Cook",
      slug: "experienced-home-cook",
      description:
        "Experienced home cook available for Bangladeshi meals, family cooking, and monthly kitchen service.",
      category: "Cook",
      skills: ["Bangladeshi food", "Family cooking", "Meal planning"],
      experienceYears: 4,
      rateAmount: 8000,
      rateType: "Monthly",
      location: "Mirzapur, Tangail",
      availability: ["Morning", "Evening", "Part Time"],
      images: [],
      approvalStatus: "APPROVED",
      isAvailable: true,
      providerId: provider.id
    }
  });

  const serviceTwo = await prisma.servicePost.create({
    data: {
      title: "Emergency Electrician",
      slug: "emergency-electrician",
      description:
        "Electrician available for home repair, wiring, fan installation, socket repair, and emergency electrical issues.",
      category: "Electrician",
      skills: ["Wiring", "Fan installation", "Socket repair", "Emergency repair"],
      experienceYears: 6,
      rateAmount: 600,
      rateType: "Per Visit",
      location: "Uttara, Dhaka",
      availability: ["Morning", "Afternoon", "Emergency"],
      images: [],
      approvalStatus: "PENDING",
      isAvailable: true,
      providerId: provider.id
    }
  });

  await prisma.request.create({
    data: {
      status: "PENDING",
      message: "I am interested in this family flat. Is it still available?",
      customerId: customer.id,
      providerId: provider.id,
      toletPostId: toletOne.id
    }
  });

  await prisma.request.create({
    data: {
      status: "ACCEPTED",
      message: "I need a cook for evening meals.",
      customerId: customer.id,
      providerId: provider.id,
      servicePostId: serviceOne.id
    }
  });

  await prisma.review.create({
    data: {
      rating: 5,
      comment: "Very helpful provider. Communication was smooth.",
      reviewerId: customer.id,
      targetUserId: provider.id,
      servicePostId: serviceOne.id
    }
  });

  await prisma.report.create({
    data: {
      reason: "Fake listing suspicion",
      description: "The rent looked suspiciously low. Please review.",
      status: "PENDING",
      reporterId: customer.id,
      reportedUserId: provider.id,
      toletPostId: toletTwo.id
    }
  });

  const conversation = await prisma.conversation.create({
    data: {}
  });

  await prisma.message.createMany({
    data: [
      {
        conversationId: conversation.id,
        senderId: customer.id,
        receiverId: provider.id,
        body: "Hello, is the flat still available?",
        isRead: true
      },
      {
        conversationId: conversation.id,
        senderId: provider.id,
        receiverId: customer.id,
        body: "Yes, it is available. You can visit this Friday.",
        isRead: false
      }
    ]
  });

  await prisma.notification.createMany({
    data: [
      {
        userId: superAdmin.id,
        title: "New provider pending approval",
        message: `${pendingProvider.name} is waiting for approval.`,
        type: "APPROVAL",
        isRead: false
      },
      {
        userId: admin.id,
        title: "New To-let post pending",
        message: `${toletTwo.title} is waiting for review.`,
        type: "APPROVAL",
        isRead: false
      }
    ]
  });

  await prisma.auditLog.create({
    data: {
      userId: superAdmin.id,
      action: "SEED_DATABASE",
      resource: "SYSTEM",
      details: "Initial New Home demo data inserted."
    }
  });

  console.log("Database seeded successfully.");
  console.log("Demo login accounts:");
  console.log("superadmin@newhome.com / Password123");
  console.log("admin@newhome.com / Password123");
  console.log("customer@newhome.com / Password123");
  console.log("provider@newhome.com / Password123");
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });