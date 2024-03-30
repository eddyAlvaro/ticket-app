import {EventItem} from "./components/EventItem";
import eventsJSON from "../../data/events.json"
import {useState} from "react";

interface Props {
    searchTerm: string
}

export const Events = ({searchTerm}: Props) => {
    const [data] = useState(eventsJSON)
    const {_embedded: {events}} = data

    const handleEventItemClick = (id: string) => {
        console.log("Event select: " + id)
    }

    const eventsItem = (eventsFiltered: typeof events) => {
        return eventsFiltered.map((item, index) => (
            <EventItem
                key={index}
                name={item.name}
                info={item.info}
                image={item.images[0].url}
                onEventClick={handleEventItemClick}
                id={item.id}
            />
        ))
    }

    const renderEvents = () => {
        let eventsFiltered = events

        if (searchTerm.length > 0) {
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLowerCase().includes(searchTerm))
        }
        return eventsItem(eventsFiltered)
    }
    return (
        <>
            <div className={"w-full"}>
                Events
                {renderEvents()}
            </div>
        </>
    )
}