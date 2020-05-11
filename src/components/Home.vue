<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div class="card mb-4 shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" ><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="40%" y="50%" fill="#eceeef" dy=".3em">Product</text></svg>
            <div class="card-body">
              <p class="card-text">{{product.title}}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" v-on:click="show(product.id)">View</button>
                  <button type="button" class="btn btn-sm btn-outline-danger">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      products: [],
    }
  },
  created: function () {
    this.axios.get('http://laraapiecom/api/products').then((response) => {
      // console.log(response.data.data)
      this.products = response.data.data
    })
  },
  methods: {
    show: function(id){
      this.$router.push('/show/' + id)
      //console.log(id)
    //   this.axios.post('http://laraapiecom/api/product/' + id).then((response) => {
    //   console.log(response.data)
    // })
    }
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
