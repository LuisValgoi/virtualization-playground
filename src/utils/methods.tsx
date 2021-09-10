import { TOTAL_COMMENTS } from "./constants";
import { IComment } from "./interfaces";

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const showLoading = (index: number, comments: IComment[]) =>
  index === comments.length - 1 && comments.length < TOTAL_COMMENTS;
