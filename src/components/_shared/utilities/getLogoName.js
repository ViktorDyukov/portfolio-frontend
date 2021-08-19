const logoLink = () => {
  let logoLink = [
    { link: "/", logo: "main" },
    { link: "{portPth}", logo: "main" },
    { link: "/casestudies/", logo: "allcases" },
    { link: "/study/:id", logo: "allcases" },
    { link: "/page/augmented-reality", logo: "ar" },
    { link: "/page/deliverables", logo: "deliverables" },
    { link: "/about", logo: "about" },
  ];
  return logoLink;
};

export default logoLink;
