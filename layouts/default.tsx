import { Link } from "@nextui-org/link";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";

import { Navbar } from "@/components/navigation/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize Flowbite components
    initFlowbite();
  }, []);

  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow mt-16">{children}</main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
          title="nextui.org homepage"
        />
      </footer>
    </div>
  );
}
