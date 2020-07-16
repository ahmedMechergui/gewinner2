export interface AuthResponse {
  client: {
    id: string,
    name: string,
    clientID: string,
    email: string,
    phone: string,
    country: string,
    createdAt: Date,
    updatedAt: Date
  };
  token: string;

}
