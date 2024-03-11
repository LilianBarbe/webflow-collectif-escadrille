"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());
    }
  });

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/dist/gsap.js
  var require_gsap = __commonJS({
    "node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/dist/gsap.js"(exports, module) {
      init_live_reload();
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.window = global.window || {}));
      })(exports, function(exports2) {
        "use strict";
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          subClass.__proto__ = superClass;
        }
        function _assertThisInitialized(self2) {
          if (self2 === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self2;
        }
        var _config = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        }, _defaults2 = {
          duration: 0.5,
          overwrite: false,
          delay: 0
        }, _suppressOverwrites2, _reverting, _context3, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString3 = function _isString4(value) {
          return typeof value === "string";
        }, _isFunction3 = function _isFunction4(value) {
          return typeof value === "function";
        }, _isNumber3 = function _isNumber4(value) {
          return typeof value === "number";
        }, _isUndefined = function _isUndefined2(value) {
          return typeof value === "undefined";
        }, _isObject3 = function _isObject4(value) {
          return typeof value === "object";
        }, _isNotFalse = function _isNotFalse2(value) {
          return value !== false;
        }, _windowExists3 = function _windowExists4() {
          return typeof window !== "undefined";
        }, _isFuncOrString = function _isFuncOrString2(value) {
          return _isFunction3(value) || _isString3(value);
        }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
        }, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globalTimeline, _win3, _coreInitted3, _doc3, _globals = {}, _installScope = {}, _coreReady, _install = function _install2(scope) {
          return (_installScope = _merge(scope, _globals)) && gsap4;
        }, _missingPlugin = function _missingPlugin2(property, value) {
          return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
        }, _warn = function _warn2(message, suppress) {
          return !suppress && console.warn(message);
        }, _addGlobal = function _addGlobal2(name, obj) {
          return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
        }, _emptyFunc = function _emptyFunc2() {
          return 0;
        }, _startAtRevertConfig = {
          suppressEvents: true,
          isStart: true,
          kill: false
        }, _revertConfigNoKill = {
          suppressEvents: true,
          kill: false
        }, _revertConfig = {
          suppressEvents: true
        }, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness2(targets) {
          var target = targets[0], harnessPlugin, i2;
          _isObject3(target) || _isFunction3(target) || (targets = [targets]);
          if (!(harnessPlugin = (target._gsap || {}).harness)) {
            i2 = _harnessPlugins.length;
            while (i2-- && !_harnessPlugins[i2].targetTest(target)) {
            }
            harnessPlugin = _harnessPlugins[i2];
          }
          i2 = targets.length;
          while (i2--) {
            targets[i2] && (targets[i2]._gsap || (targets[i2]._gsap = new GSCache(targets[i2], harnessPlugin))) || targets.splice(i2, 1);
          }
          return targets;
        }, _getCache = function _getCache2(target) {
          return target._gsap || _harness(toArray(target))[0]._gsap;
        }, _getProperty = function _getProperty2(target, property, v2) {
          return (v2 = target[property]) && _isFunction3(v2) ? target[property]() : _isUndefined(v2) && target.getAttribute && target.getAttribute(property) || v2;
        }, _forEachName = function _forEachName2(names, func) {
          return (names = names.split(",")).forEach(func) || names;
        }, _round3 = function _round4(value) {
          return Math.round(value * 1e5) / 1e5 || 0;
        }, _roundPrecise = function _roundPrecise2(value) {
          return Math.round(value * 1e7) / 1e7 || 0;
        }, _parseRelative = function _parseRelative2(start, value) {
          var operator = value.charAt(0), end = parseFloat(value.substr(2));
          start = parseFloat(start);
          return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
        }, _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
          var l2 = toFind.length, i2 = 0;
          for (; toSearch.indexOf(toFind[i2]) < 0 && ++i2 < l2; ) {
          }
          return i2 < l2;
        }, _lazyRender = function _lazyRender2() {
          var l2 = _lazyTweens.length, a2 = _lazyTweens.slice(0), i2, tween;
          _lazyLookup = {};
          _lazyTweens.length = 0;
          for (i2 = 0; i2 < l2; i2++) {
            tween = a2[i2];
            tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
          }
        }, _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
          _lazyTweens.length && !_reverting && _lazyRender();
          animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
          _lazyTweens.length && !_reverting && _lazyRender();
        }, _numericIfPossible = function _numericIfPossible2(value) {
          var n2 = parseFloat(value);
          return (n2 || n2 === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n2 : _isString3(value) ? value.trim() : value;
        }, _passThrough3 = function _passThrough4(p2) {
          return p2;
        }, _setDefaults3 = function _setDefaults4(obj, defaults) {
          for (var p2 in defaults) {
            p2 in obj || (obj[p2] = defaults[p2]);
          }
          return obj;
        }, _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
          return function(obj, defaults) {
            for (var p2 in defaults) {
              p2 in obj || p2 === "duration" && excludeDuration || p2 === "ease" || (obj[p2] = defaults[p2]);
            }
          };
        }, _merge = function _merge2(base, toMerge) {
          for (var p2 in toMerge) {
            base[p2] = toMerge[p2];
          }
          return base;
        }, _mergeDeep = function _mergeDeep2(base, toMerge) {
          for (var p2 in toMerge) {
            p2 !== "__proto__" && p2 !== "constructor" && p2 !== "prototype" && (base[p2] = _isObject3(toMerge[p2]) ? _mergeDeep2(base[p2] || (base[p2] = {}), toMerge[p2]) : toMerge[p2]);
          }
          return base;
        }, _copyExcluding = function _copyExcluding2(obj, excluding) {
          var copy = {}, p2;
          for (p2 in obj) {
            p2 in excluding || (copy[p2] = obj[p2]);
          }
          return copy;
        }, _inheritDefaults = function _inheritDefaults2(vars) {
          var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults3;
          if (_isNotFalse(vars.inherit)) {
            while (parent) {
              func(vars, parent.vars.defaults);
              parent = parent.parent || parent._dp;
            }
          }
          return vars;
        }, _arraysMatch = function _arraysMatch2(a1, a2) {
          var i2 = a1.length, match = i2 === a2.length;
          while (match && i2-- && a1[i2] === a2[i2]) {
          }
          return i2 < 0;
        }, _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
          if (firstProp === void 0) {
            firstProp = "_first";
          }
          if (lastProp === void 0) {
            lastProp = "_last";
          }
          var prev = parent[lastProp], t2;
          if (sortBy) {
            t2 = child[sortBy];
            while (prev && prev[sortBy] > t2) {
              prev = prev._prev;
            }
          }
          if (prev) {
            child._next = prev._next;
            prev._next = child;
          } else {
            child._next = parent[firstProp];
            parent[firstProp] = child;
          }
          if (child._next) {
            child._next._prev = child;
          } else {
            parent[lastProp] = child;
          }
          child._prev = prev;
          child.parent = child._dp = parent;
          return child;
        }, _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
          if (firstProp === void 0) {
            firstProp = "_first";
          }
          if (lastProp === void 0) {
            lastProp = "_last";
          }
          var prev = child._prev, next = child._next;
          if (prev) {
            prev._next = next;
          } else if (parent[firstProp] === child) {
            parent[firstProp] = next;
          }
          if (next) {
            next._prev = prev;
          } else if (parent[lastProp] === child) {
            parent[lastProp] = prev;
          }
          child._next = child._prev = child.parent = null;
        }, _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
          child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
          child._act = 0;
        }, _uncache = function _uncache2(animation, child) {
          if (animation && (!child || child._end > animation._dur || child._start < 0)) {
            var a2 = animation;
            while (a2) {
              a2._dirty = 1;
              a2 = a2.parent;
            }
          }
          return animation;
        }, _recacheAncestors = function _recacheAncestors2(animation) {
          var parent = animation.parent;
          while (parent && parent.parent) {
            parent._dirty = 1;
            parent.totalDuration();
            parent = parent.parent;
          }
          return animation;
        }, _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
          return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
        }, _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
          return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
        }, _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
          return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
        }, _animationCycle = function _animationCycle2(tTime, cycleDuration) {
          var whole = Math.floor(tTime /= cycleDuration);
          return tTime && whole === tTime ? whole - 1 : whole;
        }, _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
          return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
        }, _setEnd = function _setEnd2(animation) {
          return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
        }, _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
          var parent = animation._dp;
          if (parent && parent.smoothChildTiming && animation._ts) {
            animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
            _setEnd(animation);
            parent._dirty || _uncache(parent, animation);
          }
          return animation;
        }, _postAddChecks = function _postAddChecks2(timeline, child) {
          var t2;
          if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
            t2 = _parentToChildTotalTime(timeline.rawTime(), child);
            if (!child._dur || _clamp3(0, child.totalDuration(), t2) - child._tTime > _tinyNum) {
              child.render(t2, true);
            }
          }
          if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
            if (timeline._dur < timeline.duration()) {
              t2 = timeline;
              while (t2._dp) {
                t2.rawTime() >= 0 && t2.totalTime(t2._tTime);
                t2 = t2._dp;
              }
            }
            timeline._zTime = -_tinyNum;
          }
        }, _addToTimeline = function _addToTimeline2(timeline, child, position, skipChecks) {
          child.parent && _removeFromParent(child);
          child._start = _roundPrecise((_isNumber3(position) ? position : position || timeline !== _globalTimeline ? _parsePosition3(timeline, position, child) : timeline._time) + child._delay);
          child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
          _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
          _isFromOrFromStart(child) || (timeline._recent = child);
          skipChecks || _postAddChecks(timeline, child);
          timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
          return timeline;
        }, _scrollTrigger = function _scrollTrigger2(animation, trigger) {
          return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
        }, _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
          _initTween(tween, time, tTime);
          if (!tween._initted) {
            return 1;
          }
          if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
            _lazyTweens.push(tween);
            tween._lazy = [tTime, suppressEvents];
            return 1;
          }
        }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
          var parent = _ref.parent;
          return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
        }, _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
          var data = _ref2.data;
          return data === "isFromStart" || data === "isStart";
        }, _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
          var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt2, iteration, prevIteration;
          if (repeatDelay && tween._repeat) {
            tTime = _clamp3(0, tween._tDur, totalTime);
            iteration = _animationCycle(tTime, repeatDelay);
            tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
            if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
              prevRatio = 1 - ratio;
              tween.vars.repeatRefresh && tween._initted && tween.invalidate();
            }
          }
          if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
            if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
              return;
            }
            prevIteration = tween._zTime;
            tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
            suppressEvents || (suppressEvents = totalTime && !prevIteration);
            tween.ratio = ratio;
            tween._from && (ratio = 1 - ratio);
            tween._time = 0;
            tween._tTime = tTime;
            pt2 = tween._pt;
            while (pt2) {
              pt2.r(ratio, pt2.d);
              pt2 = pt2._next;
            }
            totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
            tween._onUpdate && !suppressEvents && _callback3(tween, "onUpdate");
            tTime && tween._repeat && !suppressEvents && tween.parent && _callback3(tween, "onRepeat");
            if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
              ratio && _removeFromParent(tween, 1);
              if (!suppressEvents && !_reverting) {
                _callback3(tween, ratio ? "onComplete" : "onReverseComplete", true);
                tween._prom && tween._prom();
              }
            }
          } else if (!tween._zTime) {
            tween._zTime = totalTime;
          }
        }, _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
          var child;
          if (time > prevTime) {
            child = animation._first;
            while (child && child._start <= time) {
              if (child.data === "isPause" && child._start > prevTime) {
                return child;
              }
              child = child._next;
            }
          } else {
            child = animation._last;
            while (child && child._start >= time) {
              if (child.data === "isPause" && child._start < prevTime) {
                return child;
              }
              child = child._prev;
            }
          }
        }, _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
          var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
          totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
          animation._dur = dur;
          animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
          totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
          animation.parent && _setEnd(animation);
          skipUncache || _uncache(animation.parent, animation);
          return animation;
        }, _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
          return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
        }, _zeroPosition = {
          _start: 0,
          endTime: _emptyFunc,
          totalDuration: _emptyFunc
        }, _parsePosition3 = function _parsePosition4(animation, position, percentAnimation) {
          var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i2, offset, isPercent;
          if (_isString3(position) && (isNaN(position) || position in labels)) {
            offset = position.charAt(0);
            isPercent = position.substr(-1) === "%";
            i2 = position.indexOf("=");
            if (offset === "<" || offset === ">") {
              i2 >= 0 && (position = position.replace(/=/, ""));
              return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i2 < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
            }
            if (i2 < 0) {
              position in labels || (labels[position] = clippedDuration);
              return labels[position];
            }
            offset = parseFloat(position.charAt(i2 - 1) + position.substr(i2 + 1));
            if (isPercent && percentAnimation) {
              offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
            }
            return i2 > 1 ? _parsePosition4(animation, position.substr(0, i2 - 1), percentAnimation) + offset : clippedDuration + offset;
          }
          return position == null ? clippedDuration : +position;
        }, _createTweenType = function _createTweenType2(type, params, timeline) {
          var isLegacy = _isNumber3(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
          isLegacy && (vars.duration = params[1]);
          vars.parent = timeline;
          if (type) {
            irVars = vars;
            parent = timeline;
            while (parent && !("immediateRender" in irVars)) {
              irVars = parent.vars.defaults || {};
              parent = _isNotFalse(parent.vars.inherit) && parent.parent;
            }
            vars.immediateRender = _isNotFalse(irVars.immediateRender);
            type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
          }
          return new Tween(params[0], vars, params[varsIndex + 1]);
        }, _conditionalReturn = function _conditionalReturn2(value, func) {
          return value || value === 0 ? func(value) : func;
        }, _clamp3 = function _clamp4(min, max, value) {
          return value < min ? min : value > max ? max : value;
        }, getUnit = function getUnit2(value, v2) {
          return !_isString3(value) || !(v2 = _unitExp.exec(value)) ? "" : v2[1];
        }, clamp = function clamp2(min, max, value) {
          return _conditionalReturn(value, function(v2) {
            return _clamp3(min, max, v2);
          });
        }, _slice = [].slice, _isArrayLike = function _isArrayLike2(value, nonEmpty) {
          return value && _isObject3(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject3(value[0])) && !value.nodeType && value !== _win3;
        }, _flatten = function _flatten2(ar2, leaveStrings, accumulator) {
          if (accumulator === void 0) {
            accumulator = [];
          }
          return ar2.forEach(function(value) {
            var _accumulator;
            return _isString3(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
          }) || accumulator;
        }, toArray = function toArray2(value, scope, leaveStrings) {
          return _context3 && !scope && _context3.selector ? _context3.selector(value) : _isString3(value) && !leaveStrings && (_coreInitted3 || !_wake()) ? _slice.call((scope || _doc3).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
        }, selector = function selector2(value) {
          value = toArray(value)[0] || _warn("Invalid scope") || {};
          return function(v2) {
            var el = value.current || value.nativeElement || value;
            return toArray(v2, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc3.createElement("div") : value);
          };
        }, shuffle = function shuffle2(a2) {
          return a2.sort(function() {
            return 0.5 - Math.random();
          });
        }, distribute = function distribute2(v2) {
          if (_isFunction3(v2)) {
            return v2;
          }
          var vars = _isObject3(v2) ? v2 : {
            each: v2
          }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
          if (_isString3(from)) {
            ratioX = ratioY = {
              center: 0.5,
              edges: 0.5,
              end: 1
            }[from] || 0;
          } else if (!isDecimal && ratios) {
            ratioX = from[0];
            ratioY = from[1];
          }
          return function(i2, target, a2) {
            var l2 = (a2 || vars).length, distances = cache[l2], originX, originY, x2, y2, d2, j2, max, min, wrapAt;
            if (!distances) {
              wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
              if (!wrapAt) {
                max = -_bigNum;
                while (max < (max = a2[wrapAt++].getBoundingClientRect().left) && wrapAt < l2) {
                }
                wrapAt < l2 && wrapAt--;
              }
              distances = cache[l2] = [];
              originX = ratios ? Math.min(wrapAt, l2) * ratioX - 0.5 : from % wrapAt;
              originY = wrapAt === _bigNum ? 0 : ratios ? l2 * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
              max = 0;
              min = _bigNum;
              for (j2 = 0; j2 < l2; j2++) {
                x2 = j2 % wrapAt - originX;
                y2 = originY - (j2 / wrapAt | 0);
                distances[j2] = d2 = !axis ? _sqrt(x2 * x2 + y2 * y2) : Math.abs(axis === "y" ? y2 : x2);
                d2 > max && (max = d2);
                d2 < min && (min = d2);
              }
              from === "random" && shuffle(distances);
              distances.max = max - min;
              distances.min = min;
              distances.v = l2 = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l2 ? l2 - 1 : !axis ? Math.max(wrapAt, l2 / wrapAt) : axis === "y" ? l2 / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
              distances.b = l2 < 0 ? base - l2 : base;
              distances.u = getUnit(vars.amount || vars.each) || 0;
              ease = ease && l2 < 0 ? _invertEase(ease) : ease;
            }
            l2 = (distances[i2] - distances.min) / distances.max || 0;
            return _roundPrecise(distances.b + (ease ? ease(l2) : l2) * distances.v) + distances.u;
          };
        }, _roundModifier = function _roundModifier2(v2) {
          var p2 = Math.pow(10, ((v2 + "").split(".")[1] || "").length);
          return function(raw) {
            var n2 = _roundPrecise(Math.round(parseFloat(raw) / v2) * v2 * p2);
            return (n2 - n2 % 1) / p2 + (_isNumber3(raw) ? 0 : getUnit(raw));
          };
        }, snap = function snap2(snapTo, value) {
          var isArray = _isArray(snapTo), radius, is2D;
          if (!isArray && _isObject3(snapTo)) {
            radius = isArray = snapTo.radius || _bigNum;
            if (snapTo.values) {
              snapTo = toArray(snapTo.values);
              if (is2D = !_isNumber3(snapTo[0])) {
                radius *= radius;
              }
            } else {
              snapTo = _roundModifier(snapTo.increment);
            }
          }
          return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction3(snapTo) ? function(raw) {
            is2D = snapTo(raw);
            return Math.abs(is2D - raw) <= radius ? is2D : raw;
          } : function(raw) {
            var x2 = parseFloat(is2D ? raw.x : raw), y2 = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i2 = snapTo.length, dx, dy;
            while (i2--) {
              if (is2D) {
                dx = snapTo[i2].x - x2;
                dy = snapTo[i2].y - y2;
                dx = dx * dx + dy * dy;
              } else {
                dx = Math.abs(snapTo[i2] - x2);
              }
              if (dx < min) {
                min = dx;
                closest = i2;
              }
            }
            closest = !radius || min <= radius ? snapTo[closest] : raw;
            return is2D || closest === raw || _isNumber3(raw) ? closest : closest + getUnit(raw);
          });
        }, random = function random2(min, max, roundingIncrement, returnFunction) {
          return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
            return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
          });
        }, pipe = function pipe2() {
          for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
            functions[_key] = arguments[_key];
          }
          return function(value) {
            return functions.reduce(function(v2, f2) {
              return f2(v2);
            }, value);
          };
        }, unitize = function unitize2(func, unit) {
          return function(value) {
            return func(parseFloat(value)) + (unit || getUnit(value));
          };
        }, normalize = function normalize2(min, max, value) {
          return mapRange(min, max, 0, 1, value);
        }, _wrapArray = function _wrapArray2(a2, wrapper, value) {
          return _conditionalReturn(value, function(index) {
            return a2[~~wrapper(index)];
          });
        }, wrap = function wrap2(min, max, value) {
          var range = max - min;
          return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
            return (range + (value2 - min) % range) % range + min;
          });
        }, wrapYoyo = function wrapYoyo2(min, max, value) {
          var range = max - min, total = range * 2;
          return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
            value2 = (total + (value2 - min) % total) % total || 0;
            return min + (value2 > range ? total - value2 : value2);
          });
        }, _replaceRandom = function _replaceRandom2(value) {
          var prev = 0, s2 = "", i2, nums, end, isArray;
          while (~(i2 = value.indexOf("random(", prev))) {
            end = value.indexOf(")", i2);
            isArray = value.charAt(i2 + 7) === "[";
            nums = value.substr(i2 + 7, end - i2 - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
            s2 += value.substr(prev, i2 - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
            prev = end + 1;
          }
          return s2 + value.substr(prev, value.length - prev);
        }, mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
          var inRange = inMax - inMin, outRange = outMax - outMin;
          return _conditionalReturn(value, function(value2) {
            return outMin + ((value2 - inMin) / inRange * outRange || 0);
          });
        }, interpolate = function interpolate2(start, end, progress, mutate) {
          var func = isNaN(start + end) ? 0 : function(p3) {
            return (1 - p3) * start + p3 * end;
          };
          if (!func) {
            var isString = _isString3(start), master = {}, p2, i2, interpolators, l2, il;
            progress === true && (mutate = 1) && (progress = null);
            if (isString) {
              start = {
                p: start
              };
              end = {
                p: end
              };
            } else if (_isArray(start) && !_isArray(end)) {
              interpolators = [];
              l2 = start.length;
              il = l2 - 2;
              for (i2 = 1; i2 < l2; i2++) {
                interpolators.push(interpolate2(start[i2 - 1], start[i2]));
              }
              l2--;
              func = function func2(p3) {
                p3 *= l2;
                var i3 = Math.min(il, ~~p3);
                return interpolators[i3](p3 - i3);
              };
              progress = end;
            } else if (!mutate) {
              start = _merge(_isArray(start) ? [] : {}, start);
            }
            if (!interpolators) {
              for (p2 in end) {
                _addPropTween.call(master, start, p2, "get", end[p2]);
              }
              func = function func2(p3) {
                return _renderPropTweens(p3, master) || (isString ? start.p : start);
              };
            }
          }
          return _conditionalReturn(progress, func);
        }, _getLabelInDirection = function _getLabelInDirection2(timeline, fromTime, backward) {
          var labels = timeline.labels, min = _bigNum, p2, distance, label;
          for (p2 in labels) {
            distance = labels[p2] - fromTime;
            if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
              label = p2;
              min = distance;
            }
          }
          return label;
        }, _callback3 = function _callback4(animation, type, executeLazyFirst) {
          var v2 = animation.vars, callback = v2[type], prevContext = _context3, context = animation._ctx, params, scope, result;
          if (!callback) {
            return;
          }
          params = v2[type + "Params"];
          scope = v2.callbackScope || animation;
          executeLazyFirst && _lazyTweens.length && _lazyRender();
          context && (_context3 = context);
          result = params ? callback.apply(scope, params) : callback.call(scope);
          _context3 = prevContext;
          return result;
        }, _interrupt = function _interrupt2(animation) {
          _removeFromParent(animation);
          animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
          animation.progress() < 1 && _callback3(animation, "onInterrupt");
          return animation;
        }, _quickTween, _registerPluginQueue = [], _createPlugin = function _createPlugin2(config) {
          if (!config)
            return;
          config = !config.name && config["default"] || config;
          if (_windowExists3() || config.headless) {
            var name = config.name, isFunc = _isFunction3(config), Plugin = name && !isFunc && config.init ? function() {
              this._props = [];
            } : config, instanceDefaults = {
              init: _emptyFunc,
              render: _renderPropTweens,
              add: _addPropTween,
              kill: _killPropTweensOf,
              modifier: _addPluginModifier,
              rawVars: 0
            }, statics = {
              targetTest: 0,
              get: 0,
              getSetter: _getSetter,
              aliases: {},
              register: 0
            };
            _wake();
            if (config !== Plugin) {
              if (_plugins[name]) {
                return;
              }
              _setDefaults3(Plugin, _setDefaults3(_copyExcluding(config, instanceDefaults), statics));
              _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
              _plugins[Plugin.prop = name] = Plugin;
              if (config.targetTest) {
                _harnessPlugins.push(Plugin);
                _reservedProps[name] = 1;
              }
              name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
            }
            _addGlobal(name, Plugin);
            config.register && config.register(gsap4, Plugin, PropTween);
          } else {
            _registerPluginQueue.push(config);
          }
        }, _255 = 255, _colorLookup = {
          aqua: [0, _255, _255],
          lime: [0, _255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, _255],
          navy: [0, 0, 128],
          white: [_255, _255, _255],
          olive: [128, 128, 0],
          yellow: [_255, _255, 0],
          orange: [_255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [_255, 0, 0],
          pink: [_255, 192, 203],
          cyan: [0, _255, _255],
          transparent: [_255, _255, _255, 0]
        }, _hue = function _hue2(h2, m1, m2) {
          h2 += h2 < 0 ? 1 : h2 > 1 ? -1 : 0;
          return (h2 * 6 < 1 ? m1 + (m2 - m1) * h2 * 6 : h2 < 0.5 ? m2 : h2 * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h2) * 6 : m1) * _255 + 0.5 | 0;
        }, splitColor = function splitColor2(v2, toHSL, forceAlpha) {
          var a2 = !v2 ? _colorLookup.black : _isNumber3(v2) ? [v2 >> 16, v2 >> 8 & _255, v2 & _255] : 0, r2, g2, b2, h2, s2, l2, max, min, d2, wasHSL;
          if (!a2) {
            if (v2.substr(-1) === ",") {
              v2 = v2.substr(0, v2.length - 1);
            }
            if (_colorLookup[v2]) {
              a2 = _colorLookup[v2];
            } else if (v2.charAt(0) === "#") {
              if (v2.length < 6) {
                r2 = v2.charAt(1);
                g2 = v2.charAt(2);
                b2 = v2.charAt(3);
                v2 = "#" + r2 + r2 + g2 + g2 + b2 + b2 + (v2.length === 5 ? v2.charAt(4) + v2.charAt(4) : "");
              }
              if (v2.length === 9) {
                a2 = parseInt(v2.substr(1, 6), 16);
                return [a2 >> 16, a2 >> 8 & _255, a2 & _255, parseInt(v2.substr(7), 16) / 255];
              }
              v2 = parseInt(v2.substr(1), 16);
              a2 = [v2 >> 16, v2 >> 8 & _255, v2 & _255];
            } else if (v2.substr(0, 3) === "hsl") {
              a2 = wasHSL = v2.match(_strictNumExp);
              if (!toHSL) {
                h2 = +a2[0] % 360 / 360;
                s2 = +a2[1] / 100;
                l2 = +a2[2] / 100;
                g2 = l2 <= 0.5 ? l2 * (s2 + 1) : l2 + s2 - l2 * s2;
                r2 = l2 * 2 - g2;
                a2.length > 3 && (a2[3] *= 1);
                a2[0] = _hue(h2 + 1 / 3, r2, g2);
                a2[1] = _hue(h2, r2, g2);
                a2[2] = _hue(h2 - 1 / 3, r2, g2);
              } else if (~v2.indexOf("=")) {
                a2 = v2.match(_numExp);
                forceAlpha && a2.length < 4 && (a2[3] = 1);
                return a2;
              }
            } else {
              a2 = v2.match(_strictNumExp) || _colorLookup.transparent;
            }
            a2 = a2.map(Number);
          }
          if (toHSL && !wasHSL) {
            r2 = a2[0] / _255;
            g2 = a2[1] / _255;
            b2 = a2[2] / _255;
            max = Math.max(r2, g2, b2);
            min = Math.min(r2, g2, b2);
            l2 = (max + min) / 2;
            if (max === min) {
              h2 = s2 = 0;
            } else {
              d2 = max - min;
              s2 = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
              h2 = max === r2 ? (g2 - b2) / d2 + (g2 < b2 ? 6 : 0) : max === g2 ? (b2 - r2) / d2 + 2 : (r2 - g2) / d2 + 4;
              h2 *= 60;
            }
            a2[0] = ~~(h2 + 0.5);
            a2[1] = ~~(s2 * 100 + 0.5);
            a2[2] = ~~(l2 * 100 + 0.5);
          }
          forceAlpha && a2.length < 4 && (a2[3] = 1);
          return a2;
        }, _colorOrderData = function _colorOrderData2(v2) {
          var values = [], c2 = [], i2 = -1;
          v2.split(_colorExp).forEach(function(v3) {
            var a2 = v3.match(_numWithUnitExp) || [];
            values.push.apply(values, a2);
            c2.push(i2 += a2.length + 1);
          });
          values.c = c2;
          return values;
        }, _formatColors = function _formatColors2(s2, toHSL, orderMatchData) {
          var result = "", colors = (s2 + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i2 = 0, c2, shell, d2, l2;
          if (!colors) {
            return s2;
          }
          colors = colors.map(function(color) {
            return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
          });
          if (orderMatchData) {
            d2 = _colorOrderData(s2);
            c2 = orderMatchData.c;
            if (c2.join(result) !== d2.c.join(result)) {
              shell = s2.replace(_colorExp, "1").split(_numWithUnitExp);
              l2 = shell.length - 1;
              for (; i2 < l2; i2++) {
                result += shell[i2] + (~c2.indexOf(i2) ? colors.shift() || type + "0,0,0,0)" : (d2.length ? d2 : colors.length ? colors : orderMatchData).shift());
              }
            }
          }
          if (!shell) {
            shell = s2.split(_colorExp);
            l2 = shell.length - 1;
            for (; i2 < l2; i2++) {
              result += shell[i2] + colors[i2];
            }
          }
          return result + shell[l2];
        }, _colorExp = function() {
          var s2 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p2;
          for (p2 in _colorLookup) {
            s2 += "|" + p2 + "\\b";
          }
          return new RegExp(s2 + ")", "gi");
        }(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter2(a2) {
          var combined = a2.join(" "), toHSL;
          _colorExp.lastIndex = 0;
          if (_colorExp.test(combined)) {
            toHSL = _hslExp.test(combined);
            a2[1] = _formatColors(a2[1], toHSL);
            a2[0] = _formatColors(a2[0], toHSL, _colorOrderData(a2[1]));
            return true;
          }
        }, _tickerActive, _ticker = function() {
          var _getTime3 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime3(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v2) {
            var elapsed = _getTime3() - _lastUpdate, manual = v2 === true, overlap, dispatch, time, frame;
            (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
            _lastUpdate += elapsed;
            time = _lastUpdate - _startTime;
            overlap = time - _nextTime;
            if (overlap > 0 || manual) {
              frame = ++_self.frame;
              _delta = time - _self.time * 1e3;
              _self.time = time = time / 1e3;
              _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
              dispatch = 1;
            }
            manual || (_id = _req(_tick2));
            if (dispatch) {
              for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
                _listeners3[_i2](time, _delta, frame, v2);
              }
            }
          };
          _self = {
            time: 0,
            frame: 0,
            tick: function tick() {
              _tick(true);
            },
            deltaRatio: function deltaRatio(fps) {
              return _delta / (1e3 / (fps || 60));
            },
            wake: function wake() {
              if (_coreReady) {
                if (!_coreInitted3 && _windowExists3()) {
                  _win3 = _coreInitted3 = window;
                  _doc3 = _win3.document || {};
                  _globals.gsap = gsap4;
                  (_win3.gsapVersions || (_win3.gsapVersions = [])).push(gsap4.version);
                  _install(_installScope || _win3.GreenSockGlobals || !_win3.gsap && _win3 || {});
                  _registerPluginQueue.forEach(_createPlugin);
                }
                _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
                _id && _self.sleep();
                _req = _raf || function(f2) {
                  return setTimeout(f2, _nextTime - _self.time * 1e3 + 1 | 0);
                };
                _tickerActive = 1;
                _tick(2);
              }
            },
            sleep: function sleep() {
              (_raf ? cancelAnimationFrame : clearTimeout)(_id);
              _tickerActive = 0;
              _req = _emptyFunc;
            },
            lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
              _lagThreshold = threshold || Infinity;
              _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
            },
            fps: function fps(_fps) {
              _gap = 1e3 / (_fps || 240);
              _nextTime = _self.time * 1e3 + _gap;
            },
            add: function add(callback, once, prioritize) {
              var func = once ? function(t2, d2, f2, v2) {
                callback(t2, d2, f2, v2);
                _self.remove(func);
              } : callback;
              _self.remove(callback);
              _listeners3[prioritize ? "unshift" : "push"](func);
              _wake();
              return func;
            },
            remove: function remove(callback, i2) {
              ~(i2 = _listeners3.indexOf(callback)) && _listeners3.splice(i2, 1) && _i2 >= i2 && _i2--;
            },
            _listeners: _listeners3
          };
          return _self;
        }(), _wake = function _wake2() {
          return !_tickerActive && _ticker.wake();
        }, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString2(value) {
          var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i2 = 1, l2 = split.length, index, val, parsedVal;
          for (; i2 < l2; i2++) {
            val = split[i2];
            index = i2 !== l2 - 1 ? val.lastIndexOf(",") : val.length;
            parsedVal = val.substr(0, index);
            obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
            key = val.substr(index + 1).trim();
          }
          return obj;
        }, _valueInParentheses = function _valueInParentheses2(value) {
          var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
          return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
        }, _configEaseFromString = function _configEaseFromString2(name) {
          var split = (name + "").split("("), ease = _easeMap[split[0]];
          return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
        }, _invertEase = function _invertEase2(ease) {
          return function(p2) {
            return 1 - ease(1 - p2);
          };
        }, _propagateYoyoEase = function _propagateYoyoEase2(timeline, isYoyo) {
          var child = timeline._first, ease;
          while (child) {
            if (child instanceof Timeline) {
              _propagateYoyoEase2(child, isYoyo);
            } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
              if (child.timeline) {
                _propagateYoyoEase2(child.timeline, isYoyo);
              } else {
                ease = child._ease;
                child._ease = child._yEase;
                child._yEase = ease;
                child._yoyo = isYoyo;
              }
            }
            child = child._next;
          }
        }, _parseEase = function _parseEase2(ease, defaultEase) {
          return !ease ? defaultEase : (_isFunction3(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
        }, _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
          if (easeOut === void 0) {
            easeOut = function easeOut2(p2) {
              return 1 - easeIn(1 - p2);
            };
          }
          if (easeInOut === void 0) {
            easeInOut = function easeInOut2(p2) {
              return p2 < 0.5 ? easeIn(p2 * 2) / 2 : 1 - easeIn((1 - p2) * 2) / 2;
            };
          }
          var ease = {
            easeIn,
            easeOut,
            easeInOut
          }, lowercaseName;
          _forEachName(names, function(name) {
            _easeMap[name] = _globals[name] = ease;
            _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
            for (var p2 in ease) {
              _easeMap[lowercaseName + (p2 === "easeIn" ? ".in" : p2 === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p2] = ease[p2];
            }
          });
          return ease;
        }, _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
          return function(p2) {
            return p2 < 0.5 ? (1 - easeOut(1 - p2 * 2)) / 2 : 0.5 + easeOut((p2 - 0.5) * 2) / 2;
          };
        }, _configElastic = function _configElastic2(type, amplitude, period) {
          var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p4) {
            return p4 === 1 ? 1 : p1 * Math.pow(2, -10 * p4) * _sin((p4 - p3) * p2) + 1;
          }, ease = type === "out" ? easeOut : type === "in" ? function(p4) {
            return 1 - easeOut(1 - p4);
          } : _easeInOutFromOut(easeOut);
          p2 = _2PI / p2;
          ease.config = function(amplitude2, period2) {
            return _configElastic2(type, amplitude2, period2);
          };
          return ease;
        }, _configBack = function _configBack2(type, overshoot) {
          if (overshoot === void 0) {
            overshoot = 1.70158;
          }
          var easeOut = function easeOut2(p2) {
            return p2 ? --p2 * p2 * ((overshoot + 1) * p2 + overshoot) + 1 : 0;
          }, ease = type === "out" ? easeOut : type === "in" ? function(p2) {
            return 1 - easeOut(1 - p2);
          } : _easeInOutFromOut(easeOut);
          ease.config = function(overshoot2) {
            return _configBack2(type, overshoot2);
          };
          return ease;
        };
        _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i2) {
          var power = i2 < 5 ? i2 + 1 : i2;
          _insertEase(name + ",Power" + (power - 1), i2 ? function(p2) {
            return Math.pow(p2, power);
          } : function(p2) {
            return p2;
          }, function(p2) {
            return 1 - Math.pow(1 - p2, power);
          }, function(p2) {
            return p2 < 0.5 ? Math.pow(p2 * 2, power) / 2 : 1 - Math.pow((1 - p2) * 2, power) / 2;
          });
        });
        _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
        _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
        (function(n2, c2) {
          var n1 = 1 / c2, n22 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p2) {
            return p2 < n1 ? n2 * p2 * p2 : p2 < n22 ? n2 * Math.pow(p2 - 1.5 / c2, 2) + 0.75 : p2 < n3 ? n2 * (p2 -= 2.25 / c2) * p2 + 0.9375 : n2 * Math.pow(p2 - 2.625 / c2, 2) + 0.984375;
          };
          _insertEase("Bounce", function(p2) {
            return 1 - easeOut(1 - p2);
          }, easeOut);
        })(7.5625, 2.75);
        _insertEase("Expo", function(p2) {
          return p2 ? Math.pow(2, 10 * (p2 - 1)) : 0;
        });
        _insertEase("Circ", function(p2) {
          return -(_sqrt(1 - p2 * p2) - 1);
        });
        _insertEase("Sine", function(p2) {
          return p2 === 1 ? 1 : -_cos(p2 * _HALF_PI) + 1;
        });
        _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
        _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
          config: function config(steps, immediateStart) {
            if (steps === void 0) {
              steps = 1;
            }
            var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
            return function(p4) {
              return ((p2 * _clamp3(0, max, p4) | 0) + p3) * p1;
            };
          }
        };
        _defaults2.ease = _easeMap["quad.out"];
        _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
          return _callbackNames += name + "," + name + "Params,";
        });
        var GSCache = function GSCache2(target, harness) {
          this.id = _gsID++;
          target._gsap = this;
          this.target = target;
          this.harness = harness;
          this.get = harness ? harness.get : _getProperty;
          this.set = harness ? harness.getSetter : _getSetter;
        };
        var Animation = function() {
          function Animation2(vars) {
            this.vars = vars;
            this._delay = +vars.delay || 0;
            if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
              this._rDelay = vars.repeatDelay || 0;
              this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
            }
            this._ts = 1;
            _setDuration(this, +vars.duration, 1, 1);
            this.data = vars.data;
            if (_context3) {
              this._ctx = _context3;
              _context3.data.push(this);
            }
            _tickerActive || _ticker.wake();
          }
          var _proto = Animation2.prototype;
          _proto.delay = function delay(value) {
            if (value || value === 0) {
              this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
              this._delay = value;
              return this;
            }
            return this._delay;
          };
          _proto.duration = function duration(value) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
          };
          _proto.totalDuration = function totalDuration(value) {
            if (!arguments.length) {
              return this._tDur;
            }
            this._dirty = 0;
            return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
          };
          _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
            _wake();
            if (!arguments.length) {
              return this._tTime;
            }
            var parent = this._dp;
            if (parent && parent.smoothChildTiming && this._ts) {
              _alignPlayhead(this, _totalTime);
              !parent._dp || parent.parent || _postAddChecks(parent, this);
              while (parent && parent.parent) {
                if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
                  parent.totalTime(parent._tTime, true);
                }
                parent = parent.parent;
              }
              if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
                _addToTimeline(this._dp, this, this._start - this._delay);
              }
            }
            if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
              this._ts || (this._pTime = _totalTime);
              _lazySafeRender(this, _totalTime, suppressEvents);
            }
            return this;
          };
          _proto.time = function time(value, suppressEvents) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
          };
          _proto.totalProgress = function totalProgress(value, suppressEvents) {
            return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
          };
          _proto.progress = function progress(value, suppressEvents) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
          };
          _proto.iteration = function iteration(value, suppressEvents) {
            var cycleDuration = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
          };
          _proto.timeScale = function timeScale(value, suppressEvents) {
            if (!arguments.length) {
              return this._rts === -_tinyNum ? 0 : this._rts;
            }
            if (this._rts === value) {
              return this;
            }
            var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
            this._rts = +value || 0;
            this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
            this.totalTime(_clamp3(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);
            _setEnd(this);
            return _recacheAncestors(this);
          };
          _proto.paused = function paused(value) {
            if (!arguments.length) {
              return this._ps;
            }
            if (this._ps !== value) {
              this._ps = value;
              if (value) {
                this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
                this._ts = this._act = 0;
              } else {
                _wake();
                this._ts = this._rts;
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
              }
            }
            return this;
          };
          _proto.startTime = function startTime(value) {
            if (arguments.length) {
              this._start = value;
              var parent = this.parent || this._dp;
              parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
              return this;
            }
            return this._start;
          };
          _proto.endTime = function endTime(includeRepeats) {
            return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
          };
          _proto.rawTime = function rawTime(wrapRepeats) {
            var parent = this.parent || this._dp;
            return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
          };
          _proto.revert = function revert(config) {
            if (config === void 0) {
              config = _revertConfig;
            }
            var prevIsReverting = _reverting;
            _reverting = config;
            if (this._initted || this._startAt) {
              this.timeline && this.timeline.revert(config);
              this.totalTime(-0.01, config.suppressEvents);
            }
            this.data !== "nested" && config.kill !== false && this.kill();
            _reverting = prevIsReverting;
            return this;
          };
          _proto.globalTime = function globalTime(rawTime) {
            var animation = this, time = arguments.length ? rawTime : animation.rawTime();
            while (animation) {
              time = animation._start + time / (Math.abs(animation._ts) || 1);
              animation = animation._dp;
            }
            return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
          };
          _proto.repeat = function repeat(value) {
            if (arguments.length) {
              this._repeat = value === Infinity ? -2 : value;
              return _onUpdateTotalDuration(this);
            }
            return this._repeat === -2 ? Infinity : this._repeat;
          };
          _proto.repeatDelay = function repeatDelay(value) {
            if (arguments.length) {
              var time = this._time;
              this._rDelay = value;
              _onUpdateTotalDuration(this);
              return time ? this.time(time) : this;
            }
            return this._rDelay;
          };
          _proto.yoyo = function yoyo(value) {
            if (arguments.length) {
              this._yoyo = value;
              return this;
            }
            return this._yoyo;
          };
          _proto.seek = function seek(position, suppressEvents) {
            return this.totalTime(_parsePosition3(this, position), _isNotFalse(suppressEvents));
          };
          _proto.restart = function restart(includeDelay, suppressEvents) {
            return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
          };
          _proto.play = function play(from, suppressEvents) {
            from != null && this.seek(from, suppressEvents);
            return this.reversed(false).paused(false);
          };
          _proto.reverse = function reverse(from, suppressEvents) {
            from != null && this.seek(from || this.totalDuration(), suppressEvents);
            return this.reversed(true).paused(false);
          };
          _proto.pause = function pause(atTime, suppressEvents) {
            atTime != null && this.seek(atTime, suppressEvents);
            return this.paused(true);
          };
          _proto.resume = function resume() {
            return this.paused(false);
          };
          _proto.reversed = function reversed(value) {
            if (arguments.length) {
              !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
              return this;
            }
            return this._rts < 0;
          };
          _proto.invalidate = function invalidate() {
            this._initted = this._act = 0;
            this._zTime = -_tinyNum;
            return this;
          };
          _proto.isActive = function isActive() {
            var parent = this.parent || this._dp, start = this._start, rawTime;
            return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
          };
          _proto.eventCallback = function eventCallback(type, callback, params) {
            var vars = this.vars;
            if (arguments.length > 1) {
              if (!callback) {
                delete vars[type];
              } else {
                vars[type] = callback;
                params && (vars[type + "Params"] = params);
                type === "onUpdate" && (this._onUpdate = callback);
              }
              return this;
            }
            return vars[type];
          };
          _proto.then = function then(onFulfilled) {
            var self2 = this;
            return new Promise(function(resolve) {
              var f2 = _isFunction3(onFulfilled) ? onFulfilled : _passThrough3, _resolve = function _resolve2() {
                var _then = self2.then;
                self2.then = null;
                _isFunction3(f2) && (f2 = f2(self2)) && (f2.then || f2 === self2) && (self2.then = _then);
                resolve(f2);
                self2.then = _then;
              };
              if (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0 || !self2._tTime && self2._ts < 0) {
                _resolve();
              } else {
                self2._prom = _resolve;
              }
            });
          };
          _proto.kill = function kill() {
            _interrupt(this);
          };
          return Animation2;
        }();
        _setDefaults3(Animation.prototype, {
          _time: 0,
          _start: 0,
          _end: 0,
          _tTime: 0,
          _tDur: 0,
          _dirty: 0,
          _repeat: 0,
          _yoyo: false,
          parent: null,
          _initted: false,
          _rDelay: 0,
          _ts: 1,
          _dp: 0,
          ratio: 0,
          _zTime: -_tinyNum,
          _prom: 0,
          _ps: false,
          _rts: 1
        });
        var Timeline = function(_Animation) {
          _inheritsLoose(Timeline2, _Animation);
          function Timeline2(vars, position) {
            var _this;
            if (vars === void 0) {
              vars = {};
            }
            _this = _Animation.call(this, vars) || this;
            _this.labels = {};
            _this.smoothChildTiming = !!vars.smoothChildTiming;
            _this.autoRemoveChildren = !!vars.autoRemoveChildren;
            _this._sort = _isNotFalse(vars.sortChildren);
            _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
            vars.reversed && _this.reverse();
            vars.paused && _this.paused(true);
            vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
            return _this;
          }
          var _proto2 = Timeline2.prototype;
          _proto2.to = function to(targets, vars, position) {
            _createTweenType(0, arguments, this);
            return this;
          };
          _proto2.from = function from(targets, vars, position) {
            _createTweenType(1, arguments, this);
            return this;
          };
          _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
            _createTweenType(2, arguments, this);
            return this;
          };
          _proto2.set = function set(targets, vars, position) {
            vars.duration = 0;
            vars.parent = this;
            _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
            vars.immediateRender = !!vars.immediateRender;
            new Tween(targets, vars, _parsePosition3(this, position), 1);
            return this;
          };
          _proto2.call = function call(callback, params, position) {
            return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
          };
          _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
            vars.duration = duration;
            vars.stagger = vars.stagger || stagger;
            vars.onComplete = onCompleteAll;
            vars.onCompleteParams = onCompleteAllParams;
            vars.parent = this;
            new Tween(targets, vars, _parsePosition3(this, position));
            return this;
          };
          _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
            vars.runBackwards = 1;
            _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
            return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
          };
          _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
            toVars.startAt = fromVars;
            _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
            return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
          };
          _proto2.render = function render(totalTime, suppressEvents, force) {
            var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
            this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
            if (tTime !== this._tTime || force || crossingStart) {
              if (prevTime !== this._time && dur) {
                tTime += this._time - prevTime;
                totalTime += this._time - prevTime;
              }
              time = tTime;
              prevStart = this._start;
              timeScale = this._ts;
              prevPaused = !timeScale;
              if (crossingStart) {
                dur || (prevTime = this._zTime);
                (totalTime || !suppressEvents) && (this._zTime = totalTime);
              }
              if (this._repeat) {
                yoyo = this._yoyo;
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) {
                  return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                }
                time = _roundPrecise(tTime % cycleDuration);
                if (tTime === tDur) {
                  iteration = this._repeat;
                  time = dur;
                } else {
                  iteration = ~~(tTime / cycleDuration);
                  if (iteration && iteration === tTime / cycleDuration) {
                    time = dur;
                    iteration--;
                  }
                  time > dur && (time = dur);
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
                if (yoyo && iteration & 1) {
                  time = dur - time;
                  isYoyo = 1;
                }
                if (iteration !== prevIteration && !this._lock) {
                  var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                  iteration < prevIteration && (rewinding = !rewinding);
                  prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
                  this._lock = 1;
                  this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                  this._tTime = tTime;
                  !suppressEvents && this.parent && _callback3(this, "onRepeat");
                  this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                  if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
                    return this;
                  }
                  dur = this._dur;
                  tDur = this._tDur;
                  if (doesWrap) {
                    this._lock = 2;
                    prevTime = rewinding ? dur : -1e-4;
                    this.render(prevTime, true);
                    this.vars.repeatRefresh && !isYoyo && this.invalidate();
                  }
                  this._lock = 0;
                  if (!this._ts && !prevPaused) {
                    return this;
                  }
                  _propagateYoyoEase(this, isYoyo);
                }
              }
              if (this._hasPause && !this._forcing && this._lock < 2) {
                pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
                if (pauseTween) {
                  tTime -= time - (time = pauseTween._start);
                }
              }
              this._tTime = tTime;
              this._time = time;
              this._act = !timeScale;
              if (!this._initted) {
                this._onUpdate = this.vars.onUpdate;
                this._initted = 1;
                this._zTime = totalTime;
                prevTime = 0;
              }
              if (!prevTime && time && !suppressEvents && !iteration) {
                _callback3(this, "onStart");
                if (this._tTime !== tTime) {
                  return this;
                }
              }
              if (time >= prevTime && totalTime >= 0) {
                child = this._first;
                while (child) {
                  next = child._next;
                  if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                    if (child.parent !== this) {
                      return this.render(totalTime, suppressEvents, force);
                    }
                    child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                    if (time !== this._time || !this._ts && !prevPaused) {
                      pauseTween = 0;
                      next && (tTime += this._zTime = -_tinyNum);
                      break;
                    }
                  }
                  child = next;
                }
              } else {
                child = this._last;
                var adjustedTime = totalTime < 0 ? totalTime : time;
                while (child) {
                  next = child._prev;
                  if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                    if (child.parent !== this) {
                      return this.render(totalTime, suppressEvents, force);
                    }
                    child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
                    if (time !== this._time || !this._ts && !prevPaused) {
                      pauseTween = 0;
                      next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                      break;
                    }
                  }
                  child = next;
                }
              }
              if (pauseTween && !suppressEvents) {
                this.pause();
                pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                if (this._ts) {
                  this._start = prevStart;
                  _setEnd(this);
                  return this.render(totalTime, suppressEvents, force);
                }
              }
              this._onUpdate && !suppressEvents && _callback3(this, "onUpdate", true);
              if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
                if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                  if (!this._lock) {
                    (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                    if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                      _callback3(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                      this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                    }
                  }
                }
              }
            }
            return this;
          };
          _proto2.add = function add(child, position) {
            var _this2 = this;
            _isNumber3(position) || (position = _parsePosition3(this, position, child));
            if (!(child instanceof Animation)) {
              if (_isArray(child)) {
                child.forEach(function(obj) {
                  return _this2.add(obj, position);
                });
                return this;
              }
              if (_isString3(child)) {
                return this.addLabel(child, position);
              }
              if (_isFunction3(child)) {
                child = Tween.delayedCall(0, child);
              } else {
                return this;
              }
            }
            return this !== child ? _addToTimeline(this, child, position) : this;
          };
          _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
            if (nested === void 0) {
              nested = true;
            }
            if (tweens === void 0) {
              tweens = true;
            }
            if (timelines === void 0) {
              timelines = true;
            }
            if (ignoreBeforeTime === void 0) {
              ignoreBeforeTime = -_bigNum;
            }
            var a2 = [], child = this._first;
            while (child) {
              if (child._start >= ignoreBeforeTime) {
                if (child instanceof Tween) {
                  tweens && a2.push(child);
                } else {
                  timelines && a2.push(child);
                  nested && a2.push.apply(a2, child.getChildren(true, tweens, timelines));
                }
              }
              child = child._next;
            }
            return a2;
          };
          _proto2.getById = function getById(id) {
            var animations = this.getChildren(1, 1, 1), i2 = animations.length;
            while (i2--) {
              if (animations[i2].vars.id === id) {
                return animations[i2];
              }
            }
          };
          _proto2.remove = function remove(child) {
            if (_isString3(child)) {
              return this.removeLabel(child);
            }
            if (_isFunction3(child)) {
              return this.killTweensOf(child);
            }
            _removeLinkedListItem(this, child);
            if (child === this._recent) {
              this._recent = this._last;
            }
            return _uncache(this);
          };
          _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
            if (!arguments.length) {
              return this._tTime;
            }
            this._forcing = 1;
            if (!this._dp && this._ts) {
              this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
            }
            _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
            this._forcing = 0;
            return this;
          };
          _proto2.addLabel = function addLabel(label, position) {
            this.labels[label] = _parsePosition3(this, position);
            return this;
          };
          _proto2.removeLabel = function removeLabel(label) {
            delete this.labels[label];
            return this;
          };
          _proto2.addPause = function addPause(position, callback, params) {
            var t2 = Tween.delayedCall(0, callback || _emptyFunc, params);
            t2.data = "isPause";
            this._hasPause = 1;
            return _addToTimeline(this, t2, _parsePosition3(this, position));
          };
          _proto2.removePause = function removePause(position) {
            var child = this._first;
            position = _parsePosition3(this, position);
            while (child) {
              if (child._start === position && child.data === "isPause") {
                _removeFromParent(child);
              }
              child = child._next;
            }
          };
          _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
            var tweens = this.getTweensOf(targets, onlyActive), i2 = tweens.length;
            while (i2--) {
              _overwritingTween !== tweens[i2] && tweens[i2].kill(targets, props);
            }
            return this;
          };
          _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
            var a2 = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber3(onlyActive), children;
            while (child) {
              if (child instanceof Tween) {
                if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
                  a2.push(child);
                }
              } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
                a2.push.apply(a2, children);
              }
              child = child._next;
            }
            return a2;
          };
          _proto2.tweenTo = function tweenTo(position, vars) {
            vars = vars || {};
            var tl = this, endTime = _parsePosition3(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults3({
              ease: vars.ease || "none",
              lazy: false,
              immediateRender: false,
              time: endTime,
              overwrite: "auto",
              duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
              onStart: function onStart() {
                tl.pause();
                if (!initted) {
                  var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                  tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                  initted = 1;
                }
                _onStart && _onStart.apply(tween, onStartParams || []);
              }
            }, vars));
            return immediateRender ? tween.render(0) : tween;
          };
          _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
            return this.tweenTo(toPosition, _setDefaults3({
              startAt: {
                time: _parsePosition3(this, fromPosition)
              }
            }, vars));
          };
          _proto2.recent = function recent() {
            return this._recent;
          };
          _proto2.nextLabel = function nextLabel(afterTime) {
            if (afterTime === void 0) {
              afterTime = this._time;
            }
            return _getLabelInDirection(this, _parsePosition3(this, afterTime));
          };
          _proto2.previousLabel = function previousLabel(beforeTime) {
            if (beforeTime === void 0) {
              beforeTime = this._time;
            }
            return _getLabelInDirection(this, _parsePosition3(this, beforeTime), 1);
          };
          _proto2.currentLabel = function currentLabel(value) {
            return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
          };
          _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
            if (ignoreBeforeTime === void 0) {
              ignoreBeforeTime = 0;
            }
            var child = this._first, labels = this.labels, p2;
            while (child) {
              if (child._start >= ignoreBeforeTime) {
                child._start += amount;
                child._end += amount;
              }
              child = child._next;
            }
            if (adjustLabels) {
              for (p2 in labels) {
                if (labels[p2] >= ignoreBeforeTime) {
                  labels[p2] += amount;
                }
              }
            }
            return _uncache(this);
          };
          _proto2.invalidate = function invalidate(soft) {
            var child = this._first;
            this._lock = 0;
            while (child) {
              child.invalidate(soft);
              child = child._next;
            }
            return _Animation.prototype.invalidate.call(this, soft);
          };
          _proto2.clear = function clear(includeLabels) {
            if (includeLabels === void 0) {
              includeLabels = true;
            }
            var child = this._first, next;
            while (child) {
              next = child._next;
              this.remove(child);
              child = next;
            }
            this._dp && (this._time = this._tTime = this._pTime = 0);
            includeLabels && (this.labels = {});
            return _uncache(this);
          };
          _proto2.totalDuration = function totalDuration(value) {
            var max = 0, self2 = this, child = self2._last, prevStart = _bigNum, prev, start, parent;
            if (arguments.length) {
              return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value : value));
            }
            if (self2._dirty) {
              parent = self2.parent;
              while (child) {
                prev = child._prev;
                child._dirty && child.totalDuration();
                start = child._start;
                if (start > prevStart && self2._sort && child._ts && !self2._lock) {
                  self2._lock = 1;
                  _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
                } else {
                  prevStart = start;
                }
                if (start < 0 && child._ts) {
                  max -= start;
                  if (!parent && !self2._dp || parent && parent.smoothChildTiming) {
                    self2._start += start / self2._ts;
                    self2._time -= start;
                    self2._tTime -= start;
                  }
                  self2.shiftChildren(-start, false, -Infinity);
                  prevStart = 0;
                }
                child._end > max && child._ts && (max = child._end);
                child = prev;
              }
              _setDuration(self2, self2 === _globalTimeline && self2._time > max ? self2._time : max, 1, 1);
              self2._dirty = 0;
            }
            return self2._tDur;
          };
          Timeline2.updateRoot = function updateRoot(time) {
            if (_globalTimeline._ts) {
              _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
              _lastRenderedFrame = _ticker.frame;
            }
            if (_ticker.frame >= _nextGCFrame) {
              _nextGCFrame += _config.autoSleep || 120;
              var child = _globalTimeline._first;
              if (!child || !child._ts) {
                if (_config.autoSleep && _ticker._listeners.length < 2) {
                  while (child && !child._ts) {
                    child = child._next;
                  }
                  child || _ticker.sleep();
                }
              }
            }
          };
          return Timeline2;
        }(Animation);
        _setDefaults3(Timeline.prototype, {
          _lock: 0,
          _hasPause: 0,
          _forcing: 0
        });
        var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
          var pt2 = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a2;
          pt2.b = start;
          pt2.e = end;
          start += "";
          end += "";
          if (hasRandom = ~end.indexOf("random(")) {
            end = _replaceRandom(end);
          }
          if (stringFilter) {
            a2 = [start, end];
            stringFilter(a2, target, prop);
            start = a2[0];
            end = a2[1];
          }
          startNums = start.match(_complexStringNumExp) || [];
          while (result = _complexStringNumExp.exec(end)) {
            endNum = result[0];
            chunk = end.substring(index, result.index);
            if (color) {
              color = (color + 1) % 5;
            } else if (chunk.substr(-5) === "rgba(") {
              color = 1;
            }
            if (endNum !== startNums[matchIndex++]) {
              startNum = parseFloat(startNums[matchIndex - 1]) || 0;
              pt2._pt = {
                _next: pt2._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                s: startNum,
                c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
                m: color && color < 4 ? Math.round : 0
              };
              index = _complexStringNumExp.lastIndex;
            }
          }
          pt2.c = index < end.length ? end.substring(index, end.length) : "";
          pt2.fp = funcParam;
          if (_relExp.test(end) || hasRandom) {
            pt2.e = 0;
          }
          this._pt = pt2;
          return pt2;
        }, _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
          _isFunction3(end) && (end = end(index || 0, target, targets));
          var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction3(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction3(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction3(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt2;
          if (_isString3(end)) {
            if (~end.indexOf("random(")) {
              end = _replaceRandom(end);
            }
            if (end.charAt(1) === "=") {
              pt2 = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
              if (pt2 || pt2 === 0) {
                end = pt2;
              }
            }
          }
          if (!optional || parsedStart !== end || _forceAllPropTweens) {
            if (!isNaN(parsedStart * end) && end !== "") {
              pt2 = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
              funcParam && (pt2.fp = funcParam);
              modifier && pt2.modifier(modifier, this, target);
              return this._pt = pt2;
            }
            !currentValue && !(prop in target) && _missingPlugin(prop, end);
            return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
          }
        }, _processVars = function _processVars2(vars, index, target, targets, tween) {
          _isFunction3(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
          if (!_isObject3(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
            return _isString3(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
          }
          var copy = {}, p2;
          for (p2 in vars) {
            copy[p2] = _parseFuncOrString(vars[p2], tween, index, target, targets);
          }
          return copy;
        }, _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
          var plugin, pt2, ptLookup, i2;
          if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
            tween._pt = pt2 = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
            if (tween !== _quickTween) {
              ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
              i2 = plugin._props.length;
              while (i2--) {
                ptLookup[plugin._props[i2]] = pt2;
              }
            }
          }
          return plugin;
        }, _overwritingTween, _forceAllPropTweens, _initTween = function _initTween2(tween, time, tTime) {
          var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites2, tl = tween.timeline, cleanVars, i2, p2, pt2, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
          tl && (!keyframes || !ease) && (ease = "none");
          tween._ease = _parseEase(ease, _defaults2.ease);
          tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults2.ease)) : 0;
          if (yoyoEase && tween._yoyo && !tween._repeat) {
            yoyoEase = tween._yEase;
            tween._yEase = tween._ease;
            tween._ease = yoyoEase;
          }
          tween._from = !tl && !!vars.runBackwards;
          if (!tl || keyframes && !vars.stagger) {
            harness = targets[0] ? _getCache(targets[0]).harness : 0;
            harnessVars = harness && vars[harness.prop];
            cleanVars = _copyExcluding(vars, _reservedProps);
            if (prevStartAt) {
              prevStartAt._zTime < 0 && prevStartAt.progress(1);
              time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
              prevStartAt._lazy = 0;
            }
            if (startAt) {
              _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults3({
                data: "isStart",
                overwrite: false,
                parent,
                immediateRender: true,
                lazy: !prevStartAt && _isNotFalse(lazy),
                startAt: null,
                delay: 0,
                onUpdate: onUpdate && function() {
                  return _callback3(tween, "onUpdate");
                },
                stagger: 0
              }, startAt)));
              tween._startAt._dp = 0;
              tween._startAt._sat = tween;
              time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
              if (immediateRender) {
                if (dur && time <= 0 && tTime <= 0) {
                  time && (tween._zTime = time);
                  return;
                }
              }
            } else if (runBackwards && dur) {
              if (!prevStartAt) {
                time && (immediateRender = false);
                p2 = _setDefaults3({
                  overwrite: false,
                  data: "isFromStart",
                  lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
                  immediateRender,
                  stagger: 0,
                  parent
                }, cleanVars);
                harnessVars && (p2[harness.prop] = harnessVars);
                _removeFromParent(tween._startAt = Tween.set(targets, p2));
                tween._startAt._dp = 0;
                tween._startAt._sat = tween;
                time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
                tween._zTime = time;
                if (!immediateRender) {
                  _initTween2(tween._startAt, _tinyNum, _tinyNum);
                } else if (!time) {
                  return;
                }
              }
            }
            tween._pt = tween._ptCache = 0;
            lazy = dur && _isNotFalse(lazy) || lazy && !dur;
            for (i2 = 0; i2 < targets.length; i2++) {
              target = targets[i2];
              gsData = target._gsap || _harness(targets)[i2]._gsap;
              tween._ptLookup[i2] = ptLookup = {};
              _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
              index = fullTargets === targets ? i2 : fullTargets.indexOf(target);
              if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                tween._pt = pt2 = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                plugin._props.forEach(function(name) {
                  ptLookup[name] = pt2;
                });
                plugin.priority && (hasPriority = 1);
              }
              if (!harness || harnessVars) {
                for (p2 in cleanVars) {
                  if (_plugins[p2] && (plugin = _checkPlugin(p2, cleanVars, tween, index, target, fullTargets))) {
                    plugin.priority && (hasPriority = 1);
                  } else {
                    ptLookup[p2] = pt2 = _addPropTween.call(tween, target, p2, "get", cleanVars[p2], index, fullTargets, 0, vars.stringFilter);
                  }
                }
              }
              tween._op && tween._op[i2] && tween.kill(target, tween._op[i2]);
              if (autoOverwrite && tween._pt) {
                _overwritingTween = tween;
                _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
                overwritten = !tween.parent;
                _overwritingTween = 0;
              }
              tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
            }
            hasPriority && _sortPropTweensByPriority(tween);
            tween._onInit && tween._onInit(tween);
          }
          tween._onUpdate = onUpdate;
          tween._initted = (!tween._op || tween._pt) && !overwritten;
          keyframes && time <= 0 && tl.render(_bigNum, true, true);
        }, _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
          var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt2, rootPT, lookup, i2;
          if (!ptCache) {
            ptCache = tween._ptCache[property] = [];
            lookup = tween._ptLookup;
            i2 = tween._targets.length;
            while (i2--) {
              pt2 = lookup[i2][property];
              if (pt2 && pt2.d && pt2.d._pt) {
                pt2 = pt2.d._pt;
                while (pt2 && pt2.p !== property && pt2.fp !== property) {
                  pt2 = pt2._next;
                }
              }
              if (!pt2) {
                _forceAllPropTweens = 1;
                tween.vars[property] = "+=0";
                _initTween(tween, time);
                _forceAllPropTweens = 0;
                return skipRecursion ? _warn(property + " not eligible for reset") : 1;
              }
              ptCache.push(pt2);
            }
          }
          i2 = ptCache.length;
          while (i2--) {
            rootPT = ptCache[i2];
            pt2 = rootPT._pt || rootPT;
            pt2.s = (start || start === 0) && !startIsRelative ? start : pt2.s + (start || 0) + ratio * pt2.c;
            pt2.c = value - pt2.s;
            rootPT.e && (rootPT.e = _round3(value) + getUnit(rootPT.e));
            rootPT.b && (rootPT.b = pt2.s + getUnit(rootPT.b));
          }
        }, _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
          var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p2, i2, aliases;
          if (!propertyAliases) {
            return vars;
          }
          copy = _merge({}, vars);
          for (p2 in propertyAliases) {
            if (p2 in copy) {
              aliases = propertyAliases[p2].split(",");
              i2 = aliases.length;
              while (i2--) {
                copy[aliases[i2]] = copy[p2];
              }
            }
          }
          return copy;
        }, _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
          var ease = obj.ease || easeEach || "power1.inOut", p2, a2;
          if (_isArray(obj)) {
            a2 = allProps[prop] || (allProps[prop] = []);
            obj.forEach(function(value, i2) {
              return a2.push({
                t: i2 / (obj.length - 1) * 100,
                v: value,
                e: ease
              });
            });
          } else {
            for (p2 in obj) {
              a2 = allProps[p2] || (allProps[p2] = []);
              p2 === "ease" || a2.push({
                t: parseFloat(prop),
                v: obj[p2],
                e: ease
              });
            }
          }
        }, _parseFuncOrString = function _parseFuncOrString2(value, tween, i2, target, targets) {
          return _isFunction3(value) ? value.call(tween, i2, target, targets) : _isString3(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
        }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", _staggerPropsToSkip = {};
        _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
          return _staggerPropsToSkip[name] = 1;
        });
        var Tween = function(_Animation2) {
          _inheritsLoose(Tween2, _Animation2);
          function Tween2(targets, vars, position, skipInherit) {
            var _this3;
            if (typeof vars === "number") {
              position.duration = vars;
              vars = position;
              position = null;
            }
            _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
            var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber3(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i2, copy, l2, p2, curTarget, staggerFunc, staggerVarsToMerge;
            _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
            _this3._ptLookup = [];
            _this3._overwrite = overwrite;
            if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
              vars = _this3.vars;
              tl = _this3.timeline = new Timeline({
                data: "nested",
                defaults: defaults || {},
                targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
              });
              tl.kill();
              tl.parent = tl._dp = _assertThisInitialized(_this3);
              tl._start = 0;
              if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                l2 = parsedTargets.length;
                staggerFunc = stagger && distribute(stagger);
                if (_isObject3(stagger)) {
                  for (p2 in stagger) {
                    if (~_staggerTweenProps.indexOf(p2)) {
                      staggerVarsToMerge || (staggerVarsToMerge = {});
                      staggerVarsToMerge[p2] = stagger[p2];
                    }
                  }
                }
                for (i2 = 0; i2 < l2; i2++) {
                  copy = _copyExcluding(vars, _staggerPropsToSkip);
                  copy.stagger = 0;
                  yoyoEase && (copy.yoyoEase = yoyoEase);
                  staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                  curTarget = parsedTargets[i2];
                  copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i2, curTarget, parsedTargets);
                  copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i2, curTarget, parsedTargets) || 0) - _this3._delay;
                  if (!stagger && l2 === 1 && copy.delay) {
                    _this3._delay = delay = copy.delay;
                    _this3._start += delay;
                    copy.delay = 0;
                  }
                  tl.to(curTarget, copy, staggerFunc ? staggerFunc(i2, curTarget, parsedTargets) : 0);
                  tl._ease = _easeMap.none;
                }
                tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
              } else if (keyframes) {
                _inheritDefaults(_setDefaults3(tl.vars.defaults, {
                  ease: "none"
                }));
                tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
                var time = 0, a2, kf, v2;
                if (_isArray(keyframes)) {
                  keyframes.forEach(function(frame) {
                    return tl.to(parsedTargets, frame, ">");
                  });
                  tl.duration();
                } else {
                  copy = {};
                  for (p2 in keyframes) {
                    p2 === "ease" || p2 === "easeEach" || _parseKeyframe(p2, keyframes[p2], copy, keyframes.easeEach);
                  }
                  for (p2 in copy) {
                    a2 = copy[p2].sort(function(a3, b2) {
                      return a3.t - b2.t;
                    });
                    time = 0;
                    for (i2 = 0; i2 < a2.length; i2++) {
                      kf = a2[i2];
                      v2 = {
                        ease: kf.e,
                        duration: (kf.t - (i2 ? a2[i2 - 1].t : 0)) / 100 * duration
                      };
                      v2[p2] = kf.v;
                      tl.to(parsedTargets, v2, time);
                      time += v2.duration;
                    }
                  }
                  tl.duration() < duration && tl.to({}, {
                    duration: duration - tl.duration()
                  });
                }
              }
              duration || _this3.duration(duration = tl.duration());
            } else {
              _this3.timeline = 0;
            }
            if (overwrite === true && !_suppressOverwrites2) {
              _overwritingTween = _assertThisInitialized(_this3);
              _globalTimeline.killTweensOf(parsedTargets);
              _overwritingTween = 0;
            }
            _addToTimeline(parent, _assertThisInitialized(_this3), position);
            vars.reversed && _this3.reverse();
            vars.paused && _this3.paused(true);
            if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
              _this3._tTime = -_tinyNum;
              _this3.render(Math.max(0, -delay) || 0);
            }
            scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
            return _this3;
          }
          var _proto3 = Tween2.prototype;
          _proto3.render = function render(totalTime, suppressEvents, force) {
            var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt2, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
            if (!dur) {
              _renderZeroDurationTween(this, totalTime, suppressEvents, force);
            } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
              time = tTime;
              timeline = this.timeline;
              if (this._repeat) {
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && isNegative) {
                  return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                }
                time = _roundPrecise(tTime % cycleDuration);
                if (tTime === tDur) {
                  iteration = this._repeat;
                  time = dur;
                } else {
                  iteration = ~~(tTime / cycleDuration);
                  if (iteration && iteration === _roundPrecise(tTime / cycleDuration)) {
                    time = dur;
                    iteration--;
                  }
                  time > dur && (time = dur);
                }
                isYoyo = this._yoyo && iteration & 1;
                if (isYoyo) {
                  yoyoEase = this._yEase;
                  time = dur - time;
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                if (time === prevTime && !force && this._initted && iteration === prevIteration) {
                  this._tTime = tTime;
                  return this;
                }
                if (iteration !== prevIteration) {
                  timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
                  if (this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted) {
                    this._lock = force = 1;
                    this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                  }
                }
              }
              if (!this._initted) {
                if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                  this._tTime = 0;
                  return this;
                }
                if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
                  return this;
                }
                if (dur !== this._dur) {
                  return this.render(totalTime, suppressEvents, force);
                }
              }
              this._tTime = tTime;
              this._time = time;
              if (!this._act && this._ts) {
                this._act = 1;
                this._lazy = 0;
              }
              this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
              if (this._from) {
                this.ratio = ratio = 1 - ratio;
              }
              if (time && !prevTime && !suppressEvents && !iteration) {
                _callback3(this, "onStart");
                if (this._tTime !== tTime) {
                  return this;
                }
              }
              pt2 = this._pt;
              while (pt2) {
                pt2.r(ratio, pt2.d);
                pt2 = pt2._next;
              }
              timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
              if (this._onUpdate && !suppressEvents) {
                isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
                _callback3(this, "onUpdate");
              }
              this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback3(this, "onRepeat");
              if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
                (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                  _callback3(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                  this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
              }
            }
            return this;
          };
          _proto3.targets = function targets() {
            return this._targets;
          };
          _proto3.invalidate = function invalidate(soft) {
            (!soft || !this.vars.runBackwards) && (this._startAt = 0);
            this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
            this._ptLookup = [];
            this.timeline && this.timeline.invalidate(soft);
            return _Animation2.prototype.invalidate.call(this, soft);
          };
          _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
            _tickerActive || _ticker.wake();
            this._ts || this.play();
            var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
            this._initted || _initTween(this, time);
            ratio = this._ease(time / this._dur);
            if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
              return this.resetTo(property, value, start, startIsRelative, 1);
            }
            _alignPlayhead(this, 0);
            this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
            return this.render(0);
          };
          _proto3.kill = function kill(targets, vars) {
            if (vars === void 0) {
              vars = "all";
            }
            if (!targets && (!vars || vars === "all")) {
              this._lazy = this._pt = 0;
              return this.parent ? _interrupt(this) : this;
            }
            if (this.timeline) {
              var tDur = this.timeline.totalDuration();
              this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
              this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
              return this;
            }
            var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p2, pt2, i2;
            if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
              vars === "all" && (this._pt = 0);
              return _interrupt(this);
            }
            overwrittenProps = this._op = this._op || [];
            if (vars !== "all") {
              if (_isString3(vars)) {
                p2 = {};
                _forEachName(vars, function(name) {
                  return p2[name] = 1;
                });
                vars = p2;
              }
              vars = _addAliasesToVars(parsedTargets, vars);
            }
            i2 = parsedTargets.length;
            while (i2--) {
              if (~killingTargets.indexOf(parsedTargets[i2])) {
                curLookup = propTweenLookup[i2];
                if (vars === "all") {
                  overwrittenProps[i2] = vars;
                  props = curLookup;
                  curOverwriteProps = {};
                } else {
                  curOverwriteProps = overwrittenProps[i2] = overwrittenProps[i2] || {};
                  props = vars;
                }
                for (p2 in props) {
                  pt2 = curLookup && curLookup[p2];
                  if (pt2) {
                    if (!("kill" in pt2.d) || pt2.d.kill(p2) === true) {
                      _removeLinkedListItem(this, pt2, "_pt");
                    }
                    delete curLookup[p2];
                  }
                  if (curOverwriteProps !== "all") {
                    curOverwriteProps[p2] = 1;
                  }
                }
              }
            }
            this._initted && !this._pt && firstPT && _interrupt(this);
            return this;
          };
          Tween2.to = function to(targets, vars) {
            return new Tween2(targets, vars, arguments[2]);
          };
          Tween2.from = function from(targets, vars) {
            return _createTweenType(1, arguments);
          };
          Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
            return new Tween2(callback, 0, {
              immediateRender: false,
              lazy: false,
              overwrite: false,
              delay,
              onComplete: callback,
              onReverseComplete: callback,
              onCompleteParams: params,
              onReverseCompleteParams: params,
              callbackScope: scope
            });
          };
          Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
            return _createTweenType(2, arguments);
          };
          Tween2.set = function set(targets, vars) {
            vars.duration = 0;
            vars.repeatDelay || (vars.repeat = 0);
            return new Tween2(targets, vars);
          };
          Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
            return _globalTimeline.killTweensOf(targets, props, onlyActive);
          };
          return Tween2;
        }(Animation);
        _setDefaults3(Tween.prototype, {
          _targets: [],
          _lazy: 0,
          _startAt: 0,
          _op: 0,
          _onInit: 0
        });
        _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
          Tween[name] = function() {
            var tl = new Timeline(), params = _slice.call(arguments, 0);
            params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
            return tl[name].apply(tl, params);
          };
        });
        var _setterPlain = function _setterPlain2(target, property, value) {
          return target[property] = value;
        }, _setterFunc = function _setterFunc2(target, property, value) {
          return target[property](value);
        }, _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
          return target[property](data.fp, value);
        }, _setterAttribute = function _setterAttribute2(target, property, value) {
          return target.setAttribute(property, value);
        }, _getSetter = function _getSetter2(target, property) {
          return _isFunction3(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
        }, _renderPlain = function _renderPlain2(ratio, data) {
          return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
        }, _renderBoolean = function _renderBoolean2(ratio, data) {
          return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
        }, _renderComplexString = function _renderComplexString2(ratio, data) {
          var pt2 = data._pt, s2 = "";
          if (!ratio && data.b) {
            s2 = data.b;
          } else if (ratio === 1 && data.e) {
            s2 = data.e;
          } else {
            while (pt2) {
              s2 = pt2.p + (pt2.m ? pt2.m(pt2.s + pt2.c * ratio) : Math.round((pt2.s + pt2.c * ratio) * 1e4) / 1e4) + s2;
              pt2 = pt2._next;
            }
            s2 += data.c;
          }
          data.set(data.t, data.p, s2, data);
        }, _renderPropTweens = function _renderPropTweens2(ratio, data) {
          var pt2 = data._pt;
          while (pt2) {
            pt2.r(ratio, pt2.d);
            pt2 = pt2._next;
          }
        }, _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
          var pt2 = this._pt, next;
          while (pt2) {
            next = pt2._next;
            pt2.p === property && pt2.modifier(modifier, tween, target);
            pt2 = next;
          }
        }, _killPropTweensOf = function _killPropTweensOf2(property) {
          var pt2 = this._pt, hasNonDependentRemaining, next;
          while (pt2) {
            next = pt2._next;
            if (pt2.p === property && !pt2.op || pt2.op === property) {
              _removeLinkedListItem(this, pt2, "_pt");
            } else if (!pt2.dep) {
              hasNonDependentRemaining = 1;
            }
            pt2 = next;
          }
          return !hasNonDependentRemaining;
        }, _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
          data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
        }, _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
          var pt2 = parent._pt, next, pt22, first, last;
          while (pt2) {
            next = pt2._next;
            pt22 = first;
            while (pt22 && pt22.pr > pt2.pr) {
              pt22 = pt22._next;
            }
            if (pt2._prev = pt22 ? pt22._prev : last) {
              pt2._prev._next = pt2;
            } else {
              first = pt2;
            }
            if (pt2._next = pt22) {
              pt22._prev = pt2;
            } else {
              last = pt2;
            }
            pt2 = next;
          }
          parent._pt = first;
        };
        var PropTween = function() {
          function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
            this.t = target;
            this.s = start;
            this.c = change;
            this.p = prop;
            this.r = renderer || _renderPlain;
            this.d = data || this;
            this.set = setter || _setterPlain;
            this.pr = priority || 0;
            this._next = next;
            if (next) {
              next._prev = this;
            }
          }
          var _proto4 = PropTween2.prototype;
          _proto4.modifier = function modifier(func, tween, target) {
            this.mSet = this.mSet || this.set;
            this.set = _setterWithModifier;
            this.m = func;
            this.mt = target;
            this.tween = tween;
          };
          return PropTween2;
        }();
        _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
          return _reservedProps[name] = 1;
        });
        _globals.TweenMax = _globals.TweenLite = Tween;
        _globals.TimelineLite = _globals.TimelineMax = Timeline;
        _globalTimeline = new Timeline({
          sortChildren: false,
          defaults: _defaults2,
          autoRemoveChildren: true,
          id: "root",
          smoothChildTiming: true
        });
        _config.stringFilter = _colorStringFilter;
        var _media = [], _listeners2 = {}, _emptyArray2 = [], _lastMediaTime = 0, _contextID = 0, _dispatch3 = function _dispatch4(type) {
          return (_listeners2[type] || _emptyArray2).map(function(f2) {
            return f2();
          });
        }, _onMediaChange = function _onMediaChange2() {
          var time = Date.now(), matches = [];
          if (time - _lastMediaTime > 2) {
            _dispatch3("matchMediaInit");
            _media.forEach(function(c2) {
              var queries = c2.queries, conditions = c2.conditions, match, p2, anyMatch, toggled;
              for (p2 in queries) {
                match = _win3.matchMedia(queries[p2]).matches;
                match && (anyMatch = 1);
                if (match !== conditions[p2]) {
                  conditions[p2] = match;
                  toggled = 1;
                }
              }
              if (toggled) {
                c2.revert();
                anyMatch && matches.push(c2);
              }
            });
            _dispatch3("matchMediaRevert");
            matches.forEach(function(c2) {
              return c2.onMatch(c2, function(func) {
                return c2.add(null, func);
              });
            });
            _lastMediaTime = time;
            _dispatch3("matchMedia");
          }
        };
        var Context = function() {
          function Context2(func, scope) {
            this.selector = scope && selector(scope);
            this.data = [];
            this._r = [];
            this.isReverted = false;
            this.id = _contextID++;
            func && this.add(func);
          }
          var _proto5 = Context2.prototype;
          _proto5.add = function add(name, func, scope) {
            if (_isFunction3(name)) {
              scope = func;
              func = name;
              name = _isFunction3;
            }
            var self2 = this, f2 = function f3() {
              var prev = _context3, prevSelector = self2.selector, result;
              prev && prev !== self2 && prev.data.push(self2);
              scope && (self2.selector = selector(scope));
              _context3 = self2;
              result = func.apply(self2, arguments);
              _isFunction3(result) && self2._r.push(result);
              _context3 = prev;
              self2.selector = prevSelector;
              self2.isReverted = false;
              return result;
            };
            self2.last = f2;
            return name === _isFunction3 ? f2(self2, function(func2) {
              return self2.add(null, func2);
            }) : name ? self2[name] = f2 : f2;
          };
          _proto5.ignore = function ignore(func) {
            var prev = _context3;
            _context3 = null;
            func(this);
            _context3 = prev;
          };
          _proto5.getTweens = function getTweens() {
            var a2 = [];
            this.data.forEach(function(e6) {
              return e6 instanceof Context2 ? a2.push.apply(a2, e6.getTweens()) : e6 instanceof Tween && !(e6.parent && e6.parent.data === "nested") && a2.push(e6);
            });
            return a2;
          };
          _proto5.clear = function clear() {
            this._r.length = this.data.length = 0;
          };
          _proto5.kill = function kill(revert, matchMedia) {
            var _this4 = this;
            if (revert) {
              (function() {
                var tweens = _this4.getTweens(), i3 = _this4.data.length, t2;
                while (i3--) {
                  t2 = _this4.data[i3];
                  if (t2.data === "isFlip") {
                    t2.revert();
                    t2.getChildren(true, true, false).forEach(function(tween) {
                      return tweens.splice(tweens.indexOf(tween), 1);
                    });
                  }
                }
                tweens.map(function(t3) {
                  return {
                    g: t3._dur || t3._delay || t3._sat && !t3._sat.vars.immediateRender ? t3.globalTime(0) : -Infinity,
                    t: t3
                  };
                }).sort(function(a2, b2) {
                  return b2.g - a2.g || -Infinity;
                }).forEach(function(o2) {
                  return o2.t.revert(revert);
                });
                i3 = _this4.data.length;
                while (i3--) {
                  t2 = _this4.data[i3];
                  if (t2 instanceof Timeline) {
                    if (t2.data !== "nested") {
                      t2.scrollTrigger && t2.scrollTrigger.revert();
                      t2.kill();
                    }
                  } else {
                    !(t2 instanceof Tween) && t2.revert && t2.revert(revert);
                  }
                }
                _this4._r.forEach(function(f2) {
                  return f2(revert, _this4);
                });
                _this4.isReverted = true;
              })();
            } else {
              this.data.forEach(function(e6) {
                return e6.kill && e6.kill();
              });
            }
            this.clear();
            if (matchMedia) {
              var i2 = _media.length;
              while (i2--) {
                _media[i2].id === this.id && _media.splice(i2, 1);
              }
            }
          };
          _proto5.revert = function revert(config) {
            this.kill(config || {});
          };
          return Context2;
        }();
        var MatchMedia = function() {
          function MatchMedia2(scope) {
            this.contexts = [];
            this.scope = scope;
            _context3 && _context3.data.push(this);
          }
          var _proto6 = MatchMedia2.prototype;
          _proto6.add = function add(conditions, func, scope) {
            _isObject3(conditions) || (conditions = {
              matches: conditions
            });
            var context = new Context(0, scope || this.scope), cond = context.conditions = {}, mq, p2, active;
            _context3 && !context.selector && (context.selector = _context3.selector);
            this.contexts.push(context);
            func = context.add("onMatch", func);
            context.queries = conditions;
            for (p2 in conditions) {
              if (p2 === "all") {
                active = 1;
              } else {
                mq = _win3.matchMedia(conditions[p2]);
                if (mq) {
                  _media.indexOf(context) < 0 && _media.push(context);
                  (cond[p2] = mq.matches) && (active = 1);
                  mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
                }
              }
            }
            active && func(context, function(f2) {
              return context.add(null, f2);
            });
            return this;
          };
          _proto6.revert = function revert(config) {
            this.kill(config || {});
          };
          _proto6.kill = function kill(revert) {
            this.contexts.forEach(function(c2) {
              return c2.kill(revert, true);
            });
          };
          return MatchMedia2;
        }();
        var _gsap = {
          registerPlugin: function registerPlugin() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            args.forEach(function(config) {
              return _createPlugin(config);
            });
          },
          timeline: function timeline(vars) {
            return new Timeline(vars);
          },
          getTweensOf: function getTweensOf(targets, onlyActive) {
            return _globalTimeline.getTweensOf(targets, onlyActive);
          },
          getProperty: function getProperty(target, property, unit, uncache) {
            _isString3(target) && (target = toArray(target)[0]);
            var getter = _getCache(target || {}).get, format = unit ? _passThrough3 : _numericIfPossible;
            unit === "native" && (unit = "");
            return !target ? target : !property ? function(property2, unit2, uncache2) {
              return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
            } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
          },
          quickSetter: function quickSetter(target, property, unit) {
            target = toArray(target);
            if (target.length > 1) {
              var setters = target.map(function(t2) {
                return gsap4.quickSetter(t2, property, unit);
              }), l2 = setters.length;
              return function(value) {
                var i2 = l2;
                while (i2--) {
                  setters[i2](value);
                }
              };
            }
            target = target[0] || {};
            var Plugin = _plugins[property], cache = _getCache(target), p2 = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
              var p3 = new Plugin();
              _quickTween._pt = 0;
              p3.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
              p3.render(1, p3);
              _quickTween._pt && _renderPropTweens(1, _quickTween);
            } : cache.set(target, p2);
            return Plugin ? setter : function(value) {
              return setter(target, p2, unit ? value + unit : value, cache, 1);
            };
          },
          quickTo: function quickTo(target, property, vars) {
            var _merge2;
            var tween = gsap4.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})), func = function func2(value, start, startIsRelative) {
              return tween.resetTo(property, value, start, startIsRelative);
            };
            func.tween = tween;
            return func;
          },
          isTweening: function isTweening(targets) {
            return _globalTimeline.getTweensOf(targets, true).length > 0;
          },
          defaults: function defaults(value) {
            value && value.ease && (value.ease = _parseEase(value.ease, _defaults2.ease));
            return _mergeDeep(_defaults2, value || {});
          },
          config: function config(value) {
            return _mergeDeep(_config, value || {});
          },
          registerEffect: function registerEffect(_ref3) {
            var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
            (plugins || "").split(",").forEach(function(pluginName) {
              return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
            });
            _effects[name] = function(targets, vars, tl) {
              return effect(toArray(targets), _setDefaults3(vars || {}, defaults), tl);
            };
            if (extendTimeline) {
              Timeline.prototype[name] = function(targets, vars, position) {
                return this.add(_effects[name](targets, _isObject3(vars) ? vars : (position = vars) && {}, this), position);
              };
            }
          },
          registerEase: function registerEase(name, ease) {
            _easeMap[name] = _parseEase(ease);
          },
          parseEase: function parseEase(ease, defaultEase) {
            return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
          },
          getById: function getById(id) {
            return _globalTimeline.getById(id);
          },
          exportRoot: function exportRoot(vars, includeDelayedCalls) {
            if (vars === void 0) {
              vars = {};
            }
            var tl = new Timeline(vars), child, next;
            tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
            _globalTimeline.remove(tl);
            tl._dp = 0;
            tl._time = tl._tTime = _globalTimeline._time;
            child = _globalTimeline._first;
            while (child) {
              next = child._next;
              if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
                _addToTimeline(tl, child, child._start - child._delay);
              }
              child = next;
            }
            _addToTimeline(_globalTimeline, tl, 0);
            return tl;
          },
          context: function context(func, scope) {
            return func ? new Context(func, scope) : _context3;
          },
          matchMedia: function matchMedia(scope) {
            return new MatchMedia(scope);
          },
          matchMediaRefresh: function matchMediaRefresh() {
            return _media.forEach(function(c2) {
              var cond = c2.conditions, found, p2;
              for (p2 in cond) {
                if (cond[p2]) {
                  cond[p2] = false;
                  found = 1;
                }
              }
              found && c2.revert();
            }) || _onMediaChange();
          },
          addEventListener: function addEventListener(type, callback) {
            var a2 = _listeners2[type] || (_listeners2[type] = []);
            ~a2.indexOf(callback) || a2.push(callback);
          },
          removeEventListener: function removeEventListener(type, callback) {
            var a2 = _listeners2[type], i2 = a2 && a2.indexOf(callback);
            i2 >= 0 && a2.splice(i2, 1);
          },
          utils: {
            wrap,
            wrapYoyo,
            distribute,
            random,
            snap,
            normalize,
            getUnit,
            clamp,
            splitColor,
            toArray,
            selector,
            mapRange,
            pipe,
            unitize,
            interpolate,
            shuffle
          },
          install: _install,
          effects: _effects,
          ticker: _ticker,
          updateRoot: Timeline.updateRoot,
          plugins: _plugins,
          globalTimeline: _globalTimeline,
          core: {
            PropTween,
            globals: _addGlobal,
            Tween,
            Timeline,
            Animation,
            getCache: _getCache,
            _removeLinkedListItem,
            reverting: function reverting() {
              return _reverting;
            },
            context: function context(toAdd) {
              if (toAdd && _context3) {
                _context3.data.push(toAdd);
                toAdd._ctx = _context3;
              }
              return _context3;
            },
            suppressOverwrites: function suppressOverwrites(value) {
              return _suppressOverwrites2 = value;
            }
          }
        };
        _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
          return _gsap[name] = Tween[name];
        });
        _ticker.add(Timeline.updateRoot);
        _quickTween = _gsap.to({}, {
          duration: 0
        });
        var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
          var pt2 = plugin._pt;
          while (pt2 && pt2.p !== prop && pt2.op !== prop && pt2.fp !== prop) {
            pt2 = pt2._next;
          }
          return pt2;
        }, _addModifiers = function _addModifiers2(tween, modifiers) {
          var targets = tween._targets, p2, i2, pt2;
          for (p2 in modifiers) {
            i2 = targets.length;
            while (i2--) {
              pt2 = tween._ptLookup[i2][p2];
              if (pt2 && (pt2 = pt2.d)) {
                if (pt2._pt) {
                  pt2 = _getPluginPropTween(pt2, p2);
                }
                pt2 && pt2.modifier && pt2.modifier(modifiers[p2], tween, targets[i2], p2);
              }
            }
          }
        }, _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
          return {
            name,
            rawVars: 1,
            init: function init(target, vars, tween) {
              tween._onInit = function(tween2) {
                var temp, p2;
                if (_isString3(vars)) {
                  temp = {};
                  _forEachName(vars, function(name2) {
                    return temp[name2] = 1;
                  });
                  vars = temp;
                }
                if (modifier) {
                  temp = {};
                  for (p2 in vars) {
                    temp[p2] = modifier(vars[p2]);
                  }
                  vars = temp;
                }
                _addModifiers(tween2, vars);
              };
            }
          };
        };
        var gsap4 = _gsap.registerPlugin({
          name: "attr",
          init: function init(target, vars, tween, index, targets) {
            var p2, pt2, v2;
            this.tween = tween;
            for (p2 in vars) {
              v2 = target.getAttribute(p2) || "";
              pt2 = this.add(target, "setAttribute", (v2 || 0) + "", vars[p2], index, targets, 0, 0, p2);
              pt2.op = p2;
              pt2.b = v2;
              this._props.push(p2);
            }
          },
          render: function render(ratio, data) {
            var pt2 = data._pt;
            while (pt2) {
              _reverting ? pt2.set(pt2.t, pt2.p, pt2.b, pt2) : pt2.r(ratio, pt2.d);
              pt2 = pt2._next;
            }
          }
        }, {
          name: "endArray",
          init: function init(target, value) {
            var i2 = value.length;
            while (i2--) {
              this.add(target, i2, target[i2] || 0, value[i2], 0, 0, 0, 0, 0, 1);
            }
          }
        }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
        Tween.version = Timeline.version = gsap4.version = "3.12.5";
        _coreReady = 1;
        _windowExists3() && _wake();
        var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;
        var _win$1, _doc$1, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _reverting$1, _windowExists$1 = function _windowExists4() {
          return typeof window !== "undefined";
        }, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum$1 = 1e8, _capsExp2 = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        }, _renderCSSProp = function _renderCSSProp2(ratio, data) {
          return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
        }, _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
          return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
        }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
          return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
        }, _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
          var value = data.s + data.c * ratio;
          data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
        }, _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
          return data.set(data.t, data.p, ratio ? data.e : data.b, data);
        }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
          return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
        }, _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
          return target.style[property] = value;
        }, _setterCSSProp = function _setterCSSProp2(target, property, value) {
          return target.style.setProperty(property, value);
        }, _setterTransform = function _setterTransform2(target, property, value) {
          return target._gsap[property] = value;
        }, _setterScale = function _setterScale2(target, property, value) {
          return target._gsap.scaleX = target._gsap.scaleY = value;
        }, _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
          var cache = target._gsap;
          cache.scaleX = cache.scaleY = value;
          cache.renderTransform(ratio, cache);
        }, _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
          var cache = target._gsap;
          cache[property] = value;
          cache.renderTransform(ratio, cache);
        }, _transformProp2 = "transform", _transformOriginProp = _transformProp2 + "Origin", _saveStyle = function _saveStyle2(property, isNotCSS) {
          var _this = this;
          var target = this.target, style = target.style, cache = target._gsap;
          if (property in _transformProps && style) {
            this.tfm = this.tfm || {};
            if (property !== "transform") {
              property = _propertyAliases[property] || property;
              ~property.indexOf(",") ? property.split(",").forEach(function(a2) {
                return _this.tfm[a2] = _get(target, a2);
              }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
              property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
            } else {
              return _propertyAliases.transform.split(",").forEach(function(p2) {
                return _saveStyle2.call(_this, p2, isNotCSS);
              });
            }
            if (this.props.indexOf(_transformProp2) >= 0) {
              return;
            }
            if (cache.svg) {
              this.svgo = target.getAttribute("data-svg-origin");
              this.props.push(_transformOriginProp, isNotCSS, "");
            }
            property = _transformProp2;
          }
          (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
        }, _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
          if (style.translate) {
            style.removeProperty("translate");
            style.removeProperty("scale");
            style.removeProperty("rotate");
          }
        }, _revertStyle = function _revertStyle2() {
          var props = this.props, target = this.target, style = target.style, cache = target._gsap, i2, p2;
          for (i2 = 0; i2 < props.length; i2 += 3) {
            props[i2 + 1] ? target[props[i2]] = props[i2 + 2] : props[i2 + 2] ? style[props[i2]] = props[i2 + 2] : style.removeProperty(props[i2].substr(0, 2) === "--" ? props[i2] : props[i2].replace(_capsExp2, "-$1").toLowerCase());
          }
          if (this.tfm) {
            for (p2 in this.tfm) {
              cache[p2] = this.tfm[p2];
            }
            if (cache.svg) {
              cache.renderTransform();
              target.setAttribute("data-svg-origin", this.svgo || "");
            }
            i2 = _reverting$1();
            if ((!i2 || !i2.isStart) && !style[_transformProp2]) {
              _removeIndependentTransforms(style);
              if (cache.zOrigin && style[_transformOriginProp]) {
                style[_transformOriginProp] += " " + cache.zOrigin + "px";
                cache.zOrigin = 0;
                cache.renderTransform();
              }
              cache.uncache = 1;
            }
          }
        }, _getStyleSaver = function _getStyleSaver2(target, properties) {
          var saver = {
            target,
            props: [],
            revert: _revertStyle,
            save: _saveStyle
          };
          target._gsap || gsap4.core.getCache(target);
          properties && properties.split(",").forEach(function(p2) {
            return saver.save(p2);
          });
          return saver;
        }, _supports3D, _createElement = function _createElement2(type, ns) {
          var e6 = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
          return e6 && e6.style ? e6 : _doc$1.createElement(type);
        }, _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
          var cs = getComputedStyle(target);
          return cs[property] || cs.getPropertyValue(property.replace(_capsExp2, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
        }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
          var e6 = element || _tempDiv, s2 = e6.style, i2 = 5;
          if (property in s2 && !preferPrefix) {
            return property;
          }
          property = property.charAt(0).toUpperCase() + property.substr(1);
          while (i2-- && !(_prefixes[i2] + property in s2)) {
          }
          return i2 < 0 ? null : (i2 === 3 ? "ms" : i2 >= 0 ? _prefixes[i2] : "") + property;
        }, _initCore3 = function _initCore4() {
          if (_windowExists$1() && window.document) {
            _win$1 = window;
            _doc$1 = _win$1.document;
            _docElement = _doc$1.documentElement;
            _tempDiv = _createElement("div") || {
              style: {}
            };
            _tempDivStyler = _createElement("div");
            _transformProp2 = _checkPropPrefix(_transformProp2);
            _transformOriginProp = _transformProp2 + "Origin";
            _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
            _supports3D = !!_checkPropPrefix("perspective");
            _reverting$1 = gsap4.core.reverting;
            _pluginInitted = 1;
          }
        }, _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
          var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
          _docElement.appendChild(svg);
          svg.appendChild(this);
          this.style.display = "block";
          if (swapIfPossible) {
            try {
              bbox = this.getBBox();
              this._gsapBBox = this.getBBox;
              this.getBBox = _getBBoxHack2;
            } catch (e6) {
            }
          } else if (this._gsapBBox) {
            bbox = this._gsapBBox();
          }
          if (oldParent) {
            if (oldSibling) {
              oldParent.insertBefore(this, oldSibling);
            } else {
              oldParent.appendChild(this);
            }
          }
          _docElement.removeChild(svg);
          this.style.cssText = oldCSS;
          return bbox;
        }, _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
          var i2 = attributesArray.length;
          while (i2--) {
            if (target.hasAttribute(attributesArray[i2])) {
              return target.getAttribute(attributesArray[i2]);
            }
          }
        }, _getBBox = function _getBBox2(target) {
          var bounds;
          try {
            bounds = target.getBBox();
          } catch (error) {
            bounds = _getBBoxHack.call(target, true);
          }
          bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
          return bounds && !bounds.width && !bounds.x && !bounds.y ? {
            x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
            y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          } : bounds;
        }, _isSVG = function _isSVG2(e6) {
          return !!(e6.getCTM && (!e6.parentNode || e6.ownerSVGElement) && _getBBox(e6));
        }, _removeProperty = function _removeProperty2(target, property) {
          if (property) {
            var style = target.style, first2Chars;
            if (property in _transformProps && property !== _transformOriginProp) {
              property = _transformProp2;
            }
            if (style.removeProperty) {
              first2Chars = property.substr(0, 2);
              if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
                property = "-" + property;
              }
              style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp2, "-$1").toLowerCase());
            } else {
              style.removeAttribute(property);
            }
          }
        }, _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
          var pt2 = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
          plugin._pt = pt2;
          pt2.b = beginning;
          pt2.e = end;
          plugin._props.push(property);
          return pt2;
        }, _nonConvertibleUnits = {
          deg: 1,
          rad: 1,
          turn: 1
        }, _nonStandardLayouts = {
          grid: 1,
          flex: 1
        }, _convertToUnit = function _convertToUnit2(target, property, value, unit) {
          var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
          if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
            return curValue;
          }
          curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
          isSVG = target.getCTM && _isSVG(target);
          if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
            px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
            return _round3(toPercent ? curValue / px * amount : curValue / 100 * px);
          }
          style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
          parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
          if (isSVG) {
            parent = (target.ownerSVGElement || {}).parentNode;
          }
          if (!parent || parent === _doc$1 || !parent.appendChild) {
            parent = _doc$1.body;
          }
          cache = parent._gsap;
          if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
            return _round3(curValue / cache.width * amount);
          } else {
            if (toPercent && (property === "height" || property === "width")) {
              var v2 = target.style[property];
              target.style[property] = amount + unit;
              px = target[measureProperty];
              v2 ? target.style[property] = v2 : _removeProperty(target, property);
            } else {
              (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
              parent === target && (style.position = "static");
              parent.appendChild(_tempDiv);
              px = _tempDiv[measureProperty];
              parent.removeChild(_tempDiv);
              style.position = "absolute";
            }
            if (horizontal && toPercent) {
              cache = _getCache(parent);
              cache.time = _ticker.time;
              cache.width = parent[measureProperty];
            }
          }
          return _round3(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
        }, _get = function _get2(target, property, unit, uncache) {
          var value;
          _pluginInitted || _initCore3();
          if (property in _propertyAliases && property !== "transform") {
            property = _propertyAliases[property];
            if (~property.indexOf(",")) {
              property = property.split(",")[0];
            }
          }
          if (_transformProps[property] && property !== "transform") {
            value = _parseTransform(target, uncache);
            value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
          } else {
            value = target.style[property];
            if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
              value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
            }
          }
          return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
        }, _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
          if (!start || start === "none") {
            var p2 = _checkPropPrefix(prop, target, 1), s2 = p2 && _getComputedProperty(target, p2, 1);
            if (s2 && s2 !== start) {
              prop = p2;
              start = s2;
            } else if (prop === "borderColor") {
              start = _getComputedProperty(target, "borderTopColor");
            }
          }
          var pt2 = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a2, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
          pt2.b = start;
          pt2.e = end;
          start += "";
          end += "";
          if (end === "auto") {
            startValue = target.style[prop];
            target.style[prop] = end;
            end = _getComputedProperty(target, prop) || end;
            startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
          }
          a2 = [start, end];
          _colorStringFilter(a2);
          start = a2[0];
          end = a2[1];
          startValues = start.match(_numWithUnitExp) || [];
          endValues = end.match(_numWithUnitExp) || [];
          if (endValues.length) {
            while (result = _numWithUnitExp.exec(end)) {
              endValue = result[0];
              chunk = end.substring(index, result.index);
              if (color) {
                color = (color + 1) % 5;
              } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
                color = 1;
              }
              if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                startNum = parseFloat(startValue) || 0;
                startUnit = startValue.substr((startNum + "").length);
                endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
                endNum = parseFloat(endValue);
                endUnit = endValue.substr((endNum + "").length);
                index = _numWithUnitExp.lastIndex - endUnit.length;
                if (!endUnit) {
                  endUnit = endUnit || _config.units[prop] || startUnit;
                  if (index === end.length) {
                    end += endUnit;
                    pt2.e += endUnit;
                  }
                }
                if (startUnit !== endUnit) {
                  startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                }
                pt2._pt = {
                  _next: pt2._pt,
                  p: chunk || matchIndex === 1 ? chunk : ",",
                  s: startNum,
                  c: endNum - startNum,
                  m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                };
              }
            }
            pt2.c = index < end.length ? end.substring(index, end.length) : "";
          } else {
            pt2.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
          }
          _relExp.test(end) && (pt2.e = 0);
          this._pt = pt2;
          return pt2;
        }, _keywordToPercent = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
          var split = value.split(" "), x2 = split[0], y2 = split[1] || "50%";
          if (x2 === "top" || x2 === "bottom" || y2 === "left" || y2 === "right") {
            value = x2;
            x2 = y2;
            y2 = value;
          }
          split[0] = _keywordToPercent[x2] || x2;
          split[1] = _keywordToPercent[y2] || y2;
          return split.join(" ");
        }, _renderClearProps = function _renderClearProps2(ratio, data) {
          if (data.tween && data.tween._time === data.tween._dur) {
            var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i2;
            if (props === "all" || props === true) {
              style.cssText = "";
              clearTransforms = 1;
            } else {
              props = props.split(",");
              i2 = props.length;
              while (--i2 > -1) {
                prop = props[i2];
                if (_transformProps[prop]) {
                  clearTransforms = 1;
                  prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp2;
                }
                _removeProperty(target, prop);
              }
            }
            if (clearTransforms) {
              _removeProperty(target, _transformProp2);
              if (cache) {
                cache.svg && target.removeAttribute("transform");
                _parseTransform(target, 1);
                cache.uncache = 1;
                _removeIndependentTransforms(style);
              }
            }
          }
        }, _specialProps = {
          clearProps: function clearProps(plugin, target, property, endValue, tween) {
            if (tween.data !== "isFromStart") {
              var pt2 = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
              pt2.u = endValue;
              pt2.pr = -10;
              pt2.tween = tween;
              plugin._props.push(property);
              return 1;
            }
          }
        }, _identity2DMatrix = [1, 0, 0, 1, 0, 0], _rotationalProperties = {}, _isNullTransform = function _isNullTransform2(value) {
          return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
        }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
          var matrixString = _getComputedProperty(target, _transformProp2);
          return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round3);
        }, _getMatrix = function _getMatrix2(target, force2D) {
          var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
          if (cache.svg && target.getAttribute("transform")) {
            temp = target.transform.baseVal.consolidate().matrix;
            matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
            return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
          } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
            temp = style.display;
            style.display = "block";
            parent = target.parentNode;
            if (!parent || !target.offsetParent) {
              addedToDOM = 1;
              nextSibling = target.nextElementSibling;
              _docElement.appendChild(target);
            }
            matrix = _getComputedTransformMatrixAsArray(target);
            temp ? style.display = temp : _removeProperty(target, "display");
            if (addedToDOM) {
              nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
            }
          }
          return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
        }, _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
          var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a2 = matrix[0], b2 = matrix[1], c2 = matrix[2], d2 = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x2, y2;
          if (!originIsAbsolute) {
            bounds = _getBBox(target);
            xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
            yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
          } else if (matrix !== _identity2DMatrix && (determinant = a2 * d2 - b2 * c2)) {
            x2 = xOrigin * (d2 / determinant) + yOrigin * (-c2 / determinant) + (c2 * ty - d2 * tx) / determinant;
            y2 = xOrigin * (-b2 / determinant) + yOrigin * (a2 / determinant) - (a2 * ty - b2 * tx) / determinant;
            xOrigin = x2;
            yOrigin = y2;
          }
          if (smooth || smooth !== false && cache.smooth) {
            tx = xOrigin - xOriginOld;
            ty = yOrigin - yOriginOld;
            cache.xOffset = xOffsetOld + (tx * a2 + ty * c2) - tx;
            cache.yOffset = yOffsetOld + (tx * b2 + ty * d2) - ty;
          } else {
            cache.xOffset = cache.yOffset = 0;
          }
          cache.xOrigin = xOrigin;
          cache.yOrigin = yOrigin;
          cache.smooth = !!smooth;
          cache.origin = origin;
          cache.originIsAbsolute = !!originIsAbsolute;
          target.style[_transformOriginProp] = "0px 0px";
          if (pluginToAddPropTweensTo) {
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
          }
          target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
        }, _parseTransform = function _parseTransform2(target, uncache) {
          var cache = target._gsap || new GSCache(target);
          if ("x" in cache && !uncache && !cache.uncache) {
            return cache;
          }
          var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x2, y2, z2, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a2, b2, c2, d2, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
          x2 = y2 = z2 = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
          scaleX = scaleY = 1;
          cache.svg = !!(target.getCTM && _isSVG(target));
          if (cs.translate) {
            if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
              style[_transformProp2] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp2] !== "none" ? cs[_transformProp2] : "");
            }
            style.scale = style.rotate = style.translate = "none";
          }
          matrix = _getMatrix(target, cache.svg);
          if (cache.svg) {
            if (cache.uncache) {
              t2 = target.getBBox();
              origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
              t1 = "";
            } else {
              t1 = !uncache && target.getAttribute("data-svg-origin");
            }
            _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
          }
          xOrigin = cache.xOrigin || 0;
          yOrigin = cache.yOrigin || 0;
          if (matrix !== _identity2DMatrix) {
            a2 = matrix[0];
            b2 = matrix[1];
            c2 = matrix[2];
            d2 = matrix[3];
            x2 = a12 = matrix[4];
            y2 = a22 = matrix[5];
            if (matrix.length === 6) {
              scaleX = Math.sqrt(a2 * a2 + b2 * b2);
              scaleY = Math.sqrt(d2 * d2 + c2 * c2);
              rotation = a2 || b2 ? _atan2(b2, a2) * _RAD2DEG : 0;
              skewX = c2 || d2 ? _atan2(c2, d2) * _RAD2DEG + rotation : 0;
              skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
              if (cache.svg) {
                x2 -= xOrigin - (xOrigin * a2 + yOrigin * c2);
                y2 -= yOrigin - (xOrigin * b2 + yOrigin * d2);
              }
            } else {
              a32 = matrix[6];
              a42 = matrix[7];
              a13 = matrix[8];
              a23 = matrix[9];
              a33 = matrix[10];
              a43 = matrix[11];
              x2 = matrix[12];
              y2 = matrix[13];
              z2 = matrix[14];
              angle = _atan2(a32, a33);
              rotationX = angle * _RAD2DEG;
              if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t2;
                a32 = t3;
              }
              angle = _atan2(-c2, a33);
              rotationY = angle * _RAD2DEG;
              if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a2 * cos - a13 * sin;
                t2 = b2 * cos - a23 * sin;
                t3 = c2 * cos - a33 * sin;
                a43 = d2 * sin + a43 * cos;
                a2 = t1;
                b2 = t2;
                c2 = t3;
              }
              angle = _atan2(b2, a2);
              rotation = angle * _RAD2DEG;
              if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a2 * cos + b2 * sin;
                t2 = a12 * cos + a22 * sin;
                b2 = b2 * cos - a2 * sin;
                a22 = a22 * cos - a12 * sin;
                a2 = t1;
                a12 = t2;
              }
              if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                rotationX = rotation = 0;
                rotationY = 180 - rotationY;
              }
              scaleX = _round3(Math.sqrt(a2 * a2 + b2 * b2 + c2 * c2));
              scaleY = _round3(Math.sqrt(a22 * a22 + a32 * a32));
              angle = _atan2(a12, a22);
              skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
              perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
            }
            if (cache.svg) {
              t1 = target.getAttribute("transform");
              cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp2));
              t1 && target.setAttribute("transform", t1);
            }
          }
          if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
            if (invertedScaleX) {
              scaleX *= -1;
              skewX += rotation <= 0 ? 180 : -180;
              rotation += rotation <= 0 ? 180 : -180;
            } else {
              scaleY *= -1;
              skewX += skewX <= 0 ? 180 : -180;
            }
          }
          uncache = uncache || cache.uncache;
          cache.x = x2 - ((cache.xPercent = x2 && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x2) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
          cache.y = y2 - ((cache.yPercent = y2 && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y2) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
          cache.z = z2 + px;
          cache.scaleX = _round3(scaleX);
          cache.scaleY = _round3(scaleY);
          cache.rotation = _round3(rotation) + deg;
          cache.rotationX = _round3(rotationX) + deg;
          cache.rotationY = _round3(rotationY) + deg;
          cache.skewX = skewX + deg;
          cache.skewY = skewY + deg;
          cache.transformPerspective = perspective + px;
          if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
            style[_transformOriginProp] = _firstTwoOnly(origin);
          }
          cache.xOffset = cache.yOffset = 0;
          cache.force3D = _config.force3D;
          cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
          cache.uncache = 0;
          return cache;
        }, _firstTwoOnly = function _firstTwoOnly2(value) {
          return (value = value.split(" "))[0] + " " + value[1];
        }, _addPxTranslate = function _addPxTranslate2(target, start, value) {
          var unit = getUnit(start);
          return _round3(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
        }, _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
          cache.z = "0px";
          cache.rotationY = cache.rotationX = "0deg";
          cache.force3D = 0;
          _renderCSSTransforms(ratio, cache);
        }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
          var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x2 = _ref.x, y2 = _ref.y, z2 = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
          if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
            var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
            angle = parseFloat(rotationX) * _DEG2RAD;
            cos = Math.cos(angle);
            x2 = _addPxTranslate(target, x2, a13 * cos * -zOrigin);
            y2 = _addPxTranslate(target, y2, -Math.sin(angle) * -zOrigin);
            z2 = _addPxTranslate(target, z2, a33 * cos * -zOrigin + zOrigin);
          }
          if (transformPerspective !== _zeroPx) {
            transforms += "perspective(" + transformPerspective + _endParenthesis;
          }
          if (xPercent || yPercent) {
            transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
          }
          if (use3D || x2 !== _zeroPx || y2 !== _zeroPx || z2 !== _zeroPx) {
            transforms += z2 !== _zeroPx || use3D ? "translate3d(" + x2 + ", " + y2 + ", " + z2 + ") " : "translate(" + x2 + ", " + y2 + _endParenthesis;
          }
          if (rotation !== _zeroDeg) {
            transforms += "rotate(" + rotation + _endParenthesis;
          }
          if (rotationY !== _zeroDeg) {
            transforms += "rotateY(" + rotationY + _endParenthesis;
          }
          if (rotationX !== _zeroDeg) {
            transforms += "rotateX(" + rotationX + _endParenthesis;
          }
          if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
            transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
          }
          if (scaleX !== 1 || scaleY !== 1) {
            transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
          }
          target.style[_transformProp2] = transforms || "translate(0, 0)";
        }, _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
          var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x2 = _ref2.x, y2 = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x2), ty = parseFloat(y2), a11, a21, a12, a22, temp;
          rotation = parseFloat(rotation);
          skewX = parseFloat(skewX);
          skewY = parseFloat(skewY);
          if (skewY) {
            skewY = parseFloat(skewY);
            skewX += skewY;
            rotation += skewY;
          }
          if (rotation || skewX) {
            rotation *= _DEG2RAD;
            skewX *= _DEG2RAD;
            a11 = Math.cos(rotation) * scaleX;
            a21 = Math.sin(rotation) * scaleX;
            a12 = Math.sin(rotation - skewX) * -scaleY;
            a22 = Math.cos(rotation - skewX) * scaleY;
            if (skewX) {
              skewY *= _DEG2RAD;
              temp = Math.tan(skewX - skewY);
              temp = Math.sqrt(1 + temp * temp);
              a12 *= temp;
              a22 *= temp;
              if (skewY) {
                temp = Math.tan(skewY);
                temp = Math.sqrt(1 + temp * temp);
                a11 *= temp;
                a21 *= temp;
              }
            }
            a11 = _round3(a11);
            a21 = _round3(a21);
            a12 = _round3(a12);
            a22 = _round3(a22);
          } else {
            a11 = scaleX;
            a22 = scaleY;
            a21 = a12 = 0;
          }
          if (tx && !~(x2 + "").indexOf("px") || ty && !~(y2 + "").indexOf("px")) {
            tx = _convertToUnit(target, "x", x2, "px");
            ty = _convertToUnit(target, "y", y2, "px");
          }
          if (xOrigin || yOrigin || xOffset || yOffset) {
            tx = _round3(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
            ty = _round3(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
          }
          if (xPercent || yPercent) {
            temp = target.getBBox();
            tx = _round3(tx + xPercent / 100 * temp.width);
            ty = _round3(ty + yPercent / 100 * temp.height);
          }
          temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
          target.setAttribute("transform", temp);
          forceCSS && (target.style[_transformProp2] = temp);
        }, _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
          var cap = 360, isString = _isString3(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt2;
          if (isString) {
            direction = endValue.split("_")[1];
            if (direction === "short") {
              change %= cap;
              if (change !== change % (cap / 2)) {
                change += change < 0 ? cap : -cap;
              }
            }
            if (direction === "cw" && change < 0) {
              change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
            } else if (direction === "ccw" && change > 0) {
              change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
            }
          }
          plugin._pt = pt2 = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
          pt2.e = finalValue;
          pt2.u = "deg";
          plugin._props.push(property);
          return pt2;
        }, _assign = function _assign2(target, source) {
          for (var p2 in source) {
            target[p2] = source[p2];
          }
          return target;
        }, _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
          var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p2, startValue, endValue, startNum, endNum, startUnit, endUnit;
          if (startCache.svg) {
            startValue = target.getAttribute("transform");
            target.setAttribute("transform", "");
            style[_transformProp2] = transforms;
            endCache = _parseTransform(target, 1);
            _removeProperty(target, _transformProp2);
            target.setAttribute("transform", startValue);
          } else {
            startValue = getComputedStyle(target)[_transformProp2];
            style[_transformProp2] = transforms;
            endCache = _parseTransform(target, 1);
            style[_transformProp2] = startValue;
          }
          for (p2 in _transformProps) {
            startValue = startCache[p2];
            endValue = endCache[p2];
            if (startValue !== endValue && exclude.indexOf(p2) < 0) {
              startUnit = getUnit(startValue);
              endUnit = getUnit(endValue);
              startNum = startUnit !== endUnit ? _convertToUnit(target, p2, startValue, endUnit) : parseFloat(startValue);
              endNum = parseFloat(endValue);
              plugin._pt = new PropTween(plugin._pt, endCache, p2, startNum, endNum - startNum, _renderCSSProp);
              plugin._pt.u = endUnit || 0;
              plugin._props.push(p2);
            }
          }
          _assign(endCache, startCache);
        };
        _forEachName("padding,margin,Width,Radius", function(name, index) {
          var t2 = "Top", r2 = "Right", b2 = "Bottom", l2 = "Left", props = (index < 3 ? [t2, r2, b2, l2] : [t2 + l2, t2 + r2, b2 + r2, b2 + l2]).map(function(side) {
            return index < 2 ? name + side : "border" + side + name;
          });
          _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
            var a2, vars;
            if (arguments.length < 4) {
              a2 = props.map(function(prop) {
                return _get(plugin, prop, property);
              });
              vars = a2.join(" ");
              return vars.split(a2[0]).length === 5 ? a2[0] : vars;
            }
            a2 = (endValue + "").split(" ");
            vars = {};
            props.forEach(function(prop, i2) {
              return vars[prop] = a2[i2] = a2[i2] || a2[(i2 - 1) / 2 | 0];
            });
            plugin.init(target, vars, tween);
          };
        });
        var CSSPlugin = {
          name: "css",
          register: _initCore3,
          targetTest: function targetTest(target) {
            return target.style && target.nodeType;
          },
          init: function init(target, vars, tween, index, targets) {
            var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p2, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
            _pluginInitted || _initCore3();
            this.styles = this.styles || _getStyleSaver(target);
            inlineProps = this.styles.props;
            this.tween = tween;
            for (p2 in vars) {
              if (p2 === "autoRound") {
                continue;
              }
              endValue = vars[p2];
              if (_plugins[p2] && _checkPlugin(p2, vars, tween, index, target, targets)) {
                continue;
              }
              type = typeof endValue;
              specialProp = _specialProps[p2];
              if (type === "function") {
                endValue = endValue.call(tween, index, target, targets);
                type = typeof endValue;
              }
              if (type === "string" && ~endValue.indexOf("random(")) {
                endValue = _replaceRandom(endValue);
              }
              if (specialProp) {
                specialProp(this, target, p2, endValue, tween) && (hasPriority = 1);
              } else if (p2.substr(0, 2) === "--") {
                startValue = (getComputedStyle(target).getPropertyValue(p2) + "").trim();
                endValue += "";
                _colorExp.lastIndex = 0;
                if (!_colorExp.test(startValue)) {
                  startUnit = getUnit(startValue);
                  endUnit = getUnit(endValue);
                }
                endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p2, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p2);
                props.push(p2);
                inlineProps.push(p2, 0, style[p2]);
              } else if (type !== "undefined") {
                if (startAt && p2 in startAt) {
                  startValue = typeof startAt[p2] === "function" ? startAt[p2].call(tween, index, target, targets) : startAt[p2];
                  _isString3(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
                  getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p2] || getUnit(_get(target, p2)) || "");
                  (startValue + "").charAt(1) === "=" && (startValue = _get(target, p2));
                } else {
                  startValue = _get(target, p2);
                }
                startNum = parseFloat(startValue);
                relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
                relative && (endValue = endValue.substr(2));
                endNum = parseFloat(endValue);
                if (p2 in _propertyAliases) {
                  if (p2 === "autoAlpha") {
                    if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                      startNum = 0;
                    }
                    inlineProps.push("visibility", 0, style.visibility);
                    _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                  }
                  if (p2 !== "scale" && p2 !== "transform") {
                    p2 = _propertyAliases[p2];
                    ~p2.indexOf(",") && (p2 = p2.split(",")[0]);
                  }
                }
                isTransformRelated = p2 in _transformProps;
                if (isTransformRelated) {
                  this.styles.save(p2);
                  if (!transformPropTween) {
                    cache = target._gsap;
                    cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                    smooth = vars.smoothOrigin !== false && cache.smooth;
                    transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp2, 0, 1, cache.renderTransform, cache, 0, -1);
                    transformPropTween.dep = 1;
                  }
                  if (p2 === "scale") {
                    this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
                    this._pt.u = 0;
                    props.push("scaleY", p2);
                    p2 += "X";
                  } else if (p2 === "transformOrigin") {
                    inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
                    endValue = _convertKeywordsToPercentages(endValue);
                    if (cache.svg) {
                      _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                    } else {
                      endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                      endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                      _addNonTweeningPT(this, style, p2, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                    }
                    continue;
                  } else if (p2 === "svgOrigin") {
                    _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                    continue;
                  } else if (p2 in _rotationalProperties) {
                    _addRotationalPropTween(this, cache, p2, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
                    continue;
                  } else if (p2 === "smoothOrigin") {
                    _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                    continue;
                  } else if (p2 === "force3D") {
                    cache[p2] = endValue;
                    continue;
                  } else if (p2 === "transform") {
                    _addRawTransformPTs(this, endValue, target);
                    continue;
                  }
                } else if (!(p2 in style)) {
                  p2 = _checkPropPrefix(p2) || p2;
                }
                if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p2 in style) {
                  startUnit = (startValue + "").substr((startNum + "").length);
                  endNum || (endNum = 0);
                  endUnit = getUnit(endValue) || (p2 in _config.units ? _config.units[p2] : startUnit);
                  startUnit !== endUnit && (startNum = _convertToUnit(target, p2, startValue, endUnit));
                  this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p2, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p2 === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                  this._pt.u = endUnit || 0;
                  if (startUnit !== endUnit && endUnit !== "%") {
                    this._pt.b = startValue;
                    this._pt.r = _renderCSSPropWithBeginning;
                  }
                } else if (!(p2 in style)) {
                  if (p2 in target) {
                    this.add(target, p2, startValue || target[p2], relative ? relative + endValue : endValue, index, targets);
                  } else if (p2 !== "parseTransform") {
                    _missingPlugin(p2, endValue);
                    continue;
                  }
                } else {
                  _tweenComplexCSSString.call(this, target, p2, startValue, relative ? relative + endValue : endValue);
                }
                isTransformRelated || (p2 in style ? inlineProps.push(p2, 0, style[p2]) : inlineProps.push(p2, 1, startValue || target[p2]));
                props.push(p2);
              }
            }
            hasPriority && _sortPropTweensByPriority(this);
          },
          render: function render(ratio, data) {
            if (data.tween._time || !_reverting$1()) {
              var pt2 = data._pt;
              while (pt2) {
                pt2.r(ratio, pt2.d);
                pt2 = pt2._next;
              }
            } else {
              data.styles.revert();
            }
          },
          get: _get,
          aliases: _propertyAliases,
          getSetter: function getSetter(target, property, plugin) {
            var p2 = _propertyAliases[property];
            p2 && p2.indexOf(",") < 0 && (property = p2);
            return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
          },
          core: {
            _removeProperty,
            _getMatrix
          }
        };
        gsap4.utils.checkPrefix = _checkPropPrefix;
        gsap4.core.getStyleSaver = _getStyleSaver;
        (function(positionAndScale, rotation, others, aliases) {
          var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
            _transformProps[name] = 1;
          });
          _forEachName(rotation, function(name) {
            _config.units[name] = "deg";
            _rotationalProperties[name] = 1;
          });
          _propertyAliases[all[13]] = positionAndScale + "," + rotation;
          _forEachName(aliases, function(name) {
            var split = name.split(":");
            _propertyAliases[split[1]] = all[split[0]];
          });
        })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
        _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
          _config.units[name] = "px";
        });
        gsap4.registerPlugin(CSSPlugin);
        var gsapWithCSS = gsap4.registerPlugin(CSSPlugin) || gsap4, TweenMaxWithCSS = gsapWithCSS.core.Tween;
        exports2.Back = Back;
        exports2.Bounce = Bounce;
        exports2.CSSPlugin = CSSPlugin;
        exports2.Circ = Circ;
        exports2.Cubic = Cubic;
        exports2.Elastic = Elastic;
        exports2.Expo = Expo;
        exports2.Linear = Linear;
        exports2.Power0 = Power0;
        exports2.Power1 = Power1;
        exports2.Power2 = Power2;
        exports2.Power3 = Power3;
        exports2.Power4 = Power4;
        exports2.Quad = Quad;
        exports2.Quart = Quart;
        exports2.Quint = Quint;
        exports2.Sine = Sine;
        exports2.SteppedEase = SteppedEase;
        exports2.Strong = Strong;
        exports2.TimelineLite = Timeline;
        exports2.TimelineMax = Timeline;
        exports2.TweenLite = Tween;
        exports2.TweenMax = TweenMaxWithCSS;
        exports2.default = gsapWithCSS;
        exports2.gsap = gsapWithCSS;
        if (typeof window === "undefined" || window !== exports2) {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          delete window.default;
        }
      });
    }
  });

  // src/page/home/index.js
  init_live_reload();
  var import_gsap = __toESM(require_gsap(), 1);

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/ScrollTrigger.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/Observer.js
  init_live_reload();
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var gsap;
  var _coreInitted;
  var _clamp;
  var _win;
  var _doc;
  var _docEl;
  var _body;
  var _isTouch;
  var _pointerType;
  var ScrollTrigger;
  var _root;
  var _normalizer;
  var _eventTypes;
  var _context;
  var _getGSAP = function _getGSAP2() {
    return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
  };
  var _startup = 1;
  var _observers = [];
  var _scrollers = [];
  var _proxies = [];
  var _getTime = Date.now;
  var _bridge = function _bridge2(name, value) {
    return value;
  };
  var _integrate = function _integrate2() {
    var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;
    _bridge = function _bridge3(name, value) {
      return data[name](value);
    };
  };
  var _getProxyProp = function _getProxyProp2(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  };
  var _isViewport = function _isViewport2(el) {
    return !!~_root.indexOf(el);
  };
  var _addListener = function _addListener2(element, type, func, passive, capture) {
    return element.addEventListener(type, func, {
      passive: passive !== false,
      capture: !!capture
    });
  };
  var _removeListener = function _removeListener2(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _scrollLeft = "scrollLeft";
  var _scrollTop = "scrollTop";
  var _onScroll = function _onScroll2() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
  };
  var _scrollCacheFunc = function _scrollCacheFunc2(f2, doNotCache) {
    var cachingFunc = function cachingFunc2(value) {
      if (value || value === 0) {
        _startup && (_win.history.scrollRestoration = "manual");
        var isNormalizing = _normalizer && _normalizer.isPressed;
        value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
        f2(value);
        cachingFunc2.cacheID = _scrollers.cache;
        isNormalizing && _bridge("ss", value);
      } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
        cachingFunc2.cacheID = _scrollers.cache;
        cachingFunc2.v = f2();
      }
      return cachingFunc2.v + cachingFunc2.offset;
    };
    cachingFunc.offset = 0;
    return f2 && cachingFunc;
  };
  var _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
    })
  };
  var _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
    })
  };
  var _getTarget = function _getTarget2(t2, self2) {
    return (self2 && self2._ctx && self2._ctx.selector || gsap.utils.toArray)(t2)[0] || (typeof t2 === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t2) : null);
  };
  var _getScrollFunc = function _getScrollFunc2(element, _ref) {
    var s2 = _ref.s, sc = _ref.sc;
    _isViewport(element) && (element = _doc.scrollingElement || _docEl);
    var i2 = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
    !~i2 && (i2 = _scrollers.push(element) - 1);
    _scrollers[i2 + offset] || _addListener(element, "scroll", _onScroll);
    var prev = _scrollers[i2 + offset], func = prev || (_scrollers[i2 + offset] = _scrollCacheFunc(_getProxyProp(element, s2), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
      return arguments.length ? element[s2] = value : element[s2];
    })));
    func.target = element;
    prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth");
    return func;
  };
  var _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
      var t3 = _getTime();
      if (force || t3 - t1 > min) {
        v2 = v1;
        v1 = value2;
        t2 = t1;
        t1 = t3;
      } else if (useDelta) {
        v1 += value2;
      } else {
        v1 = v2 + (value2 - v2) / (t3 - t2) * (t1 - t2);
      }
    }, reset = function reset2() {
      v2 = v1 = useDelta ? 0 : v1;
      t2 = t1 = 0;
    }, getVelocity = function getVelocity2(latestValue) {
      var tOld = t2, vOld = v2, t3 = _getTime();
      (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
      return t1 === t2 || t3 - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t3 : t1) - tOld) * 1e3;
    };
    return {
      update,
      reset,
      getVelocity
    };
  };
  var _getEvent = function _getEvent2(e6, preventDefault) {
    preventDefault && !e6._gsapAllow && e6.preventDefault();
    return e6.changedTouches ? e6.changedTouches[0] : e6;
  };
  var _getAbsoluteMax = function _getAbsoluteMax2(a2) {
    var max = Math.max.apply(Math, a2), min = Math.min.apply(Math, a2);
    return Math.abs(max) >= Math.abs(min) ? max : min;
  };
  var _setScrollTrigger = function _setScrollTrigger2() {
    ScrollTrigger = gsap.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
  };
  var _initCore = function _initCore2(core) {
    gsap = core || _getGSAP();
    if (!_coreInitted && gsap && typeof document !== "undefined" && document.body) {
      _win = window;
      _doc = document;
      _docEl = _doc.documentElement;
      _body = _doc.body;
      _root = [_win, _doc, _docEl, _body];
      _clamp = gsap.utils.clamp;
      _context = gsap.core.context || function() {
      };
      _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
      _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
      _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
      setTimeout(function() {
        return _startup = 0;
      }, 500);
      _setScrollTrigger();
      _coreInitted = 1;
    }
    return _coreInitted;
  };
  _horizontal.op = _vertical;
  _scrollers.cache = 0;
  var Observer = /* @__PURE__ */ function() {
    function Observer2(vars) {
      this.init(vars);
    }
    var _proto = Observer2.prototype;
    _proto.init = function init(vars) {
      _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
      ScrollTrigger || _setScrollTrigger();
      var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
      this.target = target = _getTarget(target) || _docEl;
      this.vars = vars;
      ignore && (ignore = gsap.utils.toArray(ignore));
      tolerance = tolerance || 1e-9;
      dragMinimum = dragMinimum || 0;
      wheelSpeed = wheelSpeed || 1;
      scrollSpeed = scrollSpeed || 1;
      type = type || "wheel,touch,pointer";
      debounce = debounce !== false;
      lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22);
      var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self2 = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
        return onClickTime = _getTime();
      }, _ignoreCheck = function _ignoreCheck2(e6, isPointerOrTouch) {
        return (self2.event = e6) && ignore && ~ignore.indexOf(e6.target) || isPointerOrTouch && limitToTouch && e6.pointerType !== "touch" || ignoreCheck && ignoreCheck(e6, isPointerOrTouch);
      }, onStopFunc = function onStopFunc2() {
        self2._vx.reset();
        self2._vy.reset();
        onStopDelayedCall.pause();
        onStop && onStop(self2);
      }, update = function update2() {
        var dx = self2.deltaX = _getAbsoluteMax(deltaX), dy = self2.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
        onChange && (changedX || changedY) && onChange(self2, dx, dy, deltaX, deltaY);
        if (changedX) {
          onRight && self2.deltaX > 0 && onRight(self2);
          onLeft && self2.deltaX < 0 && onLeft(self2);
          onChangeX && onChangeX(self2);
          onToggleX && self2.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self2);
          prevDeltaX = self2.deltaX;
          deltaX[0] = deltaX[1] = deltaX[2] = 0;
        }
        if (changedY) {
          onDown && self2.deltaY > 0 && onDown(self2);
          onUp && self2.deltaY < 0 && onUp(self2);
          onChangeY && onChangeY(self2);
          onToggleY && self2.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self2);
          prevDeltaY = self2.deltaY;
          deltaY[0] = deltaY[1] = deltaY[2] = 0;
        }
        if (moved || dragged) {
          onMove && onMove(self2);
          if (dragged) {
            onDrag(self2);
            dragged = false;
          }
          moved = false;
        }
        locked && !(locked = false) && onLockAxis && onLockAxis(self2);
        if (wheeled) {
          onWheel(self2);
          wheeled = false;
        }
        id = 0;
      }, onDelta = function onDelta2(x2, y2, index) {
        deltaX[index] += x2;
        deltaY[index] += y2;
        self2._vx.update(x2);
        self2._vy.update(y2);
        debounce ? id || (id = requestAnimationFrame(update)) : update();
      }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x2, y2) {
        if (lockAxis && !axis) {
          self2.axis = axis = Math.abs(x2) > Math.abs(y2) ? "x" : "y";
          locked = true;
        }
        if (axis !== "y") {
          deltaX[2] += x2;
          self2._vx.update(x2, true);
        }
        if (axis !== "x") {
          deltaY[2] += y2;
          self2._vy.update(y2, true);
        }
        debounce ? id || (id = requestAnimationFrame(update)) : update();
      }, _onDrag = function _onDrag2(e6) {
        if (_ignoreCheck(e6, 1)) {
          return;
        }
        e6 = _getEvent(e6, preventDefault);
        var x2 = e6.clientX, y2 = e6.clientY, dx = x2 - self2.x, dy = y2 - self2.y, isDragging = self2.isDragging;
        self2.x = x2;
        self2.y = y2;
        if (isDragging || Math.abs(self2.startX - x2) >= dragMinimum || Math.abs(self2.startY - y2) >= dragMinimum) {
          onDrag && (dragged = true);
          isDragging || (self2.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
          isDragging || onDragStart && onDragStart(self2);
        }
      }, _onPress = self2.onPress = function(e6) {
        if (_ignoreCheck(e6, 1) || e6 && e6.button) {
          return;
        }
        self2.axis = axis = null;
        onStopDelayedCall.pause();
        self2.isPressed = true;
        e6 = _getEvent(e6);
        prevDeltaX = prevDeltaY = 0;
        self2.startX = self2.x = e6.clientX;
        self2.startY = self2.y = e6.clientY;
        self2._vx.reset();
        self2._vy.reset();
        _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
        self2.deltaX = self2.deltaY = 0;
        onPress && onPress(self2);
      }, _onRelease = self2.onRelease = function(e6) {
        if (_ignoreCheck(e6, 1)) {
          return;
        }
        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        var isTrackingDrag = !isNaN(self2.y - self2.startY), wasDragging = self2.isDragging, isDragNotClick = wasDragging && (Math.abs(self2.x - self2.startX) > 3 || Math.abs(self2.y - self2.startY) > 3), eventData = _getEvent(e6);
        if (!isDragNotClick && isTrackingDrag) {
          self2._vx.reset();
          self2._vy.reset();
          if (preventDefault && allowClicks) {
            gsap.delayedCall(0.08, function() {
              if (_getTime() - onClickTime > 300 && !e6.defaultPrevented) {
                if (e6.target.click) {
                  e6.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e6.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }
        self2.isDragging = self2.isGesturing = self2.isPressed = false;
        onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
        onDragEnd && wasDragging && onDragEnd(self2);
        onRelease && onRelease(self2, isDragNotClick);
      }, _onGestureStart = function _onGestureStart2(e6) {
        return e6.touches && e6.touches.length > 1 && (self2.isGesturing = true) && onGestureStart(e6, self2.isDragging);
      }, _onGestureEnd = function _onGestureEnd2() {
        return (self2.isGesturing = false) || onGestureEnd(self2);
      }, onScroll = function onScroll2(e6) {
        if (_ignoreCheck(e6)) {
          return;
        }
        var x2 = scrollFuncX(), y2 = scrollFuncY();
        onDelta((x2 - scrollX) * scrollSpeed, (y2 - scrollY) * scrollSpeed, 1);
        scrollX = x2;
        scrollY = y2;
        onStop && onStopDelayedCall.restart(true);
      }, _onWheel = function _onWheel2(e6) {
        if (_ignoreCheck(e6)) {
          return;
        }
        e6 = _getEvent(e6, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e6.deltaMode === 1 ? lineHeight : e6.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
        onDelta(e6.deltaX * multiplier, e6.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      }, _onMove = function _onMove2(e6) {
        if (_ignoreCheck(e6)) {
          return;
        }
        var x2 = e6.clientX, y2 = e6.clientY, dx = x2 - self2.x, dy = y2 - self2.y;
        self2.x = x2;
        self2.y = y2;
        moved = true;
        onStop && onStopDelayedCall.restart(true);
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      }, _onHover = function _onHover2(e6) {
        self2.event = e6;
        onHover(self2);
      }, _onHoverEnd = function _onHoverEnd2(e6) {
        self2.event = e6;
        onHoverEnd(self2);
      }, _onClick = function _onClick2(e6) {
        return _ignoreCheck(e6) || _getEvent(e6, preventDefault) && onClick(self2);
      };
      onStopDelayedCall = self2._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
      self2.deltaX = self2.deltaY = 0;
      self2._vx = _getVelocityProp(0, 50, true);
      self2._vy = _getVelocityProp(0, 50, true);
      self2.scrollX = scrollFuncX;
      self2.scrollY = scrollFuncY;
      self2.isDragging = self2.isGesturing = self2.isPressed = false;
      _context(this);
      self2.enable = function(e6) {
        if (!self2.isEnabled) {
          _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
          type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
          if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
            _addListener(target, _eventTypes[0], _onPress, passive, capture);
            _addListener(ownerDoc, _eventTypes[2], _onRelease);
            _addListener(ownerDoc, _eventTypes[3], _onRelease);
            allowClicks && _addListener(target, "click", clickCapture, true, true);
            onClick && _addListener(target, "click", _onClick);
            onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
            onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
            onHover && _addListener(target, _pointerType + "enter", _onHover);
            onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
            onMove && _addListener(target, _pointerType + "move", _onMove);
          }
          self2.isEnabled = true;
          e6 && e6.type && _onPress(e6);
          onEnable && onEnable(self2);
        }
        return self2;
      };
      self2.disable = function() {
        if (self2.isEnabled) {
          _observers.filter(function(o2) {
            return o2 !== self2 && _isViewport(o2.target);
          }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          if (self2.isPressed) {
            self2._vx.reset();
            self2._vy.reset();
            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          }
          _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
          _removeListener(target, "wheel", _onWheel, capture);
          _removeListener(target, _eventTypes[0], _onPress, capture);
          _removeListener(ownerDoc, _eventTypes[2], _onRelease);
          _removeListener(ownerDoc, _eventTypes[3], _onRelease);
          _removeListener(target, "click", clickCapture, true);
          _removeListener(target, "click", _onClick);
          _removeListener(ownerDoc, "gesturestart", _onGestureStart);
          _removeListener(ownerDoc, "gestureend", _onGestureEnd);
          _removeListener(target, _pointerType + "enter", _onHover);
          _removeListener(target, _pointerType + "leave", _onHoverEnd);
          _removeListener(target, _pointerType + "move", _onMove);
          self2.isEnabled = self2.isPressed = self2.isDragging = false;
          onDisable && onDisable(self2);
        }
      };
      self2.kill = self2.revert = function() {
        self2.disable();
        var i2 = _observers.indexOf(self2);
        i2 >= 0 && _observers.splice(i2, 1);
        _normalizer === self2 && (_normalizer = 0);
      };
      _observers.push(self2);
      isNormalizer && _isViewport(target) && (_normalizer = self2);
      self2.enable(event);
    };
    _createClass(Observer2, [{
      key: "velocityX",
      get: function get() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get() {
        return this._vy.getVelocity();
      }
    }]);
    return Observer2;
  }();
  Observer.version = "3.12.5";
  Observer.create = function(vars) {
    return new Observer(vars);
  };
  Observer.register = _initCore;
  Observer.getAll = function() {
    return _observers.slice();
  };
  Observer.getById = function(id) {
    return _observers.filter(function(o2) {
      return o2.vars.id === id;
    })[0];
  };
  _getGSAP() && gsap.registerPlugin(Observer);

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/ScrollTrigger.js
  var gsap2;
  var _coreInitted2;
  var _win2;
  var _doc2;
  var _docEl2;
  var _body2;
  var _root2;
  var _resizeDelay;
  var _toArray;
  var _clamp2;
  var _time2;
  var _syncInterval;
  var _refreshing;
  var _pointerIsDown;
  var _transformProp;
  var _i;
  var _prevWidth;
  var _prevHeight;
  var _autoRefresh;
  var _sort;
  var _suppressOverwrites;
  var _ignoreResize;
  var _normalizer2;
  var _ignoreMobileResize;
  var _baseScreenHeight;
  var _baseScreenWidth;
  var _fixIOSBug;
  var _context2;
  var _scrollRestoration;
  var _div100vh;
  var _100vh;
  var _isReverted;
  var _clampingMax;
  var _limitCallbacks;
  var _startup2 = 1;
  var _getTime2 = Date.now;
  var _time1 = _getTime2();
  var _lastScrollTime = 0;
  var _enabled = 0;
  var _parseClamp = function _parseClamp2(value, type, self2) {
    var clamp = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
    self2["_" + type + "Clamp"] = clamp;
    return clamp ? value.substr(6, value.length - 7) : value;
  };
  var _keepClamp = function _keepClamp2(value, clamp) {
    return clamp && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
  };
  var _rafBugFix = function _rafBugFix2() {
    return _enabled && requestAnimationFrame(_rafBugFix2);
  };
  var _pointerDownHandler = function _pointerDownHandler2() {
    return _pointerIsDown = 1;
  };
  var _pointerUpHandler = function _pointerUpHandler2() {
    return _pointerIsDown = 0;
  };
  var _passThrough = function _passThrough2(v2) {
    return v2;
  };
  var _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _getGSAP3 = function _getGSAP4() {
    return gsap2 || _windowExists() && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
  };
  var _isViewport3 = function _isViewport4(e6) {
    return !!~_root2.indexOf(e6);
  };
  var _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
    return (dimensionProperty === "Height" ? _100vh : _win2["inner" + dimensionProperty]) || _docEl2["client" + dimensionProperty] || _body2["client" + dimensionProperty];
  };
  var _getBoundsFunc = function _getBoundsFunc2(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
      _winOffsets.width = _win2.innerWidth;
      _winOffsets.height = _100vh;
      return _winOffsets;
    } : function() {
      return _getBounds(element);
    });
  };
  var _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
    var d2 = _ref.d, d22 = _ref.d2, a2 = _ref.a;
    return (a2 = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
      return a2()[d2];
    } : function() {
      return (isViewport ? _getViewportDimension(d22) : scroller["client" + d22]) || 0;
    };
  };
  var _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
    return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
      return _winOffsets;
    };
  };
  var _maxScroll = function _maxScroll2(element, _ref2) {
    var s2 = _ref2.s, d2 = _ref2.d2, d3 = _ref2.d, a2 = _ref2.a;
    return Math.max(0, (s2 = "scroll" + d2) && (a2 = _getProxyProp(element, s2)) ? a2() - _getBoundsFunc(element)()[d3] : _isViewport3(element) ? (_docEl2[s2] || _body2[s2]) - _getViewportDimension(d2) : element[s2] - element["offset" + d2]);
  };
  var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
    for (var i2 = 0; i2 < _autoRefresh.length; i2 += 3) {
      (!events || ~events.indexOf(_autoRefresh[i2 + 1])) && func(_autoRefresh[i2], _autoRefresh[i2 + 1], _autoRefresh[i2 + 2]);
    }
  };
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _endAnimation = function _endAnimation2(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  };
  var _callback = function _callback2(self2, func) {
    if (self2.enabled) {
      var result = self2._ctx ? self2._ctx.add(function() {
        return func(self2);
      }) : func(self2);
      result && result.totalTime && (self2.callbackAnimation = result);
    }
  };
  var _abs = Math.abs;
  var _left = "left";
  var _top = "top";
  var _right = "right";
  var _bottom = "bottom";
  var _width = "width";
  var _height = "height";
  var _Right = "Right";
  var _Left = "Left";
  var _Top = "Top";
  var _Bottom = "Bottom";
  var _padding = "padding";
  var _margin = "margin";
  var _Width = "Width";
  var _Height = "Height";
  var _px = "px";
  var _getComputedStyle = function _getComputedStyle2(element) {
    return _win2.getComputedStyle(element);
  };
  var _makePositionable = function _makePositionable2(element) {
    var position = _getComputedStyle(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
  };
  var _setDefaults = function _setDefaults2(obj, defaults) {
    for (var p2 in defaults) {
      p2 in obj || (obj[p2] = defaults[p2]);
    }
    return obj;
  };
  var _getBounds = function _getBounds2(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap2.to(element, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  };
  var _getSize = function _getSize2(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  };
  var _getLabelRatioArray = function _getLabelRatioArray2(timeline) {
    var a2 = [], labels = timeline.labels, duration = timeline.duration(), p2;
    for (p2 in labels) {
      a2.push(labels[p2] / duration);
    }
    return a2;
  };
  var _getClosestLabel = function _getClosestLabel2(animation) {
    return function(value) {
      return gsap2.utils.snap(_getLabelRatioArray(animation), value);
    };
  };
  var _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
    var snap = gsap2.utils.snap(snapIncrementOrArray), a2 = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a3, b2) {
      return a3 - b2;
    });
    return a2 ? function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var i2;
      if (!direction) {
        return snap(value);
      }
      if (direction > 0) {
        value -= threshold;
        for (i2 = 0; i2 < a2.length; i2++) {
          if (a2[i2] >= value) {
            return a2[i2];
          }
        }
        return a2[i2 - 1];
      } else {
        i2 = a2.length;
        value += threshold;
        while (i2--) {
          if (a2[i2] <= value) {
            return a2[i2];
          }
        }
      }
      return a2[0];
    } : function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var snapped = snap(value);
      return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
  };
  var _getLabelAtDirection = function _getLabelAtDirection2(timeline) {
    return function(value, st2) {
      return _snapDirectional(_getLabelRatioArray(timeline))(value, st2.direction);
    };
  };
  var _multiListener = function _multiListener2(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
      return func(element, type, callback);
    });
  };
  var _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  };
  var _removeListener3 = function _removeListener4(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _wheelListener = function _wheelListener2(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;
    if (scrollFunc) {
      func(el, "wheel", scrollFunc);
      func(el, "touchmove", scrollFunc);
    }
  };
  var _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  };
  var _defaults = {
    toggleActions: "play",
    anticipatePin: 0
  };
  var _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  };
  var _offsetToPx = function _offsetToPx2(value, size) {
    if (_isString(value)) {
      var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }
      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
  };
  var _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e6 = _doc2.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body2 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e6._isStart = isStart;
    e6.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e6.style.cssText = css;
    e6.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e6, parent.children[0]) : parent.appendChild(e6);
    e6._offset = e6["offset" + direction.op.d2];
    _positionMarker(e6, 0, direction, isStart);
    return e6;
  };
  var _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap2.set(marker, vars);
  };
  var _triggers = [];
  var _ids = {};
  var _rafID;
  var _sync = function _sync2() {
    return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
  };
  var _onScroll3 = function _onScroll4() {
    if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body2.clientWidth) {
      _scrollers.cache++;
      if (_normalizer2) {
        _rafID || (_rafID = requestAnimationFrame(_updateAll));
      } else {
        _updateAll();
      }
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime2();
    }
  };
  var _setBaseDimensions = function _setBaseDimensions2() {
    _baseScreenWidth = _win2.innerWidth;
    _baseScreenHeight = _win2.innerHeight;
  };
  var _onResize = function _onResize2() {
    _scrollers.cache++;
    !_refreshing && !_ignoreResize && !_doc2.fullscreenElement && !_doc2.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win2.innerWidth || Math.abs(_win2.innerHeight - _baseScreenHeight) > _win2.innerHeight * 0.25) && _resizeDelay.restart(true);
  };
  var _listeners = {};
  var _emptyArray = [];
  var _softRefresh = function _softRefresh2() {
    return _removeListener3(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
  };
  var _dispatch = function _dispatch2(type) {
    return _listeners[type] && _listeners[type].map(function(f2) {
      return f2();
    }) || _emptyArray;
  };
  var _savedStyles = [];
  var _revertRecorded = function _revertRecorded2(media) {
    for (var i2 = 0; i2 < _savedStyles.length; i2 += 5) {
      if (!media || _savedStyles[i2 + 4] && _savedStyles[i2 + 4].query === media) {
        _savedStyles[i2].style.cssText = _savedStyles[i2 + 1];
        _savedStyles[i2].getBBox && _savedStyles[i2].setAttribute("transform", _savedStyles[i2 + 2] || "");
        _savedStyles[i2 + 3].uncache = 1;
      }
    }
  };
  var _revertAll = function _revertAll2(kill, media) {
    var trigger;
    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];
      if (trigger && (!media || trigger._ctx === media)) {
        if (kill) {
          trigger.kill(1);
        } else {
          trigger.revert(true, true);
        }
      }
    }
    _isReverted = true;
    media && _revertRecorded(media);
    media || _dispatch("revert");
  };
  var _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
    _scrollers.cache++;
    (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
      return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString(scrollRestoration) && (_win2.history.scrollRestoration = _scrollRestoration = scrollRestoration);
  };
  var _refreshingAll;
  var _refreshID = 0;
  var _queueRefreshID;
  var _queueRefreshAll = function _queueRefreshAll2() {
    if (_queueRefreshID !== _refreshID) {
      var id = _queueRefreshID = _refreshID;
      requestAnimationFrame(function() {
        return id === _refreshID && _refreshAll(true);
      });
    }
  };
  var _refresh100vh = function _refresh100vh2() {
    _body2.appendChild(_div100vh);
    _100vh = !_normalizer2 && _div100vh.offsetHeight || _win2.innerHeight;
    _body2.removeChild(_div100vh);
  };
  var _hideAllMarkers = function _hideAllMarkers2(hide) {
    return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
      return el.style.display = hide ? "none" : "block";
    });
  };
  var _refreshAll = function _refreshAll2(force, skipRevert) {
    if (_lastScrollTime && !force && !_isReverted) {
      _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
      return;
    }
    _refresh100vh();
    _refreshingAll = ScrollTrigger2.isRefreshing = true;
    _scrollers.forEach(function(obj) {
      return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
    });
    var refreshInits = _dispatch("refreshInit");
    _sort && ScrollTrigger2.sort();
    skipRevert || _revertAll();
    _scrollers.forEach(function(obj) {
      if (_isFunction(obj)) {
        obj.smooth && (obj.target.style.scrollBehavior = "auto");
        obj(0);
      }
    });
    _triggers.slice(0).forEach(function(t2) {
      return t2.refresh();
    });
    _isReverted = false;
    _triggers.forEach(function(t2) {
      if (t2._subPinOffset && t2.pin) {
        var prop = t2.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t2.pin[prop];
        t2.revert(true, 1);
        t2.adjustPinSpacing(t2.pin[prop] - original);
        t2.refresh();
      }
    });
    _clampingMax = 1;
    _hideAllMarkers(true);
    _triggers.forEach(function(t2) {
      var max = _maxScroll(t2.scroller, t2._dir), endClamp = t2.vars.end === "max" || t2._endClamp && t2.end > max, startClamp = t2._startClamp && t2.start >= max;
      (endClamp || startClamp) && t2.setPositions(startClamp ? max - 1 : t2.start, endClamp ? Math.max(startClamp ? max : t2.start + 1, max) : t2.end, true);
    });
    _hideAllMarkers(false);
    _clampingMax = 0;
    refreshInits.forEach(function(result) {
      return result && result.render && result.render(-1);
    });
    _scrollers.forEach(function(obj) {
      if (_isFunction(obj)) {
        obj.smooth && requestAnimationFrame(function() {
          return obj.target.style.scrollBehavior = "smooth";
        });
        obj.rec && obj(obj.rec);
      }
    });
    _clearScrollMemory(_scrollRestoration, 1);
    _resizeDelay.pause();
    _refreshID++;
    _refreshingAll = 2;
    _updateAll(2);
    _triggers.forEach(function(t2) {
      return _isFunction(t2.vars.onRefresh) && t2.vars.onRefresh(t2);
    });
    _refreshingAll = ScrollTrigger2.isRefreshing = false;
    _dispatch("refresh");
  };
  var _lastScroll = 0;
  var _direction = 1;
  var _primary;
  var _updateAll = function _updateAll2(force) {
    if (force === 2 || !_refreshingAll && !_isReverted) {
      ScrollTrigger2.isUpdating = true;
      _primary && _primary.update(0);
      var l2 = _triggers.length, time = _getTime2(), recordVelocity = time - _time1 >= 50, scroll = l2 && _triggers[0].scroll();
      _direction = _lastScroll > scroll ? -1 : 1;
      _refreshingAll || (_lastScroll = scroll);
      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
          _lastScrollTime = 0;
          _dispatch("scrollEnd");
        }
        _time2 = _time1;
        _time1 = time;
      }
      if (_direction < 0) {
        _i = l2;
        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
        _direction = 1;
      } else {
        for (_i = 0; _i < l2; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }
      ScrollTrigger2.isUpdating = false;
    }
    _rafID = 0;
  };
  var _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
  var _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
  var _swapPinOut = function _swapPinOut2(pin, spacer, state) {
    _setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) {
      _setState(cache.spacerState);
    } else if (pin._gsap.swappedIn) {
      var parent = spacer.parentNode;
      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }
    pin._gsap.swappedIn = false;
  };
  var _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
      var i2 = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p2;
      while (i2--) {
        p2 = _propNamesToCopy[i2];
        spacerStyle[p2] = cs[p2];
      }
      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.flexBasis = cs.flexBasis || "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
      _setState(spacerState);
      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      if (pin.parentNode !== spacer) {
        pin.parentNode.insertBefore(spacer, pin);
        spacer.appendChild(pin);
      }
      pin._gsap.swappedIn = true;
    }
  };
  var _capsExp = /([A-Z])/g;
  var _setState = function _setState2(state) {
    if (state) {
      var style = state.t.style, l2 = state.length, i2 = 0, p2, value;
      (state.t._gsap || gsap2.core.getCache(state.t)).uncache = 1;
      for (; i2 < l2; i2 += 2) {
        value = state[i2 + 1];
        p2 = state[i2];
        if (value) {
          style[p2] = value;
        } else if (style[p2]) {
          style.removeProperty(p2.replace(_capsExp, "-$1").toLowerCase());
        }
      }
    }
  };
  var _getState = function _getState2(element) {
    var l2 = _stateProps.length, style = element.style, state = [], i2 = 0;
    for (; i2 < l2; i2++) {
      state.push(_stateProps[i2], style[_stateProps[i2]]);
    }
    state.t = element;
    return state;
  };
  var _copyState = function _copyState2(state, override, omitOffsets) {
    var result = [], l2 = state.length, i2 = omitOffsets ? 8 : 0, p2;
    for (; i2 < l2; i2 += 2) {
      p2 = state[i2];
      result.push(p2, p2 in override ? override[p2] : state[i2 + 1]);
    }
    result.t = state.t;
    return result;
  };
  var _winOffsets = {
    left: 0,
    top: 0
  };
  var _parsePosition = function _parsePosition2(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self2, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    _isFunction(value) && (value = value(self2));
    if (_isString(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }
    var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value) || (value = +value);
    if (!_isNumber(value)) {
      _isFunction(trigger) && (trigger = trigger(self2));
      var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
      element = _getTarget(trigger, self2) || _body2;
      bounds = _getBounds(element) || {};
      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }
      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else {
      containerAnimation && (value = gsap2.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
      markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (clampZeroProp) {
      self2[clampZeroProp] = value || -1e-3;
      value < 0 && (value = 0);
    }
    if (marker) {
      var position = value + scrollerSize, isStart = marker._isStart;
      p1 = "scroll" + direction.d2;
      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body2[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1);
      if (useFixedPosition) {
        scrollerBounds = _getBounds(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }
    if (containerAnimation && element) {
      p1 = _getBounds(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
  };
  var _prefixExp = /(webkit|moz|length|cssText|inset)/i;
  var _reparent = function _reparent2(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style = element.style, p2, cs;
      if (parent === _body2) {
        element._stOrig = style.cssText;
        cs = _getComputedStyle(element);
        for (p2 in cs) {
          if (!+p2 && !_prefixExp.test(p2) && cs[p2] && typeof style[p2] === "string" && p2 !== "0") {
            style[p2] = cs[p2];
          }
        }
        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }
      gsap2.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  };
  var _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue, last2 = last1;
    return function(value) {
      var current = Math.round(getValueFunc());
      if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
        value = current;
        onInterrupt && onInterrupt();
      }
      last2 = last1;
      last1 = value;
      return value;
    };
  };
  var _shiftMarker = function _shiftMarker2(marker, direction, value) {
    var vars = {};
    vars[direction.p] = "+=" + value;
    gsap2.set(marker, vars);
  };
  var _getTweenCreator = function _getTweenCreator2(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
      var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
      initialValue = initialValue || getScroll();
      var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
        tween.kill();
        getTween2.tween = 0;
      });
      change2 = change1 && change2 || 0;
      change1 = change1 || scrollTo - initialValue;
      tween && tween.kill();
      vars[prop] = scrollTo;
      vars.inherit = false;
      vars.modifiers = modifiers;
      modifiers[prop] = function() {
        return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
      };
      vars.onUpdate = function() {
        _scrollers.cache++;
        getTween2.tween && _updateAll();
      };
      vars.onComplete = function() {
        getTween2.tween = 0;
        onComplete && onComplete.call(tween);
      };
      tween = getTween2.tween = gsap2.to(scroller, vars);
      return tween;
    };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function() {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    _addListener3(scroller, "wheel", getScroll.wheelHandler);
    ScrollTrigger2.isTouch && _addListener3(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
  };
  var ScrollTrigger2 = /* @__PURE__ */ function() {
    function ScrollTrigger3(vars, animation) {
      _coreInitted2 || ScrollTrigger3.register(gsap2) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      _context2(this);
      this.init(vars, animation);
    }
    var _proto = ScrollTrigger3.prototype;
    _proto.init = function init(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(true, true);
      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough;
        return;
      }
      vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults);
      var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win2), scrollerCache = gsap2.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self2 = this, onRefreshInit = vars.onRefreshInit && function() {
        return vars.onRefreshInit(self2);
      }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
      self2._startClamp = self2._endClamp = false;
      self2._dir = direction;
      anticipatePin *= 45;
      self2.scroller = scroller;
      self2.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
      scroll1 = scrollFunc();
      self2.vars = vars;
      animation = animation || vars.animation;
      if ("refreshPriority" in vars) {
        _sort = 1;
        vars.refreshPriority === -9999 && (_primary = self2);
      }
      scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      };
      self2.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
      self2.scrubDuration = function(value) {
        scrubSmooth = _isNumber(value) && value;
        if (!scrubSmooth) {
          scrubTween && scrubTween.progress(1).kill();
          scrubTween = 0;
        } else {
          scrubTween ? scrubTween.duration(value) : scrubTween = gsap2.to(animation, {
            ease: "expo",
            totalProgress: "+=0",
            inherit: false,
            duration: scrubSmooth,
            paused: true,
            onComplete: function onComplete() {
              return onScrubComplete && onScrubComplete(self2);
            }
          });
        }
      };
      if (animation) {
        animation.vars.lazy = false;
        animation._initted && !self2.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
        self2.animation = animation.pause();
        animation.scrollTrigger = self2;
        self2.scrubDuration(scrub);
        snap1 = 0;
        id || (id = animation.vars.id);
      }
      if (snap) {
        if (!_isObject(snap) || snap.push) {
          snap = {
            snapTo: snap
          };
        }
        "scrollBehavior" in _body2.style && gsap2.set(isViewport ? [_body2, _docEl2] : scroller, {
          scrollBehavior: "auto"
        });
        _scrollers.forEach(function(o2) {
          return _isFunction(o2) && o2.target === (isViewport ? _doc2.scrollingElement || _docEl2 : scroller) && (o2.smooth = false);
        });
        snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function(value, st2) {
          return _snapDirectional(snap.snapTo)(value, _getTime2() - lastRefresh < 500 ? 0 : st2.direction);
        } : gsap2.utils.snap(snap.snapTo);
        snapDurClamp = snap.duration || {
          min: 0.1,
          max: 2
        };
        snapDurClamp = _isObject(snapDurClamp) ? _clamp2(snapDurClamp.min, snapDurClamp.max) : _clamp2(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap2.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function() {
          var scroll = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
          if ((refreshedRecently || Math.abs(self2.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
            var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap2.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
            endValue = snapFunc(naturalEnd, self2);
            _isNumber(endValue) || (endValue = naturalEnd);
            endScroll = Math.round(start + endValue * change);
            if (scroll <= end && scroll >= start && endScroll !== scroll) {
              if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                return;
              }
              if (snap.inertia === false) {
                change1 = endValue - progress;
              }
              tweenTo(endScroll, {
                duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                ease: snap.ease || "power3",
                data: _abs(endScroll - scroll),
                // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                onInterrupt: function onInterrupt() {
                  return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self2);
                },
                onComplete: function onComplete() {
                  self2.update();
                  lastSnap = scrollFunc();
                  if (animation) {
                    scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                  }
                  snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self2.progress;
                  onSnapComplete && onSnapComplete(self2);
                  _onComplete && _onComplete(self2);
                }
              }, scroll, change1 * change, endScroll - scroll - change1 * change);
              onStart && onStart(self2, tweenTo.tween);
            }
          } else if (self2.isActive && lastSnap !== scroll) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }
      id && (_ids[id] = self2);
      trigger = self2.trigger = _getTarget(trigger || pin !== true && pin);
      customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
      customRevertReturn && (customRevertReturn = customRevertReturn(self2));
      pin = pin === true ? trigger : _getTarget(pin);
      _isString(toggleClass) && (toggleClass = {
        targets: trigger,
        className: toggleClass
      });
      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
        self2.pin = pin;
        pinCache = gsap2.core.getCache(pin);
        if (!pinCache.spacer) {
          if (pinSpacer) {
            pinSpacer = _getTarget(pinSpacer);
            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
            pinCache.spacerIsNative = !!pinSpacer;
            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
          }
          pinCache.spacer = spacer = pinSpacer || _doc2.createElement("div");
          spacer.classList.add("pin-spacer");
          id && spacer.classList.add("pin-spacer-" + id);
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }
        vars.force3D !== false && gsap2.set(pin, {
          force3D: true
        });
        self2.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap2.getProperty(pin);
        pinSetter = gsap2.quickSetter(pin, direction.a, _px);
        _swapPinIn(pin, spacer, cs);
        pinState = _getState(pin);
      }
      if (markers) {
        markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];
        var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
        markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
        markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
        containerAnimation && (caMarkerSetter = gsap2.quickSetter([markerStart, markerEnd], direction.a, _px));
        if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
          _makePositionable(isViewport ? _body2 : scroller);
          gsap2.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap2.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap2.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }
      if (containerAnimation) {
        var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
        containerAnimation.eventCallback("onUpdate", function() {
          self2.update(0, 0, 1);
          oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
        });
      }
      self2.previous = function() {
        return _triggers[_triggers.indexOf(self2) - 1];
      };
      self2.next = function() {
        return _triggers[_triggers.indexOf(self2) + 1];
      };
      self2.revert = function(revert, temp) {
        if (!temp) {
          return self2.kill(true);
        }
        var r2 = revert !== false || !self2.enabled, prevRefreshing = _refreshing;
        if (r2 !== self2.isReverted) {
          if (r2) {
            prevScroll = Math.max(scrollFunc(), self2.scroll.rec || 0);
            prevProgress = self2.progress;
            prevAnimProgress = animation && animation.progress();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m2) {
            return m2.style.display = r2 ? "none" : "block";
          });
          if (r2) {
            _refreshing = self2;
            self2.update(r2);
          }
          if (pin && (!pinReparent || !self2.isActive)) {
            if (r2) {
              _swapPinOut(pin, spacer, pinOriginalState);
            } else {
              _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
            }
          }
          r2 || self2.update(r2);
          _refreshing = prevRefreshing;
          self2.isReverted = r2;
        }
      };
      self2.refresh = function(soft, force, position, pinOffset) {
        if ((_refreshing || !self2.enabled) && !force) {
          return;
        }
        if (pin && soft && _lastScrollTime) {
          _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
          return;
        }
        !_refreshingAll && onRefreshInit && onRefreshInit(self2);
        _refreshing = self2;
        if (tweenTo.tween && !position) {
          tweenTo.tween.kill();
          tweenTo.tween = 0;
        }
        scrubTween && scrubTween.pause();
        invalidateOnRefresh && animation && animation.revert({
          kill: false
        }).invalidate();
        self2.isReverted || self2.revert(true, true);
        self2._subPinOffset = false;
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self2.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self2), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self2)) || 0, i2 = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
        if (markers && _isObject(position)) {
          markerStartOffset = gsap2.getProperty(markerStartTrigger, direction.p);
          markerEndOffset = gsap2.getProperty(markerEndTrigger, direction.p);
        }
        while (i2--) {
          curTrigger = _triggers[i2];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self2);
          curPin = curTrigger.pin;
          if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert(true, true);
          }
          if (curTrigger !== _triggers[i2]) {
            triggerIndex--;
            i2--;
          }
        }
        _isFunction(parsedStart) && (parsedStart = parsedStart(self2));
        parsedStart = _parseClamp(parsedStart, "start", self2);
        start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self2._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
        _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self2));
        if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset2 = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap2.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
            parsedEndTrigger = trigger;
          }
        }
        parsedEnd = _parseClamp(parsedEnd, "end", self2);
        end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self2._endClamp && "_endClamp")) || -1e-3;
        offset2 = 0;
        i2 = triggerIndex;
        while (i2--) {
          curTrigger = _triggers[i2];
          curPin = curTrigger.pin;
          if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
            cs2 = curTrigger.end - (self2._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
            if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
              offset2 += cs2 * (1 - curTrigger.progress);
            }
            curPin === pin && (otherPinOffset += cs2);
          }
        }
        start += offset2;
        end += offset2;
        self2._startClamp && (self2._startClamp += offset2);
        if (self2._endClamp && !_refreshingAll) {
          self2._endClamp = end || -1e-3;
          end = Math.min(end, _maxScroll(scroller, direction));
        }
        change = end - start || (start -= 0.01) && 1e-3;
        if (isFirstRefresh) {
          prevProgress = gsap2.utils.clamp(0, 1, gsap2.utils.normalize(start, end, prevScroll));
        }
        self2._pinPush = otherPinOffset;
        if (markerStart && offset2) {
          cs2 = {};
          cs2[direction.a] = "+=" + offset2;
          pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
          gsap2.set([markerStart, markerEnd], cs2);
        }
        if (pin && !(_clampingMax && self2.end >= _maxScroll(scroller, direction))) {
          cs2 = _getComputedStyle(pin);
          isVertical = direction === _vertical;
          scroll = scrollFunc();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          if (!max && end > 1) {
            forcedOverflow = (isViewport ? _doc2.scrollingElement || _docEl2 : scroller).style;
            forcedOverflow = {
              style: forcedOverflow,
              value: forcedOverflow["overflow" + direction.a.toUpperCase()]
            };
            if (isViewport && _getComputedStyle(_body2)["overflow" + direction.a.toUpperCase()] !== "scroll") {
              forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
            }
          }
          _swapPinIn(pin, spacer, cs2);
          pinState = _getState(pin);
          bounds = _getBounds(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i2 = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            if (i2) {
              spacerState.push(direction.d, i2 + _px);
              spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i2 + _px);
            }
            _setState(spacerState);
            if (pinnedContainer) {
              _triggers.forEach(function(t2) {
                if (t2.pin === pinnedContainer && t2.vars.pinSpacing !== false) {
                  t2._subPinOffset = true;
                }
              });
            }
            useFixedPosition && scrollFunc(prevScroll);
          } else {
            i2 = _getSize(pin, direction);
            i2 && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i2 + _px);
          }
          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs2[_padding];
            override[_padding + _Top] = cs2[_padding + _Top];
            override[_padding + _Right] = cs2[_padding + _Right];
            override[_padding + _Bottom] = cs2[_padding + _Bottom];
            override[_padding + _Left] = cs2[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
            _refreshingAll && scrollFunc(0);
          }
          if (animation) {
            initted = animation._initted;
            _suppressOverwrites(1);
            animation.render(animation.duration(), true, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            pinMoves = Math.abs(change - pinChange) > 1;
            useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.render(0, true, true);
            initted || animation.invalidate(true);
            animation.parent || animation.totalTime(animation.totalTime());
            _suppressOverwrites(0);
          } else {
            pinChange = change;
          }
          forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
        } else if (trigger && scrollFunc() && !containerAnimation) {
          bounds = trigger.parentNode;
          while (bounds && bounds !== _body2) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }
            bounds = bounds.parentNode;
          }
        }
        revertedPins && revertedPins.forEach(function(t2) {
          return t2.revert(false, true);
        });
        self2.start = start;
        self2.end = end;
        scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
        if (!containerAnimation && !_refreshingAll) {
          scroll1 < prevScroll && scrollFunc(prevScroll);
          self2.scroll.rec = 0;
        }
        self2.revert(false, true);
        lastRefresh = _getTime2();
        if (snapDelayedCall) {
          lastSnap = -1;
          snapDelayedCall.restart(true);
        }
        _refreshing = 0;
        animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
        if (isFirstRefresh || prevProgress !== self2.progress || containerAnimation || invalidateOnRefresh) {
          animation && !isToggle && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap2.utils.normalize(start, end, 0) : prevProgress, true);
          self2.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
        }
        pin && pinSpacing && (spacer._pinOffset = Math.round(self2.progress * pinChange));
        scrubTween && scrubTween.invalidate();
        if (!isNaN(markerStartOffset)) {
          markerStartOffset -= gsap2.getProperty(markerStartTrigger, direction.p);
          markerEndOffset -= gsap2.getProperty(markerEndTrigger, direction.p);
          _shiftMarker(markerStartTrigger, direction, markerStartOffset);
          _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
          _shiftMarker(markerEndTrigger, direction, markerEndOffset);
          _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
        }
        isFirstRefresh && !_refreshingAll && self2.update();
        if (onRefresh && !_refreshingAll && !executingOnRefresh) {
          executingOnRefresh = true;
          onRefresh(self2);
          executingOnRefresh = false;
        }
      };
      self2.getVelocity = function() {
        return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
      };
      self2.endAnimation = function() {
        _endAnimation(self2.callbackAnimation);
        if (animation) {
          scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self2.direction < 0, 1);
        }
      };
      self2.labelToScroll = function(label) {
        return animation && animation.labels && (start || self2.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
      };
      self2.getTrailing = function(name) {
        var i2 = _triggers.indexOf(self2), a2 = self2.direction > 0 ? _triggers.slice(0, i2).reverse() : _triggers.slice(i2 + 1);
        return (_isString(name) ? a2.filter(function(t2) {
          return t2.vars.preventOverlaps === name;
        }) : a2).filter(function(t2) {
          return self2.direction > 0 ? t2.end <= start : t2.start >= end;
        });
      };
      self2.update = function(reset, recordVelocity, forceFake) {
        if (containerAnimation && !forceFake && !reset) {
          return;
        }
        var scroll = _refreshingAll === true ? prevScroll : self2.scroll(), p2 = reset ? 0 : (scroll - start) / change, clipped = p2 < 0 ? 0 : p2 > 1 ? 1 : p2 || 0, prevProgress2 = self2.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = containerAnimation ? scrollFunc() : scroll;
          if (snap) {
            snap2 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }
        if (anticipatePin && pin && !_refreshing && !_startup2 && _lastScrollTime) {
          if (!clipped && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
            clipped = 1e-4;
          } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
            clipped = 0.9999;
          }
        }
        if (clipped !== prevProgress2 && self2.enabled) {
          isActive = self2.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress2 && prevProgress2 < 1;
          toggled = isActive !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress2;
          self2.direction = clipped > prevProgress2 ? 1 : -1;
          self2.progress = clipped;
          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
            }
          }
          preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self2) : self2.getTrailing(preventOverlaps).forEach(function(t2) {
            return t2.endAnimation();
          }));
          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup2) {
              scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
              if (scrubTween.resetTo) {
                scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
              } else {
                scrubTween.vars.totalProgress = clipped;
                scrubTween.invalidate().restart();
              }
            } else if (animation) {
              animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
            }
          }
          if (pin) {
            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
            if (!useFixedPosition) {
              pinSetter(_round(pinStart + pinChange * clipped));
            } else if (stateChanged) {
              isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
              if (pinReparent) {
                if (!reset && (isActive || isAtMax)) {
                  var bounds = _getBounds(pin, true), _offset = scroll - start;
                  _reparent(pin, _body2, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }
              _setState(isActive || isAtMax ? pinActiveState : pinState);
              pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
            }
          }
          snap && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
          toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
          });
          onUpdate && !isToggle && !reset && onUpdate(self2);
          if (stateChanged && !_refreshing) {
            if (isToggle) {
              if (isTakingAction) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else if (action === "restart") {
                  animation.restart(true);
                } else {
                  animation[action]();
                }
              }
              onUpdate && onUpdate(self2);
            }
            if (toggled || !_limitCallbacks) {
              onToggle && toggled && _callback(self2, onToggle);
              callbacks[toggleState] && _callback(self2, callbacks[toggleState]);
              once && (clipped === 1 ? self2.kill(false, 1) : callbacks[toggleState] = 0);
              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && _callback(self2, callbacks[toggleState]);
              }
            }
            if (fastScrollEnd && !isActive && Math.abs(self2.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
              _endAnimation(self2.callbackAnimation);
              scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self2);
          }
        }
        if (markerEndSetter) {
          var n2 = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n2 + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n2);
        }
        caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
      };
      self2.enable = function(reset, refresh) {
        if (!self2.enabled) {
          self2.enabled = true;
          _addListener3(scroller, "resize", _onResize);
          isViewport || _addListener3(scroller, "scroll", _onScroll3);
          onRefreshInit && _addListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (reset !== false) {
            self2.progress = prevProgress = 0;
            scroll1 = scroll2 = lastSnap = scrollFunc();
          }
          refresh !== false && self2.refresh();
        }
      };
      self2.getTween = function(snap3) {
        return snap3 && tweenTo ? tweenTo.tween : scrubTween;
      };
      self2.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
        if (containerAnimation) {
          var st2 = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st2.end - st2.start;
          newStart = st2.start + _change * newStart / duration;
          newEnd = st2.start + _change * newEnd / duration;
        }
        self2.refresh(false, false, {
          start: _keepClamp(newStart, keepClamp && !!self2._startClamp),
          end: _keepClamp(newEnd, keepClamp && !!self2._endClamp)
        }, pinOffset);
        self2.update();
      };
      self2.adjustPinSpacing = function(amount) {
        if (spacerState && amount) {
          var i2 = spacerState.indexOf(direction.d) + 1;
          spacerState[i2] = parseFloat(spacerState[i2]) + amount + _px;
          spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
          _setState(spacerState);
        }
      };
      self2.disable = function(reset, allowAnimation) {
        if (self2.enabled) {
          reset !== false && self2.revert(true, true);
          self2.enabled = self2.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }
          if (!isViewport) {
            var i2 = _triggers.length;
            while (i2--) {
              if (_triggers[i2].scroller === scroller && _triggers[i2] !== self2) {
                return;
              }
            }
            _removeListener3(scroller, "resize", _onResize);
            isViewport || _removeListener3(scroller, "scroll", _onScroll3);
          }
        }
      };
      self2.kill = function(revert, allowAnimation) {
        self2.disable(revert, allowAnimation);
        scrubTween && !allowAnimation && scrubTween.kill();
        id && delete _ids[id];
        var i2 = _triggers.indexOf(self2);
        i2 >= 0 && _triggers.splice(i2, 1);
        i2 === _i && _direction > 0 && _i--;
        i2 = 0;
        _triggers.forEach(function(t2) {
          return t2.scroller === self2.scroller && (i2 = 1);
        });
        i2 || _refreshingAll || (self2.scroll.rec = 0);
        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.revert({
            kill: false
          });
          allowAnimation || animation.kill();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m2) {
          return m2.parentNode && m2.parentNode.removeChild(m2);
        });
        _primary === self2 && (_primary = 0);
        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i2 = 0;
          _triggers.forEach(function(t2) {
            return t2.pin === pin && i2++;
          });
          i2 || (pinCache.spacer = 0);
        }
        vars.onKill && vars.onKill(self2);
      };
      _triggers.push(self2);
      self2.enable(false, false);
      customRevertReturn && customRevertReturn(self2);
      if (animation && animation.add && !change) {
        var updateFunc = self2.update;
        self2.update = function() {
          self2.update = updateFunc;
          start || end || self2.refresh();
        };
        gsap2.delayedCall(0.01, self2.update);
        change = 0.01;
        start = end = 0;
      } else {
        self2.refresh();
      }
      pin && _queueRefreshAll();
    };
    ScrollTrigger3.register = function register(core) {
      if (!_coreInitted2) {
        gsap2 = core || _getGSAP3();
        _windowExists() && window.document && ScrollTrigger3.enable();
        _coreInitted2 = _enabled;
      }
      return _coreInitted2;
    };
    ScrollTrigger3.defaults = function defaults(config) {
      if (config) {
        for (var p2 in config) {
          _defaults[p2] = config[p2];
        }
      }
      return _defaults;
    };
    ScrollTrigger3.disable = function disable(reset, kill) {
      _enabled = 0;
      _triggers.forEach(function(trigger) {
        return trigger[kill ? "kill" : "disable"](reset);
      });
      _removeListener3(_win2, "wheel", _onScroll3);
      _removeListener3(_doc2, "scroll", _onScroll3);
      clearInterval(_syncInterval);
      _removeListener3(_doc2, "touchcancel", _passThrough);
      _removeListener3(_body2, "touchstart", _passThrough);
      _multiListener(_removeListener3, _doc2, "pointerdown,touchstart,mousedown", _pointerDownHandler);
      _multiListener(_removeListener3, _doc2, "pointerup,touchend,mouseup", _pointerUpHandler);
      _resizeDelay.kill();
      _iterateAutoRefresh(_removeListener3);
      for (var i2 = 0; i2 < _scrollers.length; i2 += 3) {
        _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 1]);
        _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 2]);
      }
    };
    ScrollTrigger3.enable = function enable() {
      _win2 = window;
      _doc2 = document;
      _docEl2 = _doc2.documentElement;
      _body2 = _doc2.body;
      if (gsap2) {
        _toArray = gsap2.utils.toArray;
        _clamp2 = gsap2.utils.clamp;
        _context2 = gsap2.core.context || _passThrough;
        _suppressOverwrites = gsap2.core.suppressOverwrites || _passThrough;
        _scrollRestoration = _win2.history.scrollRestoration || "auto";
        _lastScroll = _win2.pageYOffset;
        gsap2.core.globals("ScrollTrigger", ScrollTrigger3);
        if (_body2) {
          _enabled = 1;
          _div100vh = document.createElement("div");
          _div100vh.style.height = "100vh";
          _div100vh.style.position = "absolute";
          _refresh100vh();
          _rafBugFix();
          Observer.register(gsap2);
          ScrollTrigger3.isTouch = Observer.isTouch;
          _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
          _ignoreMobileResize = Observer.isTouch === 1;
          _addListener3(_win2, "wheel", _onScroll3);
          _root2 = [_win2, _doc2, _docEl2, _body2];
          if (gsap2.matchMedia) {
            ScrollTrigger3.matchMedia = function(vars) {
              var mm = gsap2.matchMedia(), p2;
              for (p2 in vars) {
                mm.add(p2, vars[p2]);
              }
              return mm;
            };
            gsap2.addEventListener("matchMediaInit", function() {
              return _revertAll();
            });
            gsap2.addEventListener("matchMediaRevert", function() {
              return _revertRecorded();
            });
            gsap2.addEventListener("matchMedia", function() {
              _refreshAll(0, 1);
              _dispatch("matchMedia");
            });
            gsap2.matchMedia("(orientation: portrait)", function() {
              _setBaseDimensions();
              return _setBaseDimensions;
            });
          } else {
            console.warn("Requires GSAP 3.11.0 or later");
          }
          _setBaseDimensions();
          _addListener3(_doc2, "scroll", _onScroll3);
          var bodyStyle = _body2.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap2.core.Animation.prototype, bounds, i2;
          AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
            value: function value() {
              return this.time(-0.01, true);
            }
          });
          bodyStyle.borderTopStyle = "solid";
          bounds = _getBounds(_body2);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
          _syncInterval = setInterval(_sync, 250);
          gsap2.delayedCall(0.5, function() {
            return _startup2 = 0;
          });
          _addListener3(_doc2, "touchcancel", _passThrough);
          _addListener3(_body2, "touchstart", _passThrough);
          _multiListener(_addListener3, _doc2, "pointerdown,touchstart,mousedown", _pointerDownHandler);
          _multiListener(_addListener3, _doc2, "pointerup,touchend,mouseup", _pointerUpHandler);
          _transformProp = gsap2.utils.checkPrefix("transform");
          _stateProps.push(_transformProp);
          _coreInitted2 = _getTime2();
          _resizeDelay = gsap2.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc2, "visibilitychange", function() {
            var w2 = _win2.innerWidth, h2 = _win2.innerHeight;
            if (_doc2.hidden) {
              _prevWidth = w2;
              _prevHeight = h2;
            } else if (_prevWidth !== w2 || _prevHeight !== h2) {
              _onResize();
            }
          }, _doc2, "DOMContentLoaded", _refreshAll, _win2, "load", _refreshAll, _win2, "resize", _onResize];
          _iterateAutoRefresh(_addListener3);
          _triggers.forEach(function(trigger) {
            return trigger.enable(0, 1);
          });
          for (i2 = 0; i2 < _scrollers.length; i2 += 3) {
            _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 1]);
            _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 2]);
          }
        }
      }
    };
    ScrollTrigger3.config = function config(vars) {
      "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
      if ("autoRefreshEvents" in vars) {
        _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };
    ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
      var t2 = _getTarget(target), i2 = _scrollers.indexOf(t2), isViewport = _isViewport3(t2);
      if (~i2) {
        _scrollers.splice(i2, isViewport ? 6 : 2);
      }
      if (vars) {
        isViewport ? _proxies.unshift(_win2, vars, _body2, vars, _docEl2, vars) : _proxies.unshift(t2, vars);
      }
    };
    ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
      _triggers.forEach(function(t2) {
        return t2._ctx && t2._ctx.query === query && t2._ctx.kill(true, true);
      });
    };
    ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
      var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
      return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win2.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win2.innerHeight;
    };
    ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
      _isString(element) && (element = _getTarget(element));
      var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
      return horizontal ? (bounds.left + offset) / _win2.innerWidth : (bounds.top + offset) / _win2.innerHeight;
    };
    ScrollTrigger3.killAll = function killAll(allowListeners) {
      _triggers.slice(0).forEach(function(t2) {
        return t2.vars.id !== "ScrollSmoother" && t2.kill();
      });
      if (allowListeners !== true) {
        var listeners = _listeners.killAll || [];
        _listeners = {};
        listeners.forEach(function(f2) {
          return f2();
        });
      }
    };
    return ScrollTrigger3;
  }();
  ScrollTrigger2.version = "3.12.5";
  ScrollTrigger2.saveStyles = function(targets) {
    return targets ? _toArray(targets).forEach(function(target) {
      if (target && target.style) {
        var i2 = _savedStyles.indexOf(target);
        i2 >= 0 && _savedStyles.splice(i2, 5);
        _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap2.core.getCache(target), _context2());
      }
    }) : _savedStyles;
  };
  ScrollTrigger2.revert = function(soft, media) {
    return _revertAll(!soft, media);
  };
  ScrollTrigger2.create = function(vars, animation) {
    return new ScrollTrigger2(vars, animation);
  };
  ScrollTrigger2.refresh = function(safe) {
    return safe ? _onResize() : (_coreInitted2 || ScrollTrigger2.register()) && _refreshAll(true);
  };
  ScrollTrigger2.update = function(force) {
    return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
  };
  ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
  ScrollTrigger2.maxScroll = function(element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getScrollFunc = function(element, horizontal) {
    return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getById = function(id) {
    return _ids[id];
  };
  ScrollTrigger2.getAll = function() {
    return _triggers.filter(function(t2) {
      return t2.vars.id !== "ScrollSmoother";
    });
  };
  ScrollTrigger2.isScrolling = function() {
    return !!_lastScrollTime;
  };
  ScrollTrigger2.snapDirectional = _snapDirectional;
  ScrollTrigger2.addEventListener = function(type, callback) {
    var a2 = _listeners[type] || (_listeners[type] = []);
    ~a2.indexOf(callback) || a2.push(callback);
  };
  ScrollTrigger2.removeEventListener = function(type, callback) {
    var a2 = _listeners[type], i2 = a2 && a2.indexOf(callback);
    i2 >= 0 && a2.splice(i2, 1);
  };
  ScrollTrigger2.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
      var elements = [], triggers = [], delay = gsap2.delayedCall(interval, function() {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function(self2) {
        elements.length || delay.restart(true);
        elements.push(self2.trigger);
        triggers.push(self2);
        batchMax <= elements.length && delay.progress(1);
      };
    }, p2;
    for (p2 in vars) {
      varsCopy[p2] = p2.substr(0, 2) === "on" && _isFunction(vars[p2]) && p2 !== "onRefreshInit" ? proxyCallback(p2, vars[p2]) : vars[p2];
    }
    if (_isFunction(batchMax)) {
      batchMax = batchMax();
      _addListener3(ScrollTrigger2, "refresh", function() {
        return batchMax = vars.batchMax();
      });
    }
    _toArray(targets).forEach(function(target) {
      var config = {};
      for (p2 in varsCopy) {
        config[p2] = varsCopy[p2];
      }
      config.trigger = target;
      result.push(ScrollTrigger2.create(config));
    });
    return result;
  };
  var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
  };
  var _allowNativePanning = function _allowNativePanning2(target, direction) {
    if (direction === true) {
      target.style.removeProperty("touch-action");
    } else {
      target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
    }
    target === _docEl2 && _allowNativePanning2(_body2, direction);
  };
  var _overflow = {
    auto: 1,
    scroll: 1
  };
  var _nestedScroll = function _nestedScroll2(_ref5) {
    var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap2.core.getCache(node), time = _getTime2(), cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
      while (node && node !== _body2 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
        node = node.parentNode;
      }
      cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
      cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
      event.stopPropagation();
      event._gsapAllow = true;
    }
  };
  var _inputObserver = function _inputObserver2(target, type, inputs, nested) {
    return Observer.create({
      target,
      capture: true,
      debounce: false,
      lockAxis: true,
      type,
      onWheel: nested = nested && _nestedScroll,
      onPress: nested,
      onDrag: nested,
      onScroll: nested,
      onEnable: function onEnable() {
        return inputs && _addListener3(_doc2, Observer.eventTypes[0], _captureInputs, false, true);
      },
      onDisable: function onDisable() {
        return _removeListener3(_doc2, Observer.eventTypes[0], _captureInputs, true);
      }
    });
  };
  var _inputExp = /(input|label|select|textarea)/i;
  var _inputIsFocused;
  var _captureInputs = function _captureInputs2(e6) {
    var isInput = _inputExp.test(e6.target.tagName);
    if (isInput || _inputIsFocused) {
      e6._gsapAllow = true;
      _inputIsFocused = isInput;
    }
  };
  var _getScrollNormalizer = function _getScrollNormalizer2(vars) {
    _isObject(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self2, maxY, target = _getTarget(vars.target) || _docEl2, smoother = gsap2.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win2.visualViewport ? _win2.visualViewport.scale * _win2.visualViewport.width : _win2.outerWidth) / _win2.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction(momentum) ? function() {
      return momentum(self2);
    } : function() {
      return momentum || 2.8;
    }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
      return skipTouchMove = false;
    }, scrollClampX = _passThrough, scrollClampY = _passThrough, updateClamps = function updateClamps2() {
      maxY = _maxScroll(target, _vertical);
      scrollClampY = _clamp2(_fixIOSBug ? 1 : 0, maxY);
      normalizeScrollX && (scrollClampX = _clamp2(0, _maxScroll(target, _horizontal)));
      lastRefreshID = _refreshID;
    }, removeContentOffset = function removeContentOffset2() {
      content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
      content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
    }, ignoreDrag = function ignoreDrag2() {
      if (skipTouchMove) {
        requestAnimationFrame(resumeTouchMove);
        var offset = _round(self2.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
        if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
          scrollFuncY.offset = scroll - scrollFuncY.v;
          var y2 = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
          content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y2 + ", 0, 1)";
          content._gsap.y = y2 + "px";
          scrollFuncY.cacheID = _scrollers.cache;
          _updateAll();
        }
        return true;
      }
      scrollFuncY.offset && removeContentOffset();
      skipTouchMove = true;
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
      updateClamps();
      if (tween.isActive() && tween.vars.scrollY > maxY) {
        scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
      }
    };
    content && gsap2.set(content, {
      y: "+=0"
    });
    vars.ignoreCheck = function(e6) {
      return _fixIOSBug && e6.type === "touchmove" && ignoreDrag(e6) || scale > 1.05 && e6.type !== "touchstart" || self2.isGesturing || e6.touches && e6.touches.length > 1;
    };
    vars.onPress = function() {
      skipTouchMove = false;
      var prevScale = scale;
      scale = _round((_win2.visualViewport && _win2.visualViewport.scale || 1) / initialScale);
      tween.pause();
      prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
      startScrollX = scrollFuncX();
      startScrollY = scrollFuncY();
      updateClamps();
      lastRefreshID = _refreshID;
    };
    vars.onRelease = vars.onGestureStart = function(self3, wasDragging) {
      scrollFuncY.offset && removeContentOffset();
      if (!wasDragging) {
        onStopDelayedCall.restart(true);
      } else {
        _scrollers.cache++;
        var dur = resolveMomentumDuration(), currentScroll, endScroll;
        if (normalizeScrollX) {
          currentScroll = scrollFuncX();
          endScroll = currentScroll + dur * 0.05 * -self3.velocityX / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
          tween.vars.scrollX = scrollClampX(endScroll);
        }
        currentScroll = scrollFuncY();
        endScroll = currentScroll + dur * 0.05 * -self3.velocityY / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
        tween.vars.scrollY = scrollClampY(endScroll);
        tween.invalidate().duration(dur).play(0.01);
        if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
          gsap2.to({}, {
            onUpdate: onResize,
            duration: dur
          });
        }
      }
      onRelease && onRelease(self3);
    };
    vars.onWheel = function() {
      tween._ts && tween.pause();
      if (_getTime2() - wheelRefresh > 1e3) {
        lastRefreshID = 0;
        wheelRefresh = _getTime2();
      }
    };
    vars.onChange = function(self3, dx, dy, xArray, yArray) {
      _refreshID !== lastRefreshID && updateClamps();
      dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self3.startX - self3.x) : scrollFuncX() + dx - xArray[1]));
      if (dy) {
        scrollFuncY.offset && removeContentOffset();
        var isTouch = yArray[2] === dy, y2 = isTouch ? startScrollY + self3.startY - self3.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y2);
        isTouch && y2 !== yClamped && (startScrollY += yClamped - y2);
        scrollFuncY(yClamped);
      }
      (dy || dx) && _updateAll();
    };
    vars.onEnable = function() {
      _allowNativePanning(target, normalizeScrollX ? false : "x");
      ScrollTrigger2.addEventListener("refresh", onResize);
      _addListener3(_win2, "resize", onResize);
      if (scrollFuncY.smooth) {
        scrollFuncY.target.style.scrollBehavior = "auto";
        scrollFuncY.smooth = scrollFuncX.smooth = false;
      }
      inputObserver.enable();
    };
    vars.onDisable = function() {
      _allowNativePanning(target, true);
      _removeListener3(_win2, "resize", onResize);
      ScrollTrigger2.removeEventListener("refresh", onResize);
      inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self2 = new Observer(vars);
    self2.iOS = _fixIOSBug;
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
    _fixIOSBug && gsap2.ticker.add(_passThrough);
    onStopDelayedCall = self2._dc;
    tween = gsap2.to(self2, {
      ease: "power4",
      paused: true,
      inherit: false,
      scrollX: normalizeScrollX ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
          return tween.pause();
        })
      },
      onUpdate: _updateAll,
      onComplete: onStopDelayedCall.vars.onComplete
    });
    return self2;
  };
  ScrollTrigger2.sort = function(func) {
    return _triggers.sort(func || function(a2, b2) {
      return (a2.vars.refreshPriority || 0) * -1e6 + a2.start - (b2.start + (b2.vars.refreshPriority || 0) * -1e6);
    });
  };
  ScrollTrigger2.observe = function(vars) {
    return new Observer(vars);
  };
  ScrollTrigger2.normalizeScroll = function(vars) {
    if (typeof vars === "undefined") {
      return _normalizer2;
    }
    if (vars === true && _normalizer2) {
      return _normalizer2.enable();
    }
    if (vars === false) {
      _normalizer2 && _normalizer2.kill();
      _normalizer2 = vars;
      return;
    }
    var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
    _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
    _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
    return normalizer;
  };
  ScrollTrigger2.core = {
    // smaller file size way to leverage in ScrollSmoother and Observer
    _getVelocityProp,
    _inputObserver,
    _scrollers,
    _proxies,
    bridge: {
      // when normalizeScroll sets the scroll position (ss = setScroll)
      ss: function ss() {
        _lastScrollTime || _dispatch("scrollStart");
        _lastScrollTime = _getTime2();
      },
      // a way to get the _refreshing value in Observer
      ref: function ref() {
        return _refreshing;
      }
    }
  };
  _getGSAP3() && gsap2.registerPlugin(ScrollTrigger2);

  // node_modules/.pnpm/posthog-js@1.105.8/node_modules/posthog-js/dist/es.js
  init_live_reload();
  function e(e6, t2) {
    var n2 = Object.keys(e6);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e6);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e6, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function t(t2) {
    for (var n2 = 1; n2 < arguments.length; n2++) {
      var r2 = null != arguments[n2] ? arguments[n2] : {};
      n2 % 2 ? e(Object(r2), true).forEach(function(e6) {
        s(t2, e6, r2[e6]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(r2)) : e(Object(r2)).forEach(function(e6) {
        Object.defineProperty(t2, e6, Object.getOwnPropertyDescriptor(r2, e6));
      });
    }
    return t2;
  }
  function n(e6) {
    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e7) {
      return typeof e7;
    } : function(e7) {
      return e7 && "function" == typeof Symbol && e7.constructor === Symbol && e7 !== Symbol.prototype ? "symbol" : typeof e7;
    }, n(e6);
  }
  function r(e6, t2) {
    if (!(e6 instanceof t2))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(e6, t2) {
    for (var n2 = 0; n2 < t2.length; n2++) {
      var r2 = t2[n2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e6, r2.key, r2);
    }
  }
  function o(e6, t2, n2) {
    return t2 && i(e6.prototype, t2), n2 && i(e6, n2), Object.defineProperty(e6, "prototype", { writable: false }), e6;
  }
  function s(e6, t2, n2) {
    return t2 in e6 ? Object.defineProperty(e6, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e6[t2] = n2, e6;
  }
  function a(e6, t2) {
    if ("function" != typeof t2 && null !== t2)
      throw new TypeError("Super expression must either be null or a function");
    e6.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t2 && l(e6, t2);
  }
  function u(e6) {
    return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e7) {
      return e7.__proto__ || Object.getPrototypeOf(e7);
    }, u(e6);
  }
  function l(e6, t2) {
    return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e7, t3) {
      return e7.__proto__ = t3, e7;
    }, l(e6, t2);
  }
  function c(e6, t2) {
    if (null == e6)
      return {};
    var n2, r2, i2 = function(e7, t3) {
      if (null == e7)
        return {};
      var n3, r3, i3 = {}, o3 = Object.keys(e7);
      for (r3 = 0; r3 < o3.length; r3++)
        n3 = o3[r3], t3.indexOf(n3) >= 0 || (i3[n3] = e7[n3]);
      return i3;
    }(e6, t2);
    if (Object.getOwnPropertySymbols) {
      var o2 = Object.getOwnPropertySymbols(e6);
      for (r2 = 0; r2 < o2.length; r2++)
        n2 = o2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e6, n2) && (i2[n2] = e6[n2]);
    }
    return i2;
  }
  function d(e6, t2) {
    if (t2 && ("object" == typeof t2 || "function" == typeof t2))
      return t2;
    if (void 0 !== t2)
      throw new TypeError("Derived constructors may only return object or undefined");
    return function(e7) {
      if (void 0 === e7)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e7;
    }(e6);
  }
  function h(e6) {
    var t2 = function() {
      if ("undefined" == typeof Reflect || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if ("function" == typeof Proxy)
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (e7) {
        return false;
      }
    }();
    return function() {
      var n2, r2 = u(e6);
      if (t2) {
        var i2 = u(this).constructor;
        n2 = Reflect.construct(r2, arguments, i2);
      } else
        n2 = r2.apply(this, arguments);
      return d(this, n2);
    };
  }
  function f(e6, t2) {
    return function(e7) {
      if (Array.isArray(e7))
        return e7;
    }(e6) || function(e7, t3) {
      var n2 = null == e7 ? null : "undefined" != typeof Symbol && e7[Symbol.iterator] || e7["@@iterator"];
      if (null == n2)
        return;
      var r2, i2, o2 = [], s2 = true, a2 = false;
      try {
        for (n2 = n2.call(e7); !(s2 = (r2 = n2.next()).done) && (o2.push(r2.value), !t3 || o2.length !== t3); s2 = true)
          ;
      } catch (e8) {
        a2 = true, i2 = e8;
      } finally {
        try {
          s2 || null == n2.return || n2.return();
        } finally {
          if (a2)
            throw i2;
        }
      }
      return o2;
    }(e6, t2) || _(e6, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function p(e6) {
    return function(e7) {
      if (Array.isArray(e7))
        return g(e7);
    }(e6) || function(e7) {
      if ("undefined" != typeof Symbol && null != e7[Symbol.iterator] || null != e7["@@iterator"])
        return Array.from(e7);
    }(e6) || _(e6) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _(e6, t2) {
    if (e6) {
      if ("string" == typeof e6)
        return g(e6, t2);
      var n2 = Object.prototype.toString.call(e6).slice(8, -1);
      return "Object" === n2 && e6.constructor && (n2 = e6.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e6) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? g(e6, t2) : void 0;
    }
  }
  function g(e6, t2) {
    (null == t2 || t2 > e6.length) && (t2 = e6.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e6[n2];
    return r2;
  }
  function v(e6, t2) {
    var n2 = "undefined" != typeof Symbol && e6[Symbol.iterator] || e6["@@iterator"];
    if (!n2) {
      if (Array.isArray(e6) || (n2 = _(e6)) || t2 && e6 && "number" == typeof e6.length) {
        n2 && (e6 = n2);
        var r2 = 0, i2 = function() {
        };
        return { s: i2, n: function() {
          return r2 >= e6.length ? { done: true } : { done: false, value: e6[r2++] };
        }, e: function(e7) {
          throw e7;
        }, f: i2 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o2, s2 = true, a2 = false;
    return { s: function() {
      n2 = n2.call(e6);
    }, n: function() {
      var e7 = n2.next();
      return s2 = e7.done, e7;
    }, e: function(e7) {
      a2 = true, o2 = e7;
    }, f: function() {
      try {
        s2 || null == n2.return || n2.return();
      } finally {
        if (a2)
          throw o2;
      }
    } };
  }
  var m = { DEBUG: false, LIB_VERSION: "1.105.8" };
  var y = Array.isArray;
  var b = Object.prototype;
  var k = b.hasOwnProperty;
  var w = b.toString;
  var S = y || function(e6) {
    return "[object Array]" === w.call(e6);
  };
  var F = function(e6) {
    return "[object Uint8Array]" === w.call(e6);
  };
  var P = function(e6) {
    return "function" == typeof e6;
  };
  var R = function(e6) {
    return e6 === Object(e6) && !S(e6);
  };
  var I = function(e6) {
    return void 0 === e6;
  };
  var E = function(e6) {
    return "[object String]" == w.call(e6);
  };
  var x = function(e6) {
    return null === e6;
  };
  var C = function(e6) {
    return "[object Number]" == w.call(e6);
  };
  var O = function(e6) {
    return "[object Boolean]" === w.call(e6);
  };
  var T = "undefined" != typeof window ? window : void 0;
  var $2 = "undefined" != typeof globalThis ? globalThis : T;
  var A = Array.prototype;
  var M = A.forEach;
  var q = A.indexOf;
  var D = null == $2 ? void 0 : $2.navigator;
  var L = null == $2 ? void 0 : $2.document;
  var N = null == $2 ? void 0 : $2.location;
  var B = null == $2 ? void 0 : $2.fetch;
  var j = null == $2 ? void 0 : $2.XMLHttpRequest;
  var H = null == D ? void 0 : D.userAgent;
  var U = null != T ? T : {};
  var W = "[PostHog.js]";
  var V = { _log: function(e6) {
    if (T && (m.DEBUG || U.POSTHOG_DEBUG) && !I(T.console) && T.console) {
      for (var t2 = ("__rrweb_original__" in T.console[e6]) ? T.console[e6].__rrweb_original__ : T.console[e6], n2 = arguments.length, r2 = new Array(n2 > 1 ? n2 - 1 : 0), i2 = 1; i2 < n2; i2++)
        r2[i2 - 1] = arguments[i2];
      t2.apply(void 0, [W].concat(r2));
    }
  }, info: function() {
    for (var e6 = arguments.length, t2 = new Array(e6), n2 = 0; n2 < e6; n2++)
      t2[n2] = arguments[n2];
    V._log.apply(V, ["log"].concat(t2));
  }, warn: function() {
    for (var e6 = arguments.length, t2 = new Array(e6), n2 = 0; n2 < e6; n2++)
      t2[n2] = arguments[n2];
    V._log.apply(V, ["warn"].concat(t2));
  }, error: function() {
    for (var e6 = arguments.length, t2 = new Array(e6), n2 = 0; n2 < e6; n2++)
      t2[n2] = arguments[n2];
    V._log.apply(V, ["error"].concat(t2));
  }, critical: function() {
    for (var e6, t2 = arguments.length, n2 = new Array(t2), r2 = 0; r2 < t2; r2++)
      n2[r2] = arguments[r2];
    (e6 = console).error.apply(e6, [W].concat(n2));
  }, uninitializedWarning: function(e6) {
    V.error("You must initialize PostHog before calling ".concat(e6));
  } };
  var G = {};
  var z = function(e6) {
    return e6.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
  function Q(e6, t2, n2) {
    if (S(e6)) {
      if (M && e6.forEach === M)
        e6.forEach(t2, n2);
      else if ("length" in e6 && e6.length === +e6.length) {
        for (var r2 = 0, i2 = e6.length; r2 < i2; r2++)
          if (r2 in e6 && t2.call(n2, e6[r2], r2) === G)
            return;
      }
    }
  }
  function Y(e6, t2, n2) {
    if (!x(e6) && !I(e6)) {
      if (S(e6))
        return Q(e6, t2, n2);
      for (var r2 in e6)
        if (k.call(e6, r2) && t2.call(n2, e6[r2], r2) === G)
          return;
    }
  }
  var J = function(e6) {
    for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
      n2[r2 - 1] = arguments[r2];
    return Q(n2, function(t3) {
      for (var n3 in t3)
        void 0 !== t3[n3] && (e6[n3] = t3[n3]);
    }), e6;
  };
  function K(e6, t2) {
    return -1 !== e6.indexOf(t2);
  }
  function X(e6) {
    for (var t2 = Object.keys(e6), n2 = t2.length, r2 = new Array(n2); n2--; )
      r2[n2] = [t2[n2], e6[t2[n2]]];
    return r2;
  }
  var Z = function() {
    return Date.now = Date.now || function() {
      return +/* @__PURE__ */ new Date();
    }, Date.now();
  };
  var ee = function(e6) {
    try {
      return e6();
    } catch (e7) {
      return;
    }
  };
  var te = function(e6) {
    return function() {
      try {
        for (var t2 = arguments.length, n2 = new Array(t2), r2 = 0; r2 < t2; r2++)
          n2[r2] = arguments[r2];
        return e6.apply(this, n2);
      } catch (e7) {
        V.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), V.critical(e7);
      }
    };
  };
  var ne = function(e6) {
    var t2 = {};
    return Y(e6, function(e7, n2) {
      E(e7) && e7.length > 0 && (t2[n2] = e7);
    }), t2;
  };
  function re(e6, t2) {
    return n2 = e6, r2 = function(e7) {
      return E(e7) && !x(t2) ? e7.slice(0, t2) : e7;
    }, i2 = /* @__PURE__ */ new Set(), function e7(t3, n3) {
      return t3 !== Object(t3) ? r2 ? r2(t3, n3) : t3 : i2.has(t3) ? void 0 : (i2.add(t3), S(t3) ? (o2 = [], Q(t3, function(t4) {
        o2.push(e7(t4));
      })) : (o2 = {}, Y(t3, function(t4, n4) {
        i2.has(t4) || (o2[n4] = e7(t4, n4));
      })), o2);
      var o2;
    }(n2);
    var n2, r2, i2;
  }
  function ie(e6) {
    var t2, n2, r2, i2, o2, s2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a2 = 0, u2 = 0, l2 = "", c2 = [];
    if (!e6)
      return e6;
    e6 = oe(e6);
    do {
      t2 = (o2 = e6.charCodeAt(a2++) << 16 | e6.charCodeAt(a2++) << 8 | e6.charCodeAt(a2++)) >> 18 & 63, n2 = o2 >> 12 & 63, r2 = o2 >> 6 & 63, i2 = 63 & o2, c2[u2++] = s2.charAt(t2) + s2.charAt(n2) + s2.charAt(r2) + s2.charAt(i2);
    } while (a2 < e6.length);
    switch (l2 = c2.join(""), e6.length % 3) {
      case 1:
        l2 = l2.slice(0, -2) + "==";
        break;
      case 2:
        l2 = l2.slice(0, -1) + "=";
    }
    return l2;
  }
  var oe = function(e6) {
    var t2, n2, r2, i2, o2 = "";
    for (t2 = n2 = 0, r2 = (e6 = (e6 + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, i2 = 0; i2 < r2; i2++) {
      var s2 = e6.charCodeAt(i2), a2 = null;
      s2 < 128 ? n2++ : a2 = s2 > 127 && s2 < 2048 ? String.fromCharCode(s2 >> 6 | 192, 63 & s2 | 128) : String.fromCharCode(s2 >> 12 | 224, s2 >> 6 & 63 | 128, 63 & s2 | 128), x(a2) || (n2 > t2 && (o2 += e6.substring(t2, n2)), o2 += a2, t2 = n2 = i2 + 1);
    }
    return n2 > t2 && (o2 += e6.substring(t2, e6.length)), o2;
  };
  var se = function() {
    function e6(t2) {
      return t2 && (t2.preventDefault = e6.preventDefault, t2.stopPropagation = e6.stopPropagation), t2;
    }
    return e6.preventDefault = function() {
      this.returnValue = false;
    }, e6.stopPropagation = function() {
      this.cancelBubble = true;
    }, function(t2, n2, r2, i2, o2) {
      if (t2)
        if (t2.addEventListener && !i2)
          t2.addEventListener(n2, r2, !!o2);
        else {
          var s2 = "on" + n2, a2 = t2[s2];
          t2[s2] = function(t3, n3, r3) {
            return function(i3) {
              if (i3 = i3 || e6(null == T ? void 0 : T.event)) {
                var o3, s3 = true;
                P(r3) && (o3 = r3(i3));
                var a3 = n3.call(t3, i3);
                return false !== o3 && false !== a3 || (s3 = false), s3;
              }
            };
          }(t2, r2, a2);
        }
      else
        V.error("No valid element provided to register_event");
    };
  }();
  function ae(e6, t2) {
    var n2 = function() {
      if (!L)
        return t2("document not found");
      var n3 = L.createElement("script");
      n3.type = "text/javascript", n3.src = e6, n3.onload = function(e7) {
        return t2(void 0, e7);
      }, n3.onerror = function(e7) {
        return t2(e7);
      };
      var r2, i2 = L.querySelectorAll("body > script");
      i2.length > 0 ? null === (r2 = i2[0].parentNode) || void 0 === r2 || r2.insertBefore(n3, i2[0]) : L.body.appendChild(n3);
    };
    null != L && L.body ? n2() : null == L || L.addEventListener("DOMContentLoaded", n2);
  }
  function ue(e6) {
    return e6 ? z(e6).split(/\s+/) : [];
  }
  function le(e6) {
    var t2 = "";
    switch (n(e6.className)) {
      case "string":
        t2 = e6.className;
        break;
      case "object":
        t2 = ("baseVal" in e6.className ? e6.className.baseVal : null) || e6.getAttribute("class") || "";
        break;
      default:
        t2 = "";
    }
    return ue(t2);
  }
  function ce(e6) {
    var t2 = "";
    return ve(e6) && !me(e6) && e6.childNodes && e6.childNodes.length && Y(e6.childNodes, function(e7) {
      fe(e7) && e7.textContent && (t2 += z(e7.textContent).split(/(\s+)/).filter(ye).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255));
    }), z(t2);
  }
  function de(e6) {
    return !!e6 && 1 === e6.nodeType;
  }
  function he(e6, t2) {
    return !!e6 && !!e6.tagName && e6.tagName.toLowerCase() === t2.toLowerCase();
  }
  function fe(e6) {
    return !!e6 && 3 === e6.nodeType;
  }
  function pe(e6) {
    return !!e6 && 11 === e6.nodeType;
  }
  var _e = ["a", "button", "form", "input", "select", "textarea", "label"];
  function ge(e6, t2) {
    var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    if (!T || !e6 || he(e6, "html") || !de(e6))
      return false;
    if (null != r2 && r2.url_allowlist) {
      var i2 = T.location.href, o2 = r2.url_allowlist;
      if (o2 && !o2.some(function(e7) {
        return i2.match(e7);
      }))
        return false;
    }
    if (null != r2 && r2.dom_event_allowlist) {
      var s2 = r2.dom_event_allowlist;
      if (s2 && !s2.some(function(e7) {
        return t2.type === e7;
      }))
        return false;
    }
    for (var a2 = false, u2 = [e6], l2 = true, c2 = e6; c2.parentNode && !he(c2, "body"); )
      if (pe(c2.parentNode))
        u2.push(c2.parentNode.host), c2 = c2.parentNode.host;
      else {
        if (!(l2 = c2.parentNode || false))
          break;
        if (_e.indexOf(l2.tagName.toLowerCase()) > -1)
          a2 = true;
        else {
          var d2 = T.getComputedStyle(l2);
          d2 && "pointer" === d2.getPropertyValue("cursor") && (a2 = true);
        }
        u2.push(l2), c2 = l2;
      }
    if (!function(e7, t3) {
      var r3 = null == t3 ? void 0 : t3.element_allowlist;
      if (I(r3))
        return true;
      var i3, o3 = v(e7);
      try {
        var s3 = function() {
          var e8 = i3.value;
          if (r3.some(function(t4) {
            return e8.tagName.toLowerCase() === t4;
          }))
            return { v: true };
        };
        for (o3.s(); !(i3 = o3.n()).done; ) {
          var a3 = s3();
          if ("object" === n(a3))
            return a3.v;
        }
      } catch (e8) {
        o3.e(e8);
      } finally {
        o3.f();
      }
      return false;
    }(u2, r2))
      return false;
    if (!function(e7, t3) {
      var r3 = null == t3 ? void 0 : t3.css_selector_allowlist;
      if (I(r3))
        return true;
      var i3, o3 = v(e7);
      try {
        var s3 = function() {
          var e8 = i3.value;
          if (r3.some(function(t4) {
            return e8.matches(t4);
          }))
            return { v: true };
        };
        for (o3.s(); !(i3 = o3.n()).done; ) {
          var a3 = s3();
          if ("object" === n(a3))
            return a3.v;
        }
      } catch (e8) {
        o3.e(e8);
      } finally {
        o3.f();
      }
      return false;
    }(u2, r2))
      return false;
    var h2 = T.getComputedStyle(e6);
    if (h2 && "pointer" === h2.getPropertyValue("cursor") && "click" === t2.type)
      return true;
    var f2 = e6.tagName.toLowerCase();
    switch (f2) {
      case "html":
        return false;
      case "form":
        return "submit" === t2.type;
      case "input":
      case "select":
      case "textarea":
        return "change" === t2.type || "click" === t2.type;
      default:
        return a2 ? "click" === t2.type : "click" === t2.type && (_e.indexOf(f2) > -1 || "true" === e6.getAttribute("contenteditable"));
    }
  }
  function ve(e6) {
    for (var t2 = e6; t2.parentNode && !he(t2, "body"); t2 = t2.parentNode) {
      var n2 = le(t2);
      if (K(n2, "ph-sensitive") || K(n2, "ph-no-capture"))
        return false;
    }
    if (K(le(e6), "ph-include"))
      return true;
    var r2 = e6.type || "";
    if (E(r2))
      switch (r2.toLowerCase()) {
        case "hidden":
        case "password":
          return false;
      }
    var i2 = e6.name || e6.id || "";
    if (E(i2)) {
      if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i2.replace(/[^a-zA-Z0-9]/g, "")))
        return false;
    }
    return true;
  }
  function me(e6) {
    return !!(he(e6, "input") && !["button", "checkbox", "submit", "reset"].includes(e6.type) || he(e6, "select") || he(e6, "textarea") || "true" === e6.getAttribute("contenteditable"));
  }
  function ye(e6) {
    if (x(e6) || I(e6))
      return false;
    if (E(e6)) {
      e6 = z(e6);
      if (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((e6 || "").replace(/[- ]/g, "")))
        return false;
      if (/(^\d{3}-?\d{2}-?\d{4}$)/.test(e6))
        return false;
    }
    return true;
  }
  function be(e6) {
    var t2 = ce(e6);
    return ye(t2 = "".concat(t2, " ").concat(ke(e6)).trim()) ? t2 : "";
  }
  function ke(e6) {
    var t2 = "";
    return e6 && e6.childNodes && e6.childNodes.length && Y(e6.childNodes, function(e7) {
      var n2;
      if (e7 && "span" === (null === (n2 = e7.tagName) || void 0 === n2 ? void 0 : n2.toLowerCase()))
        try {
          var r2 = ce(e7);
          t2 = "".concat(t2, " ").concat(r2).trim(), e7.childNodes && e7.childNodes.length && (t2 = "".concat(t2, " ").concat(ke(e7)).trim());
        } catch (e8) {
          V.error(e8);
        }
    }), t2;
  }
  function we(e6) {
    return function(e7) {
      var n2 = e7.map(function(e8) {
        var n3, r2, i2 = "";
        if (e8.tag_name && (i2 += e8.tag_name), e8.attr_class) {
          e8.attr_class.sort();
          var o2, s2 = v(e8.attr_class);
          try {
            for (s2.s(); !(o2 = s2.n()).done; ) {
              var a2 = o2.value;
              i2 += ".".concat(a2.replace(/"/g, ""));
            }
          } catch (e9) {
            s2.e(e9);
          } finally {
            s2.f();
          }
        }
        var u2 = t(t(t(t({}, e8.text ? { text: e8.text } : {}), {}, { "nth-child": null !== (n3 = e8.nth_child) && void 0 !== n3 ? n3 : 0, "nth-of-type": null !== (r2 = e8.nth_of_type) && void 0 !== r2 ? r2 : 0 }, e8.href ? { href: e8.href } : {}), e8.attr_id ? { attr_id: e8.attr_id } : {}), e8.attributes), l2 = {};
        return X(u2).sort(function(e9, t2) {
          var n4 = f(e9, 1)[0], r3 = f(t2, 1)[0];
          return n4.localeCompare(r3);
        }).forEach(function(e9) {
          var t2 = f(e9, 2), n4 = t2[0], r3 = t2[1];
          return l2[Se(n4.toString())] = Se(r3.toString());
        }), i2 += ":", i2 += X(u2).map(function(e9) {
          var t2 = f(e9, 2), n4 = t2[0], r3 = t2[1];
          return "".concat(n4, '="').concat(r3, '"');
        }).join("");
      });
      return n2.join(";");
    }(function(e7) {
      return e7.map(function(e8) {
        var t2, n2, r2 = { text: null === (t2 = e8.$el_text) || void 0 === t2 ? void 0 : t2.slice(0, 400), tag_name: e8.tag_name, href: null === (n2 = e8.attr__href) || void 0 === n2 ? void 0 : n2.slice(0, 2048), attr_class: Fe(e8), attr_id: e8.attr__id, nth_child: e8.nth_child, nth_of_type: e8.nth_of_type, attributes: {} };
        return X(e8).filter(function(e9) {
          return 0 === f(e9, 1)[0].indexOf("attr__");
        }).forEach(function(e9) {
          var t3 = f(e9, 2), n3 = t3[0], i2 = t3[1];
          return r2.attributes[n3] = i2;
        }), r2;
      });
    }(e6));
  }
  function Se(e6) {
    return e6.replace(/"|\\"/g, '\\"');
  }
  function Fe(e6) {
    var t2 = e6.attr__class;
    return t2 ? S(t2) ? t2 : ue(t2) : void 0;
  }
  var Pe = function() {
    function e6(t2) {
      r(this, e6), this.clicks = [], this.enabled = t2;
    }
    return o(e6, [{ key: "isRageClick", value: function(e7, t2, n2) {
      if (!this.enabled)
        return false;
      var r2 = this.clicks[this.clicks.length - 1];
      if (r2 && Math.abs(e7 - r2.x) + Math.abs(t2 - r2.y) < 30 && n2 - r2.timestamp < 1e3) {
        if (this.clicks.push({ x: e7, y: t2, timestamp: n2 }), 3 === this.clicks.length)
          return true;
      } else
        this.clicks = [{ x: e7, y: t2, timestamp: n2 }];
      return false;
    } }]), e6;
  }();
  var Re = "$people_distinct_id";
  var Ie = "__alias";
  var Ee = "__timers";
  var xe = "$autocapture_disabled_server_side";
  var Ce = "$session_recording_enabled_server_side";
  var Oe = "$console_log_recording_enabled_server_side";
  var Te = "$session_recording_recorder_version_server_side";
  var $e = "$session_recording_network_payload_capture";
  var Ae = "$session_recording_canvas_recording";
  var Me = "$sesid";
  var qe = "$session_is_sampled";
  var De = "$enabled_feature_flags";
  var Le = "$early_access_features";
  var Ne = "$stored_person_properties";
  var Be = "$stored_group_properties";
  var je = "$surveys";
  var He = "$flag_call_reported";
  var Ue = "$user_state";
  var We = "$posthog_quota_limited";
  var Ve = "$client_session_props";
  var Ge = [Re, Ie, "__cmpns", Ee, Ce, Me, De, Ue, We, Le, Be, Ne, je, He, Ve];
  function ze(e6, t2) {
    return t2.length > e6 ? t2.slice(0, e6) + "..." : t2;
  }
  var Qe = { _initializedTokens: [], _isDisabledServerSide: null, _isAutocaptureEnabled: false, _setIsAutocaptureEnabled: function(e6) {
    var t2, n2 = x(this._isDisabledServerSide) ? !(null === (t2 = e6.persistence) || void 0 === t2 || !t2.props[xe]) : this._isDisabledServerSide, r2 = !!e6.config.autocapture;
    this._isAutocaptureEnabled = r2 && !n2;
  }, _previousElementSibling: function(e6) {
    if (e6.previousElementSibling)
      return e6.previousElementSibling;
    var t2 = e6;
    do {
      t2 = t2.previousSibling;
    } while (t2 && !de(t2));
    return t2;
  }, _getAugmentPropertiesFromElement: function(e6) {
    if (!ve(e6))
      return {};
    var t2 = {};
    return Y(e6.attributes, function(e7) {
      if (0 === e7.name.indexOf("data-ph-capture-attribute")) {
        var n2 = e7.name.replace("data-ph-capture-attribute-", ""), r2 = e7.value;
        n2 && r2 && ye(r2) && (t2[n2] = r2);
      }
    }), t2;
  }, _getPropertiesFromElement: function(e6, t2, n2) {
    var r2, i2 = e6.tagName.toLowerCase(), o2 = { tag_name: i2 };
    _e.indexOf(i2) > -1 && !n2 && ("a" === i2.toLowerCase() || "button" === i2.toLowerCase() ? o2.$el_text = ze(1024, be(e6)) : o2.$el_text = ze(1024, ce(e6)));
    var s2 = le(e6);
    s2.length > 0 && (o2.classes = s2.filter(function(e7) {
      return "" !== e7;
    }));
    var a2 = null === (r2 = this.config) || void 0 === r2 ? void 0 : r2.element_attribute_ignorelist;
    Y(e6.attributes, function(n3) {
      var r3;
      if ((!me(e6) || -1 !== ["name", "id", "class"].indexOf(n3.name)) && ((null == a2 || !a2.includes(n3.name)) && !t2 && ye(n3.value) && (r3 = n3.name, !E(r3) || "_ngcontent" !== r3.substring(0, 10) && "_nghost" !== r3.substring(0, 7)))) {
        var i3 = n3.value;
        "class" === n3.name && (i3 = ue(i3).join(" ")), o2["attr__" + n3.name] = ze(1024, i3);
      }
    });
    for (var u2 = 1, l2 = 1, c2 = e6; c2 = this._previousElementSibling(c2); )
      u2++, c2.tagName === e6.tagName && l2++;
    return o2.nth_child = u2, o2.nth_of_type = l2, o2;
  }, _getDefaultProperties: function(e6) {
    return { $event_type: e6, $ce_version: 1 };
  }, _extractCustomPropertyValue: function(e6) {
    var t2 = [];
    return Y(null == L ? void 0 : L.querySelectorAll(e6.css_selector), function(e7) {
      var n2;
      ["input", "select"].indexOf(e7.tagName.toLowerCase()) > -1 ? n2 = e7.value : e7.textContent && (n2 = e7.textContent), ye(n2) && t2.push(n2);
    }), t2.join(", ");
  }, _getCustomProperties: function(e6) {
    var t2 = this, n2 = {};
    return Y(this._customProperties, function(r2) {
      Y(r2.event_selectors, function(i2) {
        Y(null == L ? void 0 : L.querySelectorAll(i2), function(i3) {
          K(e6, i3) && ve(i3) && (n2[r2.name] = t2._extractCustomPropertyValue(r2));
        });
      });
    }), n2;
  }, _getEventTarget: function(e6) {
    return I(e6.target) ? e6.srcElement || null : null !== (t2 = e6.target) && void 0 !== t2 && t2.shadowRoot ? e6.composedPath()[0] || null : e6.target || null;
    var t2;
  }, _captureEvent: function(e6, t2) {
    var n2, r2 = this, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "$autocapture", o2 = this._getEventTarget(e6);
    (fe(o2) && (o2 = o2.parentNode || null), "$autocapture" === i2 && "click" === e6.type && e6 instanceof MouseEvent) && (null !== (n2 = this.rageclicks) && void 0 !== n2 && n2.isRageClick(e6.clientX, e6.clientY, (/* @__PURE__ */ new Date()).getTime()) && this._captureEvent(e6, t2, "$rageclick"));
    if (o2 && ge(o2, e6, this.config)) {
      for (var s2, a2, u2 = [o2], l2 = o2; l2.parentNode && !he(l2, "body"); )
        pe(l2.parentNode) ? (u2.push(l2.parentNode.host), l2 = l2.parentNode.host) : (u2.push(l2.parentNode), l2 = l2.parentNode);
      var c2, d2 = [], h2 = {}, f2 = false;
      if (Y(u2, function(e7) {
        var n3 = ve(e7);
        "a" === e7.tagName.toLowerCase() && (c2 = e7.getAttribute("href"), c2 = n3 && ye(c2) && c2), K(le(e7), "ph-no-capture") && (f2 = true), d2.push(r2._getPropertiesFromElement(e7, t2.config.mask_all_element_attributes, t2.config.mask_all_text));
        var i3 = r2._getAugmentPropertiesFromElement(e7);
        J(h2, i3);
      }), t2.config.mask_all_text || ("a" === o2.tagName.toLowerCase() || "button" === o2.tagName.toLowerCase() ? d2[0].$el_text = be(o2) : d2[0].$el_text = ce(o2)), c2 && (d2[0].attr__href = c2), f2)
        return false;
      var p2 = J(this._getDefaultProperties(e6.type), t2.elementsChainAsString ? { $elements_chain: we(d2) } : { $elements: d2 }, null !== (s2 = d2[0]) && void 0 !== s2 && s2.$el_text ? { $el_text: null === (a2 = d2[0]) || void 0 === a2 ? void 0 : a2.$el_text } : {}, this._getCustomProperties(u2), h2);
      return t2.capture(i2, p2), true;
    }
  }, _navigate: function(e6) {
    T && (T.location.href = e6);
  }, _addDomEventHandlers: function(e6) {
    var t2 = this;
    if (T && L) {
      var n2 = function(n3) {
        n3 = n3 || (null == T ? void 0 : T.event), t2._captureEvent(n3, e6);
      };
      se(L, "submit", n2, false, true), se(L, "change", n2, false, true), se(L, "click", n2, false, true);
    }
  }, _customProperties: [], rageclicks: null, config: void 0, init: function(e6) {
    var t2;
    O(e6.__autocapture) || (this.config = e6.__autocapture), null !== (t2 = this.config) && void 0 !== t2 && t2.url_allowlist && (this.config.url_allowlist = this.config.url_allowlist.map(function(e7) {
      return new RegExp(e7);
    })), this.rageclicks = new Pe(e6.config.rageclick);
  }, afterDecideResponse: function(e6, t2) {
    var n2 = t2.config.token;
    this._initializedTokens.indexOf(n2) > -1 ? V.info('autocapture already initialized for token "' + n2 + '"') : (t2.persistence && t2.persistence.register(s({}, xe, !!e6.autocapture_opt_out)), this._isDisabledServerSide = !!e6.autocapture_opt_out, this._setIsAutocaptureEnabled(t2), this._initializedTokens.push(n2), e6 && e6.config && e6.config.enable_collect_everything && this._isAutocaptureEnabled ? (e6.custom_properties && (this._customProperties = e6.custom_properties), this._addDomEventHandlers(t2)) : t2.__autocapture = false);
  }, enabledForProject: function(e6, t2, n2) {
    if (!e6)
      return true;
    t2 = I(t2) ? 10 : t2, n2 = I(n2) ? 10 : n2;
    for (var r2 = 0, i2 = 0; i2 < e6.length; i2++)
      r2 += e6.charCodeAt(i2);
    return r2 % t2 < n2;
  }, isBrowserSupported: function() {
    return P(null == L ? void 0 : L.querySelectorAll);
  } };
  !function(e6) {
    for (var t2 in e6)
      P(e6[t2]) && (e6[t2] = e6[t2].bind(e6));
  }(Qe), function(e6) {
    for (var t2 in e6)
      P(e6[t2]) && (e6[t2] = te(e6[t2]));
  }(Qe);
  var Ye = "$active_feature_flags";
  var Je = "$override_feature_flags";
  var Ke = "$feature_flag_payloads";
  var Xe = function(e6) {
    var t2, n2 = {}, r2 = v(X(e6 || {}));
    try {
      for (r2.s(); !(t2 = r2.n()).done; ) {
        var i2 = f(t2.value, 2), o2 = i2[0], s2 = i2[1];
        s2 && (n2[o2] = s2);
      }
    } catch (e7) {
      r2.e(e7);
    } finally {
      r2.f();
    }
    return n2;
  };
  var Ze = function() {
    function e6(t2) {
      r(this, e6), this.instance = t2, this._override_warning = false, this.featureFlagEventHandlers = [], this.reloadFeatureFlagsQueued = false, this.reloadFeatureFlagsInAction = false;
    }
    return o(e6, [{ key: "getFlags", value: function() {
      return Object.keys(this.getFlagVariants());
    } }, { key: "getFlagVariants", value: function() {
      var e7 = this.instance.get_property(De), t2 = this.instance.get_property(Je);
      if (!t2)
        return e7 || {};
      for (var n2 = J({}, e7), r2 = Object.keys(t2), i2 = 0; i2 < r2.length; i2++)
        false === t2[r2[i2]] ? delete n2[r2[i2]] : n2[r2[i2]] = t2[r2[i2]];
      return this._override_warning || (V.warn(" Overriding feature flags!", { enabledFlags: e7, overriddenFlags: t2, finalFlags: n2 }), this._override_warning = true), n2;
    } }, { key: "getFlagPayloads", value: function() {
      return this.instance.get_property(Ke) || {};
    } }, { key: "reloadFeatureFlags", value: function() {
      this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = true, this._startReloadTimer());
    } }, { key: "setAnonymousDistinctId", value: function(e7) {
      this.$anon_distinct_id = e7;
    } }, { key: "setReloadingPaused", value: function(e7) {
      this.reloadFeatureFlagsInAction = e7;
    } }, { key: "resetRequestQueue", value: function() {
      this.reloadFeatureFlagsQueued = false;
    } }, { key: "_startReloadTimer", value: function() {
      var e7 = this;
      this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout(function() {
        !e7.reloadFeatureFlagsInAction && e7.reloadFeatureFlagsQueued && (e7.reloadFeatureFlagsQueued = false, e7._reloadFeatureFlagsRequest());
      }, 5);
    } }, { key: "_reloadFeatureFlagsRequest", value: function() {
      var e7 = this;
      if (!this.instance.config.advanced_disable_feature_flags) {
        this.setReloadingPaused(true);
        var t2 = this.instance.config.token, n2 = this.instance.get_property(Ne), r2 = this.instance.get_property(Be), i2 = ie(JSON.stringify({ token: t2, distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups(), $anon_distinct_id: this.$anon_distinct_id, person_properties: n2, group_properties: r2, disable_flags: this.instance.config.advanced_disable_feature_flags || void 0 }));
        this.instance._send_request(this.instance.requestRouter.endpointFor("api", "/decide/?v=3"), { data: i2 }, { method: "POST" }, this.instance._prepare_callback(function(t3) {
          e7.$anon_distinct_id = void 0, e7.receivedFeatureFlags(t3), e7.setReloadingPaused(false), e7._startReloadTimer();
        }));
      }
    } }, { key: "getFeatureFlag", value: function(e7) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) {
        var n2, r2 = this.getFlagVariants()[e7], i2 = "".concat(r2), o2 = this.instance.get_property(He) || {};
        if (t2.send_event || !("send_event" in t2)) {
          if (!(e7 in o2) || !o2[e7].includes(i2))
            S(o2[e7]) ? o2[e7].push(i2) : o2[e7] = [i2], null === (n2 = this.instance.persistence) || void 0 === n2 || n2.register(s({}, He, o2)), this.instance.capture("$feature_flag_called", { $feature_flag: e7, $feature_flag_response: r2 });
        }
        return r2;
      }
      V.warn('getFeatureFlag for key "' + e7 + `" failed. Feature flags didn't load in time.`);
    } }, { key: "getFeatureFlagPayload", value: function(e7) {
      return this.getFlagPayloads()[e7];
    } }, { key: "isFeatureEnabled", value: function(e7) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0)
        return !!this.getFeatureFlag(e7, t2);
      V.warn('isFeatureEnabled for key "' + e7 + `" failed. Feature flags didn't load in time.`);
    } }, { key: "addFeatureFlagsHandler", value: function(e7) {
      this.featureFlagEventHandlers.push(e7);
    } }, { key: "removeFeatureFlagsHandler", value: function(e7) {
      this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(function(t2) {
        return t2 !== e7;
      });
    } }, { key: "receivedFeatureFlags", value: function(e7) {
      if (this.instance.persistence) {
        this.instance.decideEndpointWasHit = true;
        var n2 = this.getFlagVariants(), r2 = this.getFlagPayloads();
        !function(e8, n3) {
          var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o2 = e8.featureFlags, a2 = e8.featureFlagPayloads;
          if (o2)
            if (S(o2)) {
              var u2, l2 = {};
              if (o2)
                for (var c2 = 0; c2 < o2.length; c2++)
                  l2[o2[c2]] = true;
              n3 && n3.register((s(u2 = {}, Ye, o2), s(u2, De, l2), u2));
            } else {
              var d2, h2 = o2, f2 = a2;
              e8.errorsWhileComputingFlags && (h2 = t(t({}, r3), h2), f2 = t(t({}, i2), f2)), n3 && n3.register((s(d2 = {}, Ye, Object.keys(Xe(h2))), s(d2, De, h2 || {}), s(d2, Ke, f2 || {}), d2));
            }
        }(e7, this.instance.persistence, n2, r2), this._fireFeatureFlagsCallbacks();
      }
    } }, { key: "override", value: function(e7) {
      if (!this.instance.__loaded || !this.instance.persistence)
        return V.uninitializedWarning("posthog.feature_flags.override");
      if (this._override_warning = false, false === e7)
        this.instance.persistence.unregister(Je);
      else if (S(e7)) {
        for (var t2 = {}, n2 = 0; n2 < e7.length; n2++)
          t2[e7[n2]] = true;
        this.instance.persistence.register(s({}, Je, t2));
      } else
        this.instance.persistence.register(s({}, Je, e7));
    } }, { key: "onFeatureFlags", value: function(e7) {
      var t2 = this;
      if (this.addFeatureFlagsHandler(e7), this.instance.decideEndpointWasHit) {
        var n2 = this._prepareFeatureFlagsForCallbacks(), r2 = n2.flags, i2 = n2.flagVariants;
        e7(r2, i2);
      }
      return function() {
        return t2.removeFeatureFlagsHandler(e7);
      };
    } }, { key: "updateEarlyAccessFeatureEnrollment", value: function(e7, n2) {
      var r2, i2, o2 = s({}, "$feature_enrollment/".concat(e7), n2);
      this.instance.capture("$feature_enrollment_update", { $feature_flag: e7, $feature_enrollment: n2, $set: o2 }), this.setPersonPropertiesForFlags(o2, false);
      var a2 = t(t({}, this.getFlagVariants()), {}, s({}, e7, n2));
      null === (r2 = this.instance.persistence) || void 0 === r2 || r2.register((s(i2 = {}, Ye, Object.keys(Xe(a2))), s(i2, De, a2), i2)), this._fireFeatureFlagsCallbacks();
    } }, { key: "getEarlyAccessFeatures", value: function(e7) {
      var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r2 = this.instance.get_property(Le);
      if (r2 && !n2)
        return e7(r2);
      this.instance._send_request(this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token)), {}, { method: "GET" }, function(n3) {
        var r3, i2 = n3.earlyAccessFeatures;
        return null === (r3 = t2.instance.persistence) || void 0 === r3 || r3.register(s({}, Le, i2)), e7(i2);
      });
    } }, { key: "_prepareFeatureFlagsForCallbacks", value: function() {
      var e7 = this.getFlags(), t2 = this.getFlagVariants();
      return { flags: e7.filter(function(e8) {
        return t2[e8];
      }), flagVariants: Object.keys(t2).filter(function(e8) {
        return t2[e8];
      }).reduce(function(e8, n2) {
        return e8[n2] = t2[n2], e8;
      }, {}) };
    } }, { key: "_fireFeatureFlagsCallbacks", value: function() {
      var e7 = this._prepareFeatureFlagsForCallbacks(), t2 = e7.flags, n2 = e7.flagVariants;
      this.featureFlagEventHandlers.forEach(function(e8) {
        return e8(t2, n2);
      });
    } }, { key: "setPersonPropertiesForFlags", value: function(e7) {
      var n2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r2 = this.instance.get_property(Ne) || {};
      this.instance.register(s({}, Ne, t(t({}, r2), e7))), n2 && this.instance.reloadFeatureFlags();
    } }, { key: "resetPersonPropertiesForFlags", value: function() {
      this.instance.unregister(Ne);
    } }, { key: "setGroupPropertiesForFlags", value: function(e7) {
      var n2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r2 = this.instance.get_property(Be) || {};
      0 !== Object.keys(r2).length && Object.keys(r2).forEach(function(n3) {
        r2[n3] = t(t({}, r2[n3]), e7[n3]), delete e7[n3];
      }), this.instance.register(s({}, Be, t(t({}, r2), e7))), n2 && this.instance.reloadFeatureFlags();
    } }, { key: "resetGroupPropertiesForFlags", value: function(e7) {
      if (e7) {
        var n2 = this.instance.get_property(Be) || {};
        this.instance.register(s({}, Be, t(t({}, n2), {}, s({}, e7, {}))));
      } else
        this.instance.unregister(Be);
    } }]), e6;
  }();
  Math.trunc || (Math.trunc = function(e6) {
    return e6 < 0 ? Math.ceil(e6) : Math.floor(e6);
  }), Number.isInteger || (Number.isInteger = function(e6) {
    return C(e6) && isFinite(e6) && Math.floor(e6) === e6;
  });
  var et = "0123456789abcdef";
  var tt = function() {
    function e6(t2) {
      if (r(this, e6), this.bytes = t2, 16 !== t2.length)
        throw new TypeError("not 128-bit length");
    }
    return o(e6, [{ key: "toString", value: function() {
      for (var e7 = "", t2 = 0; t2 < this.bytes.length; t2++)
        e7 = e7 + et.charAt(this.bytes[t2] >>> 4) + et.charAt(15 & this.bytes[t2]), 3 !== t2 && 5 !== t2 && 7 !== t2 && 9 !== t2 || (e7 += "-");
      if (36 !== e7.length)
        throw new Error("Invalid UUIDv7 was generated");
      return e7;
    } }, { key: "clone", value: function() {
      return new e6(this.bytes.slice(0));
    } }, { key: "equals", value: function(e7) {
      return 0 === this.compareTo(e7);
    } }, { key: "compareTo", value: function(e7) {
      for (var t2 = 0; t2 < 16; t2++) {
        var n2 = this.bytes[t2] - e7.bytes[t2];
        if (0 !== n2)
          return Math.sign(n2);
      }
      return 0;
    } }], [{ key: "fromFieldsV7", value: function(t2, n2, r2, i2) {
      if (!Number.isInteger(t2) || !Number.isInteger(n2) || !Number.isInteger(r2) || !Number.isInteger(i2) || t2 < 0 || n2 < 0 || r2 < 0 || i2 < 0 || t2 > 281474976710655 || n2 > 4095 || r2 > 1073741823 || i2 > 4294967295)
        throw new RangeError("invalid field value");
      var o2 = new Uint8Array(16);
      return o2[0] = t2 / Math.pow(2, 40), o2[1] = t2 / Math.pow(2, 32), o2[2] = t2 / Math.pow(2, 24), o2[3] = t2 / Math.pow(2, 16), o2[4] = t2 / Math.pow(2, 8), o2[5] = t2, o2[6] = 112 | n2 >>> 8, o2[7] = n2, o2[8] = 128 | r2 >>> 24, o2[9] = r2 >>> 16, o2[10] = r2 >>> 8, o2[11] = r2, o2[12] = i2 >>> 24, o2[13] = i2 >>> 16, o2[14] = i2 >>> 8, o2[15] = i2, new e6(o2);
    } }]), e6;
  }();
  var nt = function() {
    function e6() {
      r(this, e6), s(this, "timestamp", 0), s(this, "counter", 0), s(this, "random", new ot());
    }
    return o(e6, [{ key: "generate", value: function() {
      var e7 = this.generateOrAbort();
      if (I(e7)) {
        this.timestamp = 0;
        var t2 = this.generateOrAbort();
        if (I(t2))
          throw new Error("Could not generate UUID after timestamp reset");
        return t2;
      }
      return e7;
    } }, { key: "generateOrAbort", value: function() {
      var e7 = Date.now();
      if (e7 > this.timestamp)
        this.timestamp = e7, this.resetCounter();
      else {
        if (!(e7 + 1e4 > this.timestamp))
          return;
        this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter());
      }
      return tt.fromFieldsV7(this.timestamp, Math.trunc(this.counter / Math.pow(2, 30)), this.counter & Math.pow(2, 30) - 1, this.random.nextUint32());
    } }, { key: "resetCounter", value: function() {
      this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
    } }]), e6;
  }();
  var rt = function(e6) {
    if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG)
      throw new Error("no cryptographically strong RNG available");
    for (var t2 = 0; t2 < e6.length; t2++)
      e6[t2] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
    return e6;
  };
  T && !I(T.crypto) && crypto.getRandomValues && (rt = function(e6) {
    return crypto.getRandomValues(e6);
  });
  var it;
  var ot = function() {
    function e6() {
      r(this, e6), s(this, "buffer", new Uint32Array(8)), s(this, "cursor", 1 / 0);
    }
    return o(e6, [{ key: "nextUint32", value: function() {
      return this.cursor >= this.buffer.length && (rt(this.buffer), this.cursor = 0), this.buffer[this.cursor++];
    } }]), e6;
  }();
  var st = function() {
    return at().toString();
  };
  var at = function() {
    return (it || (it = new nt())).generate();
  };
  var ut = "Thu, 01 Jan 1970 00:00:00 GMT";
  var lt = "";
  var ct = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
  function dt(e6, t2) {
    if (t2) {
      var n2 = function(e7) {
        var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
        if (lt)
          return lt;
        if (!t3)
          return "";
        if (["localhost", "127.0.0.1"].includes(e7))
          return "";
        for (var n3 = e7.split("."), r3 = Math.min(n3.length, 8), i2 = "dmn_chk_" + st(), o2 = new RegExp("(^|;)\\s*" + i2 + "=1"); !lt && r3--; ) {
          var s2 = n3.slice(r3).join("."), a2 = i2 + "=1;domain=." + s2;
          t3.cookie = a2, o2.test(t3.cookie) && (t3.cookie = a2 + ";expires=" + ut, lt = s2);
        }
        return lt;
      }(e6);
      if (!n2) {
        var r2 = function(e7) {
          var t3 = e7.match(ct);
          return t3 ? t3[0] : "";
        }(e6);
        r2 !== n2 && V.info("Warning: cookie subdomain discovery mismatch", r2, n2), n2 = r2;
      }
      return n2 ? "; domain=." + n2 : "";
    }
    return "";
  }
  var ht = { is_supported: function() {
    return !!L;
  }, error: function(e6) {
    V.error("cookieStore error: " + e6);
  }, get: function(e6) {
    if (L) {
      try {
        for (var t2 = e6 + "=", n2 = L.cookie.split(";").filter(function(e7) {
          return e7.length;
        }), r2 = 0; r2 < n2.length; r2++) {
          for (var i2 = n2[r2]; " " == i2.charAt(0); )
            i2 = i2.substring(1, i2.length);
          if (0 === i2.indexOf(t2))
            return decodeURIComponent(i2.substring(t2.length, i2.length));
        }
      } catch (e7) {
      }
      return null;
    }
  }, parse: function(e6) {
    var t2;
    try {
      t2 = JSON.parse(ht.get(e6)) || {};
    } catch (e7) {
    }
    return t2;
  }, set: function(e6, t2, n2, r2, i2) {
    if (L)
      try {
        var o2 = "", s2 = "", a2 = dt(L.location.hostname, r2);
        if (n2) {
          var u2 = /* @__PURE__ */ new Date();
          u2.setTime(u2.getTime() + 24 * n2 * 60 * 60 * 1e3), o2 = "; expires=" + u2.toUTCString();
        }
        i2 && (s2 = "; secure");
        var l2 = e6 + "=" + encodeURIComponent(JSON.stringify(t2)) + o2 + "; SameSite=Lax; path=/" + a2 + s2;
        return l2.length > 3686.4 && V.warn("cookieStore warning: large cookie, len=" + l2.length), L.cookie = l2, l2;
      } catch (e7) {
        return;
      }
  }, remove: function(e6, t2) {
    try {
      ht.set(e6, "", -1, t2);
    } catch (e7) {
      return;
    }
  } };
  var ft = null;
  var pt = { is_supported: function() {
    if (!x(ft))
      return ft;
    var e6 = true;
    if (I(T))
      e6 = false;
    else
      try {
        var t2 = "__mplssupport__";
        pt.set(t2, "xyz"), '"xyz"' !== pt.get(t2) && (e6 = false), pt.remove(t2);
      } catch (t3) {
        e6 = false;
      }
    return e6 || V.error("localStorage unsupported; falling back to cookie store"), ft = e6, e6;
  }, error: function(e6) {
    V.error("localStorage error: " + e6);
  }, get: function(e6) {
    try {
      return null == T ? void 0 : T.localStorage.getItem(e6);
    } catch (e7) {
      pt.error(e7);
    }
    return null;
  }, parse: function(e6) {
    try {
      return JSON.parse(pt.get(e6)) || {};
    } catch (e7) {
    }
    return null;
  }, set: function(e6, t2) {
    try {
      null == T || T.localStorage.setItem(e6, JSON.stringify(t2));
    } catch (e7) {
      pt.error(e7);
    }
  }, remove: function(e6) {
    try {
      null == T || T.localStorage.removeItem(e6);
    } catch (e7) {
      pt.error(e7);
    }
  } };
  var _t = ["distinct_id", Me, qe];
  var gt = t(t({}, pt), {}, { parse: function(e6) {
    try {
      var t2 = {};
      try {
        t2 = ht.parse(e6) || {};
      } catch (e7) {
      }
      var n2 = J(t2, JSON.parse(pt.get(e6) || "{}"));
      return pt.set(e6, n2), n2;
    } catch (e7) {
    }
    return null;
  }, set: function(e6, t2, n2, r2, i2) {
    try {
      pt.set(e6, t2);
      var o2 = {};
      _t.forEach(function(e7) {
        t2[e7] && (o2[e7] = t2[e7]);
      }), Object.keys(o2).length && ht.set(e6, o2, n2, r2, i2);
    } catch (e7) {
      pt.error(e7);
    }
  }, remove: function(e6, t2) {
    try {
      null == T || T.localStorage.removeItem(e6), ht.remove(e6, t2);
    } catch (e7) {
      pt.error(e7);
    }
  } });
  var vt = {};
  var mt = { is_supported: function() {
    return true;
  }, error: function(e6) {
    V.error("memoryStorage error: " + e6);
  }, get: function(e6) {
    return vt[e6] || null;
  }, parse: function(e6) {
    return vt[e6] || null;
  }, set: function(e6, t2) {
    vt[e6] = t2;
  }, remove: function(e6) {
    delete vt[e6];
  } };
  var yt = null;
  var bt = { is_supported: function() {
    if (!x(yt))
      return yt;
    if (yt = true, I(T))
      yt = false;
    else
      try {
        var e6 = "__support__";
        bt.set(e6, "xyz"), '"xyz"' !== bt.get(e6) && (yt = false), bt.remove(e6);
      } catch (e7) {
        yt = false;
      }
    return yt;
  }, error: function(e6) {
    V.error("sessionStorage error: ", e6);
  }, get: function(e6) {
    try {
      return null == T ? void 0 : T.sessionStorage.getItem(e6);
    } catch (e7) {
      bt.error(e7);
    }
    return null;
  }, parse: function(e6) {
    try {
      return JSON.parse(bt.get(e6)) || null;
    } catch (e7) {
    }
    return null;
  }, set: function(e6, t2) {
    try {
      null == T || T.sessionStorage.setItem(e6, JSON.stringify(t2));
    } catch (e7) {
      bt.error(e7);
    }
  }, remove: function(e6) {
    try {
      null == T || T.sessionStorage.removeItem(e6);
    } catch (e7) {
      bt.error(e7);
    }
  } };
  var kt = ["localhost", "127.0.0.1"];
  var wt = !(!j || !("withCredentials" in new j())) || !!B;
  var St = function(e6) {
    var t2 = null == L ? void 0 : L.createElement("a");
    return I(t2) ? null : (t2.href = e6, t2);
  };
  var Ft = function(e6, t2) {
    return !!function(e7) {
      try {
        new RegExp(e7);
      } catch (e8) {
        return false;
      }
      return true;
    }(t2) && new RegExp(t2).test(e6);
  };
  var Pt = function(e6, t2) {
    for (var n2, r2 = ((e6.split("#")[0] || "").split("?")[1] || "").split("&"), i2 = 0; i2 < r2.length; i2++) {
      var o2 = r2[i2].split("=");
      if (o2[0] === t2) {
        n2 = o2;
        break;
      }
    }
    if (!S(n2) || n2.length < 2)
      return "";
    var s2 = n2[1];
    try {
      s2 = decodeURIComponent(s2);
    } catch (e7) {
      V.error("Skipping decoding for malformed query param: " + s2);
    }
    return s2.replace(/\+/g, " ");
  };
  var Rt = function(e6, t2) {
    var n2 = e6.match(new RegExp(t2 + "=([^&]*)"));
    return n2 ? n2[1] : null;
  };
  var It = { campaignParams: function(e6) {
    var t2 = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gbraid", "wbraid", "fbclid", "msclkid"].concat(e6 || []), n2 = {};
    return Y(t2, function(e7) {
      var t3 = L ? Pt(L.URL, e7) : "";
      t3.length && (n2[e7] = t3);
    }), n2;
  }, searchEngine: function() {
    var e6 = null == L ? void 0 : L.referrer;
    return e6 ? 0 === e6.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e6.search("https?://(.*)bing.com") ? "bing" : 0 === e6.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e6.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null;
  }, searchInfo: function() {
    var e6 = It.searchEngine(), t2 = "yahoo" != e6 ? "q" : "p", n2 = {};
    if (!x(e6)) {
      n2.$search_engine = e6;
      var r2 = L ? Pt(L.referrer, t2) : "";
      r2.length && (n2.ph_keyword = r2);
    }
    return n2;
  }, browser: function(e6, t2, n2) {
    return t2 = t2 || "", n2 || K(e6, " OPR/") ? K(e6, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e6) ? "BlackBerry" : K(e6, "IEMobile") || K(e6, "WPDesktop") ? "Internet Explorer Mobile" : K(e6, "SamsungBrowser/") ? "Samsung Internet" : K(e6, "Edge") || K(e6, "Edg/") ? "Microsoft Edge" : K(e6, "FBIOS") ? "Facebook Mobile" : K(e6, "Chrome") ? "Chrome" : K(e6, "CriOS") ? "Chrome iOS" : K(e6, "UCWEB") || K(e6, "UCBrowser") ? "UC Browser" : K(e6, "FxiOS") ? "Firefox iOS" : K(t2, "Apple") || function(e7) {
      return K(e7, "Safari") && !K(e7, "Chrome") && !K(e7, "Android");
    }(e6) ? K(e6, "Mobile") ? "Mobile Safari" : "Safari" : K(e6, "Android") ? "Android Mobile" : K(e6, "Konqueror") || K(e6, "konqueror") ? "Konqueror" : K(e6, "Firefox") ? "Firefox" : K(e6, "MSIE") || K(e6, "Trident/") ? "Internet Explorer" : K(e6, "Gecko") ? "Mozilla" : "";
  }, browserVersion: function(e6, t2, n2) {
    var r2 = { "Internet Explorer Mobile": [/rv:(\d+(\.\d+)?)/], "Microsoft Edge": [/Edge?\/(\d+(\.\d+)?)/], Chrome: [/Chrome\/(\d+(\.\d+)?)/], "Chrome iOS": [/CriOS\/(\d+(\.\d+)?)/], "UC Browser": [/(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/], Safari: [/Version\/(\d+(\.\d+)?)/], "Mobile Safari": [/Version\/(\d+(\.\d+)?)/], Opera: [/(Opera|OPR)\/(\d+(\.\d+)?)/], Firefox: [/Firefox\/(\d+(\.\d+)?)/], "Firefox iOS": [/FxiOS\/(\d+(\.\d+)?)/], Konqueror: [/Konqueror[:/]?(\d+(\.\d+)?)/i], BlackBerry: [/BlackBerry (\d+(\.\d+)?)/, /Version\/(\d+(\.\d+)?)/], "Android Mobile": [/android\s(\d+(\.\d+)?)/], "Samsung Internet": [/SamsungBrowser\/(\d+(\.\d+)?)/], "Internet Explorer": [/(rv:|MSIE )(\d+(\.\d+)?)/], Mozilla: [/rv:(\d+(\.\d+)?)/] }[It.browser(e6, t2, n2)];
    if (I(r2))
      return null;
    for (var i2 = 0; i2 < r2.length; i2++) {
      var o2 = r2[i2], s2 = e6.match(o2);
      if (s2)
        return parseFloat(s2[s2.length - 2]);
    }
    return null;
  }, browserLanguage: function() {
    return navigator.language || navigator.userLanguage;
  }, os: function(e6) {
    if (/Windows/i.test(e6)) {
      if (/Phone/.test(e6) || /WPDesktop/.test(e6))
        return { os_name: "Windows Phone", os_version: "" };
      var t2 = /Windows NT ([0-9.]+)/i.exec(e6);
      return t2 && t2[1] ? { os_name: "Windows", os_version: t2[1] } : { os_name: "Windows", os_version: "" };
    }
    if (/(iPhone|iPad|iPod)/.test(e6)) {
      var n2 = /OS (\d+)_(\d+)_?(\d+)?/i.exec(e6);
      return n2 && n2[1] ? { os_name: "iOS", os_version: [n2[1], n2[2], n2[3] || "0"].join(".") } : { os_name: "iOS", os_version: "" };
    }
    if (/Android/.test(e6)) {
      var r2 = /Android (\d+)\.(\d+)\.?(\d+)?/i.exec(e6);
      return r2 && r2[1] ? { os_name: "Android", os_version: [r2[1], r2[2], r2[3] || "0"].join(".") } : { os_name: "Android", os_version: "" };
    }
    if (/(BlackBerry|PlayBook|BB10)/i.test(e6))
      return { os_name: "BlackBerry", os_version: "" };
    if (/Mac/i.test(e6)) {
      var i2 = /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i.exec(e6);
      return i2 && i2[1] ? { os_name: "Mac OS X", os_version: [i2[1], i2[2], i2[3] || "0"].join(".") } : { os_name: "Mac OS X", os_version: "" };
    }
    return /Linux/.test(e6) ? { os_name: "Linux", os_version: "" } : /CrOS/.test(e6) ? { os_name: "Chrome OS", os_version: "" } : { os_name: "", os_version: "" };
  }, device: function(e6) {
    return /Windows Phone/i.test(e6) || /WPDesktop/.test(e6) ? "Windows Phone" : /iPad/.test(e6) ? "iPad" : /iPod/.test(e6) ? "iPod Touch" : /iPhone/.test(e6) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e6) ? "BlackBerry" : /Android/.test(e6) && !/Mobile/.test(e6) ? "Android Tablet" : /Android/.test(e6) ? "Android" : "";
  }, deviceType: function(e6) {
    var t2 = this.device(e6);
    return "iPad" === t2 || "Android Tablet" === t2 ? "Tablet" : t2 ? "Mobile" : "Desktop";
  }, referrer: function() {
    return (null == L ? void 0 : L.referrer) || "$direct";
  }, referringDomain: function() {
    var e6;
    return null != L && L.referrer && (null === (e6 = St(L.referrer)) || void 0 === e6 ? void 0 : e6.host) || "$direct";
  }, properties: function() {
    if (!H)
      return {};
    var e6 = It.os(H), t2 = e6.os_name, n2 = e6.os_version;
    return J(ne({ $os: t2, $os_version: n2, $browser: It.browser(H, navigator.vendor, U.opera), $device: It.device(H), $device_type: It.deviceType(H) }), { $current_url: null == N ? void 0 : N.href, $host: null == N ? void 0 : N.host, $pathname: null == N ? void 0 : N.pathname, $raw_user_agent: H.length > 1e3 ? H.substring(0, 997) + "..." : H, $browser_version: It.browserVersion(H, navigator.vendor, U.opera), $browser_language: It.browserLanguage(), $screen_height: null == T ? void 0 : T.screen.height, $screen_width: null == T ? void 0 : T.screen.width, $viewport_height: null == T ? void 0 : T.innerHeight, $viewport_width: null == T ? void 0 : T.innerWidth, $lib: "web", $lib_version: m.LIB_VERSION, $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10), $time: Z() / 1e3 });
  }, people_properties: function() {
    if (!H)
      return {};
    var e6 = It.os(H), t2 = e6.os_name, n2 = e6.os_version;
    return J(ne({ $os: t2, $os_version: n2, $browser: It.browser(H, navigator.vendor, U.opera) }), { $browser_version: It.browserVersion(H, navigator.vendor, U.opera) });
  } };
  var Et = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"];
  var xt = function() {
    function e6(t2) {
      r(this, e6);
      var n2 = "";
      t2.token && (n2 = t2.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), this.props = {}, this.campaign_params_saved = false, this.custom_campaign_params = t2.custom_campaign_params || [], t2.persistence_name ? this.name = "ph_" + t2.persistence_name : this.name = "ph_" + n2 + "_posthog", -1 === Et.indexOf(t2.persistence.toLowerCase()) && (V.critical("Unknown persistence type " + t2.persistence + "; falling back to localStorage+cookie"), t2.persistence = "localStorage+cookie");
      var i2 = t2.persistence.toLowerCase();
      "localstorage" === i2 && pt.is_supported() ? this.storage = pt : "localstorage+cookie" === i2 && gt.is_supported() ? this.storage = gt : "sessionstorage" === i2 && bt.is_supported() ? this.storage = bt : "memory" === i2 ? this.storage = mt : "cookie" === i2 ? this.storage = ht : gt.is_supported() ? this.storage = gt : this.storage = ht, this.load(), this.update_config(t2), this.save();
    }
    return o(e6, [{ key: "properties", value: function() {
      var e7 = {};
      return Y(this.props, function(t2, n2) {
        if (n2 === De && R(t2))
          for (var r2 = Object.keys(t2), i2 = 0; i2 < r2.length; i2++)
            e7["$feature/".concat(r2[i2])] = t2[r2[i2]];
        else
          s2 = n2, a2 = false, (x(o2 = Ge) ? a2 : q && o2.indexOf === q ? -1 != o2.indexOf(s2) : (Y(o2, function(e8) {
            if (a2 || (a2 = e8 === s2))
              return G;
          }), a2)) || (e7[n2] = t2);
        var o2, s2, a2;
      }), e7;
    } }, { key: "load", value: function() {
      if (!this.disabled) {
        var e7 = this.storage.parse(this.name);
        e7 && (this.props = J({}, e7));
      }
    } }, { key: "save", value: function() {
      this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure);
    } }, { key: "remove", value: function() {
      this.storage.remove(this.name, false), this.storage.remove(this.name, true);
    } }, { key: "clear", value: function() {
      this.remove(), this.props = {};
    } }, { key: "register_once", value: function(e7, t2, n2) {
      var r2 = this;
      if (R(e7)) {
        I(t2) && (t2 = "None"), this.expire_days = I(n2) ? this.default_expiry : n2;
        var i2 = false;
        if (Y(e7, function(e8, n3) {
          r2.props.hasOwnProperty(n3) && r2.props[n3] !== t2 || (r2.props[n3] = e8, i2 = true);
        }), i2)
          return this.save(), true;
      }
      return false;
    } }, { key: "register", value: function(e7, t2) {
      var n2 = this;
      if (R(e7)) {
        this.expire_days = I(t2) ? this.default_expiry : t2;
        var r2 = false;
        if (Y(e7, function(t3, i2) {
          e7.hasOwnProperty(i2) && n2.props[i2] !== t3 && (n2.props[i2] = t3, r2 = true);
        }), r2)
          return this.save(), true;
      }
      return false;
    } }, { key: "unregister", value: function(e7) {
      e7 in this.props && (delete this.props[e7], this.save());
    } }, { key: "update_campaign_params", value: function() {
      this.campaign_params_saved || (this.register(It.campaignParams(this.custom_campaign_params)), this.campaign_params_saved = true);
    } }, { key: "update_search_keyword", value: function() {
      this.register(It.searchInfo());
    } }, { key: "update_referrer_info", value: function() {
      this.register({ $referrer: this.props.$referrer || It.referrer(), $referring_domain: this.props.$referring_domain || It.referringDomain() });
    } }, { key: "get_referrer_info", value: function() {
      return ne({ $referrer: this.props.$referrer, $referring_domain: this.props.$referring_domain });
    } }, { key: "safe_merge", value: function(e7) {
      return Y(this.props, function(t2, n2) {
        n2 in e7 || (e7[n2] = t2);
      }), e7;
    } }, { key: "update_config", value: function(e7) {
      this.default_expiry = this.expire_days = e7.cookie_expiration, this.set_disabled(e7.disable_persistence), this.set_cross_subdomain(e7.cross_subdomain_cookie), this.set_secure(e7.secure_cookie);
    } }, { key: "set_disabled", value: function(e7) {
      this.disabled = e7, this.disabled ? this.remove() : this.save();
    } }, { key: "set_cross_subdomain", value: function(e7) {
      e7 !== this.cross_subdomain && (this.cross_subdomain = e7, this.remove(), this.save());
    } }, { key: "get_cross_subdomain", value: function() {
      return !!this.cross_subdomain;
    } }, { key: "set_secure", value: function(e7) {
      e7 !== this.secure && (this.secure = e7, this.remove(), this.save());
    } }, { key: "set_event_timer", value: function(e7, t2) {
      var n2 = this.props[Ee] || {};
      n2[e7] = t2, this.props[Ee] = n2, this.save();
    } }, { key: "remove_event_timer", value: function(e7) {
      var t2 = (this.props[Ee] || {})[e7];
      return I(t2) || (delete this.props[Ee][e7], this.save()), t2;
    } }, { key: "get_user_state", value: function() {
      return this.props[Ue] || "anonymous";
    } }, { key: "set_user_state", value: function(e7) {
      this.props[Ue] = e7, this.save();
    } }, { key: "get_quota_limits", value: function() {
      return this.props[We] || {};
    } }, { key: "set_quota_limits", value: function(e7) {
      this.props[We] = e7, this.save();
    } }]), e6;
  }();
  var Ct = 2;
  var Ot = 4;
  var Tt = o(function e2(t2) {
    var n2, i2, o2 = this, a2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r(this, e2), s(this, "bucketSize", 100), s(this, "refillRate", 10), s(this, "mutationBuckets", {}), s(this, "loggedTracker", {}), s(this, "refillBuckets", function() {
      Object.keys(o2.mutationBuckets).forEach(function(e6) {
        o2.mutationBuckets[e6] = o2.mutationBuckets[e6] + o2.refillRate, o2.mutationBuckets[e6] >= o2.bucketSize && delete o2.mutationBuckets[e6];
      });
    }), s(this, "getNodeOrRelevantParent", function(e6) {
      var t3 = o2.rrweb.mirror.getNode(e6);
      if ("svg" !== (null == t3 ? void 0 : t3.nodeName) && t3 instanceof Element) {
        var n3 = t3.closest("svg");
        if (n3)
          return [o2.rrweb.mirror.getId(n3), n3];
      }
      return [e6, t3];
    }), s(this, "numberOfChanges", function(e6) {
      var t3, n3, r2, i3, o3, s2, a3, u2;
      return (null !== (t3 = null === (n3 = e6.removes) || void 0 === n3 ? void 0 : n3.length) && void 0 !== t3 ? t3 : 0) + (null !== (r2 = null === (i3 = e6.attributes) || void 0 === i3 ? void 0 : i3.length) && void 0 !== r2 ? r2 : 0) + (null !== (o3 = null === (s2 = e6.texts) || void 0 === s2 ? void 0 : s2.length) && void 0 !== o3 ? o3 : 0) + (null !== (a3 = null === (u2 = e6.adds) || void 0 === u2 ? void 0 : u2.length) && void 0 !== a3 ? a3 : 0);
    }), s(this, "throttleMutations", function(e6) {
      if (3 !== e6.type || 0 !== e6.data.source)
        return e6;
      var t3 = e6.data, n3 = o2.numberOfChanges(t3);
      t3.attributes && (t3.attributes = t3.attributes.filter(function(e7) {
        var t4, n4, r3, i3 = f(o2.getNodeOrRelevantParent(e7.id), 2), s2 = i3[0], a3 = i3[1];
        if (0 === o2.mutationBuckets[s2])
          return false;
        (o2.mutationBuckets[s2] = null !== (t4 = o2.mutationBuckets[s2]) && void 0 !== t4 ? t4 : o2.bucketSize, o2.mutationBuckets[s2] = Math.max(o2.mutationBuckets[s2] - 1, 0), 0 === o2.mutationBuckets[s2]) && (o2.loggedTracker[s2] || (o2.loggedTracker[s2] = true, null === (n4 = (r3 = o2.options).onBlockedNode) || void 0 === n4 || n4.call(r3, s2, a3)));
        return e7;
      }));
      var r2 = o2.numberOfChanges(t3);
      return 0 !== r2 || n3 === r2 ? e6 : void 0;
    }), this.rrweb = t2, this.options = a2, this.refillRate = null !== (n2 = this.options.refillRate) && void 0 !== n2 ? n2 : this.refillRate, this.bucketSize = null !== (i2 = this.options.bucketSize) && void 0 !== i2 ? i2 : this.bucketSize, setInterval(function() {
      o2.refillBuckets();
    }, 1e3);
  });
  var $t = function(e6) {
    return e6[e6.DomContentLoaded = 0] = "DomContentLoaded", e6[e6.Load = 1] = "Load", e6[e6.FullSnapshot = 2] = "FullSnapshot", e6[e6.IncrementalSnapshot = 3] = "IncrementalSnapshot", e6[e6.Meta = 4] = "Meta", e6[e6.Custom = 5] = "Custom", e6[e6.Plugin = 6] = "Plugin", e6;
  }($t || {});
  var At = { initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"], maskRequestFn: function(e6) {
    return e6;
  }, recordHeaders: false, recordBody: false, recordInitialRequests: false, recordPerformance: false, performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"], payloadSizeLimitBytes: 1e6 };
  var Mt = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"];
  var qt = ["/s/", "/e/", "/i/vo/e/"];
  function Dt(e6, t2, n2, r2) {
    var i2 = null == t2 ? void 0 : t2["content-length"];
    return I(i2) ? "[SessionReplay] no content-length header for ".concat(r2, ", cannot determine payload size") : i2 && parseInt(i2) > n2 ? "[SessionReplay] ".concat(r2, " body too large to record") : e6;
  }
  var Lt = function(e6, n2) {
    var r2, i2, o2, s2 = e6.session_recording, a2 = false !== s2.recordHeaders && n2.recordHeaders, u2 = false !== s2.recordBody && n2.recordBody, l2 = false !== s2.recordPerformance && n2.recordPerformance, c2 = (r2 = s2, o2 = Math.min(1e6, null !== (i2 = r2.payloadSizeLimitBytes) && void 0 !== i2 ? i2 : 1e6), function(e7) {
      return null != e7 && e7.requestBody && (e7.requestBody = Dt(e7.requestBody, e7.requestHeaders, o2, "Request")), null != e7 && e7.responseBody && (e7.responseBody = Dt(e7.responseBody, e7.responseHeaders, o2, "Response")), e7;
    }), d2 = function(e7) {
      return c2(function(e8) {
        var t3 = St(e8.name);
        if (!(t3 && t3.pathname && qt.includes(t3.pathname)))
          return e8;
      }((t2 = e7, Object.keys(null !== (n3 = t2.requestHeaders) && void 0 !== n3 ? n3 : {}).forEach(function(e8) {
        var n4;
        Mt.includes(e8.toLowerCase()) && (null === (n4 = t2.requestHeaders) || void 0 === n4 || delete n4[e8]);
      }), t2)));
      var t2, n3;
    }, h2 = P(e6.session_recording.maskNetworkRequestFn);
    return h2 && P(e6.session_recording.maskCapturedNetworkRequestFn) && V.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), h2 && (e6.session_recording.maskCapturedNetworkRequestFn = function(n3) {
      var r3 = e6.session_recording.maskNetworkRequestFn({ url: n3.name });
      return t(t({}, n3), {}, { name: null == r3 ? void 0 : r3.url });
    }), s2.maskRequestFn = P(e6.session_recording.maskCapturedNetworkRequestFn) ? function(t2) {
      var n3, r3, i3, o3 = d2(t2);
      return o3 && null !== (n3 = null === (r3 = (i3 = e6.session_recording).maskCapturedNetworkRequestFn) || void 0 === r3 ? void 0 : r3.call(i3, o3)) && void 0 !== n3 ? n3 : void 0;
    } : void 0, s2.maskRequestFn || (s2.maskRequestFn = d2), t(t(t({}, At), s2), {}, { recordHeaders: a2, recordBody: u2, recordPerformance: l2, recordInitialRequests: l2 });
  };
  var Nt = "__ph_opt_in_out_";
  function Bt(e6, t2) {
    Qt(true, e6, t2);
  }
  function jt(e6, t2) {
    Qt(false, e6, t2);
  }
  function Ht(e6, t2) {
    return "1" === zt(e6, t2);
  }
  function Ut(e6, t2) {
    return !!function(e7) {
      if (e7 && e7.respectDnt) {
        var t3 = e7 && e7.window || T, n2 = null == t3 ? void 0 : t3.navigator, r2 = false;
        return Y([null == n2 ? void 0 : n2.doNotTrack, n2.msDoNotTrack, t3.doNotTrack], function(e8) {
          K([true, 1, "1", "yes"], e8) && (r2 = true);
        }), r2;
      }
      return false;
    }(t2) || "0" === zt(e6, t2);
  }
  function Wt(e6, t2) {
    Vt(t2 = t2 || {}).remove(Gt(e6, t2), !!t2.crossSubdomainCookie);
  }
  function Vt(e6) {
    return "localStorage" === (e6 = e6 || {}).persistenceType ? pt : "localStorage+cookie" === e6.persistenceType ? gt : ht;
  }
  function Gt(e6, t2) {
    return ((t2 = t2 || {}).persistencePrefix || Nt) + e6;
  }
  function zt(e6, t2) {
    return Vt(t2).get(Gt(e6, t2));
  }
  function Qt(e6, t2, n2) {
    E(t2) && t2.length ? (Vt(n2 = n2 || {}).set(Gt(t2, n2), e6 ? 1 : 0, C(n2.cookieExpiration) ? n2.cookieExpiration : null, n2.crossSubdomainCookie, n2.secureCookie), n2.capture && e6 && n2.capture(n2.captureEventName || "$opt_in", n2.captureProperties || {}, { send_instantly: true })) : V.error("gdpr." + (e6 ? "optIn" : "optOut") + " called with an invalid token");
  }
  function Yt(e6) {
    var t2 = false;
    try {
      var n2 = e6.config.token, r2 = e6.config.respect_dnt, i2 = e6.config.opt_out_capturing_persistence_type, o2 = e6.config.opt_out_capturing_cookie_prefix || void 0, s2 = e6.config.window;
      n2 && (t2 = Ut(n2, { respectDnt: r2, persistenceType: i2, persistencePrefix: o2, window: s2 }));
    } catch (e7) {
      V.error("Unexpected error when checking capturing opt-out status: " + e7);
    }
    return t2;
  }
  var Jt;
  var Kt = 3e5;
  var Xt = Kt;
  !function(e6) {
    e6[e6.Mutation = 0] = "Mutation", e6[e6.MouseMove = 1] = "MouseMove", e6[e6.MouseInteraction = 2] = "MouseInteraction", e6[e6.Scroll = 3] = "Scroll", e6[e6.ViewportResize = 4] = "ViewportResize", e6[e6.Input = 5] = "Input", e6[e6.TouchMove = 6] = "TouchMove", e6[e6.MediaInteraction = 7] = "MediaInteraction", e6[e6.StyleSheetRule = 8] = "StyleSheetRule", e6[e6.CanvasMutation = 9] = "CanvasMutation", e6[e6.Font = 10] = "Font", e6[e6.Log = 11] = "Log", e6[e6.Drag = 12] = "Drag", e6[e6.StyleDeclaration = 13] = "StyleDeclaration", e6[e6.Selection = 14] = "Selection", e6[e6.AdoptedStyleSheet = 15] = "AdoptedStyleSheet";
  }(Jt || (Jt = {}));
  var Zt = [Jt.MouseMove, Jt.MouseInteraction, Jt.Scroll, Jt.ViewportResize, Jt.Input, Jt.TouchMove, Jt.MediaInteraction, Jt.Drag];
  var en = function(e6) {
    return { rrwebMethod: e6, enqueuedAt: Date.now(), attempt: 1 };
  };
  var tn = function() {
    function e6(t2) {
      var n2 = this;
      if (r(this, e6), s(this, "queuedRRWebEvents", []), s(this, "isIdle", false), s(this, "_linkedFlagSeen", false), s(this, "_lastActivityTimestamp", Date.now()), s(this, "windowId", null), s(this, "sessionId", null), s(this, "_linkedFlag", null), s(this, "_sampleRate", null), s(this, "_minimumDuration", null), s(this, "_forceAllowLocalhostNetworkCapture", false), this.instance = t2, this._captureStarted = false, this._endpoint = "/s/", this.stopRrweb = void 0, this.receivedDecide = false, null == T || T.addEventListener("beforeunload", function() {
        n2._flushBuffer();
      }), null == T || T.addEventListener("offline", function() {
        n2._tryAddCustomEvent("browser offline", {});
      }), null == T || T.addEventListener("online", function() {
        n2._tryAddCustomEvent("browser online", {});
      }), !this.instance.sessionManager)
        throw V.error("Session recording started without valid sessionManager"), new Error("Session recording started without valid sessionManager. This is a bug.");
      this.buffer = this.clearBuffer();
    }
    return o(e6, [{ key: "started", get: function() {
      return this._captureStarted;
    } }, { key: "sessionManager", get: function() {
      if (!this.instance.sessionManager)
        throw V.error("Session recording started without valid sessionManager"), new Error("Session recording started without valid sessionManager. This is a bug.");
      return this.instance.sessionManager;
    } }, { key: "isSampled", get: function() {
      return C(this._sampleRate) ? this.instance.get_property(qe) : null;
    } }, { key: "sessionDuration", get: function() {
      var e7, t2, n2 = null === (e7 = this.buffer) || void 0 === e7 ? void 0 : e7.data[(null === (t2 = this.buffer) || void 0 === t2 ? void 0 : t2.data.length) - 1], r2 = this.sessionManager.checkAndGetSessionAndWindowId(true).sessionStartTimestamp;
      return n2 ? n2.timestamp - r2 : null;
    } }, { key: "isRecordingEnabled", get: function() {
      var e7 = !!this.instance.get_property(Ce), t2 = !this.instance.config.disable_session_recording;
      return T && e7 && t2;
    } }, { key: "isConsoleLogCaptureEnabled", get: function() {
      var e7 = !!this.instance.get_property(Oe), t2 = this.instance.config.enable_recording_console_log;
      return null != t2 ? t2 : e7;
    } }, { key: "canvasRecording", get: function() {
      var e7 = this.instance.get_property(Ae);
      return e7 && e7.fps && e7.quality ? { enabled: e7.enabled, fps: e7.fps, quality: e7.quality } : void 0;
    } }, { key: "recordingVersion", get: function() {
      var e7, t2 = this.instance.get_property(Te);
      return (null === (e7 = this.instance.config.session_recording) || void 0 === e7 ? void 0 : e7.recorderVersion) || t2 || "v1";
    } }, { key: "networkPayloadCapture", get: function() {
      var e7, t2, n2 = this.instance.get_property($e), r2 = { recordHeaders: null === (e7 = this.instance.config.session_recording) || void 0 === e7 ? void 0 : e7.recordHeaders, recordBody: null === (t2 = this.instance.config.session_recording) || void 0 === t2 ? void 0 : t2.recordBody }, i2 = (null == r2 ? void 0 : r2.recordHeaders) || (null == n2 ? void 0 : n2.recordHeaders), o2 = (null == r2 ? void 0 : r2.recordBody) || (null == n2 ? void 0 : n2.recordBody), s2 = this.instance.config.capture_performance || (null == n2 ? void 0 : n2.capturePerformance);
      return i2 || o2 || s2 ? { recordHeaders: i2, recordBody: o2, recordPerformance: s2 } : void 0;
    } }, { key: "status", get: function() {
      return this.receivedDecide ? this.isRecordingEnabled ? E(this._linkedFlag) && !this._linkedFlagSeen ? "buffering" : O(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "disabled" : "buffering";
    } }, { key: "startRecordingIfEnabled", value: function() {
      this.isRecordingEnabled ? (this.startCaptureAndTrySendingQueuedSnapshots(), V.info("[SessionRecording] started")) : (this.stopRecording(), this.clearBuffer());
    } }, { key: "stopRecording", value: function() {
      this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this._captureStarted = false, V.info("[SessionRecording] stopped"));
    } }, { key: "makeSamplingDecision", value: function(e7) {
      var t2, n2 = this.sessionId !== e7;
      if (C(this._sampleRate)) {
        var r2, i2 = this.isSampled;
        if (n2 || !O(i2))
          r2 = Math.random() < this._sampleRate;
        else
          r2 = i2;
        r2 || V.warn("[SessionSampling] Sample rate (".concat(this._sampleRate, ") has determined that this sessionId (").concat(e7, ") will not be sent to the server.")), null === (t2 = this.instance.persistence) || void 0 === t2 || t2.register(s({}, qe, r2));
      } else {
        var o2;
        null === (o2 = this.instance.persistence) || void 0 === o2 || o2.register(s({}, qe, null));
      }
    } }, { key: "afterDecideResponse", value: function(e7) {
      var n2, r2, i2, o2, a2, u2, l2, c2, d2, h2, f2, p2 = this;
      this.instance.persistence && this.instance.persistence.register((s(f2 = {}, Ce, !!e7.sessionRecording), s(f2, Oe, null === (a2 = e7.sessionRecording) || void 0 === a2 ? void 0 : a2.consoleLogRecordingEnabled), s(f2, Te, null === (u2 = e7.sessionRecording) || void 0 === u2 ? void 0 : u2.recorderVersion), s(f2, $e, t({ capturePerformance: e7.capturePerformance }, null === (l2 = e7.sessionRecording) || void 0 === l2 ? void 0 : l2.networkPayloadCapture)), s(f2, Ae, { enabled: null === (c2 = e7.sessionRecording) || void 0 === c2 ? void 0 : c2.recordCanvas, fps: null === (d2 = e7.sessionRecording) || void 0 === d2 ? void 0 : d2.canvasFps, quality: null === (h2 = e7.sessionRecording) || void 0 === h2 ? void 0 : h2.canvasQuality }), f2));
      var _2 = null === (n2 = e7.sessionRecording) || void 0 === n2 ? void 0 : n2.sampleRate;
      this._sampleRate = I(_2) || x(_2) ? null : parseFloat(_2);
      var g2, v2 = null === (r2 = e7.sessionRecording) || void 0 === r2 ? void 0 : r2.minimumDurationMilliseconds;
      (this._minimumDuration = I(v2) ? null : v2, this._linkedFlag = (null === (i2 = e7.sessionRecording) || void 0 === i2 ? void 0 : i2.linkedFlag) || null, null !== (o2 = e7.sessionRecording) && void 0 !== o2 && o2.endpoint) && (this._endpoint = null === (g2 = e7.sessionRecording) || void 0 === g2 ? void 0 : g2.endpoint);
      if (C(this._sampleRate) && this.sessionManager.onSessionId(function(e8) {
        p2.makeSamplingDecision(e8);
      }), E(this._linkedFlag)) {
        var m2 = this._linkedFlag;
        this.instance.onFeatureFlags(function(e8) {
          p2._linkedFlagSeen = e8.includes(m2);
        });
      }
      this.receivedDecide = true, this.startRecordingIfEnabled();
    } }, { key: "log", value: function(e7) {
      var t2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
      null === (t2 = this.instance.sessionRecording) || void 0 === t2 || t2.onRRwebEmit({ type: 6, data: { plugin: "rrweb/console@1", payload: { level: n2, trace: [], payload: [JSON.stringify(e7)] } }, timestamp: Z() });
    } }, { key: "startCaptureAndTrySendingQueuedSnapshots", value: function() {
      this._startCapture();
    } }, { key: "_startCapture", value: function() {
      var e7 = this;
      if (!I(Object.assign) && !(this._captureStarted || this.instance.config.disable_session_recording || Yt(this.instance))) {
        this._captureStarted = true, this.sessionManager.checkAndGetSessionAndWindowId();
        var t2 = "v2" === this.recordingVersion ? "recorder-v2.js" : "recorder.js";
        this.instance.__loaded_recorder_version !== this.recordingVersion ? ae(this.instance.requestRouter.endpointFor("assets", "/static/".concat(t2, "?v=").concat(m.LIB_VERSION)), function(n2) {
          if (n2)
            return V.error("Could not load ".concat(t2), n2);
          e7._onScriptLoaded();
        }) : this._onScriptLoaded();
      }
    } }, { key: "_isInteractiveEvent", value: function(e7) {
      var t2;
      return 3 === e7.type && -1 !== Zt.indexOf(null === (t2 = e7.data) || void 0 === t2 ? void 0 : t2.source);
    } }, { key: "_updateWindowAndSessionIds", value: function(e7) {
      var t2 = this._isInteractiveEvent(e7);
      t2 || this.isIdle || e7.timestamp - this._lastActivityTimestamp > Xt && (this.isIdle = true, this._tryAddCustomEvent("sessionIdle", { reason: "user inactivity", timeSinceLastActive: e7.timestamp - this._lastActivityTimestamp, threshold: Xt }));
      var n2 = false;
      if (t2 && (this._lastActivityTimestamp = e7.timestamp, this.isIdle && (this.isIdle = false, this._tryAddCustomEvent("sessionNoLongerIdle", { reason: "user activity", type: e7.type }), n2 = true)), !this.isIdle) {
        var r2 = this.sessionManager.checkAndGetSessionAndWindowId(!t2, e7.timestamp), i2 = r2.windowId, o2 = r2.sessionId, s2 = this.sessionId !== o2, a2 = this.windowId !== i2;
        this.windowId = i2, this.sessionId = o2, (n2 || -1 === [Ct, Ot].indexOf(e7.type) && (a2 || s2)) && this._tryTakeFullSnapshot();
      }
    } }, { key: "_tryRRWebMethod", value: function(e7) {
      try {
        return e7.rrwebMethod(), true;
      } catch (t2) {
        return V.warn("[Session-Recording] could not emit queued rrweb event.", t2), this.queuedRRWebEvents.length < 10 && this.queuedRRWebEvents.push({ enqueuedAt: e7.enqueuedAt || Date.now(), attempt: e7.attempt++, rrwebMethod: e7.rrwebMethod }), false;
      }
    } }, { key: "_tryAddCustomEvent", value: function(e7, t2) {
      var n2 = this;
      return this._tryRRWebMethod(en(function() {
        return n2.rrwebRecord.addCustomEvent(e7, t2);
      }));
    } }, { key: "_tryTakeFullSnapshot", value: function() {
      var e7 = this;
      return this._tryRRWebMethod(en(function() {
        return e7.rrwebRecord.takeFullSnapshot();
      }));
    } }, { key: "_onScriptLoaded", value: function() {
      var e7, n2 = this, r2 = { blockClass: "ph-no-capture", blockSelector: void 0, ignoreClass: "ph-ignore-input", maskTextClass: "ph-mask", maskTextSelector: void 0, maskTextFn: void 0, maskAllInputs: true, maskInputOptions: {}, maskInputFn: void 0, slimDOMOptions: {}, collectFonts: false, inlineStylesheet: true, recordCrossOriginIframes: false };
      this.rrwebRecord = T.rrweb ? T.rrweb.record : T.rrwebRecord;
      for (var i2 = this.instance.config.session_recording, o2 = 0, s2 = Object.entries(i2 || {}); o2 < s2.length; o2++) {
        var a2 = f(s2[o2], 2), u2 = a2[0], l2 = a2[1];
        u2 in r2 && (r2[u2] = l2);
      }
      if (this.canvasRecording && this.canvasRecording.enabled && (r2.recordCanvas = true, r2.sampling = { canvas: this.canvasRecording.fps }, r2.dataURLOptions = { type: "image/webp", quality: this.canvasRecording.quality }), this.rrwebRecord) {
        this.mutationRateLimiter = null !== (e7 = this.mutationRateLimiter) && void 0 !== e7 ? e7 : new Tt(this.rrwebRecord, { onBlockedNode: function(e8, t2) {
          var r3 = "Too many mutations on node '".concat(e8, "'. Rate limiting. This could be due to SVG animations or something similar");
          V.info(r3, { node: t2 }), n2.log("[PostHog Recorder] " + r3, "warn");
        } }), this._scheduleFullSnapshot();
        var c2 = this._gatherRRWebPlugins();
        this.stopRrweb = this.rrwebRecord(t({ emit: function(e8) {
          n2.onRRwebEmit(e8);
        }, plugins: c2 }, r2)), this.instance._addCaptureHook(function(e8) {
          try {
            if ("$pageview" === e8) {
              var t2 = T ? n2._maskUrl(T.location.href) : "";
              if (!t2)
                return;
              n2._tryAddCustomEvent("$pageview", { href: t2 }), n2._tryTakeFullSnapshot();
            }
          } catch (e9) {
            V.error("Could not add $pageview to rrweb session", e9);
          }
        }), this._lastActivityTimestamp = Date.now(), this.isIdle = false, this._tryAddCustomEvent("$session_options", { sessionRecordingOptions: r2, activePlugins: c2.map(function(e8) {
          return null == e8 ? void 0 : e8.name;
        }) }), this._tryAddCustomEvent("$posthog_config", { config: this.instance.config });
      } else
        V.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.");
    } }, { key: "_scheduleFullSnapshot", value: function() {
      var e7 = this;
      this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), this._fullSnapshotTimer = setInterval(function() {
        e7._tryTakeFullSnapshot();
      }, Kt);
    } }, { key: "_gatherRRWebPlugins", value: function() {
      var e7 = [];
      (U.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled && e7.push(U.rrwebConsoleRecord.getRecordConsolePlugin()), this.networkPayloadCapture && P(U.getRecordNetworkPlugin)) && (!kt.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? e7.push(U.getRecordNetworkPlugin(Lt(this.instance.config, this.networkPayloadCapture))) : V.info("[SessionReplay-NetworkCapture] not started because we are on localhost."));
      return e7;
    } }, { key: "onRRwebEmit", value: function(e7) {
      if (this._processQueuedEvents(), e7 && R(e7)) {
        if (e7.type === $t.Meta) {
          var t2 = this._maskUrl(e7.data.href);
          if (!t2)
            return;
          e7.data.href = t2;
        }
        e7.type === $t.FullSnapshot && this._scheduleFullSnapshot();
        var n2 = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e7) : e7;
        if (n2) {
          var r2 = function(e8) {
            var t3 = e8;
            if (t3 && R(t3) && 6 === t3.type && R(t3.data) && "rrweb/console@1" === t3.data.plugin) {
              t3.data.payload.payload.length > 10 && (t3.data.payload.payload = t3.data.payload.payload.slice(0, 10), t3.data.payload.payload.push("...[truncated]"));
              for (var n3 = [], r3 = 0; r3 < t3.data.payload.payload.length; r3++)
                t3.data.payload.payload[r3] && t3.data.payload.payload[r3].length > 2e3 ? n3.push(t3.data.payload.payload[r3].slice(0, 2e3) + "...[truncated]") : n3.push(t3.data.payload.payload[r3]);
              return t3.data.payload.payload = n3, e8;
            }
            return e8;
          }(n2), i2 = JSON.stringify(r2).length;
          if (this._updateWindowAndSessionIds(r2), !this.isIdle || r2.type === $t.Custom) {
            var o2 = { $snapshot_bytes: i2, $snapshot_data: r2, $session_id: this.sessionId, $window_id: this.windowId };
            "disabled" !== this.status ? this._captureSnapshotBuffered(o2) : this.clearBuffer();
          }
        }
      }
    } }, { key: "_processQueuedEvents", value: function() {
      var e7 = this;
      if (this.queuedRRWebEvents.length) {
        var t2 = p(this.queuedRRWebEvents);
        this.queuedRRWebEvents = [], t2.forEach(function(n2) {
          Date.now() - n2.enqueuedAt > 2e3 ? e7._tryAddCustomEvent("rrwebQueueTimeout", { enqueuedAt: n2.enqueuedAt, attempt: n2.attempt, queueLength: t2.length }) : e7._tryRRWebMethod(n2) && e7._tryAddCustomEvent("rrwebQueueSuccess", { enqueuedAt: n2.enqueuedAt, attempt: n2.attempt, queueLength: t2.length });
        });
      }
    } }, { key: "_maskUrl", value: function(e7) {
      var t2 = this.instance.config.session_recording;
      if (t2.maskNetworkRequestFn) {
        var n2, r2 = { url: e7 };
        return null === (n2 = r2 = t2.maskNetworkRequestFn(r2)) || void 0 === n2 ? void 0 : n2.url;
      }
      return e7;
    } }, { key: "clearBuffer", value: function() {
      return this.buffer = void 0, { size: 0, data: [], sessionId: this.sessionId, windowId: this.windowId };
    } }, { key: "_flushBuffer", value: function() {
      var e7 = this;
      this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
      var t2 = this._minimumDuration, n2 = this.sessionDuration, r2 = C(n2) && n2 >= 0, i2 = C(t2) && r2 && n2 < t2;
      return "buffering" === this.status || i2 ? (this.flushBufferTimer = setTimeout(function() {
        e7._flushBuffer();
      }, 2e3), this.buffer || this.clearBuffer()) : this.buffer && 0 !== this.buffer.data.length ? (this._captureSnapshot({ $snapshot_bytes: this.buffer.size, $snapshot_data: this.buffer.data, $session_id: this.buffer.sessionId, $window_id: this.buffer.windowId }), this.clearBuffer()) : this.buffer || this.clearBuffer();
    } }, { key: "_captureSnapshotBuffered", value: function(e7) {
      var t2, n2 = this, r2 = 2 + ((null === (t2 = this.buffer) || void 0 === t2 ? void 0 : t2.data.length) || 0);
      (!this.buffer || this.buffer.size + e7.$snapshot_bytes + r2 > 943718.4 || this.buffer.sessionId && this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), x(this.buffer.sessionId) && !x(this.sessionId) && (this.buffer.sessionId = this.sessionId, this.buffer.windowId = this.windowId), this.buffer.size += e7.$snapshot_bytes, this.buffer.data.push(e7.$snapshot_data), this.flushBufferTimer || (this.flushBufferTimer = setTimeout(function() {
        n2._flushBuffer();
      }, 2e3));
    } }, { key: "_captureSnapshot", value: function(e7) {
      this.instance.capture("$snapshot", e7, { method: "POST", _url: this.instance.requestRouter.endpointFor("api", this._endpoint), _noTruncate: true, _batchKey: "recordings", _metrics: { rrweb_full_snapshot: e7.$snapshot_data.type === Ct } });
    } }]), e6;
  }();
  var nn = function() {
    function e6(t2) {
      r(this, e6), this.instance = t2, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags();
    }
    return o(e6, [{ key: "call", value: function() {
      var e7 = this, t2 = ie(JSON.stringify({ token: this.instance.config.token, distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups(), person_properties: this.instance.get_property(Ne), group_properties: this.instance.get_property(Be), disable_flags: this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load || void 0 }));
      this.instance._send_request(this.instance.requestRouter.endpointFor("api", "/decide/?v=3"), { data: t2, verbose: true }, { method: "POST" }, function(t3) {
        return e7.parseDecideResponse(t3);
      });
    } }, { key: "parseDecideResponse", value: function(e7) {
      var t2, n2 = this;
      if (this.instance.featureFlags.setReloadingPaused(false), this.instance.featureFlags._startReloadTimer(), 0 !== (null == e7 ? void 0 : e7.status)) {
        if (!L || !L.body)
          return V.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(function() {
            n2.parseDecideResponse(e7);
          }, 500);
        this.instance.toolbar.afterDecideResponse(e7), null === (t2 = this.instance.sessionRecording) || void 0 === t2 || t2.afterDecideResponse(e7), Qe.afterDecideResponse(e7, this.instance), this.instance._afterDecideResponse(e7), this.instance.config.advanced_disable_feature_flags_on_first_load || this.instance.config.advanced_disable_feature_flags || this.instance.featureFlags.receivedFeatureFlags(e7);
        var r2 = null == T ? void 0 : T.extendPostHogWithSurveys;
        e7.surveys && !r2 && ae(this.instance.requestRouter.endpointFor("assets", "/static/surveys.js"), function(e8) {
          if (e8)
            return V.error("Could not load surveys script", e8);
          T.extendPostHogWithSurveys(n2.instance);
        });
        var i2 = null == T ? void 0 : T.extendPostHogWithExceptionAutoCapture;
        if (e7.autocaptureExceptions && e7.autocaptureExceptions && I(i2) && ae(this.instance.requestRouter.endpointFor("assets", "/static/exception-autocapture.js"), function(t3) {
          if (t3)
            return V.error("Could not load exception autocapture script", t3);
          T.extendPostHogWithExceptionAutocapture(n2.instance, e7);
        }), e7.siteApps)
          if (this.instance.config.opt_in_site_apps) {
            var o2, s2 = v(e7.siteApps);
            try {
              var a2 = function() {
                var e8 = o2.value, t3 = e8.id, r3 = e8.url, i3 = n2.instance.requestRouter.endpointFor("assets", r3);
                U["__$$ph_site_app_".concat(t3)] = n2.instance, ae(i3, function(e9) {
                  e9 && V.error("Error while initializing PostHog app with config id ".concat(t3), e9);
                });
              };
              for (s2.s(); !(o2 = s2.n()).done; )
                a2();
            } catch (e8) {
              s2.e(e8);
            } finally {
              s2.f();
            }
          } else
            e7.siteApps.length > 0 && V.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
      } else
        V.error("Failed to fetch feature flags from PostHog.");
    } }]), e6;
  }();
  var rn = ["source"];
  var on = null != T && T.location ? Rt(T.location.hash, "__posthog") || Rt(location.hash, "state") : null;
  var sn = function() {
    function e6(t2) {
      r(this, e6), this.instance = t2;
    }
    return o(e6, [{ key: "afterDecideResponse", value: function(e7) {
      var n2 = e7.toolbarParams || e7.editorParams || (e7.toolbarVersion ? { toolbarVersion: e7.toolbarVersion } : {});
      e7.isAuthenticated && n2.toolbarVersion && 0 === n2.toolbarVersion.indexOf("toolbar") && this.loadToolbar(t({}, n2));
    } }, { key: "maybeLoadToolbar", value: function() {
      var e7, t2, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
      if (!T || !L)
        return false;
      n2 = null !== (e7 = n2) && void 0 !== e7 ? e7 : T.location, i2 = null !== (t2 = i2) && void 0 !== t2 ? t2 : T.history;
      try {
        if (!r2) {
          try {
            T.localStorage.setItem("test", "test"), T.localStorage.removeItem("test");
          } catch (e8) {
            return false;
          }
          r2 = null == T ? void 0 : T.localStorage;
        }
        var o2, s2 = on || Rt(n2.hash, "__posthog") || Rt(n2.hash, "state"), a2 = s2 ? ee(function() {
          return JSON.parse(atob(decodeURIComponent(s2)));
        }) || ee(function() {
          return JSON.parse(decodeURIComponent(s2));
        }) : null;
        return a2 && "ph_authorize" === a2.action ? ((o2 = a2).source = "url", o2 && Object.keys(o2).length > 0 && (a2.desiredHash ? n2.hash = a2.desiredHash : i2 ? i2.replaceState("", L.title, n2.pathname + n2.search) : n2.hash = "")) : ((o2 = JSON.parse(r2.getItem("_postHogToolbarParams") || "{}")).source = "localstorage", delete o2.userIntent), !(!o2.token || this.instance.config.token !== o2.token) && (this.loadToolbar(o2), true);
      } catch (e8) {
        return false;
      }
    } }, { key: "loadToolbar", value: function(e7) {
      var n2 = this;
      if (!T || U._postHogToolbarLoaded)
        return false;
      U._postHogToolbarLoaded = true;
      var r2 = 3e5, i2 = Math.floor(Date.now() / r2) * r2, o2 = this.instance.requestRouter.endpointFor("assets", "/static/toolbar.js?t=".concat(i2)), s2 = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics, a2 = t(t({ token: this.instance.config.token }, e7), {}, { apiURL: this.instance.requestRouter.endpointFor("api") }, s2 ? { instrument: false } : {});
      a2.source;
      var u2 = c(a2, rn);
      return T.localStorage.setItem("_postHogToolbarParams", JSON.stringify(u2)), ae(o2, function(e8) {
        e8 ? V.error("Failed to load toolbar", e8) : (U.ph_load_toolbar || U.ph_load_editor)(a2, n2.instance);
      }), se(T, "turbolinks:load", function() {
        U._postHogToolbarLoaded = false, n2.loadToolbar(a2);
      }), true;
    } }, { key: "_loadEditor", value: function(e7) {
      return this.loadToolbar(e7);
    } }, { key: "maybeLoadEditor", value: function() {
      var e7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
      return this.maybeLoadToolbar(e7, t2, n2);
    } }]), e6;
  }();
  var an = function() {
    function e6() {
      var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
      r(this, e6), this.isPolling = true, this._event_queue = [], this._empty_queue_count = 0, this._poller = void 0, this._pollInterval = t2;
    }
    return o(e6, [{ key: "setPollInterval", value: function(e7) {
      this._pollInterval = e7, this.isPolling && this.poll();
    } }, { key: "poll", value: function() {
    } }, { key: "unload", value: function() {
    } }, { key: "getTime", value: function() {
      return (/* @__PURE__ */ new Date()).getTime();
    } }]), e6;
  }();
  var un = function(e6) {
    a(i2, an);
    var n2 = h(i2);
    function i2(e7) {
      var t2, o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
      return r(this, i2), (t2 = n2.call(this, o2)).handlePollRequest = e7, t2;
    }
    return o(i2, [{ key: "enqueue", value: function(e7, t2, n3) {
      this._event_queue.push({ url: e7, data: t2, options: n3 }), this.isPolling || (this.isPolling = true, this.poll());
    } }, { key: "poll", value: function() {
      var e7 = this;
      clearTimeout(this._poller), this._poller = setTimeout(function() {
        if (e7._event_queue.length > 0) {
          var t2 = e7.formatQueue(), n3 = function(n4) {
            var r3 = t2[n4], i3 = r3.url, o2 = r3.data, s2 = r3.options;
            Y(o2, function(t3, n5) {
              o2[n5].offset = Math.abs(o2[n5].timestamp - e7.getTime()), delete o2[n5].timestamp;
            }), e7.handlePollRequest(i3, o2, s2);
          };
          for (var r2 in t2)
            n3(r2);
          e7._event_queue.length = 0, e7._empty_queue_count = 0;
        } else
          e7._empty_queue_count++;
        e7._empty_queue_count > 4 && (e7.isPolling = false, e7._empty_queue_count = 0), e7.isPolling && e7.poll();
      }, this._pollInterval);
    } }, { key: "unload", value: function() {
      var e7 = this;
      clearTimeout(this._poller);
      var n3 = this._event_queue.length > 0 ? this.formatQueue() : {};
      this._event_queue.length = 0;
      var r2 = Object.values(n3);
      [].concat(p(r2.filter(function(e8) {
        return 0 === e8.url.indexOf("/e");
      })), p(r2.filter(function(e8) {
        return 0 !== e8.url.indexOf("/e");
      }))).map(function(n4) {
        var r3 = n4.url, i3 = n4.data, o2 = n4.options;
        e7.handlePollRequest(r3, i3, t(t({}, o2), {}, { transport: "sendBeacon" }));
      });
    } }, { key: "formatQueue", value: function() {
      var e7 = {};
      return Y(this._event_queue, function(t2) {
        var n3 = t2.url, r2 = t2.data, i3 = t2.options, o2 = (i3 ? i3._batchKey : null) || n3;
        I(e7[o2]) && (e7[o2] = { data: [], url: n3, options: i3 }), i3 && e7[o2].options && e7[o2].options._metrics && !e7[o2].options._metrics.rrweb_full_snapshot && (e7[o2].options._metrics.rrweb_full_snapshot = i3._metrics.rrweb_full_snapshot), e7[o2].data.push(r2);
      }), e7;
    } }]), i2;
  }();
  var ln = Uint8Array;
  var cn = Uint16Array;
  var dn = Uint32Array;
  var hn = new ln([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
  var fn = new ln([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
  var pn = new ln([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var _n = function(e6, t2) {
    for (var n2 = new cn(31), r2 = 0; r2 < 31; ++r2)
      n2[r2] = t2 += 1 << e6[r2 - 1];
    var i2 = new dn(n2[30]);
    for (r2 = 1; r2 < 30; ++r2)
      for (var o2 = n2[r2]; o2 < n2[r2 + 1]; ++o2)
        i2[o2] = o2 - n2[r2] << 5 | r2;
    return [n2, i2];
  };
  var gn = _n(hn, 2);
  var vn = gn[0];
  var mn = gn[1];
  vn[28] = 258, mn[258] = 28;
  for (yn = _n(fn, 0)[1], bn = new cn(32768), kn = 0; kn < 32768; ++kn) {
    wn = (43690 & kn) >>> 1 | (21845 & kn) << 1;
    wn = (61680 & (wn = (52428 & wn) >>> 2 | (13107 & wn) << 2)) >>> 4 | (3855 & wn) << 4, bn[kn] = ((65280 & wn) >>> 8 | (255 & wn) << 8) >>> 1;
  }
  var wn;
  var yn;
  var bn;
  var kn;
  var Sn = function(e6, t2, n2) {
    for (var r2 = e6.length, i2 = 0, o2 = new cn(t2); i2 < r2; ++i2)
      ++o2[e6[i2] - 1];
    var s2, a2 = new cn(t2);
    for (i2 = 0; i2 < t2; ++i2)
      a2[i2] = a2[i2 - 1] + o2[i2 - 1] << 1;
    if (n2) {
      s2 = new cn(1 << t2);
      var u2 = 15 - t2;
      for (i2 = 0; i2 < r2; ++i2)
        if (e6[i2])
          for (var l2 = i2 << 4 | e6[i2], c2 = t2 - e6[i2], d2 = a2[e6[i2] - 1]++ << c2, h2 = d2 | (1 << c2) - 1; d2 <= h2; ++d2)
            s2[bn[d2] >>> u2] = l2;
    } else
      for (s2 = new cn(r2), i2 = 0; i2 < r2; ++i2)
        s2[i2] = bn[a2[e6[i2] - 1]++] >>> 15 - e6[i2];
    return s2;
  };
  var Fn = new ln(288);
  for (kn = 0; kn < 144; ++kn)
    Fn[kn] = 8;
  for (kn = 144; kn < 256; ++kn)
    Fn[kn] = 9;
  for (kn = 256; kn < 280; ++kn)
    Fn[kn] = 7;
  for (kn = 280; kn < 288; ++kn)
    Fn[kn] = 8;
  var Pn = new ln(32);
  for (kn = 0; kn < 32; ++kn)
    Pn[kn] = 5;
  var Rn;
  var In = Sn(Fn, 9, 0);
  var En = Sn(Pn, 5, 0);
  var xn = function(e6) {
    return (e6 / 8 >> 0) + (7 & e6 && 1);
  };
  var Cn = function(e6, t2, n2) {
    (null == t2 || t2 < 0) && (t2 = 0), (null == n2 || n2 > e6.length) && (n2 = e6.length);
    var r2 = new (e6 instanceof cn ? cn : e6 instanceof dn ? dn : ln)(n2 - t2);
    return r2.set(e6.subarray(t2, n2)), r2;
  };
  var On = function(e6, t2, n2) {
    n2 <<= 7 & t2;
    var r2 = t2 / 8 >> 0;
    e6[r2] |= n2, e6[r2 + 1] |= n2 >>> 8;
  };
  var Tn = function(e6, t2, n2) {
    n2 <<= 7 & t2;
    var r2 = t2 / 8 >> 0;
    e6[r2] |= n2, e6[r2 + 1] |= n2 >>> 8, e6[r2 + 2] |= n2 >>> 16;
  };
  var $n = function(e6, t2) {
    for (var n2 = [], r2 = 0; r2 < e6.length; ++r2)
      e6[r2] && n2.push({ s: r2, f: e6[r2] });
    var i2 = n2.length, o2 = n2.slice();
    if (!i2)
      return [new ln(0), 0];
    if (1 == i2) {
      var s2 = new ln(n2[0].s + 1);
      return s2[n2[0].s] = 1, [s2, 1];
    }
    n2.sort(function(e7, t3) {
      return e7.f - t3.f;
    }), n2.push({ s: -1, f: 25001 });
    var a2 = n2[0], u2 = n2[1], l2 = 0, c2 = 1, d2 = 2;
    for (n2[0] = { s: -1, f: a2.f + u2.f, l: a2, r: u2 }; c2 != i2 - 1; )
      a2 = n2[n2[l2].f < n2[d2].f ? l2++ : d2++], u2 = n2[l2 != c2 && n2[l2].f < n2[d2].f ? l2++ : d2++], n2[c2++] = { s: -1, f: a2.f + u2.f, l: a2, r: u2 };
    var h2 = o2[0].s;
    for (r2 = 1; r2 < i2; ++r2)
      o2[r2].s > h2 && (h2 = o2[r2].s);
    var f2 = new cn(h2 + 1), p2 = An(n2[c2 - 1], f2, 0);
    if (p2 > t2) {
      r2 = 0;
      var _2 = 0, g2 = p2 - t2, v2 = 1 << g2;
      for (o2.sort(function(e7, t3) {
        return f2[t3.s] - f2[e7.s] || e7.f - t3.f;
      }); r2 < i2; ++r2) {
        var m2 = o2[r2].s;
        if (!(f2[m2] > t2))
          break;
        _2 += v2 - (1 << p2 - f2[m2]), f2[m2] = t2;
      }
      for (_2 >>>= g2; _2 > 0; ) {
        var y2 = o2[r2].s;
        f2[y2] < t2 ? _2 -= 1 << t2 - f2[y2]++ - 1 : ++r2;
      }
      for (; r2 >= 0 && _2; --r2) {
        var b2 = o2[r2].s;
        f2[b2] == t2 && (--f2[b2], ++_2);
      }
      p2 = t2;
    }
    return [new ln(f2), p2];
  };
  var An = function e3(t2, n2, r2) {
    return -1 == t2.s ? Math.max(e3(t2.l, n2, r2 + 1), e3(t2.r, n2, r2 + 1)) : n2[t2.s] = r2;
  };
  var Mn = function(e6) {
    for (var t2 = e6.length; t2 && !e6[--t2]; )
      ;
    for (var n2 = new cn(++t2), r2 = 0, i2 = e6[0], o2 = 1, s2 = function(e7) {
      n2[r2++] = e7;
    }, a2 = 1; a2 <= t2; ++a2)
      if (e6[a2] == i2 && a2 != t2)
        ++o2;
      else {
        if (!i2 && o2 > 2) {
          for (; o2 > 138; o2 -= 138)
            s2(32754);
          o2 > 2 && (s2(o2 > 10 ? o2 - 11 << 5 | 28690 : o2 - 3 << 5 | 12305), o2 = 0);
        } else if (o2 > 3) {
          for (s2(i2), --o2; o2 > 6; o2 -= 6)
            s2(8304);
          o2 > 2 && (s2(o2 - 3 << 5 | 8208), o2 = 0);
        }
        for (; o2--; )
          s2(i2);
        o2 = 1, i2 = e6[a2];
      }
    return [n2.subarray(0, r2), t2];
  };
  var qn = function(e6, t2) {
    for (var n2 = 0, r2 = 0; r2 < t2.length; ++r2)
      n2 += e6[r2] * t2[r2];
    return n2;
  };
  var Dn = function(e6, t2, n2) {
    var r2 = n2.length, i2 = xn(t2 + 2);
    e6[i2] = 255 & r2, e6[i2 + 1] = r2 >>> 8, e6[i2 + 2] = 255 ^ e6[i2], e6[i2 + 3] = 255 ^ e6[i2 + 1];
    for (var o2 = 0; o2 < r2; ++o2)
      e6[i2 + o2 + 4] = n2[o2];
    return 8 * (i2 + 4 + r2);
  };
  var Ln = function(e6, t2, n2, r2, i2, o2, s2, a2, u2, l2, c2) {
    On(t2, c2++, n2), ++i2[256];
    for (var d2 = $n(i2, 15), h2 = d2[0], f2 = d2[1], p2 = $n(o2, 15), _2 = p2[0], g2 = p2[1], v2 = Mn(h2), m2 = v2[0], y2 = v2[1], b2 = Mn(_2), k2 = b2[0], w2 = b2[1], S2 = new cn(19), F2 = 0; F2 < m2.length; ++F2)
      S2[31 & m2[F2]]++;
    for (F2 = 0; F2 < k2.length; ++F2)
      S2[31 & k2[F2]]++;
    for (var P2 = $n(S2, 7), R2 = P2[0], I2 = P2[1], E2 = 19; E2 > 4 && !R2[pn[E2 - 1]]; --E2)
      ;
    var x2, C2, O2, T2, $3 = l2 + 5 << 3, A2 = qn(i2, Fn) + qn(o2, Pn) + s2, M2 = qn(i2, h2) + qn(o2, _2) + s2 + 14 + 3 * E2 + qn(S2, R2) + (2 * S2[16] + 3 * S2[17] + 7 * S2[18]);
    if ($3 <= A2 && $3 <= M2)
      return Dn(t2, c2, e6.subarray(u2, u2 + l2));
    if (On(t2, c2, 1 + (M2 < A2)), c2 += 2, M2 < A2) {
      x2 = Sn(h2, f2, 0), C2 = h2, O2 = Sn(_2, g2, 0), T2 = _2;
      var q2 = Sn(R2, I2, 0);
      On(t2, c2, y2 - 257), On(t2, c2 + 5, w2 - 1), On(t2, c2 + 10, E2 - 4), c2 += 14;
      for (F2 = 0; F2 < E2; ++F2)
        On(t2, c2 + 3 * F2, R2[pn[F2]]);
      c2 += 3 * E2;
      for (var D2 = [m2, k2], L2 = 0; L2 < 2; ++L2) {
        var N2 = D2[L2];
        for (F2 = 0; F2 < N2.length; ++F2) {
          var B2 = 31 & N2[F2];
          On(t2, c2, q2[B2]), c2 += R2[B2], B2 > 15 && (On(t2, c2, N2[F2] >>> 5 & 127), c2 += N2[F2] >>> 12);
        }
      }
    } else
      x2 = In, C2 = Fn, O2 = En, T2 = Pn;
    for (F2 = 0; F2 < a2; ++F2)
      if (r2[F2] > 255) {
        B2 = r2[F2] >>> 18 & 31;
        Tn(t2, c2, x2[B2 + 257]), c2 += C2[B2 + 257], B2 > 7 && (On(t2, c2, r2[F2] >>> 23 & 31), c2 += hn[B2]);
        var j2 = 31 & r2[F2];
        Tn(t2, c2, O2[j2]), c2 += T2[j2], j2 > 3 && (Tn(t2, c2, r2[F2] >>> 5 & 8191), c2 += fn[j2]);
      } else
        Tn(t2, c2, x2[r2[F2]]), c2 += C2[r2[F2]];
    return Tn(t2, c2, x2[256]), c2 + C2[256];
  };
  var Nn = new dn([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
  var Bn = new ln(0);
  var jn = function() {
    for (var e6 = new dn(256), t2 = 0; t2 < 256; ++t2) {
      for (var n2 = t2, r2 = 9; --r2; )
        n2 = (1 & n2 && 3988292384) ^ n2 >>> 1;
      e6[t2] = n2;
    }
    return e6;
  }();
  var Hn = function() {
    var e6 = 4294967295;
    return { p: function(t2) {
      for (var n2 = e6, r2 = 0; r2 < t2.length; ++r2)
        n2 = jn[255 & n2 ^ t2[r2]] ^ n2 >>> 8;
      e6 = n2;
    }, d: function() {
      return 4294967295 ^ e6;
    } };
  };
  var Un = function(e6, t2, n2, r2, i2) {
    return function(e7, t3, n3, r3, i3, o2) {
      var s2 = e7.length, a2 = new ln(r3 + s2 + 5 * (1 + Math.floor(s2 / 7e3)) + i3), u2 = a2.subarray(r3, a2.length - i3), l2 = 0;
      if (!t3 || s2 < 8)
        for (var c2 = 0; c2 <= s2; c2 += 65535) {
          var d2 = c2 + 65535;
          d2 < s2 ? l2 = Dn(u2, l2, e7.subarray(c2, d2)) : (u2[c2] = o2, l2 = Dn(u2, l2, e7.subarray(c2, s2)));
        }
      else {
        for (var h2 = Nn[t3 - 1], f2 = h2 >>> 13, p2 = 8191 & h2, _2 = (1 << n3) - 1, g2 = new cn(32768), v2 = new cn(_2 + 1), m2 = Math.ceil(n3 / 3), y2 = 2 * m2, b2 = function(t4) {
          return (e7[t4] ^ e7[t4 + 1] << m2 ^ e7[t4 + 2] << y2) & _2;
        }, k2 = new dn(25e3), w2 = new cn(288), S2 = new cn(32), F2 = 0, P2 = 0, R2 = (c2 = 0, 0), I2 = 0, E2 = 0; c2 < s2; ++c2) {
          var x2 = b2(c2), C2 = 32767 & c2, O2 = v2[x2];
          if (g2[C2] = O2, v2[x2] = C2, I2 <= c2) {
            var T2 = s2 - c2;
            if ((F2 > 7e3 || R2 > 24576) && T2 > 423) {
              l2 = Ln(e7, u2, 0, k2, w2, S2, P2, R2, E2, c2 - E2, l2), R2 = F2 = P2 = 0, E2 = c2;
              for (var $3 = 0; $3 < 286; ++$3)
                w2[$3] = 0;
              for ($3 = 0; $3 < 30; ++$3)
                S2[$3] = 0;
            }
            var A2 = 2, M2 = 0, q2 = p2, D2 = C2 - O2 & 32767;
            if (T2 > 2 && x2 == b2(c2 - D2))
              for (var L2 = Math.min(f2, T2) - 1, N2 = Math.min(32767, c2), B2 = Math.min(258, T2); D2 <= N2 && --q2 && C2 != O2; ) {
                if (e7[c2 + A2] == e7[c2 + A2 - D2]) {
                  for (var j2 = 0; j2 < B2 && e7[c2 + j2] == e7[c2 + j2 - D2]; ++j2)
                    ;
                  if (j2 > A2) {
                    if (A2 = j2, M2 = D2, j2 > L2)
                      break;
                    var H2 = Math.min(D2, j2 - 2), U2 = 0;
                    for ($3 = 0; $3 < H2; ++$3) {
                      var W2 = c2 - D2 + $3 + 32768 & 32767, V2 = W2 - g2[W2] + 32768 & 32767;
                      V2 > U2 && (U2 = V2, O2 = W2);
                    }
                  }
                }
                D2 += (C2 = O2) - (O2 = g2[C2]) + 32768 & 32767;
              }
            if (M2) {
              k2[R2++] = 268435456 | mn[A2] << 18 | yn[M2];
              var G2 = 31 & mn[A2], z2 = 31 & yn[M2];
              P2 += hn[G2] + fn[z2], ++w2[257 + G2], ++S2[z2], I2 = c2 + A2, ++F2;
            } else
              k2[R2++] = e7[c2], ++w2[e7[c2]];
          }
        }
        l2 = Ln(e7, u2, o2, k2, w2, S2, P2, R2, E2, c2 - E2, l2), o2 || (l2 = Dn(u2, l2, Bn));
      }
      return Cn(a2, 0, r3 + xn(l2) + i3);
    }(e6, null == t2.level ? 6 : t2.level, null == t2.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e6.length)))) : 12 + t2.mem, n2, r2, !i2);
  };
  var Wn = function(e6, t2, n2) {
    for (; n2; ++t2)
      e6[t2] = n2, n2 >>>= 8;
  };
  var Vn = function(e6, t2) {
    var n2 = t2.filename;
    if (e6[0] = 31, e6[1] = 139, e6[2] = 8, e6[8] = t2.level < 2 ? 4 : 9 == t2.level ? 2 : 0, e6[9] = 3, 0 != t2.mtime && Wn(e6, 4, Math.floor(new Date(t2.mtime || Date.now()) / 1e3)), n2) {
      e6[3] = 8;
      for (var r2 = 0; r2 <= n2.length; ++r2)
        e6[r2 + 10] = n2.charCodeAt(r2);
    }
  };
  var Gn = function(e6) {
    return 10 + (e6.filename && e6.filename.length + 1 || 0);
  };
  function zn(e6, t2) {
    void 0 === t2 && (t2 = {});
    var n2 = Hn(), r2 = e6.length;
    n2.p(e6);
    var i2 = Un(e6, t2, Gn(t2), 8), o2 = i2.length;
    return Vn(i2, t2), Wn(i2, o2 - 8, n2.d()), Wn(i2, o2 - 4, r2), i2;
  }
  function Qn(e6, t2) {
    var n2 = e6.length;
    if (!t2 && "undefined" != typeof TextEncoder)
      return new TextEncoder().encode(e6);
    for (var r2 = new ln(e6.length + (e6.length >>> 1)), i2 = 0, o2 = function(e7) {
      r2[i2++] = e7;
    }, s2 = 0; s2 < n2; ++s2) {
      if (i2 + 5 > r2.length) {
        var a2 = new ln(i2 + 8 + (n2 - s2 << 1));
        a2.set(r2), r2 = a2;
      }
      var u2 = e6.charCodeAt(s2);
      u2 < 128 || t2 ? o2(u2) : u2 < 2048 ? (o2(192 | u2 >>> 6), o2(128 | 63 & u2)) : u2 > 55295 && u2 < 57344 ? (o2(240 | (u2 = 65536 + (1047552 & u2) | 1023 & e6.charCodeAt(++s2)) >>> 18), o2(128 | u2 >>> 12 & 63), o2(128 | u2 >>> 6 & 63), o2(128 | 63 & u2)) : (o2(224 | u2 >>> 12), o2(128 | u2 >>> 6 & 63), o2(128 | 63 & u2));
    }
    return Cn(r2, 0, i2);
  }
  !function(e6) {
    e6.GZipJS = "gzip-js", e6.Base64 = "base64";
  }(Rn || (Rn = {}));
  var Yn = function(e6, t2, n2) {
    var r2 = t2 || {};
    r2.ip = n2.ip ? 1 : 0, r2._ = (/* @__PURE__ */ new Date()).getTime().toString(), r2.ver = m.LIB_VERSION;
    var i2 = e6.split("?");
    if (i2.length > 1) {
      var o2, s2 = v(i2[1].split("&"));
      try {
        for (s2.s(); !(o2 = s2.n()).done; ) {
          var a2 = o2.value.split("=")[0];
          I(r2[a2]) || delete r2[a2];
        }
      } catch (e7) {
        s2.e(e7);
      } finally {
        s2.f();
      }
    }
    var u2 = e6.indexOf("?") > -1 ? "&" : "?";
    return e6 + u2 + function(e7) {
      var t3, n3, r3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", i3 = [];
      return Y(e7, function(e8, r4) {
        I(e8) || I(r4) || "undefined" === r4 || (t3 = encodeURIComponent(e8.toString()), n3 = encodeURIComponent(r4), i3[i3.length] = n3 + "=" + t3);
      }), i3.join(r3);
    }(r2);
  };
  var Jn = function e4(t2, n2) {
    if (n2.blob && t2.buffer)
      return new Blob([F(t2) ? t2 : t2.buffer], { type: "text/plain" });
    if (n2.sendBeacon || n2.blob) {
      var r2 = e4(t2, { method: "POST" });
      return new Blob([r2], { type: "application/x-www-form-urlencoded" });
    }
    return "POST" !== n2.method ? null : (i2 = S(t2) || F(t2) ? "data=" + encodeURIComponent(t2) : "data=" + encodeURIComponent(t2.data), "compression" in t2 && t2.compression && (i2 += "&compression=" + t2.compression), i2);
    var i2;
  };
  var Kn = function(e6) {
    if (B && "fetch" === e6.options.transport) {
      var n2, r2 = Jn(e6.data, e6.options), i2 = new Headers();
      Y(i2, function(e7, t2) {
        i2.append(t2, e7);
      }), "POST" !== e6.options.method || e6.options.blob || i2.append("Content-Type", "application/x-www-form-urlencoded");
      var o2 = e6.url;
      return C(e6.retriesPerformedSoFar) && e6.retriesPerformedSoFar > 0 && (o2 = Yn(o2, { retry_count: e6.retriesPerformedSoFar }, {})), void B(o2, { method: (null === (n2 = e6.options) || void 0 === n2 ? void 0 : n2.method) || "GET", headers: i2, keepalive: "POST" === e6.options.method, body: r2 }).then(function(n3) {
        var r3 = n3.status;
        return n3.text().then(function(n4) {
          var o3, s2;
          if (null === (o3 = e6.onResponse) || void 0 === o3 || o3.call(e6, { statusCode: r3, responseText: n4 }), 200 !== r3)
            P(e6.onError) && e6.onError({ statusCode: r3, responseText: n4 }), (r3 < 400 || r3 > 500) && e6.retryQueue.enqueue(t(t({}, e6), {}, { headers: i2, retriesPerformedSoFar: (e6.retriesPerformedSoFar || 0) + 1 })), null === (s2 = e6.callback) || void 0 === s2 || s2.call(e6, { status: 0 });
          else
            try {
              var a2;
              null === (a2 = e6.callback) || void 0 === a2 || a2.call(e6, JSON.parse(n4));
            } catch (e7) {
              V.error(e7);
            }
        });
      }).catch(function(t2) {
        var n3;
        V.error(t2), null === (n3 = e6.callback) || void 0 === n3 || n3.call(e6, { status: 0 });
      });
    }
    return Xn(e6);
  };
  var Xn = function(e6) {
    var t2 = e6.url, n2 = e6.data, r2 = e6.headers, i2 = e6.options, o2 = e6.callback, s2 = e6.retriesPerformedSoFar, a2 = e6.retryQueue, u2 = e6.onError, l2 = e6.timeout, c2 = void 0 === l2 ? 6e4 : l2, d2 = e6.onResponse;
    C(s2) && s2 > 0 && (t2 = Yn(t2, { retry_count: s2 }, {}));
    var h2 = new XMLHttpRequest();
    h2.open(i2.method || "GET", t2, true);
    var f2 = Jn(n2, i2);
    Y(r2, function(e7, t3) {
      h2.setRequestHeader(t3, e7);
    }), "POST" !== i2.method || i2.blob || h2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), h2.timeout = c2, h2.withCredentials = true, h2.onreadystatechange = function() {
      if (4 === h2.readyState) {
        var e7 = { statusCode: h2.status, responseText: h2.responseText };
        if (null == d2 || d2(e7), 200 === h2.status) {
          if (o2) {
            var l3;
            try {
              l3 = JSON.parse(h2.responseText);
            } catch (e8) {
              return void V.error(e8);
            }
            o2(l3);
          }
        } else
          P(u2) && u2(e7), (h2.status < 400 || h2.status > 500) && a2.enqueue({ url: t2, data: n2, options: i2, headers: r2, retriesPerformedSoFar: (s2 || 0) + 1, callback: o2 }), null == o2 || o2({ status: 0 });
      }
    }, h2.send(f2);
  };
  var Zn;
  var er = function(e6) {
    a(i2, an);
    var n2 = h(i2);
    function i2(e7, t2) {
      var o2;
      return r(this, i2), (o2 = n2.call(this)).isPolling = false, o2.queue = [], o2.areWeOnline = true, o2.onRequestError = e7, o2.rateLimiter = t2, !I(T) && "onLine" in T.navigator && (o2.areWeOnline = T.navigator.onLine, T.addEventListener("online", function() {
        o2._handleWeAreNowOnline();
      }), T.addEventListener("offline", function() {
        o2.areWeOnline = false;
      })), o2;
    }
    return o(i2, [{ key: "enqueue", value: function(e7) {
      var t2 = e7.retriesPerformedSoFar || 0;
      if (!(t2 >= 10)) {
        var n3 = function(e8) {
          var t3 = 3e3 * Math.pow(2, e8), n4 = t3 / 2, r3 = Math.min(18e5, t3), i4 = (Math.random() - 0.5) * (r3 - n4);
          return Math.ceil(r3 + i4);
        }(t2), r2 = new Date(Date.now() + n3);
        this.queue.push({ retryAt: r2, requestData: e7 });
        var i3 = "Enqueued failed request for retry in ".concat(n3);
        navigator.onLine || (i3 += " (Browser is offline)"), V.warn(i3), this.isPolling || (this.isPolling = true, this.poll());
      }
    } }, { key: "poll", value: function() {
      var e7 = this;
      this._poller && clearTimeout(this._poller), this._poller = setTimeout(function() {
        e7.areWeOnline && e7.queue.length > 0 && e7.flush(), e7.poll();
      }, this._pollInterval);
    } }, { key: "flush", value: function() {
      var e7 = new Date(Date.now()), t2 = this.queue.filter(function(t3) {
        return t3.retryAt < e7;
      });
      if (t2.length > 0) {
        this.queue = this.queue.filter(function(t3) {
          return t3.retryAt >= e7;
        });
        var n3, r2 = v(t2);
        try {
          for (r2.s(); !(n3 = r2.n()).done; ) {
            var i3 = n3.value.requestData;
            this._executeXhrRequest(i3);
          }
        } catch (e8) {
          r2.e(e8);
        } finally {
          r2.f();
        }
      }
    } }, { key: "unload", value: function() {
      this._poller && (clearTimeout(this._poller), this._poller = void 0);
      var e7, n3 = v(this.queue);
      try {
        for (n3.s(); !(e7 = n3.n()).done; ) {
          var r2 = e7.value.requestData, i3 = r2.url, o2 = r2.data, s2 = r2.options;
          if (this.rateLimiter.isRateLimited(s2._batchKey))
            V.warn("[RetryQueue] is quota limited. Dropping request.");
          else
            try {
              null == T || T.navigator.sendBeacon(i3, Jn(o2, t(t({}, s2), {}, { sendBeacon: true })));
            } catch (e8) {
              V.error(e8);
            }
        }
      } catch (e8) {
        n3.e(e8);
      } finally {
        n3.f();
      }
      this.queue = [];
    } }, { key: "_executeXhrRequest", value: function(e7) {
      var t2 = e7.url, n3 = e7.data, r2 = e7.options, i3 = e7.headers, o2 = e7.callback, s2 = e7.retriesPerformedSoFar;
      this.rateLimiter.isRateLimited(r2._batchKey) || Kn({ url: t2, data: n3 || {}, options: r2 || {}, headers: i3 || {}, retriesPerformedSoFar: s2 || 0, callback: o2, retryQueue: this, onError: this.onRequestError, onResponse: this.rateLimiter.checkForLimiting });
    } }, { key: "_handleWeAreNowOnline", value: function() {
      this.areWeOnline = true, this.flush();
    } }]), i2;
  }();
  var tr = 1800;
  var nr = function() {
    function e6(t2, n2, i2, o2) {
      r(this, e6), s(this, "_sessionIdChangedHandlers", []), this.config = t2, this.persistence = n2, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = i2 || st, this._windowIdGenerator = o2 || st;
      var a2 = t2.persistence_name || t2.token, u2 = t2.session_idle_timeout_seconds || tr;
      if (C(u2) ? u2 > tr ? V.warn("session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.") : u2 < 60 && V.warn("session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.") : (V.warn("session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."), u2 = tr), this._sessionTimeoutMs = 1e3 * Math.min(Math.max(u2, 60), tr), this._window_id_storage_key = "ph_" + a2 + "_window_id", this._primary_window_exists_storage_key = "ph_" + a2 + "_primary_window_exists", this._canUseSessionStorage()) {
        var l2 = bt.parse(this._window_id_storage_key), c2 = bt.parse(this._primary_window_exists_storage_key);
        l2 && !c2 ? this._windowId = l2 : bt.remove(this._window_id_storage_key), bt.set(this._primary_window_exists_storage_key, true);
      }
      this._listenToReloadWindow();
    }
    return o(e6, [{ key: "onSessionId", value: function(e7) {
      var t2 = this;
      return I(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e7), this._sessionId && e7(this._sessionId, this._windowId), function() {
        t2._sessionIdChangedHandlers = t2._sessionIdChangedHandlers.filter(function(t3) {
          return t3 !== e7;
        });
      };
    } }, { key: "_canUseSessionStorage", value: function() {
      return "memory" !== this.config.persistence && !this.persistence.disabled && bt.is_supported();
    } }, { key: "_setWindowId", value: function(e7) {
      e7 !== this._windowId && (this._windowId = e7, this._canUseSessionStorage() && bt.set(this._window_id_storage_key, e7));
    } }, { key: "_getWindowId", value: function() {
      return this._windowId ? this._windowId : this._canUseSessionStorage() ? bt.parse(this._window_id_storage_key) : null;
    } }, { key: "_setSessionId", value: function(e7, t2, n2) {
      e7 === this._sessionId && t2 === this._sessionActivityTimestamp && n2 === this._sessionStartTimestamp || (this._sessionStartTimestamp = n2, this._sessionActivityTimestamp = t2, this._sessionId = e7, this.persistence.register(s({}, Me, [t2, e7, n2])));
    } }, { key: "_getSessionId", value: function() {
      if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp)
        return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
      var e7 = this.persistence.props[Me];
      return S(e7) && 2 === e7.length && e7.push(e7[0]), e7 || [0, null, 0];
    } }, { key: "resetSessionId", value: function() {
      this._setSessionId(null, null, null);
    } }, { key: "_listenToReloadWindow", value: function() {
      var e7 = this;
      null == T || T.addEventListener("beforeunload", function() {
        e7._canUseSessionStorage() && bt.remove(e7._primary_window_exists_storage_key);
      });
    } }, { key: "checkAndGetSessionAndWindowId", value: function() {
      var e7 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t2 = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || (/* @__PURE__ */ new Date()).getTime(), n2 = f(this._getSessionId(), 3), r2 = n2[0], i2 = n2[1], o2 = n2[2], s2 = this._getWindowId(), a2 = o2 && o2 > 0 && Math.abs(t2 - o2) > 864e5, u2 = false, l2 = !i2, c2 = !e7 && Math.abs(t2 - r2) > this._sessionTimeoutMs;
      l2 || c2 || a2 ? (i2 = this._sessionIdGenerator(), s2 = this._windowIdGenerator(), V.info("[SessionId] new session ID generated", { sessionId: i2, windowId: s2, changeReason: { noSessionId: l2, activityTimeout: c2, sessionPastMaximumLength: a2 } }), o2 = t2, u2 = true) : s2 || (s2 = this._windowIdGenerator(), u2 = true);
      var d2 = 0 === r2 || !e7 || a2 ? t2 : r2, h2 = 0 === o2 ? (/* @__PURE__ */ new Date()).getTime() : o2;
      return this._setWindowId(s2), this._setSessionId(i2, d2, h2), u2 && this._sessionIdChangedHandlers.forEach(function(e8) {
        return e8(i2, s2);
      }), { sessionId: i2, windowId: s2, sessionStartTimestamp: h2 };
    } }]), e6;
  }();
  !function(e6) {
    e6.US = "us", e6.EU = "eu", e6.CUSTOM = "custom";
  }(Zn || (Zn = {}));
  var rr = function() {
    function e6(t2) {
      r(this, e6), this.instance = t2;
    }
    return o(e6, [{ key: "apiHost", get: function() {
      return this.instance.config.api_host.replace(/\/$/, "");
    } }, { key: "uiHost", get: function() {
      var e7;
      return null === (e7 = this.instance.config.ui_host) || void 0 === e7 ? void 0 : e7.replace(/\/$/, "");
    } }, { key: "region", get: function() {
      switch (this.apiHost) {
        case "https://app.posthog.com":
        case "https://us.posthog.com":
          return Zn.US;
        case "https://eu.posthog.com":
          return Zn.EU;
        default:
          return Zn.CUSTOM;
      }
    } }, { key: "endpointFor", value: function(e7) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      if (t2 && (t2 = "/" === t2[0] ? t2 : "/".concat(t2)), "ui" === e7)
        return (this.uiHost || this.apiHost) + t2;
      if (!this.instance.config.__preview_ingestion_endpoints || this.region === Zn.CUSTOM)
        return this.apiHost + t2;
      var n2 = "i.posthog.com" + t2;
      switch (e7) {
        case "assets":
          return "https://".concat(this.region, "-assets.").concat(n2);
        case "api":
          return "https://".concat(this.region, ".").concat(n2);
      }
    } }]), e6;
  }();
  var ir = o(function e5(t2, n2, i2, o2) {
    r(this, e5), this.name = "posthog-js", this.setupOnce = function(e6) {
      e6(function(e7) {
        var r2, s2, a2, u2, l2;
        if ("error" !== e7.level || !t2.__loaded)
          return e7;
        e7.tags || (e7.tags = {});
        var c2 = t2.requestRouter.endpointFor("ui", "/person/" + t2.get_distinct_id());
        e7.tags["PostHog Person URL"] = c2, t2.sessionRecordingStarted() && (e7.tags["PostHog Recording URL"] = t2.get_session_replay_url({ withTimestamp: true }));
        var d2 = (null === (r2 = e7.exception) || void 0 === r2 ? void 0 : r2.values) || [], h2 = { $exception_message: null === (s2 = d2[0]) || void 0 === s2 ? void 0 : s2.value, $exception_type: null === (a2 = d2[0]) || void 0 === a2 ? void 0 : a2.type, $exception_personURL: c2, $sentry_event_id: e7.event_id, $sentry_exception: e7.exception, $sentry_exception_message: null === (u2 = d2[0]) || void 0 === u2 ? void 0 : u2.value, $sentry_exception_type: null === (l2 = d2[0]) || void 0 === l2 ? void 0 : l2.type, $sentry_tags: e7.tags };
        return n2 && i2 && (h2.$sentry_url = (o2 || "https://sentry.io/organizations/") + n2 + "/issues/?project=" + i2 + "&query=" + e7.event_id), t2.capture("$exception", h2), e7;
      });
    };
  });
  var or = function() {
    function e6(t2) {
      var n2 = this;
      r(this, e6), s(this, "_hasSeenPageView", false), s(this, "_updateScrollData", function() {
        var e7, t3, r2, i2;
        n2._pageViewData || (n2._pageViewData = n2._createPageViewData());
        var o2 = n2._pageViewData, s2 = n2._scrollY(), a2 = n2._scrollHeight(), u2 = n2._contentY(), l2 = n2._contentHeight();
        o2.lastScrollY = s2, o2.maxScrollY = Math.max(s2, null !== (e7 = o2.maxScrollY) && void 0 !== e7 ? e7 : 0), o2.maxScrollHeight = Math.max(a2, null !== (t3 = o2.maxScrollHeight) && void 0 !== t3 ? t3 : 0), o2.lastContentY = u2, o2.maxContentY = Math.max(u2, null !== (r2 = o2.maxContentY) && void 0 !== r2 ? r2 : 0), o2.maxContentHeight = Math.max(l2, null !== (i2 = o2.maxContentHeight) && void 0 !== i2 ? i2 : 0);
      }), this._instance = t2;
    }
    return o(e6, [{ key: "_createPageViewData", value: function() {
      var e7;
      return { pathname: null !== (e7 = null == T ? void 0 : T.location.pathname) && void 0 !== e7 ? e7 : "" };
    } }, { key: "doPageView", value: function() {
      var e7, n2;
      return this._hasSeenPageView ? (n2 = this._pageViewData, this._pageViewData = this._createPageViewData()) : (this._hasSeenPageView = true, n2 = void 0, this._pageViewData || (this._pageViewData = this._createPageViewData())), setTimeout(this._updateScrollData, 0), t({ $prev_pageview_pathname: null === (e7 = n2) || void 0 === e7 ? void 0 : e7.pathname }, this._calculatePrevPageScrollProperties(n2));
    } }, { key: "doPageLeave", value: function() {
      var e7 = this._pageViewData;
      return t({ $prev_pageview_pathname: null == e7 ? void 0 : e7.pathname }, this._calculatePrevPageScrollProperties(e7));
    } }, { key: "_calculatePrevPageScrollProperties", value: function(e7) {
      if (!e7 || null == e7.maxScrollHeight || null == e7.lastScrollY || null == e7.maxScrollY || null == e7.maxContentHeight || null == e7.lastContentY || null == e7.maxContentY)
        return {};
      var t2 = e7.maxScrollHeight, n2 = e7.lastScrollY, r2 = e7.maxScrollY, i2 = e7.maxContentHeight, o2 = e7.lastContentY, s2 = e7.maxContentY;
      return t2 = Math.ceil(t2), n2 = Math.ceil(n2), r2 = Math.ceil(r2), i2 = Math.ceil(i2), o2 = Math.ceil(o2), s2 = Math.ceil(s2), { $prev_pageview_last_scroll: n2, $prev_pageview_last_scroll_percentage: t2 <= 1 ? 1 : sr(n2 / t2, 0, 1), $prev_pageview_max_scroll: r2, $prev_pageview_max_scroll_percentage: t2 <= 1 ? 1 : sr(r2 / t2, 0, 1), $prev_pageview_last_content: o2, $prev_pageview_last_content_percentage: i2 <= 1 ? 1 : sr(o2 / i2, 0, 1), $prev_pageview_max_content: s2, $prev_pageview_max_content_percentage: i2 <= 1 ? 1 : sr(s2 / i2, 0, 1) };
    } }, { key: "startMeasuringScrollPosition", value: function() {
      null == T || T.addEventListener("scroll", this._updateScrollData, true), null == T || T.addEventListener("scrollend", this._updateScrollData, true), null == T || T.addEventListener("resize", this._updateScrollData);
    } }, { key: "stopMeasuringScrollPosition", value: function() {
      null == T || T.removeEventListener("scroll", this._updateScrollData), null == T || T.removeEventListener("scrollend", this._updateScrollData), null == T || T.removeEventListener("resize", this._updateScrollData);
    } }, { key: "_scrollElement", value: function() {
      if (!this._instance.config.scroll_root_selector)
        return null == T ? void 0 : T.document.documentElement;
      var e7, t2 = v(S(this._instance.config.scroll_root_selector) ? this._instance.config.scroll_root_selector : [this._instance.config.scroll_root_selector]);
      try {
        for (t2.s(); !(e7 = t2.n()).done; ) {
          var n2 = e7.value, r2 = null == T ? void 0 : T.document.querySelector(n2);
          if (r2)
            return r2;
        }
      } catch (e8) {
        t2.e(e8);
      } finally {
        t2.f();
      }
    } }, { key: "_scrollHeight", value: function() {
      var e7 = this._scrollElement();
      return e7 ? Math.max(0, e7.scrollHeight - e7.clientHeight) : 0;
    } }, { key: "_scrollY", value: function() {
      if (this._instance.config.scroll_root_selector) {
        var e7 = this._scrollElement();
        return e7 && e7.scrollTop || 0;
      }
      return T && (T.scrollY || T.pageYOffset || T.document.documentElement.scrollTop) || 0;
    } }, { key: "_contentHeight", value: function() {
      var e7 = this._scrollElement();
      return (null == e7 ? void 0 : e7.scrollHeight) || 0;
    } }, { key: "_contentY", value: function() {
      var e7 = this._scrollElement(), t2 = (null == e7 ? void 0 : e7.clientHeight) || 0;
      return this._scrollY() + t2;
    } }]), e6;
  }();
  function sr(e6, t2, n2) {
    return Math.max(t2, Math.min(e6, n2));
  }
  var ar;
  var ur;
  var lr;
  var cr = { icontains: function(e6) {
    return !!T && T.location.href.toLowerCase().indexOf(e6.toLowerCase()) > -1;
  }, regex: function(e6) {
    return !!T && Ft(T.location.href, e6);
  }, exact: function(e6) {
    return (null == T ? void 0 : T.location.href) === e6;
  } };
  var dr = function() {
    function e6(t2) {
      r(this, e6), this.instance = t2;
    }
    return o(e6, [{ key: "getSurveys", value: function(e7) {
      var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r2 = this.instance.get_property(je);
      if (r2 && !n2)
        return e7(r2);
      this.instance._send_request(this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)), {}, { method: "GET" }, function(n3) {
        var r3, i2 = n3.surveys || [];
        return null === (r3 = t2.instance.persistence) || void 0 === r3 || r3.register(s({}, je, i2)), e7(i2);
      });
    } }, { key: "getActiveMatchingSurveys", value: function(e7) {
      var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      this.getSurveys(function(n3) {
        var r2 = n3.filter(function(e8) {
          return !(!e8.start_date || e8.end_date);
        }).filter(function(e8) {
          var t3, n4, r3, i2;
          if (!e8.conditions)
            return true;
          var o2 = null === (t3 = e8.conditions) || void 0 === t3 || !t3.url || cr[null !== (n4 = null === (r3 = e8.conditions) || void 0 === r3 ? void 0 : r3.urlMatchType) && void 0 !== n4 ? n4 : "icontains"](e8.conditions.url), s2 = null === (i2 = e8.conditions) || void 0 === i2 || !i2.selector || (null == L ? void 0 : L.querySelector(e8.conditions.selector));
          return o2 && s2;
        }).filter(function(e8) {
          if (!e8.linked_flag_key && !e8.targeting_flag_key)
            return true;
          var n4 = !e8.linked_flag_key || t2.instance.featureFlags.isFeatureEnabled(e8.linked_flag_key), r3 = !e8.targeting_flag_key || t2.instance.featureFlags.isFeatureEnabled(e8.targeting_flag_key);
          return n4 && r3;
        });
        return e7(r2);
      }, n2);
    } }]), e6;
  }();
  var hr = function() {
    function e6() {
      var t2 = this;
      r(this, e6), s(this, "limits", {}), s(this, "checkForLimiting", function(e7) {
        var n2 = e7.responseText;
        if (n2 && n2.length)
          try {
            (JSON.parse(n2).quota_limited || []).forEach(function(e8) {
              V.info("[RateLimiter] ".concat(e8 || "events", " is quota limited.")), t2.limits[e8] = (/* @__PURE__ */ new Date()).getTime() + 6e4;
            });
          } catch (e8) {
            return void V.warn('[RateLimiter] could not rate limit - continuing. Error: "'.concat(null == e8 ? void 0 : e8.message, '"'), { text: n2 });
          }
      });
    }
    return o(e6, [{ key: "isRateLimited", value: function(e7) {
      var t2 = this.limits[e7 || "events"] || false;
      return false !== t2 && (/* @__PURE__ */ new Date()).getTime() < t2;
    } }]), e6;
  }();
  var fr = function() {
    return t({ initialPathName: (null == N ? void 0 : N.pathname) || "", referringDomain: It.referringDomain() }, It.campaignParams());
  };
  var pr = function() {
    function e6(t2, n2, i2) {
      var o2 = this;
      r(this, e6), s(this, "_onSessionIdCallback", function(e7) {
        var t3 = o2._getStoredProps();
        if (!t3 || t3.sessionId !== e7) {
          var n3 = { sessionId: e7, props: o2._sessionSourceParamGenerator() };
          o2._persistence.register(s({}, Ve, n3));
        }
      }), this._sessionIdManager = t2, this._persistence = n2, this._sessionSourceParamGenerator = i2 || fr, this._sessionIdManager.onSessionId(this._onSessionIdCallback);
    }
    return o(e6, [{ key: "_getStoredProps", value: function() {
      return this._persistence.props[Ve];
    } }, { key: "getSessionProps", value: function() {
      var e7, t2 = null === (e7 = this._getStoredProps()) || void 0 === e7 ? void 0 : e7.props;
      return t2 ? { $client_session_initial_referring_host: t2.referringDomain, $client_session_initial_pathname: t2.initialPathName, $client_session_initial_utm_source: t2.utm_source, $client_session_initial_utm_campaign: t2.utm_campaign, $client_session_initial_utm_medium: t2.utm_medium, $client_session_initial_utm_content: t2.utm_content, $client_session_initial_utm_term: t2.utm_term } : {};
    } }]), e6;
  }();
  var _r = ["ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
  var gr = function(e6, t2) {
    if (!e6)
      return false;
    var n2 = e6.toLowerCase();
    return _r.concat(t2 || []).some(function(e7) {
      var t3 = e7.toLowerCase();
      return n2.includes ? n2.includes(t3) : -1 !== n2.indexOf(t3);
    });
  };
  !function(e6) {
    e6[e6.INIT_MODULE = 0] = "INIT_MODULE", e6[e6.INIT_SNIPPET = 1] = "INIT_SNIPPET";
  }(ar || (ar = {}));
  var vr = function() {
  };
  var mr = {};
  var yr = "posthog";
  var br = !wt && -1 === (null == H ? void 0 : H.indexOf("MSIE")) && -1 === (null == H ? void 0 : H.indexOf("Mozilla"));
  var kr = function() {
    var e6, t2, n2;
    return { api_host: "https://app.posthog.com", api_method: "POST", api_transport: "XHR", ui_host: null, token: "", autocapture: true, rageclick: true, cross_subdomain_cookie: (t2 = null == L ? void 0 : L.location, n2 = null == t2 ? void 0 : t2.hostname, !!E(n2) && "herokuapp.com" !== n2.split(".").slice(-2).join(".")), persistence: "localStorage+cookie", persistence_name: "", cookie_name: "", loaded: vr, store_google: true, custom_campaign_params: [], custom_blocked_useragents: [], save_referrer: true, capture_pageview: true, capture_pageleave: true, debug: false, verbose: false, cookie_expiration: 365, upgrade: false, disable_session_recording: false, disable_persistence: false, disable_cookie: false, enable_recording_console_log: void 0, secure_cookie: "https:" === (null == T || null === (e6 = T.location) || void 0 === e6 ? void 0 : e6.protocol), ip: true, opt_out_capturing_by_default: false, opt_out_persistence_by_default: false, opt_out_useragent_filter: false, opt_out_capturing_persistence_type: "localStorage", opt_out_capturing_cookie_prefix: null, opt_in_site_apps: false, property_blacklist: [], respect_dnt: false, sanitize_properties: null, request_headers: {}, inapp_protocol: "//", inapp_link_new_window: false, request_batching: true, properties_string_max_length: 65535, session_recording: {}, mask_all_element_attributes: false, mask_all_text: false, advanced_disable_decide: false, advanced_disable_feature_flags: false, advanced_disable_feature_flags_on_first_load: false, advanced_disable_toolbar_metrics: false, on_request_error: function(e7) {
      var t3 = "Bad HTTP status: " + e7.statusCode + " " + e7.responseText;
      V.error(t3);
    }, get_device_id: function(e7) {
      return e7;
    }, _onCapture: vr, capture_performance: void 0, name: "posthog", callback_fn: "posthog._jsc", bootstrap: {}, disable_compression: false, session_idle_timeout_seconds: 1800 };
  };
  var wr = function(e6, t2, n2, r2) {
    var i2, o2 = n2 !== yr && lr ? n2 ? lr[n2] : void 0 : lr, s2 = { initComplete: false, syncCode: false }, a2 = function(e7) {
      return function(t3) {
        s2[e7] || (s2[e7] = true, s2.initComplete && s2.syncCode && (null == r2 || r2(t3)));
      };
    };
    if (o2 && ur === ar.INIT_MODULE)
      i2 = o2;
    else {
      if (o2 && !S(o2))
        return void V.error("You have already initialized " + n2);
      i2 = new Fr();
    }
    if (i2._init(e6, t2, n2, a2("initComplete")), i2.toolbar.maybeLoadToolbar(), i2.sessionRecording = new tn(i2), i2.sessionRecording.startRecordingIfEnabled(), i2.config.disable_scroll_properties || i2.pageViewManager.startMeasuringScrollPosition(), i2.__autocapture = i2.config.autocapture, Qe._setIsAutocaptureEnabled(i2), Qe._isAutocaptureEnabled) {
      i2.__autocapture = i2.config.autocapture;
      Qe.enabledForProject(i2.config.token, 100, 100) ? Qe.isBrowserSupported() ? Qe.init(i2) : (i2.__autocapture = false, V.info("Disabling Automatic Event Collection because this browser is not supported")) : (i2.__autocapture = false, V.info("Not in active bucket: disabling Automatic Event Collection."));
    }
    return m.DEBUG = m.DEBUG || i2.config.debug, !I(o2) && S(o2) && (i2._execute_array.call(i2.people, o2.people), i2._execute_array(o2)), a2("syncCode")(i2), i2;
  };
  var Sr = function() {
    function e6() {
      r(this, e6), s(this, "__forceAllowLocalhost", false);
    }
    return o(e6, [{ key: "_forceAllowLocalhost", get: function() {
      return this.__forceAllowLocalhost;
    }, set: function(e7) {
      V.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e7;
    } }]), e6;
  }();
  var Fr = function() {
    function e6() {
      var t2 = this;
      r(this, e6), s(this, "webPerformance", new Sr()), this.config = kr(), this.compression = {}, this.decideEndpointWasHit = false, this.SentryIntegration = ir, this.segmentIntegration = function() {
        return function(e7) {
          Promise && Promise.resolve || V.warn("This browser does not have Promise support, and can not use the segment integration");
          var t3 = function(t4, n2) {
            t4.event.userId || t4.event.anonymousId === e7.get_distinct_id() || e7.reset(), t4.event.userId && t4.event.userId !== e7.get_distinct_id() && (e7.register({ distinct_id: t4.event.userId }), e7.reloadFeatureFlags());
            var r2 = e7._calculate_event_properties(n2, t4.event.properties);
            return t4.event.properties = Object.assign({}, r2, t4.event.properties), t4;
          };
          return { name: "PostHog JS", type: "enrichment", version: "1.0.0", isLoaded: function() {
            return true;
          }, load: function() {
            return Promise.resolve();
          }, track: function(e8) {
            return t3(e8, e8.event.event);
          }, page: function(e8) {
            return t3(e8, "$pageview");
          }, identify: function(e8) {
            return t3(e8, "$identify");
          }, screen: function(e8) {
            return t3(e8, "$screen");
          } };
        }(t2);
      }, this.__captureHooks = [], this.__request_queue = [], this.__loaded = false, this.__loaded_recorder_version = void 0, this.__autocapture = void 0, this._jsc = function() {
      }, this.analyticsDefaultEndpoint = "/e/", this.elementsChainAsString = false, this.featureFlags = new Ze(this), this.toolbar = new sn(this), this.pageViewManager = new or(this), this.surveys = new dr(this), this.rateLimiter = new hr(), this.requestRouter = new rr(this), this.people = { set: function(e7, n2, r2) {
        var i2 = E(e7) ? s({}, e7, n2) : e7;
        t2.setPersonProperties(i2), null == r2 || r2({});
      }, set_once: function(e7, n2, r2) {
        var i2 = E(e7) ? s({}, e7, n2) : e7;
        t2.setPersonProperties(void 0, i2), null == r2 || r2({});
      } };
    }
    return o(e6, [{ key: "init", value: function(e7, t2, n2) {
      if (I(n2))
        V.critical("You must name your new library: init(token, config, name)");
      else {
        if (n2 !== yr) {
          var r2 = wr(e7, t2, n2, function(e8) {
            lr[n2] = e8, e8._loaded();
          });
          return lr[n2] = r2, r2;
        }
        V.critical("You must initialize the main posthog object right after you include the PostHog js snippet");
      }
    } }, { key: "_init", value: function(e7) {
      var n2, r2, i2, o2 = this, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a2 = arguments.length > 2 ? arguments[2] : void 0, u2 = arguments.length > 3 ? arguments[3] : void 0;
      this.__loaded = true, this.config = {}, this._triggered_notifs = [];
      var l2, c2 = { segmentRegister: false, syncCode: false }, d2 = function(e8) {
        return function() {
          c2[e8] || (c2[e8] = true, c2.segmentRegister && c2.syncCode && (null == u2 || u2(o2)));
        };
      };
      (s2.request_headers = s2.request_headers || s2.xhr_headers, this.set_config(J({}, kr(), s2, { name: a2, token: e7, callback_fn: (a2 === yr ? a2 : yr + "." + a2) + "._jsc" })), this._jsc = function() {
      }, null != T && null !== (n2 = T.rrweb) && void 0 !== n2 && n2.record || null != T && T.rrwebRecord) && (this.__loaded_recorder_version = null == T || null === (l2 = T.rrweb) || void 0 === l2 ? void 0 : l2.version);
      if (this.persistence = new xt(this.config), this._requestQueue = new un(this._handle_queued_event.bind(this)), this._retryQueue = new er(this.config.on_request_error, this.rateLimiter), this.__captureHooks = [], this.__request_queue = [], this.sessionManager = new nr(this.config, this.persistence), this.sessionPropsManager = new pr(this.sessionManager, this.persistence), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new xt(t(t({}, this.config), {}, { persistence: "sessionStorage" })), this._gdpr_init(), s2.segment ? (this.config.get_device_id = function() {
        return s2.segment.user().anonymousId();
      }, s2.segment.user().id() && (this.register({ distinct_id: s2.segment.user().id() }), this.persistence.set_user_state("identified")), s2.segment.register(this.segmentIntegration()).then(d2("segmentRegister"))) : d2("segmentRegister")(), void 0 !== (null === (r2 = s2.bootstrap) || void 0 === r2 ? void 0 : r2.distinctID)) {
        var h2, f2, p2 = this.config.get_device_id(st()), _2 = null !== (h2 = s2.bootstrap) && void 0 !== h2 && h2.isIdentifiedID ? p2 : s2.bootstrap.distinctID;
        this.persistence.set_user_state(null !== (f2 = s2.bootstrap) && void 0 !== f2 && f2.isIdentifiedID ? "identified" : "anonymous"), this.register({ distinct_id: s2.bootstrap.distinctID, $device_id: _2 });
      }
      if (this._hasBootstrappedFeatureFlags()) {
        var g2, v2, m2 = Object.keys((null === (g2 = s2.bootstrap) || void 0 === g2 ? void 0 : g2.featureFlags) || {}).filter(function(e8) {
          var t2, n3;
          return !(null === (t2 = s2.bootstrap) || void 0 === t2 || null === (n3 = t2.featureFlags) || void 0 === n3 || !n3[e8]);
        }).reduce(function(e8, t2) {
          var n3, r3;
          return e8[t2] = (null === (n3 = s2.bootstrap) || void 0 === n3 || null === (r3 = n3.featureFlags) || void 0 === r3 ? void 0 : r3[t2]) || false, e8;
        }, {}), y2 = Object.keys((null === (v2 = s2.bootstrap) || void 0 === v2 ? void 0 : v2.featureFlagPayloads) || {}).filter(function(e8) {
          return m2[e8];
        }).reduce(function(e8, t2) {
          var n3, r3, i3, o3;
          null !== (n3 = s2.bootstrap) && void 0 !== n3 && null !== (r3 = n3.featureFlagPayloads) && void 0 !== r3 && r3[t2] && (e8[t2] = null === (i3 = s2.bootstrap) || void 0 === i3 || null === (o3 = i3.featureFlagPayloads) || void 0 === o3 ? void 0 : o3[t2]);
          return e8;
        }, {});
        this.featureFlags.receivedFeatureFlags({ featureFlags: m2, featureFlagPayloads: y2 });
      }
      if (!this.get_distinct_id()) {
        var b2 = this.config.get_device_id(st());
        this.register_once({ distinct_id: b2, $device_id: b2 }, ""), this.persistence.set_user_state("anonymous");
      }
      null == T || null === (i2 = T.addEventListener) || void 0 === i2 || i2.call(T, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), d2("syncCode")();
    } }, { key: "_afterDecideResponse", value: function(e7) {
      var t2;
      if (this.compression = {}, e7.supportedCompression && !this.config.disable_compression) {
        var n2, r2 = {}, i2 = v(e7.supportedCompression);
        try {
          for (i2.s(); !(n2 = i2.n()).done; ) {
            r2[n2.value] = true;
          }
        } catch (e8) {
          i2.e(e8);
        } finally {
          i2.f();
        }
        this.compression = r2;
      }
      null !== (t2 = e7.analytics) && void 0 !== t2 && t2.endpoint && (this.analyticsDefaultEndpoint = e7.analytics.endpoint), e7.elementsChainAsString && (this.elementsChainAsString = e7.elementsChainAsString), e7.__preview_ingestion_endpoints && (this.config.__preview_ingestion_endpoints = e7.__preview_ingestion_endpoints);
    } }, { key: "_loaded", value: function() {
      var e7 = this.config.advanced_disable_decide;
      e7 || this.featureFlags.setReloadingPaused(true);
      try {
        this.config.loaded(this);
      } catch (e8) {
        V.critical("`loaded` function failed", e8);
      }
      this._start_queue_if_opted_in(), this.config.capture_pageview && L && this.capture("$pageview", { title: L.title }, { send_instantly: true }), e7 || (new nn(this).call(), this.featureFlags.resetRequestQueue());
    } }, { key: "_start_queue_if_opted_in", value: function() {
      var e7;
      this.has_opted_out_capturing() || this.config.request_batching && (null === (e7 = this._requestQueue) || void 0 === e7 || e7.poll());
    } }, { key: "_dom_loaded", value: function() {
      var e7 = this;
      this.has_opted_out_capturing() || Q(this.__request_queue, function(t2) {
        e7._send_request.apply(e7, p(t2));
      }), this.__request_queue = [], this._start_queue_if_opted_in();
    } }, { key: "_prepare_callback", value: function(e7, t2) {
      if (I(e7))
        return null;
      if (wt)
        return function(n3) {
          e7(n3, t2);
        };
      var n2 = this._jsc, r2 = "" + Math.floor(1e8 * Math.random()), i2 = this.config.callback_fn + "[" + r2 + "]";
      return n2[r2] = function(i3) {
        delete n2[r2], e7(i3, t2);
      }, i2;
    } }, { key: "_handle_unload", value: function() {
      var e7, t2;
      this.config.request_batching ? (this.config.capture_pageview && this.config.capture_pageleave && this.capture("$pageleave"), null === (e7 = this._requestQueue) || void 0 === e7 || e7.unload(), null === (t2 = this._retryQueue) || void 0 === t2 || t2.unload()) : this.config.capture_pageview && this.config.capture_pageleave && this.capture("$pageleave", null, { transport: "sendBeacon" });
    } }, { key: "_handle_queued_event", value: function(e7, t2, n2) {
      var r2 = JSON.stringify(t2);
      this.__compress_and_send_json_request(e7, r2, n2 || mr, vr);
    } }, { key: "__compress_and_send_json_request", value: function(e7, n2, r2, i2) {
      var o2 = function(e8, n3, r3) {
        return e8 === Rn.GZipJS ? [zn(Qn(n3), { mtime: 0 }), t(t({}, r3), {}, { blob: true, urlQueryArgs: { compression: Rn.GZipJS } })] : [{ data: ie(n3) }, r3];
      }(this.compression[Rn.GZipJS] ? Rn.GZipJS : Rn.Base64, n2, r2), s2 = f(o2, 2), a2 = s2[0], u2 = s2[1];
      this._send_request(e7, a2, u2, i2);
    } }, { key: "_send_request", value: function(e7, n2, r2, i2) {
      if (this.__loaded && this._retryQueue && !this.rateLimiter.isRateLimited(r2._batchKey))
        if (br)
          this.__request_queue.push([e7, n2, r2, i2]);
        else {
          var o2 = { method: this.config.api_method, transport: this.config.api_transport, verbose: this.config.verbose };
          r2 = J(o2, r2 || {}), wt || (r2.method = "GET");
          var s2 = T && "sendBeacon" in T.navigator && "sendBeacon" === r2.transport;
          if (e7 = Yn(e7, r2.urlQueryArgs || {}, { ip: this.config.ip }), s2)
            try {
              null == T || T.navigator.sendBeacon(e7, Jn(n2, t(t({}, r2), {}, { sendBeacon: true })));
            } catch (e8) {
            }
          else if (wt || !L)
            try {
              Kn({ url: e7, data: n2, headers: this.config.request_headers, options: r2, callback: i2, retriesPerformedSoFar: 0, retryQueue: this._retryQueue, onError: this.config.on_request_error, onResponse: this.rateLimiter.checkForLimiting });
            } catch (e8) {
              V.error(e8);
            }
          else {
            var a2, u2 = L.createElement("script");
            u2.type = "text/javascript", u2.async = true, u2.defer = true, u2.src = e7;
            var l2 = L.getElementsByTagName("script")[0];
            null === (a2 = l2.parentNode) || void 0 === a2 || a2.insertBefore(u2, l2);
          }
        }
    } }, { key: "_execute_array", value: function(e7) {
      var t2, n2 = this, r2 = [], i2 = [], o2 = [];
      Q(e7, function(e8) {
        e8 && (t2 = e8[0], S(t2) ? o2.push(e8) : P(e8) ? e8.call(n2) : S(e8) && "alias" === t2 ? r2.push(e8) : S(e8) && -1 !== t2.indexOf("capture") && P(n2[t2]) ? o2.push(e8) : i2.push(e8));
      });
      var s2 = function(e8, t3) {
        Q(e8, function(e9) {
          if (S(e9[0])) {
            var n3 = t3;
            Y(e9, function(e10) {
              n3 = n3[e10[0]].apply(n3, e10.slice(1));
            });
          } else
            this[e9[0]].apply(this, e9.slice(1));
        }, t3);
      };
      s2(r2, this), s2(i2, this), s2(o2, this);
    } }, { key: "_hasBootstrappedFeatureFlags", value: function() {
      var e7, t2;
      return (null === (e7 = this.config.bootstrap) || void 0 === e7 ? void 0 : e7.featureFlags) && Object.keys(null === (t2 = this.config.bootstrap) || void 0 === t2 ? void 0 : t2.featureFlags).length > 0 || false;
    } }, { key: "push", value: function(e7) {
      this._execute_array([e7]);
    } }, { key: "capture", value: function(e7, n2) {
      var r2, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mr;
      if (!this.__loaded || !this.sessionPersistence || !this._requestQueue)
        return V.uninitializedWarning("posthog.capture");
      if (!Yt(this)) {
        var o2 = (i2 = i2 || mr).transport;
        if (o2 && (i2.transport = o2), !I(e7) && E(e7)) {
          if (!H || this.config.opt_out_useragent_filter || !gr(H, this.config.custom_blocked_useragents)) {
            this.sessionPersistence.update_search_keyword(), this.config.store_google && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info();
            var s2 = { uuid: st(), event: e7, properties: this._calculate_event_properties(e7, n2 || {}) };
            "$identify" === e7 && (s2.$set = i2.$set, s2.$set_once = i2.$set_once), (s2 = re(s2, i2._noTruncate ? null : this.config.properties_string_max_length)).timestamp = i2.timestamp || /* @__PURE__ */ new Date();
            var a2 = t(t({}, s2.properties.$set), s2.$set);
            (function(e8) {
              if (R(e8)) {
                for (var t2 in e8)
                  if (k.call(e8, t2))
                    return false;
                return true;
              }
              return false;
            })(a2) || this.setPersonPropertiesForFlags(a2), V.info("send", s2);
            var u2 = JSON.stringify(s2), l2 = null !== (r2 = i2._url) && void 0 !== r2 ? r2 : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint), c2 = i2 !== mr;
            return !this.config.request_batching || c2 && !i2._batchKey || i2.send_instantly ? this.__compress_and_send_json_request(l2, u2, i2) : this._requestQueue.enqueue(l2, s2, i2), this._invokeCaptureHooks(e7, s2), s2;
          }
        } else
          V.error("No event name provided to posthog.capture");
      }
    } }, { key: "_addCaptureHook", value: function(e7) {
      this.__captureHooks.push(e7);
    } }, { key: "_invokeCaptureHooks", value: function(e7, t2) {
      this.config._onCapture(e7, t2), Y(this.__captureHooks, function(t3) {
        return t3(e7);
      });
    } }, { key: "_calculate_event_properties", value: function(e7, n2) {
      if (!this.persistence || !this.sessionPersistence)
        return n2;
      var r2 = this.persistence.remove_event_timer(e7), i2 = t({}, n2);
      if (i2.token = this.config.token, "$snapshot" === e7) {
        var o2 = t(t({}, this.persistence.properties()), this.sessionPersistence.properties());
        return i2.distinct_id = o2.distinct_id, i2;
      }
      var s2 = It.properties();
      if (this.sessionManager) {
        var a2 = this.sessionManager.checkAndGetSessionAndWindowId(), u2 = a2.sessionId, l2 = a2.windowId;
        i2.$session_id = u2, i2.$window_id = l2;
      }
      if (this.sessionPropsManager && this.config.__preview_send_client_session_params && ("$pageview" === e7 || "$pageleave" === e7 || "$autocapture" === e7)) {
        var c2 = this.sessionPropsManager.getSessionProps();
        i2 = J(i2, c2);
      }
      if (!this.config.disable_scroll_properties) {
        var d2 = {};
        "$pageview" === e7 ? d2 = this.pageViewManager.doPageView() : "$pageleave" === e7 && (d2 = this.pageViewManager.doPageLeave()), i2 = J(i2, d2);
      }
      if ("$pageview" === e7 && L && (i2.title = L.title), "$performance_event" === e7) {
        var h2 = this.persistence.properties();
        return i2.distinct_id = h2.distinct_id, i2.$current_url = s2.$current_url, i2;
      }
      if (!I(r2)) {
        var f2 = (/* @__PURE__ */ new Date()).getTime() - r2;
        i2.$duration = parseFloat((f2 / 1e3).toFixed(3));
      }
      H && this.config.opt_out_useragent_filter && (i2.$browser_type = gr(H, this.config.custom_blocked_useragents) ? "bot" : "browser"), i2 = J({}, It.properties(), this.persistence.properties(), this.sessionPersistence.properties(), i2);
      var p2 = this.config.property_blacklist;
      S(p2) ? Y(p2, function(e8) {
        delete i2[e8];
      }) : V.error("Invalid value for property_blacklist config: " + p2);
      var _2 = this.config.sanitize_properties;
      return _2 && (i2 = _2(i2, e7)), i2;
    } }, { key: "register", value: function(e7, t2) {
      var n2;
      null === (n2 = this.persistence) || void 0 === n2 || n2.register(e7, t2);
    } }, { key: "register_once", value: function(e7, t2, n2) {
      var r2;
      null === (r2 = this.persistence) || void 0 === r2 || r2.register_once(e7, t2, n2);
    } }, { key: "register_for_session", value: function(e7) {
      var t2;
      null === (t2 = this.sessionPersistence) || void 0 === t2 || t2.register(e7);
    } }, { key: "unregister", value: function(e7) {
      var t2;
      null === (t2 = this.persistence) || void 0 === t2 || t2.unregister(e7);
    } }, { key: "unregister_for_session", value: function(e7) {
      var t2;
      null === (t2 = this.sessionPersistence) || void 0 === t2 || t2.unregister(e7);
    } }, { key: "_register_single", value: function(e7, t2) {
      this.register(s({}, e7, t2));
    } }, { key: "getFeatureFlag", value: function(e7, t2) {
      return this.featureFlags.getFeatureFlag(e7, t2);
    } }, { key: "getFeatureFlagPayload", value: function(e7) {
      var t2 = this.featureFlags.getFeatureFlagPayload(e7);
      try {
        return JSON.parse(t2);
      } catch (e8) {
        return t2;
      }
    } }, { key: "isFeatureEnabled", value: function(e7, t2) {
      return this.featureFlags.isFeatureEnabled(e7, t2);
    } }, { key: "reloadFeatureFlags", value: function() {
      this.featureFlags.reloadFeatureFlags();
    } }, { key: "updateEarlyAccessFeatureEnrollment", value: function(e7, t2) {
      this.featureFlags.updateEarlyAccessFeatureEnrollment(e7, t2);
    } }, { key: "getEarlyAccessFeatures", value: function(e7) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return this.featureFlags.getEarlyAccessFeatures(e7, t2);
    } }, { key: "onFeatureFlags", value: function(e7) {
      return this.featureFlags.onFeatureFlags(e7);
    } }, { key: "onSessionId", value: function(e7) {
      var t2, n2;
      return null !== (t2 = null === (n2 = this.sessionManager) || void 0 === n2 ? void 0 : n2.onSessionId(e7)) && void 0 !== t2 ? t2 : function() {
      };
    } }, { key: "getSurveys", value: function(e7) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      this.surveys.getSurveys(e7, t2);
    } }, { key: "getActiveMatchingSurveys", value: function(e7) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      this.surveys.getActiveMatchingSurveys(e7, t2);
    } }, { key: "identify", value: function(e7, t2, n2) {
      if (!this.__loaded || !this.persistence)
        return V.uninitializedWarning("posthog.identify");
      if (C(e7) && (e7 = e7.toString(), V.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), e7)
        if (["distinct_id", "distinctid"].includes(e7.toLowerCase()))
          V.critical('The string "'.concat(e7, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'));
        else {
          var r2 = this.get_distinct_id();
          if (this.register({ $user_id: e7 }), !this.get_property("$device_id")) {
            var i2 = r2;
            this.register_once({ $had_persisted_distinct_id: true, $device_id: i2 }, "");
          }
          e7 !== r2 && e7 !== this.get_property(Ie) && (this.unregister(Ie), this.register({ distinct_id: e7 }));
          var o2 = "anonymous" === this.persistence.get_user_state();
          e7 !== r2 && o2 ? (this.persistence.set_user_state("identified"), this.setPersonPropertiesForFlags(t2 || {}, false), this.capture("$identify", { distinct_id: e7, $anon_distinct_id: r2 }, { $set: t2 || {}, $set_once: n2 || {} }), this.featureFlags.setAnonymousDistinctId(r2)) : (t2 || n2) && this.setPersonProperties(t2, n2), e7 !== r2 && (this.reloadFeatureFlags(), this.unregister(He));
        }
      else
        V.error("Unique user id has not been set in posthog.identify");
    } }, { key: "setPersonProperties", value: function(e7, t2) {
      (e7 || t2) && (this.setPersonPropertiesForFlags(e7 || {}), this.capture("$set", { $set: e7 || {}, $set_once: t2 || {} }));
    } }, { key: "group", value: function(e7, n2, r2) {
      if (e7 && n2) {
        var i2 = this.getGroups();
        i2[e7] !== n2 && this.resetGroupPropertiesForFlags(e7), this.register({ $groups: t(t({}, i2), {}, s({}, e7, n2)) }), r2 && (this.capture("$groupidentify", { $group_type: e7, $group_key: n2, $group_set: r2 }), this.setGroupPropertiesForFlags(s({}, e7, r2))), i2[e7] === n2 || r2 || this.reloadFeatureFlags();
      } else
        V.error("posthog.group requires a group type and group key");
    } }, { key: "resetGroups", value: function() {
      this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
    } }, { key: "setPersonPropertiesForFlags", value: function(e7) {
      var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      this.featureFlags.setPersonPropertiesForFlags(e7, t2);
    } }, { key: "resetPersonPropertiesForFlags", value: function() {
      this.featureFlags.resetPersonPropertiesForFlags();
    } }, { key: "setGroupPropertiesForFlags", value: function(e7) {
      var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      this.featureFlags.setGroupPropertiesForFlags(e7, t2);
    } }, { key: "resetGroupPropertiesForFlags", value: function(e7) {
      this.featureFlags.resetGroupPropertiesForFlags(e7);
    } }, { key: "reset", value: function(e7) {
      var t2, n2, r2, i2;
      if (!this.__loaded)
        return V.uninitializedWarning("posthog.reset");
      var o2 = this.get_property("$device_id");
      null === (t2 = this.persistence) || void 0 === t2 || t2.clear(), null === (n2 = this.sessionPersistence) || void 0 === n2 || n2.clear(), null === (r2 = this.persistence) || void 0 === r2 || r2.set_user_state("anonymous"), null === (i2 = this.sessionManager) || void 0 === i2 || i2.resetSessionId();
      var s2 = this.config.get_device_id(st());
      this.register_once({ distinct_id: s2, $device_id: e7 ? s2 : o2 }, "");
    } }, { key: "get_distinct_id", value: function() {
      return this.get_property("distinct_id");
    } }, { key: "getGroups", value: function() {
      return this.get_property("$groups") || {};
    } }, { key: "get_session_id", value: function() {
      var e7, t2;
      return null !== (e7 = null === (t2 = this.sessionManager) || void 0 === t2 ? void 0 : t2.checkAndGetSessionAndWindowId(true).sessionId) && void 0 !== e7 ? e7 : "";
    } }, { key: "get_session_replay_url", value: function(e7) {
      if (!this.sessionManager)
        return "";
      var t2 = this.sessionManager.checkAndGetSessionAndWindowId(true), n2 = t2.sessionId, r2 = t2.sessionStartTimestamp, i2 = this.requestRouter.endpointFor("ui", "/replay/" + n2);
      if (null != e7 && e7.withTimestamp && r2) {
        var o2, s2 = null !== (o2 = e7.timestampLookBack) && void 0 !== o2 ? o2 : 10;
        if (!r2)
          return i2;
        var a2 = Math.max(Math.floor(((/* @__PURE__ */ new Date()).getTime() - r2) / 1e3) - s2, 0);
        i2 += "?t=".concat(a2);
      }
      return i2;
    } }, { key: "alias", value: function(e7, t2) {
      return e7 === this.get_property(Re) ? (V.critical("Attempting to create alias for existing People user - aborting."), -2) : (I(t2) && (t2 = this.get_distinct_id()), e7 !== t2 ? (this._register_single(Ie, e7), this.capture("$create_alias", { alias: e7, distinct_id: t2 })) : (V.warn("alias matches current distinct_id - skipping api call."), this.identify(e7), -1));
    } }, { key: "set_config", value: function(e7) {
      var n2, r2, i2 = t({}, this.config);
      if (R(e7) && (J(this.config, e7), this.config.persistence_name || (this.config.persistence_name = this.config.cookie_name), this.config.disable_persistence || (this.config.disable_persistence = this.config.disable_cookie), null === (n2 = this.persistence) || void 0 === n2 || n2.update_config(this.config), null === (r2 = this.sessionPersistence) || void 0 === r2 || r2.update_config(this.config), pt.is_supported() && "true" === pt.get("ph_debug") && (this.config.debug = true), this.config.debug && (m.DEBUG = true), this.sessionRecording && !I(e7.disable_session_recording))) {
        var o2 = i2.disable_session_recording !== e7.disable_session_recording, s2 = !Yt(this) && !e7.disable_session_recording && !this.sessionRecording.started;
        (o2 || s2) && (e7.disable_session_recording ? this.sessionRecording.stopRecording() : this.sessionRecording.startRecordingIfEnabled());
      }
    } }, { key: "startSessionRecording", value: function() {
      this.set_config({ disable_session_recording: false });
    } }, { key: "stopSessionRecording", value: function() {
      this.set_config({ disable_session_recording: true });
    } }, { key: "sessionRecordingStarted", value: function() {
      var e7;
      return !(null === (e7 = this.sessionRecording) || void 0 === e7 || !e7.started);
    } }, { key: "loadToolbar", value: function(e7) {
      return this.toolbar.loadToolbar(e7);
    } }, { key: "get_property", value: function(e7) {
      var t2;
      return null === (t2 = this.persistence) || void 0 === t2 ? void 0 : t2.props[e7];
    } }, { key: "getSessionProperty", value: function(e7) {
      var t2;
      return null === (t2 = this.sessionPersistence) || void 0 === t2 ? void 0 : t2.props[e7];
    } }, { key: "toString", value: function() {
      var e7, t2 = null !== (e7 = this.config.name) && void 0 !== e7 ? e7 : yr;
      return t2 !== yr && (t2 = yr + "." + t2), t2;
    } }, { key: "_gdpr_init", value: function() {
      "localStorage" === this.config.opt_out_capturing_persistence_type && pt.is_supported() && (!this.has_opted_in_capturing() && this.has_opted_in_capturing({ persistence_type: "cookie" }) && this.opt_in_capturing({ enable_persistence: false }), !this.has_opted_out_capturing() && this.has_opted_out_capturing({ persistence_type: "cookie" }) && this.opt_out_capturing({ clear_persistence: false }), this.clear_opt_in_out_capturing({ persistence_type: "cookie", enable_persistence: false })), this.has_opted_out_capturing() ? this._gdpr_update_persistence({ clear_persistence: true }) : this.has_opted_in_capturing() || !this.config.opt_out_capturing_by_default && !ht.get("ph_optout") || (ht.remove("ph_optout"), this.opt_out_capturing({ clear_persistence: this.config.opt_out_persistence_by_default }));
    } }, { key: "_gdpr_update_persistence", value: function(e7) {
      var t2, n2, r2, i2, o2;
      if (e7 && e7.clear_persistence)
        r2 = true;
      else {
        if (!e7 || !e7.enable_persistence)
          return;
        r2 = false;
      }
      this.config.disable_persistence || (null === (t2 = this.persistence) || void 0 === t2 ? void 0 : t2.disabled) === r2 || (null === (i2 = this.persistence) || void 0 === i2 || i2.set_disabled(r2));
      this.config.disable_persistence || (null === (n2 = this.sessionPersistence) || void 0 === n2 ? void 0 : n2.disabled) === r2 || (null === (o2 = this.sessionPersistence) || void 0 === o2 || o2.set_disabled(r2));
    } }, { key: "_gdpr_call_func", value: function(e7, t2) {
      return t2 = J({ capture: this.capture.bind(this), persistence_type: this.config.opt_out_capturing_persistence_type, cookie_prefix: this.config.opt_out_capturing_cookie_prefix, cookie_expiration: this.config.cookie_expiration, cross_subdomain_cookie: this.config.cross_subdomain_cookie, secure_cookie: this.config.secure_cookie }, t2 || {}), pt.is_supported() || "localStorage" !== t2.persistence_type || (t2.persistence_type = "cookie"), e7(this.config.token, { capture: t2.capture, captureEventName: t2.capture_event_name, captureProperties: t2.capture_properties, persistenceType: t2.persistence_type, persistencePrefix: t2.cookie_prefix, cookieExpiration: t2.cookie_expiration, crossSubdomainCookie: t2.cross_subdomain_cookie, secureCookie: t2.secure_cookie });
    } }, { key: "opt_in_capturing", value: function(e7) {
      e7 = J({ enable_persistence: true }, e7 || {}), this._gdpr_call_func(Bt, e7), this._gdpr_update_persistence(e7);
    } }, { key: "opt_out_capturing", value: function(e7) {
      var t2 = J({ clear_persistence: true }, e7 || {});
      this._gdpr_call_func(jt, t2), this._gdpr_update_persistence(t2);
    } }, { key: "has_opted_in_capturing", value: function(e7) {
      return this._gdpr_call_func(Ht, e7);
    } }, { key: "has_opted_out_capturing", value: function(e7) {
      return this._gdpr_call_func(Ut, e7);
    } }, { key: "clear_opt_in_out_capturing", value: function(e7) {
      var t2 = J({ enable_persistence: true }, null != e7 ? e7 : {});
      this._gdpr_call_func(Wt, t2), this._gdpr_update_persistence(t2);
    } }, { key: "debug", value: function(e7) {
      false === e7 ? (null == T || T.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({ debug: false })) : (null == T || T.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({ debug: true }));
    } }]), e6;
  }();
  !function(e6, t2) {
    for (var n2 = 0; n2 < t2.length; n2++)
      e6.prototype[t2[n2]] = te(e6.prototype[t2[n2]]);
  }(Fr, ["identify"]);
  var Pr;
  var Rr;
  var Ir = {};
  var Er = function() {
    lr.init = function(e6, t2, n2) {
      if (n2)
        return lr[n2] || (lr[n2] = Ir[n2] = wr(e6 || "", t2 || {}, n2, function(e7) {
          lr[n2] = Ir[n2] = e7, e7._loaded();
        })), lr[n2];
      var r2 = lr;
      return Ir[yr] ? r2 = Ir[yr] : e6 && (r2 = wr(e6, t2 || {}, yr, function(e7) {
        Ir[yr] = e7, e7._loaded();
      }), Ir[yr] = r2), lr = r2, ur === ar.INIT_SNIPPET && (U[yr] = lr), Y(Ir, function(e7, t3) {
        t3 !== yr && (lr[t3] = e7);
      }), r2;
    };
  };
  !function(e6) {
    e6.Popover = "popover", e6.API = "api", e6.Widget = "widget";
  }(Pr || (Pr = {})), function(e6) {
    e6.Open = "open", e6.MultipleChoice = "multiple_choice", e6.SingleChoice = "single_choice", e6.Rating = "rating", e6.Link = "link";
  }(Rr || (Rr = {}));
  var xr = (ur = ar.INIT_MODULE, lr = new Fr(), Er(), lr.init(), function() {
    function e6() {
      e6.done || (e6.done = true, br = false, Y(Ir, function(e7) {
        e7._dom_loaded();
      }));
    }
    null != L && L.addEventListener && ("complete" === L.readyState ? e6() : L.addEventListener("DOMContentLoaded", e6, false)), T && se(T, "load", e6, true);
  }(), lr);

  // src/page/home/index.js
  import_gsap.gsap.registerPlugin(ScrollTrigger2);
  if (!window.location.host.includes("127.0.0.1") && !window.location.host.includes("localhost") && !window.location.host.includes("webflow.io")) {
    xr.init("phc_wPpJiWuuJP2Nx2sJdyyhDEyVyBkIvVH7uT90AHUsHHK", {
      api_host: "https://app.posthog.com"
    });
  }
  $(document).ready(function() {
    $(".span_wrapper").each(function(index) {
      let relatedEl = $(".span_element").eq(index);
      relatedEl.appendTo($(this));
    });
    function voirPlus() {
      $("[tag-target]").each(function(index) {
        let relatedEl = $("[project-target]").eq(index);
        relatedEl.appendTo($(this));
      });
    }
    voirPlus();
    $("[projet-voir-plus]").on("click", function() {
      voirPlus();
    });
    const matchMediaDesktop = window.matchMedia("(min-width: 767px)");
    function checkBreakpoint(x2) {
      if (x2.matches) {
      } else {
        const swiper = new Swiper(".swiper", {
          speed: 400,
          spaceBetween: 100,
          slidesPerView: 1,
          effect: "cards"
        });
      }
    }
    matchMediaDesktop.addListener(checkBreakpoint);
    checkBreakpoint(matchMediaDesktop);
  });
  $(document).ready(function() {
    import_gsap.gsap.registerPlugin(ScrollTrigger2);
    function animateItems() {
      const items = $(".cta_logo_wrap--br1-cm0-2");
      const section = items.closest("section");
      import_gsap.gsap.set(items, { scale: 0, opacity: 0 });
      const timeline = import_gsap.gsap.timeline();
      timeline.staggerTo(items, 0.2, { scale: 1, opacity: 1, ease: "power2.out" }, 0.2);
      timeline.pause();
      ScrollTrigger2.create({
        trigger: section[0],
        // Utilisez section[0] pour obtenir l'élément DOM réel
        markers: false,
        start: "20% 80%",
        onEnter: () => {
          timeline.play();
        },
        onLeaveBack: () => {
        }
      });
    }
    animateItems();
    function animateCollectif() {
      const items = $("[collectif-photo]");
      const section = items.closest("section");
      const timeline = import_gsap.gsap.timeline();
      timeline.staggerFrom(items, 0.2, { scale: 0, opacity: 0, ease: "power2.out" }, 0.2);
      timeline.pause();
      ScrollTrigger2.create({
        trigger: section[0],
        // Utilisez section[0] pour obtenir l'élément DOM réel
        markers: false,
        start: "top center",
        onEnter: () => {
          timeline.play();
        }
      });
    }
    animateCollectif();
    function animateOurs() {
      const items = $("[cta-ours]");
      const section = items.closest("section");
      const timeline = import_gsap.gsap.timeline();
      timeline.staggerFrom(items, 0.2, { y: "100%", opacity: 1, ease: "power2.out" }, 0.2);
      timeline.pause();
      ScrollTrigger2.create({
        trigger: section[0],
        // Utilisez section[0] pour obtenir l'élément DOM réel
        markers: false,
        start: "60% 80%",
        onEnter: () => {
          timeline.play();
        },
        onLeaveBack: () => {
          timeline.reverse();
        }
      });
    }
    animateOurs();
  });
  $(document).ready(function() {
    $(".w-pagination-previous").hide();
  });
})();
/*! Bundled license information:

gsap/dist/gsap.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=index.js.map
