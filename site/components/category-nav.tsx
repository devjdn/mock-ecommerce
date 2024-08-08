'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface CategoryProps {
  categories: string[];
}

export default function CategoryNav() {
  const [categories, setCategories] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/category-list');
        const data: string[] = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error occurred when fetching product categories', error);
      }
    };
    fetchData();
  }, []);

  return(
    <nav className="w-64 border-r border-neutral-200 dark:border-neutral-800 px-4 gap-4 flex flex-col">
      <h3 className="text-xl font-medium text-black dark:text-white">Categories</h3>
      <ul className="flex flex-col gap-1">
        {categories.map((category, categoryIndex) => (
          <li key={categoryIndex}>
            <Link href={`/products/category/${category}`}>
              <p className={clsx(
                'capitalize text-black dark:text-white hover:text-blue-500',
                {
                  'capitalize text-blue-700 dark:text-blue-700 hover:text-blue-500': pathname === `/products/category/${category}`
                },
              )}>{category}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}