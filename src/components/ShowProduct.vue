<template>
  <div class="album py-5 bg-light">
    <div class="container" >
      <div class="row">
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{product['title']}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${{product['price']}}</h6>
          <p class="card-text">{{product['title']}}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowProduct',
  data () {
    return {
      product: '',
    }
  },
  mounted() {
    this.axios.post('http://laraapiecom/api/product', {
        id: this.$route.params.id
      })
        .then(response => {
          console.log(response.data)
          this.product = response.data
        })
  }
}
</script>