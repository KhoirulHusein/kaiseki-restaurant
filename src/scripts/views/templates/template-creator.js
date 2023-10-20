import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant-name">${restaurant.name}</h2><br>
  <center><img class="restaurant-image" src="${CONFIG.IMAGE_BASE_URL}/${restaurant.pictureId}" alt="${restaurant.name}">
  <p class="restaurant-address">Address: ${restaurant.address}, ${restaurant.city}</p><br></center>
  <p class="restaurant-description">${restaurant.description}</p><br>

  <h3 class="section-title">Menu Makanan</h3>
  <ul class="food-menu">
    ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
  </ul>

  <h3 class="section-title">Menu Minuman</h3>
  <ul class="drink-menu">
    ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
  </ul>

  <h3 class="section-title">Customer Reviews</h3>
  <ul id="customerReviewsList" class="customer-reviews">
    ${restaurant.customerReviews.map((review) => `
      <li>
        <p><strong>${review.name}</strong></p>
        <p>${review.review}</p>
        <p class="review-date">${review.date}</p>
      </li>
    `).join('')}
  </ul>
`;

const createReviewFormTemplate = () => `
  <section tabindex="0" class="form-container">
    <form id="reviewForm">
      <h3 class="section-title">Tambahkan Ulasan Anda</h3>
      <label for="reviewName">Nama:</label>
      <input type="text" id="reviewName" required>
      <label for="reviewText">Ulasan:</label>
      <textarea id="reviewText" required></textarea>
      <button type="submit">Kirim Ulasan</button>
    </form>
  </section>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article tabindex="0" class="card">
  <div class="imgBx">
  <img src="${CONFIG.IMAGE_BASE_URL}/${restaurant.pictureId}" alt="${restaurant.name}">
  </div>
  <div class="content">
    <h2 class="cityRender">${restaurant.city}</h2>
    <p class="ratingRender">⭐️ ${restaurant.rating}</p>
    <h4 class="nameRender">${restaurant.name}</h4>
    <p class="descriptionRender">${restaurant.description}</p>
    <a class="custom-ancorButton" href="/#/detail/${restaurant.id}"><button class="read-more">Read More</button></a>
  </div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <img src="./images/like.png" alt="icon like">
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
  <img src="./images/unlike.png" alt="icon unlike">
  </button>
`;

const createLoadingIndicatorTemplate = () => `
  <div id="loading-indicator" class="loading">
  <div class="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewFormTemplate,
  createLoadingIndicatorTemplate,
};
