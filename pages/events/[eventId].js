import { useRouter } from 'next/router';
 
function EventDetailPage() {
    const router = useRouter()

    console.log(router.query)
    // fetch related piece of data of this event id
    
	return (
		<div>
			<h1>The Event Detail Page</h1>
		</div>
	)
}

export default EventDetailPage
