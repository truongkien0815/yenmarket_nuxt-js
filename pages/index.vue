

<script setup>
import { useHead, onMounted, ref } from "#imports";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

useHead({
  title: "Yen Market",
  meta: [
    { name: "description", content: "Siêu thị nhập khẩu Tiêu Chuẩn Nhật Bản" },
    { property: "og:title", content: "Yen Market" },
    { property: "og:image", content: "/images/logo-brand-1.png" },
  ],
});

const product_fishseafoo = ref([]);
const product_frozenmeat = ref([]);
const loading = ref(true);
const errorMsg = ref("");

const fetchProduct = async () => {
  try {
    const { data, error } = await useFetch("/api/products");
    if (error.value) {
      errorMsg.value = "Không thể tải dữ liệu sản phẩm.";
    } else {
      const fishseafoo_Products =
        data.value?.filter(
          (product) => product.category === "FISH AND SEAFOOD"
        ) || [];
      product_fishseafoo.value = fishseafoo_Products;

      const frozenmeat_Products =
        data.value?.filter((product) => product.category === "FROZEN MEAT") ||
        [];
      product_frozenmeat.value = frozenmeat_Products;
    }
  } catch (err) {
    errorMsg.value = "Lỗi không xác định.";
    console.error(err);
  } finally {
    loading.value = false;
  }
};
fetchProduct();

onMounted(() => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 7777000,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
  });
});
</script>











<template>
  <!-- Hiển thị component theo route -->
  <div class="home-container">
    <!-- <Hello /> -->
    <div class="banner_category">
      <div class="row">
        <div class="col-md-4 ps-0 pe-0">
          <ul id="ul_category">
            <li>PROMOTION</li>
            <li id="li-after">OUR PRODUCTS</li>
            <li id="li-after">YEN MARKET MENU</li>
            <li id="li-after">SEASONAL</li>
          </ul>
        </div>
        <div class="col-md-8">
          <div class="banner-container">
            <div class="slider swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="/images/Banner8.jpg" alt="Slide 1" />
                </div>
                <div class="swiper-slide">
                  <img src="/images/banner1.jpg" alt="Slide 2" />
                </div>
              </div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner_new pt-3 overflow-scroll-x">
      <div class="banner-scroll d-flex">
        <LazyNuxtImg src="/images/banner3_1.png" alt="" />
        <LazyNuxtImg src="/images/banner3_2.png" alt="" />
        <LazyNuxtImg src="/images/banner3_3.png" alt="" />
      </div>
    </div>

    <div class="banner_address">
      <LazyNuxtImg
        src="https://mastererp.mylifecompany.com/Resources/Images/Object/Banner9114012025041546_S.jpg"
        alt=""
      />
    </div>
    <div class="product">
      <div class="subcate-name fz-xxl color-title fw-bold my-3">
        FISH AND SEAFOOD
      </div>
      <div v-if="loading">Đang tải dữ liệu...</div>
      <div v-else-if="errorMsg">{{ errorMsg }}</div>
      <div v-else class="product-list">
        <div class="card" v-for="item in product_fishseafoo" :key="item.id">
          <div class="image-product">
            <LazyNuxtImg
              :src="item.image"
              class="card-img-top"
              :alt="item.name"
              loading="lazy"
            />
            <div class="buy">
              <LazyNuxtImg src="/images/icon-cart.svg" alt="" />
            </div>
          </div>
          <div class="card-bodyf">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-price">
              <b>{{ item.price }} /</b>{{ item.unit }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="btn-seemore py-4 w-100 d-flex align-items-center justify-content-center"
      >
        <div class="style-button">
          <div class="btn">Xem tất cả</div>
        </div>
      </div>
    </div>

    <div class="product">
      <div class="subcate-name fz-xxl color-title fw-bold my-3">
        FROZEN MEAT
      </div>
      <div v-if="loading">Đang tải dữ liệu...</div>
      <div v-else-if="errorMsg">{{ errorMsg }}</div>
      <div v-else class="product-list">
        <div class="card" v-for="item in product_frozenmeat" :key="item.id">
          <div class="image-product">
            <LazyNuxtImg
              :src="item.image"
              class="card-img-top"
              :alt="item.name"
              loading="lazy"
            />
            <div class="buy">
              <LazyNuxtImg src="/images/icon-cart.svg" alt="" />
            </div>
          </div>
          <div class="card-bodyf">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-price">
              <b>{{ item.price }} /</b>{{ item.unit }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="btn-seemore py-4 w-100 d-flex align-items-center justify-content-center"
      >
        <div class="style-button">
          <div class="btn">Xem tất cả</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.image-product {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.image-product img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  font-size: 16px;
}
.card-price {
  color: #ca2628;
}
.overflow-scroll-x {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.banner-scroll {
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
}
.banner-scroll img {
  width: auto;
  max-height: 200px;
  flex: 0 0 auto;
}
.style-button .btn {
  border-radius: 100px;
  background: #ca2628;
  color: #fff;
  min-width: 9rem;
  width: fit-content;
}
.btn-seemore {
  position: relative;
}
.style-button {
  background: #fff;
  padding: 0 1rem;
  position: relative;
  width: fit-content;
  z-index: 1;
}
.home-container .btn-seemore:before {
  background-color: #dee2e6;
  content: "";
  height: 1px;
  position: absolute;
  width: 100%;
}
.card-title {
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  flex-direction: column;
  justify-content: space-between;
  min-height: 40px;
  width: 100%;
  display: -webkit-box;
  text-overflow: ellipsis;
}

.product-list {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 0.75rem;
  height: -moz-fit-content;
  height: fit-content;
  grid-template-columns: repeat(5, 1fr);
}
.card {
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0.6rem;
  width: 100%;
}
.image-product {
  position: relative;
}
.buy {
  background: #ca2628;
  position: absolute;
  left: 81%;
  bottom: 5px;
  align-items: center;
  border-radius: 100px;
  box-shadow: 0 0 4px #b5b5b5ad;
  cursor: pointer;
  display: flex;
  height: 2.1rem;
  justify-content: center;
  line-height: 0px !important;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  width: 2.1rem;
}
.buy img {
  padding: 0.35rem;
  filter: brightness(0) invert(1);
}
img {
  max-width: 100%;
}
.home-container {
  padding-left: 4rem;
  padding-right: 4rem;
}
.swiper-slide img {
  width: 100%;
  display: block;
  object-fit: cover;
}
.swiper-pagination {
}

#ul_category #li-after {
  align-items: center;
  background: #f7f7f7;
  border-bottom: 1px dotted #e1e1e1;
  display: flex;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  width: 24rem;
  position: relative;
}
#ul_category li {
  align-items: center;
  background: #f7f7f7;
  border-bottom: 1px dotted #e1e1e1;
  display: flex;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  width: 24rem;
  position: relative;
}
#ul_category #li-after::after {
  content: "";
  position: absolute;
  left: 93%;
  top: 50%;
  transform: rotate(-90deg) !important;
  width: 12px;
  height: 12px;
  background-image: url("/images/icon-arrow.svg");
  background-size: contain;
  background-repeat: no-repeat;
}

.banner-container {
  padding-top: 0.75rem;
}
.banner_address {
  padding-top: 1rem;
}
@media screen and (min-width: 1181px) {
  .fz-xxl {
    font-size: 20px !important;
    line-height: 23px !important;
  }
}
@media screen and (max-width: 770px) {
  .banner-scroll img {
    width: 80%;
  }
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
  .home-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  #ul_category {
    display: none;
  }
  .overflow-scroll-x {
    overflow-x: auto !important;
    white-space: nowrap;
    grid-template-columns: repeat(1, 1fr);
  }
}

.swiper-button-prev,
.swiper-button-next {
  background: #00000080;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  height: unset;
  width: unset;
  font-size: 15px;
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  font-size: 15px;
}

.swiper-button-next:after,
.swiper-rtl .swiper-button-prev {
  font-size: 15px;
}
.swiper-pagination-bullet {
  height: 12px;
  width: 12px;
}
.swiper-pagination-bullet-active {
  background: #fff;
}
</style>







