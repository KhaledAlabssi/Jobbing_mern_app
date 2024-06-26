import { StatusCodes } from "http-status-codes";
import CustomeAPIError from "./custom_api.js";
class UnAuthenticatedError extends CustomeAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

export default UnAuthenticatedError;
