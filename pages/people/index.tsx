import { GetServerSideProps } from "next"
import Link from "next/link"
import React, {
    DependencyList,
    FC,
    Fragment,
    KeyboardEvent,
    useCallback,
    useState,
} from "react"
import DataLink from "../../components/DataLink"
import { ApiPerson } from "../../types/types"
import { useApiList } from "../../utils/api"

const PeoplePage: FC<{ randomNumber: number, env: string }> = ({ randomNumber, env }) => {
    const [searchValue, setSearchValue] = useState("")

    const onEnter = useOnEnter((e) => {
        setSearchValue(e.currentTarget.value.trim())
    }, [])

    return (
        <Fragment>
            <h1>People</h1>
            <h2>Random number {randomNumber}</h2>
            <h3>Env: {env}</h3>
            <input placeholder="Search" onKeyDown={onEnter} />
            <br />
            <PeopleList searchValue={searchValue} />
            <Link href="/">Home</Link>
        </Fragment>
    )
}

export default PeoplePage

export const getServerSideProps: GetServerSideProps = async (context) => {
    const randomNumber = Math.random()
    const env = process.env.ENVIRONMENT ?? "undefined"
    console.log("getServerSideProps", randomNumber, env, process.env)


    return {
        props: {
            randomNumber,
            env
        },
    }
}

interface PeopleListProps {
    searchValue: string
}

const PeopleList: FC<PeopleListProps> = ({ searchValue }) => {
    const { data, error } = useApiList<ApiPerson>(getSearchUrl(searchValue))

    if (error) return <h2>Fucked up</h2>
    if (!data) return <h2>Loading...</h2>

    const elements = data.map((person) => {
        return (
            <li key={person.url}>
                <DataLink href={`/people/${person.id}`} initialData={person}>
                    <a>{person.name}</a>
                </DataLink>
            </li>
        )
    })

    return <ul>{elements}</ul>
}

function getSearchUrl(searchValue: string) {
    if (searchValue === "") {
        return `https://swapi.dev/api/people/`
    }

    return `https://swapi.dev/api/people/?search=${searchValue}`
}

function useOnEnter<T extends Element = HTMLInputElement>(
    onEnter: (e: KeyboardEvent<T>) => void,
    dependencies: DependencyList
) {
    return useCallback((e: KeyboardEvent<T>) => {
        if (e.key === "Enter") {
            onEnter(e)
        }
    }, dependencies)
}
