import React from "react";

interface CustomProps {
  name: string;
}

export const CustomComponent = (props: CustomProps) => (
  <React.Fragment>Hello {props.name}!</React.Fragment>
);
