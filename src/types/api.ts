export interface ApiResponse<T> {
  data: T;
  error: boolean;
  errorText: string;
}
