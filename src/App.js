// App.js
import React, { useCallback, useEffect, useState } from 'react';
import BootstrapWrapper from './BootstrapWrapper';
import Navbar from './Layout/Navbar';
import Searchbar from './UI/Searchbar';
import FoodList from './Food-List/FoodList';
import BackToTopBtn from './UI/BackToTopBtn';

function App() {
  const [foodList, setFoodList] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const searchHandler = (query, category) => {
    setSearchQuery(query);
    setSelectedCategory(category);
  };

  const fetchFoodHandler = useCallback(async () => {
    try {
      const response = await fetch('https://petfood-8a9e8-default-rtdb.firebaseio.com/foods.json');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const loadedFoods = [];

      for (const key in data) {
        loadedFoods.push({
          id: key,
          ...data[key],
        });
      }

      setFoodList(loadedFoods);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchFoodHandler();
  }, [fetchFoodHandler]);

  return (
    <BootstrapWrapper>
      <div className="App">
        <Navbar />
        <Searchbar onSearch={searchHandler}/>
        <FoodList foodList={foodList} searchQuery={searchQuery} selectedCategory={selectedCategory}/>
        <BackToTopBtn />
      </div>
    </BootstrapWrapper>
  );
}

export default App;
