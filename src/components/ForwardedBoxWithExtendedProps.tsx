import React from "react";
import {
  PolymorphicPropsWithRef,
  PolymorphicRef
} from "../ts-utils/polymorphic-types";

interface ExtendedProps {
  wrap: boolean;
}

type BoxProps<C extends React.ElementType = "div"> = PolymorphicPropsWithRef<
  C,
  ExtendedProps
>;

type ForwardedBoxComponent = <C extends React.ElementType = "div">(
  props: BoxProps<C>
) => React.ReactElement | null;

export const ForwardedBoxWithExtendedProps: ForwardedBoxComponent = React.forwardRef(
  function ForwardedBoxWithExtendedProps<C extends React.ElementType = "div">(
    props: BoxProps<C>,
    ref?: PolymorphicRef<C>
  ) {
    const Component = props.as || "div";

    const { as, wrap, ...restProps } = props;

    return !props.wrap ? (
      <Component ref={ref} {...restProps} />
    ) : (
      <div style={{ border: "1px solid teal" }}>
        wrapped
        <Component ref={ref} {...restProps} />
      </div>
    );
  }
);
