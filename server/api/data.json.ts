export default defineEventHandler(async () => {
  const unjsProjects = await $fetch('https://unjs.io/api/content/packages.json')

  return unjsProjects
})
