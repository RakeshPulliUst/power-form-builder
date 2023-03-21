import {
  Tooltip as DefaultTooltip,
  TooltipProps as DefaultTooltipProps,
} from "@mui/material";

interface TooltipProps extends DefaultTooltipProps {}

const Tooltip = ({ ...rest }: TooltipProps) => {
  return <DefaultTooltip {...rest} />;
};

export default Tooltip;
