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
  SNW,
};

const SERIES_NAME: Map<Series, string> = new Map([
  [Series.TOS, "The Original Series"],
  [Series.TAS, "The Animated Series"],
  [Series.TNG, "The Next Generation"],
  [Series.DS9, "Deep Space 9"],
  [Series.VOY, "Voyager"],
  [Series.ENT, "Enterprise"],
  [Series.DIS, "Discovery"],
  [Series.PIC, "Picard"],
  [Series.LDS, "Lower Decks"],
  [Series.PDG, "Prodigy"],
  [Series.SNW, "Strange New Worlds"],
]);

namespace Series {
  export function fullName(series: Series): string {
    return "Star Trek: " + SERIES_NAME[series];
  }
}

// Basic info about a Trek episode.
type Episode = {
  series: Series,
  season: number,
  episode: number,
  title: string,
  airdate: Date,
};

// All known Trek episodes.
const EPISODES: Episode[] = EPISODE_DATA.map(
  (ep) => {
    return {
      series: <Series> Series[ep.series as keyof typeof Series ],
      season: ep.season,
      episode: ep.episode,
      title: ep.title,
      airdate: new Date(ep.airdate),
    };
  }
)

// Pick a random Trek episode.
function pick_episode(): Episode {
  const end = EPISODES.length;
  const idx = Math.floor(Math.random() * end);
  return EPISODES[idx];
}
