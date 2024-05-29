import PropTypes from "prop-types";

export default function Person(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Email: {props.email}</h2>
      <h2>Age: {props.age}</h2>
      <h2>This person {props.isMarried ? "is" : "is not"} MARRIED</h2>
      {props.friends.map((friend, index) => (
        <h2 key={index}>{friend}</h2>
      ))}
    </div>
  );
}

Person.PropTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
};
