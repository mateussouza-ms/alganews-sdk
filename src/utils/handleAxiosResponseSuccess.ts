import { AxiosResponse } from "axios";

export function handleAxiosResponseSuccess<T>(response: AxiosResponse<T>) {
  return response;
}
