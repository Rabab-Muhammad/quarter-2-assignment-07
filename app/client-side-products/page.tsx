"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TiArrowLeft } from "react-icons/ti";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const parsedResponse: Product[] = await response.json();
      console.log("Product", parsedResponse);
      setProducts(parsedResponse);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    // **Loading Animation (Bouncing Dots)**
    return (
      <div className="flex justify-center items-center h-screen bg-slate-600">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce delay-150"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 ">
      <h1 className="text-3xl md:text-4xl lg:5xl font-bold mb-5 text-center md:text-center text-yellow-600">
        Products (Client-Side Fetching)
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <div key={index}>
            <div
              key={product.id}
              className="bg-slate-600 mt-4 border-2 rounded-lg shadow-lg border-cyan-300 p-4 flex flex-col h-[450px] transform transition duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h2 className="text-lg font-extrabold text-center text-slate-950">{`${product.title.slice(
                0,
                38
              )}`}</h2>
              <p className="text-amber-400 font-bold text-lg text-center">{`$${product.price}`}</p>
              <p className="text-slate-400 text-sm mt-2 text-center">{`${product.description.slice(
                0,
                100
              )}...`}</p>

              {/* Add to Cart Button */}
              <Button className="mt-auto bg-blue-400 text-black hover:bg-yellow-600">
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Home Page Button */}
      <div className="flex">
        <Button className="mt-2 flex items-center hover:bg-yellow-500 hover:text-black">
          <Link href={"/"} className="flex items-center justify-center">
            <TiArrowLeft />
            <span>Back</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
