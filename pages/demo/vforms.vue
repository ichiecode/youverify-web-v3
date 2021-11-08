<template>
  <div>
    <header
      class="
        relative
        flex
        items-center
        justify-start
        pt-20
        pb-32
        md:pt-40 md:pb-20
      "
    >
      <section class="w-full max-w-screen-xl mx-auto sm:px-8 px-6">
        <div class="flex-col-reverse md:flex-row flex justify-center">
          <div class="flex flex-col items-center">
            <a href="/demo/vforms" class="flex max-w-screen-lg mb-8">
              <h2 class="">Smart UI Demo</h2>
              <a
                href="/demo"
                class="
                  sm:text-base
                  lg:text-base
                  font-bold
                  inline-flex
                  items-center
                  hover:text-blue
                "
                ><svg viewBox="0 0 25 25" fill="none" class="w-10 lg:w-10">
                  <path
                    d="M8 18L18 8"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8 8H18V18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></svg
              ></a>
            </a>
            <img
              class="w-3/5"
              src="../../../../../Desktop/Screenshot 2021-11-05 at 14.56.28.png"
              alt=""
            />
            <a
              class="
                mt-10
                items-center
                justify-center
                font-medium
                disabled:curs
                inline-flex
                bg-blue-300
                text-white
                py-3
                sm:py-4
                px-4
                sm:px-5
                text-sm
                sm:text-1sm
                rounded-md
                mr-4
                my-2
                outline-none
                focus:outline-none
                hover:outline-none
                transition-all
                cursor-pointer
                box-border
                group
                flex-shrink-0
              "
              href="/demo/vforms"
              >Click to view Demo<svg
                viewBox="0 0 20 20"
                fill="none"
                class="
                  w-5
                  ml-1.25
                  transition-transform
                  duration-75
                  transform
                  group-hover:translate-x-0.5
                "
              >
                <path
                  d="M6 10H14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10 6L14 10L10 14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path></svg
            ></a>
          </div>
        </div>
      </section>
    </header>

    <section class="bg-blue-200 for-a-reason">
      <div class="max-w-screen-xl py-20 mx-auto sm:px-8 px-6 mx-auto max-w-300">
        <h2 class="text-white font-display">Getting started</h2>
        <div class="mt-14 lg:mt-20 grid gap-5 grid-cols-1 md:grid-cols-3">
          <article
            class="
              bg-white
              col-span-full
              rounded-2xl
              py-10
              px-6
              sm:py-15 sm:px-10
              lg:px-15 lg:pt-20
              pb-0
              gap-10
              lg:gap-10
              xl:gap-20
              grid grid-cols-1
              items-end
            "
            style="grid-template-columns: minmax(350px, 1fr) 1.2fr"
          >
            <div
              class="pb-6 lg:pb-24 flex flex-col items-center lg:items-start"
            >
              <img
                src="../../assets/images/icons/for-a-reason-and-more/zero-bottlenecks.svg"
                alt=""
                class="inline-block mb-5 w-20 h-20"
              />
              <h2 class="text-center lg:text-left mb-8">
                Powerful APIs and easy-to-use resources
              </h2>

              <a
                href="https://docs.mono.co"
                target="_blank"
                rel="noreferrer"
                class="
                  sm:text-base
                  lg:text-base
                  font-bold
                  inline-flex
                  items-center
                  hover:text-black
                "
                >Read our API Docs<svg
                  viewBox="0 0 25 25"
                  fill="none"
                  class="w-5 lg:w-6.25"
                >
                  <path
                    d="M8 18L18 8"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8 8H18V18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></svg
              ></a>
            </div>
            <div class="flex justify-center flex-1">
              <figure class="w-full max-w-lg relative">
                <img
                  src="https://monoassets.com/f/118499/540x380/1298b7c253/api-response-frame.png"
                  alt=""
                  class="w-full"
                />
              </figure>
            </div>
          </article>
          <article class="bg-white rounded-2xl p-6 sm:p-10 lg:p-11.25 xl:p-15">
            <div class="flex flex-col items-center lg:items-start">
              <img
                src="../../assets/images/icons/for-a-reason-and-more/ease-of-enrollment.svg"
                alt=""
                class="inline-block mb-5 w-16 h-16"
              />
              <h4 class="text-center lg:text-left mb-8">Plug-and-play SDKs</h4>
              <a
                href="https://docs.mono.co"
                target="_blank"
                rel="noreferrer"
                class="
                  text-base
                  sm:text-base
                  lg:text-base
                  font-bold
                  inline-flex
                  items-center
                  group
                  hover:text-black
                "
                >Explore our SDKs<svg
                  viewBox="0 0 25 25"
                  fill="none"
                  class="w-5 lg:w-6.25"
                >
                  <path
                    d="M8 18L18 8"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8 8H18V18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></svg
              ></a>
            </div>
          </article>
          <article class="bg-white rounded-2xl p-6 sm:p-10 lg:p-11.25 xl:p-15">
            <div class="flex flex-col items-center lg:items-start">
              <img
                src="../../assets/images/icons/for-a-reason-and-more/reliable-datatabase.svg"
                alt=""
                class="inline-block mb-5 w-16 h-16"
              />
              <h4 class="text-center lg:text-left mb-8">
                Beautiful seamless UX
              </h4>
              <a
                class="
                  sm:text-base
                  lg:text-base
                  font-bold
                  inline-flex
                  items-center
                  hover:text-black
                "
                target="_blank"
                href="https://os.dev.youverify.co/auth/create-account"
                >Signup<svg
                  viewBox="0 0 25 25"
                  fill="none"
                  class="w-5 lg:w-6.25"
                >
                  <path
                    d="M8 18L18 8"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8 8H18V18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></svg
              ></a>
            </div>
          </article>
          <article class="bg-white rounded-2xl p-6 sm:p-10 lg:p-11.25 xl:p-15">
            <div class="flex flex-col items-center lg:items-start">
              <img
                src="../../assets/images/icons/for-a-reason-and-more/standards-compliant.svg"
                alt=""
                class="inline-block mb-5 w-16 h-16"
              />
              <h4 class="text-center lg:text-left mb-8">Always-on support</h4>
              <a
                href="/contact-us"
                target="_blank"
                rel="noreferrer"
                class="
                  text-base
                  sm:text-base
                  lg:text-base
                  font-bold
                  inline-flex
                  items-center
                  hover:text-black
                "
                >Contact Support Team<svg
                  viewBox="0 0 25 25"
                  fill="none"
                  class="w-5 lg:w-6.25"
                >
                  <path
                    d="M8 18L18 8"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8 8H18V18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></svg
              ></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
