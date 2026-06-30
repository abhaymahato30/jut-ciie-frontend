import API from "./api";

export const getHomePage = async () => {
  const response = await API.get("/homepage?populate=*");
  return response.data.data;
};

export const getStatistics = async () => {
  const response = await API.get(
    "/statistics?sort=order:asc"
  );

  return response.data.data;
};
export const getPrograms = async () => {
  const response = await API.get(
    "/programs?populate=*&sort=order:asc"
  );

  return response.data.data;
};
export const getStartups = async () => {
  const response = await API.get(
    "/startups?populate=*&sort=order:asc"
  );

  return response.data.data;
};
export const getEvents = async () => {
  const response = await API.get(
    "/events?populate=*&sort=order:asc"
  );

  return response.data.data;
};
export const getSiteSettings = async () => {
  const response = await API.get(
    "/site-setting?populate=*"
  );

  return response.data.data;
};
export const getAnnouncements = async () => {
  const response = await API.get(
    "/announcements?populate=*&sort=order:asc"
  );

  return response.data.data;
};
export const getTeamMembers = async () => {
  const response = await API.get(
    "/team-members?populate=*&sort=order:asc"
  );

  return response.data.data;
};
export const getGallery = async () => {
  const response = await API.get(
    "/galleries?populate=*&sort=order:asc"
  );

  return response.data.data;
};
export const getHeroSlides = async () => {
const response = await API.get(
"/hero-slides?populate=*&sort=order:asc"
);

return response.data.data;
};
export const getAbout = async () => {
const response = await API.get(
"/about?populate=*"
);

return response.data.data;
};
