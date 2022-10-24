<template>
  <div class="sm:flex items-center hidden gap-4">
    <ShareNetwork
      tag="button"
      network="facebook"
      :url="url"
      :title="title"
      :description="description"
      :quote="quote"
      :hashtags="hashtags"
      class="inline-block w-6"
    >
      <img
        src="~/assets/images/icons/social/facebook.svg"
        alt="Share on Facebook"
        title="Share on Facebook"
      />
    </ShareNetwork>
    <ShareNetwork
      tag="button"
      network="twitter"
      :url="url"
      :title="title"
      :description="description"
      :hashtags="hashtags"
      :twitter-user="twitterUser"
      class="inline-block w-6"
    >
      <img
        src="~/assets/images/icons/social/twitter.svg"
        alt="Share on Twitter"
        title="Share on Twitter"
      />
    </ShareNetwork>
    <ShareNetwork
      tag="button"
      network="linkedIn"
      :url="url"
      :title="title"
      :description="description"
      class="inline-block w-6"
    >
      <img
        src="~/assets/images/icons/social/linkedin.svg"
        alt="Share on linkedin"
        title="Share on linkedin"
      />
    </ShareNetwork>
    <ShareNetwork
      tag="button"
      network="instaPaper"
      :url="url"
      :title="title"
      :description="description"
      class="inline-block w-6"
    >
      <img
        src="~/assets/images/icons/social/instagram.svg"
        alt="Share on instagram"
        title="Share on Instagram"
      />
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  name: "SocialShare",
  props: {
    url: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    quote: {
      type: String,
      default: "",
    },
    hashtags: {
      type: String,
      default: "",
    },
    twitterUser: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>
