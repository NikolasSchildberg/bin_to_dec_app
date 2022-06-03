// import axios from "axios";
import { ArrowArcRight, ArrowRight, ArrowsHorizontal } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { NumEntry } from "./NumEntry";
import { SubmitButton } from "./SubmitButton";
import { bin_to_dec, dec_to_bin } from "../Tools/converters.js";


export function ConversionForm(){
    const [binField, setBinField] = useState('');
    const [decField, setDecField] = useState('');

    function handleChangeBinField(event: ChangeEvent<HTMLInputElement>){
        setBinField(event.target.value);
    }

    function handleChangeDecField(event: ChangeEvent<HTMLInputElement>){
        setDecField(event.target.value);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>, arrowDir: string){
        event.preventDefault();
        if (arrowDir == "R"){
            setDecField(bin_to_dec(binField));
        }
        else {
            setBinField(dec_to_bin(decField));
        }

        
    }

    type Decimal = {
        value: string
    }

    type GetDecimalResponse = {
        data: Decimal;
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
                        placeholder={'101010'}
                    />
                    <div className="flex flex-col mt-6">
                        <SubmitButton
                            handleSubmitInner={(event)=>handleSubmit(event,"R")}
                            arrow='R'
                            />
                        <SubmitButton
                            handleSubmitInner={(event)=>handleSubmit(event,"L")}
                            arrow='L'
                            />
                    </div>
                    <NumEntry
                        fieldName="Decimal"
                        displayThis={decField}
                        onChange={(event) => handleChangeDecField(event)}
                        placeholder={'42'}
                    />
                </div>                            
            </form>
        </div>
    )
}