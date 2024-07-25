import { Main } from '../../components'
import { Sections } from './sections'

export default function Home() {
    return (
        <Main className='flex flex-col flex-nowrap overflow-x-hidden'>
            <Sections.Landing />
            <Sections.Insight />
            <Sections.Subscribe />
        </Main>
    )
}
