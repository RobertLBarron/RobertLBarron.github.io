// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
// 2. RAW TEXT STRINGS
const storyText =
  'It was 94 fahrenheit outside, so :insertx: hopped on a pogo stick. When they reached :inserty:, they froze in confusion, then :insertz:. Bob watched from a distance, unfazed — :insertx: once ate 300 pounds of jellybeans in one sitting.';

const insertX = [
  'Captain Wobblepants',
  'The Invisible Ferret',
  'Professor Picklejuice'
];

const insertY = [
  'the moon cheese museum',
  'a giant rubber duck',
  'a donut-shaped UFO'
];

const insertZ = [
  'sang opera to a confused squirrel',
  'started breakdancing uncontrollably',
  'vanished into a cloud of glitter'
];


// 3. EVENT LISTENER AND FUNCTION
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById('uk').checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone';
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
