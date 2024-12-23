import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TiArrowLeft } from "react-icons/ti";

interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Page = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const parsedResponse: Book[] = await response.json();
  console.log("Book", parsedResponse);

  return (
    <div className="p-5 bg-blue-100">
      <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-center md:text-center  text-cyan-600">
        Books (Server-Side Fetching)
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 m-0 md:m-20">
        {parsedResponse.map((books, index) => (
          <div
            key={index}
            className=" bg-white border rounded-lg shadow-lg p-4 flex flex-col w-[300px] m-auto transform transition duration-300 hover:scale-110"
          >
            <p className="text-2xl text-black font-bold text-center">
              {books.name}
            </p>
            <p className="text-lg text-neutral-700 font-semibold text-center">
              Type: {books.type}
            </p>

            {/*Ternary operator */}
            <p
              className={` text-center mt-1 py-2 rounded text-white font-bold ${
                books.available
                  ? "bg-blue-600 hover:bg-green-600 cursor-pointer"
                  : "bg-red-600 cursor-not-allowed"
              }`}
            >
              {books.available ? "Available" : "Unavailable"}
            </p>
          </div>
        ))}

        {/* Home page Button */}
        <div className="flex  ">
          <Button className="mt-2 flex items-center  hover:bg-yellow-500 hover:text-black">
            <Link href={"/"} className="flex items-center  justify-center ">
              <TiArrowLeft />
              <span>Back</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
