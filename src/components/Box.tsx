import { PolymorphicProps } from "../ts-utils/polymorphic-types";

type BoxProps<C extends React.ElementType = "div"> = PolymorphicProps<C>;

export const Box = <C extends React.ElementType = "div">(
  props: BoxProps<C>
) => {
  const Component = props.as || "div";
  const { as, ...restProps } = props;

  return <Component {...restProps} />;
};
