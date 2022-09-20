import { Series, Episode, pick_episode } from "./episode";

function render(episode_info: Episode) {
  const show = document.getElementById("show") as HTMLParagraphElement;
  const season = document.getElementById("season") as HTMLSpanElement;
  const episode = document.getElementById("episode") as HTMLSpanElement;
  const title = document.getElementById("title") as HTMLParagraphElement;

  // Coerce the string into a strong type.
  show.textContent = Series.fullName(episode_info.series);
  season.textContent = episode_info.season.toString();
  episode.textContent = episode_info.episode.toString();
  title.textContent = episode_info.title;
}

// On load...
render(pick_episode());