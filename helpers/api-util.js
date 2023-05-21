export async function getAllEvents() {
	const response = await fetch(
		"https://e-commerce-json-server.vercel.app/events"
	)

	const data = await response.json()

	return data
}

export async function getFeaturedEvents() {
	const events = await getAllEvents()
	const featuredEvents = events.filter((event) => event.isFeatured)
	return featuredEvents
}

export async function getEventById(id) {
	const events = await getAllEvents()
	return events.find((event) => event.id === id)
}

export async function getFilteredEvents(dateFilter) {
	const events = await getAllEvents()
	const { year, month } = dateFilter

	let filteredEvents = events.filter((event) => {
		const eventDate = new Date(event.date)
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		)
	})

	return filteredEvents
}
