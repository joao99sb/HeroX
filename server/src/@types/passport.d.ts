declare namespace Express {
  interface User {
    ngoId: string;
  }

  export interface Request {
    user?: User;
  }
}
