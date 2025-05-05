<script>
	export let resumeData;
	const { projects } = resumeData;
</script>

<section>
	<h2>Projects</h2>
	<ul class="list-unstyled loose-list">
		{#each projects || [] as project}
			<li>
				<a href={project.url} target="_blank">
					<strong>{project.name}</strong>
					<span class="text-muted ms-2">
						<i class="fas fa-external-link-alt fa-sm"></i>
					</span>
				</a>
				<p>{project.description}</p>
				{#if project.keywords && project.keywords.length > 0}
					<small class="text-muted">Technologies: {project.keywords.join(', ')}</small>
				{/if}
			</li>
		{/each}
	</ul>
</section>
