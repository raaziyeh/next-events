import { useRouter } from "next/router"
import { getAllEvents } from "../../dummy-data"
import EventList from "../../components/events/event-list"
import EventsSearch from "../../components/events/events-search"

function AllEventsPage() {
	const router = useRouter()
	const events = getAllEvents()

	function searchEventsHandler(year, month) {
		const searchedPath = `events/${year}/${month}`
		router.push(searchedPath)
	}

	return (
		<div>
			<EventsSearch onSearch={searchEventsHandler} />
			<EventList items={events} />
		</div>
	)
}

export default AllEventsPage
