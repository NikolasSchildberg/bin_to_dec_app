import { ConversionForm } from "./ConversionForm";

export function App(){
  return(
    <div className="flex flex-col items-center pt-28">
      <h1 className="text-3xl text-center">Binary to Decimal converter <br></br>(and vice-versa)</h1>
      <ConversionForm/>
    </div>
  )
}