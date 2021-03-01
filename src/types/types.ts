export interface Movie {
    key: number
    name: string
    durationHour : number
    durationMinute: number
    realisator: string
    type: string
    release: string
}

export interface series extends Movie {
    numberOfEpisodes : number

}

export interface WatchlistProp extends Movie {
    removeMovie: Function
    viewedMovie: Function
}