import { CustomError, ErrorType } from "../CustomError";

export class GenericError extends CustomError {
  static type = "GenericError" as ErrorType;
}
