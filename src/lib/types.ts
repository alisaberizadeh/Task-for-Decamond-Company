export interface IUser {
  name: string,
  email:string,
  gender:string,
  image:string,
  location:string,
  mobile:string,
};
export interface IForm {
    mobile: string
};
export type TButtonProps = {
  title: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>;  
export interface InputProps  {
  name: string;
  placeholder: string;
  register: any;
  style ?: any
};