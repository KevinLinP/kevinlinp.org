<script>
  // This component will receive props from its parent
  export let experiences = [];
</script>

<div>
  <h2>Experience</h2>
  
  {#each experiences as job}
    <div class="job">
      <div class="job-header">
        <h3>{job.position}</h3>
        <div class="job-meta">
          <span class="company">{job.company}</span>
          {#if job.location}
            <span class="location">• {job.location}</span>
          {/if}
          <span class="dates">• {job.startDate} – {job.endDate || 'Present'}</span>
        </div>
      </div>
      
      {#if job.summary}
        <p>{job.summary}</p>
      {/if}
      
      {#if job.highlights && job.highlights.length > 0}
        <ul>
          {#each job.highlights as highlight}
            <li>{highlight}</li>
          {/each}
        </ul>
      {/if}
    </div>
  {/each}
</div>

<style>
  .job {
    margin-bottom: 1.5rem;
  }
  
  .job-header {
    margin-bottom: 0.5rem;
  }
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
  
  .job-meta {
    font-size: 0.95rem;
  }
  
  ul {
    padding-left: 1.2rem;
    margin-top: 0.5rem;
  }
  
  li {
    margin-bottom: 0.25rem;
  }
</style>