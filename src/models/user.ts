export interface User {
  uid?: string;
  displayName?: string | null;
  email?: string | null;
  emailVerified?: boolean;
  photoURL?: string | null;
  creationTime?: string;
  lastSignInTime?: string;
}
