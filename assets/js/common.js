$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});


function fitCvLocationText() {
  const locations = Array.from(document.querySelectorAll(".cv .date-column .location-text"));
  if (locations.length === 0) return;

  // Restore natural flex sizing so wrapping follows the available date-column width.
  locations.forEach((location) => {
    location.style.width = "";
  });

  requestAnimationFrame(() => {
    locations.forEach((location) => {
      const range = document.createRange();
      range.selectNodeContents(location);
      const lines = Array.from(range.getClientRects()).filter((rect) => rect.width > 0);

      // Multiline text only needs the width of its longest rendered line.
      if (lines.length > 1) {
        const longestLine = Math.max(...lines.map((line) => line.width));
        location.style.width = Math.ceil(longestLine) + "px";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", fitCvLocationText);
window.addEventListener("resize", fitCvLocationText);
if (document.fonts) document.fonts.ready.then(fitCvLocationText);
