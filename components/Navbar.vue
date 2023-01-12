<template>
    <div>
      <nuxt-child />
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="~/static/alihizaam.png" alt="">
            </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#program">Program</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <style>
    /* Style top navbar */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
    }
    .navbar-collapse{
      position: fixed;
      top: 50px;
      right: 0;
      z-index: 999;
    }
    .nav-item{
      padding: 0 2rem;
    }
  </style>
  