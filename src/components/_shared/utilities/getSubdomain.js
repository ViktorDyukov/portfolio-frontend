const getSubdomain = () => {
  const domains = window.location.host.split(".");
  var subDomain = "";
  if (domains.length >= 3) subDomain = domains[0];
  else subDomain = "public";
  return subDomain;
};

export default getSubdomain;
