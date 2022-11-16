import { CustomError, ErrorType } from "../CustomError";

export class SystemError extends CustomError {
  static type = "SystemError" as ErrorType;
}
