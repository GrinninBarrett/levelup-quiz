import ghpages from 'gh-pages';

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'main',
        repo: 'https://github.com/grinninbarrett/levelup-quiz.git', // Update to point to your repository  
        user: {
            name: 'Tucker Barrett', // update to use your name
            email: 'ctbarrett.tech@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)