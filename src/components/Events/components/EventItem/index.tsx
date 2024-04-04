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
        <div className={"flex flex-col justify-between gap-6 w-full items-center bg-white rounded-2xl p-[12px] shadow-xl border-[1px] border-gray-50"}>
            <div className={"flex flex-col gap-2"}>
                <img className={"w-full h-[200px] object-cover rounded-2xl"} src={image} alt={name}/>
                <h4 className={"text-center font-bold text-slate-500 text-[20px]"}>{name}</h4>
                <p className={"text-slate-600 max-h-[200px] line-clamp-5"}>{info === undefined ? ":C" : info}</p>
            </div>
            <button
                className={"w-full bg-slate-700 px-[20px] py-[16px] text-white rounded-xl hover:bg-slate-800"}
                onClick={(evt) => handleSeeMoreClick(evt)}>
                 Details
            </button>
        </div>
    )
}