<script>
  import store from '../../store';
  let newItem = '';
  const addItem = () => {
    const [name, title] = newItem.split(',');
    newItem = '';
    store.add(name || 'Your name', title || 'your title');
  };
</script>

<section class="addItem">
  <label>
    <div>New item:</div>
    <input
      type="text"
      bind:value={newItem}
      placeholder="e.g. John Doe, Frontend dev"
    />
  </label>
  <button on:click={addItem}>Add</button>
</section>

<style>
  .addItem {
    display: flex;
    justify-content: center;
  }
  label {
    width: unset;
  }
  button {
    height: 50px;
    margin-top: 32px;
    width: 100px;
  }
</style>
