import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate, createLikeButtonTemplate, createLoadingIndicatorTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import ReviewForm from './review';

const Detail = {
  async render() {
    return `
      <div class="restaurant-container">
        <div id="loading-container"></div>
        <div tabindex="0" id="restaurantDataOut" class="restaurant-detail"></div>
      </div>
      <div id="reviewFormContainer"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurantDataOut');
    const loadingContainer = document.querySelector('#loading-container');
    const errorContainer = document.querySelector('#error-container');

    if (loadingContainer) {
      loadingContainer.innerHTML = createLoadingIndicatorTemplate();
    }

    try {
      const restaurantOutput = await restaurantSource.detailRestaurant(url.id);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurantOutput.restaurant);

      const likeButtonContainer = document.querySelector('#likeButtonContainer');
      likeButtonContainer.innerHTML = createLikeButtonTemplate();

      if (restaurantOutput.restaurant) {
        LikeButtonInitiator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          restaurant: {
            id: restaurantOutput.restaurant.id,
            city: restaurantOutput.restaurant.city,
            name: restaurantOutput.restaurant.name,
            description: restaurantOutput.restaurant.description,
            pictureId: restaurantOutput.restaurant.pictureId,
            rating: restaurantOutput.restaurant.rating,
          },
        });

        const reviewFormContainer = document.querySelector('#reviewFormContainer');
        const reviewForm = Object.create(ReviewForm);
        reviewForm.init(reviewFormContainer, restaurantOutput.restaurant.id);
      }

      if (loadingContainer) {
        loadingContainer.innerHTML = '';
      }
    } catch (error) {
      if (loadingContainer) {
        loadingContainer.innerHTML = '';
      }
      if (errorContainer) {
        errorContainer.innerHTML = 'Gagal memuat data. Silakan coba lagi nanti.';
      }
    }
  },
};

export default Detail;
