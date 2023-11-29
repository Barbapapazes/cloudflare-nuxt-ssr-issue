export default defineEventHandler(async (event) => {
  const unjsProjects = await $fetch('https://unjs.io/api/content/packages.json')
  const packages = unjsProjects.filter(project => project.npm).sort((a, b) => b.title.localeCompare(a.title))
  const packageNames = packages.map(pkg => pkg.npm?.name)

  console.log(unjsProjects)

  const npmPackages = await Promise.all(packages.map(pkg => $fetch(`https://unnpm.pages.dev/packages/${pkg.npm?.name}`)))

  console.log(npmPackages)

  setResponseHeader(event, 'Content-Type', 'application/json')
  return npmPackages.map(({ package: pkg }) => {
    return {
      name: pkg.name,
      title: packages.find(p => p.npm?.name === pkg.name)?.title,
      external: false,
      description: pkg.description,
      dependencies: Object.keys(pkg.dependencies || {}).filter(dep => packageNames.includes(dep)),
      devDependencies: Object.keys(pkg.devDependencies || {}).filter(dep => packageNames.includes(dep)),
    }
  })
})
