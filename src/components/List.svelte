<script>
  import Item from './item/Item.svelte';
  import AddItem from './item/AddItem.svelte';
  import store from '../store';
  import { onMount, onDestroy } from 'svelte';
  import { Person } from '../models';
  import { DataStore } from '@aws-amplify/datastore';

  onMount(store.updateList);
  const subscription = DataStore.observe(Person).subscribe(store.updateList);
  onDestroy(subscription.unsubscribe);
</script>

<h2>My List</h2>
<AddItem />
<div class="list">
  {#each $store.items as item}
    <Item {item} />
  {/each}
</div>

<style>
  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }
</style>
