const topTen = document.querySelector("#top-ten");
const me_id = "42ae9ade57b3401eb1f6a7329157b2ee";
const me_secret = "370005ae13bb495fa9b86581ad64c95b";

const spotify = () => {
  const getToken = async () => {
    const URL = "https://accounts.spotify.com/api/token";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(me_id + ":" + me_secret),
      },
      body: "grant_type=client_credentials",
    };
    const resp = await fetch(URL, options);
    const data = await resp.json();
    return data.access_token;
  };
  // const URL = "https://api.spotify.com/v1/users/11161628746";

  const getMe = async token => {
    const URL = "https://api.spotify.com/v1/playlists/37i9dQZF1EpmkLx7k1qarq";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const resp = await fetch(URL, options);
    const data = await resp.json();
    // console.log(data.tracks.items[0].track.name);
    // console.log(data.tracks.items);

    return data;
  };

  const runit = async () => {
    const token = await getToken();
    const playlist = await getMe(token);
    // console.log(
    //   playlist.tracks.items.map((item, index) => {
    //     console.log(item.track.name);
    //   })
    // );
    const trackNames = playlist.tracks.items
      .slice(0, 10)
      .map((item, index) => {
        const { spotify: URL } = item.track.external_urls;
        const { images } = item.track.album;
        const { name } = item.track;
        const image = images[0].url;
        const { artists } = item.track;
        const artistNames = artists.map(artist => {
          return artist.name;
        });
        return `
        <li>
        <a href='${URL}' target='_blank'>
        <article class='track-details'>
        <h6>${name}</h6>
        <div class='image-control'>
          <img src='${image}' alt='album cover'>
        </div>
        </article>
        </a>
        </li>
                `;
      })
      .join("");
    topTen.innerHTML = trackNames;
  };
  runit();
};

export { spotify };
