import { useContext, useState } from "react";
import { username } from "./App.tsx";

type Props = {};

export default function Card({}: Props) {
  const { state, setstate } = useContext(username);

  return (
    <>
      <p>user name : {state}</p>
      <button onClick={(e) => setstate("jeff")}>
      </button>
    </>
  );
}
