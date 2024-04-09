export default defineNuxtRouteMiddleware((to, from) => {
  // check if user is not logged in => redirect to login page
  if (to.path === "/populars") {
    // Redirect to the root ("/")
    return navigateTo("/");
  }
});
