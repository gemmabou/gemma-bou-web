import { ScreenSize } from "@/types";

const BREAKPOINTS = {
  XS: 768,
  SM: 992,
  MD: 1200,
  LG: 1920,
};

export function getScreenSize(width: number) {
  let result: ScreenSize = ScreenSize.xs;
  if (width < BREAKPOINTS.XS) {
    result = ScreenSize.xs;
  } else if (width >= BREAKPOINTS.XS && width < BREAKPOINTS.SM) {
    result = ScreenSize.sm;
  } else if (width >= BREAKPOINTS.SM && width < BREAKPOINTS.MD) {
    result = ScreenSize.md;
  } else if (width >= BREAKPOINTS.MD && width < BREAKPOINTS.LG) {
    result = ScreenSize.lg;
  } else {
    result = ScreenSize.xl;
  }
  return result;
}
