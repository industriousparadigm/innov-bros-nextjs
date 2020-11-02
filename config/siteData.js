export default {
  menuItems: [
    { title: "Home", href: "/" },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  pages: {
    home: {
      blocks: [
        {
          type: "heading",
          tag: "h1",
          content:
            "A creative R&D and Front-end Innovation team imagining and inventing a better future.",
        },
        {
          type: "quote-widget",
        },
      ],
    },
    about: {
      tagline: "Who we are",
      blocks: [
        {
          type: "heading",
          tag: "h2",
          content:
            "Creative solutions are not stumbled upon by accident, nor realized by lone geniuses. They come from synergistic teams that apply the right methods and attitudes.",
        },
        {
          type: "paragraph",
          content:
            "We use our expertise in creativity, design and new product development to help imagining and inventing a better future for everyone.",
        },
        {
          type: "paragraph",
          content:
            "Our complementary skillsets and background in design and engineering with our systematic approach, creativity and facilitating capabilities, enable a unique perspective to projects with a broad vision and solutions.",
        },
        {
          type: "paragraph",
          content:
            "We want to empower companies with new ideas and opportunities to improve their innovation output. We can help in looking at new frames and/or propose solutions after a careful and systematic process.",
        },
        {
          type: "paragraph",
          content:
            "We work as a team and as brothers, and collaborate with people that can bring even more expertise to the table.",
        },
      ],
    },
  },
};
