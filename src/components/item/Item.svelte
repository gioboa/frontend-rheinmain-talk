<script>
  import store from '../../store';
  export let item;
</script>

<section class="item">
  <img alt="testo-alt" src="./images/avatar.svg" />
  <h2>{item.name}</h2>
  <p>{item.title}</p>
  <hr />
  <section class="bottons">
    <button>Detail</button>
    <button class="delete" on:click={() => store.delete(item.id)}>
      Delete
    </button>
  </section>
</section>

<style>
  .item {
    margin: 0 0 2rem 2rem;
    padding: 2rem;
    min-width: 150px;
    border: 1px solid #c6c6c6;
  }
  .item img {
    width: 80px;
    height: 40px;
  }
  .item h2 {
    text-align: center;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
  .item p {
    text-align: center;
    color: #525252;
    margin-top: 0.2rem;
    font-size: 14px;
  }
  .item hr {
    border: 0.5px solid #c6c6c6;
  }
  .item .bottons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
  }
  .item .bottons .delete {
    background-color: #d11a2a;
  }
  .item .bottons .delete:active {
    background-color: #999999;
  }
</style>
