import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import Trygooglemaps from "../../components/Maps/Trygooglemaps";

const DetailPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});

    useEffect(()=>{
        fetch("/events/"+id)
        .then((response) => response.json())
        .then((resp) => {
            setData(resp)
            console.log(data)
        });
      }, [])

  return (
    <div className="event-detail-wrapper">
        <div className="event-name">
            <h1>
                {data?.event?.event}
            </h1>
        </div>
        <div className="event-detail-img-wrapper">
            <img src={data?.event?.img_url} />
        </div>
        <div className="event-venue-time">
            <h2>
              This event will occur at  {data?.event?.venue} on {data?.event?.date} 
            </h2>
            <h5>Location: {data?.event?.street_address}, {data?.event?.city}, {data?.event?.state}</h5>
            <h6>Details: {data?.event?.web_url}</h6>
            <p>
                {data?.event?.description}
            </p>

            <h2>Recommendations</h2>
            {data && data?.events?.map((event, index) => {
          return <div className="event" key={index}>
            <Link to={'/event/' + event?.event_id} target={"_blank"}>{event?.img_link && <img src={event?.img_link} alt="event img" />}
            <div className="event-details">
              <h2>{event?.event}</h2>
              <strong>{event?.venue}</strong>
              <p>{event?.date}</p>
            </div>
            </Link>
          </div>
       })}
        </div>
        <Trygooglemaps/>
    </div>
  )
}

export default DetailPage