import { Cog, LifeBuoy, Search } from "lucide-react";
import { Logo } from "./Logo";
import { MainNavigation } from "./MainNavigation";
import { NavItem } from "./MainNavigation/NavItem";
import { UsedSpace } from "./UsedSpace";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="flex w-full mx-1 items-center gap-2 rounded-lg border border-zinc-300 scroll-px-20 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500 " />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>
      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpace />
      </div>
    </aside>
  );
}
