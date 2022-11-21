import React, { memo } from "react";
import { CodeBlock, vs2015 } from "react-code-blocks";

const CodeBlockComponent = ({ text }: { text: string }) => {
  return (
    <CodeBlock
      text={text || ''}
      language={"tsx"}
      showLineNumbers={false}
      theme={vs2015}
    />
  );
};

export default memo(CodeBlockComponent);
