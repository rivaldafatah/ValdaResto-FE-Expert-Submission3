import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const detailRestorant = (restaurant) => `
  <h2 class="post__title">${restaurant.name}</h2>
  <img class="post__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="post__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <h4>Menu Makanan</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(',')}</p>
    <h4>Menu Minuman</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(',')}</p>
  </div>
`;

const reviewRestaurant = (review) => `
  <div class="review">
  <h4>Name</h4>
  <p>${review.name}</p>
  <h4>Review</h4>
  <p>${review.review}</p>
  <h4>Date</h4>
  <p>${review.date}</p>
  </div>
`;

const dataRestorant = (restaurant) => `
  <article class="post-item">
            <div class="post-item__card ">
            <img class="post-item__thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
            <p class="post-item__city">Kota ${restaurant.city}</p>
            <p class="post-item__rating">Rating: ${restaurant.rating}</p>
            </div>           
            <div class="post-item__content">
              <h1 class="post-item__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
              <p class="post-item__description">${restaurant.description}</p>
            </div>
          </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  detailRestorant,
  dataRestorant,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  reviewRestaurant,
};
