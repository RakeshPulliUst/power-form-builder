export interface FormJson{
  form_title: string,
  components: Element[]
}


export interface FinalSaveFormJson{
  id: number,
  form_title: string,
  components: Element[],
  date_created: string,
  date_modified: string,
  status: string
}

export interface Element {
    id: number;
    element: string;
    label?: string;
    placeholder?: string;
    required?: boolean;

    minLength?: number;
    maxLength?: number;
    rows?: number

    minRows?: number;
    width?: number;

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

    theme?: string,
    size?: string, 
    
    options?: string,
    radioItems?: {
      id: string
      radioButtonDataLabel: string
      radioButtonDataValue: string
    }[]; 

    tabItems?: {
      id: string
      dropId: string
      tabsDataLabel: string
      tabsDataValue: string
      tabComponents:  Element[]
    }[]; 

    columnItems?: {
        id: string,
        label: string,
        columnDataSize: string,
        columnDataWidth: number,
        columnComponents:  Element[]
      }[],  

    show?: boolean
  }

  export interface addJsxElement{
    element: React.ButtonHTMLAttributes<HTMLButtonElement> | HTMLElement 
  }

  export const sample: FormJson = {
    form_title: "Form",
    components: [],
  };

  export const finalSample: FinalSaveFormJson = {
    id: 1,
    form_title: "Form",
    components: [],
    date_created: new Date().toLocaleString() + "",
    date_modified: new Date().toLocaleString() + "",
    status: ""
  };

  export const finalTableFormSample: FinalSaveFormJson[] = [{
    id: 1,
    form_title: "Form",
    components: [],
    date_created: new Date().toLocaleString() + "",
    date_modified: new Date().toLocaleString() + "",
    status: ""
  }];


  export const components: Element[] = [
    {
      id: 1,
      element: "Button",
      label: '', 
      theme: 'success', 
      size: 'medium'
    },
    {
      id: 2,
      element: "TextField",
      label : '',
      placeholder: '',
      required: false,
      minLength: 0,
      maxLength: 0
      },
    {
      id: 3,
      element: "Password",
      label : '',
      placeholder: '',
      required: false,
      minLength: 0,
      maxLength: 0
    },
    {
      id: 4,
      element: "TextArea",
      label : '',
      placeholder: '',
      required: false,
      minLength: 0,
      maxLength: 0,
      rows: 0
    },
    {
      id: 5,
      element: "Select",
      label : '',
      placeholder: '',
      multipleValues: false,
      required: false,
      size: '',
      textFieldWidth: 150,
      menuItems: [{
        id: "",
        selectDataLabel: "",
        selectDataValue: ""
      }]
    },
    {
      id: 6,
      element: "Checkbox",
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
      options: '',
      radioItems: [{
        id: "",
        radioButtonDataLabel: '',
        radioButtonDataValue: ''
      }],
      required: false
    },
    {
      id: 8,
      element: "Email",
      label : '',
      placeholder: '',
      required: false,
      minLength: 0,
      maxLength: 0
    },
    {
      id: 9,
      element: "Column",
      label: "",
      columnItems: [{
        id: "",
        label: "",
        columnDataSize: "",
        columnDataWidth: 0,
        columnComponents:  [{
          id: 1009,
          element: "Button",

        }]
      }],  
    },
    {
      id: 10,
      element: "Tabs",
      label: "",
      tabItems: [{
        id: "",
        dropId:"",
        tabsDataLabel: "",
        tabsDataValue: "",
        tabComponents:  [{
          id: 1008,
          element: "Button",
        }]
      }],
    },
    
  ]


