import { useRouter } from "next/router"
import { getFilteredEvents } from "../../dummy-data"
import EventList from "../../components/events/event-list"

function FilteredEventsPage() {
	const router = useRouter()
	const filterData = router.query.slug

	if (!filterData) {
		return <div className="centered-message">Loading ...</div>
	}

	const filterYear = filterData[0]
	const filterMonth = filterData[1]

	const numYear = +filterYear
	const numMonth = +filterMonth

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2021 ||
		numMonth < 1 ||
		numMonth > 12
	) {
		return <div className="centered-message">Please choose valid filters</div>
	}

	const filteredEvents = getFilteredEvents({
		year: numYear,
		month: numMonth,
	})

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<p className="centered-message">No events found for the chosen filter!</p>
		)
	}

	return (
		<div>
			<EventList items={filteredEvents} />
		</div>
	)
}

export default FilteredEventsPage
