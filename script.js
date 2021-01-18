$(function () {
  $("#pips-slider")
    .slider({
      range: true,
      min: 0,
      max: 150,
      values: [5, 50],
      step: 5,
    })

    .slider("pips", {
      first: "label",
      last: "label",
      rest: "label",
      step: 1,
      labels: true,
      prefix: "",
      suffix: "",
      formatLabel: (val) => {
        return val % 25 == 0 ? val : "";
      },
    })

    .slider("float", {
      handle: true,
      pips: false,
      labels: false,
      prefix: "",
      suffix: "",
    });
});
