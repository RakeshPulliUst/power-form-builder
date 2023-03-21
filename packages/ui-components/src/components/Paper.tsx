import {
  Paper as DefaultPaper,
  PaperProps as DefaultPaperProps,
} from "@mui/material";

interface PaperProps extends DefaultPaperProps {}

const Paper = ({ ...rest }: PaperProps) => {
  return <DefaultPaper {...rest} />;
};

export default Paper;
