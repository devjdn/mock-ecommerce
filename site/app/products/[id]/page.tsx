import { notFound } from 'next/navigation';

interface ListingProps {
  id: number;
  title: string;
  price: string;
  category: string;
  discountPercentage: string;
  stock: number;
  description: string;
  images: string[];
  tags: string[];
  thumbnail: string;
}

export default async function ProductPage({params}: {params: {id: string}}) {
    const response = await fetch(`https://dummyjson.com/products/${params.id}`);

    if (!response.ok) {
        notFound();
    }

    const product: ListingProps = await response.json();

    return(
        <main className='flex flex-col gap-6'>
            <div className='flex flex-col'>
                <h1 className='mb-2 font-medium text-3xl text-black dark:text-white'>{product.title}</h1>
                <div className='flex gap-2 items-start'>
                    <h2 className='mb-2 font-medium text-2xl text-black dark:text-white'>${product.price}</h2>
                    <p className='p-1 bg-green-200 text-green-900 rounded-lg text-xs font-semibold h-fit'>-{product.discountPercentage}%</p>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                    <div className="bg-neutral-100 dark:bg-neutral-900 w-fit" key={index}>
                        <img loading='lazy' className='aspect-square object-contain max-h-96' src={image} alt={`${product.title} image ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-4 max-w-96'>
                <h3 className='text-xl text-black dark:text-white'>Product information</h3>
                <p className='text-neutral-800 dark:text-neutral-300'>{product.description}</p>
                <p className='text-neutral-800 dark:text-neutral-300'>{product.stock} left in stock</p>
            </div>
        </main>
    );
}
