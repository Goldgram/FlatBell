export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  managerId?: number;
  photo?: string;
}

export interface UserWithChildren extends User {
  children: UserWithChildren[];
}
