import Head from "next/head"
import { getFeaturedEvents } from "../dummy-data"
import EventList from "../components/events/event-list"

function HomePage() {
	const featuredEvents = getFeaturedEvents()

	return (
		<div>
			<Head>
				<title>Next Events</title>
				<meta
					name="description"
					content="Events app for finding and managing your favorites professional events"
				/>
			</Head>
			<main>
				<EventList items={featuredEvents} />
			</main>
		</div>
	)
}

export default HomePage
