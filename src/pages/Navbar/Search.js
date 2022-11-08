import React, { useState, useEffect } from "react";
import {Link, Route} from "react-router-dom";
import {useNavigate} from "react-router-dom";
// import TextField from '@mui/material/TextField';
function Search() {
    let navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [unfilteredEvents, setUnfilteredEvents] = useState("");
    const [filteredEvents, setFilteredEvents] = useState("")

    useEffect(()=>{
        fetch("/events") // it returns a promise
        .then((response) => response.json())
        .then(data => setUnfilteredEvents(data?.events))
        // console.log(unfilteredEvents)
    }, [search])

    const handleSearch = () => {
        const results = unfilteredEvents.length>0 && unfilteredEvents?.filter(event => {
            return event?.date?.toLowerCase().includes(search.toLowerCase());
        }).slice(0, 10)
        setFilteredEvents(results);
        console.log(filteredEvents.length>0 && filteredEvents, "filtered result");
    }

    return (
        <div className='searchcontainer'>
        <div className="columnContainer"> 
            <div className='form-container'>
            <input
                placeholder="Enter value"
                required
                name="email"
                value={search}
                onChange={e => setSearch(e.target.value)}
                minLength="3"
                maxLength="30"
            />
              <button onClick = {(e) =>{handleSearch(e)}} className="btn btn-search">
                Search
            </button>
            </div>

            {
                filteredEvents.length > 0 && filteredEvents.map((event, index) => {
                    return <div className="event" key={index}>
                      <Link to={'/event/' + event.eveny_id}>{event?.img_url && <img src={event?.img_url} alt="event img" />}
                      <div className="event-details">
                        <h2>{event?.event}</h2>
                        <strong>{event?.venue}</strong>
                        <p>{event?.date}</p>
                      </div>
                      </Link>
                    </div>
                })
            }

           
        </div>
       
        </div>
    );
}

export default Search;