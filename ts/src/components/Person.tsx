interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country: Country;
}

export enum Country {
  Estonia = "Estonia",
  Latvia = "Latvia",
  Finland = "Finland",
}

const Person: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Email: {props.email}</h2>
      <h2>Age: {props.age}</h2>
      <h2>This person {props.isMarried ? "is" : "is not"} MARRIED</h2>
      {props.friends.map((friend: string, index) => (
        <h2 key={index}>{friend}</h2>
      ))}
      <h2>Country: {props.country}</h2>
    </div>
  );
};

export default Person;
