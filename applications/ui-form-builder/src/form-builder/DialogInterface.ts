import { Element } from "./ElementInterface";
export interface TextFieldDiaglog {
    label : string;
    placeholder: string;
    validate: {
      required: boolean;
      minLength?: number;       
      maxLength?: number;     
      rows?: number  
    }
  }
  
  export interface CheckboxDiaglog {
    label : string;
    checked: boolean;
    default: boolean;
    validate: {
      error: string;
      required: boolean;
    }
  }

  export interface SelectDiaglog {
    label : string;
    placeholder: string;
    multipleValues: boolean
    size: string,
    width: number,
    menuItems: {
      id: string
      selectDataLabel: string
      selectDataValue: string
    }[]; 
    validate:{
      required: boolean;
    }
  }

  export interface ButtonDialog {
    label: string,
    theme: string,
    size: string,
  };

  export interface RadioButtonDialog  {
    label: string,
    options: string,
    radioItems: {
      id: string
      radioButtonDataLabel: string
      radioButtonDataValue: string
    }[]; 
    validate:{
      required: boolean
    }
  };

  export interface ColumnDialog {
    label: string,
    columnItems: {
      id: string
      label: string,
      columnDataSize: string,
      columnDataWidth: number,
      columnComponents: Element[]
    }[],
  }


export interface TabsDialog {
  label: string,
  tabItems: {
    id: string
    dropId: string
    tabsDataLabel: string
    tabsDataValue: string
    tabComponents?: Element[]
  }[],
}