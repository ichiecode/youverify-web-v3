<template>
  <div class="my-4">
    <label :for="name" class="mb-4 text-gray-800 leading-none capitalize text-sm">
      <slot></slot>
    </label>
    <input
      :id="name"
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :class="[
        'w-full flex items-center rounded text-sm p-3 bg-gray-50 focus:outline-none focus:text-gray-800 bg- focus:border-gray-200 focus:ring-gray-200 focus:ring-1 transition-all placeholder:text-gray-200',
        {
          'disabled:bg-gray-100 cursor-disabled':
            disabled,
        },
        valid,
      ]"
      @input="$emit('input', $event.target.value)"
    />
    <slot name="error"></slot>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    // The input type. Must be one of "text", "email", "password", "number".
    type: {
      type: String,
      default: "text",
      validator: function (value) {
        return ["text", "email", "password", "number"].includes(value);
      },
    },
    // Used to set the 'id' attr on input and 'for' on label. Should be a word in kebab case.
    name: {
      type: String,
      required: true,
    },
    // The input value
    value: {
      type: String | Number,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    // Is the form disabled?
    disabled: {
      type: Boolean,
      default: false,
    },
    // Is the form field required?
    required: {
      type: Boolean,
      default: false,
    },
    // Is the value passed in valid?
    isValid: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    valid() {
      return this.isValid
        ? "border-secondary-200"
        : "border-error-500 text-error-600";
    },
  },
};
</script>
