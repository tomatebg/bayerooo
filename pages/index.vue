<template>
<div class="css-selector d-flex">
      <div class="d-flex align-center justify-center ">
        <NuxtLogo />
        <VuetifyLogo />
      </div>
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style scoped>
.css-selector {
  width: 100%;
  height:100%;
  margin:0px;
  padding:0px;
    background: linear-gradient(270deg, #2bc29b, #ab2b92, #b1c022);
    background-size: 600% 600%;

    -webkit-animation: DayGradient 30s ease infinite;
    -moz-animation: DayGradient 30s ease infinite;
    animation: DayGradient 30s ease infinite;
}

@-webkit-keyframes DayGradient {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes DayGradient {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes DayGradient {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
</style>
