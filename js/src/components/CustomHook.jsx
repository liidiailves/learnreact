import { useToggle } from "./useToggle";

export default function CustomHook() {
  // as returned an array, we can rename array items: state => isVisible
  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();

  return (
    <div>
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h2>Hidden text</h2>}
      <button onClick={toggle2}>{isVisible2 ? "Hide" : "Show"}</button>
      {isVisible2 && <h2>Hidden text</h2>}
    </div>
  );
}
