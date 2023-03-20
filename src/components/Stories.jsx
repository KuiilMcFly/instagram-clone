import React from 'react';
import '../Styles/stories.css'
import SingleStory from './SingleStory';


const Stories = (dummyPosts) => {
  return (
        <div className="story-bar">
            <SingleStory dummyPosts={dummyPosts}/>
            <SingleStory dummyPosts={dummyPosts}/>
            <SingleStory dummyPosts={dummyPosts}/>
            <SingleStory dummyPosts={dummyPosts}/>
            <SingleStory dummyPosts={dummyPosts}/>
            <SingleStory dummyPosts={dummyPosts}/>
            <SingleStory dummyPosts={dummyPosts}/>
            <SingleStory dummyPosts={dummyPosts}/>
        </div>
  )
}

export default Stories
