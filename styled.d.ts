import "styled-components";
import { StyledThemeType } from "./styles/styledTheme";

declare module "styled-components" {
  export interface DefaultTheme extends StyledThemeType {}
}
