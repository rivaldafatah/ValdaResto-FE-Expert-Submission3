import RestaurantSource from '../../data/restaurant-source';
import { dataRestorant } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="main">
        <div class="roam">
          <div class="roaming__label">
            <h1>Jelajahi Semua Restaurant</h1>
            <div class="posts"></div>
          </div>
        </div>
      </section>
    ;
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.home();
    const restaurantContainer = document.querySelector('.posts');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += dataRestorant(restaurant);
    });
  },
};

export default Home;
