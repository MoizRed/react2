import Card from "./Card.tsx";
import { createContext, useState } from "react";
export const username = createContext();
type Props = {};

export default function App({}: Props) {
  const [state, setstate] = useState("");

  return (
    <>
      <username.Provider value={{ state, setstate }}>
        <Card />
      </username.Provider>
    </>
  );
}
