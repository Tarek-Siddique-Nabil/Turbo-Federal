const navItem = [
  {
    label: "Home",
    href: "/",
    hashLink: false,
  },
  {
    label: "About",
    href: "/about-us",
    hashLink: false,
    onclick() {
      window.scrollTo({ top: 0 });
    },
  },
  {
    label: "Services",
    href: "/services",
    hashLink: false,
    onclick() {
      window.scrollTo({ top: 0 });
    },
  },
  {
    label: "Team",
    href: "/team",
    hashLink: false,
    onclick() {
      window.scrollTo({ top: 0 });
    },
  },
  {
    label: "Solutions",
    href: "/solutions",
    hashLink: false,
    onclick() {},
  },
  {
    label: "Contact ",
    href: "mailto:info@turbofederal.com ",
    hashLink: true,
  },
];
export default navItem;
