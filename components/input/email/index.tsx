import React, { useMemo } from "react";
import { Input, useInput, SimpleColors } from "@nextui-org/react";

export default function EmailInput() {
  const { value, reset, bindings } = useInput("");

  const validateEmail = (value: string) => {
    return value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  };

  const helper: { color: SimpleColors; text: string } = useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "default",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);
  return (
    <Input
      {...bindings}
      clearable
      shadow={false}
      onClearClick={reset}
      status={helper.color}
      color={helper.color}
      helperColor={helper.color}
      helperText={helper.text}
      type="email"
      placeholder="Enter your email"
    />
  );
}
