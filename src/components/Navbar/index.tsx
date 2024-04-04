import {ChangeEvent, ForwardedRef, forwardRef, KeyboardEvent, useImperativeHandle, useState} from "react";
import {Keys} from "./EnumKey.ts";

interface Props {
    onSearch: (term: string) => void
}

export const Navbar = forwardRef(({onSearch}: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const [search, setSearch] = useState("");
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    //CON ESTE METIDO PODEMOS EXPONER VALORES, METODOS, FUNCIONES  DIRECTAMENTE AL PADRE
    // useImperativeHandle(
    //     ref,() => ({
    //         search
    //     }))


    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === Keys.ENTER) {
            console.log(search)
            onSearch(search)
        }
    }
    console.log(ref)
    return (
        <>
            <section ref={ref}>
                <p>My Market</p>
                <input
                    placeholder={"search favorite event"}
                    onChange={(evt) => handleInputChange(evt)}
                    onKeyDown={(evt) => handleInputKeyDown(evt)}
                    value={search}
                />
            </section>
        </>
    )
})

// Navbar.displayName = "Navbar"