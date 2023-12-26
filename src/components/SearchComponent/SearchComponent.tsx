import {useForm} from "react-hook-form";
import Search from "antd/es/input/Search";

export const SearchComponent = () => {
    const {reset, register, handleSubmit, formState: {isValid}} = useForm({mode: "onChange"})

    return (
        <form>
            <Search style={{width: '20vw'}}
                    placeholder={'Search'}
                    type={'text'}
                    {...register('value', {required: true})}
                    enterButton
            />
        </form>
    );
};