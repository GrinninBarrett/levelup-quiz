<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte";
  import Question from "./Question.svelte";
  import Modal from "./Modal.svelte";
  import { score } from "./store";
  let quiz = getQuiz();
  let isModalOpen = false;

  let activeQuestion = 0;

  onMount(() => {
    console.log("hello");
  });

  beforeUpdate(() => {
    console.log("before update");
  });

  afterUpdate(() => {
    console.log("after update");
  });

  onDestroy(() => {
    console.log("on destroy");
  });

  async function getQuiz() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=20&category=12&type=multiple"
    );
    const quiz = await res.json();
    console.log(quiz);
    return quiz;
  }

  function nextQuestion() {
    activeQuestion++;
    if (activeQuestion === 20) {
      isModalOpen = true;
    }
  }

  function resetQuiz() {
    isModalOpen = false;
    score.set(0);
    activeQuestion = 0;
    quiz = getQuiz();
  }

  //Reactive Statement
  $: if ($score > 4) {
    isModalOpen = true;
  }

  //Reactive declaration
  $: questionNumber = activeQuestion + 1;
</script>

<div>
  <button on:click|once={resetQuiz}>Start New Quiz</button>

  <h3>My Score: {$score}</h3>

  {#if activeQuestion < 20}
  <h4>Question #{questionNumber}</h4>
  {/if}

  <div class="container">
    {#await quiz}
      Loading...
    {:then data}
      {#each data.results as question, index}
        {#if index === activeQuestion}
          <div in:fly={{ x: 100 }} out:fly={{ y: -200 }} class="fade-wrapper">
            <Question {nextQuestion} {question} />
          </div>
        {/if}
      {/each}
    {/await}
  </div>
</div>

{#if isModalOpen}
  <Modal on:close={resetQuiz}>
    {#if $score > 4}
    <h2>You won!</h2>
    <p>Congratulations!</p>
    {:else}
    <h2>Sorry, you didn't do that well...</h2>
    <p>Try again to see if you can get a better score!</p>
    {/if}
    <button on:click={resetQuiz}>Start Over</button>
  </Modal>
{/if}

<style>
  .fade-wrapper {
    position: absolute;
  }

  .container {
    min-height: 500px;
  }
</style>
