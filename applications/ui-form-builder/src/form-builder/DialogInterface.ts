export interface TextFieldDiaglog {
    label : string;
    placeholder: string;
    required: boolean;
    minLength: string;
    maxLength: string;
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