import Link from "next/link";
import Logo from "./logo";

const routes = [
  {
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    label: "Account",
    path: "/app/account",
  },
];

export default function AppHeader() {
  return (
    <header className="flex justify-between items-center border-b border-white/10 py-2">
      <Logo />
      <nav>
        <ul className="flex text-xs gap-2  ">
          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path}> {route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
