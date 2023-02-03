<template>
  <div>
    <nuxt-child />
    <b-navbar toggleable="lg" type="light" variant="default">
      <b-navbar-brand href="#">
        <b-img fluid src="~/static/alihizaam.png" alt=""></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#about">Tentang</b-nav-item>
            <b-nav-item href="#program">Program</b-nav-item>
            <b-nav-item href="#contact">Kontak</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <b-img fluid src="~/static/alihizaam.png" alt=""></b-img>
        </a>

        <b-dropdown
          id="dropdown-right"
          right
          variant="default"
          class="m-2"
          no-caret
        >
          <template #button-content>
            &#x2630;<span class="sr-only">Menu</span>
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
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
    </nav> -->
  </div>
</template>
