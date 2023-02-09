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
    unit: "16px"
  },
  color: colorsLight,
  font: {
    size: {
      title: "8em",
      paragraph: "1em",
    }
  }
}

export default Theme