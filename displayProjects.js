const displayProjects = async () => {
  const headers = {
    headers: {
      "x-api-key": "4c323fe4c4fded7d7fdad6c07b855cd4",
    },
    data: {
      link: "https://melodic-empanada-155630.netlify.app/",
    },
  };

  const resp = await fetch(
    "http://api.linkpreview.net/?key=4c323fe4c4fded7d7fdad6c07b855cd4&q=https://melodic-empanada-155630.netlify.app/"
  );
  const data = await resp.json();
  console.log(data);
};

export { displayProjects };
