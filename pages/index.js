import Head from "next/head"
import { getFeaturedEvents } from "../helpers/api-util"
import EventList from "../components/events/event-list"

function HomePage(props) {
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
				<EventList items={props.events} />
			</main>
		</div>
	)
}

export default HomePage

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents()

	return {
		props: {
			events: featuredEvents,
			revalidate: 1800
		}
	}
}