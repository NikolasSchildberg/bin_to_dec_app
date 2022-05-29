interface NumEntryProps{
    displayThis: string;
    fieldName: string;
    onChange: (event: any) => void;
}

export function NumEntry({displayThis, fieldName, onChange}: NumEntryProps){
    return (
        <div className="m-10 flex flex-col items-center">
            <h1 className="font-bold text-2xl">{fieldName}</h1>
            <input
                className="m-4 w-auto h-10 text-center text-gray-700"
                value={displayThis}
                onChange={(event)=> onChange(event)}
            ></input>
        </div>
    )
}