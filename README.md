<h1> Nextjs Routing Feature Summary</h1>
pages folder and the routing features that Nextjs provides to us

<h2>pages folder </h2>
<ul>
   <li> index.js matches with main domain </li>
   <li> filename.js makes main-domain.com/filename route . </li>
   <li> folders for nested routes</li>
   <li> 404.js for custom 404 http error page</li>
 </ul>

<h2>_app.js </h2>
<ul>
   <li> _app.js is the root of the rendering stuff </li>
   <li> Component will match with one of the pages based on the route path. </li>
   <li> so we can set the general layout of app here</li>
 </ul>
 
<h2>dynamic routing </h2>
<ul>
   <li> [eventId].js</li>
   <li>[...slug].js</li>
 </ul>
 
<h2>useRouter hook from "next/router" </h2>
<ul>
   <li> const router = useRouter()</li>
   <li> router.query to access route path like eventId property and slug array</li>
   <li>router.push() and router.replace() for programmatic navigation </li>
</ul>

<h2>Link component</h2>
<ul>
   <li> default export of "next/link"</li>
   <li>href</li>
   <li> replace property </li>
   <li>prefetch defaults to true (any link in the viewport will be preloaded.) <a href="https://nextjs.org/docs/api-reference/next/link" target="_blank"> more </a></li>
</ul>

