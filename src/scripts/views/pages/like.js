import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { dataRestorant } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="main">
        <h2 class="content__heading">Your Liked</h2>
        <div id="query" class="posts restaurant-item_not_found">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('.posts');

    const empty = document.querySelector('.restaurant-item_not_found');
    if (restaurants.length === 0) {
      empty.innerHTML = `
      <h2>Tidak ada favorite restaurant yang ditampilkan</h2>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += dataRestorant(restaurant);
    });
  },
};

export default Like;
