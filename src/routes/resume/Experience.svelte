<script>
	export let resumeData;
	const { work } = resumeData;

	// Helper function to format date range
	function formatDateRange(startDate, endDate) {
		function formatDate(dateStr) {
			if (!dateStr) return 'Present';
			
			const dateParts = dateStr.split('-');
			const year = dateParts[0];
			const month = dateParts[1];
			
			const monthNames = [
				'January', 'February', 'March', 'April', 'May', 'June',
				'July', 'August', 'September', 'October', 'November', 'December'
			];
			
			return `${monthNames[parseInt(month) - 1]} ${year}`;
		}
		
		return `${formatDate(startDate)} – ${formatDate(endDate)}`;
	}
</script>

<section>
	<h2>Experience</h2>

	{#each work as job}
		<section class="minor-section">
			<h3>
				<a href={job.url} target="_blank">{job.name}</a>
				 
				<small>{job.location}</small>
			</h3>
			<p>{job.position}, {formatDateRange(job.startDate, job.endDate)}</p>
			{#if job.highlights && job.highlights.length > 0}
				<ul>
					{#each job.highlights as highlight}
						<li>{highlight}</li>
					{/each}
				</ul>
			{/if}
		</section>
	{/each}
</section>