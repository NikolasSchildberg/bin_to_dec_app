import { FormEvent } from "react"

export function SubmitButton(){
  function handleSubmit(event: FormEvent){
    event.preventDefault();
    alert("Yeah")
  }  
  return(
        <div className="items-center">
      <button
        className="bg-green-800 p-2 rounded text-green-100 hover:bg-green-700
        hover:border-green-400"
        onClick={handleSubmit}
      >
        Convert
      </button>
    </div>
    )
}