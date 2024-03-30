import {FormEvent, useState} from "react";

export const SignupForm = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [phone, setPhone] = useState("")

    const handleClearClick = () => {
        setName("")
        setAge("")
        setAddress("")
        setZipcode("")
        setPhone("")
    }

    const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        console.log("submit" , {
            name, age, address, zipcode, phone
        })
    }
    return (
        <>
            <form onSubmit={(evt) => handleSubmitForm(evt)}>
                <label htmlFor="">
                    Name
                    <input required type="text" value={name} onChange={(evt) => setName(evt.target.value)}/>
                </label>
                <br/>
                <label htmlFor="">
                    Age
                    <input required type="text" value={age} onChange={(evt) => setAge(evt.target.value)}/>
                </label>
                <br/>

                <label htmlFor="">
                    Address
                    <input required type="text" value={address} onChange={(evt) => setAddress(evt.target.value)}/>
                </label>
                <br/>

                <label htmlFor="">
                    Zipcode
                    <input required type="text" value={zipcode} onChange={(evt) => setZipcode(evt.target.value)}/>
                </label>
                <br/>

                <label htmlFor="">
                    Phone
                    <input required type="text" value={phone} onChange={(evt) => setPhone(evt.target.value)}/>
                </label>
                <br/>
                <button type={"button"} onClick={handleClearClick}>Clear</button>
                <button type={"submit"}>Submit</button>
            </form>
        </>
    )
}