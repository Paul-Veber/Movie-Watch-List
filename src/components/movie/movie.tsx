
import { FunctionComponent } from "react"


export const MovieElement: FunctionComponent = ( props:any ) =>
  {
    console.log(props)
  return (
    <div className="list"  id={props.id}>
      <input type="text" value={props.name} />
      <input type="text" value={props.realisator} />
      <input type="text" value={props.type} />
      <input
        type="text"
        value={`${props.durationHour}h${props.durationMinute}`}
      />
      <input type="text" value={props.release} />
      <button onClick={(e) => props.removeMovie(props.id)}>X</button>
      <button onClick={(e) => props.viewedMovie(props.id)}>V</button>
    </div>
  )
}
