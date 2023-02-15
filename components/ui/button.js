import Link from "next/link"
import styles from "./button.module.css"

function Button(props) {
	const classNamePhrase = props.className
		? styles.btn + " " + props.className
		: styles.btn

	if (props.link) {
		return (
			<Link href={props.link} className={classNamePhrase}>
				{props.children}
			</Link>
		)
	}

	return (
		<button className={classNamePhrase} onClick={props.onClick}>
			{props.children}
		</button>
	)
}

export default Button
