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
        <div class="mt-14 flex flex-col items-center justify-center">
          <div class="form-group w-8/12" name="enquiry_type">
            <h4>Enquiry</h4>
            <select name="enquiry_type" required="">
              <option value="">Enquiry Type</option>
              <option>Consulting</option>
              <option>Partner enquiry</option>
              <option>Agent enquiry</option>
              <option>Investment enquiry</option>
            </select>
          </div>
          <div class="form-group w-8/12">
            <h4>Company name</h4>
            <input
              name="company_name"
              type="text"
              placeholder="Enter your company name"
              required=""
              value=""
            />
          </div>
          <div class="form-group w-8/12">
            <h4>First name</h4>
            <input
              name="first_name"
              type="text"
              placeholder="First name"
              required=""
              value=""
            />
          </div>
          <div class="form-group w-8/12">
            <h4>Last name</h4>
            <input
              name="last_name"
              type="text"
              placeholder="Last name"
              required=""
              value=""
            />
          </div>
          <div class="form-group w-8/12">
            <h4>Country</h4>
            <select name="country" required="">
              <option value="">Select Country</option>
              <option>Afghanistan</option>
              <option>Aland Islands</option>
              <option>Albania</option>
              <option>Algeria</option>
              <option>American Samoa</option>
              <option>Andorra</option>
              <option>Angola</option>
              <option>Anguilla</option>
              <option>Antarctica</option>
              <option>Antigua</option>
              <option>Argentina</option>
              <option>Armenia</option>
              <option>Aruba</option>
              <option>Australia</option>
              <option>Austria</option>
              <option>Azerbaijan</option>
              <option>Bahamas</option>
              <option>Bahrain</option>
              <option>Bangladesh</option>
              <option>Barbados</option>
              <option>Barbuda</option>
              <option>Belarus</option>
              <option>Belgium</option>
              <option>Belize</option>
              <option>Benin</option>
              <option>Bermuda</option>
              <option>Bhutan</option>
              <option>Bolivia</option>
              <option>Bosnia</option>
              <option>Botswana</option>
              <option>Bouvet Island</option>
              <option>Brazil</option>
              <option>British Indian Ocean Trty.</option>
              <option>Brunei Darussalam</option>
              <option>Bulgaria</option>
              <option>Burkina Faso</option>
              <option>Burundi</option>
              <option>Caicos Islands</option>
              <option>Cambodia</option>
              <option>Cameroon</option>
              <option>Canada</option>
              <option>Cape Verde</option>
              <option>Cayman Islands</option>
              <option>Central African Republic</option>
              <option>Chad</option>
              <option>Chile</option>
              <option>China</option>
              <option>Christmas Island</option>
              <option>Cocos (Keeling) Islands</option>
              <option>Colombia</option>
              <option>Comoros</option>
              <option>Congo</option>
              <option>Congo, Democratic Republic of the</option>
              <option>Cook Islands</option>
              <option>Costa Rica</option>
              <option>Cote d'Ivoire</option>
              <option>Croatia</option>
              <option>Cuba</option>
              <option>Cyprus</option>
              <option>Czech Republic</option>
              <option>Denmark</option>
              <option>Djibouti</option>
              <option>Dominica</option>
              <option>Dominican Republic</option>
              <option>Ecuador</option>
              <option>Egypt</option>
              <option>El Salvador</option>
              <option>Equatorial Guinea</option>
              <option>Eritrea</option>
              <option>Estonia</option>
              <option>Ethiopia</option>
              <option>Falkland Islands (Malvinas)</option>
              <option>Faroe Islands</option>
              <option>Fiji</option>
              <option>Finland</option>
              <option>France</option>
              <option>French Guiana</option>
              <option>French Polynesia</option>
              <option>French Southern Territories</option>
              <option>Futuna Islands</option>
              <option>Gabon</option>
              <option>Gambia</option>
              <option>Georgia</option>
              <option>Germany</option>
              <option>Ghana</option>
              <option>Gibraltar</option>
              <option>Greece</option>
              <option>Greenland</option>
              <option>Grenada</option>
              <option>Guadeloupe</option>
              <option>Guam</option>
              <option>Guatemala</option>
              <option>Guernsey</option>
              <option>Guinea</option>
              <option>Guinea-Bissau</option>
              <option>Guyana</option>
              <option>Haiti</option>
              <option>Heard</option>
              <option>Herzegovina</option>
              <option>Holy See</option>
              <option>Honduras</option>
              <option>Hong Kong</option>
              <option>Hungary</option>
              <option>Iceland</option>
              <option>India</option>
              <option>Indonesia</option>
              <option>Iran (Islamic Republic of)</option>
              <option>Iraq</option>
              <option>Ireland</option>
              <option>Isle of Man</option>
              <option>Israel</option>
              <option>Italy</option>
              <option>Jamaica</option>
              <option>Jan Mayen Islands</option>
              <option>Japan</option>
              <option>Jersey</option>
              <option>Jordan</option>
              <option>Kazakhstan</option>
              <option>Kenya</option>
              <option>Kiribati</option>
              <option>Korea</option>
              <option>Korea (Democratic)</option>
              <option>Kuwait</option>
              <option>Kyrgyzstan</option>
              <option>Lao</option>
              <option>Latvia</option>
              <option>Lebanon</option>
              <option>Lesotho</option>
              <option>Liberia</option>
              <option>Libyan Arab Jamahiriya</option>
              <option>Liechtenstein</option>
              <option>Lithuania</option>
              <option>Luxembourg</option>
              <option>Macao</option>
              <option>Macedonia</option>
              <option>Madagascar</option>
              <option>Malawi</option>
              <option>Malaysia</option>
              <option>Maldives</option>
              <option>Mali</option>
              <option>Malta</option>
              <option>Marshall Islands</option>
              <option>Martinique</option>
              <option>Mauritania</option>
              <option>Mauritius</option>
              <option>Mayotte</option>
              <option>McDonald Islands</option>
              <option>Mexico</option>
              <option>Micronesia</option>
              <option>Miquelon</option>
              <option>Moldova</option>
              <option>Monaco</option>
              <option>Mongolia</option>
              <option>Montenegro</option>
              <option>Montserrat</option>
              <option>Morocco</option>
              <option>Mozambique</option>
              <option>Myanmar</option>
              <option>Namibia</option>
              <option>Nauru</option>
              <option>Nepal</option>
              <option>Netherlands</option>
              <option>Netherlands Antilles</option>
              <option>Nevis</option>
              <option>New Caledonia</option>
              <option>New Zealand</option>
              <option>Nicaragua</option>
              <option>Niger</option>
              <option>Nigeria</option>
              <option>Niue</option>
              <option>Norfolk Island</option>
              <option>Northern Mariana Islands</option>
              <option>Norway</option>
              <option>Oman</option>
              <option>Pakistan</option>
              <option>Palau</option>
              <option>Palestinian Territory, Occupied</option>
              <option>Panama</option>
              <option>Papua New Guinea</option>
              <option>Paraguay</option>
              <option>Peru</option>
              <option>Philippines</option>
              <option>Pitcairn</option>
              <option>Poland</option>
              <option>Portugal</option>
              <option>Principe</option>
              <option>Puerto Rico</option>
              <option>Qatar</option>
              <option>Reunion</option>
              <option>Romania</option>
              <option>Russian Federation</option>
              <option>Rwanda</option>
              <option>Saint Barthelemy</option>
              <option>Saint Helena</option>
              <option>Saint Kitts</option>
              <option>Saint Lucia</option>
              <option>Saint Martin (French part)</option>
              <option>Saint Pierre</option>
              <option>Saint Vincent</option>
              <option>Samoa</option>
              <option>San Marino</option>
              <option>Sao Tome</option>
              <option>Saudi Arabia</option>
              <option>Senegal</option>
              <option>Serbia</option>
              <option>Seychelles</option>
              <option>Sierra Leone</option>
              <option>Singapore</option>
              <option>Slovakia</option>
              <option>Slovenia</option>
              <option>Solomon Islands</option>
              <option>Somalia</option>
              <option>South Africa</option>
              <option>South Georgia</option>
              <option>South Sandwich Islands</option>
              <option>Spain</option>
              <option>Sri Lanka</option>
              <option>Sudan</option>
              <option>Suriname</option>
              <option>Svalbard</option>
              <option>Swaziland</option>
              <option>Sweden</option>
              <option>Switzerland</option>
              <option>Syrian Arab Republic</option>
              <option>Taiwan</option>
              <option>Tajikistan</option>
              <option>Tanzania</option>
              <option>Thailand</option>
              <option>The Grenadines</option>
              <option>Timor-Leste</option>
              <option>Tobago</option>
              <option>Togo</option>
              <option>Tokelau</option>
              <option>Tonga</option>
              <option>Trinidad</option>
              <option>Tunisia</option>
              <option>Turkey</option>
              <option>Turkmenistan</option>
              <option>Turks Islands</option>
              <option>Tuvalu</option>
              <option>Uganda</option>
              <option>Ukraine</option>
              <option>United Arab Emirates</option>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Uruguay</option>
              <option>US Minor Outlying Islands</option>
              <option>Uzbekistan</option>
              <option>Vanuatu</option>
              <option>Vatican City State</option>
              <option>Venezuela</option>
              <option>Vietnam</option>
              <option>Virgin Islands (British)</option>
              <option>Virgin Islands (US)</option>
              <option>Wallis</option>
              <option>Western Sahara</option>
              <option>Yemen</option>
              <option>Zambia</option>
              <option>Zimbabwe</option>
            </select>
          </div>
          <div class="form-group w-8/12">
            <h4>Email</h4>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required=""
              value=""
            />
          </div>
          <div class="form-group w-8/12">
            <h4>Message</h4>
            <textarea
              name="message"
              placeholder="Type your message or enquiry here"
              rows="5"
            ></textarea>
          </div>
          <div class="form-group w-8/12">
            <h4>Phone number</h4>
            <input
              name="phone_number"
              type="tel"
              placeholder="Enter your phone number"
              required=""
              value=""
            />
          </div>
          <div class="">
            <span class="cursor-pointer inline-block" role="button" tabindex="0"
              ><button
                class="bg-blue text-white rounded py-2 sm:mb-0 mb-4 px-8"
              >
                Submit
              </button></span
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
