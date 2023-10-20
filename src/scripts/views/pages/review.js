import API_ENDPOINT from '../../globals/api-endpoint';
import { createReviewFormTemplate } from '../templates/template-creator';

const ReviewForm = {
  init(reviewFormContainer, restaurantId) {
    this.reviewFormContainer = reviewFormContainer;
    this.restaurantId = restaurantId;
    this.render();
  },

  async render() {
    const formHTML = createReviewFormTemplate();
    this.reviewFormContainer.innerHTML = formHTML;
    this.attachFormSubmitHandler();
  },

  attachFormSubmitHandler() {
    const reviewForm = document.querySelector('#reviewForm');
    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      this.submitReview();
    });
  },

  async afterRender() {
    const formContainer = document.querySelector('#review-data');
    formContainer.innerHTML = createReviewFormTemplate();
  },

  async submitReview() {
    const reviewName = document.querySelector('#reviewName').value;
    const reviewText = document.querySelector('#reviewText').value;

    if (reviewName && reviewText) {
      const reviewData = {
        id: this.restaurantId,
        name: reviewName,
        review: reviewText,
      };

      try {
        const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reviewData),
        });

        if (response.ok) {
          this.addReviewToUI(reviewName, reviewText);
        } else {
          console.error('Gagal menambahkan ulasan');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert('Silakan isi semua field ulasan.');
    }
  },

  addReviewToUI(name, text) {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
    const customerReviewsList = document.querySelector('#customerReviewsList');

    const newReviewHTML = `
      <li>
        <p><strong>${name}</strong></p>
        <p>${text}</p>
        <p class="review-date">${formattedDate}</p>
      </li>
    `;

    customerReviewsList.insertAdjacentHTML('beforeend', newReviewHTML);
  },
};

export default ReviewForm;
