// TODO: Add theme
const colorsLight = {
  background: "#FFEA94",
  foreground: "#807755",
  primary: "#adf",
  secondary: "#ff8caf"
}
  
const Theme = {
  // standardizations
  standard: {
    // to make UI seamless, 'unit' is the base unit for sizing and spacing
    unit: "1em",

    // media queries are calculated by screen width
    media: {
      tablet: '1000px',
      mobile: '700px'
    }
  },
  color: colorsLight,
  font: {
    size: {
      titleDesktop: "4em",
      paragraphDesktop: "1em",
      titleMobile: "2em",
      paragraphMobile: "0.75em"
    }
  }
}

export default Theme