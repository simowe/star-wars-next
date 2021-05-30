import Link from "next/link"
import { FC, Fragment } from "react"
import { ApiFilm } from "../types/types"
import { useApiSingle } from "../utils/api"
import DataLink from "./DataLink"

const FilmList: FC<{ films: string[] }> = ({ films }) => {
    const filmElements = films.map((url) => {
        return <FilmItem key={url} url={url} />
    })

    return (
        <Fragment>
            <h2>Films:</h2>
            <ul>{filmElements}</ul>
        </Fragment>
    )
}

export default FilmList

const FilmItem: FC<{ url: string }> = ({ url }) => {
    const { data, error } = useApiSingle<ApiFilm>(url)

    if (error) return <ul>{error}</ul>
    if (!data) return <ul>Loading ...</ul>

    return (
        <li>
            <DataLink href={`/films/${data.id}`} initialData={data}>
                <a>{data.title}</a>
            </DataLink>
        </li>
    )
}
