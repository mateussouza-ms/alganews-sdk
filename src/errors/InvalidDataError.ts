import { CustomError, ErrorType } from "../CustomError";

export class InvalidDataError extends CustomError {
  static type = "InvalidDataError" as ErrorType;
}
