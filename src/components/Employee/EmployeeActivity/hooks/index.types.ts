import { Response } from "api/index.types";
import { IconProps } from "../Icon";

export interface Activity {
  icon: IconProps;
  title: string;
  link: string;
  date: string;
  status: string;
  buttonName: string;
  progress: {
    type: "score" | "progress" | "text";
    score: string;
    maxScore: string;
    text: string;
  };
}

export type ResponseEmployeeActivity = Response<Activity[]>;
