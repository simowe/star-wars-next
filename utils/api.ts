import useSWR, { SWRConfiguration } from "swr"

const swrProps: SWRConfiguration = {
    revalidateOnFocus: false,
    revalidateOnMount: true,
}

export function useApiSingle<T>(url: string | null, initialData?: T) {
    return useSWR<T>(url, fetchJsonSingle, { ...swrProps, initialData })
}

export function useApiList<T>(url: string | null) {
    return useSWR<T[]>(url, fetchJsonList, swrProps)
}

async function fetchJsonSingle<T>(url: string): Promise<T> {
    console.log("Fetching", url)
    await delay(2000)

    return fetch(url)
        .then((res) => res.json())
        .then((json) => ({ ...json, id: getIdFromUrl(json.url) }))
}

async function fetchJsonList<T>(url: string): Promise<T[]> {
    console.log("Fetching", url)
    await delay(2000)

    const { results } = await fetch(url).then((res) => res.json())
    return results.map((item: any) => ({ ...item, id: getIdFromUrl(item.url) }))
}

function getIdFromUrl(url: string) {
    const [_, id] = url.match(/([0-9]+)\/$/) ?? []
    return id
}

function delay(timeout: number): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, timeout)
    })
}
