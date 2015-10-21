function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

$("label").click(function(){
    var content = $(this).siblings("div");
    content.toggleClass("hidden");
    content.toggleClass("unhidden");

  });
  

