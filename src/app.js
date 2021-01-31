// File: app.js

!(function () {
  ///////////////////////////
  //// HELPER FUNCTIONS
  ///////////////////////////

  /**
   * [Checks if the depth of the delimiter is not more than 1]
   * @param  {[type]} template  [description]
   * @param  {[type]} delimiter [description]
   * @return {[type]}           [description]
   */
  function invalid_delimiter_scope(template, delimiter) {
    var tail = delimiter.slice(0, delimiter.length / 2),
      head = delimiter.slice(delimiter.length / 2, delimiter.length);

    i = 0;
    prev = undefined;

    while (i < template.length) {
      iT = template.indexOf(tail);
      iH = template.indexOf(head);
      if (iT > iH || (iT == iH) == -1) {
        return true;
      }
      ind = Math.min(iT, iH);
      curr = template.slice(ind, ind + head.length);
      if (i == 0) {
        if (curr != tail) {
          return true;
        } else {
          prev = curr;
        }
      } else {
        if (curr == prev) {
          return true;
        } else {
          template.replace(prev, "");
          template.replace(curr, "");
        }
      }
      i++;
    }

    return false;
  }

  /**
   * [Implementation of Python's string format function]
   * @param  {String} template  [description]
   * @param  {Object} object    [description]
   * @param  {String} delimiter [description]
   * @return {String}           [description]
   */
  function format(template, object, delimiter = "{{}}") {
    if (delimiter.length % 2) {
      console.error("invalid delimiter");
    }

    var tail = delimiter.slice(0, delimiter.length / 2),
      head = delimiter.slice(delimiter.length / 2, delimiter.length);

    var keys = Object.keys(object);

    var i = (j = 0);

    while (
      0 <= template.indexOf(head) &&
      template.indexOf(head) < template.length
    ) {
      i = template.indexOf(tail);
      j = template.indexOf(head);
      key_found = template.slice(i + tail.length, j);

      if (keys.indexOf(key_found) != -1) {
        val = object[key_found];
      } else {
        val = "";
      }
      template =
        template.slice(0, i) +
        val +
        template.slice(j + head.length, template.length);
    }

    return template;
  }

  !(function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "object" == typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function (t) {
    "use strict";
    function e(t, e, i) {
      var o;
      return function () {
        var n = this,
          a = arguments,
          s = function () {
            (o = null), i || t.apply(n, a);
          },
          r = i && !o;
        clearTimeout(o), (o = setTimeout(s, e)), r && t.apply(n, a);
      };
    }
    function i(t) {
      var e = ++h;
      return String(null == t ? "rmjs-" : t) + e;
    }
    function o(t) {
      var e = t
          .clone()
          .css({
            height: "auto",
            width: t.width(),
            maxHeight: "none",
            overflow: "hidden",
          })
          .insertAfter(t),
        i = e.outerHeight(),
        o = parseInt(
          e
            .css({ maxHeight: "" })
            .css("max-height")
            .replace(/[^-\d\.]/g, ""),
          10
        ),
        n = t.data("defaultHeight");
      e.remove();
      var a = o || t.data("collapsedHeight") || n;
      t.data({ expandedHeight: i, maxHeight: o, collapsedHeight: a }).css({
        maxHeight: "none",
      });
    }
    function n(t) {
      if (!d[t.selector]) {
        var e = " ";
        t.embedCSS &&
          "" !== t.blockCSS &&
          (e +=
            t.selector +
            " + [data-readmore-toggle], " +
            t.selector +
            "[data-readmore]{" +
            t.blockCSS +
            "}"),
          (e +=
            t.selector +
            "[data-readmore]{transition: height " +
            t.speed +
            "ms;overflow: hidden;}"),
          (function (t, e) {
            var i = t.createElement("style");
            (i.type = "text/css"),
              i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(t.createTextNode(e)),
              t.getElementsByTagName("head")[0].appendChild(i);
          })(document, e),
          (d[t.selector] = !0);
      }
    }
    function a(e, i) {
      (this.element = e),
        (this.options = t.extend({}, r, i)),
        n(this.options),
        (this._defaults = r),
        (this._name = s),
        this.init(),
        window.addEventListener
          ? (window.addEventListener("load", c),
            window.addEventListener("resize", c))
          : (window.attachEvent("load", c), window.attachEvent("resize", c));
    }
    var s = "readmore",
      r = {
        speed: 100,
        collapsedHeight: 200,
        heightMargin: 16,
        moreLink: '<a href="#">Read More</a>',
        lessLink: '<a href="#">Close</a>',
        embedCSS: !0,
        blockCSS: "display: block; width: 100%;",
        startOpen: !1,
        blockProcessed: function () {},
        beforeToggle: function () {},
        afterToggle: function () {},
      },
      d = {},
      h = 0,
      c = e(function () {
        t("[data-readmore]").each(function () {
          var e = t(this),
            i = "true" === e.attr("aria-expanded");
          o(e),
            e.css({ height: e.data(i ? "expandedHeight" : "collapsedHeight") });
        });
      }, 100);
    (a.prototype = {
      init: function () {
        var e = t(this.element);
        e.data({
          defaultHeight: this.options.collapsedHeight,
          heightMargin: this.options.heightMargin,
        }),
          o(e);
        var n = e.data("collapsedHeight"),
          a = e.data("heightMargin");
        if (e.outerHeight(!0) <= n + a)
          return (
            this.options.blockProcessed &&
              "function" == typeof this.options.blockProcessed &&
              this.options.blockProcessed(e, !1),
            !0
          );
        var s = e.attr("id") || i(),
          r = this.options.startOpen
            ? this.options.lessLink
            : this.options.moreLink;
        e.attr({
          "data-readmore": "",
          "aria-expanded": this.options.startOpen,
          id: s,
        }),
          e.after(
            t(r)
              .on(
                "click",
                (function (t) {
                  return function (i) {
                    t.toggle(this, e[0], i);
                  };
                })(this)
              )
              .attr({ "data-readmore-toggle": s, "aria-controls": s })
          ),
          this.options.startOpen || e.css({ height: n }),
          this.options.blockProcessed &&
            "function" == typeof this.options.blockProcessed &&
            this.options.blockProcessed(e, !0);
      },
      toggle: function (e, i, o) {
        o && o.preventDefault(),
          e || (e = t('[aria-controls="' + this.element.id + '"]')[0]),
          i || (i = this.element);
        var n = t(i),
          a = "",
          s = "",
          r = !1,
          d = n.data("collapsedHeight");
        n.height() <= d
          ? ((a = n.data("expandedHeight") + "px"), (s = "lessLink"), (r = !0))
          : ((a = d), (s = "moreLink")),
          this.options.beforeToggle &&
            "function" == typeof this.options.beforeToggle &&
            this.options.beforeToggle(e, n, !r),
          n.css({ height: a }),
          n.on(
            "transitionend",
            (function (i) {
              return function () {
                i.options.afterToggle &&
                  "function" == typeof i.options.afterToggle &&
                  i.options.afterToggle(e, n, r),
                  t(this).attr({ "aria-expanded": r }).off("transitionend");
              };
            })(this)
          ),
          t(e).replaceWith(
            t(this.options[s])
              .on(
                "click",
                (function (t) {
                  return function (e) {
                    t.toggle(this, i, e);
                  };
                })(this)
              )
              .attr({
                "data-readmore-toggle": n.attr("id"),
                "aria-controls": n.attr("id"),
              })
          );
      },
      destroy: function () {
        t(this.element).each(function () {
          var e = t(this);
          e
            .attr({ "data-readmore": null, "aria-expanded": null })
            .css({ maxHeight: "", height: "" })
            .next("[data-readmore-toggle]")
            .remove(),
            e.removeData();
        });
      },
    }),
      (t.fn.readmore = function (e) {
        var i = arguments,
          o = this.selector;
        return (
          (e = e || {}),
          "object" == typeof e
            ? this.each(function () {
                if (t.data(this, "plugin_" + s)) {
                  var i = t.data(this, "plugin_" + s);
                  i.destroy.apply(i);
                }
                (e.selector = o), t.data(this, "plugin_" + s, new a(this, e));
              })
            : "string" == typeof e && "_" !== e[0] && "init" !== e
            ? this.each(function () {
                var o = t.data(this, "plugin_" + s);
                o instanceof a &&
                  "function" == typeof o[e] &&
                  o[e].apply(o, Array.prototype.slice.call(i, 1));
              })
            : void 0
        );
      });
  });

  (function StylizeFooter() {
    function StylizeSections(colors) {
      var color_pallete = [].concat.apply([], colors);
      var els = document.getElementsByClassName("colored-sin-item");
      if (!els.length) {
        return;
      }
      for (var i = 0, L = els.length; i < L; i++) {
        els[i].style.borderColor = color_pallete[i];
        //console.log(els[i], color_pallete[i]);
      }
      return true;
    }
    COLORS = [
      ["#FF9800", "#A52A2A", "#5F9EA0", "#FF7F50"],
      [
        "#EF5350",
        "#7E57C2",
        "#2196F3",
        "#00BCD4",
        "#009688",
        "#CDDC39",
        "#808080",
        "#FFC0CB",
      ],
      [
        "#9acd32",
        "#ee82ee",
        "#ff6347",
        "#008080",
        "#009688",
        "#6a5acd",
        "#4169e1",
      ],
    ];

    return StylizeSections(COLORS);
  })();

  String.prototype.hexEncode = function () {
    var hex, i;

    var result = "";
    for (i = 0; i < this.length; i++) {
      hex = this.charCodeAt(i).toString(16);
      result += ("000" + hex).slice(-4);
    }

    return result;
  };

  String.prototype.hexDecode = function () {
    var j;
    var hexes = this.match(/.{1,4}/g) || [];
    var back = "";
    for (j = 0; j < hexes.length; j++) {
      back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    return back;
  };

  ///////////////////////////
  //// MAIN SINAPP CLASS
  ///////////////////////////

  ///////////////////////////
  //// MAIN SINAPP CLASS
  ///////////////////////////

  const fb = firebase;
  //delete firebase;

  const CONFIG = {
    rcopens: new Date("Jan 1 2020 23:59:59").getTime(), // club registration opens
    rcends: new Date("Feb 1 2020 23:59:59").getTime(), // club registeration deadline
    rfsopens: new Date("Jun 1 2020 23:59:59").getTime(), // senate nomination opens
    rfsends: new Date("Jul 1 2020 23:59:59").getTime(), // senate nomination deadline
    fpopens: new Date("Oct 11 2020 23:59:59").getTime(), // funding poll begindate
    fpends: new Date("Oct 20 2020 23:59:59").getTime(), // funding poll closedate, // new Date("Sep 12, 2019 23:59:59").getTime()
    seopens: new Date("Oct 21 2020 19:47:59").getTime(), // senate election begindate
    seends: new Date("Oct 22 2020 21:47:59").getTime(), // senate election closedate
    campaign_max_length: 250,
    campaign_min_length: 25,
    secampaign: "se-test-2020-1Axbu2VnDYrzxt1GWZsw",
    prev_campaigns: ["se-fall-2019-COrYlp5YXN5ZvUuzpsJq"],
    poll_id: "1Axbu2VnDYrzxt1GWZsw",
    senate_dat_file: "",
    prev_senate_dat_files: ["fall-2019-senate-members"],
    prev_polls: ["fall-2019-UPWlKMYkvCd2fuXY6Rce","fp-spring-2020-1cW4NmL7sfo0rOqAK5ro"],
    poll_name: "fp-test-2020-2dW4NmL7sfo0rOqAK5ro",
    semester: "spring-2021",
    max_boosts: 6,
    vote_submission_threshold: 0.01,
    authorised_users: [
      "raghavp@reed.edu",
      "trouts@reed.edu",
      "taqia@reed.edu",
      "enahashim@reed.edu",
      "anachebk@reed.edu",
      "cunningk@reed.edu",
      "aziouedra@reed.edu"],
    direct_server_load: true,
    bypass_full_id_app: true,
  };

  class SinApp {
    // Constructor for the web app
    constructor() {
      // Web app's Firebase configuration
      this.FIREBASECONFIG = {
        apiKey: "AIzaSyBvWLtRYPBN0qKj_K30p1sY3vOS2hFAzQQ",
        authDomain: "sin-reed-edu.firebaseapp.com",
        databaseURL: "https://sin-reed-edu.firebaseio.com",
        projectId: "sin-reed-edu",
        storageBucket: "",
        messagingSenderId: "922484667339",
        appId: "1:922484667339:web:cb8e7c755f42c286",
      };

      this.DEBUG_MODE = true;

      this.login_state = 0;

      //initialise firebase
      fb.initializeApp(this.FIREBASECONFIG);

      // make auth and firestore references
      this.auth = fb.auth();
      this.db = fb.firestore();
      this.view = this.get_view();
      this.mobile = Util.is_mobile();

      // define state handlers
      this.__defineHandlers__();
    }

    // Get the view so that we can load a module accordingly
    get_view() {
      var path = window.location.pathname.split("/").pop();
      if (path.indexOf(".") > -1) {
        return path.split(".").slice(0, -1).join(".");
      } else if (path == "") {
        return "index";
      } else {
        return path;
      }
    }

    // Define all the state handlers for the app here
    __defineHandlers__() {
      self = this;
      this.auth.onAuthStateChanged(
        function (user) {
          if (user == null) {
            //console.log("state: logged out");
            // show logged out view
            this.login_state = 0;
          } else {
            //console.log("state: logged in");
            // show logged in view
            this.unsafe_user = user;
            this.primary = new User(user);
            this.login_state = 1;
          }
          this.refresh_view(user);
        }.bind(self)
      );
    }

    // Clientside login method
    login() {
      let baseProvider = new fb.auth.GoogleAuthProvider();
      baseProvider.setCustomParameters({
        hd: "reed.edu",
      });
      fb.auth().signInWithRedirect(baseProvider);
    }

    // Clientside Logout Method
    logout() {
      self = this;
      fb.auth()
        .signOut()
        .then(
          (function (self) {
            // Sign-out successful.
          })(this)
        )
        .catch(function (error) {
          // An error happened.
          //console.log(error);
        });
    }

    // check if the user is admin
    check_admin_status() {}

    // initialise the menu for a normal user
    initialise_view(user) {
      this.refresh_view(user);
    }

    refresh_view(user) {
      // ////////
      // MENU
      // ////////

      // .lo <- .logged-out ;
      // .li <- .logged-in ;
      // .ad <- .admin ;
      // .lb <- logged-buffer (default: hidden)

      (function actionButtons(self) {
        // defining roles for the action buttons
        $("#act-login").click(() => self.login());
        $(".act-login").click(function (e) {
          e.preventDefault();
          self.login();
        });
        $("#act-logout").click(() => self.logout());
        //$('#act-settings').click
        //$('#act-approvals').click
        //$('#act-charts').click
      })(this);

      if (!(this.is_view("funding-poll") || this.is_view("senate-election"))) {
        /* Export TouchDown module */
        Modules.ActivateTouchDown();
        /* Export StickyHeader module */
        Modules.ActivateStickyHeader();
        /* Export HoverFluid module */
        Modules.ActivateHoverFluid();

        // AUTHENTICATION LOGIC

        const loggedOutLinks = document.querySelectorAll(".lo");
        const loggedInLinks = document.querySelectorAll(".li:not(.ad)");
        const adminOnlyLinks = document.querySelectorAll(".ad");

        if (user) {
          // toggle UI elements
          loggedInLinks.forEach((item) => {
            item.classList.remove("d-none");
            item.classList.add("d-inline-block");
          });
          loggedOutLinks.forEach((item) => {
            item.classList.remove("d-inline-block");
            item.classList.add("d-none");
          });
        } else {
          // toggle UI elements
          loggedInLinks.forEach((item) => {
            item.classList.remove("d-inline-block");
            item.classList.add("d-none");
          });
          loggedOutLinks.forEach((item) => {
            item.classList.remove("d-none");
            item.classList.add("d-inline-block");
          });
        }

        // put profile picture
        if (user) {
          const navProfilePhoto = document.querySelector(
            "#user-nav-profile-photo"
          );
          const navDisplayName = document.querySelector(
            "#user-nav-display-name"
          );

          navProfilePhoto.src = this.auth.currentUser.photoURL;
          navProfilePhoto.alt = this.auth.currentUser.displayName;

          navDisplayName.innerText = this.auth.currentUser.displayName.replace(
            / .*/,
            ""
          );
        }
      } else if (this.is_view("funding-poll")) {
        var fp_timeout =
          new Date().getTime() < CONFIG.fpopens &&
          new Date().getTime() > CONFIG.fpends;
        if (fp_timeout) {
          $("#sin-fp-timeout-alert").show();
          console.log("Results are announced");
          this.view_funding_poll_results();
        }
        if (user) {
          $("#sin-fp-name").text(
            this.auth.currentUser.displayName.replace(/ .*/, "")
          );
          $("#sin-fp-login-alert").hide();
          if (!fp_timeout) {
            $("#sin-fp-timeout-alert").hide();
            this.funding_poll();
          }
        } else {
          $("#sin-fp-login-alert").show();
          $("#preloader-screen").hide();
          $("#intro-screen").hide();
          $("#voting-screen").hide();
        }
      } else if (this.is_view("senate-election")) {
        var se_timeout =
          new Date().getTime() > CONFIG.seopens &&
          new Date().getTime() > CONFIG.seends;
        if (se_timeout) {
          $("#sin-se-timeout-alert").show();
          console.log("Results are announced");
          this.view_senate_election_results();
        }
        if (user) {
          $("#sin-se-name").text(
            this.auth.currentUser.displayName.replace(/ .*/, "")
          );
          $("#sin-se-login-alert").hide();
          if (!se_timeout) {
            $("#sin-se-timeout-alert").hide();
            this.senate_election();
          }
        } else {
          $("#sin-se-login-alert").show();
          $("#preloader-screen").hide();
          $("#intro-screen").hide();
          $("#voting-screen").hide();
        }
      }

      if (this.is_view("team")) {
        try {
          $.ajax({
            dataType: "json",
            url: "./data/" + CONFIG.senate_dat_file + ".json",
            data: {},
            success: function (response) {
              var data = response;
              Modules.resolveListRepeats(data.LIST, {
                contact: function (contact_card) {
                  contact_card.split(",").forEach(function (el) {
                    if (el.indexOf("email") != -1) {
                      el.match(/\(([^)]+)\)/)[1];
                    }
                    return el;
                  });
                },
              });
              $("#sin-tm-collection").removeClass("d-none");
            },
            error: function (e) {
              console.log(e);
            },
          });
        } catch (e) {
          console.log(e);
        }
      }

      // PAGES
      var logout_alert,
        loggedin_form,
        timeout_alert,
        loggedin_viewer,
        auth_alert;

      //register-club
      if (this.is_view("register-club")) {
        logout_alert = $("#sin-rc-alert");
        loggedin_form = $("#sin-rc-form");
        timeout_alert = $("#sin-rc-alert-timeout");

        if (user) {
          if (
            new Date().getTime() < CONFIG.rcopens &&
            new Date().getTime() > CONFIG.rcends
          ) {
            timeout_alert[0].classList.remove("d-none");
            timeout_alert[0].classList.add("d-block");

            loggedin_form[0].classList.remove("d-block");
            loggedin_form[0].classList.add("d-none");
          } else {
            this.club_register();

            logout_alert[0].classList.add("d-none");
            logout_alert[0].classList.remove("d-block");

            loggedin_form[0].classList.remove("d-none");
            loggedin_form[0].classList.add("d-block");
          }
        } else {
          logout_alert[0].classList.remove("d-none");
          logout_alert[0].classList.add("d-block");

          loggedin_form[0].classList.add("d-none");
          loggedin_form[0].classList.remove("d-block");
        }

        //request-funds
      } else if (this.is_view("request-funds")) {
        this.fund_request();

        logout_alert = $("#sin-rf-alert");
        loggedin_form = $("#sin-rf-form");
        if (user) {
          logout_alert[0].classList.add("d-none");
          logout_alert[0].classList.remove("d-block");

          loggedin_form[0].classList.remove("d-none");
          loggedin_form[0].classList.add("d-block");
        } else {
          logout_alert[0].classList.remove("d-none");
          logout_alert[0].classList.add("d-block");

          loggedin_form[0].classList.add("d-none");
          loggedin_form[0].classList.remove("d-block");
        }
      } else if (this.is_view("dash-door")) {
        logout_alert = $("#sin-dd-alert");
        loggedin_viewer = $("#sin-dd-viewer");
        auth_alert = $("#sin-dd-alert-auth");
        if (user) {
          logout_alert[0].classList.add("d-none");
          logout_alert[0].classList.remove("d-block");

          if (CONFIG.authorised_users.includes(user.email)) {
            auth_alert[0].classList.add("d-none");
            auth_alert[0].classList.remove("d-block");

            this.dash_door();

            loggedin_viewer[0].classList.remove("d-none");
            loggedin_viewer[0].classList.add("d-block");
          } else {
            auth_alert[0].classList.add("d-block");
            auth_alert[0].classList.remove("d-none");

            loggedin_viewer[0].classList.add("d-none");
            loggedin_viewer[0].classList.remove("d-block");
          }
        } else {
          logout_alert[0].classList.remove("d-none");
          logout_alert[0].classList.add("d-block");

          loggedin_viewer[0].classList.add("d-none");
          loggedin_viewer[0].classList.remove("d-block");
        }
      } else if (this.is_view("run-for-senate")) {
        logout_alert = $("#sin-rfs-alert");
        loggedin_form = $("#sin-rfs-form");
        timeout_alert = $("#sin-rfs-alert-timeout");

        if (user) {
          if (
            new Date().getTime() < CONFIG.rfsopens &&
            new Date().getTime() > CONFIG.rfsends
          ) {
            timeout_alert[0].classList.remove("d-none");
            timeout_alert[0].classList.add("d-block");

            loggedin_form[0].classList.remove("d-block");
            loggedin_form[0].classList.add("d-none");
          } else {
            this.run_for_senate();

            logout_alert[0].classList.add("d-none");
            logout_alert[0].classList.remove("d-block");

            loggedin_form[0].classList.remove("d-none");
            loggedin_form[0].classList.add("d-block");
          }
        } else {
          logout_alert[0].classList.remove("d-none");
          logout_alert[0].classList.add("d-block");

          loggedin_form[0].classList.add("d-none");
          loggedin_form[0].classList.remove("d-block");
        }
      }
    }

    is_view(view_name) {
      return (
        (this.DEBUG_MODE && this.view == view_name) ||
        (!this.DEBUG_MODE && this.view == view_name + ".php")
      );
    }

    /* Register Club Functions */

    club_register() {
      if (!this.is_view("register-club")) {
        return;
      }
      var signatories = [];

      this.db
        .collection("signatories")
        .doc(CONFIG.semester)
        .get()
        .then(function (doc) {
          var Data = doc.data();
          signatories = Data.signatories;
        })
        .then(function () {
          //console.log(signatories);
          Util.make_signator_selector("#sin-rc-choose-signator", signatories);
        });

      function validate_form(
        signators,
        title,
        contact,
        about,
        identity_request,
        identity_mission,
        identity_community,
        identity_activity,
        identity_open,
        identity_outsidefunding
      ) {
        // SIGNATORS VALIDATION
        if (signators.length != 0) {
          var j = signators
            .split(",")
            .reduce(
              (acc, el) =>
                acc && signatories.reduce((acc, obj) => obj.Email == el),
              1
            );
          var control_emails = signatories.map((el) => el.Email),
            acc_array = [];
          for (var i = 0; i < signators.split(",").length; i++) {
            acc_array.push(control_emails.includes(signators.split(",")[i]));
          }
          if (
            signators.length > 0 &&
            acc_array.reduce((acc, el) => acc && el)
          ) {
            //console.log("valid");
          } else {
            // signators error
            alert("Unauthorised, invalid, or empty signators");
            return false;
          }
        } else {
          // signators error
          alert("Unauthorised, invalid, or empty signators");
          return false;
        }

        // TITLE VALIDATION
        if (title.length < 3 || title.length > 50) {
          alert("too long or too short title");
          return false;
        }

        // CONTACT VALIDATION
        if (contact.indexOf("@") == -1) {
          alert("Please provide emails for the points of contact.");
          return false;
        }

        // ABOUT VALIDATION
        if (about.split(" ").length > 130 || about.split(" ").length < 4) {
          alert("too long or too short description");
          return false;
        }

        if (identity_request) {
          var im = identity_mission.split(" ");
          if (300 > im.length || im.length > 550) {
            alert(" Mission statement under or above word limit. ");
            return false;
          }

          var ic = identity_community.split(" ");
          if (
            !CONFIG.bypass_full_id_app &&
            (200 > ic.length || ic.length > 400)
          ) {
            alert(" Prompt II under or above word limit. ");
            return false;
          }

          var ia = identity_activity.split(" ");
          if (
            !CONFIG.bypass_full_id_app &&
            (100 > ia.length || ia.length > 300)
          ) {
            alert(" Prompt III under or above word limit. ");
            return false;
          }

          var io = identity_open.split(" ");
          if (
            !CONFIG.bypass_full_id_app &&
            (50 > io.length || io.length > 300)
          ) {
            alert(" Prompt IV under or above word limit. ");
            return false;
          }

          //var ie = identity_outsidefunding.split(" ").map( word => word.toLowerCase() );
          //console.log(ie, ie.includes('yes'), ie.includes('no') )
          //if ( ie.includes('yes') || ie.includes('no') ) {

          //} else {
          //    alert(" Prompt V answer should at least have a YES or a NO. ")
          //    return false;
          //}
        }

        return true;
      }

      var self = this;
      $("#sin-rc-form-submit").click(function (e) {
        e.preventDefault();
        var signators = $("#sin-rc-choose-signator")[0].value;
        var title = $("#sin-rc-org-name")[0].value;
        var contact = $("#sin-rc-contact")[0].value;
        var about = $("#sin-rc-about")[0].value;
        var poll_participate = $("#sin-rc-poll-participate-0")[0].checked;
        var identity_request = $("#sin-rc-identity-status-flag-0")[0].checked;
        var identity_mission = $("#sin-rc-identity-mission")[0].value;
        var identity_community = $("#sin-rc-identity-community")[0].value;
        var identity_activity = $("#sin-rc-identity-activity")[0].value;
        var identity_open = $("#sin-rc-identity-open")[0].value;
        var identity_outsidefunding = $("#sin-rc-identity-outside-funding")[0]
          .value;

        var valid_flag = validate_form(
          signators,
          title,
          contact,
          about,
          identity_request,
          identity_mission,
          identity_community,
          identity_activity,
          identity_open,
          identity_outsidefunding
        );

        if (valid_flag) {
          var data = {
            about: about,
            contact: contact,
            signators: signators,
            title: title,
            poll_participate: poll_participate,
            identity_request: identity_request,
            review_status: 0,
            votes: 0,
            liked: 0,
            disliked: 0,
            boosted: 0,
          };
          if (identity_request) {
            data.identity_mission = identity_mission;
            data.identity_community =
              identity_community == "" && CONFIG.bypass_full_id_app
                ? "Not submitted"
                : identity_community;
            data.identity_activity =
              identity_activity == "" && CONFIG.bypass_full_id_app
                ? "Not submitted"
                : identity_activity;
            data.identity_open =
              identity_open == "" && CONFIG.bypass_full_id_app
                ? "Not submitted"
                : identity_open;
            data.identity_outsidefunding =
              identity_outsidefunding == "" && CONFIG.bypass_full_id_app
                ? "Not submitted"
                : identity_outsidefunding;
          }
          self.db
            .collection("registered_clubs")
            .doc(CONFIG.semester)
            .update({
              registered_clubs: fb.firestore.FieldValue.arrayUnion(data),
            })
            .then(function () {
              //console.log("write head", docRef.id);
              alert(
                "Your club registration request has been received. Thank you for applying."
              );
              window.location.href = document.referrer;
            })
            .catch(function (error) {
              if (self.DEBUG_MODE) {
                console.error("error in club_register module", error);
              }
            });
        }
      });

      var self = this;
      var idonlyarea = $("#sin-rc-id-only");
      $("#sin-rc-identity-status-flag-0").change(function () {
        if (this.checked) {
          idonlyarea[0].classList.remove("d-none");
          idonlyarea[0].classList.add("d-block");
        } else {
          idonlyarea[0].classList.add("d-none");
          idonlyarea[0].classList.remove("d-block");
        }
      });
    }

    /* Fund Request Functions */

    fund_request() {
      if (!this.is_view("request-funds")) {
        return;
      }
      var self = this;
      var purpose = $("#sin-rf-purpose");
      var reserve = $("#sin-rf-reserve");

      var signator_box = $("#when-signator");
      var organisation_box = $("#when-organisation");

      Util.make_purpose_selector("#sin-rf-purpose");
      Util.make_reserve_selector("#sin-rf-reserve");

      Util.itemiser();

      purpose.on("change", function () {
        //console.log(this.value);
        if (0 < this.value <= 3) {
          signator_box[0].classList.remove("d-none");
          signator_box[0].classList.add("d-inline-block");
        } else {
          signator_box[0].classList.add("d-none");
          signator_box[0].classList.remove("d-inline-block");
        }

        if (this.value == 1) {
          organisation_box[0].classList.remove("d-none");
          organisation_box[0].classList.add("d-inline-block");
        } else {
          organisation_box[0].classList.add("d-none");
          organisation_box[0].classList.remove("d-inline-block");
        }
      });

      var signatories = [];
      this.db
        .collection("signatories")
        .doc(CONFIG.semester)
        .get()
        .then(function (doc) {
          var Data = doc.data();
          signatories = Data.signatories;
        })
        .then(function () {
          //console.log(signatories);
          Util.make_signator_selector("#sin-rf-choose-signator", signatories);
        });

      var organisations = [];
      this.db
        .collection("registered_clubs")
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function(doc) {
            organisations.push(doc.data());
            organisations[organisations.length - 1].Private_doc_id = doc.id;
          });
        })
        .then(function () {
          //console.log(organisations);
          Util.make_organisation_selector(
            "#sin-rf-choose-organisation",
            organisations
          );
        });

      // SUBMISSION
      var possible_reserves = [
        "Identity Funds",
        "Student Body Funds",
        "Finance Committee",
      ];
      var possible_purposes = [
        "Club/Organisation Funding",
        "Community Event",
        "Community Project",
      ];
      var possible_categories = [
        "Refreshments",
        "Administration",
        "Entertainment",
        "Capital Improvements",
        "A/V",
        "Miscellaneous",
      ];

      function validate_form(
        purpose,
        reserve,
        signators,
        orgs,
        description,
        budget,
        certifications
      ) {
        if (!possible_purposes.includes(purpose)) {
          alert(
            'Either you have not selected the "purpose" or tampered with the parameters. Please select the "purpose". The form remains unsubmitted.'
          );
          return false;
        }

        if (!possible_reserves.includes(reserve)) {
          alert(
            'Either you have not selected the "reserve" or tampered with the parameters. Please select the "reserve". The form remains unsubmitted.'
          );
          return false;
        }

        // SIGNATORS VALIDATION
        if (signators.length != 0) {
          var j = signators
            .split(",")
            .reduce(
              (acc, el) =>
                acc && signatories.reduce((acc, obj) => obj.Email == el),
              1
            );
          var control_emails = signatories.map((el) => el.Email),
            acc_array = [];
          for (var i = 0; i < signators.split(",").length; i++) {
            acc_array.push(control_emails.includes(signators.split(",")[i]));
          }
          if (
            signators.length > 0 &&
            acc_array.reduce((acc, el) => acc && el)
          ) {
            //console.log("valid");
          } else {
            // signators error
            alert("Unauthorised, invalid, or empty signators");
            return false;
          }
        } else {
          // signators error
          alert("Unauthorised, invalid, or empty signators");
          return false;
        }

        // ORGANISATIONS VALIDATION
        if (purpose == possible_purposes[0]) {
          if (!organisations.find((el) => el.title == orgs)) {
            alert("Your organisation must first be registered.");
            return false;
          }
        }

        //MESSAGE/PURPOSE DESCRIPTION VALIDATION
        var description_count = description.split(" ").length;
        if (description_count == 0 || description_count >= 150) {
          alert(
            "Length of the purpose description should be greater than 0, but less than 150 words."
          );
          return false;
        }

        // BUDGET VALIDATION [{}]
        if (budget.length == 0) {
          alert(
            "There are no items in your budget. Add at least one item to continue."
          );
          return false;
        }
        for (var i = 0; i < budget.length; i++) {
          if (!(0 < budget[i].item.split(" ").length < 50)) {
            alert(
              "Item description of item " +
                (i + 1) +
                " is either empty or longer than 50 words."
            );
            return false;
          }
          if (!possible_categories.includes(budget[i].category)) {
            alert(
              "Item category of item " +
                (i + 1) +
                " is either not selected or invalid."
            );
            return false;
          }
          if (!$.isNumeric(budget[i].amount)) {
            alert("Error in price amount of item " + (i + 1));
            return false;
          }
        }

        // CERTIFICATION VALIDATION
        if (!certifications[0]) {
          alert(
            "Please complete the certification 1. The form remains unsubmitted."
          );
          return false;
        }
        if (!certifications[1]) {
          alert(
            "Please complete the certification 2. The form remains unsubmitted."
          );
          return false;
        }

        return true;
      }

      function submit_fund_request(e) {
        e.preventDefault();

        // selectors
        var reserve_selector = $("#sin-rf-reserve");
        var purpose_selector = $("#sin-rf-purpose");
        var signator_selector = $("#sin-rf-choose-signator");
        var organisation_selector = $("#sin-rf-choose-organisation");
        var description_selector = $("#sin-rf-elaborate-purpose");
        var budget_selector = $(
          "#sin-rf-budget-form>div:not(#sin-rf-item-header):not(#sin-rf-empty-cart):not(#sin-rf-item-footer)"
        );
        var certification1_selector = $("#sin-rf-certification-0");
        var certification2_selector = $("#sin-rf-certification-1");

        var valid_flag;

        //preprocessing the data
        var data_purpose = possible_purposes[purpose_selector.val() - 1];
        var data_reserve = possible_reserves[reserve_selector.val() - 1];
        var data_signator = signator_selector.val();
        var data_organisation = organisation_selector.val();
        var data_description = description_selector.val();
        var data_budget = [];
        budget_selector.each(function () {
          var obj = {
            item: $(this).find(".sin-rf-item-name").val(),
            category:
              possible_categories[
                $(this).find(".sin-rf-item-category").val() - 1
              ],
            amount: $(this).find(".sin-rf-item-cost").val(),
          };
          data_budget.push(obj);
        });
        var data_certification = [
          certification1_selector[0].checked,
          certification2_selector[0].checked,
        ];

        valid_flag = validate_form(
          data_purpose,
          data_reserve,
          data_signator,
          data_organisation,
          data_description,
          data_budget,
          data_certification
        );
        if (valid_flag) {
          var data = {
            time: new Date().getTime(),
            purpose: data_purpose,
            reserve: data_reserve,
            signators: data_signator,
            description: data_description,
            budget: data_budget,
            review_status: 0,
          };
          if (data.purpose == possible_purposes[0]) {
            data.organisation = data_organisation;
          }
          var docRef = self.db.collection("fund_requests").doc(CONFIG.semester);
          docRef.get().then((snap) => {
            if (snap.exists) {
              docRef.onSnapshot(function (doc) {
                docRef
                  .update({
                    fund_requests: fb.firestore.FieldValue.arrayUnion(data),
                  })
                  .then(function () {
                    alert(
                      "Your fund request was successfully submitted. Thank you!"
                    );
                    window.location.href = document.referrer;
                  })
                  .catch(function (error) {
                    if (self.DEBUG_MODE) {
                      console.error("error in fund_request module", error);
                    }
                  });
              });
            } else {
              docRef
                .set({
                  fund_requests: fb.firestore.FieldValue.arrayUnion(data),
                })
                .then(function () {
                  alert(
                    "Your fund request was successfully submitted. Thank you!"
                  );
                  window.location.href = document.referrer;
                })
                .catch(function (error) {
                  if (self.DEBUG_MODE) {
                    console.error("error in fund_request module", error);
                  }
                });
            }
          });
        }
      }

      $("#sin-rf-form-submit").click(submit_fund_request.bind(this));
    }

    /* Funding poll Functions */

    funding_poll() {
      var self = this;
      function proceed() {
        $("#sin-fp-double-alert").hide();
        var fp = new FundingPoll(self);
      }
      this.db
        .collection("users_who_have_voted")
        .doc(CONFIG.poll_name + "-" + CONFIG.poll_id)
        .get()
        .then(function (doc) {
          var data = doc.data();
          if (data == undefined) {
            proceed();
            return;
          }
          if (data["voters"] == undefined) {
            proceed();
            return;
          }
          data["voters"].forEach(function (el) {
            if (el.Email == self.auth.currentUser.email) {
              $("#sin-fp-double-alert").show();
            } else {
              proceed();
            }
          });
        });
    }

    dash_door() {
      var club_viewer_el,
        club_viewer_body_el,
        budgets_viewer_el,
        budgets_viewer_body_el;

      club_viewer_el = $("#club_viewer");
      budgets_viewer_el = $("#budgets_viewer");
      var app_env = this;

      $("#sin-dd-refresh").click(function () {
        window.localStorage.setItem("cached2", false);
        window.location.reload();
      });

      var table,
        budget_table,
        clubs = [],
        fund_requests = [];

      function return_clubs_data_table(data) {
        var inner_table = club_viewer_el.DataTable({
          data: data,
          select: "single",
          columnDefs: [
            {
              searchable: false,
              orderable: false,
              targets: 0,
            },
          ],
          columns: [
            { data: null },
            /*{
                        "data": "id",
                     "orderable": true,
                        render: function (data, type, row, meta) {
                            return meta.row + meta.settings._iDisplayStart + 1;
                        }
                    },*/
            {
              className: "details-control",
              orderable: false,
              data: null,
              defaultContent: "",
              render: function () {
                return '<i class="fa fa-plus-square" aria-hidden="true"></i>';
              },
              width: "15px",
            },
            { data: "title" },
            {
              data: "signators",
              orderable: false,
              render: function (data) {
                var colors = [
                  "primary",
                  "success",
                  "danger",
                  "warning",
                  "info",
                ];
                var colors = ["primary"];
                function get_pill(color, text) {
                  return (
                    '<span class="badge badge-pill badge-' +
                    color +
                    '">' +
                    text +
                    "</span> "
                  );
                }
                var shuffled_colors = Util.shuffle(colors);
                var unsafe_html = "",
                  i = 0;
                data.split(",").forEach(function (el) {
                  unsafe_html += get_pill(
                    shuffled_colors[i % shuffled_colors.length],
                    el
                  );
                  i += 1;
                });
                return unsafe_html;
              },
            },
            { data: "votes" },
            {
              data: "identity_request",
              orderable: false,
              render: function (data) {
                if (data == true) {
                  return '<i class="fa fa-info-circle text-info" aria-hidden="true"></i>';
                } else {
                  return '<i class="" aria-hidden="true"></i>';
                }
              },
            },
            {
              data: "poll_participate",
              orderable: false,
              render: function (data) {
                if (data == true) {
                  return '<i class="fas fa-poll text-warning" aria-hidden="true"></i>';
                } else {
                  return '<i class="fas fa-poll text-dark" aria-hidden="true"></i>';
                }
              },
            },
            {
              data: "review_status",
              orderable: false,
              render: function (data) {
                data = parseInt(data);
                if (data == 0) {
                  return '<i class="fa fa-circle text-danger" aria-hidden="true"></i>';
                } else if (data == 1) {
                  return '<i class="fa fa-check text-success" aria-hidden="true"></i>';
                }
              },
            },
          ],
          order: [[2, "asc"]],
        });

        club_viewer_body_el = $("#club_viewer tbody");

        // Add event listener for opening and closing details
        club_viewer_body_el.on("click", "td.details-control", function () {
          var tr = $(this).closest("tr");
          var tdi = tr.find("i.fa");
          var row = table.row(tr);

          if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass("shown");
            tdi.first().removeClass("fa-minus-square");
            tdi.first().addClass("fa-plus-square");
          } else {
            // Open this row
            var row_i = $(tr).children()[0].textContent;
            row.child(Util.format_club_row(row.data(), row_i)).show();
            tr.addClass("shown");
            tdi.first().removeClass("fa-plus-square");
            tdi.first().addClass("fa-minus-square");
          }
          $(".fin-dd-read-more").readmore({
            speed: 75,
            lessLink: '<a href="#">Read less</a>',
          });
        });

        inner_table.on("user-select", function (
          e,
          dt,
          type,
          cell,
          originalEvent
        ) {
          if ($(cell.node()).hasClass("details-control")) {
            e.preventDefault();
          }
        });

        inner_table
          .on("order.dt search.dt", function () {
            inner_table
              .column(0, { search: "applied", order: "applied" })
              .nodes()
              .each(function (cell, i) {
                cell.innerHTML = i + 1;
              });
          })
          .draw();

        return inner_table;
      }

      function return_budgets_data_table(data) {
        $.fn.dataTableExt.oSort["timesort-desc"] = function (x, y) {
          x = parseInt(x);
          y = parseInt(y);

          if (x > y) {
            return -1;
          }

          return 1;
        };

        $.fn.dataTableExt.oSort["timesort-asc"] = function (x, y) {
          x = parseInt(x);
          y = parseInt(y);

          if (x > y) {
            return 1;
          }

          return -1;
        };
        jQuery.extend(jQuery.fn.dataTableExt.oSort, {
          "currency-pre": function (a) {
            a = a === "-" ? 0 : a.replace(/[^\d\-\.]/g, "");
            return parseFloat(a);
          },

          "currency-asc": function (a, b) {
            return a - b;
          },

          "currency-desc": function (a, b) {
            return b - a;
          },
        });
        var inner_table = budgets_viewer_el.DataTable({
          data: data,
          select: "single",
          columnDefs: [
            {
              searchable: false,
              orderable: false,
              targets: 0,
            },
            { type: "currency", targets: 4 },
          ],
          columns: [
            { data: null },
            {
              className: "details-control",
              orderable: false,
              data: null,
              defaultContent: "",
              render: function () {
                return '<i class="fa fa-plus-square" aria-hidden="true"></i>';
              },
              width: "15px",
            },
            {
              data: "organisation",
              render: function (data) {
                if (data == undefined) {
                  return "Individual";
                } else {
                  return data;
                }
              },
            },
            {
              data: "signators",
              orderable: false,
              render: function (data) {
                var colors = [
                  "primary",
                  "success",
                  "danger",
                  "warning",
                  "info",
                ];
                var colors = ["primary"];
                function get_pill(color, text) {
                  return (
                    '<span class="badge badge-pill badge-' +
                    color +
                    '">' +
                    text +
                    "</span> "
                  );
                }
                var shuffled_colors = Util.shuffle(colors);
                var unsafe_html = "",
                  i = 0;
                data.split(",").forEach(function (el) {
                  unsafe_html += get_pill(
                    shuffled_colors[i % shuffled_colors.length],
                    el
                  );
                  i += 1;
                });
                return unsafe_html;
              },
            },
            {
              data: "total",
              orderable: true,
              render: function (data) {
                return (
                  ("$" + data)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"
                );
              },
            },
            {
              data: "reserve",
              orderable: true,
            },
            {
              data: "purpose",
              orderable: true,
            },
            {
              data: "time",
              orderable: true,
              type: "date",
              render: function (data) {
                var date_ob = new Date(data);
                var year = date_ob.getFullYear();
                var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
                var date = ("0" + date_ob.getDate()).slice(-2);
                var hours = ("0" + date_ob.getHours()).slice(-2);
                var minutes = ("0" + date_ob.getMinutes()).slice(-2);
                return `${month}/${date}/${year} ${hours}:${minutes}`;
              },
            },
            {
              data: "review_status",
              orderable: false,
              render: function (data) {
                data = parseInt(data);
                if (data == 0) {
                  return '<i class="fa fa-circle text-danger" aria-hidden="true"></i>';
                } else if (data == 1) {
                  return '<i class="fa fa-check text-success" aria-hidden="true"></i>';
                }
              },
            },
          ],
          order: [[2, "asc"]],
        });

        budgets_viewer_body_el = $("#budgets_viewer tbody");

        // Add event listener for opening and closing details
        budgets_viewer_body_el.on("click", "td.details-control", function () {
          var tr = $(this).closest("tr");
          var tdi = tr.find("i.fa");
          var row = budget_table.row(tr);
          //console.log(row.data());

          if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass("shown");
            tdi.first().removeClass("fa-minus-square");
            tdi.first().addClass("fa-plus-square");
          } else {
            // Open this row

            row.child(Util.format_budget_row(row.data())).show();
            tr.addClass("shown");
            tdi.first().removeClass("fa-plus-square");
            tdi.first().addClass("fa-minus-square");
          }
          $(".fin-dd-read-more").readmore({
            speed: 75,
            lessLink: '<a href="#">Read less</a>',
          });
        });
        $(document).on("click", ".shoot_email", function () {
          var _amount = $(this).closest(".input-group").find("input").val();
          var _main;
          if (_amount == "" || parseInt(_amount) == 0) {
            _main = encodeURIComponent(
              `We regret to inform you that the Senate has decided NOT to allocate any funds.\n\nOnwards,\nTreasury`
            );
          } else {
            _main = encodeURIComponent(
              `Congratulations! You have been allocated $${_amount}/-.\n\nOnwards,\nTreasury`
            );
          }
          window.open(
            $(this).attr("data-link") + _main,
            "_blank",
            "location=yes,height=570,width=520,scrollbars=yes,status=yes"
          );
        });

        inner_table.on("user-select", function (
          e,
          dt,
          type,
          cell,
          originalEvent
        ) {
          if ($(cell.node()).hasClass("details-control")) {
            e.preventDefault();
          }
        });

        inner_table
          .on("order.dt search.dt", function () {
            inner_table
              .column(0, { search: "applied", order: "applied" })
              .nodes()
              .each(function (cell, i) {
                cell.innerHTML = i + 1;
              });
          })
          .draw();

        return inner_table;
      }

      if (window.localStorage.cached2 == "true") {
        table = return_clubs_data_table(
          JSON.parse(window.localStorage.getItem("fb_data"))
        );
      } else {
        this.db
          .collection("registered_clubs")
          .doc(CONFIG.semester)
          .get()
          .then(function (doc) {
            clubs = doc.data()["registered_clubs"];
            //clubData
            //clubs.push( doc.data() );
            //clubs[ clubs.length - 1 ].Private_doc_id = doc.id;
          })
          .then(function () {
            window.localStorage.setItem("fb_data", JSON.stringify(clubs));
            window.localStorage.setItem("cached2", true);
            table = return_clubs_data_table(clubs);
          });
      }

      this.db
        .collection("fund_requests")
        .doc(CONFIG.semester)
        .get()
        .then(function (doc) {
          var Data = doc.data();
          if (Data == undefined) {
            return;
          }
          var reqs = Data.fund_requests;
          reqs.forEach(function (Case) {
            Case.total = Case.budget.reduce(function (a, b) {
              return {
                amount: Math.round(
                  Number(parseFloat(a.amount).toFixed(2)) +
                    Number(parseFloat(b.amount).toFixed(2))
                ),
              };
            }).amount;
            fund_requests.push(Case);
          });
        })
        .then(function () {
          budget_table = return_budgets_data_table(fund_requests);
        });

      /* Adding Signatories */
      var cMap = {};
      var self = this;
      this.db
        .collection("signatories")
        .doc(CONFIG.semester)
        .get()
        .then(function (doc) {
          var Data = doc.data();
          if (Data == undefined) {
            return;
          }

          Data["signatories"]
            .filter(function (Case) {
              return Case.Email != undefined;
            })
            .forEach(function (Case) {
              $("#sList").append(
                $("<option>").text(Case.Name + ", " + Case.Email)
              );
              cMap[Case.Email] = Case.Name;
            });
        });
      function AddSignatories() {
        var sList = $("#signatorsList").val();
        var uList = [],
          aList = [];
        sList.split("\n").forEach(function (Case) {
          var El = Case.split(",");
          if (El[0] == undefined || El[1] == undefined) {
            alert("Invalid delimiter");
            return;
          }
          El[0] = El[0].trim();
          El[1] = El[1].trim();

          if (cMap[El[1]] == undefined) {
            uList.push(El);
          } else {
            // already in the list
            aList.push(El);
          }
        });
        if (aList.length == 0) {
          var nList = [];
          uList.forEach(function (val) {
            nList.push({ Name: val[0], Email: val[1] });
          });
          var res = Object.entries(cMap)
            .map(function (entry) {
              return { Name: entry[1], Email: entry[0] };
            })
            .concat(nList);
          $(".alert-area").empty();

          self.db
            .collection("signatories")
            .doc(CONFIG.semester)
            .set({
              signatories: res,
            })
            .then(function () {
              alert("Signators added to the database");
              window.location.reload();
            });
        } else {
          var _listAlreadyStr = aList
            .map((arr) => "<li>" + arr[0] + ", &lt;" + arr[1] + "&gt;</li>")
            .join("");
          var Duplicatealert = $(`<div class="alert alert-danger" role="alert">
                  <h4 class="alert-heading">Duplicates detected!</h4>
                  <p>Following signators already exist in the database, please remove them from the list.</p>
                  <hr>
                  ${_listAlreadyStr}
                </div>`);
          $(".alert-area").empty();
          $(".alert-area").append(Duplicatealert);
        }
      }
      $("#add-signators").click(AddSignatories);
    }

    view_funding_poll_results() {
      var json_obj = {
        results: [],
      };

      if (!CONFIG.direct_server_load) {
        $.ajax({
          dataType: "json",
          url:
            "./data/" +
            CONFIG.poll_name +
            "-" +
            CONFIG.poll_id +
            "-results.json",
          data: {},
          success: function (response) {
            var results = response.results.slice(0, response.results.length);
            show_results(results);
          },
          error: function (e) {
            console.log(e);
          },
        });
      } else {
        this.db
          .collection("registered_clubs")
          .where("poll_participate", "==", true)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              var data = doc.data();
              json_obj.results.push({ title: data.title, votes: data.votes });
            });
          })
          .then(function () {
            show_results(json_obj.results);
          });
      }

      function show_results(data) {
        if (!Util.is_mobile()) {
          Util.visualise_results(data);
        } else {
          var placeholder = $("#sin-fp-results-graphic");
          var $img = $("<img>").attr({
            src: "http://reedsb.com/data/mobile_results_fall2019_sb_fp.png",
            width: "100%",
          });
          placeholder.append($img);
        }
      }

      Util.congratulatory_confetti();

      $("#sin-fp-timeout-alert .jumbotron-alert").click(function () {
        window.location.href = "http://reedsb.com/en-us/request-funds.php";
      });
    }

    run_for_senate() {
      if (!this.is_view("run-for-senate")) {
        return;
      }
      var self = this;

      // set the name in the input category
      var name_input = $("#sin-rfs-form-name");
      name_input
        .attr("placeholder", this.unsafe_user.displayName)
        .val(this.unsafe_user.displayName)
        .focus()
        .blur();

      // load senate positions
      var senate_positions = [];

      this.db
        .collection("elections")
        .doc(CONFIG.secampaign)
        .get()
        .then(function (doc) {
          var data = doc.data();
          if (data == undefined) {
            return;
          }
          senate_positions = data["senate_positions"];
        })
        .then(function () {
          //console.log(signatories);
          Util.make_senate_position_selector(
            "#sin-rfs-form-position",
            senate_positions
          );
        });

      function campaign_text_editor() {
        var campaign_text = $("#sin-rfs-form-campaign-msg");
        var campaign_progress = $("#sin-rfs-campaign-prog");
        campaign_text.bind("input propertychange", function () {
          var count_bar = $("#sin-rfs-campaign-info");
          var L = this.value.length,
            Max = CONFIG.campaign_max_length,
            Min = CONFIG.campaign_min_length;
          if (this.value.length > 0) {
            campaign_progress.css("height", "5px");
            campaign_progress
              .find("div")
              .css("width", parseInt((L * 100) / Max) + "%");
            count_bar.show();
            count_bar.text(`${L}/${Max}`);
          } else {
            campaign_progress.css("height", "5px");
            count_bar.hide();
            count_bar.text("0/" + Max);
          }
          if (L > Max || L < Min) {
            campaign_progress.find("div").addClass("bg-danger");
            count_bar.addClass("text-danger");
            count_bar.hide();
            if (L > Max) {
              count_bar.text(`You can only write upto ${Max} characters.`);
            }
            if (L < Min) {
              count_bar.text(
                `${L}/${Max} (You should write at least ${Min} characters.)`
              );
            }
            count_bar.show();
          } else {
            campaign_progress.find("div").removeClass("bg-danger");
            count_bar.removeClass("text-danger");
            count_bar.show();
            count_bar.text(`${L}/${Max}`);
          }
        });
      }
      campaign_text_editor();

      function validate_form(data) {
        if (![0, 1, 2, 3].includes(parseInt(data.school_year))) {
          console.log(typeof data.school_year);
          alert("Invalid school year");
          return false;
        }
        if (data.senate_position == "") {
          alert("Invalid senate position");
          return false;
        }
        if (
          data.campaign_msg.length > CONFIG.campaign_max_length ||
          data.campaign_msg.length < CONFIG.campaign_min_length
        ) {
          alert("Spiel too long/too short.");
          return false;
        }
        if (!data.certifications) {
          alert("Please check all the certifications.");
          return false;
        }
        return true;
      }
      function submit_nomination(e) {
        e.preventDefault();
        var name = self.unsafe_user.displayName;
        var school_year = $("input[name='sin-rfs-form-year']:checked").val();
        var senate_position = $("#sin-rfs-form-position").val();
        var campaign_msg = $("#sin-rfs-form-campaign-msg").val();
        var certifications =
          $("#sin-rfs-form-certification-0").is(":checked") &&
          $("#sin-rfs-form-certification-1").is(":checked") &&
          $("#sin-rfs-form-certification-2").is(":checked") &&
          $("#sin-rfs-form-certification-3").is(":checked") &&
          $("#sin-rfs-form-certification-4").is(":checked");
        var data = {
          name: name,
          photoURL: self.auth.currentUser.photoURL,
          school_year: parseInt(school_year),
          senate_position: senate_position,
          campaign_msg: campaign_msg,
          certifications: certifications,
          votes: 0,
          campaign: CONFIG.secampaign,
          registered: fb.firestore.FieldValue.serverTimestamp(),
        };
        if (validate_form(data)) {
          self.db
            .collection("nominations")
            .doc(CONFIG.secampaign)
            .update({
              nominations: fb.firestore.FieldValue.arrayUnion(data),
            })
            .then(function (docRef) {
              var new_senate_positions;
              if (
                senate_positions.find((el) => el.Role == data.senate_position)
              ) {
                new_senate_positions = senate_positions.map(function (el) {
                  if (el.Role == data.senate_position) {
                    el.Role = data.senate_position;
                    el.Count = el.Count + 1;
                  }
                  return el;
                });
              } else {
                new_senate_positions = senate_positions.concat([
                  {
                    Role: data.senate_position,
                    Primary: false,
                    Count: 0,
                  },
                ]);
              }
              self.db
                .collection("elections")
                .doc(CONFIG.secampaign)
                .set(
                  {
                    senate_positions: new_senate_positions,
                  },
                  { merge: true }
                )
                .then(function (d) {
                  alert(
                    "Your senate nomination was successfully submitted. Thank you!"
                  );
                  window.location.href = document.referrer;
                })
                .catch(function (error) {
                  if (self.DEBUG_MODE) {
                    console.error("error in run_for_senate module", error);
                  }
                });
            })
            .catch(function (error) {
              if (self.DEBUG_MODE) {
                console.error("error in run_for_senate module", error);
              }
            });
        }
      }

      $("#sin-rfs-form-submit").click(submit_nomination);
    }

    /* Senate election functions */
    senate_election() {
      var self = this;
      this.db
        .collection("users_who_have_voted")
        .doc(CONFIG.secampaign)
        .where("Email", "==", this.auth.currentUser.email)
        .get()
        .then(function (querySnapshot) {
          if (querySnapshot.size == 0) {
            $("#sin-se-double-alert").hide();
            var SEV = new SenateElectionViewer(self);
            SEV.begin();
          } else if (querySnapshot.size >= 1) {
            $("#sin-se-double-alert").show();
          }
        });
    }

    view_senate_election_results() {}
  }

  function show(el) {
    el.removeClass("d-none");
  }
  function hide(el) {
    el.addClass("d-none");
  }

  class SenateElectionViewer {
    constructor(app_obj) {
      this.nominee_data = [];
      this.results = {};
      this.app = app_obj;
      this.intro_screen = $("#intro-screen");
      this.vote_how_el = $("#se-vote-how");
      this.vote_done_el = $("#se-vote-done");
      this.vote_screen = $("#se-voter");
      this.preloader_screen = $("#preloader-screen");
      this.voting_index = -1;
      this.fix_cursor();
    }

    begin() {
      this._intro_screen();
    }

    fix_cursor() {
      $("button").on("mouseover", function () {
        $(this).addClass("click-cursor");
      });
      $("button").on("mouseout", function () {
        $(this).removeClass("click-cursor");
      });
      $("button").on("mousedown", function () {
        $(this).removeClass("click-cursor");
        $(this).addClass("click-md-cursor");
      });
      $("button").on("mouseup", function () {
        $(this).removeClass("click-md-cursor");
        $(this).addClass("click-cursor");
      });

      $(".grabbable").on("mouseover", function () {
        $(this).addClass("sin-se-item-interacted");
        $(this).addClass("draggable-cursor");
      });
      $(".grabbable").on("mouseout", function () {
        if (!Boolean($(this).attr("clicked"))) {
          $(this).removeClass("sin-se-item-interacted");
        }
        $(this).removeClass("draggable-cursor");
      });
      $(".grabbable").click(function () {
        $(".grabbable").removeClass("sin-se-item-interacted");
        $(".grabbable").removeAttr("clicked");
        $(this).addClass("sin-se-item-interacted");
        $(this).attr("clicked", true);
        console.log($(this).attr("clicked"));
      });
      $("body").addClass("auto-cursor");
    }

    _intro_screen() {
      var self = this;
      show(this.intro_screen),
        hide(this.vote_how_el),
        hide(this.vote_done_el),
        hide(this.vote_screen),
        hide(this.preloader_screen);
      this.app.db
        .collection("elections")
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (request) {
            var request_Data = request.data();
            self.senate_positions = request_Data.senate_positions;
            self.users_who_have_voted = request_Data.users_voted;
          });
        })
        .then(function () {
          $("#sin-se-voter-count").text(self.users_who_have_voted);
          self.start_timer($("#sin-se-time-until"), CONFIG.seends);
          $("#sin-se-enter").click(function (e) {
            e.preventDefault();
            show(self.preloader_screen);
            setTimeout(self.proceed_step1.bind(self), 500);
          });
        });
    }

    proceed_step1() {
      show(this.vote_how_el),
        hide(this.intro_screen),
        hide(this.vote_done_el),
        hide(this.vote_screen),
        hide(this.preloader_screen);
      var qor = $("#sin-se-qor-button");
      var nqor = $("#sin-se-nqor-button");
      qor.click(this.proceed_step2.bind(this));
      var self = this;
      nqor.click(function () {
        self.nqor = true;
        self.proceed_finish();
      });
    }
    adjust_frame_size() {
      var self = this;
      self.modal_explain = this.app.mobile;
      var comp1 = $("#sin-se-comp1"),
        comp2 = $("#sin-se-comp2");
      if (!this.app.mobile) {
        var w = $("body").width();
        if (760 < w && w < 1555) {
          comp1.removeClass("col-md-4 col-12 col-sm-12");
          comp2.removeClass("col-md-8 col-0 com-sm-0");
          comp1.addClass("col-md-6 col-12 col-sm-6");
          comp2.addClass("col-md-6 col-12 col-sm-6");
        } else {
          /*when it's big*/
          comp1.removeClass("col-md-6 col-12 col-sm-6");
          comp2.removeClass("col-md-6 col-12 col-sm-6");
          comp1.addClass("col-md-4 col-12 col-sm-12");
          comp2.addClass("col-md-8 col-0 com-sm-0");
        }
      } else {
        comp1.addClass("col-12");
        comp2.addClass("col-0");
      }

      var hT = $("body").outerHeight();
      var h1 = $("#sin-se-position-box").outerHeight();
      var h2 = $("#sin-se-instructions").outerHeight();
      var h3 = $("#sin-se-position-box").outerHeight();
      var rearr_el = $("#sin-se-rearranger");
      var bordT = rearr_el.outerHeight() - rearr_el.innerHeight();
      var paddT = rearr_el.innerHeight() - rearr_el.height();
      var margT = rearr_el.outerHeight(true) - rearr_el.outerHeight();
      rearr_el.css({ height: hT - (h1 + h2 + h3 + bordT + paddT + margT) });
    }
    proceed_step2() {
      show(this.preloader_screen),
        hide(this.vote_screen),
        hide(this.vote_how_el),
        hide(this.intro_screen),
        hide(this.vote_done_el);
      var self = this;

      /***********************************************************/
      /*Dynamically change the widths so that the form looks good*/
      /***********************************************************/
      this.adjust_frame_size();
      $(window).on("resize", this.adjust_frame_size.bind(this));

      this.app.db
        .collection("nominations")
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (request) {
            var request_Data = request.data();
            self.nominee_data.push(request_Data);
          });
        })
        .then(function () {
          show(self.vote_screen),
            hide(self.vote_how_el),
            hide(self.intro_screen),
            hide(self.vote_done_el),
            hide(self.preloader_screen);
          self.prepare_for_voting(self.nominee_data);
          self.next_voting();
        });
    }

    submit_votes() {
      var self = this;
      var batch = self.app.db.batch();
      var docRef = self.app.db.collection("elections").doc(CONFIG.secampaign);
      var update_obj = {};
      Object.keys(this.results).forEach(function (key) {
        update_obj[`Results-${key.replace(/\s/g, "-")}`] = {};
        update_obj[`Results-${key.replace(/\s/g, "-")}`][
          String(self.results[key])
        ] = fb.firestore.FieldValue.increment(1);
      });
      update_obj["users_voted"] = fb.firestore.FieldValue.increment(1);
      batch.set(docRef, update_obj, { merge: true });
      batch.commit().then(function () {
        console.log("done!!");
      });
    }

    prepare_for_voting(data) {
      var nominations_by_case = {};
      data.forEach(function (Case) {
        if (nominations_by_case[Case.senate_position] == undefined) {
          nominations_by_case[Case.senate_position] = [];
        }
        nominations_by_case[Case.senate_position].push(Case);
      });
      /* group each case by the position */
      this.nominations_by_case = nominations_by_case;
      /* add only one event listener */
      var self = this;
      $("#sin-se-submit-button").click(function () {
        if (self.nominations_by_case == undefined) return;
        var C = Object.keys(self.nominations_by_case);
        if (self.voting_index + 1 == C.length - 1) {
          $("#sin-se-submit-button").text("Submit");
        }

        var candidates =
          self.nominations_by_case[
            Object.keys(nominations_by_case)[self.voting_index]
          ];
        var dom_cands = $("#sin-se-items").children();
        var voter_index = 0;

        var result_str = "";
        dom_cands.each(function () {
          var name = atob($(this).attr("data-checksum"));
          result_str += `{${name.replace(/\s/g, "::")}}`;
        });
        self.results[
          Object.keys(nominations_by_case)[self.voting_index]
        ] = result_str;
        if (self.voting_index + 1 < C.length) {
          self.next_voting();
        } else {
          self.proceed_finish();
        }
      });
      var item_box = $("#sin-se-items");
      var sortable = new Sortable(item_box[0], {
        animation: 150,
        easing: "cubic-bezier(1, 0, 0, 1)",
        ghostClass: "sortable-ghost", // Class name for the drop placeholder
        chosenClass: "sortable-chosen", // Class name for the chosen item
        dragClass: "sortable-drag", // Class name for the dragging item
        dragoverBubble: false,
        fallbackOnBody: true,
        forceFallback: true,
        onStart: function (evt) {
          $(evt.item).css("zoom", 0.8);
          $("body").addClass("dragging-cursor");
          $("body").removeClass("auto-cursor");
        },
        onEnd: function (evt) {
          var self = $(evt.item);
          self.css("zoom", 1);
          item_box.children("div").each(function (i) {
            $(this)
              .find(".sin-se-rank")
              .find("h1")
              .text(i + 1);
          });
          $("body").removeClass("dragging-cursor");
          $("body").addClass("auto-cursor");
        },
      });
    }

    next_voting() {
      this.voting_index++;
      hide($("#sin-se-loading-tab")), hide($("#sin-se-data-tab"));
      if (this.app.mobile) {
        hide($("#sin-se-unopened-tab"));
      } else {
        show($("#sin-se-unopened-tab"));
      }
      var rearranger_topic = $("#sin-se-running-for"),
        item_box = $("#sin-se-items"),
        self = this,
        i = 0,
        self = this,
        open_positions = Object.keys(this.nominations_by_case),
        curr_position = open_positions[this.voting_index];
      rearranger_topic.text(
        `(${this.voting_index + 1}/${
          open_positions.length
        }) Running for ${curr_position}...`
      );
      item_box.empty();
      this.nominations_by_case[curr_position].forEach(function (Case) {
        item_box.append(Util.make_nominee_box(Case, ++i));
      });

      this.adjust_frame_size();
      this.fix_cursor();

      $(".sin-se-item").click(function (e) {
        console.log(self.app.mobile);
        if (self.app.mobile) {
          $("#sin-se-loading-tab").css({
            width: "100%",
          });
          $("#sin-se-comp2").css({
            position: "absolute",
            height: "100%",
            overflow: "auto",
            background: "#272c31",
          });
          var go_back_button = $(
            '<a class="btn btn-warning go-back-btn">Go back</a>'
          );
          go_back_button.click(function (e) {
            e.preventDefault();
            hide($("#sin-se-data-tab"));
            $(this).remove();
          });
          $("body").append(go_back_button);
        }
        show($("#sin-se-loading-tab"));
        hide($("#sin-se-data-tab"));

        e.preventDefault();
        var name = atob($(this).attr("data-checksum"));
        var corresponding_case = self.nominations_by_case[curr_position].filter(
          (el) => el.name == name
        );
        console.log(corresponding_case);
        if (corresponding_case.length != 0) {
          var user_data = corresponding_case[0];
          hide($("#sin-se-unopened-tab"));
          show($("#sin-se-loading-tab"));
          $("#sin-se-data-tab").html(
            format(
              '<div class="container"><p><i>Why vote for</i></p><h1 class="display-4">{{name}}</h1><hr><p class="lead">{{msg}}</p><small class="text-light">Last updated on {{date}}.</small></div></div>',
              {
                name: user_data.name,
                msg: user_data.campaign_msg,
                school_year: Util.get_worded_school_year(user_data.school_year),
                date: new Date(parseInt(user_data.registered.seconds) * 1000)
                  .toISOString()
                  .substr(0, 10),
              }
            )
          );
          setTimeout(function () {
            hide($("#sin-se-loading-tab"));
            show($("#sin-se-data-tab"));
          }, Math.random() * 1e3);
        }
      });
    }

    proceed_finish() {
      var self = this;
      hide(this.vote_how_el), hide(this.intro_screen), hide(this.vote_screen);
      show(this.preloader_screen);
      setTimeout(function () {
        show(self.vote_done_el);
        hide(self.preloader_screen);
        self.submit_votes();
        setTimeout(function () {
          self.app.db
            .collection("users_who_have_voted_" + CONFIG.secampaign)
            .add({
              Email: self.app.auth.currentUser.email,
              Time: fb.firestore.FieldValue.serverTimestamp(),
            })
            .then(function () {
              var el = $("#sin-se-redirect-count");
              self.start_timer(el, new Date().getTime() + 5000, function () {
                window.location.href = "./";
              });
            });
        });
      }, 300);
    }

    start_timer(obj, time, fn) {
      var countdowndate = time;
      // Update the count every 1 second
      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the countdown date
        var distance = countdowndate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        var str = "";
        str += days != 0 ? days + "d" + " " : "";
        str += hours != 0 ? hours + "h" + " " : "";
        str += minutes != 0 ? minutes + "m" + " " : "";
        str += seconds != 0 ? seconds + "s" + " " : "";
        obj.html(str);
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          if (fn != undefined) {
            fn.call();
          }
          obj.text("EXPIRED");
        }
      });
    }

    _carousel() {
      var board = document.querySelector("#board");
      var carousel = new Carousel(board);
    }
  }

  class Carousel {
    constructor(element) {
      this.board = element;

      this.action_wrapper = "#wrapper";

      // add first two cards programmatically
      this.push();
      this.push();

      // handle gestures
      this.handle();

      // to add toggle modal functionality
      this.releasedTaps = 0;

      // for animations
      this.transition_speed = 5000;
      this.board_colors = {
        DEFAULT: "#ECEFF1",
        POSITIVE: "#28A745",
        NEGATIVE: "#DC3545",
        BOOST: "#E83E8C",
      };

      this._center_el(this.action_wrapper);
      $(window).on(
        "resize",
        function () {
          console.log("ddd");
          this._center_el(this.action_wrapper);
        }.call(this)
      );
    }

    handle() {
      // list all cards
      this.cards = this.board.querySelectorAll(".card");

      // get top card
      this.topCard = this.cards[this.cards.length - 1];

      // get next card
      this.nextCard = this.cards[this.cards.length - 2];

      // if at least one card is present
      if (this.cards.length > 0) {
        // set default top card position and scale
        this.topCard.style.transform =
          "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)";

        // destroy previous Hammer instance, if present
        if (this.hammer) this.hammer.destroy();

        // listen for tap and pan gestures on top card
        this.hammer = new Hammer(this.topCard);
        this.hammer.add(new Hammer.Tap());
        this.hammer.add(
          new Hammer.Pan({ position: Hammer.position_ALL, threshold: 0 })
        );

        // pass events data to custom callbacks
        this.hammer.on("tap", (e) => {
          this.onTap(e);
        });
        this.hammer.on("pan", (e) => {
          this.onPan(e);
        });
      }
    }

    onTap(e) {
      // get finger position on top card
      let propX =
        (e.center.x - e.target.getBoundingClientRect().left) /
        e.target.clientWidth;

      // get degree of Y rotation (+/-15 degrees)
      let rotateY = 15 * (propX < 0.05 ? -1 : 1);

      // change the transition property
      this.topCard.style.transition = "transform 100ms ease-out";

      // rotate
      this.topCard.style.transform =
        "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(" +
        rotateY +
        "deg) scale(1)";

      if (++this.releasedTaps % 2) {
        this.topCard.classList.remove("card--expanded");
        $(this.topCard).animate({ scrollTop: 0 }, "fast");
      } else if (!this.isPanning) {
        this.topCard.classList.add("card--expanded");
      }

      // wait transition end
      setTimeout(() => {
        // reset transform properties
        this.topCard.style.transform =
          "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)";
      }, 100);
    }

    onPan(e) {
      if (!this.isPanning) {
        this.isPanning = true;

        // remove transition properties
        this.topCard.style.transition = null;
        if (this.nextCard) this.nextCard.style.transition = null;

        // get top card coordinates in pixels
        let style = window.getComputedStyle(this.topCard);
        let mx = style.transform.match(/^matrix\((.+)\)$/);
        this.startPosX = mx ? parseFloat(mx[1].split(", ")[4]) : 0;
        this.startPosY = mx ? parseFloat(mx[1].split(", ")[5]) : 0;

        // get top card bounds
        let bounds = this.topCard.getBoundingClientRect();

        // get finger position on top card, top (1) or bottom (-1)
        this.isDraggingFrom =
          e.center.y - bounds.top > this.topCard.clientHeight / 2 ? -1 : 1;
      }

      // calculate new coordinates
      let posX = e.deltaX + this.startPosX;
      let posY = e.deltaY + this.startPosY;

      // get ratio between swiped pixels and the axes
      let propX = e.deltaX / this.board.clientWidth;
      let propY = e.deltaY / this.board.clientHeight;

      // get swipe direction, left (-1) or right (1)
      let dirX = e.deltaX < 0 ? -1 : 1;

      // calculate rotation, between 0 and +/- 45 deg
      let deg = this.isDraggingFrom * dirX * Math.abs(propX) * 45;

      // calculate scale ratio, between 95 and 100 %
      let scale = (95 + 5 * Math.abs(propX)) / 100;

      // move top card
      this.topCard.style.transform =
        "translateX(" +
        posX +
        "px) translateY(" +
        posY +
        "px) rotate(" +
        deg +
        "deg) rotateY(0deg) scale(1)";

      // scale next card
      if (this.nextCard)
        this.nextCard.style.transform =
          "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(" +
          scale +
          ")";

      if (e.isFinal) {
        this.isPanning = false;

        let successful = false;

        // set back transition properties
        this.topCard.style.transition = "transform 200ms ease-out";
        if (this.nextCard)
          this.nextCard.style.transition = "transform 100ms linear";

        // check threshold
        if (propX > 0.25 && e.direction == Hammer.DIRECTION_RIGHT) {
          successful = true;
          // get right border position
          posX = this.board.clientWidth;
        } else if (propX < -0.25 && e.direction == Hammer.DIRECTION_LEFT) {
          successful = true;
          // get left border position
          posX = -(this.board.clientWidth + this.topCard.clientWidth);
        } else if (propY < -0.25 && e.direction == Hammer.DIRECTION_UP) {
          successful = true;
          // get top border position
          posY = -(this.board.clientHeight + this.topCard.clientHeight);
        }

        if (successful) {
          // throw card in the chosen direction
          this.topCard.style.transform =
            "translateX(" +
            posX +
            "px) translateY(" +
            posY +
            "px) rotate(" +
            deg +
            "deg)";

          // wait transition end
          setTimeout(() => {
            // remove swiped card
            this.board.removeChild(this.topCard);
            // add new card
            this.push();
            // handle gestures on new top card
            this.handle();
          }, 200);
        } else {
          // reset cards position
          this.topCard.style.transform =
            "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)";
          if (this.nextCard)
            this.nextCard.style.transform =
              "translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(0.95)";
        }
      }
    }

    push() {
      // get list of all current candidates

      let card = document.createElement("div");
      let cardBody = document.createElement("div");
      card.classList.add("card");

      let cardImage = document.createElement("img");
      cardImage.setAttribute("draggable", false);
      cardImage.classList.add("card-img-top");
      cardImage.src =
        "https://picsum.photos/286/180/?random=" +
        Math.round(Math.random() * 1000000);
      cardImage.alt = Math.round(Math.random() * 1000000) + "')";

      function text_node_generator(el, cls, txt = undefined) {
        var h = document.createElement(el);
        var t = document.createTextNode(txt);
        for (var i = 0; i < cls.length; i++) {
          h.classList.add(cls[i]);
        }
        if (typeof txt != undefined) {
          h.appendChild(t);
        }
        return h;
      }

      var title = text_node_generator("H3", ["card-title"], "Farming Club");
      var founders_area = $('<p class="h6"></p>');
      var description;
      //var description = text_node_generator( 'P', ['card-text', 'vt-text', 'lt-text'], "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." );

      cardBody.classList.add("lt-cont", "card-body");

      var founders = [
        { name: "Parth Raghav", email: "raghavp@reed.edu" },
        { name: "Nama Shitushah", email: "namas@reed.edu" },
      ];

      for (var i = 0; i < founders.length; i++) {
        founders_area.append(
          $(
            "<span>" +
              founders[i].name +
              " <b>(" +
              founders[i].email +
              ")</b></span>"
          )
        );
        if (i < founders.length - 1) {
          founders_area.append("<br>");
        }
      }

      cardBody.appendChild(title);
      cardBody.appendChild(founders_area[0]);
      cardBody.appendChild(description);

      card.appendChild(cardImage);
      card.appendChild(cardBody);

      if (this.board.firstChild) {
        this.board.insertBefore(card, this.board.firstChild);
      } else {
        this.board.append(card);
      }
    }

    // private functions
    _center_el(el) {
      $(el).css("position", "absolute");
      //$(el).css("top", Math.max(0, (($(window).height() - $(el).outerHeight()) / 2) + $(window).scrollTop()) + "px");
      $(el).css("bottom", "10%");
      $(el).css(
        "left",
        Math.max(
          0,
          ($(window).width() - $(el).outerWidth()) / 2 + $(window).scrollLeft()
        ) + "px"
      );
    }
  }

  class FundingPollViewer {
    constructor(app_obj, app_data) {
      this.views = {
        preloader: "section#preloader-screen",
        intro: "section#intro-screen",
        voting: "section#voting-screen",
      };
      this.lag = 600;

      this.app = app_obj;
    }

    call_micro_constructor(view) {
      if (view == this.views.intro) {
        this._constructor_intro();
      } else if (view == this.views.voting) {
        this._constructor_voting();
      }
    }

    _constructor_intro() {
      var countdown_el = $("#sin-fp-time-until");
      var votercount_el = $("#sin-fp-voter-count");

      // setting up the countdown

      var countdowndate = CONFIG.fpends;
      // Update the count every 1 second
      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the countdown date
        var distance = countdowndate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        var str = "";
        str += days != 0 ? days + "d" + " " : "";
        str += hours != 0 ? hours + "h" + " " : "";
        str += minutes != 0 ? minutes + "m" + " " : "";
        str += seconds != 0 ? seconds + "s" + " " : "";
        countdown_el.html(str);
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      });

      // setting up the votercount
      this.app.db
        .collection("polls")
        .doc(CONFIG.poll_name + "-" + CONFIG.poll_id)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            var vt = doc.data()["voter-turnout"];
            votercount_el.html(vt);
          } else {
            votercount_el.html(0);
          }
        })
        .catch(function (error) {
          console.log("Error getting the voter turnout");
        });
    }

    _constructor_voting() {
      var instruction_modal = $("#instruction_modal");
      var voting_screen = $("section#voting-screen");
      var like_counter = $("#sin-fp-likes");
      var dislike_counter = $("#sin-fp-dislikes");
      var boost_counter = $("#sin-fp-boosts");
      var no_of_clubs = 0;
      instruction_modal.modal("show");
      if (this.app.mobile) {
        instruction_modal.animate(
          { scrollTop: jQuery(document).height() },
          2000
        );
      }
      var registered_clubs = [],
        club_cards = [];

      function update_engagement() {
        var total_likes = 0,
          total_dislikes = 0,
          total_boosts = 0;
        registered_clubs.forEach(function (club) {
          total_likes = total_likes + (club.liked ? 1 : 0);
          total_dislikes = total_dislikes + (club.disliked ? 1 : 0);
          total_boosts = total_boosts + (club.boosted ? 1 : 0);
        });
        like_counter.text(total_likes);
        dislike_counter.text(total_dislikes);
        boost_counter.text(total_boosts);
        if (
          total_likes + total_dislikes + total_boosts <
          CONFIG.vote_submission_threshold * no_of_clubs
        ) {
          $("#sin-fp-submit-button-container").hide();
        } else {
          $("#sin-fp-submit-button-container").show();
        }
      }

      function uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (c) {
            var r = (Math.random() * 16) | 0,
              v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
          }
        );
      }

      $("#sin-fp-submit-button-container").hide();
      "poll_participate", "==", true;
      this.app.db
        .collection("registered_clubs")
        .doc(CONFIG.semester)
        .get()
        .then(function (doc) {
          if (!doc.exists) {
            return;
          }
          var clubs = doc.data()["registered_clubs"];
          no_of_clubs = clubs.length;

          clubs.forEach(function (club) {
            club.id = uuidv4();
            registered_clubs.push({
              id: club.id,
              title: club.title,
              about: club.about,
              contact: club.contact,
              signators: club.signators,
              liked: false,
              disliked: false,
              boosted: false,
            });
            var callbacks = {};
            var callback_dislike = function () {
              var pCard = $(this).parents(".pmd-card");
              if (!pCard.hasClass("card-danger")) {
                pCard.removeClass("card-warning");
                pCard.removeClass("card-success");
                pCard.addClass("card-danger");
                registered_clubs.find((el) => el.id == club.id).liked = false;
                registered_clubs.find((el) => el.id == club.id).boosted = false;
                registered_clubs.find((el) => el.id == club.id).disliked = true;
              } else {
                pCard.removeClass("card-danger");
                registered_clubs.find((el) => el.id == club.id).liked = false;
                registered_clubs.find((el) => el.id == club.id).boosted = false;
                registered_clubs.find(
                  (el) => el.id == club.id
                ).disliked = false;
              }
              update_engagement();
            };
            var callback_like = function () {
              var pCard = $(this).parents(".pmd-card");
              if (!pCard.hasClass("card-success")) {
                pCard.removeClass("card-warning");
                pCard.removeClass("card-danger");
                pCard.addClass("card-success");
                registered_clubs.find((el) => el.id == club.id).boosted = false;
                registered_clubs.find(
                  (el) => el.id == club.id
                ).disliked = false;
                registered_clubs.find((el) => el.id == club.id).liked = true;
              } else {
                pCard.removeClass("card-success");
                registered_clubs.find((el) => el.id == club.id).liked = false;
                registered_clubs.find((el) => el.id == club.id).boosted = false;
                registered_clubs.find(
                  (el) => el.id == club.id
                ).disliked = false;
              }
              update_engagement();
            };
            var callback_boost = function () {
              var pCard = $(this).parents(".pmd-card");
              if (!pCard.hasClass("card-warning")) {
                if (parseInt(boost_counter.text()) < CONFIG.max_boosts) {
                  pCard.removeClass("card-success");
                  pCard.removeClass("card-danger");
                  pCard.addClass("card-warning");
                  registered_clubs.find((el) => el.id == club.id).liked = false;
                  registered_clubs.find(
                    (el) => el.id == club.id
                  ).disliked = false;
                  registered_clubs.find(
                    (el) => el.id == club.id
                  ).boosted = true;
                } else {
                  alert("You can boost at most 6 clubs");
                }
              } else {
                pCard.removeClass("card-warning");
                registered_clubs.find((el) => el.id == club.id).liked = false;
                registered_clubs.find((el) => el.id == club.id).boosted = false;
                registered_clubs.find(
                  (el) => el.id == club.id
                ).disliked = false;
              }
              update_engagement();
            };
            var club_card = Util.generate_club_card(
              club.id,
              club.title,
              club.signators.split(","),
              club.about,
              callback_like,
              callback_dislike,
              callback_boost
            );
            club_cards.push(club_card);
          });
        })
        .then(function () {
          club_cards = Util.shuffle(club_cards);
          club_cards.forEach((card) => voting_screen.append(card));
        });

      var self = this;
      function poll_submit_fn() {
        function findClubIndex(dbData, el1) {
          return dbData.findIndex(
            (el2) => el2.title == el1.title && el2.signators == el1.signators
          );
        }
        var revisedContestantData = [];
        self.app.db
          .collection("registered_clubs")
          .doc(CONFIG.semester)
          .get()
          .then(function (doc) {
            if (!doc.exists) {
              return;
            }

            var contestantData = doc.data()["registered_clubs"];
            registered_clubs.forEach(function (club) {
              var delta_update,
                delta = club.liked || club.disliked || club.boosted;
              var i = findClubIndex(contestantData, club);
              console.log(i, contestantData, club);
              var likeDelta = club.liked ? 1 : 0;
              var dislikeDelta = club.disliked ? 1 : 0;
              contestantData[i].liked += likeDelta;
              contestantData[i].disliked += dislikeDelta;
              contestantData[i].votes += likeDelta - dislikeDelta;
            });

            revisedContestantData = contestantData;
            console.log(revisedContestantData);
          })
          .then(function () {
            self.app.db
              .collection("registered_clubs")
              .doc(CONFIG.semester)
              .update({
                registered_clubs: revisedContestantData,
              })
              .then(function () {
                console.log("vote committed");
                self.app.db
                  .collection("users_who_have_voted")
                  .doc(CONFIG.poll_name + "-" + CONFIG.poll_id)
                  .set({
                    voters: fb.firestore.FieldValue.arrayUnion({
                      Email: self.app.auth.currentUser.email,
                      Time: new Date().getTime(),
                    }),
                  })
                  .then(function () {
                    self.app.db
                      .collection("polls")
                      .doc(CONFIG.poll_name + "-" + CONFIG.poll_id)
                      .update({
                        "voter-turnout": fb.firestore.FieldValue.increment(1),
                        voters: fb.firestore.FieldValue.arrayUnion(
                          self.app.auth.currentUser.email
                        ),
                      })
                      .then(function () {
                        alert(
                          "your vote has been registered! Thank you for participating in the funding poll!"
                        );
                        window.location.reload();
                      });
                  });
              });
          });
      }
      window.poll_submit_fn_legay = function () {
        var batch = self.app.db.batch();
        var club_collection = self.app.db.collection("registered_clubs");

        registered_clubs.forEach(function (club) {
          var delta_update,
            delta = club.liked || club.disliked || club.boosted;
          if (club.liked) {
            delta_update = {
              votes: fb.firestore.FieldValue.increment(1),
              liked: fb.firestore.FieldValue.increment(1),
            };
          } else if (club.disliked) {
            delta_update = {
              votes: fb.firestore.FieldValue.increment(-1),
              disliked: fb.firestore.FieldValue.increment(1),
            };
          } else if (club.boosted) {
            delta_update = {
              votes: fb.firestore.FieldValue.increment(4),
              boosted: fb.firestore.FieldValue.increment(1),
            };
          }

          if (delta) {
            batch.set(club_collection.doc(club.id), delta_update, {
              merge: true,
            });
          }
        });

        batch.set(
          self.app.db
            .collection("polls")
            .doc(CONFIG.poll_name + "-" + CONFIG.poll_id),
          { "voter-turnout": fb.firestore.FieldValue.increment(1) },
          { merge: true }
        );

        batch
          .commit()
          .then(function () {
            console.log("vote committed!");
          })
          .then(
            self.app.db.collection("users_who_have_voted").add({
              Email: self.app.auth.currentUser.email,
              Time: fb.firestore.FieldValue.serverTimestamp(),
            })
          )
          .then(function () {
            alert(
              "your vote has been registered! Thank you for participating in the funding poll!"
            );
            window.location.reload();
          });
      };

      $("#sin-fp-submit-button").click(poll_submit_fn);
    }

    switch(view) {
      function switch_helper(view) {
        if (
          Object.values(this.views)
            .map((el) => $(el)[0])
            .includes($(view)[0])
        ) {
          for (const key in this.views) {
            var loop_view = $(this.views[key])[0],
              control_view = $(view)[0];
            if (control_view == loop_view) {
              control_view.classList.remove("d-none");
              control_view.classList.add(
                "d-" + control_view.getAttribute("data-display")
              );
            } else {
              loop_view.classList.remove(
                "d-" + loop_view.getAttribute("data-display")
              );
              loop_view.classList.add("d-none");
            }
          }
        }
        this.call_micro_constructor(view);
      }

      if (view != this.views.preloader && this.lag > 0) {
        switch_helper.bind(this)(this.views.preloader);
      }

      setTimeout(
        (function (fn, arg) {
          return fn.call(arg);
        })(switch_helper.bind(this), view),
        this.lag / 2
      );

      var self = this;
      setTimeout(function () {
        switch_helper.bind(self)(view);
      }, Math.floor(Math.random(this.lag) + this.lag / 2));

      return this;
    }

    async wait(time) {
      var self = this;
      function timeout(ms, env) {
        return new Promise((resolve) =>
          setTimeout(
            function () {
              return self;
            }.bind(env),
            ms
          )
        );
      }
      return await timeout(time, self);
    }
  }

  class FundingPoll {
    constructor(app_obj) {
      this.app = app_obj;
      this.viewer = new FundingPollViewer(this.app);
      var views = this.viewer.views;
      this.viewer.switch(views.intro);
      this.init_intro_screen();
    }

    init_intro_screen() {
      var enter_button = document.getElementById("fp-enter"),
        exit_button = document.getElementById("fp-exit");
      enter_button.onclick = (() =>
        this.viewer.switch(this.viewer.views.voting)).bind(this);
      exit_button.onclick = function () {
        if (window.location.href == document.referrer) {
          window.location.href = "http://www.studentbody.com/";
        } else {
          window.location.href = document.referrer;
        }
      };
    }
  }

  class Util {
    static get_worded_school_year(year) {
      var arr = ["First-year Student", "Sophomore", "Junior", "Senior"];
      return arr[parseInt(year) - 1];
    }

    static make_nominee_box(data, index) {
      var year = 4 - parseInt(data.school_year) + new Date().getFullYear(),
        year_short = year % 100,
        votes = parseInt(data.votes),
        vote_message;
      if (votes == 0) {
        vote_message = "Be the first one to vote for them.";
      } else if (votes == 1) {
        vote_message = "1 other person voted for them.";
      } else if (votes > 1) {
        vote_message = `${votes} other people voted for them.`;
      }
      return `
          <div class="m-1 grabbable sin-se-item row no-gutters" data-checksum=${btoa(
            data.name
          )}>
            <div class="col-2 col-sm-2 col-md-2 card sin-se-rank rounded-0">
                <h1 class="align-middle my-auto">${index}</h1>
            </div>
            <div class="col-10 col-sm-10 col-md-7 sin-se-details">
                <div class="card-body text-left">
                    <h1 class="card-title mb-0">${data.name} '${year_short}</h1>
                    <p class="card-text sin-se-description mb-0">${TFIDF(
                      data.campaign_msg
                    )}</p>
                    <p class="card-text mb-0"><small class="text-muted">${vote_message}</small></p>
                </div>
            </div>
            <div class="col-0 col-xs-0 col-sm-0 d-none d-sm-none d-xs-none col-md-3 container d-md-flex sin-se-photo">
                <img src="${
                  data.photoURL
                }" class="card-img text-center justify-content-center align-self-center mx-0 mx-auto" alt="...">
            </div>
            <div class="col-md-12 sin-se-placeholder"></div>
          </div>
          `;
    }

    static congratulatory_confetti() {
      // If set to true, the user must press
      // UP UP DOWN ODWN LEFT RIGHT LEFT RIGHT A B
      // to trigger the confetti with a random color theme.
      // Otherwise the confetti constantly falls.
      var onlyOnKonami = false;

      $(function () {
        // Globals
        var $window = $(window),
          random = Math.random,
          cos = Math.cos,
          sin = Math.sin,
          PI = Math.PI,
          PI2 = PI * 2,
          timer = 300,
          frame = undefined,
          confetti = [],
          timeout = 500;

        // Settings
        var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
          pointer = 0;

        var particles = 50,
          spread = 40,
          sizeMin = 3,
          sizeMax = 25 - sizeMin,
          eccentricity = 10,
          deviation = 100,
          dxThetaMin = -0.1,
          dxThetaMax = -dxThetaMin - dxThetaMin,
          dyMin = 0.13,
          dyMax = 0.18,
          dThetaMin = 0.4,
          dThetaMax = 0.7 - dThetaMin;
        var colorThemes = Util.shuffle([
          "#FF9800",
          "#A52A2A",
          "#5F9EA0",
          "#FF7F50",
          "#EF5350",
          "#7E57C2",
          "#2196F3",
          "#00BCD4",
          "#009688",
          "#CDDC39",
          "#808080",
          "#FFC0CB",
          "#9acd32",
          "#ee82ee",
          "#ff6347",
          "#008080",
          "#009688",
          "#6a5acd",
          "#4169e1",
        ]).map(function (el) {
          return function () {
            return el;
          };
        });
        var colorThemes = [
          function () {
            return color(
              (200 * random()) | 0,
              (200 * random()) | 0,
              (200 * random()) | 0
            );
          },
          function () {
            var black = (200 * random()) | 0;
            return color(200, black, black);
          },
          function () {
            var black = (200 * random()) | 0;
            return color(black, 200, black);
          },
          function () {
            var black = (200 * random()) | 0;
            return color(black, black, 200);
          },
          function () {
            return color(200, 100, (200 * random()) | 0);
          },
          function () {
            return color((200 * random()) | 0, 200, 200);
          },
          function () {
            var black = (256 * random()) | 0;
            return color(black, black, black);
          },
          function () {
            return colorThemes[random() < 0.5 ? 1 : 2]();
          },
          function () {
            return colorThemes[random() < 0.5 ? 3 : 5]();
          },
          function () {
            return colorThemes[random() < 0.5 ? 2 : 4]();
          },
        ];

        function color(r, g, b) {
          return "rgb(" + r + "," + g + "," + b + ")";
        }

        // Cosine interpolation
        function interpolation(a, b, t) {
          return ((1 - cos(PI * t)) / 2) * (b - a) + a;
        }

        // Create a 1D Maximal Poisson Disc over [0, 1]
        var radius = 1 / eccentricity,
          radius2 = radius + radius;
        function createPoisson() {
          // domain is the set of points which are still available to pick from
          // D = union{ [d_i, d_i+1] | i is even }
          var domain = [radius, 1 - radius],
            measure = 1 - radius2,
            spline = [0, 1];
          while (measure) {
            var dart = measure * random(),
              i,
              l,
              interval,
              a,
              b,
              c,
              d;

            // Find where dart lies
            for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
              (a = domain[i]), (b = domain[i + 1]), (interval = b - a);
              if (dart < measure + interval) {
                spline.push((dart += a - measure));
                break;
              }
              measure += interval;
            }
            (c = dart - radius), (d = dart + radius);

            // Update the domain
            for (i = domain.length - 1; i > 0; i -= 2) {
              (l = i - 1), (a = domain[l]), (b = domain[i]);
              // c---d          c---d  Do nothing
              //   c-----d  c-----d    Move interior
              //   c--------------d    Delete interval
              //         c--d          Split interval
              //       a------b
              if (a >= c && a < d)
                if (b > d) domain[l] = d;
                // Move interior (Left case)
                else domain.splice(l, 2);
              // Delete interval
              else if (a < c && b > c)
                if (b <= d) domain[i] = c;
                // Move interior (Right case)
                else domain.splice(i, 0, c, d); // Split interval
            }

            // Re-measure the domain
            for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
              measure += domain[i + 1] - domain[i];
          }

          return spline.sort();
        }

        // Create the overarching container
        var container = document.createElement("div");
        container.style.position = "fixed";
        container.style.top = "0";
        container.style.left = "0";
        container.style.width = "100%";
        container.style.height = "0";
        container.style.overflow = "visible";
        container.style.zIndex = "9999";

        // Confetto constructor
        function Confetto(theme) {
          this.frame = 0;
          this.outer = document.createElement("div");
          this.inner = document.createElement("div");
          this.outer.appendChild(this.inner);

          var outerStyle = this.outer.style,
            innerStyle = this.inner.style;
          outerStyle.position = "absolute";
          outerStyle.width = sizeMin + sizeMax * random() + "px";
          outerStyle.height = sizeMin + sizeMax * random() + "px";
          innerStyle.width = "100%";
          innerStyle.height = "100%";
          innerStyle.backgroundColor = theme();

          outerStyle.perspective = "50px";
          outerStyle.transform = "rotate(" + 360 * random() + "deg)";
          this.axis =
            "rotate3D(" +
            cos(360 * random()) +
            "," +
            cos(360 * random()) +
            ",0,";
          this.theta = 360 * random();
          this.dTheta = dThetaMin + dThetaMax * random();
          innerStyle.transform = this.axis + this.theta + "deg)";

          this.x = $window.width() * random();
          this.y = -deviation;
          this.dx = sin(dxThetaMin + dxThetaMax * random());
          this.dy = dyMin + dyMax * random();
          outerStyle.left = this.x + "px";
          outerStyle.top = this.y + "px";

          // Create the periodic spline
          this.splineX = createPoisson();
          this.splineY = [];
          for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
            this.splineY[i] = deviation * random();
          this.splineY[0] = this.splineY[l] = deviation * random();

          this.update = function (height, delta) {
            this.frame += delta;
            this.x += this.dx * delta;
            this.y += this.dy * delta;
            this.theta += this.dTheta * delta;

            // Compute spline and convert to polar
            var phi = (this.frame % 7777) / 7777,
              i = 0,
              j = 1;
            while (phi >= this.splineX[j]) i = j++;
            var rho = interpolation(
              this.splineY[i],
              this.splineY[j],
              (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
            );
            phi *= PI2;

            outerStyle.left = this.x + rho * cos(phi) + "px";
            outerStyle.top = this.y + rho * sin(phi) + "px";
            innerStyle.transform = this.axis + this.theta + "deg)";
            return this.y > height + deviation;
          };
        }

        function poof() {
          if (!frame) {
            // Append the container
            document.body.appendChild(container);

            // Add confetti
            var theme =
                colorThemes[
                  onlyOnKonami ? (colorThemes.length * random()) | 0 : 0
                ],
              count = 0;
            (function addConfetto() {
              if (onlyOnKonami && ++count > particles)
                return (timer = undefined);

              var confetto = new Confetto(theme);
              confetti.push(confetto);
              container.appendChild(confetto.outer);
              timer = setTimeout(addConfetto, 100);
            })(0);

            // Start the loop
            var prev = undefined;
            requestAnimationFrame(function loop(timestamp) {
              var delta = prev ? timestamp - prev : 0;
              prev = timestamp;
              var height = $window.height();

              for (var i = confetti.length - 1; i >= 0; --i) {
                if (confetti[i].update(height, delta)) {
                  container.removeChild(confetti[i].outer);
                  confetti.splice(i, 1);
                }
              }

              if (timer || confetti.length)
                return (frame = requestAnimationFrame(loop));

              // Cleanup
              document.body.removeChild(container);
              frame = undefined;
            });
          }
        }

        $window.keydown(function (event) {
          pointer =
            konami[pointer] === event.which
              ? pointer + 1
              : +(event.which === konami[0]);
          if (pointer === konami.length) {
            pointer = 0;
            poof();
          }
        });

        if (!onlyOnKonami) poof();
      });
    }

    static visualise_results(data) {
      //sort bars based on value
      data = data.sort(function (a, b) {
        return d3.ascending(a.votes, b.votes);
      });

      //set up svg using margin conventions - we'll need plenty of room on the left for labels
      var margin = {
        top: 15,
        right: 200,
        bottom: 15,
        left: 300,
      };

      var width = Math.max(
          500,
          window.innerWidth - 2 * (margin.left + margin.right)
        ),
        height = 1.5 * window.outerHeight - margin.top - margin.bottom;

      var svg = d3
        .select("#sin-fp-results-graphic")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      var x = d3.scale
        .linear()
        .range([0, width])
        .domain([
          0,
          d3.max(data, function (d) {
            return d.votes;
          }),
        ]);

      var y = d3.scale
        .ordinal()
        .rangeRoundBands([height, 0], 0.3)
        .domain(
          data.map(function (d) {
            return d.title;
          })
        );
      //make y axis to show bar names
      var yAxis = d3.svg
        .axis()
        .scale(y)
        //no tick marks
        .tickSize(0)
        .orient("left");

      var gy = svg
        .append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .selectAll("text")
        .attr("transform", function (d) {
          return "rotate(05)";
        });

      var bars = svg.selectAll(".bar").data(data).enter().append("g");

      //append rects
      bars
        .append("rect")
        .attr("class", function (d, i) {
          var class_obj = "bar ";
          if (data.length - i < 40) {
            return class_obj + "top40";
          } else {
            return class_obj;
          }
        })
        .attr("y", function (d) {
          return y(d.title);
        })
        .attr("height", y.rangeBand())
        .attr("x", 0)
        .attr("width", function (d) {
          return x(d.votes);
        });

      //add a value label to the right of each bar
      bars
        .append("text")
        .attr("class", "label")
        //y position of the label is halfway down the bar
        .attr("y", function (d) {
          return y(d.title) + y.rangeBand() / 2 + 4;
        })
        //x position is 3 pixels to the right of the bar
        .attr("x", function (d) {
          return x(d.votes) + 3;
        })
        .text(function (d) {
          return d.votes;
        });
    }

    static format_budget_row(d) {
      // `d` is the original data object for the row
      var unsafe_html = $("<table>")
        .addClass("p-3", "display")
        .attr({
          width: "80%",
          border: "4px solid #212529",
          cellspacing: 0,
        })
        .css({
          margin: "0px auto",
        });
      var unsafe_body = $("<tbody></tbody>"),
        cell,
        current;
      var i = 0;
      for (var i = 0; i < d.budget.length; i++) {
        cell = $("<tr></tr>");
        current = d.budget[i];
        cell.append($("<th>" + current.item + "</th>"));
        cell.append($("<th>" + current.category + "</th>"));
        cell.append($("<th>$" + current.amount + "</th>"));
        unsafe_body.append(cell);
      }
      var description = d.description;
      var link =
        "mailto:" +
        d.signators +
        "?subject=" +
        encodeURIComponent("Re: Fund Request") +
        "&body=" +
        encodeURIComponent(
          "Hi,\n\nYou requested $" + d.total + " from the Student Body Senate. "
        );
      var description_holder = $(
        `<div class="row exp-row"><div class="col-md-12 fin-dd-fopen-about p-3">${description}</div></div>`
      );
      var admin_area = $(`<div class="row exp-row d-flex justify-content-center">

            <div class="input-group input-group-lg mb-3" width="80%">
              <div class="input-group-prepend">
                <span class="input-group-text">$</span>
              </div>
              <input type="text" cl class="form-control" placeholder="How much fund to allocate?" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append">
            <a class="btn btn-warning shoot_email" data-link='${link}'><i class="fas fa-paper-plane"></i> Shoot Email</a>
              </div>
            </div>


            </div>`);

      unsafe_body.append(description_holder);
      unsafe_html.append(unsafe_body);
      unsafe_html.append(admin_area);
      unsafe_html.css({
        "padding-bottom": "30px !important",
      });

      return unsafe_html.get(0).outerHTML;
    }

    static format_club_row(d) {
      // `d` is the original data object for the row
      var unsafe_html = $("<div>").addClass("p-3");
      if ("about" in d) {
        unsafe_html.append("<h4>About the club</h4>");
        unsafe_html.append(
          '<div class="fin-dd-fopen-about">' + d.about + "</div>"
        );
        unsafe_html.append("<br>");
      }
      if (d["identity_request"] == true) {
        unsafe_html.append("<h4>Identity Status Application</h4>");
        unsafe_html.append('<h5 class="ml-3">Mission Statement</h5>');
        unsafe_html.append(
          '<div class="ml-5 fin-dd-fopen-about fin-dd-read-more">' +
            d.identity_mission +
            "</div>"
        );
        unsafe_html.append('<h5 class="ml-3">Community Building</h5>');
        unsafe_html.append(
          '<div class="ml-5 fin-dd-fopen-about fin-dd-read-more">' +
            d.identity_community +
            "</div>"
        );
        unsafe_html.append(
          '<h5 class="ml-3">Supporting Activities/Events</h5>'
        );
        unsafe_html.append(
          '<div class="ml-5 fin-dd-fopen-about fin-dd-read-more">' +
            d.identity_activity +
            "</div>"
        );
        unsafe_html.append('<h5 class="ml-3">Inclusivity</h5>');
        unsafe_html.append(
          '<div class="ml-5 fin-dd-fopen-about fin-dd-read-more">' +
            d.identity_open +
            "</div>"
        );
        unsafe_html.append('<h5 class="ml-3">Outside Funding</h5>');
        unsafe_html.append(
          '<div class="ml-5 fin-dd-fopen-about fin-dd-read-more">' +
            d.identity_outsidefunding +
            "</div>"
        );
      }

      var $mark_as_review_btn = $(
        '<a class="btn btn-success text-light m-1">Mark as reviewed</a>'
      );
      var $remove_from_funding_poll = $(
        '<a class="btn btn-danger text-light m-1">Remove from Funding Poll</a>'
      );

      $mark_as_review_btn.click(function () {});

      return unsafe_html.get(0).outerHTML;

      return '<div class="fin-dd-fopen-about">' + d.about + "</div>";
      /*return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
             '<tr>' +
                 '<td>About the organisation/club:</td>' +
                 '<td class="fin-dd-fopen-about">' + d.about + '</td>' +
             '</tr>' +
             '<tr>' +
                 '<td>Extension number:</td>' +
                 '<td>' + d.extn + '</td>' +
             '</tr>' +
             '<tr>' +
                 '<td>Extra info:</td>' +
                 '<td>And any further details here (images etc)...</td>' +
             '</tr>' +
         '</table>';  */
    }

    static itemiser() {
      var grid_vector = [1, 4, 3, 3, 1];
      var categories = [
        {
          text: "Select...",
          value: 0,
          bg_color: "#FFFFFF",
          text_color: "#000000",
        },
        {
          text: "Refreshments",
          value: 1,
          bg_color: "#009688",
          text_color: "#FFFFFF",
        },
        {
          text: "Administration",
          value: 2,
          bg_color: "#3F51B5",
          text_color: "#FFFFFF",
        },
        {
          text: "Entertainment",
          value: 3,
          bg_color: "#9C27B0",
          text_color: "#FFFFFF",
        },
        {
          text: "Capital Improvements",
          value: 4,
          bg_color: "#673AB7",
          text_color: "#FFFFFF",
        },
        { text: "A/V", value: 5, bg_color: "#FF5722", text_color: "#FFFFFF" },
        {
          text: "Miscellaneous",
          value: 6,
          bg_color: "#E91E63",
          text_color: "#FFFFFF",
        },
      ];
      function add_item(i) {
        function bootstraped_div(j) {
          return $('<div class="col-' + grid_vector[j - 1] + '"></div>');
        }
        var hash, item, category, amount, action;
        hash = bootstraped_div(1);
        hash.addClass("sin-rf-item-hash");
        hash.html(i);
        item = bootstraped_div(2);
        item.append(
          $("<input/>").attr({
            name: "sin-rf-item-name-" + i,
            id: "sin-rf-item-name-" + i,
            class: "form-control sin-rf-item-name",
            placeholder: "Item",
            ariaLabel: "Item",
          })
        );
        category = bootstraped_div(3);
        var $sel = $("<select>").attr({
          name: "sin-rf-choose-category" + i,
          id: "sin-rf-choose-category" + i,
          class: "form-control sin-rf-item-category",
        });
        $sel.change(function () {
          var current_val = $(this).val();
          var el = categories.find((el) => el.value == current_val);
          $(this).css({ background: el.bg_color, color: el.text_color });
        });

        category.append($sel);
        $.each(categories, function (i, item) {
          var option = $("<option>");
          option.html(item.text);
          $sel.append(option.attr({ value: item.value }));
        });
        amount = bootstraped_div(4);
        var amount_inner_group = $(
          '<div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text">$</span></div><input type="number" class="form-control sin-rf-item-cost" placeholder="Amount" step="0.01" aria-label="Amount" name="sin-rf-item-cost-' +
            i +
            '" id="sin-rf-item-cost-' +
            i +
            '"></div>'
        );
        amount.append(amount_inner_group);
        action = bootstraped_div(5);
        var deleter = $("<a>").attr({ href: "#", class: "text-danger" });
        deleter.html('<i class="fa fa-times"></i>');
        deleter.click(function (e) {
          e.preventDefault();
          var cost = $(this)
            .parents(".sin-rf-item-row")
            .find(".sin-rf-item-cost")
            .val();
          $(this).parents(".sin-rf-item-row").remove();
          item_count -= 1;
          //console.log(item_count, "items");
          $(".sin-rf-item-hash").each(function (i) {
            $(this).html(i + 1);
          });
          if (item_count == 0) {
            if (isVisible(header)) {
              hide(header);
            }
            if (!isVisible(empty_cart_alert)) {
              show(empty_cart_alert);
            }
          }
          var sub =
            parseFloat($("#sin-rf-item-cost-final").val()) - parseFloat(cost);
          $("#sin-rf-item-cost-final").val(parseFloat(sub).toFixed(2));
        });

        action.append(deleter);
        var row = $("<div>").attr({
          class: "row sin-rf-item-row",
          id: "sin-rf-item-row-" + i,
        });
        row
          .append(hash)
          .append(item)
          .append(category)
          .append(amount)
          .append(action);
        return row;
      }

      var item_count = 0;
      var item_adder = $("#sin-rf-add-item");
      var header = $("#sin-rf-item-header");
      var footer = $("#sin-rf-item-footer");
      var empty_cart_alert = $("#sin-rf-empty-cart");

      function hide(el, row = false) {
        if (!row) {
          el[0].classList.remove("d-block");
        }
        el[0].classList.add("d-none");
      }

      function show(el, row = false) {
        if (!row) {
          el[0].classList.add("d-block");
        }
        el[0].classList.remove("d-none");
      }

      function isVisible(el) {
        return el.is(":visible");
      }

      if (item_count == 0) {
        show(empty_cart_alert);
        hide(header, true);
      }

      item_adder.click(function (e) {
        e.preventDefault();
        var item = add_item(item_count + 1);
        footer.before(item);
        item_count += 1;
        //console.log(item_count, "items");

        if (item_count > 0) {
          if (!isVisible(header)) {
            show(header, true);
          }
          if (isVisible(empty_cart_alert)) {
            hide(empty_cart_alert);
          }
        }

        $(".input-group").off();
        $(".input-group").on("input", ".sin-rf-item-cost", function () {
          function get_total_cost() {
            var sum = 0;
            $(".input-group .sin-rf-item-cost").each(function () {
              var inputVal = $(this).val();
              if ($.isNumeric(inputVal)) {
                sum += parseFloat(inputVal);
              }
            });
            return sum;
          }
          $("#sin-rf-item-cost-final").val(
            parseFloat(get_total_cost()).toFixed(2)
          );
        });
      });
    }

    static make_purpose_selector(el) {
      $(el).selectize({
        create: true,
        sortField: "text",
      });
    }

    static make_reserve_selector(el) {
      $(el).selectize({
        create: true,
        sortField: "text",
      });
    }

    static make_organisation_selector(el, data) {
      var sorted_data = data.sort(function (a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return +1;
        return 0;
      });
      //console.log(sorted_data);
      $.each(sorted_data, function (i, item) {
        $(el).append(
          $("<option>", {
            value: item.title,
            text: item.title,
          })
        );
      });
      var $sorted_dom = $(el).children().toArray().sort();
      $(el).append($sorted_dom);
      $(el).selectize({
        create: true,
        sortField: "text",
      });
    }

    static make_senate_position_selector(el, data) {
      console.log(data[0]);
      var colorTicker = 0;
      var new_positions = [];
      var badgeColors = [
        "badge-primary",
        "badge-success",
        "badge-danger",
        "badge-warning",
        "badge-info",
      ];
      $(el).selectize({
        create: true,
        maxItems: 1,
        sortField: "Role",
        valueField: "Role",
        labelField: "Count",
        optgroups: ["Primary"],
        optgroupValueField: ["Primary"],
        optgroupField: "Primary",
        searchField: ["Role"],
        placeholder: "Click/Type to choose a senate position",
        options: data,
        render: {
          item: function (item, escape) {
            console.log(item);
            var badgeColor;
            if (item.Primary) {
              badgeColor = "badge-light";
            } else {
              badgeColor = badgeColors[(badgeColors.length - 1) % colorTicker];
              colorTicker += 1;
            }
            return (
              "<div>" +
              (item.Role
                ? '<span class="sin-rfs-name">' + escape(item.Role) + "</span>"
                : "") +
              (item.Count || item.Primary
                ? ` <span class="sin-rfs-email badge ${badgeColor}"> ` +
                  escape(item.Count) +
                  " in running </span>"
                : "") +
              "</div>"
            );
          },
          option: function (item, escape) {
            console.log(item);
            var badgeColor;
            if (item.Primary) {
              badgeColor = "badge-light";
            } else {
              badgeColor = badgeColors[(badgeColors.length - 1) % colorTicker];
              colorTicker += 1;
            }
            return (
              "<div>" +
              (item.Role
                ? '<span class="sin-rfs-name">' + escape(item.Role) + "</span>"
                : "") +
              (item.Count || item.Primary
                ? ` <span class="sin-rfs-email badge ${badgeColor}"> ` +
                  escape(item.Count) +
                  " in running </span>"
                : "") +
              "</div>"
            );
          },
        },
        create: function (input) {
          var positions = data.concat(new_positions);
          positions = data.map((el) => el.Role.toLowerCase());
          if (!positions.includes($.trim(input.toLowerCase()))) {
            var opt_add = {
              Role: $.trim(input),
              Count: 0,
              Primary: false,
            };
            new_positions.push(opt_add);
            return opt_add;
          }
          alert("Position with the same name already exists.");
          return false;
        },
      });
    }

    static make_signator_selector(el, data) {
      var REGEX_EMAIL =
        "([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@" +
        "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)";

      $(el).selectize({
        persist: false,
        maxItems: null,
        valueField: "Email",
        labelField: "Name",
        searchField: ["Name", "Email"],
        options: data,
        render: {
          item: function (item, escape) {
            return (
              "<div>" +
              (item.Name
                ? '<span class="sin-rc-name">' + escape(item.Name) + "</span>"
                : "") +
              (item.Email
                ? '<span class="sin-rc-email">' + escape(item.Email) + "</span>"
                : "") +
              "</div>"
            );
          },
          option: function (item, escape) {
            var label = item.Name || item.Email;
            var caption = item.Name ? item.Email : null;
            return (
              "<div>" +
              '<span class="label">' +
              escape(label) +
              "</span> " +
              (caption
                ? '[<i><span class="caption">' +
                  escape(caption) +
                  "</span></i>]"
                : "") +
              "</div>"
            );
          },
        },
        createFilter: function (input) {
          var match, regex;

          // email@address.com
          regex = new RegExp("^" + REGEX_EMAIL + "$", "i");
          match = input.match(regex);
          if (match) return !this.options.hasOwnProperty(match[0]);

          // name <email@address.com>
          regex = new RegExp("^([^<]*)<" + REGEX_EMAIL + ">$", "i");
          match = input.match(regex);
          if (match) return !this.options.hasOwnProperty(match[2]);

          return false;
        },
        create: function (input) {
          if (new RegExp("^" + REGEX_EMAIL + "$", "i").test(input)) {
            return { email: input };
          }
          var match = input.match(
            new RegExp("^([^<]*)<" + REGEX_EMAIL + ">$", "i")
          );
          if (match) {
            return {
              Email: match[2],
              Name: $.trim(match[1]),
            };
          }
          alert("Invalid email address.");
          return false;
        },
      });
    }

    static is_mobile() {
      var isMobile = false; //initiate as false
      // device detection
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          navigator.userAgent
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          navigator.userAgent.substr(0, 4)
        )
      ) {
        isMobile = true;
      }

      return isMobile;
    }

    static shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    static show_alert(message, alerttype) {
      $("#sin-fp-alert-placeholder").append(
        '<div id="alertdiv" class="alert alert-' +
          alerttype +
          '"><a class="close" data-dismiss="alert">×</a><span>' +
          message +
          "</span></div>"
      );

      setTimeout(function () {
        // this will automatically close the alert and remove this if the users doesnt close it in 5 secs

        $("#sin-fp-alert-placeholder").remove();
      }, 5000);
    }

    static generate_club_card(
      id,
      title,
      signators,
      content,
      callback_like,
      callback_dislike,
      callback_boost
    ) {
      var card_figure = $(
        '<div class="pmd-card-figure fp-item col d-inline-flex mx-auto"></div>'
      ).attr({ id: id });
      var card = $(
        '<div class="pmd-card pmd-card-default pmd-z-depth pmd-card-custom-view"></div>'
      );
      var card_title = $(
        '<div class="pmd-card-title d-flex flex-column"></div>'
      );
      var media_body = $('<div class="media-body media-middle"></div>');
      var title_text = $('<h1 class="pmd-card-title-text"></h1>').text(title);
      media_body.append(title_text);
      media_body.append($("<br>"));
      var signator_list = $("<div></div>");
      signators.forEach(function (el) {
        signator_list.append($("<span><i>(" + el + ")</i></span>"));
        signator_list.append($("<br>"));
      });
      media_body.append(signator_list);

      var card_body = $('<div class="pmd-card-body"></div>');
      card_body.text(content);
      var card_actions = $(' <div class="pmd-card-actions"></div>');

      var dislike_button = $(
        '<button class="btn btn-danger pmd-btn-fab pmd-ripple-effect btn-primary" type="button"><i class="fa fa-thumbs-down"></i></button>'
      );
      var like_button = $(
        '<button class="btn btn-success pmd-btn-fab pmd-ripple-effect btn-primary" type="button"><i class="fa fa-thumbs-up"></i></button>'
      );
      var boost_button = $(
        '<button class="btn btn-warning pmd-btn-fab pmd-ripple-effect btn-primary" type="button"><i class="fa fa-star"></i></button>'
      );

      dislike_button.click(callback_dislike);
      like_button.click(callback_like);
      boost_button.click(callback_boost);

      card_actions.append(dislike_button);
      card_actions.append(like_button);
      card_actions.append(boost_button);

      // putting all the components together
      card_title.append(media_body);
      card_title.append(card_body);
      card_title.append(card_actions);

      card.append(card_title);
      card_figure.append(card);

      return card_figure;
    }
  }

  class Modules {
    static resolveListRepeats(List, evals) {
      //Loop through each DOM element with [data-list-repeat] attribute
      $("[data-list-repeat]").each(function (index) {
        //Skip if already resolved
        if ($(this).attr("data-list-resolved") == "true") {
          return;
        }
        var attrVal = $(this).attr("data-list-repeat");
        var list = attrVal,
          tag = "div";
        if (attrVal.indexOf("|") > -1) {
          list = attrVal.substr(0, attrVal.indexOf("|"));
          tag = attrVal.substr(attrVal.indexOf("|") + 1);
        }
        if (Object.keys(List).indexOf(list) == -1) {
          console.error(
            "List [" + list + "] does not exist in the local datastore."
          );
        }
        //Make the template for the element that will be repeated
        var template = $(this).find(tag)[0].outerHTML;
        //console.log(template);
        //Remove the original element
        $(this).children(tag).remove();
        //Create templated children objects from the given list
        var data, rep;
        console.log(template);
        console.log(List[list][0]);
        for (var i = 0; i < List[list].length; i++) {
          data = List[list][i];

          Object.keys(evals).forEach(function (eval_name) {
            var fn = evals[eval_name];
            if (Object.keys(data).includes(eval_name)) {
              data[eval_name] = fn(data[eval_name]);
            }
          });
          rep = format(template, data.data);
          console.log(data);
          console.log(rep);
          $(this).append(rep);
        }
        $(this).attr("data-list-resolved", "false");
      });
    }

    static ActivateTouchDown() {
      (function (jQuery) {
        var offset = 220;
        var duration = 500;
        jQuery(window).scroll(function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery(".atw-down").fadeOut(duration);
          } else if (
            !(
              window.innerHeight + window.pageYOffset >=
              document.body.offsetHeight - 60
            )
          ) {
            jQuery(".atw-down").fadeIn(duration);
          }
        });

        jQuery(".atw-down").click(function (event) {
          event.preventDefault();
          jQuery("html, body").animate(
            { scrollTop: jQuery(document).height() },
            duration
          );
          return false;
        });

        jQuery(".atw-down").css(
          "left",
          $(window).width() / 2 - jQuery(".atw-down").width() / 2
        );

        jQuery(window).on("resize", function () {
          var win = $(this); //this = window
          jQuery(".atw-down").css(
            "left",
            win.width() / 2 - jQuery(".atw-down").width() / 2
          );
        });
      })($);
    }

    static ActivateStickyHeader() {
      (function (document, window, index) {
        "use strict";

        var elSelector = ".lazy-head",
          elClassHidden = "lazy-head--hidden",
          throttleTimeout = 500,
          element = document.querySelector(elSelector);

        if (!element) return true;

        var dHeight = 0,
          wHeight = 0,
          wScrollCurrent = 0,
          wScrollBefore = 0,
          wScrollDiff = 0,
          hasElementClass = function (element, className) {
            return element.classList
              ? element.classList.contains(className)
              : new RegExp("(^| )" + className + "( |$)", "gi").test(
                  element.className
                );
          },
          addElementClass = function (element, className) {
            element.classList
              ? element.classList.add(className)
              : (element.className += " " + className);
          },
          removeElementClass = function (element, className) {
            element.classList
              ? element.classList.remove(className)
              : (element.className = element.className.replace(
                  new RegExp(
                    "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                ));
          },
          throttle = function (delay, fn) {
            var last, deferTimer;
            return function () {
              var context = this,
                args = arguments,
                now = +new Date();
              if (last && now < last + delay) {
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function () {
                  last = now;
                  fn.apply(context, args);
                }, delay);
              } else {
                last = now;
                fn.apply(context, args);
              }
            };
          };

        window.addEventListener(
          "scroll",
          throttle(throttleTimeout, function () {
            dHeight = document.body.offsetHeight;
            wHeight = window.innerHeight;
            wScrollCurrent = window.pageYOffset;
            wScrollDiff = wScrollBefore - wScrollCurrent;

            if (wScrollCurrent <= 0)
              // scrolled to the very top; element sticks to the top
              removeElementClass(element, elClassHidden);
            else if (wScrollDiff > 0 && hasElementClass(element, elClassHidden))
              // scrolled up; element slides in
              removeElementClass(element, elClassHidden);
            else if (wScrollDiff < 0) {
              // scrolled down
              if (
                wScrollCurrent + wHeight >= dHeight &&
                hasElementClass(element, elClassHidden)
              )
                // scrolled to the very bottom; element slides in
                removeElementClass(element, elClassHidden);
              // scrolled down; element slides out
              else addElementClass(element, elClassHidden);
            }

            wScrollBefore = wScrollCurrent;
          })
        );
      })(document, window, 0);

      // JQUERY VERSION:

      var stickyHeader = function ($, window, document, undefined) {
        "use strict";

        var elSelector = ".lazy-head",
          elClassHidden = "lazy-head--hidden",
          throttleTimeout = 500,
          $element = $(elSelector);

        if (!$element.length) return true;

        var $window = $(window),
          wHeight = 0,
          wScrollCurrent = 0,
          wScrollBefore = 0,
          wScrollDiff = 0,
          $document = $(document),
          dHeight = 0,
          throttle = function (delay, fn) {
            var last, deferTimer;
            return function () {
              var context = this,
                args = arguments,
                now = +new Date();
              if (last && now < last + delay) {
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function () {
                  last = now;
                  fn.apply(context, args);
                }, delay);
              } else {
                last = now;
                fn.apply(context, args);
              }
            };
          };

        $window.on(
          "scroll",
          throttle(throttleTimeout, function () {
            dHeight = $document.height();
            wHeight = $window.height();
            wScrollCurrent = $window.scrollTop();
            wScrollDiff = wScrollBefore - wScrollCurrent;

            if (wScrollCurrent <= 0)
              // scrolled to the very top; element sticks to the top
              $element.removeClass(elClassHidden);
            else if (wScrollDiff > 0 && $element.hasClass(elClassHidden))
              // scrolled up; element slides in
              $element.removeClass(elClassHidden);
            else if (wScrollDiff < 0) {
              // scrolled down
              if (
                wScrollCurrent + wHeight >= dHeight &&
                $element.hasClass(elClassHidden)
              )
                // scrolled to the very bottom; element slides in
                $element.removeClass(elClassHidden);
              // scrolled down; element slides out
              else $element.addClass(elClassHidden);
            }

            wScrollBefore = wScrollCurrent;
          })
        );
      };

      $("nav#sin-app-header").addClass("lazy-head");

      stickyHeader($, window, document);
    }

    static ActivateHoverFluid() {
      var identifier = '[data-hover-active="true"]';

      var back_colors = [
        "F44336",
        "E91E63",
        "CE93D8",
        "9575CD",
        "3F51B5",
        "03A9F4",
        "00BCD4",
        "009688",
        "4CAF50",
        "8BC34A",
        "CDDC39",
        "FFEB3B",
        "FFC107",
        "FF9800",
        "FF5722",
        "000000",
      ];
      var fore_colors = [
        "000000",
        "000000",
        "000000",
        "000000",
        "FFDF00",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "FFDF00",
      ];
      var back_curren = "F44336";
      var fore_curren = "000000";

      $.fn.hoverfluid = function (tip) {
        var $this = $(this);
        var x = 0,
          y = 20,
          padding = 10,
          p;

        $this
          .hover(
            function () {
              var col = Math.floor(Math.random() * (back_colors.length - 1));

              $(tip, this)
                .show()
                .css({
                  display: "block",
                  color: "#" + fore_colors[col],
                  background: "#" + back_colors[col],
                  border: "1px solid #" + fore_colors[col],
                });

              p = $(this).position();
            },
            function () {
              $(tip, this).hide().removeAttr("style");
            }
          )
          .mousemove(function (e) {
            var mouseX = p.left + e.offsetX + (x || padding);
            var mouseY = p.top + e.offsetY + (y || padding);

            $(tip, this).show().css({
              top: mouseY,
              left: mouseX,
            });
          });
      };

      $(identifier).hoverfluid(".hover-fluid-box");
    }
  }

  class User {
    constructor(auth_user_profile) {
      this.auth_profile = auth_user_profile;
      //console.log(this.auth_profile);
    }

    // Method to request funds
    // works on request-funds.html
    request_funds() {
      const fundForm = document.querySelector("#fund-form");
      fundForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // get fund request form info
        const userName = fundForm["user-name"].value;
        const userEmail = fundForm["user-email"].value;
        const fundPurpose = fundForm["fund-purpose"].value;
        const fundRequested = fundForm["fund-requested"].value;
        //const fundBreakdown =
      });
    }
  }

  class Admin extends User {
    constructor() {
      super();
    }

    //
    // Main Admin Methods
    //
    open_fund_requests_inbox() {}
    start_election_campaign() {}
    view_running_campaign() {}
    view_past_campaigns() {}
    change_administrator() {}
  }

  function setModalMaxHeight(element) {
    this.$element = $(element);
    this.$content = this.$element.find(".modal-content");
    var borderWidth = this.$content.outerHeight() - this.$content.innerHeight();
    var dialogMargin = $(window).width() < 768 ? 20 : 60;
    var contentHeight = $(window).height() - (dialogMargin + borderWidth);
    var headerHeight = this.$element.find(".modal-header").outerHeight() || 0;
    var footerHeight = this.$element.find(".modal-footer").outerHeight() || 0;
    var maxHeight = contentHeight - (headerHeight + footerHeight);

    this.$content.css({
      overflow: "hidden",
    });

    this.$element.find(".modal-body").css({
      "max-height": maxHeight,
      "overflow-y": "auto",
    });
  }

  $(".modal").on("show.bs.modal", function () {
    $(this).show();
    setModalMaxHeight(this);
  });

  $(window).resize(function () {
    if ($(".modal.in").length != 0) {
      setModalMaxHeight($(".modal.in"));
    }
  });

  if (window.localStorage.reloaded == undefined) {
    window.localStorage.reloaded = true;
    window.location.reload(true);
  }

  $(document).ready(function () {
    if (window.localStorage.reloaded2 == undefined) {
      window.localStorage.reloaded2 = true;
      window.location.reload(true);
    }

    const app = new SinApp();
  });
})();
