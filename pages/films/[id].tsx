import Link from "next/link"
import React, { Fragment } from "react"
import { ApiFilm } from "../../types/types"
import { useApiSingle } from "../../utils/api"
import { PageComponent } from "../_app"

const FilmPage: PageComponent = ({ id, initialData }) => {
    const url = id ? `https://swapi.dev/api/films/${id}/` : null
    const { data, error } = useApiSingle<ApiFilm>(url, initialData)

    if (error) return <h1>{error}</h1>
    if (!data) return <h1>Loading...</h1>

    return (
        <Fragment>
            <h1>{data.title}</h1>
            <ul>
                <li>
                    <strong>Release date:</strong> {data.release_date}{" "}
                </li>
                <li>
                    <strong>Producer:</strong> {data.producer}{" "}
                </li>
                <li>
                    <strong>Director:</strong> {data.director}{" "}
                </li>
            </ul>
            <Link href="/films">Back to films</Link>
            <br />
            <Link href="/">Home</Link>
        </Fragment>
    )
}

export default FilmPage
