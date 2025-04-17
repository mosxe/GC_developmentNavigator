import { Response } from "api/index.types";

export interface Material {
  title: string;
  link: string;
}

export type ResponseMaterials = Response<Material[]>;
