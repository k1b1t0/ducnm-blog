export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  return {
    pathPrefix: "/ducnm-blog/", // Đảm bảo trùng với tên repo
    dir: {
      input: ".",
      output: "_site"
    }
  };
};