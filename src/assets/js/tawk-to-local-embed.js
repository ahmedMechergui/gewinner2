(function (global) {
  global.$_Tawk_AccountKey = '5e7377188d24fc226588a2ea';
  global.$_Tawk_WidgetId = 'default';
  global.$_Tawk_Unstable = false;
  global.$_Tawk = global.$_Tawk || {};
  (function (global) {
    global.$_Tawk.widgetSettings = {
      "t": "inline",
      "h": 0,
      "w": 0,
      "minh": 60,
      "minw": 60,
      "pos": "br",
      "woc": "max",
      "dsw": false,
      "lc": "en",
      "hwol": false,
      "hwof": false,
      "hab": false,
      "dws": false,
      "hwt": true,
      "thm": {
        "hbg": "#03a84e",
        "htx": "#ffffff",
        "topc": 5,
        "btmc": 0,
        "aBblBg": "#039746",
        "aBblTx": "#ffffff",
        "vBblBg": "#e5e5e5",
        "vBblTx": "#333333"
      },
      "bbl": {
        "name": "168",
        "type": "gallery",
        "width": 124,
        "height": 79,
        "zIndex": 1,
        "rightOffset": 0,
        "bottomOffset": 30,
        "topOffset": 0,
        "leftOffset": 0,
        "rotate": 0
      },
      "mw": "round",
      "dw": "min",
      "wv": 0,
      "ws": null,
      "offlineForm": {
        "shortMessage": "Offline",
        "text": "Please fill out the form below and we will get back to you as soon as possible.",
        "fields": [{"label": "Name", "isRequired": true, "type": "name"}, {
          "label": "Email",
          "isRequired": true,
          "type": "email"
        }, {"label": "Message", "isRequired": true, "type": "message"}]
      },
      "prechatForm": null,
      "onlineGreeting": {
        "actionMessage": "Write a reply..",
        "shortMessage": "Online",
        "longMessage": "We are live and ready to chat with you now. Say something to start a live chat."
      },
      "awayGreeting": {"shortMessage": "Away", "longMessage": ""},
      "cf": null,
      "emoji": true,
      "uploads": true,
      "rating": true,
      "mprvw": true,
      "atyping": true,
      "vtyping": true,
      "tbi": true
    };
  })(global);
  (function (b) {
    var a = {
      pluralFormFunction: function (a) {
        return 1 === a ? "one" : "other"
      }, form: {}
    };
    a.form.SaveButton = {message: "Save"};
    a.form.SubmitButton = {message: "Submit"};
    a.form.StartChatButton = {message: "Start Chat"};
    a.form.CancelButton = {message: "Cancel"};
    a.form.CloseButton = {message: "Close"};
    a.form.SendButton = {message: "Send"};
    a.form.EmailPlaceholder = {message: "Email Address"};
    a.form.QuestionPlaceholder = {message: "your query.."};
    a.form.DepartmentsPlaceholder = {message: "select department.."};
    a.form.MessagePlaceholder =
      {message: "your message.."};
    a.form.NameErrorMessage = {message: "Name must be provided."};
    a.form.EmailErrorMessage = {message: "Invalid email address."};
    a.form.DepartmentsErrorMessage = {message: "Department is required."};
    a.form.QuestionErrorMessage = {message: "Question is required and must not be longer then 500 characters."};
    a.form.MessageErrorMessage = {message: "Message is required and must not be longer then 500 characters."};
    a.form.NameFormMessage = {message: "Please change your name so we can recognize you the next time."};
    a.form.EmailTranscriptFormMessage = {message: "Please fill out the form below to have this conversation sent to your email address."};
    a.form.PreChatFormMessage = {message: "Please fill out the form below to start chatting with the next available agent."};
    a.form.OfflineFormMessage = {message: "Please fill out the form below and we will get back to you as soon as possible."};
    a.form.PreChatFormMessageProfile = {message: "Please fill out the form below to start chatting with me."};
    a.form.OfflineMessageSent = {message: "Your message was sent successfully!"};
    a.form.OfflineMessageNotSent = {message: "Your message was not delivered, please retry"};
    a.form.EndChatTitle = {message: "Are you sure you want to end this chat?"};
    a.form.RequiredErrorMessage = {message: "This field is required"};
    a.form.PhoneErrorMessage = {message: "Invalid phone number"};
    a.form.saved = {message: "Saved"};
    a.form.errorSaving = {message: "Unable to save. Please try again"};
    a.form.visitButton = {message: "Visit tawk.to"};
    a.form.SubmittingProcess = {message: "Submitting"};
    a.form.EndingProcess = {message: "Ending"};
    a.form.SendingProcess = {message: "Sending"};
    a.form.SavingProcess = {message: "Saving"};
    a.form.EmailTranscriptTo = {message: "Email transcript to"};
    a.form.name = {message: "Name"};
    a.form.email = {message: "Email"};
    a.form.department = {message: "Department"};
    a.form.message = {message: "Message"};
    a.form.any = {message: "Any"};
    a.form.phone = {message: "Phone"};
    a.form.question = {message: "Question"};
    a.form.saving = {message: "Saving.."};
    a.form.SubmittedFrom = {message: "Submitted From"};
    a.form.SendMessage = {message: "Send message"};
    a.form.sendAgain =
      {message: "Send Again"};
    a.form.ChangeUsername = {message: "Change username"};
    a.form.HelloAndWelcome = {message: "Hello and Welcome"};
    a.form.EndChatMessage = {message: "Thank you for chatting with us. Feel free to start new chat session or enter your email and send a transcript of this conversation to your inbox."};
    a.form.TranscriptMessage = {message: "Feel free to enter your email and send a transcript of this conversation to your inbox."};
    a.form.chatEnded = {message: "Your chat has ended"};
    a.form.skip = {message: "Skip"};
    a.rollover = {};
    a.rollover.popOut = {message: "Pop out"};
    a.rollover.minimize = {message: "Minimize"};
    a.rollover.resize = {message: "Resize"};
    a.rollover.resendMessage = {message: "Resend message"};
    a.rollover.emailTranscriptOption = {message: "Email Transcript"};
    a.rollover.positiveRating = {message: "Rate this conversation with +1"};
    a.rollover.negativeRating = {message: "Rate this conversation with -1"};
    a.rollover.maximize = {message: "Maximize"};
    a.rollover.end = {message: "End Chat"};
    a.rollover.uploadFile = {message: "Upload File"};
    a.rollover.videoCall = {message: "Video Call"};
    a.rollover.voiceCall = {message: "Voice Call"};
    a.rollover.screenShare = {message: "Screen Share"};
    a.rollover.chatMenu = {message: "Menu"};
    a.rollover.knowledgeBase = {message: "knowledge Base"};
    a.transcript = {};
    a.transcript.transcriptSubject = {
      message: "Chat email transcript on #host started on #startedOn",
      vars: ["host", "startedOn"]
    };
    a.transcript.transcriptStartedOn = {message: "#dateString, at #time", vars: ["dateString", "time"]};
    a.transcript.me = {message: "Me"};
    a.transcript.CONVERSATION_STARTED_ON =
      {message: "Conversation started on"};
    a.overlay = {};
    a.overlay.inactive = {message: "Click here to reinitiate the chat"};
    a.overlay.maintenance = {message: "Chat is in maintenance"};
    a.overlay.cookiesOff = {message: "You can't use this chat because your browser's cookie functionality is turned off. Please turn it on and refresh your browser."};
    a.overlay.tawkContent = {message: "This widget is powered by tawk.to - a free messaging application that lets you monitor and engage with the visitors on your website."};
    a.chat =
      {};
    a.chat.visitor_name = {message: "Visitor name"};
    a.chat.like = {message: "You liked this conversation"};
    a.chat.dislike = {message: "You disliked this conversation"};
    a.chat.remove_rate = {message: "You removed your rating for this conversation"};
    a.chat.sayButton = {message: "Say"};
    a.chat.hideButton = {message: "Hide Chat"};
    a.chat.send_mail = {message: "Send Mail"};
    a.chat.AGENT_JOIN_CONVERSATION = {message: "#n has joined the conversation", vars: ["n"]};
    a.chat.AGENT_LEFT_CONVERSATION = {
      message: "#n has left the conversation",
      vars: ["n"]
    };
    a.chat.defaultName = {message: "You (change name)"};
    a.chat.messageQueuedTitile = {message: "message queued"};
    a.chat.live_chat = {message: "Live Chat"};
    a.chat.notificationTitle = {message: "notification"};
    a.chat.departmentIsOffline = {
      message: "Department #strongStart #departmentName #strongEnd is currently offline. You might be served by another department.",
      vars: ["departmentName", "strongStart", "strongEnd"]
    };
    a.chat.departmentIsAway = {
      message: "Department #strongStart #departmentName #strongEnd is currently away.",
      vars: ["departmentName", "strongStart", "strongEnd"]
    };
    a.chat.mobileName = {message: "You"};
    a.chat.chatEnded = {message: "Your chat has ended"};
    a.chat.newChat = {message: "Start New Chat"};
    a.chat.newMessages = {message: "New messages"};
    a.chat.say_something = {message: "Write a reply.."};
    a.chat.downloadFile = {message: "Download File"};
    a.chat.download = {message: "Download"};
    a.chat.limit50 = {message: "The maximum file size is 50MB, please upload a smaller file."};
    a.chat.limit2 = {message: "The maximum file size is 2MB for mobile browsers, please upload a smaller file."};
    a.chat.generalUploadError = {message: '"#fileName", please try again.', vars: ["fileName"]};
    a.chat.generalUploadErrorLabel = {message: "Unable to upload file"};
    a.chat.retry = {message: "Retry."};
    a.chat.tryAgain = {message: "Try again."};
    a.chat.dragDropText = {message: "Drop files here to upload"};
    a.chat.pasted_image_title = {message: "Pasted image at #dateTime", vars: ["dateTime"]};
    a.chat.chat_qm = {message: "Chat?"};
    a.chat.we_are_live = {message: "We are live and ready to chat with you now. Say something to start a live chat."};
    a.chat.profile_prechat_text = {message: "Please fill out the form below to start chatting with me."};
    a.chat.incoming_call_message = {message: "Incoming call from #name", vars: ["name"]};
    a.chat.accept_call = {message: "Accept"};
    a.chat.decline_call = {message: "Decline"};
    a.chat.video_call_error = {message: "Video call is not available."};
    a.chat.voice_call_error = {message: "Voice call is not available."};
    a.chat.screen_share_error = {message: "Screen share is not available."};
    a.chat.message_too_long = {message: "Message cannot exceed 5000 characters"};
    a.chat.message_not_delivered = {message: "Message not delivered, click here to resend."};
    a.chat.visitor_ringing = {message: "Calling..."};
    a.chat.agent_ringing = {message: "Incoming Call"};
    a.chat.ongoing_call = {message: "Ongoing Call"};
    a.chat.completed_call = {message: "Call ended"};
    a.chat.missed_agent = {message: "Your call was missed"};
    a.chat.missed_visitor = {message: "You missed a call"};
    a.chat.missed_visitor_messagePreview = {message: "You missed a call from"};
    a.chat.rejected_call = {message: "You rejected this call"};
    a.chat.call_end_details = {message: "Started at #startedOn and lasted #duration", vars: ["startedOn", "duration"]};
    a.chat.call_started_on = {message: "Started at #startedOn", vars: ["startedOn"]};
    a.chat.error_title = {message: "Error"};
    a.chat.call_error_load = {message: "Unable to load call details."};
    a.chat.insert_emoji = {message: "Insert emoji"};
    a.chat.uploading = {message: "Uploading..."};
    a.chat.failed = {message: "Failed"};
    a.chat.resend = {message: "Resend"};
    a.chat.justNow = {message: "just now"};
    a.chat.Warning = {message: "Warning"};
    a.chat.chat_text = {message: "Chat"};
    a.chat.mail_text = {message: "Mail"};
    a.chat.emoji_error_load = {message: "Unable to load emojis"};
    a.status = {};
    a.status.online = {message: "Online"};
    a.status.away = {message: "Away"};
    a.status.offline = {message: "Offline"};
    a.months = {};
    a.months["0"] = {message: "January"};
    a.months["1"] = {message: "February"};
    a.months["2"] = {message: "March"};
    a.months["3"] = {message: "April"};
    a.months["4"] = {message: "May"};
    a.months["5"] = {message: "June"};
    a.months["6"] = {message: "July"};
    a.months["7"] = {message: "August"};
    a.months["8"] = {message: "September"};
    a.months["9"] = {message: "October"};
    a.months["10"] = {message: "November"};
    a.months["11"] = {message: "December"};
    a.days = {};
    a.days["0"] = {message: "Sunday"};
    a.days["1"] = {message: "Monday"};
    a.days["2"] = {message: "Tuesday"};
    a.days["3"] = {message: "Wednesday"};
    a.days["4"] = {message: "Thursday"};
    a.days["5"] = {message: "Friday"};
    a.days["6"] = {message: "Saturday"};
    a.menu = {};
    a.menu.change_name = {message: "Change Name"};
    a.menu.sound_on = {message: "Sound On"};
    a.menu.sound_off = {message: "Sound Off"};
    a.menu.email_transcript = {message: "Email transcript"};
    a.menu.popout_widget = {message: "Pop out widget"};
    a.menu.end_chat_session = {message: "End this chat session"};
    a.notifications = {};
    a.notifications.maximum_file_upload_warning = {
      message: "Sorry, file transfer is limited to #limitFileNumber files at a time. Please try the following file(s) again :",
      vars: ["limitFileNumber"]
    };
    a.notifications.maximum_size_upload_warning = {
      message: "Sorry, file transfer is limited to #limitFileSize per file. Please compress the following file(s) and try again.",
      vars: ["limitFileSize"]
    };
    a.notifications.retry = {message: "Retry"};
    a.chat = a.chat || {};
    a.chat.messageQueuedText = {
      vars: ["strongStart", "strongEnd"],
      pluralVars: ["t"],
      message: {
        one: "Estimated wait time is #strongStart #t minute #strongEnd",
        other: "Estimated wait time is #strongStart #t minutes #strongEnd"
      }
    };
    a.chat.newMessage = {vars: [], pluralVars: ["num"], message: {one: "#num new message", other: "#num new messages"}};
    a.chat.seconds = {vars: [], pluralVars: ["num"], message: {one: "#num second", other: "#num seconds"}};
    a.chat.minutes =
      {vars: [], pluralVars: ["num"], message: {one: "#num minute", other: "#num minutes"}};
    a.chat.hours = {vars: [], pluralVars: ["num"], message: {one: "#num hour", other: "#num hours"}};
    b.$_Tawk.language = a;
    b.$_Tawk.languageUpdater && b.$_Tawk.languageUpdater()
  })("undefined" === typeof global ? window : global);

  (function () {
    !function (u) {
      var e;
      "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self);
      e.$__TawkEngine = u()
    }(function () {
      return function e(p, q, h) {
        function m(g, x) {
          if (!q[g]) {
            if (!p[g]) {
              var b = "function" == typeof require && require;
              if (!x && b) return b(g, !0);
              if (l) return l(g, !0);
              throw Error("Cannot find module '" + g + "'");
            }
            b = q[g] = {exports: {}};
            p[g][0].call(b.exports, function (b) {
              var l = p[g][1][b];
              return m(l ? l : b)
            }, b, b.exports, e, p, q, h)
          }
          return q[g].exports
        }

        for (var l = "function" ==
          typeof require && require, g = 0; g < h.length; g++) m(h[g]);
        return m
      }({
        debug: [function (e, p, q) {
          p.exports = e("n9i2g6")
        }, {}],
        n9i2g6: [function (e, p, q) {
          p.exports = function () {
            return function () {
            }
          }
        }, {}],
        3: [function (e, p, q) {
          function h() {
          }

          p.exports = function (m, l, g) {
            function e(b, h) {
              if (0 >= e.count) throw Error("after called too many times");
              --e.count;
              b ? (p = !0, l(b), l = g) : 0 !== e.count || p || l(null, h)
            }

            var p = !1;
            g = g || h;
            e.count = m;
            return 0 === m ? l() : e
          }
        }, {}],
        4: [function (e, p, q) {
          p.exports = function (h, m, l) {
            var g = h.byteLength;
            m = m || 0;
            l = l || g;
            if (h.slice) return h.slice(m,
              l);
            0 > m && (m += g);
            0 > l && (l += g);
            l > g && (l = g);
            if (m >= g || m >= l || 0 === g) return new ArrayBuffer(0);
            h = new Uint8Array(h);
            for (var g = new Uint8Array(l - m), e = 0; m < l; m++, e++) g[e] = h[m];
            return g.buffer
          }
        }, {}],
        5: [function (e, p, q) {
          (function (h) {
            q.encode = function (m) {
              m = new Uint8Array(m);
              var l, g = m.length, e = "";
              for (l = 0; l < g; l += 3) e += h[m[l] >> 2], e += h[(m[l] & 3) << 4 | m[l + 1] >> 4], e += h[(m[l + 1] & 15) << 2 | m[l + 2] >> 6], e += h[m[l + 2] & 63];
              2 === g % 3 ? e = e.substring(0, e.length - 1) + "=" : 1 === g % 3 && (e = e.substring(0, e.length - 2) + "==");
              return e
            };
            q.decode = function (m) {
              var l =
                0.75 * m.length, g = m.length, e = 0, p, b, t, q;
              "=" === m[m.length - 1] && (l--, "=" === m[m.length - 2] && l--);
              for (var v = new ArrayBuffer(l), R = new Uint8Array(v), l = 0; l < g; l += 4) p = h.indexOf(m[l]), b = h.indexOf(m[l + 1]), t = h.indexOf(m[l + 2]), q = h.indexOf(m[l + 3]), R[e++] = p << 2 | b >> 4, R[e++] = (b & 15) << 4 | t >> 2, R[e++] = (t & 3) << 6 | q & 63;
              return v
            }
          })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
        }, {}],
        6: [function (e, p, q) {
          (function (h) {
            function m(b) {
              for (var g = 0; g < b.length; g++) {
                var l = b[g];
                if (l.buffer instanceof ArrayBuffer) {
                  var h =
                    l.buffer;
                  if (l.byteLength !== h.byteLength) {
                    var m = new Uint8Array(l.byteLength);
                    m.set(new Uint8Array(h, l.byteOffset, l.byteLength));
                    h = m.buffer
                  }
                  b[g] = h
                }
              }
            }

            function l(b, g) {
              g = g || {};
              var l = new e;
              m(b);
              for (var h = 0; h < b.length; h++) l.append(b[h]);
              return g.type ? l.getBlob(g.type) : l.getBlob()
            }

            function g(b, g) {
              m(b);
              return new Blob(b, g || {})
            }

            var e = h.BlobBuilder || h.WebKitBlobBuilder || h.MSBlobBuilder || h.MozBlobBuilder, q;
            try {
              q = 2 === (new Blob(["hi"])).size
            } catch (b) {
              q = !1
            }
            var t;
            if (t = q) try {
              t = 2 === (new Blob([new Uint8Array([1, 2])])).size
            } catch (I) {
              t =
                !1
            }
            var v = e && e.prototype.append && e.prototype.getBlob;
            h = q ? t ? h.Blob : g : v ? l : void 0;
            p.exports = h
          }).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
        }, {}],
        7: [function (e, p, q) {
        }, {}],
        8: [function (e, p, q) {
          function h(m) {
            if (m) {
              for (var l in h.prototype) m[l] = h.prototype[l];
              return m
            }
          }

          p.exports = h;
          h.prototype.on = h.prototype.addEventListener = function (h, l) {
            this._callbacks = this._callbacks || {};
            (this._callbacks[h] = this._callbacks[h] || []).push(l);
            return this
          };
          h.prototype.once = function (h, l) {
            function g() {
              e.off(h,
                g);
              l.apply(this, arguments)
            }

            var e = this;
            this._callbacks = this._callbacks || {};
            g.fn = l;
            this.on(h, g);
            return this
          };
          h.prototype.off = h.prototype.removeListener = h.prototype.removeAllListeners = h.prototype.removeEventListener = function (h, l) {
            this._callbacks = this._callbacks || {};
            if (0 == arguments.length) return this._callbacks = {}, this;
            var g = this._callbacks[h];
            if (!g) return this;
            if (1 == arguments.length) return delete this._callbacks[h], this;
            for (var e, p = 0; p < g.length; p++) if (e = g[p], e === l || e.fn === l) {
              g.splice(p, 1);
              break
            }
            return this
          };
          h.prototype.emit = function (h) {
            this._callbacks = this._callbacks || {};
            var l = [].slice.call(arguments, 1), g = this._callbacks[h];
            if (g) for (var g = g.slice(0), e = 0, p = g.length; e < p; ++e) g[e].apply(this, l);
            return this
          };
          h.prototype.listeners = function (h) {
            this._callbacks = this._callbacks || {};
            return this._callbacks[h] || []
          };
          h.prototype.hasListeners = function (h) {
            return !!this.listeners(h).length
          }
        }, {}],
        9: [function (e, p, q) {
          p.exports = function (h, e) {
            var l = function () {
            };
            l.prototype = e.prototype;
            h.prototype = new l;
            h.prototype.constructor =
              h
          }
        }, {}],
        10: [function (e, p, q) {
          p.exports = e("./lib/")
        }, {"./lib/": 11}],
        11: [function (e, p, q) {
          p.exports = e("./socket");
          p.exports.parser = e("engine.io-parser")
        }, {"./socket": 12, "engine.io-parser": 20}],
        12: [function (e, p, q) {
          (function (h) {
            function m(b, g) {
              if (!(this instanceof m)) return new m(b, g);
              g = g || {};
              b && "object" == typeof b && (g = b, b = null);
              b ? (b = t(b), g.hostname = b.host, g.secure = "https" == b.protocol || "wss" == b.protocol, g.port = b.port, b.query && (g.query = b.query)) : g.host && (g.hostname = t(g.host).host);
              this.secure = null != g.secure ?
                g.secure : h.location && "https:" == location.protocol;
              g.hostname && !g.port && (g.port = this.secure ? "443" : "80");
              this.agent = g.agent || !1;
              this.hostname = g.hostname || (h.location ? location.hostname : "localhost");
              this.port = g.port || (h.location && location.port ? location.port : this.secure ? 443 : 80);
              this.query = g.query || {};
              "string" == typeof this.query && (this.query = v.decode(this.query));
              this.upgrade = !1 !== g.upgrade;
              this.path = (g.path || "/engine.io").replace(/\/$/, "") + "/";
              this.forceJSONP = !!g.forceJSONP;
              this.jsonp = !1 !== g.jsonp;
              this.forceBase64 =
                !!g.forceBase64;
              this.enablesXDR = !!g.enablesXDR;
              this.timestampParam = g.timestampParam || "t";
              this.timestampRequests = g.timestampRequests;
              this.transports = g.transports || ["polling", "websocket"];
              this.readyState = "";
              this.writeBuffer = [];
              this.policyPort = g.policyPort || 843;
              this.rememberUpgrade = g.rememberUpgrade || !1;
              this.binaryType = null;
              this.onlyBinaryUpgrades = g.onlyBinaryUpgrades;
              this.perMessageDeflate = !1 !== g.perMessageDeflate ? g.perMessageDeflate || {} : !1;
              !0 === this.perMessageDeflate && (this.perMessageDeflate = {});
              this.perMessageDeflate &&
              null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024);
              this.pfx = g.pfx || null;
              this.key = g.key || null;
              this.passphrase = g.passphrase || null;
              this.cert = g.cert || null;
              this.ca = g.ca || null;
              this.ciphers = g.ciphers || null;
              this.rejectUnauthorized = void 0 === g.rejectUnauthorized ? !0 : g.rejectUnauthorized;
              var l = "object" == typeof h && h;
              l.global === l && (g.extraHeaders && 0 < Object.keys(g.extraHeaders).length) && (this.extraHeaders = g.extraHeaders);
              this.open()
            }

            var l = e("./transports"), g = e("component-emitter"), q =
                e("debug")("engine.io-client:socket"), x = e("indexof"), b = e("engine.io-parser"), t = e("parseuri"),
              I = e("parsejson"), v = e("parseqs");
            p.exports = m;
            m.priorWebsocketSuccess = !1;
            g(m.prototype);
            m.protocol = b.protocol;
            m.Socket = m;
            m.Transport = e("./transport");
            m.transports = e("./transports");
            m.parser = e("engine.io-parser");
            m.prototype.createTransport = function (g) {
              q('creating transport "%s"', g);
              var h = this.query, e = {}, m;
              for (m in h) h.hasOwnProperty(m) && (e[m] = h[m]);
              e.EIO = b.protocol;
              e.transport = g;
              this.id && (e.sid = this.id);
              return new l[g]({
                agent: this.agent,
                hostname: this.hostname,
                port: this.port,
                secure: this.secure,
                path: this.path,
                query: e,
                forceJSONP: this.forceJSONP,
                jsonp: this.jsonp,
                forceBase64: this.forceBase64,
                enablesXDR: this.enablesXDR,
                timestampRequests: this.timestampRequests,
                timestampParam: this.timestampParam,
                policyPort: this.policyPort,
                socket: this,
                pfx: this.pfx,
                key: this.key,
                passphrase: this.passphrase,
                cert: this.cert,
                ca: this.ca,
                ciphers: this.ciphers,
                rejectUnauthorized: this.rejectUnauthorized,
                perMessageDeflate: this.perMessageDeflate,
                extraHeaders: this.extraHeaders
              })
            };
            m.prototype.open = function () {
              var b;
              if (this.rememberUpgrade && m.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket")) b = "websocket"; else {
                if (0 === this.transports.length) {
                  var g = this;
                  setTimeout(function () {
                    g.emit("error", "No transports available")
                  }, 0);
                  return
                }
                b = this.transports[0]
              }
              this.readyState = "opening";
              try {
                b = this.createTransport(b)
              } catch (h) {
                this.transports.shift();
                this.open();
                return
              }
              b.open();
              this.setTransport(b)
            };
            m.prototype.setTransport = function (b) {
              q("setting transport %s", b.name);
              var g = this;
              this.transport && (q("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners());
              this.transport = b;
              b.on("drain", function () {
                g.onDrain()
              }).on("packet", function (b) {
                g.onPacket(b)
              }).on("error", function (b) {
                g.onError(b)
              }).on("close", function () {
                g.onClose("transport close")
              })
            };
            m.prototype.probe = function (b) {
              function g() {
                if (x.onlyBinaryUpgrades) {
                  var h = !this.supportsBinary && x.transport.supportsBinary;
                  y = y || h
                }
                y || (q('probe transport "%s" opened', b), G.send([{type: "ping", data: "probe"}]),
                  G.once("packet", function (f) {
                    y || ("pong" == f.type && "probe" == f.data ? (q('probe transport "%s" pong', b), x.upgrading = !0, x.emit("upgrading", G), G && (m.priorWebsocketSuccess = "websocket" == G.name, q('pausing current transport "%s"', x.transport.name), x.transport.pause(function () {
                      y || "closed" == x.readyState || (q("changing transport and sending upgrade packet"), v(), x.setTransport(G), G.send([{type: "upgrade"}]), x.emit("upgrade", G), G = null, x.upgrading = !1, x.flush())
                    }))) : (q('probe transport "%s" failed', b), f = Error("probe error"),
                      f.transport = G.name, x.emit("upgradeError", f)))
                  }))
              }

              function h() {
                y || (y = !0, v(), G.close(), G = null)
              }

              function l(g) {
                var f = Error("probe error: " + g);
                f.transport = G.name;
                h();
                q('probe transport "%s" failed because of error: %s', b, g);
                x.emit("upgradeError", f)
              }

              function e() {
                l("transport closed")
              }

              function p() {
                l("socket closed")
              }

              function t(b) {
                G && b.name != G.name && (q('"%s" works - aborting "%s"', b.name, G.name), h())
              }

              function v() {
                G.removeListener("open", g);
                G.removeListener("error", l);
                G.removeListener("close", e);
                x.removeListener("close",
                  p);
                x.removeListener("upgrading", t)
              }

              q('probing transport "%s"', b);
              var G = this.createTransport(b, {probe: 1}), y = !1, x = this;
              m.priorWebsocketSuccess = !1;
              G.once("open", g);
              G.once("error", l);
              G.once("close", e);
              this.once("close", p);
              this.once("upgrading", t);
              G.open()
            };
            m.prototype.onOpen = function () {
              q("socket open");
              this.readyState = "open";
              m.priorWebsocketSuccess = "websocket" == this.transport.name;
              this.emit("open");
              this.flush();
              if ("open" == this.readyState && this.upgrade && this.transport.pause) {
                q("starting upgrade probes");
                for (var b = 0, g = this.upgrades.length; b < g; b++) this.probe(this.upgrades[b])
              }
            };
            m.prototype.onPacket = function (b) {
              if ("opening" == this.readyState || "open" == this.readyState) switch (q('socket receive: type "%s", data "%s"', b.type, b.data), this.emit("packet", b), this.emit("heartbeat"), b.type) {
                case "open":
                  this.onHandshake(I(b.data));
                  break;
                case "pong":
                  this.setPing();
                  this.emit("pong");
                  break;
                case "error":
                  var g = Error("server error");
                  g.code = b.data;
                  this.onError(g);
                  break;
                case "message":
                  this.emit("data", b.data), this.emit("message",
                    b.data)
              } else q('packet received with socket readyState "%s"', this.readyState)
            };
            m.prototype.onHandshake = function (b) {
              this.emit("handshake", b);
              this.id = b.sid;
              this.transport.query.sid = b.sid;
              this.upgrades = this.filterUpgrades(b.upgrades);
              this.pingInterval = b.pingInterval;
              this.pingTimeout = b.pingTimeout;
              this.onOpen();
              "closed" != this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
            };
            m.prototype.onHeartbeat = function (b) {
              clearTimeout(this.pingTimeoutTimer);
              var g = this;
              g.pingTimeoutTimer = setTimeout(function () {
                if ("closed" != g.readyState) g.onClose("ping timeout")
              }, b || g.pingInterval + g.pingTimeout)
            };
            m.prototype.setPing = function () {
              var b = this;
              clearTimeout(b.pingIntervalTimer);
              b.pingIntervalTimer = setTimeout(function () {
                q("writing ping packet - expecting pong within %sms", b.pingTimeout);
                b.ping();
                b.onHeartbeat(b.pingTimeout)
              }, b.pingInterval)
            };
            m.prototype.ping = function () {
              var b = this;
              this.sendPacket("ping", function () {
                b.emit("ping")
              })
            };
            m.prototype.onDrain = function () {
              this.writeBuffer.splice(0,
                this.prevBufferLen);
              this.prevBufferLen = 0;
              0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
            };
            m.prototype.flush = function () {
              "closed" != this.readyState && (this.transport.writable && !this.upgrading && this.writeBuffer.length) && (q("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
            };
            m.prototype.write = m.prototype.send = function (b, g, h) {
              this.sendPacket("message", b, g, h);
              return this
            };
            m.prototype.sendPacket =
              function (b, g, h, l) {
                "function" == typeof g && (l = g, g = void 0);
                "function" == typeof h && (l = h, h = null);
                if ("closing" != this.readyState && "closed" != this.readyState) {
                  h = h || {};
                  h.compress = !1 !== h.compress;
                  b = {type: b, data: g, options: h};
                  this.emit("packetCreate", b);
                  this.writeBuffer.push(b);
                  if (l) this.once("flush", l);
                  this.flush()
                }
              };
            m.prototype.close = function () {
              function b() {
                l.onClose("forced close");
                q("socket closing - telling transport to close");
                l.transport.close()
              }

              function g() {
                l.removeListener("upgrade", g);
                l.removeListener("upgradeError",
                  g);
                b()
              }

              function h() {
                l.once("upgrade", g);
                l.once("upgradeError", g)
              }

              if ("opening" == this.readyState || "open" == this.readyState) {
                this.readyState = "closing";
                var l = this;
                if (this.writeBuffer.length) this.once("drain", function () {
                  this.upgrading ? h() : b()
                }); else this.upgrading ? h() : b()
              }
              return this
            };
            m.prototype.onError = function (b) {
              q("socket error %j", b);
              m.priorWebsocketSuccess = !1;
              this.emit("error", b);
              this.onClose("transport error", b)
            };
            m.prototype.onClose = function (b, g) {
              if ("opening" == this.readyState || "open" == this.readyState ||
                "closing" == this.readyState) q('socket close with reason: "%s"', b), clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", b, g), this.writeBuffer = [], this.prevBufferLen = 0
            };
            m.prototype.filterUpgrades = function (b) {
              for (var g = [], h = 0, l = b.length; h < l; h++) ~x(this.transports, b[h]) && g.push(b[h]);
              return g
            }
          }).call(this, "undefined" !== typeof self ?
            self : "undefined" !== typeof window ? window : {})
        }, {
          "./transport": 13,
          "./transports": 14,
          "component-emitter": 8,
          debug: "n9i2g6",
          "engine.io-parser": 20,
          indexof: 24,
          parsejson: 26,
          parseqs: 27,
          parseuri: 28
        }],
        13: [function (e, p, q) {
          function h(h) {
            this.path = h.path;
            this.hostname = h.hostname;
            this.port = h.port;
            this.secure = h.secure;
            this.query = h.query;
            this.timestampParam = h.timestampParam;
            this.timestampRequests = h.timestampRequests;
            this.readyState = "";
            this.agent = h.agent || !1;
            this.socket = h.socket;
            this.enablesXDR = h.enablesXDR;
            this.pfx =
              h.pfx;
            this.key = h.key;
            this.passphrase = h.passphrase;
            this.cert = h.cert;
            this.ca = h.ca;
            this.ciphers = h.ciphers;
            this.rejectUnauthorized = h.rejectUnauthorized;
            this.extraHeaders = h.extraHeaders
          }

          var m = e("engine.io-parser");
          e = e("component-emitter");
          p.exports = h;
          e(h.prototype);
          h.prototype.onError = function (h, g) {
            var e = Error(h);
            e.type = "TransportError";
            e.description = g;
            this.emit("error", e);
            return this
          };
          h.prototype.open = function () {
            if ("closed" == this.readyState || "" == this.readyState) this.readyState = "opening", this.doOpen();
            return this
          };
          h.prototype.close = function () {
            if ("opening" == this.readyState || "open" == this.readyState) this.doClose(), this.onClose();
            return this
          };
          h.prototype.send = function (h) {
            if ("open" == this.readyState) this.write(h); else throw Error("Transport not open");
          };
          h.prototype.onOpen = function () {
            this.readyState = "open";
            this.writable = !0;
            this.emit("open")
          };
          h.prototype.onData = function (h) {
            h = m.decodePacket(h, this.socket.binaryType);
            this.onPacket(h)
          };
          h.prototype.onPacket = function (h) {
            this.emit("packet", h)
          };
          h.prototype.onClose =
            function () {
              this.readyState = "closed";
              this.emit("close")
            }
        }, {"component-emitter": 8, "engine.io-parser": 20}],
        14: [function (e, p, q) {
          (function (h) {
            var m = e("xmlhttprequest-ssl"), l = e("./polling-xhr"), g = e("./polling-jsonp"), p = e("./websocket");
            q.polling = function (e) {
              var b = !1, p = !1, q = !1 !== e.jsonp;
              h.location && (p = "https:" == location.protocol, (b = location.port) || (b = p ? 443 : 80), b = e.hostname != location.hostname || b != e.port, p = e.secure != p);
              e.xdomain = b;
              e.xscheme = p;
              if ("open" in new m(e) && !e.forceJSONP) return new l(e);
              if (!q) throw Error("JSONP disabled");
              return new g(e)
            };
            q.websocket = p
          }).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
        }, {"./polling-jsonp": 15, "./polling-xhr": 16, "./websocket": 18, "xmlhttprequest-ssl": 19}],
        15: [function (e, p, q) {
          (function (h) {
            function m() {
            }

            function l(b) {
              g.call(this, b);
              this.query = this.query || {};
              t || (h.___eio || (h.___eio = []), t = h.___eio);
              this.index = t.length;
              var e = this;
              t.push(function (b) {
                e.onData(b)
              });
              this.query.j = this.index;
              h.document && h.addEventListener && h.addEventListener("beforeunload", function () {
                e.script &&
                (e.script.onerror = m)
              }, !1)
            }

            var g = e("./polling"), q = e("component-inherit");
            p.exports = l;
            var x = /\n/g, b = /\\n/g, t;
            q(l, g);
            l.prototype.supportsBinary = !1;
            l.prototype.doClose = function () {
              this.script && (this.script.parentNode.removeChild(this.script), this.script = null);
              this.form && (this.form.parentNode.removeChild(this.form), this.iframe = this.form = null);
              g.prototype.doClose.call(this)
            };
            l.prototype.doPoll = function () {
              var b = this, g = document.createElement("script");
              this.script && (this.script.parentNode.removeChild(this.script),
                this.script = null);
              g.async = !0;
              g.src = this.uri();
              g.onerror = function (g) {
                b.onError("jsonp poll error", g)
              };
              var h = document.getElementsByTagName("script")[0];
              h ? h.parentNode.insertBefore(g, h) : (document.head || document.body).appendChild(g);
              this.script = g;
              "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function () {
                var b = document.createElement("iframe");
                document.body.appendChild(b);
                document.body.removeChild(b)
              }, 100)
            };
            l.prototype.doWrite = function (g, h) {
              function e() {
                l();
                h()
              }

              function l() {
                if (m.iframe) try {
                  m.form.removeChild(m.iframe)
                } catch (b) {
                  m.onError("jsonp polling iframe removal error",
                    b)
                }
                try {
                  T = document.createElement('<iframe src="javascript:0" name="' + m.iframeId + '">')
                } catch (g) {
                  T = document.createElement("iframe"), T.name = m.iframeId, T.src = "javascript:0"
                }
                T.id = m.iframeId;
                m.form.appendChild(T);
                m.iframe = T
              }

              var m = this;
              if (!this.form) {
                var p = document.createElement("form"), q = document.createElement("textarea"),
                  t = this.iframeId = "eio_iframe_" + this.index, T;
                p.className = "socketio";
                p.style.position = "absolute";
                p.style.top = "-1000px";
                p.style.left = "-1000px";
                p.target = t;
                p.method = "POST";
                p.setAttribute("accept-charset",
                  "utf-8");
                q.name = "d";
                p.appendChild(q);
                document.body.appendChild(p);
                this.form = p;
                this.area = q
              }
              this.form.action = this.uri();
              l();
              g = g.replace(b, "\\\n");
              this.area.value = g.replace(x, "\\n");
              try {
                this.form.submit()
              } catch (La) {
              }
              this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
                "complete" == m.iframe.readyState && e()
              } : this.iframe.onload = e
            }
          }).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
        }, {"./polling": 17, "component-inherit": 9}],
        16: [function (e, p, q) {
          (function (h) {
            function m() {
            }

            function l(g) {
              b.call(this, g);
              if (h.location) {
                var e = "https:" == location.protocol, l = location.port;
                l || (l = e ? 443 : 80);
                this.xd = g.hostname != h.location.hostname || l != g.port;
                this.xs = g.secure != e
              } else this.extraHeaders = g.extraHeaders
            }

            function g(b) {
              this.method = b.method || "GET";
              this.uri = b.uri;
              this.xd = !!b.xd;
              this.xs = !!b.xs;
              this.async = !1 !== b.async;
              this.data = void 0 != b.data ? b.data : null;
              this.agent = b.agent;
              this.isBinary = b.isBinary;
              this.supportsBinary = b.supportsBinary;
              this.enablesXDR = b.enablesXDR;
              this.pfx = b.pfx;
              this.key =
                b.key;
              this.passphrase = b.passphrase;
              this.cert = b.cert;
              this.ca = b.ca;
              this.ciphers = b.ciphers;
              this.rejectUnauthorized = b.rejectUnauthorized;
              this.extraHeaders = b.extraHeaders;
              this.create()
            }

            function q() {
              for (var b in g.requests) g.requests.hasOwnProperty(b) && g.requests[b].abort()
            }

            var x = e("xmlhttprequest-ssl"), b = e("./polling"), t = e("component-emitter"), I = e("component-inherit"),
              v = e("debug")("engine.io-client:polling-xhr");
            p.exports = l;
            p.exports.Request = g;
            I(l, b);
            l.prototype.supportsBinary = !0;
            l.prototype.request = function (b) {
              b =
                b || {};
              b.uri = this.uri();
              b.xd = this.xd;
              b.xs = this.xs;
              b.agent = this.agent || !1;
              b.supportsBinary = this.supportsBinary;
              b.enablesXDR = this.enablesXDR;
              b.pfx = this.pfx;
              b.key = this.key;
              b.passphrase = this.passphrase;
              b.cert = this.cert;
              b.ca = this.ca;
              b.ciphers = this.ciphers;
              b.rejectUnauthorized = this.rejectUnauthorized;
              b.extraHeaders = this.extraHeaders;
              return new g(b)
            };
            l.prototype.doWrite = function (b, g) {
              var h = this.request({method: "POST", data: b, isBinary: "string" !== typeof b && void 0 !== b}),
                e = this;
              h.on("success", g);
              h.on("error",
                function (b) {
                  e.onError("xhr post error", b)
                });
              this.sendXhr = h
            };
            l.prototype.doPoll = function () {
              v("xhr poll");
              var b = this.request(), g = this;
              b.on("data", function (b) {
                g.onData(b)
              });
              b.on("error", function (b) {
                g.onError("xhr poll error", b)
              });
              this.pollXhr = b
            };
            t(g.prototype);
            g.prototype.create = function () {
              var b = {agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR};
              b.pfx = this.pfx;
              b.key = this.key;
              b.passphrase = this.passphrase;
              b.cert = this.cert;
              b.ca = this.ca;
              b.ciphers = this.ciphers;
              b.rejectUnauthorized =
                this.rejectUnauthorized;
              var e = this.xhr = new x(b), l = this;
              try {
                v("xhr open %s: %s", this.method, this.uri);
                e.open(this.method, this.uri, this.async);
                try {
                  if (this.extraHeaders) {
                    e.setDisableHeaderCheck(!0);
                    for (var m in this.extraHeaders) this.extraHeaders.hasOwnProperty(m) && e.setRequestHeader(m, this.extraHeaders[m])
                  }
                } catch (p) {
                }
                this.supportsBinary && (e.responseType = "arraybuffer");
                if ("POST" == this.method) try {
                  this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type",
                    "text/plain;charset=UTF-8")
                } catch (q) {
                }
                "withCredentials" in e && (e.withCredentials = !0);
                this.hasXDR() ? (e.onload = function () {
                  l.onLoad()
                }, e.onerror = function () {
                  l.onError(e.responseText)
                }) : e.onreadystatechange = function () {
                  if (4 == e.readyState) if (200 == e.status || 1223 == e.status) l.onLoad(); else setTimeout(function () {
                    l.onError(e.status)
                  }, 0)
                };
                v("xhr data %s", this.data);
                e.send(this.data)
              } catch (t) {
                setTimeout(function () {
                  l.onError(t)
                }, 0);
                return
              }
              h.document && (this.index = g.requestsCount++, g.requests[this.index] = this)
            };
            g.prototype.onSuccess =
              function () {
                this.emit("success");
                this.cleanup()
              };
            g.prototype.onData = function (b) {
              this.emit("data", b);
              this.onSuccess()
            };
            g.prototype.onError = function (b) {
              this.emit("error", b);
              this.cleanup(!0)
            };
            g.prototype.cleanup = function (b) {
              if ("undefined" != typeof this.xhr && null !== this.xhr) {
                this.hasXDR() ? this.xhr.onload = this.xhr.onerror = m : this.xhr.onreadystatechange = m;
                if (b) try {
                  this.xhr.abort()
                } catch (e) {
                }
                h.document && delete g.requests[this.index];
                this.xhr = null
              }
            };
            g.prototype.onLoad = function () {
              var b;
              try {
                var g;
                try {
                  g = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                } catch (h) {
                }
                if ("application/octet-stream" ===
                  g) b = this.xhr.response; else if (this.supportsBinary) try {
                  b = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                } catch (e) {
                  var l = new Uint8Array(this.xhr.response);
                  g = [];
                  for (var m = 0, p = l.length; m < p; m++) g.push(l[m]);
                  b = String.fromCharCode.apply(null, g)
                } else b = this.xhr.responseText
              } catch (q) {
                this.onError(q)
              }
              if (null != b) this.onData(b)
            };
            g.prototype.hasXDR = function () {
              return "undefined" !== typeof h.XDomainRequest && !this.xs && this.enablesXDR
            };
            g.prototype.abort = function () {
              this.cleanup()
            };
            h.document && (g.requestsCount =
              0, g.requests = {}, h.attachEvent ? h.attachEvent("onunload", q) : h.addEventListener && h.addEventListener("beforeunload", q, !1))
          }).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
        }, {
          "./polling": 17,
          "component-emitter": 8,
          "component-inherit": 9,
          debug: "n9i2g6",
          "xmlhttprequest-ssl": 19
        }],
        17: [function (e, p, q) {
          function h(g) {
            var h = g && g.forceBase64;
            if (!b || h) this.supportsBinary = !1;
            m.call(this, g)
          }

          var m = e("../transport"), l = e("parseqs"), g = e("engine.io-parser");
          q = e("component-inherit");
          var V =
            e("yeast"), x = e("debug")("engine.io-client:polling");
          p.exports = h;
          var b = null != (new (e("xmlhttprequest-ssl"))({xdomain: !1})).responseType;
          q(h, m);
          h.prototype.name = "polling";
          h.prototype.doOpen = function () {
            this.poll()
          };
          h.prototype.pause = function (b) {
            function g() {
              x("paused");
              h.readyState = "paused";
              b()
            }

            var h = this;
            this.readyState = "pausing";
            if (this.polling || !this.writable) {
              var e = 0;
              this.polling && (x("we are currently polling - waiting to pause"), e++, this.once("pollComplete", function () {
                x("pre-pause polling complete");
                --e || g()
              }));
              this.writable || (x("we are currently writing - waiting to pause"), e++, this.once("drain", function () {
                x("pre-pause writing complete");
                --e || g()
              }))
            } else g()
          };
          h.prototype.poll = function () {
            x("polling");
            this.polling = !0;
            this.doPoll();
            this.emit("poll")
          };
          h.prototype.onData = function (b) {
            var h = this;
            x("polling got data %s", b);
            g.decodePayload(b, this.socket.binaryType, function (b, g, e) {
              if ("opening" == h.readyState) h.onOpen();
              if ("close" == b.type) return h.onClose(), !1;
              h.onPacket(b)
            });
            "closed" != this.readyState &&
            (this.polling = !1, this.emit("pollComplete"), "open" == this.readyState ? this.poll() : x('ignoring poll - transport state "%s"', this.readyState))
          };
          h.prototype.doClose = function () {
            function b() {
              x("writing close packet");
              g.write([{type: "close"}])
            }

            var g = this;
            "open" == this.readyState ? (x("transport open - closing"), b()) : (x("transport not open - deferring close"), this.once("open", b))
          };
          h.prototype.write = function (b) {
            var h = this;
            this.writable = !1;
            var e = function () {
              h.writable = !0;
              h.emit("drain")
            }, h = this;
            g.encodePayload(b,
              this.supportsBinary, function (b) {
                h.doWrite(b, e)
              })
          };
          h.prototype.uri = function () {
            var b = this.query || {}, g = this.secure ? "https" : "http", h = "";
            !1 !== this.timestampRequests && (b[this.timestampParam] = V());
            this.supportsBinary || b.sid || (b.b64 = 1);
            b = l.encode(b);
            this.port && ("https" == g && 443 != this.port || "http" == g && 80 != this.port) && (h = ":" + this.port);
            b.length && (b = "?" + b);
            var e = -1 !== this.hostname.indexOf(":");
            return g + "://" + (e ? "[" + this.hostname + "]" : this.hostname) + h + this.path + b
          }
        }, {
          "../transport": 13, "component-inherit": 9, debug: "n9i2g6",
          "engine.io-parser": 20, parseqs: 27, "xmlhttprequest-ssl": 19, yeast: 30
        }],
        18: [function (e, p, q) {
          (function (h) {
            function m(b) {
              b && b.forceBase64 && (this.supportsBinary = !1);
              this.perMessageDeflate = b.perMessageDeflate;
              l.call(this, b)
            }

            var l = e("../transport"), g = e("engine.io-parser"), q = e("parseqs"), x = e("component-inherit"),
              b = e("yeast"), t = e("debug")("engine.io-client:websocket"), I = h.WebSocket || h.MozWebSocket, v = I;
            if (!v && "undefined" === typeof window) try {
              v = e("ws")
            } catch (R) {
            }
            p.exports = m;
            x(m, l);
            m.prototype.name = "websocket";
            m.prototype.supportsBinary = !0;
            m.prototype.doOpen = function () {
              if (this.check()) {
                var b = this.uri(), g = {agent: this.agent, perMessageDeflate: this.perMessageDeflate};
                g.pfx = this.pfx;
                g.key = this.key;
                g.passphrase = this.passphrase;
                g.cert = this.cert;
                g.ca = this.ca;
                g.ciphers = this.ciphers;
                g.rejectUnauthorized = this.rejectUnauthorized;
                this.extraHeaders && (g.headers = this.extraHeaders);
                this.ws = I ? new v(b) : new v(b, void 0, g);
                void 0 === this.ws.binaryType && (this.supportsBinary = !1);
                this.ws.supports && this.ws.supports.binary ? (this.supportsBinary =
                  !0, this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer";
                this.addEventListeners()
              }
            };
            m.prototype.addEventListeners = function () {
              var b = this;
              this.ws.onopen = function () {
                b.onOpen()
              };
              this.ws.onclose = function () {
                b.onClose()
              };
              this.ws.onmessage = function (g) {
                b.onData(g.data)
              };
              this.ws.onerror = function (g) {
                b.onError("websocket error", g)
              }
            };
            "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (m.prototype.onData = function (b) {
              var g = this;
              setTimeout(function () {
                  l.prototype.onData.call(g, b)
                },
                0)
            });
            m.prototype.write = function (b) {
              function e() {
                l.emit("flush");
                setTimeout(function () {
                  l.writable = !0;
                  l.emit("drain")
                }, 0)
              }

              var l = this;
              this.writable = !1;
              for (var m = b.length, p = 0, q = m; p < q; p++) (function (b) {
                g.encodePacket(b, l.supportsBinary, function (g) {
                  if (!I) {
                    var p = {};
                    b.options && (p.compress = b.options.compress);
                    l.perMessageDeflate && ("string" == typeof g ? h.Buffer.byteLength(g) : g.length) < l.perMessageDeflate.threshold && (p.compress = !1)
                  }
                  try {
                    I ? l.ws.send(g) : l.ws.send(g, p)
                  } catch (q) {
                    t("websocket closed before onclose event")
                  }
                  --m ||
                  e()
                })
              })(b[p])
            };
            m.prototype.onClose = function () {
              l.prototype.onClose.call(this)
            };
            m.prototype.doClose = function () {
              "undefined" !== typeof this.ws && this.ws.close()
            };
            m.prototype.uri = function () {
              var g = this.query || {}, h = this.secure ? "wss" : "ws", e = "";
              this.port && ("wss" == h && 443 != this.port || "ws" == h && 80 != this.port) && (e = ":" + this.port);
              this.timestampRequests && (g[this.timestampParam] = b());
              this.supportsBinary || (g.b64 = 1);
              g = q.encode(g);
              g.length && (g = "?" + g);
              var l = -1 !== this.hostname.indexOf(":");
              return h + "://" + (l ? "[" + this.hostname +
                "]" : this.hostname) + e + this.path + g
            };
            m.prototype.check = function () {
              return !!v && !("__initialize" in v && this.name === m.prototype.name)
            }
          }).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
        }, {
          "../transport": 13,
          "component-inherit": 9,
          debug: "n9i2g6",
          "engine.io-parser": 20,
          parseqs: 27,
          ws: 7,
          yeast: 30
        }],
        19: [function (e, p, q) {
          var h = e("has-cors");
          p.exports = function (e) {
            var l = e.xdomain, g = e.xscheme;
            e = e.enablesXDR;
            try {
              if ("undefined" != typeof XMLHttpRequest && (!l || h)) return new XMLHttpRequest
            } catch (p) {
            }
            try {
              if ("undefined" !=
                typeof XDomainRequest && !g && e) return new XDomainRequest
            } catch (q) {
            }
            if (!l) try {
              return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {
            }
          }
        }, {"has-cors": 23}],
        20: [function (e, p, q) {
          (function (h) {
            function m(b, g, h) {
              if (!g) return q.encodeBase64Packet(b, h);
              var e = new FileReader;
              e.onload = function () {
                b.data = e.result;
                q.encodePacket(b, g, !0, h)
              };
              return e.readAsArrayBuffer(b.data)
            }

            function l(b, g, h) {
              var e = Array(b.length);
              h = t(b.length, h);
              for (var l = function (b, h, l) {
                g(h, function (g, h) {
                  e[b] = h;
                  l(g, e)
                })
              }, m = 0; m < b.length; m++) l(m, b[m],
                h)
            }

            var g = e("./keys"), p = e("has-binary"), x = e("arraybuffer.slice"), b = e("base64-arraybuffer"),
              t = e("after"), I = e("utf8"), v = navigator.userAgent.match(/Android/i),
              R = /PhantomJS/i.test(navigator.userAgent), $ = v || R;
            q.protocol = 3;
            var S = q.packets = {open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6}, aa = g(S),
              N = {type: "error", data: "parser error"}, O = e("blob");
            q.encodePacket = function (b, g, e, l) {
              "function" == typeof g && (l = g, g = !1);
              "function" == typeof e && (l = e, e = null);
              var p = void 0 === b.data ? void 0 : b.data.buffer || b.data;
              if (h.ArrayBuffer &&
                p instanceof ArrayBuffer) {
                if (g) {
                  e = b.data;
                  g = new Uint8Array(e);
                  e = new Uint8Array(1 + e.byteLength);
                  e[0] = S[b.type];
                  for (b = 0; b < g.length; b++) e[b + 1] = g[b];
                  b = l(e.buffer)
                } else b = q.encodeBase64Packet(b, l);
                return b
              }
              if (O && p instanceof h.Blob) return g ? $ ? b = m(b, g, l) : (g = new Uint8Array(1), g[0] = S[b.type], b = new O([g.buffer, b.data]), b = l(b)) : b = q.encodeBase64Packet(b, l), b;
              if (p && p.base64) return l("b" + q.packets[b.type] + b.data.data);
              g = S[b.type];
              void 0 !== b.data && (g += e ? I.encode(String(b.data)) : String(b.data));
              return l("" + g)
            };
            q.encodeBase64Packet =
              function (b, g) {
                var e = "b" + q.packets[b.type];
                if (O && b.data instanceof h.Blob) {
                  var l = new FileReader;
                  l.onload = function () {
                    var b = l.result.split(",")[1];
                    g(e + b)
                  };
                  return l.readAsDataURL(b.data)
                }
                var m;
                try {
                  m = String.fromCharCode.apply(null, new Uint8Array(b.data))
                } catch (p) {
                  m = new Uint8Array(b.data);
                  for (var f = Array(m.length), t = 0; t < m.length; t++) f[t] = m[t];
                  m = String.fromCharCode.apply(null, f)
                }
                e += h.btoa(m);
                return g(e)
              };
            q.decodePacket = function (b, g, h) {
              if ("string" == typeof b || void 0 === b) {
                if ("b" == b.charAt(0)) return q.decodeBase64Packet(b.substr(1),
                  g);
                if (h) try {
                  b = I.decode(b)
                } catch (e) {
                  return N
                }
                h = b.charAt(0);
                return Number(h) == h && aa[h] ? 1 < b.length ? {type: aa[h], data: b.substring(1)} : {type: aa[h]} : N
              }
              h = (new Uint8Array(b))[0];
              b = x(b, 1);
              O && "blob" === g && (b = new O([b]));
              return {type: aa[h], data: b}
            };
            q.decodeBase64Packet = function (g, e) {
              var l = aa[g.charAt(0)];
              if (!h.ArrayBuffer) return {type: l, data: {base64: !0, data: g.substr(1)}};
              var m = b.decode(g.substr(1));
              "blob" === e && O && (m = new O([m]));
              return {type: l, data: m}
            };
            q.encodePayload = function (b, g, h) {
              "function" == typeof g && (h = g, g =
                null);
              var e = p(b);
              if (g && e) return O && !$ ? q.encodePayloadAsBlob(b, h) : q.encodePayloadAsArrayBuffer(b, h);
              if (!b.length) return h("0:");
              l(b, function (b, h) {
                q.encodePacket(b, e ? g : !1, !0, function (b) {
                  h(null, b.length + ":" + b)
                })
              }, function (b, g) {
                return h(g.join(""))
              })
            };
            q.decodePayload = function (b, g, h) {
              if ("string" != typeof b) return q.decodePayloadAsBinary(b, g, h);
              "function" === typeof g && (h = g, g = null);
              var e;
              if ("" == b) return h(N, 0, 1);
              e = "";
              for (var l, m, f = 0, p = b.length; f < p; f++) if (m = b.charAt(f), ":" != m) e += m; else {
                if ("" == e || e != (l = Number(e))) return h(N,
                  0, 1);
                m = b.substr(f + 1, l);
                if (e != m.length) return h(N, 0, 1);
                if (m.length) {
                  e = q.decodePacket(m, g, !0);
                  if (N.type == e.type && N.data == e.data) return h(N, 0, 1);
                  if (!1 === h(e, f + l, p)) return
                }
                f += l;
                e = ""
              }
              if ("" != e) return h(N, 0, 1)
            };
            q.encodePayloadAsArrayBuffer = function (b, g) {
              if (!b.length) return g(new ArrayBuffer(0));
              l(b, function (b, g) {
                q.encodePacket(b, !0, !0, function (b) {
                  return g(null, b)
                })
              }, function (b, h) {
                var e = h.reduce(function (b, f) {
                    var g;
                    g = "string" === typeof f ? f.length : f.byteLength;
                    return b + g.toString().length + g + 2
                  }, 0), l = new Uint8Array(e),
                  f = 0;
                h.forEach(function (b) {
                  var g = "string" === typeof b, h = b;
                  if (g) {
                    for (var h = new Uint8Array(b.length), e = 0; e < b.length; e++) h[e] = b.charCodeAt(e);
                    h = h.buffer
                  }
                  g ? l[f++] = 0 : l[f++] = 1;
                  b = h.byteLength.toString();
                  for (e = 0; e < b.length; e++) l[f++] = parseInt(b[e]);
                  l[f++] = 255;
                  h = new Uint8Array(h);
                  for (e = 0; e < h.length; e++) l[f++] = h[e]
                });
                return g(l.buffer)
              })
            };
            q.encodePayloadAsBlob = function (b, g) {
              l(b, function (b, g) {
                q.encodePacket(b, !0, !0, function (b) {
                  var h = new Uint8Array(1);
                  h[0] = 1;
                  if ("string" === typeof b) {
                    for (var f = new Uint8Array(b.length),
                           e = 0; e < b.length; e++) f[e] = b.charCodeAt(e);
                    b = f.buffer;
                    h[0] = 0
                  }
                  for (var f = (b instanceof ArrayBuffer ? b.byteLength : b.size).toString(), l = new Uint8Array(f.length + 1), e = 0; e < f.length; e++) l[e] = parseInt(f[e]);
                  l[f.length] = 255;
                  O && (b = new O([h.buffer, l.buffer, b]), g(null, b))
                })
              }, function (b, h) {
                return g(new O(h))
              })
            };
            q.decodePayloadAsBinary = function (b, g, h) {
              "function" === typeof g && (h = g, g = null);
              for (var e = [], l = !1; 0 < b.byteLength;) {
                for (var m = new Uint8Array(b), f = 0 === m[0], p = "", t = 1; 255 != m[t]; t++) {
                  if (310 < p.length) {
                    l = !0;
                    break
                  }
                  p += m[t]
                }
                if (l) return h(N,
                  0, 1);
                b = x(b, 2 + p.length);
                p = parseInt(p);
                m = x(b, 0, p);
                if (f) try {
                  m = String.fromCharCode.apply(null, new Uint8Array(m))
                } catch (v) {
                  for (f = new Uint8Array(m), m = "", t = 0; t < f.length; t++) m += String.fromCharCode(f[t])
                }
                e.push(m);
                b = x(b, p)
              }
              var r = e.length;
              e.forEach(function (b, f) {
                h(q.decodePacket(b, g, !0), f, r)
              })
            }
          }).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
        }, {
          "./keys": 21,
          after: 3,
          "arraybuffer.slice": 4,
          "base64-arraybuffer": 5,
          blob: 6,
          "has-binary": 22,
          utf8: 29
        }],
        21: [function (e, p, q) {
          p.exports = Object.keys ||
            function (h) {
              var e = [], l = Object.prototype.hasOwnProperty, g;
              for (g in h) l.call(h, g) && e.push(g);
              return e
            }
        }, {}],
        22: [function (e, p, q) {
          (function (h) {
            var m = e("isarray");
            p.exports = function (e) {
              function g(e) {
                if (!e) return !1;
                if (h.Buffer && h.Buffer.isBuffer(e) || h.ArrayBuffer && e instanceof ArrayBuffer || h.Blob && e instanceof Blob || h.File && e instanceof File) return !0;
                if (m(e)) for (var l = 0; l < e.length; l++) {
                  if (g(e[l])) return !0
                } else if (e && "object" == typeof e) for (l in e.toJSON && (e = e.toJSON()), e) if (Object.prototype.hasOwnProperty.call(e,
                  l) && g(e[l])) return !0;
                return !1
              }

              return g(e)
            }
          }).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
        }, {isarray: 25}],
        23: [function (e, p, q) {
          try {
            p.exports = "undefined" !== typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
          } catch (h) {
            p.exports = !1
          }
        }, {}],
        24: [function (e, p, q) {
          var h = [].indexOf;
          p.exports = function (e, l) {
            if (h) return e.indexOf(l);
            for (var g = 0; g < e.length; ++g) if (e[g] === l) return g;
            return -1
          }
        }, {}],
        25: [function (e, p, q) {
          p.exports = Array.isArray || function (e) {
            return "[object Array]" ==
              Object.prototype.toString.call(e)
          }
        }, {}],
        26: [function (e, p, q) {
          (function (e) {
            var m = /^[\],:{}\s]*$/, l = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
              g = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g,
              x = /^\s+/, b = /\s+$/;
            p.exports = function (p) {
              if ("string" != typeof p || !p) return null;
              p = p.replace(x, "").replace(b, "");
              if (e.JSON && JSON.parse) return JSON.parse(p);
              if (m.test(p.replace(l, "@").replace(g, "]").replace(q, ""))) return (new Function("return " + p))()
            }
          }).call(this, "undefined" !==
          typeof self ? self : "undefined" !== typeof window ? window : {})
        }, {}],
        27: [function (e, p, q) {
          q.encode = function (e) {
            var m = "", l;
            for (l in e) e.hasOwnProperty(l) && (m.length && (m += "&"), m += encodeURIComponent(l) + "=" + encodeURIComponent(e[l]));
            return m
          };
          q.decode = function (e) {
            var m = {};
            e = e.split("&");
            for (var l = 0, g = e.length; l < g; l++) {
              var p = e[l].split("=");
              m[decodeURIComponent(p[0])] = decodeURIComponent(p[1])
            }
            return m
          }
        }, {}],
        28: [function (e, p, q) {
          var h = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            m = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" ");
          p.exports = function (e) {
            var g = e, p = e.indexOf("["), q = e.indexOf("]");
            -1 != p && -1 != q && (e = e.substring(0, p) + e.substring(p, q).replace(/:/g, ";") + e.substring(q, e.length));
            e = h.exec(e || "");
            for (var b = {}, t = 14; t--;) b[m[t]] = e[t] || "";
            -1 != p && -1 != q && (b.source = g, b.host = b.host.substring(1, b.host.length - 1).replace(/;/g, ":"), b.authority = b.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), b.ipv6uri =
              !0);
            return b
          }
        }, {}],
        29: [function (e, p, q) {
          (function (e) {
            (function (m) {
              function l(b) {
                for (var g = [], e = 0, h = b.length, l, m; e < h;) l = b.charCodeAt(e++), 55296 <= l && 56319 >= l && e < h ? (m = b.charCodeAt(e++), 56320 == (m & 64512) ? g.push(((l & 1023) << 10) + (m & 1023) + 65536) : (g.push(l), e--)) : g.push(l);
                return g
              }

              function g(b) {
                if (55296 <= b && 57343 >= b) throw Error("Lone surrogate U+" + b.toString(16).toUpperCase() + " is not a scalar value");
              }

              function V() {
                if (S >= $) throw Error("Invalid byte index");
                var b = R[S] & 255;
                S++;
                if (128 == (b & 192)) return b & 63;
                throw Error("Invalid continuation byte");
              }

              function x() {
                var b, e, h, l;
                if (S > $) throw Error("Invalid byte index");
                if (S == $) return !1;
                b = R[S] & 255;
                S++;
                if (0 == (b & 128)) return b;
                if (192 == (b & 224)) {
                  e = V();
                  b = (b & 31) << 6 | e;
                  if (128 <= b) return b;
                  throw Error("Invalid continuation byte");
                }
                if (224 == (b & 240)) {
                  e = V();
                  h = V();
                  b = (b & 15) << 12 | e << 6 | h;
                  if (2048 <= b) return g(b), b;
                  throw Error("Invalid continuation byte");
                }
                if (240 == (b & 248) && (e = V(), h = V(), l = V(), b = (b & 15) << 18 | e << 12 | h << 6 | l, 65536 <= b && 1114111 >= b)) return b;
                throw Error("Invalid UTF-8 detected");
              }

              var b = "object" == typeof q && q, t = "object" ==
                typeof p && p && p.exports == b && p, I = "object" == typeof e && e;
              if (I.global === I || I.window === I) m = I;
              var v = String.fromCharCode, R, $, S, I = {
                version: "2.0.0", encode: function (b) {
                  b = l(b);
                  for (var e = b.length, h = -1, m, p = ""; ++h < e;) {
                    m = b[h];
                    if (0 == (m & 4294967168)) m = v(m); else {
                      var q = "";
                      0 == (m & 4294965248) ? q = v(m >> 6 & 31 | 192) : 0 == (m & 4294901760) ? (g(m), q = v(m >> 12 & 15 | 224), q += v(m >> 6 & 63 | 128)) : 0 == (m & 4292870144) && (q = v(m >> 18 & 7 | 240), q += v(m >> 12 & 63 | 128), q += v(m >> 6 & 63 | 128));
                      m = q += v(m & 63 | 128)
                    }
                    p += m
                  }
                  return p
                }, decode: function (b) {
                  R = l(b);
                  $ = R.length;
                  S = 0;
                  b = [];
                  for (var g; !1 !== (g = x());) b.push(g);
                  g = b.length;
                  for (var e = -1, h, m = ""; ++e < g;) h = b[e], 65535 < h && (h -= 65536, m += v(h >>> 10 & 1023 | 55296), h = 56320 | h & 1023), m += v(h);
                  return m
                }
              };
              if (b && !b.nodeType) if (t) t.exports = I; else {
                m = {}.hasOwnProperty;
                for (var aa in I) m.call(I, aa) && (b[aa] = I[aa])
              } else m.utf8 = I
            })(this)
          }).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
        }, {}],
        30: [function (e, p, q) {
          function h(b) {
            var e = "";
            do e = l[b % g] + e, b = Math.floor(b / g); while (0 < b);
            return e
          }

          function m() {
            var b = h(+new Date);
            return b !==
            t ? (x = 0, t = b) : b + "." + h(x++)
          }

          for (var l = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), g = 64, V = {}, x = 0, b = 0, t; b < g; b++) V[l[b]] = b;
          m.encode = h;
          m.decode = function (e) {
            var h = 0;
            for (b = 0; b < e.length; b++) h = h * g + V[e.charAt(b)];
            return h
          };
          p.exports = m
        }, {}]
      }, {}, [10])(10)
    })
  })();
  (function (u) {
    "function" !== typeof Array.isArray && (Array.isArray = function (e) {
      return "[object Array]" === Object.prototype.toString.call(e)
    });
    Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
      for (var q = 0, h = this.length; q < h; q++) if (this[q] === e) return q;
      return -1
    });
    u = u.EventEmitter = function () {
    };
    var e = Array.isArray;
    u.prototype.emit = function (p) {
      var q;
      if ("error" === p && (!this._events || !this._events.error || e(this._events.error) && !this._events.error.length)) {
        if (arguments[1] instanceof Error) throw arguments[1];
        throw Error("Uncaught, unspecified 'error' event.");
      }
      if (!this._events) return !1;
      var h = this._events[p];
      if (!h) return !1;
      if ("function" == typeof h) {
        switch (arguments.length) {
          case 1:
            h.call(this);
            break;
          case 2:
            h.call(this, arguments[1]);
            break;
          case 3:
            h.call(this, arguments[1], arguments[2]);
            break;
          default:
            q = Array.prototype.slice.call(arguments, 1), h.apply(this, q)
        }
        return !0
      }
      if (e(h)) {
        q = Array.prototype.slice.call(arguments, 1);
        for (var h = h.slice(), m = 0, l = h.length; m < l; m++) h[m].apply(this, q);
        return !0
      }
      return !1
    };
    u.prototype.addListener =
      function (p, q) {
        if ("function" !== typeof q) throw Error("addListener only takes instances of Function");
        this._events || (this._events = {});
        this._events[p] ? e(this._events[p]) ? this._events[p].push(q) : this._events[p] = [this._events[p], q] : this._events[p] = q;
        return this
      };
    u.prototype.on = u.prototype.addListener;
    u.prototype.once = function (e, q) {
      var h = this;
      h.on(e, function l() {
        h.removeListener(e, l);
        q.apply(this, arguments)
      })
    };
    u.prototype.removeListener = function (p, q) {
      if ("function" !== typeof q) throw Error("removeListener only takes instances of Function");
      if (!this._events || !this._events[p]) return this;
      var h = this._events[p];
      if (e(h)) {
        var m = h.indexOf(q);
        if (0 > m) return this;
        h.splice(m, 1);
        0 === h.length && delete this._events[p]
      } else this._events[p] === q && delete this._events[p];
      return this
    };
    u.prototype.removeAllListeners = function (e) {
      e ? e && (this._events && this._events[e]) && (this._events[e] = null) : this._events = {};
      return this
    };
    u.prototype.listeners = function (p) {
      this._events || (this._events = {});
      this._events[p] || (this._events[p] = []);
      e(this._events[p]) || (this._events[p] =
        [this._events[p]]);
      return this._events[p]
    }
  })(window);
  (function (u) {
    function e(e, m) {
      if (!m.engineIo) throw Error("You must specify engineIo");
      m.timestampRequests = !0;
      m.timestampParam = "__t";
      this.__callbackIndex = 0;
      this.__callbacks = {};
      this.state = q.OPENING;
      this.socket = new m.engineIo(e, m);
      this.debug = !1;
      if (document.getElementById("tawk__dmz")) {
        var l = this;
        u.getSocketTransport = function () {
          if (l.socket.transport) return l.socket.transport.name
        }
      }
      document.location && "#!tawk-debug" === document.location.hash && (this.debug = !0);
      EventEmitter.call(this);
      this.attachListeners()
    }

    var p, q = {OPENING: "opening", OPEN: "open", CLOSING: "closing", CLOSED: "closed"};
    for (p in EventEmitter.prototype) "function" === typeof EventEmitter.prototype[p] && Object.prototype.hasOwnProperty.call(EventEmitter.prototype, p) && (e.prototype[p] = EventEmitter.prototype[p]);
    e.prototype.attachListeners = function () {
      var e = this;
      this.socket.on("open", function () {
        e.state = q.OPEN;
        e.emit("connect")
      });
      this.socket.on("close", function (m, l) {
        e.emit("disconnect", m, l);
        e.doClose()
      });
      this.socket.on("error", function (m) {
        e.emit("error",
          m)
      });
      this.socket.on("message", function (m) {
        e.onMessage(m)
      })
    };
    e.prototype.close = e.prototype.disconnect = function () {
      var e = this;
      this.state === q.OPENING && setTimeout(function () {
        e.close()
      }, 1E3);
      this.state === q.OPEN && (this.state = q.CLOSING, this.clearCallbacks(), this.socket.close())
    };
    e.prototype.doClose = function () {
      this.clearCallbacks();
      this.state = q.CLOSED;
      this.socket.removeAllListeners();
      this.removeAllListeners();
      this.socket = null
    };
    e.prototype.clearCallbacks = function () {
      this.__callbacks = {}
    };
    e.prototype.onMessage =
      function (e) {
        (e = this.decode(e)) && ("__callback__" === e.c ? this.executeCallback(e) : this.emit.apply(this, [e.c].concat(e.p)))
      };
    e.prototype.executeCallback = function (e) {
      var m = this.__callbacks[e.cb];
      delete this.__callbacks[e.cb];
      m.apply(null, e.p)
    };
    e.prototype.decode = function (e) {
      var m;
      this.debug && (console && console.log) && (data = new Date, console.log("received " + data.toUTCString() + " : " + e));
      try {
        m = JSON.parse(e)
      } catch (l) {
        this.emit("error", l);
        return
      }
      if (m.c) if ("error" === m.c || "connect" === m.c || "disconnect" === m.c) this.emit("error",
        Error("server returned reserved command : `" + m.cmd + "`")); else if (m.p && "[object Array]" !== Object.prototype.toString.call(m.p)) this.emit("error", Error("data is expected to be an array")); else {
        if ("__callback__" !== m.c) return m;
        e = parseInt(m.cb, 10);
        if (isNaN(e)) this.emit("error", Error("received callback command but there was no valid callback id(`" + e + "`")); else {
          if (this.__callbacks[e]) return m.cb = e, m;
          this.emit("error", Error("received callback command but callback isnt present (`" + m.cb + "`)"))
        }
      } else this.emit("error",
        Error("no command was sent by the server"))
    };
    e.prototype.send = function () {
      var e = this.encode(arguments);
      this.debug && (console && console.log) && (data = new Date, console.log("send " + data.toUTCString() + " : " + e));
      this.state !== q.OPEN ? this.emit("error", Error("Socket isnt open its state is `" + this.state + "` tried to send `" + e + "`")) : e && this.socket.send(e)
    };
    e.prototype.encode = function (e) {
      var m = {};
      e = Array.prototype.slice.call(e);
      if (e[0]) {
        m.c = e[0];
        "function" === typeof e[e.length - 1] && (m.cb = this.enqueuCallback(e.pop()));
        m.p = e.slice(1);
        var l;
        try {
          l = JSON.stringify(m)
        } catch (g) {
          this.emit("error", g);
          return
        }
        return l
      }
      this.emit("error", Error("now command specified"))
    };
    e.prototype.enqueuCallback = function (e) {
      this.__callbacks[this.__callbackIndex] = e;
      return this.__callbackIndex++
    };
    u.$__TawkSocket = e
  })(window);
  (function (u) {
    var e, p, q, h, m, l = {}, g = this, V = (new Date).getTime(), x = g.navigator, b = {viewHandler: null};
    u.startTime = V.toString();
    u.loaded = !1;
    u.connected = !1;
    u.ready = !1;
    "undefined" !== typeof Tawk_LoadStart && ($_Tawk_LoadStart = Tawk_LoadStart);
    try {
      b.ResetStyle = "html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent}body{line-height:1}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}nav ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent}ins{background-color:#ff9;color:#000;text-decoration:none}mark{background-color:#ff9;color:#000;font-style:italic;font-weight:bold}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}table{border-collapse:collapse;border-spacing:0}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}input,select{vertical-align:middle}html,body{height:100%;width:100%}body{background:transparent;height:100%;width:100%;font:13px Helvetica,Arial,sans-serif;position:relative}.clear{clear:both}.clearfix:after{content:'';display:block;height:0;clear:both;visibility:hidden}";
      b.MaximizedStyle = "body{font-weight:normal;outline:0;font-size:15px;font-family:Helvetica,Arial,sans-serif}body.font-lato{font-family:'Lato','Open Sans',sans-serif !important}*{font-family:inherit}::-webkit-input-placeholder{white-space:normal}::-moz-placeholder{white-space:normal}:-ms-input-placeholder{white-space:normal}:-moz-placeholder{white-space:normal}.rtl-direction{direction:rtl !important}#tawkchat-maximized-wrapper{width:100%;height:100%;position:relative}#tawkchat-maximized-wrapper.noMenu .headerBoxLink{display:none !important}#tawkchat-maximized-wrapper.noMenu #minimizeChat.headerBoxLink{display:block !important}#tawkchat-maximized-wrapper .notShown{display:none !important}#borderWrapper{position:absolute;top:0;bottom:0;z-index:-10;background-color:#e1e1e1;width:100%;height:100%}#innerWrapper{background:#fff;left:0;position:absolute;right:0;top:0;bottom:0;border:1px solid #e9e9e9}#headerBoxWrapper{height:60px}#expandableLink{height:5px;width:100%;font-size:0;cursor:s-resize;visibility:hidden;position:absolute;top:56px;z-index:30}#expandableIcon{width:30px;height:4px;margin:0 auto;background:#a1a1a1}#expandableLink.expanded{cursor:n-resize}#headerBox{height:60px;position:relative;z-index:30;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}#agentBar{height:100px;display:none}#headerBoxControlsContainer{height:60px;position:relative;float:none;display:grid;grid-auto-columns:1fr;padding:0 8px;display:-ms-grid;-ms-grid-columns:1fr}#headerBoxControlsContainer #screenShare{-ms-grid-row:1;-ms-grid-column:2;float:left;width:30px;height:60px}#headerBoxControlsContainer #voiceCall{-ms-grid-row:1;-ms-grid-column:3;float:left;width:30px;height:60px}#headerBoxControlsContainer #videoCall{-ms-grid-row:1;-ms-grid-column:4;float:left;width:30px;height:60px}#headerBoxControlsContainer .headerBoxLink{-ms-grid-row:1;-ms-grid-column:5;float:left;width:30px;height:60px}#headerBoxControlsContainer #minimizeChat{-ms-grid-row:1;-ms-grid-column:6;float:left;width:30px;height:60px}#headerAccountStateContainer{width:fit-content;height:60px;display:grid;grid-template-columns:auto 1fr;-ms-flex-grow:1;-webkit-flex-grow:1;-moz-flex-grow:1;flex-grow:1;-ms-flex-shrink:1;-webkit-flex-shrink:1;-moz-flex-shrink:1;flex-shrink:1;-ms-flex:1;display:-ms-grid;-ms-grid-columns:auto 1fr}#headerAccountStateContainer #headerAccountState{-ms-grid-row:1;-ms-grid-column:1;float:left}#headerAccountStateContainer #agentProfileContainer{-ms-grid-row:1;-ms-grid-column:2;float:left;width:auto}.rtl-direction #headerAccountStateContainer #agentProfileContainer{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}#headerAccountStateContainer #agentProfileContainer.show{display:-ms-grid;display:grid;-ms-grid-columns:auto auto 1fr;grid-template-columns:auto auto 1fr}.agent-profile-detailed{-ms-grid-row:1;-ms-grid-column:3}#headerAccountState{padding:0 5px 0 14px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-left:0;height:100%;box-sizing:border-box;line-height:60px}#shortMessage{font-weight:500}#chatContainerWrapper{position:absolute;bottom:78px;top:0;width:100%;background-color:white}#greetingsText{white-space:pre-wrap}#chatContainerWrapper.chat-ended{bottom:118px}.no-branding #chatContainerWrapper{bottom:48px}.form-opened #bottomContainer{bottom:0;z-index:1}#chatContainer{overflow:scroll;position:absolute;font-size:14px;color:#6c6c6c;min-width:270px;height:auto;overflow-x:hidden;top:0;bottom:0;width:100%;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:#fff #fff;-ms-overflow-style:-ms-autohiding-scrollbar}#chatContainer::-webkit-scrollbar,#formFieldsContainer::-webkit-scrollbar{width:7px}#chatContainer::-webkit-scrollbar-thumb,#formFieldsContainer::-webkit-scrollbar-thumb{-webkit-border-radius:3px;border-radius:3px;background:transparent}#tawkchat-maximized-wrapper:hover #chatContainer::-webkit-scrollbar-thumb,#formFieldsContainer:hover::-webkit-scrollbar-thumb{background:#aaa}#tawkchat-maximized-wrapper:hover #chatContainer,#tawkchat-maximized-wrapper:hover #formFieldsContainer{scrollbar-color:#aaa #fff}.uploadFailedNotifContainer,#maxFileNotificationContainer,#maxSizeNotificationContainer{color:black;background-color:white;border:1px solid #ddd;margin:5px 10px;padding:9px 10px 18px 10px;border-radius:6px;font-size:13px;position:relative}.uploadFailedNotifContainer{margin-bottom:25px}#maxFileNotificationContainer #maxFileNumberList,#maxSizeNotificationContainer #maxFileSizeList{margin:0;margin-top:10px;font-weight:600}#maxFileNotificationContainer #maxFileNumberList ul,#maxSizeNotificationContainer #maxFileSizeList ul{list-style:none}.uploadFailedNotifMessage,#maxFileNotificationMessage,#maxSizeNotificationMessage{margin-top:13px}.uploadFailedNotifIconContainer,#maxFileNotifIconContainer,#maxSizeNotifIconContainer{height:30px;width:30px;background-color:#e52f48;border-radius:5px;display:inline-block;position:relative;text-align:center;vertical-align:middle;line-height:30px}.uploadFailedNotifIconWrapper,#maxFileNotifIconWrapper,#maxSizeNotifIconWrapper{height:0;width:0;border-width:0 10px 17px 10px;border-style:solid;border-color:transparent transparent white transparent;display:inline-block;position:absolute;left:50%;top:50%;-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uploadFailedSizeNotifIcon,#maxFileNotifIcon,#maxSizeNotifIcon{color:#e52f48;font-weight:900;font-size:11px;display:inline-block;z-index:9999;position:relative;padding-top:2px}.uploadFailedNotifLabel,#maxFileNotifLabel,#maxSizeNotifLabel{display:inline-block;line-height:30px;vertical-align:top;margin-left:10px;font-weight:600}.uploadFailedRetryContainer{position:absolute;bottom:-18px;right:2px}.rtl-direction .uploadFailedRetryContainer{right:auto;left:2px}.uploadFailedRetryContainer a{font-size:12px;color:#e52f48;font-weight:600}.closeButtonContainer{margin:5px auto auto auto;display:inline-block;float:right;font-size:18px;cursor:pointer}.closeNotification{cursor:pointer;text-transform:uppercase}#maxFileSizeList,#maxFileNumberList{margin:10px}#maxFileSizeList li,#maxFileNumberList li{word-wrap:break-word}#maxFileSizeList a,#maxFileNumberList a{color:#00E}#maxFileNumberList a{display:none}#chatContainer .hidden{display:none}.actionRetry{cursor:pointer;float:right}#actionsContainer{z-index:99998;background-color:#fff;border-top:2px solid #e1e1e1;position:absolute;bottom:0;width:100%;height:46px}#status-message{font-weight:bold;font-style:normal}#resizeBox{width:52px;height:52px;position:absolute;top:0;background-color:#000;z-index:5}body.right #resizeBox{left:0;float:left;-webkit-border-top-left-radius:3px;-moz-border-radius-topleft:3px;border-top-left-radius:3px}body.left #resizeBox{right:0;float:right;-webkit-border-top-right-radius:3px;-moz-border-radius-topright:3px;border-top-right-radius:3px}#resizeInnerBox{background-color:#fefefe;width:47px;height:47px}body.right #resizeInnerBox{-webkit-border-top-left-radius:3px;-moz-border-radius-topleft:3px;border-top-left-radius:3px;margin:5px 0 0 5px}body.left #resizeInnerBox{-webkit-border-top-right-radius:3px;-moz-border-radius-topright:3px;border-top-right-radius:3px;margin:5px 5px 0 0}#pluginsBar{height:23px;background-color:#c2c2c2;min-width:278px}#rateMainWrapper{float:left;position:relative}#ratePositive{background-position:-145px 0}#rateNegative{background-position:-126px 0}#rateNegative:hover,#rateNegative.selected{background-position:-183px 0}#rateNegative:hover,#ratePositive:hover{transform:scale(1.2,1.2)}.activeSound{background-position:0 0;background-repeat:no-repeat}.disabledSound{background-position:-21px 0;background-repeat:no-repeat}#textareaWrapper{display:block;background-color:#fff;position:relative;height:100%;z-index:2}#textareaContainer{height:100%;padding:16px 14px 13px 14px;box-sizing:border-box}#textareaContainer.with-emoji{padding-right:44px;padding-left:14px}.rtl-direction #textareaContainer.with-emoji{padding-left:44px;padding-right:14px}#chatTextarea{padding:0;margin:0;height:100%;width:100%;overflow:hidden;resize:none;border:0;font-size:14px !important;background-color:#fff;color:#000;font-family:inherit}#chatTextarea:active,#chatTextarea:focus{outline:0}#textareaContainer textarea::-webkit-input-placeholder{color:#bdbdbd}#textareaContainer textarea::-moz-placeholder{color:#bdbdbd}#textareaContainer textarea:-ms-input-placeholder{color:#bdbdbd}#chatTextarea::placeholder{color:#bdbdbd !important}#greetingsContainer{margin:7px 45px 0 45px;margin:14px 0;padding:10px 15px;text-align:center;white-space:pre-wrap;word-wrap:break-word;color:black;font-weight:400;margin-top:0}#greetingsText a{color:inherit}#greetingsWaitTime{margin:14px 0 0;display:none}#formContainer #greetingsContainer{margin:0 !important}#agentBar.expanded{height:auto;overflow-y:auto;display:block;max-height:153px}#agentList{position:absolute;left:50%;top:0;-ms-transform:translateX(-50%);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap;overflow-x:hidden;max-width:100%;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}#agentList::-webkit-scrollbar{display:none}#agentList .agentWrapper{border-radius:0;min-width:0;display:inline-block;margin:10px 10px;text-align:center;flex-grow:1}#profileDetail .agentContainer{margin-left:50px}.agentContainer{height:50px}.rtl-direction #profileDetail .agentContainer{margin-right:50px;margin-left:0}#agentBar .agentContainer{height:auto;width:100%;margin-top:5px}.agentContainerNoImage{height:45px}.agentWrapper{width:100%;min-width:280px;clear:both;position:relative;-webkit-border-top-left-radius:10px;-webkit-border-top-right-radius:10px;-moz-border-radius-topleft:10px;-moz-border-radius-topright:10px;border-top-left-radius:10px;border-top-right-radius:10px}#headerBox .agentInformationContainer{padding:10px 0}.rtl-direction #agentBar .agentInformationContainer{margin-right:auto;margin-left:auto}.rtl-direction #agentBar .agentContainer{clear:both}.agentInformationContainerNoImage{padding-top:13px;padding-bottom:13px;font-size:16px}.agentInformationContainer{font-size:14px}.position-label{font-size:12px}.agentNameCentered{font-weight:400;font-size:16px;text-transform:capitalize;margin-top:5px}.rtl-direction .noImageAgentProfileDetail{padding:0 5px 0 0}.agentInformationContainer p{white-space:nowrap;overflow:hidden;box-sizing:border-box;text-overflow:ellipsis}@-ms-keyframes profileShow{0%{-ms-transform:scale(0)}6.25%{-ms-transform:scale(0.1)}12.5%{-ms-transform:scale(0.2)}18.75%{-ms-transform:scale(0.3)}25%{-ms-transform:scale(0.4)}31.25%{-ms-transform:scale(0.5)}37.5%{-ms-transform:scale(0.6)}43.75%{-ms-transform:scale(0.7)}50%{-ms-transform:scale(0.8)}56.25%{-ms-transform:scale(0.9)}62.5%{-ms-transform:scale(1)}68.75%{-ms-transform:scale(1.1)}75%{-ms-transform:scale(1.2)}81.25%{-ms-transform:scale(1.3)}87.5%{-ms-transform:scale(1.2)}93.75%{-ms-transform:scale(1.1)}100%{-ms-transform:scale(1)}}@-webkit-keyframes profileShow{0%{-webkit-transform:scale(0)}6.25%{-webkit-transform:scale(0.1)}12.5%{-webkit-transform:scale(0.2)}18.75%{-webkit-transform:scale(0.3)}25%{-webkit-transform:scale(0.4)}31.25%{-webkit-transform:scale(0.5)}37.5%{-webkit-transform:scale(0.6)}43.75%{-webkit-transform:scale(0.7)}50%{-webkit-transform:scale(0.8)}56.25%{-webkit-transform:scale(0.9)}62.5%{-webkit-transform:scale(1)}68.75%{-webkit-transform:scale(1.1)}75%{-webkit-transform:scale(1.2)}81.25%{-webkit-transform:scale(1.3)}87.5%{-webkit-transform:scale(1.2)}93.75%{-webkit-transform:scale(1.1)}100%{-webkit-transform:scale(1)}}@-moz-keyframes profileShow{0%{-moz-transform:scale(0)}6.25%{-moz-transform:scale(0.1)}12.5%{-moz-transform:scale(0.2)}18.75%{-moz-transform:scale(0.3)}25%{-moz-transform:scale(0.4)}31.25%{-moz-transform:scale(0.5)}37.5%{-moz-transform:scale(0.6)}43.75%{-moz-transform:scale(0.7)}50%{-moz-transform:scale(0.8)}56.25%{-moz-transform:scale(0.9)}62.5%{-moz-transform:scale(1)}68.75%{-moz-transform:scale(1.1)}75%{-moz-transform:scale(1.2)}81.25%{-moz-transform:scale(1.3)}87.5%{-moz-transform:scale(1.2)}93.75%{-moz-transform:scale(1.1)}100%{-moz-transform:scale(1)}}@-o-keyframes profileShow{0%{-o-transform:scale(0)}6.25%{-o-transform:scale(0.1)}12.5%{-o-transform:scale(0.2)}18.75%{-o-transform:scale(0.3)}25%{-o-transform:scale(0.4)}31.25%{-o-transform:scale(0.5)}37.5%{-o-transform:scale(0.6)}43.75%{-o-transform:scale(0.7)}50%{-o-transform:scale(0.8)}56.25%{-o-transform:scale(0.9)}62.5%{-o-transform:scale(1)}68.75%{-o-transform:scale(1.1)}75%{-o-transform:scale(1.2)}81.25%{-o-transform:scale(1.3)}87.5%{-o-transform:scale(1.2)}93.75%{-o-transform:scale(1.1)}100%{-o-transform:scale(1)}}@keyframes profileShow{0%{transform:scale(0)}6.25%{transform:scale(0.1)}12.5%{transform:scale(0.2)}18.75%{transform:scale(0.3)}25%{transform:scale(0.4)}31.25%{transform:scale(0.5)}37.5%{transform:scale(0.6)}43.75%{transform:scale(0.7)}50%{transform:scale(0.8)}56.25%{transform:scale(0.9)}62.5%{transform:scale(1)}68.75%{transform:scale(1.1)}75%{transform:scale(1.2)}81.25%{transform:scale(1.3)}87.5%{transform:scale(1.2)}93.75%{transform:scale(1.1)}100%{transform:scale(1)}}#agentBar .alias-image,#headerBox .alias-image{width:40px;height:40px;margin:0;background-repeat:no-repeat;border-radius:50%;margin:5px 0;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:40px 40px;float:left;margin-left:-100%;animation:fadeIn 1s;-webkit-animation:fadeIn 1s;-moz-animation:fadeIn 1s;-o-animation:fadeIn 1s}#headerBox .alias-image{width:30px;height:30px;position:relative;margin-left:-10px;display:inline-block;margin-top:14px;box-shadow:0 0 0 1px #eee;background-size:30px 30px}#agentBar .alias-image{float:none;margin:0 auto;width:53px;height:53px;background-size:53px 53px}.agentChatContainer .messageBody{margin:-12px 0 0 0;max-width:calc(100% - 30px)}.rtl-direction .agentChatContainer .messageBody{float:right;margin:-12px 00px 0 0;padding-right:40px}.agentChatContainer .message{background:#eee;color:#333;margin-left:0;padding:5px 10px;border-radius:3px;box-shadow:0 0 1px 0 rgba(0,0,0,0.1)}.ie9.rtl-direction .agentChatContainer .message{border-radius:0 15px 15px 15px !important}.agentChatContainer .messageStatusContainer{margin-left:-40px;position:absolute;top:5px;left:100%}.rtl-direction .agentChatContainer .messageStatusContainer{margin:0 -40px 0 0;left:auto;right:100%}.messageContainer.agentChatContainer{margin:15px 40px 12px 11px}.rtl-direction .messageContainer.agentChatContainer{margin:30px 8px 10px 23px}.messageContainer.visitorChatContainer{margin:15px 15px 12px 74px}.rtl-direction .messageContainer.visitorChatContainer{margin:10px 0 10px 12px}.visitorChatContainer .messageBody{margin:0;float:right;max-width:100%;min-height:62px}.rtl-direction .visitorChatContainer .messageBody{float:left}.visitorChatContainer .messageWrapper .message{color:#333;text-align:left;background:#e5e5e5}.rtl-direction .visitorChatContainer .messageWrapper .message{text-align:left;margin:0 30px 0 0;border-radius:0 15px 15px 15px;border-radius:3px}.ie9.rtl-direction .visitorChatContainer .messageWrapper .message{border-radius:15px 0 15px 15px !important;border-radius:3px}.message.agentTypingIndicator,.messageContainer .messageWrapper .message{position:relative}.message.agentTypingIndicator::after,.message.agentTypingIndicator::before,.upload-data::after,.upload-data::before,.messageContainer .messageWrapper .message::after,.messageContainer .messageWrapper .message::before{content:'';display:block;position:absolute;width:0;height:0;border-style:solid;top:6px;border-width:7px}.message.agentTypingIndicator::after,.message.agentTypingIndicator::before,.messageContainer.agentChatContainer .messageWrapper .message::after,.messageContainer.agentChatContainer .messageWrapper .message::before{right:100%}.message.agentTypingIndicator::before,.messageContainer.agentChatContainer .messageWrapper .message::before{border-color:transparent #f9f9f9 transparent transparent;border-width:7px;top:6px}.upload-data::after,.upload-data::before,.messageContainer.visitorChatContainer .messageWrapper .message::after,.messageContainer.visitorChatContainer .messageWrapper .message::before{left:100%}.upload-data::before,.messageContainer.visitorChatContainer .messageWrapper .message::before{border-color:transparent transparent transparent #f9f9f9;border-width:7px;top:5px}.message.agentTypingIndicator::after,.messageContainer.agentChatContainer .messageWrapper .message::after{top:7px;border-width:6px}.upload-data::after,.messageContainer.visitorChatContainer .messageWrapper .message::after{top:6px;border-width:6px}.visitorChatContainer .messageStatusContainer.errorInMessage{width:100%;position:relative;right:auto;text-align:right;font-size:12px;color:#ec6368;font-weight:600;line-height:1;top:3px;float:right}.visitorChatContainer .messageStatusContainer.errorInMessage a{float:right;display:inline-block;font-size:12px;text-decoration:underline;color:#ec6368;width:auto;background:0;text-align:right;top:0;margin:0 0 0 15px;font-weight:900}.messageStatusContainer.pending .failed-label,.messageStatusContainer.pending .icon-alert{display:none}.time-div{visibility:hidden}.mobile .time-div{visibility:visible}.one-agent .agent-div.agent{display:none}.messageBody:hover .time-div{visibility:visible}.rtl-direction .visitorChatContainer .messageStatusContainer.errorInMessage a{float:left;text-align:left}.visitorChatContainer .messageStatusContainer{position:absolute;right:100%;top:0;left:auto}.rtl-direction .visitorChatContainer .messageStatusContainer.errorInMessage{left:auto;margin:0}.rtl-direction .visitorChatContainer .messageStatusContainer{right:auto;left:100%;margin:0 0 0 -40px}.messageHead{position:absolute;z-index:10001}.messageHeadLine{position:relative;top:10px;z-index:1}.messageContainer .messageHead .messageTitle{text-align:center;width:100%}.messageBody{line-height:1.5em;margin:5px 0 0 42px;float:left;position:relative}.notification{margin-left:0;width:100%}.ownerNameContainer,.notificationContainer{float:left}.rtl-direction .notificationContainer{direction:rtl !important;float:right}.notificationContainer .message{margin-right:40px;font-size:14px !important;font-style:italic}.rtl-direction .notificationContainer .message{margin:0 0 0 40px}.message{white-space:pre-wrap;word-wrap:break-word}.messageContainer .messageHead.agent .messageTime,.notificationTime{color:#b3b3b3}.messageContainer .chat-agent-name{position:absolute;bottom:-18px;left:40px;font-size:11px}.rtl-direction .messageContainer .chat-agent-name{left:auto;right:40px}.notificationTime{width:40px;float:left;margin-left:-40px;text-align:right;font-size:12px !important}.rtl-direction .notificationTime{float:right;margin:0 -40px 0 0;text-align:left}.messageStatusContainer{position:relative;z-index:2;width:40px}.messageTime{padding:0 2px 0 8px;font-size:11px !important;color:#777;display:none}.rtl-direction .messageTime{padding:0 8px 0 2px}.messageTime.visitor{padding:0 8px 0 2px}.messageTime.agent,.messageTime.visitor{display:inline-block;margin:0;padding:0;line-height:1;top:auto;bottom:auto;vertical-align:bottom}.rtl-direction .messageTime.visitor{padding:0 2px 0 8px}.messageWrapper{background:0;position:relative;width:auto}.rtl-direction .messageWrapper{float:right;max-width:100%}.messageStatus:active,.messageStatus:focus{outline:0}.messageStatusContainer.pending .lds-spinner{transform:scale(0.3);margin-left:-5px;margin-top:-25%}.messageWrapper.pending{font-style:italic}.messageWrapper.error{font-style:italic;color:red;cursor:pointer;float:right;width:auto;max-width:100%}.rtl-direction .messageWrapper.error{max-width:100%;float:left}.messageWrapper.error .message{background-color:#ec6368 !important;color:#fff !important}.messageWrapper .message{font-size:14px !important;padding:10px 13px;font-weight:400;border-radius:5px;box-shadow:0 0 1px 0 rgba(0,0,0,0.1)}.messageTitle span{text-transform:uppercase;font-weight:bold;padding:0 10px;color:#ccc;background-color:#fff;z-index:1;position:relative}#formContainer::-webkit-scrollbar{display:none}.formMessageField{padding:10px 20px;line-height:1.2em;color:#616161;font-size:15px;text-align:left;word-wrap:break-word}.form{font-size:13px;color:#a1a1a1;height:auto;position:absolute;top:0;bottom:30px;left:6px;right:6px;overflow:hidden;max-width:400px;margin:0 auto;width:calc(100% - 16px)}.rtl-direction .form{left:0;right:6px}#changeNameForm.form,#emailTranscriptForm.form,#endChatForm.form{max-width:284px}.no-branding .form{bottom:14px}.form::-webkit-scrollbar{display:none}.form fieldset{padding:0}.form textarea{resize:none;display:block;height:40px;width:100%;overflow:auto;padding:0 15px;color:#707070;font-size:13px;font-weight:bold;border:0;background-color:#fff;margin:13px 0;-webkit-appearance:none}.form textarea:active,.form textarea:focus,.inputContainer select:active,.inputContainer select:focus{outline:0}.inputContainer{padding:0 15px;border:1px solid #ccc;-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;border-radius:3px;background-color:#fff;margin:0 0 7px 0;position:relative}.inputContainer input,.inputContainer select{width:100%;margin:0;border:0;display:block;line-height:1.2em;padding:10px 0;color:#707070;font-size:13px;font-weight:bold;font-family:inherit;-webkit-appearance:none}.inputContainer input{padding:11px 0}.inputContainer.other-fix{padding:0}.inputContainer select{background-color:#fff;outline:0}#departmentFieldFieldset.safari-fix .inputContainer{position:relative}#departmentFieldFieldset.safari-fix .inputContainer:after{position:absolute;right:24px;top:12px;cursor:pointer;width:10px;height:10px;font-size:10px;padding:0;background:#fff;color:#000;content:'\u25bc';pointer-events:none;cursor:pointer}.inputContainer.error,.form .textareaFieldset.error{border-color:#ef5656;color:#ef5656;margin-bottom:0 !important}.inputContainer.error input,.form .textareaFieldset.error textarea,.inputContainer.error select,.error .form-field-label{color:#ef5656;padding-right:30px}.inputContainer.error input::-webkit-input-placeholder,.form .textareaFieldset.error textarea::-webkit-input-placeholder{color:#ef5656}.inputContainer.valid,.form .textareaFieldset.valid{border-color:#92ed9d}.inputContainer.valid{padding-right:30px}.inputContainer.selection.valid{padding:0}.inputContainer input:active,.inputContainer input:focus{margin:0;border:0;outline:0}.inputContainer input:active+.form-field-label,.inputContainer input:focus+.form-field-label,.textareaFieldset textarea:active+.form-field-label,.textareaFieldset textarea:focus+.form-field-label{display:block}.inputContainer input:active::-webkit-input-placeholder,.inputContainer input:focus::-webkit-input-placeholder,.textareaFieldset textarea:active::-webkit-input-placeholder,.textareaFieldset textarea:focus::-webkit-input-placeholder{color:transparent !important}.inputContainer input:focus::-moz-placeholder,.inputContainer input:active::-moz-placeholder,.textareaFieldset textarea:focus::-moz-placeholder,.textareaFieldset textarea:active::-moz-placeholder{color:transparent !important;opacity:0 !important}.formErrorContainer{display:none;margin:0 0 7px 15px;color:#e52f48}.formErrorIcon{display:none;position:absolute;top:50%;right:10px;-ms-transform:translateY(-50%);-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);white-space:nowrap}.form-icon{color:white;font-weight:900;position:absolute;right:-2.5px;font-size:11px;top:1.5px}.rtl-direction .formErrorContainer{margin:0 15px 7px 0}.rtl-direction #preChatForm .formErrorContainer,.rtl-direction #offlineForm .formErrorContainer{margin:-6px 0 7px 15px}#formSavingStatus.errorMessage{color:#ef5656;border:0;visibility:visible}#formSavingStatus{font-size:13px;visibility:hidden;margin:0 auto;max-width:260px}#formSavingStatus img{margin:0 0 0 5px}.formButtonContainer{margin:20px 0 0 0}button{display:inline;zoom:1;vertical-align:baseline;outline:0 none;cursor:pointer;text-align:center;text-decoration:none;overflow:visible;margin:0;padding:7px 15px 8px 15px;font-family:inherit;background-color:#c1c1c1;color:#3d3d3d;border:0;float:left;font-weight:bold;font-size:14px}button::-moz-focus-inner{border:0}button:focus{outline:0}button:active{background-color:#ddd}button:hover{background-color:#a9a9a9}.formButton{width:100%;height:50px}#agentTypingContainer .messageBody{font-size:16px !important;font-weight:bold;min-width:auto;line-height:normal}#offlineOverlay,#inactivityOverlay,#maintenanceOverlay{text-align:center;margin-top:100px;font-size:40px;font-weight:bold;height:auto}#formInnerHeight{margin:0 auto}#tawktoLink{color:#4f4f4f;font-size:12px;font-weight:400;text-decoration:none;padding:5px}#tawktoLink:hover{background:#eee;border-radius:3px}#tawktoLink .emojione{margin-left:-5px;margin-right:-5px;height:3ex;width:auto;min-height:20px;min-width:20px;display:inline-block;vertical-align:middle}#tawktoLink b{font-weight:700}#bottomContainer{text-align:center;width:100%;position:absolute;bottom:48px;height:30px;background:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:30px}.headerBoxLink{width:30px;height:60px;margin:0;display:inline-block;position:relative;grid-row:1;text-decoration:none}#chatMenu{text-decoration:none}.headerBoxLink .headerBoxIcon{font-size:18px;margin:0 auto;display:block;width:18px;line-height:60px;vertical-align:middle}.headerBoxLink#faq{display:none}.headerBoxLink.active::before,#chatMenu.active::before{content:\"\";height:25px;width:25px;background-color:#00000030;position:absolute;border-radius:3px;top:17px;right:3px}#chatMenuControls{background-color:white;width:calc(100vw - 50px);max-width:200px;position:absolute;z-index:9999;border-radius:3px;top:45px;right:0;display:none;border:1px solid #e2e2e2;animation:slideDown .2s;-webkit-animation:slideDown .2s;-moz-animation:slideDown .2s;-o-animation:slideDown .2s}@keyframes slideDown{0%{transform:translateY(-2%)}50%{transform:translateY(-1%)}100%{transform:translateY(0%)}}@-webkit-keyframes slideDown{0%{-webkit-transform:translateY(-2%)}50%{-webkit-transform:translateY(-1%)}100%{-webkit-transform:translateY(0%)}}#chatMenuControls::after{content:\"\";width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid white;position:absolute;top:-6px;right:8px}#chatMenuControlsOverlay{position:fixed;top:50px;left:0;height:calc(100vh - 50px);width:100vw}.rtl-direction #chatMenuControls{right:auto;left:0}.rtl-direction #chatMenuControls::after{right:auto;left:8px}#chatMenuControls ul{padding:0;margin:0;list-style:none;text-align:left;padding:10px;position:relative}#chatMenuControls li{padding:10px;cursor:pointer;font-size:14px;color:#434343}#chatMenuControls li:hover{background-color:#53ce3c;color:white;border-radius:3px}.rtl-direction #endChat{margin-right:5px}#endChat .icon{width:11px;height:11px;float:right;margin:2.5px}.black #endChat .icon{background-position:0 0}.white #endChat .icon{background-position:-63px 0}#minimizeChat .icon{width:11px;height:7px;margin:4.5px 2.5px}.black #minimizeChat .icon{background-position:-32px 0}.white #minimizeChat .icon{background-position:-95px 0}#popoutChat .icon{width:10px;height:10px;margin:3px}.isPopout #popoutChat{display:none}.black #popoutChat .icon{background-position:-48px 0}.white #popoutChat .icon{background-position:-111px 0}#openMenu{position:absolute;left:10px;bottom:0;color:#bdbdbd;font-size:13px;font-weight:700;text-decoration:none;line-height:28px;z-index:100001;cursor:pointer;text-transform:lowercase}.rtl-direction #openMenu{right:10px;left:auto}#options{height:32px;margin-left:110px;text-overflow:ellipsis}.rtl-direction #options{margin:0 110px 0 0}.profileImageContainer .agentProfileImage{background-position:0 0;width:28px;height:28px;background-repeat:no-repeat;border-radius:14px;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:28px 28px;position:absolute;left:0;top:-9px}#tawkToContent{display:none;position:absolute;top:60px;bottom:0;width:100%;background:#fff;z-index:3}#tawkToContent #formFieldsContainer{left:8px;right:8px;margin:14px 0}#tawkToContent .formFrame{position:absolute;overflow:hidden;top:0;bottom:0;left:0;right:0;height:auto;width:auto}#tawkToContent .contentContainer{position:relative;height:100%;overflow:auto}#tawkToContent .buttonContainer{position:absolute;height:50px;bottom:0;width:100%}#tawkToContent .buttonContainer button{width:50%;height:50px}#tawkHeader{font-size:22px;font-weight:bold;text-align:center;padding:20px 0 12px 0;color:#343434;border-bottom:2px solid #ddd;width:150px;margin:0 auto}#tawkContent{font-size:15px;text-align:center;color:#6c6c6c;margin:12px 0 0}#tawkImage{background-image:url('https://static-v.tawk.to/a-v3/images/tawky.png');background-position:-235px 0;width:78px;height:83px;margin:0 auto}#cancelTawkRedirect{float:left}#tawkRedirect{float:right}#optionsContainer{position:absolute;left:0;width:155px;bottom:0;z-index:1000001;padding:3px;text-align:left}.rtl-direction #optionsContainer{left:auto;right:0}#optionsContainer .item{padding:0 3px;color:#696969;cursor:pointer;font-size:12px;font-weight:bold;line-height:30px;display:inline-block;vertical-align:middle;position:relative;height:30px}.rtl-direction #optionsContainer .item{float:right}#optionsContainer .tooltip{position:absolute;top:0;left:0;background:#333;color:#fff;padding:2px;-ms-transform:translate(-50%,-100%);-webkit-transform:translate(-50%,-100%);-moz-transform:translate(-50%,-100%);-o-transform:translate(-50%,-100%);transform:translate(-50%,-100%);min-width:100px;border-radius:3px;display:none;line-height:20px;position:absolute;left:50%;text-align:center}#soundOption .tooltip{left:0;-ms-transform:translate(0%,-100%);-webkit-transform:translate(0%,-100%);-moz-transform:translate(0%,-100%);-o-transform:translate(0%,-100%);transform:translate(0%,-100%)}#emailTranscriptOption .tooltip{left:-26px;-ms-transform:translate(0%,-100%);-webkit-transform:translate(0%,-100%);-moz-transform:translate(0%,-100%);-o-transform:translate(0%,-100%);transform:translate(0%,-100%)}#optionsContainer .item:hover .tooltip{display:block}#emailTranscriptForm .inputContainer,#changeNameForm .inputContainer,#endChatForm .inputContainer{border:0;margin:0}#offlineForm #messageField{height:85px}#offlineFormContainer.success #offlineForm #overlayOfflineForm{display:block}#overlayOfflineForm{position:absolute;top:50%;-ms-transform:translate(0%,-50%);-webkit-transform:translate(0%,-50%);-moz-transform:translate(0%,-50%);-o-transform:translate(0%,-50%);transform:translate(0%,-50%);bottom:0;left:0;right:0;display:none;z-index:1;background-color:#fff;color:#000;text-align:center;padding:20px 15px;font-size:15px}#overlayOfflineForm #resendButton{margin-top:15px;padding:7px 12px;width:100%;font-weight:700;cursor:pointer;height:40px}#overlayOfflineForm p{font-size:17px}.innerTittle{margin:0;padding:15px 0;text-align:left;font-size:14px}.rtl-direction #formInnerHeight .innerTittle{text-align:right}.rtl-direction #emailTranscriptFormMessageContainer,.rtl-direction #changeNameFormMessageContainer{text-align:right}.rtl-direction .longFormBottomContainer #formCancel,.rtl-direction .longFormBottomContainer #formDecline{float:right;margin-left:6px;order:1}.rtl-direction .longFormBottomContainer #newChat{float:right;margin-left:6px}.rtl-direction .longFormBottomContainer #formSubmit{float:right;order:2}#submitWrapper{position:absolute;bottom:0;height:0;width:auto;right:16px;background:#000;border-radius:4px 4px 0 0;color:#fff;-webkit-transition:height .25s ease;-moz-transition:height .25s ease;-ms-transition:height .25s ease;-o-transition:height .25s ease;transition:height .25s ease;z-index:5}#submitWrapper.visible{height:30px}#submitWrapper p{line-height:30px;padding:0 10px;float:left}.rtl-direction #submitWrapper p{float:right}#submitWrapper .loader{transform:scale(0.3);margin-top:-17px;margin-left:-13px;margin-right:-13px}#submitWrapper .spin:after{background:#fff !important}#agentProfileContainer{width:100%;margin-left:10px;display:none}#agentProfileContainer.show{display:block;animation:fadeIn 1s;-webkit-animation:fadeIn 1s;-moz-animation:fadeIn 1s;-o-animation:fadeIn 1s}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}#profileDetail{height:50px;position:static;width:100%;float:left}#profileDetailNoImage{height:45px;position:static;margin-left:0}#agentWrapper{height:0;display:none;float:left;width:100%;height:45px}.messageStatusContainer.pending .messageTime{display:none}#chatEnded{position:absolute;left:0;bottom:32px;height:87px;width:100%;background:#fff;display:none;z-index:10}#chatEnded .title{text-align:center;font-size:14px;margin:10px 0}#chatEnded .buttonContainer{width:100%;height:50px}#offlineButtonContainer,#prechatButtonContainer{top:auto}#newMessageDivider{margin-top:4px;font-size:.7rem;line-height:.6rem}#newMessageDividerLine{border-top:2px solid #e4c0b6;border-bottom:0;margin:0 0 -1px}#newMessageDividerLabel{background:#fcfcfc;margin:-0.3rem 0;float:right;padding:0 .5rem;color:#e4c0b6}.offlineMessageSuccess{color:#6db626}#newMessageContainer{position:relative;left:-50%;cursor:pointer;display:none}#newMessagesBar{position:absolute;bottom:33px;height:0;width:auto;left:50%;color:#fff;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-ms-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease;visibility:hidden;cursor:pointer;z-index:0}#newMessagesBar.theme-background-color{background-color:transparent !important}#notificationMessageText{font-weight:700}#newMessageArrowDown{width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #81bd1d;transform:translate(-50%);position:absolute;left:50%;bottom:-5px}#newMessagesNotificationLink{float:left;margin:6px 6px auto auto;font-weight:bold}.rtl-direction #newMessagesNotificationLink{float:right;-ms-transform:rotateY(180deg);-webkit-transform:rotateY(180deg);transform:rotateY(180deg);margin:7px auto auto 7px}#newMessagesBar.visible{height:27px;bottom:90px;visibility:visible}#newMessagesBar.visible #newMessageContainer{display:block}#newMessagesBar p{line-height:27px;padding:0 10px;text-align:center;background-color:#81bd1d;border-radius:5px}.uploaded-image{max-width:100%;max-height:220px;display:block}.download-file{color:inherit;text-decoration:underline;display:block;margin-top:3px}.progress{height:14px;position:relative;background:#eee;box-shadow:0 1px 0 transparent,0 0 0 1px #e3e3e3 inset;width:200px;margin:5px 0;display:inline-block;vertical-align:middle}.progress-bar{display:block;height:100%;background-color:#71a06a;box-shadow:inset 0 2px 9px rgba(255,255,255,0.3),inset 0 -2px 6px rgba(0,0,0,0.4);position:relative;overflow:hidden;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.upload-data{margin:7px 12px 0 20px;min-width:250px}.upload-data span{font-style:italic}#uploadFileIcon{font-size:18px;vertical-align:middle;width:20px;height:21px;margin-top:5px}.image-loader{display:block;position:relative;width:64px;height:64px;margin:0 auto}.upload-error{margin:5px}.upload-error span{font-size:16px;color:red;font-weight:bold;vertical-align:middle}.drag-over #textareaWrapper:before{text-align:center;margin:0;font-size:25px;height:auto;line-height:68px;color:#ccc;background:#fff;position:absolute;top:0;bottom:0;right:0;left:0;border:3px dashed #ccc;content:'';white-space:pre-line}#drop-text{text-align:center;font-size:25px;height:auto;color:#ccc;position:absolute;top:2px;bottom:2px;right:2px;left:2px;white-space:pre-line;display:none}.drag-over #drop-text{display:block}#drop-text span{display:block;vertical-align:middle;line-height:normal;top:50%;margin-top:-15px;position:relative}.drag-over .drop-text{display:block}.drag-over #chatTextarea{opacity:0}#upload-form{position:absolute;top:-100000px}#uploadFileOption label{display:block;cursor:pointer}.form-field-label.small{color:#b3b3b3;padding:1px 0 0 0;display:none;font-size:10px;position:absolute;top:0;left:4px;font-weight:bold}.rtl-direction .form-field-label.small{left:auto;right:4px}.form-field-label{color:#707070;font-size:13px;font-weight:bold}.selection-label{vertical-align:middle;cursor:pointer}.selection-container{position:relative}.selections-container.error{border:2px solid #e52f48;border-radius:3px;padding:11px 0 11px 11px;position:relative}.agentInfoNoImage{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.messageContainer{position:relative;margin:10px 12px}#agentTypingContainer{position:relative;margin:24px 12px;display:none}.messageContainer{clear:both}.profileImageContainer{height:28px;width:28px;position:absolute}.ownerNameContainer{float:right}.multi-agent .agentChatContainer .ownerNameContainer{float:left;width:100%;position:absolute;bottom:-13px;left:0}.messageOwnerName{color:#757575;font-weight:400;text-decoration:none;font-size:11px !important;margin:0;padding:0;line-height:1;display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-left:40px;vertical-align:bottom}.rtl-direction .messageOwnerName{margin-left:0;margin-right:30px}.messageOwnerName.visitor{text-align:right;margin-right:0;margin-left:0;margin-bottom:3px}.messageOwnerName.agent{display:none}.multi-agent .messageOwnerName.agent{display:inline-block}.rtl-direction .messageOwnerName.visitor{text-align:left}#chatTableWrapper{display:table;height:100%;width:100%;table-layout:fixed}#chatRowWrapper{display:table-row;vertical-align:bottom}#chatCellWrapper{position:relative;display:table-cell;vertical-align:bottom;overflow:hidden}.single-agent .profileImageContainer{display:block;margin-top:8px}.rtl-direction .single-agent .profileImageContainer{margin-top:-3px}.single-agent .agentChatContainer .ownerNameContainer.trigger{display:block}.ownerNameContainer.trigger .messageOwnerName{margin-left:0;margin-right:0}.multi-agent .ownerNameContainer.trigger .messageOwnerName{margin-left:30px;margin-right:0}.rtl-direction .multi-agent .agentChatContainer .message{margin-right:30px;margin-left:40px}.rtl-direction .multi-agent .ownerNameContainer.trigger .messageOwnerName{margin-right:30px;margin-left:0}.single-agent .visitorChatContainer .messageBody,.single-agent .messageOwnerName.visitor{margin-right:0;margin-left:0}.agentChatContainer .messageBody,.agentChatContainer .ownerNameContainer{margin-left:0;margin-right:0;margin-top:0}.agentChatContainer .messageBody{padding-left:38px}.visitorChatContainer .pending .message,.rtl-direction .agentChatContainer .message{animation:slideFromRight .1s;-webkit-animation:slideFromRight .1s;-moz-animation:slideFromRight .1s;-o-animation:slideFromRight .1s;max-width:229px}.visitorChatContainer[style] .message{animation:none}.agentChatContainer .message,.visitorChatContainer .pending .message{animation:slideFromLeft .1s;-webkit-animation:slideFromLeft .1s;-moz-animation:slideFromLeft .1s;-o-animation:slideFromLeft .1s}.agentChatContainer .message.agentTypingIndicator{animation:none}@keyframes slideFromLeft{0%{margin-left:-50px;opacity:0}100%{margin-left:0;opacity:1}}@-webkit-keyframes slideFromLeft{0%{margin-left:-50px;opacity:0}100%{margin-left:0;opacity:1}}@keyframes slideFromRight{0%{margin-right:-100px;opacity:0}100%{margin-right:0;opacity:1}}@-webkit-keyframes slideFromRight{0%{margin-right:-100px;opacity:0}100%{margin-right:0;opacity:1}}#agentTypingContainer .agentChatContainer{margin-bottom:5px}.has-profile-image #headerBoxWrapper,.has-profile-image #headerBox,.has-profile-image #agentWrapper,.has-profile-image #headerBoxControlsContainer{height:60px}.has-profile-image #agentListLabel{margin-top:17px}.selection-container input{margin:0 3px 0 5px}.agentTypingIndicator{position:relative;text-align:center;margin-left:auto;margin-right:auto}.agentTypingIndicator .dot{display:inline-block;width:5px;height:5px;border-radius:50%;margin-right:3px;background:#303131;animation:typing 1.3s linear infinite}.agentTypingIndicator .dot:nth-child(2){animation-delay:-1.1s;-webkit-animation-delay:-1.1s;-moz-animation-delay:-1.1s;-ms-animation-delay:-1.1s;-o-animation-delay:-1.1s}.agentTypingIndicator .dot:nth-child(3){animation-delay:-0.9s;-webkit-animation-delay:-0.9s;-moz-animation-delay:-0.9s;-ms-animation-delay:-0.9s;-o-animation-delay:-0.9s}@keyframes typing{0%,60%,100%{transform:initial}30%{transform:translateY(-10px)}}@-ms-keyframes typing{0%,60%,100%{transform:initial}30%{transform:translateY(-10px)}}@-webkit-keyframes typing{0%,60%,100%{transform:initial}30%{transform:translateY(-10px)}}@-moz-keyframes typing{0%,60%,100%{transform:initial}30%{transform:translateY(-10px)}}@-o-keyframes typing{0%,60%,100%{transform:initial}30%{transform:translateY(-10px)}}.message a{color:inherit}#formContainer .inputContainer.selection:before{content:\"\";position:absolute;right:14px;top:17px;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #707070;z-index:0}.rtl-direction #formContainer .inputContainer.selection:before{right:auto;left:14px}#formContainer .inputContainer{background-color:#fff;overflow:hidden;position:relative;height:33px}#formContainer .inputContainer select{position:absolute;height:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:90%;background:transparent;font-size:13px;font-weight:600;line-height:1;-webkit-appearance:none;-moz-appearance:none;text-indent:.01px;text-overflow:'';-ms-appearance:none}#formContainer .inputContainer select::-ms-expand{display:none}#endChatOption{display:none}#actionButtonsContainer{position:absolute;right:14px;top:11px}.rtl-direction #actionButtonsContainer{left:0;right:auto}#rateContainer{padding:6px 8px;border-radius:5px;box-shadow:0 3px 15px #cbcbcb;display:none;position:absolute;width:50px;background:#fff;left:-100%;top:-8px;animation:fadeIn .5s;-webkit-animation:fadeIn .5s;-moz-animation:fadeIn .5s;-o-animation:fadeIn .5s}.rtl-direction #rateContainer{left:5px}.rtl-direction #rateNegative{float:right;margin-left:11px !important}.rtl-direction #ratePositive{float:right;margin-left:0}#actionButtonsContainer a{font-size:19px;color:#bdbdbd;text-decoration:none;float:left;margin-left:11px}#actionButtonsContainer a:hover{color:#464646}#rateNegative{margin-left:0 !important;color:#f99 !important}#ratePositive{color:#b4deab !important}#uploadFileOption{margin-left:6px}#viewEmoji{margin-left:12px}.drag-over #viewEmoji{display:none}#emoji-selection-container{position:absolute;bottom:48px;height:185px;background:#f0f0f0;display:none;z-index:2;width:100%;background-color:#f3f3f3}.header-title{text-align:center;margin:5px 0;font-weight:bold;font-size:14px}#tooLongMsgNotification{position:absolute;bottom:20px;z-index:100000;width:100%;text-align:center;display:none;color:red;font-size:12px;background-color:white}#tooLongMsgNotification.visible{display:block}.chatNotifInfoContainer,.callInfoContainer,.callErrorContainer{border:1px solid #ddd;border-radius:5px;padding:10px 8px 10px 8px;display:none;background:#fff}.chatNotifInfoContainer{display:block}.chatNotifIconContainer,.callIconContainer{display:table-cell;width:35px;vertical-align:middle}.chatNotifIconWrapper,.callIconWrapper{width:35px;height:35px;border-radius:50%;vertical-align:middle;display:inline-block}.callDetailsContainer{display:table-cell;vertical-align:middle;padding-left:5px}.rtl-direction .callDetailsContainer{padding-right:5px}.chatNotifDetailsContainer{display:inline-block;vertical-align:middle;margin-left:5px}.chatNotifTitle,.callTitle{font-size:15px;font-weight:bold;color:black}.callEndDetails{display:none;margin-top:5px;color:black}.callEndDetails,.callTitle{color:#3e3e3e}.callErrorContainer .callEndDetails{display:block}.callInfoWrapper{display:table}.callRetryContainer{display:inline-block;position:absolute;right:10px;top:50%;transform:translateY(-50%)}.callLoader .loader{transform:scale(0.3);margin-left:-10px}.rtl-direction .callRetryContainer{right:auto;left:10px}.retry-load{float:none;background:#fafafa;color:#717171;border:1px solid #d3d3d3}#chatEnded{width:100%;height:auto}.longFormContainer{position:relative;display:block;background-color:white;width:100%;z-index:4;margin:0 auto;box-sizing:border-box;border-radius:3px;font-weight:400;font-size:15px;color:#464646;overflow:hidden;height:auto}.rtl-direction #formContainer>#emailTranscriptForm .form-header-text,.rtl-direction #changeNameForm .form-header-text,.rtl-direction #chatEndedForm .form-header-text,.rtl-direction #offlineForm .longFormContainer .form-header-text,.rtl-direction #preChatForm .longFormContainer .form-header-text{padding-right:5px}.rtl-direction #formContainer>#emailTranscriptForm .formMessageField,.rtl-direction #offlineForm .formMessageField,.rtl-direction #preChatForm .formMessageField{text-align:unset}#offlineFormContainer,#prechatFormContainer{height:calc(100% - 250px);display:none;position:relative}#chatEndedForm #emailTranscriptForm{position:relative;height:auto}#offlineForm #formInnerHeight,#preChatForm #formInnerHeight{max-width:100%}#form-container::-webkit-scrollbar,#form-container.longFormContainer::-webkit-scrollbar,#tawkToContent .contentContainer::-webkit-scrollbar{display:none}.form-header-icon{background-color:#53ce3c;display:inline-block;height:30px;width:30px;margin-right:10px;line-height:34px;border-radius:5px;box-sizing:border-box;color:white;font-size:22px;text-align:center}.rtl-direction .form-header-icon{margin-left:10px;margin-right:0}.form-header-text{display:inline-block;line-height:30px;height:30px;vertical-align:top;font-weight:600;font-size:15px}#endChatForm #endChatFormMessageContainer{display:block;font-weight:600;font-size:15px;height:auto;color:#464646;padding:0}#formContainer>#emailTranscriptForm::before,#changeNameForm::before,#chatEndedForm::before,#endChatForm::before{content:\"\";height:100%;width:2px;background-color:#4ac735;position:absolute;left:0;top:0;border:1px solid #53ce3c;border-top-left-radius:3px;border-bottom-left-radius:3px;z-index:9;display:none}#controlsWrapper{position:relative}#offlineForm .formMessageField,#preChatForm .formMessageField{padding:10px 15px;text-align:center;margin-bottom:14px;font-size:14px;-webkit-transition:height .16s ease-out;transition:height .16s ease-out}#formContainer .inputContainer{border:0;padding:0;border-radius:5px;margin:0 0 11px 0;height:42px}#formContainer .textareaFieldset>.inputContainer,#formContainer>#emailTranscriptForm input,#formContainer .inputContainer input,#formContainer .inputContainer select,#formContainer .inputContainer input{box-shadow:none;height:100%;border-style:solid;border-color:#d0d0d0;box-sizing:border-box;display:inline-block;padding-left:11px;width:100%;border-width:2px;color:#656565;font-weight:700;border-radius:5px;width:100%}.rtl-direction #offlineForm .textareaFieldset>.inputContainer,.rtl-direction #preChatForm .textareaFieldset>.inputContainer,.rtl-direction #formContainer>#emailTranscriptForm input,.rtl-direction #changeNameForm .inputContainer input,.rtl-direction #chatEndedForm .inputContainer select,.rtl-direction #chatEndedForm .inputContainer input,.rtl-direction #offlineForm .inputContainer select,.rtl-direction #offlineForm .inputContainer input,.rtl-direction #preChatForm .inputContainer select,.rtl-direction #preChatForm .inputContainer input{padding-left:5px;padding-right:11px}.rtl-direction #changeNameForm .formErrorIcon,.rtl-direction #emailTranscriptForm .formErrorIcon,.rtl-direction #offlineForm .formErrorIcon,.rtl-direction #preChatForm .formErrorIcon{left:15px;right:auto}.rtl-direction #offlineForm .selection-container .selection-input-css-placeholder,.rtl-direction #preChatForm .selection-container .selection-input-css-placeholder{left:auto;right:0}.rtl-direction #offlineForm .selection-label,.rtl-direction #preChatForm .selection-label{padding-right:27px}#offlineForm .textareaFieldset>.error.inputContainer,#preChatForm .textareaFieldset>.error.inputContainer,#chatEndedForm .inputContainer.error select,#offlineForm .inputContainer.error select,#preChatForm .inputContainer.error select,.error.inputContainer input{border-color:#e52f48 !important}.inputContainer.error textarea::placeholder{color:#e52f48 !important}#offlineForm .textareaFieldset>.inputContainer,#preChatForm .textareaFieldset>.inputContainer{height:70px;padding:11px 0 11px 11px}#offlineForm .textareaFieldset .inputContainer textarea,#preChatForm .textareaFieldset .inputContainer textarea{margin:0;padding:0;height:100%;padding-right:11px;box-sizing:border-box}#changeNameForm fieldset,#emailTranscriptForm fieldset,#offlineForm fieldset,#preChatForm fieldset{position:relative}#chatEndedForm .inputContainer select option:disabled,#offlineForm .inputContainer select option:disabled,#preChatForm .inputContainer select option:disabled{display:none}#chatEndedForm .inputContainer.error select,#offlineForm .inputContainer.error select,#preChatForm .inputContainer.error select{color:#ef5656}#chatEndedForm .inputContainer.error select option,#offlineForm .inputContainer.error select option,#preChatForm .inputContainer.error select option{color:#656565}.longFormBottomContainer{width:100%;float:none;box-sizing:border-box;min-height:42px;margin-bottom:15px;grid-template-columns:1fr 1fr;grid-gap:12px;display:-ms-grid;display:grid;-ms-grid-columns:1fr 1fr}.longFormBottomContainer .clear{grid-column:span 2;-ms-grid-column-span:2}.has-required .longFormBottomContainer{display:block}#formCancel,#formDecline{-ms-grid-row:1;-ms-grid-column:1}#formSubmit{-ms-grid-row:1;-ms-grid-column:2}.formButton{height:100%;border-radius:5px;background-color:#d6d6d6;min-height:42px}#formSubmit-pc,#formSubmit{float:right}#changeNameForm .formErrorContainer,#emailTranscriptForm .formErrorContainer,#offlineForm .formErrorContainer,#preChatForm .formErrorContainer{margin:7px 0;text-align:right;font-size:13px;font-weight:600}#formContainer>#emailTranscriptForm #emailTranscriptFormMessageContainer,#changeNameForm #changeNameFormMessageContainer,#chatEndedForm #emailTranscriptFormMessageContainer{background-color:white;padding:15px 0}#formContainer>#emailTranscriptForm #formSavingStatus,#changeNameForm #formSavingStatus,#endChatForm #formSavingStatus,#chatEndedForm #formSavingStatus{display:none}#chatEndedForm #submitWrapper{bottom:32px;right:5px;display:none}#chatEndedForm #form-header{padding-top:12px}#changeNameForm #nameFieldError,#emailTranscriptForm #transcriptEmailFieldError,#chatEndedForm #transcriptEmailFieldError{color:#ef5656;font-size:13px}#circle-progress-bar-border{height:34px;width:34px;display:inline-block;padding:7px;border-radius:3px;border-width:1px;border-style:solid;border-color:#f4f4f4 !important;background:#fff}#circle-progress-bar-container{height:100%;width:100%;display:inline-block}#circle-progress-bar{height:100%;width:100%;overflow:hidden;border-radius:50%;position:relative;background-color:#e3e3e3;display:inline-block}#circle-progress-bar .inner-content{background-color:white;height:calc(100% - 5px);width:calc(100% - 5px);border-radius:50%;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;z-index:9999}#circle-progress-bar .circle-progress-clip{height:100%;width:50%;position:absolute;top:0;z-index:11;left:0;border-top-left-radius:50%;border-bottom-left-radius:50%;background:#e3e3e3}#circle-progress-bar .circle-progress-right,#circle-progress-bar .circle-progress-left{left:0;border-top-left-radius:50%;border-bottom-left-radius:50%;background:#4f4f4f;transform-origin:right center;transform:rotate(0deg);height:100%;width:50%;z-index:10;position:absolute}#circle-progress-bar .circle-progress-right{display:none;transform:rotate(180deg)}#upload-info-container .file-name{display:block;margin:0 0 0 5px;font-weight:700;font-size:14px;font-style:normal}#upload-info-container .file-status{display:block;margin:0 0 0 5px;font-weight:400;font-size:13px;font-style:normal}#upload-info-container{display:inline-block;height:100%;vertical-align:top;text-align:left;width:calc(100% - 60px);margin-left:10px}#upload-info-container #upload-info{display:table;height:100%}#upload-info-container #upload-info .wrapper{display:table-cell;vertical-align:middle}#upload-info-container .upload-icon{display:none}#circle-progress-bar .inner-content .icon{font-style:normal;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:25px;color:#4f4f4f}.upload-data{margin:24px 15px 12px 16px;display:inline-block;text-align:right;height:72px;padding:11px;border-radius:3px;border-width:1px;border-style:solid;border-color:#f4f4f4 !important;float:right;min-width:auto;position:relative;box-sizing:border-box}.visitorChatContainer .messageStatusContainer.messageTimeContainer,.agentChatContainer .messageStatusContainer.messageTimeContainer{position:absolute;top:auto;bottom:-13px;left:0;right:auto;width:auto;margin:0;padding:0}.agentChatContainer .messageStatusContainer.messageTimeContainer{right:0;left:auto}#offlineForm .selection-container,#preChatForm .selection-container{position:relative;margin:11px 0;width:calc(100% - 30px);display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}#offlineForm .selection-container .selection-input-css-placeholder,#preChatForm .selection-container .selection-input-css-placeholder{width:14px;height:14px;position:absolute;border-radius:4px;border-color:#d4d4d4;border-width:2px;border-style:solid}#offlineForm .selection-container.radio .selection-input-css-placeholder,#preChatForm .selection-container.radio .selection-input-css-placeholder{border-radius:50%}#offlineForm .selection-container.checkbox .selection-input-css-placeholder::after,#preChatForm .selection-container.checkbox .selection-input-css-placeholder::after{content:'';width:8px;height:3px;position:absolute;top:4px;left:2px;border:2px solid #53ce3c;border-top:0;border-right:0;background:transparent;opacity:0;transform:rotate(-55deg)}#offlineForm .selection-container.radio .selection-input-css-placeholder::after,#preChatForm .selection-container.radio .selection-input-css-placeholder::after{content:'';display:inline-block;width:calc(100% - 6px);height:calc(100% - 6px);top:50%;left:50%;transform:translate(-50%,-50%);position:absolute;border-radius:50%;background:#53ce3c;opacity:0}#offlineForm .selection-container.radio input[type=radio],#offlineForm .selection-container.checkbox input[type=checkbox],#preChatForm .selection-container.radio input[type=radio],#preChatForm .selection-container.checkbox input[type=checkbox]{display:none}.rtl-direction #offlineForm .selection-container.radio input[type=radio],.rtl-direction #offlineForm .selection-container.checkbox input[type=checkbox],.rtl-direction #preChatForm .selection-container.radio input[type=radio],.rtl-direction #preChatForm .selection-container.checkbox input[type=checkbox]{margin-right:-20px}#offlineForm .selection-container.radio input[type=radio]:checked+.selection-input-css-placeholder::after,#offlineForm .selection-container.checkbox input[type=checkbox]:checked+.selection-input-css-placeholder::after,#preChatForm .selection-container.radio input[type=radio]:checked+.selection-input-css-placeholder::after,#preChatForm .selection-container.checkbox input[type=checkbox]:checked+.selection-input-css-placeholder::after{opacity:1}#offlineForm .selection-label,#preChatForm .selection-label{color:#707070;font-size:13px;font-weight:bold;padding-left:27px;position:relative}.uploaded-file-name{margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.uploaded-file-info{display:grid;grid-template-columns:auto auto 1fr;grid-gap:5px;font-size:12px;align-content:normal;justify-content:center;vertical-align:middle;display:-ms-grid;-ms-grid-columns:auto auto 1fr}.uploaded-file-info .uploaded-file-name{-ms-grid-row:1;-ms-grid-column:1}.uploaded-file-info .uploaded-file-size{-ms-grid-row:1;-ms-grid-column:2}.uploaded-file-info .download-file{-ms-grid-row:1;-ms-grid-column:3}.download-file{text-transform:capitalize}.uploaded-file-size{margin-top:4px;font-size:11px}.file-upload-not-img-vid-audio .uploaded-file-name{margin-top:0}.file-upload-not-img-vid-audio .file-size{text-transform:lowercase;margin-top:3px}.file-upload-not-img-vid-audio .separator{margin-top:3px}#incoming-call{background-color:#f8f8f8;padding:13px 13px 12px 13px;box-sizing:border-box;border:#e6e6e6 1px solid;position:absolute;top:0;width:100%;z-index:5}#incoming-call-container{text-align:center}#incoming-call-container .header-label{display:inline-block;line-height:28px;vertical-align:top;font-weight:600;font-size:15px;margin-left:5px;color:#3e3e3e}.rtl-direction #incoming-call-container .header-label{margin-right:5px}#incoming-call .profileImageContainer{position:relative;display:inline-block}.profileImageContainer .incomingCallAgentProfileImage{width:28px;height:28px;background-repeat:no-repeat;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:28px 28px;position:absolute;left:0;display:block;border-radius:50%}#incoming-call-buttons{margin-top:16px}#incoming-call-buttons button{width:calc(50% - 5px);border-radius:5px;border:0;display:inline-block;color:#fff;height:42px;cursor:pointer;padding:0;margin:0}.rtl-direction #incoming-call-buttons{direction:ltr}#incoming-call-buttons button .btn-icon{font-size:17px;color:white;display:inline-block;line-height:41px;vertical-align:top}#incoming-call-buttons button .btn-label{display:inline-block;margin-left:10px;line-height:41px;font-weight:600}#decline-call .btn-icon{transform:rotate(135deg)}#decline-call{background-color:#e52f48;float:right}#accept-call{background-color:#48c82e;float:left}.rtl-direction #decline-call{float:left}.rtl-direction #accept-call{float:right}.visitorChatContainer .ownerNameContainer{display:none}#file-upload-drop-container{display:none;background-color:#fff;box-sizing:border-box;position:absolute;bottom:0;height:80px;width:100%;z-index:10}#fileUploadWrapper{border:#e4e4e4 solid 1px;border-radius:5px;background-color:#f1f1f1;height:calc(100% - 15px);width:90%;margin:10px auto 0;position:relative}#file-upload-drop-icon-label-container{transform:translate(-50%,-50%);position:absolute;top:50%;left:50%;width:100%}#file-upload-drop-icon{font-size:30px;display:block;font-weight:600;text-align:center}#file-upload-drop-label{font-size:15px;display:block;font-weight:600;text-align:center;color:#464646;margin-top:5px}.drag-over #actionsContainer{display:none}.drag-over #file-upload-drop-container{display:block}#tooLongMsgNotification{height:42px;position:absolute;width:calc(100% - 30px);left:15px;margin-top:10px;border-radius:5px;line-height:42px;text-align:center}#notifMessageText{margin-left:5px}.chatNotifIconContainer,.callIconContainer{display:inline-block;height:30px;width:30px;border-radius:5px;color:white;position:relative;background-color:#919191}.rtcIcon,.callIcon{display:inline-block;position:relative;top:8px}.chatNotifInfoWrapper,.callInfoWrapper{height:30px}.callInfo{vertical-align:top;line-height:32px;margin-left:10px;font-weight:600;font-size:15px}.chatNotifIconWrapper,.callIconWrapper{display:inline-block;font-size:17px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}.callInfoElapsedTime{position:absolute;bottom:8px;right:13px;font-size:13px;color:#bdbdbd}.embedded #consentForm #formCancel{display:none !important}.popup #consentForm #formCancel{display:block !important}.popup #consentForm #formSubmit{width:50% !important}#consentForm .innerTittle,#tawkToContent .innerTittle{text-align:center}#consentForm .formCell,#tawkToContent .formCell{vertical-align:middle}.rtl-direction .uploadFailedNotifLabel,.rtl-direction #maxFileNotifLabel,.rtl-direction #maxSizeNotifLabel{margin-right:10px}#contentContainer{position:absolute;top:59px;bottom:0;width:100%;height:auto;z-index:1;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;display:-ms-flexbox;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}#chatPanel,#formContainer{-ms-flex-grow:1;-webkit-flex-grow:1;-moz-flex-grow:1;flex-grow:1;flex-shrink:1;position:relative;-ms-flex:1}#formContainer{display:none;background:#fff}.chatEndVisible #chatPanel{display:block !important}.chatEndVisible #formContainer{position:fixed;bottom:5px;z-index:99999;background:#fff;left:1px;right:1px;width:auto}.chatEndVisible #formFieldsContainer,.chatEndVisible .form{position:static}#greetingsMainContainer{transition:max-height .25s ease-out,opacity .5s ease;-webkit-transition:max-height .25s ease-out,opacity .5s ease;-moz-transition:max-height .25s ease-out,opacity .5s ease;-ms-transition:max-height .25s ease-out,opacity .5s ease;height:auto;max-height:100%}#greetingsMainContainer.minimize{max-height:0;opacity:0}#greetingsContent{padding:5px 15px 20px;text-align:center;font-size:14px;font-weight:400;display:none}#formFieldsContainer{margin:14px 0 0;position:absolute;width:auto;left:7px;right:0;bottom:0;top:0;height:auto;overflow:scroll;overflow-x:auto;animation:slideFadeIn .25s ease;-webkit-animation:slideFadeIn .25s ease;scrollbar-width:thin;scrollbar-color:#fff #fff;-ms-overflow-style:-ms-autohiding-scrollbar;box-sizing:border-box}#formContainer.has-required #formCancel,#formContainer.has-required #formDecline{display:none}#formContainer.has-required #formSubmit{float:none !important;width:100% !important}.formTable{display:table;width:100%;table-layout:fixed;height:100%}.formRow{display:table-row}.formCell{display:table-cell;vertical-align:bottom}.formFrame{border:1px solid #e4e4e4;border-radius:3px;padding:16px 15px 0}.field-error{font-size:17px;color:#ef5656}.rtl-direction .message.agentTypingIndicator::after,.rtl-direction .message.agentTypingIndicator::before,.rtl-direction .upload-data::after,.rtl-direction .upload-data::before,.rtl-direction .messageContainer .messageWrapper .message::after,.rtl-direction .messageContainer .messageWrapper .message::before{transform:rotate(180deg)}.rtl-direction .upload-data::after,.rtl-direction .upload-data::before,.rtl-direction .messageContainer.visitorChatContainer .messageWrapper .message::after,.rtl-direction .messageContainer.visitorChatContainer .messageWrapper .message::before{left:auto;right:100%}.rtl-direction .message.agentTypingIndicator::after,.rtl-direction .message.agentTypingIndicator::before,.rtl-direction .messageContainer.agentChatContainer .messageWrapper .message::after,.rtl-direction .messageContainer.agentChatContainer .messageWrapper .message::before{right:auto;left:100%}.border-corner{border-radius:5px 5px 0 0}.roundWidget #innerWrapper.border-corner{border-radius:5px}.embedded .border-corner{border-radius:0 !important}.embedded #innerWrapper{border:0}.time-agent-display{display:grid;grid-template-columns:1fr auto;grid-gap:5px;font-size:12px;display:-ms-grid;-ms-grid-columns:1fr}.time-agent-display .agent-div{-ms-grid-row:1;-ms-grid-column:1;float:left}.time-agent-display .time-div{-ms-grid-row:1;-ms-grid-column:2;font-size:11px;float:left}@keyframes slideFadeIn{0%{opacity:0;transform:translate(0,30px)}to{opacity:1;transform:translate(0,0px)}}#textareaSubmitContainer{width:45px;height:40px;position:absolute;right:0;display:none;top:0}.rtl-direction #textareaSubmitContainer{left:0;right:auto}.icon-mobile-submit{text-align:center;position:relative;top:0;padding-top:11px;font-size:21px;height:40px}#actionsContainer.mobile-typing #textareaSubmitContainer{display:block}#actionsContainer.mobile-typing #actionButtonsContainer{right:45px}.rtl-direction #actionsContainer.mobile-typing #actionButtonsContainer{left:45px}#actionsContainer.mobile-typing #rateMainWrapper,#actionsContainer.mobile-typing #uploadFileOption{display:none}.rtl-direction #rateMainWrapper,.rtl-direction #uploadFileOption,.rtl-direction #viewEmoji{float:right}.agent-profile-detailed{float:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-left:5px}.agent-profile-detailed strong{font-weight:bold}.multiple-agent .agent-profile-detailed{display:none}#headerAccountStateContainer.multiple-agent #agentProfileContainer.show{display:block}.rtl-direction .agent-profile-detailed{margin-left:auto;margin-right:20px}.rtl-direction #shortMessage{margin-left:auto;margin-right:10px}.agentDetailedInfo{position:relative;top:50%;-ms-transform:translateY(-50%);-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%)}.agentDetailedInfo,.agentDetailedInfo p{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mobile .headerBoxLink .headerBoxIcon{width:21px}.mobile .headerBoxLink .headerBoxIcon,.mobile #actionButtonsContainer a{font-size:21px}.mobile #rateContainer{width:53px}.mobile #changeNameForm.form,.mobile #emailTranscriptForm.form,.mobile #endChatForm.form,.mobile #formInnerHeight{max-width:350px}.mobile button{font-size:15px}.mobile .longFormBottomContainer{height:auto}.mobile .longFormContainer{padding-bottom:15px}.mobile .formMessageField.innerTittle,.mobile .formMessageField,.mobile .form-header-text{font-size:15px}.mobile #endChatForm .longFormContainer{padding-bottom:0}.mobile .form-header-icon{font-size:24px;width:31px;height:31px}#hidableActionsWrapper{float:left}";
      b.MinifiedStyle = "body{font-family:Helvetica,Arial,sans-serif}body.font-lato{font-family:'Lato','Open Sans',sans-serif !important}*{font-family:inherit}.rtl-direction{direction:rtl}#tawkchat-minified-box{height:100%;width:100%;overflow:hidden}#tawkchat-minified-wrapper{z-index:999997;cursor:pointer;height:100%;width:100%}#tawkchat-minified-box.round{width:60px;height:60px}#tawkchat-status-container{height:100%;width:auto;display:inline-block;position:absolute}#tawkchat-status-agent-container{height:100%;width:100%;display:none;margin-right:5px;position:relative}#tawkchat-status-icon-container{margin-right:5px}#tawkchat-status-icon-container,#tawkchat-status-text-container{display:inline-block;vertical-align:top}.round #tawkchat-status-text-container{width:60px;height:60px;display:block;border-radius:50%}.round #tawkchat-status-agent-container{height:60px;width:60px;display:none;margin:0;position:relative}.round.open #tawkchat-status-agent-container{display:none !important}.center #tawkchat-minified-wrapper{position:absolute}#tawkchat-status-agent-container #agent-profile-image{background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:32px 32px;height:32px;width:32px;display:inline-block;position:absolute;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);border-radius:50%}.round #tawkchat-status-agent-container #agent-profile-image{height:60px;width:60px;background-size:60px 60px;position:static;transform:translate(0)}#tawkchat-minified-border{margin:0;border:0 none;padding:0;background-color:#000;filter:alpha(opacity=40);opacity:.4;position:absolute;z-index:999998;border-radius:4px 4px 0 0;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;width:100%;height:100%;right:0;bottom:0}#tawkchat-minified-container{margin:0;border:0 none;padding:0;cursor:pointer;z-index:999999;position:absolute;top:0;bottom:0;width:auto;height:auto;left:0;right:0;border-bottom:0}#tawkchat-status-middle{border:0 none;margin:0 auto;font-size:17px;vertical-align:middle;position:absolute;top:50%;left:15px;right:15px;transform:translate(0%,-50%);-webkit-transform:translate(0%,-50%);-moz-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);-o-transform:translate(0%,-50%)}#tawkchat-status-message{border:0 none;margin:0 26px 0 0;padding:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:left;font-size:17px}.rtl-direction #tawkchat-status-message{margin:0 0 0 26px;text-align:right}#tawkchat-chat-bubble{border:0 none;padding:0;margin:0;width:190px;height:65px;position:absolute;top:0;display:none;right:32px}.left #tawkchat-chat-bubble{right:2px}#tawkchat-chat-bubble-text-container{border:0 none;padding:0;margin:0 0 0 -58px;width:111px;height:65px;position:absolute;z-index:10;font-style:italic;font-size:15px;top:5px;left:50%;right:auto;text-align:center;overflow:hidden;text-overflow:ellipsis;display:table}.rtl-direction #tawkchat-chat-bubble-text-container{right:50%;left:auto;margin:0 -58px 0 0}#tawkchat-chat-bubble-text{margin:0;display:table-cell;vertical-align:middle}#tawkchat-chat-bubble-graphics-container{border:0 none;padding:0;margin:0;width:146px;height:85px}#tawkchat-chat-bubble-canvas{width:146px;height:85px;border:0 none;padding:0;margin:0}#tawkchat-minified-agent-container{float:left;width:100%;display:none}#tawkchat-minified-agent-information-wrapper{border:0 none;margin:0 88px 0 0;padding:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:left;font-size:17px}.hasImage #tawkchat-minified-agent-information-wrapper{margin-left:60px}#tawkchat-minified-agent-name{border:0 none;padding:0;margin:0;font-weight:bold}.agentNameCentered{margin-top:17px}.agentContainerNoImage{margin-right:26px;margin-left:0}.rtl-direction .agentContainerNoImage{margin-left:19px;margin-right:0}.agentContainer{margin:6px 20px 5px 45px}.rtl-direction .agentContainer{margin-right:45px;margin-left:20px}#tawkchat-minified-agent-position{border:0 none;padding:0;margin:0;font-style:italic}#tawkchat-chat-indicator{text-align:center;border-radius:50%;width:100%;height:100%;border:0 none;margin:0;position:absolute;top:0;right:auto;z-index:1000000;display:none;background:#e52f48}#tawkchat-chat-indicator-text{border:0 none;padding:0;overflow:hidden;vertical-align:baseline;font-weight:bold;font-size:13px;text-align:center;color:white;z-index:1000001;display:block;line-height:21px;width:100%;height:100%}#maximizeChat,#popoutChat{width:16px;height:16px;margin:0;z-index:100001}#maximizeChat,#minimizeChatMinifiedBtn{display:inline-block;font-size:32px;height:100%;width:auto;text-align:center;cursor:pointer}#short-message{display:inline-block;width:auto;cursor:pointer;font-size:15px}#profileDetail{position:static;width:100%;float:left}.agentInformationContainer p{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.position-label{font-size:12px}.agentInfoNoImage{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.image-bubble-close{width:15px;height:15px;float:right;margin:0 2.5px;cursor:pointer;display:block;visibility:hidden}.image-bubble-close:before,.image-bubble-close:after{position:absolute;right:5px;content:' ';height:15px;width:2px;background-color:#333}.image-bubble-close:before{transform:rotate(45deg)}.image-bubble-close:after{transform:rotate(-45deg)}#bubble-image{cursor:pointer}#bubble-image.gallery-bubble{position:absolute;top:11px;bottom:0;left:0;right:0}.image-canvas-close{border:0 none;padding:0;margin:0;width:10px;height:13px;position:absolute;right:6px;top:3px;font-size:12px;cursor:pointer;z-index:20}.image-loader{display:block;position:relative;width:64px;height:64px;margin:0 auto}.uploaded-image{width:100%;height:auto;display:block;max-width:220px;margin:0 auto}.uploaded-file-name{margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.uploaded-file-info{display:grid;grid-template-columns:auto auto 1fr;grid-gap:5px;font-size:12px;align-content:normal;justify-content:center;vertical-align:middle;display:-ms-grid;-ms-grid-columns:auto auto 1fr}.uploaded-file-info .uploaded-file-name{-ms-grid-row:1;-ms-grid-column:1}.uploaded-file-info .uploaded-file-size{-ms-grid-row:1;-ms-grid-column:2}.uploaded-file-info .download-file{-ms-grid-row:1;-ms-grid-column:3}.download-file{text-transform:capitalize}.uploaded-file-size{margin-top:4px;font-size:11px}.file-upload-not-img-vid-audio .uploaded-file-name{margin-top:0}.file-upload-not-img-vid-audio .file-size{text-transform:lowercase;margin-top:3px}.file-upload-not-img-vid-audio .separator{margin-top:3px}.download-file{color:inherit;text-decoration:underline;display:block;margin-top:3px}.imageMessageBody{padding-right:13px !important}.rtl-direction .image-canvas-close{left:6px !important;right:auto !important}.no-border #tawkchat-minified-container{border:none !important;top:0 !important;left:0 !important;right:0 !important}.top #tawkchat-chat-bubble-text-container{margin-top:10px !important}.top #tawkchat-chat-bubble-close{bottom:0 !important;right:0 !important;position:absolute !important}.default.top #tawkchat-chat-bubble-close{bottom:3px !important;right:6px !important;top:auto !important}.profileImageContainer .agentProfileImage{width:28px;height:28px;background-repeat:no-repeat;border-radius:14px;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:28px 28px;position:absolute;left:-38px;display:block;background-color:#fff;background-position:0 0}.center-right #tawkchat-chat-bubble-close{float:left}.center.right .profileImageContainer .agentProfileImage,.top.right .profileImageContainer .agentProfileImage,.bottom.right .profileImageContainer .agentProfileImage{left:-38px;right:auto}.rtl-direction.center.right .profileImageContainer .agentProfileImage,.rtl-direction.top.right .profileImageContainer .agentProfileImage,.rtl-direction.bottom.right .profileImageContainer .agentProfileImage{left:auto;right:-38px}.center.left .profileImageContainer .agentProfileImage,.top.left .profileImageContainer .agentProfileImage,.bottom.left .profileImageContainer .agentProfileImage{left:-38px;right:auto}.rtl-direction.center.left .profileImageContainer .agentProfileImage,.rtl-direction.top.left .profileImageContainer .agentProfileImage,.rtl-direction.bottom.left .profileImageContainer .agentProfileImage{left:auto;right:-38px}#incoming-call .profileImageContainer{position:relative}.profileImageContainer .incomingCallAgentProfileImage{width:28px;height:28px;background-repeat:no-repeat;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:28px 28px;position:absolute;left:0;display:block;border-radius:50%;background-position:0 0}#incoming-call-container .header-label{display:inline-block;line-height:28px;vertical-align:top;font-weight:600;font-size:15px;margin-left:33px;color:#3e3e3e}#tawkchat-message-preview-container{height:100%;box-sizing:border-box}.bottom#tawkchat-message-preview-container{position:absolute;bottom:0;top:auto;width:100%;height:auto}.top#tawkchat-message-preview-container{top:0;bottom:auto;width:100%;height:auto;position:absolute}.center#tawkchat-message-preview-container{top:0;bottom:auto;position:absolute;width:100%;height:auto}#tawkchat-message-preview-messages-container{max-height:calc(100vh - 110px);margin-bottom:10px;overflow:auto}#tawkchat-message-preview-messages-container::-webkit-scrollbar{display:none}#tawkchat-message-preview-messages-container .message-preview-item{position:relative;opacity:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;margin-bottom:10px}#tawkchat-message-preview-messages-container .message-preview-item.animate-fade-object{opacity:1}#tawkchat-message-preview-messages-container .messageBody{position:relative;height:auto;padding:15px 25px 15px 13px;box-sizing:border-box;border-width:1px;border-style:solid;border-radius:5px;border-color:#e9e9e9}#tawkchat-message-preview-messages-container .message-preview-item:last-child{margin-bottom:0}#tawkchat-message-preview-messages-container .messageBody:after,#tawkchat-message-preview-messages-container .messageBody:before{right:100%;top:15px;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}#tawkchat-message-preview-messages-container .messageBody:after{border-color:rgba(255,255,255,0);border-right-color:#fff;border-width:6px;margin-top:-6px}#tawkchat-message-preview-messages-container .messageBody:before{border-color:rgba(170,170,170,0);border-right-color:#ddd;border-width:7px;margin-top:-7px}.rtl-direction #tawkchat-message-preview-messages-container .messageBody:after,.rtl-direction #tawkchat-message-preview-messages-container .messageBody:before{left:100%;right:unset}.rtl-direction #tawkchat-message-preview-messages-container .messageBody:after{border-right-color:transparent;border-left-color:#fff}.rtl-direction #tawkchat-message-preview-messages-container .messageBody:before{border-right-color:transparent;border-left-color:#ddd}#tawkchat-message-preview-messages-container .message{color:#464646;font-weight:400;font-size:14px;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}#tawkchat-message-preview-messages-container .messageTimeContainer,#tawkchat-message-preview-messages-container .messageNameContainer{display:inline-block;font-size:13px;color:#bdbdbd}#tawkchat-message-preview-messages-container .messageInformation{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding-top:5px}#tawkchat-message-preview-messages-container .messageNameContainer{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}#tawkchat-message-preview-messages-container .message-preview-close-button{top:8px;right:8px;z-index:5;position:absolute;color:#bdbdbd;font-size:14px;cursor:pointer;display:none}#tawkchat-message-preview-messages-container .hidden-profile .profileImageContainer,#tawkchat-message-preview-messages-container .hidden-profile .messageBody::after,#tawkchat-message-preview-messages-container .hidden-profile .messageBody::before{display:none}#tawkchat-message-preview-quick-reply-container{position:relative;float:right;width:340px;height:auto;overflow:hidden !important}.center.right #tawkchat-message-preview-messages-container,.center.right #tawkchat-message-preview-quick-reply-container,.bottom.right #tawkchat-message-preview-messages-container,.top.right #tawkchat-message-preview-messages-container,.top.right #tawkchat-message-preview-quick-reply-container,.bottom.right #tawkchat-message-preview-quick-reply-container{padding-left:38px}.rtl-direction.center.right #tawkchat-message-preview-messages-container,.rtl-direction.center.right #tawkchat-message-preview-quick-reply-container,.rtl-direction.bottom.right #tawkchat-message-preview-messages-container,.rtl-direction.top.right #tawkchat-message-preview-messages-container,.rtl-direction.top.right #tawkchat-message-preview-quick-reply-container,.rtl-direction.bottom.right #tawkchat-message-preview-quick-reply-container{padding-left:0;padding-right:38px}.center.left #tawkchat-message-preview-messages-container,.center.left #tawkchat-message-preview-quick-reply-container,.bottom.left #tawkchat-message-preview-messages-container,.top.left #tawkchat-message-preview-messages-container,.top.left #tawkchat-message-preview-quick-reply-container,.bottom.left #tawkchat-message-preview-quick-reply-container{padding-left:38px;padding-right:0}.rtl-direction.center.left #tawkchat-message-preview-messages-container,.rtl-direction.center.left #tawkchat-message-preview-quick-reply-container,.rtl-direction.bottom.left #tawkchat-message-preview-messages-container,.rtl-direction.top.left #tawkchat-message-preview-messages-container,.rtl-direction.top.left #tawkchat-message-preview-quick-reply-container,.rtl-direction.bottom.left #tawkchat-message-preview-quick-reply-container{padding-left:0;padding-right:38px}#actionsContainer{z-index:99998;background-color:#fff;width:100%;height:50px;border-radius:5px}.drag-over#actionsContainer{height:155px !important;padding:8px 8px 35px 8px;box-sizing:border-box}#file-upload-drop-container{display:none;background-color:#f1f1f1;height:100%;width:100%;border:#e4e4e4 solid 1px;border-radius:5px;box-sizing:border-box;position:relative}#file-upload-drop-icon-label-container{transform:translate(-50%,-50%);position:absolute;top:50%;left:50%}#file-upload-drop-label{font-size:15px;display:block;font-weight:600;text-align:center;color:#464646;margin-top:5px}#file-upload-drop-icon{font-size:30px;display:block;font-weight:600;text-align:center}#textareaWrapper{display:block;background-color:transparent;position:relative;height:100%;box-shadow:inset 1px 1px 0 #e9e9e9,inset -1px 0 0 #e9e9e9,inset 0 -1px 0 #e9e9e9;border-radius:5px;max-height:180px}.drag-over #textareaWrapper{display:none}.drag-over #file-upload-drop-container{display:block}#textareaContainer{height:100%;padding:15px 14px 15px 14px;box-sizing:border-box;position:relative}#textareaContainer.with-emoji{padding-right:44px;padding-left:14px}.rtl-direction #textareaContainer.with-emoji{padding-right:14px;padding-left:44px}#chatTextarea{padding:0;margin:0;height:100%;width:100%;overflow:hidden;resize:none;border:0;vertical-align:top;font-size:14px !important;background-color:transparent;color:#000;font-family:inherit}#chatTextarea:active,#chatTextarea:focus{outline:0}#chatTextarea::placeholder{color:#bdbdbd !important}#actionButtonsContainer{position:absolute;right:14px;top:15px}.rtl-direction #actionButtonsContainer{right:auto;left:0}.rtl-direction #rateMainWrapper,.rtl-direction #uploadFileOption,.rtl-direction #viewEmoji{float:right}#rateContainer{padding:6px 8px;border-radius:5px;box-shadow:0 3px 15px #cbcbcb;display:none;position:absolute;width:51px;background:#fff;left:-100%;top:-6px}.rtl-direction #rateContainer{right:-40px}#rateMainWrapper{float:left;position:relative}#rateNegative{margin-left:0 !important;color:#f99 !important}#ratePositive{color:#b4deab !important}#rateNegative:hover,#ratePositive:hover{transform:scale(1.2,1.2)}#actionButtonsContainer a{font-size:19px;color:#bdbdbd;text-decoration:none;float:left;margin-left:13px}#actionButtonsContainer a:hover{color:#464646}#uploadFileOption label{display:block;cursor:pointer}#upload-form{position:absolute;top:-100000px}#emoji-selection-container{height:200px;background:#fff;display:none;z-index:10001;width:340px;background-color:#f3f3f3;position:relative}#tawktoLink{color:#000;font-size:11px;font-weight:400;text-decoration:none}#tawktoLink b{font-weight:700}#tawktoLink .thin{font-size:11px;font-weight:100}#bottomContainer{text-align:center;width:calc(100% - 38px);position:absolute;bottom:0;height:20px;background:transparent;z-index:100001;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#incoming-call{background-color:#fff;border-radius:5px;padding:13px 13px 12px 13px;box-sizing:border-box;margin-bottom:10px;box-shadow:inset 0 0 1px #aaa}#incoming-call-buttons{margin-top:16px}#incoming-call-buttons button{width:calc(50% - 5px);border-radius:5px;border:0;display:inline-block;color:#fff;height:42px;cursor:pointer}#incoming-call-buttons button .btn-icon{font-size:17px;color:white;display:inline-block;line-height:41px;vertical-align:top}#incoming-call-buttons button .btn-label{display:inline-block;margin-left:10px;line-height:41px;font-weight:600}#decline-call .btn-icon{transform:rotate(135deg)}#decline-call{background-color:#e52f48;float:right}#accept-call{background-color:#48c82e;float:left}.mp-callIconContainer{display:inline-block;height:30px;width:30px;border-radius:5px;color:white;position:relative}#mp-callIcon{display:inline-block;position:relative}.mp-callInfoWrapper{height:30px}#mp-callInfo{vertical-align:top;line-height:32px;margin-left:10px;font-weight:600;font-size:15px;color:#3e3e3e}#mp-callIconWrapper{display:inline-block;font-size:17px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.mp-callInfoElapsedTime{position:absolute;bottom:8px;right:13px;font-size:13px;color:#bdbdbd}.mp-callInfoContainer.messageBody{height:80px !important}#tawkchat-message-preview-close{color:#bdbdbd;font-size:19px;margin:2.5px;cursor:pointer}.icon-close{font-weight:900}.left #tawkchat-message-preview-close{text-align:right}.right #tawkchat-message-preview-close{text-align:right}.top.left #tawkchat-message-preview-close{right:38px;left:auto}.top.right #tawkchat-message-preview-close{left:38px;right:auto}.rtl-direction.right #tawkchat-message-preview-close{text-align:left}.rtl-direction.left #tawkchat-message-preview-close{text-align:left}#tooLongMsgNotification{height:42px;position:absolute;width:calc(100% - 30px);left:15px;margin-top:10px;border-radius:5px;line-height:42px;text-align:center}#notifMessageText{margin-left:5px}.appear{animation:icon-appear .25s ease;display:block !important}.hide{display:none !important}#min-agent-profile-details{position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:block;left:40px;max-width:calc(100% - 37px)}.rtl-direction #min-agent-profile-details{left:auto;right:40px}#min-agent-profile-details .name{font-size:90%;font-weight:bold;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}#min-agent-profile-details .position{font-size:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.rtl-direction #mp-callInfo{padding-right:7px}.rtl-direction #tawkchat-message-preview-messages-container .messageNameContainer{left:initial;right:13px}.rtl-direction #tawkchat-message-preview-messages-container .messageTimeContainer,.rtl-direction .mp-callInfoElapsedTime{right:initial;left:13px}.rtl-direction #accept-call{float:right}.rtl-direction #decline-call{float:left}.rtl-direction .profileImageContainer .incomingCallAgentProfileImage{right:0}.rtl-direction #incoming-call-container .header-label{margin-right:33px;margin-left:0}@keyframes icon-appear{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}#hidableActionsWrapper{float:left}";
      b.MinifiedMobileStyle = "body{position:relative;margin:0;font-size:16px;z-index:1000001;font-family:Helvetica,Arial,sans-serif}body.font-lato{font-family:'Lato','Open Sans',sans-serif !important}*{font-family:inherit}#tawkchat-minified-box{border:0 none;padding:0;margin:0;position:relative;width:100%;height:100%;z-index:999995;text-align:left;font-size:16px}.rectangle #tawkchat-minified-wrapper{width:107px;height:42px;bottom:0}.round #tawkchat-minified-wrapper{bottom:6px;width:60px;height:60px;border-radius:50%;box-shadow:rgba(0,0,0,0.16) 0 2px 10px 0 !important}#tawkchat-minified-wrapper{border:0 none;margin:0;z-index:999997;position:absolute;cursor:pointer}.bottom.rectangle #tawkchat-minified-wrapper{bottom:15px}.round #tawkchat-status-text-container{padding:0;position:absolute;z-index:999998;width:100%;height:100%;border-radius:50%;border:0 none}.rectangle #tawkchat-status-text-container{padding:0;position:absolute;z-index:999998;width:100%;height:100%;border-radius:3px;border:0 none;text-align:center}#incoming-call{background-color:#fff;border-radius:5px;padding:13px 13px 12px 13px;box-sizing:border-box;margin-bottom:10px;box-shadow:inset 0 0 1px #aaa}#incoming-call-buttons{margin-top:16px}#incoming-call-buttons button{width:calc(50% - 5px);border-radius:5px;border:0;display:inline-block;color:#fff;height:42px;cursor:pointer}#incoming-call-buttons button .btn-icon{font-size:17px;color:white;display:inline-block;line-height:41px;vertical-align:top}#incoming-call-buttons button .btn-label{display:inline-block;margin-left:10px;line-height:41px;font-weight:600}#decline-call .btn-icon{transform:rotate(135deg)}#decline-call{background-color:#e52f48;float:right}#accept-call{background-color:#48c82e;float:left}#incoming-call .profileImageContainer{position:relative}.profileImageContainer .incomingCallAgentProfileImage{width:28px;height:28px;background-repeat:no-repeat;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:cover;position:absolute;left:0;display:block}#incoming-call-container .header-label{display:inline-block;line-height:28px;vertical-align:top;font-weight:600;font-size:15px;margin-left:33px}#tawkchat-status-message{border:0 none;padding:0;text-decoration:none;height:30px;text-align:center;position:absolute;left:21px;right:21px;width:auto}.rtl-direction{direction:rtl}.rtl-direction #mp-callInfo{padding-right:7px}.rtl-direction #tawkchat-message-preview-messages-container .messageNameContainer{left:initial;right:13px}.rtl-direction #tawkchat-message-preview-messages-container .messageTimeContainer,.rtl-direction .mp-callInfoElapsedTime{right:initial;left:13px}.rtl-direction #accept-call{float:right}.rtl-direction #decline-call{float:left}.rtl-direction .profileImageContainer .incomingCallAgentProfileImage{right:0}.rtl-direction #incoming-call-container .header-label{margin-right:33px;margin-left:0}#tawkchat-chat-indicator{border:0 none;margin:0;padding:0;line-height:1em;position:absolute;z-index:1000000;display:none;left:0;width:21px;height:21px;background-color:#e52f48;border-radius:50%}.bottom #tawkchat-chat-indicator,.center #tawkchat-chat-indicator{top:auto}.center.rectangle #tawkchat-chat-indicator{bottom:27px;left:95px}.center.right.rectangle #tawkchat-chat-indicator{left:95px}.bottom.rectangle #tawkchat-chat-indicator{bottom:42px}.round #tawkchat-chat-indicator{bottom:45px}.top #tawkchat-chat-indicator{top:auto}.top.rectangle #tawkchat-chat-indicator{bottom:27px}.left #tawkchat-chat-indicator{left:42px;right:auto}.left.rectangle #tawkchat-chat-indicator{left:93px}.left.rectangle .rtl-direction #tawkchat-chat-indicator{left:inherit;right:93px}.right #tawkchat-chat-indicator{left:95px;right:auto}.right .rtl-direction #tawkchat-chat-indicator{left:auto;right:93px}.round.right #tawkchat-chat-indicator{left:50px}.round.left #tawkchat-chat-indicator{left:42px}.round.left .rtl-direction #tawkchat-chat-indicator,.round.left .rtl-direction #tawkchat-chat-indicator{left:auto}#tawkchat-chat-indicator-text{border:0 none;padding:0;margin:0;overflow:hidden;vertical-align:baseline;font-weight:bold;font-size:13px;font-family:Arial;text-align:center;color:white;height:100%;width:100%;z-index:1000001;display:block;line-height:21px}#status-message{color:inherit;text-decoration:none;font-weight:bold;font-size:16px;vertical-align:middle;display:block;line-height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0 5px}#bottomContainer{text-align:center;width:calc(100% - 38px);position:absolute;bottom:0;height:20px;background:transparent;z-index:100001;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rectangle #tawkchat-status-icon{margin:8px;font-size:24px;line-height:1em;text-align:left}.rectangle .rtl-direction #tawkchat-status-icon{text-align:right}#tawkchat-status-icon{speak:none;font-style:normal;font-weight:bold;font-variant:normal;text-transform:none;line-height:60px;color:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:32px;text-align:center}#tawkchat-status-icon .text{display:inline-block;line-height:20px;overflow:hidden;padding:2px 0 2px 7px;text-overflow:ellipsis;vertical-align:text-bottom;white-space:nowrap;word-wrap:break-word;word-break:break-all}#tawkchat-status-icon:before{font-weight:normal;font-family:'tawk-widget'}.rectangle #tawkchat-status-icon:before{position:absolute}.rectangle #tawkchat-status-icon.offline:before{top:11px}.rectangle #tawkchat-status-icon .text{padding-left:30px;padding-top:0}.rectangle .rtl-direction #tawkchat-status-icon .text{padding-left:inherit;padding-right:30px}#tawkchat-status-icon.offline:before{content:\"\\e914\"}#tawkchat-status-icon.online:before,#tawkchat-status-icon.away:before{content:\"\\e901\"}#tawkchat-status-agent-container{position:absolute;top:0;right:0;left:0;bottom:0;z-index:999999;display:none}#agent-profile-image{background-repeat:no-repeat;background-size:cover;background-position:center;border-radius:50%;width:60px;height:60px}#agent-profile-image.round{width:100%;height:100%;margin-top:0;margin-left:0}.rectangle #agent-profile-image{width:32px;height:32px;margin:5px}.profileImageContainer .agentProfileImage{width:28px;height:28px;background-repeat:no-repeat;border-radius:14px;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:cover;position:absolute;left:-38px;display:block}.center-right #tawkchat-chat-bubble-close{float:left}.center.right .profileImageContainer .agentProfileImage,.top.right .profileImageContainer .agentProfileImage,.bottom.right .profileImageContainer .agentProfileImage{left:-38px;right:auto}.rtl-direction.center.right .profileImageContainer .agentProfileImage,.rtl-direction.top.right .profileImageContainer .agentProfileImage,.rtl-direction.bottom.right .profileImageContainer .agentProfileImage{left:auto;right:-38px}.center.left .profileImageContainer .agentProfileImage,.top.left .profileImageContainer .agentProfileImage,.bottom.left .profileImageContainer .agentProfileImage{left:-38px;right:auto}.rtl-direction.center.left .profileImageContainer .agentProfileImage,.rtl-direction.top.left .profileImageContainer .agentProfileImage,.rtl-direction.bottom.left .profileImageContainer .agentProfileImage{left:auto;right:-38px}#tawkchat-message-preview-container{height:100%;box-sizing:border-box}.bottom#tawkchat-message-preview-container{position:absolute;bottom:0;top:auto;width:100%;height:auto}.top#tawkchat-message-preview-container{top:0;bottom:auto}#tawkchat-message-preview-messages-container{overflow-y:scroll;max-height:calc(100vh - 110px);margin-bottom:10px}#tawkchat-message-preview-messages-container::-webkit-scrollbar{display:none}#tawkchat-message-preview-messages-container .message-preview-close-button{top:8px;right:8px;z-index:5;position:absolute;color:#bdbdbd;font-size:14px;cursor:pointer;display:none}#tawkchat-message-preview-messages-container .hidden-profile .profileImageContainer{display:none}.center.right #tawkchat-message-preview-messages-container,.bottom.right #tawkchat-message-preview-messages-container,.top.right #tawkchat-message-preview-messages-container{padding-left:38px}.center.left #tawkchat-message-preview-messages-container,.bottom.left #tawkchat-message-preview-messages-container,.top.left #tawkchat-message-preview-messages-container{padding-left:38px;padding-right:0}#tawkchat-message-preview-close{color:#bdbdbd;font-size:19px;margin:2.5px;cursor:pointer}.left #tawkchat-message-preview-close{text-align:right}.right #tawkchat-message-preview-close{text-align:right}.top.left #tawkchat-message-preview-close{right:38px;left:auto}.top.right #tawkchat-message-preview-close{left:38px;right:auto}.rtl-direction.right #tawkchat-message-preview-close{text-align:left}.rtl-direction.left #tawkchat-message-preview-close{text-align:left}";
      b.CommonStyle = '@font-face{font-family:\'tawk-widget\';src:local(\'tawk-widget\'),url(\'https://static-v.tawk.to/a-v3/fonts/tawk-widget.woff2?yh9epr\') format(\'woff2\'),url(\'https://static-v.tawk.to/a-v3/fonts/tawk-widget.woff?yh9epr\') format(\'woff\'),url(\'https://static-v.tawk.to/a-v3/fonts/tawk-widget.ttf?yh9epr\') format(\'truetype\'),url(\'https://static-v.tawk.to/a-v3/fonts/tawk-widget.eot?yh9epr#iefix\') format(\'embedded-opentype\'),url(\'https://static-v.tawk.to/a-v3/fonts/tawk-widget.svg?yh9epr#tawk-widget\') format(\'svg\');font-weight:normal;font-style:normal}[class^="icon-"],[class*=" icon-"]{font-family:\'tawk-widget\' !important;speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-menu:before{content:"\\e902"}.icon-mobile-submit:before{content:"\\e900";color:#aaa}.icon-desktop-sharing:before{content:"\\e903"}.icon-close:before{content:"\\e909"}.icon-phone-incoming:before{content:"\\e911"}.icon-chat:before{content:"\\e901"}.icon-upload:before{content:"\\e904"}.icon-voice-chat:before{content:"\\e905"}.icon-vote-down:before{content:"\\e906"}.icon-vote-up:before{content:"\\e907"}.icon-video-chat:before{content:"\\e908"}.icon-mail:before{content:"\\e914"}.icon-alert:before{content:"\\e915"}.icon-arrow-up:before{content:"\\e916"}.icon-user:before{content:"\\e917"}.icon-happy:before{content:"\\e91a"}.icon-error:before{content:\'\\e810\'}.icon-message:before{content:\'\\e811\'}.lds-spinner{display:inline-block;position:relative;width:64px;height:64px}.lds-spinner .spin{transform-origin:32px 32px;animation:lds-spinner 1.2s linear infinite}.lds-spinner .spin:after{content:" ";display:block;position:absolute;top:3px;left:29px;width:5px;height:14px;border-radius:20%;background:rgba(0,0,0,0.4)}.lds-spinner .spin-1{transform:rotate(0deg);animation-delay:-1.1s}.lds-spinner .spin-2{transform:rotate(30deg);animation-delay:-1s}.lds-spinner .spin-3{transform:rotate(60deg);animation-delay:-0.9s}.lds-spinner .spin-4{transform:rotate(90deg);animation-delay:-0.8s}.lds-spinner .spin-5{transform:rotate(120deg);animation-delay:-0.7s}.lds-spinner .spin-6{transform:rotate(150deg);animation-delay:-0.6s}.lds-spinner .spin-7{transform:rotate(180deg);animation-delay:-0.5s}.lds-spinner .spin-8{transform:rotate(210deg);animation-delay:-0.4s}.lds-spinner .spin-9{transform:rotate(240deg);animation-delay:-0.3s}.lds-spinner .spin-10{transform:rotate(270deg);animation-delay:-0.2s}.lds-spinner .spin-11{transform:rotate(300deg);animation-delay:-0.1s}.lds-spinner .spin-12{transform:rotate(330deg);animation-delay:0s}@keyframes lds-spinner{0%{opacity:1}100%{opacity:0}}.emoji-select{display:inline-block;margin:8px}.emoji-select:hover .emojione{transform:scale(2);-ms-transform:scale(2);-webkit-transform:scale(2);-moz-transform:scale(2);-o-transform:scale(2)}.emoji-header{display:block;cursor:pointer}.open-tab{opacity:1;float:left;position:relative;display:block;cursor:pointer;width:11%;text-align:center;height:100%;padding:8px 0;box-sizing:border-box;line-height:24px}.open-tab.active::after{content:"";position:absolute;height:5px;width:calc(100% - 5px);transform:translateX(-50%);left:50%;bottom:0;background-color:#4f4f4f}#people.open-tab.active .emoji-header{border-left:0}.open-tab.active .emoji-header:hover{background:#fff}#tabs-selection{height:40px;background-color:white;list-style:none;box-shadow:inset 0 2px 0 0 rgba(128,128,128,0.14)}#emoji-selection-container .loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}#emoji-selection-container .emojione{min-width:auto;min-height:auto;height:3.2ex}.emojione{min-width:auto;min-height:auto;height:3.2ex;vertical-align:middle}.emojionly .emojione{height:4.5ex !important;width:auto}#viewEmoji.active{color:#464646}#emoji-selection-container .inputContainer{padding:0 6px}#emoji-selection-container .textInput{padding:6px 0}#tab-content{position:absolute;top:40px;bottom:0;overflow:auto;left:0;right:0;padding:10px 5px;border:1px solid #e3e3e3}.showWithFade{display:block !important;animation:slideFadeIn .25s ease;-webkit-animation:slideFadeIn .25s ease}';
      var t = {
          "chat-notification-container": '<div id="__MESSAGE_ID__" class="messageBody notification clearfix"><div class="notificationContainer"><div class="message">__MESSAGE__</div></div><div class="notificationTime">__TIME__</div><div class="clear"></div></div>',
          "chat-resend-link": '<a id="resendMessage-__MESSAGE_ID__" href="javascript:void(0);" class="messageStatus" title="Resend">__NOT_DELIVERED__</a><span class="icon-alert"></span> <span class="failed-label">__FAILED__</span>',
          "tawk-survey-wrapper": '<div class="surveyContainer"><div class="surveyQuestion">__QUESTION__</div><div class="survey-options-wrapper">__OPTIONS__</div></div>',
          departmentOfflineNotification: '<div class="messageBody notification"><div class="messageWrapper"><div class="message">__MESSAGE__</div></div><div class="clear"></div></div>',
          "survey-option": '<input type="radio" id="__RADIO_ID__" name="__RADIO_NAME__" value="__RADIO_VALUE__" /><label for="__RADIO_ID__">__RADIO_VALUE__</label><br />',
          "file-upload": '<div>__FILE_DISPLAY__<div class="uploaded-file-info"><p class="uploaded-file-name"><b>__FILE_NAME__</b></p><div class="uploaded-file-size">&#x25CF; __FILE_SIZE__</div><a class="download-file" href="__DOWNLOAD_URL__" title="__DOWNLOAD_TEXT__" target="_blank">__DOWNLOAD_LABEL__</a></div></div>',
          "file-upload-not-img-vid-audio": '<div class="file-upload-not-img-vid-audio"><p class="uploaded-file-name"><b>__FILE_NAME__</b></p><div class="uploaded-file-info"><span class="file-size">__FILE_SIZE__</span><span class="separator">&#x25CF; __FILE_TYPE__</span><a class="download-file" href="__DOWNLOAD_URL__" title="__DOWNLOAD_TEXT__" target="_blank">__DOWNLOAD_LABEL__</a></div></div>',
          "chat-divider": '    <hr id="newMessageDividerLine">    <span id="newMessageDividerLabel">__NEW_MESSAGES__</span>',
          "default-branding": 'Always happy to help',
          fileUploadProgress: '    <div id="upload-__HANDLE__" class="upload-data">    <div id="circle-progress-bar-border">        <div id="circle-progress-bar-container">        <div id="circle-progress-bar">        <div class="inner-content"><span class="icon-arrow-up icon"></span>        </div><div class="circle-progress-clip"></div><div class="circle-progress-left"></div><div class="circle-progress-right"></div></div>        </div>        </div><div id="upload-info-container"><div id="upload-info"><div class="wrapper"><span class="file-name">__FILE_NAME__</span><span class="file-status">__FILE_STATUS__</span></div></div></div><span class="upload-icon"></span>    </div>    <div class="clearfix"></div>',
          incomingCallRequest: '<div id="incoming-call-container"><div class="profileImageContainer"><div class="incomingCallAgentProfileImage"></div><div style="background-image : __IMAGE_URL__;" class="incomingCallAgentProfileImage"></div></div><div class="header-label">__INCOMING_CALL__</div><div id="incoming-call-buttons"><button id="decline-call"><span class="btn-icon icon-voice-chat"></span><span class="btn-label">__DECLINE_CALL__</span></button><button id="accept-call"><span class="btn-icon icon-voice-chat"></span><span class="btn-label">__ACCEPT_CALL__</span></button></div><div class="clear"></div></div>',
          callInfo: '<div class="callLoader">__LOADER__</div><div class="callInfoContainer"><div class="callInfoWrapper"><div class="callIconContainer"><div class="callIconWrapper"></div></div><div class="callDetailsContainer"><p class="callTitle"></p></div></div><p class="callEndDetails"></p></div>',
          callError: '<div class="callInfoWrapper"><div class="callDetailsContainer"><p class="callTitle missed">__HEADER__</p><p class="callEndDetails">__MESSAGE__</p></div><div class="callRetryContainer"><button class="retry-load">__ACTION__</button></div></div>',
          loader: '<div class="lds-spinner loader"><div class="spin spin-1"></div><div class="spin spin-2"></div><div class="spin spin-3"></div><div class="spin spin-4"></div><div class="spin spin-5"></div><div class="spin spin-6"></div><div class="spin spin-7"></div><div class="spin spin-8"></div><div class="spin spin-9"></div><div class="spin spin-10"></div><div class="spin spin-11"></div><div class="spin spin-12"></div></div>',
          noWebrtc: '<div class="uploadFailedNotifContainer"><div class="uploadFailedNotifHeader"><div class="uploadFailedNotifIconContainer"><div class="uploadFailedNotifIconWrapper"></div><span class="uploadFailedSizeNotifIcon">!</span></div><span class="uploadFailedNotifLabel">__HEADER__</span></div><div class="uploadFailedNotifMessage">__MESSAGE__</div><div class="uploadFailedRetryContainer"></div></div>',
          "emoji-selection": '<ul id="tabs-selection">__TAB_LIST__<li id="search" class="open-tab"><a href="javascript:void(0);" class="emoji-header"><img class="emojione only-emoji" alt="search" title=":mag:" src="https://cdn.jsdelivr.net/emojione/assets/png/1f50d.png?v=2.2.7" /></a></li><div class="clearfix"></div></ul><div id="tab-content"></div>',
          "emoji-tab-pane": '<div class="tab-pane"><div class="emoji-list">__EMOJIS__</div></div>',
          "emoji-search-pane": '<div class="tab-pane"><div class="inputContainer"><input id="search-emoji" type="text" class="textInput" placeholder="Search Emoji" /></div><div id="search-list"></div></div>',
          "emoji-tab-select": '<li class="open-tab" id="__ID__"><a href="javascript:void(0);" class="emoji-header">__IMAGE__</a></li>',
          "emoji-list": '<a href="javascript:void(0);" class="emoji-select" id="__SHORTNAME__" title="__SHORTNAME__">__IMAGE__</a>',
          changeNameForm: '<div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight"><div id="form-header"><span class="form-header-icon"><span class="icon-user"></span></span><div class="form-header-text"><span>__CHANGE_NAME__</span></div>        </div><div id="changeNameFormMessageContainer" class="formMessageField">__TITLE__</div><fieldset><div class="inputContainer"><input type="text" id="nameField" value="__NAME__" title="__NAME_PLACEHOLDER__" class="textInput" maxlength="40" placeholder="__NAME_PLACEHOLDER__" /></div><div id="nameFieldErrorIcon" class="formErrorIcon"><div class="icon-error field-error"></div></div></fieldset><div id="nameFieldError" class="formErrorContainer"></div></div></div><div class="longFormBottomContainer"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton  theme-background-color theme-text-color">__SAVE_BUTTON__</button><div class="clear"></div></div></div></div></div></div></div><div id="submitWrapper"></div>',
          emailTranscriptForm: '<div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight"><div id="form-header" class="email-transcript-form-header"><span class="form-header-icon"><span class="icon-mail"></span></span><div class="form-header-text"><span>__EMAIL_TRANSCRIPT_TO__:</span></div>        </div>        <div id="changeNameFormMessageContainer" class="formMessageField"></div><fieldset><div class="inputContainer"><input type="email" id="transcriptEmailField" title="__TRANSCRIPTEMAIL_PLACEHOLDER__" value="__TRANSCRIPTEMAIL__" class="textInput" maxlength="150" placeholder="__TRANSCRIPTEMAIL_PLACEHOLDER__" /></div><div id="transcriptEmailFieldErrorIcon" class="formErrorIcon"><span class="icon-error field-error"></span></div></fieldset><div id="transcriptEmailFieldError" class="formErrorContainer"></div></div><div class="longFormBottomContainer"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__SEND_BUTTON__</button></div></div></div></div></div></div></div><div id="submitWrapper"></div>',
          offlineForm: '<div id="overlayOfflineForm"><p>__OFFLINE_MESSAGE_SUCCESSFULY_SENT__</p></br><button id="resendButton" class="approveButton formButton theme-background-color theme-text-color">__SEND_AGAIN__</button></div><div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight">__FIELDS__</div></div><div id="offlineButtonContainer" class="longFormBottomContainer"><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__SUBMIT_BUTTON__</button></div></div></div></div></div></div><div id="submitWrapper"></div>',
          preChatForm: '<div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight">__FIELDS__</div></div><div id="prechatButtonContainer" class="longFormBottomContainer"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__START_CHAT_BUTTON__</button></div></div></div></div></div></div><div id="submitWrapper"></div>',
          departmentSelection: '<fieldset><div class="inputContainer selection "><select id="__ID__Field" title="__LABEL__">__VALUE__</select></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div><div id="__ID__FieldErrorIcon" class="formErrorIcon"></div>',
          inputTextFieldType: '<fieldset><div class="inputContainer"><input type="__INPUT_TYPE__" id="__ID__Field" title="__LABEL__" value="__VALUE__" class="textInput" maxlength="__MAXLENGTH__"placeholder="__REQUIRED__ __LABEL__" /><label class="form-field-label small">__REQUIRED__ __LABEL__</label></div><div id="__ID__FieldErrorIcon" class="formErrorIcon"><div class="icon-error field-error"></div></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
          textAreaFieldType: '<fieldset class="textareaFieldset"><div class="inputContainer"><textarea id="__ID__Field" title="__LABEL__" maxlength="__MAXLENGTH__" placeholder="__REQUIRED__ __LABEL__"></textarea><label class="form-field-label small">__REQUIRED__ __LABEL__</label></div><div id="__ID__FieldErrorIcon" class="formErrorIcon"><div class="icon-error field-error"></div></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
          selectionsType: '<fieldset><label class="form-field-label">__REQUIRED__ __LABEL__</label><div><div class="selections-container" id="__ID__Container">__VALUE__<div id="__ID__FieldErrorIcon" class="formErrorIcon"><div class="icon-error field-error"></div></div></div></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
          checkboxSelectionType: '<div class="selection-container checkbox"><input type="checkbox" name="__FIELD_ID__group" id="__ID__" value="__VALUE__" /><span class="selection-input-css-placeholder"></span><label class="selection-label" for="__ID__">__VALUE__</label></div>',
          radioSelectionType: '<div class="selection-container radio"><input type="radio" name="__FIELD_ID__group" id="__ID__" value="__VALUE__" /><span class="selection-input-css-placeholder"></span><label class="selection-label" for="__ID__">__VALUE__</label></div>',
          "close-form-button": '<button id="formCloseChat" class="declineButton formButton">__CLOSE_BUTTON__</button>',
          inactivityOverlay: "<div>__OVERLAY__</div>",
          maintenanceOverlay: "<div>__OVERLAY__</div>",
          endChatForm: '<div id="formFieldsContainer"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight"><div class="formMessageField innerTittle">__TITLE__</div><div class="longFormBottomContainer"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__END_CHAT_BUTTON__</button></div></div></div></div></div><div id="submitWrapper"></div>',
          restartChatForm: '<div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight"><div id="form-header"><span class="form-header-icon"><span class="icon-chat"></span></span><div class="form-header-text"><span>__TITLE__</span></div></div><div class="formMessageField innerTittle">__END_CHAT_MESSAGE__</div><fieldset><div class="inputContainer"><input type="email" id="transcriptEmailField" title="__TRANSCRIPTEMAIL_PLACEHOLDER__" value="__TRANSCRIPTEMAIL__" class="textInput" maxlength="150" placeholder="__TRANSCRIPTEMAIL_PLACEHOLDER__" /><div id="transcriptEmailFieldErrorIcon" class="formErrorIcon"><div class="icon-error field-error"></div></div></div></fieldset><div id="transcriptEmailFieldError" class="formErrorContainer"></div></div></div><div class="longFormBottomContainer"><button id="newChat" class="declineButton formButton">__START_CHAT__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__EMAIL_TRANCRIPT__</button></div></div></div></div></div></div><div id="submitWrapper"></div>',
          consentForm: '<div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight"><div class="formMessageField innerTittle">__TITLE__</div><div class="longFormBottomContainer"><button id="formDecline" class="declineButton formButton">__CUSTOM_CLOSE_BUTTON__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__CUSTOM_SUBMIT_BUTTON__</button></div></div></div></div></div></div></div></div><div id="submitWrapper"></div>',
          "tawkchat-minified-iframe-element-rectangle": '<div id="tawkchat-minified-wrapper"><div id="tawkchat-minified-container" class="theme-background-color"><div id="tawkchat-status-middle"><div id="tawkchat-status-agent-container" class="theme-text-color"><div id="agent-profile-image" class="agent-profile">&nbsp;</div><div id="min-agent-profile-details" class="theme-text-color"></div></div><div id="tawkchat-status-text-container" class="theme-text-color"><div id="tawkchat-status-message"><span id="short-message"></span></div></div></div></div></div>',
          "tawkchat-minified-iframe-element-round": '<div id="tawkchat-minified-box" class="round"><div id="tawkchat-minified-wrapper"><div id="tawkchat-status-agent-container"><div id="agent-profile-image" class="agent-profile theme-background-color">&nbsp;</div></div><div id="tawkchat-status-text-container" class="theme-background-color theme-text-color"><span id="maximizeChat" class="icon-chat" title="__MAXIMIZE__"></span><span id="minimizeChatMinifiedBtn" class="icon-close" title="__MINIMIZE__"></span></div></div></div>',
          "tawkchat-chat-bubble-canvas": '<div id="tawkchat-chat-bubble-graphics-container"><canvas id="tawkchat-chat-bubble-canvas"></canvas></div><div id="tawkchat-chat-bubble-close" class="image-canvas-close"></div><div id="tawkchat-chat-bubble-text-container"><p id="tawkchat-chat-bubble-text" class="bubble-text-color"></p></div>',
          "tawkchat-chat-indicator": '<div id="tawkchat-chat-indicator"><p id="tawkchat-chat-indicator-text"></p></div>',
          "tawkchat-chat-bubble-gallery": '<span id="tawkchat-chat-bubble-close" class="image-bubble-close"></span><img src="__IMAGE_SRC__" style="__IMAGE_SIZE__" /><a id="bubble-image" class="gallery-bubble" href="javascript:void(0);"></a>',
          "tawkchat-chat-bubble-upload": '<span id="tawkchat-chat-bubble-close" class="image-bubble-close"></span><img id="bubble-image" src="__IMAGE_SRC__" />',
          "tawkchat-message-preview": '<div id="tawkchat-message-preview-container"><div id="tawkchat-message-preview-close"><div class="icon-close"></div></div><div id="tawkchat-message-preview-messages-container"></div><div id="tawkchat-message-preview-quick-reply-container"><div id="emoji-selection-container"></div><div id="actionsContainer"><div id="file-upload-drop-container"><div id="file-upload-drop-icon-label-container"><span id="file-upload-drop-icon" class="icon-upload"></span><span id="file-upload-drop-label"></span></div></div><fieldset id="textareaWrapper"><div id="textareaContainer" class="additionalPadding"><div id="tooLongMsgNotification"><span class="icon-alert"></span><span id="notifMessageText"></span></div></div><div id="actionButtonsContainer"><div id="hidableActionsWrapper"><div id="rateMainWrapper"><a id="rateChat" href="javascript:void(0);"><span class="icon-vote-up"></span></a><div id="rateContainer"><a id="rateNegative" href="javascript:void(0);" title="__RATE_NEGATIVE__"><span class="icon-vote-down"></span></a><a id="ratePositive" href="javascript:void(0);" title="__RATE_POSITIVE__"><span class="icon-vote-up"></span></a></div></div><a id="uploadFileOption" href="javascript:void(0);" title="__UPLOAD_FILE__"><label for="fileInput"><span class="icon-upload"></span></label></a></div><a id="viewEmoji" href="javascript:void(0);" title="__VIEW_EMOJI__"><span class="icon-happy"></span></a></div></fieldset></div><form enctype="multipart/form-data" id="upload-form" method="post"><input type="file" class="hidden file-input" name="file[]" multiple="multiple" id="fileInput" /><label class="upload-file sprite-background" title="Upload File" for="test"></label></form></div></div>',
          "message-preview-item": '<span class="message-preview-close-button icon-close"></span><div class="profileImageContainer"><div class="agentProfileImage"></div><div style="background-image : __IMAGE_URL__;" class="agentProfileImage"></div></div><div class="messageBody"><div class="message">__MESSAGE__</div><div class="messageInformation"><div class="messageNameContainer"><div class="messageName">__NAME__</div></div><div class="messageTimeContainer"><div class="messageTime">__TIME__</div></div></div></div>',
          "messagePreview-callInfo": '<div class="profileImageContainer"><div class="agentProfileImage"></div><div style="background-image : __IMAGE_URL__;" class="agentProfileImage"></div></div><div class="mp-callInfoContainer messageBody"><div class="mp-callInfoWrapper"><div class="mp-callIconContainer"><div id="mp-callIconWrapper"><span id="mp-callIcon" class="btn-icon icon-voice-chat"></span></div></div><span id="mp-callInfo">__CALL_INFO__ __CALLER_NAME__</span></div><div class="mp-callInfoElapsedTime">__ELAPSED_TIME__</div></div>',
          "tawkchat-maximized-wrapper": '<div id="innerWrapper" class="border-corner"><div id="headerBoxWrapper" class="border-corner"><div id="headerBox" class="theme-background-color theme-text-color border-corner"><div id="headerAccountStateContainer"><p id="headerAccountState"><span id="shortMessage"></span></p><div id="agentProfileContainer">&nbsp;</div></div><div id="headerBoxControlsContainer"><a id="screenShare" class="headerBoxLink" href="javascript:void(0);" title="__SCREENSHARE__"><span class="icon-desktop-sharing headerBoxIcon"></span></a><a id="voiceCall" class="headerBoxLink" href="javascript:void(0);" title="__VOICECALL__"><span class="icon-voice-chat headerBoxIcon"></span></a><a id="videoCall" class="headerBoxLink" href="javascript:void(0);" title="__VIDEOCALL__"><span class="icon-video-chat headerBoxIcon"></span></a><div class="headerBoxLink"><a id="chatMenu"  href="javascript:void(0);" title="__CHATMENU__"><span class="icon-menu headerBoxIcon"></span></a><div id="chatMenuControls"><div id="chatMenuControlsOverlay"></div><ul><li id="changeName" style="display: none;">__CHANGE_NAME__</li><li id="emailTranscriptOption" style="display: none;"></li><li id="soundOn"></li><li id="soundOff"></li><li id="popoutChat"></li><li id="endChat"></li></ul></div></div><a id="minimizeChat" class="headerBoxLink" href="javascript:void(0);" title="__END__"><span class="icon-close headerBoxIcon"></span></a></div></div></div><div id="contentContainer"><div id="greetingsMainContainer" class="theme-background-color theme-text-color"><div id="greetingsContent"><p id="greetingsText"></p><p id="greetingsWaitTime"></p></div><div id="agentBar"><div id="agentList"></div></div></div><div id="chatPanel"><div id="chatContainerWrapper"><div id="chatContainer"><div id="chatTableWrapper"><div id="chatRowWrapper"><div id="chatCellWrapper"><div id="chatWrapper" class="single-agent"><div id="agentTypingContainer"></div></div></div></div></div><div id="maxFileNotificationContainer" class="hidden"><div id="maxFileNotifHeader"><div id="maxFileNotifIconContainer"><div id="maxFileNotifIconWrapper"></div><span id="maxFileNotifIcon">!</span></div><span id="maxFileNotifLabel"></span><div class="closeButtonContainer"><span class="icon-close" id="closeNumberNotification"></span></div></div><div id="maxFileNotificationMessage"></div><div id="maxFileNumberList"></div></div><div id="maxSizeNotificationContainer" class="hidden"><div id="maxSizeNotifHeader"><div id="maxSizeNotifIconContainer"><div id="maxSizeNotifIconWrapper"></div><span id="maxSizeNotifIcon">!</span></div><span id="maxSizeNotifLabel"></span><div class="closeButtonContainer"><span class="icon-close" id="closeSizeNotification"></span></div></div><div id="maxSizeNotificationMessage"></div><div id="maxFileSizeList"></div></div></div></div><div id="actionsContainer"><fieldset id="textareaWrapper"><div id="textareaContainer" class="additionalPadding"><div id="tooLongMsgNotification"><span class="icon-alert"></span><span id="notifMessageText">__TOO_LONG_MESSAGE__</span></div></div><div id="actionButtonsContainer"><div id="hidableActionsWrapper"><div id="rateMainWrapper"><a id="rateChat" href="javascript:void(0);"><span class="icon-vote-up"></span></a><div id="rateContainer"><a id="rateNegative" href="javascript:void(0);" title="__RATE_NEGATIVE__"><span class="icon-vote-down"></span></a><a id="ratePositive" href="javascript:void(0);" title="__RATE_POSITIVE__"><span class="icon-vote-up"></span></a></div></div><a id="uploadFileOption" href="javascript:void(0);" title="__UPLOAD_FILE__"><label for="fileInput"><span class="icon-upload"></span></label></a></div><a id="viewEmoji" href="javascript:void(0);" title="__VIEW_EMOJI__"><span class="icon-happy"></span></a></div><div id="textareaSubmitContainer"><div class="icon-mobile-submit" id="textareaSubmitButton"></div></div></fieldset></div><div id="file-upload-drop-container"><div id="fileUploadWrapper"><div id="file-upload-drop-icon-label-container"><span id="file-upload-drop-icon" class="icon-upload"></span><span id="file-upload-drop-label"></span></div></div></div><form enctype="multipart/form-data" id="upload-form" method="post"><input type="file" class="hidden file-input" name="file[]" multiple="multiple" id="fileInput" /><label class="upload-file sprite-background" title="Upload File" for="test"></label></form></div><div id="__BOTTOM_CONTAINER__"><a id="__TAWK_TO_LINK__" tabindex="-1"></a></div><div id="newMessagesBar"><div id="newMessageContainer"><p id="newMessagesNotification"><a id="newMessagesNotificationLink" title="" class="icon-message"></a><span id="notificationMessageText"></span></p><div id="newMessageArrowDown"></div></div></div><div id="formContainer"></div></div><div id="emoji-selection-container"></div><div id="tawkToContent"><div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="contentContainer"><div class="longFormContainer"><div id="formInnerHeight"><div id="tawkImage"></div><p id="tawkHeader">TAWK.TO</p><div id="tawkContent" class="formMessageField innerTittle"></div></div></div><div class="longFormBottomContainer"><button id="cancelTawkRedirect" class="formButton"></button><button id="tawkRedirect" class="theme-background-color theme-text-color formButton"></button><div class="clear"></div></div></div></div></div></div></div></div></div></div>',
          uploadFailedNotification: '<div class="uploadFailedNotifContainer"><div class="uploadFailedNotifHeader"><div class="uploadFailedNotifIconContainer"><div class="uploadFailedNotifIconWrapper"></div><span class="uploadFailedSizeNotifIcon">!</span></div><span class="uploadFailedNotifLabel">__UPLOAD_FAILED_LABEL__</span></div><div class="uploadFailedNotifMessage">__UPLOAD_FAILED_MESSAGE__</div><div class="uploadFailedRetryContainer"></div></div>',
          "mobile-bottom-round": '<div id="tawkchat-minified-box"><div id="tawkchat-chat-indicator"><span id="tawkchat-chat-indicator-text"></span></div><div id="tawkchat-minified-wrapper"><div id="tawkchat-status-agent-container"><div id="agent-profile-image" class="agent-profile theme-background-color">&nbsp;</div></div><div id="tawkchat-status-text-container" class="theme-background-color theme-text-color"><div id="tawkchat-status-icon" class="online"></div></div></div></div>',
          "mobile-bottom-rectangle": '<div id="tawkchat-minified-box"><div id="tawkchat-chat-indicator"><span id="tawkchat-chat-indicator-text"></span></div><div id="tawkchat-minified-wrapper"><div id="tawkchat-status-agent-container"><div id="agent-profile-image" class="agent-profile theme-background-color">&nbsp;</div></div><div id="tawkchat-status-text-container" class="theme-background-color theme-text-color"><div id="tawkchat-status-icon" class="online"><div id="tawk-minified-mobile-text" class="text"></div></div></div></div></div>',
          "chat-message-container": '__OWNER_TPL__<div class="clearfix"></div><div class="messageBody clearfix">__CONTENT__</div>',
          "chat-message-owner-agent": '<div class="ownerNameContainer"><div class="messageOwnerName agent">__NAME__</div></div><div class="profileImageContainer"><div style="background-image : __IMAGE_URL__;" class="agentProfileImage"></div></div>',
          "chat-message-owner-visitor": '<div class="ownerNameContainer"><a class="messageOwnerName visitor" href="#">__NAME__</a></div>',
          "agent-typing": '<div id="agentTyping-__MESSAGE_ID__" class="agentChatContainer clearfix"><div class="ownerNameContainer"><div class="messageOwnerName agent">__NAME__</div></div><div class="profileImageContainer"><div style="background-image : __IMAGE_URL__;" class="agentProfileImage"></div></div><div class="clearfix"></div><div class="messageBody clearfix"><div class="message agentTypingIndicator"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div></div>',
          "agent-profile": "__AGENT_PROFILE_IMAGE____AGENT_PROFILE_DETAIL__",
          "agent-profile-image": '<div class="alias-image theme-background-color" style="__IMAGE_URL__;"></div>',
          "agent-profile-detailed": '<div class="agentDetailedInfo"><strong>__NAME__</strong><p>__POSITION__</p></div>',
          "agent-profile-description": '<div class="agentContainer"><div class="agentInformationContainer"><p class="__POSITION_CLASS__">__NAME__</p><p class="position-label" style="display: none;">__POSITION__</p></div></div>',
          "agent-profile-description-noimage": '<div class="agentContainerNoImage"><div class="agentInformationContainerNoImage"><p class="agentInfoNoImage"><b>__NAME__</b><i>__POSITION__</i></p></div></div>',
          "chat-message-row": '<div class="messageWrapper __PENDING__"><div class="message">__MESSAGE__</div></div>__MESSAGE_STATUS_ROW__<div class="clear"></div>',
          "chat-message-status-row": '<div class="clear"></div><div class="time-agent-display"><div class="agent-div __TIME_CLASS__">__NAME__</div><div class="time-div __TIME_CLASS__">__TIME__</div></div>',
          "chat-message-pending-row": '<div class="messageStatusContainer pending"><div class="lds-spinner loader"><div class="spin spin-1"></div><div class="spin spin-2"></div><div class="spin spin-3"></div><div class="spin spin-4"></div><div class="spin spin-5"></div><div class="spin spin-6"></div><div class="spin spin-7"></div><div class="spin spin-8"></div><div class="spin spin-9"></div><div class="spin spin-10"></div><div class="spin spin-11"></div><div class="spin spin-12"></div></div></div>'
        },
        I = {undefined: 1, "boolean": 1, number: 1, string: 1}, v = {
          exportProperty: function (a, c, b) {
            a[c] = b
          }
        };
      v.dependencyDetection = function () {
        var a = [];
        return {
          begin: function (c) {
            a.push(c && {callback: c, distinctDependencies: []})
          }, end: function () {
            a.pop()
          }, registerDependency: function (c) {
            if (!v.isSubscribable(c)) throw Error("Only subscribable things can act as dependencies");
            if (0 < a.length) {
              var b = a[a.length - 1];
              !b || 0 <= v.utils.arrayIndexOf(b.distinctDependencies, c) || (b.distinctDependencies.push(c), b.callback(c))
            }
          }, ignore: function (c,
                               b, k) {
            try {
              return a.push(null), c.apply(b, k || [])
            } finally {
              a.pop()
            }
          }
        }
      }();
      v.observable = function (a) {
        function c() {
          if (0 < arguments.length) return c.equalityComparer && c.equalityComparer(b, arguments[0]) || (c.valueWillMutate(), b = arguments[0], c.valueHasMutated()), this;
          v.dependencyDetection.registerDependency(c);
          return b
        }

        var b = a;
        v.subscribable.call(c);
        c.peek = function () {
          return b
        };
        c.valueHasMutated = function () {
          c.notifySubscribers(b)
        };
        c.valueWillMutate = function () {
          c.notifySubscribers(b, "beforeChange")
        };
        v.utils.extend(c,
          v.observable.fn);
        v.exportProperty(c, "peek", c.peek);
        v.exportProperty(c, "valueHasMutated", c.valueHasMutated);
        v.exportProperty(c, "valueWillMutate", c.valueWillMutate);
        return c
      };
      v.subscribable = function () {
        this._subscriptions = {};
        v.utils.extend(this, v.subscribable.fn);
        v.exportProperty(this, "subscribe", this.subscribe);
        v.exportProperty(this, "getSubscriptionsCount", this.getSubscriptionsCount)
      };
      v.subscribable.fn = {
        subscribe: function (a, c, b) {
          b = b || "change";
          a = c ? a.bind(c) : a;
          var k = new v.subscription(this, a, function () {
            v.utils &&
            v.utils.arrayRemoveItem && v.utils.arrayRemoveItem(this._subscriptions[b], k)
          }.bind(this));
          this._subscriptions[b] || (this._subscriptions[b] = []);
          this._subscriptions[b].push(k);
          return k
        }, notifySubscribers: function (a, c) {
          c = c || "change";
          if (this.hasSubscriptionsForEvent(c)) {
            var b = this._subscriptions[c], k;
            k = 0;
            for (var s = this._subscriptions[c].length; k < s; ++k) b = this._subscriptions[c].slice(0), (b = b[k]) && !0 !== b.isDisposed && b.callback(a)
          }
        }, hasSubscriptionsForEvent: function (a) {
          return this._subscriptions[a] && this._subscriptions[a].length
        },
        getSubscriptionsCount: function () {
          var a = 0;
          v.utils.objectForEach(this._subscriptions, function (c, b) {
            a += b.length
          });
          return a
        }, unsubscribe: function (a, c) {
          v.utils.arrayRemoveItem(this._subscriptions[c || "change"], a)
        }
      };
      v.isSubscribable = function (a) {
        return null !== a && "function" === typeof a.subscribe && "function" === typeof a.notifySubscribers
      };
      v.subscription = function (a, c, b) {
        this.target = a;
        this.callback = c;
        this.disposeCallback = b;
        v.exportProperty(this, "dispose", this.dispose)
      };
      v.subscription.prototype.dispose = function () {
        this.isDisposed =
          !0;
        this.disposeCallback()
      };
      v.observable.fn = {
        equalityComparer: function (a, c) {
          return null === a || typeof a in I ? a === c : !1
        }
      };
      var R = v.observable.protoProperty = "__tw_proto__";
      v.observable.fn[R] = v.observable;
      v.hasPrototype = function (a, c) {
        return null === a || void 0 === a || void 0 === a[R] ? !1 : a[R] === c ? !0 : v.hasPrototype(a[R], c)
      };
      v.isObservable = function (a) {
        return v.hasPrototype(a, v.observable)
      };
      v.utils = {
        arrayIndexOf: function (a, c) {
          if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, c);
          for (var b =
            0, k = a.length; b < k; b++) if (a[b] === c) return b;
          return -1
        }, extend: function (a, c) {
          if (c) for (var b in c) c.hasOwnProperty(b) && (a[b] = c[b]);
          return a
        }, arrayRemoveItem: function (a, c) {
          var b = v.utils.arrayIndexOf(a, c);
          0 <= b && a.splice(b, 1)
        }, objectForEach: function (a, c) {
          for (var b in a) a.hasOwnProperty(b) && c(b, a[b])
        }
      };
      (function (a) {
        function c(a, c) {
          var b = a.split("@"), d = "";
          1 < b.length && (d = b[0] + "@", a = b[1]);
          a = a.replace(r, ".");
          for (var b = a.split("."), k = b.length, s = []; k--;) s[k] = c(b[k]);
          b = s.join(".");
          return d + b
        }

        function b(a) {
          for (var c =
            [], d = 0, k = a.length, s, f; d < k;) s = a.charCodeAt(d++), 55296 <= s && 56319 >= s && d < k ? (f = a.charCodeAt(d++), 56320 == (f & 64512) ? c.push(((s & 1023) << 10) + (f & 1023) + 65536) : (c.push(s), d--)) : c.push(s);
          return c
        }

        function k(a) {
          var c, k, q, r, y, u, z, A, B, C = [], D, Ca, Ba;
          a = b(a);
          D = a.length;
          c = m;
          k = 0;
          y = l;
          for (u = 0; u < D; ++u) B = a[u], 128 > B && C.push(x(B));
          for ((q = r = C.length) && C.push(p); q < D;) {
            z = s;
            for (u = 0; u < D; ++u) B = a[u], B >= c && B < z && (z = B);
            Ca = q + 1;
            if (z - c > w((s - k) / Ca)) throw new RangeError(t.overflow);
            k += (z - c) * Ca;
            c = z;
            for (u = 0; u < D; ++u) {
              B = a[u];
              if (B < c && ++k > s) throw new RangeError(t.overflow);
              if (B == c) {
                A = k;
                for (z = f; ; z += f) {
                  B = z <= y ? e : z >= y + g ? g : z - y;
                  if (A < B) break;
                  Ba = A - B;
                  A = f - B;
                  C.push(x(B + Ba % A + 22 + 75 * (26 > B + Ba % A) - 0));
                  A = w(Ba / A)
                }
                C.push(x(A + 22 + 75 * (26 > A) - 0));
                y = Ca;
                z = 0;
                k = q == r ? w(k / n) : k >> 1;
                for (k += w(k / y); k > v * g >> 1; z += f) k = w(k / v);
                y = w(z + (v + 1) * k / (k + h));
                k = 0;
                ++q
              }
            }
            ++k;
            ++c
          }
          return C.join("")
        }

        var s = 2147483647, f = 36, e = 1, g = 26, h = 38, n = 700, l = 72, m = 128, p = "-", q = /[^\x20-\x7E]/,
          r = /[\x2E\u3002\uFF0E\uFF61]/g, t = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
          }, v = f - e, w = Math.floor, x = String.fromCharCode;
        a.punycode = {
          version: "1.4.1", ucs2: {decode: b}, encode: k, toASCII: function (a) {
            return c(a, function (a) {
              return q.test(a) ? "xn--" + k(a) : a
            })
          }
        }
      })(b);
      l = {};
      g.$_Tawk = g.$_Tawk || {};
      g.Tawk_API = g.Tawk_API || {};
      if ("object" === typeof g.$_Tawk_API) for (var $ in g.$_Tawk_API) g.$_Tawk_API.hasOwnProperty($) && (g.Tawk_API[$] = g.$_Tawk_API[$]);
      if ("function" !== typeof g.CustomEvent) {
        var S = function (a, c) {
          c = c || {bubbles: !1, cancelable: !1, detail: void 0};
          var b = document.createEvent("CustomEvent");
          b.initCustomEvent(a, c.bubbles, c.cancelable, c.detail);
          return b
        };
        S.prototype = g.Event.prototype;
        b.CustomEventIE = S
      }
      u.begin = function (a) {
        b.main.begin(a)
      };
      u.init = function (a) {
        b.main.init(a)
      };
      var aa = function () {
        l = {
          disableSound: !!Tawk_API.disableSound,
          embedded: Tawk_API.embedded || null,
          visitor: Tawk_API.visitor || null,
          disableMobileBackHistory: !!Tawk_API.disableMobileBackHistory,
          isPopup: !!Tawk_API.isPopup,
          onBeforeLoad: {eventName: "tawkBeforeLoad", func: Tawk_API.onBeforeLoad},
          onLoad: {eventName: "tawkLoad", func: Tawk_API.onLoad},
          onStatusChange: {eventName: "tawkStatusChange", func: Tawk_API.onStatusChange},
          onChatMaximized: {eventName: "tawkChatMaximized", func: Tawk_API.onChatMaximized},
          onChatMinimized: {eventName: "tawkChatMinimized", func: Tawk_API.onChatMinimized},
          onChatHidden: {eventName: "tawkChatHidden", func: Tawk_API.onChatHidden},
          onChatStarted: {eventName: "tawkChatStarted", func: Tawk_API.onChatStarted},
          onChatEnded: {eventName: "tawkChatEnded", func: Tawk_API.onChatEnded},
          onPrechatSubmit: {eventName: "tawkPrechatSubmit", func: Tawk_API.onPrechatSubmit},
          onOfflineSubmit: {eventName: "tawkOfflineSubmit", func: Tawk_API.onOfflineSubmit},
          onChatMessageVisitor: {eventName: "tawkChatMessageVisitor", func: Tawk_API.onChatMessageVisitor},
          onChatMessageAgent: {eventName: "tawkChatMessageAgent", func: Tawk_API.onChatMessageAgent},
          onChatMessageSystem: {eventName: "tawkChatMessageSystem", func: Tawk_API.onChatMessageSystem},
          onAgentJoinChat: {eventName: "tawkAgentJoinChat", func: Tawk_API.onAgentJoinChat},
          onAgentLeaveChat: {eventName: "tawkAgentLeaveChat", func: Tawk_API.onAgentLeaveChat},
          onChatSatisfaction: {eventName: "tawkChatSatisfaction", func: Tawk_API.onChatSatisfaction},
          onVisitorNameChanged: {eventName: "tawkVisitorNameChanged", func: Tawk_API.onVisitorNameChanged},
          onFileUpload: {eventName: "tawkFileUpload", func: Tawk_API.onFileUpload},
          onTagsUpdated: {eventName: "tawkTagsUpdated", func: Tawk_API.onTagsUpdated},
          onUnreadCountChanged: {eventName: "tawkUnreadCountChanged"},
          triggerApiHandlers: function (a, c) {
            var b = l[a];
            if (void 0 !== b) {
              if ("onBeforeLoad" === a) {
                if (Tawk_API.onBeforeLoaded) return;
                Tawk_API.onBeforeLoaded =
                  !0
              } else if ("onLoad" === a) {
                if (Tawk_API.onLoaded) return;
                Tawk_API.onLoaded = !0
              }
              this.dispatch(b.eventName, c);
              if ("function" === typeof b.func) try {
                b.func(c)
              } catch (k) {
              }
            }
          },
          dispatch: function (a, c) {
            var d;
            a && (d = "function" === typeof g.CustomEvent ? new CustomEvent(a, {detail: c}) : new b.CustomEventIE(a, {detail: c}), g.dispatchEvent(d))
          }
        }
      };
      u.maximize = Tawk_API.maximize = function () {
        u.ready && b.sessionHandler.notifyWindowState("max")
      };
      u.minimize = Tawk_API.minimize = function () {
        u.ready && b.sessionHandler.notifyWindowState("min")
      };
      u.toggle =
        Tawk_API.toggle = function () {
          u.ready && b.viewHandler.toggleWidget()
        };
      u.popup = Tawk_API.popup = function () {
        u.ready && b.viewHandler.popoutWidget()
      };
      u.getWindowType = Tawk_API.getWindowType = function () {
        if (u.ready) return f.isEmbedded ? "embed" : f.isPopup ? "popup" : "inline"
      };
      u.showWidget = Tawk_API.showWidget = function () {
        u.ready && b.viewHandler.showWidget()
      };
      u.hideWidget = Tawk_API.hideWidget = function () {
        u.ready && b.viewHandler.hideWidget()
      };
      u.toggleVisibility = Tawk_API.toggleVisibility = function () {
        u.ready && b.viewHandler.toggleVisibility()
      };
      u.getStatus = Tawk_API.getStatus = function () {
        if (u.ready) return r.pageStatus()
      };
      u.isChatMaximized = Tawk_API.isChatMaximized = function () {
        if (u.ready) return "max" === r.chatWindowState()
      };
      u.isChatMinimized = Tawk_API.isChatMinimized = function () {
        if (u.ready) return "min" === r.chatWindowState()
      };
      u.isChatHidden = Tawk_API.isChatHidden = function () {
        if (u.ready) return b.viewHandler.isWidgetHidden()
      };
      u.isChatOngoing = Tawk_API.isChatOngoing = function () {
        if (u.ready) return b.chatHandler.isChatOngoing()
      };
      u.isVisitorEngaged = Tawk_API.isVisitorEngaged =
        function () {
          if (u.ready) return b.chatHandler.isVisitorEngaged()
        };
      u.endChat = Tawk_API.endChat = function () {
        u.ready && b.chatHandler.triggerEndChat()
      };
      u.addEvent = Tawk_API.addEvent = function (a, c, d) {
        b.sessionHandler.addEvent(a, c, d)
      };
      u.setAttributes = Tawk_API.setAttributes = function (a, c) {
        b.sessionHandler.setAttributes(a, !0, c)
      };
      u.addTags = Tawk_API.addTags = function (a, c) {
        b.sessionHandler.addTags(a, c)
      };
      u.removeTags = Tawk_API.removeTags = function (a, c) {
        b.sessionHandler.removeTags(a, c)
      };
      var N = "", O = 0, T = !1, La = !1, G = null, y = null,
        da = {}, ga = !0, f = {
          widgetId: "default",
          isPopup: !1,
          isEmbedded: !1,
          soundOn: v.observable(!0),
          showAgentBar: !0,
          showWaitTime: !0,
          showPreChatForm: !1,
          showOfflineForm: !0,
          hideWidget: !1,
          hideWidgetOnLoad: !1,
          hideWidgetOnOffline: !1,
          greetings: {},
          prechatOptions: {},
          headerBgColor: null,
          headerTxtColor: null,
          isLegacyLayout: !1,
          whiteLabel: v.observable(),
          mobileWidget: v.observable("round"),
          desktopWidget: v.observable("full"),
          chatBubble: v.observable(),
          chatPosition: v.observable("br"),
          maximizedDimensions: v.observable({width: 0, height: 0}),
          minimizedDimensions: v.observable({width: 0, height: 0, position: "br"}),
          showMessagePreview: v.observable(!0),
          showUploads: v.observable(!0),
          showRating: v.observable(!0),
          showAgentTyping: !0,
          showVisitorTyping: v.observable(!0),
          showEmoji: v.observable(!0),
          showUnreadInTab: v.observable(!0),
          onClickAction: "max",
          widgetVersion: 0,
          locale: "en",
          schedule: null,
          scheduleTimezone: null,
          isTopPositioned: function () {
            return "tr" === this.chatPosition() || "tl" === this.chatPosition()
          },
          isBottomPositioned: function () {
            return "br" === this.chatPosition() ||
              "bl" === this.chatPosition()
          },
          isCenterPositioned: function () {
            return "cr" === this.chatPosition() || "cl" === this.chatPosition()
          },
          isRightPositioned: function () {
            return "cr" === this.chatPosition() || "tr" === this.chatPosition() || "br" === this.chatPosition()
          },
          isLeftPositioned: function () {
            return "cl" === this.chatPosition() || "tl" === this.chatPosition() || "bl" === this.chatPosition()
          },
          isDesktopRectangle: function () {
            return "min" !== this.desktopWidget()
          },
          agentTextBgColor: null,
          agentTextColor: null,
          visitorTextBgColor: null,
          visitorTextColor: null,
          agentTextBorderColor: null,
          topCorner: null,
          bottomCorner: null,
          widgetOffsetX: 0,
          widgetOffsetY: 0,
          isHeaderCompact: null,
          maxStyle: v.observable(),
          minStyle: v.observable(),
          mobMaxStyle: v.observable(),
          mobMinStyle: v.observable(),
          isRTL: v.observable(!1),
          webRTCSettings: v.observable(),
          brandingRedirect: v.observable(),
          key: -1987780763
        }, D = {
          uuid: null,
          uuidVer: 0,
          visitorId: "",
          name: v.observable(),
          displayName: v.observable(),
          email: v.observable(),
          transcriptEmail: "",
          uuids: []
        }, L = {pageId: null, tawkId: "", pageName: v.observable(), isStable: !0},
        w = {
          chatSynced: !1,
          chatBuffer: [],
          chatVersion: 0,
          chatDepartment: "any",
          agents: {},
          agentProfiles: {},
          profiles: {},
          rating: v.observable(),
          chatHistory: [],
          chatOrder: 0,
          chatEndVersion: 1,
          chatId: null
        }, r = {
          transferKey: "",
          sessionKey: "",
          transferedSession: !1,
          currentVersion: 681,
          criticalVersion: 0,
          serverVersion: 0,
          agentImgUrl: "https://s3.amazonaws.com/tawk-to-pi",
          visitorAppServer: "https://va.tawk.to",
          visitorSocketServer: "",
          chatWindowState: v.observable("min"),
          pageStatus: v.observable(),
          pageStatusVersion: 0,
          prechatFormSubmitted: v.observable(!1),
          waitTime: 6E4,
          chatBubbleClosed: v.observable(!1),
          restarted: !1,
          departments: []
        }, Ya = {chat_sound: "https://static-v.tawk.to/a-v3/audio/chat_sound.mp3"},
        Za = {chat_sound: "https://static-v.tawk.to/a-v3/audio/chat_sound.ogg"},
        ab = {chat_sound: "https://static-v.tawk.to/a-v3/audio/chat_sound.wav"};
      (function () {
        var a = !1, c = /xyz/.test(function () {
          xyz
        }) ? /\b_super\b/ : /.*/;
        this.TawkClass = function () {
        };
        TawkClass.extend = function (b) {
          function k() {
            !a && this.init && this.init.apply(this, arguments)
          }

          var s = this.prototype;
          a = !0;
          var f =
            new this;
          a = !1;
          for (var e in b) f[e] = "function" === typeof b[e] && "function" === typeof s[e] && c.test(b[e]) ? function (a, c) {
            return function () {
              var b = this._super;
              this._super = s[a];
              var d = c.apply(this, arguments);
              this._super = b;
              return d
            }
          }(e, b[e]) : b[e];
          k.prototype = f;
          k.prototype.constructor = k;
          k.extend = arguments.callee;
          return k
        }
      })();
      var A = function () {
        this.br = "<br/>";
        this.regAlphaNumeric = /^[a-z0-9\-]{1,50}$/i;
        this.regNameMach = /^V[0-9]{16}$/;
        this.regTrim = /^\s+|\s+$/g;
        this.regDate = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
        this.regEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/i;
        this.regSurvey = /\[option\](.*?)(<br\/>|$)/g;
        this.regSurveyQuestion = /^(.*?)\[option\]/g;
        this.regOption = /\[option\]/g;
        this.regBr = /<br\/>/;
        this.regMatchUrl = RegExp('(?:^(?:(?:[a-z]+:)?//)?(?:\\S+(?::\\S*)?@)?(?:localhost|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)',
          "i");
        this.regMatchIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?\/([a-zA-Z0-9!$&'()*+.=-_~:@\/\?#]+)+)\b/gi;
        this.regEmailMatch = /^((mailto:){0,1}[a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]+)$/;
        this.regLineBreaks = /(\r\n|\n|\r)/gm;
        this.decodedAmp = "&";
        this.decodedQuote = '"';
        this.decodedApos = "'";
        this.decodedLess = "<";
        this.decodedGreat = ">";
        this.encodedQuote = "&quot;";
        this.encodedApos =
          "&#39;";
        this.encodedLess = "&lt;";
        this.encodedGreat = "&gt;";
        this.encodedAmp = "&amp;";
        this.rtlLangTab = ["ar", "he", "fa"];
        this.decodedAmpRegex = RegExp(this.decodedAmp, "g");
        this.decodedQuoteRegex = RegExp(this.decodedQuote, "g");
        this.decodedAposRegex = RegExp(this.decodedApos, "g");
        this.decodedLessRegex = RegExp(this.decodedLess, "g");
        this.decodedGreatRegex = RegExp(this.decodedGreat, "g");
        this.encodedQuoteRegex = RegExp(this.encodedQuote, "g");
        this.encodedAposRegex = RegExp(this.encodedApos, "g");
        this.encodedLessRegex = RegExp(this.encodedLess,
          "g");
        this.encodedGreatRegex = RegExp(this.encodedGreat, "g");
        this.encodedAmpRegex = RegExp(this.encodedAmp, "g");
        this.connectionUrl = "https://video.tawk.to"
      };
      A.prototype.createElement = function (a, c, b, k, s) {
        var f;
        a = a.createElement(c);
        b = b || {};
        for (f in b) a[f] = b[f];
        s && "iframe" !== c && (a.innerHTML = s);
        k && (a.style.cssText = k);
        return a
      };
      A.prototype.getDocument = function (a) {
        return a.contentWindow ? a.contentWindow.document : a.contentDocument ? a.contentDocument : a.document ? a.document : null
      };
      A.prototype.parseQueryString = function (a) {
        var c,
          b, k, s = {};
        k = (a ? a.replace(/(.*)\?/, "") : g.location.search.substring(1)).split("&");
        a = 0;
        for (c = k.length; a < c; a += 1) b = k[a].split("="), s[b[0]] = b[1];
        return s
      };
      A.prototype.createQueryString = function (a) {
        var c, b = [];
        for (c in a) a.hasOwnProperty(c) && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
        return b.join("&")
      };
      A.prototype.getReloadedScript = function () {
        var a, c, b = document.getElementsByTagName("script"), k = null;
        a = 0;
        for (c = b.length; a < c; a++) b[a].id && -1 !== b[a].id.indexOf("TawkScript") && (k = b[a]);
        return k
      };
      A.prototype.trim = function (a) {
        return this.isString(a) ? String.prototype.trim ? a.trim().toString() : a.replace(this.regTrim, "") : null
      };
      A.prototype.isString = function (a) {
        return void 0 === a || "string" !== typeof a ? !1 : !0
      };
      A.prototype.isEmail = function (a) {
        return this.regEmail.test(a)
      };
      A.prototype.isArray = Array.isArray || function (a) {
        return "[object Array]" === Object.prototype.toString.call(a)
      };
      A.prototype.parseVisitorName = function (a) {
        return this.isGeneratedName(a) ? b.languageParser.translate("chat", "defaultName") : a
      };
      A.prototype.generateRandomString =
        function (a) {
          var c, b = [];
          a = a || 6;
          for (c = 0; c < a; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random())));
          return b.join("")
        };
      A.prototype.computedStyle = function (a, c) {
        var b;
        if (!a || !c) return null;
        if (a.currentStyle) b = a.currentStyle[c]; else try {
          b = getComputedStyle(a, null).getPropertyValue(c)
        } catch (k) {
          b = "none"
        }
        "width" === c && "auto" === b && (b = a.clientWidth);
        return "" + b
      };
      A.prototype.parseChatTime = function (a) {
        var c = this.getDateFromUTC(a);
        a = c.getHours();
        c = c.getMinutes();
        10 > a && (a = "0" + a);
        10 > c && (c = "0" + c);
        return a + ":" + c
      };
      A.prototype.getDateFromUTC = function (a) {
        if (a instanceof Date) return a;
        a = this.regDate.exec(a);
        return new Date(Date.UTC(a[1], a[2] - 1, a[3], a[4], a[5], a[6], a[7]))
      };
      A.prototype.rawEncode = function (a) {
        return a.replace(this.decodedAmpRegex, this.encodedAmp).replace(this.decodedQuoteRegex, this.encodedQuote).replace(this.decodedAposRegex, this.encodedApos).replace(this.decodedLessRegex, this.encodedLess).replace(this.decodedGreatRegex, this.encodedGreat)
      };
      A.prototype.rawDecode =
        function (a) {
          return a.replace(this.encodedQuoteRegex, this.decodedQuote).replace(this.encodedAposRegex, this.decodedApos).replace(this.encodedLessRegex, this.decodedLess).replace(this.encodedGreatRegex, this.decodedGreat).replace(this.encodedAmpRegex, this.decodedAmp)
        };
      A.prototype.getMilliseconds = function (a) {
        a instanceof Date || (a = this.regDate.exec(a), a = new Date(Date.UTC(a[1], a[2] - 1, a[3], a[4], a[5], a[6], a[7])));
        return a.getTime()
      };
      A.prototype.capitalize = function (a) {
        return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
      };
      A.prototype.getDepartmentStatus = function (a) {
        var c, b, k = r.departments, s = "", f = !0, e = "";
        if ("any" === a) return {status: "", isOnline: !0, name: ""};
        c = 0;
        for (b = k.length; c < b; c++) if (k[c].did === a) {
          f = "online" === k[c].st;
          s = k[c].st;
          e = k[c].n;
          break
        }
        return {status: s, isOnline: f, name: e}
      };
      A.prototype.getElementsByClassName = function (a, c) {
        var b, k, s, f;
        if (a.getElementsByClassName) return a.getElementsByClassName(c);
        s = a.getElementsByTagName("*");
        f = [];
        b = 0;
        for (k = s.length; b < k; b++) -1 !== s[b].className.indexOf(c) && f.push(s[b]);
        return f
      };
      A.prototype.insertScript = function (a, c, b) {
        var k = document.getElementsByTagName("script")[0], s = document.createElement("script");
        s.async = !0;
        s.src = a;
        s.charset = "UTF-8";
        s.setAttribute("crossorigin", "*");
        c && (s.id = c);
        b ? k.parentNode.insertBefore(s, k) : k.parentNode.appendChild(s)
      };
      A.prototype.isPlaceholderSupported = function () {
        return "placeholder" in document.createElement("input")
      };
      A.prototype.togglePlaceholderText = function (a, c, d) {
        b.eventHandler.listen(a, "focus", function (a) {
          this.value === c && (this.value = "")
        }, d + "inputfocus");
        b.eventHandler.listen(a, "blur", function () {
          "" === this.value && (this.value = c)
        }, d + "inputblur")
      };
      A.prototype.redraw = function (a) {
        var c = a.style.display;
        a.style.display = "none !important";
        a.style.display = c + " !important"
      };
      A.prototype.isTouchDevice = function () {
        try {
          return document.createEvent("TouchEvent"), !0
        } catch (a) {
          return !1
        }
      };
      A.prototype.shadeColor = function (a, c) {
        var b = "#", k, s;
        a = String(a).replace(/[^0-9a-f]/gi, "");
        6 > a.length && (a = a.charAt(0) + a.charAt(0) + a.charAt(1) + a.charAt(1) + a.charAt(2) + a.charAt(2));
        c = c || 0;
        for (s = 0; 6 > s; s += 2) k = parseInt(a[s] + "" + a[s + 1], 16), k = Math.round(Math.min(Math.max(0, k + k * c), 255)).toString(16), b += ("00" + k).substring(k.length);
        return b
      };
      A.prototype.getContrast = function (a) {
        a = a.replace("#", "");
        6 > a.length && (a = a.charAt(0) + a.charAt(0) + a.charAt(1) + a.charAt(1) + a.charAt(2) + a.charAt(2));
        return 8388607.5 < parseInt(a, 16) ? "white" : "black"
      };
      A.prototype.getElementsByTagName = function (a, c) {
        for (var b = [], k = a.getElementsByTagName(c), s = 0; s < k.length; s++) b.push(k[s]);
        return b
      };
      A.prototype.chatElementInView =
        function (a) {
          var c = b.viewHandler.chatContainer.getElementById("chatContainer");
          return !!(a.offsetTop >= c.scrollTop && a.offsetTop <= c.scrollTop + c.offsetHeight && 0 !== a.clientWidth && 0 !== a.clientHeight)
        };
      A.prototype.formatFileSize = function (a) {
        var c = "Bytes KB MB GB TB PB EB ZB YB".split(" ");
        a = parseInt(a, 10);
        if (!a) return "0Bytes";
        for (var b = 1; b < c.length; b++) if (a < Math.pow(1024, b)) return Math.round(100 * (a / Math.pow(1024, b - 1))) / 100 + c[b - 1];
        return a
      };
      A.prototype.isFileInputSupported = function () {
        if (x.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
        var a = document.createElement("input");
        a.type = "file";
        return !a.disabled
      };
      A.prototype.escapeTemplateReplacement = function (a, c) {
        for (var b = 0; b < c.length; b++) {
          var k = c[b], s = k.textReplace;
          "string" === typeof s && (s = s.replace(/\$/g, "$$$"));
          a = a.replace(k.placeholder, s)
        }
        return a
      };
      A.prototype.getGenericStyle = function (a) {
        return ["outline                     : " + (a.outline ? a.outline : "none") + " !important; ", "visibility                  : " + (a.visibility ? a.visibility : "visible") + " !important; ", "resize                      : " +
        (a.resize ? a.resize : "none") + " !important; ", "box-shadow                  : " + (a.boxshadow ? a.boxshadow : "none") + " !important; ", "overflow                    : " + (a.overflow ? a.overflow : "visible") + " !important; ", "background                  : " + (a.background ? a.background : "none") + " !important; ", "opacity                     : " + (a.opacity ? a.opacity : "1") + " !important; ", "filter                      : alpha(opacity=" + (a.opacity ? 100 * a.opacity : "100") + ") !important; ", "-ms-filter                  : progid:DXImageTransform.Microsoft.Alpha(Opacity" +
        (a.opacity ? a.opacity : "1") + ") !important; ", "-moz-opacity                : " + (a.opacity ? a.opacity : "1") + " !important; ", "-khtml-opacity              : " + (a.opacity ? a.opacity : "1") + " !important; ", "top                         : " + (a.top ? a.top : "auto") + " !important; ", "right                       : " + (a.right ? a.right : "auto") + " !important; ", "bottom                      : " + (a.bottom ? a.bottom : "auto") + " !important; ", "left                        : " + (a.left ? a.left : "auto") + " !important; ", "position                    : " +
        (a.position ? a.position : "absolute") + " !important; ", "border                      : " + (a.border ? a.border : "0") + " !important; ", "min-height                  : " + (a.minheight ? a.minheight : "auto") + " !important; ", "min-width                   : " + (a.minwidth ? a.minwidth : "auto") + " !important; ", "max-height                  : " + (a.maxheight ? a.maxheight : "none") + " !important; ", "max-width                   : " + (a.maxwidth ? a.maxwidth : "none") + " !important; ", "padding                     : " + (a.padding ? a.padding :
          "0") + " !important; ", "margin                      : " + (a.margin ? a.margin : "0") + " !important; ", "-moz-transition-property    : " + (a.transition ? a.transition : "none") + " !important; ", "-webkit-transition-property : " + (a.transition ? a.transition : "none") + " !important; ", "-o-transition-property      : " + (a.transition ? a.transition : "none") + " !important; ", "transition-property         : " + (a.transition ? a.transition : "none") + " !important; ", "transform                   : " + (a.transform ? a.transform : "none") + " !important; ",
          "-webkit-transform           : " + (a.transform ? a.transform : "none") + " !important; ", "-ms-transform               : " + (a.transform ? a.transform : "none") + " !important; ", "width                       : " + (a.width ? a.width : "auto") + " !important; ", "height                      : " + (a.height ? a.height : "auto") + " !important; ", "display                     : " + (a.display ? a.display : "block") + " !important; ", "z-index                     : " + (a.zindex ? a.zindex : "none") + " !important; ", "background-color            : " +
          (a.backgroundcolor ? a.backgroundcolor : "transparent") + " !important; ", "cursor                      : " + (a.cursor ? a.cursor : "auto") + " !important; ", "float                       : " + (a["float"] ? a["float"] : "none") + " !important; ", "border-radius               : " + (a.borderRadius ? a.borderRadius : "unset") + " !important; ", "pointer-events              : auto !important"].join("").replace(/\s/gm, "")
      };
      A.prototype.isGeneratedName = function (a) {
        return this.regNameMach.test(a)
      };
      A.prototype.getRotateStyling = function (a,
                                               c) {
        var b = "rotate(" + a + "deg) translateZ(0px)";
        return {
          transform: b,
          "-moz-transform": b,
          "-webkit-transform": b,
          "-o-transform": b,
          "-ms-transform": b,
          "transform-origin": c,
          "-moz-transform-origin": c,
          "-webkit-transform-origin": c,
          "-o-transform-origin": c,
          "-ms-transform-origin": c
        }
      };
      A.prototype.blurElements = function (a) {
        for (var c = 0; c < a.length; c++) a[c].blur()
      };
      A.prototype.transformGreetings = function (a) {
        for (var c = /\[([^)]+)\]/, b = /\(([^)]+)\)/, k = /\[[^\]\(\)]+\]\((\bhttp:\/\/\b|\bhttps:\/\/\b|\bmailto:\b){1}[^\]\(\)]+\)/i,
               s = "_blank", f = a, e, g; null !== (e = k.exec(f)) && (g = c.exec(e[0]), e = b.exec(e[0]), e[0].indexOf("(mailto:") || (s = "_top"), f = f.replace(g[0] + e[0], '<a target="' + s + '" href="' + e[1] + '" class="link">' + g[1] + "</a>"), f !== a);) ;
        return f
      };
      A.prototype.checkWhiteLabelLink = function (a, c, d) {
        var k = 1E4 * Math.random(), s = this, e = b.viewHandler.chatContainer, g, h, l = null, l = function () {
          if (c.label !== a.innerHTML || c.url && c.url !== a.href || !c.url && a.href || c.id !== a.id || !e.getElementById(a.id) || c.cssText !== a.style.cssText || n.h(a.innerHTML) !== f.key) s.whiteLabelUnexpectedIssueLogged ||
          (b.loggingHandler.logIncident("White label element has changed unexpectedly", {pageId: D.uuid}), s.whiteLabelUnexpectedIssueLogged = !0), a.id = c.id, a.innerHTML = c.label, a.style.cssText = c.cssText, null !== c.url ? a.href = c.url : a.removeAttribute("href"), !e.getElementById(c.parentElem.id) && c.grandParentName && (g = e.getElementById(c.grandParentName), c.siblingName && (h = e.getElementById(c.siblingName)) && g && g.insertBefore(c.parentElem, h)), g = e.getElementById(c.parentElem.id), !e.getElementById(a.id) && g && g.appendChild(a);
          s.checkWhiteLabelLink(a, c, d)
        };
        d ? this.messagePreviewCheckWhiteLabelRef = setTimeout(l, k) : this.checkWhiteLabelRef = setTimeout(l, k)
      };
      A.prototype.applyWhiteLabelSettings = function (a, c, b) {
        b ? clearTimeout(this.messagePreviewCheckWhiteLabelRef) : clearTimeout(this.checkWhiteLabelRef);
        null === c.url ? a.removeAttribute("href") : (a.href = c.url, c.url = a.href);
        f.whiteLabel() && null !== c.url && (a.target = "_blank");
        a.innerHTML = c.label;
        a.style.cssText += ";color:" + c.textColor + " !important";
        c.cssText = a.style.cssText;
        this.checkWhiteLabelLink(a,
          c, b)
      };
      A.prototype.transformLabel = function (a) {
        var c;
        (c = a.match(/_[^_]+_/gi)) && 0 < c.length && c.forEach(function (c) {
          var b;
          b = c.indexOf("_");
          var s = c.lastIndexOf("_");
          b = c.substring(0, b) + "<i>" + c.substring(b + 1, s) + "</i>" + c.substring(s + 1, c.length);
          a = a.replace(c, b)
        });
        (c = a.match(/\*[^*]+\*/gi)) && 0 < c.length && c.forEach(function (c) {
          var b;
          b = c.indexOf("*");
          var s = c.lastIndexOf("*");
          b = c.substring(0, b) + "<b>" + c.substring(b + 1, s) + "</b>" + c.substring(s + 1, c.length);
          a = a.replace(c, b)
        });
        return a
      };
      A.prototype.getRandomName = function () {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(52 *
          Math.random()) + this.generateRandomString() + "-" + (new Date).getTime()
      };
      A.prototype.insertRandomTagsBeforeAndAfter = function (a, c, b) {
        var k = Math.floor(3 * Math.random() + 1), s;
        for (s = 0; s < k; s++) {
          var f = document.createElement(b);
          f.id = n.getRandomName();
          c.insertBefore(f, a)
        }
        k = Math.floor(3 * Math.random() + 1);
        for (s = 0; s < k; s++) a = document.createElement(b), a.id = n.getRandomName(), c.appendChild(a)
      };
      A.prototype.getWebRTCToken = function (a, c, d) {
        if (!this.hasWebRTC()) return d(!0);
        var k = this;
        a = {video: a, screen: c};
        d = d || function () {
        };
        this.webrtcWin = g.open("", "");
        b.socketManager.sendToConnector("getWebRTCToken", a, function (a, c) {
          if (a) return k.webrtcWin.close(), d(!0, a);
          k.webrtcWin.location.href = k.connectionUrl + "/v2/call?token=" + c.data.token;
          d()
        })
      };
      A.prototype.rejectCall = function (a, c) {
        var d = {callId: a};
        c = c || function () {
        };
        b.socketManager.sendToConnector("declineCall", d, function () {
          c()
        })
      };
      A.prototype.disconnectWebRTC = function () {
        this.webrtcWin && this.webrtcWin.close()
      };
      A.prototype.debounce = function (a, c, b) {
        var k;
        return function () {
          var s = this,
            f = arguments, e = b && !k;
          clearTimeout(k);
          k = setTimeout(function () {
            k = null;
            b || a.apply(s, f)
          }, c);
          e && a.apply(s, f)
        }
      };
      A.prototype.isDescendent = function (a, c) {
        for (var b = c.parentNode; null !== b;) {
          if (b === a) return !0;
          b = b.parentNode || null
        }
        return !1
      };
      A.prototype.getTimeDifference = function (a, c) {
        var d, k;
        d = new Date(a);
        endTimeFmt = new Date(c);
        diff = endTimeFmt.getTime() - d.getTime();
        36E5 <= diff ? (d = Math.round(diff / 36E5), k = "hours") : 6E4 <= diff ? (d = Math.round(diff / 6E4), k = "minutes") : (d = Math.round(diff / 1E3), k = "seconds");
        return b.languageParser.translate("chat",
          k, {num: d})
      };
      A.prototype.hasClass = function (a, c) {
        return a.classList ? a.classList.contains(c) : !!a.className.match(RegExp("(\\s|^)" + c + "(\\s|$)"))
      };
      A.prototype.addClass = function (a, c) {
        a.classList ? a.classList.add(c) : this.hasClass(a, c) || (a.className += " " + c)
      };
      A.prototype.removeClass = function (a, c) {
        a.classList ? a.classList.remove(c) : this.hasClass(a, c) && (a.className = a.className.replace(RegExp("(\\s|^)" + c + "(\\s|$)"), " "))
      };
      A.prototype.updateFontStylesheet = function (a) {
        if (a && (a !== document || f.isPopup)) {
          var c = a.getElementById("lato-fonts"),
            b = a.body;
          n.supportsLatin(f.locale) && !c ? (a.querySelector("head").innerHTML += '<link id="lato-fonts" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&subset=latin-ext" rel="stylesheet"/>', this.addClass(b, "font-lato")) : !n.supportsLatin(f.locale) && c && (c.parentNode.removeChild(c), this.removeClass(b, "font-lato"))
        }
      };
      A.prototype.updateFonts = function () {
        if (b.viewHandler && b.viewHandler.iframeContainer && b.viewHandler.iframeContainer.childViews) for (var a =
          b.viewHandler.iframeContainer.childViews, c = 0; c < a.length; c++) {
          var d = a[c];
          d.isIframe && this.updateFontStylesheet(d.documentRef)
        }
      };
      A.prototype.supportsLatin = function (a) {
        return -1 < "cat cs da de en et es fi fil fr hr hu id it lv lt ms nl no pl pt pt_br ro sk sl sr_cs sq sv tr vi".split(" ").indexOf(a)
      };
      A.prototype.hasWebRTC = function () {
        var a = !0;
        return a = T ? !1 : x.getUserMedia || x.webkitGetUserMedia || x.mozGetUserMedia || x.msGetUserMedia || x.mediaDevices && x.mediaDevices.getUserMedia
      };
      A.prototype.h = function (a) {
        var c =
          0;
        if (0 === a.length) return c;
        for (var b = 0; b < a.length; b++) var k = a.charCodeAt(b), c = (c << 5) - c + k, c = c & c;
        return c
      };
      Inheritance_Manager = {
        extend: function (a, c) {
          function b() {
          }

          b.prototype = c.prototype;
          a.prototype = new b;
          a.prototype.constructor = a;
          a.prototype.parent = c.prototype;
          a.baseConstructor = c;
          a.superClass = c.prototype
        }
      };
      var n = new A;
      "undefined" !== typeof module && module.exports && (module.exports.Utils = A);
      var bb = [{string: x.userAgent, subString: "Edge", identity: "explorer", versionSearch: "Edge"}, {
          string: x.userAgent, subString: "Trident/7.0",
          identity: "explorer", versionSearch: "rv"
        }, {
          string: x.userAgent,
          subString: "(Opera|OPR)",
          identity: "opera",
          versionSearch: "Version"
        }, {string: x.userAgent, subString: "Chrome", identity: "chrome", versionSearch: "Chrome"}, {
          string: x.userAgent,
          subString: "Mobile Safari",
          identity: "android",
          versionSearch: "Version"
        }, {
          string: x.userAgent,
          subString: "Firefox",
          identity: "firefox",
          versionSearch: "Firefox"
        }, {string: x.userAgent, subString: "MSIE", identity: "explorer", versionSearch: "MSIE"}, {
          string: x.userAgent, subString: "IEMobile",
          identity: "explorer", versionSearch: "IEMobile"
        }, {string: x.userAgent, subString: "Safari", identity: "safari", versionSearch: "Version"}, {
          string: x.userAgent,
          subString: "Gecko",
          identity: "mozilla",
          versionSearch: "rv"
        }], cb = [{string: x.userAgent, subString: "Windows Phone", identity: "windows_phone"}, {
          string: x.platform,
          subString: "Win",
          identity: "windows"
        }, {string: x.platform, subString: "Mac", identity: "mac"}, {
          string: x.userAgent,
          subString: "iPhone",
          identity: "iphone"
        }, {string: x.userAgent, subString: "Android", identity: "android"},
          {string: x.platform, subString: "Linux", identity: "linux"}, {
            string: x.userAgent,
            subString: "iPad",
            identity: "ipad"
          }], Va = {
          google: "q",
          yahoo: "p",
          baidu: "wd",
          yandex: "text",
          bing: "q",
          soso: "w",
          ask: "q",
          aol: "q",
          sogou: "query",
          mywebsearch: "searchfor",
          youdao: "q",
          lycos: "q",
          infospace: "q",
          blekko: "q",
          info: "q",
          dogpile: "q",
          duckduckgo: "q",
          webcrawler: "q"
        }, ba = {
          src: "about:blank",
          border: "0",
          cellspacing: "0",
          frameBorder: "0",
          scrolling: "no",
          horizontalscrolling: "no",
          verticalscrolling: "no",
          allowTransparency: "true",
          title: "chat widget"
        },
        Ma = {
          nokia: [/(NokiaBrowser)\/(\d+)\.(\d+).(\d+)\.(\d+)/, /^(Nokia)/, /(NokiaBrowser)\/(\d+)\.(\d+).(\d+)/, /(NokiaBrowser)\/(\d+)\.(\d+)/, /(BrowserNG)\/(\d+)\.(\d+).(\d+)/, /(Series60)\/5\.0/, /(Series60)\/(\d+)\.(\d+)/, /(S40OviBrowser)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Nokia)[EN]?(\d+)/],
          blackberry: [/(BB10);/, /(PlayBook).+RIM Tablet OS (\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry).+Version\/(\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry)\s?(\d+)/],
          chrome: [/(CrMo)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(CriOS)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/,
            /(Android).*(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+) (Mobile)?/],
          ie: [/(IEMobile)[ \/](\d+)\.(\d+)/],
          firefox: [/Mobile.*(Firefox)\/(\d+)\.(\d+)/, /Tablet.*(Firefox)\/(\d+)\.(\d+)/],
          operamini: [/(Opera Mini)(?:\/att)?\/(\d+)\.(\d+)/],
          opera: [/(Opera Tablet).*Version\/(\d+)\.(\d+)(?:\.(\d+))?/, /(?:Mobile Safari).*(OPR)\/(\d+)\.(\d+)\.(\d+)'/, /(Opera)\/.+Opera Mobi.+Version\/(\d+)\.(\d+)/, /(Opera)\/(\d+)\.(\d+).+Opera Mobi/, /Opera Mobi.+(Opera)\/(\d+)\.(\d+)/, /Opera Mobi/, /(Opera)\/9.80.*Version\/(\d+)\.(\d+)(?:\.(\d+))?/],
          safari: [/(iPod|iPhone|iPad);.*CPU.*OS (\d+)(?:_\d+)?_(\d+).*Mobile/],
          uc: [/(UCBrowser)[ \/](\d+)\.(\d+)\.(\d+)/, /(UC Browser)[ \/](\d+)\.(\d+)\.(\d+)/, /(UC Browser|UCBrowser|UCWEB)(\d+)\.(\d+)\.(\d+)/],
          "android2.3": [/(Android) 2\.3(?:[.\-]([a-z0-9]+))?/],
          android2: [/(Android) 2\.(\d+)(?:[.\-]([a-z0-9]+))?/],
          android: [/Android[\- ][\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; WOWMobile (.+) Build/, /Android[\- ][\d]+\.[\d]+\-update1; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/, /Android[\- ][\d]+\.[\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/,
            /Android[\- ][\d]+\.[\d]+\.[\d]+;[A-Za-z]{2}\-[A-Za-z]{0,2};(.+) Build/, /Android[\- ][\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/, /Android[\- ][\d]+\.[\d]+\.[\d]+; (.+) Build/, /Android[\- ][\d]+\.[\d]+; (.+) Build/]
        }, ca = function () {
          this.versionSearchString = this.browserObj = null;
          this.init()
        };
      ca.prototype.init = function () {
        var a = this.getBrowserVersion();
        y = this.getMobileBrowser();
        O = a.version;
        N = a.vendor;
        da = {mp3: this.hasHtmlAudio("mp3"), ogg: this.hasHtmlAudio("ogg"), wav: this.hasHtmlAudio("wav")};
        da.supported =
          da.mp3 || da.ogg || da.wav || da.aac;
        ga = n.isPlaceholderSupported();
        "explorer" === N && (T = !0, 6 === O && (La = !0))
      };
      ca.prototype.getBrowserVersion = function () {
        return this.browserObj ? this.browserObj : this.browserObj = {
          vendor: this.searchString(bb) || "other",
          version: this.searchVersion(x.userAgent) || this.searchVersion(x.appVersion) || "other",
          os: this.searchString(cb) || "other",
          plugins: this.getPlugins()
        }
      };
      ca.prototype.getPlugins = function () {
        var a, c, b = [];
        a = 0;
        for (c = x.plugins.length; a < c; a++) x.plugins[a].name && b.push(x.plugins[a].name);
        return b
      };
      ca.prototype.searchString = function (a) {
        var b, d, k;
        for (b = 0; b < a.length; b++) if (d = a[b].string, k = RegExp(a[b].subString), this.versionSearchString = a[b].versionSearch || a[b].identity, k.test(d)) return a[b].identity
      };
      ca.prototype.searchVersion = function (a) {
        var b = a.indexOf(this.versionSearchString);
        if (-1 !== b) return parseFloat(a.substring(b + this.versionSearchString.length + 1))
      };
      ca.prototype.getMobileBrowser = function () {
        for (var a = !1, b = x.userAgent, d = Object.keys(Ma), k = 0; !a && k < d.length;) {
          for (var s = d[k], f = 0; f <
          Ma[s].length; f++) if (b.match(Ma[s][f])) {
            a = s;
            break
          }
          k++
        }
        return a
      };
      ca.prototype.getReferredSearchEngine = function () {
        var a, b, d = "";
        if (document.referrer && (b = this.getHostname(document.referrer))) for (a in b = b.toLowerCase(), Va) if (0 <= b.indexOf(a)) {
          queryString = this.getQuerystring(document.referrer, Va[a]);
          "blekko" === a && "" === queryString && (queryString = this.getQuerystring(document.referrer.replace("/ws/", "/?q="), "q"));
          d = a;
          break
        }
        return d
      };
      ca.prototype.getQuerystring = function (a, b) {
        var d;
        b = b.replace(/[\[]/, "\\[").replace(/[\]]/,
          "\\]");
        d = RegExp("[\\?&]" + b + "=([^&#]*)").exec(a);
        return null === d || !n.isArray(d) || 2 > d.length ? null : d[1] ? unescape(d[1].replace(/\+/g, " ")) : null
      };
      ca.prototype.getHostname = function (a) {
        a = a.match(/^(?:f|ht)tp(?:s)?:\/\/([^/]+)/im);
        return null === a || !n.isArray(a) || 2 > a.length ? null : a[1] ? a[1].toString() : null
      };
      ca.prototype.hasHtmlAudio = function (a) {
        var b = document.createElement("audio");
        try {
          if (!b.canPlayType || "no" === b.canPlayType("audio/" + a) || "" === b.canPlayType("audio/" + a)) return !1
        } catch (d) {
          return !1
        }
        return !0
      };
      b.browserData =
        new ca;
      var wa = function () {
        this.unloading = !1
      };
      wa.prototype.logPerformance = function (a) {
        Na.xhrRequest("https://va.tawk.to/log-performance/v3", {logData: JSON.stringify(a)}, function () {
        })
      };
      wa.prototype.logIncident = function (a, b) {
        var d = q.getBrowserData();
        d.visitorId = D.visitorId || "";
        d.message = a;
        d.data = b;
        this.log("warning", d)
      };
      wa.prototype.log = function (a, b) {
        var d;
        b && a && (b.uiVersion = "v3", b.buildVersion = "681", b.buildCommit = "511435cbf1d382cbc8bfaab0f084c34589453c07", d = {
          type: a,
          data: b
        }, this.postForm("log", JSON.stringify(d)))
      };
      wa.prototype.postForm = function (a, b) {
        var d, k, s;
        k = document.createElement("iframe");
        if (!document.body) return !1;
        k.src = "about:blank";
        k.style.cssText = ";display:none !important;";
        k.title = "chat widget logging";
        document.body.appendChild(k);
        try {
          d = n.getDocument(k)
        } catch (f) {
          return !1
        }
        T && (d.open(), d.writeln('<!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body><iframe name="form-receiver" id="form-receiver"></iframe></body></html>'), d.close());
        k =
          d.createElement("form");
        k.method = "POST";
        k.action = "https://va.tawk.to/" + a;
        k.enctype = "application/x-www-form-urlencoded";
        k.acceptCharset = "UTF-8";
        s = d.createElement("input");
        s.type = "text";
        s.name = "logData";
        s.value = b;
        k.appendChild(s);
        T && (k.target = "form-receiver");
        d.body.appendChild(k);
        k.submit();
        k.parentNode.removeChild(k)
      };
      g.onbeforeunload = function () {
        this.unloading = !0
      };
      g.onunload = function () {
        this.unloading = !0
      };
      var Oa = function () {
        this.originalErrorHandlerFn = g.onerror
      };
      Oa.prototype.getBrowserData = function () {
        var a =
          b.browserData.getBrowserVersion();
        return {
          site: g.location.href,
          browser: a.vendor || "",
          version: a.version || "",
          os: a.os || "",
          plugins: a.plugins || ""
        }
      };
      Oa.prototype.handleError = function (a, c, d, k, s) {
        var f;
        if (!(c && d || "Script error." !== a && "Script error" !== a) || "string" !== typeof c || -1 === c.indexOf("tawk.to") && -1 === c.indexOf("tawk.js")) return !1;
        f = this.getBrowserData();
        f.visitorId = D.visitorId || "";
        f.message = a || "";
        f.file = c || "";
        f.line = d || "";
        f.column = k || "";
        f.stack = s ? JSON.stringify(s) : "";
        f.stack = f.stack.replace(n.regLineBreaks,
          "");
        b.loggingHandler.log("error", f);
        return !0
      };
      q = new Oa;
      g.onerror = function () {
        var a;
        if (!q) return !1;
        a = q.handleError.apply(this, arguments);
        return "function" === typeof q.originalErrorHandlerFn ? q.originalErrorHandlerFn.apply(this, arguments) : a
      };
      var ka = function () {
        var a = this;
        this.events = {};
        this.supportsPassive = !1;
        if (g.addEventListener) try {
          var b = Object.defineProperty({}, "passive", {
            get: function () {
              a.supportsPassive = !0
            }
          });
          g.addEventListener("testPassive", null, b);
          g.removeEventListener("testPassive", null, b)
        } catch (d) {
          a.supportsPassive =
            !1
        }
      };
      ka.prototype.attachEvent = function (a, b, d) {
        var k = this, s = function (b) {
          d.call(a, k.getEvent(b))
        };
        a.attachEvent("on" + b, s);
        return s
      };
      ka.prototype.listen = function (a, b, d, k) {
        var s;
        if (k) {
          this.events[k] && (s = this.events[k], this.events[k] = null, this.removeEventHandler(s.element, s.eventName, s.eventListener));
          if (a.addEventListener) a.addEventListener(b, d, this.supportsPassive ? {passive: !1} : !1); else if (document.attachEvent) d = this.attachEvent(a, b, d); else return null;
          this.events[k] = {element: a, eventName: b, eventListener: d};
          return d
        }
      };
      ka.prototype.cancelEvent = function (a) {
        document.attachEvent && (a = this.getEvent(a));
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
      };
      ka.prototype.removeEventHandler = function (a, b, d) {
        document.removeEventListener ? a.removeEventListener(b, d, !1) : a.detachEvent("on" + b, d)
      };
      ka.prototype.getEvent = function (a) {
        var b = a || g.event;
        if (!b) for (a = this.getEvent.caller; a && (!(b = a.arguments[0]) || Event != b.constructor);) a = a.caller;
        return b
      };
      ka.prototype.clearEvents = function () {
        var a = this;
        Object.keys(this.events).forEach(function (b) {
          b =
            a.events[b];
          a.removeEventHandler(b.element, b.eventName, b.eventListener)
        });
        this.events = {}
      };
      ka.prototype.getTargetElement = function (a) {
        document.attachEvent && (a = this.getEvent(a));
        a = a.target || a.srcElement;
        3 === a.nodeType && (a = a.parentNode);
        return a
      };
      var db = {
        keypressTimer: 0, previousValue: 0, initElement: function (a, c) {
          var d = this;
          this.previousValue = "";
          b.eventHandler.listen(a, "focus", function (b) {
            d.startWatching(b, a, c)
          }, a.id + "focus");
          b.eventHandler.listen(a, "blur", function (a) {
            d.stopWatching()
          }, a.id + "blur");
          b.eventHandler.listen(a,
            "keyup", function (b) {
              d.detectChange(b, a, c)
            }, a.id + "keyup")
        }, startWatching: function (a, b, d) {
          var k = this;
          this.stopWatching();
          this.keypressTimer = setInterval(function () {
            k.detectChange(a, b, d)
          }, 100)
        }, stopWatching: function () {
          0 != this.keypressTimer && (clearInterval(this.keypressTimer), this.keypressTimer = 0)
        }, detectChange: function (a, b, d) {
          b = b.value || "";
          if (this.previousValue === b) return !1;
          d(a, b);
          this.previousValue = b
        }
      }, Pa = function () {
      };
      Pa.prototype.xhrRequest = function (a, b, d) {
        var k = new XMLHttpRequest;
        b = b || {};
        k.onerror =
          d;
        k.open("POST", a, !0);
        k.withCredentials = !0;
        k.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        k.onreadystatechange = function () {
          k.passed || 4 !== k.readyState || (k.passed = !0, d(null, k.responseText))
        };
        k.send(n.createQueryString(b));
        return {type: "xhr", req: k}
      };
      Pa.prototype.abort = function (a) {
        a && "xhr" === a.type && a.req.abort()
      };
      var Na = new Pa, P = function () {
        this.isCookieEnabled = this.checkCookieEnabled();
        this.alphaNumericReg = /[^0-9a-zA-Z]/g;
        this.hasSessionStorage = this.isCookieEnabled && !!g.sessionStorage;
        this.checkLocalStorageUsage();
        this.clearOldCookies("TawkCookie")
      };
      P.prototype.checkLocalStorageUsage = function () {
        try {
          localStorage.setItem("exist_test", "yes"), localStorage.removeItem("exist_test"), this.hasLocalStorage = !0
        } catch (a) {
          this.hasLocalStorage = !1
        }
      };
      P.prototype.setHTTPCookie = function (a, b, d, k) {
        var s = "";
        d || (d = new Date, d.setTime(d.getTime() + 15552E6), s = "; expires=" + d.toGMTString());
        document.cookie = a + "=" + b + s + "; path=/" + (k ? ";domain=" + k : "")
      };
      P.prototype.getHTTPCookie = function (a) {
        var b, d, k = [], s = a + "=",
          f = document.cookie.split(";");
        a = 0;
        for (b = f.length; a < b; a++) {
          for (d = f[a]; " " === d.charAt(0);) d = d.substring(1, d.length);
          0 === d.indexOf(s) && k.push(d.substring(s.length, d.length))
        }
        return k
      };
      P.prototype.setSessionStorage = function (a, b) {
        if (this.hasSessionStorage && sessionStorage.setItem) try {
          sessionStorage.setItem(a, b)
        } catch (d) {
        }
      };
      P.prototype.getSessionStorage = function (a) {
        return this.hasSessionStorage && sessionStorage.getItem ? sessionStorage.getItem(a) : null
      };
      P.prototype.setLocalStorage = function (a, b) {
        g.localStorage.setItem(a,
          b)
      };
      P.prototype.getLocalStorage = function (a) {
        return g.localStorage.getItem(a)
      };
      P.prototype.setWindowName = function (a) {
        g.name && 0 !== g.name.indexOf("TawkWindowName-") || (g.name = "TawkWindowName-" + a)
      };
      P.prototype.getWindowName = function () {
        var a, b, d;
        if (!g.name) return null;
        if (0 !== g.name.indexOf("TawkWindowName-")) {
          d = g.name.substring(0, 5);
          b = d.length;
          if (6 > b) for (a = 0, b = 6 - b; a < b; a++) d += "0";
          return d.replace(/[^0-9a-zA-Z]/g, "0").replace(" ", "0")
        }
        return g.name.substring(15, 21)
      };
      P.prototype.handleWindowId = function () {
        var a =
          this.getSessionStorage("TawkWindowName");
        "null" === a && (a = null);
        a || this.hasSessionStorage || (a = this.getWindowName());
        "null" === a && (a = null);
        a || (a = n.generateRandomString(), this.hasSessionStorage ? this.setSessionStorage("TawkWindowName", a) : this.setWindowName(a));
        G = a
      };
      P.prototype.storeUUID = function () {
        var a = this;
        r.transferedSession || D.uuids && 0 < D.uuids.length && D.uuids.forEach(function (b) {
          var d = (b.isExact ? "e::" : "p::") + b.domain + "::" + b.uuid + "::" + D.uuidVer;
          a.isCookieEnabled && a.setHTTPCookie("__tawkuuid", d, !1, b.domain)
        });
        this.handleWindowId();
        this.storeSessionInformation()
      };
      P.prototype.getSessionInformation = function () {
        var a;
        this.sessionInformation && (a = this.sessionInformation);
        this.hasLocalStorage && (a = this.getLocalStorage("twk_" + L.pageId));
        a || (a = this.getHTTPCookie("Tawk_" + L.pageId)[0]);
        return this.parseSessionInformation(a)
      };
      P.prototype.storeSessionInformation = function (a, c) {
        var d, k = this.getSessionInformation();
        if (!a || r.visitorSocketServer) a ? d = r.visitorSocketServer + "::" + b.viewHandler.indicator.unansweredMessages : (d =
          k[1] || 0, b.main.previousSessionKey !== r.sessionKey && (d = 0), d = r.visitorSocketServer + "::" + d), c ? d += "::cf" : 3 === k.length && (d += "::" + k[2]), this.hasLocalStorage ? (this.setLocalStorage("twk_" + L.pageId, d), this.clearOldCookies("Tawk_" + L.pageId)) : this.setHTTPCookie("Tawk_" + L.pageId, d, !1), this.sessionInformation = d
      };
      P.prototype.parseSessionInformation = function (a) {
        var b = [];
        a && (b = a.split("::"), 1 >= b.length && (b = a.split("||")));
        return b
      };
      P.prototype.clearOldCookies = function (a) {
        document.cookie = a + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
      };
      P.prototype.checkCookieEnabled = function () {
        var a = x.cookieEnabled ? !0 : !1;
        "undefined" != typeof x.cookieEnabled || a || (document.cookie = "testcookie", a = -1 != document.cookie.indexOf("testcookie") ? !0 : !1);
        return a
      };
      P.prototype.getStoredUUID = function () {
        var a;
        this.isCookieEnabled && (a = this.getHTTPCookie("__tawkuuid"));
        return a && 0 < a.length ? a : []
      };
      var ea = new P, eb = function (a) {
        var b;
        "symbian" === y ? this.play = function () {
        } : ("safari" === y ? (b = document.createElement("audio"), b.src = a, b.style.cssText = "position: absolute; position: absolute; width: 0px; height: 0px; top: -10000px; left: -10000px;",
          document.body.appendChild(b)) : b = new Audio(a), b.addEventListener("timeupdate", function () {
          0.2 <= b.currentTime && b.pause()
        }, !1), b.load(), this.soundEl = b, this.play = function () {
          try {
            b.currentTime = 0, b.autoplay = !0, b.load(), b.play()
          } catch (a) {
          }
        })
      }, fb = function (a, b, d) {
        this.sourcePath = a;
        this.buffer = null;
        this.name = b;
        this.audioPlayer = d;
        this.source = null;
        this.volume = 1;
        this.play = function () {
          if (this.buffer) {
            var a = this.audioPlayer.audioContext.createGain();
            a.gain.value = this.volume;
            this.source = this.audioPlayer.audioContext.createBufferSource();
            this.source.buffer = this.buffer;
            this.source.connect(a);
            a.connect(this.audioPlayer.audioContext.destination);
            this.source.start(0)
          }
        };
        this.loadBuffer = function () {
          var a = new XMLHttpRequest, b = this;
          a.open("GET", b.sourcePath, !0);
          a.responseType = "arraybuffer";
          a.onload = function () {
            b.audioPlayer.audioContext.decodeAudioData(a.response, function (a) {
              a && (b.buffer = a, b.audioPlayer.isReadyForInit || (b.audioPlayer.eventUsedForInit = b.name, b.audioPlayer.isReadyForInit = !0))
            }, function (a) {
              throw Error(a);
            })
          };
          a.onerror = function (a) {
            throw Error("BufferLoader: XHR error for " +
              b.sourcePath);
          };
          a.send()
        };
        this.loadBuffer()
      }, Qa = function () {
        this.sounds = {};
        this.audioContext = null;
        this.isReadyForInit = !1;
        this.eventUsedForInit = null
      };
      Qa.prototype.initAudioPlayer = function () {
        var a, c, d, k = {}, s = this;
        if (da.supported) {
          this.audioContext || (/Firefox/.test(x.userAgent) || "undefined" === typeof AudioBuffer || void 0 === g.AudioContext && void 0 === g.webkitAudioContext) || (g.AudioContext = g.AudioContext || g.webkitAudioContext, this.audioContext = new g.AudioContext);
          da.mp3 ? k = Ya : da.wav ? k = ab : da.ogg && (k = Za);
          for (a in k) this.sounds[a] =
            this.audioContext ? new fb(k[a], a, this) : new eb(k[a]);
          this.audioContext && (d = function () {
            s.isReadyForInit && (s.eventUsedForInit && !s.touchstartInited) && (s.sounds[s.eventUsedForInit].volume = 0, s.sounds[s.eventUsedForInit].play(), s.sounds[s.eventUsedForInit].source.stop(0), s.sounds[s.eventUsedForInit].volume = 1, g && "function" === typeof g.removeEventListener && g.removeEventListener("touchstart", d, !1), c && "function" === typeof c.removeEventListener && c.removeEventListener("touchstart", d, !1), s.touchstartInited = !0)
          }, y &&
          "ontouchstart" in g && (a = b.viewHandler.chatContainer.elementReferrer, f.isPopup || (c = a.contentWindow ? a.contentWindow : a.contentDocument.defaultView), c ? c.addEventListener("touchstart", d, !1) : a.addEventListener("touchstart", d, !1), g.addEventListener("touchstart", d, !1)))
        }
      };
      Qa.prototype.play = function (a) {
        l.disableSound || f.soundOn() && this.sounds[a] && this.sounds[a].play()
      };
      var Ra = function () {
        var a = this;
        this.uploads = {};
        b.eventEmitter.on("fileUploadProgress", function (a) {
          b.viewHandler.updateFileProgress(a)
        });
        b.eventEmitter.on("fileUploadFinished",
          function (c) {
            a.uploads[c.handle] && (delete a.uploads[c.handle], b.viewHandler.fileUploaded(c.handle), b.chatHandler.sendFileMessage(c))
          });
        b.eventEmitter.on("fileUploadError", function (c) {
          var d = a.uploads[c.handle];
          d && b.viewHandler.handleUploadError(null, d, c.handle)
        })
      };
      Ra.prototype.getUploadHandler = function (a) {
        var b = "https://upload.tawk.to/upload/handle?_t=" + (new Date).getTime(), d = new XMLHttpRequest;
        d.onreadystatechange = function () {
          4 === this.readyState && (200 <= this.status && 400 > this.status ? a(JSON.parse(this.responseText)) :
            a(!0))
        };
        d.open("GET", b);
        d.onerror = function () {
          a(!0)
        };
        d.send();
        d = null
      };
      Ra.prototype.uploadFile = function (a, b, d, k) {
        var s = "https://upload.tawk.to/upload/visitor-chat/visitor?handle=" + a + "&visitorSessionId=" + r.sessionKey;
        this.uploads[a] = d;
        if (52428800 < b.size) return k(!0, "limit50");
        a = new FormData;
        a.append("upload", b, b.name || b.filename);
        b = new XMLHttpRequest;
        b.open("POST", s);
        b.onload = function () {
          return k(JSON.parse(this.responseText))
        };
        b.onerror = function () {
          return k(!0)
        };
        b.send(a)
      };
      var Da, H, xa, Ea, ta = 0, Sa = {
          people: {
            header: ":smiley:",
            content: ":grinning: :grin: :joy: :rofl: :smiley: :smile: :sweat_smile: :laughing: :wink: :blush: :yum: :sunglasses: :heart_eyes: :kissing_heart: :kissing: :kissing_smiling_eyes: :kissing_closed_eyes: :relaxed: :slight_smile: :hugging: :thinking: :neutral_face: :expressionless: :no_mouth: :rolling_eyes: :smirk: :persevere: :disappointed_relieved: :open_mouth: :zipper_mouth: :hushed: :sleepy: :tired_face: :sleeping: :relieved: :nerd: :stuck_out_tongue: :stuck_out_tongue_winking_eye: :stuck_out_tongue_closed_eyes: :drooling_face: :unamused: :sweat: :pensive: :confused: :upside_down: :money_mouth: :astonished: :frowning2: :slight_frown: :confounded: :disappointed: :worried: :triumph: :cry: :sob: :frowning: :anguished: :fearful: :weary: :grimacing: :cold_sweat: :scream: :flushed: :dizzy_face: :rage: :angry: :innocent: :cowboy: :clown: :lying_face: :mask: :thermometer_face: :head_bandage: :nauseated_face: :sneezing_face: :smiling_imp: :imp: :japanese_ogre: :japanese_goblin: :skull: :ghost: :alien: :robot: :poop: :smiley_cat: :smile_cat: :joy_cat: :heart_eyes_cat: :smirk_cat: :kissing_cat: :scream_cat: :crying_cat_face: :pouting_cat: :boy: :boy_tone1: :boy_tone2: :boy_tone3: :boy_tone4: :boy_tone5: :girl: :girl_tone1: :girl_tone2: :girl_tone3: :girl_tone4: :girl_tone5: :man: :man_tone1: :man_tone2: :man_tone3: :man_tone4: :man_tone5: :woman: :woman_tone1: :woman_tone2: :woman_tone3: :woman_tone4: :woman_tone5: :older_man: :older_man_tone1: :older_man_tone2: :older_man_tone3: :older_man_tone4: :older_man_tone5: :older_woman: :older_woman_tone1: :older_woman_tone2: :older_woman_tone3: :older_woman_tone4: :older_woman_tone5: :baby: :baby_tone1: :baby_tone2: :baby_tone3: :baby_tone4: :baby_tone5: :angel: :angel_tone1: :angel_tone2: :angel_tone3: :angel_tone4: :angel_tone5: :cop: :cop_tone1: :cop_tone2: :cop_tone3: :cop_tone4: :cop_tone5: :spy: :spy_tone1: :spy_tone2: :spy_tone3: :spy_tone4: :spy_tone5: :guardsman: :guardsman_tone1: :guardsman_tone2: :guardsman_tone3: :guardsman_tone4: :guardsman_tone5: :construction_worker: :construction_worker_tone1: :construction_worker_tone2: :construction_worker_tone3: :construction_worker_tone4: :construction_worker_tone5: :man_with_turban: :man_with_turban_tone1: :man_with_turban_tone2: :man_with_turban_tone3: :man_with_turban_tone4: :man_with_turban_tone5: :person_with_blond_hair: :person_with_blond_hair_tone1: :person_with_blond_hair_tone2: :person_with_blond_hair_tone3: :person_with_blond_hair_tone4: :person_with_blond_hair_tone5: :santa: :santa_tone1: :santa_tone2: :santa_tone3: :santa_tone4: :santa_tone5: :mrs_claus: :mrs_claus_tone1: :mrs_claus_tone2: :mrs_claus_tone3: :mrs_claus_tone4: :mrs_claus_tone5: :princess: :princess_tone1: :princess_tone2: :princess_tone3: :princess_tone4: :princess_tone5: :prince: :prince_tone1: :prince_tone2: :prince_tone3: :prince_tone4: :prince_tone5: :bride_with_veil: :bride_with_veil_tone1: :bride_with_veil_tone2: :bride_with_veil_tone3: :bride_with_veil_tone4: :bride_with_veil_tone5: :man_in_tuxedo: :man_in_tuxedo_tone1: :man_in_tuxedo_tone2: :man_in_tuxedo_tone3: :man_in_tuxedo_tone4: :man_in_tuxedo_tone5: :pregnant_woman: :pregnant_woman_tone1: :pregnant_woman_tone2: :pregnant_woman_tone3: :pregnant_woman_tone4: :pregnant_woman_tone5: :man_with_gua_pi_mao: :man_with_gua_pi_mao_tone1: :man_with_gua_pi_mao_tone2: :man_with_gua_pi_mao_tone3: :man_with_gua_pi_mao_tone4: :man_with_gua_pi_mao_tone5: :person_frowning: :person_frowning_tone1: :person_frowning_tone2: :person_frowning_tone3: :person_frowning_tone4: :person_frowning_tone5: :person_with_pouting_face: :person_with_pouting_face_tone1: :person_with_pouting_face_tone2: :person_with_pouting_face_tone3: :person_with_pouting_face_tone4: :person_with_pouting_face_tone5: :no_good: :no_good_tone1: :no_good_tone2: :no_good_tone3: :no_good_tone4: :no_good_tone5: :ok_woman: :ok_woman_tone1: :ok_woman_tone2: :ok_woman_tone3: :ok_woman_tone4: :ok_woman_tone5: :information_desk_person: :information_desk_person_tone1: :information_desk_person_tone2: :information_desk_person_tone3: :information_desk_person_tone4: :information_desk_person_tone5: :raising_hand: :raising_hand_tone1: :raising_hand_tone2: :raising_hand_tone3: :raising_hand_tone4: :raising_hand_tone5: :bow: :bow_tone1: :bow_tone2: :bow_tone3: :bow_tone4: :bow_tone5: :face_palm: :face_palm_tone1: :face_palm_tone2: :face_palm_tone3: :face_palm_tone4: :face_palm_tone5: :shrug: :shrug_tone1: :shrug_tone2: :shrug_tone3: :shrug_tone4: :shrug_tone5: :massage: :massage_tone1: :massage_tone2: :massage_tone3: :massage_tone4: :massage_tone5: :haircut: :haircut_tone1: :haircut_tone2: :haircut_tone3: :haircut_tone4: :haircut_tone5: :walking: :walking_tone1: :walking_tone2: :walking_tone3: :walking_tone4: :walking_tone5: :runner: :runner_tone1: :runner_tone2: :runner_tone3: :runner_tone4: :runner_tone5: :dancer: :dancer_tone1: :dancer_tone2: :dancer_tone3: :dancer_tone4: :dancer_tone5: :man_dancing: :man_dancing_tone1: :man_dancing_tone2: :man_dancing_tone3: :man_dancing_tone4: :man_dancing_tone5: :dancers: :speaking_head: :bust_in_silhouette: :busts_in_silhouette: :couple: :two_men_holding_hands: :two_women_holding_hands: :couplekiss: :kiss_mm: :kiss_ww: :couple_with_heart: :couple_mm: :couple_ww: :family: :family_mwg: :family_mwgb: :family_mwbb: :family_mwgg: :family_mmb: :family_mmg: :family_mmgb: :family_mmbb: :family_mmgg: :family_wwb: :family_wwg: :family_wwgb: :family_wwbb: :family_wwgg: :muscle: :muscle_tone1: :muscle_tone2: :muscle_tone3: :muscle_tone4: :muscle_tone5: :selfie: :selfie_tone1: :selfie_tone2: :selfie_tone3: :selfie_tone4: :selfie_tone5: :point_left: :point_left_tone1: :point_left_tone2: :point_left_tone3: :point_left_tone4: :point_left_tone5: :point_right: :point_right_tone1: :point_right_tone2: :point_right_tone3: :point_right_tone4: :point_right_tone5: :point_up: :point_up_tone1: :point_up_tone2: :point_up_tone3: :point_up_tone4: :point_up_tone5: :point_up_2: :point_up_2_tone1: :point_up_2_tone2: :point_up_2_tone3: :point_up_2_tone4: :point_up_2_tone5: :middle_finger: :middle_finger_tone1: :middle_finger_tone2: :middle_finger_tone3: :middle_finger_tone4: :middle_finger_tone5: :point_down: :point_down_tone1: :point_down_tone2: :point_down_tone3: :point_down_tone4: :point_down_tone5: :v: :v_tone1: :v_tone2: :v_tone3: :v_tone4: :v_tone5: :fingers_crossed: :fingers_crossed_tone1: :fingers_crossed_tone2: :fingers_crossed_tone3: :fingers_crossed_tone4: :fingers_crossed_tone5: :vulcan: :vulcan_tone1: :vulcan_tone2: :vulcan_tone3: :vulcan_tone4: :vulcan_tone5: :metal: :metal_tone1: :metal_tone2: :metal_tone3: :metal_tone4: :metal_tone5: :call_me: :call_me_tone1: :call_me_tone2: :call_me_tone3: :call_me_tone4: :call_me_tone5: :hand_splayed: :hand_splayed_tone1: :hand_splayed_tone2: :hand_splayed_tone3: :hand_splayed_tone4: :hand_splayed_tone5: :raised_hand: :raised_hand_tone1: :raised_hand_tone2: :raised_hand_tone3: :raised_hand_tone4: :raised_hand_tone5: :ok_hand: :ok_hand_tone1: :ok_hand_tone2: :ok_hand_tone3: :ok_hand_tone4: :ok_hand_tone5: :thumbsup: :thumbsup_tone1: :thumbsup_tone2: :thumbsup_tone3: :thumbsup_tone4: :thumbsup_tone5: :thumbsdown: :thumbsdown_tone1: :thumbsdown_tone2: :thumbsdown_tone3: :thumbsdown_tone4: :thumbsdown_tone5: :fist: :fist_tone1: :fist_tone2: :fist_tone3: :fist_tone4: :fist_tone5: :punch: :punch_tone1: :punch_tone2: :punch_tone3: :punch_tone4: :punch_tone5: :left_facing_fist: :left_facing_fist_tone1: :left_facing_fist_tone2: :left_facing_fist_tone3: :left_facing_fist_tone4: :left_facing_fist_tone5: :right_facing_fist: :right_facing_fist_tone1: :right_facing_fist_tone2: :right_facing_fist_tone3: :right_facing_fist_tone4: :right_facing_fist_tone5: :raised_back_of_hand: :raised_back_of_hand_tone1: :raised_back_of_hand_tone2: :raised_back_of_hand_tone3: :raised_back_of_hand_tone4: :raised_back_of_hand_tone5: :wave: :wave_tone1: :wave_tone2: :wave_tone3: :wave_tone4: :wave_tone5: :clap: :clap_tone1: :clap_tone2: :clap_tone3: :clap_tone4: :clap_tone5: :writing_hand: :writing_hand_tone1: :writing_hand_tone2: :writing_hand_tone3: :writing_hand_tone4: :writing_hand_tone5: :open_hands: :open_hands_tone1: :open_hands_tone2: :open_hands_tone3: :open_hands_tone4: :open_hands_tone5: :raised_hands: :raised_hands_tone1: :raised_hands_tone2: :raised_hands_tone3: :raised_hands_tone4: :raised_hands_tone5: :pray: :pray_tone1: :pray_tone2: :pray_tone3: :pray_tone4: :pray_tone5: :handshake: :handshake_tone1: :handshake_tone2: :handshake_tone3: :handshake_tone4: :handshake_tone5: :nail_care: :nail_care_tone1: :nail_care_tone2: :nail_care_tone3: :nail_care_tone4: :nail_care_tone5: :ear: :ear_tone1: :ear_tone2: :ear_tone3: :ear_tone4: :ear_tone5: :nose: :nose_tone1: :nose_tone2: :nose_tone3: :nose_tone4: :nose_tone5: :footprints: :eyes: :eye: :tongue: :lips: :kiss: :zzz: :eyeglasses: :dark_sunglasses: :necktie: :shirt: :jeans: :dress: :kimono: :bikini: :womans_clothes: :purse: :handbag: :pouch: :school_satchel: :mans_shoe: :athletic_shoe: :high_heel: :sandal: :boot: :crown: :womans_hat: :tophat: :mortar_board: :helmet_with_cross: :lipstick: :ring: :closed_umbrella: :briefcase:".split(" ")
          },
          nature: {
            header: ":four_leaf_clover:",
            content: ":see_no_evil: :hear_no_evil: :speak_no_evil: :sweat_drops: :dash: :monkey_face: :monkey: :gorilla: :dog: :dog2: :poodle: :wolf: :fox: :cat: :cat2: :lion_face: :tiger: :tiger2: :leopard: :horse: :racehorse: :deer: :unicorn: :cow: :ox: :water_buffalo: :cow2: :pig: :pig2: :boar: :pig_nose: :ram: :sheep: :goat: :dromedary_camel: :camel: :elephant: :rhino: :mouse: :mouse2: :rat: :hamster: :rabbit: :rabbit2: :chipmunk: :bat: :bear: :koala: :panda_face: :feet: :turkey: :chicken: :rooster: :hatching_chick: :baby_chick: :hatched_chick: :bird: :penguin: :dove: :eagle: :duck: :owl: :frog: :crocodile: :turtle: :lizard: :snake: :dragon_face: :dragon: :whale: :whale2: :dolphin: :fish: :tropical_fish: :blowfish: :shark: :octopus: :shell: :crab: :shrimp: :squid: :butterfly: :snail: :bug: :ant: :bee: :beetle: :spider: :spider_web: :scorpion: :bouquet: :cherry_blossom: :rosette: :rose: :wilted_rose: :hibiscus: :sunflower: :blossom: :tulip: :seedling: :evergreen_tree: :deciduous_tree: :palm_tree: :cactus: :ear_of_rice: :herb: :shamrock: :four_leaf_clover: :maple_leaf: :fallen_leaf: :leaves: :mushroom: :chestnut: :earth_africa: :earth_americas: :earth_asia: :new_moon: :waxing_crescent_moon: :first_quarter_moon: :waxing_gibbous_moon: :full_moon: :waning_gibbous_moon: :last_quarter_moon: :waning_crescent_moon: :crescent_moon: :new_moon_with_face: :first_quarter_moon_with_face: :last_quarter_moon_with_face: :sunny: :full_moon_with_face: :sun_with_face: :star: :star2: :cloud: :partly_sunny: :thunder_cloud_rain: :white_sun_small_cloud: :white_sun_cloud: :white_sun_rain_cloud: :cloud_rain: :cloud_snow: :cloud_lightning: :cloud_tornado: :fog: :wind_blowing_face: :umbrella2: :umbrella: :zap: :snowflake: :snowman2: :snowman: :comet: :fire: :droplet: :ocean: :jack_o_lantern: :christmas_tree: :sparkles: :tanabata_tree: :bamboo:".split(" ")
          },
          food: {
            header: ":hamburger:",
            content: ":grapes: :melon: :watermelon: :tangerine: :lemon: :banana: :pineapple: :apple: :green_apple: :pear: :peach: :cherries: :strawberry: :kiwi: :tomato: :avocado: :eggplant: :potato: :carrot: :corn: :hot_pepper: :cucumber: :peanuts: :bread: :croissant: :french_bread: :pancakes: :cheese: :meat_on_bone: :poultry_leg: :bacon: :hamburger: :fries: :pizza: :hotdog: :taco: :burrito: :stuffed_flatbread: :egg: :cooking: :shallow_pan_of_food: :stew: :salad: :popcorn: :bento: :rice_cracker: :rice_ball: :rice: :curry: :ramen: :spaghetti: :sweet_potato: :oden: :sushi: :fried_shrimp: :fish_cake: :dango: :icecream: :shaved_ice: :ice_cream: :doughnut: :cookie: :birthday: :cake: :chocolate_bar: :candy: :lollipop: :custard: :honey_pot: :baby_bottle: :milk: :coffee: :tea: :sake: :champagne: :wine_glass: :cocktail: :tropical_drink: :beer: :beers: :champagne_glass: :tumbler_glass: :fork_knife_plate: :fork_and_knife: :spoon:".split(" ")
          },
          objects: {
            header: ":bulb:",
            content: ":skull_crossbones: :love_letter: :bomb: :hole: :shopping_bags: :prayer_beads: :gem: :knife: :amphora: :map: :barber: :frame_photo: :bellhop: :door: :sleeping_accommodation: :bed: :couch: :toilet: :shower: :bathtub: :hourglass: :hourglass_flowing_sand: :watch: :alarm_clock: :stopwatch: :timer: :clock: :thermometer: :beach_umbrella: :balloon: :tada: :confetti_ball: :dolls: :flags: :wind_chime: :ribbon: :gift: :joystick: :postal_horn: :microphone2: :level_slider: :control_knobs: :radio: :iphone: :calling: :telephone: :telephone_receiver: :pager: :fax: :battery: :electric_plug: :computer: :desktop: :printer: :keyboard: :mouse_three_button: :trackball: :minidisc: :floppy_disk: :cd: :dvd: :movie_camera: :film_frames: :projector: :tv: :camera: :camera_with_flash: :video_camera: :vhs: :mag: :mag_right: :microscope: :telescope: :satellite: :candle: :bulb: :flashlight: :izakaya_lantern: :notebook_with_decorative_cover: :closed_book: :book: :green_book: :blue_book: :orange_book: :books: :notebook: :ledger: :page_with_curl: :scroll: :page_facing_up: :newspaper: :newspaper2: :bookmark_tabs: :bookmark: :label: :moneybag: :yen: :dollar: :euro: :pound: :money_with_wings: :credit_card: :envelope: :e-mail: :incoming_envelope: :envelope_with_arrow: :outbox_tray: :inbox_tray: :package: :mailbox: :mailbox_closed: :mailbox_with_mail: :mailbox_with_no_mail: :postbox: :ballot_box: :pencil2: :black_nib: :pen_fountain: :pen_ballpoint: :paintbrush: :crayon: :pencil: :file_folder: :open_file_folder: :dividers: :date: :calendar: :notepad_spiral: :calendar_spiral: :card_index: :chart_with_upwards_trend: :chart_with_downwards_trend: :bar_chart: :clipboard: :pushpin: :round_pushpin: :paperclip: :paperclips: :straight_ruler: :triangular_ruler: :scissors: :card_box: :file_cabinet: :wastebasket: :lock: :unlock: :lock_with_ink_pen: :closed_lock_with_key: :key: :key2: :hammer: :pick: :hammer_pick: :tools: :dagger: :crossed_swords: :gun: :shield: :wrench: :nut_and_bolt: :gear: :compression: :alembic: :scales: :link: :chains: :syringe: :pill: :smoking: :coffin: :urn: :moyai: :oil: :crystal_ball: :shopping_cart: :triangular_flag_on_post: :crossed_flags: :flag_black: :flag_white: :rainbow_flag:".split(" ")
          },
          activity: {
            header: ":football:",
            content: ":space_invader: :levitate: :fencer: :horse_racing: :horse_racing_tone1: :horse_racing_tone2: :horse_racing_tone3: :horse_racing_tone4: :horse_racing_tone5: :skier: :snowboarder: :golfer: :surfer: :surfer_tone1: :surfer_tone2: :surfer_tone3: :surfer_tone4: :surfer_tone5: :rowboat: :rowboat_tone1: :rowboat_tone2: :rowboat_tone3: :rowboat_tone4: :rowboat_tone5: :swimmer: :swimmer_tone1: :swimmer_tone2: :swimmer_tone3: :swimmer_tone4: :swimmer_tone5: :basketball_player: :basketball_player_tone1: :basketball_player_tone2: :basketball_player_tone3: :basketball_player_tone4: :basketball_player_tone5: :lifter: :lifter_tone1: :lifter_tone2: :lifter_tone3: :lifter_tone4: :lifter_tone5: :bicyclist: :bicyclist_tone1: :bicyclist_tone2: :bicyclist_tone3: :bicyclist_tone4: :bicyclist_tone5: :mountain_bicyclist: :mountain_bicyclist_tone1: :mountain_bicyclist_tone2: :mountain_bicyclist_tone3: :mountain_bicyclist_tone4: :mountain_bicyclist_tone5: :cartwheel: :cartwheel_tone1: :cartwheel_tone2: :cartwheel_tone3: :cartwheel_tone4: :cartwheel_tone5: :wrestlers: :wrestlers_tone1: :wrestlers_tone2: :wrestlers_tone3: :wrestlers_tone4: :wrestlers_tone5: :water_polo: :water_polo_tone1: :water_polo_tone2: :water_polo_tone3: :water_polo_tone4: :water_polo_tone5: :handball: :handball_tone1: :handball_tone2: :handball_tone3: :handball_tone4: :handball_tone5: :juggling: :juggling_tone1: :juggling_tone2: :juggling_tone3: :juggling_tone4: :juggling_tone5: :circus_tent: :performing_arts: :art: :slot_machine: :bath: :bath_tone1: :bath_tone2: :bath_tone3: :bath_tone4: :bath_tone5: :reminder_ribbon: :tickets: :ticket: :military_medal: :trophy: :medal: :first_place: :second_place: :third_place: :soccer: :baseball: :basketball: :volleyball: :football: :rugby_football: :tennis: :8ball: :bowling: :cricket: :field_hockey: :hockey: :ping_pong: :badminton: :boxing_glove: :martial_arts_uniform: :goal: :dart: :golf: :ice_skate: :fishing_pole_and_fish: :running_shirt_with_sash: :ski: :video_game: :game_die: :musical_score: :microphone: :headphones: :saxophone: :guitar: :musical_keyboard: :trumpet: :violin: :drum: :clapper: :bow_and_arrow:".split(" ")
          },
          travel: {
            header: ":red_car:",
            content: ":race_car: :motorcycle: :japan: :mountain_snow: :mountain: :volcano: :mount_fuji: :camping: :beach: :desert: :island: :park: :stadium: :classical_building: :construction_site: :homes: :cityscape: :house_abandoned: :house: :house_with_garden: :office: :post_office: :european_post_office: :hospital: :bank: :hotel: :love_hotel: :convenience_store: :school: :department_store: :factory: :japanese_castle: :european_castle: :wedding: :tokyo_tower: :statue_of_liberty: :church: :mosque: :synagogue: :shinto_shrine: :kaaba: :fountain: :tent: :foggy: :night_with_stars: :sunrise_over_mountains: :sunrise: :city_dusk: :city_sunset: :bridge_at_night: :milky_way: :carousel_horse: :ferris_wheel: :roller_coaster: :steam_locomotive: :railway_car: :bullettrain_side: :bullettrain_front: :train2: :metro: :light_rail: :station: :tram: :monorail: :mountain_railway: :train: :bus: :oncoming_bus: :trolleybus: :minibus: :ambulance: :fire_engine: :police_car: :oncoming_police_car: :taxi: :oncoming_taxi: :red_car: :oncoming_automobile: :blue_car: :truck: :articulated_lorry: :tractor: :bike: :scooter: :motor_scooter: :busstop: :motorway: :railway_track: :fuelpump: :rotating_light: :traffic_light: :vertical_traffic_light: :construction: :anchor: :sailboat: :canoe: :speedboat: :cruise_ship: :ferry: :motorboat: :ship: :airplane: :airplane_small: :airplane_departure: :airplane_arriving: :seat: :helicopter: :suspension_railway: :mountain_cableway: :aerial_tramway: :rocket: :satellite_orbital: :stars: :rainbow: :fireworks: :sparkler: :rice_scene: :checkered_flag:".split(" ")
          },
          symbols: {
            header: ":hash:",
            content: ":100: :1234: :eye_in_speech_bubble: :cupid: :heart: :heartbeat: :broken_heart: :two_hearts: :sparkling_heart: :heartpulse: :blue_heart: :green_heart: :yellow_heart: :purple_heart: :black_heart: :gift_heart: :revolving_hearts: :heart_decoration: :heart_exclamation: :anger: :boom: :dizzy: :speech_balloon: :speech_left: :anger_right: :thought_balloon: :white_flower: :globe_with_meridians: :hotsprings: :octagonal_sign: :clock12: :clock1230: :clock1: :clock130: :clock2: :clock230: :clock3: :clock330: :clock4: :clock430: :clock5: :clock530: :clock6: :clock630: :clock7: :clock730: :clock8: :clock830: :clock9: :clock930: :clock10: :clock1030: :clock11: :clock1130: :cyclone: :spades: :hearts: :diamonds: :clubs: :black_joker: :mahjong: :flower_playing_cards: :mute: :speaker: :sound: :loud_sound: :loudspeaker: :mega: :bell: :no_bell: :musical_note: :notes: :chart: :currency_exchange: :heavy_dollar_sign: :atm: :put_litter_in_its_place: :potable_water: :wheelchair: :mens: :womens: :restroom: :baby_symbol: :wc: :passport_control: :customs: :baggage_claim: :left_luggage: :warning: :children_crossing: :no_entry: :no_entry_sign: :no_bicycles: :no_smoking: :do_not_litter: :non-potable_water: :no_pedestrians: :no_mobile_phones: :underage: :radioactive: :biohazard: :arrow_up: :arrow_upper_right: :arrow_right: :arrow_lower_right: :arrow_down: :arrow_lower_left: :arrow_left: :arrow_upper_left: :arrow_up_down: :left_right_arrow: :leftwards_arrow_with_hook: :arrow_right_hook: :arrow_heading_up: :arrow_heading_down: :arrows_clockwise: :arrows_counterclockwise: :back: :end: :on: :soon: :top: :place_of_worship: :atom: :om_symbol: :star_of_david: :wheel_of_dharma: :yin_yang: :cross: :orthodox_cross: :star_and_crescent: :peace: :menorah: :six_pointed_star: :aries: :taurus: :gemini: :cancer: :leo: :virgo: :libra: :scorpius: :sagittarius: :capricorn: :aquarius: :pisces: :ophiuchus: :twisted_rightwards_arrows: :repeat: :repeat_one: :arrow_forward: :fast_forward: :track_next: :play_pause: :arrow_backward: :rewind: :track_previous: :arrow_up_small: :arrow_double_up: :arrow_down_small: :arrow_double_down: :pause_button: :stop_button: :record_button: :eject: :cinema: :low_brightness: :high_brightness: :signal_strength: :vibration_mode: :mobile_phone_off: :recycle: :name_badge: :fleur-de-lis: :beginner: :trident: :o: :white_check_mark: :ballot_box_with_check: :heavy_check_mark: :heavy_multiplication_x: :x: :negative_squared_cross_mark: :heavy_plus_sign: :heavy_minus_sign: :heavy_division_sign: :curly_loop: :loop: :part_alternation_mark: :eight_spoked_asterisk: :eight_pointed_black_star: :sparkle: :bangbang: :interrobang: :question: :grey_question: :grey_exclamation: :exclamation: :wavy_dash: :copyright: :registered: :tm: :hash: :asterisk: :zero: :one: :two: :three: :four: :five: :six: :seven: :eight: :nine: :keycap_ten: :capital_abcd: :abcd: :symbols: :abc: :a: :ab: :b: :cl: :cool: :free: :information_source: :id: :m: :new: :ng: :o2: :ok: :parking: :sos: :up: :vs: :koko: :sa: :u6708: :u6709: :u6307: :ideograph_advantage: :u5272: :u7121: :u7981: :accept: :u7533: :u5408: :u7a7a: :congratulations: :secret: :u55b6: :u6e80: :black_small_square: :white_small_square: :white_medium_square: :black_medium_square: :white_medium_small_square: :black_medium_small_square: :black_large_square: :white_large_square: :large_orange_diamond: :large_blue_diamond: :small_orange_diamond: :small_blue_diamond: :small_red_triangle: :small_red_triangle_down: :diamond_shape_with_a_dot_inside: :radio_button: :black_square_button: :white_square_button: :white_circle: :black_circle: :red_circle: :blue_circle: :regional_indicator_z: :regional_indicator_y: :regional_indicator_x: :regional_indicator_w: :regional_indicator_v: :regional_indicator_u: :regional_indicator_t: :regional_indicator_s: :regional_indicator_r: :regional_indicator_q: :regional_indicator_p: :regional_indicator_o: :regional_indicator_n: :regional_indicator_m: :regional_indicator_l: :regional_indicator_k: :regional_indicator_j: :regional_indicator_i: :regional_indicator_h: :regional_indicator_g: :regional_indicator_f: :regional_indicator_e: :regional_indicator_d: :regional_indicator_c: :regional_indicator_b: :regional_indicator_a:".split(" ")
          },
          flags: {
            header: ":flag_black:",
            content: ":flag_ac: :flag_ad: :flag_ae: :flag_af: :flag_ag: :flag_ai: :flag_al: :flag_am: :flag_ao: :flag_aq: :flag_ar: :flag_as: :flag_at: :flag_au: :flag_aw: :flag_ax: :flag_az: :flag_ba: :flag_bb: :flag_bd: :flag_be: :flag_bf: :flag_bg: :flag_bh: :flag_bi: :flag_bj: :flag_bl: :flag_bm: :flag_bn: :flag_bo: :flag_bq: :flag_br: :flag_bs: :flag_bt: :flag_bv: :flag_bw: :flag_by: :flag_bz: :flag_ca: :flag_cc: :flag_cd: :flag_cf: :flag_cg: :flag_ch: :flag_ci: :flag_ck: :flag_cl: :flag_cm: :flag_cn: :flag_co: :flag_cp: :flag_cr: :flag_cu: :flag_cv: :flag_cw: :flag_cx: :flag_cy: :flag_cz: :flag_de: :flag_dg: :flag_dj: :flag_dk: :flag_dm: :flag_do: :flag_dz: :flag_ea: :flag_ec: :flag_ee: :flag_eg: :flag_eh: :flag_er: :flag_es: :flag_et: :flag_eu: :flag_fi: :flag_fj: :flag_fk: :flag_fm: :flag_fo: :flag_fr: :flag_ga: :flag_gb: :flag_gd: :flag_ge: :flag_gf: :flag_gg: :flag_gh: :flag_gi: :flag_gl: :flag_gm: :flag_gn: :flag_gp: :flag_gq: :flag_gr: :flag_gs: :flag_gt: :flag_gu: :flag_gw: :flag_gy: :flag_hk: :flag_hm: :flag_hn: :flag_hr: :flag_ht: :flag_hu: :flag_ic: :flag_id: :flag_ie: :flag_il: :flag_im: :flag_in: :flag_io: :flag_iq: :flag_ir: :flag_is: :flag_it: :flag_je: :flag_jm: :flag_jo: :flag_jp: :flag_ke: :flag_kg: :flag_kh: :flag_ki: :flag_km: :flag_kn: :flag_kp: :flag_kr: :flag_kw: :flag_ky: :flag_kz: :flag_la: :flag_lb: :flag_lc: :flag_li: :flag_lk: :flag_lr: :flag_ls: :flag_lt: :flag_lu: :flag_lv: :flag_ly: :flag_ma: :flag_mc: :flag_md: :flag_me: :flag_mf: :flag_mg: :flag_mh: :flag_mk: :flag_ml: :flag_mm: :flag_mn: :flag_mo: :flag_mp: :flag_mq: :flag_mr: :flag_ms: :flag_mt: :flag_mu: :flag_mv: :flag_mw: :flag_mx: :flag_my: :flag_mz: :flag_na: :flag_nc: :flag_ne: :flag_nf: :flag_ng: :flag_ni: :flag_nl: :flag_no: :flag_np: :flag_nr: :flag_nu: :flag_nz: :flag_om: :flag_pa: :flag_pe: :flag_pf: :flag_pg: :flag_ph: :flag_pk: :flag_pl: :flag_pm: :flag_pn: :flag_pr: :flag_ps: :flag_pt: :flag_pw: :flag_py: :flag_qa: :flag_re: :flag_ro: :flag_rs: :flag_ru: :flag_rw: :flag_sa: :flag_sb: :flag_sc: :flag_sd: :flag_se: :flag_sg: :flag_sh: :flag_si: :flag_sj: :flag_sk: :flag_sl: :flag_sm: :flag_sn: :flag_so: :flag_sr: :flag_ss: :flag_st: :flag_sv: :flag_sx: :flag_sy: :flag_sz: :flag_ta: :flag_tc: :flag_td: :flag_tf: :flag_tg: :flag_th: :flag_tj: :flag_tk: :flag_tl: :flag_tm: :flag_tn: :flag_to: :flag_tr: :flag_tt: :flag_tv: :flag_tw: :flag_tz: :flag_ua: :flag_ug: :flag_um: :flag_us: :flag_uy: :flag_uz: :flag_va: :flag_vc: :flag_ve: :flag_vg: :flag_vi: :flag_vn: :flag_vu: :flag_wf: :flag_ws: :flag_xk: :flag_ye: :flag_yt: :flag_za: :flag_zm: :flag_zw:".split(" ")
          }
        },
        gb = function (a) {
          var b = a.getElementsByTagName("head")[0], d = a.createElement("script");
          a = a.createElement("link");
          d.type = "text/javascript";
          d.src = "https://cdn.jsdelivr.net/emojione/2.2.7/lib/js/emojione.min.js";
          d.async = !0;
          a.type = "text/css";
          a.rel = "stylesheet";
          a.href = "https://cdn.jsdelivr.net/emojione/2.2.7/assets/css/emojione.min.css";
          b.appendChild(a);
          b.appendChild(d);
          Ta()
        }, Ta = function () {
          var a;
          clearTimeout(xa);
          f.isPopup ? a = g : (a = y && f.isPopup ? b.viewHandler.chatContainer.elementId : e.container.elementId, a = document.getElementById(a),
            a = a.contentWindow || a.contentDocument || a);
          "undefined" === typeof a.emojione ? (ta++, 20 === ta ? (clearTimeout(xa), ta = 0) : xa = setTimeout(function () {
            Ta()
          }, 20)) : (clearTimeout(xa), ta = 0, H = a.emojione, H.ascii = !0, Ea = H.shortnames.replace(/\\\+/g, "+").split("|"))
        }, Ua = function (a) {
          var c, d = "", k = t["emoji-selection"], s = t["emoji-tab-select"];
          Da && Da === a ? n.addClass(a, "showWithFade") : (n.addClass(a, "showWithFade"), "undefined" === typeof H ? 20 === ta ? a.innerHTML = b.languageParser.translate("chat", "emoji_error_load") : (0 === ta && Ta(), setTimeout(function () {
              Ua(a)
            },
            20)) : (clearTimeout(xa), Da = a, setTimeout(function () {
            Object.keys(Sa).forEach(function (a) {
              d += s.replace(/__ID__/, a).replace(/__IMAGE__/, H.shortnameToImage(Sa[a].header)).replace(/__IS_ACTIVE__/, "")
            });
            k = k.replace(/__TAB_LIST__/, d);
            a.innerHTML = k;
            c = n.getElementsByClassName(a, "open-tab");
            Wa(a, {target: c[0]});
            for (var f = 0; f < c.length; f++) b.eventHandler.listen(c[f], b.viewHandler.clickEvent, function (b) {
              b.stopPropagation();
              Wa(a, b)
            }, c[f].id + "OpenTab")
          })))
        }, Wa = function (a, c) {
          var d, k, s, g = "", h = t["emoji-tab-pane"], l = t["emoji-list"];
          k = n.getElementsByClassName(a, "open-tab");
          if (s = "max" !== r.chatWindowState() && b.viewHandler.messagePreview ? b.viewHandler.messagePreview.container.getElementById("tab-content") : y && f.isPopup ? b.viewHandler.chatContainer.getElementById("tab-content") : e.container.getElementById("tab-content")) {
            d = "open-tab" === c.target.className ? c.target : c.target.offsetParent;
            d = d.id;
            for (var m = 0; m < k.length; m++) k[m].className = k[m].id === d ? "open-tab active" : "open-tab";
            if ("search" === d) s.innerHTML = t["emoji-search-pane"], s = y && f.isPopup ?
              b.viewHandler.chatContainer.getElementById("search-emoji") : e.container.getElementById("search-emoji"), b.eventHandler.listen(s, "keyup", function (a) {
              var c = b.eventHandler.getTargetElement(a).value.trim().toLowerCase(), d = t["emoji-list"], k = "";
              if ((a = y && f.isPopup ? b.viewHandler.chatContainer.getElementById("search-list") : e.container.getElementById("search-list")) && Ea) {
                if (c) for (var s = 0; s < Ea.length; s++) {
                  var g = Ea[s];
                  -1 !== g.indexOf(c) && (k += d.replace(/__IMAGE__/, H.shortnameToImage(g)).replace(/__SHORTNAME__/g,
                    g))
                }
                a.innerHTML = k;
                Xa()
              }
            }, "searchEmojiKeyup"); else if (k = Sa[d]) k.content.forEach(function (a) {
              g += l.replace(/__IMAGE__/, H.shortnameToImage(a)).replace(/__SHORTNAME__/g, a)
            }), s.innerHTML = h.replace(/__EMOJIS__/, g).replace(/__ID__/, "people"), Xa()
          }
        }, Xa = function () {
          for (var a = n.getElementsByClassName(Da, "emoji-select"), c = 0; c < a.length; c++) b.eventHandler.listen(a[c], b.viewHandler.clickEvent, function (a) {
            a = b.eventHandler.getTargetElement(a);
            a = H.shortnameToUnicode(a.title);
            y && f.isPopup ? b.viewHandler.addEmojiToInput(a) :
              "max" === r.chatWindowState() || f.isPopup ? e.addEmojiToInput(a) : b.viewHandler.messagePreview && b.viewHandler.messagePreview.addEmojiToInput(a)
          }, a[c].id + "SelectEmoji")
        }, ua = function () {
          this.chatWindowStates = {min: !0, max: !0};
          this.selfOrigin = this.socket = null;
          this.forceDisconnected = this.banned = this.ready = this.disconnect = !1;
          this.clearRegisterRetryTimeout = null
        };
      ua.prototype = new EventEmitter;
      ua.prototype.init = function () {
        var a, c = this, d = (new Date).getTime();
        this.forceDisconnected = this.disconnect = u.connected = !1;
        this.removeAllListeners();
        this.socket && (this.socket.removeAllListeners(), this.socket.disconnect());
        null === G && ea.handleWindowId();
        null !== G && "null" !== G || b.loggingHandler.logIncident("windowId is null", {windowId: G, type: typeof G});
        a = {
          k: r.sessionKey,
          u: D.uuid,
          uv: D.uuidVer,
          a: L.pageId,
          cver: w.chatVersion,
          pop: f.isPopup,
          w: G,
          jv: r.currentVersion,
          asver: r.pageStatusVersion,
          ust: $_Tawk_Unstable,
          p: f.isPopup ? L.pageName() : document.title,
          r: document.referrer
        };
        a.p && 255 < a.p.length && (a.p = a.p.substring(0, 255));
        this.socket = new $__TawkSocket("wss://" +
          r.visitorSocketServer + "/", {engineIo: $__TawkEngine, path: "/s", query: a});
        this.socket.on("disconnect", function () {
          c.disconnectHandler()
        });
        this.socket.on("error", function (a) {
          var d, f = "socket on error";
          if (a instanceof Error) {
            d = {toString: a.toString(), stack: a.stack, lineNumber: a.lineNumber, fileName: a.fileName};
            if (b.loggingHandler.unloading && -1 === d.toString.indexOf("post")) return;
            "TransportError" === a.type && (d.description = a.description);
            -1 !== d.toString.indexOf("post") && (f = "socket post error")
          } else d = a;
          b.loggingHandler.logIncident(f,
            d);
          c.socket.disconnect();
          c.disconnectHandler()
        });
        this.socket.on("connect", function () {
          c.disconnect = !1
        });
        this.socket.on("ready", function (a, s, f) {
          if (!b) return c.disconnectSocket();
          c.selfOrigin = a;
          u.connected = !0;
          c.ready || (u.loaded = !0, "undefined" !== typeof $_Tawk_LoadStart && b.loggingHandler.logPerformance({
            socket: (new Date).getTime() - d,
            register: h.registerTime,
            widget: (new Date).getTime() - $_Tawk_LoadStart,
            script: (new Date).getTime() - V,
            download: V - $_Tawk_LoadStart
          }));
          c.ready = !0;
          try {
            b.eventEmitter.emit("syncConversation",
              s)
          } catch (e) {
            q.handleError("Unable to emit syncConversation", e.fileName, e.lineNumber, e.stack)
          }
          try {
            b.eventEmitter.emit("pageStatusUpdated", f)
          } catch (g) {
            q.handleError("Unable to emit pageStatusUpdated", g.fileName, g.lineNumber, g.stack)
          }
          try {
            b.eventEmitter.emit("socketReady")
          } catch (n) {
            q.handleError("Unable to emit socketReady", n.fileName, n.lineNumber, n.stack)
          }
          clearTimeout(c.clearRegisterRetryTimeout);
          c.clearRegisterRetryTimeout = setTimeout(function () {
            c.disconnect || h.resetRetryCount();
            c.clearRegisterRetryTimeout =
              null
          }, 5E3)
        });
        this.socket.on("remoteDisconnect", function (a) {
          a = a || {};
          if ("BANNED" === a.msg) {
            c.banned = !0;
            try {
              c.socket.disconnect()
            } catch (d) {
              q.handleError("Unable to emit disconnect socket on ban", d.fileName, d.lineNumber, d.stack)
            }
            b.main.hideWidget()
          } else c.socket.disconnect(), c.disconnectHandler()
        });
        this.addEventListeners()
      };
      ua.prototype.addEventListeners = function () {
        function a(a, c) {
          try {
            b.eventEmitter.emit(a, c)
          } catch (f) {
            q.handleError("Unable to emit socket event : " + a + " with data : " + JSON.stringify(c), f.fileName,
              f.lineNumber, f.stack)
          }
        }

        var c = this;
        this.socket.on("visitorChatWindowState", function (b) {
          c.selfOrigin !== b.origin && a("windowStateUpdated", b)
        });
        this.socket.on("visitorDataUpdate", function (b) {
          c.selfOrigin !== b.origin && a("visitorDataUpdate", b)
        });
        this.socket.on("visitorSound", function (a) {
          a.origin !== c.selfOrigin && b.chatHandler.toggleSound(!!a.sdo)
        });
        this.socket.on("visitorMessage", function (b) {
          c.selfOrigin !== b.origin && a("incomingMessage", b)
        });
        this.socket.on("visitorConversationPresenceUpdate", function (b) {
          a("incomingMessage",
            b)
        });
        this.socket.on("pageStatus", function (b) {
          a("pageStatusUpdated", b)
        });
        this.socket.on("newCriticalUpdate", function (a) {
          a = a || 0;
          a != r.criticalVersion && b.main.criticalRefresh(a, !0)
        });
        this.socket.on("newUnstableCriticalUpdate", function (a) {
          a = a || 0;
          $_Tawk_Unstable && a != r.criticalVersion && b.main.criticalRefresh(a, !0)
        });
        this.socket.on("visitorPopupFocus", function (b) {
          b = b || {};
          a("visitorPopupFocus", !!b.hasFocus)
        });
        this.socket.on("chatBubbleClosed", function (b) {
          b.origin !== c.selfOrigin && a("chatBubbleClosed", !0)
        });
        this.socket.on("agentIsTyping", function (b) {
          a("agentIsTyping", b)
        });
        this.socket.on("agentStopedTyping", function (b) {
          a("agentStopedTyping", b)
        });
        this.socket.on("pageDisable", function () {
          a("removeWidget")
        });
        this.socket.on("widgetScheduleUpdate", function (b) {
          a("scheduleUpdate", b)
        });
        this.socket.on("uploadProgress", function (b) {
          a("fileUploadProgress", b)
        });
        this.socket.on("uploadFinished", function (b) {
          a("fileUploadFinished", b)
        });
        this.socket.on("uploadError", function (b) {
          a("fileUploadError", b)
        });
        this.socket.on("vCallStatus",
          function (b) {
            a("webrtcCallStatus", b)
          });
        this.socket.on("visitorChatSeen", function (b) {
          a("visitorChatSeen", b)
        });
        this.socket.on("visitorChatDismiss", function (b) {
          a("visitorChatDismiss", b)
        });
        this.socket.on("visitorTagsUpdate", function (b) {
          a("visitorTagsUpdate", b)
        });
        this.on("notifyWindowState", function (a) {
          c.chatWindowStates[a] && c.socket.send("chatWindowState", a)
        });
        this.on("notifyChatBubbleClosed", function () {
          c.socket.send("chatBubbleClose")
        });
        this.on("notifyMessagePreview", function (a) {
          c.socket.send("messagePreview",
            a, (new Date).getTime())
        });
        this.on("sendChatMessage", function (a, b) {
          c.socket.send("chatMessage", a, b)
        });
        this.on("notifyNameChange", function (a, b) {
          c.socket.send("saveNameChangeForm", a, b)
        });
        this.on("notifyEmailTranscript", function (a, b) {
          c.socket.send("saveTranscriptEmailForm", a, b)
        });
        this.on("notifyEndChatTranscript", function (a, b) {
          c.socket.send("sendTranscript", a, b)
        });
        this.on("notifyOfflineMessage", function (a, b) {
          c.socket.send("service", "visitor-chat", "/v1/visitor/offline-form", a, b)
        });
        this.on("visitorChatSeen",
          function (a, b) {
            this.socket.send("service", "visitor-chat", "/v1/visitor/messages-seen", a, b)
          });
        this.on("visitorChatDismiss", function (a, b) {
          this.socket.send("service", "visitor-chat", "/v1/visitor/dismiss-preview", a, b)
        });
        this.on("notifyPrechat", function (a, b) {
          c.socket.send("savePrechatForm", a, b)
        });
        this.on("setRating", function (a) {
          c.socket.send("visitorRating", a)
        });
        this.on("toggleSound", function (a) {
          c.socket.send("visitorSound", a)
        });
        this.on("notifyWidgetResized", function () {
          c.socket.send("chatWindowResize")
        });
        this.on("popupOnFocus", function (a) {
          c.socket.send("visitorPopupFocus", a)
        });
        this.on("notifySocketStatusUpdate", function (a) {
          c.socket.send("socketStatusUpdate", a)
        });
        this.on("saveForeignKey", function (a, b) {
          c.socket.send("saveForeignKey", a, b)
        });
        this.on("saveConversion", function (a, b) {
          c.socket.send("saveConversion", a, b)
        });
        this.on("submitMultipleOptions", function (a, b) {
          c.socket.send("saveMultipleOptions", a, b)
        });
        this.on("endVisitorChat", function (a, b) {
          c.socket.send("endChat", b)
        });
        this.on("fileUploadMessage", function (a,
                                               b) {
          c.socket.send("fileUploadMessage", a, b)
        });
        this.on("addEvent", function (a, b) {
          c.socket.send("addEvent", a, b)
        });
        this.on("setAttributes", function (a, b) {
          c.socket.send("setAttributes", a, b)
        });
        this.on("addTags", function (a, b) {
          c.socket.send("addTags", a, b)
        });
        this.on("removeTags", function (a, b) {
          c.socket.send("removeTags", a, b)
        });
        this.on("getWebRTCToken", function (a, b) {
          this.socket.send("service", "webrtc", "/v1/vcall/init/visitor", a, b)
        });
        this.on("getCallStatus", function (a, b) {
          this.socket.send("service", "webrtc", "/v1/vcall/status/visitor",
            a, b)
        });
        this.on("declineCall", function (a, b) {
          this.socket.send("service", "webrtc", "/v1/vcall/reject/visitor", a, b)
        })
      };
      ua.prototype.disconnectSocket = function () {
        this.forceDisconnected = !0;
        this.socket && (this.socket.disconnect(), this.disconnectHandler())
      };
      ua.prototype.disconnectHandler = function () {
        u.connected = !1;
        this.socket.removeAllListeners();
        this.removeAllListeners();
        b.scheduler.cleanUp();
        this.banned || (this.forceDisconnected || this.disconnect) || (this.disconnect = !0, h.retryRegister())
      };
      var C = function (a, b, d,
                        k, f) {
        var e = this;
        this.elementId = a || "";
        this.style = b || "";
        this.tagName = k || "div";
        this.childViews = [];
        this.template = a && t[a] ? t[a] : "";
        this.elementReferrer = null;
        this.documentRef = f || document;
        this.attributes = {};
        this.isVisible = !1;
        this.classNames = [];
        "iframe" === k && (this.isIframe = !0);
        this.elementId && (this.attributes.id = this.elementId);
        d && Object.keys(d).forEach(function (a) {
          e.attributes[a] = d[a]
        })
      };
      C.prototype.addChildViews = function (a) {
        var b = this;
        a.forEach(function (a) {
          b.childViews.push(a)
        })
      };
      C.prototype.buildView = function (a) {
        this.documentRef =
          a || this.documentRef;
        this.elementReferrer = n.createElement(this.documentRef, this.tagName, this.attributes, this.style, this.template);
        this.elementReferrer.className += this.classNames.join(" ");
        this.isIframe || this.buildChildViews();
        return this.elementReferrer
      };
      C.prototype.buildChildViews = function (a) {
        var b = this;
        this.childViews.length && (this.documentRef = a || this.documentRef, this.childViews.forEach(function (a) {
          b.elementReferrer.appendChild(a.buildView(b.documentRef))
        }))
      };
      C.prototype.restyle = function (a, b) {
        b &&
        (-1 === b.indexOf("!important") && (b += " !important"), this.elementReferrer ? this.elementReferrer.style.cssText += ";" + a + ":" + b : this.style += ";" + a + ":" + b)
      };
      C.prototype.attachUserEventListener = function (a, c, d, k) {
        var f;
        if (f = d ? this.getElementById(d) : this.elementReferrer) d = a.split(" "), 1 < d.length ? d.forEach(function (a) {
          b.eventHandler.listen(f, a, c, a + k)
        }) : b.eventHandler.listen(f, a, c, k)
      };
      C.prototype.toggle = function () {
        this.isVisible ? (this.restyle("display", "none !important"), this.isVisible = !1) : (this.restyle("display",
          "block !important"), this.isVisible = !0)
      };
      C.prototype.getElementById = function (a) {
        return this.elementReferrer ? this.documentRef.getElementById(a) : null
      };
      C.prototype.insertHtml = function (a) {
        this.elementReferrer.innerHTML = a
      };
      C.prototype.clear = function () {
        this.elementReferrer && (this.elementReferrer.outerHTML = "", this.elementReferrer = null)
      };
      C.prototype.addClass = function (a) {
        -1 === this.classNames.indexOf(a) && (this.classNames.push(a), this.elementReferrer && (this.elementReferrer.className = this.classNames.join(" ")))
      };
      C.prototype.removeClass = function (a) {
        for (; -1 !== this.classNames.indexOf(a);) this.classNames.splice(this.classNames.indexOf(a), 1);
        this.elementReferrer && (this.elementReferrer.className = this.classNames.join(" "))
      };
      C.prototype.hide = function () {
        this.restyle("display", "none !important");
        this.isVisible = !1
      };
      C.prototype.show = function () {
        this.restyle("display", "block !important");
        this.isVisible = !0
      };
      C.prototype.insertCssFile = function (a, c) {
        var d = this.documentRef.getElementsByTagName("head")[0], k = this.documentRef.createDocumentFragment(),
          f = n.createElement(this.documentRef, "style", {type: "text/css"}),
          e = this.documentRef.createTextNode(c ? a : b.ResetStyle + "" + a);
        k.appendChild(f);
        d.appendChild(k);
        f.styleSheet ? f.styleSheet.cssText = e.nodeValue : f.appendChild(e)
      };
      C.prototype.massRestyle = function (a) {
        for (var b in a) a.hasOwnProperty(b) && this.restyle(b, a[b])
      };
      var Q = function () {
        C.apply(this, arguments)
      };
      Q.prototype = new C;
      Q.prototype.constructor = Q;
      Q.prototype.parent = C.prototype;
      Q.prototype.buildIframe = function (a, b) {
        this.documentRef = n.getDocument(this.elementReferrer);
        this.documentRef.open();
        this.documentRef.writeln('<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" /></head><body></body></html>');
        this.documentRef.close();
        b || n.updateFontStylesheet(this.documentRef);
        this.insertCssFile(a);
        this.insertContent();
        this.buildChildViews()
      };
      Q.prototype.insertContent = function () {
        this.documentRef.body.innerHTML = this.template
      };
      Q.prototype.buildChildViews = function () {
        var a = this;
        this.childViews.forEach(function (b) {
          a.documentRef.body.appendChild(b.buildView(a.documentRef))
        })
      };
      var ha = function (a) {
        this.template = (this.elementId = (this.formData = a) ? a.id : null) && t[this.elementId] ? t[this.elementId] : "";
        this.elementReferrer = null;
        this.documentRef = document;
        this.attributes = {className: "form"};
        this.elementId && (this.attributes.id = this.elementId)
      };
      ha.prototype.buildForm = function () {
        this.formData.additionalFields = [];
        this.insertTranslatedTexts()
      };
      ha.prototype.buildView = function (a) {
        this.documentRef = a || this.documentRef;
        return this.elementReferrer = n.createElement(this.documentRef, "div", this.attributes, null, this.template)
      };
      ha.prototype.addPlaceholderText = function (a, c, d, k, f) {
        f = RegExp("__" + a.toUpperCase() + "_PLACEHOLDER__", "gm");
        a.toUpperCase();
        a = RegExp("__" + a.toUpperCase() + "__", "gm");
        var e = b.languageParser.translate("form", d + "Placeholder");
        ga || c || (c = e);
        e && e !== d + "Placeholder" || (e = c, c = "");
        if (k) return n.escapeTemplateReplacement(k, [{
          placeholder: f,
          textReplace: e
        }, {placeholder: a, textReplace: c}]);
        this.template = n.escapeTemplateReplacement(this.template, [{placeholder: f, textReplace: e}, {
          placeholder: a,
          textReplace: c
        }])
      };
      ha.prototype.addPlaceholderHandler = function () {
        var a, c = this;
        ga || (a = this.formData.fields) && a.forEach(function (a) {
          var k, f, e;
          "input" !== a.type || a.isEnabled && !a.isEnabled() || (e = a.getValue ? a.getValue() : "", "input" === a.type && n.isArray(e) ? e.forEach(function (b, e) {
            k = c.documentRef.getElementById(a.fieldName + e);
            f = b;
            n.togglePlaceholderText(k, f, a.fieldName +
              e);
            "textarea" !== k.tagName.toLowerCase() || n.trim(k.value) || (k.value = f)
          }) : a.hiddenIE8 || (k = c.documentRef.getElementById(a.fieldName + "Field"), f = b.languageParser.translate("form", a.languageKey + "Placeholder"), n.togglePlaceholderText(k, f, a.fieldName + "Field"), "textarea" !== k.tagName.toLowerCase() || n.trim(k.value) || (k.value = f)))
        })
      };
      ha.prototype.insertTranslatedTexts = function () {
        var a = this, c = "";
        (this.formData.fields || []).forEach(function (b) {
          var c;
          c = b.getValue ? b.getValue() : "";
          a.addPlaceholderText(b.fieldName,
            c, b.languageKey, null, b.labelText)
        });
        this.template = n.escapeTemplateReplacement(this.template, [{
          placeholder: "__TITLE__",
          textReplace: this.formData.getTitle ? this.formData.getTitle() : b.languageParser.translate("form", this.formData.title)
        }, {
          placeholder: "__OVERLAY__",
          textReplace: b.languageParser.translate("overlay", this.formData.overlayMessage)
        }, {placeholder: "__CANCEL_BUTTON__", textReplace: b.languageParser.translate("form", "CancelButton")}, {
          placeholder: "__CLOSE_BUTTON__", textReplace: b.languageParser.translate("form",
            "CloseButton")
        }, {
          placeholder: "__SAVE_BUTTON__",
          textReplace: b.languageParser.translate("form", "SaveButton")
        }, {
          placeholder: "__SEND_BUTTON__",
          textReplace: b.languageParser.translate("form", "SendButton")
        }, {
          placeholder: "__SUBMIT_BUTTON__",
          textReplace: b.languageParser.translate("form", "SubmitButton")
        }, {
          placeholder: "__START_CHAT_BUTTON__",
          textReplace: b.languageParser.translate("form", "StartChatButton")
        }, {placeholder: "__END_CHAT_BUTTON__", textReplace: b.languageParser.translate("rollover", "end")}, {
          placeholder: "__SUBMITTING_INDICATOR__",
          textReplace: b.languageParser.translate("form", "SubmittingProcess")
        }, {
          placeholder: "__ENDING_INDICATOR__",
          textReplace: b.languageParser.translate("form", "EndingProcess")
        }, {
          placeholder: "__SENDING_INDICATOR__",
          textReplace: b.languageParser.translate("form", "SendingProcess")
        }, {
          placeholder: "__SAVING_INDICATOR__",
          textReplace: b.languageParser.translate("form", "SavingProcess")
        }, {
          placeholder: "__EMAIL_TRANSCRIPT_TO__",
          textReplace: b.languageParser.translate("form", "EmailTranscriptTo")
        }, {
          placeholder: "__OFFLINE_MESSAGE_SUCCESSFULY_SENT__",
          textReplace: b.languageParser.translate("form", "OfflineMessageSent")
        }, {
          placeholder: "__SEND_AGAIN__",
          textReplace: b.languageParser.translate("form", "sendAgain")
        }, {
          placeholder: /__STATUS__/gm,
          textReplace: b.languageParser.translate("form", "saving")
        }, {
          placeholder: "__CHANGE_NAME__",
          textReplace: b.languageParser.translate("menu", "change_name")
        }, {
          placeholder: /__SAFARI__/gm,
          textReplace: "safari" === N ? "safari-fix" : ""
        }, {placeholder: /__SKIP_BUTTON__/, textReplace: b.languageParser.translate("chat", "skip")}, {
          placeholder: "__START_CHAT__",
          textReplace: b.languageParser.translate("chat", "newChat")
        }, {
          placeholder: "__EMAIL_TRANCRIPT__",
          textReplace: b.languageParser.translate("rollover", "emailTranscriptOption")
        }, {placeholder: "__END_CHAT_MESSAGE__", textReplace: b.languageParser.translate("form", "EndChatMessage")}]);
        this.template = "safari" === N || "chrome" === N || "firefox" === N || "mozilla" === N || T && 8 <= O ? this.template.replace("__NON_MODERN__", "") : this.template.replace("__NON_MODERN__", "other-fix");
        y && (c = n.escapeTemplateReplacement(t["close-form-button"],
          [{placeholder: "__CLOSE_BUTTON__", textReplace: b.languageParser.translate("form", "CloseButton")}]));
        this.template = n.escapeTemplateReplacement(this.template, [{
          placeholder: "__CLOSE_BUTTON_CONTAINER__",
          textReplace: c
        }]);
        this.formData.customButtons && (this.template = n.escapeTemplateReplacement(this.template, this.formData.customButtons()))
      };
      var Y = function (a, b) {
        ha.apply(this, [a]);
        this.formName = b;
        this.isFormRequired = !1
      };
      Y.prototype = new ha;
      Y.prototype.constructor = Y;
      Y.prototype.parent = ha.prototype;
      Y.prototype.buildForm =
        function () {
          var a, c = [];
          a = "preChatForm" == this.formName ? "prechat" : "offline";
          this.formData.additionalFields = [];
          this.insertTranslatedTexts();
          if (null === this.formData.dynamicFields) {
            for (var d = 0, k = f[a + "Options"].fields.length; d < k; d++) {
              var s = {}, e = f[a + "Options"].fields[d];
              e.id = a + d;
              s.label = e.label;
              s.instantValidation = !1;
              s.isRequired = e.isRequired;
              s.fieldName = a + d;
              s.fieldType = e.type;
              s.validation = "isValidString";
              "name" === e.type ? (s.valueMaxLength = 40, s.getValue = b.visitorHandler.getNameValue, s.languageKey = "Name") :
                "email" === e.type ? (s.valueMaxLength = 150, s.getValue = b.visitorHandler.getEmailValue, s.validation = "isValidEmail", s.languageKey = "Email") : "message" === e.type || "textArea" === e.type ? s.valueMaxLength = 500 : "inputText" === e.type ? s.valueMaxLength = 150 : "department" === e.type ? s.getValue = b.sessionHandler.getDeparmentOptions : "choice" === e.type || "option" === e.type ? (s.type = "options", s.selections = e.selections) : "phone" === e.type && (s.valueMaxLength = 20, s.validation = "isValidPhone", s.languageKey = "Phone");
              s.isRequired && !s.languageKey &&
              (s.languageKey = "Required");
              c.push(s)
            }
            this.formData.dynamicFields = c
          }
          this.generateDynamicFields()
        };
      Y.prototype.generateDynamicFields = function () {
        for (var a = "", b = RegExp("__LABEL__", "gm"), d = RegExp("__ID__", "gm"), k = RegExp("__MAXLENGTH__", "gm"), f = 0, e = this.formData.dynamicFields.length; f < e; f++) {
          var g, h = "", n = this.formData.dynamicFields[f];
          if ("name" === n.fieldType || "email" === n.fieldType || "phone" === n.fieldType || "inputText" === n.fieldType) g = t.inputTextFieldType, g = "email" === n.fieldType ? g.replace("__INPUT_TYPE__",
            "email") : g.replace("__INPUT_TYPE__", "text"); else if ("message" === n.fieldType || "textArea" === n.fieldType) g = t.textAreaFieldType; else if ("department" === n.fieldType) g = t.departmentSelection; else if ("choice" === n.fieldType || "option" === n.fieldType) g = t.selectionsType, h = "choice" === n.fieldType ? this.generateCheckboxOptions(n.fieldName, n.selections) : this.generateRadioOptions(n.fieldName, n.selections);
          g && (g = g.replace(b, n.label || ""), g = g.replace(d, n.fieldName || ""), g = g.replace(k, n.valueMaxLength || ""), n.isRequired ? (g =
            g.replace(/__REQUIRED__/gm, "*"), this.isFormRequired || (this.isFormRequired = !0)) : g = g.replace(/__REQUIRED__/gm, ""), n.getValue && ("department" === n.fieldType ? (h = this.generateDropDownOptions(n.getValue(), n.isRequired, n.label)) || (g = "") : h = n.getValue()), g = g.replace("__VALUE__", h), a += g)
        }
        this.template = this.template.replace("__FIELDS__", a)
      };
      Y.prototype.generateDropDownOptions = function (a, c, d) {
        var k = "";
        if (0 === a.length) return !1;
        "preChatForm" === this.formData.id || "offlineForm" === this.formData.id ? k += '<option id="department-default" value="" disabled selected>' +
          (c ? "* " : "") + (d ? d : b.languageParser.translate("form", "department")) + "</option>" : c || (k += '<option value="0"></option>');
        c = 0;
        for (d = a.length; c < d; c++) k += '<option value="' + a[c].value + '"' + (a[c].selected ? 'selected="selected"' : "") + ">" + a[c].text + "</option>";
        return k
      };
      Y.prototype.generateRadioOptions = function (a, b) {
        for (var d = "", k = t.radioSelectionType, f = 0, e = b.length; f < e; f++) d += k.replace(/__ID__/gm, a + "radio" + f).replace(/__FIELD_ID__/gm, a).replace(/__VALUE__/gm, b[f]);
        return d
      };
      Y.prototype.generateCheckboxOptions =
        function (a, b) {
          for (var d = "", k = t.checkboxSelectionType, f = 0, e = b.length; f < e; f++) d += k.replace(/__ID__/gm, a + "check" + f).replace(/__FIELD_ID__/gm, a).replace(/__VALUE__/gm, b[f]);
          return d
        };
      Y.prototype.updateName = function (a) {
        for (var c, d = 0, k = this.formData.dynamicFields.length; d < k; d++) {
          var f = this.formData.dynamicFields[d];
          if ("name" === f.fieldType) {
            c = b.viewHandler.chatContainer.getElementById(f.fieldName + "Field");
            break
          }
        }
        c && (c.value = a)
      };
      Y.prototype.updateEmail = function (a) {
        for (var c, d = 0, k = this.formData.dynamicFields.length; d <
        k; d++) {
          var f = this.formData.dynamicFields[d];
          if ("email" === f.fieldType) {
            c = b.viewHandler.chatContainer.getElementById(f.fieldName + "Field");
            break
          }
        }
        c && (c.value = a)
      };
      Y.prototype.addPlaceholderHandler = function () {
        var a, b;
        if (!ga) for (var d = 0, k = this.formData.dynamicFields.length; d < k; d++) b = this.formData.dynamicFields[d], "department" !== b.fieldType && ("choice" !== b.fieldType && "option" !== b.fieldType) && (this.formData.dynamicFields[d].placeholderText = (b.isRequired ? "* " : "") + b.label, a = this.documentRef.getElementById(b.fieldName +
          "Field"), n.togglePlaceholderText(a, this.formData.dynamicFields[d].placeholderText, b.fieldName + "Field"), n.trim(a.value) || (a.value = this.formData.dynamicFields[d].placeholderText))
      };
      var oa = function (a) {
        var c = this;
        this.container = a;
        this.unansweredMessages = 0;
        b.eventEmitter.on("visitorPopupFocus", function (a) {
          c.isPopupFocused = a;
          c.hide()
        });
        r.chatWindowState.subscribe(function (a) {
          "max" === a && c.hide()
        });
        this.originalPageTitle = document.title;
        this.pageTitleNotification = {
          interval: null, on: function () {
            !this.interval &&
            f.showUnreadInTab() && (this.interval = setInterval(function () {
              document.title = c.originalPageTitle === document.title ? b.languageParser.translate("chat", "newMessage", {num: c.unansweredMessages}) : c.originalPageTitle
            }, 1E3))
          }, off: function () {
            clearInterval(this.interval);
            this.interval = null;
            document.title = c.originalPageTitle
          }
        }
      };
      oa.prototype.initIndicator = function () {
        b.viewHandler.totalUnseenMessages && this.updateUnseenMessages(b.viewHandler.totalUnseenMessages)
      };
      oa.prototype.show = function () {
        var a, c;
        if (!("max" === r.chatWindowState() &&
          !f.isPopup || this.isPopupFocused && !b.viewHandler.popoutWin.closed || f.hideWidgetOnLoad || "restartChatForm" === b.formHandler.currentForm || "offlineForm" === b.formHandler.currentForm) && this.container && this.container.elementReferrer) {
          a = this.container.getElementById("tawkchat-chat-indicator");
          if (c = this.container.getElementById("tawkchat-chat-indicator-text")) c.innerHTML = this.unansweredMessages;
          a && "block" !== a.style.display && (a.style.display = "block", a.style.visibility = "hidden", b.viewHandler.handleIndicatorToggle(!0),
            b.viewHandler.showWidget(), this.container.show());
          if (!f.showMessagePreview() || !b.viewHandler.messagePreview || !b.viewHandler.messagePreview.isShown || document.hidden) this.pageTitleNotification.on()
        }
      };
      oa.prototype.hide = function () {
        var a, c;
        this.container && this.container.elementReferrer && (a = this.container.getElementById("tawkchat-chat-indicator"), c = this.container.getElementById("tawkchat-chat-indicator-text"), a && "block" === a.style.display && (a.style.display = "none", b.viewHandler.handleIndicatorToggle(), y ||
        this.container.hide()), c && (c.innerHTML = ""))
      };
      oa.prototype.updateUnseenMessages = function (a) {
        this.unansweredMessages = a;
        l.triggerApiHandlers("onUnreadCountChanged", this.unansweredMessages);
        if (0 === this.unansweredMessages) this.pageTitleNotification.off(); else if ("min" === r.chatWindowState()) this.show(); else this.pageTitleNotification.on()
      };
      var E = function (a) {
        this.container = a;
        this.documentRef = this.container.documentRef;
        this.quickReplyContainer = this.messagePreviewContainer = null;
        this.prevSenderUid = "";
        this.messagePreviewCount =
          0;
        this.timeIntervalsArr = [];
        this.isQuickReplyInitialized = !1;
        this.maxNumberFileUpload = 5;
        this.chatTextarea = new C("chatTextarea", null, null, "textarea");
        this.incomingCallContainer = null;
        this.offsetX = f.widgetOffsetX;
        this.offsetY = f.widgetOffsetY;
        this.wrapper = null;
        this.isActionsContainerNotifShown = !1;
        this.lastRadioButton = null;
        this.resizeThrottle = 0
      };
      E.prototype.init = function () {
        var a = this;
        this.container && (this.wrapper || (this.wrapper = this.container.getElementById("tawkchat-message-preview-container"), f.isRTL() &&
        (this.wrapper.className += "rtl-direction ")), y ? this.updateMobilePositions() : this.updatePositions(), f.chatPosition.subscribe(function () {
          a.updatePositions()
        }))
      };
      E.prototype.show = function (a, c, d) {
        var k = this;
        0 !== a && (this.container && (c || d)) && (1 === a ? this.messagePreviewCount = 1 : this.messagePreviewCount++, this.messagePreviewContainer || (this.messagePreviewContainer = this.container.getElementById("tawkchat-message-preview-messages-container"), f.isCenterPositioned() ? this.messagePreviewContainer.style.maxHeight =
          document.documentElement.clientHeight - (document.documentElement.clientHeight / 2 - 180) - 210 + "px" : this.messagePreviewContainer.style.maxHeight = document.documentElement.clientHeight - (f.minimizedDimensions().height + f.widgetOffsetY + 300) + "px", this.toggleUploadsAction(), this.toggleRatingAction(), this.toggleEmojiAction()), this.quickReplyContainer || (this.quickReplyContainer = this.container.getElementById("tawkchat-message-preview-quick-reply-container")), this.isShown = !0, this.container.restyle("display", "block"),
        p && p.hideBubble(), c && !y ? this.appendMessage(c) : d && (d.isMissed ? this.appendCallInfo(d) : (this.messagePreviewCount--, this.appendCallRequest(d))), this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
          b.sessionHandler.visitorChatDismiss(function () {
          });
          k.removeAllElements()
        }, "tawkchat-message-preview-close", "mp-closeitemsclick"), this.isQuickReplyInitialized || this.initQuickReply(), this.showQuickReply(), 0 === this.messagePreviewCount ? this.hideQuickReply() : (f.showPreChatForm && !r.prechatFormSubmitted() &&
        f.prechatOptions.fields.forEach(function (a) {
          a.isRequired && k.hideQuickReply()
        }), this.hideActionsContainerNotif(), this.resizeTextArea(), setTimeout(function () {
          k.container && k.container.restyle("height", k.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px")
        }, 50), f.showEmoji.subscribe(function () {
          k.toggleEmojiAction()
        }), f.showUploads.subscribe(function () {
          k.toggleUploadsAction()
        }), f.showRating.subscribe(function () {
          k.toggleRatingAction()
        })))
      };
      E.prototype.toggleUploadsAction = function () {
        var a =
            this, c = this.container.documentRef.getElementById("uploadFileOption"),
          d = this.container.documentRef.getElementById("actionsContainer");
        c && (f.showUploads() ? (c.style.display = "block", this.container.attachUserEventListener("change", function (c) {
          b.eventHandler.cancelEvent(c);
          c = b.eventHandler.getTargetElement(c).files;
          var d = [], f = [];
          if (c && c.length) {
            for (var e = 0; e < c.length; e++) c[e].size > a.maxSizeFileUpload ? d.push(c[e]) : e >= a.maxNumberFileUpload ? f.push(c[e]) : b.viewHandler.startUpload(c[e]);
            b.viewHandler.checkUploadFileWarning(d,
              f);
            b.viewHandler.userAction = !1;
            b.sessionHandler.notifyWindowState("max")
          }
        }, "fileInput", "mp-fileInputChanged"), this.chatTextarea.attachUserEventListener("paste", function (a) {
            var c, d;
            if ((c = (a.originalEvent || a).clipboardData) && (c = c.items) && c.length) {
              for (var f = 0; f < c.length; f++) if (-1 !== c[f].type.indexOf("image")) {
                var e = c[f].getAsFile();
                if (null !== e) {
                  d = e;
                  d.name = b.languageParser.translate("chat", "pasted_image_title", {dateTime: n.parseChatTime(new Date)});
                  break
                }
              }
              d && (b.viewHandler.startUpload(d), a.preventDefault())
            }
          },
          null, "mp-chatTextareaPaste"), this.container.attachUserEventListener("dragover", function (a) {
          a.preventDefault();
          a.stopPropagation && a.stopPropagation();
          -1 === d.className.indexOf(" drag-over") && n.addClass(d, "drag-over")
        }, "actionsContainer", "mp-textareaContainerDragOver"), this.container.attachUserEventListener("dragleave", function (b) {
          var c = a.container.getElementById("tawkchat-message-preview-container").getBoundingClientRect();
          if (b.clientY < c.top || b.clientY >= c.bottom || b.clientX < c.left || b.clientX >= c.right) b.preventDefault(),
          b.stopPropagation && b.stopPropagation(), n.removeClass(d, "drag-over")
        }, "actionsContainer", "mp-textareaContainerDragLeave"), this.container.attachUserEventListener("drop", function (c) {
          c.preventDefault();
          c.stopPropagation && c.stopPropagation();
          d.className = d.className.replace(/ drag-over/g, "");
          c = c.target.files || c.dataTransfer.files;
          var f = [], e = [];
          if (c && 0 !== c.length) {
            for (var g = 0; g < c.length; g++) c[g].size > a.maxSizeFileUpload ? f.push(c[g]) : g >= a.maxNumberFileUpload ? e.push(c[g]) : b.viewHandler.startUpload(c[g]);
            a.chatTextarea.elementReferrer.value =
              "";
            a.resizeTextArea();
            a.chatTextarea.elementReferrer.value ? a.toggleActionsContentOnTyping(!1) : a.toggleActionsContentOnTyping(!0);
            b.viewHandler.checkUploadFileWarning(f, e);
            b.viewHandler.userAction = !1;
            b.sessionHandler.notifyWindowState("max")
          }
        }, "actionsContainer", "mp-textareaContainerDrop")) : c.style.display = "none")
      };
      E.prototype.toggleRatingAction = function () {
        var a = this.container.getElementById("rateMainWrapper"), c = this.container.getElementById("rateContainer");
        a && c && (f.showRating() ? (a.style.display =
          "block", this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
          b.chatHandler.changeRating(1);
          b.viewHandler.userAction = !1;
          b.sessionHandler.notifyWindowState("max");
          b.eventHandler.cancelEvent(a)
        }, "ratePositive", "mp-ratepveclick"), this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
          b.chatHandler.changeRating(-1);
          b.viewHandler.userAction = !1;
          b.sessionHandler.notifyWindowState("max");
          b.eventHandler.cancelEvent(a)
        }, "rateNegative", "mp-ratenveclick"), this.container.attachUserEventListener("mouseover",
          function () {
            c.style.display = "block"
          }, "rateMainWrapper", "rateMainWrapperOverQR"), this.container.attachUserEventListener("mouseout", function () {
          c.style.display = "none"
        }, "rateMainWrapper", "rateMainWrapperOutQR")) : a.style.display = "none")
      };
      E.prototype.updateMobilePositions = function () {
        var a = {}, c = f.minimizedDimensions().width, d = f.minimizedDimensions().height;
        f.isCenterPositioned() ? (-1 === this.wrapper.className.indexOf("center") && (this.wrapper.className += "center"), a.top = "calc(50% - " + (0.5 * c + 20) + "px) !important",
          a.bottom = "auto !important", f.isRightPositioned() ? (-1 === this.wrapper.className.indexOf("right") && (this.wrapper.className += " right"), a.right = this.offsetX + d + 15 + 100 + "px !important", a.left = "auto !important") : (-1 === this.wrapper.className.indexOf("left") && (this.wrapper.className += " left"), a.left = this.offsetX + d + 15 + 100 + "px !important", a.right = "auto !important")) : (d = b.viewHandler.minifiedBoxHeight * b.viewHandler.zoom + 30, f.isTopPositioned() ? (a.bottom = "auto !important", a.top = d + 30 + "px !important", -1 === this.wrapper.className.indexOf("top") &&
        (this.wrapper.className += " top")) : (a.bottom = d + 30 + "px !important", a.top = "auto !important", -1 === this.wrapper.className.indexOf("bottom") && (this.wrapper.className += " bottom")), f.isRightPositioned() ? (a.right = "10px !important", a.left = "auto !important", -1 === this.wrapper.className.indexOf("right") && (this.wrapper.className += " right")) : (a.right = "auto !important", a.left = "10px !important", -1 === this.wrapper.className.indexOf("left") && (this.wrapper.className += " left")));
        this.container.massRestyle(a)
      };
      E.prototype.updatePositions =
        function () {
          var a = {}, b = f.minimizedDimensions().width, d = f.minimizedDimensions().height;
          f.isCenterPositioned() ? (-1 === this.wrapper.className.indexOf("center") && (this.wrapper.className += "center"), a.top = "calc(50% - " + (0.5 * b + 40) + "px) !important", a.bottom = "auto !important", f.isRightPositioned() ? (-1 === this.wrapper.className.indexOf("right") && (this.wrapper.className += " right"), a.right = this.offsetX + d + 15 + "px !important", a.left = "auto !important") : (-1 === this.wrapper.className.indexOf("left") && (this.wrapper.className +=
            " left"), a.left = this.offsetX + d + 15 + "px !important", a.right = "auto !important")) : (f.isTopPositioned() ? (a.top = f.minimizedDimensions().height + this.offsetY + "px !important", a.bottom = "auto !important", -1 === this.wrapper.className.indexOf("top") && (this.wrapper.className += " top")) : (f.isDesktopRectangle() ? a.bottom = f.minimizedDimensions().height + this.offsetY + 10 + "px !important" : a.bottom = 80 + this.offsetY + "px !important", a.top = "auto !important", -1 === this.wrapper.className.indexOf("bottom") && (this.wrapper.className +=
            " bottom")), f.isRightPositioned() ? (a.right = this.offsetX + "px !important", a.left = "auto !important", -1 === this.wrapper.className.indexOf("right") && (this.wrapper.className += " right")) : (a.left = this.offsetX + "px !important", a.right = "auto !important", -1 === this.wrapper.className.indexOf("left") && (this.wrapper.className += " left")));
          this.container.massRestyle(a)
        };
      E.prototype.setStyleToSingleAgent = function () {
        var a, b, d;
        if (this.messagePreviewContainer && this.container) for (a = this.messagePreviewContainer.getElementsByClassName("messageBody"),
                                                                   b = this.container.documentRef.getElementById("actionsContainer"), d = this.container.documentRef.getElementById("textareaWrapper"), this.quickReplyContainer.style.marginTop = "10px", b.setAttribute("style", "border-radius:5px 5px 5px 5px !important; background-color: #fff"), d.setAttribute("style", "border-radius:5px 5px 5px 5px !important"), b = 0; b < a.length; b++) d = 10, a[b].setAttribute("style", "border-bottom-width:1px !important; border-radius:5px 5px 5px 5px !important"), 0 === b && (d = 0), a[b].parentElement.setAttribute("style",
          "margin-top:" + d + "px !important")
      };
      E.prototype.setStyleToMultipleAgent = function () {
        var a, b, d;
        if (this.messagePreviewContainer && this.container) for (a = this.messagePreviewContainer.getElementsByClassName("messageBody"), b = this.container.documentRef.getElementById("actionsContainer"), d = this.container.documentRef.getElementById("textareaWrapper"), this.quickReplyContainer.style.marginTop = "0px", b.setAttribute("style", "border-radius:0px 0px 5px 5px !important; background-color: #f8f8f8"), d.setAttribute("style",
          "border-radius:0px 0px 5px 5px !important"), b = 0; b < a.length; b++) 0 === b ? 1 === this.messagePreviewCount ? a[b].setAttribute("style", "border-bottom-width: 3px !important; border-radius:5px 5px 0px 0px !important") : a[b].setAttribute("style", "border-bottom-width:1px !important; border-radius:5px 5px 0px 0px !important") : (b === a.length - 1 ? a[b].setAttribute("style", "border-bottom-width:3px !important; border-radius:0px 0px 0px 0px !important") : a[b].setAttribute("style", "border-bottom-width:1px !important; border-radius:0px 0px 0px 0px !important"),
          a[b].parentElement.setAttribute("style", "margin-top:0px !important"))
      };
      E.prototype.hide = function () {
        this.isShown = !1;
        this.container.restyle("display", "none !important");
        if (this.messagePreviewContainer) {
          this.messagePreviewContainer.innerHTML = "";
          for (var a = 0; a < this.timeIntervalsArr.length; a++) clearInterval(this.timeIntervalsArr[a].timeInterval);
          this.timeIntervalsArr = [];
          this.prevSenderUid = "";
          this.closeEmojiSelection();
          p && p.showBubble()
        }
      };
      E.prototype.removeCallRequest = function () {
        this.incomingCallContainer &&
        (this.incomingCallContainer.elementReferrer.parentElement && (this.incomingCallContainer.elementReferrer.outerHTML = ""), this.incomingCallContainer = null);
        y && this.hide()
      };
      E.prototype.appendCallRequest = function (a) {
        var c, d;
        c = t.incomingCallRequest;
        var k = a.callId;
        d = (d = (a = w.agentProfiles[w.profiles[a.caller.urid]]) && a.pi ? r.agentImgUrl + "/" + a.pi : "") ? "url('" + d + "');" : "transparent;";
        b.chatHandler.webrtcWin && !b.chatHandler.webrtcWin.closed ? b.chatHandler.webrtcWin.focus() : (c = c.replace(/__IMAGE_URL__/, d), c = c.replace(/__INCOMING_CALL__/,
          b.languageParser.translate("chat", "incoming_call_message", {name: a.n})), c = c.replace(/__ACCEPT_CALL__/, b.languageParser.translate("chat", "accept_call")).replace(/__DECLINE_CALL__/, b.languageParser.translate("chat", "decline_call")), a = new C("incoming-call"), a.template = c, a.buildView(), this.messagePreviewContainer.insertBefore(a.elementReferrer, this.messagePreviewContainer.firstElementChild), a.elementReferrer.style.marginBottom = 0 === this.messagePreviewCount ? "0px" : "10px", this.incomingCallContainer = a, c = this.container.getElementById("accept-call"),
          a = this.container.getElementById("decline-call"), c && b.eventHandler.listen(c, "click", function () {
          clearTimeout(b.viewHandler.incomingCallTimeout);
          n.getWebRTCToken(!1, !1, function () {
            b.viewHandler.removeCallRequest()
          });
          b.viewHandler.userAction = !0;
          b.sessionHandler.notifyWindowState("max")
        }, "mp-acceptVideoCall"), a && b.eventHandler.listen(a, "click", function () {
            clearTimeout(b.viewHandler.incomingCallTimeout);
            n.rejectCall(k, function () {
              b.viewHandler.removeCallRequest()
            });
            b.viewHandler.userAction = !0;
            b.sessionHandler.notifyWindowState("max")
          },
          "mp-declineVideoCall"), b.audioPlayer.play("chat_sound"), 0 === this.messagePreviewCount ? (this.container.restyle("height", this.wrapper.offsetHeight + this.messagePreviewContainer.offsetHeight + "px"), this.messagePreviewContainer.style.maxHeight = this.wrapper.offsetHeight + this.messagePreviewContainer.offsetHeight + "px", this.hideQuickReply()) : (this.messagePreviewContainer.style.maxHeight = this.container.elementReferrer.offsetHeight + "px", this.container.restyle("height", this.container.getElementById("tawkchat-message-preview-container").offsetHeight +
          this.messagePreviewContainer.offsetHeight + "px")))
      };
      E.prototype.appendCallInfo = function (a) {
        if (!y) {
          var c, d, k = t["messagePreview-callInfo"], s = a.callId, e = a.caller;
          a = a.isMissed;
          var g = null, h = null, l = Date.now(), m = g = c = null, s = "callInfo-" + s, m = null, p = "", q = null;
          this.container && this.messagePreviewContainer && a && (m = b.languageParser.translate("chat", "missed_visitor_messagePreview"), d = (c = (g = w.agentProfiles[w.profiles[e.urid]]) && g.pi ? r.agentImgUrl + "/" + g.pi : "") ? "url('" + c + "');" : "transparent;", "transparent" !== d && (d += "background-position:0 0;background-size:28px 28px"),
            c = new C(s, null, {className: "message-preview-item"}, null, this.documentRef), c.template = n.escapeTemplateReplacement(k, [{
            placeholder: "__CALL_INFO__",
            textReplace: m
          }, {placeholder: "__CALLER_NAME__", textReplace: g.n}, {
            placeholder: "__IMAGE_URL__",
            textReplace: d
          }, {
            placeholder: "__ELAPSED_TIME__",
            textReplace: b.languageParser.translate("chat", "justNow")
          }]), c.buildView(), f.isTopPositioned() ? this.messagePreviewContainer.insertBefore(c.elementReferrer, this.messagePreviewContainer.getElementsByClassName("message-preview-item")[0]) :
            this.messagePreviewContainer.appendChild(c.elementReferrer), g = c.elementReferrer.getElementsByClassName("btn-icon")[0], m = c.elementReferrer.getElementsByClassName("mp-callIconContainer")[0], a && (g.style.transform = "rotate(135deg)", g.style.top = "1px", m.style.backgroundColor = "#e52f48"), this.container.getElementById("incoming-call") && (this.container.getElementById("incoming-call").style.marginBottom = "10px"), this.prevSenderUid === w.profiles[e.urid] && (p += " hidden-profile"), c.elementReferrer.className += p, c.elementReferrer.setAttribute("data-uid",
            w.profiles[e.urid]), q = c.elementReferrer.getElementsByClassName("mp-callInfoElapsedTime")[0], this.timeIntervalsArr.push({
            messageId: s,
            timeInterval: setInterval(function () {
              h = Math.floor((Date.now() - l) / 1E3);
              q.innerHTML = 60 > h ? b.languageParser.translate("chat", "justNow") : b.languageParser.translate("chat", "minutes", {num: Math.floor(h / 60)}) + " ago"
            }, 6E4)
          }), this.prevSenderUid = w.profiles[e.urid], 3 < this.messagePreviewCount && (f.isTopPositioned() ? this.removeElement(this.messagePreviewContainer.getElementsByClassName("message-preview-item")[3]) :
            this.removeElement(this.messagePreviewContainer.getElementsByClassName("message-preview-item")[0])), this.container.restyle("height", this.wrapper.offsetHeight + this.messagePreviewContainer.offsetHeight + "px"), c.elementReferrer.className += " animate-fade-object")
        }
      };
      E.prototype.scrollToBottom = function () {
        this.messagePreviewContainer && (this.messagePreviewContainer.scrollTop = 1E8)
      };
      E.prototype.parseSurvey = function (a, b) {
        var d, k, f, e, g, h, l = a.match(n.regSurvey), m = "";
        if (!l) return {message: a, isSurvey: !1};
        e = a.match(n.regSurveyQuestion);
        g = "survey-" + (new Date).getTime();
        d = 0;
        for (k = l.length; d < k; d++) f = l[d].replace(n.regOption, ""), f = f.replace(n.regBr, ""), f = n.trim(f), h = g + d, m += n.escapeTemplateReplacement(t["survey-option"], [{
          placeholder: /__RADIO_ID__/gm,
          textReplace: h
        }, {placeholder: "__RADIO_NAME__", textReplace: b}, {placeholder: /__RADIO_VALUE__/gm, textReplace: f}]);
        return {
          message: n.escapeTemplateReplacement(t["tawk-survey-wrapper"], [{
            placeholder: "__QUESTION__",
            textReplace: e[0].replace(n.regOption, "")
          }, {placeholder: "__OPTIONS__", textReplace: m}]),
          isSurvey: !0
        }
      };
      E.prototype.appendMessage = function (a) {
        var c = this, d = null, k = t["message-preview-item"], s = null, e = null, g = e = null, h = g = g = null,
          l = "", m = null, m = !1, p = Date.now(),
          q = "msgPreview-messageId-" + (new Date).getTime().toString() + Object.keys(b.chatHandler.messages).length,
          v = (new Date(a.time)).getTime();
        a && this.container && (e = a.message, g = a.profileImg ? a.profileImg ? "https://tawk.link/" + a.profileImg : "" : (g = w.agentProfiles[a.ownerId]) && g.pi ? r.agentImgUrl + "/" + g.pi : "", g = g ? "url('" + g + "');" : "transparent;", this.messagePreviewContainer &&
        ("undefined" !== typeof H && (e = H.unifyUnicode(e), 0 === e.replace(H.regUnicode, "").trim().length && (l += " emojionly"), e = H.toImage(e)), e = "s" === a.senderType ? this.limitMessageLength(e, 500) : this.limitMessageLength(e, 150), a.data && a.data.file && (e = b.viewHandler.parseUploadedFile(a.data.file)), m = this.parseSurvey(e, q), e = m.message, m = m.isSurvey, d = new C(q, null, {className: "message-preview-item"}, null, this.documentRef), d.template = n.escapeTemplateReplacement(k, [{
          placeholder: "__MESSAGE__",
          textReplace: e
        }, {
          placeholder: "__NAME__",
          textReplace: a.name
        }, {placeholder: "__IMAGE_URL__", textReplace: g}, {
          placeholder: "__TIME__",
          textReplace: b.languageParser.translate("chat", "justNow")
        }]), d.buildView(), f.isTopPositioned() ? this.messagePreviewContainer.insertBefore(d.elementReferrer, this.messagePreviewContainer.getElementsByClassName("message-preview-item")[0]) : this.messagePreviewContainer.appendChild(d.elementReferrer), a.data && a.data.file && (d.elementReferrer.getElementsByClassName("messageBody")[0].className += " imageMessageBody"), this.container.getElementById("incoming-call") &&
        (this.container.getElementById("incoming-call").style.marginBottom = "10px"), a.ownerId && this.prevSenderUid === a.ownerId && (l += " hidden-profile"), d.elementReferrer.className += l, d.elementReferrer.setAttribute("data-uid", a.ownerId), s = d.elementReferrer.getElementsByClassName("messageTime")[0], this.timeIntervalsArr.push({
          messageId: q, timeInterval: setInterval(function () {
            h = Math.floor((Date.now() - p) / 1E3);
            s.innerHTML = 60 > h ? b.languageParser.translate("chat", "justNow") : b.languageParser.translate("chat", "minutes",
              {num: Math.floor(h / 60)}) + " ago"
          }, 1E3), timestamp: v
        }), this.prevSenderUid = a.ownerId, e = d.elementReferrer.firstElementChild, b.eventHandler.listen(e, b.viewHandler.clickEvent, function () {
          c.removeElement(d.elementReferrer)
        }, "close-" + d.elementReferrer.id), 3 < this.messagePreviewCount && (f.isTopPositioned() ? this.removeElement(this.messagePreviewContainer.getElementsByClassName("message-preview-item")[3]) : this.removeElement(this.messagePreviewContainer.getElementsByClassName("message-preview-item")[0])), c.scrollToBottom(),
        m && this.addSurveyHandlers(q), this.container.restyle("height", this.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px"), d.elementReferrer.className += " animate-fade-object"))
      };
      E.prototype.addSurveyHandlers = function (a) {
        var c, d = this;
        this.container && (c = this.container.getElementById(a), c = n.getElementsByTagName(c, "input"), c.forEach(function (c, f) {
          c.id && d.container.attachUserEventListener("click", function () {
            d.lastRadioButton !== c.id && (d.lastRadioButton = c.id, b.chatHandler.sendMessage(c.value),
              b.sessionHandler.notifyWindowState("max"), b.viewHandler.scrollToBottom())
          }, c.id, "survey" + a + f + "click")
        }))
      };
      E.prototype.limitMessageLength = function (a, b) {
        var d = 0;
        if (a.length > b) for (d = 0; d < b;) if ('<img class="emojione"' === a.substring(d, d + 21) || '<a target="_blank"' === a.substring(d, d + 18)) for (var k = d; k < a.length; k++) {
          if (d++, b++, ">" === a.substring(k, k + 1)) {
            b -= 1;
            break
          }
        } else d++;
        return a.substring(0, b) + (a.length > b ? "[...]" : "")
      };
      E.prototype.removeAllElements = function () {
        for (var a = null, b = 0, d = f.minimizedDimensions().width,
               k = 0; k < this.timeIntervalsArr.length; k++) clearInterval(this.timeIntervalsArr[k].timeInterval), this.timeIntervalsArr.splice(k, 1);
        if (this.messagePreviewContainer) {
          a = this.messagePreviewContainer.getElementsByClassName("message-preview-item");
          b = a.length;
          for (k = 0; k < b; k++) a[0].parentElement && (a[0].outerHTML = "");
          this.messagePreviewCount = 0;
          this.removeCallRequest();
          this.prevSenderUid = "";
          f.isCenterPositioned() && this.container.restyle("top", "calc(50% - " + 0.5 * d + "px) !important");
          this.container.getElementById("incoming-call") &&
          (this.container.getElementById("incoming-call").style.marginBottom = "0px");
          this.hide()
        }
      };
      E.prototype.removeElement = function (a) {
        for (var b = null, d = null, k = 0; k < this.timeIntervalsArr.length; k++) if (this.timeIntervalsArr[k].messageId === a.id) {
          clearInterval(this.timeIntervalsArr[k].timeInterval);
          this.timeIntervalsArr.splice(k, 1);
          break
        }
        d = this.messagePreviewContainer.getElementsByClassName("message-preview-item");
        if (-1 === a.className.indexOf("hidden-profile")) if (f.isTopPositioned()) for (k = d.length - 2; k < d.length; k--) {
          if (b =
            d[k], b.getAttribute("data-uid") === a.getAttribute("data-uid")) {
            b.className = b.className.replace(/hidden-profile/gi, "");
            break
          }
        } else for (k = 1; k < d.length; k++) if (b = d[k], b.getAttribute("data-uid") === a.getAttribute("data-uid")) {
          b.className = b.className.replace(/hidden-profile/gi, "");
          break
        }
        a.parentElement && (a.outerHTML = "");
        this.messagePreviewCount--;
        0 === this.messagePreviewCount && this.container.getElementById("incoming-call") && (this.container.getElementById("incoming-call").style.marginBottom = "0px")
      };
      E.prototype.initQuickReply =
        function () {
          if (!y) {
            var a, c;
            c = this.container.documentRef.getElementById("tooLongMsgNotification");
            this.container.documentRef.getElementById("textareaContainer").insertBefore(this.chatTextarea.buildView(this.container.documentRef), c);
            a = this.container.getElementById("tawkchat-message-preview-quick-reply-container");
            c = this.container.getElementById("file-upload-drop-label");
            r.pageStatus() && a && (a = n.rawDecode(f.onlineGreeting.actionMessage), ga ? this.chatTextarea.elementReferrer.placeholder = a : (this.chatTextarea.elementReferrer.value =
              a, n.togglePlaceholderText(this.chatTextarea.elementReferrer, a, "chatTextarea")), c.innerHTML = b.languageParser.translate("rollover", "uploadFile"), this.container.getElementById("viewEmoji").setAttribute("title", b.languageParser.translate("chat", "insert_emoji")), this.container.getElementById("uploadFileOption").setAttribute("title", b.languageParser.translate("rollover", "uploadFile")), this.container.getElementById("ratePositive").setAttribute("title", b.languageParser.translate("rollover", "positiveRating")),
              this.container.getElementById("rateNegative").setAttribute("title", b.languageParser.translate("rollover", "negativeRating")), this.attachEventListenerQuickReply(), this.isQuickReplyInitialized = !0)
          }
        };
      E.prototype.showQuickReply = function () {
        y || (this.quickReplyContainer.style.display = "block", this.toggleActionsContentOnTyping(!0))
      };
      E.prototype.hideQuickReply = function () {
        this.quickReplyContainer && (this.quickReplyContainer.style.display = "none")
      };
      E.prototype.attachEventListenerQuickReply = function () {
        var a = this;
        this.container.documentRef.getElementById("notifMessageText").innerHTML = b.languageParser.translate("chat", "message_too_long");
        this.hideActionsContainerNotif();
        this.chatTextarea.attachUserEventListener("keydown", function (c) {
          a.resizeTextArea();
          if (13 === c.keyCode && !c.shiftKey) {
            if (5E3 < this.value.length) {
              c.preventDefault();
              return
            }
            b.viewHandler.userAction = !1;
            b.sessionHandler.notifyWindowState("max");
            b.viewHandler.scrollToBottom()
          }
          this.value ? a.toggleActionsContentOnTyping(!1) : a.toggleActionsContentOnTyping(!0);
          b.chatHandler.sendTextPreview(c)
        }, null, "mp-chatinputkeyupresize");
        this.chatTextarea.attachUserEventListener("keyup", function () {
          5E3 >= this.value.length ? a.hideActionsContainerNotif() : a.showActionsContainerNotif();
          this.value ? a.toggleActionsContentOnTyping(!1) : a.toggleActionsContentOnTyping(!0);
          a.resizeTextArea()
        }, null, "mp-chatinputkeyup")
      };
      E.prototype.toggleActionsContentOnTyping = function (a) {
        var b = this.container.getElementById("hidableActionsWrapper"),
          d = this.container.getElementById("textareaContainer");
        a ? (b.style.display = "block", n.addClass(d, "additionalPadding")) : (b.style.display = "none", n.removeClass(d, "additionalPadding"))
      };
      E.prototype.toggleEmojiAction = function () {
        var a = this, b = this.container.getElementById("viewEmoji"),
          d = this.container.documentRef.getElementById("emoji-selection-container"),
          k = this.container.getElementById("textareaContainer");
        f.showEmoji() ? (b.style.display = "block", n.addClass(k, "with-emoji"), d.innerHTML = t.loader, this.container.attachUserEventListener("click", function (b) {
          b.stopPropagation();
          "active" === a.container.getElementById("viewEmoji").className ? a.closeEmojiSelection() : (a.container.getElementById("viewEmoji").className = "active", Ua(d), a.container.restyle("height", a.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px"))
        }, "viewEmoji", "mp-viewEmojiClick")) : (b.style.display = "none", n.removeClass(k, "with-emoji"))
      };
      E.prototype.closeEmojiSelection = function () {
        if (!y) {
          var a = this.container.documentRef.getElementById("actionsContainer"),
            b = this.container.documentRef.getElementById("emoji-selection-container");
          this.container.getElementById("viewEmoji").className = "";
          a.style.height = "50px";
          n.removeClass(b, "showWithFade");
          this.container.restyle("height", this.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px")
        }
      };
      E.prototype.resizeTextArea = function () {
        var a = this;
        clearTimeout(this.resizeThrottle);
        y || (this.resizeThrottle = setTimeout(function () {
          var b = a.chatTextarea.elementReferrer.value, d = a.container.documentRef.getElementById("actionsContainer"),
            k = a.container.documentRef.getElementById("textareaContainer"),
            f = b.split(/\r\n|\r|\n/).length || 1, e = 20 * f;
          1 === f && a.chatTextarea.elementReferrer.scrollHeight >= a.chatTextarea.elementReferrer.clientHeight && (e = a.chatTextarea.elementReferrer.scrollHeight);
          b && 20 <= e ? (e = 150 < e ? 150 : e, a.isActionsContainerNotifShown ? (e += 52, k.style.paddingBottom = "67px") : k.style.paddingBottom = "15px", d.style.height = 50 + (e - 20) + "px", a.container.getElementById("tawkchat-message-preview-container").offsetHeight > a.container.elementReferrer.offsetHeight && a.container.restyle("height", a.container.getElementById("tawkchat-message-preview-container").offsetHeight +
            "px")) : (d.style.height = "50px", k.style.paddingBottom = "15px")
        }, 100))
      };
      E.prototype.addEmojiToInput = function (a) {
        ga || this.chatTextarea.elementReferrer.value !== n.rawDecode(f.onlineGreeting.actionMessage) || (this.chatTextarea.elementReferrer.value = "");
        this.chatTextarea.elementReferrer.value += a;
        this.chatTextarea.elementReferrer.focus();
        this.closeEmojiSelection()
      };
      E.prototype.showActionsContainerNotif = function () {
        y || (this.container.documentRef.getElementById("tooLongMsgNotification").style.display = "block", this.isActionsContainerNotifShown =
          !0)
      };
      E.prototype.hideActionsContainerNotif = function () {
        y || (this.container.documentRef.getElementById("tooLongMsgNotification").style.display = "none", this.isActionsContainerNotifShown = !1)
      };
      var z = TawkClass.extend({
        init: function () {
          this.chatContainer = null;
          this.removeAgentNotification = !1;
          this.lastRadioButton = null;
          this.clickEvent = "click";
          this.isPopupFocused = !1;
          this.indicator = null;
          this.newMessageNotSeen = !1;
          this.unseenMessages = [];
          this.lastMessageTime = null;
          this.totalUnseenMessages = 0;
          this.retryUploadList = this.removeDividerTimeout =
            null;
          this.tawktoLinkName = n.getRandomName();
          this.bottomContainerName = n.getRandomName();
          this.currentScrollY = this.incomingCallTimeout = null;
          this.callData = {};
          this.mainAgent = null
        }, show: function () {
          var a = this, c = "visibilitychange";
          "webkitvisibilitychange" in document ? c = "webkitvisibilitychange" : "mozvisibilitychange" in document ? c = "mozvisibilitychange" : "msvisibilitychange\ufeff" in document && (c = "msvisibilitychange\ufeff");
          b.eventHandler.listen(g, "focus", function () {
            b.viewHandler.messagePreview && b.viewHandler.indicator.pageTitleNotification.off();
            a.checkSeenMessageViewport()
          }, "windowOnFocus");
          b.eventHandler.listen(document, c, function () {
            document.hidden || (b.viewHandler.messagePreview && b.viewHandler.indicator.pageTitleNotification.off(), a.checkSeenMessageViewport())
          }, "documentVisibilityChange")
        }, appendAgent: function (a) {
          var c, d, k, e, g, h = "";
          e = this.chatContainer;
          c = e.getElementById("agentProfileContainer");
          var l = e.getElementById("agentList");
          d = e.getElementById("chatWrapper");
          k = e.getElementById("headerAccountStateContainer");
          g = e.getElementById("shortMessage");
          e && (c && l) && (-1 < this.chatContainer.getElementById("greetingsMainContainer").className.indexOf("minimize") && (g.style.display = "none", c.className = "show"), b.agents.agentsCount++, 1 < b.agents.agentsCount || 1 === b.agents.agentsCount && this.mainAgent && this.mainAgent.pid !== a.pid ? d.classList.remove("one-agent") : d.classList.add("one-agent"), 1 === b.agents.agentsCount ? (this.mainAgent = a, b.viewHandler.renderAgentHeader(a.pid), this.renderAgentMinimizedWidget(a.pid)) : (b.viewHandler.renderAgentHeader(a.pid), k.classList.add("multiple-agent")),
            b.viewHandler.openAgentList(), c = t["agent-profile"], d = t["agent-profile-image"], k = t["agent-profile-description"], e = new C("agentProfile-" + a.pid, null, {className: "agentWrapper clearfix"}, null, e.documentRef), (g = a.pi ? r.agentImgUrl + "/" + a.pi : "") && (h = "background-image : url('" + g + "'); background-position : 0px 0px;"), h += "box-shadow: 0px 0px 0px 1px " + f.headerTxtColor + ";", k = n.escapeTemplateReplacement(k, [{
            placeholder: "__POSITION_CLASS__",
            textReplace: "agentName"
          }, {placeholder: "__POSITION__", textReplace: a.pst},
            {
              placeholder: "__NAME__",
              textReplace: a.n
            }]), d = d.replace("__PROFILE_ID__", a.pid).replace("__IMAGE_URL__", h), e.template = n.escapeTemplateReplacement(c, [{
            placeholder: "__AGENT_PROFILE_DETAIL__",
            textReplace: k
          }, {placeholder: "__AGENT_PROFILE_IMAGE__", textReplace: d}, {
            placeholder: "__ID__",
            textReplace: ""
          }]), l.appendChild(e.buildView()), l.style.left = "50%")
        }, removeAgent: function (a) {
          var c, d, k, f, g = e.container.elementReferrer ? e.container : null, h = g.getElementById("chatWrapper");
          g && (b.agents.agentsCount--, c = g.getElementById("agentProfileContainer"),
            d = g.getElementById("agentProfile-" + a), k = g.getElementById("profileImage-" + a), f = g.getElementById("profileDetail" + a), 0 === b.agents.agentsCount ? (b.viewHandler.clearAgentHeader(), this.clearAgentFooter()) : 1 === b.agents.agentsCount && (b.eventHandler.removeEventHandler(c, "click", this.expandAgentList), g.getElementById("headerAccountStateContainer").classList.remove("multiple-agent")), 0 < b.agents.agentsCount && this.mainAgent.pid === a && (this.mainAgent = w.agentProfiles[Object.keys(w.agentProfiles)[0]], this.renderAgentMinimizedWidget(this.mainAgent.pid)),
          d && d.parentNode.removeChild(d), k && (k.parentNode && k.parentNode.removeChild(k), c.style.width = 1 >= b.agents.agentsCount ? "" : 30 * b.agents.agentsCount - 10 * (b.agents.agentsCount - 1) + "px"), f && f.parentNode && f.parentNode.removeChild(f), 1 === b.agents.agentsCount && (this.renderAgentMinimizedWidget(this.mainAgent.pid), h.className = "single-agent", b.viewHandler.calculateOwnerNameAndMessageTimeSizeAll(), b.viewHandler.messagePreview && b.viewHandler.messagePreview.setStyleToSingleAgent()));
          0 === b.agents.agentsCount && (b.viewHandler.clearAgentHeader(),
            this.clearAgentFooter(), b.viewHandler.closeAgentList())
        }, clearAgentFooter: function () {
          var a, b, d, k;
          a = p && p.container && p.container.elementReferrer ? p.container : null;
          y && (this.minifiedWidget && this.minifiedWidget.container) && (a = this.minifiedWidget.container);
          a && this.chatContainer && (d = a.getElementById("tawkchat-status-text-container"), k = a.getElementById("min-agent-profile-details"), b = a.getElementById("agent-profile-image"), (a = a.getElementById("tawkchat-status-agent-container")) || a) && (d && (d.style.display = "block"),
          k && (k.innerHTML = ""), b.innerHTML = "", a.style = "", a.className = "")
        }, renderAgentMinimizedWidget: function (a) {
          var c, d, k, e;
          d = p && p.container && p.container.elementReferrer ? p.container : null;
          y && (this.minifiedWidget && this.minifiedWidget.container) && (d = this.minifiedWidget.container);
          d && (this.chatContainer && a) && (c = w.agentProfiles[a], a = d.getElementById("tawkchat-status-agent-container"), iconContainer = d.getElementById("tawkchat-status-icon-container"), e = d.getElementById("agent-profile-image"), tawkStatusMessage = d.getElementById("tawkchat-status-text-container"),
            profileDetails = d.getElementById("min-agent-profile-details"), k = d.getElementById("tawkchat-chat-indicator"), a && (this.clearAgentFooter(), d = c.pi ? r.agentImgUrl + "/" + c.pi : "", e.style.backgroundImage = d ? "url('" + d + "')" : "", e.style.boxShadow = "0px 0px 0px 1px " + f.headerTxtColor, a.className += "appear", profileDetails && (profileDetails.innerHTML = '<p class="name">' + c.n + '</p><p class="position">' + c.pst + "</p>"), tawkStatusMessage && f.isDesktopRectangle() && (tawkStatusMessage.style.display = "none"), k && "block" === k.style.display &&
          b.viewHandler.handleIndicatorToggle(!0)))
        }, clearAgentHeader: function () {
        }, handleAcknowledgment: function (a) {
          var c, d, k, f, e, g, h, l, m = this.chatContainer;
          if (m && a.messageId && (f = m.getElementById(a.messageId))) {
            k = f.parentNode;
            d = 0;
            for (var p = f.childNodes.length; d < p; d++) {
              var q = f.childNodes[d];
              -1 !== q.className.indexOf("messageBody") && (c = n.getElementsByClassName(q, "messageWrapper"), l = n.getElementsByClassName(q, "messageStatusContainer"))
            }
            c && (c.length && l && l.length) && (l = l[0], c = c[0], a.error ? l && (k = t["chat-resend-link"].replace("__MESSAGE_ID__",
              a.messageId).replace("__NOT_DELIVERED__", b.languageParser.translate("chat", "resend")).replace("__FAILED__", b.languageParser.translate("chat", "failed")), c.className = "messageWrapper error", l.className = "messageStatusContainer errorInMessage", l.innerHTML = k, e = n.rawDecode(c.childNodes[0].textContent || c.childNodes[0].innerText), this.scrollToBottom(), h = b.eventHandler.listen(l, b.viewHandler.clickEvent, function (d) {
              b.eventHandler.cancelEvent(d);
              b.chatHandler.sendMessageToServer(e, a.messageId);
              if (g = m.getElementById("errorFor" +
                a.messageId)) c.className = "messageWrapper pending";
              l.className = "messageStatusContainer pending";
              l.childNodes[0].className = "";
              l.childNodes[0].innerHTML = t.loader;
              b.eventHandler.removeEventHandler(c, "click", h)
            }, "resend" + a.messageId + "click")) : (d = b.chatHandler.messages[a.order], b.viewHandler.addWaitTime(), k.removeChild(f), b.chatHandler.prepareMessage(d, !0, !1, !0)))
          }
        }, handleEndChat: function () {
        }, clearAgents: function () {
        }, handleRestartChat: function () {
        }, appendMessage: function (a) {
          var c, d, k, e, g;
          c = !1;
          var h = null;
          d = a.message;
          var l = a.time, m = a.senderType, p = this.chatContainer.documentRef, v = this.ifScrollbarDown(),
            $a = p.getElementById("chatWrapper"),
            u = "messageId-" + (new Date).getTime().toString() + Object.keys(b.chatHandler.messages).length,
            h = "messageContainer clearfix", x = {
              "chat-message-row": t["chat-message-row"],
              "chat-resend-link": t["chat-resend-link"],
              "chat-message-owner-agent": t["chat-message-owner-agent"],
              "chat-message-owner-visitor": t["chat-message-owner-visitor"],
              "chat-message-container": t["chat-message-container"],
              "chat-notification-container": t["chat-notification-container"],
              "chat-message-status-row": t["chat-message-status-row"],
              "chat-divider": t["chat-divider"]
            }, l = n.parseChatTime(l);
          b.chatHandler.noRedraw || (b.viewHandler.isMaximized || f.isEmbedded || f.isPopup || y || "v" === m || "c" !== a.type) || (f.hideWidgetOnLoad && "max" === f.onClickAction ? (b.viewHandler.userAction = !1, b.sessionHandler.notifyWindowState("max")) : b.viewHandler.messagePreview && b.viewHandler.messagePreview.show ? b.viewHandler.messagePreview.show(b.viewHandler.indicator.unansweredMessages +
            1, a) : b.viewHandler.messagePreview || (this.hasBeenMaximizedOnce || "max" !== f.onClickAction || b.chatHandler.agentHasMessaged) || (b.viewHandler.userAction = !1, b.sessionHandler.notifyWindowState("max"), this.hasBeenMaximizedOnce = !0));
          g = a.profileImg ? a.profileImg ? "https://tawk.link/" + a.profileImg : "" : (g = w.agentProfiles[a.ownerId]) && g.pi ? r.agentImgUrl + "/" + g.pi : "";
          g = g ? "url('" + g + "');" : "transparent;";
          if ("a" === a.senderType || "s" === a.senderType) x["chat-message-owner-agent"] = x["chat-message-owner-agent"].replace("__IMAGE_URL__",
            g);
          x["chat-message-status-row"] = a.isPending ? t["chat-message-pending-row"] : x["chat-message-status-row"].replace("__TIME__", l).replace("__TIME_CLASS__", "v" === a.senderType ? "visitor" : "agent").replace("__NAME__", "v" === a.senderType ? "" : a.name);
          "undefined" !== typeof H && (d = H.unifyUnicode(d), 0 === d.replace(H.regUnicode, "").trim().length && (h += " emojionly"), d = H.toImage(d));
          1 >= w.chatOrder && (b.viewHandler.chatContainer.getElementById("changeName").style.display = "block", b.viewHandler.chatContainer.getElementById("emailTranscriptOption").style.display =
            "block");
          "a" === m ? (c = this.parseSurvey(d, u), d = c.message, c = c.isSurvey, b.chatHandler.handleAgentStoppedTyping(a.data.rsc)) : b.chatHandler.visitorHasMessaged || "s" === m || (b.chatHandler.visitorHasMessaged = !0);
          a.data && a.data.file && (d = this.parseUploadedFile(a.data.file));
          "c" === a.type && (k = n.escapeTemplateReplacement(x["chat-message-row"], [{
            placeholder: "__MESSAGE_STATUS_ROW__",
            textReplace: x["chat-message-status-row"]
          }, {placeholder: /__MESSAGE_ID__/gm, textReplace: u}, {placeholder: "__MESSAGE__", textReplace: d}, {
            placeholder: "__PENDING__",
            textReplace: a.isPending ? "pending" : ""
          }]), h = "v" === m ? h + " visitorChatContainer " : h + " agentChatContainer ");
          h = new C(u, null, {className: h}, null, p);
          this.lastMessageTime = a.isPending ? this.lastMessageTime : l;
          "c" === a.type ? (b.chatHandler.lastMessageOwner = "s" === m ? "server" : a.isPending ? b.chatHandler.lastMessageOwner : a.ownerId, "a" === m || "s" === m ? ("a" === m && (b.chatHandler.agentHasMessaged = !0, this.removeWaitTime()), d = n.escapeTemplateReplacement(x["chat-message-owner-agent"], [{
              placeholder: "__NAME__",
              textReplace: a.name
            }])) :
            d = n.isGeneratedName(D.name()) && x["chat-message-owner-visitor"] ? n.escapeTemplateReplacement(x["chat-message-owner-visitor"], [{
              placeholder: "__NAME__",
              textReplace: a.name
            }]) : "", e = n.escapeTemplateReplacement(x["chat-message-container"], [{
              placeholder: "__OWNER_TPL__",
              textReplace: d
            }, {
              placeholder: "__CONTENT__",
              textReplace: k
            }]), a.data && "v" === m && (e = e.replace("messageBody", "messageBody file")), "s" === m && (e = e.replace("ownerNameContainer", "ownerNameContainer trigger"), e = e.replace("messageBody", "messageBody trigger"))) :
            "n" === a.type && (b.chatHandler.lastMessageOwner = "notif", a.isRtcError ? (k = "video" === a.rtcType ? b.languageParser.translate("chat", "video_call_error") : "screen" === a.rtcType ? b.languageParser.translate("chat", "screen_share_error") : b.languageParser.translate("chat", "voice_call_error"), e = n.escapeTemplateReplacement(t.noWebrtc, [{
              placeholder: "__MESSAGE__",
              textReplace: d
            }, {
              placeholder: "__HEADER__",
              textReplace: k
            }])) : e = n.escapeTemplateReplacement(x["chat-notification-container"], [{
              placeholder: "__MESSAGE_ID__",
              textReplace: u
            },
              {placeholder: "__MESSAGE__", textReplace: d}, {placeholder: "__TIME__", textReplace: l}]));
          h.template = e;
          h.buildView();
          try {
            $a.insertBefore(h.elementReferrer, p.getElementById("agentTypingContainer"))
          } catch (z) {
            q.handleError("Chat wrapper is null to append message : " + JSON.stringify(a), z.fileName, z.lineNumber, z.stack)
          }
          a.dontPlaySound || ("v" === m || a.isPending) || this.popoutWin && !this.popoutWin.closed || b.audioPlayer.play("chat_sound");
          if (a.timeStamp > r.lastMessageTimestamp) if ("v" === m) r.lastMessageTimestamp = a.timeStamp;
          else if (!document.hidden && n.chatElementInView(h.elementReferrer) && b.viewHandler.isMaximized) this.updateLastTimestamp(a.timeStamp); else if (this.unseenMessages.push(u), this.updateTotalUnseenMessages(), 0 < this.totalUnseenMessages && (this.setDivider(h.elementReferrer, x["chat-divider"], h), a = this.chatContainer.documentRef.getElementById("newMessagesBar"))) this.chatContainer.getElementById("notificationMessageText").innerHTML = b.languageParser.translate("chat", "newMessage", {num: this.totalUnseenMessages});
          !v ||
          b.formHandler.currentForm && !b.viewHandler.isMaximized || this.scrollToBottom();
          c && this.addSurveyHandlers(u);
          return u
        }, parseSurvey: function (a, b) {
          var d, k, f, e, g, h, l = a.match(n.regSurvey), m = "";
          if (!l) return {message: a, isSurvey: !1};
          e = a.match(n.regSurveyQuestion);
          g = "survey-" + (new Date).getTime();
          d = 0;
          for (k = l.length; d < k; d++) f = l[d].replace(n.regOption, ""), f = f.replace(n.regBr, ""), f = n.trim(f), h = g + d, m += n.escapeTemplateReplacement(t["survey-option"], [{
            placeholder: /__RADIO_ID__/gm,
            textReplace: h
          }, {
            placeholder: "__RADIO_NAME__",
            textReplace: b
          }, {placeholder: /__RADIO_VALUE__/gm, textReplace: f}]);
          return {
            message: n.escapeTemplateReplacement(t["tawk-survey-wrapper"], [{
              placeholder: "__QUESTION__",
              textReplace: e[0].replace(n.regOption, "")
            }, {placeholder: "__OPTIONS__", textReplace: m}]), isSurvey: !0
          }
        }, updateViewByStatus: function (a) {
          "emailTranscriptFormOnChatEnded" !== b.formHandler.currentForm && "restartChatForm" !== b.formHandler.currentForm && b.formHandler.closeForm();
          if (f.isPopup) {
            var c = m.getShortMessage(a);
            document.title = c ? L.pageName() + " - " +
              n.rawDecode(c) : L.pageName()
          }
          "online" === a || "away" === a ? (f.showConsentForm ? b.formHandler.openForm("consentForm") : f.showPreChatForm && !r.prechatFormSubmitted() && b.formHandler.openForm("preChatForm"), this.showWidget(), p && (b.viewHandler.isMaximized || p.showBubble(), p.toggleOfflineIcon(!1))) : "offline" === a && (f.hideWidgetOnOffline ? this.hideWidget() : (b.formHandler.openForm(f.showConsentForm ? "consentForm" : "offlineForm"), this.showWidget()), p && (p.hideBubble(), p.toggleOfflineIcon(!0), this.messagePreview && this.messagePreview.removeAllElements()))
        }
      });
      z.prototype.openAgentList = function () {
        var a = this.chatContainer.getElementById("agentBar");
        "preChatForm" !== b.formHandler.currentForm && (this.scrollToBottom(), this.chatContainer.getElementById("greetingsContent") && (this.chatContainer.getElementById("greetingsContent").style.display = "none"), a.style.display = "block")
      };
      z.prototype.addProfileDetail = function (a) {
        var c, d, k, f = this.chatContainer.getElementById("agentProfileContainer");
        a.pi || 1 < b.agents.agentsCount ? (c = new C("profileDetail", null, null, null, this.chatContainer.documentRef),
          k = t["agent-profile-description"], c.template = n.escapeTemplateReplacement(k, [{
          placeholder: "__POSITION_CLASS__",
          textReplace: a.pst ? "agentName" : "agentNameCentered"
        }, {placeholder: "__POSITION__", textReplace: a.pst}, {
          placeholder: "__NAME__",
          textReplace: a.n
        }])) : (c = new C("profileDetailNoImage", null, {className: "noImageAgentProfileDetail"}, null, this.chatContainer.documentRef), d = a.pst ? "&nbsp-&nbsp" + a.pst : "", k = t["agent-profile-description-noimage"], c.template = n.escapeTemplateReplacement(k, [{
          placeholder: "__POSITION__",
          textReplace: d
        }, {placeholder: "__NAME__", textReplace: a.n}]));
        f.appendChild(c.buildView())
      };
      z.prototype.renderAgentWithPosition = function (a) {
        var b, d, k;
        b = this.chatContainer;
        var f = b.getElementById("agentProfileContainer");
        b && (f && a) && (a = w.agentProfiles[a], b = new C("profileDetail" + a.pid, null, {className: "agent-profile-detailed theme-background-color"}, null, b.documentRef), d = a.pst ? a.pst : "", k = t["agent-profile-detailed"], b.template = n.escapeTemplateReplacement(k, [{
          placeholder: "__POSITION__",
          textReplace: d
        }, {
          placeholder: "__NAME__",
          textReplace: a.n
        }]), f.appendChild(b.buildView()))
      };
      z.prototype.renderAgentHeader = function (a) {
        var c, d, k = "", e = this.chatContainer, g = e.getElementById("agentProfileContainer");
        e && (g && a) && (c = w.agentProfiles[a], (d = c.pi ? r.agentImgUrl + "/" + c.pi : "") && (k = "background-image : url('" + d + "'); background-position : 0px 0px;z-index: " + (7 - b.agents.agentsCount) + ";"), k += "box-shadow: 0px 0px 0px 1px " + f.headerTxtColor + ";", c = new C("profileImage-" + c.pid, k, {className: "alias-image theme-background-color"}, null, e.documentRef),
          g.appendChild(c.buildView()), this.renderAgentWithPosition(a), 1 < b.agents.agentsCount && (g.style.width = 30 * b.agents.agentsCount - 10 * (b.agents.agentsCount - 1) + "px"), -1 < this.chatContainer.getElementById("greetingsMainContainer").className.indexOf("minimize") && (1 === b.agents.agentsCount && this.chatContainer.getElementById("headerAccountStateContainer").classList.remove("multiple-agent"), this.chatContainer.getElementById("shortMessage").style.display = "none"))
      };
      z.prototype.clearAgentHeader = function () {
        var a = this.chatContainer;
        a.getElementById("agentProfileContainer").innerHTML = "";
        a.getElementById("innerWrapper").className = "border-corner";
        a.getElementById("shortMessage").style.display = "block"
      };
      z.prototype.closeAgentList = function () {
        var a = this.chatContainer.getElementById("greetingsContent");
        this.chatContainer.getElementById("agentBar").style.display = "none";
        a && (n.hasClass(a, "no-content") ? this.chatContainer.getElementById("greetingsContent").style.display = "none" : this.chatContainer.getElementById("greetingsContent").style.display =
          "block")
      };
      z.prototype.calculateOwnerNameAndMessageTimeSizeAll = function () {
        var a = this.chatContainer.getElementById("chatWrapper"), c = null, d = null, k = null, f = null;
        [].forEach.call(a.getElementsByClassName("agentChatContainer"), function (a) {
          c = a.getElementsByClassName("messageOwnerName")[0];
          d = a.getElementsByClassName("messageTime")[0];
          f = a.getElementsByClassName("message")[0];
          k = a.getElementsByClassName("messageTimeContainer")[0];
          c && (d && f && k) && (1 < b.agents.agentsCount && f.offsetWidth < d.offsetWidth + c.offsetWidth ?
            (k.style.left = 45 + c.offsetWidth + "px", k.style.right = "auto") : (k.style.right = "0", k.style.left = "auto"))
        })
      };
      z.prototype.resetView = function () {
      };
      z.prototype.styleAgentBar = function () {
      };
      z.prototype.expandAgentList = function () {
      };
      z.prototype.hideWidget = function () {
      };
      z.prototype.showWidget = function () {
      };
      z.prototype.toggleWidget = function () {
        y && b.viewHandler.maximize()
      };
      z.prototype.popoutWidget = function () {
        y && b.viewHandler.popup()
      };
      z.prototype.handleIndicatorToggle = function () {
      };
      z.prototype.begin = function () {
      };
      z.prototype.getViewportDimensions =
        function (a) {
          var b, d = {};
          a ? (a = g, b = document) : (a = e.container.elementReferrer, b = e.container.documentRef);
          if ("undefined" !== typeof a.innerWidth) return d.height = a.innerHeight, d.width = a.innerWidth, d;
          if ("undefined" !== typeof b.documentElement && "undefined" !== typeof b.documentElement.clientWidth && 0 !== b.documentElement.clientWidth) return d.height = b.documentElement.clientHeight, d.width = b.documentElement.clientWidth, d;
          d.height = b.getElementsByTagName("body")[0].clientHeight;
          d.width = b.getElementsByTagName("body")[0].clientWidth;
          return d
        };
      z.prototype.getActualViewportDimensions = function () {
        var a = this.getViewportDimensions(!0);
        return {
          width: this.isVerticalScrollbar() ? a.width - this.getScrollerWidth() : a.width,
          height: this.isHorizontalScrollbar() ? a.height - this.getScrollerWidth() : a.height
        }
      };
      z.prototype.isVerticalScrollbar = function () {
        return this.getViewportDimensions(!0).height < document.body.scrollHeight
      };
      z.prototype.isHorizontalScrollbar = function () {
        var a = this.getViewportDimensions(!0).width;
        return document.documentElement && a < document.documentElement.scrollWidth ||
          a < document.body.scrollWidth
      };
      z.prototype.getScrollerWidth = function () {
        var a = null, b = null, d = 0, a = 0, a = document.createElement("div");
        a.style.cssText = "position: absolute; top: -10000px; left: -10000px; width: 100px; height: 50px; overflow: hidden";
        b = document.createElement("div");
        b.style.cssText = "width: 100%; height: 200px";
        a.appendChild(b);
        document.body.appendChild(a);
        d = b.offsetWidth;
        a.style.overflow = "auto";
        a = b.offsetWidth;
        document.body.removeChild(document.body.lastChild);
        return d - a
      };
      z.prototype.addSurveyHandlers =
        function (a) {
          var c, d = this;
          this.chatContainer && (c = this.chatContainer.getElementById(a), c = n.getElementsByTagName(c, "input"), c.forEach(function (c, f) {
            c.id && d.chatContainer.attachUserEventListener("click", function () {
              d.lastRadioButton !== c.id && (d.lastRadioButton = c.id, b.chatHandler.sendMessage(c.value))
            }, c.id, "survey" + a + f + "click")
          }))
        };
      z.prototype.ifScrollbarDown = function () {
        var a, c, d;
        if (!this.chatContainer || !this.chatContainer.elementReferrer) return !1;
        a = this.chatContainer.getElementById("chatContainer");
        d =
          this.chatContainer.getElementById("chatPanel");
        if (a && d) {
          if (b.formHandler.currentForm) return d.style.display = "block", c = a.offsetHeight + 10, a = 30 > a.scrollHeight - (a.scrollTop + c), d.style.display = "none", a;
          c = a.offsetHeight + 10;
          return 30 > a.scrollHeight - (a.scrollTop + c)
        }
      };
      z.prototype.scrollToBottom = function () {
        if (this.chatContainer && this.chatContainer.elementReferrer) {
          var a = this.chatContainer.getElementById("chatContainer"),
            b = this.chatContainer.getElementById("chatPanel");
          if (a) {
            var d = a.style.display, k = b.style.display;
            "none" === d && (a.style.display = "block");
            "none" === k && (b.style.display = "block");
            a.scrollTop = 1E8;
            "none" === d && (a.style.display = d);
            "none" === k && (b.style.display = k);
            -1 === this.chatContainer.getElementById("greetingsMainContainer").className.indexOf("minimize") && 0 !== a.scrollTop && this.toggleGreetingsView(a.scrollHeight < this.chatContainer.getElementById("chatWrapper").offsetHeight)
          }
        }
      };
      z.prototype.isChatScrollbar = function () {
        var a;
        if (this.chatContainer && this.chatContainer.elementReferrer && (a = this.chatContainer.getElementById("chatContainer"))) return a.scrollHeight >
          this.getViewportDimensions(f.isPopup).height - 139
      };
      z.prototype.addWaitTime = function () {
        var a, c, d;
        !b.chatHandler.agentHasMessaged && f.showWaitTime && (c = this.chatContainer.getElementById("greetingsContent"), (a = this.chatContainer.getElementById("greetingsWaitTime")) && c && (d = Math.ceil(r.waitTime / 6E4), d = b.languageParser.translate("chat", "messageQueuedText", {
          t: d,
          strongStart: "<b>",
          strongEnd: "</b>"
        }), a.innerHTML = d, a.style.display = "block", c.style.display = "block", this.waitTimeUpdater(!0)))
      };
      z.prototype.removeWaitTime =
        function () {
          var a, b;
          this.chatContainer && this.chatContainer.elementReferrer && (a = this.chatContainer.getElementById("greetingsWaitTime"), b = this.chatContainer.getElementById("greetingsContent"), a && b && (a.innerHTML = "", a.style.display = "none", n.hasClass(b, "no-content") && (b.style.display = "none")))
        };
      z.prototype.waitTimeUpdater = function (a) {
        var c, d, k = this;
        if (this.chatContainer && this.chatContainer.elementReferrer && (d = this.chatContainer.getElementById("greetingsWaitTime")) && !(6E4 >= r.waitTime)) {
          c = r.waitTime % 6E4 ||
            6E4;
          if (a) return setTimeout(function () {
            k.waitTimeUpdater()
          }, c);
          r.waitTime -= c;
          a = Math.ceil(r.waitTime / 6E4);
          a = b.languageParser.translate("chat", "messageQueuedText", {t: a, strongStart: "<b>", strongEnd: "</b>"});
          d.innerHTML = a;
          setTimeout(function () {
            k.waitTimeUpdater()
          }, 6E4)
        }
      };
      z.prototype.appendAgentIsTypingElement = function (a) {
        var b, d, k = this.ifScrollbarDown(), f = w.agentProfiles[a];
        this.chatContainer && (d = f && f.pi ? r.agentImgUrl + "/" + f.pi : "", f.strongStart = "<b>", f.strongEnd = "</b>", b = t["agent-typing"], b = n.escapeTemplateReplacement(b,
          [{placeholder: "__MESSAGE_ID__", textReplace: a}, {
            placeholder: /__NAME__/gm,
            textReplace: f.n
          }, {
            placeholder: "__IMAGE_URL__",
            textReplace: d ? "url('" + d + "');" : "transparent;"
          }]), this.chatContainer.getElementById("agentTypingContainer").innerHTML += b, this.chatContainer.getElementById("agentTypingContainer").style.display = "block", k && this.scrollToBottom())
      };
      z.prototype.removeAgentTypingElement = function (a) {
        this.chatContainer && ((a = this.chatContainer.getElementById("agentTyping-" + a)) && a.parentNode.removeChild(a), this.chatContainer.getElementById("agentTypingContainer").style.display =
          "none")
      };
      z.prototype.changeRating = function (a) {
        var c = "c";
        this.chatContainer && (0 > a ? a = f.showEmoji() && "undefined" !== typeof H ? ":thumbsdown_tone2:" : "&#128078;" : 0 < a ? a = f.showEmoji() && "undefined" !== typeof H ? ":thumbsup_tone2:" : "&#128077;" : (a = b.languageParser.translate("chat", "remove_rate"), c = "n"), b.viewHandler.appendMessage({
          message: a,
          type: c,
          time: new Date,
          senderType: "v",
          ownerId: D.visitorId
        }))
      };
      z.prototype.notifiyDepartmentIsNotOnline = function (a, c) {
        var d, k, f = this.chatContainer;
        f && (d = f.getElementById("chatWrapper")) &&
        (k = n.escapeTemplateReplacement(t.departmentOfflineNotification, [{
          placeholder: "__TITLE__",
          textReplace: La ? "<span>" + b.languageParser.translate("chat", "notificationTitle") + "</span>" : "<center><span>" + b.languageParser.translate("chat", "notificationTitle") + "</span></center>"
        }, {
          placeholder: "__MESSAGE__",
          textReplace: b.languageParser.translate("chat", "offline" === c ? "departmentIsOffline" : "departmentIsAway", {
            departmentName: a,
            strongStart: "<b>",
            strongEnd: "</b>"
          })
        }]), k = n.createElement(f.documentRef, "div", {
          id: "departmentOfflineNotification",
          className: "messageContainer"
        }, null, k), d.insertBefore(k, d.firstChild))
      };
      z.prototype.setDivider = function (a, c, d) {
        var k, e, g, h = this;
        !this.chatContainer.documentRef.getElementById("newMessageDivider") && (g = this.chatContainer.documentRef.getElementById("chatWrapper"), e = new C("newMessageDivider"), e.template = n.escapeTemplateReplacement(c, [{
          placeholder: /__NEW_MESSAGES__/gm,
          textReplace: b.languageParser.translate("chat", "newMessages").toUpperCase()
        }]), e.buildView(), g.insertBefore(e.elementReferrer, d.elementReferrer),
        !n.chatElementInView(e.elementReferrer) && (b.viewHandler.isMaximized || f.isPopup || f.isEmbedded) && (k = this.chatContainer.documentRef.getElementById("newMessagesBar"))) && (k.className = "visible", b.eventHandler.listen(k, this.clickEvent, function () {
          h.scrollToSeeMessage(a);
          k.className = ""
        }, "newmessagedivider"))
      };
      z.prototype.removeDivider = function () {
        var a, b = this;
        clearTimeout(this.removeDividerTimeout);
        this.removeDividerTimeout = setTimeout(function () {
          (a = b.chatContainer.documentRef.getElementById("newMessageDivider")) &&
          a.parentNode.removeChild(a)
        }, 1E3)
      };
      z.prototype.scrollToSeeMessage = function (a) {
        var b = this.chatContainer.documentRef.getElementById("chatContainer");
        a && b && (b.scrollTop = a.offsetTop - b.offsetHeight + 50, this.checkSeenMessageViewport())
      };
      z.prototype.checkUnseenMessages = function () {
        var a;
        if (!this.newMessageNotSeen && !this.unseenMessages.length) return !1;
        for (var b = 0; b < this.unseenMessages.length; b++) n.chatElementInView(this.unseenMessages[b]) && (this.unseenMessages.splice(b, 1), b--);
        if (!this.unseenMessages.length ||
          y && this.ifScrollbarDown()) this.newMessageNotSeen = !1, (a = this.chatContainer.documentRef.getElementById("newMessagesBar")) && setTimeout(function () {
          a.className = ""
        }, 250), this.removeDivider()
      };
      z.prototype.parseUploadedFile = function (a) {
        var c = "https://tawk.link/" + a.name, d = this, k = t["file-upload"], f = this.ifScrollbarDown();
        if (-1 !== ["jpeg", "png", "gif"].indexOf(a.type) && 2E6 >= a.size) {
          var e = new Image;
          e.onload = function () {
            var k = n.createElement(d.chatContainer.documentRef, "a", {href: c, target: "_blank"}),
              h = d.chatContainer.getElementById("placeholder-" +
                a.name), l = null, m = null;
            if (h) {
              k.appendChild(e);
              k.className = "clearfix";
              h.parentNode.insertBefore(k, h);
              h.parentNode.removeChild(h);
              if (!b.viewHandler.isMaximized && d.messagePreview) {
                l = n.createElement(d.messagePreview.container.documentRef, "a", {href: c, target: "_blank"});
                if (m = d.messagePreview.container.getElementById("placeholder-" + a.name)) l.appendChild(e), l.className = "clearfix", m.parentNode.insertBefore(l, m), m.parentNode.removeChild(m);
                d.messagePreview.scrollToBottom()
              }
              setTimeout(function () {
                g.requestAnimationFrame(function () {
                  f &&
                  d.scrollToBottom()
                })
              }, 1E3 / 6)
            }
          };
          e.setAttribute("src", c);
          e.setAttribute("class", "uploaded-image");
          k = n.escapeTemplateReplacement(k, [{
            placeholder: "__FILE_DISPLAY__",
            textReplace: '<div class="image-loader" id="placeholder-' + a.name + '">' + t.loader + "</div>"
          }])
        } else k = -1 !== ["video/mp4", "video/ogg", "video/webm"].indexOf(a.mimeType) ? n.escapeTemplateReplacement(k, [{
          placeholder: "__FILE_DISPLAY__",
          textReplace: '<video width="auto" height="auto" controls style="display: block; max-width: 420px; width: 100%;"><source src="' +
            c + '" type="' + a.mimeType + '"></source></video>'
        }]) : -1 !== ["audio/mp3", "audio/ogg"].indexOf(a.mimeType) ? n.escapeTemplateReplacement(k, [{
          placeholder: "__FILE_DISPLAY__",
          textReplace: '<audio controls style="display: block; max-width : 220px;"><source src="' + c + '" type="' + a.mimeType + '"></source></audio>'
        }]) : t["file-upload-not-img-vid-audio"];
        return k = n.escapeTemplateReplacement(k, [{
          placeholder: "__FILE_NAME__",
          textReplace: a.fileName
        }, {placeholder: "__DOWNLOAD_URL__", textReplace: c}, {
          placeholder: "__DOWNLOAD_TEXT__",
          textReplace: b.languageParser.translate("chat", "downloadFile")
        }, {placeholder: "__FILE_SIZE__", textReplace: n.formatFileSize(a.size)}, {
          placeholder: "__FILE_TYPE__",
          textReplace: a.type
        }, {placeholder: "__DOWNLOAD_LABEL__", textReplace: b.languageParser.translate("chat", "download")}])
      };
      z.prototype.startUpload = function (a) {
        var c, d, k, f = this, e = t.fileUploadProgress, g = this.ifScrollbarDown();
        k = this.chatContainer.getElementById("fileInput");
        c = a.name || a.fileName;
        d = n.getElementsByClassName(f.chatContainer.elementReferrer,
          "upload-error");
        if (d.length) for (var h = 0; h < d.length; h++) d[h].parentNode.removeChild(d[h]);
        b.fileUploadHandler.getUploadHandler(function (d) {
          var h;
          d.handle ? (h = d.handle, e = n.escapeTemplateReplacement(e, [{
            placeholder: "__HANDLE__",
            textReplace: h
          }, {placeholder: "__FILE_NAME__", textReplace: n.rawEncode(c)}, {
            placeholder: "__FILE_STATUS__",
            textReplace: b.languageParser.translate("chat", "uploading")
          }]), f.chatContainer.getElementById("chatWrapper").innerHTML += e, g && f.scrollToBottom(), b.fileUploadHandler.uploadFile(h,
            a, c, function (b, d) {
              k.value = "";
              b.success || f.handleUploadError(a, c, h, d)
            })) : (f.handleUploadError(a, c, h), k.value = "")
        })
      };
      z.prototype.handleUploadError = function (a, c, d, k) {
        var f = this.ifScrollbarDown(), e = this, g = document.createElement("a"),
          h = new C("uploadFailedNotification"), l = t.uploadFailedNotification,
          l = l.replace(/__UPLOAD_FAILED_LABEL__/, b.languageParser.translate("chat", "generalUploadErrorLabel")),
          l = l.replace(/__UPLOAD_FAILED_MESSAGE__/, b.languageParser.translate("chat", "generalUploadError", {fileName: n.rawEncode(c)}));
        h.template = l;
        h.buildView();
        if (a) {
          if (d) {
            c = this.chatContainer.getElementById("upload-" + d);
            if (!c) return;
            c.parentNode.removeChild(c);
            if (a && (!k || "generalUploadError" === k)) {
              g.innerHTML = b.languageParser.translate("chat", "tryAgain");
              g.setAttribute("href", "javascript:void(0);");
              g.setAttribute("id", "retry-" + d);
              h.elementReferrer.getElementsByClassName("uploadFailedRetryContainer")[0].appendChild(g);
              var m;
              m = b.eventHandler.listen(g, this.clickEvent, function () {
                b.eventHandler.removeEventHandler(g, this.clickEvent,
                  m);
                h.elementReferrer.parentNode.removeChild(h.elementReferrer);
                e.startUpload(a)
              }, "retry-" + d)
            }
          }
          this.chatContainer.getElementById("chatContainer").appendChild(h.elementReferrer);
          f && this.scrollToBottom()
        }
      };
      z.prototype.updateFileProgress = function (a) {
        var b = this.chatContainer.getElementById("upload-" + a.handle);
        a = 360 * (a.progress / 100);
        b && (180 >= a ? (b.getElementsByClassName("circle-progress-left")[0].style.transform = "rotate(" + a + "deg)", b.getElementsByClassName("circle-progress-right")[0].style.display = "none",
          b.getElementsByClassName("circle-progress-clip")[0].style.display = "block") : (b.getElementsByClassName("circle-progress-left")[0].style.transform = "rotate(180deg)", b.getElementsByClassName("circle-progress-right")[0].style.transform = "rotate(" + a + "deg)", b.getElementsByClassName("circle-progress-right")[0].style.display = "block", b.getElementsByClassName("circle-progress-clip")[0].style.display = "none"))
      };
      z.prototype.fileUploaded = function (a) {
        (a = this.chatContainer.getElementById("upload-" + a)) && a.parentNode.removeChild(a)
      };
      z.prototype.retryUploadFile = function (a) {
        var b = this, d, k;
        this.retryUploadList[a] && this.startUpload(this.retryUploadList[a], function () {
          d = b.chatContainer.getElementById(a);
          k = d.parentNode;
          k.removeChild(d);
          k.parentNode.removeChild(k);
          delete b.retryUploadList[a];
          Object.keys(b.retryUploadList).length || b.chatContainer.getElementById("maxFileNotificationContainer").classList.add("hidden");
          d = null
        })
      };
      z.prototype.checkUploadFileWarning = function (a, c) {
        var d = this.chatContainer.getElementById("maxFileNotificationContainer"),
          k = this.chatContainer.getElementById("maxSizeNotificationContainer"),
          f = this.chatContainer.getElementById("maxFileSizeList"),
          e = this.chatContainer.getElementById("maxFileNumberList"), g = this, h;
        if (c.length) {
          h = "<ul>";
          this.retryUploadList = {};
          for (var l = 0; l < c.length; l++) this.retryUploadList["retry_upload_" + l] = c[l], h += "<li>" + c[l].name + ' <a id="retry_upload_' + l + '" class="actionRetry">' + b.languageParser.translate("notifications", "retry") + "</a></li>";
          e.innerHTML = h + "</ul>";
          h = n.getElementsByClassName(e, "actionRetry");
          for (e = 0; e < h.length; e++) h[e].addEventListener(g.clickEvent, function () {
            this.classList.add("hidden");
            g.retryUploadFile(this.id)
          });
          d.classList.remove("hidden")
        }
        if (a.length) {
          h = "<ul>";
          for (d = 0; d < a.length; d++) h += "<li>" + a[d].name + "</li>";
          f.innerHTML = h + "</ul>";
          k.classList.remove("hidden")
        }
        h && this.scrollToBottom()
      };
      z.prototype.applyWhiteLabelSettings = function () {
        var a, b, d;
        this.chatContainer && (a = this.chatContainer.documentRef.getElementById(this.tawktoLinkName), b = this.chatContainer.documentRef.getElementById(this.bottomContainerName),
          d = {
            id: this.tawktoLinkName,
            parentElem: b,
            siblingName: b.nextSibling ? b.nextSibling.id : null,
            grandParentName: b.parentNode.id
          }, f.whiteLabel() ? (d.url = f.whiteLabel().url || null, d.label = n.transformLabel(n.rawEncode(f.whiteLabel().label)) || null, d.textColor = f.whiteLabel().textColor || "#000000") : (d.url = "javascript:void(0);", d.label = t["default-branding"]), null === d.label ? (a = this.chatContainer.documentRef.getElementById("contentContainer"), a.className += "no-branding", b.parentNode.removeChild(b)) : (n.insertRandomTagsBeforeAndAfter(b,
          b.parentNode, "div"), n.insertRandomTagsBeforeAndAfter(a, a.parentNode, "a"), n.applyWhiteLabelSettings(a, d)))
      };
      z.prototype.showCallRequest = function (a, c, d, k) {
        var e, g, h = this;
        e = t.incomingCallRequest;
        var l = (new Date).getTime();
        g = (new Date(d)).getTime();
        l = c - (l - g);
        d = {callId: a, ringTimeout: c, startedOn: d, caller: k, isMissed: null};
        g = this.chatContainer.getElementById("incoming-call");
        g || (c = this.ifScrollbarDown(), b.chatHandler.webrtcWin && !b.chatHandler.webrtcWin.closed ? b.chatHandler.webrtcWin.focus() : (g = (k = w.agentProfiles[w.profiles[k.urid]]) &&
        k.pi ? r.agentImgUrl + "/" + k.pi : "default", e = e.replace(/__IMAGE_URL__/, g ? "url('" + g + "');" : "transparent;"), e = e.replace(/__INCOMING_CALL__/, b.languageParser.translate("chat", "incoming_call_message", {name: k.n})), e = e.replace(/__ACCEPT_CALL__/, b.languageParser.translate("chat", "accept_call")).replace(/__DECLINE_CALL__/, b.languageParser.translate("chat", "decline_call")), clearTimeout(this.incomingCallTimeout), g = new C("incoming-call"), g.template = e, g.buildView(), e = this.chatContainer.getElementById("chatContainer"),
          k = e.parentNode, e && k && (k.insertBefore(g.elementReferrer, e), e = this.chatContainer.getElementById("accept-call"), k = this.chatContainer.getElementById("decline-call"), c && this.scrollToBottom(), b.eventHandler.listen(e, this.clickEvent, function () {
          clearTimeout(h.incomingCallTimeout);
          n.getWebRTCToken(!1, !1, function () {
            h.removeCallRequest()
          })
        }, "acceptVideoCall"), b.eventHandler.listen(k, this.clickEvent, function () {
          clearTimeout(h.incomingCallTimeout);
          n.rejectCall(a, function () {
            h.removeCallRequest()
          })
        }, "declineVideoCall"),
          this.incomingCallTimeout = setTimeout(function () {
            h.removeCallRequest()
          }, l), f.isPopup || (b.viewHandler.isMaximized || f.isEmbedded) || (b.viewHandler.indicator.show(), b.viewHandler.messagePreview && b.viewHandler.messagePreview.show(b.viewHandler.indicator.unansweredMessages, null, d)), b.audioPlayer.play("chat_sound"))))
      };
      z.prototype.removeCallRequest = function () {
        var a = this.chatContainer.getElementById("incoming-call");
        a && a.parentNode.removeChild(a);
        this.messagePreview && this.messagePreview.incomingCallContainer &&
        this.messagePreview.removeCallRequest()
      };
      z.prototype.subscribeCallUpdate = function (a, c) {
        var d, k, f, e, g, h, l, m = this, p = this.chatContainer.documentRef, q = this.callData[a],
          r = this.ifScrollbarDown();
        q ? d = q.callView : (d = new C(a, null, {className: "webrtcCallContainer messageContainer clearfix"}, null, p), d.template = n.escapeTemplateReplacement(t.callInfo, [{
          placeholder: "__LOADER__",
          textReplace: t.loader
        }]), d.buildView(), p.getElementById("chatWrapper").insertBefore(d.elementReferrer, p.getElementById("agentTypingContainer")),
          this.callData[a] = {callView: d});
        k = n.getElementsByClassName(d.elementReferrer, "callLoader");
        f = n.getElementsByClassName(d.elementReferrer, "callInfoContainer");
        e = n.getElementsByClassName(d.elementReferrer, "callIconWrapper");
        g = n.getElementsByClassName(d.elementReferrer, "callErrorContainer");
        k && k.length && (k[0].style.display = "block");
        g && g.length && (g[0].style.display = "none");
        b.socketManager.sendToConnector("getCallStatus", {callId: a}, function (p, q) {
          k && k.length && (k[0].style.display = "none");
          p ? (f && f.length && (f[0].style.display =
            "none"), g && g.length ? g[0].style.display = "block" : (l = t.callError.replace("__HEADER__", b.languageParser.translate("chat", "error_title")).replace("__MESSAGE__", b.languageParser.translate("chat", "call_error_load")).replace("__ACTION__", b.languageParser.translate("notifications", "retry")), g = n.createElement(m.chatContainer.documentRef, "div", null, null, l), g.className = "callErrorContainer", g.style.display = "block", d.elementReferrer.appendChild(g)), (h = n.getElementsByClassName(d.elementReferrer, "retry-load")) &&
          h.length && b.eventHandler.listen(h[0], m.clickEvent, function () {
            m.subscribeCallUpdate(a, c)
          }, "retryCallLoad" + a)) : q.data.call.f && (f && f.length && (f[0].style.display = "block"), callIcon = q.data.call.f.vid ? '<span class="callIcon btn-icon icon-video-chat"></span>' : q.data.call.f.scrn ? '<span class="callIcon btn-icon icon-desktop-sharing"></span>' : '<span class="callIcon btn-icon icon-voice-chat"></span>', e && e.length && (e[0].innerHTML = callIcon), m.callData[a].ver = q.data.call.ver, r && m.scrollToBottom(), m.updateCallView(q.data.call,
            c))
        })
      };
      z.prototype.updateCallView = function (a, c) {
        var d, k, f, e, g, h = !!a.mssd;
        f = !!a.rjctd;
        k = this.callData[a.clid];
        var l = {}, l = null;
        if (!k) return this.subscribeCallUpdate(a.clid);
        k.ver > a.ver || (g = this.ifScrollbarDown(), k = k.callView, l = k.elementReferrer.getElementsByClassName("btn-icon")[0], callIconContainerEl = k.elementReferrer.getElementsByClassName("callIconContainer")[0], callIconContainerEl.style.backgroundColor = "#47ca2b", "ringing" === a.stts ? ("v" !== a.cllr.t && this.showCallRequest(a.clid, a.rt, a.so, a.cllr), d =
          b.languageParser.translate("chat", ("v" === a.cllr.t ? "visitor_" : "agent_") + "ringing")) : "in-progress" === a.stts ? (this.removeCallRequest(), d = b.languageParser.translate("chat", "ongoing_call")) : "completed" === a.stts && (e = n.parseChatTime(a.so), this.removeCallRequest(), a.f.vid || a.f.scrn || (l.style.transform = "rotate(135deg)"), callIconContainerEl.style.backgroundColor = "#e52f48", l = {
          callId: a.clid,
          ringTimeout: a.rt,
          startedOn: a.so,
          caller: a.cllr,
          isMissed: h
        }, c || (!b.viewHandler.messagePreview || y) || b.viewHandler.messagePreview.show(b.viewHandler.indicator.unansweredMessages,
          null, l), h || f ? (d = f ? b.languageParser.translate("chat", "rejected_call") : b.languageParser.translate("chat", "missed_" + ("v" === a.cllr.t ? "agent" : "visitor")), f = b.languageParser.translate("chat", "call_started_on", {startedOn: e})) : (f = n.getTimeDifference(a.so, a.eo), d = b.languageParser.translate("chat", "completed_call"), f = b.languageParser.translate("chat", "call_end_details", {
          startedOn: e,
          duration: f
        })), (e = n.getElementsByClassName(k.elementReferrer, "callEndDetails")) && e.length && (e[0].innerHTML = f, e[0].style.display =
          "block")), (k = n.getElementsByClassName(k.elementReferrer, "callTitle")) && k.length && (k[0].innerHTML = d, h && (k[0].className += " missed")), this.callData[a.clid].ver = a.ver, g && this.scrollToBottom())
      };
      z.prototype.closeMessagePreview = function (a) {
        a.ts && this.messagePreview && this.messagePreview.removeAllElements(a.ts)
      };
      z.prototype.toggleGreetingsView = function (a) {
        var c = this.chatContainer.getElementById("chatContainer"),
          d = this.chatContainer.getElementById("greetingsMainContainer"), k = Math.floor(c.scrollHeight),
          f = Math.floor(c.clientHeight);
        a || k === f || 5 >= k - f ? 0 === c.scrollTop && -1 !== d.className.indexOf("minimize") && (d.className = d.className.replace(" minimize", ""), this.chatContainer.getElementById("agentProfileContainer").className = "", 1 === b.agents.agentsCount && this.chatContainer.getElementById("headerAccountStateContainer").classList.remove("multiple-agent"), this.chatContainer.getElementById("shortMessage").style.display = "block") : -1 === d.className.indexOf("minimize") && (d.className += " minimize", this.chatContainer.getElementById("agentProfileContainer").className =
          "show", 1 < b.agents.agentsCount ? this.chatContainer.getElementById("headerAccountStateContainer").classList.add("multiple-agent") : this.chatContainer.getElementById("headerAccountStateContainer").classList.remove("multiple-agent"), 0 < b.agents.agentsCount && (this.chatContainer.getElementById("shortMessage").style.display = "none"))
      };
      z.prototype.checkSeenMessageViewport = function () {
        var a = -1, c, d;
        if (0 !== this.unseenMessages.length) {
          for (var k = 0; k < this.unseenMessages.length; k++) {
            d = this.unseenMessages[k];
            var f = this.chatContainer.getElementById(d);
            f && n.chatElementInView(f) && (c = b.chatHandler.getMessageObjectById(d));
            if (c && c.timeStamp > r.lastMessageTimestamp) {
              a = k;
              break
            }
          }
          -1 !== a && (d = this.unseenMessages[this.unseenMessages.length - 1]) && (c = b.chatHandler.getMessageObjectById(d)) && this.updateLastTimestamp(c.timeStamp)
        }
      };
      z.prototype.updateLastTimestamp = function (a) {
        this.lastUpdateTimeout && clearTimeout(this.lastUpdateTimeout);
        this.clearUnseenNotification();
        this.lastUpdateTimeout = setTimeout(function () {
          !(document.hidden || document.msHidden || document.webkitHidden) &&
          a > r.lastMessageTimestamp && (r.lastMessageTimestamp = a, b.socketManager.sendToConnector("visitorChatSeen", {timestamp: a}, function () {
          }))
        }, 1E3)
      };
      z.prototype.clearUnseenNotification = function () {
        var a = this.chatContainer.documentRef.getElementById("newMessagesBar");
        this.unseenMessages = [];
        a && (a.className = "");
        this.updateTotalUnseenMessages();
        this.removeDivider()
      };
      z.prototype.updateTotalUnseenMessages = function () {
        this.totalUnseenMessages = this.unseenMessages.length;
        b.viewHandler.indicator && b.viewHandler.indicator.updateUnseenMessages(this.totalUnseenMessages)
      };
      z.prototype.scrollToFirstUnseen = function () {
        var a = this.chatContainer.documentRef.getElementById("newMessageDivider");
        a ? this.scrollToSeeMessage(a) : this.scrollToBottom()
      };
      var M = function () {
        var a = this;
        this.currentForm = "";
        this.formView = null;
        this.forms = {
          nameForm: {
            id: "changeNameForm",
            title: "NameFormMessage",
            fields: [{
              fieldName: "name",
              valueMaxLength: 40,
              languageKey: "Name",
              getValue: b.visitorHandler.getNameValue,
              validation: "isValidString",
              type: "input",
              isRequired: !0
            }],
            publish: "notifyNameChange",
            afterSave: b.visitorHandler.setNameFromForm,
            resize: "auto"
          },
          emailTranscriptForm: {
            id: "emailTranscriptForm",
            title: "EmailTranscriptFormMessage",
            fields: [{
              fieldName: "name",
              valueMaxLength: 40,
              languageKey: "Name",
              getValue: b.visitorHandler.getNameValue,
              validation: "isValidString",
              type: "input",
              hiddenIE8: !0,
              isRequired: !0
            }, {
              fieldName: "transcriptEmail",
              valueMaxLength: 150,
              languageKey: "Email",
              getValue: b.visitorHandler.getTranscriptEmailValue,
              validation: "isValidEmail",
              type: "input",
              instantValidation: !1,
              isRequired: !0
            }],
            saveFunc: "requestEmailTranscript",
            afterSave: b.visitorHandler.setTranscriptValue,
            resize: "auto"
          },
          offlineForm: {
            id: "offlineForm", getTitle: function () {
              return n.transformGreetings(f.offlineOptions.text)
            }, dynamicFields: null, saveFunc: "submitOfflineForm", dontCloseForm: !0, afterSave: a.showOfflineOverlay
          },
          preChatForm: {
            id: "preChatForm", getTitle: function () {
              return f.prechatOptions.text ? n.transformGreetings(f.prechatOptions.text) : f.isEmbedded && "page" === $_Tawk_WidgetId && pageType && "profile" === pageType ? b.languageParser.translate("form", "PreChatFormMessageProfile") : b.languageParser.translate("form",
                "PreChatFormMessage")
            }, dynamicFields: null, saveFunc: "submitPrechatForm", afterSave: a.handlePrechatForm, dontCloseForm: !1
          },
          inactivityOverlay: {
            id: "inactivityOverlay",
            overlayMessage: "inactive",
            otherEvent: {eventName: "click", elementName: "inactivityOverlay", executedFunc: b.main.criticalRefresh}
          },
          maintenanceOverlay: {id: "maintenanceOverlay", overlayMessage: "maintenance"},
          endChatForm: {
            id: "endChatForm",
            publish: "endVisitorChat",
            afterSave: a.handleChatEnded,
            dontCloseForm: !1,
            resize: "auto",
            title: "EndChatTitle"
          },
          consentForm: {
            id: "consentForm",
            saveFunc: "submitConsent",
            getTitle: function () {
              return n.transformGreetings(f.consentOption.text).replace(n.regLineBreaks, n.br)
            },
            dynamicFields: null,
            dontCloseForm: !0,
            otherEvent: {
              eventName: "click", elementName: "formDecline", executedFunc: function () {
                f.isPopup ? g.close() : r.chatWindowState("min")
              }
            },
            customButtons: function () {
              return f.consentOption.buttons
            }
          },
          restartChatForm: {
            id: "restartChatForm", dontCloseForm: !0, resize: "auto", title: "chatEnded", fields: [{
              fieldName: "transcriptEmail",
              valueMaxLength: 150,
              languageKey: "Email",
              getValue: b.visitorHandler.getTranscriptEmailValue,
              validation: "isValidEmail",
              type: "input",
              instantValidation: !1,
              isRequired: !0
            }], saveFunc: "requestEmailTranscript", afterSave: b.visitorHandler.setTranscriptValue
          }
        };
        b.eventEmitter.on("localeChanged", function () {
          var b = a.currentForm;
          b && (a.closeForm(), a.openForm(b))
        });
        D.displayName.subscribe(function (b) {
          !a.currentForm || "preChatForm" !== a.currentForm && "offlineForm" !== a.currentForm || a.formView.updateName(b)
        });
        D.email.subscribe(function (b) {
          !a.currentForm || "preChatForm" !==
          a.currentForm && "offlineForm" !== a.currentForm || a.formView.updateEmail(b)
        });
        r.prechatFormSubmitted.subscribe(function () {
          "preChatForm" === a.currentForm && a.closeForm()
        })
      };
      M.prototype.openForm = function (a) {
        var c, d, k, f = this, h = b.viewHandler.chatContainer.getElementById("formContainer"), l = this.forms[a];
        if (l && this.currentForm !== a && h) {
          this.formView = null;
          if ("preChatForm" === a || "offlineForm" === a) {
            if (c = b.viewHandler.chatContainer.getElementById("contentContainer")) c.className += " form-opened ";
            this.formView = new Y(l,
              a);
            "offlineForm" === a && b.viewHandler.indicator && (b.viewHandler.indicator.pageTitleNotification.off(), b.viewHandler.indicator.hide());
            e && e.clearTextareaResize()
          } else this.formView = new ha(l);
          this.currentForm = a;
          this.formView.buildForm();
          this.formView.buildView(b.viewHandler.chatContainer.documentRef);
          k = b.viewHandler.chatContainer.getElementById("greetingsMainContainer");
          c = b.viewHandler.chatContainer.getElementById("greetingsText");
          b.viewHandler.chatContainer.getElementById("chatPanel").style.display =
            "none";
          h.innerHTML = "";
          h.appendChild(this.formView.elementReferrer);
          h.style.display = "block";
          this.forms[a].getTitle && "consentForm" !== a && this.forms[a].getTitle() ? (c.innerHTML = this.forms[a].getTitle(), k.style.display = "block") : k.style.display = "none";
          "endChatForm" === a && (k.style.display = "block", b.viewHandler.chatContainer.getElementById("contentContainer").className = "chatEndVisible");
          this.attachEventListeners();
          this.formView.addPlaceholderHandler();
          h.className = this.formView.isFormRequired ? "has-required" :
            "";
          b.eventHandler.listen(g, "resize", function () {
            f.resize()
          }, "windowresizeform");
          n.redraw(h);
          "preChatForm" !== a && "offlineForm" !== a || b.eventEmitter.emit("formOpened");
          var m, p = 0, q = 0, r = 0;
          a = /Firefox/i.test(x.userAgent) ? "DOMMouseScroll" : "mousewheel";
          y && (a = "touchstart touchmove touchend");
          d = b.viewHandler.chatContainer.getElementById("formFieldsContainer");
          b.viewHandler.chatContainer.attachUserEventListener(a, function (a) {
              var b, c = Math.ceil(d.scrollHeight), f = Math.ceil(d.clientHeight);
              m = a.originalEvent ? a.originalEvent :
                a;
              r = m.detail ? -40 * m.detail : m.wheelDelta;
              b = 0 < r;
              "touchmove" === a.type ? q = a.changedTouches[0].clientY : "touchstart" === a.type ? p = a.touches[0].clientY : "touchend" === a.type && (b = p < q);
              if (0 === d.scrollTop && -1 !== k.className.indexOf("minimize")) {
                if (0 > r || p > q) return
              } else if (-1 === k.className.indexOf("minimize") && (p < q || 0 < r)) return;
              b || c === f || 5 >= c - f ? 0 === d.scrollTop && -1 !== k.className.indexOf("minimize") && (k.className = k.className.replace(" minimize", "")) : -1 === k.className.indexOf("minimize") && (k.className += " minimize")
            }, "formFieldsContainer",
            "formContainerScroll");
          this.handleResizeofForm()
        }
      };
      M.prototype.handleResizeofForm = function (a) {
        if (!(y || f.isPopup || f.isEmbedded)) if (!b.formHandler.currentForm || a) b.viewHandler.chatContainer.restyle("height", f.maximizedDimensions().height + "px !important"); else {
          var c = b.viewHandler.chatContainer.getElementById("formContainer");
          a = b.viewHandler.chatContainer.getElementById("greetingsMainContainer");
          var d = 120;
          "offlineForm" === b.formHandler.currentForm && "block" === b.viewHandler.chatContainer.getElementById("overlayOfflineForm").style.display ?
            c = b.viewHandler.chatContainer.getElementById("offlineForm") : n.getElementsByClassName(c, "formFrame") ? c = n.getElementsByClassName(c, "formFrame")[0] : (c = n.getElementsByClassName(c, "formTable")[0], d = 60);
          a && (d += a.offsetHeight);
          a = c.offsetHeight + d;
          a >= f.maximizedDimensions().height && (a = f.maximizedDimensions().height);
          b.viewHandler.chatContainer.restyle("height", a + "px !important")
        }
      };
      M.prototype.showOfflineOverlay = function () {
        b.viewHandler.chatContainer.getElementById("formContainer").className += " success"
      };
      M.prototype.resize =
        function () {
          var a, c, d, k, f;
          null !== this.formView && y && (k = b.viewHandler.chatContainer.getElementById("formContainer"), d = b.viewHandler.chatContainer.getElementById("formInnerHeight"), f = b.viewHandler.chatContainer.getElementById("headerBoxWrapper"), k && (a = n.getElementsByClassName(k, "formMessageField"), c = n.getElementsByClassName(k, "longFormContainer"), a && (a.length && c && c.length) && (a = n.getElementsByClassName(k, "longFormBottomContainer")[0].clientHeight, c[0].style.height = b.viewHandler.iframeContainer.clientHeight -
            f.clientHeight - a + "px"), !d || "android" !== y && "android2" !== y && "android2.3" !== y || (d.style.overflow = "hidden", b.viewHandler.addOverflowScroll(d))))
        };
      M.prototype.closeForm = function () {
        var a, c;
        a = b.viewHandler.chatContainer.getElementById("formContainer");
        var d = b.viewHandler.chatContainer.getElementById("submitWrapper");
        c = b.viewHandler.chatContainer.getElementById("contentContainer");
        var k = "endChatForm" === this.currentForm,
          f = this.formView ? "preChatForm" === this.formView.elementId : null;
        if (this.currentForm || f) c &&
        (c.className = c.className.replace(/form-opened/g, "")), a && this.formView && (this.formView = null, this.currentForm = "", a.innerHTML = "", a.style.display = "none", a.className = "", a = b.viewHandler.chatContainer.getElementById("greetingsMainContainer"), c = b.viewHandler.chatContainer.getElementById("greetingsText"), a && (a.style.display = "block", c.innerHTML = ""), d && (d.className = "", d.innerHTML = ""), b.eventEmitter.emit("formClosed"), k && (b.viewHandler.chatContainer.getElementById("contentContainer").className = "", b.formHandler.openForm("emailTranscriptFormOnChatEnded")),
          this.handleResizeofForm())
      };
      M.prototype.attachEventListeners = function () {
        var a, c, d = this, k = this.formView.formData, f = b.viewHandler.chatContainer.getElementById("formCancel"),
          g = b.viewHandler.chatContainer.getElementById("formSubmit"),
          h = b.viewHandler.chatContainer.getElementById("formCloseChat"), l = this.formView.formData.fields || [],
          n = "preChatForm" === d.formView.elementId, m = "offlineForm" === d.formView.elementId, p = "formcancelclick",
          q = "formsubmitclick";
        this.formView.formData.dynamicFields && (l = this.formView.formData.dynamicFields);
        n ? (f = b.viewHandler.chatContainer.getElementById("formCancel"), g = b.viewHandler.chatContainer.getElementById("formSubmit"), p = "formcancelclick-pc", q = "formsubmitclick-pc") : m && (g = b.viewHandler.chatContainer.getElementById("formSubmit"), a = b.viewHandler.chatContainer.getElementById("resendButton"), q = "formsubmitclick-ol");
        c = b.viewHandler.chatContainer.getElementById("newChat");
        f && b.eventHandler.listen(f, b.viewHandler.clickEvent, function (a) {
          if (n) return b.eventEmitter.emit(d.formView.formData.saveFunc, {}, function (a,
                                                                                        b) {
            d.handleAfterSave(a, {serverData: b})
          });
          d.closeForm();
          b.eventHandler.cancelEvent(a)
        }, p);
        g && b.eventHandler.listen(g, b.viewHandler.clickEvent, function () {
          d.submitForm()
        }, q);
        h && b.eventHandler.listen(h, b.viewHandler.clickEvent, function (a) {
          e ? (e.container.hide(), b.viewHandler.isMaximized = !1, b.viewHandler.show()) : b.main.hideWidget();
          b.eventHandler.cancelEvent(a)
        }, "formcloseclick");
        a && b.eventHandler.listen(a, b.viewHandler.clickEvent, function () {
          m && (b.viewHandler.chatContainer.getElementById("overlayOfflineForm").style.display =
            "none", b.viewHandler.chatContainer.getElementById("formFieldsContainer").style.display = "block");
          b.viewHandler.chatContainer.getElementById("submitWrapper").className = b.viewHandler.chatContainer.getElementById("submitWrapper").className.replace("visible", "");
          b.viewHandler.chatContainer.getElementById("formContainer").className = b.viewHandler.chatContainer.getElementById("formContainer").className.replace("success", "")
        }, "resendButtonClick");
        c && b.eventHandler.listen(c, b.viewHandler.clickEvent, function (a) {
          e.chatStarted();
          b.chatHandler.startNewChat();
          b.eventHandler.cancelEvent(a)
        }, "newChat", "newChat");
        l.forEach(function (a) {
          if (!a.disabled) {
            var c = b.viewHandler.chatContainer.getElementById(a.fieldName + "Field"),
              k = b.viewHandler.chatContainer.getElementById(a.fieldName + "FieldError"),
              f = b.viewHandler.chatContainer.getElementById(a.fieldName + "FieldErrorIcon");
            c && ("textarea" !== c.nodeName.toLowerCase() && b.eventHandler.listen(c, "keypress", function (a) {
              13 === a.keyCode && d.submitForm()
            }, "formkeypress" + a.fieldName), b.eventHandler.listen(c,
              "keydown", function (a) {
                13 !== a.keyCode && setTimeout(function () {
                  "" !== k.innerHTML && (k.innerHTML = "", k.style.display = "none", f.style.display = "none", c.parentNode.className = c.parentNode.className.replace(" error", ""))
                }, 1)
              }, "formkeydown" + a.fieldName))
          }
        });
        if (k.otherEvent) {
          var r = k.otherEvent;
          (a = b.viewHandler.chatContainer.getElementById(r.elementName)) && b.eventHandler.listen(a, r.eventName, function () {
            r.executedFunc()
          }, "formother")
        }
      };
      M.prototype.submitForm = function () {
        var a, c = this, d = b.viewHandler.chatContainer.getElementById("formSubmit"),
          k = b.viewHandler.chatContainer.getElementById("formCancel"),
          f = b.viewHandler.chatContainer.getElementById("formCloseChat"),
          e = b.viewHandler.chatContainer.getElementById("submitWrapper");
        a = this.validateForm();
        if (null === a) e.className = ""; else {
          e.innerHTML = '<p id="submitWrapperMessage">' + b.languageParser.translate("form", "SubmittingProcess") + "</p>" + t.loader;
          e.className = "visible";
          d && d.setAttribute("disabled", "disabled");
          k && k.setAttribute("disabled", "disabled");
          f && f.setAttribute("disabled", "disabled");
          c.handleResizeofForm(!0);
          if (this.formView.formData.publish) return b.socketManager.sendToConnector(this.formView.formData.publish, a, function (b, d) {
            a.serverData = d;
            c.handleAfterSave(b, a)
          });
          if (this.formView.formData.saveFunc) try {
            b.eventEmitter.emit(this.formView.formData.saveFunc, a, function (b, d) {
              a.serverData = d;
              c.handleAfterSave(b, a)
            })
          } catch (g) {
            c.handleAfterSave(!0), q.handleError("Unable to emit form handler save func : " + this.formView.formData.saveFunc + " with data : " + JSON.stringify(a), g.fileName, g.lineNumber, g.stack)
          }
        }
      };
      M.prototype.handleAfterSave =
        function (a, c) {
          var d, k, f, e, g, h, l, n;
          if (b && b.formHandler.formView && b.formHandler.formView.formData) {
            d = b.formHandler.formView.formData.afterSave;
            k = b.viewHandler.chatContainer.getElementById("formSubmit");
            f = b.viewHandler.chatContainer.getElementById("formCancel");
            e = b.viewHandler.chatContainer.getElementById("formCloseChat");
            g = b.viewHandler.chatContainer.getElementById("submitWrapper");
            l = b.viewHandler.chatContainer.getElementById("transcriptEmailField");
            h = "emailTranscriptFormOnChatEnded" === this.currentForm;
            n = "offlineForm" === b.formHandler.formView.elementId;
            g.className = "";
            g.innerHTML = "";
            k && k.removeAttribute("disabled");
            f && f.removeAttribute("disabled");
            e && e.removeAttribute("disabled");
            if (a) return this.updateFormStatus(a);
            d && d(c);
            h ? l.value = "" : (n && (b.viewHandler.chatContainer.getElementById("overlayOfflineForm").style.display = "block", b.viewHandler.chatContainer.getElementById("formFieldsContainer").style.display = "none"), this.formView.formData.dontCloseForm ? this.updateFormStatus() : this.closeForm())
          }
        };
      M.prototype.updateFormStatus =
        function (a) {
          var c, d, k;
          b.viewHandler.chatContainer && (c = b.viewHandler.chatContainer.getElementById("formSavingStatus"), d = b.viewHandler.chatContainer.getElementById("savingStatus"), k = b.viewHandler.chatContainer.getElementById("submitWrapper"), c && d ? a ? (c.className = "errorMessage", d.innerHTML = b.languageParser.translate("form", "errorSaving"), a = n.getElementsByClassName(b.viewHandler.chatContainer.documentRef, "longFormContainer"), a.length && (a[0].scrollTop = 999999999999)) : (c.className = "", d.innerHTML = b.languageParser.translate("form",
            "saved")) : this.currentForm && "offlineForm" === this.currentForm ? a ? (k.className = "visible", k.innerHTML = "<p>" + b.languageParser.translate("form", "OfflineMessageNotSent") + "</p>", setTimeout(function () {
            k.className = ""
          }, 3E3)) : (k.className = "", this.clearForm()) : k.className = "")
        };
      M.prototype.validateForm = function () {
        var a, c, d = {}, k = 0, f = this;
        if (this.formView) return a = this.formView.formData.fields || [], this.formView.formData.dynamicFields && (a = this.formView.formData.dynamicFields), a.forEach(function (a) {
          var e, g, h, l, m;
          if ("additionalQuestion" ===
            a.fieldName && a.getValue && n.isArray(a.getValue())) d.additionalQuestion = {}, a.getValue().forEach(function (c, k) {
            (g = b.viewHandler.chatContainer.getElementById(a.fieldName + k)) && (d.additionalQuestion[k] = c === g.value ? null : n.trim(g.value))
          }); else if ("choice" === a.fieldType || "option" === a.fieldType) m = b.viewHandler.chatContainer.documentRef.getElementsByName(a.fieldName + "group"), h = b.viewHandler.chatContainer.getElementById(a.fieldName + "FieldError"), e = b.viewHandler.chatContainer.getElementById(a.fieldName + "Container"),
            formLabelEl = e.parentElement.parentElement.getElementsByClassName("form-field-label")[0], errorIconEl = b.viewHandler.chatContainer.getElementById(a.fieldName + "FieldErrorIcon"), m = "choice" === a.fieldType ? f.getSelectedCheckbox(m, a.isRequired) : f.getSelectedRadio(m, a.isRequired), h.innerHTML = "", h.style.display = "none", errorIconEl.style.display = "none", e.className = e.className.replace("error", ""), null === m ? (k++, l = !1, h.innerHTML = b.languageParser.translate("form", a.languageKey + "ErrorMessage"), h.style.display = "block",
            errorIconEl.style.display = "block", e.className += " error", formLabelEl.style.color = "#e52f48") : (formLabelEl.style.color = "#707070", d[a.fieldName] = m); else {
            g = b.viewHandler.chatContainer.getElementById(a.fieldName + "Field");
            h = b.viewHandler.chatContainer.getElementById(a.fieldName + "FieldError");
            errorIconEl = b.viewHandler.chatContainer.getElementById(a.fieldName + "FieldErrorIcon");
            if (!g) return;
            e = a.placeholderText === g.value ? null : n.trim(g.value);
            l = f[a.validation](e, a.valueMaxLength, a.isRequired);
            h.innerHTML = "";
            h.style.display = "none";
            errorIconEl.style.display = "none";
            g.parentNode.className = g.parentNode.className.replace("error", "");
            l ? d[a.fieldName] = e : (k++, h.innerHTML = b.languageParser.translate("form", a.languageKey + "ErrorMessage"), h.style.display = "block", errorIconEl.style.display = "block", g.parentNode.className += " error")
          }
          c || l || (c = g)
        }), 0 < k ? (c && (a = b.viewHandler.chatContainer.getElementById("formContainer"), a.scrollTop = c.offsetTop), null) : d
      };
      M.prototype.isValidString = function (a, b, d) {
        return d || a ? !(!a || !n.isString(a) ||
          b && !(b && a.length <= b)) : !0
      };
      M.prototype.isValidEmail = function (a, b, d) {
        return d || a ? !!(a && n.isEmail(a) && n.isString(a) && a.length <= b) : !0
      };
      M.prototype.isValidDepartment = function (a, b, d) {
        var k;
        b = r.departments;
        if (!(d || a && "0" !== a)) return !0;
        for (k in b) if (b[k].did === a) return !0;
        return !1
      };
      M.prototype.getSelectedCheckbox = function (a, b) {
        for (var d = [], k = 0, f = a.length; k < f; k++) a[k].checked && d.push(a[k].value);
        return !d.length && b ? null : d
      };
      M.prototype.getSelectedRadio = function (a, b) {
        for (var d = "", k = 0, f = a.length; k < f; k++) if (a[k].checked) {
          d =
            a[k].value;
          break
        }
        return !d && b ? null : d
      };
      M.prototype.isValidPhone = function (a, b, d) {
        if (!d && !a) return !0;
        "+" === a.charAt(0) && (a = a.replace("+", ""));
        return !!(a.length && 7 <= a.length && a.match(/[0-9]/im))
      };
      M.prototype.handlePrechatForm = function (a) {
        a = n.getDepartmentStatus(a.department);
        a.isOnline || b.viewHandler.notifiyDepartmentIsNotOnline(a.name, a.status);
        b.formHandler.formView.formData.dontCloseForm = !1
      };
      M.prototype.handleChatEnded = function (a) {
        b.formHandler.formView.formData.dontCloseForm = !1;
        w.chatId = a.serverData.nextChatId;
        b.chatHandler.endChat(a.serverData.chatEndVersion);
        b.viewHandler.resetView()
      };
      M.prototype.clearForm = function () {
        var a = this.formView.formData.fields || [];
        this.formView.formData.dynamicFields && (a = this.formView.formData.dynamicFields);
        a.forEach(function (a, d) {
          var k;
          if ("name" !== a.fieldType && "email" !== a.fieldType && "department" !== a.fieldType) if ("choice" === a.fieldType || "option" === a.fieldType) {
            k = b.viewHandler.chatContainer.documentRef.getElementsByName(a.fieldName + "group");
            for (var f = 0, e = k.length; f < e; f++) k[f].checked =
              !1
          } else if (k = b.viewHandler.chatContainer.getElementById(a.fieldName + "Field")) k.value = "", "choice" === a.fieldType || "option" === a.fieldType || ga || (k.value = a.placeholderText)
        })
      };
      var K = TawkClass.extend({
        init: function () {
          var a = this, b = f.minimizedDimensions().width, d = f.minimizedDimensions().height;
          this.shown = this.inDocument = !1;
          this.indicatorWidth = this.indicatorHeight = 21;
          this.frameHeight = d + "px";
          this.frameWidth = b + "px";
          this.offsetX = f.widgetOffsetX;
          this.offsetY = f.widgetOffsetY;
          this.messagePreviewHeight = null;
          this.messagePreviewOffset =
            25;
          f.isDesktopRectangle() ? (this.container = new Q(n.getRandomName(), n.getGenericStyle({
            zindex: "1000001",
            position: "fixed",
            bottom: this.offsetY,
            display: "none",
            height: this.frameHeight,
            width: this.frameWidth,
            maxheight: this.frameHeight,
            maxwidth: this.frameWidth,
            minheight: "40px",
            minwidth: "126px"
          }), ba, "iframe"), this.container.template = t["tawkchat-minified-iframe-element-rectangle"], this.chatIndicator = new Q(n.getRandomName(), n.getGenericStyle({
            zindex: "1000003",
            margin: "0px",
            width: this.frameWidth,
            height: "37px",
            position: "fixed",
            display: "none",
            bottom: d + "px",
            left: "100%",
            maxheight: "37px",
            maxwidth: this.frameWidth,
            minheight: "37px",
            minwidth: this.frameWidth
          }), ba, "iframe")) : (this.frameWidth = this.frameHeight = "60px", this.container = new Q(n.getRandomName(), n.getGenericStyle({
            zindex: "1000001",
            position: "fixed",
            bottom: this.offsetY,
            display: "none",
            height: this.frameHeight,
            width: this.frameWidth,
            maxheight: this.frameHeight,
            maxwidth: this.frameWidth,
            minheight: this.frameHeight,
            minwidth: this.frameWidth,
            borderRadius: "50%"
          }), ba, "iframe"),
            this.container.restyle("box-shadow", "rgba(0, 0, 0, 0.16) 0px 2px 10px 0px !important"), this.container.template = t["tawkchat-minified-iframe-element-round"], this.chatIndicator = new Q(n.getRandomName(), n.getGenericStyle({
            zindex: "1000003",
            margin: "0px",
            width: "60px",
            height: "22px",
            position: "fixed",
            display: "none",
            bottom: "57px",
            left: "100%",
            maxheight: "22px",
            maxwidth: "60px",
            minheight: "22px",
            minwidth: "60px"
          }), ba, "iframe"));
          f.isCenterPositioned() ? this.messagePreviewHeight = 0.5 * Math.max(document.documentElement.clientHeight,
            g.innerHeight || 0) + 0.5 * f.minimizedDimensions().width + 20 - this.messagePreviewOffset + "px" : this.messagePreviewHeight = Math.max(document.documentElement.clientHeight, g.innerHeight || 0) - (f.minimizedDimensions().height + this.offsetY) - this.messagePreviewOffset + "px";
          this.messagePreview = new Q(n.getRandomName(), n.getGenericStyle({
            zindex: "999999",
            width: "378px",
            height: this.messagePreviewHeight,
            position: "fixed",
            display: "none",
            bottom: f.minimizedDimensions().height + this.offsetY + 10 + "px",
            right: this.offsetX + "px"
          }), ba, "iframe");
          this.bubbleContainer = new Q(n.getRandomName(), n.getGenericStyle({
            zindex: "1000000",
            width: "146px",
            height: "85px",
            position: "fixed",
            display: "none",
            bottom: d + 2 + "px",
            right: "20px",
            maxheight: "85px",
            maxwidth: "146px",
            minheight: "85px",
            minwidth: "146px"
          }), ba, "iframe");
          f.minimizedDimensions.subscribe(function (b) {
            a.frameHeight = b.height + "px";
            a.frameWidth = b.width + "px";
            a.widgetDimensionsUpdated()
          });
          r.pageStatus.subscribe(function (b) {
            a.updateGreetings(b);
            a.updateStatus(b)
          });
          r.chatBubbleClosed.subscribe(function (b) {
            b &&
            a.bubbleContainer && a.bubbleContainer.clear()
          });
          f.chatBubble.subscribe(function () {
            a.bubbleSettingsChanged()
          });
          f.isRTL.subscribe(function () {
            a.bubbleSettingsChanged()
          });
          f.desktopWidget.subscribe(function () {
            b = f.minimizedDimensions().width;
            d = f.minimizedDimensions().height;
            a.offsetX = f.widgetOffsetX;
            a.offsetY = f.widgetOffsetY;
            f.isDesktopRectangle() ? (a.container.template = t["tawkchat-minified-iframe-element-rectangle"], a.chatIndicator.massRestyle(n.getGenericStyle({
              zindex: "1000003",
              margin: "0px",
              width: a.indicatorWidth +
                "px",
              height: a.indicatorHeight + "px",
              position: "fixed",
              display: "none",
              bottom: a.offsetY + "px",
              left: a.offsetY + "px",
              maxheight: a.indicatorHeight + "px",
              maxwidth: a.indicatorWidth + "px",
              minheight: a.indicatorHeight + "px",
              minwidth: a.indicatorWidth + "px"
            }))) : (a.container.template = t["tawkchat-minified-iframe-element-round"], a.chatIndicator.massRestyle(n.getGenericStyle({
              zindex: "1000003",
              margin: "0px",
              width: "60px",
              height: "22px",
              position: "fixed",
              display: "none",
              bottom: "57px",
              left: "100%",
              maxheight: "22px",
              maxwidth: "60px",
              minheight: "22px",
              minwidth: "60px"
            })));
            a.container.massRestyle(n.getGenericStyle({
              zindex: "1000001",
              position: "fixed",
              bottom: f.isDesktopRectangle() ? "0px" : a.offsetY,
              display: "none",
              height: a.frameHeight,
              width: a.frameWidth,
              maxheight: a.frameHeight,
              maxwidth: a.frameWidth,
              minheight: a.frameHeight,
              minwidth: a.frameWidth
            }));
            a.bubbleContainer && a.bubbleContainer.elementReferrer && a.bubbleContainer.clear();
            a.buildView();
            a.updateStatus()
          });
          f.showMessagePreview.subscribe(function () {
            f.showMessagePreview() ? a.initMessagePreviewContainer() :
              a.destroyMessagePreviewContainer()
          })
        }, buildView: function () {
          var a;
          if (this.container && (b.MinifiedStyle = b.MinifiedStyle.replace(/#tawktoLink/g, "#" + b.viewHandler.tawktoLinkName), b.MinifiedStyle = b.MinifiedStyle.replace(/#bottomContainer/g, "#" + b.viewHandler.bottomContainerName), f.showMessagePreview() ? this.initMessagePreviewContainer() : this.destroyMessagePreviewContainer(), this.chatIndicator.buildIframe(b.MinifiedStyle + f.minStyle()), a = n.getElementsByTagName(this.chatIndicator.documentRef, "body")[0], a.innerHTML =
            t["tawkchat-chat-indicator"], this.container.buildIframe(b.MinifiedStyle + f.minStyle()), this.bubbleContainer && (f.chatBubble() && this.bubbleContainer.elementReferrer ? this.bubbleContainer.buildIframe(b.MinifiedStyle + f.minStyle()) : this.bubbleContainer.clear()), this.widgetDimensionsUpdated(), this.updateGreetings(), this.attachEvents(), this.inDocument = !0, f.isDesktopRectangle())) {
            a = this.container.getElementById("tawkchat-minified-container");
            var c = f.topCorner + "px ", d = f.bottomCorner + "px ";
            a.style.borderRadius =
              c + c + d + d
          }
        }, attachEvents: function () {
          this.container && (this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
            "max" === r.chatWindowState() ? (b.viewHandler.userAction = !0, b.sessionHandler.notifyWindowState("min")) : "max" === f.onClickAction ? (b.viewHandler.userAction = !0, b.sessionHandler.notifyWindowState("max")) : b.viewHandler.popoutWidget();
            b.eventHandler.cancelEvent(a)
          }, "tawkchat-minified-wrapper", "minifiedclick"), this.container.attachUserEventListener("mousedown", function (a) {
            b.viewHandler.lastFocusedElement =
              g.document.activeElement
          }, "tawkchat-minified-wrapper", "minifiedWidgetMouseDown"), this.attachBubbleEvents())
        }, createCanvasChatBubble: function () {
        }
      });
      K.prototype.updateStatus = function (a) {
        var c;
        a || (a = r.pageStatus());
        if (this.container && a) {
          if (c = this.container.getElementById("tawkchat-status-icon")) c.className = a;
          if (c = this.container.getElementById("tawk-minified-mobile-text")) c.innerHTML = "online" === a || "away" === a ? b.languageParser.translate("chat", "chat_text") : b.languageParser.translate("chat", "mail_text");
          try {
            b.eventEmitter.emit("resizeIframeHeight")
          } catch (d) {
            q.handleError("Unable to emit resizeIframeHeight", d.fileName, d.lineNumber, d.stack)
          }
        }
      };
      K.prototype.attachBubbleEvents = function () {
        this.bubbleContainer && this.bubbleContainer.attachUserEventListener(b.viewHandler.clickEvent, b.sessionHandler.closeBubble, "tawkchat-chat-bubble-close", "bubblecloseclick")
      };
      K.prototype.hide = function () {
        this.container && (this.shown = !1, this.container.restyle("display", "none !important"), this.hideBubble())
      };
      K.prototype.show =
        function () {
          this.container && (this.shown = !0, this.container.restyle("display", "block !important"), this.showBubble())
        };
      K.prototype.widgetDimensionsUpdated = function () {
        this.container && (f.isDesktopRectangle() ? (minWidth = f.minimizedDimensions().width, minHeight = f.minimizedDimensions().height) : minHeight = minWidth = 60, this.container.massRestyle({
          height: minHeight + "px !important",
          "min-height": minHeight + "px !important",
          "max-height": minHeight + "px !important",
          width: minWidth + "px !important",
          "min-width": minWidth + "px !important",
          "max-width": minWidth + "px !important",
          "border-radius": f.isDesktopRectangle() ? "0 !important" : "50% !important"
        }), this.widgetPositonChanged(), this.bubbleSettingsChanged(), this.calculateIndicatorPositioning())
      };
      K.prototype.bubbleSettingsChanged = function () {
        var a = f.chatBubble();
        if (!a && this.bubbleContainer || f.hideWidgetOnLoad) return this.bubbleContainer.clear();
        b && (b.viewHandler && b.viewHandler.iframeContainer && b.viewHandler.iframeContainer.elementReferrer) && (a && (a.type && "default" !== a.type || this.bubbleContainer.elementReferrer &&
        this.bubbleContainer.insertCssFile(".bubble-text-color{color:" + (f.chatBubble() ? f.chatBubble().fgc : "#ffffff") + ";}", !0), a && (this.bubbleContainer || (this.bubbleContainer = new Q(n.getRandomName(), n.getGenericStyle({
          zindex: "1000000",
          width: "146px",
          height: "85px",
          position: "fixed",
          display: "none",
          bottom: minHeight + 2 + "px",
          right: "20px",
          maxheight: "85px",
          maxwidth: "146px",
          minheight: "85px",
          minwidth: "146px"
        }), ba, "iframe")), this.bubbleContainer.elementReferrer || (b.viewHandler.iframeContainer.elementReferrer.appendChild(this.bubbleContainer.buildView(),
          !0), this.bubbleContainer.buildIframe(b.MinifiedStyle + f.minStyle())))), this.createBubble(), this.attachBubbleEvents())
      };
      K.prototype.updateGreetings = function (a) {
        var b;
        a || (a = r.pageStatus());
        this.container && a && (b = this.container.getElementById("short-message")) && (a = m.getShortMessage(a), null !== a && (b.innerHTML = a))
      };
      K.prototype.clear = function () {
        this.container.clear();
        this.container = null
      };
      K.prototype.widgetPositonChanged = function () {
        var a = {}, b = this.offsetX, d = this.offsetY, k = b + "px";
        f.isCenterPositioned() ? (f.isDesktopRectangle() &&
        (k = 0.5 * f.minimizedDimensions().height - 0.5 * f.minimizedDimensions().width + "px"), f.isRightPositioned() ? (bodyClassName = "center right", a = f.isDesktopRectangle() ? n.getRotateStyling("-90", "49%") : n.getRotateStyling("0", "0"), a.right = k, a.left = "auto !important") : (bodyClassName = "center left", a = f.isDesktopRectangle() ? n.getRotateStyling("90", "49%") : n.getRotateStyling("0", "0"), a.left = k, a.right = "auto !important"), f.isDesktopRectangle() || (a.transform = "unset"), a.top = "calc(50% - " + 0.5 * f.minimizedDimensions().height +
          "px) !important", a.bottom = "auto !important") : (a = n.getRotateStyling("0", "0"), a.margin = "0px !important", f.isTopPositioned() ? (a.top = d + "px !important", a.bottom = "auto !important", bodyClassName = " top ") : (a.top = "auto !important", a.bottom = d + "px !important", bodyClassName = " bottom "), f.isRightPositioned() ? (bodyClassName += " right ", a.right = b + "px !important", a.left = "auto !important") : (bodyClassName += " left ", a.left = b + "px !important", a.right = "auto !important"));
        this.container.massRestyle(a)
      };
      K.prototype.createBubble =
        function () {
          var a;
          this.bubbleContainer && (this.bubbleContainer.elementReferrer && !f.hideWidget && f.chatBubble && !r.chatBubbleClosed()) && (f.chatBubble().type && "default" !== f.chatBubble().type ? this.createImageBubble() : this.createDefaultBubble(), a = this.bubbleContainer.getElementById("tawkchat-chat-bubble-close"), this.bubbleContainer.attachUserEventListener("mouseover", function () {
            a && (a.style.visibility = "visible")
          }, null, "bubbleHover"), this.bubbleContainer.attachUserEventListener("mouseout", function () {
            a && (a.style.visibility =
              "hidden")
          }, null, "bubbleOut"), this.bubbleContainer.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
            "max" === f.onClickAction ? (b.viewHandler.userAction = !0, b.sessionHandler.notifyWindowState("max")) : b.viewHandler.popoutWidget();
            b.eventHandler.cancelEvent(a)
          }, "bubble-image", "bubbleContainerClick"), b.viewHandler.isMaximized || this.showBubble())
        };
      K.prototype.calculateBubblePositioning = function (a, b, d, k, e, g, h) {
        var l = f.minimizedDimensions().width, m = {};
        if (f.isCenterPositioned()) {
          var p, q;
          p = -0.5 * b;
          q = k;
          0 === g ? (l = "gallery" === f.chatBubble().type ? 0 : 0.5 * (l - b), d += "px !important") : "gallery" === f.chatBubble().type ? (q = l = 0, d = -1 * (0.5 * (a - b) - k) + "px !important") : (l = 0.5 * (l - a), d = -1 * (0.5 * (a - b) - d) + "px !important");
          m = n.getRotateStyling(g, "49%");
          f.isRightPositioned() ? (m.right = d, m.left = "auto !important") : (m.left = d, m.right = "auto !important");
          m.top = "50% !important";
          m.bottom = "auto !important";
          g = p - l + q
        } else m = n.getRotateStyling("0", "0"), g = "0", f.isTopPositioned() ? (m.top = k + "px !important", m.bottom = "auto !important", h +=
          " top ") : (m.bottom = k + "px !important", m.top = "auto !important", h += " bottom "), f.isRightPositioned() ? (m.right = d + "px !important", m.left = "auto !important", h += " right ") : (m.left = d + "px !important", m.right = "auto !important", h += " left ");
        m.width = a + "px !important";
        m["max-width"] = a + "px !important";
        m["min-width"] = a + "px !important";
        m.height = b + "px !important";
        m["max-height"] = b + "px !important";
        m["min-height"] = b + "px !important";
        m["z-index"] = (0 === e ? "1000000" : "1000002") + " !important";
        m.margin = g + "px 0 0 0 !important";
        this.bubbleContainer.massRestyle(m);
        this.bubbleContainer.documentRef.body.className += h
      };
      K.prototype.createDefaultBubble = function () {
        var a, b, d, k = 0;
        a = 0;
        a = !!document.createElement("canvas").getContext;
        var e = " default ";
        b = T && 9 > O;
        if (a || b) b = n.getElementsByTagName(this.bubbleContainer.documentRef, "body")[0], b.innerHTML = t["tawkchat-chat-bubble-canvas"], a && this.createCanvasChatBubble(), a = this.bubbleContainer.getElementById("tawkchat-chat-bubble-text"), a.innerHTML = f.chatBubble().txt, a.style.color = f.chatBubble().fgc,
          f.isCenterPositioned() ? (f.isRightPositioned() ? (d = -90, k -= 10, f.isRTL() && (k = f.minimizedDimensions().width - 146)) : (d = 90, k = f.isDesktopRectangle() ? f.minimizedDimensions().width - 146 + 10 : 10, f.isRTL() && (k = 0)), a = f.minimizedDimensions().height + this.offsetX + 2) : (k = f.minimizedDimensions().height + this.offsetY + 2, a = !f.isRightPositioned() && !f.isRTL() || f.isRightPositioned() && f.isRTL() ? f.isDesktopRectangle() ? f.minimizedDimensions().width - 146 + 16 : 10 : 0), f.isRTL() && (e += " rtl-direction"), this.calculateBubblePositioning(146,
          85, a, k, 0, d, e)
      };
      K.prototype.createImageBubble = function () {
        var a, b, d, k;
        d = n.getElementsByTagName(this.bubbleContainer.documentRef, "body")[0];
        var e = f.chatBubble(), g = e.height + 16, h = 0;
        "gallery" === e.type ? (b = parseInt(e.name, 10), k = 22 === b, f.isDesktopRectangle() || (b += "-r"), f.isCenterPositioned() ? (b += f.isRightPositioned() ? "-cr" : "-cl", f.isDesktopRectangle()) : b = f.isTopPositioned() ? b + (f.isRightPositioned() ? "-tr" : "-tl") : b + (f.isRightPositioned() ? "-br" : "-bl"), a = " gallery ", b = "https://static-v.tawk.to/a-v3/images/bubbles/" +
          b + (k ? ".png" : ".svg"), f.isCenterPositioned() && 0 === e.rotate && (a += " center-right"), d.innerHTML = n.escapeTemplateReplacement(t["tawkchat-chat-bubble-gallery"], [{
          placeholder: "__IMAGE_SRC__",
          textReplace: b
        }, {
          placeholder: "__IMAGE_SIZE__",
          textReplace: "width:" + e.width + "px; height:" + e.height + "px;"
        }])) : (a = " upload ", b = "https://tawk.link/" + f.chatBubble().name, d.innerHTML = n.escapeTemplateReplacement(t["tawkchat-chat-bubble-upload"], [{
          placeholder: "__IMAGE_SRC__",
          textReplace: b
        }]));
        f.isTopPositioned() || f.isCenterPositioned() ?
          (h += e.topOffset, f.isCenterPositioned() && 0 === e.rotate && (h -= 16)) : h += e.bottomOffset;
        d = f.isRightPositioned() ? e.rightOffset : e.leftOffset;
        f.isCenterPositioned() && 0 !== e.rotate && (d = "gallery" === e.type ? d - 3 : d + 2);
        this.calculateBubblePositioning(e.width, g, d, h, e.zIndex, e.rotate, a)
      };
      K.prototype.toggleBubble = function () {
        f.chatBubble && (this.bubbleContainer && this.bubbleContainer.elementReferrer) && (this.shown && "offline" !== r.pageStatus() ? this.bubbleContainer.restyle("display", "block !important") : this.bubbleContainer.restyle("display",
          "none !important"))
      };
      K.prototype.agentBarChanged = function (a) {
        var b, d, k, e, g, h, l, m = {};
        f.hideWidget || (this.container.massRestyle({
          height: a + "px !important",
          "min-height": a + "px !important",
          "max-height": a + "px !important"
        }), h = T && 10 > O, closeIconWidth = 16, minWidth = f.minimizedDimensions().width, minHeight = f.minimizedDimensions().height, b = f.chatBubble(), d = a - minHeight, l = b.rotate, b.type && "default" !== b.type ? (k = b.topOffset, e = b.bottomOffset, bubbleWidth = b.width, bubbleContainerHeight = b.height + closeIconWidth, g = f.isRightPositioned() ?
          b.rightOffset : b.leftOffset) : (bubbleWidth = 146, bubbleContainerHeight = 85, f.isCenterPositioned() ? (g = minHeight + 2, l = f.isRightPositioned() ? -90 : 90) : (k = minHeight + 2, e = minHeight + 2, g = f.isRightPositioned() ? 0 : minWidth - bubbleWidth + closeIconWidth)), f.isCenterPositioned() ? (k = -0.5 * minWidth + 0.5 * a + "px !important", g += d, d = 0 === l ? g + "px !important" : -1 * (0.5 * (bubbleWidth - bubbleContainerHeight) - g) + "px !important", f.isRightPositioned() ? (this.container.restyle("right", k), m.right = d, h && (this.container.restyle("right", a - minWidth +
          "px !important"), 0 !== l && (m.right = g - (bubbleWidth - bubbleContainerHeight) + "px !important"))) : f.isCenterPositioned() || (this.container.restyle("left", k), m.left = d, h && (this.container.restyle("left", "0px !important"), 0 !== b.rotate && (m.left = g + "px !important"))), h ? this.container.restyle("margin", -0.5 * minWidth + "px 0 0 0 !important") : this.container.restyle("margin", -0.5 * a + "px 0 0 0 !important")) : f.isCenterPositioned() || (f.isTopPositioned() ? m.top = k + d + "px !important" : m.bottom = e + d + "px !important"), this.bubbleContainer &&
        (this.bubbleContainer.elementReferrer && f.chatBubble && !r.chatBubbleClosed()) && this.bubbleContainer.massRestyle(m))
      };
      K.prototype.calculateIndicatorPositioning = function () {
        var a = {}, b = this.indicatorWidth, d = this.indicatorHeight, k = f.minimizedDimensions().width,
          e = f.minimizedDimensions().height, h = "";
        Math.max(document.documentElement.clientHeight, g.innerHeight || 0);
        var l = this.offsetX, m = this.offsetY, n;
        f.isCenterPositioned() ? (f.isRightPositioned() ? (a.right = m + e - d + 5 + "px !important", a.top = "calc(50% - " + 0.5 * k + "px) !important",
          a.left = "auto !important", n = "right", a.bottom = "auto !important", f.isDesktopRectangle() ? (a.right = m + e - d + 5 + "px !important", f.isRTL() && (a.bottom = "calc(50% - " + (0.5 * k + 5) + "px) !important", a.top = "auto !important")) : (f.isRTL() ? a.right = e + "px !important" : a.right = l - 5 + "px !important", a.left = "auto !important")) : (a.right = "auto !important", n = "left", a.bottom = "auto !important", f.isDesktopRectangle() ? (a.top = "calc(50% - " + (0.5 * k + 5) + "px) !important", a.left = m + e - d + 5 + "px !important", f.isRTL() || (a.top = "calc(50% + " + (0.5 * k -
          0.5 * d) + "px) !important")) : (a.top = "calc(50% - " + 0.5 * k + "px) !important", f.isRTL() ? a.left = l - 5 + "px !important" : a.left = l + k - b + 5 + "px !important", a.right = "auto !important")), h += " bottom " + n) : (f.isTopPositioned() ? (h += " top ", a.top = m + "px !important", a.bottom = "auto !important") : (h += " bottom ", a.top = "auto !important", f.isDesktopRectangle() ? a.bottom = e - l - 5 + "px !important" : a.bottom = e + m - f.widgetOffsetY + "px !important"), f.isRightPositioned() ? (h += " right ", f.isRTL() ? f.isDesktopRectangle() ? a.right = k - 5 + "px !important" :
          a.right = k + "px !important" : f.isDesktopRectangle() ? a.right = "1px !important" : a.right = l - 5 + "px !important", a.left = "auto !important") : (h += " left ", f.isRTL() ? a.left = l - 5 + "px !important" : a.left = l + k - b + 5 + "px !important", a.right = "auto !important"));
        a.width = b + "px !important";
        a["max-width"] = b + "px !important";
        a["min-width"] = b + "px !important";
        a.height = d + "px !important";
        a["max-height"] = d + "px !important";
        a["min-height"] = d + "px !important";
        this.chatIndicator.documentRef.body.className += " " + h + " round";
        this.chatIndicator.massRestyle(a)
      };
      K.prototype.toggleOfflineIcon = function (a) {
        var b, d;
        this.container && !f.isDesktopRectangle() && (b = this.container.getElementById("maximizeChat")) && (a ? (a = "icon-chat", d = "icon-mail") : (a = "icon-mail", d = "icon-chat"), n.removeClass(b, a), n.addClass(b, d))
      };
      K.prototype.showBubble = function () {
        this.bubbleContainer && ("offline" !== r.pageStatus() && (!b.viewHandler.messagePreview || b.viewHandler.messagePreview && 1 > b.viewHandler.messagePreview.messagePreviewCount)) && this.bubbleContainer.show()
      };
      K.prototype.hideBubble = function () {
        this.bubbleContainer &&
        this.bubbleContainer.hide()
      };
      K.prototype.initMessagePreviewContainer = function () {
        var a, c;
        a = b.viewHandler.iframeContainer;
        this.messagePreview = new Q(n.getRandomName(), n.getGenericStyle({
          zindex: "999999",
          width: "378px",
          height: this.messagePreviewHeight,
          position: "fixed",
          display: "none",
          bottom: f.minimizedDimensions().height + this.offsetY + 10 + "px",
          right: this.offsetX + "px"
        }), ba, "iframe");
        b.viewHandler.messagePreview = new E(this.messagePreview);
        this.messagePreview.elementReferrer || a.elementReferrer.appendChild(this.messagePreview.buildView(a.documentRef));
        this.messagePreview.buildIframe(b.MinifiedStyle + f.minStyle());
        a = n.getElementsByTagName(this.messagePreview.documentRef, "body")[0];
        c = t["tawkchat-message-preview"];
        c = c.replace(/__TAWK_TO_LINK__/gm, b.viewHandler.tawktoLinkName);
        c = c.replace(/__BOTTOM_CONTAINER__/gm, b.viewHandler.bottomContainerName);
        a.innerHTML = c;
        b.viewHandler.messagePreview.init()
      };
      K.prototype.destroyMessagePreviewContainer = function () {
        this.messagePreview && (this.messagePreview.documentRef && this.messagePreview.documentRef.parentNode) &&
        this.messagePreview.documentRef.parentNode.removeChild(this.messagePreview.documentRef);
        this.messagePreview = null;
        b.viewHandler.messagePreview = null
      };
      var Fa = K.extend({
        init: function () {
          var a = this;
          this._super(this);
          b.eventEmitter.on("localeChanged", function () {
            a.setLinkTitle()
          });
          f.isRTL.subscribe(function () {
            a.addClassName()
          })
        }, buildView: function () {
          this._super(this);
          this.addClassName();
          this.setLinkTitle()
        }, attachEvents: function () {
          this.container && this._super()
        }, createCanvasChatBubble: function () {
          var a, b, d,
            k, e, g, h, l, m, n, p, q, r, t, v, x, u, w = 5, y = f.chatBubble().bgc;
          if (a = this.bubbleContainer.getElementById("tawkchat-chat-bubble-canvas")) f.chatPosition(), a.width = "146", a.height = "85", e = a.getContext("2d"), e.clearRect(0, 0, 134, 63), e.fillStyle = y, f.isTopPositioned() ? (w = 16, g = 68, r = w + 3, q = 81, t = 6, v = !1, a = 1.1, b = 1.9, d = 1.6, k = 0.85) : (g = w = 6, r = w + 63 - 3, q = 55, t = 79, v = !0, a = 0.9, b = 0.1, d = 0.4, k = 1.15), f.isRTL() ? (u = 10, closeContainerStart = u - 4, h = u + 2, l = u + 5, m = u - 2, n = u - 2, p = u + 5, q = 81, f.isTopPositioned() ? (x = v, d = 0.2, k = 1.45) : (x = !v, d = 0.6, k = 1.85)) : (u =
            2, closeContainerStart = u + 134 + 4, h = u + 134 - 2, l = u + 134 - 5, m = u + 134 + 2, n = u + 134 + 2, p = u + 134 - 5, x = v), e.beginPath(), e.moveTo(u + 8, w), e.lineTo(68, w), e.lineTo(u + 134 - 8, w), e.quadraticCurveTo(u + 134, w, u + 134, w + 8), e.lineTo(u + 134, w + 63 - 8), e.quadraticCurveTo(u + 134, w + 63, u + 134 - 8, w + 63), e.lineTo(u + 8, w + 63), e.quadraticCurveTo(u, w + 63, u, w + 63 - 8), e.lineTo(u, w + 8), e.quadraticCurveTo(u, w, u + 8, w), e.strokeStyle = "#e3e0e7", e.lineWidth = 2, e.stroke(), e.closePath(), e.fill(), e.beginPath(), e.arc(68, r, 10, Math.PI * a, Math.PI * b, v), e.strokeStyle = "#e3e0e7",
            e.lineWidth = 2, e.stroke(), e.fill(), f.isDesktopRectangle() || (f.isTopPositioned() && f.isLeftPositioned() ? q -= 30 : f.isBottomPositioned() && f.isRightPositioned() ? q += 30 : f.isCenterPositioned() && f.isRightPositioned() && (q += 30)), e.beginPath(), e.arc(q, t, 5, 0, 2 * Math.PI, !1), e.strokeStyle = "#e3e0e7", e.lineWidth = 2, e.stroke(), e.closePath(), e.fill(), e.beginPath(), e.arc(h, g + 5, 10, Math.PI * d, Math.PI * k, x), e.strokeStyle = "#e3e0e7", e.lineWidth = 2, e.stroke(), e.closePath(), e.fillStyle = y, e.fill(), e.beginPath(), e.moveTo(l, g + 1.5), e.lineTo(m,
            g + 8), e.closePath(), e.lineWidth = 2, e.strokeStyle = f.chatBubble().fgc, e.stroke(), e.beginPath(), e.moveTo(n, g + 1.5), e.lineTo(p, g + 8), e.closePath(), e.lineWidth = 2, e.strokeStyle = f.chatBubble().fgc, e.stroke()
        }
      });
      Fa.prototype.setLinkTitle = function () {
        var a = this.container.getElementById("minimizeChatMinifiedBtn"),
          c = this.container.getElementById("maximizeChat");
        this.container && (c && c.setAttribute("title", b.languageParser.translate("rollover", "maximize")), a && a.setAttribute("title", b.languageParser.translate("rollover",
          "minimize")))
      };
      Fa.prototype.chatEnded = function () {
        var a = this.container.getElementById("tawkchat-minified-agent-container"),
          b = this.container.getElementById("tawkchat-status-text-container"),
          d = this.container.getElementById("tawkchat-minified-link-container");
        a && b && (a.innerHTML = "", a.style.display = "none", b.style.display = "block", d.style.marginTop = "0px")
      };
      Fa.prototype.addClassName = function () {
        var a;
        a = f.isRTL() ? " rtl-direction" : " ltr-direction";
        this.container && this.container.elementReferrer && (this.container.getElementById("tawkchat-minified-wrapper").className =
          n.getContrast(f.headerTxtColor) + a);
        this.chatIndicator && this.chatIndicator.elementReferrer && (this.chatIndicator.getElementById("tawkchat-chat-indicator").className = a)
      };
      var W = TawkClass.extend({
        init: function (a, c) {
          var d = this;
          this.inDocument = !1;
          this.maxNumberFileUpload = 5;
          this.maxSizeFileUpload = 52428800;
          this.frameWidth = y ? "100%" : f.maximizedDimensions().width + "px";
          this.frameHeight = y ? "100%" : f.maximizedDimensions().height + "px";
          this.isActionsContainerNotifShown = this.isChatMenuOpen = !1;
          this.resizeThrottle = 0;
          this.container =
            f.isPopup ? new C(n.getRandomName(), "display: none;") : new Q(n.getRandomName(), n.getGenericStyle({
              zindex: "999999",
              position: "static",
              display: "none",
              height: this.frameHeight,
              width: this.frameWidth
            }), ba, "iframe");
          this.wrapper = new C("tawkchat-maximized-wrapper");
          b.MaximizedStyle = b.MaximizedStyle.replace(/#tawktoLink/g, "#" + a);
          b.MaximizedStyle = b.MaximizedStyle.replace(/#bottomContainer/g, "#" + c);
          this.wrapper.template = this.wrapper.template.replace(/__TAWK_TO_LINK__/gm, a);
          this.wrapper.template = this.wrapper.template.replace(/__BOTTOM_CONTAINER__/gm,
            c);
          this.wrapper.template = this.wrapper.template.replace("__TOO_LONG_MESSAGE__", b.languageParser.translate("chat", "message_too_long"));
          f.isDesktopRectangle() || this.wrapper.addClass("roundWidget");
          this.chatTextarea = new C("chatTextarea", null, null, "textarea");
          this.container.addChildViews([this.wrapper]);
          f.maximizedDimensions.subscribe(function (a) {
            f.isEmbedded || (f.isPopup || y) || (d.frameHeight = a.height + "px", d.frameWidth = a.width + "px", d.container.restyle("height", d.frameHeight + " !important"), d.container.restyle("width",
              d.frameWidth + " !important"))
          });
          r.pageStatus.subscribe(function (a) {
            d.updateGreetings(a)
          });
          f.soundOn.subscribe(function () {
            d.toggleSound()
          });
          b.eventEmitter.on("localeChanged", function () {
            d.container && d.updateGreetings()
          });
          f.isRTL.subscribe(function () {
            d.addClassName()
          });
          D.name.subscribe(function () {
            if (!n.isGeneratedName(D.name())) for (var a = n.getElementsByClassName(d.container.documentRef, "messageOwnerName visitor"), b = 0; b < a.length; b++) a[b].style.display = "none"
          });
          f.webRTCSettings.subscribe(function () {
            d.toggleWebRTCActions()
          });
          f.desktopWidget.subscribe(function () {
            f.isDesktopRectangle() ? (d.wrapper.removeClass("roundWidget"), d.container.documentRef.getElementById("minimizeChat").className = "headerBoxLink", "br" === f.chatPosition() ? d.container.documentRef.body.className = "right" : d.container.documentRef.body.className = "left") : (d.wrapper.addClass("roundWidget"), d.container.documentRef.getElementById("minimizeChat").className = "notShown")
          });
          f.showEmoji.subscribe(function () {
            d.toggleEmojiAction()
          });
          f.showUploads.subscribe(function () {
            d.toggleUploadsAction()
          });
          f.showRating.subscribe(function () {
            d.toggleRatingAction()
          })
        }, buildView: function () {
          f.isPopup || this.container.buildIframe(b.MaximizedStyle + f.maxStyle());
          this.container.documentRef.getElementById("textareaContainer").appendChild(this.chatTextarea.buildView(this.container.documentRef));
          f.isEmbedded || f.isPopup || y ? this.restyleEmbed() : "br" == f.chatPosition() ? (n.removeClass(this.container.documentRef.body, "left"), n.addClass(this.container.documentRef.body, "right")) : (n.removeClass(this.container.documentRef.body,
            "right"), n.addClass(this.container.documentRef.body, "left"));
          this.addClassName();
          this.updateGreetings();
          this.toggleSound();
          this.attachEvents();
          this.toggleUploadsAction();
          this.toggleRatingAction();
          this.toggleEmojiAction();
          n.redraw(this.container.elementReferrer);
          this.inDocument = !0;
          this.toggleWebRTCActions();
          var a = this.container.documentRef.getElementById("minimizeChat");
          f.isEmbedded || !f.isDesktopRectangle() || f.isPopup ? a.className = "notShown" : a.className = "headerBoxLink"
        }, toggleUploadsAction: function () {
          var a =
            this, c = this.container.getElementById("uploadFileOption");
          c && (f.showUploads() ? (c.style.display = "block", this.container.attachUserEventListener("change", function (c) {
            b.eventHandler.cancelEvent(c);
            a.closeMenu();
            c = b.eventHandler.getTargetElement(c).files;
            var f = [], e = [];
            if (c && c.length) {
              for (var g = 0; g < c.length; g++) c[g].size > a.maxSizeFileUpload ? f.push(c[g]) : g >= a.maxNumberFileUpload ? e.push(c[g]) : b.viewHandler.startUpload(c[g]);
              b.viewHandler.checkUploadFileWarning(f, e)
            }
          }, "fileInput", "fileInputChanged"), this.container.attachUserEventListener("dragover",
            function (b) {
              b.preventDefault();
              b.stopPropagation && b.stopPropagation();
              a.wrapper.addClass("drag-over")
            }, "innerWrapper", "textareaContainerDragOver"), c = function (b) {
            var c = a.container.getElementById("tawkchat-maximized-wrapper").getBoundingClientRect();
            if (b.clientY < c.top || b.clientY >= c.bottom || b.clientX < c.left || b.clientX >= c.right) b.preventDefault(), b.stopPropagation && b.stopPropagation(), a.wrapper.removeClass("drag-over")
          }, this.container.attachUserEventListener("dragleave", c, "innerWrapper", "textareaContainerDragLeave"),
            this.container.attachUserEventListener("dragend", c, "innerWrapper", "textareaContainerDragEnd"), this.container.attachUserEventListener("drop", function (c) {
              c.preventDefault();
              c.stopPropagation && c.stopPropagation();
              a.wrapper.removeClass("drag-over");
              c = c.target.files || c.dataTransfer.files;
              var f = [], e = [];
              if (c && 0 !== c.length) {
                for (var g = 0; g < c.length; g++) c[g].size > a.maxSizeFileUpload ? f.push(c[g]) : g >= a.maxNumberFileUpload ? e.push(c[g]) : b.viewHandler.startUpload(c[g]);
                b.viewHandler.checkUploadFileWarning(f, e)
              }
            },
            "innerWrapper", "textareaContainerDrop"), this.container.attachUserEventListener("paste", function (a) {
            var c, f;
            if ((c = (a.originalEvent || a).clipboardData) && (c = c.items) && c.length) {
              for (var e = 0; e < c.length; e++) if (-1 !== c[e].type.indexOf("image")) {
                var g = c[e].getAsFile();
                if (null !== g) {
                  f = g;
                  f.name = b.languageParser.translate("chat", "pasted_image_title", {dateTime: n.parseChatTime(new Date)});
                  break
                }
              }
              f && (b.viewHandler.startUpload(f), a.preventDefault())
            }
          }, "chatTextarea", "chatTextareaPaste")) : c.style.display = "none")
        }, toggleRatingAction: function () {
          var a =
            this.container.getElementById("rateMainWrapper"), c = this.container.getElementById("rateContainer");
          a && c && (f.showRating() ? (a.style.display = "block", this.container.attachUserEventListener("mouseover", function () {
            c.style.display = "block"
          }, "rateMainWrapper", "rateMainWrapperOver"), this.container.attachUserEventListener("mouseout", function () {
            c.style.display = "none"
          }, "rateMainWrapper", "rateMainWrapperOut"), this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
            b.chatHandler.changeRating(1);
            b.eventHandler.cancelEvent(a)
          }, "ratePositive", "ratepveclick"), this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
            b.chatHandler.changeRating(-1);
            b.eventHandler.cancelEvent(a)
          }, "rateNegative", "ratenveclick")) : a.style.display = "none")
        }, toggleEmojiAction: function () {
          var a = this, c = this.container.getElementById("textareaContainer"),
            d = this.container.getElementById("viewEmoji"),
            e = this.container.documentRef.getElementById("emoji-selection-container");
          f.showEmoji() ? (e.innerHTML = t.loader,
            d.style.display = "block", n.addClass(c, "with-emoji"), "undefined" === typeof H && gb(this.container.documentRef), this.container.attachUserEventListener(b.viewHandler.clickEvent, function (c) {
            c.stopPropagation ? c.stopPropagation() : c.cancelBubble = !0;
            "active" === a.container.getElementById("viewEmoji").className ? a.closeEmojiSelection() : (a.container.getElementById("viewEmoji").className = "active", Ua(e), b.viewHandler.adjustEmojiContainerHeight())
          }, "viewEmoji", "viewEmojiClick"), this.wrapper.attachUserEventListener(b.viewHandler.clickEvent,
            function (c) {
              c = b.eventHandler.getTargetElement(c);
              e && ("function" === typeof e.contains ? e.contains(c) || a.closeEmojiSelection() : n.isDescendent(e, c) && a.closeEmojiSelection())
            }, null, "maxWidgetClick")) : (d.style.display = "none", n.removeClass(c, "with-emoji"))
        }, attachEvents: function () {
          var a = this, c = this.container.documentRef.getElementById("tooLongMsgNotification"),
            d = n.hasWebRTC() ? null : "Browser not supported.";
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function (c) {
            f.isPopup ? g.close() : (b.eventHandler.cancelEvent(c),
              b.sessionHandler.notifyWindowState("min"), a.closeMenu())
          }, "minimizeChat", "minlinkclick");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
            b.viewHandler.popoutWidget();
            a.closeMenu()
          }, "popoutChat", "poplinkclick");
          if (y) {
            var e = this.container.getElementById("chatTextarea");
            e && (db.initElement(e, function (d, f) {
              5E3 >= f.length ? (c.className = "", a.isActionsContainerNotifShown = !1) : (c.className = "visible", a.isActionsContainerNotifShown = !0);
              a.toggleMobileSubmitButton(f);
              b.chatHandler.sendTextPreview(d)
            }),
              this.container.attachUserEventListener(b.viewHandler.clickEvent, function (c) {
                b.eventHandler.cancelEvent(c);
                b.chatHandler.sendMessage(e.value);
                e.value = "";
                a.toggleMobileSubmitButton("");
                a.resizeTextArea()
              }, "textareaSubmitButton", "submitclick"))
          } else this.chatTextarea.attachUserEventListener("keyup", function (b) {
            5E3 >= this.value.length ? (c.className = "", a.isActionsContainerNotifShown = !1) : (c.className = "visible", a.isActionsContainerNotifShown = !0);
            a.resizeTextArea()
          }, null, "chatinputkeyup"), this.chatTextarea.attachUserEventListener("keydown",
            function (d) {
              var f, e = a.container.getElementById("hidableActionsWrapper"),
                k = a.container.getElementById("textareaContainer");
              a.resizeTextArea();
              if (13 === d.keyCode) {
                if (5E3 < this.value.length) {
                  d.preventDefault();
                  return
                }
                c.className = "";
                a.isActionsContainerNotifShown = !1;
                b.viewHandler.scrollToBottom()
              }
              f = b.eventHandler.getTargetElement(d);
              setTimeout(function () {
                f.value ? (e.style.display = "none", k.className = k.className.replace("additionalPadding", ""), n.removeClass(k, "additionalPadding")) : (e.style.display = "block",
                  k.className += " additionalPadding ", n.addClass(k, "additionalPadding"))
              }, 0);
              b.chatHandler.sendTextPreview(d)
            }, null, "chatinputkeydown"), this.chatTextarea.attachUserEventListener("blur", function (c) {
            c = b.eventHandler.getTargetElement(c);
            var d = a.container.getElementById("hidableActionsWrapper");
            c.value || (d.style.display = "block", n.addClass(a.container.getElementById("textareaContainer"), "additionalPadding"))
          }, null, "chatinputblur");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
            var c =
              b.eventHandler.getTargetElement(a);
            -1 !== c.className.indexOf("messageOwnerName") && -1 !== c.className.indexOf("visitor") && (b.formHandler.openForm("nameForm"), b.eventHandler.cancelEvent(a))
          }, "chatWrapper", "chatWrapperclick");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function (c) {
            b.formHandler.openForm("nameForm");
            a.closeMenu();
            b.eventHandler.cancelEvent(c)
          }, "changeName", "changenameclick");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function (c) {
            b.formHandler.openForm("emailTranscriptForm");
            a.closeMenu();
            b.eventHandler.cancelEvent(c)
          }, "emailTranscriptOption", "emailclick");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
            b.eventHandler.cancelEvent(a);
            b.chatHandler.toggleSound()
          }, "soundOn", "soundonclick");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
            b.eventHandler.cancelEvent(a);
            b.chatHandler.toggleSound()
          }, "soundOff", "soundoffclick");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
            b.eventHandler.cancelEvent(a);
            b.viewHandler.expandAgentList(a)
          }, "expandableIcon", "expandclick");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
            var a = b.languageParser.translate("chat", "video_call_error");
            n.getWebRTCToken(!0, !1, function (c) {
              c && b.viewHandler.appendMessage({
                senderType: "s",
                message: d || a,
                time: new Date,
                type: "n",
                isRtcError: !0,
                rtcType: "video"
              })
            })
          }, "videoCall", "videoCallClick");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
            var a = b.languageParser.translate("chat", "voice_call_error");
            n.getWebRTCToken(!1, !1, function (c) {
              c && b.viewHandler.appendMessage({
                senderType: "s",
                message: d || a,
                time: new Date,
                type: "n",
                isRtcError: !0,
                rtcType: "voice"
              })
            })
          }, "voiceCall", "voiceCallClick");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
              var b = a.container.getElementById("chatMenu"), c = a.container.getElementById("chatMenuControls");
              a.chatMenuOpen ? (a.chatMenuOpen = !1, b.className = "", c.style.display = "none") : (a.chatMenuOpen = !0, b.className = "active", c.style.display = "block")
            }, "chatMenu",
            "chatMenuClick");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
            a.container.getElementById("chatMenu").className = "";
            a.closeMenu()
          }, "chatMenuControlsOverlay", "chatMenuControlsOverlayClick");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
              var a = b.languageParser.translate("chat", "screen_share_error");
              n.getWebRTCToken(!1, !0, function (c) {
                c && b.viewHandler.appendMessage({
                  senderType: "s",
                  message: d || a,
                  time: new Date,
                  type: "n",
                  isRtcError: !0,
                  rtcType: "screen"
                })
              })
            },
            "screenShare", "screenShareClick");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
            a.container.getElementById("maxFileNotificationContainer").classList.add("hidden")
          }, "closeNumberNotification", "closeNumberNotification");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function () {
            a.container.getElementById("maxSizeNotificationContainer").classList.add("hidden")
          }, "closeSizeNotification", "closeSizeNotification");
          this.container.attachUserEventListener("mousedown",
            function () {
              var a = g.document.activeElement;
              !a || "input" !== a.tagName.toLowerCase() && "textarea" !== a.tagName.toLowerCase() || (b.viewHandler.lastFocusedElement = a)
            }, "innerWrapper", "maximizedWidgetMouseDown");
          this.container.attachUserEventListener("click", function (b) {
            b.preventDefault();
            a.chatTextarea && a.chatTextarea.elementReferrer && a.chatTextarea.elementReferrer.focus()
          }, "textareaContainer", "textareaContainerClick");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
            b.formHandler.openForm("nameForm");
            b.eventHandler.cancelEvent(a)
          }, "changeNameOption", "changenameclick");
          this.wrapper.attachUserEventListener("keydown", function (b) {
            27 === b.keyCode && a.closeEmojiSelection()
          }, null, "maxWidgetKeydown");
          var h = function (c) {
            "cut" !== c.type && "paste" !== c.type || b.chatHandler.sendTextPreview(c);
            a.resizeTextArea()
          };
          this.chatTextarea.attachUserEventListener("keydown", h, null, "chatinputkeyupresize");
          this.chatTextarea.attachUserEventListener("change", h, null, "chatinputchangeresize");
          this.chatTextarea.attachUserEventListener("input",
            h, null, "chatinputinputresize");
          this.chatTextarea.attachUserEventListener("paste", h, null, "chatinputpasteresize");
          this.chatTextarea.attachUserEventListener("cut", h, null, "chatinputcutresize");
          var l, m, p, q, r = this.container.getElementById("greetingsMainContainer"),
            h = /Firefox/i.test(x.userAgent) ? "DOMMouseScroll" : "mousewheel",
            t = this.container.getElementById("chatContainer");
          y && (h = "touchstart touchmove touchend");
          y && this.container.attachUserEventListener("scroll", a.chatViewScroll.bind(a), "chatContainer", "chatContainerScroll");
          this.container.attachUserEventListener(h, function (c) {
            l = c.originalEvent ? c.originalEvent : c;
            q = l.detail ? -40 * l.detail : l.wheelDelta;
            var d = 0 < q;
            "touchmove" === c.type ? p = c.changedTouches[0].clientY : "touchstart" === c.type ? m = c.touches[0].clientY : "touchend" === c.type ? d = m < p : y || a.chatViewScroll(c);
            if (0 === t.scrollTop && -1 !== r.className.indexOf("minimize")) {
              if (0 > q || m > p) return
            } else if (-1 === t.className.indexOf("minimize") && (m < p || 0 < q)) return;
            b.viewHandler.toggleGreetingsView(d)
          }, "chatPanel", "chatPanelScroll")
        }, toggleSound: function () {
          var a =
            this.container.getElementById("soundOn"), b = this.container.getElementById("soundOff");
          a && b && (f.soundOn() ? (a.style.display = "block", b.style.display = "none") : (a.style.display = "none", b.style.display = "block"))
        }
      });
      W.prototype.chatViewScroll = function () {
        this.isScrolling && clearTimeout(this.isScrolling);
        this.isScrolling = setTimeout(function () {
          "max" === r.chatWindowState() && b.viewHandler.checkSeenMessageViewport()
        }, 1E3 / 66)
      };
      W.prototype.hide = function () {
        this.container.restyle("display", "none !important")
      };
      W.prototype.show =
        function () {
          this.container.restyle("display", "block !important");
          b.viewHandler.checkSeenMessageViewport();
          "consentForm" === b.formHandler.currentForm && this.wrapper.addClass("noMenu");
          b.formHandler.handleResizeofForm()
        };
      W.prototype.restyleEmbed = function () {
        var a = document.getElementById(l.embedded);
        this.wrapper.addClass("embedded");
        if (f.isPopup || f.isEmbedded) this.container.getElementById("popoutChat").outerHTML = "";
        if (f.isEmbedded) return a ? b.viewHandler.onEmbeddedWindowResize() : void 0;
        f.isPopup && (this.wrapper.addClass("popout"),
          n.updateFontStylesheet(document));
        this.container.restyle("width", "100% !important");
        this.container.restyle("height", "100% !important")
      };
      W.prototype.updateGreetings = function (a) {
        var c;
        if (this.container.elementReferrer) {
          if (c = this.container.getElementById("file-upload-drop-label")) c.innerHTML = b.languageParser.translate("chat", "dragDropText");
          if (a = a || r.pageStatus()) c = this.container.getElementById("shortMessage"), this.setChatGreetings(), c && this.chatTextarea && (a = m.getShortMessage(a), null !== a && (c.innerHTML =
            a, f.onlineGreeting && (a = n.rawDecode(f.onlineGreeting.actionMessage), ga ? this.chatTextarea.elementReferrer.placeholder = a : (this.chatTextarea.elementReferrer.value = a, n.togglePlaceholderText(this.chatTextarea.elementReferrer, a, "chatTextarea")))))
        }
      };
      W.prototype.addClassName = function () {
        this.wrapper && this.wrapper.elementReferrer && (f.isRTL() ? (this.wrapper.addClass("rtl-direction"), this.wrapper.removeClass("ltr-direction")) : (this.wrapper.addClass("ltr-direction"), this.wrapper.removeClass("rtl-direction")))
      };
      W.prototype.toggleEndChatOption = function (a) {
        var b = this.container.getElementById("endChatOption");
        b && (endChatEl = this.container.getElementById("endChat"), chatMenuEl = this.container.getElementById("chatMenuControls"), f.isEmbedded ? a ? (b.style.width = "220px", b.style.marginLeft = "-220px", chatMenuEl.style.right = "34px", endChatEl.style.display = "inline-block") : (b.style.width = "194px", b.style.marginLeft = "-194px", chatMenuEl.style.right = "10px", endChatEl.style.display = "none") : b.style.display = a ? "block" : "none")
      };
      W.prototype.addEmojiToInput =
        function (a) {
          ga || this.chatTextarea.elementReferrer.value !== n.rawDecode(f.onlineGreeting.actionMessage) || (this.chatTextarea.elementReferrer.value = "");
          this.chatTextarea.elementReferrer.value += a;
          this.chatTextarea.elementReferrer.focus();
          this.closeEmojiSelection()
        };
      W.prototype.closeEmojiSelection = function () {
        this.container.getElementById("viewEmoji").className = "";
        n.removeClass(this.container.getElementById("emoji-selection-container"), "showWithFade")
      };
      W.prototype.resizeTextArea = function () {
        var a = this;
        clearTimeout(this.resizeThrottle);
        this.resizeThrottle = setTimeout(function () {
          var c = a.chatTextarea.elementReferrer.value, d = a.container.documentRef.getElementById("textareaContainer"),
            f = a.container.documentRef.getElementById("actionsContainer"),
            e = a.container.documentRef.getElementById("emoji-selection-container"),
            g = b.viewHandler.ifScrollbarDown(), h = y ? 18 : 20,
            l = a.container.documentRef.getElementById(b.viewHandler.bottomContainerName),
            m = c.split(/\r\n|\r|\n/).length || 1, n = m * h;
          1 === m && a.chatTextarea.elementReferrer.scrollHeight > a.chatTextarea.elementReferrer.clientHeight &&
          (n = a.chatTextarea.elementReferrer.scrollHeight);
          c && n >= h ? (n = 150 < n ? 150 : n, this.isActionsContainerNotifShown && (n += 42, d.style.paddingBottom = "42px"), f.style.height = 46 + (n - h) + "px", g && b.viewHandler.scrollToBottom()) : f.style.height = "46px";
          e && (e.style.bottom = f.clientHeight + 2 + "px");
          l && (l.style.bottom = f.clientHeight + 2 + "px");
          clearTimeout(a.resizeThrottle)
        }, 100)
      };
      W.prototype.clearTextareaResize = function () {
        var a = this.container.documentRef.getElementById("actionsContainer"),
          c = this.container.documentRef.getElementById("emoji-selection-container"),
          d = this.container.documentRef.getElementById(b.viewHandler.bottomContainerName);
        a && (a.style.height = "46px");
        c && (c.style.bottom = "48px");
        d && (d.style.bottom = "")
      };
      W.prototype.toggleWebRTCActions = function () {
        if (this.inDocument) {
          var a = "none", b = "none", d = "none";
          f.webRTCSettings() && f.webRTCSettings().en && (a = f.webRTCSettings().v ? "inline-block" : "none", b = "inline-block", d = f.webRTCSettings().s ? "inline-block" : "none");
          this.container.documentRef.getElementById("videoCall").style.display = a;
          this.container.documentRef.getElementById("voiceCall").style.display =
            b;
          this.container.documentRef.getElementById("screenShare").style.display = d
        }
      };
      W.prototype.setChatGreetings = function (a) {
        var c, d = this.container.getElementById("greetingsText"),
          f = this.container.getElementById("greetingsContent");
        (c = r.pageStatus()) && (f && d) && (c = m.getLongMessage(c), a && !c ? (f.className += " no-content", f.style.display = "none") : (d.innerHTML = c.replace(n.regLineBreaks, n.br), 1 > b.agents.agentsCount && (f.style.display = "block"), a || (f.className = f.className.replace(" minimize", ""))))
      };
      W.prototype.toggleMobileSubmitButton =
        function (a) {
          var b = this.container.getElementById("actionsContainer");
          a && "mobile-typing" !== b.className ? b.className = "mobile-typing" : a || "mobile-typing" !== b.className || (b.className = "")
        };
      var pa = W.extend({
        init: function () {
          var a = this;
          this._super.apply(this, arguments);
          b.eventEmitter.on("formClosed", function () {
            var c = a.container.getElementById("chatPanel");
            if (c) if (f.showPreChatForm && !r.prechatFormSubmitted()) b.formHandler.openForm("preChatForm"); else if (a.setChatGreetings(!0), c.style.display = "block", a.wrapper.removeClass("noMenu"),
              b.viewHandler.checkSeenMessageViewport(), !y && a.container.getElementById("chatTextarea") && "max" === r.chatWindowState() && b.viewHandler.userAction) {
              var d = n.getDocument(n.getDocument(g).getElementById(a.container.elementId));
              if (d && d.getElementById("chatTextarea")) try {
                setTimeout(function () {
                  d.getElementById("chatTextarea").focus()
                }, 0)
              } catch (e) {
              }
            }
          });
          b.eventEmitter.on("formOpened", function () {
            a.container && a.container.getElementById("chatPanel") && ("preChatForm" !== b.formHandler.currentForm && "offlineForm" !== b.formHandler.currentForm &&
            "consentForm" !== b.formHandler.currentForm || a.wrapper.addClass("noMenu"), a.container.getElementById("chatPanel").style.display = "none")
          });
          b.eventEmitter.on("localeChanged", function () {
            a.insertText();
            a.setLinkTitle();
            a.toggleSound()
          })
        }, buildView: function () {
          this._super(this);
          this.setLinkTitle();
          this.insertText();
          this.wrapper && this.wrapper.addClass(n.getContrast(f.headerTxtColor));
          this.attachEvents()
        }, insertText: function () {
          var a;
          if (this.container) {
            this.container.getElementById("tawkContent").innerHTML =
              b.languageParser.translate("overlay", "tawkContent");
            this.container.getElementById("cancelTawkRedirect").innerHTML = b.languageParser.translate("form", "CancelButton");
            this.container.getElementById("tawkRedirect").innerHTML = b.languageParser.translate("form", "visitButton");
            this.container.getElementById("maxFileNotificationMessage").innerHTML = b.languageParser.translate("notifications", "maximum_file_upload_warning", {
              strongStart: "<strong>",
              strongEnd: "</strong>",
              limitFileNumber: "5"
            });
            this.container.getElementById("maxSizeNotificationMessage").innerHTML =
              b.languageParser.translate("notifications", "maximum_size_upload_warning", {
                strongStart: "<strong>",
                strongEnd: "</strong>",
                limitFileSize: "50mb"
              });
            this.container.getElementById("emailTranscriptOption").innerHTML = b.languageParser.translate("menu", "email_transcript");
            this.container.getElementById("changeName").innerHTML = b.languageParser.translate("menu", "change_name");
            this.container.getElementById("soundOn").innerHTML = b.languageParser.translate("menu", "sound_on");
            this.container.getElementById("soundOff").innerHTML =
              b.languageParser.translate("menu", "sound_off");
            this.container.getElementById("maxSizeNotifLabel").innerHTML = b.languageParser.translate("chat", "Warning");
            this.container.getElementById("maxFileNotifLabel").innerHTML = b.languageParser.translate("chat", "Warning");
            this.container.getElementById("endChat").innerHTML = b.languageParser.translate("menu", "end_chat_session");
            f.isEmbedded || f.isPopup || (this.container.getElementById("popoutChat").innerHTML = b.languageParser.translate("menu", "popout_widget"));
            a = n.getElementsByClassName(this.container.getElementById("chatContainer"),
              "closeNotification");
            for (var c = 0; c < a.length; c++) a[c].innerHTML = b.languageParser.translate("form", "CloseButton");
            (a = this.container.getElementById("uploadFileOption")) && (n.isFileInputSupported ? a.setAttribute("title", b.languageParser.translate("rollover", "uploadFile")) : a.parentNode.removeChild(a))
          }
        }, attachEvents: function () {
          var a = this, c = a.container.getElementById("tawkToContent");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, b.viewHandler.tawktoLinkName, "tawktoclick");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
            c.style.display = "none"
          }, "cancelTawkRedirect", "cancelTawkRedirectclick");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
            c.style.display = "none";
            g.open("https://www.tawk.to/?utm_source=visitor-widget&utm_medium=link&utm_campaign=referral&utm_term=" + L.pageId)
          }, "tawkRedirect", "tawkRedirectClicn");
          this.container.attachUserEventListener(b.viewHandler.clickEvent,
            function (a) {
              b.formHandler.openForm("emailTranscriptForm");
              b.eventHandler.cancelEvent(a)
            }, "emailTranscriptOption", "emailclick");
          this.container.attachUserEventListener(b.viewHandler.clickEvent, function (c) {
            "preChatForm" !== b.formHandler.currentForm && "offlineForm" !== b.formHandler.currentForm && "consentForm" !== b.formHandler.currentForm && b.chatHandler.isVisitorEngaged() ? (b.formHandler.openForm("endChatForm"), b.eventHandler.cancelEvent(c)) : (b.eventHandler.cancelEvent(c), b.sessionHandler.notifyWindowState("min"));
            a.closeMenu()
          }, "endChat", "endChatclick");
          this._super(this)
        }
      });
      pa.prototype.closeMenu = function () {
        this.chatMenuOpen && (this.chatMenuOpen = !1, this.container.getElementById("chatMenuControls").style.display = "none", this.container.getElementById("chatMenu").className = "")
      };
      pa.prototype.setLinkTitle = function () {
        this.container && (this.container.getElementById("ratePositive").setAttribute("title", b.languageParser.translate("rollover", "positiveRating")), this.container.getElementById("rateNegative").setAttribute("title",
          b.languageParser.translate("rollover", "negativeRating")), this.container.getElementById("screenShare").setAttribute("title", b.languageParser.translate("rollover", "screenShare")), this.container.getElementById("voiceCall").setAttribute("title", b.languageParser.translate("rollover", "voiceCall")), this.container.getElementById("videoCall").setAttribute("title", b.languageParser.translate("rollover", "videoCall")), this.container.getElementById("chatMenu").setAttribute("title", b.languageParser.translate("rollover",
          "chatMenu")), this.container.getElementById("viewEmoji").setAttribute("title", b.languageParser.translate("chat", "insert_emoji")), f.isEmbedded || this.container.getElementById("minimizeChat").setAttribute("title", b.languageParser.translate("form", "CloseButton")))
      };
      pa.prototype.chatEnded = function () {
        b.formHandler.openForm("restartChatForm")
      };
      pa.prototype.chatStarted = function () {
        var a = this.container.getElementById("chatEnded"), b = this.container.getElementById("chatContainerWrapper"),
          d = this.container.getElementById("agentList"),
          f = this.container.getElementById("options");
        a && a.parentNode.removeChild(a);
        d && (d.innerHTML = "");
        b && (b.className = b.className.replace("chat-ended", ""));
        f && (f.style.display = "block")
      };
      var F = z.extend({
        init: function () {
          var a = this;
          this._super(this);
          this.startY = this.startX = 0;
          this.iframeXOffsetPosition = f.widgetOffsetX;
          this.iframeYOffsetPosition = f.widgetOffsetY;
          this.isMaximized = this.isWidgetAnimating = this.userAction = this.isWidgetPositionsUpdated = !1;
          this.overlayElement = new C(null, n.getGenericStyle({
            left: "0px",
            top: "0px",
            zindex: "1000001",
            cursor: "move",
            width: "100%",
            height: "100%",
            display: "none",
            "float": "left"
          }));
          this.iframeContainerName = n.getRandomName();
          this.iframeContainer = new C(this.iframeContainerName);
          this.resizeFromLeft = new C(n.getRandomName(), n.getGenericStyle({
            height: "100%",
            left: "0px",
            top: "0px",
            zindex: "999998",
            cursor: "w-resize",
            width: "6px"
          }));
          this.resizeFromRight = new C(n.getRandomName(), n.getGenericStyle({
            height: "100%",
            width: "6px",
            right: "0px",
            top: "0px",
            zindex: "999998",
            cursor: "e-resize"
          }));
          this.resizeFromTop =
            new C(n.getRandomName(), n.getGenericStyle({
              height: "6px",
              width: "100%",
              right: "0px",
              top: "0px",
              zindex: "999998",
              cursor: "n-resize"
            }));
          this.resizeFromBottom = new C(n.getRandomName(), n.getGenericStyle({
            height: "6px",
            width: "100%",
            right: "0px",
            bottom: "0px",
            zindex: "999998",
            cursor: "s-resize"
          }));
          this.resizeTopLeft = new C(n.getRandomName(), n.getGenericStyle({
            height: "12px",
            width: "12px",
            left: "0px",
            top: "0px",
            zindex: "999998",
            cursor: "nw-resize"
          }));
          this.resizeTopRight = new C(n.getRandomName(), n.getGenericStyle({
            height: "12px",
            width: "12px", right: "0px", top: "0px", zindex: "999998", cursor: "ne-resize"
          }));
          this.resizeBottomLeft = new C(n.getRandomName(), n.getGenericStyle({
            height: "12px",
            width: "12px",
            bottom: "0px",
            left: "0px",
            zindex: "999998",
            cursor: "sw-resize"
          }));
          this.resizeBottomRight = new C(n.getRandomName(), n.getGenericStyle({
            height: "12px",
            width: "12px",
            bottom: "0px",
            right: "0px",
            zindex: "999999",
            cursor: "se-resize"
          }));
          e = new pa(this.tawktoLinkName, this.bottomContainerName);
          this.iframeContainer.addChildViews([e.container]);
          if (!f.isPopup &&
            !f.isEmbedded) {
            p = new Fa;
            var c = [p.container, p.chatIndicator, p.bubbleContainer, this.overlayElement], d;
            f.isDesktopRectangle() ? d = [this.resizeFromLeft, this.resizeFromRight, this.resizeFromTop, this.resizeFromBottom, this.resizeTopLeft, this.resizeTopRight, this.resizeBottomLeft, this.resizeBottomRight] : (d = [], f.isRightPositioned() ? d.push(this.resizeFromLeft) : d.push(this.resizeFromRight), f.isCenterPositioned() ? (d = d.concat([this.resizeFromBottom, this.resizeFromTop]), d = f.isRightPositioned() ? d.concat([this.resizeTopLeft,
              this.resizeBottomLeft]) : d.concat([this.resizeTopRight, this.resizeBottomRight])) : f.isTopPositioned() ? (d.push(this.resizeFromBottom), f.isRightPositioned() ? d.push(this.resizeBottomLeft) : d.push(this.resizeBottomRight)) : (d.push(this.resizeFromTop), f.isRightPositioned() ? d.push(this.resizeTopLeft) : d.push(this.resizeTopRight)));
            this.iframeContainer.addChildViews(c.concat(d))
          }
          this.indicator = new oa(p ? p.chatIndicator : null);
          this.chatContainer = e.container;
          this.iframeContainer.buildView();
          this.insertFrameStyle();
          r.pageStatus.subscribe(function (b) {
            a.updateViewByStatus(b)
          });
          w.rating.subscribe(function (b) {
            a.changeRating(b)
          });
          f.isPopup || f.isEmbedded || r.chatWindowState.subscribe(function (b) {
            "max" === b ? a.maximizeWidget() : a.minimizeWidget()
          });
          f.minStyle.subscribe(function () {
            p && p.container.elementReferrer && (p.container.insertCssFile(f.minStyle(), !0), p.container.documentRef.getElementById("tawkchat-minified-wrapper").className = n.getContrast(f.headerTxtColor))
          });
          f.maxStyle.subscribe(function () {
            e && e.container.elementReferrer &&
            (e.container.insertCssFile(f.maxStyle(), !0), e.wrapper.removeClass("black"), e.wrapper.removeClass("white"), e.wrapper.addClass(n.getContrast(f.headerTxtColor)))
          });
          f.minimizedDimensions.subscribe(function () {
            var b = a.calculateWidgetPosition();
            a.iframeContainer.restyle("top", b.top);
            a.iframeContainer.restyle("bottom", b.bottom);
            a.iframeContainer.restyle("right", b.right);
            a.iframeContainer.restyle("left", b.left)
          });
          this.initialDocumentClick = b.eventHandler.listen(document, "click", function () {
            b.audioPlayer.initAudioPlayer();
            b.eventHandler.removeEventHandler(document, "click", a.initialDocumentClick)
          }, "documentinitialclick")
        }, insertFrameStyle: function () {
          var a, b, d, k = "";
          d = this.calculateWidgetPosition();
          d = n.getGenericStyle({
            display: "none",
            bottom: d.bottom,
            top: d.top,
            right: d.right,
            left: d.left,
            minwidth: "0",
            minheight: "0",
            zindex: T && 9 > O ? "none" : "2000000000",
            position: "fixed"
          });
          f.isTopPositioned() ? (a = "transform:translate(0, -30px);", b = "transform:translate(0, 0px);") : f.isCenterPositioned() ? (a = f.isRightPositioned() ? "transform:translate(30px,0);" :
            "transform:translate(-30px,0);", b = "transform:translate(0px,0);") : (a = "transform:translate(0, 30px);", b = "transform:translate(0, 0px);");
          a = "{0%{opacity:0;" + a + ";}to{opacity:1;" + b + "}}";
          k = k + ("@keyframes tawkMaxOpen" + a) + ("@-moz-keyframes tawkMaxOpen" + a);
          k += "@-webkit-keyframes tawkMaxOpen" + a;
          k += "#" + this.iframeContainerName + "{" + d + "}";
          k += "#" + e.container.elementId + ".open{animation : tawkMaxOpen .25s ease!important;}";
          this.iframeContainer.insertCssFile(k, !0)
        }, show: function () {
          e.hide();
          f.isEmbedded || f.isPopup ?
            (this.iframeContainer.restyle("position", "static"), this.iframeContainer.restyle("right", ""), this.iframeContainer.restyle("left", ""), this.iframeContainer.restyle("width", "100%"), this.iframeContainer.restyle("height", "100%"), e.show()) : (this.isWidgetPositionsUpdated = !0, this.indicator.initIndicator(), b.main.maximize ? this.maximizeWidget() : this.minimizeWidget());
          this.updateViewByStatus(r.pageStatus());
          this._super()
        }
      });
      F.prototype.calculateWidgetPosition = function () {
        var a, b, d = Math.max((document.documentElement.clientHeight,
        g.innerHeight || 0) / 2) - f.maximizedDimensions().height / 2, e = {};
        f.isDesktopRectangle() ? (a = 0, b = f.widgetOffsetX) : (b = 10, a = f.minimizedDimensions().height + f.widgetOffsetX + 10, b = f.isCenterPositioned() ? f.minimizedDimensions().width + f.widgetOffsetX + b : b);
        f.isTopPositioned() ? (e.bottom = "auto", e.top = a + "px") : (f.isCenterPositioned() ? e.bottom = f.isDesktopRectangle() ? "0px" : d + "px" : e.bottom = a + "px", e.top = "auto");
        f.isRightPositioned() ? (e.right = b + "px", e.left = "auto") : (e.right = "auto", e.left = b + "px");
        return e
      };
      F.prototype.maximizeWidget =
        function () {
          var a = null, c = null;
          p && (a = p.container.getElementById("minimizeChatMinifiedBtn"), c = p.container.getElementById("maximizeChat"));
          this.messagePreview && this.messagePreview.hide();
          if ("max" !== f.onClickAction) return this.popoutWidget();
          f.hideWidgetOnOffline && "offline" === r.pageStatus() && b.formHandler.openForm(f.showConsentForm ? "consentForm" : "offlineForm");
          (f.hideWidgetOnLoad || f.hideWidgetOnOffline) && this.showWidget();
          e.show();
          p && p.container && (f.isDesktopRectangle() ? p.hide() : (p.shown || p.show(), a &&
          c && (n.removeClass(c, "appear"), n.addClass(c, "hide"), n.removeClass(a, "hide"), n.addClass(a, "appear")), p.hideBubble(), n.addClass(p.container.getElementById("tawkchat-minified-box"), "open")));
          this.isMaximized = !0;
          l.triggerApiHandlers("onChatMaximized");
          b.viewHandler.scrollToFirstUnseen();
          if (!y && this.chatContainer.getElementById("chatTextarea") && "max" === r.chatWindowState() && !b.formHandler.currentForm && b.viewHandler.userAction) {
            var d = n.getDocument(n.getDocument(g).getElementById(e.container.elementId));
            if (d &&
              d.getElementById("chatTextarea")) try {
              setTimeout(function () {
                d.getElementById("chatTextarea").focus();
                b.viewHandler.userAction = !1
              }, 0)
            } catch (k) {
            }
          }
          e.container.addClass("open")
        };
      F.prototype.minimizeWidget = function () {
        var a, b = null, d = null;
        if (!f.isPopup && !f.isEmbedded) {
          e.hide();
          this.isMaximized = !1;
          if (f.hideWidgetOnLoad) return this.hideWidget();
          p && (b = p.container.getElementById("minimizeChatMinifiedBtn"), d = p.container.getElementById("maximizeChat"), a = p.container.getElementById("tawkchat-minified-box"));
          b && d &&
          (n.removeClass(d, "hide"), n.addClass(d, "appear"), n.removeClass(b, "appear"), n.addClass(b, "hide"), n.removeClass(a, "open"));
          p.show();
          l.triggerApiHandlers("onChatMinimized");
          this.indicator.initIndicator()
        }
      };
      F.prototype.popoutWidget = function () {
        var a = "https://tawk.to/chat/" + L.pageId + "/";
        this.indicator.hide();
        r.chatWindowState("min");
        this.popoutWin && !this.popoutWin.closed && this.popoutWin.focus ? this.popoutWin.focus() : (f.whiteLabel() && f.whiteLabel().chatUrl && (a = f.whiteLabel().chatUrl + "/chat/"), this.popoutWin =
          g.open(a + $_Tawk_WidgetId + "?$_tawk_sk=" + r.sessionKey + "&$_tawk_tk=" + r.transferKey + "&v=" + r.serverVersion, "Tawk", "height=500, width=450, resizable=yes, toolbar=no, location=no, menubar=no, personalbar=no"))
      };
      F.prototype.toggleWidget = function () {
        var a = r.chatWindowState();
        r.chatWindowState("min" === a ? "max" : "min")
      };
      F.prototype.removeBubble = function () {
        try {
          b.eventEmitter.emit("notifyBubbleClosed")
        } catch (a) {
          q.handleError("Unable to emit notifyBubbleClosed", a.fileName, a.lineNumber, a.stack)
        }
      };
      F.prototype.insertPopupStyle =
        function () {
          var a = document.getElementsByTagName("head")[0], c = document.createDocumentFragment(),
            d = n.createElement(document, "style", {type: "text/css"}), e;
          e = document.createTextNode(b.ResetStyle + "" + b.MaximizedStyle + f.maxStyle());
          d.styleSheet ? d.styleSheet.cssText = e.nodeValue : d.appendChild(e);
          c.appendChild(d);
          a.appendChild(c);
          document.body.className = "popup"
        };
      F.prototype.begin = function () {
        var a = this, c = document.getElementById(l.embedded), d;
        b.main.started || (this.iframeContainer && (d = document.getElementById(this.iframeContainer.elementId)),
        d && d.parentNode.removeChild(d), f.isEmbedded && c ? (c.appendChild(this.iframeContainer.elementReferrer), b.eventHandler.listen(g, "resize", function () {
          a.onEmbeddedWindowResize()
        }, "windowresize")) : (document.body.appendChild(this.iframeContainer.elementReferrer), f.isPopup ? this.insertPopupStyle() : (p.buildView(), this.resizeFromLeft.attachUserEventListener("mousedown", function (b) {
          a.onHeaderMouseDown(b, "left")
        }, null, "resizeLeftfocus"), this.resizeFromRight.attachUserEventListener("mousedown", function (b) {
          a.onHeaderMouseDown(b,
            "right")
        }, null, "resizeRightfocus"), this.resizeFromTop.attachUserEventListener("mousedown", function (b) {
          a.onHeaderMouseDown(b, null, "top")
        }, null, "resizeTopfocus"), this.resizeFromBottom.attachUserEventListener("mousedown", function (b) {
          a.onHeaderMouseDown(b, null, "bottom")
        }, null, "resizeBottomfocus"), this.resizeTopLeft.attachUserEventListener("mousedown", function (b) {
          a.onHeaderMouseDown(b, "left", "top")
        }, null, "resizeTopLeftfocus"), this.resizeTopRight.attachUserEventListener("mousedown", function (b) {
          a.onHeaderMouseDown(b,
            "right", "top")
        }, null, "resizeTopRightfocus"), this.resizeBottomLeft.attachUserEventListener("mousedown", function (b) {
          a.onHeaderMouseDown(b, "left", "bottom")
        }, null, "resizeBottomLeftfocus"), this.resizeBottomRight.attachUserEventListener("mousedown", function (b) {
          a.onHeaderMouseDown(b, "right", "bottom")
        }, null, "resizeBottomRightfocus"), b.eventHandler.listen(g, "resize", function () {
          a.onWindowResize()
        }, "windowresize"))), e.buildView())
      };
      F.prototype.hideWidget = function () {
        this.iframeContainer.hide();
        l.triggerApiHandlers("onChatHidden")
      };
      F.prototype.adjustEmojiContainerHeight = function () {
        var a = this.chatContainer.documentRef.getElementById("emoji-selection-container"),
          b = this.chatContainer.documentRef.getElementById("innerWrapper"),
          d = this.chatContainer.documentRef.getElementById("textareaWrapper"),
          f = this.chatContainer.documentRef.getElementById("headerBoxWrapper"),
          b = b.clientHeight - d.clientHeight - f.clientHeight;
        185 > b && (a.style.height = b + "px")
      };
      F.prototype.showWidget = function () {
        this.iframeContainer.isVisible || this.iframeContainer.show()
      };
      F.prototype.toggleVisibility = function () {
        this.iframeContainer.toggle()
      };
      F.prototype.isWidgetHidden = function () {
        return !this.iframeContainer.isVisible
      };
      F.prototype.onHeaderMouseUp = function () {
        this.overlayElement.restyle("display", "none !important");
        this.resetFrameDimensions();
        this.isResized && (this.isResized = !1, b.socketManager.sendToConnector("notifyWidgetResized"));
        b.eventHandler.removeEventHandler(document, "mousemove", this.mouseMovehandler);
        b.eventHandler.removeEventHandler(document, "mouseup", this.mouseUpHandler)
      };
      F.prototype.onHeaderMouseDown = function (a, c, d) {
        var f = this, h = b.eventHandler.getTargetElement(a);
        h.id !== this.resizeFromLeft.elementId && h.id !== this.resizeFromRight.elementId && h.id !== this.resizeFromTop.elementId && h.id !== this.resizeFromBottom.elementId && h.id !== this.resizeTopLeft.elementId && h.id !== this.resizeBottomLeft.elementId && h.id !== this.resizeTopRight.elementId && h.id !== this.resizeBottomRight.elementId || (1 === a.button && !g.event && !e.documentRef.event || 1 < a.button) || (b.eventHandler.cancelEvent(a), this.overlayElement.restyle("display",
          "block !important"), a = this.getActualViewportDimensions(), this.actualViewPortWidth = a.width, this.actualViewPortHeight = a.height, this.startOffsetY = this.startOffsetX = 0, this.mouseMovehandler = b.eventHandler.listen(document, "mousemove", function (a) {
          f.setResizedDimensions(a, c, d);
          f.isResized = !0;
          f.redrawIE()
        }, "dragmove"), this.mouseUpHandler = b.eventHandler.listen(document, "mouseup", function (a) {
          f.onHeaderMouseUp(a)
        }, "dragleave"))
      };
      F.prototype.redrawIE = function () {
        "explorer" === N && (this.iframeContainer.restyle("visibility",
          "hidden !important"), this.iframeContainer.restyle("visibility", "visible !important"))
      };
      F.prototype.setResizedDimensions = function (a, c, d) {
        var e, g = this.iframeContainer.elementReferrer, h = this.ifScrollbarDown();
        this.isRight && "undefined" !== typeof this.isRight || (this.isRight = f.isRightPositioned());
        this.startX = a.clientX;
        this.startY = a.clientY;
        if (c) {
          e = this.isRight ? "right" : "left";
          var l = parseInt(n.computedStyle(this.chatContainer.elementReferrer, "width").replace("px", ""), 10),
            m = parseInt(n.computedStyle(g, e).replace("px",
              ""), 10), p = this.isRight ? this.actualViewPortWidth - a.clientX : a.clientX, p = 0 > p ? 0 : p;
          this.isRight && "right" === c || !this.isRight && "left" === c ? (c = l - (p - m), 280 > c ? c = 280 : (p > this.actualViewPortWidth - c - 1 && (p = this.actualViewPortWidth - c - 1), g.style.cssText += ";" + e + ":" + p + "px !important", this.startOffsetX = c)) : this.startOffsetX = c = this.isRight ? this.actualViewPortWidth - a.clientX - m : a.clientX - m;
          280 <= c && 0 < this.actualViewPortWidth - (c + parseInt(n.computedStyle(g, e).replace("px", ""), 10)) && this.setWidth(c)
        }
        d && ("bottom" === d ? (d = parseInt(g.style.bottom.replace("px",
          "")), a = this.actualViewPortHeight - a.clientY, 0 > a && (a = 0), d = parseInt(n.computedStyle(this.chatContainer.elementReferrer, "height").replace("px", ""), 10) - (a - d), 330 > d ? d = 330 : (a > this.actualViewPortHeight - d - 1 && (a = this.actualViewPortHeight - d - 1), g.style.cssText += ";bottom:" + a + "px !important", this.startOffsetY = d)) : (startOffsetY = parseInt(n.computedStyle(g, "bottom").replace("px", ""), 10), d = this.actualViewPortHeight - a.clientY - startOffsetY, this.startOffsetY = this.startY - startOffsetY), 330 <= d && 0 < this.actualViewPortHeight -
        (d + parseInt(n.computedStyle(g, "bottom").replace("px", ""), 10)) && this.setHeight(d), b.viewHandler.adjustEmojiContainerHeight());
        h && this.scrollToBottom();
        b && b.formHandler && b.formHandler.resize()
      };
      F.prototype.setChatWindowXPosition = function (a) {
        var b, d, k = parseInt(e.frameWidth.replace("px", ""), 10);
        "undefined" === typeof this.isRight && (this.isRight = f.isRightPositioned());
        this.isRight ? (b = "right", d = parseInt(this.iframeContainer.elementReferrer.style.right, 10)) : (b = "left", d = -parseInt(this.iframeContainer.elementReferrer.style.left,
          10));
        this.startOffsetX || (this.startOffsetX = a + d);
        a = this.isRight ? this.startOffsetX - a : a - this.startOffsetX;
        20 > a ? a = 0 : 20 > this.actualViewPortWidth - (a + k) && (a = this.actualViewPortWidth - k);
        this.iframeContainer.restyle(b, a + "px !important")
      };
      F.prototype.setChatWindowYPosition = function (a) {
        var b, d, f = parseInt(e.frameHeight.replace("px", ""), 10);
        "auto" === this.iframeContainer.elementReferrer.style.bottom ? (styleKey = "top", b = -parseInt(this.iframeContainer.elementReferrer.style.top, 10), d = !1) : (styleKey = "bottom", b = parseInt(this.iframeContainer.elementReferrer.style.bottom,
          10), d = !0);
        this.startOffsetY || (this.startOffsetY = a + b);
        a = d ? this.startOffsetY - a : a - this.startOffsetY;
        20 > a ? a = 0 : 20 > this.actualViewPortHeight - (a + f) && (a = this.actualViewPortHeight - f);
        this.iframeContainer.restyle(styleKey, a + "px !important")
      };
      F.prototype.onWindowResize = function () {
        var a = this;
        clearTimeout(this.resizeTimeout);
        this.wasScrollbarDown = this.ifScrollbarDown();
        this.resizeTimeout = setTimeout(function () {
          a.onWindowResizeTimeout()
        }, 100)
      };
      F.prototype.onWindowResizeTimeout = function () {
        var a = this.getActualViewportDimensions(),
          b = a.width, a = a.height, d = this.iframeContainer.elementReferrer,
          f = this.isBottom ? parseInt(d.style.bottom.replace("px", ""), 10) : parseInt(d.style.top.replace("px", ""), 10),
          g = this.isRight ? parseInt(d.style.right.replace("px", ""), 10) : parseInt(d.style.left.replace("px", ""), 10),
          h = parseInt(e.frameWidth.replace("px", ""), 10), l = parseInt(e.frameHeight.replace("px", ""), 10);
        h + g > b && (g = b - h, 0 > g && (h += g, g = 0, this.setWidth(h)), this.isRight ? d.style.right = g + "px" : d.style.left = g + "px");
        l + f > a && (f = a - l, 0 > f && (l += f, f = 0, this.setHeight(l)),
          this.isBottom ? d.style.bottom = f + "px" : d.style.top = f + "px");
        this.wasScrollbarDown && this.scrollToBottom();
        this.resetFrameDimensions()
      };
      F.prototype.setWidth = function (a) {
        if (!a || 300 > a) a = 300;
        this.chatContainer.restyle("width", a + "px !important")
      };
      F.prototype.setHeight = function (a) {
        if (!a || 350 > a) a = 350;
        this.chatContainer.restyle("height", a + "px !important")
      };
      F.prototype.onEmbeddedWindowResize = function () {
        null === this.isWidgetElementDimensionsNull && this.setWidgetElementDimensions();
        this.isWidgetElementDimensionsNull ?
          (this.setWidth(f.maximizedDimensions().width), this.setHeight(f.maximizedDimensions().height)) : (this.chatContainer.restyle("width", "100%"), this.chatContainer.restyle("height", "100%"))
      };
      F.prototype.setWidgetElementDimensions = function () {
        var a = document.getElementById(l.embedded);
        this.isWidgetElementDimensionsNull = 280 > a.clientWidth || 330 > a.clientHeight ? !0 : !1
      };
      F.prototype.resetFrameDimensions = function () {
        var a = parseInt(n.computedStyle(this.chatContainer.elementReferrer, "width").replace("px", ""), 10),
          b = parseInt(n.computedStyle(this.chatContainer.elementReferrer,
            "height").replace("px", ""), 10);
        e.frameWidth = a + "px";
        e.frameHeight = b + "px"
      };
      F.prototype.isWidgetElementDimensionsNull = null;
      F.prototype.styleAgentBar = function () {
        var a, c = this.chatContainer;
        if (c) {
          a = c.getElementById("agentWrapper");
          try {
            0 < b.agents.agentsCount ? (c.getElementById("headerAccountStateContainer").style.display = "none", a.style.display = "block") : (c.getElementById("headerAccountStateContainer").style.display = "block", a.style.display = "none")
          } catch (d) {
            q.handleError("headerAccountStateContainer is null",
              d.fileName, d.lineNumber, d.stack)
          }
        }
      };
      F.prototype.expandAgentList = function (a) {
        var b, d;
        if (d = this.chatContainer) b = d.getElementById("agentBar"), d = d.getElementById("expandableLink"), 1 === a.button && !g.event || 1 < a.button || (-1 === b.className.indexOf("expanded") ? (b.className += " expanded", d.className = "expanded") : (b.className = b.className.replace("expanded", ""), d.className = ""), this.styleAgentBar())
      };
      F.prototype.resetView = function () {
        var a, b, d, f, e;
        if (f = this.chatContainer) a = f.getElementById("chatWrapper"), d = f.getElementById("agentList"),
          e = f.getElementById("agentBar"), f = f.getElementById("expandableLink"), a && (b = a.lastChild, a.innerHTML = "", a.appendChild(b)), d && (d.innerHTML = ""), e && (a = e.parentNode.childNodes[0], e.className = "", a && -1 !== a.className.indexOf("agentWrapper") && a.parentNode.removeChild(a)), f && (f.style.visibility = "hidden", f.className = ""), this.show()
      };
      F.prototype.handleIndicatorToggle = function () {
        var a;
        p && (p.container && p.chatIndicator) && (a = p.chatIndicator.getElementById("tawkchat-chat-indicator"), a.style.visibility = "visible")
      };
      var hb =
        F.extend({
          init: function () {
            this._super(this)
          }, changeDragElementSize: function (a) {
            this.dragElement.restyle(f.isRTL() ? "right" : "left", a + "px !important")
          }, handleEndChat: function () {
            p && p.container && p.chatEnded();
            b.viewHandler.clearAgentHeader();
            f.isEmbedded || (f.isPopup ? (b.socketManager.sendToConnector("popupOnFocus", !1), setTimeout(function () {
              1 < g.history.length ? g.history.back() : g.close()
            }, 200)) : (b.sessionHandler.notifyWindowState("min"), e.chatEnded()))
          }, handleRestartChat: function () {
            b.formHandler.closeForm();
            e.chatStarted()
          }
        }), ia = function () {
        var a = this, c = {
          width: a.minifiedBoxWidth + "px",
          height: a.minifiedBoxHeight + "px",
          minwidth: a.minifiedBoxWidth + "px",
          minheight: a.minifiedBoxHeight + "px",
          maxwidth: a.minifiedBoxWidth + "px",
          maxheight: a.minifiedBoxHeight + "px",
          zindex: "1000000",
          display: "none"
        };
        this.setDimensions();
        this.clickToPopout = this.setPopoutHref = this.isMoving = !1;
        this.offsetY = f.widgetOffsetY;
        this.clickEvent = "touchend";
        f.isCenterPositioned() && "rectangle" === f.mobileWidget() && (f.isRightPositioned() ? (c.transform =
          "rotate(-90deg)", c.right = "0px") : (c.left = "0px", c.transform = "rotate(90deg)"));
        this.container = new Q(n.getRandomName(), n.getGenericStyle(c), ba, "iframe");
        r.pageStatus.subscribe(function (b) {
          a.updateStatus(b)
        });
        f.chatPosition.subscribe(function () {
          a.updateWidgetPosition()
        });
        f.mobMinStyle.subscribe(function () {
          a.container && a.container.elementReferrer && a.container.insertCssFile(f.mobMinStyle(), !0)
        });
        f.showMessagePreview.subscribe(function () {
          f.showMessagePreview() ? a.initMessagePreviewContainer() : a.destroyMessagePreviewContainer()
        });
        b.eventEmitter.on("localeChanged", function () {
          a.updateStatus()
        })
      };
      ia.prototype.setDimensions = function () {
        "rectangle" === f.mobileWidget() ? (this.minifiedBoxWidth = 110, this.minifiedBoxHeight = 68) : this.minifiedBoxHeight = this.minifiedBoxWidth = 60
      };
      ia.prototype.buildView = function () {
        this.container.buildIframe(b.MinifiedMobileStyle + f.mobMinStyle());
        b.MinifiedMobileStyle = b.MinifiedMobileStyle.replace(/#tawktoLink/g, "#" + b.viewHandler.tawktoLinkName);
        b.MinifiedMobileStyle = b.MinifiedMobileStyle.replace(/#bottomContainer/g,
          "#" + b.viewHandler.bottomContainerName);
        f.showMessagePreview() ? this.initMessagePreviewContainer() : this.destroyMessagePreviewContainer();
        f.isRTL() && (this.container.getElementById("tawkchat-minified-box").className += " rtl-direction ");
        this.updateStatus();
        this.attachEvents();
        this.updateWidgetPosition()
      };
      ia.prototype.updateStatus = function (a) {
        var c;
        a || (a = r.pageStatus());
        if (this.container && a) {
          if (c = this.container.getElementById("tawkchat-status-icon")) c.className = a;
          if (c = this.container.getElementById("tawk-minified-mobile-text")) c.innerHTML =
            "online" === a || "away" === a ? b.languageParser.translate("chat", "chat_text") : b.languageParser.translate("chat", "mail_text");
          try {
            b.eventEmitter.emit("resizeIframeHeight")
          } catch (d) {
            q.handleError("Unable to emit resizeIframeHeight", d.fileName, d.lineNumber, d.stack)
          }
        }
      };
      ia.prototype.attachEvents = function () {
        var a = this;
        this.container.attachUserEventListener(b.viewHandler.clickEvent, function (c) {
          b.eventHandler.cancelEvent(c);
          a.isMoving || (b.sessionHandler.notifyWindowState("max"), b.viewHandler.checkSeenMessageViewport());
          a.isMoving = !1
        }, "tawkchat-minified-box", "mobpclick");
        this.container.attachUserEventListener("touchmove", function () {
          a.isMoving = !0
        }, "tawkchat-minified-box", "mobpmove")
      };
      ia.prototype.show = function () {
        this.container.restyle("display", "block")
      };
      ia.prototype.updateWidgetPosition = function () {
        var a = "";
        this.container && this.container.elementReferrer && (a = f.isCenterPositioned() ? a + " center " : f.isTopPositioned() ? a + " top " : a + " bottom ", a = f.isRightPositioned() ? a + " right " : a + " left ", a += " " + f.mobileWidget() + " ", this.container.documentRef.body.className =
          a)
      };
      ia.prototype.initMessagePreviewContainer = function () {
        var a, c;
        a = b.viewHandler.iframeContainer;
        this.messagePreview = new Q(n.getRandomName(), n.getGenericStyle({
          zindex: "999999",
          width: "100%",
          height: "0px",
          minwidth: "auto",
          maxwidth: "378px",
          minheight: "auto",
          left: "auto",
          right: "auto",
          position: "fixed",
          display: "none",
          top: "auto",
          bottom: "auto"
        }), ba, "iframe");
        b.viewHandler.messagePreview = new E(this.messagePreview);
        this.messagePreview.elementReferrer || a.elementReferrer.appendChild(this.messagePreview.buildView(a.documentRef));
        this.messagePreview.buildIframe(b.MinifiedStyle + f.minStyle());
        a = n.getElementsByTagName(this.messagePreview.documentRef, "body")[0];
        c = t["tawkchat-message-preview"];
        c = c.replace(/__TAWK_TO_LINK__/gm, b.viewHandler.tawktoLinkName);
        c = c.replace(/__BOTTOM_CONTAINER__/gm, b.viewHandler.bottomContainerName);
        a.innerHTML = c
      };
      ia.prototype.destroyMessagePreviewContainer = function () {
        this.messagePreview && (this.messagePreview.documentRef && this.messagePreview.documentRef.parentNode) && this.messagePreview.documentRef.parentNode.removeChild(this.messagePreview.documentRef);
        this.messagePreview = null;
        b.viewHandler.messagePreview = null
      };
      var B = function (a) {
        var c = this;
        arguments.length && (this.browser = a, this.metaContent = this.getMetaContent(), this.landscape = !1, this.zoom = 1, this.resizeTimeout = this.hasKeyboard = this.minAndMaxScalesAreEqual = this.hasViewportHeightWidth = this.hasInitialScale = !1, this.removeAgentNotification = !0, this.clickEvent = "touchend", this.hasChatStarted = this.isMaximized = this.isBottomWidget = !1, this.originalDocumentStyle = null, this.isTherePreChat = f.showPreChatForm, this.noZoomMetaTag =
          null, this.isIndicatorOn = !1, this.scrollTop = this.scrollLeft = 0, this.mainAgent = null, this.shapeChanged(), this.minifiedWidget = new ia, e = new pa(this.tawktoLinkName, this.bottomContainerName), e.wrapper.addClass("mobile"), this.iframeContainer = new C("tawkchat-container", "border: 0 none !important; padding: 0 !important; margin: 0 !important; z-index: 999999999 !important; overflow : visible !important; min-width: 0 !important; min-height: 0 !important; max-width: none !important; max-height: none !important; width : auto !important; height : auto !important;"),
          this.indicator = new oa(this.minifiedWidget.container), this.iframeContainer.addChildViews([this.minifiedWidget.container, e.container]), "#max-widget" === g.location.hash && (g.history ? g.history.replaceState({}, document.title, ".") : g.location.hash = ""), this.iframeContainer.buildView(), this.chatContainer = e.container, b.eventEmitter.on("resizeIframeHeight", function () {
          c.resizeIframeHeight()
        }), b.eventEmitter.on("visitorPopupFocus", function (a) {
          c.isPopupFocused = a
        }), b.eventHandler.listen(g, "popstate", function (a) {
          !f.isPopup &&
          (c.isMaximized && "#max-widget" !== g.location.hash) && r.chatWindowState("min")
        }, "popstateFn"), r.chatWindowState.subscribe(function (a) {
          f.isPopup || (c.hideWidget(), "max" === a ? (l.disableMobileBackHistory || g.location.hash && "#max-widget" !== g.location.hash || (g.history.pushState ? g.history.pushState(null, null, g.location.href + "#max-widget") : g.location.hash = "max-widget"), c.maximize()) : (l.disableMobileBackHistory || "#max-widget" === g.location.hash && g.history.back(), c.isMaximized = !1, c.show()))
        }), r.pageStatus.subscribe(function (a) {
          c.updateViewByStatus(a)
        }),
          f.mobileWidget.subscribe(function () {
            c.renderBottomWidget();
            c.minifiedWidget.buildView()
          }), f.chatPosition.subscribe(function () {
          c.updateWidgetPosition()
        }), w.rating.subscribe(function (a) {
          c.changeRating(a)
        }), f.maxStyle.subscribe(function () {
          c.chatContainer && c.chatContainer.elementReferrer && c.chatContainer.insertCssFile(f.maxStyle(), !0)
        }), f.mobileWidget.subscribe(function (a) {
          c.shapeChanged();
          c.minifiedWidget.container.massRestyle({
            width: c.minifiedBoxWidth + "px !important",
            height: c.minifiedBoxHeight + "px !important",
            "min-width": c.minifiedBoxWidth + "px !important",
            "min-height": c.minifiedBoxHeight + "px !important",
            "max-width": c.minifiedBoxWidth + "px !important",
            "max-height": c.minifiedBoxHeight + "px !important"
          })
        }), b.chatHandler.hasChatStarted.subscribe(function (a) {
          e.toggleEndChatOption(a)
        }))
      };
      B.prototype = new z;
      B.prototype.constructor = B;
      B.prototype.parent = z.prototype;
      B.prototype.begin = function () {
        document.body.appendChild(this.iframeContainer.elementReferrer);
        if ("symbian" === this.browser || "ie" === this.browser || "opera" ===
          this.browser || "android2.3" === this.browser) this.clickEvent = "click";
        this.minifiedWidget.buildView();
        e.buildView();
        this.chatContainer = e.container;
        this.noZoomMetaTag = document.createElement("meta");
        this.noZoomMetaTag.name = "viewport";
        this.parent.begin.call(this);
        if (n.isTouchDevice() && ("android" === y || "android2" === y || "android2.3" === y)) {
          var a = this.chatContainer.getElementById("chatContainer"),
            c = this.chatContainer.getElementById("menuScrollable");
          this.addOverflowScroll(a);
          this.addOverflowScroll(c);
          a.style.overflow =
            "hidden";
          c.style.overflow = "hidden"
        }
        b.audioPlayer.initAudioPlayer()
      };
      B.prototype.shapeChanged = function () {
        (this.isMinifiedRound = "round" === f.mobileWidget() ? !0 : !1) ? this.minifiedBoxHeight = this.minifiedBoxWidth = this.defaultHeight = this.defaultWidth = 60 : (this.defaultWidth = 110, this.defaultHeight = 68, this.minifiedBoxWidth = 110, this.minifiedBoxHeight = 68)
      };
      B.prototype.handleEndChat = function () {
        e.chatEnded();
        this.chatContainer.hide();
        this.isMaximized = !1;
        this.iframeContainer.restyle("right", "0px");
        this.show()
      };
      B.prototype.show =
        function () {
          var a = document.querySelector("meta[name=viewport]") || document.querySelector("meta[name=VIEWPORT]");
          this.isMaximized ? (this.iframeContainer.massRestyle({
            left: "0px",
            top: "0px",
            right: "0px",
            bottom: "0px"
          }), this.isMobileOptimizedWebsite() || null === this.noZoomMetaTag || (this.metaContent || "" !== this.noZoomMetaTag.content ? this.metaContent && !this.hasNoScale && a && a.setAttribute("content", this.metaContent + ", user-scalable=no") : (this.noZoomMetaTag.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
          this.noZoomMetaTag.parentNode || document.getElementsByTagName("head")[0].appendChild(this.noZoomMetaTag))), this.isVisibilityToggled || (this.iframeContainer.show(), this.chatContainer.show()), this.minifiedWidget.container.hide(), "max" !== r.chatWindowState() && b.sessionHandler.notifyWindowState("max"), b.viewHandler.newMessageNotSeen && setTimeout(function () {
            b.viewHandler.checkUnseenMessages()
          }, 0)) : (this.isMobileOptimizedWebsite() ? (this.getZoom(), this.renderMinifiedBox()) : this.metaContent && !this.hasNoScale ?
            a && a.setAttribute("content", this.metaContent) : this.noZoomMetaTag.parentNode && (this.noZoomMetaTag.content = "", document.getElementsByTagName("head")[0].removeChild(this.noZoomMetaTag)), n.blurElements(e.container.documentRef.body.getElementsByTagName("input")), n.blurElements(e.container.documentRef.body.getElementsByTagName("textarea")), this.isVisibilityToggled || (this.minifiedWidget.container.show(), this.showWidget()), this.resetOriginalStyle(), this.indicator.initIndicator(), "min" !== r.chatWindowState() &&
          b.sessionHandler.notifyWindowState("min"), this.resizeHandler(), l.triggerApiHandlers("onChatMinimized"));
          this.isVisibilityToggled || (this.updateViewByStatus(r.pageStatus()), this.parent.show.call(this))
        };
      B.prototype.hideWidget = function () {
        this.isMaximized ? (this.isPopupFocused && b.socketManager.sendToConnector("popupOnFocus", !1), this.chatContainer.hide()) : (null !== this.originalDocumentStyle && (this.iframeContainer.documentRef.body.style.cssText = this.originalDocumentStyle), this.minifiedWidget.container.hide());
        this.iframeContainer.hide();
        l.triggerApiHandlers("onChatHidden")
      };
      B.prototype.showWidget = function () {
        this.iframeContainer.show();
        null !== this.originalDocumentStyle && (this.iframeContainer.documentRef.body.style.cssText = this.originalDocumentStyle, this.originalDocumentStyle = null, g.scrollTo(this.scrollLeft, this.scrollTop));
        if (this.isMaximized) {
          this.scrollLeft = void 0 !== g.pageXOffset ? g.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
          this.scrollTop = void 0 !== g.pageYOffset ?
            g.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
          this.scrollToBottom();
          this.originalDocumentStyle = this.iframeContainer.documentRef.body.style.cssText;
          for (var a = "height min-height max-height width min-width max-width".split(" "), b = 0; b < a.length; b++) this.iframeContainer.documentRef.body.style.setProperty(a[b], "100%", "important");
          this.iframeContainer.documentRef.body.style.setProperty("overflow", "hidden", "important");
          this.iframeContainer.documentRef.body.style.setProperty("position",
            "fixed", "important");
          e.container.show()
        } else {
          if (f.hideWidgetOnLoad) {
            this.hideWidget();
            return
          }
          this.minifiedWidget.container.show();
          this.resizeIframeHeight()
        }
        this.iframeContainer.show()
      };
      B.prototype.init = function () {
        this.checkMetaContent();
        this.addResizeEvents();
        this.resizeHandler()
      };
      B.prototype.getZoom = function () {
        this.zoom = screen.width / g.innerWidth
      };
      B.prototype.addResizeEvents = function (a) {
        var c, d = this;
        c = function (a) {
          d.resizeHandler()
        };
        b.eventHandler.listen(g, "resize", c, "mobileresize");
        b.eventHandler.listen(g,
          "scroll", c, "mobilescroll");
        a && b.eventHandler.listen(g, "touchmove", c)
      };
      B.prototype.checkMetaContent = function () {
        var a, b = {}, d = this.metaContent;
        if (d) {
          for (var d = d.replace(/ /g, ""), d = d.split(","), f = 0, e = d.length; f < e; f++) a = d[f].split("="), b[a[0]] = a[1];
          this.hasInitialScale = "1.0" === b["initial-scale"];
          this.hasViewportHeightWidth = !(!b.width && !b.height);
          this.minAndMaxScalesAreEqual = b["minimum-scale"] && b["maximum-scale"] && b["minimum-scale"] === b["maximum-scale"];
          this.initialAndMaxScalesAreEqual = b["initial-scale"] &&
            b["maximum-scale"] && b["initial-scale"] === b["maximum-scale"];
          this.hasNoScale = "no" === b["user-scalable"] || "0" === b["user-scalable"]
        }
      };
      B.prototype.ifScrollbarDown = function () {
        if (this.isMaximized) return this.parent.ifScrollbarDown.call(this);
        var a, b, d;
        if (!document) return !1;
        if (a = document.body) return b = document.documentElement.clientHeight + 10, d = a.scrollTop || document.documentElement.scrollTop, 80 > a.scrollHeight - (d + b)
      };
      B.prototype.resizeHandler = function () {
        var a = this;
        "offline" === r.pageStatus() && f.hideWidgetOnOffline ||
        this.isMaximized || (clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
          var b = a.isLandscape(), d = a.ifScrollbarDown();
          "offline" === r.pageStatus() && f.hideWidgetOnOffline || (a.landscape !== b && d && setTimeout(function () {
            a.scrollToBottom()
          }, 200), a.landscape = b, a.isMobileOptimizedWebsite() && "opera" !== y && "android2.3" !== y || (a.getZoom(), a.renderMinifiedBox()))
        }, 100))
      };
      B.prototype.getMetaContent = function () {
        var a, b, d = document.getElementsByTagName("meta"), f = "";
        a = 0;
        for (b = d.length; a < b; a++) d[a].getAttribute("name") &&
        "viewport" === d[a].getAttribute("name").toLowerCase() && (f = d[a].getAttribute("content"));
        return f
      };
      B.prototype.isLandscape = function () {
        return screen.height < screen.width || g.innerHeight < g.innerWidth
      };
      B.prototype.isMobileOptimizedWebsite = function () {
        this.checkMetaContent();
        return this.minAndMaxScalesAreEqual && (this.hasViewportHeightWidth || this.hasNoScale) || this.initialAndMaxScalesAreEqual
      };
      B.prototype.resizeMobileRectangleWidget = function () {
        var a = this.minifiedWidget.container.getElementById("tawk-minified-mobile-text"),
          b = this.minifiedWidget.container.getElementById("tawkchat-chat-indicator"),
          d = this.minifiedWidget.container.getElementById("tawkchat-minified-wrapper"),
          e = "safari" !== y ? screen.width : screen.height;
        "rectangle" === f.mobileWidget() && (a.style.width = "", this.minifiedBoxWidth = a.offsetWidth + 30, 110 > this.minifiedBoxWidth ? this.minifiedBoxWidth = 110 : !this.isLandscape() && this.minifiedBoxWidth > screen.width ? (this.minifiedBoxWidth = screen.width - 30, a.style.width = "calc(100% - 30px)") : this.isLandscape() && this.minifiedBoxWidth >
          e && (this.minifiedBoxWidth = e - 30, a.style.width = "calc(100% - 30px)"), !this.isLandscape() && this.minifiedBoxWidth > screen.width - 30 ? this.minifiedBoxWidth = screen.width - 30 : this.isLandscape() && this.minifiedBoxWidth > e - 30 && (this.minifiedBoxWidth = e - 30 - 10), d.style.width = this.minifiedBoxWidth + "px", f.isRTL() ? b.style.right = this.minifiedBoxWidth - 17 + "px" : b.style.left = this.minifiedBoxWidth - 17 + "px")
      };
      B.prototype.scaleContent = function (a) {
        if (!this.isMaximized) {
          var b = f.isRTL() ? "right" : "left";
          this.resizeMobileRectangleWidget();
          var d = this.minifiedBoxHeight, e = this.minifiedBoxWidth,
            g = this.minifiedWidget.container.getElementById("tawkchat-minified-box"), h = "scale(" + a + ")",
            h = "-moz-transform : " + h + "; -webkit-transform : " + h + "; -o-transform : " + h + "; -ms-transform : " + h + "; transform : " + h + ";",
            b = "-moz-transform-origin : bottom " + b + "; -webkit-transform-origin : bottom " + b + "; -o-transform-origin : bottom " + b + "; -ms-transform-origin : bottom " + b + "; transform-origin : bottom" + b;
          a && g && (d = Math.ceil(d * a) + 30, e = Math.ceil(e * a) + 10, this.minifiedWidget.container.massRestyle({
            height: d +
              "px !important",
            width: e + "px !important",
            "min-height": d + "px !important",
            "min-width": e + "px !important",
            "max-height": d + "px !important",
            "max-width": e + "px !important"
          }), g.style.cssText += h + b, f.isRTL() && !g.classList.contains("rtl-direction") ? g.classList.add("rtl-direction") : !f.isRTL() && g.classList.contains("rtl-direction") && g.classList.remove("rtl-direction"));
          this.updateWidgetPosition(d)
        }
      };
      B.prototype.popup = function () {
        var a = "https://tawk.to/chat/" + L.pageId + "/";
        this.indicator.hide();
        this.chatContainer.hide();
        this.isMaximized = !1;
        this.show();
        e.closeMenu();
        if (this.myWin && !this.myWin.closed) return this.myWin.focus();
        f.whiteLabel() && f.whiteLabel().chatUrl && (a = f.whiteLabel().chatUrl + "/chat/");
        this.myWin = "nokia" === y ? g.open(a + $_Tawk_WidgetId + "?$_tawk_sk=" + r.sessionKey + "&$_tawk_tk=" + r.transferKey + "&v=" + r.serverVersion, "Tawk", "height=500, width=450, resizable=yes, toolbar=no, location=no, menubar=no, personalbar=no") : g.open(a + $_Tawk_WidgetId + "?$_tawk_sk=" + r.sessionKey + "&$_tawk_tk=" + r.transferKey + "&v=" + r.serverVersion)
      };
      B.prototype.maximize = function () {
        "firefox" === y && !this.isMobileOptimizedWebsite() || "pop" === f.onClickAction ? this.popup() : (this.messagePreview && this.messagePreview.hide(), this.hasChatStarted || (f.showPreChatForm = this.isTherePreChat), this.indicator.hide(), this.minifiedWidget.container.hide(), this.originalIframeContainerStyle || (this.originalIframeContainerStyle = this.iframeContainer.elementReferrer.style.cssText), this.iframeContainer.restyle("margin", "0px !important"), this.isMaximized = !0, this.show())
      };
      B.prototype.resetOriginalStyle =
        function () {
          this.originalIframeContainerStyle && (this.iframeContainer.elementReferrer.style.cssText = this.originalIframeContainerStyle)
        };
      B.prototype.resizeIframeHeight = function () {
        var a;
        !this.isMaximized && (this.iframeContainer && this.minifiedWidget.container.elementReferrer && this.isIEWidget) && (a = this.minifiedWidget.container.getElementById("tawkchat-status-text-container").offsetHeight, this.minifiedWidget.container.restyle("height", a + "px"), this.iframeContainer.restyle("marginTop", "-" + a / 2 + "px"), this.iframeContainer.restyle("height",
          a + "px"))
      };
      B.prototype.renderBottomWidget = function () {
        this.isMaximized || (this.isBottomWidget = !0, this.minifiedWidget.container.template = t["mobile-bottom-" + f.mobileWidget()], this.iframeContainer.restyle("position", "fixed"), this.updateWidgetPosition())
      };
      B.prototype.handleIndicatorToggle = function (a) {
        var b = this.minifiedBoxWidth, d = this.minifiedWidget.container.getElementById("tawkchat-chat-indicator"),
          f = this.minifiedWidget.container.getElementById("tawkchat-minified-wrapper");
        this.isIndicatorOn = a;
        f.className =
          a ? f.className + " indicator-on " : f.className.replace("indicator-on", "");
        this.minifiedBoxWidth = a ? b + 7 : this.defaultWidth;
        this.isMobileOptimizedWebsite() ? this.scaleContent(1) : this.renderMinifiedBox();
        d.style.visibility = "visible"
      };
      B.prototype.updateViewByStatus = function (a, b) {
        this.isMaximized ? this.parent.updateViewByStatus.call(this, a) : this.iframeContainer.elementReferrer && ("offline" === a && f.hideWidgetOnOffline ? this.hideWidget() : this.showWidget(), this.resizeHandler())
      };
      B.prototype.updateWidgetPosition = function (a) {
        var b =
          {}, d = {};
        a = a || this.minifiedBoxHeight;
        this.iframeContainer && (f.isCenterPositioned() ? (b.top = "50% !important", b.bottom = "auto !important", b.margin = this.isMinifiedRound ? -0.5 * a + "px 0 0 0 !important" : -0.5 * a - (this.defaultHeight - 37) / 2 + "px 0 0 0 !important") : (b.margin = "0 !important", f.isTopPositioned() ? (b.top = "0px !important", b.bottom = "auto !important", d.top = this.isMinifiedRound ? "20px !important" : "-10px !important") : (b.bottom = "0px !important", b.top = "auto !important", d.bottom = this.isMinifiedRound ? "14px !important" :
          "0px !important")), f.isRightPositioned() ? (b.right = "0px !important", b.left = "auto !important", d.right = this.isMinifiedRound ? "20px !important" : "15px !important") : (b.left = "0px !important", b.right = "auto !important", d.left = this.isMinifiedRound ? "20px !important" : "15px !important"), this.iframeContainer.massRestyle(b), this.minifiedWidget.container.massRestyle(d))
      };
      B.prototype.addOverflowScroll = function (a) {
        var c = 0, d = this;
        b.eventHandler.listen(a, "touchstart", function (b) {
          c = a.scrollTop + b.touches[0].pageY
        }, "mobiletouchstart" +
          a.id);
        b.eventHandler.listen(a, "touchmove", function (f) {
          b.eventHandler.cancelEvent(f);
          20 >= f.touches[0].pageY || 0 > c - f.touches[0].pageY || (a.scrollTop = c - f.touches[0].pageY, e.isScrollbarDown = d.ifScrollbarDown())
        }, "mobiletouchmove" + a.id)
      };
      B.prototype.resetView = function () {
        var a, b;
        if (a = this.chatContainer) {
          if (a = a.getElementById("chatWrapper")) b = a.lastChild, a.innerHTML = "", a.appendChild(b);
          this.show()
        }
      };
      B.prototype.renderAgentMinimizedWidget = function (a) {
        var b = this.minifiedWidget.container.getElementById("agent-profile-image"),
          d = this.minifiedWidget.container.getElementById("tawkchat-status-text-container"),
          e = this.minifiedWidget.container.getElementById("tawkchat-status-agent-container");
        if (a) {
          if (a = w.agentProfiles[a], a = a.pi ? r.agentImgUrl + "/" + a.pi : "") "round" === f.mobileWidget() && (d.style.display = "none"), b.style.backgroundImage = "url('" + a + "')", e.style.display = "block"
        } else d.style.display = "inherit", b.style.backgroundImage = null, e.style.display = "none"
      };
      B.prototype.handleRestartChat = function () {
        b.formHandler.closeForm();
        e.chatStarted()
      };
      B.prototype.toggleWidget = function () {
        b.sessionHandler.notifyWindowState(this.isMaximized ? "min" : "max")
      };
      B.prototype.toggleVisibility = function () {
        this.scrollToBottom();
        (this.isVisibilityToggled = !this.isVisibilityToggled) ? this.hideWidget() : this.showWidget()
      };
      B.prototype.isWidgetHidden = function () {
        return !this.iframeContainer.isVisible
      };
      var Ga = function (a) {
        B.call(this, a)
      };
      Ga.prototype = new B;
      Ga.prototype.init = function () {
        this.renderBottomWidget();
        this.addResizeEvents();
        this.resizeHandler()
      };
      Ga.prototype.renderMinifiedBox =
        function () {
          var a = (1 / this.zoom.toFixed(2)).toFixed(2);
          this.scaleContent(0.2 > a ? 0.2 : a)
        };
      var va = function (a) {
        B.call(this, a)
      };
      va.prototype = new B;
      va.prototype.init = function () {
        this.renderBottomWidget();
        this.addResizeEvents();
        this.resizeHandler()
      };
      va.prototype.isLandscape = function () {
        return 0 !== g.orientation
      };
      va.prototype.getZoom = function () {
        this.zoom = (this.isLandscape() ? screen.height : screen.width) / g.innerWidth
      };
      va.prototype.renderMinifiedBox = function () {
        var a = (1 / this.zoom.toFixed(2)).toFixed(2);
        this.scaleContent(a,
          !1)
      };
      var Ha = function (a) {
        B.call(this, a)
      };
      Ha.prototype = new B;
      Ha.prototype.init = function () {
        this.renderBottomWidget();
        this.addResizeEvents();
        this.resizeHandler()
      };
      Ha.prototype.renderMinifiedBox = function () {
        var a = (1 / this.zoom.toFixed(2)).toFixed(2);
        this.scaleContent(a, !0)
      };
      var qa = function (a) {
        B.call(this, a);
        this.screenWidth = 0
      };
      qa.prototype = new B;
      qa.prototype.init = function () {
        this.renderBottomWidget();
        this.addResizeEvents(!0);
        this.resizeHandler()
      };
      qa.prototype.isLandscape = function () {
        return 0 !== g.orientation
      };
      qa.prototype.getZoom = function () {
        this.isLandscape() ? this.screenWidth = screen.height : this.screenWidth = screen.width;
        this.zoom = this.screenWidth / g.innerWidth
      };
      qa.prototype.renderMinifiedBox = function () {
        var a;
        a = this.isMobileOptimizedWebsite() ? (0.2 * this.screenWidth / this.minifiedBoxWidth).toFixed(2) : (1 / this.zoom.toFixed(2)).toFixed(2);
        this.scaleContent(a, !0)
      };
      var Ia = function (a) {
        B.call(this, a)
      };
      Ia.prototype = new B;
      Ia.prototype.init = function () {
        this.renderBottomWidget();
        this.addResizeEvents();
        this.resizeHandler()
      };
      Ia.prototype.renderMinifiedBox = function () {
        this.scaleContent()
      };
      var Ja = function (a) {
        B.call(this, a)
      };
      Ja.prototype = new B;
      Ja.prototype.init = function () {
        this.renderBottomWidget();
        this.checkMetaContent();
        this.addResizeEvents();
        this.resizeHandler()
      };
      Ja.prototype.renderMinifiedBox = function () {
        var a = (1 / this.zoom.toFixed(2)).toFixed(2);
        this.scaleContent(a, !0)
      };
      var ra = function (a) {
        B.call(this, a)
      };
      ra.prototype = new B;
      ra.prototype.init = function () {
        var a;
        "ie" === this.browser && (a = document.createElement("meta"), a.httpEquiv =
          "X-UA-Compatible", a.setAttribute("content", "IE=edge"), document.getElementsByTagName("head")[0].appendChild(a));
        this.renderBottomWidget();
        this.addResizeEvents();
        this.resizeHandler()
      };
      ra.prototype.renderMinifiedBox = function () {
        var a = (1 / this.zoom.toFixed(2)).toFixed(2);
        this.scaleContent(0.2 > a ? 0.2 : a)
      };
      var Ka = function (a) {
        B.call(this, a)
      };
      Ka.prototype = new B;
      Ka.prototype.init = function () {
        this.renderBottomWidget();
        this.addResizeEvents();
        this.resizeHandler()
      };
      Ka.prototype.renderMinifiedBox = function () {
        var a = (1 /
          this.zoom.toFixed(2)).toFixed(2);
        this.scaleContent(0.2 > a ? 0.2 : a)
      };
      var la = z.extend({
        init: function () {
          var a, c, d, g, h = this;
          this._super(this);
          this.clickEvent = "touchend";
          this.iframeContainer = new C(n.getRandomName(), "border: 0 none; padding: 0; margin: 0; z-index: 9999999; width: 100%; height: 100%; display: none; position : fixed; top :0; bottom : 0; min-width: 0 !important; min-height: 0 !important; max-width: none !important; max-height: none !important;");
          e = new pa(this.tawktoLinkName, this.bottomContainerName);
          this.indicator = new oa;
          this.iframeContainer.addChildViews([e.container]);
          this.iframeContainer.buildView();
          a = document.getElementsByTagName("head")[0];
          c = document.createDocumentFragment();
          d = n.createElement(document, "style", {type: "text/css"});
          g = document.createTextNode(b.ResetStyle + "" + b.MaximizedStyle + f.maxStyle());
          d.styleSheet ? d.styleSheet.cssText = g.nodeValue : d.appendChild(g);
          c.appendChild(d);
          a.appendChild(c);
          this.chatContainer = e.container;
          e.wrapper.addClass("mobile");
          w.rating.subscribe(function (a) {
            h.changeRating(a)
          });
          r.pageStatus.subscribe(function (a) {
            h.updateViewByStatus(a)
          });
          f.maxStyle.subscribe(function () {
            e && e.container.elementReferrer && e.container.insertCssFile(f.maxStyle(), !0)
          });
          b.chatHandler.hasChatStarted.subscribe(function (a) {
            e.toggleEndChatOption(a)
          })
        }, show: function () {
          e.show();
          this.updateViewByStatus(r.pageStatus());
          this._super();
          b.socketManager.sendToConnector("popupOnFocus", !0)
        }, updateViewByStatus: function (a) {
          this._super(a);
          e && ("preChatForm" !== b.formHandler.currentForm && "offlineForm" !== b.formHandler.currentForm) &&
          f.isPopup && (a = m.getShortMessage(a), document.title = a ? L.pageName() + " - " + n.rawDecode(a) : L.pageName())
        }, handleEndChat: function () {
          e.chatEnded();
          this.hideWidget()
        }, handleRestartChat: function () {
          e.chatStarted()
        }
      });
      la.prototype.begin = function () {
        var a = y;
        document.body.appendChild(this.iframeContainer.elementReferrer);
        if ("symbian" === a || "ie" === a || "opera" === a || "android2.3" === a) this.clickEvent = "click";
        e.buildView();
        if (n.isTouchDevice() && ("android" === y || "android2" === y || "android2.3" === y)) {
          var a = this.chatContainer.getElementById("chatContainer"),
            c = this.chatContainer.getElementById("menuScrollable");
          this.addOverflowScroll(a);
          this.addOverflowScroll(c);
          a.style.overflow = "hidden";
          c.style.overflow = "hidden"
        }
        b.audioPlayer.initAudioPlayer()
      };
      la.prototype.hideWidget = function () {
        b.socketManager.sendToConnector("popupOnFocus", !1);
        setTimeout(function () {
          1 < g.history.length ? g.history.back() : g.close()
        }, 200)
      };
      la.prototype.showWidget = function () {
        this.scrollToBottom();
        this.iframeContainer.show()
      };
      la.prototype.resetView = function () {
        var a, b;
        if (a = this.chatContainer) {
          if (a =
            a.getElementById("chatWrapper")) b = a.lastChild, a.innerHTML = "", a.appendChild(b);
          this.show()
        }
      };
      la.prototype.addOverflowScroll = function (a) {
        var c = 0, d = this;
        b.eventHandler.listen(a, "touchstart", function (b) {
          c = a.scrollTop + b.touches[0].pageY
        }, "mobiletouchstart" + a.id);
        b.eventHandler.listen(a, "touchmove", function (f) {
          b.eventHandler.cancelEvent(f);
          20 >= f.touches[0].pageY || 0 > c - f.touches[0].pageY || (a.scrollTop = c - f.touches[0].pageY, e.isScrollbarDown = d.ifScrollbarDown())
        }, "mobiletouchmove" + a.id)
      };
      la.prototype.addEmojiToInput =
        function (a) {
          e.addEmojiToInput(a)
        };
      la.prototype.closeEmojiSelection = function () {
        e.closeEmojiSelection()
      };
      var ya = function () {
        var a = this, c = !1;
        this.onActivityHandler = function () {
          b && (a.away && u.connected && b.socketManager.sendToConnector("notifySocketStatusUpdate", "online"), a.active = !0, a.away = !1)
        };
        this.popupOnFocusHandler = function () {
          b && (!u.connected && b.socketManager.isForcedDisconnect() ? b.main.criticalRefresh(r.serverVersion, !1, !0) : (a.hasFocus || (a.active = !0, a.hasFocus = !0, u.connected && b.socketManager.sendToConnector("popupOnFocus",
            !0)), a.away && u.connected && b.socketManager.sendToConnector("notifySocketStatusUpdate", "online"), a.away = !1))
        };
        this.popupOnBlurHandler = function () {
          b && (a.hasFocus = !1, u.connected && b.socketManager.sendToConnector("popupOnFocus", !1))
        };
        this.reconnectOnActivity = function () {
          b && !c && (c = !0, b.main.criticalRefresh(r.serverVersion))
        };
        this.away = this.active = this.hasFocus = !1;
        this.interval = this.awayTimeout = this.inactivityTimeout = null;
        this.initActivityReset = function () {
          a.resetTimeout();
          a.setupListeners();
          a.interval = setInterval(function () {
            a.active &&
            (a.resetTimeout(), a.active = !1)
          }, 1E4)
        }
      };
      ya.prototype.resetTimeout = function () {
        var a = this;
        clearTimeout(this.inactivityTimeout);
        clearTimeout(this.awayTimeout);
        this.awayTimeout = setTimeout(function () {
          !a.away && b && (a.away = !0, b && (b.socketManager && u.connected) && b.socketManager.sendToConnector("notifySocketStatusUpdate", "away"))
        }, 6E5);
        b && !b.socketManager.isForcedDisconnect() && (this.inactivityTimeout = setTimeout(function () {
          a.inactivityTimeoutHandler()
        }, 12E5))
      };
      ya.prototype.inactivityTimeoutHandler = function () {
        b &&
        (b.socketManager.disconnectConnector(), f.isEmbedded ? b.formHandler.openForm("inactivityOverlay") : r.chatWindowState("min"), y ? (b.eventHandler.listen(b.viewHandler.chatContainer.documentRef, "touchmove", this.reconnectOnActivity, "acitmmousemove"), b.eventHandler.listen(b.viewHandler.chatContainer.documentRef, b.viewHandler.clickEvent, this.reconnectOnActivity, "acitmclick"), b.eventHandler.listen(b.viewHandler.chatContainer.documentRef, "keydown", this.reconnectOnActivity, "acitmkeydown"), b.eventHandler.listen(document,
          "touchmove", this.reconnectOnActivity, "acitmousemove"), b.eventHandler.listen(document, b.viewHandler.clickEvent, this.reconnectOnActivity, "acitclick"), b.eventHandler.listen(document, "keydown", this.reconnectOnActivity, "acitkeydown")) : (b.eventHandler.listen(document, "mousemove", this.reconnectOnActivity, "acitmousemove"), b.eventHandler.listen(document, "click", this.reconnectOnActivity, "acitclick"), b.eventHandler.listen(document, "keydown", this.reconnectOnActivity, "acitkeydown"), document.onfocusin ? b.eventHandler.listen(document,
          "focusin", this.reconnectOnActivity, "acitfocus") : b.eventHandler.listen(g, "focus", this.reconnectOnActivity, "acitfocus")), b.viewHandler.indicator.pageTitleNotification.off())
      };
      ya.prototype.cleanUp = function () {
        clearInterval(this.interval);
        clearTimeout(this.inactivityTimeout);
        clearTimeout(this.awayTimeout)
      };
      ya.prototype.setupListeners = function () {
        y ? (b.eventHandler.listen(b.viewHandler.chatContainer.documentRef, "touchmove", this.onActivityHandler, "acmmousemove"), b.eventHandler.listen(b.viewHandler.chatContainer.documentRef,
          b.viewHandler.clickEvent, this.onActivityHandler, "acmclick"), b.eventHandler.listen(b.viewHandler.chatContainer.documentRef, "keydown", this.onActivityHandler, "acmkeydown"), b.eventHandler.listen(document, "touchmove", this.onActivityHandler, "acmousemove"), b.eventHandler.listen(document, b.viewHandler.clickEvent, this.onActivityHandler, "acclick"), b.eventHandler.listen(document, "keydown", this.onActivityHandler, "ackeydown")) : f.isPopup ? (document.onfocusin ? (b.eventHandler.listen(document, "focusin", this.popupOnFocusHandler,
          "acfocus"), b.eventHandler.listen(document, "focusout", this.popupOnBlurHandler, "acblur")) : (b.eventHandler.listen(g, "focus", this.popupOnFocusHandler, "acfocus"), b.eventHandler.listen(g, "blur", this.popupOnBlurHandler, "acblur")), b.eventHandler.listen(document, "click", this.popupOnFocusHandler, "acphclick"), b.eventHandler.listen(document, "keydown", this.popupOnFocusHandler, "acphkeydown")) : (b.eventHandler.listen(document, "mousemove", this.onActivityHandler, "acmousemove"), b.eventHandler.listen(document, "click",
          this.onActivityHandler, "acclick"), b.eventHandler.listen(document, "keydown", this.onActivityHandler, "ackeydown"))
      };
      var ma = function () {
        var a = this;
        this.originalPageStatus = this.agentCountSubscription = this.setupTimeout = null;
        this.utcOffset = 0;
        b.eventEmitter.on("scheduleUpdate", function (b) {
          f.widgetId === b.wdgt && (f.schedule = b.ws ? a.convertOldScheduleFormat(b.ws.sch) : null, f.scheduleTimezone = null === b.wstz ? {} : {
            utc: b.wstz.utc,
            tzo: b.wstz.offset
          }, a.setup())
        })
      };
      ma.prototype.setup = function () {
        this.clear();
        null === this.originalPageStatus &&
        (this.originalPageStatus = r.pageStatus());
        f.schedule ? (this.utcOffset = -1 * ((new Date).getTime() - f.scheduleTimezone.utc), this.calculate()) : r.pageStatus(this.originalPageStatus)
      };
      ma.prototype.calculate = function () {
        var a, b, d, e, g, h = this;
        this.clear();
        if (f.schedule) if (0 === f.schedule.length) this.goOffline(); else {
          a = new Date;
          b = -6E4 * a.getTimezoneOffset();
          b = f.scheduleTimezone.tzo - b;
          d = new Date(a.getTime() + this.utcOffset + b);
          a = d.getDay();
          b = 60 * d.getHours() + d.getMinutes();
          d = 60 * b + d.getSeconds();
          for (var l = 0; l < f.schedule.length; l++) {
            var m =
              f.schedule[l];
            if (m.day === a) {
              if (b >= m.start && b < m.end) {
                e = m;
                break
              }
              if (b < m.start) {
                g = m;
                break
              }
            }
          }
          void 0 !== e ? (this.goOnline(), e = 60 * e.end - d) : (this.goOffline(), e = void 0 !== g ? 60 * g.start - d : 86400 - d + 1);
          void 0 !== e && (this.setupTimeout = setTimeout(function () {
            h.calculate()
          }, 1E3 * e))
        }
      };
      ma.prototype.goOnline = function () {
        null !== this.agentCountSubscription && (b.agents.totalAgents.unsubscribe(this.agentCountSubscription), this.agentCountSubscription = null);
        "offline" !== this.originalPageStatus && r.pageStatus(this.originalPageStatus)
      };
      ma.prototype.goOffline = function () {
        0 !== b.agents.totalAgents() ? (null !== this.agentCountSubscription && b.agents.totalAgents.unsubscribe(this.agentCountSubscription), this.agentCountSubscription = b.agents.totalAgents.subscribe(function (a) {
          0 === a && r.pageStatus("offline")
        })) : r.pageStatus("offline")
      };
      ma.prototype.clear = function () {
        clearTimeout(this.setupTimeout);
        this.setupTimeout = null;
        null !== this.agentCountSubscription && (b.agents.totalAgents.unsubscribe(this.agentCountSubscription), this.agentCountSubscription =
          null)
      };
      ma.prototype.cleanUp = function () {
        this.clear();
        this.originalPageStatus = null
      };
      ma.prototype.convertOldScheduleFormat = function (a) {
        var b = [];
        if (!a || Array.isArray(a)) return a;
        Object.keys(a).forEach(function (d) {
          var f = a[d];
          0 === f.start && 0 === f.end || b.push({
            day: parseInt(d, 10),
            start: Math.floor(f.start / 6E4),
            end: Math.floor(f.end / 6E4)
          })
        });
        return b
      };
      var Z = function () {
        this.registerTime = 0;
        this.registerStart = null;
        this.maxRetrycount = 3;
        this.retryCount = 0;
        this.registerData = this.registerDelayTimeout = this.connectionCookieInterval =
          this.requestCancelTimeout = this.previousRegisterCall = null;
        this.registerStarted = !1;
        this.retryDelay = null;
        this.retryInitialDelay = 30;
        this.retryMultiplier = 1.5;
        this.minRandom = 0.5;
        this.maxRandom = 1.5;
        this.maxDelay = 120;
        this.retryRegisterTimeout = null
      };
      Z.prototype.register = function () {
        this.registerStarted = !0;
        this.clearTimers();
        this.prepareData()
      };
      Z.prototype.prepareData = function () {
        var a, c, d, e = "", g = "";
        if (b) {
          a = ea.getSessionInformation();
          c = r.sessionKey || void 0;
          a.length && (g = a[0]);
          d = (new Date).getTimezoneOffset();
          if (-900 > d || 900 < d) d = 0;
          this.registerData ? (this.registerData.k = c, this.registerData.d = g) : (e = b.browserData.getReferredSearchEngine(), this.registerData = {
            a: L.pageId || "",
            k: c,
            w: f.widgetId,
            d: g,
            mb: y ? 1 : 0,
            m: d,
            s: e,
            q: "",
            r: document.referrer,
            wlh: n.h(t["default-branding"])
          });
          this.registerData.cf = 3 === a.length && "cf" === a[2] ? 1 : 0;
          b.main.maximize && (this.registerData.h = "max");
          this.registerData.wv = f.widgetVersion;
          f.isPopup && (r.transferKey && r.sessionKey) && (this.registerData.tk = r.transferKey);
          b.main.previousSessionKey = this.registerData.k;
          this.getUUID()
        }
      };
      Z.prototype.getUUID = function () {
        var a, c, d, f = !1, e = Infinity, h = b.punycode.toASCII(g.location.hostname);
        "www." === h.substring(0, 4) && (h = h.replace("www.", ""));
        a = ea.getStoredUUID();
        for (var l = 0, m = a.length; l < m; l++) {
          var n, p, q, r;
          r = ea.parseSessionInformation(a[l]);
          if (4 === r.length) if (n = r[0], p = r[1], q = r[2], r = r[3], "e" === n) {
            if (h === p) {
              c = q;
              d = r;
              break
            }
          } else "p" === n && (n = h.match(p)) && (h.substr(n.index) === p && n.index < e) && (e = n.index, c = q, d = r, f = !0)
        }
        this.registerData && (this.registerData.u = c, this.registerData.uv =
          d, f && (this.registerData.uw = !0));
        this.startRegister()
      };
      Z.prototype.abort = function () {
        null !== this.previousRegisterCall && (Na.abort(this.previousRegisterCall), this.previousRegisterCall = null)
      };
      Z.prototype.setupRegisterTimeout = function () {
        var a = this;
        clearTimeout(this.requestCancelTimeout);
        this.requestCancelTimeout = setTimeout(function () {
          a.abort();
          a.retryRegister()
        }, 9E4)
      };
      Z.prototype.startRegister = function () {
        var a = ea.getHTTPCookie("TawkConnectionTime"), a = parseInt(a.length ? a[0] : null, 10);
        !a || 1E3 < (new Date).getTime() -
        (new Date(a)).getTime() ? (ea.setHTTPCookie("TawkConnectionTime", (new Date).getTime(), !0), this.connectionCookieInterval = setInterval(function () {
          ea.setHTTPCookie("TawkConnectionTime", (new Date).getTime(), !0)
        }, 100), this.doRegister()) : this.delayRegister()
      };
      Z.prototype.delayRegister = function () {
        var a = this;
        clearTimeout(this.registerDelayTimeout);
        this.registerDelayTimeout = setTimeout(function () {
          a.register()
        }, 1E3)
      };
      Z.prototype.doRegister = function () {
        var a = r.visitorAppServer + "/register/", c = this;
        this.registerStart =
          (new Date).getTime();
        this.setupRegisterTimeout();
        a += this.registerStart;
        this.previousRegisterCall = Na.xhrRequest(a, this.registerData, function (a, f) {
          if (!a && !f) return c.clearTimers(), c.retryRegister();
          b && b.main.begin(JSON.parse(n.trim(f)))
        })
      };
      Z.prototype.retryRegister = function () {
        var a, c = this;
        null === this.retryRegisterTimeout && (this.retryCount >= this.maxRetrycount ? (this.clearTimers(), b && b.main.hideWidget()) : (this.retryCount++, a = this.getRetryWaitDelay(), this.retryRegisterTimeout = setTimeout(function () {
            c.register()
          },
          a)))
      };
      Z.prototype.resetRetryCount = function () {
        this.retryCount = 0;
        this.retryDelay = 10
      };
      Z.prototype.getRetryWaitDelay = function () {
        var a, b = Math.random() * (this.maxRandom - this.minRandom) + this.minRandom;
        null === this.retryDelay ? this.retryDelay = this.retryInitialDelay : (a = this.retryDelay * this.retryMultiplier, this.retryDelay = this.retryDelay > this.maxDelay || a > this.maxDelay ? this.maxDelay : a);
        return 1E3 * Math.round(this.retryDelay * b)
      };
      Z.prototype.clearTimers = function () {
        this.abort();
        clearTimeout(this.requestCancelTimeout);
        clearTimeout(this.registerDelayTimeout);
        clearTimeout(this.retryRegisterTimeout);
        clearInterval(this.connectionCookieInterval);
        ea.setHTTPCookie("TawkConnectionTime", 0, !0);
        this.connectionCookieInterval = this.requestCancelTimeout = this.registerDelayTimeout = this.retryRegisterTimeout = null
      };
      var na = function () {
      };
      na.prototype.processSettings = function (a) {
        var c, d, e, g = 14, h = "", l = "", m = "";
        d = c = 60;
        if (!(a.wv < f.widgetVersion)) {
          Tawk_API.embedded && (f.isEmbedded = !0);
          f.isHeaderCompact = !1;
          f.isLegacyLayout = a.isLegacyLayout ||
            !0;
          f.widgetVersion = a.wv;
          f.onClickAction = a.woc;
          f.hideWidgetOnLoad = a.hwol;
          f.hideWidgetOnOffline = a.hwof;
          f.hideWidget = !!a.dsw;
          f.showAgentBar = !a.hab;
          f.showWaitTime = !a.hwt;
          f.locale = a.lc;
          f.onlineGreeting = a.onlineGreeting;
          f.awayGreeting = a.awayGreeting;
          f.schedule = b.scheduler.convertOldScheduleFormat(a.ws);
          f.soundOn(!a.dws);
          f.showAgentTyping = a.atyping;
          f.showUploads(a.uploads);
          f.showRating(a.rating);
          f.showVisitorTyping(a.vtyping);
          f.showEmoji(a.emoji);
          f.showMessagePreview(a.mprvw);
          f.showUnreadInTab(a.tbi);
          f.isRTL(0 <=
            n.rtlLangTab.indexOf(f.locale));
          f.chatPosition(a.pos);
          "page" !== $_Tawk_WidgetId || y || (a.dw = "min");
          "full" === a.dw ? (f.widgetOffsetX = 10, f.widgetOffsetY = 0) : (f.widgetOffsetX = 20, f.widgetOffsetY = 20);
          y ? f.mobileWidget(a.mw || "round") : f.desktopWidget(a.dw || "min");
          f.maximizedDimensions({width: parseInt(a.w, 10) || 350, height: parseInt(a.h, 10) || 520});
          f.isDesktopRectangle() && (c = parseInt(a.minw, 10) || 320, d = parseInt(a.minh, 10) || 40);
          f.chatBubble(a.bbl);
          f.headerBgColor = a.thm.hbg || "#03a84e";
          f.headerTxtColor = a.thm.htx || "#ffffff";
          f.agentTextBgColor = a.thm.aBblBg || n.shadeColor(f.headerBgColor, -0.1);
          f.agentTextColor = a.thm.aBblTx || "#ffffff";
          f.visitorTextBgColor = a.thm.vBblBg || "#e5e5e5";
          f.visitorTextColor = a.thm.vBblTx || "#33333";
          f.minimizedDimensions({width: c, height: d, position: a.pos});
          f.topCorner = "undefined" !== typeof a.thm.topc ? a.thm.topc : f.isTopPositioned() ? 0 : 8;
          f.bottomCorner = "undefined" !== typeof a.thm.btmc ? a.thm.btmc : f.isTopPositioned() ? 8 : 0;
          if (f.isEmbedded || f.isPopup) f.topCorner = 0, f.bottomCorner = 0;
          this.processPrechatForm(a);
          this.processOfflineForm(a,
            a.grt);
          b && (c = ".theme-background-color{background-color: " + f.headerBgColor + ";}", d = ".theme-text-color{color: " + f.headerTxtColor + ";}", f.showEmoji() && (g += 30), f.showRating() && (g += 30), f.showUploads() && (g += 30), b.MinifiedStyle && (e = f.topCorner + "px " + f.topCorner + "px " + f.bottomCorner + "px " + f.bottomCorner + "px !important;", messagePreviewRadius = f.topCorner + "px " + f.topCorner + "px " + f.topCorner + "px " + f.topCorner + "px !important;", bottomBorderRadius = ".bottom-border-corner{border-bottom-left-radius:" + f.bottomCorner +
            "px !important; border-bottom-right-radius:" + f.bottomCorner + "px !important;}", topBorderRadius = ".top-border-corner{border-top-left-radius:" + f.topCorner + "px !important; border-top-right-radius:" + f.topCorner + "px !important;}", l = l + c + d, l += ".border-corner{border-radius : " + e + "-moz-border-radius : " + e + "-webkit-border-radius : " + e + "}", l += topBorderRadius, l += bottomBorderRadius, l += "#tooLongMsgNotification {background-color: " + f.headerBgColor + "; color : " + f.headerTxtColor + "}", l += "#file-upload-drop-icon {color:" +
            f.headerBgColor + ";}", l += "#tawkchat-status-container{left: 10px;}", l += "#short-message, #maximizeChat, #minimizeChatMinifiedBtn{line-height: " + f.minimizedDimensions().height + "px;}", l += ".bubble-text-color{color:" + (f.chatBubble() ? f.chatBubble().fgc : "#ffffff") + ";}", l += "#tawkchat-message-preview-messages-container .messageBody {background-color: #fff !important; color : #333 !important;}", l += "#textareaContainer.additionalPadding{padding-right: " + g + "px;}", l += ".rtl-direction #textareaContainer.additionalPadding{padding-left: " +
            g + "px;padding-right: 14px;}", f.minStyle(l), b.MinifiedStyle += " " + b.CommonStyle), b.MaximizedStyle && (c = ".theme-background-color{background-color: " + f.headerBgColor + ";}", d = ".theme-text-color{color: " + f.headerTxtColor + ";}", h = h + c + d, h += "#tooLongMsgNotification {background-color: " + f.headerBgColor + "; color : " + f.headerTxtColor + "}", h += "#file-upload-drop-icon {color:" + f.headerBgColor + ";}", h += "#chatMenuControls li:hover {background-color: " + f.headerBgColor + ";color: " + f.headerTxtColor + "}", h += "#formContainer>#emailTranscriptForm .form-header-icon, #changeNameForm .form-header-icon, #chatEndedForm .form-header-icon, #preChatForm .longFormContainer .form-header-icon {background-color:" +
            f.headerBgColor + ";}", h += "#formContainer>#emailTranscriptForm::before, #changeNameForm::before, #chatEndedForm::before, #endChatForm::before {background-color:" + f.headerBgColor + "; border-color: " + f.headerBgColor + ";}", h += "#formSubmit, #formSubmit-pc {background-color:" + f.headerBgColor + ";}", h = f.isDesktopRectangle() ? h + ("#textareaWrapper, #actionsContainer{border-radius : 0px 0px " + f.bottomCorner + "px " + f.bottomCorner + "px !important ;}") : h + "#textareaWrapper, #actionsContainer{border-radius : 0px 0px 5px 5px !important ;}",
            h += "button.theme-background-color:hover{background-color: " + n.shadeColor(f.headerBgColor, -0.3) + "!important;}", h += ".agentChatContainer .message{background-color: " + f.agentTextBgColor + " !important; color : " + f.agentTextColor + " !important;}", h += ".agentTypingIndicator .dot{background-color: " + f.agentTextColor + " !important;}", h += ".visitorChatContainer .message, .visitorChatContainer .messageWrapper.error .message {background-color: " + f.visitorTextBgColor + " !important; color : " + f.visitorTextColor + " !important;}",
            h += ".upload-data {background-color: " + f.visitorTextBgColor + " !important; color : " + f.visitorTextColor + " !important;}", h += ".headerBoxLink .headerBoxIcon{color:" + f.headerTxtColor + ";}", h += ".message.agentTypingIndicator::before,.message.agentTypingIndicator::after {border-color: transparent " + f.agentTextBgColor + " transparent transparent;}", h += ".visitorChatContainer .messageWrapper .message::after {border-color: transparent transparent transparent " + f.visitorTextBgColor + ";}", h += ".agentChatContainer .messageWrapper .message::before,.agentChatContainer .messageWrapper .message::after {border-color: transparent " +
            f.agentTextBgColor + " transparent transparent;}", h += ".upload-data::before, .upload-data::after {border-color: transparent transparent transparent " + f.visitorTextBgColor + ";}", h += ".agentNameCentered{color:" + f.headerTxtColor + ";}", h += "#textareaContainer.additionalPadding{padding-right: " + g + "px;}", h += ".rtl-direction #textareaContainer.additionalPadding{padding-left: " + g + "px;padding-right: 14px;}", h += "#actionsContainer.mobile-typing #textareaContainer{padding-right: " + (g + 27) + "px;}", h += ".rtl-direction #actionsContainer.mobile-typing #textareaContainer{padding-left: " +
            (g + 27) + "px;}", f.maxStyle(h), b.MaximizedStyle += " " + b.CommonStyle), b.MinifiedMobileStyle && (m = m + c + d, bottomBorderRadius = ".bottom-border-corner{border-bottom-left-radius:" + f.bottomCorner + "px !important; border-bottom-right-radius:" + f.bottomCorner + "px !important;}", topBorderRadius = ".top-border-corner{border-top-left-radius:" + f.topCorner + "px !important; border-top-right-radius:" + f.topCorner + "px !important;}", m += topBorderRadius, m += bottomBorderRadius, f.mobMinStyle(m), b.MinifiedMobileStyle += " " + b.CommonStyle));
          a.cf && (f.consentOption = {
            text: a.cf.msg,
            buttons: [{textReplace: a.cf.btnAccpt, placeholder: "__CUSTOM_SUBMIT_BUTTON__"}, {
              textReplace: a.cf.btnRjct,
              placeholder: "__CUSTOM_CLOSE_BUTTON__"
            }]
          }, a.cf.plcyUrl && (f.consentOption.text += "\n[" + (a.cf.plcyUrlTxt || a.cf.plcyUrlTxt) + "](" + a.cf.plcyUrl + ")"));
          n.updateFonts()
        }
      };
      na.prototype.processPrechatForm = function (a) {
        f.showPreChatForm = "undefined" !== typeof a.prechatForm && null !== a.prechatForm;
        f.showPreChatForm && (f.prechatOptions = a.prechatForm)
      };
      na.prototype.processOfflineForm =
        function (a) {
          a = a.offlineForm ? a.offlineForm : {
            text: b.languageParser.translate("form", "OfflineFormMessage"),
            shortMessage: b.languageParser.translate("status", "offline"),
            fields: [{
              label: b.languageParser.translate("form", "name"),
              isRequired: !0,
              type: "name"
            }, {
              label: b.languageParser.translate("form", "email"),
              isRequired: !0,
              type: "email"
            }, {label: b.languageParser.translate("form", "message"), isRequired: !0, type: "message"}]
          };
          f.offlineOptions = a
        };
      na.prototype.getPrechatFields = function () {
        return f.prechatOptions.fields
      };
      na.prototype.getOfflineFields = function () {
        return f.offlineOptions.fields
      };
      na.prototype.getShortMessage = function (a) {
        var b = null;
        "online" === a && f.onlineGreeting ? b = f.onlineGreeting.shortMessage : "away" === a && f.awayGreeting ? b = f.awayGreeting.shortMessage : "offline" === a && f.offlineOptions && (b = f.offlineOptions.shortMessage);
        return b
      };
      na.prototype.getLongMessage = function (a) {
        var b = null;
        "online" === a && f.onlineGreeting ? b = f.onlineGreeting.longMessage : "away" === a && f.awayGreeting ? b = f.awayGreeting.longMessage : f.offlineOptions &&
          (b = f.offlineOptions.text);
        return n.transformGreetings(b)
      };
      m = new na;
      var fa = function () {
        var a = this;
        D.name.subscribe(function (a) {
          D.displayName(n.parseVisitorName(a))
        });
        b.eventEmitter.on("localeChanged", function () {
          D.displayName(n.parseVisitorName(D.name()))
        });
        b.eventEmitter.on("visitorDataUpdate", function (b) {
          a.updateVisitorInformation(b)
        });
        b.eventEmitter.on("requestEmailTranscript", function (a, d) {
          a.chatEndVersion = w.chatEndVersion;
          b.chatHandler.hasChatEnded ? b.socketManager.sendToConnector("notifyEndChatTranscript",
            a, d) : b.socketManager.sendToConnector("notifyEmailTranscript", a, d)
        })
      };
      fa.prototype.updateVisitorUUID = function (a) {
        var b = JSON.parse(a.uuids);
        D.uuid = a.uuid;
        D.uuidVer = a.uver || 0;
        b && (Object.keys(b.e).forEach(function (a) {
          D.uuids.push({isExact: !0, domain: a, uuid: b.e[a]})
        }), Object.keys(b.p).forEach(function (a) {
          D.uuids.push({isExact: !1, domain: a, uuid: b.p[a]})
        }));
        ea.storeUUID()
      };
      fa.prototype.updateVisitorInformation = function (a) {
        a.n && n.isString(a.n) && D.name(a.n);
        a.te && n.isString(a.te) && (D.transcriptEmail = a.te);
        a.e &&
        n.isString(a.e) && D.email(a.e);
        a.vid && (D.visitorId = a.vid);
        a.dpt && n.isString(a.dpt) && (w.chatDepartment = a.dpt);
        a.pcfs && r.prechatFormSubmitted(!0)
      };
      fa.prototype.setNameFromForm = function (a) {
        b.visitorHandler.setNameValue(a);
        l.triggerApiHandlers("onVisitorNameChanged", a.name)
      };
      fa.prototype.getNameValue = function () {
        return D.name() === D.displayName() ? D.name() : ""
      };
      fa.prototype.setNameValue = function (a) {
        D.name(n.rawEncode(a.name))
      };
      fa.prototype.getTranscriptEmailValue = function () {
        return D.transcriptEmail
      };
      fa.prototype.getEmailValue =
        function () {
          return D.email() || D.transcriptEmail
        };
      fa.prototype.setEmailValue = function (a) {
        D.email(a.email)
      };
      fa.prototype.setTranscriptValue = function (a) {
        a.name && D.name(n.rawEncode(a.name));
        D.transcriptEmail = a.transcriptEmail
      };
      var U = function () {
        var a = this;
        b.eventEmitter.on("chatBubbleClosed", function () {
          r.chatBubbleClosed(!0)
        });
        b.eventEmitter.on("windowStateUpdated", function (a) {
          r.chatWindowState(a.cw)
        });
        b.eventEmitter.on("pageStatusUpdated", function (a) {
          var d;
          a && (d = a.ast) && (n.isString(d) && n.isArray(a.dptst)) &&
          a.asver > r.pageStatusVersion && (b.scheduler.originalPageStatus = a.ast, r.pageStatusVersion = a.asver, r.departments = a.dptst, r.pageStatus(a.ast), b.scheduler.calculate())
        });
        b.eventEmitter.on("submitPrechatForm", function (b, d) {
          a.formatPrechatData(b, d)
        });
        b.eventEmitter.on("submitOfflineForm", function (b, d) {
          a.formatOfflineData(b, d)
        });
        r.pageStatus.subscribe(function (a) {
          l.triggerApiHandlers("onStatusChange", a)
        });
        b.eventEmitter.on("visitorTagsUpdate", function (a) {
          l.triggerApiHandlers("onTagsUpdated", a)
        })
      };
      U.prototype.closeBubble =
        function () {
          r.chatBubbleClosed(!0);
          b.socketManager.sendToConnector("notifyChatBubbleClosed")
        };
      U.prototype.getDeparmentOptions = function () {
        var a, c, d, f = [], e = r.departments;
        e.sort(function (a, b) {
          var c = n.rawDecode(a.n).toLowerCase(), d = n.rawDecode(b.n).toLowerCase();
          return c < d ? -1 : c > d ? 1 : 0
        });
        a = 0;
        for (c = e.length; a < c; a++) d = e[a], f.push({
          text: d.n + " (" + b.languageParser.translate("status", d.st) + ")",
          value: d.did,
          selected: w.chatDepartment === d.did
        });
        return f
      };
      U.prototype.getDeparmentName = function (a) {
        var b, d, f = r.departments;
        b = 0;
        for (d = f.length; b < d; b++) if (f[b].did === a) return n.rawDecode(f[b].n);
        return a
      };
      U.prototype.formatFormData = function (a, b) {
        var d, f, e, g = {questions: []};
        d = 0;
        for (f = b.length; d < f; d++) {
          e = b[d];
          "name" === e.type && (g.name = a[e.id]);
          "email" === e.type && (g.email = a[e.id]);
          if ("department" === e.type) {
            if (!a[e.id] || "0" == a[e.id]) continue;
            g.department = a[e.id];
            a[e.id] = this.getDeparmentName(a[e.id])
          }
          a[e.id] && 0 !== a[e.id].length && (n.isArray(a[e.id]) ? g.questions.push({
            label: n.rawDecode(e.label),
            answer: a[e.id].join(", ")
          }) : g.questions.push({
            label: n.rawDecode(e.label),
            answer: a[e.id]
          }))
        }
        return g
      };
      U.prototype.formatPrechatData = function (a, c) {
        var d = this, f = this.formatFormData(a, m.getPrechatFields());
        b.socketManager.sendToConnector("notifyPrechat", f, function (a) {
          if (a) return c(a, f);
          l.triggerApiHandlers("onPrechatSubmit", f.questions);
          b.viewHandler.indicator.pageTitleNotification.off();
          d.handlePrechatSave(f, c)
        })
      };
      U.prototype.handlePrechatSave = function (a, c) {
        var d, f, e = "";
        a.name && b.visitorHandler.setNameValue(a);
        a.email && b.visitorHandler.setEmailValue(a);
        r.prechatFormSubmitted(!0);
        if (0 === a.questions.length) return c(null, a);
        if (0 < a.questions.length) for (d = 0, f = a.questions.length; d < f; d++) e += n.rawDecode(a.questions[d].label) + " : " + a.questions[d].answer, d !== f - 1 && (e += "\r\n");
        b.chatHandler.sendMessageToServer(e, null, function (d) {
          d.error || (b.chatHandler.prepareMessage({
            ut: "v",
            t: "c",
            m: n.rawEncode(e),
            co: new Date,
            uid: D.visitorId
          }, !1, !1, !0), b.viewHandler.addWaitTime());
          c(d.error, a)
        })
      };
      U.prototype.formatOfflineData = function (a, c) {
        var d = this.formatFormData(a, m.getOfflineFields());
        d.questions.unshift({
          label: b.languageParser.translate("form",
            "SubmittedFrom"), answer: g.location.href
        });
        b.socketManager.sendToConnector("notifyOfflineMessage", d, function (a) {
          if (a) return c(a, d);
          l.triggerApiHandlers("onOfflineSubmit", d);
          c(null, d)
        })
      };
      U.prototype.visitorChatDismiss = function (a) {
        var c;
        b.chatHandler.messages && (c = Object.keys(b.chatHandler.messages), c = c[c.length - 1], (c = b.chatHandler.messages[c]) && c.co && (c = (new Date(c.co)).getTime(), b.socketManager.sendToConnector("visitorChatDismiss", {timestamp: c}, function (b) {
          if (b) return a(b);
          a(null)
        })))
      };
      U.prototype.notifyWindowState =
        function (a) {
          r.chatWindowState(a);
          b.socketManager.sendToConnector("notifyWindowState", a)
        };
      U.prototype.addEvent = function (a, c, d) {
        var f;
        "function" === typeof c && (d = c, c = null);
        d = d || function () {
        };
        f = this.secureWrapper({});
        f.name = a;
        f.data = c;
        b.socketManager.sendToConnector("addEvent", f, d)
      };
      U.prototype.setAttributes = function (a, c, d) {
        d = d || function () {
        };
        c ? (l.visitor = l.visitor || {}, a.name && (l.visitor.name = a.name), a.email && (l.visitor.email = a.email), a.hash && (l.visitor.hash = a.hash)) : a = this.secureWrapper(a);
        b.socketManager.sendToConnector("setAttributes",
          a, function (c) {
            c || (a.name && b.visitorHandler.setNameValue(a), a.email && b.visitorHandler.setEmailValue(a));
            d(c)
          })
      };
      U.prototype.addTags = function (a, c) {
        var d;
        c = c || function () {
        };
        d = this.secureWrapper({});
        d.tags = a;
        b.socketManager.sendToConnector("addTags", d, c)
      };
      U.prototype.removeTags = function (a, c) {
        var d;
        c = c || function () {
        };
        d = this.secureWrapper({});
        d.tags = a;
        b.socketManager.sendToConnector("removeTags", d, c)
      };
      U.prototype.secureWrapper = function (a) {
        "undefined" === a && (a = {});
        l && l.visitor && (l.visitor.email && (a.email = l.visitor.email),
        l.visitor.hash && (a.hash = l.visitor.hash));
        return a
      };
      U.prototype.setVisitorAttributes = function () {
        var a = {};
        l && l.visitor && (l.visitor.name && (a.name = l.visitor.name), l.visitor.email && (a.email = l.visitor.email), this.setAttributes(a, !1))
      };
      var J = function () {
        var a = this;
        this.agentHasMessaged = this.visitorHasMessaged = !1;
        this.messageBuffer = [];
        this.messages = {};
        this.agentsTyping = [];
        this.agentProfilesTyping = [];
        this.previousTextTime = this.previousText = this.lastMessageOwner = null;
        this.hasChatEnded = !1;
        this.hasChatStarted =
          v.observable(!1);
        this.hasWebRTCall = !1;
        b.eventEmitter.on("syncConversation", function (b) {
          a.conversationUpdate(b)
        });
        b.eventEmitter.on("incomingMessage", function (b) {
          a.handleMessageFromServer(b)
        });
        b.eventEmitter.on("agentIsTyping", function (b) {
          f.showAgentTyping && a.handleAgentTyping(b.rsc)
        });
        b.eventEmitter.on("agentStopedTyping", function (b) {
          a.handleAgentStoppedTyping(b.rsc)
        });
        b.eventEmitter.on("newChatRating", function (b) {
          a.changeRating(b.rsc, !0)
        });
        b.eventEmitter.on("webrtcCallStatus", function (a) {
          b.viewHandler.subscribeCallUpdate(a.clid)
        });
        b.eventEmitter.on("visitorChatDismiss", function (a) {
          b.viewHandler.closeMessagePreview(a)
        });
        b.eventEmitter.on("visitorChatSeen", function (a) {
          r.lastMessageTimestamp = a.lmst;
          b.viewHandler.clearUnseenNotification()
        })
      };
      J.prototype.parseHistory = function (a) {
        var c, d, e, g;
        (new Date).getTime();
        var h = e = 0;
        this.noRedraw = !0;
        w.chatEndVersion = 1;
        c = 0;
        for (d = w.chatHistory.length; c < d; c++) "CHAT_ENDED" === w.chatHistory[c].m && (e = c + 1, w.chatEndVersion++);
        g = 0 < w.chatOrder ? this.messages[w.chatOrder] : null;
        c = e;
        for (d = w.chatHistory.length; c <
        d; c++) e = w.chatHistory[c], e.md && (!e.md || e.md.ao) || a && g && g.timeStamp > (new Date(e.co)).getTime() || ("v" !== e.ut || (this.visitorHasMessaged || "c" !== e.t) || (h = (new Date).getTime() - n.getMilliseconds(e.co)), "WEBRTC_CALL" === e.m && e.md && e.md.webrtc ? (this.hasWebRTCall = !0, b.viewHandler.subscribeCallUpdate(e.md.clid, !0)) : this.prepareMessage(e, !0, !1, !1));
        this.noRedraw = !1;
        this.visitorHasMessaged && (!this.agentHasMessaged && f.showWaitTime) && (r.waitTime = r.waitTime < h ? 6E4 : r.waitTime - h, b.viewHandler.addWaitTime());
        this.hasChatStarted(this.visitorHasMessaged ||
          this.agentHasMessaged)
      };
      J.prototype.handleIndicator = function () {
        b.viewHandler.indicator.show();
        y && (b.viewHandler.hasChatStarted = !0)
      };
      J.prototype.handleMessageFromServer = function (a) {
        var c = null;
        if (a.md && a.md.ao) return w.chatVersion = a.cver;
        if ("offline" === r.pageStatus()) if ("a" === a.ut) r.pageStatus("online"); else return;
        if (!w.chatSynced) return w.chatBuffer.push(a);
        this.hasChatEnded && this.startNewChat();
        "WEBRTC_CALL" === a.m && a.md && a.md.webrtc ? this.hasWebRTCall = !0 : "CHAT_ENDED" !== a.m || this.hasChatEnded ? ("v" ===
        a.ut && "c" === a.t && b.viewHandler.addWaitTime(), f.isPopup || ("c" !== a.t || b.viewHandler.isMaximized || "v" === a.ut || f.isEmbedded || !y) || (b.viewHandler.hasChatStarted = !0), w.chatVersion = a.cver, "s" === a.ut || ("c" !== a.t || this.hasChatStarted()) || (this.hasChatStarted(!0), l.triggerApiHandlers("onChatStarted", {chatId: w.chatId})), "c" === a.t ? "a" === a.ut ? a.md && a.md.file ? l.triggerApiHandlers("onFileUpload", "https://tawkto.link/" + a.md.file.name) : l.triggerApiHandlers("onChatMessageAgent", a.m) : "s" === a.ut && l.triggerApiHandlers("onChatMessageSystem",
          a.m) : "n" === a.t && ("AGENT_JOIN_CONVERSATION" === a.m ? (a.md && (a.md.pi && a.md.pi.length) && (c = "https://s3.amazonaws.com/talk-pi/" + a.md.pi), l.triggerApiHandlers("onAgentJoinChat", {
          name: a.n,
          position: a.md.pst,
          image: c,
          id: a.uid
        })) : "AGENT_LEFT_CONVERSATION" === a.m && l.triggerApiHandlers("onAgentLeaveChat", {
          name: a.n,
          id: a.uid
        })), this.prepareMessage(a, !1), b.scheduler.calculate()) : (w.chatId = a.md.nchid, this.endChat(a.md.cev))
      };
      J.prototype.prepareMessage = function (a, c, d, f) {
        var e, g, h, l, m = !0;
        "n" === a.t && "v" === a.ut ? "VISITOR_RATING" ===
          a.m && this.changeRating(a.md.rt, !0) : ("v" === a.ut ? (e = D.displayName(), g = a.uid) : (e = a.n, "a" === a.ut ? g = w.profiles[a.md.rsc] : "s" === a.ut && a.md && (l = a.md.pi)), "n" !== a.t || "AGENT_JOIN_CONVERSATION" !== a.m && "AGENT_LEFT_CONVERSATION" !== a.m || (m = !1, b.agents.updateAgentPresence(a.m, a.md, a.n, a.md.rsc, !d)), m && (h || (h = this.parseText(a.m)), void 0 === c && (c = !0), a.timeStamp = (new Date(a.co)).getTime(), a.messageId = b.viewHandler.appendMessage({
          message: h, name: e, type: a.t, time: a.co, data: a.md, isPending: !1, senderType: a.ut, ownerId: g,
          dontPlaySound: c, profileImg: l, reDisplay: f, timeStamp: a.timeStamp
        }), f || w.chatOrder++, this.messages[w.chatOrder] = a))
      };
      J.prototype.parseText = function (a) {
        if (a) return a = a.replace(n.regLineBreaks, n.br), a = this.createUrl(a.split(/\s/), " ")
      };
      J.prototype.createUrl = function (a, c) {
        function d(a) {
          return b.chatHandler.parseUrl(a)
        }

        function f(a) {
          return b.chatHandler.parseEmail(a)
        }

        var e, g, h;
        g = 0;
        for (h = a.length; g < h; g++) -1 !== a[g].indexOf(n.br) ? (e = a[g].split(n.regBr), a[g] = this.createUrl(e, n.br)) : a[g].match(n.regEmailMatch) ?
          a[g] = a[g].replace(n.regEmailMatch, f) : (a[g] = a[g].replace(n.regMatchUrl, d), a[g] = a[g].replace(n.regMatchIp, d));
        return a.join(c)
      };
      J.prototype.parseUrl = function (a) {
        var b, d = "";
        if ("undefined" !== typeof H && H.unifyUnicode(a) !== a) return a;
        a.match(n.regEmailMatch) && (d = "mailto:");
        if ("mailto:" === d) return b = a.match(n.regEmailMatch)[0], -1 !== b.indexOf("mailto") && (d = ""), a.replace(n.regEmailMatch, '<a href="' + (d + b) + '" title="' + (d + b) + '" style="word-wrap:break-word; white-space:normal;>' + b + "</a> ");
        0 !== a.toLowerCase().indexOf("http") &&
        0 !== a.toLowerCase().indexOf("ftp") && (d = "http://");
        return '<a target="_blank" href="' + (d + a) + '" title="' + (d + a) + '" style="word-wrap:break-word; white-space:normal;">' + a + "</a> "
      };
      J.prototype.parseEmail = function (a) {
        var b = "";
        if ("undefined" !== typeof H && H.unifyUnicode(a) !== a) return a;
        -1 === a.indexOf("mailto") && (b = "mailto:");
        return '<a href="' + (b + a) + '" title="' + (b + a) + '">' + a + "</a> "
      };
      J.prototype.sendTextPreview = function (a) {
        var c, d, e = this;
        c = b.eventHandler.getTargetElement(a);
        if (13 === a.keyCode && !a.shiftKey && !y) return b.eventHandler.cancelEvent(a),
          d = n.trim(c.value), c.value = "", this.sendMessage(d);
        !this.keyDownTimeout && f.showVisitorTyping() && (this.keyDownTimeout = setTimeout(function () {
          d = n.trim(c.value);
          "undefined" !== typeof H && (d = H.toShort(d));
          b.socketManager.sendToConnector("notifyMessagePreview", d);
          clearTimeout(e.keyDownTimeout);
          e.keyDownTimeout = 0
        }, 1E3))
      };
      J.prototype.sendMessage = function (a, c, d) {
        var f = (new Date).getTime();
        a = n.trim(a);
        clearTimeout(this.keyDownTimeout);
        this.keyDownTimeout = 0;
        if (!a) return d ? d() : !1;
        "undefined" !== typeof H && (a = H.toShort(a));
        this.previousText && (this.previousTextTime && this.previousText === a && 500 > f - this.previousTextTime) && b.loggingHandler.logIncident("Double message occured", {
          previousText: this.previousText,
          currentText: a,
          currentT: f,
          previousT: this.previousTextTime
        });
        this.previousTextTime = f;
        this.previousText = a;
        c = !!c;
        c = b.viewHandler.appendMessage({
          message: this.parseText(n.rawEncode(a)),
          name: D.displayName(),
          type: "c",
          time: new Date,
          isPending: !0,
          senderType: "v",
          ownerId: D.visitorId,
          dontPlaySound: c
        });
        this.sendMessageToServer(a, c, d)
      };
      J.prototype.sendMessageToServer = function (a, c, d) {
        var f = this, e;
        d = d || function (a) {
          b.viewHandler.handleAcknowledgment(a)
        };
        b.socketManager.sendToConnector("sendChatMessage", a, function (b, g, h) {
          b || (e = ++w.chatOrder, f.messages[e] = {
            ut: "v",
            t: "c",
            m: n.rawEncode(a),
            co: g,
            messageId: c,
            uid: D.visitorId
          }, w.chatVersion = h, f.hasChatStarted() || "offline" === r.pageStatus() || (f.hasChatStarted(!0), l.triggerApiHandlers("onChatStarted", {chatId: w.chatId})), l.triggerApiHandlers("onChatMessageVisitor", a));
          d({error: b, messageId: c, order: e})
        })
      };
      J.prototype.conversationUpdate = function (a) {
        a = a || {};
        var c, d, e = a.cver || 0, g = a.c || [];
        d = w.chatBuffer;
        w.chatSynced = !0;
        if (!(w.chatVersion >= e)) {
          a = 0;
          for (c = d.length; a < c; a++) d[a].cver > e && g.push(d[a]);
          a = 0;
          for (c = g.length; a < c; a++) d = g[a], d.md && d.md.ao || this.prepareMessage(d, !1);
          this.visitorHasMessaged && (!this.agentHasMessaged && f.showWaitTime) && b.viewHandler.addWaitTime();
          w.chatVersion = e;
          this.isScrollbar = b.viewHandler.isChatScrollbar();
          b.viewHandler.scrollToBottom()
        }
      };
      J.prototype.handleAgentTyping = function (a) {
        var c =
          w.profiles[a];
        c && (w.agentProfiles[c] && !this.agentsTyping[a]) && (this.agentsTyping[a] = !0, this.agentProfilesTyping[c] ? this.agentProfilesTyping[c]++ : (this.agentProfilesTyping[c] = 1, b.viewHandler.appendAgentIsTypingElement(c)))
      };
      J.prototype.handleAgentStoppedTyping = function (a) {
        var c = w.profiles[a];
        this.agentsTyping[a] && delete this.agentsTyping[a];
        !this.agentProfilesTyping[c] || 0 < --this.agentProfilesTyping[c] || (delete this.agentProfilesTyping[c], b.viewHandler.removeAgentTypingElement(c))
      };
      J.prototype.changeRating =
        function (a, c) {
          w.rating() === a && (a = 0);
          w.rating(a);
          c || (b.socketManager.sendToConnector("setRating", a), l.triggerApiHandlers("onChatSatisfaction", w.rating()))
        };
      J.prototype.toggleSound = function (a) {
        var c = !f.soundOn();
        void 0 !== a && (c = a);
        f.soundOn(c);
        void 0 === a && b.socketManager.sendToConnector("toggleSound", c)
      };
      J.prototype.clearChatMessages = function () {
        this.agentHasMessaged = this.visitorHasMessaged = !1;
        this.messageBuffer = [];
        this.messages = {};
        this.agentsTyping = [];
        this.agentProfilesTyping = [];
        this.lastMessageOwner =
          null;
        w.chatOrder = 0;
        w.chatSynced = !1;
        w.chatBuffer = []
      };
      J.prototype.startNewChat = function () {
        this.clearChatMessages();
        b.viewHandler.removeWaitTime();
        b.viewHandler.resetView();
        b.viewHandler.handleRestartChat();
        w.chatSynced = !0;
        y || ("max" === r.chatWindowState() ? b.viewHandler.maximizeWidget() : b.viewHandler.minimizeWidget());
        this.hasChatEnded = !1
      };
      J.prototype.endChat = function (a) {
        b.viewHandler.handleEndChat();
        b.agents.clearAgents();
        this.hasChatEnded = !0;
        this.hasChatStarted(!1);
        w.chatEndVersion = a;
        l.triggerApiHandlers("onChatEnded")
      };
      J.prototype.sendFileMessage = function (a) {
        var c = this, d = {fileName: a.filename, name: a.name, type: a.extension, mimeType: a.mimeType, size: a.size};
        b.socketManager.sendToConnector("fileUploadMessage", d, function (f, e, g) {
          f || (b.viewHandler.fileUploaded(a.handle), d.fileName = n.rawEncode(d.fileName), messageId = b.viewHandler.appendMessage({
            message: "FILE",
            name: D.displayName(),
            type: "c",
            time: e,
            isPending: !1,
            senderType: "v",
            ownerId: D.visitorId,
            dontPlaySound: !0,
            data: {file: d}
          }), chatOrder = ++w.chatOrder, c.messages[chatOrder] = {
            ut: "v",
            t: "c", m: "FILE", co: e, messageId: messageId, uid: D.visitorId, md: {file: d}
          }, w.chatVersion = g, l.triggerApiHandlers("onFileUpload", "https://tawkto.link/" + d.name))
        })
      };
      J.prototype.isChatOngoing = function () {
        return !this.hasChatEnded && this.visitorHasMessaged && 0 < b.agents.totalAgents()
      };
      J.prototype.isVisitorEngaged = function () {
        return !this.hasChatEnded && this.visitorHasMessaged
      };
      J.prototype.triggerEndChat = function () {
        var a = this;
        b.socketManager.sendToConnector("endVisitorChat", {}, function (b, d) {
          b || (w.chatId = d.nextChatId,
            a.endChat(d.chatEndVersion))
        })
      };
      J.prototype.getMessageObjectById = function (a) {
        var b = null, d;
        for (d in this.messages) if (this.messages[d].messageId === a) {
          b = this.messages[d];
          break
        }
        return b
      };
      var sa = function () {
        this.agentsCount = 0;
        this.totalAgents = v.observable(0)
      };
      sa.prototype.updateAgentPresence = function (a, b, d, e, g) {
        if (!f.showAgentBar) return !0;
        if ("AGENT_JOIN_CONVERSATION" !== a && "AGENT_LEFT_CONVERSATION" !== a) return !1;
        switch (a) {
          case "AGENT_JOIN_CONVERSATION":
            return this.addAgentToList(b, d, e, g);
          case "AGENT_LEFT_CONVERSATION":
            return this.removeAgentFromList(b,
              e, g)
        }
      };
      sa.prototype.addAgentToList = function (a, c, d, f) {
        var e = w.agents[d];
        if (e) if (e.seq.time < a.seq.time || e.seq.time === a.seq.time && e.seq.inc < a.seq.inc) {
          e.seq = a.seq;
          if (e.pid === a.pid) return !1;
          this.changeAgentProfile(e.pid, f);
          e.pid = a.pid;
          w.profiles[d] = a.pid
        } else return !1; else w.agents[d] = a, w.profiles[d] = a.pid;
        if (!a.pid) return !1;
        this.totalAgents(this.totalAgents() + 1);
        if ("undefined" !== typeof w.agentProfiles[a.pid]) return w.agentProfiles[a.pid].pi = a.pi, w.agentProfiles[a.pid].count++, !1;
        c = {
          pi: a.pi, pst: a.pst ||
            "", pid: a.pid, n: c, count: 1
        };
        w.agentProfiles[a.pid] = c;
        f && b.viewHandler.appendAgent(c);
        return !0
      };
      sa.prototype.changeAgentProfile = function (a, c) {
        var d;
        d = w.agentProfiles[a];
        this.decrementProfileCount(a, c) && c && (d = {
          message: b.languageParser.translate("chat", "AGENT_LEFT_CONVERSATION", {n: "<b>" + d.n + "</b>"}),
          name: "",
          type: "n",
          time: new Date,
          isPending: !1,
          senderType: "a",
          ownerId: "",
          dontPlaySound: !0
        }, w.chatOrder++, b.chatHandler.messages[w.chatOrder] = d, b.viewHandler.appendMessage(d))
      };
      sa.prototype.removeAgentFromList =
        function (a, b, d) {
          var e = w.agents[b];
          if (!e) return w.agents[b] = a, !1;
          b = e.pid;
          if (e.seq.time < a.seq.time || e.seq.time === a.seq.time && e.seq.inc < a.seq.inc) e.seq = a.seq, e.pid = null; else return !1;
          this.totalAgents(this.totalAgents() - 1);
          return this.decrementProfileCount(b, d)
        };
      sa.prototype.decrementProfileCount = function (a, c) {
        var d = w.agentProfiles[a];
        if (d) return d.count--, 1 > d.count ? (delete w.agentProfiles[a], c && b.viewHandler.removeAgent(a), !0) : !1
      };
      sa.prototype.clearAgents = function () {
        this.agentsCount = 0;
        this.totalAgents(0);
        w.agentProfiles = {};
        w.agents = {};
        w.profiles = {};
        b.viewHandler.clearAgentFooter();
        b.viewHandler.clearAgentHeader();
        b.viewHandler.closeAgentList()
      };
      var ja = function () {
        var a = this;
        this.stack = [];
        this.socketConnector = new ua;
        this.events = {};
        b.eventEmitter.on("socketReady", function () {
          a.clearStack()
        })
      };
      ja.prototype.initConnector = function () {
        this.socketConnector.init()
      };
      ja.prototype.sendToConnector = function (a, b, d) {
        if (u.connected) if (void 0 !== d || "function" === typeof b) this.safeCallback(a, b, d); else try {
          this.socketConnector.emit(a,
            b, d)
        } catch (e) {
          q.handleError("Unable to emit to socket connector in sendToConnector for command : " + a + " with data :" + JSON.stringify(b), e.fileName, e.lineNumber, e.stack)
        } else this.addToStack(a, b, d)
      };
      ja.prototype.addToStack = function (a, b, d) {
        "sendChatMessage" === a && delete this.events.notifyMessagePreview;
        "notifyMessagePreview" === a ? this.events[a] = {
          command: a,
          data: b,
          callback: d
        } : this.stack.push({command: a, data: b, callback: d})
      };
      ja.prototype.clearStack = function () {
        var a = this;
        this.stack.forEach(function (b) {
          a.sendToConnector(b.command,
            b.data, b.callback)
        });
        for (var b in this.events) a.sendToConnector(a.events[b].command, a.events[b].data, a.events[b].callback);
        this.stack = [];
        this.events = {}
      };
      ja.prototype.safeCallback = function (a, b, d) {
        var e, f;
        "function" === typeof b && (d = b, b = null);
        e = setTimeout(function () {
          d(!0);
          throw Error("Socket server did not execute the callback for " + a + " with data : " + JSON.stringify(b));
        }, 35E3);
        f = function () {
          clearTimeout(e);
          f = function () {
          };
          d.apply(null, arguments)
        };
        try {
          null === b ? this.socketConnector.emit(a, f) : this.socketConnector.emit(a,
            b, f)
        } catch (g) {
          q.handleError("Unable to emit to socket connector in safeCallback for command : " + a + " with data :" + JSON.stringify(b), g.fileName, g.lineNumber, g.stack)
        }
      };
      ja.prototype.disconnectConnector = function () {
        this.socketConnector.disconnectSocket()
      };
      ja.prototype.connectorListeningOn = function (a) {
        return 0 !== this.socketConnector.listeners(a).length
      };
      ja.prototype.isForcedDisconnect = function () {
        return this.socketConnector.forceDisconnected
      };
      var X = function () {
        this.started = this.maximize = this.isDocumentReady =
          !1;
        this.previousSessionKey = null;
        this.waitingForLanguage = !1;
        this.startTime = u.startTime;
        this.versionReloadTimeout = null;
        this.dataIsReady = this.viewIsReady = !1
      };
      X.prototype.load = function () {
        var a = this;
        L.pageId = $_Tawk_AccountKey;
        f.widgetId = $_Tawk_WidgetId;
        "undefined" !== typeof L.pageId && "undefined" !== typeof f.widgetId && (m.processSettings(u.widgetSettings), this.init(), this.isDocumentReady || (b.eventHandler.listen(document, "DOMContentLoaded", function () {
          a.init()
        }, "domloaded"), b.eventHandler.listen(document, "readystatechange",
          function () {
            ("complete" === document.readyState || "interactive" === document.readyState && document.body) && a.init()
          }, "domstatechange"), b.eventHandler.listen(g, "load", function () {
          a.init()
        }, "windowload")), b.eventEmitter.on("removeWidget", function (b) {
          a.removeWidget()
        }), b.eventEmitter.on("submitConsent", function (b) {
          a.registerWithConsent()
        }))
      };
      X.prototype.init = function () {
        var a, c;
        if ("XMLHttpRequest" in g && "withCredentials" in new XMLHttpRequest && (x.cookieEnabled && !this.isDocumentReady) && (this.isDocumentReady = !0, c =
          n.parseQueryString(), !c.$_tawk_beacon && "operamini" !== y)) {
          if (a = n.getReloadedScript()) a = n.parseQueryString(a.src), r.restarted = a.restarted, this.maximize = a.maximized;
          aa();
          l.isPopup && (r.transferKey = c.$_tawk_tk, r.sessionKey = c.$_tawk_sk, f.isPopup = !0);
          l.embedded && (f.isEmbedded = !0, y = null);
          y ? (f.isPopup ? b.viewHandler = new la : this.initRenderer(y), b.formHandler = new M) : (b.formHandler = new M, b.viewHandler = new hb);
          b.viewHandler && (b.sessionHandler.setVisitorAttributes(), l.triggerApiHandlers("onBeforeLoad"), this.bootStrap())
        }
      };
      X.prototype.bootStrap = function () {
        var a = this;
        this.dataIsReady = this.viewIsReady = !1;
        setTimeout(function () {
          b.viewHandler.begin();
          a.viewIsReady = !0;
          a.setupDone()
        }, 0);
        setTimeout(function () {
          h.register()
        }, 0)
      };
      X.prototype.initRenderer = function (a) {
        switch (a) {
          case "chrome":
            b.viewHandler = new Ga(a);
            break;
          case "safari":
            b.viewHandler = new va(a);
            break;
          case "opera":
            b.viewHandler = new Ha(a);
            break;
          case "android":
            b.viewHandler = new qa(a);
            break;
          case "android2.3":
            b.viewHandler = new Ia(a);
            break;
          case "android2":
            b.viewHandler =
              new ra(a);
            break;
          case "firefox":
            b.viewHandler = new Ja(a);
            break;
          case "ie":
            b.viewHandler = 10 > O ? new ra(a) : new Ka(a);
            break;
          case "blackberry":
            b.viewHandler = new ra(a);
            break;
          case "nokia":
            b.viewHandler = new ra(a);
            break;
          case "uc":
            b.viewHandler = new qa(a)
        }
        b.viewHandler && b.viewHandler.init()
      };
      X.prototype.begin = function (a) {
        h.registerStarted = !1;
        h.clearTimers();
        h.registerTime = (new Date).getTime() - h.registerStart;
        h.registerStart = null;
        a.error ? "USER_ERROR" === a.error || "SERVER_DOWN" === a.error ? this.hideWidget() : h.retryRegister() :
          (b.activityManager.initActivityReset(), this.started ? this.reinited(a) : (this.started = !0, this.extractRegisterData(a), this.dataIsReady = !0, this.setupDone()))
      };
      X.prototype.extractRegisterData = function (a) {
        a.wdgt && (a.wdgt.lc !== u.widgetSettings.lc && (this.waitingForLanguage = !0, n.insertScript("https://static-v.tawk.to/681/languages/" + a.wdgt.lc + ".js")), m.processSettings(a.wdgt));
        a.rcf && f.consentOption ? (this.needConsent = !0, f.showConsentForm = !0) : (this.needConsent = !1, f.showConsentForm = !1);
        "max" !== f.onClickAction ||
        y || (this.maximize = "max" === a.cw, r.chatWindowState(a.cw));
        r.criticalVersion = a.cjsv || 0;
        r.visitorSocketServer = a.vss;
        r.sessionKey = a.sk;
        r.transferKey = a.tk;
        r.transferedSession = !!a.ts;
        r.serverVersion = a.jsv || 0;
        this.needConsent || (b.visitorHandler.updateVisitorUUID(a), b.visitorHandler.updateVisitorInformation(a));
        f.soundOn() && f.soundOn(a.sdo);
        f.whiteLabel(a.wl);
        a.wl && (f.key = n.h(a.wl.label));
        f.scheduleTimezone = a.wstz;
        r.prechatFormSubmitted(!!a.pcfs);
        r.departments = n.isArray(a.dptst) ? a.dptst.reverse() : [];
        r.pageStatusVersion =
          a.asver || 0;
        r.waitTime = a.ewt ? 1E3 * a.ewt : 6E4;
        L.tawkId = a.twid;
        L.pageName(n.rawDecode(a.pgn));
        r.pageStatus(a.ast || "offline");
        r.chatBubbleClosed(!!a.bblc);
        w.chatVersion = a.cver || 0;
        w.chatDepartment = a.dpt || "any";
        w.chatHistory = a.c || [];
        w.chatId = a.chid;
        f.webRTCSettings(a.webrtc);
        f.brandingRedirect(a.otl);
        r.lastMessageTimestamp = a.lmst
      };
      X.prototype.initBuildChat = function () {
        b.chatHandler.parseHistory();
        b.viewHandler.applyWhiteLabelSettings();
        this.showWidget();
        this.needConsent || (b.socketManager.initConnector(), delete u.init);
        u.ready = !0;
        l.triggerApiHandlers("onLoad")
      };
      X.prototype.reinited = function (a) {
        var c = r.sessionKey;
        this.extractRegisterData(a);
        c !== a.sk ? (b.chatHandler.clearChatMessages(), b.viewHandler.resetView(), b.agents.clearAgents()) : (r.visitorSocketServer = a.vss, r.sessionKey = a.sk, r.transferKey = a.tk, r.transferedSession = !!a.ts, r.serverVersion = a.jsv || 0, b.visitorHandler.updateVisitorUUID(a));
        b.scheduler.setup();
        b.viewHandler.updateViewByStatus(r.pageStatus());
        b.chatHandler.parseHistory(!0);
        b.socketManager.initConnector()
      };
      X.prototype.criticalRefresh = function (a, c, d) {
        var e = this, h = (new Date).getTime(),
          l = "https://embed.tawk.to/" + L.pageId + "/" + $_Tawk_WidgetId + "?refresh=true&";
        if (f.isPopup) return g.location.reload(!!c);
        this.dataIsReady = this.viewIsReady = !1;
        this.removeWidget();
        c && (l += "restarted=true&");
        d && (l += "maximized=true&");
        l += "v=" + a || r.serverVersion || r.currentVersion;
        delete u.downloaded;
        n.insertScript(l, "TawkScript-" + h);
        var m = setInterval(function () {
            g.$_Tawk.startTime !== e.startTime && (b = null, clearInterval(m), clearTimeout(e.versionReloadTimeout))
          },
          200)
      };
      X.prototype.removeWidget = function () {
        var a;
        b && (b.viewHandler && b.viewHandler.iframeContainer) && (a = document.getElementById(b.viewHandler.iframeContainer.elementId));
        h.clearTimers();
        b.eventHandler.clearEvents();
        b.activityManager.cleanUp();
        b.socketManager.disconnectConnector();
        b.eventEmitter.removeAllListeners();
        b.scheduler.cleanUp();
        clearTimeout(n.checkWhiteLabelRef);
        b.viewHandler.messagePreview && b.viewHandler.messagePreview.hide();
        "undefined" !== typeof n.messagePreviewCheckWhiteLabelRef && clearTimeout(n.messagePreviewCheckWhiteLabelRef);
        a && a.parentNode.removeChild(a)
      };
      X.prototype.setupDone = function (a) {
        a && (b.languageParser.language = u.language, this.waitingForLanguage = !1);
        this.viewIsReady && (this.dataIsReady && !this.waitingForLanguage) && this.initBuildChat()
      };
      X.prototype.showWidget = function () {
        b.scheduler.setup();
        !f.isPopup && f.hideWidgetOnLoad || b.viewHandler.show()
      };
      X.prototype.hideWidget = function () {
        b && b.viewHandler && b.viewHandler.hideWidget()
      };
      X.prototype.registerWithConsent = function () {
        this.maximize = !0;
        ea.storeSessionInformation(!1, "cf");
        h.register()
      };
      u.languageUpdater = function () {
        if (b && b.main && b.main.waitingForLanguage) {
          b.main.setupDone(!0);
          try {
            b.eventEmitter.emit("localeChanged"), n.updateFonts()
          } catch (a) {
            q.handleError("Unable to emit locale changed", a.fileName, a.lineNumber, a.stack)
          }
        }
      };
      var za = function (a, b) {
        this.language = a;
        this.notFoundCallback = "function" === typeof b ? b : function () {
        }
      };
      za.prototype.translate = function (a, b, d, e) {
        var f, g;
        f = [];
        var h = this.language || e;
        if (!h[a]) return this.notFoundCallback(Error("Missing context : {" + a + "}, {" +
          b + "}")), b;
        e = h[a][b];
        if (!e) return this.notFoundCallback(Error("Missing key : {" + a + "}, {" + b + "}")), b;
        b = e.pluralVars ? e.pluralVars.length : 0;
        g = e.vars ? e.vars.length : 0;
        if (0 < b) {
          for (a = 0; a < b; a++) f.push(h.pluralFormFunction(d[e.pluralVars[a]]));
          f = e.message[f.join("_")];
          for (a = 0; a < b; a++) f = f.replace(RegExp("#" + e.pluralVars[a], "g"), this.escapeStringReplacePlacement(d[e.pluralVars[a]]))
        } else f = e.message;
        if (0 < g) for (a = 0; a < g; a++) f = f.replace(RegExp("#" + e.vars[a], "g"), this.escapeStringReplacePlacement(d[e.vars[a]]));
        return f
      };
      za.prototype.escapeStringReplacePlacement = function (a) {
        return "string" === typeof a ? a.replace(/\$/g, "$$$") : a
      };
      za.prototype.hasTranslation = function (a, b, d) {
        d = d || this.language;
        return !!(d && d[a] && d[a][b])
      };
      "undefined" !== typeof module && (module.exports = za);
      b.eventEmitter = new EventEmitter;
      b.eventEmitter.on("error", function (a) {
        q.handleError("EventEmitter on error", a.fileName, a.lineNumber, a.stack)
      });
      b.loggingHandler = new wa;
      b.eventHandler = new ka;
      b.activityManager = new ya;
      b.scheduler = new ma;
      b.main = new X;
      b.languageParser =
        new za(u.language);
      b.socketManager = new ja;
      b.sessionHandler = new U;
      b.chatHandler = new J;
      b.agents = new sa;
      b.visitorHandler = new fa;
      b.audioPlayer = new Qa;
      h = new Z;
      b.fileUploadHandler = new Ra;
      if (void 0 !== u.downloaded) b.eventHandler.clearEvents(), b.eventEmitter.removeAllListeners(), b = null; else {
        u.downloaded = !0;
        if ("undefined" !== typeof g.Prototype && "string" === typeof g.Prototype.Version && 1.7 > parseFloat(g.Prototype.Version.substr(0, 3), 10) && "undefined" !== typeof Array.prototype.toJSON) {
          var ib = JSON.stringify;
          JSON.stringify =
            function (a) {
              var b = Array.prototype.toJSON;
              delete Array.prototype.toJSON;
              a = ib(a);
              Array.prototype.toJSON = b;
              return a
            }
        }
        b.main.load()
      }
    } catch (Aa) {
      if (q) q.handleError(Aa.message, "tawk.js", Aa.lineNumber || Aa.line, Aa.stack); else throw Error("tawk : " + Aa.message);
    }
  }).call(this, window.$_Tawk);

})(window);
