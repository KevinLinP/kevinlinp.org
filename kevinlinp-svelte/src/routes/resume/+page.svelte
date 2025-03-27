<script>
  import resumeData from '$lib/data/resume';
  
  // We'll use a reactive declaration for the formatted date
  let formattedDate = '';

  // Set the date when the component loads on the client side
  $effect(() => {
    formattedDate = new Date().toLocaleDateString(undefined, {
      month: 'numeric',
      day: 'numeric',
      year: '2-digit'
    });
  });
</script>

<svelte:head>
  <title>Kevin Lin - Resume</title>
  <meta name="description" content="Kevin Lin's professional resume">
  <link rel="stylesheet" href="https://kevin-lins-personal-website.s3-us-west-2.amazonaws.com/cmu-bright/Bright/cmun-bright.css">
  <link rel="stylesheet" href="https://kevin-lins-personal-website.s3-us-west-2.amazonaws.com/cmu-bright/Bright Semibold/cmun-bright-semibold.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-eVEQC9zshBn0rFj4+TU78eNA19HMNigMviK/PU/FFjLXqa/GKPgX58rvt5Z8PLs7" crossorigin="anonymous">
</svelte:head>

<div class="d-print-none mt-2 mb-3 mx-4 opaque-on-hover">
  <div class="d-lg-flex justify-content-end">
    <div class="text-right text-nowrap mb-1">
      <strong>external links</strong>
    </div>
    <div class="text-right">
      <div class="d-inline-block mb-2 ms-3 text-right">
        <a href="https://github.com/kevinlinp" target="_blank">GitHub</a>
      </div>
    </div>
  </div>
</div>

<div class="d-none d-print-block position-absolute" style="right: 0">
  <small class="text-muted">
    printed from
    <a href="https://kevinlinp.org/resume">kevinlinp.org/resume</a>
    on
    <span>{formattedDate}</span>
  </small>
</div>

<div class="container">
  <div class="d-flex">
    <div class="text-center">
      <h1>Kevin Lin</h1>
      <a href="mailto:kevin.lin.p@gmail.com">kevin.lin.p@gmail.com</a>
    </div>
  </div>

  <section>
    <h2>Summary</h2>
    <p>Staff software engineer, backend-focused full-stack web, 10+ years of Ruby on Rails experience.</p>
  </section>

  <section>
    <h2>Skills</h2>
    <ul class="list-unstyled loose-list">
      <li>
        <strong>Languages</strong>
        <span class="ms-2">Ruby, JavaScript, TypeScript, HTML, CSS, SQL</span>
      </li>
      <li>
        <strong>Frameworks</strong>
        <span class="ms-2">Ruby on Rails, React, Vue.js, Apollo GraphQL, MiniTest, Cypress</span>
      </li>
      <li>
        <strong>Tools</strong>
        <span class="ms-2">Linux, PostgreSQL, Elasticsearch, Sidekiq, Git, Docker, Sentry, Datadog</span>
      </li>
      <li>
        <strong>Methodologies</strong>
        <span class="ms-2">agile software development, test-driven development, pair programming</span>
      </li>
    </ul>
  </section>

  <section>
    <h2>Experience</h2>
    {#each resumeData.work as job}
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
  </section>

  <section>
    <h2>Education</h2>
    {#each resumeData.education as edu}
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
  </section>
</div>

<style>
  :global(body) {
    font-family: "Computer Modern Bright", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .container {
    margin-top: 3rem;
    margin-bottom: 8rem;
  }

  section {
    margin-bottom: 2.25rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.45rem;
    margin-bottom: .7rem;
  }

  strong {
    font-family: "Computer Modern Bright Semibold", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 500;
  }

  .opaque-on-hover {
    font-size: 90%;
    opacity: 0.3;
  }

  .opaque-on-hover:hover {
    opacity: 1.0;
  }

  .text-right {
    text-align: right;
  }

  .text-center {
    text-align: center;
  }

  .ms-2 {
    margin-left: 0.5rem;
  }

  .ms-3 {
    margin-left: 1rem;
  }

  .mt-2 {
    margin-top: 0.5rem;
  }

  .mb-1 {
    margin-bottom: 0.25rem;
  }

  .mb-2 {
    margin-bottom: 0.5rem;
  }

  .mb-3 {
    margin-bottom: 1rem;
  }

  .mx-4 {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  .d-inline-block {
    display: inline-block;
  }

  .d-lg-flex {
    display: flex;
  }

  .justify-content-end {
    justify-content: flex-end;
  }

  .text-nowrap {
    white-space: nowrap;
  }

  .text-muted {
    color: #6c757d;
  }

  .position-absolute {
    position: absolute;
  }

  .list-unstyled {
    list-style: none;
    padding-left: 0;
  }

  .loose-list li {
    margin-bottom: .6rem;
  }

  .job {
    margin-bottom: 1.5rem;
  }
  
  .job-header {
    margin-bottom: 0.5rem;
  }
  
  .job-meta, .education-meta {
    font-size: 0.95rem;
  }
  
  .education {
    margin-bottom: 1.5rem;
  }
  
  .courses {
    font-size: 0.95rem;
  }
  
  ul {
    padding-left: 1.2rem;
    margin-top: 0.5rem;
  }
  
  li {
    margin-bottom: 0.25rem;
  }

  @media print {
    .d-print-none {
      display: none !important;
    }

    .d-none {
      display: none;
    }

    .d-print-block {
      display: block !important;
    }

    .container {
      margin-top: 2rem;
      margin-bottom: 0;
    }
  }
</style>