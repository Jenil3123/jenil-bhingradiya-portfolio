import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jenil",
  lastName: "Bhingradiya",
  name: `Jenil Bhingradiya`,
  role: "Frontend & Shopify Developer",
  avatar: "/images/jenill.png",
  email: "jenil3123@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Gujarati"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Jenil3123",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://in.linkedin.com/in/jenil-bhingradiya-07b46b272",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:jenil3123@gmail.com",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Jenil Bhingradiya – Advanced Shopify Developer`,
  description: `Helping brands turn ideas into fast, scalable, and beautifully crafted websites.`,
  headline: <>Jenil Bhingradiya</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Shopify Development</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Client work
        </Text>
      </Row>
    ),
    href: "/work/",
  },
  subline: (
    <>
    Shopify Developer Helping Brands Convert Visitors Into Buyers.
    <div>{/*I'm Jenil, a Shopify developer specializing in{" "} <Text as="span" size="xl" weight="strong">custom Shopify themes</Text>{" "}and performance-focused web experiences.*/}</div>
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `Know More About Me`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <Text>
        I build custom Shopify themes and modern frontend interfaces with a strong focus on clean, scalable architecture.
      </Text>
      <Text>
        My work prioritizes performance, usability, and high-quality user experiences that drive business growth.
      </Text>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelancing",
        timeframe: "October/2025 - Present",
        role: "Freelance Shopify Developer",
        techStack: "Shopify, Liquid, JavaScript, HTML, CSS, Git, Shopify CLI",
        achievements: [
          <>
            Built and customized Shopify themes for small and mid-sized businesses, focusing on
            clean UI, performance, and scalability.
          </>,
          <>
            Developed custom Shopify sections, product templates, and Liquid logic tailored to
            unique brand and business requirements.
          </>,
          <>
            Optimized storefront performance by improving image handling, script loading, and
            theme structure.
          </>,
          <>
            Worked directly with clients to translate business goals into conversion-focused
            Shopify storefronts.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Codestrokes Solution",
        timeframe: "April/2025 - September/2025",
        role: "Shopify Developer",
        achievements: [
          <>
            Developed custom Shopify theme features using Liquid, JavaScript, and Shopify APIs to support dynamic and scalable storefront functionality.
          </>,
          <>
            Implemented data-driven sections using Shopify metafields and metaobjects, reducing content update time and improving maintainability.
          </>,
          <>
            Delivered end-to-end Shopify solutions for multiple client stores, focusing on performance, scalability, and clean architecture.
          </>,
          <>
            Built responsive, conversion-focused UI components that enhanced user experience and engagement across devices.
          </>,
          <>
            Reduced reliance on third-party apps by developing custom in-house features, improving site performance and lowering operational costs.
          </>,
          <>
            Debugged and resolved complex theme and app conflicts, ensuring stable production deployments.
          </>,
          <>
            Collaborated closely with designers, clients, and cross-functional teams to deliver solutions aligned with business and revenue goals.
          </>,
        ],
        images: [],
      },
      {
        company: "Aerocube Technology",
        timeframe: "July/2024 - January/2025",
        role: "Web Developer Intern",
        achievements: [
          <>
            Assisted in developing and maintaining responsive web pages using HTML, CSS, JavaScript, and modern frontend practices.
          </>,
          <>
            Collaborated with senior developers to implement UI components and page layouts based on design requirements.
          </>,
          <>
            Gained hands-on experience in debugging, code optimization, and cross-browser compatibility.
          </>,
          <>
            Supported backend integration tasks and learned the fundamentals of API usage and data flow in web applications.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bachelor’s Degree — Computer Engineering",
        description: <>Studied core computer science concepts including data structures, web development, and software architecture.</>,
      },
      {
        name: "Professional Training — Web Development & Digital Commerce",
        description: <>Learned Shopify theme development, UI/UX implementation, and e-commerce best practices.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Shopify",
        description: (
          <>Build scalable Shopify storefronts using Liquid, metafields, and metaobjects, with a focus on performance, reusability, and conversion-driven UI.</>
        ),
        tags: [
          {
            name: "Shopify",
            icon: "shopify",
          },
          {
            name: "E-commerce",
            icon: "ecommerce",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/asligems.png",
            alt: "Asli Gems",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/naturallypahadi.png",
            alt: "Naturally Pahadi",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Frontend Engineering",
        description: (
          <>Develop responsive, accessible interfaces using modern frontend technologies, ensuring clean architecture and consistent user experience across devices.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Visuals",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/Krishnam Jewels.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Asligems.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Jhonny's Jewelry.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Hotworx.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Kalakrutii.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Pawblaze.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/mmsilver.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
