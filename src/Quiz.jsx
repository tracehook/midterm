import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Quiz() {  
  const [q1, setq1] = useState('');
  const [q2, setq2] = useState('');
  const [q3, setq3] = useState('');
  const [numCorrect, setNumCorrect] = useState(0);
  const navigate = useNavigate();

  const checkAnswers = (e) => {
    e.preventDefault();
    let correctCount = 0;

    // Check if the answers are correct, add to count if correct
    if (q1.toLowerCase() === 'css') {
      correctCount++;
    }
    if (q2.toLowerCase() === 'tailwind' || q2.toLowerCase() === 'bootstrap') {
      correctCount++;
    }
    if (q3.toLowerCase() === 'tennyson') {
      correctCount++;
    }

    setNumCorrect(correctCount);

    // If 2 or more answers are correct, pass the quiz
    if (correctCount >= 2) {
      alert('Passed!');
      setTimeout(() => {
        navigate('/register');
      }, 500);
    } else {
      alert('Failed! Try Again!');
    }
  };

  return (
    <div className="container">
      <div className="content">
        <header>Hackathon Quiz</header>
        <main> {/* add fields for input for q1, q2, q3 */}
          <form onSubmit={checkAnswers}>
            <label htmlFor="q1">What language is used for styling?</label>
            <input
              type="text"
              id="q1"
              value={q1}
              onChange={(e) => setq1(e.target.value)}
            />
            <label htmlFor="q2">What is a tool used for finding templates?</label>
            <input
              type="text"
              id="q2"
              value={q2}
              onChange={(e) => setq2(e.target.value)}
            />
            <label htmlFor="q3">Who is the head of the CSC department at MSU? (Last Name Only)</label>
            <input
              type="text"
              id="q3"
              value={q3}
              onChange={(e) => setq3(e.target.value)}
            />
            {/* Add a button to submit the form */}
            <button type="submit">Submit Answers</button>
          </form>
        </main>
        <footer>
          &copy; 2024 CSC 425 Midterm.
        </footer>
      </div>
    </div>
  );
}

export default Quiz;
