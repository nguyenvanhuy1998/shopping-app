import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export function isFirebaseError(
  error: unknown,
): error is FirebaseAuthTypes.NativeFirebaseAuthError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    typeof (error as any).code === 'string'
  );
}
export function getFirebaseErrorMessage(
  error: FirebaseAuthTypes.NativeFirebaseAuthError,
): string {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'The email address is already in use by another account.';
    case 'auth/invalid-email':
      return 'The email address is not valid.';
    case 'auth/operation-not-allowed':
      return 'Email/password accounts are not enabled.';
    case 'auth/weak-password':
      return 'The password is too weak.';
    case 'auth/invalid-credential':
      return 'The supplied auth credential is incorrect, malformed or has expired.';
    default:
      return 'An unknown error occurred. Please try again.';
  }
}
