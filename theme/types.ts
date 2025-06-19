// theme/types.ts
export interface AppTheme {
  mode: 'light' | 'dark';
  colors: {
    background: string;
    card: string;
    textPrimary: string;
    textSecondary: string;
    accent: string;
    border: string;
  };
  fontFamily: {
    regular: string;
    medium: string;
    semiBold: string;
    bold: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  borderRadius: number;
}