import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetCat = () => {
  const {
    data,
    refetch,
    isLoading: isCatLoading,
    error,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      const response = await Axios.get("https://catfact.ninja/fact");
      return response.data;
    },
  });

  const refetchData = () => {
    alert("Data refetched");
    refetch();
  };

  if (error) {
    console.log("Error fetching data:", error);
  }

  return { data, refetchData, isCatLoading };
};
