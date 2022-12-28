import { TextFieldDiaglog, ButtonDialog } from "./DialogInterface";

export interface FormJson{
  title: string,
  components: Element[]
}

export interface Element {
    id: number;
    element: string;
    label?: string;
    placeholder?: string;
    required?: boolean;

    minLength?: string;
    maxLength?: string;

    minRows?: string;
    width?: string;

    checked?: boolean;
    default?: boolean;
    error?: string;

    multipleValues?: boolean
    menuItems?: {
      id: string
      selectDataLabel: string
      selectDataValue: string
    }[]; 
    textFieldWidth?: number

    theme?: string[],
    size?: string[], 
    
    options?: string[],
    radioItems?: {
      radioButtonDataLabel: string
      radioButtonDataValue: string
    }[]; 
  }

  export interface addJsxElement{
    element: React.ButtonHTMLAttributes<HTMLButtonElement> | HTMLElement 
  }

  export const sample: FormJson = {
    title: "Form",
    components: [],
  };

  export const components: Element[] = [
    {
      id: 1,
      element: "Button",
      label: '', 
      theme: [], 
      size: []
    },
    {
      id: 2,
      element: "TextField",
      label : '',
      placeholder: '',
      required: false,
      minLength: '',
      maxLength: ''
      },
    {
      id: 3,
      element: "Password",
      label : '',
      placeholder: '',
      required: false,
      minLength: '',
      maxLength: ''
    },
    {
      id: 4,
      element: "TextArea",
      label : '',
      placeholder: '',
      required: false,
      minRows: '',
      width: ''
    },
    {
      id: 5,
      element: "Select",
      label : '',
      placeholder: '',
      multipleValues: false,
      required: false,
      size: [],
      textFieldWidth: 150
      // menuItems: {}
    },
    {
      id: 6,
      element: "CheckBox",
      label : '',
      checked: false,
      default: false,
      required: false,
      error: ''
    },
    {
      id: 7,
      element: "RadioButton",
      label: '',
      options: [],
        // radioItems: {
        //   radioButtonDataLabel: '',
        //   radioButtonDataValue: ''
        // }[],
      required: false
    },
    {
      id: 8,
      element: "Column",
    }
  ];