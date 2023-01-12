<template>
    <section class="programs" id="program">
      <div class="container">
        <h2 class="text-center">Program-program Yayasan Ali Hizaam</h2>
        <ul class="programs-list">
          <li class="programs-item">
            <img src="~/static/program-1.jpg" alt="Program 1">
            <h3>Program Pendidikan</h3>
            <p>Kami menyediakan program pendidikan yang terdiri dari beberapa kegiatan seperti kelas bahasa Inggris, kelas matematika, dan lain-lain.</p>
          </li>
          <li class="programs-item">
            <img src="~/static/program-2.jpg" alt="Program 2">
            <h3>Program Penyediaan Bantuan Sosial</h3>
            <p>Kami juga menyediakan program penyediaan bantuan sosial bagi masyarakat yang membutuhkan, seperti bantuan pangan, pakaian, dan lain-lain.</p>
          </li>
          <!-- Tambahkan item program lainnya di sini -->
        </ul>
      </div>
    </section>
  </template>
  
  <style>
    /* Style untuk komponen programs */
    .programs {
      padding: 60px 0;
      background-color: #f8f9fa;
    }

    .programs h2{
        padding-bottom: 50px;
    }
  
    .programs-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
    }
  
    .programs-item {
      width: calc(50% - 30px);
      margin: 0 15px;
      text-align: center;
    }
  
    .programs-item img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 8px;
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
  