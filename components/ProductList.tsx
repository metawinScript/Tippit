
import { useState } from "react";

import Product from "@/components/Product";
import ErrorAlert from "@/components/alerts/ErrorAlert";
import LoadingAlert from "@/components/alerts/LoadingAlert";
import SuccessAlert from "@/components/alerts/SuccessAlert";
import { useReadContract } from "wagmi";
import marketplaceInstance from "@/abi/Marketplace.json"

// Define the ProductList component
const ProductList = () => {
    // Use the useContractCall hook to read how many products are in the marketplace contract
    //getNewsLength, []
    const { data: len, refetch} = useReadContract({
        abi: marketplaceInstance.abi,
        address: marketplaceInstance.address as `0x${string}`,
        functionName: "getNewsLength",
        args: []
    });
    // Convert the data to a number
    const productLength = len ? Number(len.toString()) : 0;
    // Define the states to store the error, success and loading messages
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState("");
    // Define a function to clear the error, success and loading states
    const clear = () => {
        setError("");
        setSuccess("");
        setLoading("");
    };
    // Define a function to return the products
    const getProducts = () => {
        // If there are no products, return null
        if (!productLength) return null;
        const products = [];
        // Loop through the products, return the Product component and push it to the products array
        for (let i = 0; i < productLength; i++) {
            products.push(
                <Product
                    key={i}
                    id={i}
                    setSuccess={setSuccess}
                    setError={setError}
                    setLoading={setLoading}
                    loading={loading}
                    clear={clear}
                />
            );
        }
        return products;
    };

    // Return the JSX for the component
    return (
        <div>
            {/* If there is an alert, display it */}
            {/* If there is an alert, display it */}
            {error && <ErrorAlert message={error} clear={clear} />}
            {success && <SuccessAlert message={success} />}
            {loading && <LoadingAlert message={loading} />}
            {/* Display the products */}
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">News</h2>
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {/* Loop through the products and return the Product component */}
                    {getProducts()}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
