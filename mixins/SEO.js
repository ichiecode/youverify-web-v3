export default {
  head() {
    let arr = [];
    let formattedMeta = this.singlePost ? this.singlePost[0].seo.meta : [];
    formattedMeta.map((items) => {
      arr.push({
        hid: items.name,
        property: items.name,
        content: items.content,
      });
    });

    const head = {
      title: this.singlePost ? this.singlePost[0].seo.title : "",
      meta: arr,
    };

    return head;
  },
};
