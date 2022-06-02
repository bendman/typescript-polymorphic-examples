# Typescript Polymorphic Examples

[View on CodeSandbox](https://codesandbox.io/s/polymorphic-ts-examples-yrtgp9)

Example of a typescript project with polymorphic components using an `as` prop.

Meaning, you can do something like this:

```tsx
<Box as="h1">Examples</Box>

<Box title="sometitle">Default div only allows basic div stuff</Box>

<Box as="blockquote" cite="me">
  A blockquote, where the "cite" prop is allowed.
</Box>

// Even custom components and their props should work
<Box as={Hello} name="me"/>
```
