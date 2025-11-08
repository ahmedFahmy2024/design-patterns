import { fetchProducts } from "@/api/products/fetching-products";
import { useQuery } from "@tanstack/react-query";

export const usefetchProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
