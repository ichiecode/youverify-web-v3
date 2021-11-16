<template>
  <section class="bg-blue-200 for-a-reason">
    <div class="max-w-screen-xl py-20 mx-auto sm:px-8 px-6 mx-auto max-w-300">
      <h2 class="text-white font-display">Getting started</h2>
      <div class="mt-15 lg:mt-20 grid gap-5 grid-cols-1 md:grid-cols-3">
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
          <div class="pb-6 lg:pb-24 flex flex-col items-center lg:items-start">
            <img
              src="~/assets/images/icons/for-a-reason-and-more/zero-bottlenecks.svg"
              alt=""
              class="inline-block mb-5 w-20 h-20"
            />
            <h2 class="text-center lg:text-left mb-8">
              Powerful APIs and easy-to-use resources
            </h2>

            <a
              href="https://docs.youverify.co/"
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
                src="~/assets/images/screenshots/code-snippet.png"
                alt=""
                class="w-full"
              />
            </figure>
          </div>
        </article>
        <article class="bg-white rounded-2xl p-6 sm:p-10 lg:p-11.25 xl:p-15">
          <div class="flex flex-col items-center lg:items-start">
            <img
              src="~/assets/images/icons/for-a-reason-and-more/ease-of-enrollment.svg"
              alt=""
              class="inline-block mb-5 w-16 h-16"
            />
            <h4 class="text-center lg:text-left mb-8">Plug-and-play SDKs</h4>
            <a
              href="https://docs.youverify.co/"
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
              src="~/assets/images/icons/for-a-reason-and-more/reliable-datatabase.svg"
              alt=""
              class="inline-block mb-5 w-16 h-16"
            />
            <h4 class="text-center lg:text-left mb-8">Beautiful seamless UX</h4>
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
              >Signup<svg viewBox="0 0 25 25" fill="none" class="w-5 lg:w-6.25">
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
              src="~/assets/images/icons/for-a-reason-and-more/standards-compliant.svg"
              alt=""
              class="inline-block mb-5 w-16 h-16"
            />
            <h4 class="text-center lg:text-left mb-8">Always-on support</h4>
            <NuxtLink
              to="/contact-us"
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
            ></NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
