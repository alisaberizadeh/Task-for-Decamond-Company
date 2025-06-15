'use client';

import React, { useContext } from 'react'
import styles from "./auth.module.scss"
import Input from '@/components/input/Input'
import Button from '@/components/button/Button'
import { useForm } from 'react-hook-form';
import { AuthContext } from '@/context/AuthContext';
import { IForm } from '@/lib/types';
 
 


function page() {


    const { register, control, handleSubmit, formState: { errors } } = useForm<IForm>();
    const {login} = useContext(AuthContext)
    

    const onSubmit = (data: IForm) => {
        login(data.mobile)
    };


    return (

        <div className={styles.page}>
            <div className={styles.box}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Sign In</p>
                    <label>Mobile : </label>
                    <Input
                        name="mobile"
                        placeholder="Please enter your mobile number..."
                        register={register}
                        style={errors.mobile ? { border: '1px solid red' } : { border: '1px solid rgb(204, 204, 204)' }}
                    />
                    <span>{errors.mobile?.message}</span>
                    <Button title="Login" />
 
                </form>
            </div>
        </div>

    )
}

export default page