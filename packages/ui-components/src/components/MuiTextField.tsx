import React from 'react'
import {TextField} from '@mui/material'

type Props = {
    label: string,
    required: boolean
    type?: React.HTMLInputTypeAttribute
}

const MuiTextField = (props: Props) => {
  return (
      <TextField
        label={props.label}
        required={props.required}
        variant="standard"
        type={props.type}
      />
  )
}

export default MuiTextField