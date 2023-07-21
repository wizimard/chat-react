import { FC, HTMLAttributes, SVGProps } from "react"
import styles from './styles.module.scss';

type Props = HTMLAttributes<HTMLButtonElement> & {
  Icon: FC<SVGProps<SVGSVGElement>>;
  type?: 'submit' | 'reset' | 'button' | undefined;
};

const ButtonIcon = ({ Icon, className, type, ...props }: Props) => {

  return (
    <button
      className={`${className} ${styles.btn}`}
      type={type ?? 'button'}
      {...props}
    >
      <Icon />
    </button>
  )
}

export default ButtonIcon