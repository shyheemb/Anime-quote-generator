import React from 'react'

function Quote({quote}) {
  return (
    <div className ="quotes">
      <div className = "anime" title = "{quote.anime}">
      {quote.anime} </div>
      
       
        <blockquote>
         {quote.quote}
        </blockquote>

        <div className = "character" title = "{quote.character}">
        {quote.character} Naruto</div>
    </div>
  )
}

export default Quote