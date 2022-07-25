<template>
  <form class="" @submit.prevent="handleSubmit">
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
      DOWNLOAD REPORT
    </button>
  </form>
</template>

<script>
import TextInput from "@/components/form/TextInput"
import SelectInput from "@/components/form/Select"

export default {
  name: "GetReportForm",
  components: {
    TextInput,
    SelectInput,
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
          options: ['Afghanistan', 'Aland', 'Albania', 'Algeria', 'American', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',]
        },
      },
      isSubmitting: false,
      error: false
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
        ? "text-gray-200 bg-gray-400 hover:bg-gray-400"
        : " bg-blue text-white hover:bg-blue-300"
    }
  },
  methods: {
    sliceFields(obj, fields) {
      return {...fields.reduce((res, key) => ({ ...res, [key]: obj[key] }), { })}
    },
    handleSubmit() {
      this.isSubmitting = true
      const values = {};
      Object.entries(this.fields).forEach((field) => {
        values[field[0]] = field[1].value;
      });
      console.log(values)
      this.isSubmitting = false
    }
  }
}
</script>
