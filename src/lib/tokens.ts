/**
 * Imera Design System Tokens
 *
 * These are the source-of-truth values. The CSS custom properties
 * in index.css are derived from these. Use Tailwind classes in
 * components — reference this file for documentation only.
 */

export const colors = {
  // Primary
  burntPapaya: '#FA7D3D',     // Primary brand, CTAs, accents
  mintEnergy: '#C5E0C1',      // Success states, positive feedback
  duskBlue: '#CCDCF6',        // Secondary accents, info states
  echoYellow: '#FFE089',      // Highlights, warnings

  // Neutrals
  canvasWhite: '#FFFFFF',     // Backgrounds, cards
  storytellerSand: '#FFF7F3', // Warm background, right panel
  wisdomGrey: '#74747A',      // Secondary text, labels
  midnightBlack: '#0D0D19',  // Primary text, headings

  // Extended
  grey100: '#F5F5F5',
  grey200: '#E5E5E5',
  grey300: '#D4D4D4',
  grey400: '#A3A3A3',
  grey500: '#737373',
} as const

export const typography = {
  heading: {
    fontFamily: '"DM Sans", sans-serif',
  },
  body: {
    fontFamily: '"Poppins", sans-serif',
  },
} as const

export const layout = {
  splitScreen: {
    leftWidth: '55%',
    rightWidth: '45%',
  },
  card: {
    maxWidth: '480px',
    padding: '40px',
    borderRadius: '16px',
  },
  input: {
    height: '48px',
    borderRadius: '8px',
    fontSize: '14px',
  },
  button: {
    height: '48px',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: 600,
  },
} as const
