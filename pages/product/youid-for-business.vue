<template>
  <div>
    <header
      class="bg-blue-300 relative flex items-center justify-start pt-20 pb-32 md:pt-40 md:pb-20"
    >
      <section class="w-full max-w-screen-xl mx-auto sm:px-8 px-6">
        <div
          class="flex-col-reverse md:flex-row flex justify-center items-center"
        >
          <div class="md:w-3/6">
            <h2 class="text-white max-w-screen-lg mt-8">
              Do business with pre-verified customers
            </h2>
            <p class="mt-3 md:w-4/5 text-white">
              YOUID for Business is a dedicated marketplace where you can share
              your products or services online with targeted customers.
            </p>
            <div class="mt-3 sm:mt-8 lg:mt-10 flex flex-wrap">
				<AppButton
                buttonText="See how it works"
                buttoncolor="bigbluebutton"
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
              <!-- <a
                class="items-center justify-center font-medium disabled:curs inline-flex bg-blue text-white py-3 sm:py-4 px-4 sm:px-5 text-sm sm:text-1sm rounded-md mr-4 my-2 outline-none focus:outline-none hover:outline-none transition-all cursor-pointer box-border group flex-shrink-0"
                href="#how-it-works"
                >See how it works<svg
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
                  ></path></svg></a
              ><a
                class="items-center justify-center font-medium disabled:curs inline-flex bg-gray-100 text-black py-3 sm:py-4 px-4 sm:px-5 text-sm sm:text-1sm rounded-md my-2 outline-none focus:outline-none hover:outline-none transition-all cursor-pointer box-border group flex-shrink-0"
                href="/contact-us"
                >Contact Sales<svg
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
                  ></path></svg
              ></a> -->
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
              src="https://assets5.lottiefiles.com/packages/lf20_tc4mfa1o.json"
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

    <section class="bg-blue-100 sm:pb-20 pb-10">
      <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <section
          class="text-center max-w-screen-lg text-container sm:py-20 py-10 mx-auto sm:px-8 px-6"
        >
          <div class="text-center">
            <h3>How to create a YOUID marketplace template.</h3>
            <p class="pt-4"></p>
          </div>
        </section>
        <section class="grid grid-cols-1 gap-y-16 gap-x-[144px] sm:grid-cols-2">
          <div class="flex">
            <div class="w-8 mr-8">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.286 7H1.71402C0.767394 7 0 7.76739 0 8.71402V45.286C0 46.2326 0.767392 47 1.71402 47H28.9004C29.355 47 29.791 46.8194 30.1124 46.498L39.498 37.1124C39.8194 36.791 40 36.355 40 35.9004V8.71402C40 7.76739 39.2326 7 38.286 7Z"
                  fill="#E0F1F4"
                ></path>
                <circle cx="35.5" cy="11.5" r="11.5" fill="#115766"></circle>
                <path
                  d="M33.16 15.08C34.78 15.08 35.88 13.8 35.88 11.5C35.88 9.2 34.78 7.92 33.16 7.92C31.54 7.92 30.43 9.2 30.43 11.5C30.43 13.8 31.54 15.08 33.16 15.08ZM33.16 13.73C32.43 13.73 31.94 13.07 31.94 11.5C31.94 9.93 32.43 9.27 33.16 9.27C33.89 9.27 34.38 9.93 34.38 11.5C34.38 13.07 33.89 13.73 33.16 13.73ZM38.3905 8C38.2505 8.65 37.9005 8.89 36.9805 8.89H36.6105V10.19H38.1005V15H39.5805V8H38.3905Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl">Choose your objective scenario</h4>
              <p class="pt-4">
                To help you start on the right note, we have provided you with a
                tool that helps you match your product or service to the
                corresponding CredenceScore. This is only advisory in nature and
                you can customise your scenario as you like to meet your
                objective.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="w-8 mr-8">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.286 7H1.71402C0.767394 7 0 7.76739 0 8.71402V45.286C0 46.2326 0.767392 47 1.71402 47H28.9004C29.355 47 29.791 46.8194 30.1124 46.498L39.498 37.1124C39.8194 36.791 40 36.355 40 35.9004V8.71402C40 7.76739 39.2326 7 38.286 7Z"
                  fill="#E0F1F4"
                ></path>
                <circle cx="35.5" cy="11.5" r="11.5" fill="#115766"></circle>
                <path
                  d="M33.16 15.08C34.78 15.08 35.88 13.8 35.88 11.5C35.88 9.2 34.78 7.92 33.16 7.92C31.54 7.92 30.43 9.2 30.43 11.5C30.43 13.8 31.54 15.08 33.16 15.08ZM33.16 13.73C32.43 13.73 31.94 13.07 31.94 11.5C31.94 9.93 32.43 9.27 33.16 9.27C33.89 9.27 34.38 9.93 34.38 11.5C34.38 13.07 33.89 13.73 33.16 13.73ZM39.7084 12.47C41.0984 11.62 41.5484 10.93 41.5484 10.03C41.5484 8.74 40.6284 7.92 39.2384 7.92C37.7584 7.92 36.7384 8.85 36.7184 10.44H38.2084C38.2584 9.63 38.6584 9.27 39.2384 9.27C39.7584 9.27 40.0684 9.57 40.0684 10.04C40.0684 10.48 39.8184 10.85 38.6884 11.55C37.1184 12.52 36.7284 13.15 36.7284 14.28V15H41.5184V13.65H38.3484C38.5284 13.28 38.9184 12.95 39.7084 12.47Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl">Confirm your target CredenceScore</h4>
              <p class="pt-4">
                Using the credenceScore of people you want to reach and the
                preferences that best represent your audience.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="w-8 mr-8">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.286 7H1.71402C0.767394 7 0 7.76739 0 8.71402V45.286C0 46.2326 0.767392 47 1.71402 47H28.9004C29.355 47 29.791 46.8194 30.1124 46.498L39.498 37.1124C39.8194 36.791 40 36.355 40 35.9004V8.71402C40 7.76739 39.2326 7 38.286 7Z"
                  fill="#E0F1F4"
                ></path>
                <circle cx="35.5" cy="11.5" r="11.5" fill="#115766"></circle>
                <path
                  d="M33.16 15.08C34.78 15.08 35.88 13.8 35.88 11.5C35.88 9.2 34.78 7.92 33.16 7.92C31.54 7.92 30.43 9.2 30.43 11.5C30.43 13.8 31.54 15.08 33.16 15.08ZM33.16 13.73C32.43 13.73 31.94 13.07 31.94 11.5C31.94 9.93 32.43 9.27 33.16 9.27C33.89 9.27 34.38 9.93 34.38 11.5C34.38 13.07 33.89 13.73 33.16 13.73ZM40.6084 11.41C41.2384 11.1 41.5284 10.55 41.5284 9.9C41.5284 8.72 40.5884 7.92 39.2284 7.92C37.7884 7.92 36.7884 8.8 36.7784 10.19H38.2384C38.2784 9.57 38.6184 9.27 39.1784 9.27C39.7284 9.27 40.0484 9.57 40.0484 10.06C40.0484 10.51 39.7684 10.82 39.1384 10.82H38.4684V12.04H39.1584C39.8384 12.04 40.1984 12.35 40.1984 12.85C40.1984 13.36 39.8184 13.73 39.2084 13.73C38.6284 13.73 38.2284 13.39 38.2084 12.78H36.7284C36.7384 14.22 37.7084 15.08 39.1884 15.08C40.6784 15.08 41.6784 14.21 41.6784 13.02C41.6784 12.3 41.3084 11.72 40.6084 11.41Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl">Create your template creative</h4>
              <p class="pt-4">
                Insert all your creatives and you are only limited by your
                imagination.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="w-8 mr-8">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.286 7H1.71402C0.767394 7 0 7.76739 0 8.71402V45.286C0 46.2326 0.767392 47 1.71402 47H28.9004C29.355 47 29.791 46.8194 30.1124 46.498L39.498 37.1124C39.8194 36.791 40 36.355 40 35.9004V8.71402C40 7.76739 39.2326 7 38.286 7Z"
                  fill="#E0F1F4"
                ></path>
                <circle cx="35.5" cy="11.5" r="11.5" fill="#115766"></circle>
                <path
                  d="M33.16 15.08C34.78 15.08 35.88 13.8 35.88 11.5C35.88 9.2 34.78 7.92 33.16 7.92C31.54 7.92 30.43 9.2 30.43 11.5C30.43 13.8 31.54 15.08 33.16 15.08ZM33.16 13.73C32.43 13.73 31.94 13.07 31.94 11.5C31.94 9.93 32.43 9.27 33.16 9.27C33.89 9.27 34.38 9.93 34.38 11.5C34.38 13.07 33.89 13.73 33.16 13.73ZM41.3684 12.5V8H39.5984L36.6684 12.58V13.76H39.9784V15H41.3684V13.76H42.1884V12.5H41.3684ZM39.9784 9.65V12.5H38.1684L39.9784 9.65Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl">Request to publish your template</h4>
              <p class="pt-4">
                When you submit your request, it goes into a queue to ensure the
                right people get to see you in the marketplace. You also have an
                option not to publish the template on the marketplace and
                privately publish it offline or online for users to access your
                service.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="w-8 mr-8">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.286 7H1.71402C0.767394 7 0 7.76739 0 8.71402V45.286C0 46.2326 0.767392 47 1.71402 47H28.9004C29.355 47 29.791 46.8194 30.1124 46.498L39.498 37.1124C39.8194 36.791 40 36.355 40 35.9004V8.71402C40 7.76739 39.2326 7 38.286 7Z"
                  fill="#E0F1F4"
                ></path>
                <circle cx="35.5" cy="11.5" r="11.5" fill="#115766"></circle>
                <path
                  d="M33.16 15.08C34.78 15.08 35.88 13.8 35.88 11.5C35.88 9.2 34.78 7.92 33.16 7.92C31.54 7.92 30.43 9.2 30.43 11.5C30.43 13.8 31.54 15.08 33.16 15.08ZM33.16 13.73C32.43 13.73 31.94 13.07 31.94 11.5C31.94 9.93 32.43 9.27 33.16 9.27C33.89 9.27 34.38 9.93 34.38 11.5C34.38 13.07 33.89 13.73 33.16 13.73ZM39.5484 10.38C39.1184 10.38 38.7284 10.48 38.3984 10.68L38.5684 9.35H41.2784V8H37.3084L36.8384 12.06H38.2484C38.4684 11.73 38.8484 11.55 39.2584 11.55C39.8684 11.55 40.2684 11.96 40.2684 12.62C40.2684 13.29 39.8584 13.73 39.2184 13.73C38.6684 13.73 38.2684 13.4 38.2184 12.86H36.7384C36.7784 14.24 37.7884 15.08 39.1884 15.08C40.7184 15.08 41.7484 14.11 41.7484 12.67C41.7484 11.26 40.7984 10.38 39.5484 10.38Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl">Generate QR Code</h4>
              <p class="pt-4">
                Upon creating a template, you can generate a QR code for your
                template so that users in and outside the marketplace can be
                redirected to the marketplace, where they can access your
                services by scanning the QR code.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="w-8 mr-8">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.286 7H1.71402C0.767394 7 0 7.76739 0 8.71402V45.286C0 46.2326 0.767392 47 1.71402 47H28.9004C29.355 47 29.791 46.8194 30.1124 46.498L39.498 37.1124C39.8194 36.791 40 36.355 40 35.9004V8.71402C40 7.76739 39.2326 7 38.286 7Z"
                  fill="#E0F1F4"
                ></path>
                <circle cx="35.5" cy="11.5" r="11.5" fill="#115766"></circle>
                <path
                  d="M33.16 15.08C34.78 15.08 35.88 13.8 35.88 11.5C35.88 9.2 34.78 7.92 33.16 7.92C31.54 7.92 30.43 9.2 30.43 11.5C30.43 13.8 31.54 15.08 33.16 15.08ZM33.16 13.73C32.43 13.73 31.94 13.07 31.94 11.5C31.94 9.93 32.43 9.27 33.16 9.27C33.89 9.27 34.38 9.93 34.38 11.5C34.38 13.07 33.89 13.73 33.16 13.73ZM39.5384 10.09H39.4284L40.8484 8H39.0984L37.5184 10.36C36.8884 11.29 36.6784 11.89 36.6784 12.52C36.6784 14 37.8484 15.08 39.2984 15.08C40.7784 15.08 41.9384 13.97 41.9384 12.51C41.9384 11.09 40.8684 10.09 39.5384 10.09ZM39.3084 13.73C38.6584 13.73 38.1584 13.23 38.1584 12.53C38.1584 11.83 38.6584 11.33 39.3084 11.33C39.9584 11.33 40.4584 11.83 40.4584 12.53C40.4584 13.23 39.9584 13.73 39.3084 13.73Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl">Generate a link</h4>
              <p class="pt-4">
                Upon creating a template, you can generate a link for the
                template so that users in and outside the marketplace can be
                redirected to the marketplace, where they can access your
                services.
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>

    <section class="sm:my-36 my-10">
      <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <h3 class="text-center">Pricing</h3>
        <div class="grid sm:grid-cols-3 grid-cols-1 sm:gap-24 gap-10 my-20">
          <div>
            <header class="pl-10">
              <h4>Option 1</h4>
              <p class="my-2">$X/month</p>
              <hr class="border-grey" />
            </header>
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
                <p class="-mt-1">Up to 10 Transactions</p>
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
                <p class="-mt-1">1 Template for Offline and Online Signups</p>
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
                <p class="-mt-1">
                  Transaction above 10 is $1.0 per Transaction
                </p>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex mb-10">
                <div class="w-6 flex-shrink-0 mr-6"></div>
                <p class="-mt-1">
                  <span
                    class="cursor-pointer inline-block"
                    role="button"
                    tabindex="0"
                    >
					<AppButton buttonText="Get a Free demo"  buttoncolor="textbluebutton" href="/contact-us">
					  <svg slot="prepend"
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
                      ></path></svg>
				 </AppButton>
					<!-- <a href="/contact-us"
                      ><button
                        class="bg-transparent text-blue rounded py-2 sm:mb-0 mb-4 px-0"
                      >
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
                        >Get a Free Demo
                      </button></a
                    > -->
					</span
                  >
                </p>
              </div>
            </div>
          </div>
          <div>
            <header class="pl-10">
              <h4>Option 2</h4>
              <p class="my-2">$Y/month</p>
              <hr class="border-grey" />
            </header>
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
                <p class="-mt-1">Up to 500 Transactions</p>
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
                <p class="-mt-1">
                  5 Templates Marketplace publishing, Offline and Online Signups
                </p>
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
                <p class="-mt-1">
                  Transaction above 500 is $0.0 per Transaction
                </p>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex mb-10">
                <div class="w-6 flex-shrink-0 mr-6"></div>
                <p class="-mt-1">
                  <span
                    class="cursor-pointer inline-block"
                    role="button"
                    tabindex="0"
                    ><AppButton buttonText="Get a Free demo"  buttoncolor="textbluebutton" href="/contact-us">
					  <svg slot="prepend"
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
                      ></path></svg>
				 </AppButton></span
                  >
                </p>
              </div>
            </div>
          </div>
          <div>
            <header class="pl-10">
              <h4>Option 3</h4>
              <p class="my-2">$Y/month</p>
              <hr class="border-grey" />
            </header>
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
                <p class="-mt-1">Up to 2000 Transactions</p>
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
                <p class="-mt-1">
                  10 Templates Marketplace publishing, Offline and Online
                  Signups
                </p>
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
                <p class="-mt-1">
                  Transaction above 2000 is $0.0 per Transaction
                </p>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex mb-10">
                <div class="w-6 flex-shrink-0 mr-6"></div>
                <p class="-mt-1">
                  <span
                    class="cursor-pointer inline-block"
                    role="button"
                    tabindex="0"
                    ><AppButton buttonText="Get a Free demo"  buttoncolor="textbluebutton" href="/contact-us">
					  <svg slot="prepend"
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
                      ></path></svg>
				 </AppButton></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <h4>Option 4</h4>
          <p class="my-4">More than 2000 Transactions</p>
          <span class="cursor-pointer inline-block" role="button" tabindex="0"
            ><AppButton  buttonText="Contact sales" buttoncolor="bluebutton" to="/contact-us" />
			</span
          >
        </div>
      </section>
    </section>
    <section
      id="how-it-works"
      class="text-center max-w-screen-lg text-container sm:py-20 py-10 mx-auto sm:px-8 px-6"
    >
      <section class="text-center">
        <h3 class="mb-12">
          Create market templates and publish it to YOUID users and track the
          performance of your template in easy-to-read reports.
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
import AppButton from "../../components/global/AppButton.vue";
export default {
  head: {
    title: "YOUID for Business",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "YOUID for business is the number one digital identity verification software for Know Your Customer (KYC), Anti Money Laundering (AML), and Counter-Terrorism Funding (CTF) requirements.",
      },
    ],
  },
  components: {
    getStarted,
    AppButton
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
  fill: #eff8f9;
}
</style>
