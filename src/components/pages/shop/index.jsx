import ProductCard from "./fragments/product-card";

export default function ShopPage({ products = [] }) {
    return (
        <div className="min-h-screen bg-zinc-50/60 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
