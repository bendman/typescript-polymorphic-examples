import "./styles.css";
import { Box } from "./components/Box";
import { ForwardedBox } from "./components/ForwardedBox";
import { CustomComponent } from "./components/CustomComponent";
import { CustomComponentWithRef } from "./components/CustomComponentWithRef";
import React, { useRef } from "react";

export default function App() {
  const boxRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const customRef = useRef<React.ElementRef<typeof CustomComponentWithRef>>(
    null
  );

  return (
    <div className="App">
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
    </div>
  );
}
