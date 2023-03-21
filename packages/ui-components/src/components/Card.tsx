import {
  Card as DefaultCard,
  CardContent,
  CardProps as DefaultCardProps,
} from "@mui/material";
import React from "react";

interface CardProps extends DefaultCardProps {
  children: React.ReactNode;
}

const Card = ({ children, ...rest }: CardProps) => {
  return (
    <DefaultCard {...rest}>
      <CardContent>{children}</CardContent>
    </DefaultCard>
  );
};

export default Card;
