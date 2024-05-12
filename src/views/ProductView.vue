<template>
  <div>
    <Products />
  </div>
</template>

<script>
import Products from "@/components/ProductCard";

export default {
  components: {
    Products,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
:root {
  --color-dark-blue: #002772;
  --color-light-pink: #fde2ff;
  --color-dark-gray: #1e1e1e;
  --color-dark-pink: #720060;
  --color-light-blue: #d6e6ff;
  --color-medium-gray: #3f3f3f;
  --color-light-gray: #dcdcdc;
  --color-white: #ffffff;
}
</style>
