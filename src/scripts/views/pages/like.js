import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate, createLoadingIndicatorTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <section class="container-bg">
        <div id="loading-container"></div>
        <div id="ExploreRestaurant" class="container">
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#ExploreRestaurant');
    const loadingContainer = document.querySelector('#loading-container');
    loadingContainer.innerHTML = createLoadingIndicatorTemplate();

    try {
      const restaurantData = await FavoriteRestaurantIdb.getAllRestaurants();

      restaurantData.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });

      if (loadingContainer) {
        loadingContainer.innerHTML = '';
      }
    } catch (error) {
      if (loadingContainer) {
        loadingContainer.innerHTML = '';
      }
      if (loadingContainer) {
        loadingContainer.innerHTML = 'Gagal memuat data. Silakan coba lagi nanti.';
      }
    }
  },
};

export default Like;
