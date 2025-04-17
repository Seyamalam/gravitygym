"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconInfoCircle,
  IconCalendarEvent,
  IconUsers,
  IconCurrencyDollar,
  IconPhoneCall,
  IconBarbell,
  IconMedal,
  IconBook,
  IconQuestionMark,
  IconLeaf,
  IconStar,
  IconBrandGoogle,
} from "@tabler/icons-react";

export function NavigationDock() {
  const navItems = [
    {
      title: "Home",
      href: "/#",
      icon: <IconHome className="h-full w-full text-lime-500" />,
    },
    {
      title: "About",
      href: "/#about",
      icon: <IconInfoCircle className="h-full w-full text-lime-500" />,
    },
    {
      title: "Features",
      href: "/#features",
      icon: <IconBarbell className="h-full w-full text-lime-500" />,
    },
    {
      title: "Coaches",
      href: "/#coaches",
      icon: <IconUsers className="h-full w-full text-lime-500" />,
    },
    {
      title: "Schedule",
      href: "/#schedule",
      icon: <IconCalendarEvent className="h-full w-full text-lime-500" />,
    },
    {
      title: "Membership",
      href: "/#membership-comparison",
      icon: <IconStar className="h-full w-full text-lime-500" />,
    },
    {
      title: "Pricing",
      href: "/#pricing",
      icon: <IconCurrencyDollar className="h-full w-full text-lime-500" />,
    },
    {
      title: "Nutrition",
      href: "/#nutrition",
      icon: <IconLeaf className="h-full w-full text-lime-500" />,
    },
    {
      title: "Success Stories",
      href: "/#success-stories",
      icon: <IconMedal className="h-full w-full text-lime-500" />,
    },
    {
      title: "Testimonials",
      href: "/#testimonials",
      icon: <IconBook className="h-full w-full text-lime-500" />,
    },
    {
      title: "Blog",
      href: "/#blog",
      icon: <IconBrandGoogle className="h-full w-full text-lime-500" />,
    },
    {
      title: "FAQ",
      href: "/#faq",
      icon: <IconQuestionMark className="h-full w-full text-lime-500" />,
    },
    {
      title: "Partners",
      href: "/#partners",
      icon: <IconUsers className="h-full w-full text-lime-500" />,
    },
    {
      title: "Contact",
      href: "/#get-started",
      icon: <IconPhoneCall className="h-full w-full text-lime-500" />,
    },
  ];

  return (
    <FloatingDock
      items={navItems}
      desktopClassName="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-lg shadow-lime-500/10"
      mobileClassName="fixed bottom-8 right-8 z-50"
    />
  );
} 