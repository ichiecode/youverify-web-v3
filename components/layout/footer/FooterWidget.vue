<template>
  <div
    class="bg-blue mb-20 rounded-xl xl:h-40 flex justify-center items-center"
  >
    <div
      class="lg:flex w-full justify-between items-center py-5 xl:py-0 px-5 xl:px-20"
    >
      <h1 class="text-white text-2xl lg:w-3/6">Subscribe to our newsletter</h1>
      <div class="sm:w-full xl:w-3/6">
        <form class="mt-10 md:mt-5 lg:mt-0 md:flex">
          <div
            class="w-full flex gap-4 px-6 py-2.5 font-bold rounded-lg outline-none border border-white text-blue-900 bg-blue-150"
          >
            <img src="~/assets/images/icons/email.svg" class="w-7" alt="" />
            <input
              class="focus:outline-none bg-transparent"
              placeholder="Enter your email"
            />
          </div>

          <button
            class="md:w-3/6 lg:w-2/6 mt-4 md:mt-0 md:ml-8 bg-white py-3 px-10 text-blue-900 font-bold rounded-lg"
          >
            Sign up
          </button>
        </form>
        <div class="flex items-center mt-1.5 gap-2">
          <input type="checkbox" id="check" />
          <label for="check" class="text-white" style="font-size: 10px"
            >I agree to receive emails on real-time product updates, industry
            tips, news and guides</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
