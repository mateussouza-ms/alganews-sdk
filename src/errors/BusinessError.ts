import { CustomError, ErrorType } from "../CustomError";

export class BusinessError extends CustomError {
  static type = "BusinessError" as ErrorType;
}
