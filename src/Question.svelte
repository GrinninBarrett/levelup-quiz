<script>
  import { score } from "./store";
  export let question;
  export let nextQuestion;

  let isAnswered = false;
  let isCorrect;

  let answers = question.incorrect_answers.map((answer) => {
    return {
      answer,
      correct: false,
    };
  });

  let allAnswers = [
    ...answers,
    {
      answer: question.correct_answer,
      correct: true,
    },
  ];

  shuffle(allAnswers);

  function shuffle(array) {
    // odd way to randomize an array - reseach this
    array.sort(() => Math.random() - 0.5);
  }

  function checkAnswer(correct) {
    console.log(correct);
    isAnswered = true;
    isCorrect = correct;
    if (correct) {
      score.update((val) => val + 1);
    }
  }
</script>

<h3>{@html question.question}</h3>

{#if isAnswered}
  <h5 class:isCorrect>
    {#if isCorrect}
      You got it right!
    {:else}
      You goofed up! The correct answer was "{@html question.correct_answer}".
    {/if}
  </h5>
{/if}

{#each allAnswers as answer}
  {#if !isAnswered}
    <button
      class="answer"
      on:click={() => {
        checkAnswer(answer.correct);
      }}>{@html answer.answer}</button
    >
  {/if}
{/each}

{#if isAnswered}
  <div>
    <button on:click={nextQuestion}>Next Question</button>
  </div>
{/if}

<style>
  h5 {
    color: rgb(216, 7, 38);
  }

  h5.isCorrect {
    color: rgb(4, 152, 103);
  }

  .answer {
    display: block;
  }
</style>
