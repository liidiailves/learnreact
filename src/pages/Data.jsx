import { useLoaderData, useNavigation } from "react-router-dom";

export default function Data() {
  const dogUrl = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="data">
      <img src={dogUrl} width="300" alt="dog" />
    </div>
  );
}

export const dataLoader = async () => {
  const res = await fetch("https://random.dog/woof.json");
  const dog = await res.json();

  return dog.url;
};
