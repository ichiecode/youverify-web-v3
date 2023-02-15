<template>
  <div class="pt-20">
    <section class="mt-28 py-20 px-4 md:px-8 max-w-screen-xl mx-auto">
      <div class="text-center">
        <h2 class="font-bold text-2xl md:text-4xl">How it works</h2>
        <p class="font-medium text-xl mt-4 md:mt-7">
          The Youverify startup program has four stages, each stage is explained
          below:
        </p>
      </div>
      <!-- <Stages /> -->

      <div class="mt-16 max-w-screen-xl mx-auto">
        <div class="flex flex-col-reverse md:flex-row">
          <div class="w-full">
            <h3 class="text-3xl font-semibold">#1</h3>
            <div class="mt-6 md:px-6">
              <h4 class="font-semibold text-black text-2xl">Application</h4>
              <p class="text-black text-xl mt-6">
                Applications into the YV startup program are open to all
                potentially high-growth startups across Africa, with presence in
                YV's countries of operation (Nigeria, Ghana, and Kenya, more
                locations coming up soon).
                <br />
                Application is open and accessible all year long.
              </p>
            </div>
          </div>
          <div class="w-full">
            <img src="/img/application.svg" alt="" />
          </div>
        </div>

        <div class="flex flex-col-reverse md:flex-row-reverse">
          <div class="w-full">
            <h3 class="text-3xl font-semibold">#2</h3>
            <div class="mt-6 md:px-6">
              <h4 class="font-semibold text-black text-2xl">Selection</h4>
              <p class="text-black text-xl mt-6">
                To get selected into the YV startup program, your startup must
                meet the following criteria:
              </p>
              <ul
                class="list-disc text-black font-medium text-justify text-lg md:text-xl mt-1 pl-5"
              >
                <li>Must have built, registered and launched a company, OR</li>
                <li>Must have completed MVP and ready for full launch.</li>
                <li>
                  Startups must be domiciled in at least ONE of YV's country of
                  operation
                </li>
                <li>Startups must be between 6 months - 5 years old.</li>
                <li>
                  Only startups with an absolute need for KYC services will be
                  considered.
                </li>
                <li>
                  Must agree to the terms, conditions and policy of the program.
                </li>
                <li>
                  Acceptance into the program is done on a rolling basis (while
                  the application is open all year, different cohorts of
                  startups will be admitted only once a month).
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full">
            <img src="/img/selection.svg" alt="" />
          </div>
        </div>

        <div class="flex flex-col-reverse md:flex-row">
          <div class="w-full">
            <h3 class="text-3xl font-semibold">#3</h3>
            <div class="mt-6 md:px-6">
              <h4 class="font-semibold text-black text-2xl">Acceptance</h4>
              <ul class="list-disc text-black text-lg md:text-xl mt-6 pl-5">
                <li>
                  Upon selection into the YV startup program, an email
                  containing your offer and next steps will be sent to all
                  eligible startups.
                </li>
                <li>
                  All qualified startups must accept the offer alongside the
                  terms and conditions.
                </li>
                <li>
                  YVOS credits will be made available to selected startups and
                  will continue to be valid only for a period of six months.
                </li>
                <li>
                  Startups must join the official community channel, where
                  information and support services will be carried out.
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full">
            <img src="/img/acceptance.svg" alt="" />
          </div>
        </div>

        <div class="flex flex-col-reverse md:flex-row-reverse">
          <div class="w-full">
            <h3 class="text-3xl font-semibold">#4</h3>
            <div class="mt-6 md:px-6">
              <h4 class="font-semibold text-black text-2xl">Community</h4>
              <p class="text-black text-xl mt-6">
                The YV startup community will signal our flagship community for
                startup founders, business executives and tech enthusiasts. All
                selected YV startup school participants will be added to the
                official telegram channel. This is where conversations,
                mentorship and support activities for selected startups will be
                carried out.
              </p>
            </div>
          </div>
          <div class="w-full">
            <img src="/img/community.svg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-blue">
      <div
        class="px-4 md:px-8 max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-10 xl:gap-20"
      >
        <div class="w-full text-lg lg:text-xl">
          <h2 class="font-semibold text-white text-3xl xl:text-5xl">
            Spotlighting
          </h2>

          <p class="text-white my-10">
            Exceptional startups will get the unique opportunity to be invited
            and featured on our different channels, which may include but are
            not limited to: The Shield Podcast, office visits, and founders
            mixers to mention a few.
            <span class="block mt-8 font-semibold"> Like what you see?</span>
          </p>
          <a
            class="inline"
            href="https://forms.gle/QKtyRF26Jcrzgbny6"
            target="_blank"
          >
            <app-button text="Apply now" theme="white" />
          </a>
        </div>
        <div class="w-full h-72 md:h-auto">
          <img class="h-full mx-auto" src="/img/experts.svg" alt="" />
        </div>
      </div>
    </section>

    <Faq :faqs="faqs" />
  </div>
</template>

<script>
import Faq from "~/components/products/faqs";
export default {
  components: { Faq },
  data() {
    return {
      faqs: [
        {
          question: "Is the program free?",
          answer:
            "Yes, the Youverify startup program is free for all startups. No application fee is required.",
        },
        {
          question: "What are the benefits of the program?",
          answer:
            "Eligible startups will get access to all Youverify Identity verification and AML solutions except where access is restricted by licensing or regulatory requirements.",
        },
        {
          question:
            "How do I get access to my usage credit upon my selection to the program?",
          answer:
            "Upon selection to the Youverify For Startup Program, you will be required to create an account on Youverify OS, fill out the KYC form and sign the SLA, your account is activated, easy as that!",
        },
        {
          question:
            "Is there an expiration duration to my Youverify usage credits?",
          answer:
            "Yes, the Youverify usage credits expire 6 months after being issued.",
        },
        {
          question:
            "Can I transfer my Youverify credits to a different account?",
          answer: "No, the Youverify usage credits are not transferable.",
        },
      ],
    };
  },
};
</script>
