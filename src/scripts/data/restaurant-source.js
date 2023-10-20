import API_ENDPOINT from '../globals/api-endpoint';

class restaurantSource {
  static async restaurantDataHomePage() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }
}

export default restaurantSource;
