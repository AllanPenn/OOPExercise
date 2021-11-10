const mulan = {
  title: `Mulan`,
  main: `Fa Mulan`,
  quote: () => `Dishonor! Dishonor on your whole family!`,
  storyline: function () {
    return `The movie ${this.title} is about ${this.main}`;
  }
};
const tangled = {
  title: `Tangled`,
  main: `Rapunzel`,
  quote: function () {
    return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`;
  },
  storyline: function () {
    return `The movie ${this.title} is about ${this.main}`;
  }
};
function DisneyMovie(t, m) {
  this.title = t;
  this.main = m;
};
DisneyMovie.prototype.storyline = () => `The movie ${this.title} is about ${this.main}`;
const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);
console.log(mulan1);
const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`);
console.log(tangled1);
class DM {
  constructor(t, m) {
    this.title = t;
    this.main = m;
  }
  storyline = function () {
    return `The movie ${this.title} is about ${this.main}`;
  }
  static loveDisneyMovies() {
    return `I Love Disney Movies!`;
  }
};
const mulan2 = new DM(`Mulan`, `Fa Mulan`);
console.log(mulan2);
console.log(mulan2.storyline());
const tangled2 = new DM(`Tangled`, `Rapunzel`);
console.log(tangled2);
console.log(tangled2.storyline());
console.log(DM.loveDisneyMovies());
class DMCast extends DM {
  constructor(t, m, c) {
    super(t, m);
    this.cast = c;
  }
  // BONUS
  static createImageBitmap(t, m, c) {
    return newDMCast(t, m, c);
  }
};
const mulan3 = newDMCast(`Mulan`, `Fa Mulan`, { mulan: `Ming-Na Wen`, mushu: `Eddie Murphy`, shang: `BD Wong`, theEmperor: `Pat Morita` });
const rapunzel3 = new DMCast(
  `Tangled`,
  `Rapunzel`,
  { rapunzel: `Mandy Moore`, flynnRider: `Zachary Levi`, motherGothel: `Donna Murphy` }
);
// BONUS
const moana = DMCast.createImageBitmap(
  `Moana`,
  `Moana of Motunui`,
  {moana: `Auli'i Cravalho`, maui: `Dwayne Johnson`, grammaTala: `Rachel House`, chiefTui: `Temuera Morrison`}
);
console.log(moana);