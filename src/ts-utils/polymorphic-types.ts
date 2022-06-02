export type Merge<OverriddenProps, OverrideProps> = OverrideProps &
  Omit<OverriddenProps, keyof OverrideProps>;

export type AsProp<C extends React.ElementType> = {
  as?: C;
};

export type PolymorphicProps<C extends React.ElementType, Props = {}> = Merge<
  React.ComponentProps<C>,
  Props & AsProp<C>
>;

export type PolymorphicRef<
  C extends React.ElementType
> = React.ComponentPropsWithRef<C>["ref"];

export type PolymorphicPropsWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicProps<C, Props> & {
  ref?: PolymorphicRef<C>;
};
