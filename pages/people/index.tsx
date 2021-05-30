import Link from "next/link"
import React, { FC, Fragment } from "react"
import DataLink from "../../components/DataLink"
import { ApiPerson } from "../../types/types"
import { useApiList } from "../../utils/api"

const PeoplePage: FC = () => {
    return (
        <Fragment>
            <h1>People</h1>
            <PeopleList />
            <Link href="/">Home</Link>
        </Fragment>
    )
}

export default PeoplePage

const PeopleList: FC = () => {
    const { data, error } = useApiList<ApiPerson>(
        "https://swapi.dev/api/people/"
    )

    if (error) return <h2>Fucked up</h2>
    if (!data) return <h2>Loading...</h2>

    const elements = data.map((person) => {
        return (
            <li key={person.url}>
                <DataLink
                    href={`/people/${person.id}`}
                    initialData={person}
                >
                    <a>{person.name}</a>
                </DataLink>
            </li>
        )
    })

    return <ul>{elements}</ul>
}
