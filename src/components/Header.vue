<template>
  <header class="header">
    <b-navbar class="p-0" toggleable="md" type="dark">
        <b-navbar-brand>
        <g-link class="logo-home logo-desktop" to="/">{{ $static.metaData.siteName }}</g-link>
        <g-link class="logo-home logo–mobile" to="/"><img class="logo-image" alt="logo" src="../assets/images/logo.png"></g-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
        <b-nav-item href="About" class="nav--link" right> About </b-nav-item>
        <b-nav-item-dropdown text="Tutorial" right>
          <b-dropdown-item href="#">1</b-dropdown-item>
          <b-dropdown-item href="#">2</b-dropdown-item>
          <b-dropdown-item href="#">3</b-dropdown-item>
          <b-dropdown-item href="#">4</b-dropdown-item>
        </b-nav-item-dropdown>          
        <b-nav-item href="Contact" right> Contact </b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<style lang="scss">
@import "../assets/styles/libs/vars"; 


nav {
  width: 100%;
  padding-top: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: map-get($palette,accent2);
}

.logo-home {
  font-size: 24px;
  max-width: 75%;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  };
  color: map-get($palette,accent1);
}

.logo-desktop {
  @media(max-width: 419px) {
    display: none;
  }
  @media (min-width: 420px) {
    display: default;
  }
}

.logo–mobile {
  @media(max-width: 419px) {
    display: default;
  }
  @media (min-width: 420px) {
    display: none;
  }
}

.logo-image {
  width: 40px;
}

.nav--link {
  margin-left: 20px;
  @media (max-width: 419px) {
    margin: 0;
    padding: 15px 10px 10px 0;
  }
}

.active--exact {
  font-weight: bold;
}

.navbar-nav .nav-link{
    color:map-get($palette,accent1);
}

</style>
