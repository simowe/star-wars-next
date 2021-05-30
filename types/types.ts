export interface ApiPerson {
    id: string
    name: string
    url: string
    height: string
    eye_color: string
    films: string[]
}

export interface ApiFilm {
    id: string
    title: string
    director: string
    producer: string
    release_date: string
}
