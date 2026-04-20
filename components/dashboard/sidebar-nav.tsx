"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/dashboard/home",
    label: "Home",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.99 8.99a.75.75 0 1 1-1.06 1.06L20 13.439V20.25A1.75 1.75 0 0 1 18.25 22h-3.5a.75.75 0 0 1-.75-.75v-4.5a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v4.5c0 .414-.336.75-.75.75h-3.5A1.75 1.75 0 0 1 4 20.25v-6.811l-.45.45a.75.75 0 1 1-1.06-1.06l8.98-8.989ZM18.5 11.939l-6.5-6.5-6.5 6.5V20.25c0 .138.112.25.25.25h3.5v-4.5a1.75 1.75 0 0 1 1.75-1.75h3.5a1.75 1.75 0 0 1 1.75 1.75v4.5h3.5a.25.25 0 0 0 .25-.25v-8.311Z" />
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.99 8.99a.75.75 0 1 1-1.06 1.06L20 13.439V20.25A1.75 1.75 0 0 1 18.25 22h-3.5a.75.75 0 0 1-.75-.75v-4.5a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v4.5c0 .414-.336.75-.75.75h-3.5A1.75 1.75 0 0 1 4 20.25v-6.811l-.45.45a.75.75 0 1 1-1.06-1.06l8.98-8.989Z" vectorEffect="non-scaling-stroke" />
      </svg>
    ),
    exact: false,
  },
  {
    href: "/dashboard/tools",
    label: "My Tools",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.707V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
      </svg>
    ),
    exact: true,
  },
  {
    href: "/dashboard/toolkits",
    label: "My Toolkits",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
      </svg>
    ),
    exact: false,
  },
  {
    href: "/dashboard/tools/new",
    label: "Add Tool",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
      </svg>
    ),
    exact: true,
  },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 px-3 py-4 space-y-0.5">
      {navItems.map((item) => {
        const isActive = item.exact
          ? pathname === item.href
          : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors group ${
              isActive
                ? "bg-brand-600/15 text-brand-300 border border-brand-500/20"
                : "text-white/50 hover:text-white hover:bg-white/5 border border-transparent"
            }`}
          >
            <span
              className={`transition-colors ${
                isActive ? "text-brand-400" : "text-white/30 group-hover:text-white/60"
              }`}
            >
              {item.icon}
            </span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
