import * as EPISODE_DATA from "../data/data.json";

export { Episode, Series, pick_episode };

// Canonical TLAs for Trek series.
enum Series {
    TOS,
    TAS,
    TNG,
    DS9,
    VOY,
    ENT,
    DIS,
    PIC,
    LDS,
    PDG,
};

// Basic info about a Trek episode.
type Episode = {
  series: Series,
  season: number,
  episode: number,
  title: String,
  airdate: Date,
};

// All known Trek episodes.
const EPISODES : Episode[] = EPISODE_DATA;

// Pick a random Trek episode.
function pick_episode() : Episode {
  const end = EPISODES.len();
  const idx = Math.floor(Math.random() * end);
  return EPISODES[idx];
}
