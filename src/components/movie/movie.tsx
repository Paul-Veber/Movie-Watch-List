import React, { FunctionComponent, useState, useEffect } from "react"
import { Movie } from "../../types/types" 

export const list: FunctionComponent = (props: Movie) => {
    
    return(
        <div className="list">
            <input type="text" value={props.name}/>
            <input type="text" value={props.realisator}/>
            <input type="text" value={props.type}/>
            <input type="text" value={`${props.durationHour}h${props.durationMinute}`}/>
            <input type="text" value={props.release}/>
        </div>
    )
} 

export {}