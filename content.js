// get the url of website that you are on
var urlForWebsite = "" + window.location.href;

if (urlForWebsite.includes("facebook") ||urlForWebsite.includes("twitter") ||
urlForWebsite.includes("reddit") || urlForWebsite.includes("instagram") ||
urlForWebsite.includes("youtube"))
{
  window.close();
  history.go(-1);


}
