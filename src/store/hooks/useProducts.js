import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/products";

export const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: productService.getAllProducts,
    staleTime: 1000 * 60 * 5,
  });

export const useProduct = (slug) =>
  useQuery({
    queryKey: ["product", slug],
    queryFn: () => productService.getProductBySlug(slug),
    staleTime: 1000 * 60 * 5,
  });