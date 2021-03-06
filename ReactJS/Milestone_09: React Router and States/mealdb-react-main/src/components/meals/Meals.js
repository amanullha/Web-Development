import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import loading from '../../loading.svg';
import Meal from '../meal/Meal';
import './meals.css';
const Meals = () => {

  const [meals, setMeals] = useState([]);
  const [input, setInput] = useState('');
  const [name, setName] = useState('cake');

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // before api call , loader will display
    setIsLoading(true)
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then((res) => res.json())
        .then((data) => {
          setMeals(data.meals);
          // after fetch data ,it will gone
          setIsLoading(false)
        });

    } catch (error) {
      // if there is any error , also loader will be hide
      setIsLoading(false)
      console.log(error);
    }
  }, [name]);
  return (
    <div>

      <div>
        <input
          className='searchInput'
          value={input}
          type='text'
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter your favorite meals name'
        />

        <button className='searchBtn' onClick={() => setName(input)}>
          <FontAwesomeIcon icon={faCoffee} />
          Search
        </button>
      </div>


      <h2>Total meal : {meals.length}</h2>
      {/* loader: if loading is true loader will display else hide */}
      <img className={`loading ${isLoading ? '' : 'hide'}`} src={loading} alt='' />

      <div className='meals-container'>
        {
          meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal} />
          ))
        }
      </div>
    </div>
  );
};

export default Meals;
