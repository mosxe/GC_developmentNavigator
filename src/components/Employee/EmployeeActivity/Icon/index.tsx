import { FunctionComponent } from "react";
import icons from "./icons";

export type IconProps = keyof typeof icons;

type Props = {
  iconName: IconProps;
};

const Icon: FunctionComponent<Props> = ({ iconName }) => {
  const IconComponent = icons[iconName];

  return <IconComponent />;
};

export default Icon;
