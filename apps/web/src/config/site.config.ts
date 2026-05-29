export const siteConfig = {
  name: "New Home",
  tagline: "Find your place. Find trusted help.",
  description:
    "New Home is a smart web platform for to-let listings and trusted home service providers.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api",
  author: "Md Mahruf Alam",
  links: {
    home: "/",
    toLet: "/to-let",
    services: "/services",
    about: "/about",
    contact: "/contact",
    login: "/auth/login",
    register: "/auth/register"
  },
  contact: {
    email: "support@newhome.com",
    phone: "+880 1000-000000",
    location: "Bangladesh"
  }
};