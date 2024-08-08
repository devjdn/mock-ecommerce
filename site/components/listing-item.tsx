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

interface ListingItemProps {
  product: ListingProps;
}

const ListingItem: React.FC<ListingItemProps> = ({ product }) => {

    return(
        <li className="rounded-md flex flex-col gap-2 p-2 bg-neutral-100 dark:bg-neutral-900">
            <img className="aspect-square object-contain" src={product.thumbnail} alt={product.title} />
            <div className="product-info">
                <p className="text-black dark:text-white font-medium">{product.title}</p>
                <p className="text-black dark:text-white">${product.price}</p>
            </div>
        </li>
    );
}

export default ListingItem;