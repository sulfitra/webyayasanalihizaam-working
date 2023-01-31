<template>
  <section class="programs" id="program">
    <div class="container">
      <h2 class="text-center">Program-program Yayasan Ali Hizaam</h2>
      <b-card-group columns>
        <b-card img-src="~/static/program-1.jpg" img-alt="Program 1" img-top>
          <b-card-title> Program Pendidikan </b-card-title>
          <b-card-text>
            Kami menyediakan program pendidikan yang terdiri dari beberapa
            kegiatan seperti kelas bahasa Inggris, kelas matematika, dan
            lain-lain.
          </b-card-text>
        </b-card>
        <b-card img-src="~/static/program-2.jpg" img-alt="Program 2" img-top>
          <b-card-title> Program Penyediaan Bantuan Sosial </b-card-title>
          <b-card-text>
            Kami juga menyediakan program penyediaan bantuan sosial bagi
            masyarakat yang membutuhkan, seperti bantuan pangan, pakaian, dan
            lain-lain.
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </section>
</template>

<style>
/* Style untuk komponen programs */
.programs {
  padding: 60px 0;
  background-color: #f8f9fa;
}

.programs h2 {
  padding-bottom: 50px;
}

.programs-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 -15px;
}

.programs-item {
  text-align: center;
}

.programs-item img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

@media (max-width: 600px) {
  .programs-list {
    display: flex;
    flex-direction: column;
    margin: 0 -15px;
  }
  .programs-list div {
    display: flex;
    padding: 0 20px;
    flex-direction: column;
  }
  .programs-list div p {
    text-align: start;
  }
  .programs-item {
    display: flex;
    flex-direction: column;
  }
  .programs-item img {
    height: auto;
  }
}

.programs-item h3 {
  margin: 15px 0;
  font-size: 18px;
  font-weight: bold;
}

.programs-item p {
  font-size: 14px;
  color: #666;
}
</style>
