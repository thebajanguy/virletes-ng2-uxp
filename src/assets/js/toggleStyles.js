function toggleStyles() {
  let pathname  = window.location.pathname
  let userworkspaceResult = pathname.includes("userworkspace");
  let pagesResult = pathname.includes("pages");

  var el = document.getElementById("toggleStyles");
  el.href = "assets/scss/userworkspace/userworkspace-custom-styles.scss";

  if (userworkspaceResult) {
    el.href = "assets/scss/userworkspace/userworkspace-custom-styles.scss";
      //alert('userworkspaceResult: ' + userworkspaceResult );
  }
  else {
    el.href = "assets/scss/user-experience/user-experience-custom-styles.scss";
    //alert('pagesResult: ' + pagesResult );

  }

}


/*
<link id="toggleStyles" href="styles.css" rel="stylesheet" type="text/css" />
*/
