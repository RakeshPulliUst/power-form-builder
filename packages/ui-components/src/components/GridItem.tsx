import { Grid, GridProps as DefaultGridProps } from "@mui/material";

interface GridProps extends DefaultGridProps {}

const GridItem = ({ ...rest }: GridProps) => {
  return <Grid item {...rest} />;
};

export default GridItem;
