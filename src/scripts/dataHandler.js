function dataHandler() {
  async function fetchData() {
    try {
      const response = await fetch('./data/DATA.json');
      const data = await response.json();
      return data.restaurants;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  async function renderRestaurant() {
    const exploreRestaurant = document.querySelector('#ExploreRestaurant');
    exploreRestaurant.innerHTML = '';

    try {
      const fetchRestaurant = await fetchData();

      fetchRestaurant.forEach(Restaurant => {
        exploreRestaurant.innerHTML += `
          <article tabindex="0" class="headline">
            <img src="${Restaurant.pictureId}" alt="${Restaurant.name}">
            <p class="cityRender">${Restaurant.city}</p>
            <div class="headline-content">
              <p class="ratingRender">Rating: ${Restaurant.rating}</p>
              <h4 class="nameRender">${Restaurant.name}</h4>
              <p class="descriptionRender">${Restaurant.description}</p>
            </div>
          </article>
        `;
      });
    } catch (error) {
      console.error('Error rendering :', error);
    }
  }

  renderRestaurant();
}

export default dataHandler;