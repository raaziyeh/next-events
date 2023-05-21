import { Fragment } from "react"
import { getFeaturedEvents, getEventById } from "../../helpers/api-util"
import EventSummary from "../../components/event-detail/event-summary"
import EventLogistics from "../../components/event-detail/event-logistics"
import EventContent from "../../components/event-detail/event-content"

function EventDetailPage(props) {
	const { event } = props

	if (!event) {
		return (
			<div className="center mt-12">
				<p>loading ... </p>
			</div>
		)
	}

	return (
		<Fragment>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</Fragment>
	)
}

export async function getStaticProps(context) {
	const id = context.params.eventId
	const event = await getEventById(id)

	if (!event) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			event,
		},
		revalidate: 30
	}
}

export async function getStaticPaths() {
	const events = await getFeaturedEvents()
	const eventsPaths = events.map((event) => {
		return { params: { eventId: event.id } }
	})

	return {
		paths: eventsPaths,
		fallback: true,
	}
}

export default EventDetailPage
