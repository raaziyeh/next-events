import { useRouter } from "next/router"

function FilteredEventsPage() {
	const router = useRouter()

	console.log(router.query)
    // fetch events filtered by the specific filters

	return (
		<div>
			<h1> Filtered Events Page</h1>
		</div>
	)
}

export default FilteredEventsPage
