import { useLocation } from "react-router-dom";
import { FormRenderer } from "./FormRenderer";

// component key inside the form must be unique
export const FormRendererPlayGround = () => {
  const location = useLocation();
  const { formData } = location.state || {};

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
        builderJSON={formData}
        submission={submission}
      />
    </>
  );
};
