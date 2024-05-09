document.addEventListener('DOMContentLoaded', function () {


    const titlePage = document.querySelector('.title-page');
    const loganStreet = document.querySelector('.body-texts'); // Ensure this is the correct element
  
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.5) {
            loganStreet.classList.add('visible');
            console.log(loganStreet);
            console.log("Observer Triggered:", entries);

          } else {
            loganStreet.classList.remove('visible');
          }
        });
      },
      {
        threshold: [0.5], // 50% visibility
      }
    );
  
    observer.observe(titlePage); // Ensure this is the correct element
  });
  