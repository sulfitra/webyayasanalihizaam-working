<template>
  <section class="hero">
    <img src="~/static/hero-image.jpg" alt="Hero Image" class="hero-image">
    <div class="container">
      <h1 class="hero-title">Yayasan Ali Hizaam</h1>
      <p class="hero-description">Menyediakan pelatihan dan pendidikan terbaik bagi siswa-siswi Indonesia
      <nuxt-link to="/programs" class="btn btn-primary">Lihat Program Kami</nuxt-link></p>
    </div>
  </section>
</template>

<style>
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
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: cadetblue;
  }
  .hero-description {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 2rem;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(1, 41, 31);
  }
</style>
