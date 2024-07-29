import * as yup from 'yup';
export const schema = yup.object({
  // username: yup
  //   .string()
  //   .required('Username is required')
  //   .min(5, 'Length from 5-160 characters')
  //   .max(160, 'Length from 5-160 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address')
    .min(5, 'Length from 5-160  characters')
    .max(160, 'Length from 5-160  characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Length from 6-160 characters')
    .max(160, 'Length from 6-160 characters'),
  confirmPassword: yup
    .string()
    .required('Password is required')
    .min(6, 'Length from 6-160 characters')
    .max(160, 'Length from 6-160 characters')
    .oneOf([yup.ref('password')], 'Password does not match'),
  termAndCondition: yup
    .boolean()
    .oneOf([true], 'You must accept the term and condition'),
});
export type FormSignUpData = yup.InferType<typeof schema>;
export type FormLoginData = Pick<FormSignUpData, 'email' | 'password'>;
