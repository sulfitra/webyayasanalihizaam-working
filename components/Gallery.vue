<template>
  <section class="gallery">
    <div class="container">
      <h2 class="title">Gallery</h2>
      <div>
        <div class="mx-auto">
          <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
            img-width="auto" img-height="500" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">
            <div v-for="image in images" :key="image.id">
              <b-carousel-slide :caption="image.caption" :text="image.caption"
                :img-src="image.src"></b-carousel-slide>
            </div>
          </b-carousel>
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

/* .gallery img {
    background-color: red;
    margin: auto 0;
    width: auto;
    height: 200px;
  } */
.gallery .caption {
  text-align: center;
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
          src: "/image1.jpg",
          alt: 'Gambar 1',
          caption: 'Rapat Pengelola'
        },
        {
          id: 2,
          src: '/image2.jpg',
          alt: 'Gambar 2',
          caption: 'Gambar 2'
        },
        {
          id: 3,
          src: '/image3.jpg',
          alt: 'Gambar 3',
          caption: 'Gambar 3'
        },
        {
          id: 4,
          src: '/image4.jpg',
          alt: 'Gambar 4',
          caption: 'Gambar 4'
        },
        {
          id: 5,
          src: '/image5.jpg',
          alt: 'Gambar 5',
          caption: 'Gambar 5'
        },
        {
          id: 6,
          src: '/image6.jpg',
          alt: 'Gambar 6',
          caption: 'Gambar 6'
        },
        {
          id: 7,
          src: '/image7.jpg',
          alt: 'Gambar 7',
          caption: 'Gambar 7'
        },
        {
          id: 8,
          src: '/image8.jpg',
          alt: 'Gambar 8',
          caption: 'Gambar 8'
        },
        {
          id: 9,
          src: '/image9.jpg',
          alt: 'Gambar 9',
          caption: 'Gambar 9'
        },
        {
          id: 10,
          src: '/image10.jpg',
          alt: 'Gambar 10',
          caption: 'Gambar 10'
        },
        {
          id: 11,
          src: '/image11.jpg',
          alt: 'Gambar 11',
          caption: 'Gambar 11'
        },
        {
          id: 12,
          src: '/image12.jpg',
          alt: 'Gambar 12',
          caption: 'Gambar 12'
        },
        {
          id: 13,
          src: '/image13.jpg',
          alt: 'Gambar 13',
          caption: 'Gambar 13'
        },
      ]
    }
  }
}
</script>
