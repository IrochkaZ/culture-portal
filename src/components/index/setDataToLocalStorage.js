import getRandomPoet from "./getRandomPoet";

const setDataToLocalStorage = (data, language) => {
  const setPoetsInfo = () => {
    const poetsInfo = data.filter(el => el.fields.lang === "multi");
    localStorage.setItem("poetsData", JSON.stringify(poetsInfo));
    const todayPoet = getRandomPoet(poetsInfo.length);
    const todayPoetData = poetsInfo[todayPoet - 1].fields;
    localStorage.setItem("poetOfTheDayData", JSON.stringify(todayPoetData));
  };

  const setPageInfo = () => {
    const pageInfo = data.filter(el => el.fields.lang === "mainInfo");
    localStorage.setItem("pageInfo", JSON.stringify(pageInfo[0].fields.data));
    const pageMainInfo = pageInfo[0].fields.data[language];
    localStorage.setItem("buttons", pageMainInfo.buttons);
  };

  const setTeamMembers = () => {
    const members = data.filter(el => el.fields.id === "members");
    localStorage.setItem("teamMembers", JSON.stringify(members[0].fields.data));
  };

  const setWorklogData = () => {
    const worklog = data.filter(el => el.fields.id === "worklog");
    const difficulties = data.filter(el => el.fields.id === "difficulties");
    const requirements = data.filter(el => el.fields.id === "requirements");
    localStorage.setItem("worklog", worklog);
    localStorage.setItem("difficulties", difficulties);
    localStorage.setItem("requirements", requirements);
  };
  setPoetsInfo();
  setPageInfo();
  setTeamMembers();
  setWorklogData();
};

export default setDataToLocalStorage;
