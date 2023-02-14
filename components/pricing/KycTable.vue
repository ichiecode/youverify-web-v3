<template>
  <section class="px-8 max-w-screen-xl mx-auto py-28">
    <h2 class="text-center font-bold text-5xl mb-20">All Features</h2>

    <div class="">
      <div class="sticky top-32 bg-white">
        <div class="flex gap-2.5">
          <div class="price_first_column"></div>

          <div class="price_category border-blue">Basic</div>
          <div class="price_category border-blue-900">Standard</div>
          <div class="price_category border-blue">Pro</div>
          <div class="price_category border-blue">Enterprise</div>
        </div>
      </div>

      <div>
        <div class="flex">
          <div class="feature_category">Core Modules</div>
          <div class="feature_category_empty"></div>
          <div class="feature_category_empty"></div>
          <div class="feature_category_empty"></div>
          <div class="feature_category_empty border-r border-blue"></div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">KYC Module</div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status_standard">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">KYB</div>
          <div class="feature_status">
            <Cancel />
          </div>
          <div class="feature_status_standard">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">KYE</div>
          <div class="feature_status">
            <Cancel />
          </div>
          <div class="feature_status_standard">
            <Cancel />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex">
          <div class="feature_category">Support</div>
          <div class="feature_category_empty"></div>
          <div class="feature_category_empty"></div>
          <div class="feature_category_empty"></div>
          <div class="feature_category_empty border-r border-blue"></div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Email / Chat Support</div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status_standard">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Response Times</div>
          <div class="feature_status">1 Business day</div>
          <div class="feature_status_standard">6 Business hours</div>
          <div class="feature_status">4 Business hours</div>
          <div class="feature_status">4 Business hours</div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Slack Connected Channel</div>
          <div class="feature_status">
            <Cancel />
          </div>
          <div class="feature_status_standard">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">24/7 SLA</div>
          <div class="feature_status">
            <Cancel />
          </div>
          <div class="feature_status_standard">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex">
          <div class="feature_category">Knowledge Support</div>
          <div class="feature_category_empty"></div>
          <div class="feature_category_empty"></div>
          <div class="feature_category_empty"></div>
          <div class="feature_category_empty border-r border-blue"></div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Knowledge database</div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status_standard">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">
            Youverify Compliance Academy Certification
          </div>
          <div class="feature_status">Available in your country soon</div>
          <div class="feature_status_standard">
           Available in your country soon
          </div>
          <div class="feature_status">Available in your country soon</div>
          <div class="feature_status">Available in your country soon</div>
        </div>

        <div class="flex">
          <div class="feature_category">Optional Modules</div>
          <div class="feature_category_empty"></div>
          <div class="feature_category_empty"></div>
          <div class="feature_category_empty"></div>
          <div class="feature_category_empty border-r border-blue"></div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Access to KYT</div>
          <div class="feature_status">
            <Cancel />
          </div>
          <div class="feature_status_standard">Access to trial ONLY</div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">API Access</div>
          <div class="feature_status">
            <Cancel />
          </div>
          <div class="feature_status_standard">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Batch Upload (CSV)</div>
          <div class="feature_status">
            <Cancel />
          </div>
          <div class="feature_status_standard">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Report Download - KYC</div>
          <div class="feature_status">
            <Cancel />
          </div>
          <div class="feature_status_standard">
            <Cancel />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Report Download - KYB</div>
          <div class="feature_status">
            <Cancel />
          </div>
          <div class="feature_status_standard">
            <Cancel />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Address Verification</div>
          <div class="feature_status">
            <Cancel />
          </div>
          <div class="feature_status_standard">$3 per verification</div>
          <div class="feature_status">$3 per verification</div>
          <div class="feature_status">
            5 free verifications a month $3/verification on all extra
            verifications
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Data Retention History</div>
          <div class="feature_status">1 Month</div>
          <div class="feature_status_standard">6 months</div>
          <div class="feature_status">1 year</div>
          <div class="feature_status">3 years</div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Organisation Creation</div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status_standard">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Balance Notification and Alert</div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status_standard">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Audit Log</div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status_standard">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">2FA Authentication</div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status_standard">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">
            Premium Data sets (i.e. Criminal, University, etc.)
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status_standard">$xxx</div>
          <div class="feature_status">$xxx</div>
          <div class="feature_status">$xxx</div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Additional team members</div>
          <div class="feature_status_standard">
            1 per month (for each active account) when the plan limit is
            exceeded $5/extra user added
          </div>
          <div class="feature_status">
            2 per month (for each active account) when the plan limit is
            exceeded $5/extra user added
          </div>
          <div class="feature_status">
            $5 per month (for each active account) when the plan limit is
            exceeded
          </div>
          <div class="feature_status">Unlimited</div>
        </div>

        <div class="flex">
          <div class="feature_category">Add Ons</div>
          <div class="feature_category_empty"></div>
          <div class="feature_category_empty"></div>
          <div class="feature_category_empty"></div>
          <div class="feature_category_empty border-r border-blue"></div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Physical Address Verification</div>
          <div class="feature_status_standard">$4 per verification</div>
          <div class="feature_status">$4 per verification</div>
          <div class="feature_status">$4 per verification</div>
          <div class="feature_status">
            5 free verifications a month $3/verification on all extra
            verifications
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Ongoing AML monitoring</div>
          <div class="feature_status_standard">
            <Cancel />
          </div>
          <div class="feature_status">$0.75 per check</div>
          <div class="feature_status">$0.75 per check</div>
          <div class="feature_status">$0.75 per check</div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Ongoing ID document monitoring</div>
          <div class="feature_status_standard">
            <Cancel />
          </div>
          <div class="feature_status">$0.75 per check</div>
          <div class="feature_status">$0.75 per check</div>
          <div class="feature_status"></div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">User Journey Automation (YVform)</div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status_standard">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">User Journey Automation Branding</div>
          <div class="feature_status">
            <Cancel />
          </div>
          <div class="feature_status_standard">$3 per form</div>
          <div class="feature_status">$3 per form</div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">User Journey Automation DNS rewrite</div>
          <div class="feature_status">
            <Cancel />
          </div>
          <div class="feature_status_standard">$5 per form</div>
          <div class="feature_status">$5 per form</div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">KYC - Data Matching 1</div>
          <div class="feature_status">
            Only available in X, Y Z Countries ($0.80 per Check)
          </div>
          <div class="feature_status_standard">
            Only available in X, Y Z Countries ($0.80 per Check)
          </div>
          <div class="feature_status">
            Only available in X, Y Z Countries ($0.80 per Check)
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">KYC - Data Matching 2</div>
          <div class="feature_status">
            Only available in X, Y Z Countries ($3 per Check)
          </div>
          <div class="feature_status_standard">
            Only available in X, Y Z Countries ($3 per Check)
          </div>
          <div class="feature_status">
            Only available in X, Y Z Countries ($3 per Check)
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Document Capture and Facial Compare</div>
          <div class="feature_status">
            $0.50 per Check 299 verfication limit
          </div>
          <div class="feature_status_standard">
            $0.50 per Check 999 verfication limit
          </div>
          <div class="feature_status">
            $0.50 per Check 1999 verfication limit
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">Liveness Check</div>
          <div class="feature_status">
            $0.50 per Check 299 verfication limit
          </div>
          <div class="feature_status_standard">
            $0.50 per Check 999 verfication limit
          </div>
          <div class="feature_status">
            $0.50 per Check 1999 verfication limit
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="feature_name">PEP and Sanction List Search</div>
          <div class="feature_status">
            $0.50 per Check 299 verfication limit
          </div>
          <div class="feature_status_standard">
            $0.50 per Check 999 verfication limit
          </div>
          <div class="feature_status">
            $0.50 per Check 1999 verfication limit
          </div>
          <div class="feature_status">
            <Checked />
          </div>
        </div>

        <div class="flex gap-2.5">
          <div class="price_first_column"></div>
          <div
            class="border-b border-l border-r rounded-b-3xl w-52 h-20 border-blue"
          ></div>
          <div
            class="border-b border-l border-r rounded-b-3xl w-52 h-20 border-blue-900"
          ></div>
          <div
            class="border-b border-l border-r rounded-b-3xl w-52 h-20 border-blue"
          ></div>
          <div
            class="border-b border-l border-r rounded-b-3xl w-52 h-20 border-blue"
          ></div>
        </div>
      </div>
    </div>

    <!-- <div class="lg:hidden">
      <div class="sticky top-32 bg-white">
        

        <div class="flex gap-2.5">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
import Checked from "./checked.vue";
import Cancel from "./cancel.vue";
export default {
  components: { Checked, Cancel },
};
</script>

<style scoped>
.price_category {
  @apply border-t border-l border-r rounded-t-3xl w-52 text-center pt-8 pb-3 font-semibold text-xl text-blue-300;
}
.price_first_column {
  width: 347px;
  @apply hidden lg:block;
}
.feature_category {
  @apply bg-blue-150 py-2.5 px-7 font-semibold text-blue-300;
  width: 387px;
  height: 53px;
}
.feature_category_empty {
  @apply w-52 bg-blue-150;
  height: 53px;
}
.feature_name {
  @apply py-1.5 px-7 text-grey font-normal text-base hidden lg:block;
  width: 347px;
}
.feature_status {
  @apply w-52 px-2 flex justify-center items-center border-l border-r border-blue text-xs text-center;
}
.feature_status_standard {
  @apply w-52 px-2 flex justify-center items-center border-l border-r border-blue-300 text-xs text-center;
}
</style>
