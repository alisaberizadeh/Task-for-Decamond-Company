import React from 'react';
import styles from './input.module.scss';
import { InputProps } from '@/lib/types';



function Input({ name, placeholder, register , style }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.input}
      style={style}
      {...register(name, {
        required: "Mobile number must not be empty...",
        pattern: {
          value: /^09(1[0-9]|3[0-9])\d{7}$/,
          message:"Mobile number is not valid. Only (091,092,093)",
        },
      })}
    />
  );
}


export default Input;
