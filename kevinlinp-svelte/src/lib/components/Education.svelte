<script>
  export let education = [];
</script>

<div>
  <h2>Education</h2>
  
  {#each education as edu}
    <div class="education">
      <h3>{edu.institution}</h3>
      <div class="education-meta">
        <span class="degree">{edu.degree}</span>
        {#if edu.field}
          <span class="field">• {edu.field}</span>
        {/if}
        <span class="dates">• {edu.startDate} – {edu.endDate || 'Present'}</span>
      </div>
      
      {#if edu.courses && edu.courses.length > 0}
        <div class="courses">
          <strong>Notable Courses:</strong> {edu.courses.join(', ')}
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .education {
    margin-bottom: 1.5rem;
  }
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
  
  .education-meta {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }
  
  .courses {
    font-size: 0.95rem;
  }
</style>