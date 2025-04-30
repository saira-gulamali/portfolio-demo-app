import reactLogo from "../assets/react.svg";
import { DemoItem } from "../utils/types";

export const demoItems: DemoItem[] = [
  {
    id: 1,
    project: "Demo 1",
    title: "Navbar Demo",
    description: "Demonstrates a responsive navbar.",
    imageUrl: reactLogo,
    link: "/navDemo",
  },
  {
    id: 2,
    project: "Demo 2",
    title: "Slideshow Demo",
    description: "Image carousel/slideshow functionality.",
    imageUrl: reactLogo,
    link: "/slideshowDemo",
  },
  {
    id: 3,
    project: "Demo 3",
    title: "Infinite Scroll",
    description: "Load more content on scroll.",
    imageUrl: reactLogo,
    link: "/infiniteScrollDemo",
  },
  {
    id: 4,
    project: "Demo 4",
    title: "Lazy Loading",
    description: "Lazy loading components/images.",
    imageUrl: reactLogo,
    link: "/lazyLoadDemo",
  },
  {
    id: 5,
    project: "Demo 5",
    title: "Layout and Structure",
    description: "Sample layout of a landing page.",
    imageUrl: reactLogo,
    link: "/layoutDemo",
  },
];
