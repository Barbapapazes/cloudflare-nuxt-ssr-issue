<script lang="ts" setup>
const { data } = await useFetch('/api/data.json')

const item = data.value?.data.foo.length

if (!data.value) {
  throw createError({
    statusCode: 404,
    message: 'Custom Not found'
  })
}
</script>

<template>
  <div>{{ data }}</div>
</template>
