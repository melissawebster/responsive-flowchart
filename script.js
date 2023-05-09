function readMore() {
    const division = document.querySelector('span#edge')
    const moreText = document.querySelector('span#more-text')
    const moreButton = document.querySelector('button#more-button')

    if (division.style.display === "none") {
        division.style.display = "inline";
        moreButton.innerHTML = "read more..."; 
        moreText.style.display = "none";
      } else {
        division.style.display = "none";
        moreButton.innerHTML = "read less"; 
        moreText.style.display = "inline";
      }

}