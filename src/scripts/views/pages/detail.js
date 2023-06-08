import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { detailRestorant, reviewRestaurant } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="detail" class="detail"></div>
    <div id="detail-review" class="detail"></div>
    <div id="likeButtonContainer"></div>
    ;`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail');
    restaurantContainer.innerHTML = detailRestorant(restaurant);
    const restoReview = document.querySelector('#detail-review');
    restaurant.customerReviews.forEach((review) => {
      restoReview.innerHTML += reviewRestaurant(review);
    });
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
