<template>
  <div>
    <header
      class="bg-blue relative flex items-center justify-start pt-20 pb-32 md:pt-40 md:pb-32"
    >
      <section class="w-full max-w-screen-xl mx-auto sm:px-8 px-6">
        <div
          class="items-center flex-col-reverse md:flex-row flex justify-center"
        >
          <div class="md:w-3/6">
            <h2 class="text-white max-w-screen-lg mt-8">
              KYC Automation for Banks and Startups
            </h2>
            <p class="mt-3 md:w-4/5 text-white">
              Youverify helps companies automate their decisions, onboard the
              right customers and fight fraud using data
            </p>
            <div class="mt-3 sm:mt-8 lg:mt-10 flex flex-wrap">
              <AppButton
                buttonText="View Demo"
                buttoncolor="darkbluebutton"
                href="/vforms-demo"
              >
                <svg
                  slot="append"
                  viewBox="0 0 20 20"
                  fill="none"
                  class="w-5 ml-1.25 transition-transform duration-75 transform group-hover:translate-x-0.5"
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
                  ></path>
                </svg>
              </AppButton>
              <AppButton
                buttonText="Sign-up"
                buttoncolor="whitebutton"
                href="https://os.youverify.co/auth/create-account"
              >
                <svg
                  slot="append"
                  viewBox="0 0 20 20"
                  fill="none"
                  class="w-5 ml-1.25 transition-transform duration-75 transform group-hover:translate-x-0.5"
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
                  ></path>
                </svg>
              </AppButton>
              <!-- <a
                class="
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
                href="/vforms-demo"
                >View Demo<svg
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
                  ></path></svg></a
              <
			  <a 
                class="
                  items-center
                  justify-center
                  font-medium
                  disabled:curs
                  inline-flex
                  bg-gray-100
                  text-black
                  py-3
                  sm:py-4
                  px-4
                  sm:px-5
                  text-sm
                  sm:text-1sm
                  rounded-md
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
                target="_blank"
                href="https://os.youverify.co/auth/create-account"
                >Sign-up<svg
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
              ></a> -->
            </div>

            <div class="mt-10 flex items-center">
              <h4 class="text-white">Building with Youverify OS</h4>
              <div class="ml-3 border w-3/6"></div>
            </div>
            <div class="mt-3 grid grid-cols-4">
              <figure class="relative w-16 h-16">
                <img
                  src="~/assets/images/logos/trusted/svg/fidelity.svg" 
                  alt="Carbon logo"
                  class="h-full w-full object-contain"
                />
              </figure>
              <figure class="relative w-16 h-16">
                <img
                  src="~/assets/images/logos/trusted/svg/Bolt Logo.svg"
                  alt="Carbon logo"
                  class="h-full w-full object-contain"
                />
              </figure>
              <figure class="relative w-16 h-16">
                <img
                  src="~/assets/images/logos/trusted/svg/Wema Bank Logo.svg"
                  alt="Carbon logo"
                  class="h-full w-full object-contain"
                />
              </figure>
            </div>
          </div>
          <div class="md:w-3/6">
            <!-- <video
              playsinline=""
              autoplay=""
              loop=""
              controlslist="nodownload"
              class="h-full"
            >
              <source
                src="~/assets/images/illustrations/api-box-4-loop-2x.webm"
                type="video/webm"
              />
              Sorry, your browser doesn't support embedded videos.
            </video> -->
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_wu2exiph.json"
              background="transparent"
              speed="1"
              class="h-full w-full"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </section>
      <div class="custom-shape-divider-bottom-1636017048">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </header> 

    <section class="max-w-screen-xl mx-auto sm:px-8 px-6 pb-20">
      <div class="mx-auto">
        <h5 class="font-medium pb-5">Trusted by the trustworthy</h5>
        <div
          class="grid gap-6 sm:gap-8 lg:gap-10 mt-4 sm:mt-10 lg:mt-12 grid-cols-2 md:grid-cols-5 lg:grid-cols-6"
        >
          <figure class="h-12 flex">
            <LazyImage
              src="~/assets/images/logos/trusted/Bolt_logo (1).png"
              alt="Carbon logo"
              class=""
            />
          </figure>

          <figure class="flex h-12">
            <LazyImage
              src="~/assets/images/logos/trusted/fidelity (1).jpeg"
              alt="Carbon logo"
              class=""
            />
          </figure>
          <figure class="h-12 flex">
            <LazyImage
              src="~/assets/images/logos/trusted/Standard_Chartered_(2021).svg (1).png"
              alt="Carbon logo"
              class=""
            />
          </figure>
          <figure class="h-12 flex">
            <LazyImage
              src="~/assets/images/logos/trusted/leadway (1).png"
              alt="Carbon logo"
              class=""
            />
          </figure>
          <figure class="h-12 flex">
            <LazyImage
              src="~/assets/images/logos/trusted/sterling-logo-balanced (1).png"
              alt="Carbon logo"
              class=""
            />
          </figure>
          <figure class="h-12 flex">
            <LazyImage
              src="~/assets/images/logos/trusted/wema-bank-plc-logo-vector (1).png"
              alt="Carbon logo"
              class=""
            />
          </figure>
        </div>
      </div>
    </section>

    <section class="sm:pb-20 pt-20 pb-10">
      <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <section
          class="text-center max-w-screen-lg text-container mx-auto sm:px-8 px-6"
        >
          <div class="text-center">
            <h2>Approve more customers</h2>
            <p class="pt-4">
              Acquire more customers without waiting around for traditional
              compliance systems. Youverify vForms onboarding lets you combine
              300+ data sources into a single workflow and make automated
              decisions with accuracy.
            </p>
          </div>
        </section>
        <div class="">
          <div class="my-10 justify-center flex item-center">
            <div class="bg-blue-100 rounded-full relative">
              <div
                class="absolute h-full w-1/2 rounded-full bg-blue-300 transition-transform duration-500 transform z-10"
                :class="`${showService === true ? 'translate-x-full' : ''}`"
              ></div>

              <button
                :class="`${showService === false ? ' text-white' : 'text-blue'}
                  
                  items-center
                  justify-center
                  disabled:curs
                  inline-flex
                  py-3
                  font-bold
                  px-4
                  rounded-full
                  text-sm
                  cursor-pointer
                  z-20
                relative
                `"
                @click="toggleService('without')"
              >
                Without Youverify
              </button>

              <button
                :class="`${showService === true ? ' text-white' : 'text-blue '}
                items-center
                  justify-center
                  disabled:curs
                  inline-flex
                  py-3
                  px-8
                  font-bold
                  rounded-full
                  text-sm
                  cursor-pointer
                   z-20
                  relative
                  `"
                @click="toggleService('with')"
              >
                With Youverify
              </button>
            </div>
          </div>

          <transition name="fade">
            <div
              class="w-full flex justify-center items-center"
              v-if="showService"
            >
              <lottie-player
                class="h-full w-full"
                src="https://assets10.lottiefiles.com/packages/lf20_vgxxp1nq.json"
                background="transparent"
                speed="0.8"
                loop
                autoplay
              ></lottie-player>
            </div>
          </transition>
          <transition name="fade">
            <div
              class="w-full flex justify-center items-center"
              v-if="!showService"
            >
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_7yi0ptca.json"
                background="transparent"
                speed="0.8"
                class="h-full w-full"
                loop
                autoplay
              ></lottie-player>
            </div>
          </transition>
        </div>
      </section>
    </section>

    <section class="">
      <div
        class="flex max-w-screen-xl mx-auto sm:px-8 px-6 md:flex-row flex-col-reverse sm:text-left text-center justify-between items-center py-20"
      >
        <div class="sm:w-2/5 sm:pt-0 pt-8">
          <h2>Fraud mitigation</h2>
          <p class="sm:my-8 my-4 sm:w-10/12">
            Effectively verifying individuals remotely can be daunting. That’s
            where our 5000+ data points and 2000+ field agents come in, to help
            companies securely and safely mitigate fraud and expensive financial
            risk.
          </p>
        </div>
        <div class="sm:w-3/5">
          <div class="sm:w-auto w-10/12 mx-auto">
            <!-- <LazyImage
              class="w-full"
              width="505"
              height="545"
              src="../assets/images/illustrations/flow.gif"
              alt="Mand holding a paper plane"
            /> -->
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_rod5jzuw.json"
              background="transparent"
              speed="1"
              style="width: 505; height: 545"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </section>

    <section class="">
      <div
        class="flex max-w-screen-xl mx-auto sm:px-8 px-6 sm:flex-row flex-col sm:text-left text-center justify-between items-center py-20"
      >
        <div class="sm:w-3/5">
          <div class="sm:w-auto w-3/4 mx-auto">
            <!-- <LazyImage
              width="505"
              height="545"
              class="w-full"
              src="../assets/images/illustrations/frictionless.gif"
              alt="Man holding SIM for verification"
            /><noscript></noscript> -->
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_cvruqprn.json"
              background="transparent"
              speed="1"
              style="width: 505; height: 545"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div class="sm:w-2/4 ml-10 sm:mt-0 mt-8">
          <h2>
            Frictionless and <br />
            no-code customer onboarding with vForms
          </h2>
          <p class="sm:my-8 my-4 sm:w-10/12">
            Collect customer information and verify their identities in one easy
            self service solution. It is an optimised & responsive user
            experience that provides optimised, safe and quick onboarding for
            your customers that is fully customised to fit and feel your
            existing onboarding flow.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-blue-100 sm:pt-24 sm:my-20 my-10 pt-10 sm:pb-16 pb-10">
      <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <div class="grid sm:grid-cols-2 grid-cols-1 max-w-screen-lg mx-auto">
          <div>
            <div class="bg-blue mb-10 text-white rounded-2xl  text-center w-2/6">
              Youverify OS
            </div>
            <h2 class="sm:mb-0 mb-4">KYC-as-a Service</h2>
          </div>
          <div>
            <p class="sm:mb-8 mb-4">
              The Youverify operating system (OS) allows you to automate due
              diligence on one platform, in a convenient and the most effective
              way.
            </p>
            <span class="cursor-pointer inline-block" role="button" tabindex="0"
              ><button
                class="bg-transparent text-blue rounded py-2 sm:mb-0 mb-4 px-0"
              >
                <a href="/contact-us">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transform inline-block mr-4 false"
                  >
                    <path
                      d="M1 0.999999L7 7L1 13"
                      stroke="#46B2C8"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path></svg
                  >Request demo</a
                >
              </button></span
            >
          </div>
        </div>
        <div class="max-w-screen-lg mx-auto my-16">
          <img
            src="~/assets/images/illustrations/kyc-as-a-service.svg"
            alt=""
          />
        </div>
      </section>
    </section>

    <section class="sm:pt-24 sm:my-20 my-20 pt-10 sm:pb-16 pb-10">
      <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <div class="md:flex max-w-screen-xl mx-auto">
          <div class="md:w-2/6">
            <div
              class="bg-blue-200 mb-10 text-white w-2/4 md:w-4/6 rounded-2xl text-center"
            >
              Case Management Portal
            </div>
            <h2 class="mb-8 text-blue-200">
              Single view case <br />
              Management
            </h2>
            <div>
              <p class="sm:mb-4 mb-4">
                <span class="font-bold">All-in-one case management tool</span>
                <br />
                Centralised case management, alerts, audit trail, and reporting
              </p>

              <span
                class="cursor-pointer inline-block"
                role="button"
                tabindex="0"
              >
                <AppButton
                  buttonText="Request demo"
                  buttoncolor="textbluebutton"
                  href="/contact-us"
                >
                  <svg
                    slot="prepend"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transform inline-block mr-4 false"
                  >
                    <path
                      d="M1 0.999999L7 7L1 13"
                      stroke="#46B2C8"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </AppButton>
                <!-- <button
                  class="
                    bg-transparent
                    text-blue
                    rounded
                    py-2
                    sm:mb-0
                    mb-4
                    px-0
                  "
                >
                  <a href="/contact-us">
                    <svg
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="transform inline-block mr-4 false"
                    >
                      <path
                        d="M1 0.999999L7 7L1 13"
                        stroke="#46B2C8"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path></svg
                    >Request demo</a
                  >
                </button> -->
              </span>
            </div>
          </div>
          <div class="md:w-4/6 md:ml-12">
            <LazyImage
              class="h-full object-contain"
              src="~/assets/images/screenshots/youverifyos-vform-case-management.jpg"
              alt="Youverify Dashboard"
            />
          </div>
        </div>
      </section>
    </section>

    <section class="bg-blue-100 sm:py-20 py-10 relative">
      <div class="custom-shape-divider-top-1636027032">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <section class="max-w-screen-xl mx-auto sm:px-8 px-6 pb-20">
        <section
          class="text-center max-w-screen-lg text-container sm:py-20 py-10 mx-auto sm:px-8 px-6"
        >
          <div class="text-center">
            <h3>
              Things you can do with the Youverify<br class="sm:block hidden" />
              Operating system
            </h3>
            <p class="pt-4">
              We aggregate over 5000 data points into one platform to help
              businesses profile, acquire and screen customers with or without
              coding.
            </p>
          </div>
        </section>
        <section class="grid grid-cols-1 gap-y-16 gap-x-[96px] sm:grid-cols-3">
          <div class="flex">
            <div class="w-8 mr-8">
              <svg
                width="45"
                height="31"
                viewBox="0 0 45 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.9187 30.7884H34.8292C36.5037 30.7884 37.8612 29.4341 37.8612 27.7596V7.10753C37.8612 6.47049 37.6605 5.85045 37.2877 5.3339L34.3456 1.25754C33.7756 0.467838 32.8645 0 31.8905 0H9.91114C8.23662 0 6.88672 1.35746 6.88672 3.03198V27.7564C6.88672 29.431 8.24418 30.7884 9.9187 30.7884Z"
                  fill="#115766"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M42.9918 4.81566C43.2903 5.11414 43.2903 5.59807 42.9918 5.89655L27.9348 20.9535C27.6364 21.252 27.1524 21.252 26.854 20.9535L17.3564 11.456L2.83991 25.9725C2.54143 26.271 2.0575 26.271 1.75902 25.9725C1.46054 25.674 1.46054 25.1901 1.75902 24.8916L16.816 9.83464C17.1145 9.53616 17.5984 9.53616 17.8969 9.83464L27.3944 19.3322L41.9109 4.81566C42.2094 4.51718 42.6933 4.51718 42.9918 4.81566Z"
                  fill="#C2E2E9"
                ></path>
                <circle
                  cx="17.2072"
                  cy="10.8088"
                  r="2.299"
                  fill="#46B2C8"
                ></circle>
                <circle
                  cx="27.5431"
                  cy="20.2814"
                  r="2.299"
                  fill="#46B2C8"
                ></circle>
                <circle
                  cx="42.4513"
                  cy="5.35661"
                  r="2.299"
                  fill="#46B2C8"
                ></circle>
                <circle
                  cx="2.299"
                  cy="25.4318"
                  r="2.299"
                  fill="#46B2C8"
                ></circle>
              </svg>
            </div>
            <div>
              <h4 class="text-xl">Report and analytics</h4>
              <p class="pt-4">
                Get key insights into your verifications with dashboards and
                reports giving you a holistic picture of your operation.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="w-8 mr-8">
              <svg
                width="34"
                height="31"
                viewBox="0 0 34 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9193 30.789H2.17466C0.973757 30.789 0.000228882 29.8168 0.000228882 28.6159V10.3254C0.000228882 9.87492 0.140141 9.43689 0.400631 9.06936L3.07645 5.29402C3.48415 4.7188 4.14277 4.37695 4.84782 4.37695H23.9234C25.1243 4.37695 26.0938 5.35048 26.0938 6.55139V28.6146C26.0938 29.8155 25.1202 30.789 23.9193 30.789Z"
                  fill="#115766"
                ></path>
                <path
                  d="M19.485 15.3186H31.687C32.5276 15.3186 33.2091 14.6382 33.2091 13.7976V3.5364C33.2091 3.21925 33.11 2.91042 32.9257 2.65231L31.4872 0.637611C31.2015 0.237484 30.7418 0 30.2501 0H19.4815C18.6408 0 17.9629 0.681469 17.9629 1.5221V13.7965C17.9629 14.6371 18.6444 15.3186 19.485 15.3186Z"
                  fill="#46B2C8"
                ></path>
                <path
                  d="M29.7507 27.6758H21.4232C20.8227 27.6758 20.336 27.1898 20.336 26.5893V19.5722C20.336 19.3457 20.4067 19.1253 20.5384 18.9409L21.5105 17.5795C21.7146 17.2937 22.043 17.124 22.3942 17.124H29.7524C30.3529 17.124 30.8379 17.6108 30.8379 18.2112V26.5886C30.8379 27.189 30.3511 27.6758 29.7507 27.6758Z"
                  fill="#C2E2E9"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.063 4.50824C30.3409 4.78615 30.3409 5.23674 30.063 5.51465L24.7658 10.8119C24.4879 11.0898 24.0373 11.0898 23.7594 10.8119L21.1108 8.16325C20.8329 7.88534 20.8329 7.43475 21.1108 7.15684C21.3887 6.87893 21.8393 6.87893 22.1172 7.15684L24.2626 9.30223L29.0566 4.50824C29.3345 4.23033 29.7851 4.23033 30.063 4.50824Z"
                  fill="#C2E2E9"
                ></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl">Intuitive Validation</h4>
              <p class="pt-4">
                Identify the mismatch data with ease without disrupting your
                operations.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="w-8 mr-8">
              <svg
                width="38"
                height="31"
                viewBox="0 0 38 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.8159 5.9082H1.83452C0.818597 5.9082 0 6.73177 0 7.7477V28.949C0 29.9649 0.823569 30.7885 1.8395 30.7885H36.0893C37.1053 30.7885 37.9288 29.9707 37.9288 28.9548V11.6703C37.9288 11.1539 37.7117 10.6622 37.3306 10.3137L34.0362 7.30145C33.7332 11.5211 30.214 14.8502 25.9172 14.8502C21.4214 14.8502 17.7769 11.2057 17.7769 6.70994C17.7769 6.43941 17.7901 6.17196 17.8159 5.9082Z"
                  fill="#115766"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.9397 1.95271C28.5114 1.95271 30.5961 4.03746 30.5961 6.60912C30.5961 9.18078 28.5114 11.2655 25.9397 11.2655C23.368 11.2655 21.2833 9.18078 21.2833 6.60912C21.2833 4.03746 23.368 1.95271 25.9397 1.95271ZM32.5488 6.60912C32.5488 2.959 29.5898 0 25.9397 0C22.2896 0 19.3306 2.959 19.3306 6.60912C19.3306 8.08197 19.8124 9.4423 20.6269 10.5411L14.4865 16.6815C14.1052 17.0628 14.1052 17.681 14.4865 18.0623C14.8678 18.4436 15.486 18.4436 15.8673 18.0623L22.0077 11.9219C23.1065 12.7364 24.4669 13.2182 25.9397 13.2182C29.5898 13.2182 32.5488 10.2592 32.5488 6.60912Z"
                  fill="#46B2C8"
                ></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl">Expansive Audit Trail</h4>
              <p class="pt-4">
                Comply with Personal identifiable information requirements,
                policies and regulations with our enterprise grade audit trail.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="w-8 mr-8">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.3027 27.1809H23.6886C24.3899 27.1809 24.9584 26.6124 24.9584 25.9112V19.501H25.2619C25.5994 19.501 25.923 19.6353 26.1613 19.8744L28.2189 21.939C28.4561 22.177 28.5893 22.4993 28.5893 22.8353V29.5177C28.5893 30.219 28.0208 30.7875 27.3195 30.7875H18.5725C17.8712 30.7875 17.3027 30.219 17.3027 29.5177V27.1809Z"
                  fill="#C2E2E9"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.1406 6.2199H19.4795C19.817 6.2199 20.1406 6.35427 20.3789 6.59334L24.7471 10.9764C24.9843 11.2144 25.1175 11.5368 25.1175 11.8728V14.6473H29.5181C30.2194 14.6473 30.7879 14.0788 30.7879 13.3775V4.171C30.7879 3.83497 30.6547 3.51265 30.4175 3.27465L27.5262 0.373437C27.2879 0.134373 26.9643 0 26.6268 0H17.4104C16.7091 0 16.1406 0.568502 16.1406 1.26979V6.2199Z"
                  fill="#115766"
                ></path>
                <path
                  d="M1.26978 17.1999H11.0747C11.7759 17.1999 12.3444 16.6314 12.3444 15.9301V8.45319C12.3444 8.11717 12.2112 7.79485 11.974 7.55684L9.654 5.22891C9.41575 4.98984 9.09212 4.85547 8.75461 4.85547H1.26979C0.568503 4.85547 0 5.42397 0 6.12525V15.9301C0 16.6314 0.568501 17.1999 1.26978 17.1999Z"
                  fill="#115766"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.17188 18.8035H12.6783C13.3795 18.8035 13.9481 18.235 13.9481 17.5337V7.87402H18.647C18.9845 7.87402 19.3081 8.0084 19.5464 8.24746L23.094 11.8072C23.3312 12.0452 23.4644 12.3675 23.4644 12.7035V23.8968C23.4644 24.5981 22.8959 25.1666 22.1946 25.1666H7.44166C6.74038 25.1666 6.17188 24.5981 6.17188 23.8968V18.8035Z"
                  fill="#46B2C8"
                ></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl">Enrich data set</h4>
              <p class="pt-4">
                More robust data designed to empower your team to work faster
                and better.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="w-8 mr-8">
              <svg
                width="32"
                height="31"
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.64601 30.7884H29.1061C30.5674 30.7884 31.7521 29.6089 31.7521 28.1476V7.0002C31.7521 6.43358 31.5702 5.88261 31.2332 5.42711L28.0111 1.07223C27.5122 0.397826 26.726 0 25.8871 0H2.64109C1.17974 0 0 1.18465 0 2.646V28.1424C0 29.6038 1.18466 30.7884 2.64601 30.7884Z"
                  fill="#115766"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.73047 18.72C6.73047 18.3329 7.05319 18.019 7.45129 18.019H9.33845C9.66632 16.6117 10.9603 15.561 12.5067 15.561C14.0531 15.561 15.3472 16.6117 15.675 18.019H24.3028C24.7009 18.019 25.0236 18.3329 25.0236 18.72C25.0236 19.1071 24.7009 19.4209 24.3028 19.4209H15.675C15.3472 20.8282 14.0531 21.8789 12.5067 21.8789C10.9603 21.8789 9.66632 20.8282 9.33845 19.4209H7.45129C7.05319 19.4209 6.73047 19.1071 6.73047 18.72ZM6.73047 12.1653C6.73047 11.7782 7.05319 11.4644 7.45129 11.4644H16.079C16.4069 10.0571 17.7009 9.00638 19.2473 9.00638C20.7938 9.00638 22.0878 10.0571 22.4156 11.4644H24.3028C24.7009 11.4644 25.0236 11.7782 25.0236 12.1653C25.0236 12.5524 24.7009 12.8663 24.3028 12.8663H22.4156C22.0878 14.2736 20.7938 15.3242 19.2473 15.3242C17.7009 15.3242 16.4069 14.2736 16.079 12.8663H7.45129C7.05319 12.8663 6.73047 12.5524 6.73047 12.1653ZM10.6998 18.72C10.6998 19.6904 11.5088 20.477 12.5067 20.477C13.5047 20.477 14.3136 19.6904 14.3136 18.72C14.3136 17.7496 13.5047 16.9629 12.5067 16.9629C11.5088 16.9629 10.6998 17.7496 10.6998 18.72ZM17.4404 12.1653C17.4404 13.1357 18.2494 13.9224 19.2473 13.9224C20.2453 13.9224 21.0542 13.1357 21.0542 12.1653C21.0542 11.1949 20.2453 10.4083 19.2473 10.4083C18.2494 10.4083 17.4404 11.1949 17.4404 12.1653Z"
                  fill="#C2E2E9"
                ></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl">Data Control</h4>
              <p class="pt-4">
                You always have full control of your data and the power to
                determine which of your users can access or download it.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="w-8 mr-8">
              <svg
                width="40"
                height="31"
                viewBox="0 0 40 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00827 30.7884H36.312C37.9497 30.7884 39.2773 29.4659 39.2773 27.8282V7.14118C39.2773 6.48391 39.0589 5.84646 38.6565 5.3268L35.4217 1.14971C34.8601 0.424489 33.998 0 33.0807 0H9.00504C7.36735 0 6.04297 1.32761 6.04297 2.9653V27.8231C6.04297 29.4608 7.37058 30.7884 9.00827 30.7884Z"
                  fill="#115766"
                ></path>
                <path
                  d="M16.6443 24.501H1.48177C0.662928 24.501 -0.00087738 23.8374 -0.00087738 23.0185V10.3866C-0.00087738 10.0777 0.095623 9.77744 0.275143 9.52602L2.14434 6.90819C2.42264 6.51844 2.87029 6.28711 3.3492 6.28711H16.6479C17.4668 6.28711 18.127 6.95091 18.127 7.76976V23.0183C18.127 23.8372 17.4631 24.501 16.6443 24.501Z"
                  fill="#46B2C8"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.06455 10.5024C6.36262 10.5024 4.17228 12.6927 4.17228 15.3946C4.17228 18.0966 6.36262 20.2869 9.06455 20.2869C11.7665 20.2869 13.9568 18.0966 13.9568 15.3946C13.9568 12.6927 11.7665 10.5024 9.06455 10.5024ZM2.76953 15.3946C2.76953 11.918 5.58791 9.09961 9.06455 9.09961C12.5412 9.09961 15.3596 11.918 15.3596 15.3946C15.3596 18.8713 12.5412 21.6896 9.06455 21.6896C5.58791 21.6896 2.76953 18.8713 2.76953 15.3946Z"
                  fill="#C2E2E9"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.4757 10.9828C13.7496 11.2567 13.7496 11.7008 13.4757 11.9747L5.64459 19.8058C5.37068 20.0797 4.9266 20.0797 4.65269 19.8058C4.37879 19.5319 4.37879 19.0878 4.65269 18.8139L12.4838 10.9828C12.7577 10.7089 13.2018 10.7089 13.4757 10.9828Z"
                  fill="#C2E2E9"
                ></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl">Reduce Addressing errors</h4>
              <p class="pt-4">
                Access to use our proprietary AddressPack addressing service to
                help you reduce addressing errors that globally mapping
                companies typically miss.
              </p>
            </div>
          </div>
        </section>
      </section>
      <div class="custom-shape-divider-bottom-1636017048">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
    <!-- <section
      class="
        text-center
        max-w-screen-lg
        text-container
        sm:py-20
        py-10
        mx-auto
        sm:px-8
        px-6
      "
    >
      <div>
        <h2>More with Youverify+</h2>
        <div
          class="
            grid
            sm:gap-10
            gap-0
            sm:grid-cols-2
            grid-cols-1 grid-
            text-left
            mt-12
            auto-rows-fr
          "
        >
          <section class="youverify-plus-item">
            <div
              class="p-12 sm:text-left text-center h-full bg-white rounded-xl"
            >
              <span class="inline-block sm:mx-0 mx-auto"
                ><svg
                  width="40"
                  height="46"
                  viewBox="0 0 40 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.526 45.5886H1.2304C0.550901 45.5886 6.10352e-05 45.0377 6.10352e-05 44.3582V9.92591C6.10352e-05 9.53687 0.184067 9.17075 0.49626 8.93861L7.55183 3.69225C7.76406 3.53444 8.02149 3.44922 8.28596 3.44922H30.526C31.2055 3.44922 31.7563 4.00006 31.7563 4.67955V44.3582C31.7563 45.0377 31.2055 45.5886 30.526 45.5886Z"
                    fill="#C2E2E9"
                  ></path>
                  <path
                    d="M4.67955 42.1394H33.9752C34.6547 42.1394 35.2055 41.5885 35.2055 40.909V6.47669C35.2055 6.08765 35.0215 5.72153 34.7093 5.48939L27.6537 0.243031C27.4415 0.0852217 27.1841 0 26.9196 0H4.67955C4.00006 0 3.44922 0.550839 3.44922 1.23033V40.909C3.44922 41.5885 4.00006 42.1394 4.67955 42.1394Z"
                    fill="#115766"
                  ></path>
                  <path
                    d="M30.6246 18.1791H38.5386C39.1508 18.1791 39.6471 17.6848 39.6471 17.0726V10.3807C39.6471 10.1497 39.575 9.92511 39.4408 9.73713L38.532 8.46436C38.3239 8.17295 37.9887 8 37.6307 8H30.6242C30.0119 8 29.5161 8.4963 29.5161 9.10852V17.0706C29.5161 17.6828 30.0124 18.1791 30.6246 18.1791Z"
                    fill="#C2E2E9"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M37.7222 10.8787C37.9172 11.0737 37.9172 11.3898 37.7222 11.5848L34.0055 15.3016C33.8105 15.4966 33.4943 15.4966 33.2993 15.3016L31.4409 13.4432C31.2459 13.2482 31.2459 12.9321 31.4409 12.7371C31.6359 12.5421 31.9521 12.5421 32.1471 12.7371L33.6524 14.2424L37.0161 10.8787C37.2111 10.6837 37.5272 10.6837 37.7222 10.8787Z"
                    fill="#46B2C8"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.34155 10.4522C8.34155 9.97593 8.72763 9.58984 9.20389 9.58984H23.283C23.7593 9.58984 24.1454 9.97593 24.1454 10.4522C24.1454 10.9284 23.7593 11.3145 23.283 11.3145H9.20389C8.72763 11.3145 8.34155 10.9284 8.34155 10.4522Z"
                    fill="#46B2C8"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.34155 17.5996C8.34155 17.1234 8.72763 16.7373 9.20389 16.7373H23.283C23.7593 16.7373 24.1454 17.1234 24.1454 17.5996C24.1454 18.0759 23.7593 18.462 23.283 18.462H9.20389C8.72763 18.462 8.34155 18.0759 8.34155 17.5996Z"
                    fill="#46B2C8"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.34155 24.7461C8.34155 24.2699 8.72763 23.8838 9.20389 23.8838H28.6537C29.13 23.8838 29.5161 24.2699 29.5161 24.7461C29.5161 25.2224 29.13 25.6085 28.6537 25.6085H9.20389C8.72763 25.6085 8.34155 25.2224 8.34155 24.7461Z"
                    fill="#46B2C8"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.34155 31.8936C8.34155 31.4173 8.72763 31.0312 9.20389 31.0312H28.6537C29.13 31.0312 29.5161 31.4173 29.5161 31.8936C29.5161 32.3698 29.13 32.7559 28.6537 32.7559H9.20389C8.72763 32.7559 8.34155 32.3698 8.34155 31.8936Z"
                    fill="#46B2C8"
                  ></path>
                </svg>
              </span>
              <h4 class="mt-6">Verify CAC registration</h4>
              <p class="mt-4 mb-2">
                Conduct business (CAC) search report on Nigerian companies
              </p>
            </div>
          </section>
          <section class="youverify-plus-item">
            <div
              class="p-12 sm:text-left text-center h-full bg-white rounded-xl"
            >
              <span class="inline-block sm:mx-0 mx-auto"
                ><svg
                  width="46"
                  height="40"
                  viewBox="0 0 46 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="5.68286"
                    y="16.9062"
                    width="33.9641"
                    height="22.7413"
                    rx="3.07347"
                    fill="#115766"
                  ></rect>
                  <path
                    d="M22.6554 0L45.3109 19.8235H0L22.6554 0Z"
                    fill="#46B2C8"
                  ></path>
                  <path
                    d="M17.9332 29.5033H27.3973C28.246 29.5033 28.934 28.8156 28.934 27.9669V19.9049C28.934 19.5847 28.834 19.2736 28.6479 19.013L27.6033 17.55C27.3148 17.146 26.8493 16.9062 26.3529 16.9062H17.9305C17.0818 16.9062 16.3965 17.5943 16.3965 18.443V27.9665C16.3965 28.8152 17.0845 29.5033 17.9332 29.5033Z"
                    fill="#C2E2E9"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.5515 20.4681C26.7928 20.7094 26.7928 21.1007 26.5515 21.342L21.9519 25.9416C21.7105 26.1829 21.3193 26.1829 21.078 25.9416L18.7782 23.6418C18.5368 23.4005 18.5368 23.0092 18.7782 22.7679C19.0195 22.5266 19.4107 22.5266 19.652 22.7679L21.5149 24.6308L25.6776 20.4681C25.9189 20.2268 26.3102 20.2268 26.5515 20.4681Z"
                    fill="#46B2C8"
                  ></path>
                </svg>
              </span>
              <h4 class="mt-6">Verify address claims</h4>
              <p class="mt-4 mb-2">
                Verify that the Nigerian company is available at the address
                they claim with address verification
              </p>
            </div>
          </section>
          <section class="youverify-plus-item">
            <div
              class="p-12 sm:text-left text-center h-full bg-white rounded-xl"
            >
              <span class="inline-block sm:mx-0 mx-auto"
                ><svg
                  width="51"
                  height="40"
                  viewBox="0 0 51 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6228 39.6472H46.7365C48.8582 39.6472 50.5781 37.9332 50.5781 35.8115V9.20372C50.5781 8.35221 50.2952 7.52647 49.7738 6.85323L45.6201 1.48947C44.8925 0.549934 43.7756 0 42.5873 0H11.6179C9.49623 0 7.78125 1.71994 7.78125 3.84159V35.8056C7.78125 37.9272 9.50119 39.6472 11.6228 39.6472Z"
                    fill="#115766"
                  ></path>
                  <path
                    d="M21.423 31.5512H1.9208C0.859978 31.5512 5.72205e-06 30.692 5.72205e-06 29.6312V13.3795C5.72205e-06 12.9793 0.125025 12.5902 0.357595 12.2645L2.75902 8.90131C3.11955 8.39637 3.69948 8.09668 4.31992 8.09668H21.4273C22.4882 8.09668 23.3438 8.95665 23.3438 10.0175V29.6304C23.3438 30.6912 22.4838 31.5512 21.423 31.5512Z"
                    fill="#46B2C8"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.9777 15.3054C18.3693 15.6969 18.3693 16.3317 17.9777 16.7233L10.5148 24.1862C10.1233 24.5778 9.48845 24.5778 9.09691 24.1862L5.36543 20.4547C4.97389 20.0632 4.97389 19.4284 5.36543 19.0369C5.75697 18.6453 6.39178 18.6453 6.78332 19.0369L9.80585 22.0594L16.5599 15.3054C16.9514 14.9138 17.5862 14.9138 17.9777 15.3054Z"
                    fill="#C2E2E9"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32.3315 14.7144C31.6249 14.7144 31.0904 15.2656 31.0904 15.8991C31.0904 16.5326 31.6249 17.0838 32.3315 17.0838C33.0381 17.0838 33.5726 16.5326 33.5726 15.8991C33.5726 15.2656 33.0381 14.7144 32.3315 14.7144ZM29.5107 15.8991C29.5107 14.3516 30.7948 13.1348 32.3315 13.1348C33.8682 13.1348 35.1523 14.3516 35.1523 15.8991C35.1523 17.4466 33.8682 18.6635 32.3315 18.6635C30.7948 18.6635 29.5107 17.4466 29.5107 15.8991Z"
                    fill="#C2E2E9"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.4553 22.6119C39.7487 22.6119 39.2141 23.1631 39.2141 23.7966C39.2141 24.4301 39.7487 24.9813 40.4553 24.9813C41.1619 24.9813 41.6964 24.4301 41.6964 23.7966C41.6964 23.1631 41.1619 22.6119 40.4553 22.6119ZM37.6345 23.7966C37.6345 22.249 38.9185 21.0322 40.4553 21.0322C41.9921 21.0322 43.276 22.249 43.276 23.7966C43.276 25.3441 41.9921 26.5609 40.4553 26.5609C38.9185 26.5609 37.6345 25.3441 37.6345 23.7966Z"
                    fill="#C2E2E9"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M42.3756 14.0322C42.6796 14.345 42.6726 14.845 42.3599 15.1491L31.5281 25.6799C31.2154 25.984 30.7153 25.9769 30.4113 25.6642C30.1072 25.3514 30.1142 24.8514 30.427 24.5473L41.2587 14.0165C41.5715 13.7124 42.0715 13.7195 42.3756 14.0322Z"
                    fill="#C2E2E9"
                  ></path>
                </svg>
              </span>
              <h4 class="mt-6">Verify Tax Identification Numbers</h4>
              <p class="mt-4 mb-2">
                Verify Nigerian companies with their Tax Identification Number
                (TIN)
              </p>
            </div>
          </section>
          <section class="youverify-plus-item">
            <div
              class="p-12 sm:text-left text-center h-full bg-white rounded-xl"
            >
              <span class="inline-block sm:mx-0 mx-auto"
                ><svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.8236 19.8232C9.66798 19.8232 1.29603 27.4599 0.136989 37.304C-0.0145753 38.5913 1.05076 39.6468 2.34693 39.6468H37.3002C38.5964 39.6468 39.6617 38.5913 39.5102 37.304C38.3511 27.4599 29.9792 19.8232 19.8236 19.8232Z"
                    fill="#115766"
                  ></path>
                  <path
                    d="M12.5011 16.9916H27.1458C27.7939 16.9916 28.3193 16.4663 28.3193 15.8182V4.71479C28.3193 4.40426 28.1962 4.10639 27.977 3.88644L24.4477 0.34511C24.2275 0.12418 23.9284 0 23.6165 0H12.5011C11.853 0 11.3276 0.525378 11.3276 1.17346V15.8182C11.3276 16.4663 11.853 16.9916 12.5011 16.9916Z"
                    fill="#46B2C8"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.7692 26.2528C25.0762 26.5598 25.0762 27.0577 24.7692 27.3647L18.9164 33.2175C18.6093 33.5246 18.1115 33.5246 17.8044 33.2175L14.878 30.2911C14.5709 29.9841 14.5709 29.4862 14.878 29.1792C15.1851 28.8721 15.6829 28.8721 15.99 29.1792L18.3604 31.5496L23.6572 26.2528C23.9643 25.9457 24.4621 25.9457 24.7692 26.2528Z"
                    fill="#C2E2E9"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0155 4.94655C16.5271 4.94655 16.1575 5.32765 16.1575 5.7656C16.1575 6.20355 16.5271 6.58465 17.0155 6.58465C17.504 6.58465 17.8736 6.20355 17.8736 5.7656C17.8736 5.32765 17.504 4.94655 17.0155 4.94655ZM15.0654 5.7656C15.0654 4.69573 15.9531 3.85449 17.0155 3.85449C18.078 3.85449 18.9657 4.69573 18.9657 5.7656C18.9657 6.83547 18.078 7.67671 17.0155 7.67671C15.9531 7.67671 15.0654 6.83547 15.0654 5.7656Z"
                    fill="#C2E2E9"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.632 10.4065C22.1435 10.4065 21.7739 10.7876 21.7739 11.2256C21.7739 11.6635 22.1435 12.0446 22.632 12.0446C23.1205 12.0446 23.49 11.6635 23.49 11.2256C23.49 10.7876 23.1205 10.4065 22.632 10.4065ZM20.6819 11.2256C20.6819 10.1557 21.5696 9.31445 22.632 9.31445C23.6944 9.31445 24.5821 10.1557 24.5821 11.2256C24.5821 12.2955 23.6944 13.1367 22.632 13.1367C21.5696 13.1367 20.6819 12.2955 20.6819 11.2256Z"
                    fill="#C2E2E9"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.9594 4.47498C24.1696 4.6912 24.1648 5.03689 23.9485 5.2471L16.4601 12.5275C16.2439 12.7377 15.8982 12.7329 15.688 12.5166C15.4778 12.3004 15.4826 11.9547 15.6989 11.7445L23.1873 4.4641C23.4035 4.25389 23.7492 4.25875 23.9594 4.47498Z"
                    fill="#C2E2E9"
                  ></path>
                </svg>
              </span>
              <h4 class="mt-6">Validate business owner identities</h4>
              <p class="mt-4 mb-2">
                Validate the identities of the business owners
              </p>
            </div>
          </section>
        </div>
      </div>
    </section> -->

    <get-started></get-started>

    <section class="my-20 max-w-screen-lg mx-auto text-center">
      <span
        class="text-blue tracking-widest px-4 py-2 uppercase sm:text-sm text-xs rounded mb-3 leading-none inline-block bg-blue-100"
        >As featured on</span
      >
      <div class="flex justify-between sm:flex-row flex-col items-center mt-6">
        <a
          href="https://www.biometricupdate.com/202010/nigerias-youverify-granted-two-iso-certifications-to-ensure-biometric-data-protection"
          target="_blank"
          rel="noreferrer"
          class="sm:mb-0 mb-10 last:mb-0"
          ><div>
            <LazyImage
              width="156"
              height="33"
              src="~/assets/images/logos/features/biometric-update.png"
              alt="BIOMETRIC Update"
            />
          </div>
        </a>
        <a
          href="https://techpoint.africa/2020/03/10/youverify-raises-1-5million/"
          target="_blank"
          rel="noreferrer"
          class="sm:mb-0 mb-10 last:mb-0"
          ><div>
            <LazyImage
              width="156"
              height="33"
              src="~/assets/images/logos/features/techpoint.png"
              alt="BIOMETRIC Update"
            />
          </div>
        </a>
        <a
          href="https://techcabal.com/2020/03/10/nigerian-startup-youverify-raises-1-5-million-and-is-looking-to-solve-africas-identity-verification-problem/"
          target="_blank"
          rel="noreferrer"
          class="sm:mb-0 mb-10 last:mb-0"
          ><div>
            <LazyImage
              width="156"
              height="33"
              src="~/assets/images/logos/features/techcabal.png"
              alt="BIOMETRIC Update"
            />
          </div>
        </a>
        <a
          href="https://www.crunchbase.com/organization/youverify-ng"
          target="_blank"
          rel="noreferrer"
          class="sm:mb-0 mb-10 last:mb-0"
          ><div>
            <LazyImage
              width="156"
              height="33"
              src="~/assets/images/logos/features/crunchbase.png"
              alt="BIOMETRIC Update"
            />
          </div>
        </a>
        <a
          href="https://ventureburn.com/2020/03/nigeria-identity-verification-startup-youverify-1-5m/"
          target="_blank"
          rel="noreferrer"
          class="sm:mb-0 mb-10 last:mb-0"
          ><div>
            <LazyImage
              width="156"
              height="33"
              src="~/assets/images/logos/features/venture-burn.png"
              alt="BIOMETRIC Update"
            />
          </div>
        </a>
      </div>
    </section>
    <section class="bg-blue-100">
      <div class="max-w-screen-xl mx-auto px-8">
        <div
          class="flex flex-col sm:flex-row justify-between items-center gap-8 py-20  mt-20"
        >
          <div class="md:w-5/12">
            <div class="flex items-center flex-col sm:flex-row gap-4">
              <div class="flex justify-between gap-x-6">
				  <div class="flex justify-center">
                <LazyImage
                  src="~/assets/images/logos/NdprLogos/code-of-practice.png"
                  class="object-cover"
                  alt=""
                />
              </div>

              <div class="flex justify-center">
                <LazyImage
                  src="~/assets/images/logos/NdprLogos/management-system.png"
                  class="object-cover"
                  alt=""
                />
              </div>
			  </div>

              <div class="flex justify-center">
                <LazyImage
                  src="~/assets/images/logos/NdprLogos/ndpr-audit-logo.png"
                  class="object-cover h-full"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="md:w-6/12 sm:mt-0 mt-8 ">
            <h3>Optimized for security</h3>
            <p class="sm:my-8 my-4 sm:w-10/12">
              With ISO 27001 and ISO 27018 certifications, as well as a NITDA
              NDPR assessment, the security of your data is our top priority.
            </p>
			<AppButton
                  buttonText="More about Youverify"
                  buttoncolor="textbluebutton"
                  href="/about-us"
                >
                  <svg
                    slot="prepend"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transform inline-block mr-4 false"
                  >
                    <path
                      d="M1 0.999999L7 7L1 13"
                      stroke="#46B2C8"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </AppButton>
           
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="my-10 md:px-80">
      <div class="flex justify-around items-center flex-col md:flex-row">
        <div class="flex justify-center mt-8 md:mt-0">
          <LazyImage src="~/assets/images/logos/NdprLogos/code-of-practice.png" class="object-cover h-full w-36" alt="" />
        </div>
        <div class="flex justify-center mt-8 md:mt-0">
          <LazyImage src="~/assets/images/logos/NdprLogos/ndpr-audit-logo.jpg" class="object-cover h-28 w-full" alt="" />
        </div>
        <div class="flex justify-center mt-8 md:mt-0">
          <LazyImage src="~/assets/images/logos/NdprLogos/management-system.png" class="object-cover h-full w-36" alt="" />
        </div>
      </div>
    </section> -->

    <section
      class="text-center bg-blue-200 py-20 text-blue-100 relative overflow-hidden"
    >
      <section class="sm:w-auto w-full px-10 mx-auto text-center">
        <h2 class="text-blue-100 my-10">Interested but with more questions?</h2>
        <span class="cursor-pointer inline-block" role="button" tabindex="0">
          <!-- <button class="bg-blue text-white rounded py-2 sm:mb-0 mb-4 px-8">
            <NuxtLink to="/contact-us">Request more info</NuxtLink>
          </button> -->
          <AppButton
            buttonText="Request more info"
            buttoncolor="bluebutton"
            to="/contact-us"
          />
        </span>
      </section>
    </section>
	
  </div>
</template>

<script>
import getStarted from "~/components/common/getStarted.vue";

export default {
  data() {
    return {
      showService: true,
    };
  },
  methods: {
    toggleService(params) {
      if (params === "with") {
        this.showService = true;
      } else {
        this.showService = false;
      }
    },
  },
  components: {
    getStarted,
  },
};
</script>

<style scoped>
.custom-shape-divider-bottom-1636017048 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1636017048 svg {
  position: relative;
  display: block;
  width: calc(159% + 1.3px);
  height: 103px;
}

.custom-shape-divider-bottom-1636017048 .shape-fill {
  fill: #fff;
}

.custom-shape-divider-top-1636027032 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1636027032 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 60px;
}

.custom-shape-divider-top-1636027032 .shape-fill {
  fill: #ffffff;
}

.custom-shape-divider-bottom-1636017048 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1636017048 svg {
  position: relative;
  display: block;
  width: calc(159% + 1.3px);
  height: 103px;
}

.custom-shape-divider-bottom-1636017048 .shape-fill {
  fill: #fff;
}

.custom-shape-divider-top-1636027032 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1636027032 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 60px;
}

.custom-shape-divider-top-1636027032 .shape-fill {
  fill: #ffffff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* .slide-in-image {
  transition: transform 0.3s ease-in-out;
}

.v-enter-from {
}
.v-enter-active {
  animation: slide-scale 0.3s ease-out;
}
.v-enter-to {
}
.v-leave-from {
}
.v-leave-active {
  animation: slide-scale 0.3s ease-out;
}
.v-leave-to {
}
@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  } */
/* } */
</style>
