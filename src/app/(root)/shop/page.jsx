"use client"
import ShopPage from "@/components/pages/shop";
import { useProducts } from "@/store/hooks/useProducts";
import Loading from "@/components/general/states/loader";
import ErrorState from "@/components/general/states/error-state";

const Page = () => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <Loading />
  }

  if (isError || !products) {
    return (
      <ErrorState
        title="Access Denied"
        description="You don't have permission to view this page."
      />
    );
  }
  return (
    <div>
      <ShopPage products={products} />
    </div>
  );
};

export default Page;
