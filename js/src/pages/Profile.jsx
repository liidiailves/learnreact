import ChangeProfile from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";
import Form from "../components/Form.jsx";
import Person from "../components/Person.jsx";

export default function Profile() {
  const { username } = useContext(AppContext);
  return (
    <div>
      Profile, user is: {username}
      <ChangeProfile />
      <br />
      <div>
        <Form />
      </div>
      <br />
      <Person
        name="Liidia"
        email="liidia@example.com"
        age={45}
        isMarried={true}
        friends={["jessica", "jake", "jerry", "jasmine"]}
      />
    </div>
  );
}
