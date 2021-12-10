<script>
  import store from '../store';
  let confirmCode = '';
  const confirmAction = () => {
    store.confirm(confirmCode);
  };
</script>

<h2>Confirm</h2>
{#if !!$store.error}
  <h4 class="error">{$store.error}</h4>
{/if}
<label>
  <div>6 digit Confirmation:</div>
  <input type="text" bind:value={confirmCode} placeholder="e.g. 123456" />
</label>
<button on:click={confirmAction}>Confirm</button>
