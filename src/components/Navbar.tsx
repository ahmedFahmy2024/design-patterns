import Link from "next/link";

const routes = [
  { href: "/compound", label: "Compound" },
  { href: "/custom-hooks", label: "Custom Hooks" },
  { href: "/hoc", label: "Higher Order Component" },
  { href: "/srp", label: "Single Responsibility Principle" },
  { href: "/conditional-hooks", label: "Conditional Hooks" },
  { href: "/example1", label: "Example1" },
  { href: "/children-example", label: "Children Example" },
  { href: "/container", label: "Container Pattern" },
  { href: "/error-boundary", label: "Error Boundary" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-center py-4">
      <ul className="flex gap-4 items-center">
        {routes.map((route) => (
          <li key={route.href}>
            <Link href={route.href}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
