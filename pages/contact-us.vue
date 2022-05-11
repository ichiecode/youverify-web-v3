<template>
  <div>
    <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
      <div class="pt-40 pb-20">
        <div class="text-center">
          <h1>Contact Sales</h1>
          <p>
            Tell us what your business needs, and we'll find the best solution
            for you.
          </p>
        </div>
        <div class="mt-14">
          <form
            class="flex flex-col items-center justify-center"
            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
            method="POST"
          >
            <input type="hidden" name="oid" value="00D8c000007B8H4" />
            <input
              type="hidden"
              name="retURL"
              value="https://www.youverify.co/contact-us-success"
            />
            <div class="form-group md:w-8/12">
              <label for="first_name"><h4>First name</h4></label>
              <input
                class=""
                id="first_name"
                name="first_name"
                type="text"
                placeholder="First name"
                required
              />
            </div>
            <div class="form-group md:w-8/12">
              <label for="last_name"><h4>Last name</h4></label>
              <input
                class=""
                placeholder="Last name"
                id="last_name"
                maxlength="80"
                name="last_name"
                type="text"
                required
              />
            </div>
            <div class="form-group md:w-8/12">
              <label for="email"><h4>Email</h4> </label>
              <input
                placeholder="Enter your email"
                id="email"
                maxlength="80"
                name="email"
                type="email"
                required
              />
            </div>
            <div class="form-group md:w-8/12">
              <label for="company"><h4>Company name</h4></label>
              <input
                placeholder="Enter your company name"
                id="company"
                maxlength="80"
                name="company"
                type="text"
              />
            </div>
            <div class="form-group md:w-8/12">
              <label for="phone_number"><h4>Phone number</h4></label>
              <input
                placeholder="Enter your phone number"
                id="phone"
                maxlength="20"
                name="phone_number"
                type="tel"
              />
            </div>
            <div class="form-group md:w-8/12">
              <label for="MESSAGE"><h4>Message</h4> </label>
              <textarea
                placeholder="Type your message or enquiry here"
                id="description"
                name="message"
                rows="5"
              ></textarea>
            </div>
            <div class="">
              <span
                class="cursor-pointer inline-block"
                role="button"
                tabindex="0"
              >
                <AppButton buttonText="Submit" buttoncolor="bluebutton" />
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: "Contact us",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Contact us at Youverify @ 1st Floor, Sum House, 350 Borno Way, Yaba, 101212 Lagos, Nigeria. Phone @ +234 (814) 797 3350.",
      },
    ],
  },
};
</script>

<style></style>
