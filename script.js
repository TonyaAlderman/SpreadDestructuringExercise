const mcuShows = ["Loki", "What If...?"];
const starWarsShows = ["The Mandalorian", "The Bad Batch"];
const disneyPlusShows = [...mcuShows, ...starWarsShows, "Monsters At Work"];

console.log(disneyPlusShows);

const netflixMovie = {
    action: "Extraction",
    crime: "The Irishman",
};

const amazonPrimeMovies = {
    action: "The Tomorrow War",
    drama: "One Night In Miami",
};

const streamingMovies = {
    ...amazonPrimeMovies,
    ...netflixMovies,
    musical: "Hamilton",
};

console.log(streamingMovies);

const disneyJunior = [
    "Mickey Mouse Clubhouse",
    "Spidey and His Amazing Friends",
];

const [mickey, spidey] = disneyJunior;

console.log(disneyJunior);

const avengers = {
    warMachine: "James Rhodes",
    theHulk: "Bruce Banner",
};

console.log(avengers);

const { warMachine, theHulk} = avengers;

console.log(avengers);

const moreAvengers = {
    blackWidow: "Natasha Romanoff",
    hawkeye: "Clint Barton",
    ironMan: "Tony Stark",
};

const {blackWidoe: nat, ...others} = moreAvengers;

console.log(moreAvengers);

console.log(nat, others);

const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9],
};

const all = bonus.first,concat(bonus.second, bonus.third);
console.log(all);

const [one, two, three, four, five, six, seven, eight, nine] = all;
console.log(four);