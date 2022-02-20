function loading(type) {
  if (type === undefined) {
    return new Error("Please provide a type as 'start' or 'stop'");
  } else if (type === "start") {
    var loading = document.createElement("div");
    loading.id = "loading";
    loading.style.position = "fixed";
    loading.style.top = "50%";
    loading.style.left = "50%";
    loading.style.transform = "translate(-50%, -50%)";
    loading.style.background = "rgba(225,225,225,0.8)";
    loading.style.zIndex = "9999";
    loading.style.width = "100%";
    loading.style.height = "100%";
    loading.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(255, 255, 255, 0); display: block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <defs>
      <clipPath id="ldio-ozirwn3s3p-cp" x="0" y="0" width="100" height="100">
        <path d="M81.3,58.7H18.7c-4.8,0-8.7-3.9-8.7-8.7v0c0-4.8,3.9-8.7,8.7-8.7h62.7c4.8,0,8.7,3.9,8.7,8.7v0C90,54.8,86.1,58.7,81.3,58.7z"></path>
      </clipPath>
    </defs>
    <path fill="none" stroke="#575757" stroke-width="2.7928" d="M82 63H18c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h64c7.2,0,13,5.8,13,13v0C95,57.2,89.2,63,82,63z"></path>
    <g clip-path="url(#ldio-ozirwn3s3p-cp)">
      <g>
        <rect x="-100" y="0" width="25" height="100" fill="#e15b64"></rect>
        <rect x="-75" y="0" width="25" height="100" fill="#f47e60"></rect>
        <rect x="-50" y="0" width="25" height="100" fill="#f8b26a"></rect>
        <rect x="-25" y="0" width="25" height="100" fill="#abbd81"></rect>
        <rect x="0" y="0" width="25" height="100" fill="#e15b64"></rect>
        <rect x="25" y="0" width="25" height="100" fill="#f47e60"></rect>
        <rect x="50" y="0" width="25" height="100" fill="#f8b26a"></rect>
        <rect x="75" y="0" width="25" height="100" fill="#abbd81"></rect>
        <animateTransform attributeName="transform" type="translate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0;100"></animateTransform>
      </g>
    </g>
    </svg>`;
    document.body.appendChild(loading);
  } else if (type === "stop") {
    var loading = document.getElementById("loading");
    loading.parentNode.removeChild(loading);
  }
}
function skeleton_div_user_template(parent_div_id, color, count) {
  if (parent_div_id === undefined) {
    return new Error("Please provide a parent div id");
  } else if (color === undefined) {
    return new Error("Please provide a color");
  } else if (count === undefined) {
    return new Error("Please provide a count");
  } else {
    var parent_div = document.getElementById(parent_div_id);
    var skeleton_div = document.createElement("div");
    skeleton_div.className = "skeleton";
    skeleton_div.innerHTML = `<div class="skeleton-loader">
          <div class="skeleton-header">
            <div class="skeleton-header-left"></div>
            <div class="skeleton-header-right">
              <div class="skeleton-header-right-top"></div>
              <div class="skeleton-header-right-bottom"></div>
            </div>
          </div>
          <div class="skeleton-body">
            <div class="skeleton-body">
              <div class="skeleton-body-line"></div>
              <div class="skeleton-body-line"></div>
              <div class="skeleton-body-line"></div>
              <div class="skeleton-body-line"></div>
            </div>
          </div>
          <div class="skeleton-footer">
            <p>Loader Created By Zuaque Mini-Package SDK.</p>
          </div>
        </div>`;
    for (var i = 0; i < count; i++) {
      parent_div.appendChild(skeleton_div.cloneNode(true));
    }
    //   Add the style code
    var style_code = `@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
          .skeleton-loader {
            width: 90%;
            margin-left: 5%;
            margin-top: 100px;
            box-shadow: 0px 0px 50px ${color};
            border-radius: 10px;
            padding-bottom: 10px;
          }
          .skeleton-header {
            width: 95%;
            display: flex;
            margin-left: 2.5%;
            padding-top: 10px;
          }
          .skeleton-header-left {
            width: 70px;
            height: 70px;
            background-color: ${color};
            border-radius: 50%;
            animation: color-change 2s infinite alternate-reverse;
          }
          .skeleton-header-right {
            width: calc(100% - 60px);
          }
          .skeleton-header-right-top {
            height: 30px;
            background-color: ${color};
            border-radius: 5px;
            width: 90%;
            margin-left: 5%;
            animation: color-change 2s infinite alternate-reverse;
          }
          .skeleton-header-right-bottom {
            height: 20px;
            background-color: ${color};
            border-radius: 5px;
            width: 50%;
            margin-left: 5%;
            margin-top: 10px;
            animation: color-change 2s infinite alternate-reverse;
            animation-delay: 1s;
          }
          .skeleton-body-line {
            width: 90%;
            height: 20px;
            background-color: ${color};
            margin-top: 10px;
            margin-left: 5%;
            border-radius: 5px;
            animation: color-change 2s infinite alternate-reverse;
            animation-delay: 2s;
          }
          .skeleton-body-line:last-child {
            width: 60%;
          }
          .skeleton-footer {
            text-align: center;
            font-size: 10px;
            font-family: "Roboto", sans-serif;
          }
          @keyframes color-change {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0.8;
            }
            100% {
              opacity: 0.5;
            }
          }
          @media only screen and (min-width: 700px) {
            .skeleton-loader {
              width: 400px;
            }
          }
          @media only screen and (min-width: 1000px) {
            .skeleton-loader {
              width: 350px;
            }
          }`;
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = style_code;
    document.getElementsByTagName("head")[0].appendChild(style);
  }
}

function customLoader(code, style, count) {
  if (code === undefined) {
    return new Error("Please provide a code");
  } else if (count === undefined) {
    return new Error("Please provide a count");
  } else {
    var skeleton_div = document.createElement("div");
    skeleton_div.className = "skeleton";
    skeleton_div.innerHTML = code;
    var parent_div = document.getElementById("skeleton-loader");
    for (var i = 0; i < count; i++) {
      parent_div.appendChild(skeleton_div.cloneNode(true));
    }
    //   Add the style code
    var style_code = style;
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = style_code;
    if (style) {
      document.getElementsByTagName("head")[0].appendChild(style);
    }
  }
}

module.exports = { loading, skeleton_div_user_template, customLoader };
