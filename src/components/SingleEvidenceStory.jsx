import React from 'react'
import propicPlaceHolder from '../assets/propic_placeholder.jpg'
import '../Styles/singleEvidenceStory.css'
const SingleEvidenceStory = () => {
  return (
    <div className='single-evidence-story'>
        <img src={propicPlaceHolder} alt="" />
        <p>Storia in evidenza</p>
    </div>
  )
}

export default SingleEvidenceStory;