// Define the User type
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

// Define the JWT payload type
export interface JwtPayload {
  userId: string;
  iat?: number; // issued at
  exp?: number; // expiration
}

// Define the Service type
export interface Service {
  id: string; // Unique identifier for the service
  title: string; // Title of the service
  description: string; // Description of the service
  createdAt: Date; // Date when the service was created
  updatedAt?: Date; // Date when the service was last updated
}

// Define the Client type (if applicable)
export interface Client {
  id: string; // Unique identifier for the client
  name: string; // Name of the client
  industry: string; // Industry the client operates in
  servicesProvided: Service[]; // List of services provided to the client
}

// Define any other types you need
// ... existing code ... 
