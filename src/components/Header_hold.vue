<template>
				<!-- <header id="header"> -->
            <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Nibiru</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">


        <b-nav-item-dropdown text="Tutorial" right>
          <b-dropdown-item href="#">1</b-dropdown-item>
          <b-dropdown-item href="#">2</b-dropdown-item>
          <b-dropdown-item href="#">3</b-dropdown-item>
          <b-dropdown-item href="#">4</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown href="About" right> About </b-nav-item-dropdown>
        <b-nav-item-dropdown href="Contact" right> Contact </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

				<!-- </header> -->
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">

</style>
