export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  managerId: number;
  password: string;
  photo: string;
}

export interface UserWithChildren extends User {
  children: UserWithChildren[];
}
