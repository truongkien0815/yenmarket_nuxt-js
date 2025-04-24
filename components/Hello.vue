



<script setup>

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css',
      integrity: 'sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7',
      crossorigin: 'anonymous'
    }
  ],
  script: [
  {
    src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js',
    integrity: 'sha384-HWVRFVEzG7pb1IoZzORXnDAGzMXG/Vnry4QlOdOfzLB1RgnzmrL7dxi+5rj9a2A6',
    crossorigin: 'anonymous'
  }
]
})




// import Hello from '~/components/Hello.vue'
</script>


<template>
  <div class="hello">Xin chào từ component!

    <NuxtLink to="/about">Về chúng tôi</NuxtLink>
<NuxtLink :to="`/editproduct/1`">
  <div class="btn btn-warning">Edit</div>
</NuxtLink>

  </div>



</template>

<style scoped>
.hello {
  color: green;
}
</style>
