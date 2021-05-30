import type { AppProps } from "next/app"
import { useRouter } from "next/dist/client/router"
import { FC } from "react"
import { getInitialData } from "../components/DataLink"
import "../styles/globals.css"

export type PageProps = any & {
    initialData: any | undefined
}

export type PageComponent = FC<PageProps>

function MyApp({ Component, pageProps }: AppProps) {
    const { asPath, query } = useRouter()
    const initialData = getInitialData(asPath)

    return <Component {...pageProps} {...query} initialData={initialData} />
}
export default MyApp
