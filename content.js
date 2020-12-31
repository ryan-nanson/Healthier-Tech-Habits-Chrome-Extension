chrome.storage.sync.get(null, function (settingsObj) {

    if (settingsObj["hide-twitter-feed"] === false) {
        // console.log('hide twitter feed')   
        embedCSSFile("show-twitter.css");
    }
    if (settingsObj["hide-facebook-feed"] === false) {
        // console.log('hide facebook feed')   
        embedCSSFile("show-facebook.css");
    }
    if (settingsObj["hide-linkedin-feed"] === false) {
        // console.log('hide linkedin feed')   
        embedCSSFile("show-linkedin.css");
    }

    url = window.location.toString();
    console.log(url)

    if (settingsObj["facebook-grayscale"] === false && url.includes('facebook')) {
        console.log('facebook goes grayscale')   
        document.getElementsByTagName("body")[0].style.filter = 'grayscale(0)';
    }
    if (settingsObj["twitter-grayscale"] === false && url.includes('twitter')) {
        console.log('twitter goes grayscale')
        document.getElementsByTagName("body")[0].style.filter = 'grayscale(0)';
    }
    if (settingsObj["linkedin-grayscale"] === false && url.includes('linkedin')) {
        console.log('linked goes grayscale')
        document.getElementsByTagName("body")[0].style.filter = 'grayscale(0)';
    }
});

function embedCSSFile(filename) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = chrome.extension.getURL(filename);
    document.getElementsByTagName("head")[0].appendChild(link);
  }