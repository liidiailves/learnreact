import ChangeProfile from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Profile() {
  const { username } = useContext(AppContext);
  return (
    <div>
      Profile, user is: {username}
      <ChangeProfile />
    </div>
  );
}
