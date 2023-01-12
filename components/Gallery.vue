<template>
  <section class="gallery">
    <div class="container">
      <h2 class="title">Gallery</h2>
      <div class="row">
        <div class="col-md-4" v-for="image in images" :key="image.id">
          <img :src="image.src" :alt="image.alt" class="img-fluid">
          <p class="caption">{{ image.caption }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  /* Style untuk komponen Gallery */
  .gallery {
    /* Style lainnya */
    padding: 20px 0;
  }
  .gallery .title {
    /* Style lainnya */
    text-align: center;
  }
  .gallery img {
    /* Style lainnya */
  }
  .gallery .caption {
    /* Style lainnya */
  }
</style>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      images: [
        {
          id: 1,
          src: '_nuxt/static/image1.jpg',
          alt: 'Gambar 1',
          caption: 'Rapat Pengelola'
        },
        {
          id: 2,
          src: '_nuxt/static/image2.jpg',
          alt: 'Gambar 2',
          caption: 'Gambar 2'
        },
        {
          id: 3,
          src: '/assets/image3.jpg',
          alt: 'Gambar 3',
          caption: 'Gambar 3'
        },
      ]
    }
  }
}
</script>
