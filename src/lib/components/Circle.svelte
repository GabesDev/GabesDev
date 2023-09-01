<script lang="ts">
  export let cssClasses: string = ""
</script>

<div class="circle {cssClasses}" />

<style>
  .circle {
    position: absolute;
    top: calc(50% - 10rem);
    right: 4rem;
    width: 20rem;
    height: 20rem;
    border-radius: 100%;
    box-shadow: inset -11px -6px 59px -24px rgba(0, 0, 0, 0.1),
      inset 100px 0px 30px 26px rgba(0, 0, 0, 0.1),
      inset -58px -100px 17px 62px rgba(0, 0, 0, 0.1),
      0px 0px 19px 67px rgba(0, 0, 0, 0.1), 4px 0px 19px 23px #ffffff,
      0px 0px 48px 59px rgba(0, 0, 0, 0.1), 0px 0px 39px 75px #ffffff;
  }

  .circle::before {
    content: "";
    display: block;
    position: absolute;
    width: 20rem;
    height: 20rem;
    transform: scale(2.5);
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.025);
  }
  .circle::after {
    content: "";
    display: block;
    position: absolute;
    width: 20rem;
    height: 20rem;
    transform: scale(1.8);
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
</style>
