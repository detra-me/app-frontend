// @ts-nockeck

import React, { ComponentType } from "react";

const withDefaults = <P, DP extends ComponentType<P>>(
  component: React.ComponentType<P>,
  defaultProps: any
) => {
  type Props = Partial<DP> & Omit<P, keyof DP>;
  // @ts-ignore-next-line
  component.defaultProps = defaultProps;

  return component as React.ComponentType<Props>;
};

export default withDefaults;
