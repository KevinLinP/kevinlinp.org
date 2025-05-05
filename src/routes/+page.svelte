<script>
	import { onMount } from 'svelte';

	onMount(() => {
		// Initialize parallax effect if the library is loaded
		if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.parallax) {
			window.jQuery('.parallax-window').parallax();
		}
	});
</script>

<svelte:head>
	<title>Kevin Lin</title>
	<meta content="Kevin Lin's personal website." name="description" />
	<meta content="Kevin Lin" name="author" />
	<script
		src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
		integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
		crossorigin="anonymous"
		defer
	></script>
	<script
		src="https://cdn.jsdelivr.net/npm/jquery-parallax.js@1.5.0/parallax.min.js"
		integrity="sha256-cNb9ArVGKhXkedowZK9xRxCpr6qqck5JvCAsuMzJlPw="
		crossorigin="anonymous"
		defer
	></script>
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
		crossorigin="anonymous"
	/>
</svelte:head>

<div
	class="parallax-window"
	data-parallax="scroll"
	data-image-src="https://ddw2ppmkywo9u.cloudfront.net/sunset_cropped.jpg"
	data-bleed="120"
	data-speed="0.63"
></div>

<div class="text-center">
	<img
		src="https://ddw2ppmkywo9u.cloudfront.net/profile_picture.jpg"
		class="circular-image white-border"
		height="150px"
		width="150px"
		alt="Kevin Lin profile photo"
	/>
</div>

<div class="container">
	<h1 class="text-center">Kevin Lin</h1>

	<ul class="nav justify-content-center">
		<li class="nav-item">
			<a href="javascript:void(0)" class="nav-link disabled">About Me</a>
		</li>
		<li class="nav-item">
			<a href="/resume" class="nav-link">Professional Resume</a>
		</li>
	</ul>

	<div class="row">
		<article
			class="lead col-lg-8 offset-lg-2 col-xs-12"
			style="margin-top: 3rem; margin-bottom: 6rem"
		>
			<p>Hi o/ I'm Kevin. I collect experiences.</p>
			<p>
				As such, I have many interests and hobbies. And I'm always looking to do something new and
				go further. I'd like to offer my help in any of my below topics; just email me at
				<a href="mailto:kevin.lin.p@gmail.com">kevin.lin.p@gmail.com</a>.
			</p>
			<ul>
				<li>Software development</li>
				<li>Cooking</li>
				<li>Barbecue</li>
				<li>LED art installations</li>
				<li>Sound systems</li>
				<li>PC building</li>
				<li>WiFi installation</li>
				<li>Residential LED lighting</li>
				<li>Portable/off-grid solar power</li>
			</ul>
		</article>
	</div>
</div>

<style>
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	h7 {
		font-weight: 300;
	}
	.circular-image {
		border-radius: 50%;
	}
	.white-border {
		border: 3px solid white;
	}
	.parallax-window {
		min-height: 50vh;
	}
</style>
