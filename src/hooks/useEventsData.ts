import {useEffect, useState} from "react";
import eventsJSON from "../data/events.json";
import {EventData} from "../data/EventsType.ts";

export const useEventsData = () => {
    const [data, setData] = useState<EventData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | undefined>();
    useEffect(() => {
        setTimeout(
            () => {
                try {
                    setData(eventsJSON)
                    setIsLoading(false)
                } catch (e ) {
                    if (e instanceof Error) {
                        setError(e.message);
                    } else {
                        setError(String(e));
                    }
                }
            }, 500
        )
    }, []);
    return {
        events: data?._embedded.events || [],
        isLoading,
        error
    }
}