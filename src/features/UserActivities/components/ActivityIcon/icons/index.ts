import increase from "./increase.svg?r";
import assessment_achievements from "./assessment_achievements.svg?r";
import career from "./career.svg?r";
import ipr from "./ipr.svg?r";
import tech_review from "./tech_review.svg?r";
import { IconName } from "@/types/icon";

const icons: Record<IconName, React.FunctionComponent> = {
  increase,
  assessment_achievements,
  career,
  ipr,
  tech_review,
};

export default icons;
