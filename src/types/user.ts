export interface UserInfo {
  fullname: string;
  position: string;
  avatar: string;
}

export interface UserActivity {
  // icon: IconProps;
  icon: string;
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
