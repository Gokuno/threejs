import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    displayName: "Color",
    icon: swatch,
  },
  {
    name: "filepicker",
    displayName: "Imagen",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    displayName: "IA",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    displayName: "Imagen Centro",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    displayName: "Imagen Completo",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
