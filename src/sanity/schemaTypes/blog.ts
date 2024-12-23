export const blog = {
  name: "blog", 
  title: "Blog Post", 
  type: "document", 

  fields: [
    {
      name: "title", 
      title: "Title",
      type: "string", 
    },
    {
      name: "slug", 
      title: "Slug",
      type: "slug",
      options: {
        source: 'title',
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image", 
    },
    {
      name: "description", 
      title: "Description",
      type: "text", 
    },
    {
      name: "article", 
      title: "Article",
      type: "array", 
      of: [
        {
          type: "block", 
        },
      ],
    },
  ],
};