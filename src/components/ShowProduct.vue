<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
          <h2>Product</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowProduct',
  data () {
    return {
      products: [],
    }
  },
  created: function () {
    this.axios.get('http://laraapiecom/api/products').then((response) => {
      console.log(response.data.data)
      this.products = response.data.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
