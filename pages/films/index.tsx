import Link from "next/link"
import React, { FC, Fragment } from "react"
import DataLink from "../../components/DataLink"
import { ApiFilm } from "../../types/types"
import { useApiList } from "../../utils/api"

const FilmsPage: FC = () => {
    return (
        <Fragment>
            <h1>Films</h1>
            <FilmList />
            <Link href="/">Home</Link>
        </Fragment>
    )
}

export default FilmsPage

const FilmList: FC = () => {
    const { data, error } = useApiList<ApiFilm>("https://swapi.dev/api/films/")

    if (error) return <h2>{error}</h2>
    if (!data) return <h2>Loading...</h2>

    const listElements = data.map((film) => (
        <li key={film.id}>
            <DataLink href={`/films/${film.id}/`} initialData={film}>
                {film.title}
            </DataLink>
        </li>
    ))

    return <ul>{listElements}</ul>
}
