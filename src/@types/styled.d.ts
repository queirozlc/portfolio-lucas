import 'styled-components';
import theme from '@/styles/themes/theme';

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
