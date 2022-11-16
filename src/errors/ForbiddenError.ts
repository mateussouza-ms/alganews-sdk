import { CustomError, ErrorType } from "../CustomError";

export class ForbiddenError extends CustomError {
  static type = "ForbiddenError" as ErrorType;
}
