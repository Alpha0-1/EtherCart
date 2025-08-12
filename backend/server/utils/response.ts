export class ApiResponse<T = any> {
  constructor(
    public success: boolean,
    public data: T,
    public message?: string
  ) {}

  static success<T>(data: T, message = 'Success') {
    return new ApiResponse(true, data, message);
  }

  static error(message: string, data?: any) {
    return new ApiResponse(false, data, message);
  }
}
