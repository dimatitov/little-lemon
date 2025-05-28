import classNames from "classnames";
import styles from "./Button.module.scss";

export interface Props {
  value: string;
  onClick: () => void;
  className?: string;
}

export const Button: React.FC<Props> = ({ className, onClick, value }) => {
  return (
    <button className={classNames(styles.root, className)} onClick={onClick}>
      {value}
    </button>
  );
};
