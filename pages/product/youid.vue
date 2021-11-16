<template>
  <div>
    <header
      class="
        bg-blue-300
        relative
        flex
        items-center
        justify-start
        pt-20
        pb-32
        md:pt-48 md:pb-20
      "
    >
      <section class="w-full max-w-screen-xl mx-auto sm:px-8 px-6">
        <div class="flex-col-reverse md:flex-row flex justify-center">
          <div class="md:w-3/6">
            <h2 class="text-white max-w-screen-lg mt-8">
              Fill a KYC form once and forever.
            </h2>
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
                    ><img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAA0CAYAAAB/91HOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABIdSURBVHgB7Z0JtFXTH8d3ryRRpKIQolBpDotERYZm4pFeKGOGBouVqWVlZUil8GRYadBcZFilUimKkoeKjGkQKRVJM9r/3+f3b5913rn3vvfuvecmnO9a+917hn3OPmf/9m//ft/fb99XzAQwZsyYsvLRuFixYjnW2jp79+6t9Ndff5WV7yVNhAgJULx48e1ZWVlbpKyVMkvkZmSnTp1WBs8r5t8YP358EzlxyMaNG+vl5eVlffnll+bXX381u3fvNiJwJkKERChZsqQ5+OCDTeXKlU2DBg1MrVq1tpYuXXq0CGK/7Ozs9e48T+AmTJjQbufOnePeeuut0jNmzDC///67iRAhFcjsaE488UTTpUsXW61atUWisFrK9y0cK86fyZMnN92xY8eU3Nzc0rNnzzZ79uwxESKkgy1btpj333+/2LHHHltFULdOnToT582btzdr0qRJJf/8889BU6dOLf3xxx+bCBHCAorrpZdeMuvXr29x6qmndmFflqi75hs2bKg3ffp0EyFC2Ni6dat58803S8jX7m+88UaZEoLOH330UZZMqSZChExgyZIlCF5NcTyrZsmfenijESJkCiizn3/+OUuciQZZf/zxR0UMvAgRMgWRMbN582aotWpZQuqWi7zSCJnGb7/9hsCVz5LvJYTsNRGKhkMOOcQcffTRJkxwvVKlSpn9gcMOO2y/3csPYUL4KJVl9iOEeTZNmjQxjz32mKlevbpJBxI2MSNGjNAyduxY07NnT1O1alWTaQiRaT799FMTJqZMmWLq169vMoFjjjnGHH/88d72gw8+aO69917zd2G/Cdzpp59uJIph5s6da2688UYj8TaTDlq0aKFCu3r1avPDDz+YHj16GHG7TdmyZU0mIaEaU65cORMmaHO67yMRevXqZe644w5v+9BDD9UQ1N+F/SJwNWvWNPPnzzfnn3++dpjEas2qVatMuuCaffv2Nb179zY1atQw27dvNw899JAe46X26dPHLF261EBo33zzzXrvdu3aKRkJjjvuOAP/yGAAjHw6R9hx1TpsU/+zzz4zF198cdw2NG7cWAfR559/bkaNGqUa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"
                      alt="Download on Apple Store" /></a
                  ><a
                    href="https://play.google.com/store/apps/details?id=com.youid"
                    target="_blank"
                    rel="noreferrer"
                    ><img
                      src="data:image/png;base64,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"
                      alt="Download on Google Play"
                  /></a>
                </div>
              </div>
            </div>

            <div class="mt-10 flex items-center">
              <h4 class="text-white">Building with Youverify OS</h4>
              <div class="ml-3 border w-3/6"></div>
            </div>
            <div class="mt-3 grid grid-cols-3">
              <figure class="relative" style="width: 100px; height: 62px">
                <img
                  src="~/assets/images/logos/trusted/cazoo_white.svg"
                  alt="Carbon logo"
                  class="h-full w-full object-contain"
                />
              </figure>
              <figure class="relative" style="width: 100px; height: 62px">
                <img
                  src="~/assets/images/logos/trusted/leovegas_white.svg"
                  alt="Carbon logo"
                  class="h-full w-full object-contain"
                />
              </figure>
              <figure class="relative" style="width: 100px; height: 62px">
                <img
                  src="~/assets/images/logos/trusted/casumo_white.svg"
                  alt="Carbon logo"
                  class="h-full w-full object-contain"
                />
              </figure>
            </div>
          </div>
          <div class="md:w-3/6">
            <video
              playsinline=""
              autoplay=""
              loop=""
              controlslist="nodownload"
              class="h-full"
            >
              <source
                src="~/assets/images/illustrations/api-box-1-loop-2x.webm"
                type="video/webm"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>
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
        class="
          flex
          sm:flex-row
          flex-col-reverse
          justify-evenly
          items-center
          py-20
        "
      >
        <div class="sm:w-6/12 sm:pt-0 pt-8">
          <span
            class="
              text-blue
              tracking-widest
              px-4
              py-2
              uppercase
              sm:text-sm
              text-xs
              rounded
              mb-3
              leading-none
              inline-block
              bg-blue-100
            "
            >INSTANT VERIFICATION PAYMENTS</span
          >
          <h2>More opportunities with <br /> CredenceScore</h2>
          <p class="sm:my-8 my-4 sm:w-10/12">
            YOUID’s proprietary machine-learning algorithm computes your CredenceScore based on the level of confidence it has in your data without exposing or accessing your personal data. The beauty of CredenceScore is that the higher the score, the richer, wider and better offers you get from our marketplace
          </p>
          <div class="mt-3 sm:mt-8 lg:mt-10 flex flex-wrap" data-v-6addea9c="">
            <a
              href="#how-it-works"
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
              data-v-6addea9c=""
              >Video Demo<svg
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
              data-v-6addea9c=""
              >Contact Sales<svg
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
            ></a>
          </div>
        </div>
        <div class="sm:w-5/12">
          <div class="sm:w-auto w-full mx-auto">
            <img
              width="504"
              height="545"
              src="~/assets/images/illustrations/payments_api_account_funding-2x.webp"
              alt="Mand holding a paper plane"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-blue-100 max-w-screen-xl mx-auto sm:px-8 px-6">
      <div
        class="
          flex
          sm:flex-row
          flex-col-reverse
          justify-evenly
          items-center
          py-20
        "
      >
        <div class="sm:w-6/12 sm:pt-0 pt-8">
          <div class="sm:w-auto w-full mx-auto">
            <img
              width="504"
              height="545"
              src="~/assets/images/illustrations/payouts_api_auto_payouts-2x.webp"
              alt="Mand holding a paper plane"
            />
          </div>
        </div>
        <div class="sm:w-5/12">
          <span
            class="
              text-white
              tracking-widest
              px-4
              py-2
              uppercase
              sm:text-sm
              text-xs
              rounded
              mb-3
              leading-none
              inline-block
              bg-blue
            "
            >INSTANT VERIFICATION PAYMENTS</span
          >
          <h2>Be sure with YOUID Secure</h2>
          <p class="sm:my-8 my-4 sm:w-10/12">
            Get notified when your password has been breached or your credentials are leaked by a third-party data breach. YOUID Secure continuously updates and collates reported data breaches and leakages globally. To check if any of your credentials have been breached, enable YOUID Secure for free on YOUID app
          </p>
          <div class="mt-3 sm:mt-8 lg:mt-10 flex flex-wrap" data-v-6addea9c="">
            <a
              href="#how-it-works"
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
              data-v-6addea9c=""
              >See how it works<svg
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
              class="
                items-center
                justify-center
                font-medium
                disabled:curs
                inline-flex
                bg-gray-100
                text-black
                py-3.5
                sm:py-3.75
                px-3.75
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
              data-v-6addea9c=""
              >Get in touch<svg
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
            ></a>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
      <div
        class="
          flex
          sm:flex-row
          flex-col-reverse
          justify-evenly
          items-center
          py-20
        "
      >
        <div class="sm:w-6/12 sm:pt-0 pt-8">
          <span
            class="
              text-blue
              tracking-widest
              px-4
              py-2
              uppercase
              sm:text-sm
              text-xs
              rounded
              mb-3
              leading-none
              inline-block
              bg-blue-100
            "
            >INSTANT VERIFICATION PAYMENTS</span
          >
          <h2>Never get stranded with YOU ID Key</h2>
          <p class="sm:my-8 my-4 sm:w-10/12">
            All passwords can be forgotten, compromised or stolen. YOUID Key allows you to protect your passwords with a passwordless feature or a multi-factor authentication. The YOUID Key supports industry standards for time-based one-time passcodes (TOTP or OTP).


          </p>
          <div class="mt-3 sm:mt-8 lg:mt-10 flex flex-wrap" data-v-6addea9c="">
            <a
              href="#how-it-works"
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
              data-v-6addea9c=""
              >Video Demo<svg
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
              data-v-6addea9c=""
              >Contact Sales<svg
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
            ></a>
          </div>
        </div>
        <div class="sm:w-5/12">
          <div class="sm:w-auto w-full mx-auto">
            <img
              width="504"
              height="545"
              src="~/assets/images/illustrations/en_account_verification.webp"
              alt="Mand holding a paper plane"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-blue-100 max-w-screen-xl mx-auto sm:px-8 px-6">
      <div
        class="
          flex
          sm:flex-row
          flex-col-reverse
          justify-evenly
          items-center
          py-20
        "
      >
        <div class="sm:w-6/12 sm:pt-0 pt-8">
          <div class="sm:w-auto w-full mx-auto">
            <img
              width="504"
              height="545"
              src="~/assets/images/illustrations/payouts_api_auto_payouts-2x.webp"
              alt="Mand holding a paper plane"
            />
          </div>
        </div>
        <div class="sm:w-5/12">
          <span
            class="
              text-white
              tracking-widest
              px-4
              py-2
              uppercase
              sm:text-sm
              text-xs
              rounded
              mb-3
              leading-none
              inline-block
              bg-blue
            "
            >INSTANT VERIFICATION PAYMENTS</span
          >
          <h2>Increase Trustworthiness with AddressTrack</h2>
          <p class="sm:my-8 my-4 sm:w-10/12">
            Address verification in Africa can be laborious, repetitive, expensive anad mundane for consumers and businesses. YOUID AddressTrack solves the problem of address verification by enabling consumers and YOUID users to verify their address(es) and securely store it on their digital ID - YOUID.
          </p>
          <div class="mt-3 sm:mt-8 lg:mt-10 flex flex-wrap" data-v-6addea9c="">
            <a
              href="#how-it-works"
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
              data-v-6addea9c=""
              >See how it works<svg
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
              class="
                items-center
                justify-center
                font-medium
                disabled:curs
                inline-flex
                bg-gray-100
                text-black
                py-3.5
                sm:py-3.75
                px-3.75
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
              data-v-6addea9c=""
              >Get in touch<svg
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
            ></a>
          </div>
        </div>
      </div>
    </section>

    <section
      id="how-it-works"
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
      <section class="text-center">
        <h3>See how youid works</h3>
        <p class="mb-12">
          Protect your personal identity with a secure digital ID
        </p>
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
                src="~/assets/images/icons/for-a-reason-and-more/zero-bottlenecks.svg"
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
                src="~/assets/images/icons/for-a-reason-and-more/ease-of-enrollment.svg"
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
                src="~/assets/images/icons/for-a-reason-and-more/reliable-datatabase.svg"
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
                src="~/assets/images/icons/for-a-reason-and-more/standards-compliant.svg"
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
