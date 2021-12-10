<section>
  <div class="spinner" />
</section>

<style>
  .spinner {
    border-top-color: #000000 !important;
    border-color: transparent;
    border-style: solid;
    border-width: 10px;
    border-radius: 50%;
    width: 10em;
    height: 10rem;
    -webkit-animation: gira 1.5s linear infinite;
    animation: gira 1.5s linear infinite;
  }
  @-webkit-keyframes gira {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes gira {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
