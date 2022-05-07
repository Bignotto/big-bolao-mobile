import "styled-components";
import DarkTheme from "./DarkTheme";

declare module "styled-components" {
  type ThemeType = typeof DarkTheme;
  export interface DefaultTheme extends ThemeType {}
}
