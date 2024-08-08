import { Search } from "lucide-react";

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

interface SearchResultProps {
  product: ListingProps;
}

const ProductSearch: React.FC = () => {
    return(
        <div className="relative rounded-md bg-neutral-100 dark:bg-neutral-900 p-2 rounded-sm flex gap-2 justify-between align-center">
            <input type="text" className="bg-transparent focus:outline-none text-black dark:text-white" placeholder="Enter a product..." />
            <Search strokeWidth={1.5} className="stroke-neutral-500"/>
        </div>
    );
}

export default ProductSearch;