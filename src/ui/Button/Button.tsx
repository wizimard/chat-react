import { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

type Props = HTMLAttributes<HTMLButtonElement>
  & {
    type?: 'submit' | 'reset' | 'button' | undefined;
    disabled?: boolean;
    isLoading?: boolean;
    text: string;
  };

const Button = ({ type, className, isLoading, text, disabled, ...props }: Props) => {

  return (
    <button
      className={`${className} ${styles.btn}`}
      type={type ?? 'button'}
      disabled={disabled}
      {...props}
    >
      {isLoading ? (
        <></>
      ) : (
        <>{ text }</>
      )}
    </button>
  )
}

export default Button