import { getFilteredEvents } from "../../helpers/api-util"
import EventList from "../../components/events/event-list"
import ResultTitle from "../../components/events/result-title"
import ErrorAlert from "../../components/ui/error-alert"
import Button from "../../components/ui/button"

function FilteredEventsPage(props) {
	if (props.hasError) {
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

	if (!props.filteredEvents || props.filteredEvents.length === 0) {
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

	const filteredDate = new Date(props.numYear, props.numMonth - 1)

	return (
		<>
			<ResultTitle date={filteredDate} />
			<EventList items={props.filteredEvents} />
		</>
	)
}

export async function getServerSideProps(context) {
	const filterData = context.params.slug
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
		return {
			props: {hasError:true},
		}
	}

	const filteredEvents = await getFilteredEvents({
		year: numYear,
		month: numMonth,
	})

	return {
		props: {
			filteredEvents,
			numMonth,
			numYear
		}
	}
}

export default FilteredEventsPage
