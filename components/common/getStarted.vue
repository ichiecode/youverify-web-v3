<template>
  <section class="bg-blue-200 for-a-reason">
	  <h1 class="hidden"></h1>
    <div class="max-w-screen-xl py-20 mx-auto sm:px-8 px-6 md::mx-auto max-w-300">
      <h2 class="text-white font-display">Getting started</h2>
      <div class="mt-14 lg:mt-20 grid gap-5 grid-cols-1 md:grid-cols-3">
        <article
          class="gridpicture bg-white col-span-full rounded-2xl py-10 px-6 sm:py-15 sm:px-10 lg:px-15 lg:pt-20 pb-0 gap-10 lg:gap-10 xl:gap-20 md:grid grid-cols-1 items-end"
          style=""
        >
          <div class="pb-6 lg:pb-24 flex flex-col items-center lg:items-start">
            <LazyImage
              src="~/assets/images/icons/for-a-reason-and-more/zero-bottlenecks.svg"
              alt="zero-bottlenecks"
              class="inline-block mb-5 w-20 h-20"
            />
            <h2 class="text-center lg:text-left mb-8">
              Powerful APIs and easy-to-use resources
            </h2>

            <AppButton
              buttonText="Read our API Docs"
              buttoncolor="textgraybutton"
              href="https://doc.youverify.co/"
            >
              <svg
                slot="append"
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
                ></path>
              </svg>
            </AppButton>
           
             
          </div>
          <div class="hidden md:flex justify-center flex-1">
            <figure class="w-full max-w-lg relative">
              <LazyImage
                src="~/assets/images/screenshots/code-snippet.png"
                alt="code-snippet"
                class="w-full"
              />
            </figure>
          </div>
        </article>
        <article class="bg-white rounded-2xl p-6 sm:p-10 lg:p-11.25 xl:p-15">
          <div class="flex flex-col items-center lg:items-start">
            <LazyImage
              src="~/assets/images/icons/for-a-reason-and-more/ease-of-enrollment.svg"
              alt="ease-of-enrollment"
              class="inline-block mb-5 w-16 h-16"
            />
            <h4 class="text-center lg:text-left mb-8">Plug-and-play SDKs</h4>
            <AppButton
              buttonText="Explore our SDKs"
              buttoncolor="textgraybutton"
              href="https://doc.youverify.co/"
            >
              <svg
                slot="append"
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
                ></path>
              </svg>
            </AppButton>
           
             
          </div>
        </article>
        <article class="bg-white rounded-2xl p-6 sm:p-10 lg:p-11.25 xl:p-15">
          <div class="flex flex-col items-center lg:items-start">
            <LazyImage
              src="~/assets/images/icons/for-a-reason-and-more/reliable-datatabase.svg"
              alt="reliable-datatabase"
              class="inline-block mb-5 w-16 h-16"
            />
            <h4 class="text-center lg:text-left mb-8">Beautiful seamless UX</h4>
            <AppButton
              buttonText="Signup"
              buttoncolor="textgraybutton"
              href="https://os.youverify.co/auth/create-account"
            >
              <svg
                slot="append"
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
                ></path>
              </svg>
            </AppButton>
            
          </div>
        </article>
        <article class="bg-white rounded-2xl p-6 sm:p-10 lg:p-11.25 xl:p-15">
          <div class="flex flex-col items-center lg:items-start">
            <LazyImage
              src="~/assets/images/icons/for-a-reason-and-more/standards-compliant.svg"
              alt="standards-compliant"
              class="inline-block mb-5 w-16 h-16"
            />
            <h4 class="text-center lg:text-left mb-8">Always-on support</h4>
           
              <svg
                slot="append"
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
                ></path>
              </svg>
            </AppButton> -->
            <NuxtLink
              to="/contact-us"
              rel="noreferrer"
              class="text-base sm:text-base lg:text-base font-bold inline-flex items-center hover:text-black"
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
<style>
.gridpicture {
  grid-template-columns: minmax(350px, 1fr) 1.2fr;

  
}


</style>
