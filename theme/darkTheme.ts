import { AppTheme } from './types';

const darkTheme: AppTheme = {
  mode: 'dark',
  colors: {
    background: '#121212',
    card: '#1E1E1E',
    textPrimary: '#FFFFFF',
    textSecondary: '#B0B0B0',
    accent: '#F85F6A',
    border: '#2C2C2C',
  },
  fontFamily: {
    regular: 'Sora-Regular',
    medium: 'Sora-Medium',
    semiBold: 'Sora-SemiBold',
    bold: 'Sora-Bold',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: 12,
};

export default darkTheme;