import { Response } from "api/index.types";

export interface Recommendation {
  id: string;
  title: string;
  text: string;
  image: string;
  link: string;
}

export type ResponseRecommendations = Response<Recommendation[]>;
