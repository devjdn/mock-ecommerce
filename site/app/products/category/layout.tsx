import React from "react";
import CategoryNav from "@/components/category-nav";

export default function CategoryLayout({children}: {children: React.ReactNode}) {
    return(
        <main className="flex gap-6">
          <CategoryNav/>
          {children}
        </main>
    );
}