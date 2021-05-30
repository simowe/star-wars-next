import Link, { LinkProps } from "next/link"
import { FC, useEffect } from "react"

type DataLinkProps = LinkProps & {
    initialData?: any
    href: string
}

const initialDataCache = new Map<string, any>()

const DataLink: FC<DataLinkProps> = ({ initialData, ...props }) => {
    useEffect(() => {
        initialDataCache.set(cleanHref(props.href), initialData)
    }, [initialData, props.href])

    return <Link {...props} />
}

export default DataLink

export function getInitialData(href: string): any | undefined {
    return initialDataCache.get(cleanHref(href))
}

function cleanHref(href: string): string {
    return href.replace(/\/$/, "")
}
