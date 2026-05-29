# New Home

**New Home** is a full-stack web application for finding rental homes and trusted home service providers.

The platform contains two main modules:

1. **To-let Hub** — for house, flat, room, sublet, bachelor seat, family house, office, and shop rentals.
2. **Service Pro** — for finding trusted service providers such as cooks, housemaids, cleaners, drivers, electricians, plumbers, tutors, and caregivers.

---

## Project Goal

New Home helps users find a place to live and trusted people to help manage their home life.

Unregistered users can browse the website, but they cannot use any service-related feature until they register, get approved, and log in.

---

## User Roles

The system has four user roles:

### 1. Super Admin

The Super Admin has supreme authority over the whole system.

Can manage:

- Admins
- Customers
- Providers
- To-let posts
- Service posts
- Reports
- Approvals
- Platform settings
- Audit logs

### 2. Admin

Admins manage users and platform content.

Can manage:

- Customer approvals
- Provider approvals
- To-let posts
- Service posts
- Reports
- Contact messages

### 3. Customer

Customers search for houses and service providers.

Can:

- Search to-let listings
- Search service providers
- Save listings
- Send requests
- Review service providers
- Manage profile

### 4. Provider

Providers can post houses for rent or provide home-related services.

Can:

- Create to-let posts
- Create service posts
- Manage own listings
- Receive customer requests
- Respond to requests
- Manage profile

---

## Approval System

After registration, every account is created with the status:

```txt
PENDING