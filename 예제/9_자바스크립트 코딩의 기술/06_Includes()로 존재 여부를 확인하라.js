const sections = ['shipping'];
function displayShipping1(sections) {
  if (sections.indexOf('shipping')) {
    return true;
  }
  return false;
}

function displayShipping2(sections) {
  return sections.indexOf('shipping') > -1;
}

function displayShipping3(sections) {
  return sections.includes('shipping');
}
