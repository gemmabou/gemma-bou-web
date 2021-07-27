export type GenericSize = "small" | "default" | "large";
export type GenericShadowType = "none" | "soft" | "strong";
export type GenericBackgroundColor =
  | "transparent"
  | "primary1"
  | "primary2"
  | "primary3"
  | "primary4"
  | "primary5";
export type GenericGradient = "none" | "linear" | "radial";
export type GenericFlexDirection = "row" | "column";
export type GenericVerticalAlign = "top" | "center" | "bottom";
export type GenericContentJustification =
  | "start"
  | "end"
  | "center"
  | "space-around"
  | "space-between";
export type GenericPosition = "top" | "left" | "bottom" | "rigth";
export type GenericImageShape =
  | "none"
  | "n"
  | "nw"
  | "ne"
  | "w"
  | "e"
  | "s"
  | "sw"
  | "se"
  | "nwse"
  | "nesw";
export type GenericImageBorderOffset = "none" | "nw" | "ne" | "sw" | "se";
export type DefaultIcons =
  | "Instagram"
  | "Linkedin"
  | "Mail"
  | "Medium"
  | "Close"
  | "Menu"
  | "Firma"
  | "Github";

export type NavbarItem = {
  displayName: string;
  route: string;
};

export type SkillItem = {
  title: string;
  description: string;
};

export type ToolboxItem = {
  source: string;
  alt: string;
  link?: string;
}

export enum ScreenSize {
  xs = 1,
  sm = 2,
  md = 3,
  lg = 4,
  xl = 5,
}
