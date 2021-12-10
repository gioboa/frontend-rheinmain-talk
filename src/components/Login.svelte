<script>
  import store, { MODE } from '../store';
  import Confirm from './Confirm.svelte';
  import Spinner from './Spinner.svelte';

  let username = '';
  let password = '';
  let email = '';
  const selectChoise = (a, b) => ($store.mode === MODE.SIGN_UP ? a : b);
  const goTo = () => selectChoise(store.goToSignIn, store.goToSignUp)();
  const confirmAction = () => {
    selectChoise(store.signUp, store.signIn)({ username, password, email });
  };
</script>

<section>
  {#if $store.mode === MODE.SIGN_UP || $store.mode === MODE.SIGN_IN}
    <h2>{$store.mode === MODE.SIGN_UP ? 'Sign up' : 'Sign in'}</h2>
    {#if !!$store.error}
      <h4 class="error">{$store.error}</h4>
    {/if}
    <label>
      <div>Username:</div>
      <input type="text" bind:value={username} placeholder="your username" />
    </label>
    <label>
      <div>Password:</div>
      <input type="password" bind:value={password} placeholder="*********" />
    </label>
    {#if $store.mode === MODE.SIGN_UP}
      <label>
        <div>Email (for confirmation code):</div>
        <input type="text" bind:value={email} placeholder="john.doe@email.eu" />
      </label>
    {/if}
    <button on:click={confirmAction}>Confirm</button>
    <div class="detail" on:click={goTo}>
      {$store.mode === MODE.SIGN_UP ? 'Sign in' : 'New? Create an account'}
    </div>
  {/if}
  {#if $store.mode === MODE.CONFIRM}
    <Confirm />
  {/if}
  {#if $store.mode === MODE.LOADING}
    <Spinner />
  {/if}
</section>

<style>
  section {
    margin: 0px auto;
  }
  button {
    width: 100px;
  }
  .detail {
    margin-top: 15px;
    font-size: 14px;
    color: #333333;
    padding: 15px 20px;
    text-align: center;
    border: 1px solid #c6c6c6;
    color: blue;
    text-decoration: none;
  }
  .detail:hover {
    text-decoration: underline;
  }
</style>
