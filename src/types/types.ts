export interface Movie {
    name: string
    durationHour : number
    durationMinute: number
    realisator: string
    type: string
    release: Date
}

export interface series extends Movie {
    numberOfEpisodes : number

}

export type Watchlist = Array<Movie>