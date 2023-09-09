const navItem = [
  {
    label: "Home",
    href: "/",
    hashLink: false,
  },
  {
    label: "About us",
    href: "/about-us",
    hashLink: false,
    onclick() {
      window.scrollTo({ top: 0 });
    },
  },
  {
    label: "Services",
    href: "/#services",
    hashLink: true,
  },
  {
    label: "Team",
    href: "/#team",
    hashLink: true,
  },
  {
    label: "Contact us",
    href: "#contact-us",
    hashLink: true,
  },
];
export default navItem;
