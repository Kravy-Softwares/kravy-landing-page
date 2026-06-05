"use client";
import { useParams } from "next/navigation";
import Loading from "@/components/general/loader";
import { useProduct } from "@/store/hooks/useProducts";
import ErrorState from "@/components/general/error-state";
import ProductDetails from "@/components/pages/shop/product-detail";

const Page = () => {
  const { slug } = useParams();
  const { data: product, isLoading, isError } = useProduct(slug);

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

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );

}
export default Page