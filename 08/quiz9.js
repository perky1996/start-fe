const $url = document.querySelector('#url');
const $btn = document.querySelector('#btn');
const $log = document.querySelector('#log');

function printLog(str) {
  $log.value = str;
}
function result(result) {
  result.text().then(printLog);
}
function error(error) {
  printLog(error);
}

function fetchUrl() {
  const url = $url.value;
  printLog('');

  if (!url) {
    window.alert('url를 입력하세요');
  } else {
    fetch(url).then(result).catch(error);
  }
}
function checkSubmit(e) {
  if (e.keyCode === 13) {
    fetchUrl();
  }
}

$btn.addEventListener('click', fetchUrl);
$url.addEventListener('keypress', checkSubmit);
