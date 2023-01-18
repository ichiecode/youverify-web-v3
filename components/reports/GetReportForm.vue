<template>
  <form class="" @submit.prevent="downloadReport">
    <Alert v-if="isAlertOpen" :type="downloadStatus" @close-alert="isAlertOpen = false">
    <p class="flex-grow mr-2">
      {{downloadMessage}}
    </p>
    </Alert>
    <div v-for="(arr, index) in pickInputFields" :key="index" class="sm:flex items-center gap-4 block">
      <text-input
        v-for="field in arr"
        :key="field.name"
        v-model="field.value"
        :type="field.type"
        :name="field.name"
        :placeholder="field.placeholder"
        required
        class="w-full sm:w-1/2"
      >
        {{ field.name.split('_').join(' ') }}
      </text-input>
    </div>
    <div class="sm:flex items-center gap-4 block">
      <select-input
        v-for="field in pickSelectFields"
        :key="field.name"
        v-model="field.value"
        :type="field.type"
        :name="field.name"
        :placeholder="field.placeholder"
        :options="field.options"
        required
        class="w-full sm:w-1/2"
      >
        {{ field.name }}
      </select-input>
    </div>
    <button
      type="submit"
      class="outline-0 m-0 mt-6 select-none whitespace-nowrap font-semibold px-8 py-3 text-sm uppercase shadow-sm transition-colors rounded"
      :class="[buttonStyles]"
      :disabled="isSubmitting"
    >
      {{ isSubmitting ? 'SUBMITTING...' : 'GET REPORT' }}
    </button>
  </form>
</template>

<script>
import Alert from "@/components/common/Alert"
import TextInput from "@/components/form/TextInput"
import SelectInput from "@/components/form/Select"

export default {
  name: "GetReportForm",
  components: {
    Alert,
    TextInput,
    SelectInput,
  },
  props: {
    report: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {
      fields: {
        firstName: {
          value: "",
          name: "first_name",
          type: "text",
          placeholder: "Enter first name"
        },
        lastName: {
          value: "",
          name: "last_name",
          type: "text",
          placeholder: "Enter last name"
        },
        email: {
          value: "",
          name: "email",
          type: "email",
          placeholder: "Enter email"
        },
        company: {
          value: "",
          name: "company",
          type: "text",
          placeholder: "Enter company name"
        },
        industry: {
          value: "",
          name: "industry",
          type: "text",
          placeholder: "Select industry",
          options: ['Finance', 'Oil and Gas', 'Education', 'Transportation', 'Technology', 'Telecommunication', 'Health']
        },
        country: {
          value: "",
          name: "country",
          type: "text",
          placeholder: "Select country",
          options: ['Benin', 'Burkina Faso', 'Cape Verde', 'The Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Liberia', 'Mali', 'Mauritania', 'Niger', 'Nigeria', 'Senegal', 'Sierra Leone', 'Togo']
        },
      },
      isSubmitting: this.submitting,
      values: null,
      downloadStatus: null,
      downloadMessage: "",
      isAlertOpen: false
    }
  },
  computed: {
    pickInputFields() {
      const { firstName, lastName, email, company} = this.fields
      return [[firstName, lastName], [email, company]]
    },
    pickSelectFields() {
      return this.sliceFields(this.fields, ['industry', 'country'])
    },
    buttonStyles() {
      return this.isSubmitting
        ? "text-gray-200 bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
        : " bg-blue text-white hover:bg-blue-300"
    },
  },
  methods: {
    sliceFields(obj, fields) {
      return {...fields.reduce((res, key) => ({ ...res, [key]: obj[key] }), { })}
    },
    getFieldValues() {
      const values = {};
      Object.entries(this.fields).forEach((field) => {
        values[field[0]] = field[1].value;
      });
      return values
    },
    async downloadReport() {
      this.isSubmitting = true
      this.downloadStatus = null

      try {
        const payload = {...this.getFieldValues(), report: this.report}
        const response = await this.$axios.$post(`${process.env.baseUrl}/downloads`, payload)
        this.fields.firstName.value = ""
        this.fields.lastName.value = ""
        this.fields.email.value = ""
        this.fields.company.value = ""
        this.fields.industry.value = ""
        this.fields.country.value = ""
        this.downloadStatus = 'success'
        this.downloadMessage = response.message
      } catch (error) {
        console.log(error)
        this.downloadStatus = 'error'
        this.downloadMessage = error.message
      } finally {
        this.isAlertOpen = true
        this.isSubmitting = false
      }
    }
  }
}
</script>
