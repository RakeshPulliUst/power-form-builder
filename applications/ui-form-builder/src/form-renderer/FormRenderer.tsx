import { ReactNode } from "react";
import BootstrapEngine from "./renderer-engine/BootstrapEngine";
import MaterialEngine from "./renderer-engine/MaterialEngine";
export { type ReactNode } from "react";
export type Template = "Material-UI" | "Bootstrap";

export type FormRendererOptions = {
  template: Template;
  builderJSON?: any;
  submission?: any;
};

export const FormRenderer = ({
  template,
  builderJSON,
  submission,
}: FormRendererOptions) => {
  const _submission = JSON.parse(JSON.stringify(submission)) || {};

  let FormContent: ReactNode = <></>;

  switch (template) {
    case "Material-UI":
      FormContent = (
        <MaterialEngine builderJSON={builderJSON} submission={_submission} />
      );
      break;
    case "Bootstrap":
      FormContent = (
        <BootstrapEngine builderJSON={builderJSON} submission={_submission} />
      );
      break;
  }

  return (
    <>
      template: {template} <br />
      builderJSON: {JSON.stringify(builderJSON)}
      <br />
      <br />
      submission: {JSON.stringify(submission)}
      <br />
      Form Rendered By Engine
      {FormContent}
    </>
  );
};
