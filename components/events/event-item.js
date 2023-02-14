import Button from "../ui/button"
import LocationIcon from "../icons/location-icon"
import DateIcon from "../icons/date-icon"
import ArrowRightIcon from "../icons/arrow-right-icon"
import styles from "./event-item.module.css"

function EventItem(props) {
	const { title, id, location, date, image } = props

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	})
	const formattedAddress = location.replace(", ", "\n")
	const eventRoutePath = `/events/${id}`

	return (
		<li className={styles.item}>
			<img src={"/" + image} alt={title} className={styles.img} />
			<div className={styles.content}>
				<h2>{title}</h2>
				<div className={styles.time}>
					<DateIcon />
					<time>{formattedDate}</time>
				</div>
				<div className={styles.address}>
					<LocationIcon />
					<address>{formattedAddress}</address>
				</div>
				<div className={styles.actions}>
					<Button link={eventRoutePath} className={styles.btn}>
						<span>Explore Event</span>
						<ArrowRightIcon />
					</Button>
				</div>
			</div>
		</li>
	)
}

export default EventItem
