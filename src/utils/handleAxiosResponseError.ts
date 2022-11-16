import { AxiosError } from "axios";
import { ErrorData } from "../CustomError";
import {
  BusinessError,
  ERRORS,
  ForbiddenError,
  GenericError,
  IncomprehensibleMessageError,
  InvalidDataError,
  InvalidParameterError,
  ResourceNotFoundError,
  SystemError,
} from "../errors";

export function handleAxiosResponseError(error: AxiosError<ErrorData>) {
  const { response } = error;

  if (response?.data.type) {
    const { type } = response.data;
    const { data } = response;

    switch (type) {
      case ERRORS.FORBIDDEN:
        throw new ForbiddenError(data);

      case ERRORS.BUSINESS_ERROR:
        throw new BusinessError(data);

      case ERRORS.INVALID_DATA:
        throw new InvalidDataError(data);

      case ERRORS.INVALID_PARAMETER:
        throw new InvalidParameterError(data);

      case ERRORS.SYSTEM_ERROR:
        throw new SystemError(data);

      case ERRORS.RESOURCE_NOT_FOUND:
        throw new ResourceNotFoundError(data);

      case ERRORS.INCOMPREHENSIBLE_MESSAGE:
        throw new IncomprehensibleMessageError(data);
    }

    throw new GenericError({
      detail: response?.data.detail || error.message || "Erro desconhecido",
      status: response?.status || 500,
      userMessage:
        response?.data.userMessage ||
        response?.data.detail ||
        "Erro desconhecido",
      timestamp: response?.data.timestamp || "",
      title: response.data.title || "Erro desconhecido",
      type: "GenericError",
    });
  }
}
