import {Navbar} from "./components/Navbar";
import {Events} from "./components/Events";
import {useRef, useState} from "react";

// import {SignupForm} from "./components/SignupForm";

function App() {
    const [searchTerm, setSearchTerm] = useState("")
    const containerRef = useRef<HTMLDivElement>(null);
    const handleNavbarSearch = (term: string) => {
        // console.log(containerRef.current)
        setSearchTerm(term)
    }
    return (
        <>
            <section className={"m-[0_auto] min-h-screen max-w-[1200px] p-[20px]"}>
                <Navbar onSearch={handleNavbarSearch} ref={containerRef}/>
                <Events searchTerm={searchTerm}/>
                {/*<SignupForm />*/}
            </section>
        </>
    )
}

export default App
