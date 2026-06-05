"use client";
import { useParams } from "next/navigation";
import { useCart } from "@/store/hooks/useCart";
import { useProduct } from "@/store/hooks/useProducts";
import Loading from "@/components/general/states/loader";
import ErrorState from "@/components/general/states/error-state";
import ProductDetails from "@/components/pages/shop/product-detail";

const Page = () => {
  const { slug } = useParams();
  const { data: product, isLoading, isError } = useProduct(slug);
  const { items } = useCart();

  if (isLoading) {
    return (
      <Loading />
    );
  }

  if (isError || !product) {
    return (
      <ErrorState
        title="Access Denied"
        description="You don't have permission to view this page."
      />
    );
  }

  const cartItem = items.find(
    (item) => item.slug === product.slug
  );

  const productWithQuantity = {
    ...product,
    quantity: cartItem?.quantity || 1,
  };

  return (
    <div>
      <ProductDetails product={productWithQuantity} />
    </div>
  );

}
export default Page