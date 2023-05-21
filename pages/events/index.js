import { useRouter } from "next/router"
import { getAllEvents } from "../../helpers/api-util"
import EventList from "../../components/events/event-list"
import EventsSearch from "../../components/events/events-search"

function AllEventsPage(props) {
	const router = useRouter()	

	function searchEventsHandler(year, month) {
		const searchedPath = `events/${year}/${month}`
		router.push(searchedPath)
	}

	return (
		<div>
			<EventsSearch onSearch={searchEventsHandler} />
			<EventList items={props.events} />
		</div>
	)
}

export default AllEventsPage

export async function getStaticProps() {
	const events = await getAllEvents()

	return {
		props: {
			events
		}, 
		revalidate: 120
	}
}
