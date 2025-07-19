export const palette = {
  primary: '#673AB7', // Deep Purple
  accent: '#6F00FF',  // Electric Indigo
  base: '#212121',
  surface: '#2B2B2B',
  deep: '#121212',
  text: '#FFFFFF',
  textMuted: '#B5B5B5',
  border: '#3A3A3A',
  focus: '#6F00FF',
  success: '#4CAF50',
  warn: '#FFC107',
  danger: '#EF5350'
};

export const radius = { 
  sm: '4px', 
  md: '8px', 
  lg: '16px', 
  xl: '24px', 
  pill: '999px' 
};

export const spacing = (n: number) => `${n * 0.5}rem`; // 8pt -> 4px units via 0.5rem base

export const motion = { 
  fast: 0.15, 
  base: 0.22, 
  slow: 0.4, 
  spring: { 
    type: 'spring', 
    stiffness: 210, 
    damping: 26 
  } 
}; 