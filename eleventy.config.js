import { HtmlBasePlugin } from "@11ty/eleventy";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPlugin(HtmlBasePlugin);
  return {
    pathPrefix: "/ducnm-blog/", // Đảm bảo trùng với tên repo
    dir: {
      input: ".",
      output: "_site"
    }
  };
};