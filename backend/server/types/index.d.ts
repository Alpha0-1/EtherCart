declare global {
  namespace Express {
    interface Request {
      rawBody?: Buffer;
    }
    interface User {
      id: string;
      address: string;
    }
  }
}

export {};
