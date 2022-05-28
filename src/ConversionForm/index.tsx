import { ArrowsHorizontal } from "phosphor-react";
import { NumEntry } from "./NumEntry";
import { SubmitButton } from "./SubmitButton";

export function ConversionForm(){
    
    return (
        <div>
            <form 
                className="flex flex-col items-center"
                action=""
            >
                <div className="flex items-center">
                    <NumEntry displayThis='101010' fieldName="Binary"/>
                    <ArrowsHorizontal size={32} className='mt-5'/>
                    <NumEntry displayThis='42' fieldName="Decimal"/>
                </div>
                <SubmitButton />
            </form>
        </div>
    )
}