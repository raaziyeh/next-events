import styles from "./error-alert.module.css"

function ErrorAlert(props) {
	return <div className={styles.error}>{props.children}</div>
}

export default ErrorAlert
