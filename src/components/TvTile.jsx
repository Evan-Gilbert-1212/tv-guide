import React, { Link } from 'react'

const TvTile = (props) => {
  let { showTitle, showImage, showOverview, showID } = props

  if (showOverview.length > 400) {
    showOverview = showOverview.substring(0, 400) + '...'
  }

  return (
    <article>
      <a className="show-card" href={`/tv/${showID}`}>
        <img
          className="card-image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${showImage}`}
        />
        <div className="show-summary">
          <label className="show-title">{showTitle}</label>
          <p className="show-overview">{showOverview}</p>
        </div>
      </a>
    </article>
  )
}

export default TvTile
