import ListingItem from "@/components/listing-item";
import Link from "next/link";

interface ListingProps {
  id: number;
  title: string;
  price: string;
  category: string;
  discountPercentage: string;
  stock: number;
  description: string;
  image: string;
  tags: [];
  thumbnail: string;
}

export default async function CategoryPage({params}: {params: {category: string}}) {
  const response = await fetch(`https://dummyjson.com/products/category/${params.category}`);
  const data = await response.json();
  const products: ListingProps[] = data.products;

  return(
    <section>
      <h2 className="mb-2 font-medium text-2xl text-black dark:text-white capitalize">{params.category}</h2>
      <ul className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
        {products.map((product, productIndex) => (
          <Link href={`/products/${product.id}`} key={productIndex}>
            <ListingItem key={productIndex} product={product} />
          </Link>
        ))}
      </ul>
    </section>
  );
}