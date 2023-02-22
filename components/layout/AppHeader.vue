<template>
  <header>
    <nav class="hidden lg:block py-5 bg-white">
      <section class="max-w-screen-xl mx-auto px-4 md:px-8">
        <div class="flex justify-between items-center text-blue-300">
          <div>
            <a aria-current="page" class="" href="/"
              ><img
                src="~/assets/images/logos/youverify.svg"
                alt="Youverify"
                class="w-32"
            /></a>
          </div>
          <ul class="flex gap-12">
            <li
              @mouseenter="validateSubmenu(ind)"
              v-for="(nav, ind) in navs"
              :key="ind"
              class="group relative"
            >
              <span
                class="font-medium text-base cursor-pointer hover:text-blue duration-200 py-4"
              >
                {{ nav.name }}
              </span>

              <div
                class="rounded-2xl absolute -left-40 top-11 overflow-hidden hidden group-hover:flex"
                style="box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1)"
              >
                <div class="absolute -top-3 left-32">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon
                      fill="#fff"
                      stroke="#000"
                      stroke-width="2"
                      points="22 4 12 16 2 4"
                      transform="matrix(1 0 0 -1 0 20)"
                    />
                  </svg>
                </div>
                <div class="bg-white pt-9 pb-8 pl-10" style="min-width: 335px">
                  <ul class="space-y-1 mb-16">
                    <li
                      @mouseover="showSubMenu(ind, index)"
                      v-for="(list, index) in nav.lists"
                      :key="index"
                      class="opacity-50 hover:opacity-100 duration-150 ease-in-out"
                    >
                      <a
                        :href="list.subLists ? '#' : list.link"
                        class="font-medium cursor-pointer capitalize"
                      >
                        {{ list.name }}</a
                      >
                    </li>
                  </ul>
                  <AppButton
                    text="Get Started"
                    theme="primary"
                    href="https://os.youverify.co/auth/create-account"
                  />
                </div>
                <div
                  v-if="subMenu"
                  class="bg-blue-100 pt-9 px-10 w-auto"
                  style="min-width: 354px"
                >
                  <ul>
                    <li
                      v-for="(list, i) in nav.lists[subIndex].subLists"
                      :key="i"
                      class="hover:opacity-100 opacity-50"
                    >
                      <a
                        :href="list.link"
                        class="cursor-pointer font-medium capitalize"
                      >
                        {{ list.name }}</a
                      >
                    </li>
                  </ul>
                  <div v-if="nav.lists[subIndex].button" class="my-8">
                    <AppButton
                      text="See pricing"
                      theme="transparent"
                      size="none"
                      :to="nav.lists[subIndex].button"
                      ><svg
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
                        ></path></svg
                    ></AppButton>
                  </div>
                </div>
                <div
                  v-if="subMenu && nav.lists[subIndex].subLists2"
                  class="bg-blue-100 pt-9 px-5 w-auto"
                  style="min-width: 335px"
                >
                  <ul>
                    <li
                      v-for="(list, i) in nav.lists[subIndex].subLists2"
                      :key="i"
                      class="hover:opacity-100 opacity-50"
                    >
                      <a
                        :href="list.link"
                        class="cursor-pointer font-medium capitalize"
                      >
                        {{ list.name }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <div>
            <AppButton
              text="Login"
              theme="transparent"
              rounded="md"
              href="https://os.youverify.co/auth/login"
            />
            <AppButton
              text="Sign up"
              theme="primary"
              href="https://os.youverify.co/auth/create-account"
            />
          </div>
        </div>
      </section>
    </nav>
    <nav class="lg:hidden bg-white text-blue">
      <section class="flex justify-between items-center px-8 py-6">
        <div>
          <a aria-current="page" class="" href="/"
            ><img
              src="~/assets/images/logos/youverify.svg"
              alt="Youverify"
              class="w-24"
          /></a>
        </div>
        <div>
          <button @click="toggleMobileMenu">
            <svg
              v-if="!showMobileMenu"
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.25 8H2"
                stroke="#46B2C8"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M22.25 2H2"
                stroke="#46B2C8"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M22.25 14H2"
                stroke="#46B2C8"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              v-else
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3189 1.68109L2 16"
                stroke="#46B2C8"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16.3189 16.3189L2 2"
                stroke="#46B2C8"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </section>
      <div
        :class="{ hidden: !showMobileMenu }"
        class="h-screen overflow-scroll pb-36"
      >
        <ul>
          <div
            v-for="(nav, ind) in navs"
            :key="ind"
            class="p-6"
            style="border-bottom: 1px solid #c2e2e9"
          >
            <li
              @click="toggleNavList(nav.name)"
              class="flex justify-between items-center"
            >
              <a href="#" class="font-medium text-xl text-blue-900">
                {{ nav.name }}
              </a>
              <svg
                class="transform duration-200 ease-in-out"
                :class="currentMenu === nav.name ? ' rotate-180' : 'rotate-0'"
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z"
                  fill="#115766"
                />
              </svg>
            </li>
            <div
              v-if="currentMenu === nav.name"
              class="bg-blue-100 p-8 rounded-3xl mt-5"
            >
              <ul class="space-y-4">
                <li
                  @click="showSubMenu(ind, index)"
                  v-for="(list, index) in nav.lists"
                  :key="index"
                >
                  <a
                    :href="list.subLists ? '#' : list.link"
                    class="font-medium text-lg text-blue-300 flex items-center"
                  >
                    {{ list.name }}
                    <svg
                      v-if="list.subLists"
                      width="7"
                      viewBox="0 0 9 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-3 transform rotate rotate-180"
                    >
                      <path
                        d="M5.23715 0.804168C4.84082 0.371801 4.15918 0.371801 3.76285 0.804168L0.536082 4.32427C-0.0518692 4.96568 0.40313 6 1.27324 6L7.72676 6C8.59687 6 9.05187 4.96568 8.46392 4.32427L5.23715 0.804168Z"
                        fill="#115766"
                      ></path>
                    </svg>
                  </a>
                  <div v-if="subMenu && subIndex === index" class="pl-3">
                    <ul>
                      <li
                        v-for="(list, i) in nav.lists[subIndex].subLists"
                        :key="i"
                        class="py-1.5"
                      >
                        <a
                          :href="list.link"
                          class="font-medium text-blue-300 opacity-50"
                          >{{ list.name }}</a
                        >
                      </li>
                      <li
                        v-for="(list, i) in nav.lists[subIndex].subLists2"
                        :key="i"
                        class="py-1.5"
                      >
                        <a
                          :href="list.link"
                          class="font-medium text-blue-300 opacity-50"
                          >{{ list.name }}</a
                        >
                      </li>
                    </ul>

                    <div v-if="nav.lists[subIndex].button">
                      <AppButton
                        text="See pricing"
                        theme="transparent"
                        size="none"
                        :to="nav.lists[subIndex].button"
                        ><svg
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
                          ></path></svg
                      ></AppButton>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-12 px-6">
            <AppButton
              text="Sign Up"
              href="https://os.youverify.co/auth/create-account"
            />
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          name: "Products",
          lists: [
            {
              name: "Know Your Customer (KYC)",
              button: "/product/kyc/pricing",
              subLists: [
                {
                  name: "ID Document verification",
                  link: "/product/kyc/id-document-verification",
                },
                {
                  name: "ID Data Verification",
                  link: "/product/kyc/id-data-verification",
                },
                {
                  name: "Adverse Media",
                  link: "/product/kyc/adverse-media-screening",
                },
                {
                  name: "Address Verification",
                  link: "/product/kyc/address-verification",
                },
                {
                  name: "Biometrics verification",
                  link: "/product/kyc/biometrics-verification",
                },
                {
                  name: "Liveness Detection",
                  link: "/product/kyc/liveness-detection",
                },
                {
                  name: "Bank Account Verification",
                  link: "/product/kyc/bank-account-verification",
                },
              ],
              subLists2: [
                {
                  name: "Phone Intelligence & Verification",
                  link: "/product/kyc/phone-intelligence-and-verification",
                },
                {
                  name: "Criminal Check",
                  link: "/product/kyc/criminal-check",
                },
                {
                  name: "Fraud Check",
                  link: "/product/kyc/fraud-check",
                },
                {
                  name: "PEP & Sanction Screening",
                  link: "/product/kyc/pep-and-sanction-screening",
                },
                {
                  name: "Consumer Credit Report",
                  link: "/product/kyc/customer-credit-check",
                },
              ],
            },
            {
              name: "Know Your Business (KYB)",
              button: "/product/kyc/pricing",
              subLists: [
                {
                  name: "Business Verification",
                  link: "/product/kyb/business-verification",
                },
                {
                  name: "Address verification",
                  link: "/product/kyb/business-address-verification",
                },
                {
                  name: "Identity verification",
                  link: "/product/kyb/business-identity-verification",
                },
                { name: "Sanction List", link: "/product/kyb/sanction-list" },
              ],
            },
            {
              name: "Know Your Employee (KYE)",
              button: "/product/kyc/pricing",
              subLists: [
                {
                  name: "Address verification",
                  link: "/product/kye/address-verification",
                },
                {
                  name: "Professional Certificate verification",
                  link: "/product/kye/professional-certificate-verification",
                },
                {
                  name: "Education verification",
                  link: "/product/kye/education-verification",
                },
                {
                  name: "Employment Record Check",
                  link: "/product/kye/employment-record-check",
                },
                {
                  name: "Reference Check",
                  link: "/product/kye/reference-check",
                },
                {
                  name: "Credit Check",
                  link: "/product/kye/employee-credit-check",
                },
              ],
            },
            {
              name: "Know Your Transaction (KYT)",
              button: "/product/kyc/pricing",
              subLists: [
                {
                  name: "Transaction monitoring",
                  link: "/product/kyt/transaction-monitoring-solution",
                },
                {
                  name: "Transaction screening",
                  link: "/product/kyt/transaction-screening-solution",
                },
                { name: "Crypto Monitoring", link: "#" },
              ],
            },
            {
              name: "Workflow Automation Tools",
              subLists: [{ name: "Workflow Builder (vForms)", link: "#" }],
            },
          ],
        },
        {
          name: "Solutions",
          lists: [
            {
              name: "Customer Verification",
              link: "/solutions/customer-verification",
            },
            {
              name: "Business Verification",
              link: "/solutions/business-verification",
            },
            {
              name: "Compliance Management",
              link: "/solutions/compliance-management",
            },
            { name: "Risk Management", link: "/solutions/risk-management" },
            {
              name: "Use Cases",
              subLists: [
                { name: "Banks", link: "#" },
                { name: "Fintech", link: "#" },
                { name: "Crypto", link: "#" },
                { name: "Gig Economy", link: "#" },
                { name: "Trading", link: "#" },
                { name: "Marketplaces", link: "#" },
                { name: "Gaming and Casino", link: "#" },
                // { name: "SME", link: "#" },
                { name: "NBFI", link: "#" },
              ],
            },
          ],
        },
        {
          name: "Resources",
          lists: [
            { name: "Blogs", link: "/blogs" },
            { name: "Industry Report", link: "/industry/reports" },
            {
              name: "Compliance Guides & Reports",
              link: "/resources/compliance-guides-and-reports",
            },
            { name: "FAQs", link: "/resources/faqs" },
            { name: "Case Studies", link: "/resources/case-studies" },
            { name: "Developer portal", link: "/resources/developer" },
          ],
        },
        {
          name: "Company",
          lists: [
            { name: "About us", link: "/company/about-us" },
            {
              name: "Compliance Certifications",
              link: "/company/compliance-certifications",
            },
            { name: "Press & Media", link: "/company/press-room" },
            { name: "Partners", link: "/company/partners" },
            { name: "Careers", link: "/company/careers" },
            { name: "Contact Us", link: "/company/contact-us" },
            {
              name: "Startup Accelerator",
              link: "https://startup.youverify.co/",
            },
          ],
        },
      ],
      subIndex: 0,
      subMenu: true,
      showMobileMenu: false,
      currentMenu: null,
    };
  },
  methods: {
    showSubMenu(ind, index) {
      this.subIndex = index;
      this.navs[ind].lists[index].subLists
        ? (this.subMenu = true)
        : (this.subMenu = false);
    },
    validateSubmenu(ind) {
      if (!this.navs[ind].lists[0].subLists) {
        this.subMenu = false;
      } else {
        this.subMenu = true;
      }
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    toggleNavList(nav) {
      if (this.currentMenu === nav) {
        this.currentMenu = null;
      } else {
        this.currentMenu = nav;
        this.subMenu = false;
      }
    },
  },
};
</script>
