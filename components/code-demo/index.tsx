import * as React from "react";
import { WindowActions } from "@components";

import { Pre } from "./pre";

export default function CodeDemo({ children }: { children: React.ReactChild }) {
  return (
    <Pre css={{ pt: 0 }}>
      <WindowActions />
      {children}
    </Pre>
  );
};
