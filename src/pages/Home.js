// Home.js

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import './assets/css/styles.css'; // Import the CSS from styles.css file

const Home = () => {
  return (
<div id="home">
      <h2>About the Project</h2>
      <p>
        The College Branch Predictor is an innovative web application designed
        to simplify the college and branch selection process for high school
        students and parents. With the ever-increasing number of colleges and
        branches available, making the right choice can be overwhelming. That's
        where we come in.
      </p>
      <p>
        Our platform utilizes cutting-edge technology and advanced algorithms
        to analyze your academic performance and preferences, providing
        personalized recommendations for college branches that align with your
        goals and aspirations. Whether you're aiming for top-tier institutions
        or exploring niche branches, we're here to help you navigate the
        complex landscape of higher education.
      </p>
      <hr id="line" />
      <h2>How It Works</h2>
      <ol>
        <li>
          <strong>Input Your Data:</strong> Share your academic scores and
          entrance exam marks with us.
        </li>
        <li>
          <strong>Express Your Preferences:</strong> Let us know your preferred
          college branches and any specific requirements you have.
        </li>
        <li>
          <strong>Receive Tailored Recommendations:</strong> Our algorithm
          crunches the numbers and delivers personalized suggestions tailored
          to your unique profile.
        </li>
      </ol>
      <hr id="line" />
      <h2>Why Choose Us?</h2>
      <ul>
        <li>
          <strong>Accuracy and Reliability:</strong> Our recommendations are
          backed by extensive data analysis and continuous refinement, ensuring
          accurate predictions.
        </li>
        <li>
          <strong>User-Centric Approach:</strong> We prioritize user experience,
          providing an intuitive interface that simplifies the decision-making
          process.
        </li>
        <li>
          <strong>Empowering Your Future:</strong> By guiding you towards the
          right college branches, we empower you to pursue your academic and
          career aspirations with confidence.
        </li>
      </ul>
    </div>
  );
};

export default Home;
