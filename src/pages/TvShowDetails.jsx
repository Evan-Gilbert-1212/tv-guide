import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TvShowDetails = (props) => {
  const showID = props.match.params.showID
  const [showDetails, setShowDetails] = useState({})
  const [showCast, setShowCast] = useState([])

  const getTvShowDetails = async () => {
    const detailsResponse = await axios.get(
      `https://api.themoviedb.org/3/tv/${showID}?api_key=10506c5544808670e3badceef4b19cd4&language=en-US&page=1`
    )

    setShowDetails(detailsResponse.data)

    const castResponse = await axios.get(
      `https://api.themoviedb.org/3/tv/${showID}/credits?api_key=10506c5544808670e3badceef4b19cd4&language=en-US`
    )

    setShowCast(castResponse.data.cast)
    console.log(detailsResponse.data)
    console.log(castResponse.data.cast)
  }

  useEffect(() => {
    getTvShowDetails()
  }, [])

  return (
    <section className="show-details-bg">
      <section className="show-details">
        <h2 className="summary-header">{showDetails.name}</h2>
        <img
          className="featured-poster"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${showDetails.backdrop_path}`}
        />
        <div className="summary-overview">{showDetails.overview}</div>
        <div>
          <strong>Rating:</strong> {showDetails.vote_average}/10
        </div>
        <h4>Cast</h4>
        {showCast.map((castMember) => {
          return (
            <div className="cast-list">
              <label className="actor-name">{castMember.name}</label>
              <label className="character-name">{castMember.character}</label>
            </div>
          )
        })}
      </section>
    </section>
  )
}

export default TvShowDetails
