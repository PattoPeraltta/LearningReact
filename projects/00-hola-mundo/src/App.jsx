import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName = "Rubiu5" name="elrubius" />
            <TwitterFollowCard isFollowing={false} userName = "midudev" name="Miguel Angel Duran" />
            <TwitterFollowCard isFollowing userName = "vegeta777" name="♈️ Vegetta777 ♈️" />
        </section>
    )
}