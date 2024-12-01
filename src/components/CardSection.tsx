import { ReactNode } from "react";
import Card from "./Card.tsx";
import { CardProps } from "./CardProps.ts";
type Props = { children: ReactNode };

export default function CardSection({ children }: Props) {
  return (
    <div>
      {children}
    </div>
  );
}
