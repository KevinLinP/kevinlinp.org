<script>
  import { onMount } from 'svelte';

  onMount(() => {
    // Any client-side initialization
  });
</script>

<svelte:head>
  <title>Kevin Lin</title>
  <meta name="description" content="Kevin Lin's personal website">
</svelte:head>

<div class="container">
  <header>
    <h1>Kevin Lin</h1>
    <p>Staff software engineer, backend-focused full-stack web developer</p>
  </header>

  <main>
    <section>
      <h2>About</h2>
      <p>Welcome to my personal website. I'm a software engineer with 10+ years of experience in Ruby on Rails and web development.</p>
    </section>

    <section>
      <h2>Links</h2>
      <ul>
        <li><a href="/resume">Resume</a></li>
        <li><a href="https://github.com/kevinlinp" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </section>
  </main>
</div>

<style>
  header {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  section {
    margin-bottom: 2rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }
</style>