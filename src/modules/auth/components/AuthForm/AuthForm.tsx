import { HTMLAttributes, ReactNode } from "react"
import styles from './styles.module.scss';

type Props = HTMLAttributes<HTMLFormElement> & {
  children: ReactNode | ReactNode[];
}

const AuthForm = ({ children, ...props }: Props) => {

  return (
    <div className={styles.page}>
      <form
        className={styles.form}
        {...props}
      >
        { children }
      </form>
    </div>
  )
}

export default AuthForm