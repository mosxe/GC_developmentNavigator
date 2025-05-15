import { Response } from "api/index.types";

export interface Recommendation {
  id: string;
  title: string;
  text: string;
  image: string;
  link: string;
  link_target: string;
  buttonName: string;
}

export type ResponseRecommendations = Response<Recommendation[]>;
