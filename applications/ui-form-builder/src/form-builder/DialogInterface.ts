export interface TextFieldDiaglog {
    label : string;
    placeholder: string;
    required: boolean;
    minLength: number;
    maxLength: number;
  }

  export interface TextAreaDiaglog {
    label : string;
    placeholder: string;
    required: boolean;
    minRows: string;
    width: string;
  }

  
  export interface CheckBoxDiaglog {
    label : string;
    checked: boolean;
    default: boolean;
    required: boolean;
    error: string;
  }

  export interface SelectDiaglog {
    label : string;
    placeholder: string;
    multipleValues: boolean
    required: boolean;
    size: string[],
    textFieldWidth: number,
    menuItems: {
      id: string
      selectDataLabel: string
      selectDataValue: string
    }[]; 
  }

  export interface ButtonDialog {
    label: string,
    theme: string[],
    size: string[],
  };

  export interface RadioButtonDialog  {
    label: string,
    options: string[],
    radioItems: {
      radioButtonDataLabel: string
      radioButtonDataValue: string
    }[]; 
    required: boolean,
  };