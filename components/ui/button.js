import Link from "next/link"
import styles from "./button.module.css"

function Button(props) {
	const classNamePhrase = props.className
		? styles.btn + " " + props.className
		: styles.btn
	return (
		<Link href={props.link} className={classNamePhrase}>
			{props.children}
		</Link>
	)
}

export default Button
