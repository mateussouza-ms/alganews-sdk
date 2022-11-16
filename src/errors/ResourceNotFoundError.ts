import { CustomError, ErrorType } from "../CustomError";

export class ResourceNotFoundError extends CustomError {
  static type = "ResourceNotFoundError" as ErrorType;
}
