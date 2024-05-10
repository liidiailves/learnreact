import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Home() {
  const { username } = useContext(AppContext);
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      axios.get("https://catfact.ninja/fact").then((res) => res.data),
    // You can add other options here as needed, such as 'staleTime', 'cacheTime', etc.
  });

  if (isError) {
    return <h1>Sorry, there was an error.</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>This is the home page and the user is: {username}</h1>
      <p>{catData?.fact}</p>
      <button onClick={refetch}>Update Data</button>
    </div>
  );
}
