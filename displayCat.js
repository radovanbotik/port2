const catImgElement = document.querySelector("#cat-image");
const displayCat = async () => {
  const getCat = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "live_FEAh04Pm6KvAyhrAgdFebSMdhVzGKeeabyFVGh1kKSxuLwP6IqJZ5a9QdIlXFwd5",
      },
    };
    const resp = await fetch(
      "https://api.thecatapi.com/v1/images/search",
      options
    );
    const data = await resp.json();
    return data[0].url;
  };

  const catImageURL = await getCat();
  catImgElement.src = catImageURL;
};

export { displayCat };
