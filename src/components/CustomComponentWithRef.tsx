import React, { useImperativeHandle } from "react";

interface CustomProps {
  name: string;
}

interface CustomHandle {
  alert(name: string): void;
}

export const CustomComponentWithRef = React.forwardRef(function CustomComponent(
  props: CustomProps,
  ref: React.Ref<CustomHandle>
) {
  useImperativeHandle(
    ref,
    (): CustomHandle => ({
      // custom handle args are typed correctly (toUpperCase works)
      alert: (name) => alert(`Hello ${name.toUpperCase()}!`)
    })
  );

  return <div>Hello {props.name}!</div>;
});
