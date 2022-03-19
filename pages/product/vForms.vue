<template>
  <div>
    <header
      class="bg-blue relative flex items-center justify-start pt-20 pb-32 md:pt-40 md:pb-20"
    >
      <section class="w-full max-w-screen-xl mx-auto sm:px-8 px-6">
        <div
          class="flex-col-reverse md:flex-row flex justify-center items-center"
        >
          <div class="md:w-3/6">
            <h2 class="text-white max-w-screen-lg mt-8">
              Scale your business operations with vForms
            </h2>
            <p class="mt-3 md:w-4/5 text-white">
              Simplify compliance data acquisition and verification from over
              160 authoritative data sources without coding
            </p>
            <div class="mt-3 sm:mt-8 lg:mt-10 flex flex-wrap">
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

            <div class="mt-10 flex items-center">
              <h4 class="text-white">Building with vForms</h4>
              <div class="ml-3 border w-3/6"></div>
            </div>
            <div class="mt-3 grid grid-cols-4">
              <figure class="relative w-20 h-20">
                <LazyImage
                  src="~/assets/images/logos/trusted/Standard_Chartered_(2021).svg (1).png"
                  alt="standard-cahtered"
                  class="h-full w-full object-contain"
                />
              </figure>
              <figure class="relative w-16 h-16">
                <LazyImage
                  src="~/assets/images/logos/trusted/svg/Bolt Logo.svg"
                  alt="bolt logo"
                  class="h-full w-full object-contain"
                />
              </figure>
              <figure class="relative w-16 h-16">
                <LazyImage
                  src="~/assets/images/logos/trusted/svg/Sterling Bank Plc Logo.svg"
                  alt="sterling-bank-logo"
                  class="h-full w-full object-contain"
                />
              </figure>
            </div>
          </div>
          <div class="md:w-3/6">
           
            <lottie-player
              class="w-full h-full"
              src="https://assets1.lottiefiles.com/packages/lf20_hgisx2ep.json"
              background="transparent"
              speed="1"
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
				  px-2
                  md:px-4
                  rounded-full
				  text-xs
                  md:text-sm
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
                  
				  px-4
                  md:px-8
                  font-bold
                  rounded-full
				  text-xs
                  md:text-sm
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
                src="https://assets10.lottiefiles.com/packages/lf20_vgxxp1nq.json"
                background="transparent"
                speed="0.8"
                class="h-full w-full"
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

    <section class="bg-blue-100 max-w-screen-xl mx-auto sm:px-8 px-6">
      <div
        class="flex sm:flex-row flex-col-reverse justify-evenly items-center py-20"
      >
        <div class="sm:w-6/12 sm:pt-0 pt-8">
          <span
            class="text-white tracking-widest px-4 py-2 uppercase sm:text-sm text-xs rounded mb-3 leading-none inline-block bg-blue"
            >Data Driven</span
          >
          <h2>
            Make data-driven <br />
            credit decision
          </h2>
          <p class="sm:my-8 my-4 sm:w-10/12">
            Youverify vforms allows you to digitise your credit decision into
            data drive, clean and customisable workflows that can be set up and
            optimised without a single line of code. You’ll get the most
            reliable insight about your customer allowing you to make the best
            credit offering, while mitigating risk to your business.
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
        <div class="sm:w-5/12">
          <div class="sm:w-auto w-full mx-auto">
            
            <lottie-player
              class="w-full h-full"
              src="https://assets9.lottiefiles.com/packages/lf20_foppdwfa.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </section>

    <section class="sm:my-20 my-10 max-w-screen-xl mx-auto sm:px-8 px-6">
      <div
        class="flex sm:flex-row flex-col-reverse justify-evenly items-center py-20"
      >
        <div class="sm:w-6/12 sm:pt-0 pt-8">
          <div class="sm:w-auto w-full mx-auto">
            <LazyImage
              width="504"
              height="545"
              src="../../assets/images/illustrations/Compliance_3.png"
              alt="compliance"
            />
          </div>
        </div>
        <div class="sm:w-6/12">
          <span
            class="text-white tracking-widest px-4 py-2 uppercase sm:text-sm text-xs rounded mb-3 leading-none inline-block bg-blue"
            >regulations</span
          >
          <h2>
            Comply with data <br />
            regulations seamlessly
          </h2>
          <p class="sm:my-8 my-4 sm:w-10/12">
            Data privacy and protection is inbuilt into vForm allowing you to
            capture and save consent; securely archive and retrieve PIIs,
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
            
          </div>
        </div>
      </div>
    </section>

    <section class="bg-blue-300 py-20 text-blue-100 relative overflow-hidden">
      <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <section class="grid sm:grid-cols-2 grid-cols-1">
          <div class="sm:mt-0 mt-96">
            <h2 class="text-blue mb-4">Manage vForms on a Dashboard</h2>
            <p>Custom-made features for seamless compliance workflow</p>
            <div class="mt-8">
              <div class="flex mb-10">
                <div class="w-6 flex-shrink-0 mr-6">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="13" cy="13" r="13" fill="#E0F1F4"></circle>
                    <path
                      d="M18.1818 10L11.1818 17L8 13.8182"
                      stroke="#0B4B58"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p class="-mt-1">No-code workflows</p>
              </div>
              <div class="flex mb-10">
                <div class="w-6 flex-shrink-0 mr-6">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="13" cy="13" r="13" fill="#E0F1F4"></circle>
                    <path
                      d="M18.1818 10L11.1818 17L8 13.8182"
                      stroke="#0B4B58"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p class="-mt-1">Intuitive and beautiful interface</p>
              </div>
              <div class="flex mb-10">
                <div class="w-6 flex-shrink-0 mr-6">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="13" cy="13" r="13" fill="#E0F1F4"></circle>
                    <path
                      d="M18.1818 10L11.1818 17L8 13.8182"
                      stroke="#0B4B58"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p class="-mt-1">Integration and Developer-friendly</p>
              </div>
              <div class="flex mb-10">
                <div class="w-6 flex-shrink-0 mr-6">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="13" cy="13" r="13" fill="#E0F1F4"></circle>
                    <path
                      d="M18.1818 10L11.1818 17L8 13.8182"
                      stroke="#0B4B58"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p class="-mt-1">Scalability and Security built-in</p>
              </div>
              <div class="flex mb-10">
                <div class="w-6 flex-shrink-0 mr-6">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="13" cy="13" r="13" fill="#E0F1F4"></circle>
                    <path
                      d="M18.1818 10L11.1818 17L8 13.8182"
                      stroke="#0B4B58"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p class="-mt-1">Real-time analytics</p>
              </div>
            </div>
            <AppButton
              buttonText="Contact Sales"
              buttoncolor="whitebutton"
              href="/contact-us"
              class="min-w-max"
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
          <div class="">
            <LazyImage
              src="~/assets/images/screenshots/choose-right-pattern.svg"
              alt="choose-right-pattern"
              class="sm:block hidden absolute sm:h-full top-0 right-0"
            />
            <LazyImage
              src="../../assets/images/screenshots/vform-dashboard-new.jpg"
              alt="vform-dashboard-new"
              class="absolute sm:h-full sm:w-auto w-full top-0 sm:pl-0 pl-6 py-12"
              style="right: -10%"
            />
          </div>
        </section>
      </section>
    </section>

    <section
      id="how-it-works"
      class="text-center max-w-screen-lg text-container sm:py-20 py-10 mx-auto sm:px-8 px-6"
    >
      <section class="text-center">
        <h3>See how vForm works</h3>
        <p class="mb-12">
          Reduce risk and automate compliance with vForms in a matter of seconds
        </p>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/8d636Ki2jN8"
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
