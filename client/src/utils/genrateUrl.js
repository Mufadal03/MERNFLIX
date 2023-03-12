export const generateUrl = (category, mediaApi, page, genres, mediaType) => {
    if (!category) {
        return mediaApi.getList({ mediaType, mediaCategory: 'popular', page })
    }
    if (category === 'popular' || category === 'top_rated') {
        return mediaApi.getList({ mediaType, mediaCategory: category, page })
    }
    if (category === 'trending') {
        return mediaApi.getTrendingList({ mediaType, timeWindow: 'day', page })
    }
    const genre = genres.find(el => el.name === category)
    return mediaApi.getMediaByGenre({ mediaType, genreId: genre.id })
}