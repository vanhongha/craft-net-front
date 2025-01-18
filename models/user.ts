export interface IUser {
  id?: number;
  lastName?: string;
  firstName?: string;
  dateOfBirth?: string;
  email?: string;
  phoneNumber?: string;
  avatarUrl?: string;
  coverUrl?: string;
  bio?: string;
  status?: string;
}
export class User implements IUser {
  id: number | undefined;
  lastName: string | undefined;
  firstName: string | undefined;
  dateOfBirth: string | undefined;
  email: string | undefined;
  phoneNumber: string | undefined;
  avatarUrl: string | undefined;
  coverUrl: string | undefined;
  bio: string | undefined;
  status: string | undefined;

  constructor(user: {
    id?: number;
    lastName?: string;
    firstName?: string;
    dateOfBirth?: string;
    email?: string;
    phoneNumber?: string;
    avatarUrl?: string;
    coverUrl?: string;
    bio?: string;
    status?: string;
  }) {
    this.id = user.id;
    this.lastName = user.lastName;
    this.firstName = user.firstName;
    this.dateOfBirth = user.dateOfBirth;
    this.email = user.email;
    this.phoneNumber = user.phoneNumber;
    this.avatarUrl = user.avatarUrl;
    this.coverUrl = user.coverUrl;
    this.bio = user.bio;
    this.status = user.status;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}
