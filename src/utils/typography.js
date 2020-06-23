/*import Typography from "typography"
import OceanBeachTheme from 'typography-theme-ocean-beach'

OceanBeachTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete OceanBeach.googleFonts

const typography = new Typography(oceanBeachTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale*/
import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'

const typography = new Typography(oceanBeachTheme)

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale


