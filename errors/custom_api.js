
class CustomeAPIError extends Error {
  constructor(message) {
    super(message);
    // this.statusCode = StatusCodes.BAD_REQUEST
  }
}

export default CustomeAPIError