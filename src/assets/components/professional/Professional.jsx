import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import CircularProgressBar from '../circularProgressBar/CircularProgressBar'
import './Professional.css'
import { GiThink, GiSatelliteCommunication } from "react-icons/gi"
import { IoIosTime } from "react-icons/io"
import { BsFillPeopleFill } from "react-icons/bs"
import { VscCommentUnresolved } from "react-icons/vsc"

const Professional = () => {

  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true, 
  });

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div ref={ref} className='professional'>
      <div className="single-circle">
        <h4><VscCommentUnresolved /> Problem Solving</h4>
          <CircularProgressBar
            progress={hasAnimated ? 65 : 0}
            size={150}
            strokeWidth={15}
          />
      </div>
      <div className="single-circle">
        <h4><GiSatelliteCommunication /> Communication</h4>
          <CircularProgressBar
            progress={hasAnimated ? 78 : 0}
            size={150}
            strokeWidth={15}
          />
      </div>
      <div className="single-circle">
        <h4><BsFillPeopleFill /> Teamwork</h4>
          <CircularProgressBar
            progress={hasAnimated ? 80 : 0}
            size={150}
            strokeWidth={15}
          />
      </div>
      <div className="single-circle">
        <h4><IoIosTime /> Time Management</h4>
          <CircularProgressBar
            progress={hasAnimated ? 66 : 0}
            size={150}
            strokeWidth={15}
          />
      </div>
      <div className="single-circle">
        <h4><GiThink /> Critical Thinking</h4>
          <CircularProgressBar
            progress={hasAnimated ? 58 : 0}
            size={150}
            strokeWidth={15}
          />
      </div>
     
    </div>
  )
}

export default Professional
