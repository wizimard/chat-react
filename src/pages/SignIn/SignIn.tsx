import { AuthForm, InputPassword, userActions, userSelectors } from '@/modules/auth';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button, InputForm } from '@/ui';
import styles from '@/modules/auth/styles/AuthStyles.module.scss';
import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email address')
    .required('Please, enter your email')
    .max(255, 'The maximum length of an email is 255 characters'),
  password: yup
    .string()
    .required('Please, enter your password')
    .min(8, 'The minimum length of an password is 8 character')
    .max(255, 'The maximum length of an password is 255 characters')
    .matches(/[a-zA-Z0-9]/, 'Password should includes character a-z and numbers 0-9'),
});

type FormType = {
  email: string;
  password: string;
};

const SignIn = () => {

  const dispatch = useAppDispatch();

  const { isLoading, error, user } = useSelector(userSelectors.useState);

  const { control, handleSubmit, formState: { isValid}, reset } = useForm<FormType>({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const handleSumbitForm = (data: FormType) => {
    dispatch(userActions.signIn(data));
  }

  useEffect(() => {
    reset({}, { keepValues: true });
  }, [error]);


  return (
    <>
    {user && (
      <Navigate to='/' />
    )}
    <AuthForm
      onSubmit={handleSubmit(handleSumbitForm)}
    >
      <h1>Sign In</h1>
      <div className={styles.input_group}>
        <InputForm
          control={control}
          name='email'
          type='email'
          placeholder='Enter your e-mail'
        />
        <InputPassword
          control={control}
          name='password'
          placeholder='Enter your password'
        />
      </div>
      <div
        className={styles.bottom}
      >
        {error && (
          <span className={styles.error}>{ error }</span>
        )}
        <Button
          text='Sign In'
          type='submit'
          disabled={!isValid}
          isLoading={isLoading}
        />
        <span>
          Don't have an account? <Link to='/signup'>sign up</Link>
        </span>
      </div>
    </AuthForm>
    </>
  )
}

export default SignIn;