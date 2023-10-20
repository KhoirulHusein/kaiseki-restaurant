import restaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, createLoadingIndicatorTemplate } from '../templates/template-creator';

const homePage = {
  async render() {
    return `
    <div tabindex="0" class="hero">
      <div class="hero-inner">
        <h1 class="hero-title">Kaisekai Restaurant</h1>
        <p class="hero-tagline">Taste the Moments, Sip the Memories at Kaisekai Restaurant</p>
      </div>
    </div>
    
    <section class="container-bg">
      <div id="loading-container"></div>
      <h1 class="custom-padding-h1" tabindex="0">Explore Restaurant</h1>
      <div id="ExploreRestaurant" class="container">
      </div>
    </section>

    <div tabindex="0" class="newslatter-container">
      <section class="newslatter">
        <h1>Join us <span>Kaisekai</span></h1>
        <p>Enter your email address below so you can receive our latest updates</p>
        <div class="txtb">
          <input type="email" placeholder="Enter Your Address">
          <button type="button">-></button>
        </div>
      </section>
    </div>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#ExploreRestaurant');
    const loadingContainer = document.querySelector('#loading-container');

    if (loadingContainer) {
      loadingContainer.innerHTML = createLoadingIndicatorTemplate();
    }

    try {
      const restaurantData = await restaurantSource.restaurantDataHomePage();
      const itemsToRender = restaurantData.slice(0, 18);

      itemsToRender.forEach((restaurantOutput) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurantOutput);
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

export default homePage;
