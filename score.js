const shareScoreBtn = document.getElementById('shareScore');
shareScoreBtn.addEventListener('click', sendHighscore);

async function sendHighscore() {
  const score = localStorage.getItem('best');
  console.log(score);

  try {
    const response = await fetch(`http://localhost:3000/highscore/${score}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ score: score }),
    });

    const data = await response.json();
    console.log('Highscore successfully sent:', data);
  } catch (error) {
    console.error('Error sending highscore:', error);
  }
}
