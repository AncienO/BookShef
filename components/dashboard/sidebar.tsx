import { signOut } from "@/app/(auth)/actions";
import SidebarNav from "./sidebar-nav";

interface SidebarProps {
  email: string;
}

export default function Sidebar({ email }: SidebarProps) {
  return (
    <aside className="hidden lg:flex w-64 bg-[#0e0e0e] border-r border-white/5 flex-col flex-shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-white/5">
        <div className="flex-shrink-0 w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-white"
          >
            <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.707V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
          </svg>
        </div>
        <span className="text-white font-bold text-lg tracking-tight">BookChef</span>
      </div>

      {/* Nav (client component for active state) */}
      <SidebarNav />

      {/* User + Sign Out */}
      <div className="px-3 py-4 border-t border-white/5">
        <div className="px-3 py-2 mb-1">
          <p className="text-xs text-white/30 truncate">{email}</p>
        </div>
        <form action={signOut}>
          <button
            type="submit"
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors text-sm border border-transparent hover:border-white/5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
            Sign out
          </button>
        </form>
      </div>
    </aside>
  );
}
