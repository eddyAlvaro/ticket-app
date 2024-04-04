import {ChangeEvent, ForwardedRef, forwardRef, KeyboardEvent, useState} from "react";
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
            <nav ref={ref} className={"flex flex-col md:flex-row gap-[8px] mb-4 my-[20px] border-2 border-slate-50 py-[24px] px-[12px] bg-slate-500 rounded-xl sticky top-2"}>
                <div className={"flex justify-center md:justify-start items-center w-full md:w-[50%]"}>
                    <h2 className={"text-[32px] font-[500] text-slate-50"}>My Market</h2>
                </div>
                <div className={"w-full md:w-[50%]"}>
                    <input
                        className={"w-full text-slate-50 placeholder-slate-300 border-[1px] border-slate-400 bg-slate-800 " +
                            "h-[3.25rem] rounded-[4px] px-[1rem] focus:outline-none focus:border-slate-400 focus:bg-slate-700 " +
                            "focus:ring-1 focus:ring-slate-400"}
                        placeholder={"search"}
                        onChange={(evt) => handleInputChange(evt)}
                        onKeyDown={(evt) => handleInputKeyDown(evt)}
                        value={search}
                    />
                </div>
            </nav>
        </>
    )
})

// Navbar.displayName = "Navbar"