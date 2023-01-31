<template>
  <section class="hero">
    <div class="myc">
      <h1 class="hero-title">Yayasan Ali Hizaam</h1>
      <p class="hero-description">
        Menyediakan pelatihan dan pendidikan terbaik bagi siswa-siswi Indonesia
      </p>
      <div>
        <nuxt-link to="#program" class="btn btn-primary"
          >Lihat Program Kami</nuxt-link
        >
      </div>
    </div>
  </section>
</template>

<style>
.hero {
  background-image: url("~static/hero-image.jpg");
  padding: 20rem 0 10rem;

  background-repeat: no-repeat;
  background-size: cover;
}
.myc {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}
.hero {
  position: relative;
}
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}
.hero-title {
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.432);
  font-size: 2.5rem;
  text-shadow: 10px;
  font-weight: 700;
  color: cadetblue;
}
.hero-description {
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  color: rgb(1, 41, 31);
}
@media screen and (max-width: 600px) {
  .hero {
    padding: 20rem 4rem 10rem;
  }
  .hero-title {
    font-size: 1.5rem;
    white-space: nowrap;
  }
  .hero-description {
    font-size: 1rem;
  }
}
</style>
