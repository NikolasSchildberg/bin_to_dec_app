interface NumEntryProps{
    displayThis: string;
    fieldName: string;
}

export function NumEntry({displayThis, fieldName}: NumEntryProps){
    return (
        <div className="m-10 flex flex-col items-center">
            <h1 className="font-bold text-2xl">{fieldName}</h1>
            <input className="m-4 w-auto h-10 text-center text-gray-700" placeholder={displayThis}></input>
        </div>
    )
}