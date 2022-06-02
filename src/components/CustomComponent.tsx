import React from "react";

interface CustomProps {
  name: string;
}

export const CustomComponent = (props: CustomProps) => (
  <div>Hello {props.name}!</div>
);
