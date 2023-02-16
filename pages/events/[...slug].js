import { useRouter } from "next/router"
import { getFilteredEvents } from "../../dummy-data"
import EventList from "../../components/events/event-list"
import ResultTitle from "../../components/events/result-title"
import ErrorAlert from "../../components/ui/error-alert"
import Button from "../../components/ui/button"

function FilteredEventsPage() {
	const router = useRouter()
	const filterData = router.query.slug

	if (!filterData) {
		return <div className="center">Loading ...</div>
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
		return (
			<>
				<ErrorAlert>
					<p>Please choose valid filters</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show all events</Button>
				</div>
			</>
		)
	}

	const filteredEvents = getFilteredEvents({
		year: numYear,
		month: numMonth,
	})

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<ErrorAlert>
					<p>No events found for the chosen filter!</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show all events</Button>
				</div>
			</>
		)
	}

	const filteredDate = new Date(numYear, numMonth - 1)

	return (
		<>
			<ResultTitle date={filteredDate} />
			<EventList items={filteredEvents} />
		</>
	)
}

export default FilteredEventsPage
