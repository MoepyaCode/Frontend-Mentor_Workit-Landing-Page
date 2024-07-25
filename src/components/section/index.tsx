import React from 'react'

type Props = {
    className?: string
    children: React.ReactNode
}

export default function Section(props: Props) {
    return (
        <section className={`lg:min-h-screen ${props.className}`}>
            {props.children}
        </section>
    )
}
