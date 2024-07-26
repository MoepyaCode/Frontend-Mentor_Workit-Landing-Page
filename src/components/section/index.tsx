import React from 'react'

type Props = {
    className?: string
    children: React.ReactNode
}

export default function Section(props: Props) {
    return (
        <section className={`${props.className}`}>
            {props.children}
        </section>
    )
}
