import Button from "../ui/button"
import styles from "./result-title.module.css"

function ResultTitle(props) {
	const resultDate = props.date
	const humanReadableDate = resultDate.toLocaleString("en-US", {
		month: "long",
		year: "numeric",
	})
	return (
		<section className={styles.wrapper}>
			<h1 className={styles.title}>Events in {humanReadableDate}</h1>
			<Button link="/events">Show all events</Button>
		</section>
	)
}

export default ResultTitle
