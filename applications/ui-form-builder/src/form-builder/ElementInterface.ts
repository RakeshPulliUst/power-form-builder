export interface Element {
    id: number;
    element: string;
    required: boolean;
  }

  export interface addJsxElement{
    element: React.ButtonHTMLAttributes<HTMLButtonElement> | HTMLElement 
  }

  export const components: Element[] = [
    {
      id: 1,
      element: "Button",
      required: false,
    },

    {
      id: 2,
      element: "TextField",
      required: false,
    },
    {
      id: 3,
      element: "Password",
      required: false,
    },
    {
      id: 4,
      element: "TextArea",
      required: false,
    },
    {
      id: 5,
      element: "Select",
      required: false,
    },
    {
      id: 6,
      element: "CheckBox",
      required: false,
    },
    {
      id: 7,
      element: "RadioButton",
      required: false,
    }
  ];
