import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';


function Events(eventsData) {
    const events = eventsData;
    console.log(events);
//   We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;



  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(events.eventsData.events?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(events.eventsData.events?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, events]);

  
  // Invoke when user click to request another page.
  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % events.eventsData.events?.length;
    console.log(
      `User requested page number ${e.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
        {currentItems && currentItems.map((event, index) => {
                return <div className="event" key={index}>
                  <Link to={'event/' + event.eveny_id}>{event?.img_url && <img src={event?.img_url} alt="event img" />}
                  <div className="event-details">
                    <h2>{event?.event}</h2>
                    <strong>{event?.borough}, {event?.state}</strong>
                    <p>{event?.date}</p>
                  </div>
                  </Link>
                </div>
            })}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  );
}
export default Events;