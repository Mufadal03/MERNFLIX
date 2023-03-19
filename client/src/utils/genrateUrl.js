export const generateUrl = (genre, mediaApi, page, tvGenres,movieGenres, mediaType) => {
    if (!genre) {
        return mediaApi.getTrendingList({ mediaType, timeWindow: 'day', page })
    }
    if (genre === 'popular' || genre === 'top_rated') {
        return mediaApi.getList({ mediaType, mediaCategory: genre, page })
    }
    if (genre === 'trending') {
        return mediaApi.getTrendingList({ mediaType, timeWindow: 'day', page })
    }
    const genreCollection = mediaType === 'tv' ? tvGenres : movieGenres
    const singleGenre = genreCollection.find(el => el.id === +genre)
    console.log(genre,genreCollection,singleGenre)
    return mediaApi.getMediaByGenre({ mediaType, genreId: singleGenre.id ,page})
}