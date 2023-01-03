import { Card as DefaultCard, CardContent } from "@mui/material";
import React from "react";

type Props = {
  minWidth: number;
  children: React.ReactNode;
};

const Card = ({ minWidth, children, ...rest }: Props) => {
  return (
    <DefaultCard sx={{ minWidth: minWidth }} {...rest}>
      <CardContent>{children}</CardContent>
    </DefaultCard>
  );
};

export default Card;
