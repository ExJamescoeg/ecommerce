<template>
  <div class="card-unavailable">
    <div>
      <div v-if="loading" class="loader"></div>
    </div>
    <img v-if="loading" style="opacity: 0%" class="void-unavailable" src="@/assets/sad-face.jpg" alt="Sad-Face" />
    <div v-else>
      <center>
        <div class="unavailable-message">This product is unavailable to show</div>
      </center>
      <img class="void-unavailable" src="@/assets/sad-face.jpg" alt="Sad-Face" />
    </div>
    <button style="position: absolute" @click="fetchNextProduct" :class="'next-product-' + productCategory">Next product</button>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    productCategory: String,
  },
  methods: {
    fetchNextProduct() {
      this.$emit("fetchNextProduct");
    },
  },
};
</script>

<style scoped>
.card-unavailable {
  background-color: white;
  font-weight: 500;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  width: 65%;
  height: 75%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;
}

img {
  width: 75%;
  margin: 0 10%;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  border: 16px solid var(--color-light-gray);
  border-top: 16px solid var(--color-dark-blue);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
  margin: auto;
  margin-top: 100%;
}

button {
  font-family: "Inter";
  border-radius: 3px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
  width: 48%;
  height: 40px;
  cursor: pointer;
}
.next-product-unavailable-product:hover {
  opacity: 80%;
  font-size: 21px;
  padding-bottom: 5px;
}
img.void-unavailable {
  padding-left: 30px;
}

.unavailable-message {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Inter";
  font-size: 20px;
  font-weight: 400;
}

@media (max-width: 768px) {
  .card-unavailable {
    width: 90%;
  }
  img.void-unavailable {
    padding-left: 10px;
  }
  button {
    margin-top: 200px;
  }
  .unavailable-message {
    top: 35%;
  }
}
</style>
