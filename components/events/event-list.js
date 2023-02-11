import EventItem from "./event-item"
import styles from "./event-list.module.css"

function EventList(props) {
	const { items } = props

	return (
		<ul className={styles.list}>
			{items.map((event) => {
				return (
					<EventItem
						key={event.id}
						title={event.title}
						id={event.id}
						description={event.description}
						location={event.location}
						date={event.date}
						image={event.image}
					/>
				)
			})}
		</ul>
	)
}

export default EventList
