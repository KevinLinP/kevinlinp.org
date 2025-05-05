<script>
	export let resumeData;
	const { education } = resumeData;
</script>

<section>
	<h2>Education</h2>

	{#each education as edu}
		<section>
			<h3>
				<a href={edu.url}>{edu.institution}</a>
				 
				<small>{edu.location}</small>
			</h3>
			{#if edu.studyType}
				{edu.studyType} {edu.area}
			{/if}
			{#if edu.courses && edu.courses.length > 0}
				<p>
					Selected coursework: {edu.courses.join(', ')}
				</p>
			{/if}
		</section>
	{/each}
</section>