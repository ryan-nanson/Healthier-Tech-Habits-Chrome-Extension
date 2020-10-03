chrome.storage.sync.get(null, function (settingsObj) {
    if (settingsObj["hide-twitter-feeds-check"] === false) {
        embedCSSFile("show-timeline.css");
    }
    if (settingsObj["hide-facebook-feed-check"] === false) {
        embedCSSFile("show-news-feed.css");
    }
});

function embedCSSFile(filename) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = chrome.extension.getURL(filename);
    document.getElementsByTagName("head")[0].appendChild(link);
  }