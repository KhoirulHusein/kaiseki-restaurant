import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH_RESTAURANT: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
  RESTAURANT_IMAGE_MEDIUM: (pictureId) => `${CONFIG.IMAGE_BASE_URL}/${pictureId}`,
};

export default API_ENDPOINT;
