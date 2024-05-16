import ChangeProfile from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";
import Form from "../components/Form.jsx";

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
    </div>
  );
}
