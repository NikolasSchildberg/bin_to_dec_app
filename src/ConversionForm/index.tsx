import { ArrowsHorizontal } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import { NumEntry } from "./NumEntry";
import { SubmitButton } from "./SubmitButton";

export function ConversionForm(){
    const [binField, setBinField] = useState('Ex: 101010');
    const [decField, setDecField] = useState('Ex: 42');

    function handleChangeBinField(event: ChangeEvent<HTMLInputElement>){
        setBinField(event.target.value);
    }

    function handleChangeDecField(event: ChangeEvent<HTMLInputElement>){
        setDecField(event.target.value);
    }


    return (
        <div>
            <form 
                className="flex flex-col items-center"
                action=""
            >
                <div className="flex items-center">
                    <NumEntry
                        fieldName="Binary"
                        displayThis={binField}
                        onChange={(event)=> handleChangeBinField(event)}
                    />
                    <ArrowsHorizontal size={32} className='mt-5'/>
                    <NumEntry
                        fieldName="Decimal"
                        displayThis={decField}
                        onChange={(event) => handleChangeDecField(event)}
                    />
                </div>
                <SubmitButton />
            </form>
        </div>
    )
}