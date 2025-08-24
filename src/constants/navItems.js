import { Home, Route, Users, Bot, User } from "lucide-react";

export const navItems = [
  { key: "home",      label: "Home",        Icon: Home,  screen: "home" },
  { key: "routes",    label: "Smart Route", Icon: Route, screen: "smartRoute" },
  { key: "community", label: "Community",   Icon: Users, screen: "groupRides" }, // placeholder
  { key: "support",   label: "AI Support",  Icon: Bot,   screen: "aiSupport" },
  { key: "profile",   label: "Profile",     Icon: User,  screen: "profile" },
];