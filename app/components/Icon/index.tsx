import { IconProps } from "./types";
import { icons } from "./icons";

export default function Icon(props: IconProps) {
  const { fill = "#000000", icon = "", className = "icon", style } = props;

  return (
    <svg viewBox="0 0 32 32" className={className} style={style}>
      {/* @ts-ignore */}
      <path style={{ fill }} d={icons[icon]} />
    </svg>
  );
}
