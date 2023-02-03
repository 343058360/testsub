module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  base: "/liupeng.github.io/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" },
    ],
    // sidebar: {
    //   // 侧边栏在 /foo/ 上
    //   "/foo/": ["", "one", "two"],
    //   // 侧边栏在 /bar/ 上
    //   "/bar/": ["", "three", "four"],
    // },
    sidebar: ["/", "/foo/", "/bar/", "/guide/"],
  },
};
