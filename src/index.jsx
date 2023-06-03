import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {

 
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0)
  

const handleUpClick = () => {
  setLike(like + 1);
}

const handleDownClick = () => {
  setDislike(dislike + 1);
}

  return (
    <div className="container">
      

      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png" />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button onClick={handleUpClick} id="btn-up" className="btn-like btn-like--up"></button>
          <span id="likes-up" className="likes-count likes-count--up">0</span>
          <button onClick={handleDownClick}  id="btn-down" className="btn-like btn-like--down"></button>
          <span id="likes-down" className="likes-count likes-count--down">0</span>
        </div>
      </div>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
