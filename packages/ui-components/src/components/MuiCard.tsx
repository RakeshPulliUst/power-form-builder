  import { Card, CardContent } from '@mui/material'
import React from 'react'
  
  type Props = {
    minWidth: number
    children: React.ReactNode
  }
  
  const MuiCard = (props: Props) => {
    return (
        <Card sx={{ minWidth: props.minWidth }}>
        <CardContent>
            {props.children}
        </CardContent>
    </Card>
    )
  }
  
  export default MuiCard