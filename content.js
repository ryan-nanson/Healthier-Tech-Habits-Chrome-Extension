chrome.storage.sync.get(null, function (settingsObj) {

    if (settingsObj["test-toggle"]) {
        console.log("toggle has been toggled");
    }


    if (settingsObj["hide-twitter-feed"] === false) {
        console.log('hide twitter feed')   
        embedCSSFile("show-timeline.css");
    }
    if (settingsObj["hide-facebook-feed"] === false) {
        console.log('hide facebook feed')   
        embedCSSFile("show-news-feed.css");
    }

    url = window.location.toString();
    console.log(url)

    if (settingsObj["facebook-grayscale"] === true && url.includes('facebook')) {
        console.log('facebook goes grayscale')   
        document.getElementsByTagName("body")[0].style.filter = 'grayscale(1)';
    }
    if (settingsObj["twitter-grayscale"] === true && url.includes('twitter')) {
        console.log('twitter goes grayscale')
        document.getElementsByTagName("body")[0].style.filter = 'grayscale(1)';
    }
});

function embedCSSFile(filename) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = chrome.extension.getURL(filename);
    document.getElementsByTagName("head")[0].appendChild(link);
  }