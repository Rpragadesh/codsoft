const searchBar = document.querySelector('input');
const featuresList = document.querySelector('.features ul');
const benefitsList = document.querySelector('.benefits ul');

searchBar.addEventListener('input', () => {
  const searchTerm = searchBar.value.toLowerCase();

  // Filter the features list
  const filteredFeatures = featuresList.querySelectorAll('li');
  filteredFeatures.forEach(li => {
    const liText = li.textContent.toLowerCase();
    if (!liText.includes(searchTerm)) {
      li.style.display = 'none';
    } else {
      li.style.display = 'block';
    }
  });

  // Filter the benefits list
  const filteredBenefits = benefitsList.querySelectorAll('li');
  filteredBenefits.forEach(li => {
    const liText = li.textContent.toLowerCase();
    if (!liText.includes(searchTerm)) {
      li.style.display = 'none';
    } else {
      li.style.display = 'block';
    }
  });
});