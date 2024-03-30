import {ChangeEvent, KeyboardEvent, useState} from "react";
import {Keys} from "./EnumKey.ts";

interface Props {
    onSearch: (term: string) => void
}

export const Navbar = ({onSearch}: Props) => {
    const [search, setSearch] = useState("");
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === Keys.ENTER) {
            console.log(search)
            onSearch(search)
        }
    }

    return (
        <>
            <p>My Market</p>
            <input
                placeholder={"search favorite event"}
                onChange={(evt) => handleInputChange(evt)}
                onKeyDown={(evt) => handleInputKeyDown(evt)}
                value={search}
            />
        </>
    )
}

