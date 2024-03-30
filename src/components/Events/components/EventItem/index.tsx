import {MouseEvent} from 'react';

interface Props {
    info: string | undefined;
    name: string;
    image: string;
    id: string;
    onEventClick: (id: string) => void
}

export const EventItem = ({info, id, name, image, onEventClick}: Props) => {

    const handleSeeMoreClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onEventClick(id)
    }
    return (
        <div className={"flex flex-col w-full items-center my-[32px]"}>
            <img className={"w-[200px]"} src={image} alt={name}/>
            <h4>{name}</h4>
            <p>{info === undefined ? ":C" : info}</p>
            <button
                className={"w-[220px] bg-slate-700 m-[20px] px-[20px] py-[12px] text-white rounded-xl hover:bg-slate-500"}
                onClick={(evt) => handleSeeMoreClick(evt)}>
                See details
            </button>
        </div>
    )
}