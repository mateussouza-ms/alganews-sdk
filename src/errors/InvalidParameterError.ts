import { CustomError, ErrorType } from "../CustomError";

export class InvalidParameterError extends CustomError {
  static type = "InvalidParameterError" as ErrorType;
}
