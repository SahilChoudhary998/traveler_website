import React from 'react';
import "./Footer.css";
import {MDBBtn, MDBIcon} from 'mdb-react-ui-kit';

const Footer =() => {
  return (
    <div className='footer'>
      <div className='row'>
      {/* {columns 1} */}
      <div className='col'>
      <h4 className='title'><font face="Times New Roman" color="antiquewhite" font-weight= "bold"> Group 3  Contact Us: </font></h4>
      <ul className='list'>
        <li><a className='information' color = 'white' href="mailto:www.linkedin.com/in/sahilchoudhary998">Sahil Choudhary</a></li>
        <li><a className='information' color = 'white' href="mailto:yuxuanchen7@gmail.com">Yuxuan Chen</a></li>
      </ul>
      </div>
      {/* {columns 2} */}
      <div className='col'>
      <h4 className='title'><font face="Times New Roman" color="antiquewhite"> Information </font></h4>
        <ul className='list'>
          <li className='information'>The website is about finding art events that you are interested in New York.</li>
        </ul>
      </div>
      {/* {columns 3} */}
      <div className='col'>
      <h4 className='title'><font face="Times New Roman" color="antiquewhite"> Resource </font></h4>
        <ul className='list'>
          <li className='information' ><a href="https://www.eventbrite.com/" color='white'>Eventbrite</a></li>
          <li className='information' ><a href="https://seatgeek.com/" color='white'>SeekGeek</a></li>
          <li className='information' ><a href="https://www.meetup.com/" color='white'>MeetUp</a></li>
        </ul>
      </div>
      {/* {columns 4} */}
      <div className='col'>
        <buttonicon className = 'buttonss'>
        <h4 className='title'><font face="Times New Roman" color="antiquewhite"> Links about Website </font></h4>
          <MDBBtn className='' href='https://github.com/KatyaSr/Capstone-Frontend'>
            <MDBIcon fab icon='GitHub' /> GitHub
          </MDBBtn>
          <MDBBtn style={{ backgroundColor: '#9370DB', color:'ffffff' }} href='https://discord.gg/8Qp84P8E'>
            <MDBIcon fab icon='Discord' /> Discord
          </MDBBtn>
        </buttonicon>
      </div>
      </div>
    </div>
  )
}

export default Footer;