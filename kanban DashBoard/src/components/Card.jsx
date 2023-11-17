import React from 'react';
import './Card.css';
import { HiExclamationCircle } from "react-icons/hi";

const Card = ({id, title, tag, status}) => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://i0.wp.com/bane-tech.com/wp-content/uploads/2015/10/H.png?fit=3840%2C1725" alt="UserImage" />
                <div className="showStatus"></div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 200}} >
            <p>{title}</p>
        </div>
        <div className="cardTags">
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey"> <span> <HiExclamationCircle /> </span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;