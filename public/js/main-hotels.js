const GET_HOTELS_REQUEST = "/api/v1/hotel";
const main = document.getElementById("main");

let hotels = [];

(async function getHotels() {
  try {
    const { data: responses } = await axios.get(GET_HOTELS_REQUEST);
    hotels = responses.data;

    main.innerHTML = "";
    hotels.forEach((hotel) => {
      main.innerHTML += card(hotel);
    });
  } catch (error) {
    console.log(error);
  }
})();

const card = (hotel) => {
  return `<div class="card">
    <div class="title-card">
      <span class="hotel-title">
        ${hotel?.name}
      </span>
      <span class="cost">
        ${hotel?.cost}$
      </span>
    </div>
  <div class="description-card">${hotel?.description}</div>
</div><br />`;
};
