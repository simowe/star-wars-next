import Link from "next/link"
import React, { FC, Fragment } from "react"
import FilmList from "../../components/FilmList"
import { ApiPerson } from "../../types/types"
import { useApiSingle } from "../../utils/api"
import { PageProps } from "../_app"

const PersonPage: FC<PageProps> = ({ initialData, id }) => {
    const url = id ? `https://swapi.dev/api/people/${id}/` : null
    const { data, error } = useApiSingle<ApiPerson>(url, initialData)

    if (error) return <h1>{error}</h1>
    if (!data) return <h1>Loading...</h1>

    return (
        <Fragment>
            <h1>{data.name}</h1>
            <p>
                <strong>Height:</strong>
                {data.height}
            </p>
            <p>
                <strong>Eye color:</strong>
                {data.eye_color}
            </p>
            <FilmList films={data.films} />
            <Link href="/people">Back to people</Link>
            <br />
            <Link href="/">Home</Link>
        </Fragment>
    )
}

export default PersonPage
