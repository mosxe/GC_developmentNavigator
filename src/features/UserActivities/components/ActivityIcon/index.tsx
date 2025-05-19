import { FunctionComponent } from "react";
import icons from "./icons";
import { IconName } from "@/types/icon";

type Props = {
  iconName: IconName;
};

const Icon: FunctionComponent<Props> = ({ iconName }) => {
  const IconComponent = icons[iconName];

  return <IconComponent />;
};

export default Icon;
