import { useDispatch, useSelector } from "react-redux";
import Person, { Country } from "../components/Person";

export const Home = () => {
  const username = useSelector((state: any) => state.user.value.username);

  return (
    <div>
      <h1> THIS IS THE HOME PAGE {username}</h1>
      <Person
        name="Liidia"
        email="liidia@example.com"
        age={45}
        isMarried={true}
        friends={["jake", "jessica", "jerry"]}
        country={Country.Estonia}
      />
      ;
    </div>
  );
};
