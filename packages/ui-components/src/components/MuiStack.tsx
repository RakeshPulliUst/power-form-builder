import React from 'react'
import {Stack} from '@mui/material';
import { ResponsiveStyleValue } from '@mui/system';

type Props = {
    width: string;
    direction: ResponsiveStyleValue<"row" | "row-reverse" | "column" | "column-reverse"> | undefined;
    spacing: number,
    padding: number,
    children: React.ReactNode;
}

const MuiStack = (props: Props) => {
  return (
    <Stack width={props.width} spacing={props.spacing} padding={props.padding} direction={props.direction}>
            {props.children}
        </Stack>
  )
}

export default MuiStack