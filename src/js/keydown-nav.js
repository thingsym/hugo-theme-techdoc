(function() {
  document.addEventListener('DOMContentLoaded', function(){
    const nav_prev = document.querySelector('.nav-prev');
    const nav_next = document.querySelector('.nav-next');

    // prev links - left arrow key
    document.addEventListener( 'keydown', event => {
      if (nav_prev && event.keyCode === 37) {
        location.href = nav_prev.getAttribute('href');
      }

      // next links - right arrow key
      if (nav_next && event.keyCode === 39) {
        location.href = nav_next.getAttribute('href');
      }
    });
  });
})();
