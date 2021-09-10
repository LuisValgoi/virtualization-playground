import React, { FC, forwardRef, MutableRefObject, Ref } from "react";

import { IRow, IRef } from "../../utils/interfaces";

const outerStyle = {
  border: "1px solid #ddd",
  borderRadius: "4px",
  width: "300px",
  height: "500px",
  overflow: "auto",
};

const getRowStyle = (isDark: boolean) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "50px",
  padding: "16px",
  background: isDark ? "#e5e5e5" : "#fff",
});

export const Outer: FC<IRef> = (props) => (
  <div ref={props.forwardedRef} style={outerStyle}>
    {props.children}
  </div>
);

export const Inner: FC<IRef> = (props) => (
  <div ref={props.forwardedRef} style={outerStyle}>
    {props.children}
  </div>
);

export const Row: FC<IRow> = (props) => {
  return (
    <div ref={props.forwardedRef} style={getRowStyle(props.isDark)}>
      {props.children}
    </div>
  );
};
