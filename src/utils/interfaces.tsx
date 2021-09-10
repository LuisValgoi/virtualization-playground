import { MutableRefObject, RefCallback } from "react";

export interface IRef {
  forwardedRef: MutableRefObject<HTMLDivElement | null>;
}

export interface IComment {
  id: number;
  body: string;
}

export interface IRow {
  isDark: boolean;
  forwardedRef: RefCallback<HTMLElement>;
}
