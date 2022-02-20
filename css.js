function insertCss(code) {
  try {
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = code;
    document.head.appendChild(style);
    return true;
  } catch (e) {
    return new Error("An unexpected error occurred!");
  }
}

function boxShadow(type, color, className) {
  try {
    switch (type) {
      case "small":
        var style = document.createElement("style");
        style.type = "text/css";
        rule = `.${className} {
            box-shadow: 0px 0px 10px ${color};
        }`;
        style.innerHTML = rule;
        document.head.appendChild(style);
        break;
      case "medium":
        var style = document.createElement("style");
        style.type = "text/css";
        rule = `.${className} {
            box-shadow: 15px 20px 50px ${color};
        }`;
        style.innerHTML = rule;
        document.head.appendChild(style);
        break;
      case "x-small":
        var style = document.createElement("style");
        style.type = "text/css";
        rule = `.${className} {
            box-shadow: 0px 0px 50px ${color};
        }`;
        style.innerHTML = rule;
        document.head.appendChild(style);
        break;
      case "large":
        var style = document.createElement("style");
        style.type = "text/css";
        rule = `.${className} {
            box-shadow: 30px 40px 100px ${color};
        }`;
        style.innerHTML = rule;
        document.head.appendChild(style);
        break;
      default:
        return new Error(
          "Please provide a valid type. Valid types are: 'small', 'medium', 'x-small', 'large'"
        );
    }
  } catch (e) {
    return new Error("An unexpected error occurred!");
  }
}

function borderRadius(r, className) {
  try {
    var style = document.createElement("style");
    style.type = "text/css";
    rule = `.${className} {
            border-radius: ${r}px;
        }`;
    style.innerHTML = rule;
    document.head.appendChild(style);
  } catch (e) {
    return new Error("An unexpected error occurred!");
  }
}

module.exports = { insertCss, boxShadow, borderRadius };
