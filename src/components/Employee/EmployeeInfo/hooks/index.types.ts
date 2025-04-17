import { Response } from "api/index.types";

export interface EmployeeInfo {
  fullname: string;
  position: string;
  avatar: string;
}

export type ResponseEmployeeInfo = Response<EmployeeInfo>;
