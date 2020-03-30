import React, { useState, useEffect } from 'react'
import TvTile from '../components/TvTile'
import FeaturedShow from '../components/FeaturedShow'
import axios from 'axios'

const HomePage = () => {
  const [TvShowList, setTvShowList] = useState([])
  const [FeaturedTvShow, setFeaturedTvShow] = useState({})

  const getTvShowList = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=10506c5544808670e3badceef4b19cd4&language=en-US&page=1'
    )

    setTvShowList(response.data.results)

    const randomIndex = Math.floor(Math.random() * 20)

    setFeaturedTvShow(response.data.results[randomIndex])
  }

  useEffect(() => {
    getTvShowList()
  }, [])

  return (
    <main>
      <FeaturedShow show={FeaturedTvShow} />
      <section className="all-shows">
        {TvShowList.map((show) => {
          return (
            <TvTile
              key={show.id}
              showTitle={show.name}
              showImage={show.backdrop_path}
              showOverview={show.overview}
              showID={show.id}
            />
          )
        })}
      </section>
    </main>
  )
}

export default HomePage
