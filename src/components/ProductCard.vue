<template>
  <div class="product">
    <div :class="'background-' + productCategory"></div>
    <div class="container">
      <ProductUnavailable v-if="productCategory === 'unavailable-product'" @fetchNextProduct="fetchNextProduct" :productCategory="productCategory" :loading="loading"></ProductUnavailable>
      <ProductAvailable v-else :product="product" @fetchNextProduct="fetchNextProduct" :productCategory="productCategory" :loading="loading"></ProductAvailable>
    </div>
  </div>
</template>

<script>
import ProductUnavailable from "./ProductUnavailable.vue";
import ProductAvailable from "./ProductAvailable.vue";

export default {
  data() {
    return {
      product: {},
      loading: true,
      productCategory: "",
      currentIndex: 15,
      maxIndex: 20,
    };
  },
  created() {
    this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      try {
        this.loading = true;
        let storeAPI = `https://fakestoreapi.com/products/${this.currentIndex}`;
        const response = await fetch(storeAPI);
        const data = await response.json();
        console.log(data);
        // if (data.category === "men's clothing" || data.category === "women's clothing") {
        //   this.product = data;
        //   this.setProductCategory(data.category);
        // }
        this.product = data;
        this.setProductCategory(data.category);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        this.loading = false;
      }
    },
    setProductCategory(category) {
      if (category === "men's clothing" || category === "women's clothing") {
        this.productCategory = category === "men's clothing" ? "men-section" : "women-section";
      } else {
        this.productCategory = "unavailable-product";
      }
    },
    fetchNextProduct() {
      this.currentIndex = (this.currentIndex % this.maxIndex) + 1;
      this.fetchProduct();
    },
    isCircleActive(index) {
      return index <= this.product.rating;
    },
  },
  components: {
    ProductUnavailable,
    ProductAvailable,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");

.product {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.background-men-section,
.background-women-section,
.background-unavailable-product {
  height: 100vh;
  width: 100vw;
  top: -26%;
  position: absolute;
}
.background-men-section {
  background-color: #d6e6ff;
}
.background-women-section {
  background-color: #fde2ff;
}
.background-unavailable-product {
  background-color: #dcdcdc;
}
</style>
