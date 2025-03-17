
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { toast } from "react-toastify";
import { useDebounce } from "use-debounce";
import marketplaceInstance from "@/abi/Marketplace.json"

const AddProductModal = () => {
  const [visible, setVisible] = useState(false);

  const [newsTitle, setNewsTitle] = useState("");
  const [newsDescription, setNewsDescription] = useState("");
  const [debouncedNewsTitle] = useDebounce(newsTitle, 500);
  const [debouncedNewsDescription] = useDebounce(newsDescription, 500);
  const [loading, setLoading] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [displayBalance, setDisplayBalance] = useState(false);

  const isComplete = newsTitle && newsDescription;

  const clearForm = () => {
    setNewsTitle("");
    setNewsDescription("");
  };

  const { writeContractAsync: createProduct, isPending: createProductPending, isSuccess: createProductSuccess } = useWriteContract();

  // const handleCreateProduct = async () => {};

const addProduct = async (e: any) => {
    e.preventDefault();
    try {
        // await toast.promise(handleCreateProduct, {
        //     pending: "Creating news...",
        //     success: "News created successfully",
        //     error: "Something went wrong. Try again.",
        // });

        if (!isComplete) throw new Error("Please fill all fields");
        setIsLoading(true);
        
        await createProduct({
          address: marketplaceInstance.address as `0x${string}`,
          abi: marketplaceInstance.abi,
          functionName: "postNews",
          args: [debouncedNewsTitle, debouncedNewsDescription],
        });
        setLoading("Waiting for confirmation...");
        setVisible(false);
        clearForm();

        toast.success("News created successfully ...");
    
    } catch (e: any) {
        console.log({ e });
        toast.error(e?.message || "Something went wrong. Try again.");
    } finally {
      setIsLoading(false);
      setLoading("")
    }
};

  // };

  // Get the user's address and balance
  const { address, isConnected } = useAccount();

  // If the user is connected and has a balance, display the balance
  useEffect(() => {
    if (isConnected) {
      setDisplayBalance(true);
      return;
    }
    setDisplayBalance(false);
  }, [isConnected]);

  // Define the JSX that will be rendered
  return (
    <div className={"flex flex-row w-full justify-between"}>
      <div>
        {/* Add Product Button that opens the modal */}

        <button
          type="button"
          onClick={() => setVisible(true)}
          className="inline-block ml-4 px-6 py-2.5 bg-black text-white font-medium text-md leading-tight rounded-2xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
        >
          <p>Add News (sports, entertainment, etc.) + </p>
        </button>

        {/* Modal */}
        {visible && (
          <div
            className="fixed z-40 overflow-y-auto top-0 w-full left-0"
            id="modal"
          >
            {/* Form with input fields for the product, that triggers the addProduct function on submit */}
            <form onSubmit={addProduct}>
              <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                  &#8203;
                </span>
                <div
                  className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  {/* Input fields for the product */}
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <label>Title</label>
                    <input
                      onChange={(e) => {
                        setNewsTitle(e.target.value);
                      }}
                      required
                      type="text"
                      className="w-full bg-gray-100 p-2 mt-2 mb-3"
                    />

                    <label>Description</label>
                    <input
                      onChange={(e) => {
                        setNewsDescription(e.target.value);
                      }}
                      required
                      type="text"
                      className="w-full bg-gray-100 p-2 mt-2 mb-3"
                    />
                  </div>
                  {/* Button to close the modal */}
                  <div className="bg-gray-200 px-4 py-3 text-right">
                    <button
                      type="button"
                      className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                      onClick={() => setVisible(false)}
                    >
                      <i className="fas fa-times"></i> Cancel
                    </button>
                    {/* Button to add the product to the marketplace */}
                    <button
                      type="submit"
                      disabled={!!loading || !isComplete || !addProduct}
                      className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                    >
                      {isLoading ? "Creating..." : "Create"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProductModal;
