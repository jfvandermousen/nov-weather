import React from 'react'
import { useSelector } from 'react-redux'

export default function Test() {
    const {city} = useSelector((state) => state.city );
    return (
        <div>
           <h2> {city.name} </h2>
        </div>
    )
}
