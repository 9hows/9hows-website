(function () {
  function getValue(path) {
    return path.split(".").reduce(function (value, key) {
      return value && value[key];
    }, window.SITE_CONTENT);
  }

  function setText(selector, callback) {
    document.querySelectorAll(selector).forEach(callback);
  }

  setText("[data-content]", function (element) {
    var value = getValue(element.getAttribute("data-content"));
    if (value) element.textContent = value;
  });

  setText("[data-href]", function (element) {
    var value = getValue(element.getAttribute("data-href"));
    if (value) element.setAttribute("href", value);
  });

  setText("[data-list]", function (element) {
    var items = getValue(element.getAttribute("data-list")) || [];
    element.innerHTML = "";
    items.forEach(function (item) {
      var child = document.createElement(element.tagName.toLowerCase() === "ul" ? "li" : "span");
      child.textContent = item;
      element.appendChild(child);
    });
  });

  setText("[data-paragraphs]", function (element) {
    var paragraphs = getValue(element.getAttribute("data-paragraphs")) || [];
    element.innerHTML = "";
    paragraphs.forEach(function (paragraph) {
      var p = document.createElement("p");
      if (typeof paragraph === "string") {
        p.textContent = paragraph;
      } else {
        var text = paragraph.text || "";
        var linkText = paragraph.linkText || "";
        var linkIndex = text.indexOf(linkText);
        var wrapper = paragraph.strong ? document.createElement("strong") : document.createElement("span");
        if (paragraph.href && linkText && linkIndex >= 0) {
          wrapper.appendChild(document.createTextNode(text.slice(0, linkIndex)));
          var a = document.createElement("a");
          a.href = paragraph.href;
          a.textContent = linkText;
          a.target = "_blank";
          a.rel = "noreferrer";
          wrapper.appendChild(a);
          wrapper.appendChild(document.createTextNode(text.slice(linkIndex + linkText.length)));
        } else {
          wrapper.textContent = text;
        }
        p.appendChild(wrapper);
      }
      element.appendChild(p);
    });
  });

  setText("[data-steps]", function (element) {
    var steps = getValue(element.getAttribute("data-steps")) || [];
    element.innerHTML = "";
    steps.forEach(function (step, index) {
      var article = document.createElement("article");
      article.className = "step";
      article.innerHTML = "<span>" + String(index + 1).padStart(2, "0") + "</span><h3></h3><p></p>";
      article.querySelector("h3").textContent = step.title;
      article.querySelector("p").textContent = step.text;
      element.appendChild(article);
    });
  });

  setText("[data-offers]", function (element) {
    var offers = getValue(element.getAttribute("data-offers")) || [];
    element.innerHTML = "";
    offers.forEach(function (offer) {
      var article = document.createElement("article");
      article.className = "offer";
      article.innerHTML = "<h3></h3><p></p>";
      article.querySelector("h3").textContent = offer.title;
      article.querySelector("p").textContent = offer.text;
      element.appendChild(article);
    });
  });

  setText("[data-team]", function (element) {
    var members = getValue(element.getAttribute("data-team")) || [];
    element.innerHTML = "";
    members.forEach(function (member) {
      var article = document.createElement("article");
      article.className = "team-card";
      article.innerHTML = "<img><div><h3></h3><p></p><a>LinkedIn profile</a></div>";
      article.querySelector("img").setAttribute("src", member.image);
      article.querySelector("img").setAttribute("alt", member.name);
      article.querySelector("h3").textContent = member.name;
      article.querySelector("p").textContent = member.role;
      article.querySelector("a").setAttribute("href", member.linkedin);
      article.querySelector("a").setAttribute("target", "_blank");
      article.querySelector("a").setAttribute("rel", "noreferrer");
      element.appendChild(article);
    });
  });

  var posts = window.BLOG_POSTS || [];
  var blogSection = document.getElementById("insights");
  var blogGrid = document.getElementById("blog-posts");
  if (posts.length && blogSection && blogGrid) {
    blogSection.hidden = false;
    posts.forEach(function (post) {
      var article = document.createElement("article");
      article.className = "blog-post";
      article.innerHTML = "<p></p><h3></h3><p></p><a>Read more</a>";
      article.children[0].textContent = post.date || "";
      article.querySelector("h3").textContent = post.title;
      article.children[2].textContent = post.summary;
      article.querySelector("a").setAttribute("href", post.url);
      article.querySelector("a").setAttribute("target", "_blank");
      article.querySelector("a").setAttribute("rel", "noreferrer");
      blogGrid.appendChild(article);
    });
  }
})();
