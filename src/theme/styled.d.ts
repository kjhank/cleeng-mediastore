import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      accent: string;
      main: string;
      sub: string;
    }
    fonts: {
      heading: string;
      text: string;
    }
    getColor(color: 'sub' | 'main' | 'accent' | undefined): string;
    getFont(family: 'heading' | 'text' | undefined): string;
    getTransitions(properties: string[] | string, duration?: 'fast' | 'default' | 'slow' | undefined): string;
    transitions: {
      fast: string;
      default: string;
      slow: string;
    }
  }
}
