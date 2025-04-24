



<script setup>
import { useHead } from "#imports";

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css",
      integrity:
        "sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7",
      crossorigin: "anonymous",
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js",
      integrity:
        "sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq",
      crossorigin: "anonymous",
      body: true,
    },
  ],
});
</script>

<template>
  <header>
    <div class="header-container">
      <div
        class="header-content pd-container w-100 max-width d-flex align-items-center justify-content-between"
      >
        <div class="img-brand select-none">
          <LazyNuxtImg
            class="cursor-pointer"
            src="/images/logo-brand.D-hX70gZ.png"
            alt=""
          />
        </div>
        <div class="header-find">
          <div class="group-find">
            <input
              type="text"
              class="style-input fz-lg"
              placeholder="Key search"
            /><img class="cursor-pointer" src="/images/icon-find.svg" alt="" />
          </div>
        </div>
        <div class="header-hotline select-none pc-none">
          <LazyNuxtImg
            class="icon-primary cursor-pointer"
            src="/images/icon-hotline.svg"
            alt=""
          /><span class="span-hotline gap-1 d-flex flex-column cursor-pointer"
            ><span class="fz-md fw-bold">Hotline</span
            ><span class="fz-md fw-bold">1900 066 890</span></span
          >
        </div>
        <div class="header-user select-none pc-none">
          <LazyNuxtImg
            class="cursor-pointer icon-primary"
            src="/images/icon-user.svg"
            alt=""
          /><span class="span-user gap-1 d-flex flex-column cursor-pointer"
            ><span class="fz-md fw-bold">Hi, </span
            ><span class="fz-md fw-bold">Login</span></span
          >
        </div>
        <div class="header-right select-none">
          <div class="btn-cart p-1 cursor-pointer pc-none">
            <LazyNuxtImg
              class="icon-primary"
              src="/images/icon-cart.svg"
              alt=""
            /><!---->
          </div>
          <div class="header-lang">
            <LazyNuxtImg
              class="cursor-pointer"
              src="/images/flag-vi.svg"
              alt=""
            /><img class="cursor-pointer" src="/images/flag-en.svg" alt="" />
          </div>
        </div>
      </div>
      <!---->
    </div>

    <nav class="navbar navbar-dark bg-danger text-white">
      <div class="container-nav">
        <button class="navbar-toggler pc-none" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <button
          class="navbar-toggler mb-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h6 class="offcanvas-title" id="offcanvasNavbarLabel">
              Danh mục sản phẩm
            </h6>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >PROMOTION</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">OUR PRODUCTS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">YEN MARKET MENU</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">SEASONAL</a>
              </li>
              <div class="header-lang">
                <LazyNuxtImg
                  class="cursor-pointer"
                  src="/images/flag-vi.svg"
                  alt=""
                  height="28px"
                /><img
                  class="cursor-pointer"
                  src="/images/flag-en.svg"
                  alt=""
                  height="28px"
                />
              </div>
            </ul>
          </div>
        </div>

        <div class="fw-bolder category_text">Danh mục sản phẩm</div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.container-nav {
  display: flex;
  padding-left: 4rem;
  padding-right: 4rem;
}
.header-container {
  align-items: center;
  background-color: #f8f9fa;
  display: flex;
  height: 6rem;
  justify-content: center;
  max-height: 10rem;
  min-height: 5rem;
  padding-top: env(safe-area-inset-top);
  /* position: fixed; */
  top: 0;
  width: 100%;
  z-index: 500;
}
.header-container .header-content {
  gap: 1rem;
  height: 100%;
}

.max-width {
  max-width: 2080px;
}
.align-items-center {
  align-items: center !important;
}
.justify-content-between {
  justify-content: space-between !important;
}
.w-100 {
  width: 100% !important;
}
.d-flex {
  display: flex !important
;
}
.header-container .header-content .img-brand {
  height: 100%;
  padding: 0.5rem;
  width: -moz-fit-content;
  width: fit-content;
}
.header-container .header-content .img-brand img {
  height: 100%;
}
.cursor-pointer {
  cursor: pointer;
  transition: all 0.15s;
}
.header-container .header-content .header-find {
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  max-width: 35rem;
  padding: 0.5rem;
  width: -moz-fit-content;
  width: fit-content;
}
.header-container .header-content .header-find .group-find {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
}
.header-container .header-content .header-find .group-find .style-input {
  background: #f6f6f6;
  border-radius: 6px;
  padding-right: 3rem;
}
.style-input {
  background: transparent;
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
  color: #212529;
  height: -moz-fit-content;
  height: fit-content;
  min-height: 2.5rem;
  padding: 0.25rem 0.75rem;
  width: 100%;
}
.header-container .header-content .header-find .group-find img {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  z-index: 1;
}
.cursor-pointer {
  cursor: pointer;
  transition: all 0.15s;
}
.header-container .header-content .header-hotline,
.header-container .header-content .header-user {
  align-items: center;
  display: flex;
  gap: 0.5rem;
  width: -moz-fit-content;
  width: fit-content;
}
.icon-primary {
  filter: invert(14%) sepia(100%) saturate(4618%) hue-rotate(352deg)
    brightness(86%) contrast(80%);
}

.fw-bold {
  font-weight: 700 !important;
}
.header-container .header-content .header-user img {
  height: 2.7rem;
}
.flex-column {
  flex-direction: column !important;
}
.icon-primary {
  filter: invert(14%) sepia(100%) saturate(4618%) hue-rotate(352deg)
    brightness(86%) contrast(80%);
}
.header-container .header-content .header-right .header-lang {
  padding-right: 10px;
  display: flex;
  gap: 0.75rem;
  width: -moz-fit-content;
  width: fit-content;
}
.header-container .header-content .header-right .header-lang img {
  height: 1.75rem;
}
.header-container .header-content .header-right {
  align-items: center;
  display: flex;
  gap: 2rem;
  padding: 0.5rem 1rem;
  width: -moz-fit-content;
  width: fit-content;
}
.header-container .header-content .header-right .btn-cart {
  border: 2px solid #ca2628;
  border-radius: 10px;
  height: 2.7rem;
  position: relative;
  width: 2.7rem;
}
.header-container .header-content .header-right .btn-cart .icon-primary {
  height: 100%;
  padding: 0.05rem;
}
.p-1 {
  padding: 4px !important;
}
.category_text {
  font-size: 19px;
  line-height: 43px;
  text-transform: uppercase;
}
@media screen and (min-width: 770px) {
  .mb-none {
    display: none;
  }
}
@media screen and (min-width: 1181px) {
  .pd-container {
    padding-left: 4rem !important;
    padding-right: 4rem !important;
  }
  .fz-lg {
    font-size: 17.5px !important;
    line-height: 19.5px !important;
  }
  .fz-md {
    font-size: 15.5px !important;
    line-height: 17.5px !important;
  }
}
@media screen and (max-width: 770px) {
  .offcanvas-header {
    justify-content: space-around;
  }
  .nav-item .nav-link {
    color: #000;
  }
  .navbar-nav .header-lang {
    text-align: center;
    padding: 1rem;
  }
  .navbar-nav .header-lang img {
    margin-left: 10px;
  }
  .offcanvas-header {
    background: #eee;
    display: flex !important;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    padding: 0.75rem;
  }
  .offcanvas {
    max-width: 70%;
  }
  .nav-item {
    border-bottom: 1px dotted #e1e1e1;
  }
  .offcanvas-body {
    padding-top: 0;
  }
  .pc-none {
    display: none !important;
  }
  .category_text {
    font-size: unset;
  }
  .container-nav {
    padding-left: 0;
    padding-right: 0;
  }
  .header-container {
    background: linear-gradient(0deg, #dc7273, #ca2628);
    height: 4px;
  }
}
</style>


