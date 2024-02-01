import Link from "next/link";
import React from "react";

export default function ShoppingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Shopping List</h1>
      <nav className="flex items-start gap-2">
        <Link
          href="/shopping"
          className="text-gray-400 px-3 py-2 text-sm font-medium"
        >
          Shopping Lists
        </Link>
        <Link
          href="/shopping/add/"
          className="text-gray-400 px-3 py-2 text-sm font-medium"
        >
          Add
        </Link>
      </nav>
      {children}
    </>
  );
}
