import React from 'react'
import styles from "./Button.module.scss"
import { TButtonProps } from '@/lib/types';


function Button({ title, ...rest }: TButtonProps) {
  return (
    <button className={styles.btn} {...rest}>
      {title}
    </button>
  );
}

export default Button;
