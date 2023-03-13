<script>
  import Quiz from "./Quiz.svelte";
</script>

<main>
  <h1>Level Up Music Quiz</h1>
  <div>
    <Quiz />
  </div>
</main>

<style>
  :global(body) {
    background-color: #524763;
  }

  h1 {
    color: white;
    text-align: center;
  }

  div {
    background: white;
    border-radius: 15px;
    padding: 40px;
  }
</style>
