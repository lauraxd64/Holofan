var LOOX = LOOX || {};
LOOX.root = "https://loox.io";
LOOX.clientId = "NJZy1a8oN5";
LOOX.weglotCheck = "false";
var __looxLoaded = __looxLoaded || !1,
  LOOX_OVERLAY_PREFIX = "looxOverlay";
!(function () {
  if (!__looxLoaded)
    if ("undefined" != typeof LOOX) {
      var A = LOOX.root || "";
      (__looxLoaded = !0),
        (LOOX.hash =
          "undefined" != typeof loox_global_hash
            ? loox_global_hash
            : 1e3 * Math.floor(new Date().getTime() / 1e3 / 60 / 60) * 60 * 60),
        (LOOX.isRTLDirection = function () {
          return (
            "object" == typeof Shopify &&
            ("he" === Shopify.locale || "ar" === Shopify.locale)
          );
        }),
        (LOOX.inject = f);
      var h = function (e) {
        var t =
          document.getElementById(LOOX_OVERLAY_PREFIX + (e ? "_" + e : "")) ||
          document.getElementById(LOOX_OVERLAY_PREFIX + "_quickview");
        t && t.parentNode.removeChild(t),
          0 == document.getElementsByClassName("loox-overlay").length &&
            ((document.body.style.overflow = ""),
            (document.body.style.position = "")),
          LOOX.lastActiveEl &&
            (LOOX.lastActiveEl.focus && LOOX.lastActiveEl.focus(),
            (LOOX.lastActiveEl = null));
      };
      (window.onpopstate = h),
        (LOOX.closeModal = h),
        (window.looxWrite = function (e) {
          d({
            origin: "https://loox.io",
            data: { type: "write", productId: e },
          });
        }),
        (LOOX.openQV = function (e, t) {
          var o = A + "/post/quickview/" + e;
          (o += "?p=" + (LOOX.productId || "")),
            LOOX.system && (o += "&l=" + LOOX.system),
            LOOX.version && (o += "&ver=" + LOOX.version),
            LOOX.hash && (o += "&h=" + LOOX.hash),
            (t = t || LOOX.ref) && (o += "&ref=" + t),
            f(o, "quickview", "99vh", {
              width: "100%",
              hash: "#qv" + e,
              overlay: !0,
              marginTop: LOOX.fbScrollTop ? LOOX.fbScrollTop + "px" : "0",
              overlayColor: "rgba(0, 0, 0, 0.7)",
            }),
            (function (e, t, o) {
              if (t) {
                var i = t.getItem(e);
                -1 < (i = i ? i.split(",") : []).indexOf(o) ||
                  (i.push(o), t.setItem(e, i.join(",")));
              }
            })("qv", sessionStorage, e);
        });
      var e = /lx_ver=([0-9A-Za-z_\-|.]+)/gi.exec(
        decodeURIComponent(window.location.search)
      );
      e && 0 < e.length && (LOOX.version = e[1]),
        "undefined" != typeof ShopifyAnalytics &&
          ShopifyAnalytics.meta &&
          ShopifyAnalytics.meta.product &&
          (LOOX.productId = ShopifyAnalytics.meta.product.id),
        window.addEventListener
          ? addEventListener("message", d, !1)
          : attachEvent("onmessage", d),
        (LOOX.domReady = function e(t) {
          return /in/.test(document.readyState) ? setTimeout(e, 9, t) : t();
        }),
        LOOX.domReady(function () {
          var e = decodeURIComponent(window.location.search),
            t = /^\?lx=([0-9A-Za-z_\-|.]+)/gi.exec(e);
          if (t && 0 < t.length) {
            var o = A + "/widget/" + LOOX.clientId + "/dialog/" + t[1];
            LOOX.system && (o += "?l=" + LOOX.system),
              f(o, "looxDialog", "600px", { overlay: !0 });
          }
          var i = /^\?lx_ep=([0-9A-Za-z_\-|.]+)/gi.exec(e);
          i &&
            0 < i.length &&
            f(
              A + "/widget/" + LOOX.clientId + "/add-photo/" + i[1],
              "looxEdit",
              "600px",
              { overlay: !0 }
            );
          var n = /(?:\?|&)qv=([0-9A-Za-z_\-]+)/gi.exec(e);
          n &&
            0 < n.length &&
            d({
              origin: "https://loox.io",
              data: { type: "quickview", postId: n[1] },
            }),
            /(?:\?|&)ref=review/gi.test(e) &&
              d({ origin: "https://loox.io", data: { type: "write" } });
          var a =
            "disabled" !== LOOX.client_ga &&
            document.querySelector("a[href='#looxReviews']");
          a &&
            a.addEventListener("click", function (e) {
              d({
                origin: "https://loox.io",
                data: {
                  type: "report",
                  eventCategory: "Loox - Widget Interactions",
                  eventAction: "Loox star rating clicked",
                },
              });
            });
          var r =
            "disabled" !== LOOX.client_ga &&
            document.querySelector(".loox-float-toggler-container");
          r &&
            r.addEventListener("click", function (e) {
              d({
                origin: "https://loox.io",
                data: {
                  type: "report",
                  eventCategory: "Loox - Widget Interactions",
                  eventAction: "Loox Sidebar widget clicked",
                },
              });
            });
        });
    } else console.error("Loox object is not defined");
  function f(e, t, o, i) {
    (LOOX.lastActiveEl = document.activeElement), (i = i || {});
    var n = document.body,
      a = document.createElement("div"),
      r = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (
      ((e += (e.match(/[\?]/g) ? "&" : "?") + "frame_id=" + t),
      (a.id = LOOX_OVERLAY_PREFIX + "_" + t),
      a.classList.add("loox-overlay"),
      (a.style.cssText =
        "width: 100%;height:100%; position:fixed; font-family: Arial, Helvetica, sans-serif;top: 0;right: 0;bottom: 0;left: 0;z-index: 9999999999;opacity: 1;-webkit-transition: opacity 400ms ease-in;-moz-transition: opacity 400ms ease-in;transition: opacity 400ms ease-in;overflow-y:scroll;-webkit-overflow-scrolling: touch;"),
      i && i.overlay)
    )
      var d = i.overlayColor || "rgba(238, 238, 238, 0.9)";
    a.style.cssText += "background: " + d;
    var l,
      s,
      c,
      p = i.marginTop || (600 < window.innerWidth ? "10%" : 0);
    if (
      ((a.innerHTML =
        '<div style="position:relative;min-height:' +
        (r ? "101%" : "100%") +
        ";" +
        (i.width ? "max-width:" + i.width : "max-width:900px") +
        ";margin: " +
        p +
        ' auto 0;">' +
        ('<iframe id="' +
          t +
          '" src="' +
          e +
          '" height="' +
          (l = o) +
          '" width="' +
          (s = "100%") +
          '" frameborder="0" scrolling="no" margin="0" style="overflow:hidden;height:' +
          l +
          ";width:1px;min-width:" +
          s +
          ";" +
          ((c = { "min-height": "600px", overflow: "auto" })
            ? Object.keys(c)
                .map(function (e) {
                  return e + ": " + c[e];
                })
                .join(";")
            : "") +
          '" allowfullscreen="true"></iframe>') +
        "</div>"),
      i && i.close_btn)
    ) {
      var u = document.createElement("div");
      (u.id = "modalclose"),
        (u.style.cssText =
          "color:#424242; line-height:24px; position:absolute; right:20px; text-align:center; top:20px; width:24px; text-decoration:none; font-weight:bold; cursor:pointer; font-size:44px;"),
        (u.innerHTML = "&times;"),
        a.children[0].appendChild(u);
      var g = function (e) {
        if ((e && e.stopPropagation(), history))
          try {
            return history.pushState(
              "",
              document.title,
              window.location.pathname + window.location.search
            );
          } catch (e) {}
        h();
      };
      (u.onclick = g), (a.onclick = g);
    }
    if (
      !/iPhone\sOS\s14/.test(navigator.userAgent) &&
      window.history &&
      window.history.pushState
    ) {
      try {
        history.pushState({ url: e }, "", i.hash || "#qv");
      } catch (e) {}
      n.style.overflow = "hidden";
    } else window.location.hash = (i && i.hash) || "#qv";
    n.appendChild(a);
  }
  function m(e, t, o) {
    var i = document.getElementById(e);
    i &&
      t &&
      Object.keys(t).forEach(function (e) {
        (i.style[e] = t[e]), o && (i.parentNode.style[e] = t[e]);
      });
  }
  function v(e, t) {
    var o = document.getElementById(LOOX_OVERLAY_PREFIX + "_" + e);
    o && (o.style.background = t);
  }
  function d(e) {
    if ("https://loox.io" != A || "https://loox.io" == e.origin) {
      var o =
        "string" == typeof e.data && 0 === e.data.indexOf("{")
          ? JSON.parse(e.data)
          : e.data;
      if ("resize" == o.type) {
        var t = document.getElementById(o.frame);
        if (t) {
          m(o.frame, o.cssProps, o.applyAlsoToParentNode),
            v(o.frame, o.overlayColor);
          var i = (o.height + "px").replace("vhpx", "vh").replace("%px", "%"),
            n = (o.minHeight + "px").replace("vhpx", "vh").replace("%px", "%");
          (t.height = i),
            (t.style.height = i),
            (t.parentNode.style.height = i),
            n &&
              ((t.minHeight = n),
              (t.style.minHeight = n),
              (t.parentNode.style.minHeight = n));
        }
      }
      if ("report" != o.type) {
        if ("scroll_to_view" == o.type) {
          var a = document.getElementById("looxReviews");
          a && window.scrollTo(0, a.offsetTop);
        }
        if (
          ("closeModal" == o.type &&
            ("srcdoc" !== window.location.pathname && history.back(),
            h(o.frame)),
          "looxFbPixel" === o.type && o.track)
        )
          return (
            window.fbq ||
              ((r = o.FBPixelId),
              (d = window),
              (l = document),
              (s = "script"),
              d.fbq ||
                ((c = d.fbq =
                  function () {
                    c.callMethod
                      ? c.callMethod.apply(c, arguments)
                      : c.queue.push(arguments);
                  }),
                d._fbq || (d._fbq = c),
                ((c.push = c).loaded = !0),
                (c.version = "2.0"),
                (c.queue = []),
                ((p = l.createElement(s)).async = !0),
                (p.src = "https://connect.facebook.net/en_US/fbevents.js"),
                (u = l.getElementsByTagName(s)[0]).parentNode.insertBefore(
                  p,
                  u
                )),
              window.fbq("init", r)),
            window.fbq("track", o.track)
          );
        var r, d, l, s, c, p, u;
        if (
          ("write" == o.type &&
            (function () {
              var e = o.productId || LOOX.productId;
              if (!e)
                return console.error(
                  "Cannot open write dialog, productId is not defined"
                );
              var t = A + "/widget/" + LOOX.clientId + "/write/" + e;
              LOOX.system && (t += "?l=" + LOOX.system),
                f(t, "looxDialog", "600px", { overlay: !0 }),
                scrollTo(0, 0);
            })(),
          "setSystem" == o.type && (LOOX.system = o.system),
          "quickview" === o.type && LOOX.openQV(o.postId, o.ref || null),
          "hc-floater" === o.type && LOOX.openHCFloater(o.productId),
          "set-ref-interaction" === o.type)
        ) {
          var g = sessionStorage;
          if (!g || null !== g.getItem("lxsrc")) return;
          g.setItem("lxsrc", JSON.stringify({ ref: o.ref }));
        }
        "setStyle" == o.type &&
          (m(o.frame, o.cssProps, o.applyAlsoToParentNode),
          v(o.frame, o.overlayColor));
      } else
        "undefined" != typeof ga &&
          ga("send", {
            hitType: "event",
            eventCategory: o.eventCategory,
            eventAction: o.eventAction,
            eventLabel: o.eventLabel,
          });
    }
  }
})(),
  (LOOX.ajax = ajax = {}),
  (ajax.x = function () {
    if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest();
    for (
      var e,
        t = [
          "MSXML2.XmlHttp.6.0",
          "MSXML2.XmlHttp.5.0",
          "MSXML2.XmlHttp.4.0",
          "MSXML2.XmlHttp.3.0",
          "MSXML2.XmlHttp.2.0",
          "Microsoft.XmlHttp",
        ],
        o = 0;
      o < t.length;
      o++
    )
      try {
        e = new ActiveXObject(t[o]);
        break;
      } catch (e) {}
    return e;
  }),
  (ajax.send = function (e, t, o, i, n) {
    void 0 === n && (n = !0);
    var a = ajax.x();
    a.open(o, e, n),
      (a.onreadystatechange = function () {
        if (4 == a.readyState)
          try {
            return t(JSON.parse(a.responseText));
          } catch (e) {
            return t(a.responseText);
          }
      }),
      "POST" == o &&
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      a.send(i);
  }),
  (ajax.get = function (e, t, o, i) {
    var n = [];
    for (var a in t)
      n.push(encodeURIComponent(a) + "=" + encodeURIComponent(t[a]));
    ajax.send(e + (n.length ? "?" + n.join("&") : ""), o, "GET", null, i);
  }),
  (ajax.post = function (e, t, o, i) {
    var n = [];
    for (var a in t)
      n.push(encodeURIComponent(a) + "=" + encodeURIComponent(t[a]));
    ajax.send(e, o, "POST", n.join("&"), i);
  }),
  (function () {
    var p = document.getElementsByClassName("loox-rating");
    !(function () {
      if (!LOOX.iconFontLoaded) {
        LOOX.iconFontLoaded = !0;
        var e =
            "@font-face {font-family: 'LooxIcons'; src: url('data:application/octet-stream;base64,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') format('woff'); font-weight: normal; font-style: normal;}.loox-icon {display: inline-block; font: normal normal normal 14px/1 LooxIcons; font-size: inherit; text-rendering: auto; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}i.loox-icon {font-family:LooxIcons !important; }.loox-star:before {content: '\\e800' !important;}.loox-star-o:before {content: '\\e801' !important;}.loox-star-half-o:before {content: '\\f123' !important;}.loox-caret:before {content: '\\e802' !important;}a[href='#looxReviews'] { text-decoration:none; color: inherit;}.rtl.loox-rating { display: flex; flex-direction: row-reverse; justify-content: flex-end; align-items: center; }.rtl.loox-rating > span { order: -1; padding-right: 5px; }",
          t = document.createElement("style");
        t.styleSheet
          ? (t.styleSheet.cssText = e)
          : t.appendChild(document.createTextNode(e)),
          (
            document.head || document.getElementsByTagName("head")[0]
          ).appendChild(t);
      }
    })();
    var u = {},
      g = !0,
      A = LOOX.isRTLDirection && LOOX.isRTLDirection(),
      e = function () {
        for (var r = {}, e = 0; e < p.length; e++) {
          var t = p[e];
          if (
            (A && t.classList.add("rtl"),
            !t.getAttribute("data-rating-upgraded"))
          ) {
            var o = t.getAttribute("data-id");
            u[o] &&
              (t.setAttribute("data-rating", u[o].rating),
              t.setAttribute("data-raters", u[o].raters));
            var i = Number(t.getAttribute("data-rating"));
            if (i && !isNaN(i)) {
              for (var n = Math.ceil(2 * i) / 2, a = "", d = 1; d <= 5; d++) {
                a +=
                  "<i class='loox-icon " +
                  (d <= n
                    ? "loox-star"
                    : d <= n + 0.5
                    ? "loox-star-half-o"
                    : "loox-star-o") +
                  "'></i>";
              }
              var l = Number(t.getAttribute("data-raters"));
              if (l && !isNaN(l)) {
                (l = l.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")),
                  (i = i.toFixed(1));
                var s = t.getAttribute("data-pattern");
                (a += s
                  ? "&nbsp;<span>" +
                    s.replace(/\[count\]/gi, l).replace(/\[rating\]/gi, i) +
                    "</span>"
                  : "&nbsp;<span>(" + l + ")</span>"),
                  t.setAttribute("title", i + " rating (" + l + " votes)"),
                  t.setAttribute("aria-label", i + " rating (" + l + " votes)");
              }
              t.setAttribute("data-rating-upgraded", 1), (t.innerHTML = a);
            } else
              o &&
                null != t.getAttribute("data-fetch") &&
                (r[o] || (r[o] = []),
                r[o].push(t),
                t.removeAttribute("data-fetch"));
          }
        }
        var c = Object.keys(r);
        0 < c.length &&
          g &&
          LOOX.ajax.get(
            LOOX.root + "/widget/" + LOOX.clientId + "/ratings",
            { products_ids: c.join(","), h: LOOX.hash },
            function (e) {
              if (e.success) {
                if (typeof [] == typeof e.ratings && 0 < e.ratings.length)
                  for (var t = 0; t < e.ratings.length; t++) {
                    var o = e.ratings[t];
                    u[o.pid] = { rating: o.rating, raters: o.raters };
                    for (var i = r[o.pid] || [], n = 0; n < i.length; n++) {
                      var a = i[n];
                      a.setAttribute("data-rating", o.rating),
                        a.setAttribute("data-raters", o.raters);
                    }
                  }
              } else g = !1;
            }
          );
      };
    setInterval(e, 500), e();
  })(),
  (function () {
    var m = LOOX.root || "";
    if (!LOOX.widgetRunOnce) {
      LOOX.widgetRunOnce = !0;
      var e = document.createElement("style"),
        t =
          '#looxReviews, #looxCarousel {float:none;clear:both;}#looxReviews:before, #looxReviews:after, #looxCarousel:before, #looxCarousel:after {content:" ";visibility:hidden;display:block;height:0;clear:both;}';
      e.styleSheet
        ? (e.styleSheet.cssText = t)
        : e.appendChild(document.createTextNode(t)),
        (document.head || document.getElementsByTagName("head")[0]).appendChild(
          e
        );
      var o = function () {
        var e = document.getElementById("looxReviews");
        if (e && !e.getAttribute("data-upgraded")) {
          e.setAttribute("data-upgraded", "true");
          var t = e.parentNode.childNodes[0];
          if (t && /columns/gi.test(t.className)) {
            var o = document.createElement("div");
            (o.className = "clearfix"), e.parentNode.insertBefore(o, e);
          }
          if (
            ((LOOX.productId = e.getAttribute("data-product-id")),
            "{{product.id}}" == LOOX.productId)
          )
            return console.error(
              'LOOX reviews - product id is set to "{{ product.id }}" which is not a real product Id, the loox widget cannot be injected using settings or be placed inside a {% raw %} directive'
            );
          var i = m + "/widget/" + LOOX.clientId + "/reviews",
            n = [];
          null != e.getAttribute("data-loox-aggregate") && LOOX.productId
            ? n.push("productId=" + LOOX.productId)
            : LOOX.productId && (i += "/" + LOOX.productId),
            LOOX.hash && n.push("h=" + LOOX.hash),
            LOOX.system && n.push("l=" + LOOX.system),
            LOOX.version && n.push("ver=" + LOOX.version);
          var a = e.getAttribute("data-mode");
          a && n.push("mode=" + a);
          var r = e.getAttribute("data-or-productIds");
          r && n.push("productIds=" + r);
          var d = e.getAttribute("data-tags");
          d && "" !== d && n.push("tags=" + d);
          var l = e.getAttribute("data-limit");
          l && n.push("limit=" + l);
          var s = e.getAttribute("data-limit-mobile");
          s && window.innerWidth < 720 && n.push("limit=" + s);
          var c = e.getAttribute("data-paging");
          c && n.push("paging=" + c);
          var p = e.getAttribute("data-header");
          p && n.push("header=" + p);
          var u = e.getAttribute("data-write-btn");
          u && n.push("write_btn=" + u);
          var g = e.getAttribute("data-visibility");
          g && n.push("visibility=" + g);
          var A = e.getAttribute("data-product-thumbnails");
          A && n.push("thumbnails=" + A);
          var h = e.getAttribute("data-view");
          h && n.push("view=" + encodeURIComponent(h));
          var f = e.getAttribute("data-variant");
          f && n.push("variant=" + f), 0 < n.length && (i += "?" + n.join("&"));
          e.style.cssText || (e.style.margin = "0 auto;");
          e.innerHTML =
            '<iframe id="looxReviewsFrame" title="Reviews" src="' +
            i +
            '" height="0" width="100%" frameborder="0" scrolling="no" margin="0" style="overflow:hidden;height:0;width:100%;"></iframe>';
        }
      };
      o(), setInterval(o, 1e3);
    }
  })(),
  (function (n) {
    n &&
      !n.pop_widget &&
      "undefined" != typeof loox_pop_active &&
      ((n.pop_widget = {
        active: loox_pop_active,
        display_filter:
          "undefined" != typeof loox_pop_display ? loox_pop_display : null,
      }),
      n.pop_widget.active &&
        (function () {
          if (!n.pop_widget.display_filter) return !0;
          var e = window.location.pathname;
          return "/" === e
            ? n.pop_widget.display_filter.home_page
            : 0 === e.indexOf("/cart")
            ? n.pop_widget.display_filter.cart_page
            : n.productId
            ? n.pop_widget.display_filter.product_page
            : n.pop_widget.display_filter.other_pages;
        })() &&
        (function (o) {
          var i = [];
          if (0 !== window.location.pathname.indexOf("/cart") || !n.ajax)
            return n.productId && i.push(n.productId), o(i);
          n.ajax.get(
            "//" + window.location.hostname + "/cart.json",
            {},
            function (e) {
              if (e && e.items)
                for (var t = 0; t < e.items.length; t++)
                  i.push(e.items[t].product_id);
              return o(i);
            }
          );
        })(function (e) {
          var t = n.root + "/widget/" + n.clientId + "/pop-notification.js",
            o = [];
          o.push("h=" + n.hash),
            0 < e.length &&
              (o.push("productIds=" + e.join(",")),
              (n.pop_widget.hide_product = !0)),
            0 < o.length && (t += "?" + o.join("&"));
          var i = document.createElement("script");
          if (((i.async = 1), (i.src = t), document.body))
            return document.body.appendChild(i);
          n.domReady(function () {
            document.body.appendChild(i);
          });
        }));
  })(LOOX || {}),
  (LOOX.openHCFloater = function (e) {
    if (LOOX.root && LOOX.clientId) {
      var t = [];
      e && (t.push("productIds=" + e), t.push("thumbnails=false")),
        t.push("h=" + LOOX.hash);
      var o = LOOX.root + "/widget/" + LOOX.clientId + "/reviews";
      0 < t.length && (o += "?" + t.join("&")),
        LOOX.inject(o, "looxModalFrame", "100%", {
          overlay: !0,
          marginTop: "0px",
        });
    }
  }),
  (LOOX.isMobile = function () {
    return (window.innerWidth || document.documentElement.clientWidth) < 720;
  }),
  (function (o) {
    if (o && !o.floating_container && o.clientId) {
      o.floating_container = !0;
      var e = [];
      if (
        ("undefined" != typeof loox_floating_widget &&
          e.push(loox_floating_widget),
        "undefined" != typeof visitor_level_referral &&
          e.push(visitor_level_referral),
        0 !==
          (e = e.filter(function (e) {
            var t = window.location.pathname;
            return "/" === t
              ? e.display_on_home_page
              : 0 === t.indexOf("/cart")
              ? e.display_on_cart_page
              : o.productId
              ? e.display_on_product_page
              : e.display_on_other_pages;
          })).length)
      ) {
        var t =
          ".loox-float-toggler-container { width: 0; position: fixed; z-index: 9999; top: 50%; display: flex; justify-content: center; transition-duration: 0.4s; transition-timing-function: cubic-bezier(1, 0, 0, 1); } .loox-float-toggler-container-right { right: 0; transform: rotate(90deg) translate(50%, 50%); } .loox-float-toggler-container-left { left: 0; transform: rotate(270deg) translate(-50%, 0); transform-origin: top;} .loox-float-toggler-container .loox-float-toggler { padding: 10px 20px 15px 20px; font-size: 18px; line-height: 1; cursor: pointer; position: relative; transition-duration: 0.4s; transition-timing-function: cubic-bezier(1, 0, 0, 1); width: auto; white-space: nowrap; border-radius: 0 0 15px 15px; margin: 0 8px 0px 8px; } .loox-float-toggler:hover, .loox-float-toggler:focus { color: initial; }";
        e.some(function (e) {
          return e.rtl;
        }) && (t += ".loox-float-toggler {direction:rtl;}");
        var i = document.createElement("style");
        i.styleSheet
          ? (i.styleSheet.cssText = t)
          : i.appendChild(document.createTextNode(t)),
          (
            document.head || document.getElementsByTagName("head")[0]
          ).appendChild(i);
        var n = e.map(function (e) {
          return e.position;
        });
        new Set(n).forEach(function (e) {
          var t = document.createElement("div");
          t.classList.add("loox-float-toggler-container"),
            t.classList.add("loox-float-toggler-container-" + e),
            o.domReady(function () {
              document.body.appendChild(t);
            });
        });
      }
    }
  })(LOOX || {}),
  (function (o) {
    if (
      o &&
      !o.floating_widget &&
      "undefined" != typeof loox_floating_widget &&
      ((o.floating_widget = loox_floating_widget),
      o.floating_widget.active &&
        (!o.floating_widget.hide_on_mobile || !o.isMobile()) &&
        ("/" === (e = window.location.pathname)
          ? o.floating_widget.display_on_home_page
          : 0 === e.indexOf("/cart")
          ? o.floating_widget.display_on_cart_page
          : o.productId
          ? o.floating_widget.display_on_product_page
          : o.floating_widget.display_on_other_pages))
    ) {
      var e,
        t = document.createElement("div");
      (t.innerHTML =
        '<i class="loox-icon loox-star"></i> ' + o.floating_widget.button_text),
        t.classList.add("loox-float-toggler"),
        t.setAttribute("tabindex", "0"),
        t.setAttribute("role", "button"),
        (t.style.backgroundColor =
          "#" + (o.floating_widget.button_bg_color || "333")),
        (t.style.color = "#" + (o.floating_widget.button_text_color || "fff")),
        t.addEventListener("keypress", function (e) {
          if ("Enter" === e.code || "Space" === e.code) {
            var t = window.location.pathname;
            o.openHCFloater(
              -1 !== t.indexOf("/products/") ? o.productId : null
            );
          }
        }),
        t.addEventListener("click", function () {
          var e = window.location.pathname;
          o.openHCFloater(-1 !== e.indexOf("/products/") ? o.productId : null);
        }),
        o.domReady(function () {
          setTimeout(function () {
            var e = document.querySelector(
              ".loox-float-toggler-container-" + o.floating_widget.position
            );
            e && e.appendChild(t);
          }, 1500);
        });
    }
  })(LOOX || {}),
  (function (h) {
    var e = function () {
      var e = document.getElementById("looxCarousel");
      if (e && 0 != e.length && !e.getAttribute("data-caraousel-loaded")) {
        e.setAttribute("data-caraousel-loaded", "true");
        var t = (h.root || "") + "/widget/" + h.clientId + "/carousel",
          o = "looxCarouselFrame",
          i = [];
        i.push("frame_id=" + o), i.push("h=" + h.hash);
        var n = e.getAttribute("data-show-more") || null;
        null != n && i.push("show_more_btn=" + encodeURIComponent(n));
        var a = e.getAttribute("data-max-width") || null;
        null != a && i.push("max_width=" + encodeURIComponent(a));
        var r = e.getAttribute("data-arrows-color") || null;
        null != r && i.push("arrows_color=" + encodeURIComponent(r));
        var d = e.getAttribute("data-dots-color") || null;
        null != d && i.push("dots_color=" + encodeURIComponent(d));
        var l = e.getAttribute("data-button-color") || null;
        null != l && i.push("button_color=" + encodeURIComponent(l));
        var s = e.getAttribute("data-text-color") || null;
        null != s && i.push("text_color=" + encodeURIComponent(s));
        var c = e.getAttribute("data-background-color") || null;
        null != c && i.push("background_color=" + encodeURIComponent(c));
        var p = e.getAttribute("data-product-ids") || null;
        null != p && i.push("productIds=" + encodeURIComponent(p));
        var u = e.getAttribute("data-mode") || null;
        null != u && i.push("mode=" + encodeURIComponent(u));
        var g = e.getAttribute("data-use-widget-font") || null;
        null != g && i.push("use_widget_font=" + encodeURIComponent(g)),
          "object" == typeof Shopify &&
            Shopify.designMode &&
            i.push("shopify_editor_preview=true"),
          0 < i.length && (t += "?" + i.join("&"));
        var A = document.createElement("iframe");
        (A.id = o),
          (A.src = t),
          (A.height = "0"),
          (A.width = "100%"),
          (A.scrolling = "no"),
          A.setAttribute(
            "style",
            "display:block;border:0;overflow:hidden;height:0;width:100%;"
          ),
          e.appendChild(A);
      }
    };
    e(), setInterval(e, 1e3);
  })(LOOX || {});
var __loox_once = __loox_once || !1;
!(function () {
  function r(e, t, o) {
    var i = "";
    if (o) {
      var n = new Date();
      n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3),
        (i = "; expires=" + n.toUTCString());
    }
    document.cookie = e + "=" + (t || "") + i + "; path=/";
  }
  __loox_once ||
    ((__loox_once = !0),
    LOOX.domReady(function () {
      var e = window.location.search;
      if (e && -1 !== e.indexOf("ref=loox")) {
        var t = sessionStorage;
        if (t && null === t.getItem("lxsrc")) {
          e = e.substring(1).split("&");
          for (var o = {}, i = 0; i < e.length; i++) {
            var n = e[i].split("=");
            if (
              ("ref" === n[0] && (o.ref = n[1]),
              "ref_source" === n[0] && (o.source = n[1]),
              "post_id" === n[0] && (o.post_id = n[1]),
              "lx_ad" === n[0])
            ) {
              var a = "LX" + n[1].toUpperCase();
              r("discount_code", a), (o.code = a);
            }
          }
          t.setItem("lxsrc", JSON.stringify(o));
        }
      }
    }),
    LOOX.domReady(function () {
      var e = sessionStorage;
      if (e) {
        var t = e.getItem("lxsrc"),
          o = e.getItem("qv");
        if (o || t)
          if (
            ((t = (t && JSON.parse(t)) || {}),
            0 !== window.location.pathname.indexOf("/cart"))
          ) {
            if (
              "object" == typeof Shopify &&
              Shopify.checkout &&
              Shopify.Checkout &&
              "thank_you" === Shopify.Checkout.page
            ) {
              var i = [
                "c=" + LOOX.clientId,
                "o=" + Shopify.checkout.order_id,
                "t=" + Shopify.checkout.token,
              ];
              o && 0 < o.length && i.push("qv=" + o),
                t.ref && i.push("ref=" + t.ref),
                t.source && i.push("ref_source=" + t.source),
                t.post_id && i.push("post_id=" + t.post_id),
                e.removeItem("qv"),
                e.removeItem("lxsrc");
              var n = document.createElement("img");
              (n.src =
                ["//pixel.loox.io", "track", "order"].join("/") +
                "?" +
                i.join("&")),
                n.setAttribute(
                  "style",
                  "display:none;border:0;overflow:hidden;height:1px;width:1px;"
                ),
                document.body.appendChild(n);
            }
          } else {
            var a = document.querySelector("form[action='/cart']");
            a && t.code && a.setAttribute("action", "/cart?discount=" + t.code);
          }
      }
    }),
    LOOX.domReady(function () {
      if ("object" == typeof Weglot) {
        var t = document.getElementById("looxReviewsFrame");
        if (t && t.contentWindow && "true" !== (LOOX || {}).weglotCheck) {
          var e = function (e) {
            t.contentWindow.postMessage(
              JSON.stringify({ weglotlangchange: e }),
              "*"
            );
          };
          Weglot.on("switchersReady", e), Weglot.on("languageChanged", e);
        }
      }
    }));
})(),
  (LOOX.initLooxCarouselV2 = function (e) {
    e = e || { detail: {} };
    var t = document.querySelectorAll(".loox-v2-carousel-container"),
      d = LOOX.root + "/widget/" + LOOX.clientId + "/v2/carousel";
    [].forEach.call(t, function (o) {
      var n = d + "?";
      if (o) {
        o.dataset.widgetLoaded = "true";
        var e = o.getAttribute("id");
        if (e) {
          o.style.width = "100%";
          var t = function (e, t) {
              return o.getAttribute("data-" + e) || t;
            },
            i = t("preview", "no"),
            a = o.querySelector("iframe");
          a || (a = document.createElement("iframe"));
          var r = {
            slideType: t("slide-type"),
            maxWidth: t("max-width"),
            borderRadius: t("border-radius"),
            itemsPerView: t("items-per-view"),
            imageRatio: t("image-ratio"),
            maxNumberOfCharacters: t("max-number-of-characters"),
            reviewerNameColor: t("reviewer-name-color"),
            textColor: t("text-color"),
            itemBackgroundColor: t("item-background-color"),
            starsColor: t("stars-color"),
            starsBackgroundColor: t("stars-background-color"),
            arrows: {
              backgroundColor: t("arrows_background-color"),
              iconColor: t("arrows_icon-color"),
              hideOnMobile: t("arrows_hide-on-mobile", "yes"),
            },
            shadow: t("shadow"),
            border: {
              active: t("border_active", "no"),
              width: t("border_width"),
              color: t("border_color"),
            },
            pagination: {
              active: t("pagination_active", "no"),
              dotColor: t("pagination_dot-color"),
              selectedDotColor: t("pagination_selected-dot-color"),
            },
            autoplay: {
              active: t("autoplay_active", "no"),
              duration: t("autoplay_duration"),
            },
            quoteMarkIcon: t("quote-mark-icon"),
            quotesIconColor: t("quotes-icon-color"),
            productIds: t("product-ids"),
            frameId: e,
            h: LOOX.hash,
            preview: i,
            customerLocale: t("customer-locale"),
          };
          Object.keys(r).forEach(function (o) {
            var i = r[o];
            i &&
              ("object" == typeof i
                ? Object.keys(i).forEach(function (e) {
                    var t = i[e];
                    t && (n += o + "[" + e + "]=" + encodeURI(t) + "&");
                  })
                : (n += o + "=" + encodeURI(i) + "&"));
          }),
            (n = n.slice(0, -1)),
            a.dataset.lastChange !== JSON.stringify(r) &&
              ((a.src = n),
              (a.width = "100%"),
              (a.height = "100%"),
              (a.id = e + "_FRAME"),
              (a.dataset.lastChange = JSON.stringify(r)),
              a.setAttribute(
                "style",
                "display:block;border:0;overflow:hidden;height:100%;width:100%;"
              ),
              o.appendChild(a));
        } else console.log("Loox V2 Carousel- missing container ID");
      }
    });
  }),
  LOOX.v2CarouselEventsRegistered ||
    (LOOX.domReady(LOOX.initLooxCarouselV2),
    (LOOX.v2CarouselEventsRegistered = !0)),
  (function () {
    if (
      LOOX &&
      "object" == typeof Shopify &&
      Shopify.designMode &&
      (Shopify.theme || {}).id &&
      !Shopify.checkout
    ) {
      var e = document.createElement("script");
      (e.type = "text/javascript"),
        (e.async = !0),
        (e.src =
          LOOX.root +
          "/shopify-editor/" +
          LOOX.clientId +
          "/loader?design_theme_id=" +
          Shopify.theme.id);
      var t = document.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(e, t);
    }
  })();
(LOOX.openVisitorLevelReferralModal = function () {
  if (LOOX.root && LOOX.clientId) {
    var e = [];
    e.push("h=" + LOOX.hash);
    var t = LOOX.root + "/referrals/" + LOOX.clientId + "/visitor";
    0 < e.length && (t += "?" + e.join("&")),
      LOOX.inject(t, "looxModalFrame", "99vh", {
        width: "100%",
        overlay: !0,
        marginTop: "0px",
        overlayColor: "rgba(0, 0, 0, 0.7)",
      });
  }
}),
  (LOOX.initReferralEntryFormWidget = function (l) {
    l = void 0 !== l && l;
    var e = document.querySelectorAll(".loox-referrals-entry-form"),
      a = LOOX.root + "/referrals/" + LOOX.clientId + "/visitor/page";
    [].forEach.call(e, function (e) {
      var t = a + "?";
      if (e && (!e.dataset.widgetLoaded || l)) {
        e.dataset.widgetLoaded = "true";
        var r = e.querySelector("iframe") || document.createElement("iframe"),
          o = e.getAttribute("id");
        if (o) {
          e.style.width = "100%";
          var i = {
            layout: e.getAttribute("data-layout"),
            photo: e.getAttribute("data-photo"),
            preview: e.getAttribute("data-preview") || "no",
            max_width: e.getAttribute("data-max-width"),
            primary_color: e.getAttribute("data-primary-color"),
            text_color: e.getAttribute("data-text-color"),
            text_field_border_color: e.getAttribute(
              "data-text-field-border-color"
            ),
            background: e.getAttribute("data-background"),
            container_id: o,
            h: LOOX.hash,
          };
          Object.keys(i).forEach(function (e) {
            i[e] && (t += e + "=" + encodeURI(i[e]) + "&");
          }),
            (t = t.slice(0, -1)),
            (r.src = t),
            (r.width = "100%"),
            (r.height = "100%"),
            (r.id = o + "_FRAME"),
            r.setAttribute(
              "style",
              "display:block;border:0;overflow:hidden;height:100%;width:100%;"
            ),
            e.appendChild(r);
        } else console.log("Loox - Referrals entry form missing ID");
      }
    });
  }),
  (function (t) {
    var e;
    if (
      (t.domReady(t.initReferralEntryFormWidget),
      t &&
        !t.visitor_level_referral &&
        "undefined" != typeof visitor_level_referral) &&
      ((t.visitor_level_referral = visitor_level_referral),
      (e = window.location.pathname),
      !1 !== t.visitor_level_referral.sidebar_visible &&
        ("/" === e
          ? t.visitor_level_referral.display_on_home_page
          : 0 === e.indexOf("/cart")
          ? t.visitor_level_referral.display_on_cart_page
          : t.productId
          ? t.visitor_level_referral.display_on_product_page
          : t.visitor_level_referral.display_on_other_pages) &&
        (!t.visitor_level_referral.hide_on_mobile || !t.isMobile()))
    ) {
      var r = document.createElement("div");
      (r.innerHTML = t.visitor_level_referral.button_text),
        r.classList.add("loox-float-toggler"),
        r.setAttribute("tabindex", "0"),
        r.setAttribute("role", "button"),
        (r.style.backgroundColor =
          "#" + (t.visitor_level_referral.button_bg_color || "333")),
        (r.style.color =
          "#" + (t.visitor_level_referral.button_text_color || "fff")),
        r.addEventListener("keypress", function (e) {
          ("Enter" !== e.code && "Space" !== e.code) ||
            t.openVisitorLevelReferralModal();
        }),
        r.addEventListener("click", function () {
          t.openVisitorLevelReferralModal();
        }),
        t.domReady(function () {
          setTimeout(function () {
            var e = document.querySelector(
              ".loox-float-toggler-container-" +
                t.visitor_level_referral.position
            );
            e &&
              (0 === e.childNodes.length
                ? e.appendChild(r)
                : e.insertBefore(r, e.childNodes[0]));
          }, 1500);
        });
    }
  })(LOOX || {});
"object" == typeof Shopify &&
  Shopify.checkout &&
  Shopify.Checkout &&
  LOOX.domReady(function () {
    var e = document.createElement("script");
    (e.type = "text/javascript"),
      (e.async = !0),
      (e.src =
        LOOX.root +
        "/referrals/" +
        LOOX.clientId +
        "/loader?locale=" +
        (Shopify.checkout.customer_locale || ""));
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t);
  });
