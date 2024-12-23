import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-blue-100 px-4 ">
      <div className="bg-yellow-400 p-6 md:p-8 rounded-lg shadow-lg max-w-md md:max-w-lg w-full">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-2">
          Data Fetching
        </h1>
        <p className="text-sm md:text-base mb-2 ">
          <span className="text-lg md:text-xl font-semibold">
            Data Fetching
          </span>{" "}
          means getting information from a server or database to show it on a
          website or app.
        </p>
        <p className="text-base md:text-xl mb-2">
          The two types of data fetching are:
        </p>

        <p className="text-sm md:text-base ">
          <span className="text-md md:text-lg font-semibold">
            Client-Side Fetching:
          </span>{" "}
          Data is fetched in the user's browser after the page loads.
        </p>
        <p className="text-sm md:text-base mb-3 ">
          <span className="text-md md:text-lg font-semibold">
            Server-Side Fetching:
          </span>{" "}
          Data is fetched from the server before the page is sent to the
          browser.
        </p>

        {/* Buttons in Flex Row */}
        <div className="flex flex-col text-center sm:flex-row justify-center gap-4 py-2">
          <Link href="/client-side-products">
            <Button className="bg-blue-600 text-white text-sm md:text-lg font-semibold rounded-md shadow-lg hover:bg-blue-700 transform transition duration-300 hover:scale-105  py-6">
              Client-Side Fetching
            </Button>
          </Link>
          <Link href="/server-side-books">
            <Button className="bg-green-600 text-white text-sm md:text-lg font-semibold rounded-md shadow-lg hover:bg-green-700 transform transition duration-300 hover:scale-105 py-6">
              Server-Side Fetching
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
