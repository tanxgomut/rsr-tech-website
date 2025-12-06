export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
    },
    blogPosts: {
      base: 'flex flex-col gap-8 lg:gap-y-16',
      variants: {
        orientation: {
          horizontal: 'sm:grid sm:grid-cols-3 lg:grid-cols-4',
          vertical: ''
        }
      }
    }
  }
})

