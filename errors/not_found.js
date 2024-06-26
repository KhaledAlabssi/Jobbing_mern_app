import { StatusCodes } from "http-status-codes";
import CustomeAPIError from "./custom_api.js";

class NotFoundError extends CustomeAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError