<template>
  <section class="programs" id="program">
    <b-container>
      <h2 class="text-center">Pengurus Yayasan Ali Hizaam</h2>
      <b-card-group columns class="flex">
        <b-card
          img-src="https://ionicframework.com/docs/img/demos/avatar.svg"
          img-alt="Ketua"
          img-top
        >
          <b-card-title> Ketua </b-card-title>
        </b-card>
      </b-card-group>
      <b-card-group columns>
        <b-card
          img-src="https://ionicframework.com/docs/img/demos/avatar.svg"
          img-alt="Sekretaris"
          img-top
        >
          <b-card-title> Sekretaris </b-card-title>
        </b-card>
        <b-card
          img-src="https://ionicframework.com/docs/img/demos/avatar.svg"
          img-alt="Bendahara"
          img-top
        >
          <b-card-title> Bendahara </b-card-title>
        </b-card>
      </b-card-group>
      <b-card-group columns>
        <b-card
          img-src="https://ionicframework.com/docs/img/demos/avatar.svg"
          img-alt="Anggota"
          img-top
        >
          <b-card-title> Anggota </b-card-title>
        </b-card>
        <b-card
          img-src="https://ionicframework.com/docs/img/demos/avatar.svg"
          img-alt="Anggota 2"
          img-top
        >
          <b-card-title> Anggota </b-card-title>
        </b-card>
        <b-card
          img-src="https://ionicframework.com/docs/img/demos/avatar.svg"
          img-alt="Anggota 3"
          img-top
        >
          <b-card-title> Anggota </b-card-title>
        </b-card>
      </b-card-group>
    </b-container>
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
