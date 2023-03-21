import {
  TextareaAutosize as DefaultTextareaAutosize,
  TextareaAutosizeProps as DefaultTextareaAutosizeProps,
} from "@mui/material";

interface TextareaAutosizeProps extends DefaultTextareaAutosizeProps {
  label: string;
  width: number;
}

const TextareaAutosize = ({ label, width, ...rest }: TextareaAutosizeProps) => {
  return (
    <>
      <label>{label}</label>
      <br />
      <DefaultTextareaAutosize
        style={{ width: width, marginTop: 20 }}
        {...rest}
      />
    </>
  );
};

export default TextareaAutosize;
