const link = document.querySelectorAll('.link')
console.log(link);
const linkArray = [...link];
linkArray.forEach((value) => {
    const links = value.getAttribute('href');
   if (!links.includes('http://') && !links.includes('https://')) {
       value.setAttribute('href', `https://${links}`);
   }
});
