import { ArrowLeft, ArrowRight } from "phosphor-react";

interface SubmitButtonProps{
  handleSubmitInner: (event: any) => void;
  arrow: string;
}

export function SubmitButton({handleSubmitInner, arrow}: SubmitButtonProps){
  const displayArrow = (arrow == 'L'? 
    <ArrowLeft  size={12}/>: 
    <ArrowRight size={12}/>
  )
  return(
        <div className="items-center">
      <button
        type="button"
        className="m-1 bg-green-800 p-1 px-5 rounded text-green-100 hover:bg-green-700
        hover:border-green-400"
        id = 'SubmitButton'
        onClick={(e) => handleSubmitInner(e)}
      >
        {displayArrow}
        {/* Texto */}
      </button>
    </div>
    )
}