export const ERRORS = {
  FORBIDDEN: "https://api.alganews.com.br/forbidden",
  INVALID_DATA: "https://api.alganews.com.br/invalid-data",
  SYSTEM_ERROR: "https://api.alganews.com.br/system-error",
  INVALID_PARAMETER: "https://api.alganews.com.br/invalid-parameter",
  INCOMPREHENSIBLE_MESSAGE:
    "https://api.alganews.com.br/incomprehensible-message",
  RESOURCE_NOT_FOUND: "https://api.alganews.com.br/resource-not-found",
  BUSINESS_ERROR: "https://api.alganews.com.br/business-error",
};

export { BusinessError } from "./BusinessError";
export { ForbiddenError } from "./ForbiddenError";
export { GenericError } from "./GenericError";
export { IncomprehensibleMessageError } from "./IncomprehensibleMessageError";
export { InvalidDataError } from "./InvalidDataError";
export { InvalidParameterError } from "./InvalidParameterError";
export { ResourceNotFoundError } from "./ResourceNotFoundError";
export { SystemError } from "./SystemError";
