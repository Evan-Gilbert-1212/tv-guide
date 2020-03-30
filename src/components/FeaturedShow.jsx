import React from 'react'

const FeaturedShow = (props) => {
  console.log(props.show)
  const showID = props.show.id
  const showTitle = props.show.name
  const showImage = props.show.backdrop_path
  const showOverview = props.show.overview
  const showRating = props.show.vote_average

  return (
    <a href={`/tv/${showID}`}>
      <div className="featured">
        <label className="featured-header">FEATURED TV SHOW</label>
        <label className="featured-title">{showTitle}</label>
        <img
          className="featured-poster"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${showImage}`}
        />
        <label className="featured-rating">Rating: {showRating}/10</label>
        <p className="featured-overview">{showOverview}</p>
      </div>
    </a>
  )
}

export default FeaturedShow
