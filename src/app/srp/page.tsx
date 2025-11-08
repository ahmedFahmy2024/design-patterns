"use client";

import { usefetchProducts } from "@/hooks/useFetchProducts";
import Loadingdisplay from "./_components/Loadingdisplay";
import ErrorDisplay from "./_components/ErrorDisplay";
import ProductList from "./_components/ProductList";

export default function SRP() {
  const { data, isLoading, error } = usefetchProducts();
  console.log("data", data);
  return (
    <main className="container mx-auto flex flex-col gap-6 items-center justify-center h-screen ">
      {isLoading ? (
        <Loadingdisplay />
      ) : error ? (
        <ErrorDisplay />
      ) : (
        <ProductList products={data || []} />
      )}
    </main>
  );
}

// the concept of single responsibility principle is that a class should have only one reason to change
// for example we handle query fetching in the api file and we handle the fetching in the hook file so each file has only one reason to change
// also we handle loading and error ui in separate files so each file has only one reason to change
// finally we handle the product list in a separate file so each file has only one reason to change
