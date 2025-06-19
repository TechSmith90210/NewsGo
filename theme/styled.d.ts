// theme/styled.d.ts or just styled.d.ts
import 'styled-components';
import { AppTheme } from './types';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}