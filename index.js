function sortArray(array, type) {
  if (array === undefined) {
    return new Error("Please provide an array");
  } else if (type === undefined) {
    return new Error(
      "Please provide a Sorting Type in the form of 'asc', 'desc', 'init-asc', 'init-desc'"
    );
  } else if (!Array.isArray(array)) {
    return new Error("Please provide a valid array");
  } else if (array.length === 0) {
    return new Error("Please provide a valid array");
  } else {
    switch (type) {
      case "asc":
        return array.sort();
      case "desc":
        return array.sort().reverse();
      case "init-asc":
        if (!array.every((item) => typeof item === "number")) {
          return new Error("Please provide a valid array with numbers");
        }
        return array.sort((a, b) => a - b);
      case "init-desc":
        if (!array.every((item) => typeof item === "number")) {
          return new Error("Please provide a valid array with numbers");
        }
        return array.sort((a, b) => b - a);
      default:
        return new Error(
          "Please provide a Sorting Type in the form of 'asc', 'desc', 'init-asc', 'init-desc'"
        );
    }
  }
}

function pretty_ms(ms) {
  if (!Number.isFinite(ms)) {
    throw new TypeError("Expected a finite number");
  } else {
    //   Convert it to human readable format
    const sec = Math.floor(ms / 1000);
    const min = Math.floor(sec / 60);
    const hr = Math.floor(min / 60);
    const day = Math.floor(hr / 24);
    const mo = Math.floor(day / 30);
    const yr = Math.floor(mo / 12);

    //   Return the result in the form of a human readable string either in days, hours, minutes, seconds or years
    if (yr > 0) {
      return `${yr} years`;
    }
    if (mo > 0) {
      return `${mo} months`;
    }
    if (day > 0) {
      return `${day} days`;
    }
    if (hr > 0) {
      return `${hr} hours`;
    }
    if (min > 0) {
      return `${min} minutes`;
    }
    if (sec > 0) {
      return `${sec} seconds`;
    }
    return `${ms} milliseconds`;
  }
}

module.exports = { sortArray, pretty_ms };
