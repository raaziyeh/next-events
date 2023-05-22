<h1> Nextjs Pre-rendering Feature Summary</h1>
<p>The most important feature of Next.js. good for User experience at inital loading of pages and good for SEO (browser crawlers see content in the HTML).</p>
for data fetching in a Next.js app, we have multiple choices and options that the best one depends on the use case.

<h2>SSG </h2>
<p>Static Site Generation, <strong> getStaticProps()</strong> </p>
<ul>
   <li> prepare data (props) for page component during build time and pre-renders it </li>
   <li> <strong>ISR</strong> (Incrementally Static Regeneration) by adding <strong> revalidate </strong> key (with seconds value) in returned object</li>
   <li> ISR gauranties that the page won't be outdated more than revalidate seconds (if a request reaches the server and the page is outdated (based on revalidate value) it will pre-render it again</li>
   <li> <strong> getStaticPaths()</strong> is required for <strong>dynamic paths </strong></li>
    <li> in getStaticPaths() we often want to pre-render only some of the most-visited paths and so we can set fallback: true or 'blocking'</li>
   <li> when the the fallback is set to true or 'blocking', getStaticProps should anticipate {notFound: true} condition</li>
   <li>SSG and Client-side fetching can be used together to provide the best user-experience with the most up-to-date data</li>
</ul>

<h2>SSR </h2>
<p>Server-Side Rendering, <strong> getServerSideProps() </strong></p>
<ul>
   <li> provides access to request and response objects </li>
   <li> renders the page whenever a request reaches the server for that page</li>
</ul>

<h2>Client-side data fetching </h2>
<p>Consider using client-side regular data fetching for some use cases like the followings: </p>
<ul>
   <li> Highly user-specific data (like last orders in an online shop)</li>
   <li> Partial data (like data that's only used on a part of a page)</li>
   <li> Data changing with high frequency (like stock data)</li>
</ul>

<br />

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

