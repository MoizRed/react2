import { CardProps } from "./CardProps.ts";
import { useContext } from "react";
import { thecontext } from "../App.tsx";

export default function Card({ name, description, image }: CardProps) {
  const context = useContext(thecontext);
  console.log(context);
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={image} alt="" />

      <h1>
        the extra detail is from the context {context.thestate}
      </h1>
      <button onClick={() => context.setstate("not here ay more sorry")}>Change</button>
    </div>
  );
}
