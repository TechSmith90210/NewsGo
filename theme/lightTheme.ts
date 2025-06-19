import { AppTheme } from './types';

const lightTheme: AppTheme = {
  mode: 'light',
  colors: {
    background: '#FAFAFA',       // Soft white background
    card: '#FFFFFF',             // Pure white for cards to pop
    textPrimary: '#1A1A1A',      // Near-black text for readability
    textSecondary: '#555555',
    accent: '#F85F6A',           // Highlight color (same)
    border: '#E0E0E0',           // Light gray border
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

export default lightTheme;