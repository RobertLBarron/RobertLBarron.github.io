const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


const imageFilenames = ['codepoem.PNG', 'cinnasideeye.PNG', 'download.png', 'sexrepoimg1.PNG', 'wtfNjit.PNG'];


const imageAlts = {
  'codepoem.PNG': 'image of a poem to do with code.',
  'cinnasideeye.PNG': 'picture of a cat giving a side-eye.',
  'download.png': 'picture of the CU boulder logo.',
  'sexrepoimg1.PNG': 'picture of a bunch of smears of DNA.',
  'wtfNjit.PNG': 'picture of an OS stat chart, with NJIT being quite high up.'
};


for (const filename of imageFilenames) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${filename}`);
  newImage.setAttribute('alt', imageAlts[filename]);
  thumbBar.appendChild(newImage);


  newImage.addEventListener('click', () => {
    displayedImage.src = `images/${filename}`;
    displayedImage.alt = imageAlts[filename];
  });
}


btn.addEventListener('click', () => {
  const currentClass = btn.getAttribute('class');
  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
  }
});
