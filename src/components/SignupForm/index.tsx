import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    name: string,
    age: string,
    address: string,
    zipcode: string,
    phone: string
}
export const SignupForm = () => {
    const {register, handleSubmit, reset, formState : {errors}} = useForm<Inputs>()
    const handleSubmitForm: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }
    const handleClearClick = () => {
        reset()
    }

    console.log(errors.name)
    return (
        <>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <label className={"flex flex-col"} htmlFor="">
                    Name
                    <input className={"border-2 border-slate-300 w-[300px] rounded-md p-1"} {...register("name", {required: true})} />
                    {errors.name && <span className={"text-red-600"}>This field is required</span>}
                </label>
                <br/>
                <label htmlFor="">
                    Age
                    <input {...register("age", {required: true})}/>
                </label>
                <br/>

                <label htmlFor="">
                    Address
                    <input {...register("address", {required: true})}/>
                </label>
                <br/>

                <label htmlFor="">
                    Zipcode
                    <input {...register("zipcode", {required: true})}/>
                </label>
                <br/>

                <label htmlFor="">
                    Phone
                    <input {...register("phone", {required: true})}/>
                </label>
                <br/>
                <button type={"button"} onClick={handleClearClick}>Clear</button>
                <button type={"submit"}>Submit</button>
            </form>
        </>
    )
}