import CardSection from "./components/CardSection.tsx";
import Card from "./components/Card.tsx";
import { createContext, useState } from "react";

export const thecontext = createContext({});

type Props = {};

export default function App({}: Props) {
  const [thestate, setstate] = useState("here bitch");

  return (
    <>
      <thecontext.Provider value={{thestate , setstate}}>
        <CardSection>
          {[...Array(10)].map((_, i) => {
            const title = `Card ${i + 1} - ${
              Math.random().toString(36).substring(2, 7).toUpperCase()
            }`;
            const description = `This is card ${i + 1} - ${
              Math.random().toString(36).substring(2, 15).toLowerCase()
            }`;
            return (
              <Card
                key={i}
                name={title}
                description={description}
                image={`https://picsum.photos/id/${i + 1}/200/300`}
              />
            );
          })}
        </CardSection>
      </thecontext.Provider>
    </>
  );
}
