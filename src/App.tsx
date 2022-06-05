import "./styles.css";
import { Box } from "./components/Box";
import { ForwardedBox } from "./components/ForwardedBox";
import { CustomComponent } from "./components/CustomComponent";
import { CustomComponentWithRef } from "./components/CustomComponentWithRef";
import { ForwardedBoxWithExtendedProps } from "./components/ForwardedBoxWithExtendedProps";
import React, { useRef } from "react";

export default function App() {
  const boxRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const customRef = useRef<React.ElementRef<typeof CustomComponentWithRef>>(
    null
  );
  const customRef2 = useRef<React.ElementRef<typeof CustomComponentWithRef>>(
    null
  );


  return (
    <div className="App">
      <Box as="h1">Examples</Box>
      {/* Examples of HTML native components */}
      <Box title="sometitle">Default div only allows basic div stuff</Box>
      <Box as="blockquote" cite="me">
        A blockquote, where the "cite" prop is allowed.
      </Box>
      {/* Example of a custom component */}
      <Box as={CustomComponent} name="World" />
      {/* Examples of forwarded refs */}
      <ForwardedBox ref={boxRef}>I am a box with a ref</ForwardedBox>
      <ForwardedBox as="blockquote" cite="me" ref={quoteRef}>
        I am a blockquote with a ref and a "cite" prop
      </ForwardedBox>
      {/* Custom refs work, and methods have proper signature */}
      <button onClick={() => customRef.current?.alert("from parent")}>
        Call custom ref (alert)
      </button>
      <ForwardedBox as={CustomComponentWithRef} ref={customRef} name="World" />
      {/* Holy grail:
        refs can be passed through
        props of custom components are inferred from "as" prop (e.g. name)
        props can be extended by the component itself (e.g. wrap)
        native props are also allowed
      */}
      <button onClick={() => customRef2.current?.alert("from parent")}>
        Call custom ref (alert)
      </button>
      <ForwardedBoxWithExtendedProps
        ref={customRef2}
        as={CustomComponentWithRef}
        name="World"
        wrap
      />
      true
    </div>
  );
}
