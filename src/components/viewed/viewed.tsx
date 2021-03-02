import { FunctionComponent } from "react"


export const ViewedElement: FunctionComponent = ( props:any ) =>
  {
  return (
    <div className="list" key={props.key} id={props.key} >
      <input type="text" value={props.name} disabled/>
      <input type="text" value={props.realisator} disabled/>
      <input type="text" value={props.type} disabled/>
      <input
        type="text"
        value={`${props.durationHour}h${props.durationMinute}`}
        disabled
      />
      <input type="text" value={props.release} disabled/>
    </div>
  )
}