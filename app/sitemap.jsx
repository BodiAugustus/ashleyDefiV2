// app/sitemap.js

const sitemap = () => {
  return [
    {
      url: "https://ashleydefi.com",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://ashleydefi.com/consulting",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ashleydefi.com/manage",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ashleydefi.com/vaults",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Add more URLs as needed
  ];
};

export default sitemap;
