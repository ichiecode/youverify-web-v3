<template>
  <div
    class="text-white text-left lg:flex justify-between items-center pt-10 pb-10 lg:pt-14 lg:pb-20"
  >
    <div class="lg:flex ">
      <div>
        <ul class="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-3">
          <li>
            <nuxt-link to="/">Privacy Policy</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Terms of Use</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Cookies Policy</nuxt-link>
          </li>
        </ul>
      </div>
      <p class="lg:ml-16 mt-10 lg:mt-0">
        Copyright &copy; {{ new Date().getFullYear() }} Youverify
      </p>
    </div>
    <div class="flex space-x-4 lg:justify-center items-center mt-10 lg:mt-0">
      <p class="">Follow us on social media:</p>
      <a
        class="flex"
        href="https://web.facebook.com/youverifyID"
        target="_blank"
      >
        <LazyImage
          class="w-8 h-8"
          src="~/assets/images/icons/social/facebook-white.svg"
          alt="facebook-svg"
        />
      </a>
      <a
        class="flex"
        href="https://www.linkedin.com/company/youcheckonline/"
        target="_blank"
      >
        <LazyImage
          class="w-8 h-8"
          src="~/assets/images/icons/social/linkedin-white.svg"
          alt="linkdln-svg"
        />
      </a>
      <a
        class="flex"
        href="https://www.instagram.com/youcheckonline/"
        target="_blank"
      >
        <LazyImage
          class="w-8 h-8"
          src="~/assets/images/icons/social/instagram-white.svg"
          alt="instagram-svg"
        />
      </a>
      <a class="flex" href="https://twitter.com/YoucheckOnline" target="_blank">
        <LazyImage
          class="w-8 h-8"
          src="~/assets/images/icons/social/twitter-white.svg"
          alt="twitter-svg"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
