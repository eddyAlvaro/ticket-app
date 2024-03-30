import {useState} from "react";


const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrayOfPeople = [
    {
        "id": 1,
        "name": "Eddy",
        "age": 20,
    },
    {
        "id": 2,
        "name": "Alvaro",
        "age": 22,
    },
    {
        "id": 3,
        "name": "Pedro",
        "age": 23,
    },
    {
        "id": 4,
        "name": "Tris",
        "age": 18,
    },
    {
        "id": 5,
        "name": "Ale",
        "age": 21,
    },
    {
        "id": 6,
        "name": "Pablo",
        "age": 32,
    }
]
export const Practice = () => {
    const [value, setValue] = useState(0)

    setTimeout(() => {
        setValue(value + 1)
    }, 2000)

    const numbers = arrayOfNumbers.map(
        (number, index) => (
            <li key={index}>{number}</li>
        )
    )
    const people = arrayOfPeople.map((person, index) => (
        <li key={index}>
            {`${person.id} : ${person.name} : ${person.age}`}
        </li>
    ))

    return (
        <>
            {/*{value < 2 ? <div>Cargando....</div>:<div>*/}
            {/*    <p>Events</p>*/}
            {/*    <input placeholder={"search favorite event"}></input>*/}
            {/*</div>}*/}
            <div>
                <ul>
                    {numbers}
                </ul>
                <ul>
                    {people}
                </ul>
            </div>
        </>
    )
}

