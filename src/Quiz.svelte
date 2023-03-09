<script>
  import { fade, blur, fly, slide, scale } from 'svelte/transition';
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
  import Question from './Question.svelte';
  let quiz = getQuiz();

  let activeQuestion = 0;
  let score = 0;

  onMount(() => {
    console.log('hello');
  });

  beforeUpdate(() => {
    console.log('before update');
  });

  afterUpdate(() => {
    console.log('after update');
  });

  onDestroy(() => {
    console.log('on destroy');
  });

  async function getQuiz() {
    const res = await fetch('https://opentdb.com/api.php?amount=10&category=12&type=multiple');
    const quiz = await res.json();
    console.log(quiz);
    return quiz;
  }

  function nextQuestion() {
    activeQuestion++;
  }

  function resetQuiz() {
    score = 0;
    activeQuestion = 0;
    quiz = getQuiz();
  }

  function addToScore() {
    score++;
  }

  //Reactive Statement
  $: if (score > 1) {
    alert('You won!');
    resetQuiz();
  }

  //Reactive declaration
  $: questionNumber = activeQuestion + 1;


</script>

<style>
  .fade-wrapper {
    position: absolute;
  }
</style>

<div>
  <button on:click={resetQuiz}>Start New Quiz</button>

  <h3>My Score: {score}</h3>

  <h4>Question #{questionNumber}</h4>

  {#await quiz}
    Loading...
  {:then data}

    {#each data.results as question, index}
      {#if index === activeQuestion}
        <div in:fly={{ x: 100 }} out:fly={{ y: -200 }} class="fade-wrapper">
          <Question {addToScore} {nextQuestion} {question}/>
        </div>
      {/if}

    {/each}

  {/await}

</div>
