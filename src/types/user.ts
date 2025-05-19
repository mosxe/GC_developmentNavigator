import { IconName } from "@/types";

export interface UserInfo {
  fullname: string;
  position: string;
  avatar: string;
}

export interface UserActivity {
  icon: IconName;
  title: string;
  link: string;
  date: string;
  status: string;
  buttonName: string;
  isAssignable: boolean;
  progress: {
    type: "score" | "progress" | "text";
    score: string;
    maxScore: string;
    text: string;
  };
}
