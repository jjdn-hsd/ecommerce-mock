export interface Profile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferences: {
    notifications: boolean;
    newsletter: boolean;
  };
}