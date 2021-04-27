const logoLink = () => {
  let logoLink = [
    { link: "/", logo: "main" },
    { link: "{portPth}", logo: "main" },
    { link: "/casestudies/", logo: "allcases" },
    { link: "/study/:id", logo: "allcases" },
    { link: "/page/augmented-reality", logo: "ar" },
    { link: "/page/mentoring", logo: "mentoring" },
    { link: "/about", logo: "about" },
  ];
  return logoLink;
};

export default logoLink;
