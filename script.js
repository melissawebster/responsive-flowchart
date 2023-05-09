function readMoreLess() {
    let moreText = document.getElementById('more-text')
    let moreButton = document.getElementsByTagName('button')[0]

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        moreButton.innerHTML = "Read less";
      } else {
        moreText.style.display = "none";
        moreButton.innerHTML = "Read more...";
      }
}

