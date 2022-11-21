const breakpoints = {
  sm: "400px",
  m: "767px",
  lg: "1024px",
};

const colors = {
  black: "#333333",
  blue: "#4250e4",
  purple: "#4329a6",
  ivory: "#f2f1e8",
  orange: "#ff6a2c",
};

const lighten = {
  blackL: "#6c7278",
  blueL: "#8e96ef",
  purpleL: "#846ddb",
  ivoryL: "#f7f7f1",
  orangeL: "#ffa680",
};

const { black, blue, purple, ivory, orange } = colors;
const { blackL, blueL, purpleL, ivoryL, orangeL } = lighten;

const darkBase = {
  c1: black,
  c2: blue,
  c3: purple,
  c4: ivory,
  c5: orange,
};

const darkLighten = {
  "c1-l": blackL,
  "c2-l": blueL,
  "c3-l": purpleL,
  "c4-l": ivoryL,
  "c5-l": orangeL,
};

const lightBase = {
  c1: ivory,
  c2: orange,
  c3: blue,
  c4: black,
  c5: purple,
};

const lightLighten = {
  "c1-l": ivoryL,
  "c2-l": orangeL,
  "c3-l": blueL,
  "c4-l": blackL,
  "c5-l": purpleL,
};

const dark = { ...darkBase, ...darkLighten };
const light = { ...lightBase, ...lightLighten };

module.exports = { dark, light, breakpoints };
