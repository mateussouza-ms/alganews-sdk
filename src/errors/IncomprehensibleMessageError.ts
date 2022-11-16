import { CustomError, ErrorType } from "../CustomError";

export class IncomprehensibleMessageError extends CustomError {
  static type = "IncomprehensibleMessageError" as ErrorType;
}
