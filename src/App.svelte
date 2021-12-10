<script>
  import store, { MODE } from './store';
  import Login from './components/Login.svelte';
  import List from './components/List.svelte';
</script>

<section>
  {#if $store.mode === MODE.LOGGED}
    <List />
  {:else}
    <Login />
  {/if}
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
    margin: 40px auto;
  }
</style>
