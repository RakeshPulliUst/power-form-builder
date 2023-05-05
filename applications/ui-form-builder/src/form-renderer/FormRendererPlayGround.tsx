import { FormRenderer } from "./FormRenderer";

// component key inside the form must be unique
export const FormRendererPlayGround = () => {
  const formJSON = {
    form: "Sample Form",
    key: "sampleForm",
    components: [
      {
        type: "columns",
        key: "column1",
        components: [
          {
            type: "textfield",
            key: "firstName",
            label: "First Name",
            classes: "",
            validation: {
              required: true,
              min: 10,
              max: 20,
            },
          },
          {
            type: "textfield",
            key: "firstName1",
            label: "First Name",
            classes: "",
            validation: {
              required: true,
              min: 10,
              max: 20,
            },
          },
          {
            type: "fileupload",
            key: "documents",
            label: "Documents",
            classes: "",
            validation: {
              required: true,
              min: 1,
              max: 5,
            },
          },
        ],
        classes: "md-12",
        validation: {},
        conditional: {
          show: true,
          when: "componentKey1",
          has: true,
        },
      },
    ],
  };

  const submission = {
    firstName: "Rakesh Pulli",
    documents: [
      {
        name: "10th Marksheet.jpeg",
        size: 103232,
        type: "image/jpg",
      },
      {
        name: "10th Migration.png",
        size: 103232,
        type: "image/jpg",
      },
    ],
  };

  return (
    <>
      <FormRenderer
        template="material"
        builderJSON={formJSON}
        submission={submission}
      />
      <FormRenderer
        template="bootstrap"
        builderJSON={formJSON}
        submission={submission}
      />
    </>
  );
};
