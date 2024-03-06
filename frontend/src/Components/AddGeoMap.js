import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'


function AddGeoMap() {

    let {name} = useParams()
    const [mapLocation,setLocation]   = useState();
    const history = useHistory();

    useEffect(async()=>{
        await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=${process.env.REACT_APP_GOOGLEAPI}`)
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data)
            //so to get the gemotry location:
            setLocation(data.results[0].geometry.location)    
        }
        )
    },[])


    return (
        <div>
            



        </div>
    )
}

export default AddGeoMap