import {useEventsData} from "../../hooks/useEventsData.ts";
import {EventItem} from "./components/EventItem";

interface Props {
    searchTerm: string
}

export const Events = ({searchTerm}: Props) => {
    const {events, isLoading, error} = useEventsData()

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

    if (error) {
        return <span>Ups ocurrió un error</span>
    }
    if (isLoading) {
        return <span>El contenido esta cargando</span>
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
            <section className={"flex flex-col gap-4 w-full"}>
                <h3 className={"text-center text-[24px] text-slate-500"}>Events</h3>
                <section className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-4"}>
                    {renderEvents()}
                </section>
            </section>
        </>
    )
}