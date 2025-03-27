<script>
	import { onMount } from 'svelte';
	import Experience from './Experience.svelte';
	import Education from './Education.svelte';
	// import Projects from './Projects.svelte';
	import '../resume.css';
	import resumeData from '../resume.json';

	let viewedAtElement;

	onMount(() => {
		// Add resume class to body element
		document.body.classList.add('resume');
		
		if (viewedAtElement) {
			viewedAtElement.textContent = new Date().toLocaleDateString(undefined, {
				month: 'numeric',
				day: 'numeric',
				year: '2-digit'
			});
		}
	});

	// Extract data from the JSON
	const { basics, skills } = resumeData;
</script>

<svelte:head>
	<title>{basics.name} - Resume</title>
	<meta content="{basics.name}'s professional resume" name="description" />
	<meta content={basics.name} name="author" />
	<script
		defer
		src="https://use.fontawesome.com/releases/v5.7.1/js/all.js"
		integrity="sha384-eVEQC9zshBn0rFj4+TU78eNA19HMNigMviK/PU/FFjLXqa/GKPgX58rvt5Z8PLs7"
		crossorigin="anonymous"
	></script>
	<link
		rel="stylesheet"
		href="https://kevin-lins-personal-website.s3-us-west-2.amazonaws.com/cmu-bright/Bright/cmun-bright.css"
		type="text/css"
	/>
	<link
		rel="stylesheet"
		href="https://kevin-lins-personal-website.s3-us-west-2.amazonaws.com/cmu-bright/Bright Semibold/cmun-bright-semibold.css"
		type="text/css"
	/>
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
		crossorigin="anonymous"
	/>
</svelte:head>

<div class="d-print-none mt-2 mb-3 mx-4 opaque-on-hover" style="font-size: 90%; opacity: 0.3;">
	<div class="d-lg-flex justify-content-end">
		<div class="text-right text-nowrap mb-1">
			<strong>external links</strong>
		</div>
		<div class="text-right">
			{#each basics.profiles as profile}
				<div class="d-inline-block mb-2 ms-3 text-right">
					<a href={profile.url} target="_blank">{profile.network}</a>
				</div>
			{/each}
		</div>
	</div>
</div>

<div class="d-none d-print-block position-absolute" style="right: 0">
	<small class="text-muted">
		printed from
		<a href="https://kevinlinp.org/resume">kevinlinp.org/resume</a> on
		<span id="viewedAt" bind:this={viewedAtElement}></span>
	</small>
</div>

<div class="container">
	<div class="text-center">
		<h1>{basics.name}</h1>
		<a href="mailto:{basics.email}">{basics.email}</a>
	</div>

	<section>
		<h2>Summary</h2>
		<p>{basics.summary}</p>
	</section>

	<section>
		<h2>Skills</h2>
		<ul class="list-unstyled loose-list">
			{#each skills as skill}
				<li>
					<strong>{skill.name}</strong>
					<span class="ms-2">{skill.keywords.join(', ')}</span>
				</li>
			{/each}
		</ul>
	</section>

	<Experience {resumeData} />
	<Education {resumeData} />
	<!-- Uncomment to include Projects section -->
	<!-- <Projects {resumeData} /> -->
</div>
