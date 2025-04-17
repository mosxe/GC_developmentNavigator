export interface Response<T> {
  data: T;
  error: boolean;
  errorText: string;
}
