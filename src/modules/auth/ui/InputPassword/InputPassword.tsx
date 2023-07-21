import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import styles from './styles.module.scss';
import { HTMLAttributes, HTMLInputTypeAttribute, useState } from 'react';
import { Eye, EyeOff } from '@/icons';
import { ButtonIcon } from '@/ui';

type Props<T extends FieldValues> =
  UseControllerProps<T>
  & HTMLAttributes<HTMLInputElement>

const InputPassword = <T extends FieldValues>({
  control,
  name,
  ...props
}: Props<T>) => {

  const [type, setType] = useState<HTMLInputTypeAttribute>('password');

  const handleShowPassword = () => {
    setType('text');
  }

  const handleHidePassword = () => {
    setType('password');
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState, formState: { isSubmitted } }) => {

        const isError = Boolean(fieldState.isTouched && fieldState.error && field.value);

        const isAccept = Boolean(!fieldState.error && isSubmitted && fieldState.isTouched && field.value);

        return (
          <div className={styles.container}>
            <div className={styles.input_container}>
              <input
                {...props}
                type={type}
                {...field}
                value={field.value ?? ''}
                aria-invalid={!!isError}
                data-accept={isAccept}
              />
              {type === 'password' ? (
                <ButtonIcon
                  className={styles.btn}
                  Icon={EyeOff}
                  onClick={handleShowPassword}
                />
              ) : (
                <ButtonIcon
                  className={styles.btn}
                  Icon={Eye}
                  onClick={handleHidePassword}
                />
              )}
            </div>
            {isError && (
              <span className={styles.error}>
                {fieldState.error.message}
              </span>
            )}
          </div>
        );
      }}
    />
  )
}

export default InputPassword