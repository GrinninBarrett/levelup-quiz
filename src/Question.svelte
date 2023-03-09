<script>
  export let question;
  export let nextQuestion;
  export let addToScore;

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
      addToScore();
    }
  }
</script>

<h3>{@html question.question}</h3>

{#if isAnswered}
  <h5>
    {#if isCorrect}
      You got it right!
    {:else}
      You goofed up!
    {/if}
  </h5>
{/if}

{#each allAnswers as answer}
  <button
    on:click={() => {
      checkAnswer(answer.correct);
    }}>{@html answer.answer}</button
  >
{/each}

{#if isAnswered}
  <div>
    <button on:click={nextQuestion}>Next Question</button>
  </div>
{/if}
