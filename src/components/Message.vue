<template>
  <article id="message" class="message-fixed is-success is-medium message">
    <div class="message-header">
      <p>Success</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">Product has been added to cart</div>
  </article>
</template>


<style lang="scss">
.message {
    z-index: 100;
  &-fixed {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>