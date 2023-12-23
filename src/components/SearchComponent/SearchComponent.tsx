import {useForm} from "react-hook-form";
import Search from "antd/es/input/Search";
import styles from './Search.module.css'

export const SearchComponent = () => {
    const {reset, register, handleSubmit, formState: {isValid}} = useForm({mode: "onChange"})



    return (
        <form className={styles.wrapper}>
            <Search style={{ width: '20vw'}}
                    placeholder={'Search'}
                    type={'text'}
                    {...register('value', {required: true})}
                    enterButton/>
        </form>
    );
};