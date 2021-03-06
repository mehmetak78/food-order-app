import React, {useEffect, useState} from 'react';
import classes from './Meals.module.css'
import Card from "../UI/Card";
import Meal from "./Meal";

const Meals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://react-http-92123-default-rtdb.firebaseio.com/meals.json');
        if (!response.ok || response.status !== 200) {
          throw  new Error('Cannot get data from the server')
        }
        const data = await response.json();
        const loadedMeals = [];
        for (const key in data) {
          const meal = {id: key, ...data[key]};
          loadedMeals.push(meal);
        }
        setMeals(loadedMeals);
      } catch (e) {
        setHttpError(e.message);
      }
      finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <Card className={classes.meals}>
      {isLoading && <p className={classes.loading}> Loading... </p>}
      {httpError && <p className={classes.fetchError}>{httpError}</p>}
      {!isLoading && !httpError && <ul> {meals.map(meal=> <Meal key={meal.id} meal={meal}/>) }</ul>}
    </Card>
  );
}

export default Meals;
