<template>
  <div>
    <header
      class="bg-blue-300 relative flex items-center justify-start pt-20 pb-32 md:pt-48 md:pb-32"
    >
      <section class="w-full max-w-screen-xl mx-auto sm:px-8 px-6">
		  <h1 class="hidden"></h1>
        <div class="flex-col-reverse md:flex-row flex justify-center">
          <div class="md:w-3/6">
            <h3 class="text-white max-w-screen-lg mt-8">
              Fill a KYC form once and forever.
            </h3>
            <p class="mt-3 md:w-4/5 text-white">
              YOUID’s secure digital ID lets you safely store personal details
              in an encrypted format and use it to access online services
              securely without having to fill another KYC form anymore.
            </p>
            <div class="mt-3 sm:mt-8 lg:mt-10 flex flex-wrap">
              <div class="inline-block">
                <div class="flex">
                  <a
                    href="https://apps.apple.com/us/app/youid/id1564932247"
                    class="sm:mr-4 mr-2"
                    target="_blank"
                    rel="noreferrer"
                    ><LazyImage
                      src="@/assets/images/icons/menu/apple.svg"
                      alt="Download on Apple Store" /></a
                  ><a
                    href="https://play.google.com/store/apps/details?id=com.youid"
                    target="_blank"
                    rel="noreferrer"
                    ><LazyImage
                      src="@/assets/images/icons/menu/google.svg"
                      alt="Download on Google Play"
                  /></a>
                </div>
              </div>
            </div>
            <div class="mt-10 flex items-center">
              <h4 class="text-white">Building with vForms</h4>
              <div class="ml-3 border w-3/6"></div>
            </div>
            <div class="mt-3 grid grid-cols-4">
              <figure class="relative w-20 h-20">
                <LazyImage
                  src="../../assets/images/logos/trusted/svg/Wema Bank Logo.svg"
                  alt="wema-bank logo"
                  class="h-full w-full object-contain"
                />
              </figure>
              <figure class="relative w-16 h-16">
                <LazyImage
                  src="~/assets/images/logos/trusted/svg/Bolt Logo.svg"
                  alt="bolt-logo"
                  class="h-full w-full object-contain"
                />
              </figure>
              <figure class="relative w-16 h-16">
                <LazyImage
                  src="~/assets/images/logos/trusted/svg/Sterling Bank Plc Logo.svg"
                  alt="sterling-bank logo"
                  class="h-full w-full object-contain"
                />
              </figure>
            </div>
          </div>
          <div class="md:w-3/6">
            
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_t0yoz1ta.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              style="width: 100%; height: 100%"
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

    <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
      <div
        class="flex sm:flex-row flex-col-reverse justify-evenly items-center py-20"
      >
        <div class="sm:w-6/12 sm:pt-0 pt-8">
          <span
            class="text-blue tracking-widest px-4 py-2 uppercase sm:text-sm text-xs rounded mb-3 leading-none inline-block bg-blue-100"
            >machine-learning algorithm</span
          >
          <h3>
            More opportunities with <br />
            CredenceScore
          </h3>
          <p class="sm:my-8 my-4 sm:w-10/12">
            YOUID’s proprietary machine-learning algorithm computes your
            CredenceScore based on the level of confidence it has in your data
            without exposing or accessing your personal data. The beauty of
            CredenceScore is that the higher the score, the richer, wider and
            better offers you get from our marketplace
          </p>
          <div class="mt-3 sm:mt-8 lg:mt-10 flex flex-wrap" data-v-6addea9c="">
			  <AppButton
                buttonText="Video Demo"
                buttoncolor="darkbluebutton"
                 href="#how-it-works"
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
                buttonText="Contact Sales"
                buttoncolor="whitebutton"
                href="/contact-us"
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
            
          </div>
        </div>
        <div class="sm:w-5/12 w-full h-full">
          <div class="sm:w-auto w-full mx-auto flex justify-end">
            
            <lottie-player
              class="sm:mx-0 mx-auto"
              src="https://assets6.lottiefiles.com/packages/lf20_gp1gfcsw.json"
              background="transparent"
              speed="1"
              style="width: 355px; height: 378px"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-blue-100 max-w-screen-xl mx-auto sm:px-8 px-6">
      <div class="flex sm:flex-row flex-col justify-evenly items-center py-20">
        <div class="sm:w-6/12 sm:pt-0 w-full h-full">
          <div class="sm:w-auto w-full mx-auto flex">
            
            <lottie-player
              class="sm:mx-0 mx-auto"
              src="https://assets2.lottiefiles.com/packages/lf20_xh8pfev9.json"
              background="transparent"
              speed="1"
              style="width: 355px; height: 378px"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div class="sm:w-4/12 pt-8">
          <span
            class="text-white tracking-widest px-4 py-2 uppercase sm:text-sm text-xs rounded mb-3 leading-none inline-block bg-blue"
            >Secured from breaches</span
          >
          <h3>Be sure with YOUID Secure</h3>
          <p class="sm:my-8 my-4 sm:w-10/12">
            Get notified when your password has been breached or your
            credentials are leaked by a third-party data breach. YOUID Secure
            continuously updates and collates reported data breaches and
            leakages globally. To check if any of your credentials have been
            breached, enable YOUID Secure for free on YOUID app
          </p>
          <div class="mt-3 sm:mt-8 lg:mt-10 flex flex-wrap" data-v-6addea9c="">
			  <AppButton
                buttonText="See how it works"
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
                buttonText="Get in touch"
                buttoncolor="whitebutton"
                href="/contact-us"
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
              href="#how-it-works"
              class="items-center justify-center font-medium disabled:curs inline-flex bg-blue-300 text-white py-3 sm:py-4 px-4 sm:px-5 text-sm sm:text-1sm rounded-md mr-4 my-2 outline-none focus:outline-none hover:outline-none transition-all cursor-pointer box-border group flex-shrink-0"
              data-v-6addea9c=""
              >See how it works<svg
                viewBox="0 0 20 20"
                fill="none"
                class="w-5 ml-1.25 transition-transform duration-75 transform group-hover:translate-x-0.5"
                data-v-6addea9c=""
              >
                <path
                  d="M6 10H14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-v-6addea9c=""
                ></path>
                <path
                  d="M10 6L14 10L10 14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-v-6addea9c=""
                ></path></svg></a
            ><a
              href="/contact-us"
              class="items-center justify-center font-medium disabled:curs inline-flex bg-gray-100 text-black py-3.5 sm:py-3.75 px-3.75 sm:px-5 text-sm sm:text-1sm rounded-md my-2 outline-none focus:outline-none hover:outline-none transition-all cursor-pointer box-border group flex-shrink-0"
              data-v-6addea9c=""
              >Get in touch<svg
                viewBox="0 0 20 20"
                fill="none"
                class="w-5 ml-1.25 transition-transform duration-75 transform group-hover:translate-x-0.5"
                data-v-6addea9c=""
              >
                <path
                  d="M6 10H14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-v-6addea9c=""
                ></path>
                <path
                  d="M10 6L14 10L10 14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-v-6addea9c=""
                ></path></svg
            ></a> -->
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
      <div
        class="flex sm:flex-row flex-col-reverse justify-evenly items-center py-20"
      >
        <div class="sm:w-6/12 sm:pt-0 pt-8">
          <span
            class="text-blue tracking-widest px-4 py-2 uppercase sm:text-sm text-xs rounded mb-3 leading-none inline-block bg-blue-100"
            >multi-factor authentication</span
          >
          <h3>Never get stranded with YOU ID Key</h3>
          <p class="sm:my-8 my-4 sm:w-10/12">
            All passwords can be forgotten, compromised or stolen. YOUID Key
            allows you to protect your passwords with a passwordless feature or
            a multi-factor authentication. The YOUID Key supports industry
            standards for time-based one-time passcodes (TOTP or OTP).
          </p>
          <div class="mt-3 sm:mt-8 lg:mt-10 flex flex-wrap" data-v-6addea9c="">
			  <AppButton
                buttonText="Video Demo"
                buttoncolor="darkbluebutton"
                 href="#how-it-works"
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
                buttonText="Contact Sales"
                buttoncolor="whitebutton"
                href="/contact-us"
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
            
          </div>
        </div>

        <div class="sm:w-5/12 w-full h-full">
          <div class="sm:w-auto w-full mx-auto flex justify-end">
            
            <lottie-player
              class="sm:mx-0 mx-auto"
              src="https://assets2.lottiefiles.com/packages/lf20_tbqzhtm4.json"
              background="transparent"
              speed="1"
              style="width: 355px; height: 378px"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-blue-100 max-w-screen-xl mx-auto sm:px-8 px-6">
      <div class="flex sm:flex-row flex-col justify-evenly items-center py-20">
        <div class="sm:w-6/12 sm:pt-0 w-full h-full">
          <div class="sm:w-auto w-full mx-auto flex">
           
            <lottie-player
              class="sm:mx-0 mx-auto"
              src="https://assets6.lottiefiles.com/packages/lf20_c3i6doow.json"
              background="transparent"
              speed="1"
              style="width: 355px; height: 378px"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div class="sm:w-5/12 pt-10">
          <span
            class="text-white tracking-widest px-4 py-2 uppercase sm:text-sm text-xs rounded mb-3 leading-none inline-block bg-blue"
            >Address verification</span
          >
          <h3>Increase Trustworthiness with AddressTrack</h3>
          <p class="sm:my-8 my-4 sm:w-10/12">
            Address verification in Africa can be laborious, repetitive,
            expensive anad mundane for consumers and businesses. YOUID
            AddressTrack solves the problem of address verification by enabling
            consumers and YOUID users to verify their address(es) and securely
            store it on their digital ID - YOUID.
          </p>
          <div class="mt-3 sm:mt-8 lg:mt-10 flex flex-wrap" data-v-6addea9c="">
			  <AppButton
                buttonText="See how it works"
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
                buttonText="Get in touch"
                buttoncolor="whitebutton"
                href="/contact-us"
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
              href="#how-it-works"
              class="items-center justify-center font-medium disabled:curs inline-flex bg-blue-300 text-white py-3 sm:py-4 px-4 sm:px-5 text-sm sm:text-1sm rounded-md mr-4 my-2 outline-none focus:outline-none hover:outline-none transition-all cursor-pointer box-border group flex-shrink-0"
              data-v-6addea9c=""
              >See how it works<svg
                viewBox="0 0 20 20"
                fill="none"
                class="w-5 ml-1.25 transition-transform duration-75 transform group-hover:translate-x-0.5"
                data-v-6addea9c=""
              >
                <path
                  d="M6 10H14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-v-6addea9c=""
                ></path>
                <path
                  d="M10 6L14 10L10 14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-v-6addea9c=""
                ></path></svg></a
            ><a
              href="/contact-us"
              class="items-center justify-center font-medium disabled:curs inline-flex bg-gray-100 text-black py-3.5 sm:py-3.75 px-3.75 sm:px-5 text-sm sm:text-1sm rounded-md my-2 outline-none focus:outline-none hover:outline-none transition-all cursor-pointer box-border group flex-shrink-0"
              data-v-6addea9c=""
              >Get in touch<svg
                viewBox="0 0 20 20"
                fill="none"
                class="w-5 ml-1.25 transition-transform duration-75 transform group-hover:translate-x-0.5"
                data-v-6addea9c=""
              >
                <path
                  d="M6 10H14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-v-6addea9c=""
                ></path>
                <path
                  d="M10 6L14 10L10 14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-v-6addea9c=""
                ></path></svg 
            ></a>-->
          </div>
        </div>
      </div>
    </section>

    <section
      id="how-it-works"
      class="text-center max-w-screen-lg text-container sm:py-20 py-10 mx-auto sm:px-8 px-6"
    >
      <section class="text-center">
        <h3 class="mb-12">
          Protect your personal identity with a secure digital ID
        </h3>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/oWitV8UeiqM"
          title="Reduce risk and automate compliance with vForms"
          frameborder="0"
          class="md:min-h-subfooter h-60 rounded-xl bg-white"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      </section>
    </section>

    <get-started></get-started>
  </div>
</template>

<script>
import getStarted from "~/components/common/getStarted.vue";
export default {};
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
</style>
