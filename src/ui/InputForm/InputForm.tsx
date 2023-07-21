import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import styles from './styles.module.scss';
import { HTMLAttributes, HTMLInputTypeAttribute } from 'react';

type Props<T extends FieldValues> =
  UseControllerProps<T>
  & HTMLAttributes<HTMLInputElement>
  & {
    type: HTMLInputTypeAttribute;
  }

const InputForm = <T extends FieldValues>({
  control,
  name,
  ...props
}: Props<T>) => {

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState, formState: { isSubmitted } }) => {

        const isError = Boolean(fieldState.isTouched && fieldState.error && field.value);

        const isAccept = Boolean(!fieldState.error && isSubmitted && fieldState.isTouched && field.value);

        return (
          <div className={styles.container}>
            <input
              {...props}
              {...field}
              value={field.value ?? ''}
              aria-invalid={!!isError}
              data-accept={isAccept}
            />
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

export default InputForm