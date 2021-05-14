import "./styles.css";

import { AtomicProps } from "@fower/types";
//import { Box } from "@fower/react";

declare module "react" {
  interface HTMLAttributes<T> extends AtomicProps {}
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div toCenter></div>
    </div>
  );
}
