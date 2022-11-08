import { useState, useEffect } from "react"
import Events from "../../components/Events/Events";

const Home = () => {
  const [data, setData] = useState({});
  
  useEffect(()=>{
    fetch("/events") // it returns a promise
    .then((response) => response.json())
    .then((resp) => 
    {
      setData(resp)
    }
    )
  }, [])

  return (
    <div>
      <img src="nycimg.jpg" alt="nyc"/>
      <h1>Events for tonight</h1>
      <div className="events-wrapper">
        <Events eventsData={data}/>
       {/* {data && data?.events?.map((event, index) => {
          return <div className="event" key={index}>
            <Link to={'event/' + event.eveny_id}>{event?.img_url && <img src={event?.img_url} alt="event img" />}
            <div className="event-details">
              <h2>{event?.event}</h2>
              <strong>{event?.venue}</strong>
              <p>{event?.date}</p>
            </div>
            </Link>
          </div>
       })} */}
      </div>
    </div>
  )
}

export default Home