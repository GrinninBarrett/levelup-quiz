# LevelUp Quiz 📝

This is an application built while going through the [Svelte For Beginners](https://levelup.video/tutorials/svelte-for-beginners) course on Level Up Tutorials, taught by [Scott Tolinski](https://github.com/stolinski). Its purpose is to learn and practice the fundamentals of the front-end JavaScript framework [Svelte](https://svelte.dev/).

[View the deployed application here](https://grinninbarrett.github.io/levelup-quiz/)

I followed the tutorial fairly closely, only making changes as necessary. Given the tutorial is several years old now, there have been updates that required I amend some of the code. For example, I needed to update some of the imports used in the tutorial to use ES6 syntax.

I added some additional functionality, such as hiding the answer choice buttons after a user selects an answer, preventing users from simply answering repeatedly until they eventually click the correct answer. I also changed some colors and added text to indicate which answer was correct in the event the user selects an incorrect answer.

![Screenshot of deployed application](https://res.cloudinary.com/dydjenltr/image/upload/q_auto/v1678837249/Images/grinninbarrett.github.io_levelup-quiz__r4ueqa.png)


## Future Development

The next update will be to end the quiz in a more graceful way. Now, the page updates to say "Question #11" and becomes blank. Given the "Start New Quiz" button only works once, it may be good to add a notification to explain this to the user.