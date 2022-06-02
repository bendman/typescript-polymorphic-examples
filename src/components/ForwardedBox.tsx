import React from "react";
import {
  PolymorphicPropsWithRef,
  PolymorphicRef
} from "../ts-utils/polymorphic-types";

type BoxProps<C extends React.ElementType = "div"> = PolymorphicPropsWithRef<C>;

type ForwardedBoxComponent = <C extends React.ElementType = "div">(
  props: BoxProps<C>
) => React.ReactElement | null;

export const ForwardedBox: ForwardedBoxComponent = React.forwardRef(
  function ForwardedBox<C extends React.ElementType = "div">(
    props: BoxProps<C>,
    ref?: PolymorphicRef<C>
  ) {
    const Component = props.as || "div";
    const { as, ...restProps } = props;

    return <Component ref={ref} {...restProps} />;
  }
);
