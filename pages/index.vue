<script lang="ts" setup>
const { data } = await useFetch('/api/data.json')

console.log(data.value)

if (!data.value) {
  throw createError({
    statusCode: 404,
    message: 'Custom Not found'
  })
}

const items = computed(() => data.value.sort())
</script>

<template>
  <div>{{ items }}</div>
</template>
