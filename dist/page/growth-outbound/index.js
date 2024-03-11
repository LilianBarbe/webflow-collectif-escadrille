"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn3, res) => function __init() {
    return fn3 && (res = (0, fn3[__getOwnPropNames(fn3)[0]])(fn3 = 0)), res;
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
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = global2 || self, factory(global2.window = global2.window || {}));
      })(exports, function(exports2) {
        "use strict";
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          subClass.__proto__ = superClass;
        }
        function _assertThisInitialized2(self2) {
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
          var target = targets[0], harnessPlugin, i3;
          _isObject3(target) || _isFunction3(target) || (targets = [targets]);
          if (!(harnessPlugin = (target._gsap || {}).harness)) {
            i3 = _harnessPlugins.length;
            while (i3-- && !_harnessPlugins[i3].targetTest(target)) {
            }
            harnessPlugin = _harnessPlugins[i3];
          }
          i3 = targets.length;
          while (i3--) {
            targets[i3] && (targets[i3]._gsap || (targets[i3]._gsap = new GSCache(targets[i3], harnessPlugin))) || targets.splice(i3, 1);
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
        }, _parseRelative = function _parseRelative2(start2, value) {
          var operator = value.charAt(0), end2 = parseFloat(value.substr(2));
          start2 = parseFloat(start2);
          return operator === "+" ? start2 + end2 : operator === "-" ? start2 - end2 : operator === "*" ? start2 * end2 : start2 / end2;
        }, _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
          var l2 = toFind.length, i3 = 0;
          for (; toSearch.indexOf(toFind[i3]) < 0 && ++i3 < l2; ) {
          }
          return i3 < l2;
        }, _lazyRender = function _lazyRender2() {
          var l2 = _lazyTweens.length, a2 = _lazyTweens.slice(0), i3, tween;
          _lazyLookup = {};
          _lazyTweens.length = 0;
          for (i3 = 0; i3 < l2; i3++) {
            tween = a2[i3];
            tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
          }
        }, _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
          _lazyTweens.length && !_reverting && _lazyRender();
          animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
          _lazyTweens.length && !_reverting && _lazyRender();
        }, _numericIfPossible = function _numericIfPossible2(value) {
          var n3 = parseFloat(value);
          return (n3 || n3 === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n3 : _isString3(value) ? value.trim() : value;
        }, _passThrough3 = function _passThrough4(p2) {
          return p2;
        }, _setDefaults3 = function _setDefaults4(obj, defaults2) {
          for (var p2 in defaults2) {
            p2 in obj || (obj[p2] = defaults2[p2]);
          }
          return obj;
        }, _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
          return function(obj, defaults2) {
            for (var p2 in defaults2) {
              p2 in obj || p2 === "duration" && excludeDuration || p2 === "ease" || (obj[p2] = defaults2[p2]);
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
          var i3 = a1.length, match = i3 === a2.length;
          while (match && i3-- && a1[i3] === a2[i3]) {
          }
          return i3 < 0;
        }, _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
          if (firstProp === void 0) {
            firstProp = "_first";
          }
          if (lastProp === void 0) {
            lastProp = "_last";
          }
          var prev = parent[lastProp], t3;
          if (sortBy) {
            t3 = child[sortBy];
            while (prev && prev[sortBy] > t3) {
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
          var t3;
          if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
            t3 = _parentToChildTotalTime(timeline.rawTime(), child);
            if (!child._dur || _clamp3(0, child.totalDuration(), t3) - child._tTime > _tinyNum) {
              child.render(t3, true);
            }
          }
          if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
            if (timeline._dur < timeline.duration()) {
              t3 = timeline;
              while (t3._dp) {
                t3.rawTime() >= 0 && t3.totalTime(t3._tTime);
                t3 = t3._dp;
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
          var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i3, offset2, isPercent;
          if (_isString3(position) && (isNaN(position) || position in labels)) {
            offset2 = position.charAt(0);
            isPercent = position.substr(-1) === "%";
            i3 = position.indexOf("=");
            if (offset2 === "<" || offset2 === ">") {
              i3 >= 0 && (position = position.replace(/=/, ""));
              return (offset2 === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i3 < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
            }
            if (i3 < 0) {
              position in labels || (labels[position] = clippedDuration);
              return labels[position];
            }
            offset2 = parseFloat(position.charAt(i3 - 1) + position.substr(i3 + 1));
            if (isPercent && percentAnimation) {
              offset2 = offset2 / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
            }
            return i3 > 1 ? _parsePosition4(animation, position.substr(0, i3 - 1), percentAnimation) + offset2 : clippedDuration + offset2;
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
        }, _clamp3 = function _clamp4(min2, max2, value) {
          return value < min2 ? min2 : value > max2 ? max2 : value;
        }, getUnit = function getUnit2(value, v2) {
          return !_isString3(value) || !(v2 = _unitExp.exec(value)) ? "" : v2[1];
        }, clamp = function clamp2(min2, max2, value) {
          return _conditionalReturn(value, function(v2) {
            return _clamp3(min2, max2, v2);
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
          return function(i3, target, a2) {
            var l2 = (a2 || vars).length, distances = cache[l2], originX, originY, x2, y2, d2, j2, max2, min2, wrapAt;
            if (!distances) {
              wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
              if (!wrapAt) {
                max2 = -_bigNum;
                while (max2 < (max2 = a2[wrapAt++].getBoundingClientRect().left) && wrapAt < l2) {
                }
                wrapAt < l2 && wrapAt--;
              }
              distances = cache[l2] = [];
              originX = ratios ? Math.min(wrapAt, l2) * ratioX - 0.5 : from % wrapAt;
              originY = wrapAt === _bigNum ? 0 : ratios ? l2 * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
              max2 = 0;
              min2 = _bigNum;
              for (j2 = 0; j2 < l2; j2++) {
                x2 = j2 % wrapAt - originX;
                y2 = originY - (j2 / wrapAt | 0);
                distances[j2] = d2 = !axis ? _sqrt(x2 * x2 + y2 * y2) : Math.abs(axis === "y" ? y2 : x2);
                d2 > max2 && (max2 = d2);
                d2 < min2 && (min2 = d2);
              }
              from === "random" && shuffle(distances);
              distances.max = max2 - min2;
              distances.min = min2;
              distances.v = l2 = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l2 ? l2 - 1 : !axis ? Math.max(wrapAt, l2 / wrapAt) : axis === "y" ? l2 / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
              distances.b = l2 < 0 ? base - l2 : base;
              distances.u = getUnit(vars.amount || vars.each) || 0;
              ease = ease && l2 < 0 ? _invertEase(ease) : ease;
            }
            l2 = (distances[i3] - distances.min) / distances.max || 0;
            return _roundPrecise(distances.b + (ease ? ease(l2) : l2) * distances.v) + distances.u;
          };
        }, _roundModifier = function _roundModifier2(v2) {
          var p2 = Math.pow(10, ((v2 + "").split(".")[1] || "").length);
          return function(raw) {
            var n3 = _roundPrecise(Math.round(parseFloat(raw) / v2) * v2 * p2);
            return (n3 - n3 % 1) / p2 + (_isNumber3(raw) ? 0 : getUnit(raw));
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
            var x2 = parseFloat(is2D ? raw.x : raw), y2 = parseFloat(is2D ? raw.y : 0), min2 = _bigNum, closest = 0, i3 = snapTo.length, dx, dy;
            while (i3--) {
              if (is2D) {
                dx = snapTo[i3].x - x2;
                dy = snapTo[i3].y - y2;
                dx = dx * dx + dy * dy;
              } else {
                dx = Math.abs(snapTo[i3] - x2);
              }
              if (dx < min2) {
                min2 = dx;
                closest = i3;
              }
            }
            closest = !radius || min2 <= radius ? snapTo[closest] : raw;
            return is2D || closest === raw || _isNumber3(raw) ? closest : closest + getUnit(raw);
          });
        }, random = function random2(min2, max2, roundingIncrement, returnFunction) {
          return _conditionalReturn(_isArray(min2) ? !max2 : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
            return _isArray(min2) ? min2[~~(Math.random() * min2.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min2 - roundingIncrement / 2 + Math.random() * (max2 - min2 + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
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
        }, normalize = function normalize2(min2, max2, value) {
          return mapRange(min2, max2, 0, 1, value);
        }, _wrapArray = function _wrapArray2(a2, wrapper, value) {
          return _conditionalReturn(value, function(index) {
            return a2[~~wrapper(index)];
          });
        }, wrap = function wrap2(min2, max2, value) {
          var range = max2 - min2;
          return _isArray(min2) ? _wrapArray(min2, wrap2(0, min2.length), max2) : _conditionalReturn(value, function(value2) {
            return (range + (value2 - min2) % range) % range + min2;
          });
        }, wrapYoyo = function wrapYoyo2(min2, max2, value) {
          var range = max2 - min2, total = range * 2;
          return _isArray(min2) ? _wrapArray(min2, wrapYoyo2(0, min2.length - 1), max2) : _conditionalReturn(value, function(value2) {
            value2 = (total + (value2 - min2) % total) % total || 0;
            return min2 + (value2 > range ? total - value2 : value2);
          });
        }, _replaceRandom = function _replaceRandom2(value) {
          var prev = 0, s3 = "", i3, nums, end2, isArray;
          while (~(i3 = value.indexOf("random(", prev))) {
            end2 = value.indexOf(")", i3);
            isArray = value.charAt(i3 + 7) === "[";
            nums = value.substr(i3 + 7, end2 - i3 - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
            s3 += value.substr(prev, i3 - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
            prev = end2 + 1;
          }
          return s3 + value.substr(prev, value.length - prev);
        }, mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
          var inRange = inMax - inMin, outRange = outMax - outMin;
          return _conditionalReturn(value, function(value2) {
            return outMin + ((value2 - inMin) / inRange * outRange || 0);
          });
        }, interpolate = function interpolate2(start2, end2, progress, mutate) {
          var func = isNaN(start2 + end2) ? 0 : function(p3) {
            return (1 - p3) * start2 + p3 * end2;
          };
          if (!func) {
            var isString = _isString3(start2), master = {}, p2, i3, interpolators, l2, il;
            progress === true && (mutate = 1) && (progress = null);
            if (isString) {
              start2 = {
                p: start2
              };
              end2 = {
                p: end2
              };
            } else if (_isArray(start2) && !_isArray(end2)) {
              interpolators = [];
              l2 = start2.length;
              il = l2 - 2;
              for (i3 = 1; i3 < l2; i3++) {
                interpolators.push(interpolate2(start2[i3 - 1], start2[i3]));
              }
              l2--;
              func = function func2(p3) {
                p3 *= l2;
                var i4 = Math.min(il, ~~p3);
                return interpolators[i4](p3 - i4);
              };
              progress = end2;
            } else if (!mutate) {
              start2 = _merge(_isArray(start2) ? [] : {}, start2);
            }
            if (!interpolators) {
              for (p2 in end2) {
                _addPropTween.call(master, start2, p2, "get", end2[p2]);
              }
              func = function func2(p3) {
                return _renderPropTweens(p3, master) || (isString ? start2.p : start2);
              };
            }
          }
          return _conditionalReturn(progress, func);
        }, _getLabelInDirection = function _getLabelInDirection2(timeline, fromTime, backward) {
          var labels = timeline.labels, min2 = _bigNum, p2, distance, label;
          for (p2 in labels) {
            distance = labels[p2] - fromTime;
            if (distance < 0 === !!backward && distance && min2 > (distance = Math.abs(distance))) {
              label = p2;
              min2 = distance;
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
          var a2 = !v2 ? _colorLookup.black : _isNumber3(v2) ? [v2 >> 16, v2 >> 8 & _255, v2 & _255] : 0, r3, g2, b2, h2, s3, l2, max2, min2, d2, wasHSL;
          if (!a2) {
            if (v2.substr(-1) === ",") {
              v2 = v2.substr(0, v2.length - 1);
            }
            if (_colorLookup[v2]) {
              a2 = _colorLookup[v2];
            } else if (v2.charAt(0) === "#") {
              if (v2.length < 6) {
                r3 = v2.charAt(1);
                g2 = v2.charAt(2);
                b2 = v2.charAt(3);
                v2 = "#" + r3 + r3 + g2 + g2 + b2 + b2 + (v2.length === 5 ? v2.charAt(4) + v2.charAt(4) : "");
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
                s3 = +a2[1] / 100;
                l2 = +a2[2] / 100;
                g2 = l2 <= 0.5 ? l2 * (s3 + 1) : l2 + s3 - l2 * s3;
                r3 = l2 * 2 - g2;
                a2.length > 3 && (a2[3] *= 1);
                a2[0] = _hue(h2 + 1 / 3, r3, g2);
                a2[1] = _hue(h2, r3, g2);
                a2[2] = _hue(h2 - 1 / 3, r3, g2);
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
            r3 = a2[0] / _255;
            g2 = a2[1] / _255;
            b2 = a2[2] / _255;
            max2 = Math.max(r3, g2, b2);
            min2 = Math.min(r3, g2, b2);
            l2 = (max2 + min2) / 2;
            if (max2 === min2) {
              h2 = s3 = 0;
            } else {
              d2 = max2 - min2;
              s3 = l2 > 0.5 ? d2 / (2 - max2 - min2) : d2 / (max2 + min2);
              h2 = max2 === r3 ? (g2 - b2) / d2 + (g2 < b2 ? 6 : 0) : max2 === g2 ? (b2 - r3) / d2 + 2 : (r3 - g2) / d2 + 4;
              h2 *= 60;
            }
            a2[0] = ~~(h2 + 0.5);
            a2[1] = ~~(s3 * 100 + 0.5);
            a2[2] = ~~(l2 * 100 + 0.5);
          }
          forceAlpha && a2.length < 4 && (a2[3] = 1);
          return a2;
        }, _colorOrderData = function _colorOrderData2(v2) {
          var values = [], c2 = [], i3 = -1;
          v2.split(_colorExp).forEach(function(v3) {
            var a2 = v3.match(_numWithUnitExp) || [];
            values.push.apply(values, a2);
            c2.push(i3 += a2.length + 1);
          });
          values.c = c2;
          return values;
        }, _formatColors = function _formatColors2(s3, toHSL, orderMatchData) {
          var result = "", colors = (s3 + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i3 = 0, c2, shell, d2, l2;
          if (!colors) {
            return s3;
          }
          colors = colors.map(function(color) {
            return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
          });
          if (orderMatchData) {
            d2 = _colorOrderData(s3);
            c2 = orderMatchData.c;
            if (c2.join(result) !== d2.c.join(result)) {
              shell = s3.replace(_colorExp, "1").split(_numWithUnitExp);
              l2 = shell.length - 1;
              for (; i3 < l2; i3++) {
                result += shell[i3] + (~c2.indexOf(i3) ? colors.shift() || type + "0,0,0,0)" : (d2.length ? d2 : colors.length ? colors : orderMatchData).shift());
              }
            }
          }
          if (!shell) {
            shell = s3.split(_colorExp);
            l2 = shell.length - 1;
            for (; i3 < l2; i3++) {
              result += shell[i3] + colors[i3];
            }
          }
          return result + shell[l2];
        }, _colorExp = function() {
          var s3 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p2;
          for (p2 in _colorLookup) {
            s3 += "|" + p2 + "\\b";
          }
          return new RegExp(s3 + ")", "gi");
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
              var func = once ? function(t3, d2, f2, v2) {
                callback(t3, d2, f2, v2);
                _self.remove(func);
              } : callback;
              _self.remove(callback);
              _listeners3[prioritize ? "unshift" : "push"](func);
              _wake();
              return func;
            },
            remove: function remove(callback, i3) {
              ~(i3 = _listeners3.indexOf(callback)) && _listeners3.splice(i3, 1) && _i2 >= i3 && _i2--;
            },
            _listeners: _listeners3
          };
          return _self;
        }(), _wake = function _wake2() {
          return !_tickerActive && _ticker.wake();
        }, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString2(value) {
          var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i3 = 1, l2 = split.length, index, val, parsedVal;
          for (; i3 < l2; i3++) {
            val = split[i3];
            index = i3 !== l2 - 1 ? val.lastIndexOf(",") : val.length;
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
        _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i3) {
          var power = i3 < 5 ? i3 + 1 : i3;
          _insertEase(name + ",Power" + (power - 1), i3 ? function(p2) {
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
        (function(n3, c2) {
          var n1 = 1 / c2, n22 = 2 * n1, n32 = 2.5 * n1, easeOut = function easeOut2(p2) {
            return p2 < n1 ? n3 * p2 * p2 : p2 < n22 ? n3 * Math.pow(p2 - 1.5 / c2, 2) + 0.75 : p2 < n32 ? n3 * (p2 -= 2.25 / c2) * p2 + 0.9375 : n3 * Math.pow(p2 - 2.625 / c2, 2) + 0.984375;
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
            var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max2 = 1 - _tinyNum;
            return function(p4) {
              return ((p2 * _clamp3(0, max2, p4) | 0) + p3) * p1;
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
            var parent = this.parent || this._dp, start2 = this._start, rawTime;
            return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start2 && rawTime < this.endTime(true) - _tinyNum);
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
            _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized2(_this), position);
            vars.reversed && _this.reverse();
            vars.paused && _this.paused(true);
            vars.scrollTrigger && _scrollTrigger(_assertThisInitialized2(_this), vars.scrollTrigger);
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
          _proto2.render = function render2(totalTime, suppressEvents, force) {
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
          _proto2.getChildren = function getChildren2(nested, tweens, timelines, ignoreBeforeTime) {
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
            var animations = this.getChildren(1, 1, 1), i3 = animations.length;
            while (i3--) {
              if (animations[i3].vars.id === id) {
                return animations[i3];
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
            var t3 = Tween.delayedCall(0, callback || _emptyFunc, params);
            t3.data = "isPause";
            this._hasPause = 1;
            return _addToTimeline(this, t3, _parsePosition3(this, position));
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
            var tweens = this.getTweensOf(targets, onlyActive), i3 = tweens.length;
            while (i3--) {
              _overwritingTween !== tweens[i3] && tweens[i3].kill(targets, props);
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
            var max2 = 0, self2 = this, child = self2._last, prevStart = _bigNum, prev, start2, parent;
            if (arguments.length) {
              return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value : value));
            }
            if (self2._dirty) {
              parent = self2.parent;
              while (child) {
                prev = child._prev;
                child._dirty && child.totalDuration();
                start2 = child._start;
                if (start2 > prevStart && self2._sort && child._ts && !self2._lock) {
                  self2._lock = 1;
                  _addToTimeline(self2, child, start2 - child._delay, 1)._lock = 0;
                } else {
                  prevStart = start2;
                }
                if (start2 < 0 && child._ts) {
                  max2 -= start2;
                  if (!parent && !self2._dp || parent && parent.smoothChildTiming) {
                    self2._start += start2 / self2._ts;
                    self2._time -= start2;
                    self2._tTime -= start2;
                  }
                  self2.shiftChildren(-start2, false, -Infinity);
                  prevStart = 0;
                }
                child._end > max2 && child._ts && (max2 = child._end);
                child = prev;
              }
              _setDuration(self2, self2 === _globalTimeline && self2._time > max2 ? self2._time : max2, 1, 1);
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
        var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start2, end2, setter, stringFilter, funcParam) {
          var pt2 = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a2;
          pt2.b = start2;
          pt2.e = end2;
          start2 += "";
          end2 += "";
          if (hasRandom = ~end2.indexOf("random(")) {
            end2 = _replaceRandom(end2);
          }
          if (stringFilter) {
            a2 = [start2, end2];
            stringFilter(a2, target, prop);
            start2 = a2[0];
            end2 = a2[1];
          }
          startNums = start2.match(_complexStringNumExp) || [];
          while (result = _complexStringNumExp.exec(end2)) {
            endNum = result[0];
            chunk = end2.substring(index, result.index);
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
          pt2.c = index < end2.length ? end2.substring(index, end2.length) : "";
          pt2.fp = funcParam;
          if (_relExp.test(end2) || hasRandom) {
            pt2.e = 0;
          }
          this._pt = pt2;
          return pt2;
        }, _addPropTween = function _addPropTween2(target, prop, start2, end2, index, targets, modifier, stringFilter, funcParam, optional) {
          _isFunction3(end2) && (end2 = end2(index || 0, target, targets));
          var currentValue = target[prop], parsedStart = start2 !== "get" ? start2 : !_isFunction3(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction3(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction3(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt2;
          if (_isString3(end2)) {
            if (~end2.indexOf("random(")) {
              end2 = _replaceRandom(end2);
            }
            if (end2.charAt(1) === "=") {
              pt2 = _parseRelative(parsedStart, end2) + (getUnit(parsedStart) || 0);
              if (pt2 || pt2 === 0) {
                end2 = pt2;
              }
            }
          }
          if (!optional || parsedStart !== end2 || _forceAllPropTweens) {
            if (!isNaN(parsedStart * end2) && end2 !== "") {
              pt2 = new PropTween(this._pt, target, prop, +parsedStart || 0, end2 - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
              funcParam && (pt2.fp = funcParam);
              modifier && pt2.modifier(modifier, this, target);
              return this._pt = pt2;
            }
            !currentValue && !(prop in target) && _missingPlugin(prop, end2);
            return _addComplexStringPropTween.call(this, target, prop, parsedStart, end2, setter, stringFilter || _config.stringFilter, funcParam);
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
          var plugin, pt2, ptLookup, i3;
          if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
            tween._pt = pt2 = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
            if (tween !== _quickTween) {
              ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
              i3 = plugin._props.length;
              while (i3--) {
                ptLookup[plugin._props[i3]] = pt2;
              }
            }
          }
          return plugin;
        }, _overwritingTween, _forceAllPropTweens, _initTween = function _initTween2(tween, time, tTime) {
          var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites2, tl = tween.timeline, cleanVars, i3, p2, pt2, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
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
            for (i3 = 0; i3 < targets.length; i3++) {
              target = targets[i3];
              gsData = target._gsap || _harness(targets)[i3]._gsap;
              tween._ptLookup[i3] = ptLookup = {};
              _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
              index = fullTargets === targets ? i3 : fullTargets.indexOf(target);
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
              tween._op && tween._op[i3] && tween.kill(target, tween._op[i3]);
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
        }, _updatePropTweens = function _updatePropTweens2(tween, property, value, start2, startIsRelative, ratio, time, skipRecursion) {
          var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt2, rootPT, lookup, i3;
          if (!ptCache) {
            ptCache = tween._ptCache[property] = [];
            lookup = tween._ptLookup;
            i3 = tween._targets.length;
            while (i3--) {
              pt2 = lookup[i3][property];
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
          i3 = ptCache.length;
          while (i3--) {
            rootPT = ptCache[i3];
            pt2 = rootPT._pt || rootPT;
            pt2.s = (start2 || start2 === 0) && !startIsRelative ? start2 : pt2.s + (start2 || 0) + ratio * pt2.c;
            pt2.c = value - pt2.s;
            rootPT.e && (rootPT.e = _round3(value) + getUnit(rootPT.e));
            rootPT.b && (rootPT.b = pt2.s + getUnit(rootPT.b));
          }
        }, _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
          var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p2, i3, aliases;
          if (!propertyAliases) {
            return vars;
          }
          copy = _merge({}, vars);
          for (p2 in propertyAliases) {
            if (p2 in copy) {
              aliases = propertyAliases[p2].split(",");
              i3 = aliases.length;
              while (i3--) {
                copy[aliases[i3]] = copy[p2];
              }
            }
          }
          return copy;
        }, _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
          var ease = obj.ease || easeEach || "power1.inOut", p2, a2;
          if (_isArray(obj)) {
            a2 = allProps[prop] || (allProps[prop] = []);
            obj.forEach(function(value, i3) {
              return a2.push({
                t: i3 / (obj.length - 1) * 100,
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
        }, _parseFuncOrString = function _parseFuncOrString2(value, tween, i3, target, targets) {
          return _isFunction3(value) ? value.call(tween, i3, target, targets) : _isString3(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
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
            var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber3(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i3, copy, l2, p2, curTarget, staggerFunc, staggerVarsToMerge;
            _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
            _this3._ptLookup = [];
            _this3._overwrite = overwrite;
            if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
              vars = _this3.vars;
              tl = _this3.timeline = new Timeline({
                data: "nested",
                defaults: defaults2 || {},
                targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
              });
              tl.kill();
              tl.parent = tl._dp = _assertThisInitialized2(_this3);
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
                for (i3 = 0; i3 < l2; i3++) {
                  copy = _copyExcluding(vars, _staggerPropsToSkip);
                  copy.stagger = 0;
                  yoyoEase && (copy.yoyoEase = yoyoEase);
                  staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                  curTarget = parsedTargets[i3];
                  copy.duration = +_parseFuncOrString(duration, _assertThisInitialized2(_this3), i3, curTarget, parsedTargets);
                  copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized2(_this3), i3, curTarget, parsedTargets) || 0) - _this3._delay;
                  if (!stagger && l2 === 1 && copy.delay) {
                    _this3._delay = delay = copy.delay;
                    _this3._start += delay;
                    copy.delay = 0;
                  }
                  tl.to(curTarget, copy, staggerFunc ? staggerFunc(i3, curTarget, parsedTargets) : 0);
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
                    for (i3 = 0; i3 < a2.length; i3++) {
                      kf = a2[i3];
                      v2 = {
                        ease: kf.e,
                        duration: (kf.t - (i3 ? a2[i3 - 1].t : 0)) / 100 * duration
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
              _overwritingTween = _assertThisInitialized2(_this3);
              _globalTimeline.killTweensOf(parsedTargets);
              _overwritingTween = 0;
            }
            _addToTimeline(parent, _assertThisInitialized2(_this3), position);
            vars.reversed && _this3.reverse();
            vars.paused && _this3.paused(true);
            if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized2(_this3)) && parent.data !== "nested") {
              _this3._tTime = -_tinyNum;
              _this3.render(Math.max(0, -delay) || 0);
            }
            scrollTrigger && _scrollTrigger(_assertThisInitialized2(_this3), scrollTrigger);
            return _this3;
          }
          var _proto3 = Tween2.prototype;
          _proto3.render = function render2(totalTime, suppressEvents, force) {
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
          _proto3.resetTo = function resetTo(property, value, start2, startIsRelative, skipRecursion) {
            _tickerActive || _ticker.wake();
            this._ts || this.play();
            var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
            this._initted || _initTween(this, time);
            ratio = this._ease(time / this._dur);
            if (_updatePropTweens(this, property, value, start2, startIsRelative, ratio, time, skipRecursion)) {
              return this.resetTo(property, value, start2, startIsRelative, 1);
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
            var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p2, pt2, i3;
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
            i3 = parsedTargets.length;
            while (i3--) {
              if (~killingTargets.indexOf(parsedTargets[i3])) {
                curLookup = propTweenLookup[i3];
                if (vars === "all") {
                  overwrittenProps[i3] = vars;
                  props = curLookup;
                  curOverwriteProps = {};
                } else {
                  curOverwriteProps = overwrittenProps[i3] = overwrittenProps[i3] || {};
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
          var pt2 = data._pt, s3 = "";
          if (!ratio && data.b) {
            s3 = data.b;
          } else if (ratio === 1 && data.e) {
            s3 = data.e;
          } else {
            while (pt2) {
              s3 = pt2.p + (pt2.m ? pt2.m(pt2.s + pt2.c * ratio) : Math.round((pt2.s + pt2.c * ratio) * 1e4) / 1e4) + s3;
              pt2 = pt2._next;
            }
            s3 += data.c;
          }
          data.set(data.t, data.p, s3, data);
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
          function PropTween2(next, target, prop, start2, change, renderer, data, setter, priority) {
            this.t = target;
            this.s = start2;
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
            this.data.forEach(function(e7) {
              return e7 instanceof Context2 ? a2.push.apply(a2, e7.getTweens()) : e7 instanceof Tween && !(e7.parent && e7.parent.data === "nested") && a2.push(e7);
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
                var tweens = _this4.getTweens(), i4 = _this4.data.length, t3;
                while (i4--) {
                  t3 = _this4.data[i4];
                  if (t3.data === "isFlip") {
                    t3.revert();
                    t3.getChildren(true, true, false).forEach(function(tween) {
                      return tweens.splice(tweens.indexOf(tween), 1);
                    });
                  }
                }
                tweens.map(function(t4) {
                  return {
                    g: t4._dur || t4._delay || t4._sat && !t4._sat.vars.immediateRender ? t4.globalTime(0) : -Infinity,
                    t: t4
                  };
                }).sort(function(a2, b2) {
                  return b2.g - a2.g || -Infinity;
                }).forEach(function(o3) {
                  return o3.t.revert(revert);
                });
                i4 = _this4.data.length;
                while (i4--) {
                  t3 = _this4.data[i4];
                  if (t3 instanceof Timeline) {
                    if (t3.data !== "nested") {
                      t3.scrollTrigger && t3.scrollTrigger.revert();
                      t3.kill();
                    }
                  } else {
                    !(t3 instanceof Tween) && t3.revert && t3.revert(revert);
                  }
                }
                _this4._r.forEach(function(f2) {
                  return f2(revert, _this4);
                });
                _this4.isReverted = true;
              })();
            } else {
              this.data.forEach(function(e7) {
                return e7.kill && e7.kill();
              });
            }
            this.clear();
            if (matchMedia) {
              var i3 = _media.length;
              while (i3--) {
                _media[i3].id === this.id && _media.splice(i3, 1);
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
              var setters = target.map(function(t3) {
                return gsap4.quickSetter(t3, property, unit);
              }), l2 = setters.length;
              return function(value) {
                var i3 = l2;
                while (i3--) {
                  setters[i3](value);
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
            var tween = gsap4.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})), func = function func2(value, start2, startIsRelative) {
              return tween.resetTo(property, value, start2, startIsRelative);
            };
            func.tween = tween;
            return func;
          },
          isTweening: function isTweening(targets) {
            return _globalTimeline.getTweensOf(targets, true).length > 0;
          },
          defaults: function defaults2(value) {
            value && value.ease && (value.ease = _parseEase(value.ease, _defaults2.ease));
            return _mergeDeep(_defaults2, value || {});
          },
          config: function config(value) {
            return _mergeDeep(_config, value || {});
          },
          registerEffect: function registerEffect(_ref3) {
            var name = _ref3.name, effect5 = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
            (plugins || "").split(",").forEach(function(pluginName) {
              return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
            });
            _effects[name] = function(targets, vars, tl) {
              return effect5(toArray(targets), _setDefaults3(vars || {}, defaults2), tl);
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
            var a2 = _listeners2[type], i3 = a2 && a2.indexOf(callback);
            i3 >= 0 && a2.splice(i3, 1);
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
          var targets = tween._targets, p2, i3, pt2;
          for (p2 in modifiers) {
            i3 = targets.length;
            while (i3--) {
              pt2 = tween._ptLookup[i3][p2];
              if (pt2 && (pt2 = pt2.d)) {
                if (pt2._pt) {
                  pt2 = _getPluginPropTween(pt2, p2);
                }
                pt2 && pt2.modifier && pt2.modifier(modifiers[p2], tween, targets[i3], p2);
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
          render: function render2(ratio, data) {
            var pt2 = data._pt;
            while (pt2) {
              _reverting ? pt2.set(pt2.t, pt2.p, pt2.b, pt2) : pt2.r(ratio, pt2.d);
              pt2 = pt2._next;
            }
          }
        }, {
          name: "endArray",
          init: function init(target, value) {
            var i3 = value.length;
            while (i3--) {
              this.add(target, i3, target[i3] || 0, value[i3], 0, 0, 0, 0, 0, 1);
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
          var props = this.props, target = this.target, style = target.style, cache = target._gsap, i3, p2;
          for (i3 = 0; i3 < props.length; i3 += 3) {
            props[i3 + 1] ? target[props[i3]] = props[i3 + 2] : props[i3 + 2] ? style[props[i3]] = props[i3 + 2] : style.removeProperty(props[i3].substr(0, 2) === "--" ? props[i3] : props[i3].replace(_capsExp2, "-$1").toLowerCase());
          }
          if (this.tfm) {
            for (p2 in this.tfm) {
              cache[p2] = this.tfm[p2];
            }
            if (cache.svg) {
              cache.renderTransform();
              target.setAttribute("data-svg-origin", this.svgo || "");
            }
            i3 = _reverting$1();
            if ((!i3 || !i3.isStart) && !style[_transformProp2]) {
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
          var e7 = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
          return e7 && e7.style ? e7 : _doc$1.createElement(type);
        }, _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
          var cs = getComputedStyle(target);
          return cs[property] || cs.getPropertyValue(property.replace(_capsExp2, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
        }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
          var e7 = element || _tempDiv, s3 = e7.style, i3 = 5;
          if (property in s3 && !preferPrefix) {
            return property;
          }
          property = property.charAt(0).toUpperCase() + property.substr(1);
          while (i3-- && !(_prefixes[i3] + property in s3)) {
          }
          return i3 < 0 ? null : (i3 === 3 ? "ms" : i3 >= 0 ? _prefixes[i3] : "") + property;
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
            } catch (e7) {
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
          var i3 = attributesArray.length;
          while (i3--) {
            if (target.hasAttribute(attributesArray[i3])) {
              return target.getAttribute(attributesArray[i3]);
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
        }, _isSVG = function _isSVG2(e7) {
          return !!(e7.getCTM && (!e7.parentNode || e7.ownerSVGElement) && _getBBox(e7));
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
        }, _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end2, onlySetAtEnd) {
          var pt2 = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
          plugin._pt = pt2;
          pt2.b = beginning;
          pt2.e = end2;
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
        }, _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start2, end2) {
          if (!start2 || start2 === "none") {
            var p2 = _checkPropPrefix(prop, target, 1), s3 = p2 && _getComputedProperty(target, p2, 1);
            if (s3 && s3 !== start2) {
              prop = p2;
              start2 = s3;
            } else if (prop === "borderColor") {
              start2 = _getComputedProperty(target, "borderTopColor");
            }
          }
          var pt2 = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a2, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
          pt2.b = start2;
          pt2.e = end2;
          start2 += "";
          end2 += "";
          if (end2 === "auto") {
            startValue = target.style[prop];
            target.style[prop] = end2;
            end2 = _getComputedProperty(target, prop) || end2;
            startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
          }
          a2 = [start2, end2];
          _colorStringFilter(a2);
          start2 = a2[0];
          end2 = a2[1];
          startValues = start2.match(_numWithUnitExp) || [];
          endValues = end2.match(_numWithUnitExp) || [];
          if (endValues.length) {
            while (result = _numWithUnitExp.exec(end2)) {
              endValue = result[0];
              chunk = end2.substring(index, result.index);
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
                  if (index === end2.length) {
                    end2 += endUnit;
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
            pt2.c = index < end2.length ? end2.substring(index, end2.length) : "";
          } else {
            pt2.r = prop === "display" && end2 === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
          }
          _relExp.test(end2) && (pt2.e = 0);
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
            var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i3;
            if (props === "all" || props === true) {
              style.cssText = "";
              clearTransforms = 1;
            } else {
              props = props.split(",");
              i3 = props.length;
              while (--i3 > -1) {
                prop = props[i3];
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
          var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x2, y2, z2, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a2, b2, c2, d2, a12, a22, t1, t22, t3, a13, a23, a33, a42, a43, a32;
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
              t22 = target.getBBox();
              origin = cache.xOrigin - t22.x + "px " + (cache.yOrigin - t22.y) + "px";
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
                t22 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t22;
                a32 = t3;
              }
              angle = _atan2(-c2, a33);
              rotationY = angle * _RAD2DEG;
              if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a2 * cos - a13 * sin;
                t22 = b2 * cos - a23 * sin;
                t3 = c2 * cos - a33 * sin;
                a43 = d2 * sin + a43 * cos;
                a2 = t1;
                b2 = t22;
                c2 = t3;
              }
              angle = _atan2(b2, a2);
              rotation = angle * _RAD2DEG;
              if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a2 * cos + b2 * sin;
                t22 = a12 * cos + a22 * sin;
                b2 = b2 * cos - a2 * sin;
                a22 = a22 * cos - a12 * sin;
                a2 = t1;
                a12 = t22;
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
        }, _addPxTranslate = function _addPxTranslate2(target, start2, value) {
          var unit = getUnit(start2);
          return _round3(parseFloat(start2) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
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
          var t3 = "Top", r3 = "Right", b2 = "Bottom", l2 = "Left", props = (index < 3 ? [t3, r3, b2, l2] : [t3 + l2, t3 + r3, b2 + r3, b2 + l2]).map(function(side) {
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
            props.forEach(function(prop, i3) {
              return vars[prop] = a2[i3] = a2[i3] || a2[(i3 - 1) / 2 | 0];
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
          render: function render2(ratio, data) {
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

  // src/page/growth-outbound/index.js
  init_live_reload();

  // node_modules/.pnpm/@studio-freight+lenis@1.0.35/node_modules/@studio-freight/lenis/dist/lenis.mjs
  init_live_reload();
  function t(t3, e7, i3, s3) {
    if ("a" === i3 && !s3)
      throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof e7 ? t3 !== e7 || !s3 : !e7.has(t3))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === i3 ? s3 : "a" === i3 ? s3.call(t3) : s3 ? s3.value : e7.get(t3);
  }
  function e(t3, e7, i3, s3, o3) {
    if ("m" === s3)
      throw new TypeError("Private method is not writable");
    if ("a" === s3 && !o3)
      throw new TypeError("Private accessor was defined without a setter");
    if ("function" == typeof e7 ? t3 !== e7 || !o3 : !e7.has(t3))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return "a" === s3 ? o3.call(t3, i3) : o3 ? o3.value = i3 : e7.set(t3, i3), i3;
  }
  var i;
  var s;
  var o;
  var r;
  function n(t3, e7, i3) {
    return Math.max(t3, Math.min(e7, i3));
  }
  var Animate = class {
    advance(t3) {
      if (!this.isRunning)
        return;
      let e7 = false;
      if (this.lerp)
        this.value = (i3 = this.value, s3 = this.to, o3 = 60 * this.lerp, r3 = t3, function(t4, e8, i4) {
          return (1 - i4) * t4 + i4 * e8;
        }(i3, s3, 1 - Math.exp(-o3 * r3))), Math.round(this.value) === this.to && (this.value = this.to, e7 = true);
      else {
        this.currentTime += t3;
        const i4 = n(0, this.currentTime / this.duration, 1);
        e7 = i4 >= 1;
        const s4 = e7 ? 1 : this.easing(i4);
        this.value = this.from + (this.to - this.from) * s4;
      }
      var i3, s3, o3, r3;
      this.onUpdate?.(this.value, e7), e7 && this.stop();
    }
    stop() {
      this.isRunning = false;
    }
    fromTo(t3, e7, { lerp: i3 = 0.1, duration: s3 = 1, easing: o3 = (t4) => t4, onStart: r3, onUpdate: n3 }) {
      this.from = this.value = t3, this.to = e7, this.lerp = i3, this.duration = s3, this.easing = o3, this.currentTime = 0, this.isRunning = true, r3?.(), this.onUpdate = n3;
    }
  };
  var Dimensions = class {
    constructor({ wrapper: t3, content: e7, autoResize: i3 = true } = {}) {
      if (this.wrapper = t3, this.content = e7, i3) {
        const t4 = function(t5, e8) {
          let i4;
          return function() {
            let s3 = arguments, o3 = this;
            clearTimeout(i4), i4 = setTimeout(function() {
              t5.apply(o3, s3);
            }, e8);
          };
        }(this.resize, 250);
        this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(t4), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(t4), this.contentResizeObserver.observe(this.content);
      }
      this.resize();
    }
    destroy() {
      this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect();
    }
    resize = () => {
      this.onWrapperResize(), this.onContentResize();
    };
    onWrapperResize = () => {
      this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
    };
    onContentResize = () => {
      this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth;
    };
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
  };
  var Emitter = class {
    constructor() {
      this.events = {};
    }
    emit(t3, ...e7) {
      let i3 = this.events[t3] || [];
      for (let t4 = 0, s3 = i3.length; t4 < s3; t4++)
        i3[t4](...e7);
    }
    on(t3, e7) {
      return this.events[t3]?.push(e7) || (this.events[t3] = [e7]), () => {
        this.events[t3] = this.events[t3]?.filter((t4) => e7 !== t4);
      };
    }
    off(t3, e7) {
      this.events[t3] = this.events[t3]?.filter((t4) => e7 !== t4);
    }
    destroy() {
      this.events = {};
    }
  };
  var VirtualScroll = class {
    constructor(t3, { wheelMultiplier: e7 = 1, touchMultiplier: i3 = 2, normalizeWheel: s3 = false }) {
      this.element = t3, this.wheelMultiplier = e7, this.touchMultiplier = i3, this.normalizeWheel = s3, this.touchStart = { x: null, y: null }, this.emitter = new Emitter(), this.element.addEventListener("wheel", this.onWheel, { passive: false }), this.element.addEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.addEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.addEventListener("touchend", this.onTouchEnd, { passive: false });
    }
    on(t3, e7) {
      return this.emitter.on(t3, e7);
    }
    destroy() {
      this.emitter.destroy(), this.element.removeEventListener("wheel", this.onWheel, { passive: false }), this.element.removeEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.removeEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.removeEventListener("touchend", this.onTouchEnd, { passive: false });
    }
    onTouchStart = (t3) => {
      const { clientX: e7, clientY: i3 } = t3.targetTouches ? t3.targetTouches[0] : t3;
      this.touchStart.x = e7, this.touchStart.y = i3, this.lastDelta = { x: 0, y: 0 }, this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t3 });
    };
    onTouchMove = (t3) => {
      const { clientX: e7, clientY: i3 } = t3.targetTouches ? t3.targetTouches[0] : t3, s3 = -(e7 - this.touchStart.x) * this.touchMultiplier, o3 = -(i3 - this.touchStart.y) * this.touchMultiplier;
      this.touchStart.x = e7, this.touchStart.y = i3, this.lastDelta = { x: s3, y: o3 }, this.emitter.emit("scroll", { deltaX: s3, deltaY: o3, event: t3 });
    };
    onTouchEnd = (t3) => {
      this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t3 });
    };
    onWheel = (t3) => {
      let { deltaX: e7, deltaY: i3 } = t3;
      this.normalizeWheel && (e7 = n(-100, e7, 100), i3 = n(-100, i3, 100)), e7 *= this.wheelMultiplier, i3 *= this.wheelMultiplier, this.emitter.emit("scroll", { deltaX: e7, deltaY: i3, event: t3 });
    };
  };
  var Lenis = class {
    constructor({ wrapper: t3 = window, content: e7 = document.documentElement, wheelEventsTarget: n3 = t3, eventsTarget: l2 = n3, smoothWheel: h2 = true, syncTouch: a2 = false, syncTouchLerp: c2 = 0.075, touchInertiaMultiplier: u2 = 35, duration: p2, easing: d2 = (t4) => Math.min(1, 1.001 - Math.pow(2, -10 * t4)), lerp: m2 = !p2 && 0.1, infinite: v2 = false, orientation: g2 = "vertical", gestureOrientation: f2 = "vertical", touchMultiplier: w2 = 1, wheelMultiplier: S2 = 1, normalizeWheel: y2 = false, autoResize: T2 = true } = {}) {
      i.set(this, false), s.set(this, false), o.set(this, false), r.set(this, false), this.onVirtualScroll = ({ deltaX: t4, deltaY: e8, event: i3 }) => {
        if (i3.ctrlKey)
          return;
        const s3 = i3.type.includes("touch"), o3 = i3.type.includes("wheel");
        if (this.options.syncTouch && s3 && "touchstart" === i3.type)
          return void this.reset();
        const r3 = 0 === t4 && 0 === e8, n4 = "vertical" === this.options.gestureOrientation && 0 === e8 || "horizontal" === this.options.gestureOrientation && 0 === t4;
        if (r3 || n4)
          return;
        let l3 = i3.composedPath();
        if (l3 = l3.slice(0, l3.indexOf(this.rootElement)), l3.find((t5) => {
          var e9, i4, r4, n5;
          return (null === (e9 = t5.hasAttribute) || void 0 === e9 ? void 0 : e9.call(t5, "data-lenis-prevent")) || s3 && (null === (i4 = t5.hasAttribute) || void 0 === i4 ? void 0 : i4.call(t5, "data-lenis-prevent-touch")) || o3 && (null === (r4 = t5.hasAttribute) || void 0 === r4 ? void 0 : r4.call(t5, "data-lenis-prevent-wheel")) || (null === (n5 = t5.classList) || void 0 === n5 ? void 0 : n5.contains("lenis"));
        }))
          return;
        if (this.isStopped || this.isLocked)
          return void i3.preventDefault();
        if (this.isSmooth = this.options.syncTouch && s3 || this.options.smoothWheel && o3, !this.isSmooth)
          return this.isScrolling = false, void this.animate.stop();
        i3.preventDefault();
        let h3 = e8;
        "both" === this.options.gestureOrientation ? h3 = Math.abs(e8) > Math.abs(t4) ? e8 : t4 : "horizontal" === this.options.gestureOrientation && (h3 = t4);
        const a3 = s3 && this.options.syncTouch, c3 = s3 && "touchend" === i3.type && Math.abs(h3) > 5;
        c3 && (h3 = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + h3, Object.assign({ programmatic: false }, a3 ? { lerp: c3 ? this.options.syncTouchLerp : 1 } : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing }));
      }, this.onNativeScroll = () => {
        if (!this.__preventNextScrollEvent && !this.isScrolling) {
          const t4 = this.animatedScroll;
          this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - t4), this.emit();
        }
      }, window.lenisVersion = "1.0.35", t3 !== document.documentElement && t3 !== document.body || (t3 = window), this.options = { wrapper: t3, content: e7, wheelEventsTarget: n3, eventsTarget: l2, smoothWheel: h2, syncTouch: a2, syncTouchLerp: c2, touchInertiaMultiplier: u2, duration: p2, easing: d2, lerp: m2, infinite: v2, gestureOrientation: f2, orientation: g2, touchMultiplier: w2, wheelMultiplier: S2, normalizeWheel: y2, autoResize: T2 }, this.animate = new Animate(), this.emitter = new Emitter(), this.dimensions = new Dimensions({ wrapper: t3, content: e7, autoResize: T2 }), this.toggleClass("lenis", true), this.velocity = 0, this.isLocked = false, this.isStopped = false, this.isSmooth = a2 || h2, this.isScrolling = false, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, { passive: false }), this.virtualScroll = new VirtualScroll(l2, { touchMultiplier: w2, wheelMultiplier: S2, normalizeWheel: y2 }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, { passive: false }), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClass("lenis", false), this.toggleClass("lenis-smooth", false), this.toggleClass("lenis-scrolling", false), this.toggleClass("lenis-stopped", false), this.toggleClass("lenis-locked", false);
    }
    on(t3, e7) {
      return this.emitter.on(t3, e7);
    }
    off(t3, e7) {
      return this.emitter.off(t3, e7);
    }
    setScroll(t3) {
      this.isHorizontal ? this.rootElement.scrollLeft = t3 : this.rootElement.scrollTop = t3;
    }
    resize() {
      this.dimensions.resize();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    reset() {
      this.isLocked = false, this.isScrolling = false, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop();
    }
    start() {
      this.isStopped = false, this.reset();
    }
    stop() {
      this.isStopped = true, this.animate.stop(), this.reset();
    }
    raf(t3) {
      const e7 = t3 - (this.time || t3);
      this.time = t3, this.animate.advance(1e-3 * e7);
    }
    scrollTo(t3, { offset: e7 = 0, immediate: i3 = false, lock: s3 = false, duration: o3 = this.options.duration, easing: r3 = this.options.easing, lerp: l2 = !o3 && this.options.lerp, onComplete: h2, force: a2 = false, programmatic: c2 = true } = {}) {
      if (!this.isStopped && !this.isLocked || a2) {
        if (["top", "left", "start"].includes(t3))
          t3 = 0;
        else if (["bottom", "right", "end"].includes(t3))
          t3 = this.limit;
        else {
          let i4;
          if ("string" == typeof t3 ? i4 = document.querySelector(t3) : (null == t3 ? void 0 : t3.nodeType) && (i4 = t3), i4) {
            if (this.options.wrapper !== window) {
              const t4 = this.options.wrapper.getBoundingClientRect();
              e7 -= this.isHorizontal ? t4.left : t4.top;
            }
            const s4 = i4.getBoundingClientRect();
            t3 = (this.isHorizontal ? s4.left : s4.top) + this.animatedScroll;
          }
        }
        if ("number" == typeof t3) {
          if (t3 += e7, t3 = Math.round(t3), this.options.infinite ? c2 && (this.targetScroll = this.animatedScroll = this.scroll) : t3 = n(0, t3, this.limit), i3)
            return this.animatedScroll = this.targetScroll = t3, this.setScroll(this.scroll), this.reset(), void (null == h2 || h2(this));
          if (!c2) {
            if (t3 === this.targetScroll)
              return;
            this.targetScroll = t3;
          }
          this.animate.fromTo(this.animatedScroll, t3, { duration: o3, easing: r3, lerp: l2, onStart: () => {
            s3 && (this.isLocked = true), this.isScrolling = true;
          }, onUpdate: (t4, e8) => {
            this.isScrolling = true, this.velocity = t4 - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t4, this.setScroll(this.scroll), c2 && (this.targetScroll = t4), e8 || this.emit(), e8 && (this.reset(), this.emit(), null == h2 || h2(this), this.__preventNextScrollEvent = true, requestAnimationFrame(() => {
              delete this.__preventNextScrollEvent;
            }));
          } });
        }
      }
    }
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
      return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
      return "horizontal" === this.options.orientation;
    }
    get actualScroll() {
      return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite ? (t3 = this.animatedScroll, e7 = this.limit, (t3 % e7 + e7) % e7) : this.animatedScroll;
      var t3, e7;
    }
    get progress() {
      return 0 === this.limit ? 1 : this.scroll / this.limit;
    }
    get isSmooth() {
      return t(this, i, "f");
    }
    set isSmooth(s3) {
      t(this, i, "f") !== s3 && (e(this, i, s3, "f"), this.toggleClass("lenis-smooth", s3));
    }
    get isScrolling() {
      return t(this, s, "f");
    }
    set isScrolling(i3) {
      t(this, s, "f") !== i3 && (e(this, s, i3, "f"), this.toggleClass("lenis-scrolling", i3));
    }
    get isStopped() {
      return t(this, o, "f");
    }
    set isStopped(i3) {
      t(this, o, "f") !== i3 && (e(this, o, i3, "f"), this.toggleClass("lenis-stopped", i3));
    }
    get isLocked() {
      return t(this, r, "f");
    }
    set isLocked(i3) {
      t(this, r, "f") !== i3 && (e(this, r, i3, "f"), this.toggleClass("lenis-locked", i3));
    }
    get className() {
      let t3 = "lenis";
      return this.isStopped && (t3 += " lenis-stopped"), this.isLocked && (t3 += " lenis-locked"), this.isScrolling && (t3 += " lenis-scrolling"), this.isSmooth && (t3 += " lenis-smooth"), t3;
    }
    toggleClass(t3, e7) {
      this.rootElement.classList.toggle(t3, e7), this.emitter.emit("className change", this);
    }
  };
  i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();

  // node_modules/.pnpm/@vimeo+player@2.21.0/node_modules/@vimeo/player/dist/player.es.js
  init_live_reload();
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = null != arguments[i3] ? arguments[i3] : {};
      i3 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function() {
      return exports;
    };
    var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key, desc) {
      obj[key] = desc.value;
    }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define2(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      }), obj[key];
    }
    try {
      define2({}, "");
    } catch (err) {
      define2 = function(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self2, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self2, context)
      }), generator;
    }
    function tryCatch(fn3, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn3.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var IteratorPrototype = {};
    define2(IteratorPrototype, iteratorSymbol, function() {
      return this;
    });
    var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define2(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg, value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
            invoke("next", value2, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function(unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function(error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self2, context) {
      var state = "suspendedStart";
      return function(method, arg) {
        if ("executing" === state)
          throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method)
            throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg; ; ) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel)
                continue;
              return delegateResult;
            }
          }
          if ("next" === context.method)
            context.sent = context._sent = context.arg;
          else if ("throw" === context.method) {
            if ("suspendedStart" === state)
              throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else
            "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self2, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
              continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method, method = delegate.iterator[methodName];
      if (void 0 === method)
        return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type)
        return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod)
          return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next)
          return iterable;
        if (!isNaN(iterable.length)) {
          var i3 = -1, next = function next2() {
            for (; ++i3 < iterable.length; )
              if (hasOwn.call(iterable, i3))
                return next2.value = iterable[i3], next2.done = false, next2;
            return next2.value = void 0, next2.done = true, next2;
          };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: void 0,
        done: true
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    }), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function(genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define2(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function(arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, asyncIteratorSymbol, function() {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define2(Gp, toStringTagSymbol, "Generator"), define2(Gp, iteratorSymbol, function() {
      return this;
    }), define2(Gp, "toString", function() {
      return "[object Generator]";
    }), exports.keys = function(val) {
      var object = Object(val), keys = [];
      for (var key in object)
        keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length; ) {
          var key2 = keys.pop();
          if (key2 in object)
            return next.value = key2, next.done = false, next;
        }
        return next.done = true, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
          for (var name in this)
            "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
      },
      stop: function() {
        this.done = true;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type)
          throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function(exception) {
        if (this.done)
          throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
        }
        for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
          var entry = this.tryEntries[i3], record = entry.completion;
          if ("root" === entry.tryLoc)
            return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc)
                return handle(entry.catchLoc, true);
              if (this.prev < entry.finallyLoc)
                return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc)
                return handle(entry.catchLoc, true);
            } else {
              if (!hasFinally)
                throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc)
                return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function(type, arg) {
        for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
          var entry = this.tryEntries[i3];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function(record, afterLoc) {
        if ("throw" === record.type)
          throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function(finallyLoc) {
        for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
          var entry = this.tryEntries[i3];
          if (entry.finallyLoc === finallyLoc)
            return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function(tryLoc) {
        for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
          var entry = this.tryEntries[i3];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName,
          nextLoc
        }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
      }
    }, exports;
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn3) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn3.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o3) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o4) {
      return o4.__proto__ || Object.getPrototypeOf(o4);
    };
    return _getPrototypeOf(o3);
  }
  function _setPrototypeOf(o3, p2) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o4, p3) {
      o4.__proto__ = p3;
      return o4;
    };
    return _setPrototypeOf(o3, p2);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e7) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct2(Parent2, args2, Class2) {
        var a2 = [null];
        a2.push.apply(a2, args2);
        var Constructor = Function.bind.apply(Parent2, a2);
        var instance = new Constructor();
        if (Class2)
          _setPrototypeOf(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn3) {
    return Function.toString.call(fn3).indexOf("[native code]") !== -1;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
      if (Class2 === null || !_isNativeFunction(Class2))
        return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2))
          return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self2);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  var isNode = typeof global !== "undefined" && {}.toString.call(global) === "[object global]";
  function getMethodName(prop, type) {
    if (prop.indexOf(type.toLowerCase()) === 0) {
      return prop;
    }
    return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
  }
  function isDomElement(element) {
    return Boolean(element && element.nodeType === 1 && "nodeName" in element && element.ownerDocument && element.ownerDocument.defaultView);
  }
  function isInteger(value) {
    return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
  }
  function isVimeoUrl(url) {
    return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(url);
  }
  function isVimeoEmbed(url) {
    var expr = /^https:\/\/player\.vimeo\.com\/video\/\d+/;
    return expr.test(url);
  }
  function getVimeoUrl() {
    var oEmbedParameters2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var id = oEmbedParameters2.id;
    var url = oEmbedParameters2.url;
    var idOrUrl = id || url;
    if (!idOrUrl) {
      throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
    }
    if (isInteger(idOrUrl)) {
      return "https://vimeo.com/".concat(idOrUrl);
    }
    if (isVimeoUrl(idOrUrl)) {
      return idOrUrl.replace("http:", "https:");
    }
    if (id) {
      throw new TypeError("\u201C".concat(id, "\u201D is not a valid video id."));
    }
    throw new TypeError("\u201C".concat(idOrUrl, "\u201D is not a vimeo.com url."));
  }
  var subscribe = function subscribe2(target, eventName, callback) {
    var onName = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "addEventListener";
    var offName = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "removeEventListener";
    var eventNames = typeof eventName === "string" ? [eventName] : eventName;
    eventNames.forEach(function(evName) {
      target[onName](evName, callback);
    });
    return {
      cancel: function cancel() {
        return eventNames.forEach(function(evName) {
          return target[offName](evName, callback);
        });
      }
    };
  };
  var arrayIndexOfSupport = typeof Array.prototype.indexOf !== "undefined";
  var postMessageSupport = typeof window !== "undefined" && typeof window.postMessage !== "undefined";
  if (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) {
    throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
  }
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function createCommonjsModule(fn3, module) {
    return module = { exports: {} }, fn3(module, module.exports), module.exports;
  }
  (function(self2) {
    if (self2.WeakMap) {
      return;
    }
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
    var hasDefine = Object.defineProperty && function() {
      try {
        return Object.defineProperty({}, "x", {
          value: 1
        }).x === 1;
      } catch (e7) {
      }
    }();
    var defineProperty = function(object, name, value) {
      if (hasDefine) {
        Object.defineProperty(object, name, {
          configurable: true,
          writable: true,
          value
        });
      } else {
        object[name] = value;
      }
    };
    self2.WeakMap = function() {
      function WeakMap2() {
        if (this === void 0) {
          throw new TypeError("Constructor WeakMap requires 'new'");
        }
        defineProperty(this, "_id", genId("_WeakMap"));
        if (arguments.length > 0) {
          throw new TypeError("WeakMap iterable is not supported");
        }
      }
      defineProperty(WeakMap2.prototype, "delete", function(key) {
        checkInstance(this, "delete");
        if (!isObject3(key)) {
          return false;
        }
        var entry = key[this._id];
        if (entry && entry[0] === key) {
          delete key[this._id];
          return true;
        }
        return false;
      });
      defineProperty(WeakMap2.prototype, "get", function(key) {
        checkInstance(this, "get");
        if (!isObject3(key)) {
          return void 0;
        }
        var entry = key[this._id];
        if (entry && entry[0] === key) {
          return entry[1];
        }
        return void 0;
      });
      defineProperty(WeakMap2.prototype, "has", function(key) {
        checkInstance(this, "has");
        if (!isObject3(key)) {
          return false;
        }
        var entry = key[this._id];
        if (entry && entry[0] === key) {
          return true;
        }
        return false;
      });
      defineProperty(WeakMap2.prototype, "set", function(key, value) {
        checkInstance(this, "set");
        if (!isObject3(key)) {
          throw new TypeError("Invalid value used as weak map key");
        }
        var entry = key[this._id];
        if (entry && entry[0] === key) {
          entry[1] = value;
          return this;
        }
        defineProperty(key, this._id, [key, value]);
        return this;
      });
      function checkInstance(x2, methodName) {
        if (!isObject3(x2) || !hasOwnProperty2.call(x2, "_id")) {
          throw new TypeError(methodName + " method called on incompatible receiver " + typeof x2);
        }
      }
      function genId(prefix) {
        return prefix + "_" + rand() + "." + rand();
      }
      function rand() {
        return Math.random().toString().substring(2);
      }
      defineProperty(WeakMap2, "_polyfill", true);
      return WeakMap2;
    }();
    function isObject3(x2) {
      return Object(x2) === x2;
    }
  })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : commonjsGlobal);
  var npo_src = createCommonjsModule(function(module) {
    (function UMD(name, context, definition) {
      context[name] = context[name] || definition();
      if (module.exports) {
        module.exports = context[name];
      }
    })("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {
      var builtInProp, cycle, scheduling_queue, ToString = Object.prototype.toString, timer = typeof setImmediate != "undefined" ? function timer2(fn3) {
        return setImmediate(fn3);
      } : setTimeout;
      try {
        Object.defineProperty({}, "x", {});
        builtInProp = function builtInProp2(obj, name, val, config) {
          return Object.defineProperty(obj, name, {
            value: val,
            writable: true,
            configurable: config !== false
          });
        };
      } catch (err) {
        builtInProp = function builtInProp2(obj, name, val) {
          obj[name] = val;
          return obj;
        };
      }
      scheduling_queue = function Queue() {
        var first, last, item;
        function Item(fn3, self2) {
          this.fn = fn3;
          this.self = self2;
          this.next = void 0;
        }
        return {
          add: function add(fn3, self2) {
            item = new Item(fn3, self2);
            if (last) {
              last.next = item;
            } else {
              first = item;
            }
            last = item;
            item = void 0;
          },
          drain: function drain() {
            var f2 = first;
            first = last = cycle = void 0;
            while (f2) {
              f2.fn.call(f2.self);
              f2 = f2.next;
            }
          }
        };
      }();
      function schedule(fn3, self2) {
        scheduling_queue.add(fn3, self2);
        if (!cycle) {
          cycle = timer(scheduling_queue.drain);
        }
      }
      function isThenable(o3) {
        var _then, o_type = typeof o3;
        if (o3 != null && (o_type == "object" || o_type == "function")) {
          _then = o3.then;
        }
        return typeof _then == "function" ? _then : false;
      }
      function notify() {
        for (var i3 = 0; i3 < this.chain.length; i3++) {
          notifyIsolated(this, this.state === 1 ? this.chain[i3].success : this.chain[i3].failure, this.chain[i3]);
        }
        this.chain.length = 0;
      }
      function notifyIsolated(self2, cb, chain) {
        var ret, _then;
        try {
          if (cb === false) {
            chain.reject(self2.msg);
          } else {
            if (cb === true) {
              ret = self2.msg;
            } else {
              ret = cb.call(void 0, self2.msg);
            }
            if (ret === chain.promise) {
              chain.reject(TypeError("Promise-chain cycle"));
            } else if (_then = isThenable(ret)) {
              _then.call(ret, chain.resolve, chain.reject);
            } else {
              chain.resolve(ret);
            }
          }
        } catch (err) {
          chain.reject(err);
        }
      }
      function resolve(msg) {
        var _then, self2 = this;
        if (self2.triggered) {
          return;
        }
        self2.triggered = true;
        if (self2.def) {
          self2 = self2.def;
        }
        try {
          if (_then = isThenable(msg)) {
            schedule(function() {
              var def_wrapper = new MakeDefWrapper(self2);
              try {
                _then.call(msg, function $resolve$() {
                  resolve.apply(def_wrapper, arguments);
                }, function $reject$() {
                  reject.apply(def_wrapper, arguments);
                });
              } catch (err) {
                reject.call(def_wrapper, err);
              }
            });
          } else {
            self2.msg = msg;
            self2.state = 1;
            if (self2.chain.length > 0) {
              schedule(notify, self2);
            }
          }
        } catch (err) {
          reject.call(new MakeDefWrapper(self2), err);
        }
      }
      function reject(msg) {
        var self2 = this;
        if (self2.triggered) {
          return;
        }
        self2.triggered = true;
        if (self2.def) {
          self2 = self2.def;
        }
        self2.msg = msg;
        self2.state = 2;
        if (self2.chain.length > 0) {
          schedule(notify, self2);
        }
      }
      function iteratePromises(Constructor, arr, resolver, rejecter) {
        for (var idx = 0; idx < arr.length; idx++) {
          (function IIFE(idx2) {
            Constructor.resolve(arr[idx2]).then(function $resolver$(msg) {
              resolver(idx2, msg);
            }, rejecter);
          })(idx);
        }
      }
      function MakeDefWrapper(self2) {
        this.def = self2;
        this.triggered = false;
      }
      function MakeDef(self2) {
        this.promise = self2;
        this.state = 0;
        this.triggered = false;
        this.chain = [];
        this.msg = void 0;
      }
      function Promise2(executor) {
        if (typeof executor != "function") {
          throw TypeError("Not a function");
        }
        if (this.__NPO__ !== 0) {
          throw TypeError("Not a promise");
        }
        this.__NPO__ = 1;
        var def = new MakeDef(this);
        this["then"] = function then(success, failure) {
          var o3 = {
            success: typeof success == "function" ? success : true,
            failure: typeof failure == "function" ? failure : false
          };
          o3.promise = new this.constructor(function extractChain(resolve2, reject2) {
            if (typeof resolve2 != "function" || typeof reject2 != "function") {
              throw TypeError("Not a function");
            }
            o3.resolve = resolve2;
            o3.reject = reject2;
          });
          def.chain.push(o3);
          if (def.state !== 0) {
            schedule(notify, def);
          }
          return o3.promise;
        };
        this["catch"] = function $catch$(failure) {
          return this.then(void 0, failure);
        };
        try {
          executor.call(void 0, function publicResolve(msg) {
            resolve.call(def, msg);
          }, function publicReject(msg) {
            reject.call(def, msg);
          });
        } catch (err) {
          reject.call(def, err);
        }
      }
      var PromisePrototype = builtInProp(
        {},
        "constructor",
        Promise2,
        /*configurable=*/
        false
      );
      Promise2.prototype = PromisePrototype;
      builtInProp(
        PromisePrototype,
        "__NPO__",
        0,
        /*configurable=*/
        false
      );
      builtInProp(Promise2, "resolve", function Promise$resolve(msg) {
        var Constructor = this;
        if (msg && typeof msg == "object" && msg.__NPO__ === 1) {
          return msg;
        }
        return new Constructor(function executor(resolve2, reject2) {
          if (typeof resolve2 != "function" || typeof reject2 != "function") {
            throw TypeError("Not a function");
          }
          resolve2(msg);
        });
      });
      builtInProp(Promise2, "reject", function Promise$reject(msg) {
        return new this(function executor(resolve2, reject2) {
          if (typeof resolve2 != "function" || typeof reject2 != "function") {
            throw TypeError("Not a function");
          }
          reject2(msg);
        });
      });
      builtInProp(Promise2, "all", function Promise$all(arr) {
        var Constructor = this;
        if (ToString.call(arr) != "[object Array]") {
          return Constructor.reject(TypeError("Not an array"));
        }
        if (arr.length === 0) {
          return Constructor.resolve([]);
        }
        return new Constructor(function executor(resolve2, reject2) {
          if (typeof resolve2 != "function" || typeof reject2 != "function") {
            throw TypeError("Not a function");
          }
          var len = arr.length, msgs = Array(len), count = 0;
          iteratePromises(Constructor, arr, function resolver(idx, msg) {
            msgs[idx] = msg;
            if (++count === len) {
              resolve2(msgs);
            }
          }, reject2);
        });
      });
      builtInProp(Promise2, "race", function Promise$race(arr) {
        var Constructor = this;
        if (ToString.call(arr) != "[object Array]") {
          return Constructor.reject(TypeError("Not an array"));
        }
        return new Constructor(function executor(resolve2, reject2) {
          if (typeof resolve2 != "function" || typeof reject2 != "function") {
            throw TypeError("Not a function");
          }
          iteratePromises(Constructor, arr, function resolver(idx, msg) {
            resolve2(msg);
          }, reject2);
        });
      });
      return Promise2;
    });
  });
  var callbackMap = /* @__PURE__ */ new WeakMap();
  function storeCallback(player2, name, callback) {
    var playerCallbacks = callbackMap.get(player2.element) || {};
    if (!(name in playerCallbacks)) {
      playerCallbacks[name] = [];
    }
    playerCallbacks[name].push(callback);
    callbackMap.set(player2.element, playerCallbacks);
  }
  function getCallbacks(player2, name) {
    var playerCallbacks = callbackMap.get(player2.element) || {};
    return playerCallbacks[name] || [];
  }
  function removeCallback(player2, name, callback) {
    var playerCallbacks = callbackMap.get(player2.element) || {};
    if (!playerCallbacks[name]) {
      return true;
    }
    if (!callback) {
      playerCallbacks[name] = [];
      callbackMap.set(player2.element, playerCallbacks);
      return true;
    }
    var index = playerCallbacks[name].indexOf(callback);
    if (index !== -1) {
      playerCallbacks[name].splice(index, 1);
    }
    callbackMap.set(player2.element, playerCallbacks);
    return playerCallbacks[name] && playerCallbacks[name].length === 0;
  }
  function shiftCallbacks(player2, name) {
    var playerCallbacks = getCallbacks(player2, name);
    if (playerCallbacks.length < 1) {
      return false;
    }
    var callback = playerCallbacks.shift();
    removeCallback(player2, name, callback);
    return callback;
  }
  function swapCallbacks(oldElement, newElement) {
    var playerCallbacks = callbackMap.get(oldElement);
    callbackMap.set(newElement, playerCallbacks);
    callbackMap.delete(oldElement);
  }
  function parseMessageData(data) {
    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch (error) {
        console.warn(error);
        return {};
      }
    }
    return data;
  }
  function postMessage(player2, method, params) {
    if (!player2.element.contentWindow || !player2.element.contentWindow.postMessage) {
      return;
    }
    var message = {
      method
    };
    if (params !== void 0) {
      message.value = params;
    }
    var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
    if (ieVersion >= 8 && ieVersion < 10) {
      message = JSON.stringify(message);
    }
    player2.element.contentWindow.postMessage(message, player2.origin);
  }
  function processData(player2, data) {
    data = parseMessageData(data);
    var callbacks = [];
    var param;
    if (data.event) {
      if (data.event === "error") {
        var promises = getCallbacks(player2, data.data.method);
        promises.forEach(function(promise) {
          var error = new Error(data.data.message);
          error.name = data.data.name;
          promise.reject(error);
          removeCallback(player2, data.data.method, promise);
        });
      }
      callbacks = getCallbacks(player2, "event:".concat(data.event));
      param = data.data;
    } else if (data.method) {
      var callback = shiftCallbacks(player2, data.method);
      if (callback) {
        callbacks.push(callback);
        param = data.value;
      }
    }
    callbacks.forEach(function(callback2) {
      try {
        if (typeof callback2 === "function") {
          callback2.call(player2, param);
          return;
        }
        callback2.resolve(param);
      } catch (e7) {
      }
    });
  }
  var oEmbedParameters = ["airplay", "audio_tracks", "autopause", "autoplay", "background", "byline", "cc", "chapters", "chromecast", "color", "colors", "controls", "dnt", "fullscreen", "height", "id", "interactive_params", "keyboard", "loop", "maxheight", "maxwidth", "muted", "play_button_position", "playsinline", "portrait", "progress_bar", "quality_selector", "responsive", "speed", "texttrack", "title", "transcript", "transparent", "url", "vimeo_logo", "volume", "width"];
  function getOEmbedParameters(element) {
    var defaults2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return oEmbedParameters.reduce(function(params, param) {
      var value = element.getAttribute("data-vimeo-".concat(param));
      if (value || value === "") {
        params[param] = value === "" ? 1 : value;
      }
      return params;
    }, defaults2);
  }
  function createEmbed(_ref, element) {
    var html = _ref.html;
    if (!element) {
      throw new TypeError("An element must be provided");
    }
    if (element.getAttribute("data-vimeo-initialized") !== null) {
      return element.querySelector("iframe");
    }
    var div2 = document.createElement("div");
    div2.innerHTML = html;
    element.appendChild(div2.firstChild);
    element.setAttribute("data-vimeo-initialized", "true");
    return element.querySelector("iframe");
  }
  function getOEmbedData(videoUrl) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var element = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function(resolve, reject) {
      if (!isVimeoUrl(videoUrl)) {
        throw new TypeError("\u201C".concat(videoUrl, "\u201D is not a vimeo.com url."));
      }
      var url = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl));
      for (var param in params) {
        if (params.hasOwnProperty(param)) {
          url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
        }
      }
      var xhr = "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = function() {
        if (xhr.status === 404) {
          reject(new Error("\u201C".concat(videoUrl, "\u201D was not found.")));
          return;
        }
        if (xhr.status === 403) {
          reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
          return;
        }
        try {
          var json = JSON.parse(xhr.responseText);
          if (json.domain_status_code === 403) {
            createEmbed(json, element);
            reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
            return;
          }
          resolve(json);
        } catch (error) {
          reject(error);
        }
      };
      xhr.onerror = function() {
        var status = xhr.status ? " (".concat(xhr.status, ")") : "";
        reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
      };
      xhr.send();
    });
  }
  function initializeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    var elements = [].slice.call(parent.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"));
    var handleError = function handleError2(error) {
      if ("console" in window && console.error) {
        console.error("There was an error creating an embed: ".concat(error));
      }
    };
    elements.forEach(function(element) {
      try {
        if (element.getAttribute("data-vimeo-defer") !== null) {
          return;
        }
        var params = getOEmbedParameters(element);
        var url = getVimeoUrl(params);
        getOEmbedData(url, params, element).then(function(data) {
          return createEmbed(data, element);
        }).catch(handleError);
      } catch (error) {
        handleError(error);
      }
    });
  }
  function resizeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (window.VimeoPlayerResizeEmbeds_) {
      return;
    }
    window.VimeoPlayerResizeEmbeds_ = true;
    var onMessage = function onMessage2(event2) {
      if (!isVimeoUrl(event2.origin)) {
        return;
      }
      if (!event2.data || event2.data.event !== "spacechange") {
        return;
      }
      var iframes = parent.querySelectorAll("iframe");
      for (var i3 = 0; i3 < iframes.length; i3++) {
        if (iframes[i3].contentWindow !== event2.source) {
          continue;
        }
        var space = iframes[i3].parentElement;
        space.style.paddingBottom = "".concat(event2.data.data[0].bottom, "px");
        break;
      }
    };
    window.addEventListener("message", onMessage);
  }
  function initAppendVideoMetadata() {
    var parent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (window.VimeoSeoMetadataAppended) {
      return;
    }
    window.VimeoSeoMetadataAppended = true;
    var onMessage = function onMessage2(event2) {
      if (!isVimeoUrl(event2.origin)) {
        return;
      }
      var data = parseMessageData(event2.data);
      if (!data || data.event !== "ready") {
        return;
      }
      var iframes = parent.querySelectorAll("iframe");
      for (var i3 = 0; i3 < iframes.length; i3++) {
        var iframe = iframes[i3];
        var isValidMessageSource = iframe.contentWindow === event2.source;
        if (isVimeoEmbed(iframe.src) && isValidMessageSource) {
          var player2 = new Player(iframe);
          player2.callMethod("appendVideoMetadata", window.location.href);
        }
      }
    };
    window.addEventListener("message", onMessage);
  }
  function checkUrlTimeParam() {
    var parent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (window.VimeoCheckedUrlTimeParam) {
      return;
    }
    window.VimeoCheckedUrlTimeParam = true;
    var handleError = function handleError2(error) {
      if ("console" in window && console.error) {
        console.error("There was an error getting video Id: ".concat(error));
      }
    };
    var onMessage = function onMessage2(event2) {
      if (!isVimeoUrl(event2.origin)) {
        return;
      }
      var data = parseMessageData(event2.data);
      if (!data || data.event !== "ready") {
        return;
      }
      var iframes = parent.querySelectorAll("iframe");
      var _loop = function _loop2() {
        var iframe = iframes[i3];
        var isValidMessageSource = iframe.contentWindow === event2.source;
        if (isVimeoEmbed(iframe.src) && isValidMessageSource) {
          var player2 = new Player(iframe);
          player2.getVideoId().then(function(videoId) {
            var matches = new RegExp("[?&]vimeo_t_".concat(videoId, "=([^&#]*)")).exec(window.location.href);
            if (matches && matches[1]) {
              var sec = decodeURI(matches[1]);
              player2.setCurrentTime(sec);
            }
            return;
          }).catch(handleError);
        }
      };
      for (var i3 = 0; i3 < iframes.length; i3++) {
        _loop();
      }
    };
    window.addEventListener("message", onMessage);
  }
  function initializeScreenfull() {
    var fn3 = function() {
      var val;
      var fnMap = [
        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
        // New WebKit
        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
        // Old WebKit
        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
      ];
      var i3 = 0;
      var l2 = fnMap.length;
      var ret = {};
      for (; i3 < l2; i3++) {
        val = fnMap[i3];
        if (val && val[1] in document) {
          for (i3 = 0; i3 < val.length; i3++) {
            ret[fnMap[0][i3]] = val[i3];
          }
          return ret;
        }
      }
      return false;
    }();
    var eventNameMap = {
      fullscreenchange: fn3.fullscreenchange,
      fullscreenerror: fn3.fullscreenerror
    };
    var screenfull2 = {
      request: function request(element) {
        return new Promise(function(resolve, reject) {
          var onFullScreenEntered = function onFullScreenEntered2() {
            screenfull2.off("fullscreenchange", onFullScreenEntered2);
            resolve();
          };
          screenfull2.on("fullscreenchange", onFullScreenEntered);
          element = element || document.documentElement;
          var returnPromise = element[fn3.requestFullscreen]();
          if (returnPromise instanceof Promise) {
            returnPromise.then(onFullScreenEntered).catch(reject);
          }
        });
      },
      exit: function exit() {
        return new Promise(function(resolve, reject) {
          if (!screenfull2.isFullscreen) {
            resolve();
            return;
          }
          var onFullScreenExit = function onFullScreenExit2() {
            screenfull2.off("fullscreenchange", onFullScreenExit2);
            resolve();
          };
          screenfull2.on("fullscreenchange", onFullScreenExit);
          var returnPromise = document[fn3.exitFullscreen]();
          if (returnPromise instanceof Promise) {
            returnPromise.then(onFullScreenExit).catch(reject);
          }
        });
      },
      on: function on2(event2, callback) {
        var eventName = eventNameMap[event2];
        if (eventName) {
          document.addEventListener(eventName, callback);
        }
      },
      off: function off(event2, callback) {
        var eventName = eventNameMap[event2];
        if (eventName) {
          document.removeEventListener(eventName, callback);
        }
      }
    };
    Object.defineProperties(screenfull2, {
      isFullscreen: {
        get: function get() {
          return Boolean(document[fn3.fullscreenElement]);
        }
      },
      element: {
        enumerable: true,
        get: function get() {
          return document[fn3.fullscreenElement];
        }
      },
      isEnabled: {
        enumerable: true,
        get: function get() {
          return Boolean(document[fn3.fullscreenEnabled]);
        }
      }
    });
    return screenfull2;
  }
  var defaultOptions = {
    role: "viewer",
    autoPlayMuted: true,
    allowedDrift: 0.3,
    maxAllowedDrift: 1,
    minCheckInterval: 0.1,
    maxRateAdjustment: 0.2,
    maxTimeToCatchUp: 1
  };
  var TimingSrcConnector = /* @__PURE__ */ function(_EventTarget) {
    _inherits(TimingSrcConnector2, _EventTarget);
    var _super = _createSuper(TimingSrcConnector2);
    function TimingSrcConnector2(_player, timingObject) {
      var _this;
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var logger = arguments.length > 3 ? arguments[3] : void 0;
      _classCallCheck(this, TimingSrcConnector2);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "logger", void 0);
      _defineProperty(_assertThisInitialized(_this), "speedAdjustment", 0);
      _defineProperty(_assertThisInitialized(_this), "adjustSpeed", /* @__PURE__ */ function() {
        var _ref = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(player2, newAdjustment) {
          var newPlaybackRate;
          return _regeneratorRuntime().wrap(function _callee$(_context3) {
            while (1)
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(_this.speedAdjustment === newAdjustment)) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return");
                case 2:
                  _context3.next = 4;
                  return player2.getPlaybackRate();
                case 4:
                  _context3.t0 = _context3.sent;
                  _context3.t1 = _this.speedAdjustment;
                  _context3.t2 = _context3.t0 - _context3.t1;
                  _context3.t3 = newAdjustment;
                  newPlaybackRate = _context3.t2 + _context3.t3;
                  _this.log("New playbackRate:  ".concat(newPlaybackRate));
                  _context3.next = 12;
                  return player2.setPlaybackRate(newPlaybackRate);
                case 12:
                  _this.speedAdjustment = newAdjustment;
                case 13:
                case "end":
                  return _context3.stop();
              }
          }, _callee);
        }));
        return function(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
      _this.logger = logger;
      _this.init(timingObject, _player, _objectSpread2(_objectSpread2({}, defaultOptions), options));
      return _this;
    }
    _createClass(TimingSrcConnector2, [{
      key: "disconnect",
      value: function disconnect() {
        this.dispatchEvent(new Event("disconnect"));
      }
      /**
       * @param {TimingObject} timingObject
       * @param {PlayerControls} player
       * @param {TimingSrcConnectorOptions} options
       * @return {Promise<void>}
       */
    }, {
      key: "init",
      value: function() {
        var _init = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(timingObject, player2, options) {
          var _this2 = this;
          var playerUpdater, positionSync, timingObjectUpdater;
          return _regeneratorRuntime().wrap(function _callee2$(_context22) {
            while (1)
              switch (_context22.prev = _context22.next) {
                case 0:
                  _context22.next = 2;
                  return this.waitForTOReadyState(timingObject, "open");
                case 2:
                  if (!(options.role === "viewer")) {
                    _context22.next = 10;
                    break;
                  }
                  _context22.next = 5;
                  return this.updatePlayer(timingObject, player2, options);
                case 5:
                  playerUpdater = subscribe(timingObject, "change", function() {
                    return _this2.updatePlayer(timingObject, player2, options);
                  });
                  positionSync = this.maintainPlaybackPosition(timingObject, player2, options);
                  this.addEventListener("disconnect", function() {
                    positionSync.cancel();
                    playerUpdater.cancel();
                  });
                  _context22.next = 14;
                  break;
                case 10:
                  _context22.next = 12;
                  return this.updateTimingObject(timingObject, player2);
                case 12:
                  timingObjectUpdater = subscribe(player2, ["seeked", "play", "pause", "ratechange"], function() {
                    return _this2.updateTimingObject(timingObject, player2);
                  }, "on", "off");
                  this.addEventListener("disconnect", function() {
                    return timingObjectUpdater.cancel();
                  });
                case 14:
                case "end":
                  return _context22.stop();
              }
          }, _callee2, this);
        }));
        function init(_x3, _x4, _x5) {
          return _init.apply(this, arguments);
        }
        return init;
      }()
      /**
       * Sets the TimingObject's state to reflect that of the player
       *
       * @param {TimingObject} timingObject
       * @param {PlayerControls} player
       * @return {Promise<void>}
       */
    }, {
      key: "updateTimingObject",
      value: function() {
        var _updateTimingObject = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee3(timingObject, player2) {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1)
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.t0 = timingObject;
                  _context3.next = 3;
                  return player2.getCurrentTime();
                case 3:
                  _context3.t1 = _context3.sent;
                  _context3.next = 6;
                  return player2.getPaused();
                case 6:
                  if (!_context3.sent) {
                    _context3.next = 10;
                    break;
                  }
                  _context3.t2 = 0;
                  _context3.next = 13;
                  break;
                case 10:
                  _context3.next = 12;
                  return player2.getPlaybackRate();
                case 12:
                  _context3.t2 = _context3.sent;
                case 13:
                  _context3.t3 = _context3.t2;
                  _context3.t4 = {
                    position: _context3.t1,
                    velocity: _context3.t3
                  };
                  _context3.t0.update.call(_context3.t0, _context3.t4);
                case 16:
                case "end":
                  return _context3.stop();
              }
          }, _callee3);
        }));
        function updateTimingObject(_x6, _x7) {
          return _updateTimingObject.apply(this, arguments);
        }
        return updateTimingObject;
      }()
      /**
       * Sets the player's timing state to reflect that of the TimingObject
       *
       * @param {TimingObject} timingObject
       * @param {PlayerControls} player
       * @param {TimingSrcConnectorOptions} options
       * @return {Promise<void>}
       */
    }, {
      key: "updatePlayer",
      value: function() {
        var _updatePlayer = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee5(timingObject, player2, options) {
          var _timingObject$query, position, velocity;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1)
              switch (_context5.prev = _context5.next) {
                case 0:
                  _timingObject$query = timingObject.query(), position = _timingObject$query.position, velocity = _timingObject$query.velocity;
                  if (typeof position === "number") {
                    player2.setCurrentTime(position);
                  }
                  if (!(typeof velocity === "number")) {
                    _context5.next = 25;
                    break;
                  }
                  if (!(velocity === 0)) {
                    _context5.next = 11;
                    break;
                  }
                  _context5.next = 6;
                  return player2.getPaused();
                case 6:
                  _context5.t0 = _context5.sent;
                  if (!(_context5.t0 === false)) {
                    _context5.next = 9;
                    break;
                  }
                  player2.pause();
                case 9:
                  _context5.next = 25;
                  break;
                case 11:
                  if (!(velocity > 0)) {
                    _context5.next = 25;
                    break;
                  }
                  _context5.next = 14;
                  return player2.getPaused();
                case 14:
                  _context5.t1 = _context5.sent;
                  if (!(_context5.t1 === true)) {
                    _context5.next = 19;
                    break;
                  }
                  _context5.next = 18;
                  return player2.play().catch(/* @__PURE__ */ function() {
                    var _ref2 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee4(err) {
                      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                        while (1)
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              if (!(err.name === "NotAllowedError" && options.autoPlayMuted)) {
                                _context4.next = 5;
                                break;
                              }
                              _context4.next = 3;
                              return player2.setMuted(true);
                            case 3:
                              _context4.next = 5;
                              return player2.play().catch(function(err2) {
                                return console.error("Couldn't play the video from TimingSrcConnector. Error:", err2);
                              });
                            case 5:
                            case "end":
                              return _context4.stop();
                          }
                      }, _callee4);
                    }));
                    return function(_x11) {
                      return _ref2.apply(this, arguments);
                    };
                  }());
                case 18:
                  this.updatePlayer(timingObject, player2, options);
                case 19:
                  _context5.next = 21;
                  return player2.getPlaybackRate();
                case 21:
                  _context5.t2 = _context5.sent;
                  _context5.t3 = velocity;
                  if (!(_context5.t2 !== _context5.t3)) {
                    _context5.next = 25;
                    break;
                  }
                  player2.setPlaybackRate(velocity);
                case 25:
                case "end":
                  return _context5.stop();
              }
          }, _callee5, this);
        }));
        function updatePlayer(_x8, _x9, _x10) {
          return _updatePlayer.apply(this, arguments);
        }
        return updatePlayer;
      }()
      /**
       * Since video players do not play with 100% time precision, we need to closely monitor
       * our player to be sure it remains in sync with the TimingObject.
       *
       * If out of sync, we use the current conditions and the options provided to determine
       * whether to re-sync via setting currentTime or adjusting the playbackRate
       *
       * @param {TimingObject} timingObject
       * @param {PlayerControls} player
       * @param {TimingSrcConnectorOptions} options
       * @return {{cancel: (function(): void)}}
       */
    }, {
      key: "maintainPlaybackPosition",
      value: function maintainPlaybackPosition(timingObject, player2, options) {
        var _this3 = this;
        var allowedDrift = options.allowedDrift, maxAllowedDrift = options.maxAllowedDrift, minCheckInterval = options.minCheckInterval, maxRateAdjustment = options.maxRateAdjustment, maxTimeToCatchUp = options.maxTimeToCatchUp;
        var syncInterval = Math.min(maxTimeToCatchUp, Math.max(minCheckInterval, maxAllowedDrift)) * 1e3;
        var check = /* @__PURE__ */ function() {
          var _ref3 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee6() {
            var diff, diffAbs, min2, max2, adjustment;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1)
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.t0 = timingObject.query().velocity === 0;
                    if (_context6.t0) {
                      _context6.next = 6;
                      break;
                    }
                    _context6.next = 4;
                    return player2.getPaused();
                  case 4:
                    _context6.t1 = _context6.sent;
                    _context6.t0 = _context6.t1 === true;
                  case 6:
                    if (!_context6.t0) {
                      _context6.next = 8;
                      break;
                    }
                    return _context6.abrupt("return");
                  case 8:
                    _context6.t2 = timingObject.query().position;
                    _context6.next = 11;
                    return player2.getCurrentTime();
                  case 11:
                    _context6.t3 = _context6.sent;
                    diff = _context6.t2 - _context6.t3;
                    diffAbs = Math.abs(diff);
                    _this3.log("Drift: ".concat(diff));
                    if (!(diffAbs > maxAllowedDrift)) {
                      _context6.next = 22;
                      break;
                    }
                    _context6.next = 18;
                    return _this3.adjustSpeed(player2, 0);
                  case 18:
                    player2.setCurrentTime(timingObject.query().position);
                    _this3.log("Resync by currentTime");
                    _context6.next = 29;
                    break;
                  case 22:
                    if (!(diffAbs > allowedDrift)) {
                      _context6.next = 29;
                      break;
                    }
                    min2 = diffAbs / maxTimeToCatchUp;
                    max2 = maxRateAdjustment;
                    adjustment = min2 < max2 ? (max2 - min2) / 2 : max2;
                    _context6.next = 28;
                    return _this3.adjustSpeed(player2, adjustment * Math.sign(diff));
                  case 28:
                    _this3.log("Resync by playbackRate");
                  case 29:
                  case "end":
                    return _context6.stop();
                }
            }, _callee6);
          }));
          return function check2() {
            return _ref3.apply(this, arguments);
          };
        }();
        var interval = setInterval(function() {
          return check();
        }, syncInterval);
        return {
          cancel: function cancel() {
            return clearInterval(interval);
          }
        };
      }
      /**
       * @param {string} msg
       */
    }, {
      key: "log",
      value: function log(msg) {
        var _this$logger;
        (_this$logger = this.logger) === null || _this$logger === void 0 ? void 0 : _this$logger.call(this, "TimingSrcConnector: ".concat(msg));
      }
    }, {
      key: "waitForTOReadyState",
      value: (
        /**
         * @param {TimingObject} timingObject
         * @param {TConnectionState} state
         * @return {Promise<void>}
         */
        function waitForTOReadyState(timingObject, state) {
          return new Promise(function(resolve) {
            var check = function check2() {
              if (timingObject.readyState === state) {
                resolve();
              } else {
                timingObject.addEventListener("readystatechange", check2, {
                  once: true
                });
              }
            };
            check();
          });
        }
      )
    }]);
    return TimingSrcConnector2;
  }(/* @__PURE__ */ _wrapNativeSuper(EventTarget));
  var playerMap = /* @__PURE__ */ new WeakMap();
  var readyMap = /* @__PURE__ */ new WeakMap();
  var screenfull = {};
  var Player = /* @__PURE__ */ function() {
    function Player2(element) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      _classCallCheck(this, Player2);
      if (window.jQuery && element instanceof jQuery) {
        if (element.length > 1 && window.console && console.warn) {
          console.warn("A jQuery object with multiple elements was passed, using the first element.");
        }
        element = element[0];
      }
      if (typeof document !== "undefined" && typeof element === "string") {
        element = document.getElementById(element);
      }
      if (!isDomElement(element)) {
        throw new TypeError("You must pass either a valid element or a valid id.");
      }
      if (element.nodeName !== "IFRAME") {
        var iframe = element.querySelector("iframe");
        if (iframe) {
          element = iframe;
        }
      }
      if (element.nodeName === "IFRAME" && !isVimeoUrl(element.getAttribute("src") || "")) {
        throw new Error("The player element passed isn\u2019t a Vimeo embed.");
      }
      if (playerMap.has(element)) {
        return playerMap.get(element);
      }
      this._window = element.ownerDocument.defaultView;
      this.element = element;
      this.origin = "*";
      var readyPromise = new npo_src(function(resolve, reject) {
        _this._onMessage = function(event2) {
          if (!isVimeoUrl(event2.origin) || _this.element.contentWindow !== event2.source) {
            return;
          }
          if (_this.origin === "*") {
            _this.origin = event2.origin;
          }
          var data = parseMessageData(event2.data);
          var isError = data && data.event === "error";
          var isReadyError = isError && data.data && data.data.method === "ready";
          if (isReadyError) {
            var error = new Error(data.data.message);
            error.name = data.data.name;
            reject(error);
            return;
          }
          var isReadyEvent = data && data.event === "ready";
          var isPingResponse = data && data.method === "ping";
          if (isReadyEvent || isPingResponse) {
            _this.element.setAttribute("data-ready", "true");
            resolve();
            return;
          }
          processData(_this, data);
        };
        _this._window.addEventListener("message", _this._onMessage);
        if (_this.element.nodeName !== "IFRAME") {
          var params = getOEmbedParameters(element, options);
          var url = getVimeoUrl(params);
          getOEmbedData(url, params, element).then(function(data) {
            var iframe2 = createEmbed(data, element);
            _this.element = iframe2;
            _this._originalElement = element;
            swapCallbacks(element, iframe2);
            playerMap.set(_this.element, _this);
            return data;
          }).catch(reject);
        }
      });
      readyMap.set(this, readyPromise);
      playerMap.set(this.element, this);
      if (this.element.nodeName === "IFRAME") {
        postMessage(this, "ping");
      }
      if (screenfull.isEnabled) {
        var exitFullscreen = function exitFullscreen2() {
          return screenfull.exit();
        };
        this.fullscreenchangeHandler = function() {
          if (screenfull.isFullscreen) {
            storeCallback(_this, "event:exitFullscreen", exitFullscreen);
          } else {
            removeCallback(_this, "event:exitFullscreen", exitFullscreen);
          }
          _this.ready().then(function() {
            postMessage(_this, "fullscreenchange", screenfull.isFullscreen);
          });
        };
        screenfull.on("fullscreenchange", this.fullscreenchangeHandler);
      }
      return this;
    }
    _createClass(Player2, [{
      key: "callMethod",
      value: function callMethod(name) {
        var _this2 = this;
        var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return new npo_src(function(resolve, reject) {
          return _this2.ready().then(function() {
            storeCallback(_this2, name, {
              resolve,
              reject
            });
            postMessage(_this2, name, args);
          }).catch(reject);
        });
      }
      /**
       * Get a promise for the value of a player property.
       *
       * @param {string} name The property name
       * @return {Promise}
       */
    }, {
      key: "get",
      value: function get(name) {
        var _this3 = this;
        return new npo_src(function(resolve, reject) {
          name = getMethodName(name, "get");
          return _this3.ready().then(function() {
            storeCallback(_this3, name, {
              resolve,
              reject
            });
            postMessage(_this3, name);
          }).catch(reject);
        });
      }
      /**
       * Get a promise for setting the value of a player property.
       *
       * @param {string} name The API method to call.
       * @param {mixed} value The value to set.
       * @return {Promise}
       */
    }, {
      key: "set",
      value: function set(name, value) {
        var _this4 = this;
        return new npo_src(function(resolve, reject) {
          name = getMethodName(name, "set");
          if (value === void 0 || value === null) {
            throw new TypeError("There must be a value to set.");
          }
          return _this4.ready().then(function() {
            storeCallback(_this4, name, {
              resolve,
              reject
            });
            postMessage(_this4, name, value);
          }).catch(reject);
        });
      }
      /**
       * Add an event listener for the specified event. Will call the
       * callback with a single parameter, `data`, that contains the data for
       * that event.
       *
       * @param {string} eventName The name of the event.
       * @param {function(*)} callback The function to call when the event fires.
       * @return {void}
       */
    }, {
      key: "on",
      value: function on2(eventName, callback) {
        if (!eventName) {
          throw new TypeError("You must pass an event name.");
        }
        if (!callback) {
          throw new TypeError("You must pass a callback function.");
        }
        if (typeof callback !== "function") {
          throw new TypeError("The callback must be a function.");
        }
        var callbacks = getCallbacks(this, "event:".concat(eventName));
        if (callbacks.length === 0) {
          this.callMethod("addEventListener", eventName).catch(function() {
          });
        }
        storeCallback(this, "event:".concat(eventName), callback);
      }
      /**
       * Remove an event listener for the specified event. Will remove all
       * listeners for that event if a `callback` isn’t passed, or only that
       * specific callback if it is passed.
       *
       * @param {string} eventName The name of the event.
       * @param {function} [callback] The specific callback to remove.
       * @return {void}
       */
    }, {
      key: "off",
      value: function off(eventName, callback) {
        if (!eventName) {
          throw new TypeError("You must pass an event name.");
        }
        if (callback && typeof callback !== "function") {
          throw new TypeError("The callback must be a function.");
        }
        var lastCallback = removeCallback(this, "event:".concat(eventName), callback);
        if (lastCallback) {
          this.callMethod("removeEventListener", eventName).catch(function(e7) {
          });
        }
      }
      /**
       * A promise to load a new video.
       *
       * @promise LoadVideoPromise
       * @fulfill {number} The video with this id or url successfully loaded.
       * @reject {TypeError} The id was not a number.
       */
      /**
       * Load a new video into this embed. The promise will be resolved if
       * the video is successfully loaded, or it will be rejected if it could
       * not be loaded.
       *
       * @param {number|string|object} options The id of the video, the url of the video, or an object with embed options.
       * @return {LoadVideoPromise}
       */
    }, {
      key: "loadVideo",
      value: function loadVideo(options) {
        return this.callMethod("loadVideo", options);
      }
      /**
       * A promise to perform an action when the Player is ready.
       *
       * @todo document errors
       * @promise LoadVideoPromise
       * @fulfill {void}
       */
      /**
       * Trigger a function when the player iframe has initialized. You do not
       * need to wait for `ready` to trigger to begin adding event listeners
       * or calling other methods.
       *
       * @return {ReadyPromise}
       */
    }, {
      key: "ready",
      value: function ready() {
        var readyPromise = readyMap.get(this) || new npo_src(function(resolve, reject) {
          reject(new Error("Unknown player. Probably unloaded."));
        });
        return npo_src.resolve(readyPromise);
      }
      /**
       * A promise to add a cue point to the player.
       *
       * @promise AddCuePointPromise
       * @fulfill {string} The id of the cue point to use for removeCuePoint.
       * @reject {RangeError} the time was less than 0 or greater than the
       *         video’s duration.
       * @reject {UnsupportedError} Cue points are not supported with the current
       *         player or browser.
       */
      /**
       * Add a cue point to the player.
       *
       * @param {number} time The time for the cue point.
       * @param {object} [data] Arbitrary data to be returned with the cue point.
       * @return {AddCuePointPromise}
       */
    }, {
      key: "addCuePoint",
      value: function addCuePoint(time) {
        var data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return this.callMethod("addCuePoint", {
          time,
          data
        });
      }
      /**
       * A promise to remove a cue point from the player.
       *
       * @promise AddCuePointPromise
       * @fulfill {string} The id of the cue point that was removed.
       * @reject {InvalidCuePoint} The cue point with the specified id was not
       *         found.
       * @reject {UnsupportedError} Cue points are not supported with the current
       *         player or browser.
       */
      /**
       * Remove a cue point from the video.
       *
       * @param {string} id The id of the cue point to remove.
       * @return {RemoveCuePointPromise}
       */
    }, {
      key: "removeCuePoint",
      value: function removeCuePoint(id) {
        return this.callMethod("removeCuePoint", id);
      }
      /**
       * A representation of a text track on a video.
       *
       * @typedef {Object} VimeoTextTrack
       * @property {string} language The ISO language code.
       * @property {string} kind The kind of track it is (captions or subtitles).
       * @property {string} label The human‐readable label for the track.
       */
      /**
       * A promise to enable a text track.
       *
       * @promise EnableTextTrackPromise
       * @fulfill {VimeoTextTrack} The text track that was enabled.
       * @reject {InvalidTrackLanguageError} No track was available with the
       *         specified language.
       * @reject {InvalidTrackError} No track was available with the specified
       *         language and kind.
       */
      /**
       * Enable the text track with the specified language, and optionally the
       * specified kind (captions or subtitles).
       *
       * When set via the API, the track language will not change the viewer’s
       * stored preference.
       *
       * @param {string} language The two‐letter language code.
       * @param {string} [kind] The kind of track to enable (captions or subtitles).
       * @return {EnableTextTrackPromise}
       */
    }, {
      key: "enableTextTrack",
      value: function enableTextTrack(language, kind) {
        if (!language) {
          throw new TypeError("You must pass a language.");
        }
        return this.callMethod("enableTextTrack", {
          language,
          kind
        });
      }
      /**
       * A promise to disable the active text track.
       *
       * @promise DisableTextTrackPromise
       * @fulfill {void} The track was disabled.
       */
      /**
       * Disable the currently-active text track.
       *
       * @return {DisableTextTrackPromise}
       */
    }, {
      key: "disableTextTrack",
      value: function disableTextTrack() {
        return this.callMethod("disableTextTrack");
      }
      /**
       * A promise to pause the video.
       *
       * @promise PausePromise
       * @fulfill {void} The video was paused.
       */
      /**
       * Pause the video if it’s playing.
       *
       * @return {PausePromise}
       */
    }, {
      key: "pause",
      value: function pause() {
        return this.callMethod("pause");
      }
      /**
       * A promise to play the video.
       *
       * @promise PlayPromise
       * @fulfill {void} The video was played.
       */
      /**
       * Play the video if it’s paused. **Note:** on iOS and some other
       * mobile devices, you cannot programmatically trigger play. Once the
       * viewer has tapped on the play button in the player, however, you
       * will be able to use this function.
       *
       * @return {PlayPromise}
       */
    }, {
      key: "play",
      value: function play() {
        return this.callMethod("play");
      }
      /**
       * Request that the player enters fullscreen.
       * @return {Promise}
       */
    }, {
      key: "requestFullscreen",
      value: function requestFullscreen() {
        if (screenfull.isEnabled) {
          return screenfull.request(this.element);
        }
        return this.callMethod("requestFullscreen");
      }
      /**
       * Request that the player exits fullscreen.
       * @return {Promise}
       */
    }, {
      key: "exitFullscreen",
      value: function exitFullscreen() {
        if (screenfull.isEnabled) {
          return screenfull.exit();
        }
        return this.callMethod("exitFullscreen");
      }
      /**
       * Returns true if the player is currently fullscreen.
       * @return {Promise}
       */
    }, {
      key: "getFullscreen",
      value: function getFullscreen() {
        if (screenfull.isEnabled) {
          return npo_src.resolve(screenfull.isFullscreen);
        }
        return this.get("fullscreen");
      }
      /**
       * Request that the player enters picture-in-picture.
       * @return {Promise}
       */
    }, {
      key: "requestPictureInPicture",
      value: function requestPictureInPicture() {
        return this.callMethod("requestPictureInPicture");
      }
      /**
       * Request that the player exits picture-in-picture.
       * @return {Promise}
       */
    }, {
      key: "exitPictureInPicture",
      value: function exitPictureInPicture() {
        return this.callMethod("exitPictureInPicture");
      }
      /**
       * Returns true if the player is currently picture-in-picture.
       * @return {Promise}
       */
    }, {
      key: "getPictureInPicture",
      value: function getPictureInPicture() {
        return this.get("pictureInPicture");
      }
      /**
       * A promise to prompt the viewer to initiate remote playback.
       *
       * @promise RemotePlaybackPromptPromise
       * @fulfill {void}
       * @reject {NotFoundError} No remote playback device is available.
       */
      /**
       * Request to prompt the user to initiate remote playback.
       *
       * @return {RemotePlaybackPromptPromise}
       */
    }, {
      key: "remotePlaybackPrompt",
      value: function remotePlaybackPrompt() {
        return this.callMethod("remotePlaybackPrompt");
      }
      /**
       * A promise to unload the video.
       *
       * @promise UnloadPromise
       * @fulfill {void} The video was unloaded.
       */
      /**
       * Return the player to its initial state.
       *
       * @return {UnloadPromise}
       */
    }, {
      key: "unload",
      value: function unload() {
        return this.callMethod("unload");
      }
      /**
       * Cleanup the player and remove it from the DOM
       *
       * It won't be usable and a new one should be constructed
       *  in order to do any operations.
       *
       * @return {Promise}
       */
    }, {
      key: "destroy",
      value: function destroy() {
        var _this5 = this;
        return new npo_src(function(resolve) {
          readyMap.delete(_this5);
          playerMap.delete(_this5.element);
          if (_this5._originalElement) {
            playerMap.delete(_this5._originalElement);
            _this5._originalElement.removeAttribute("data-vimeo-initialized");
          }
          if (_this5.element && _this5.element.nodeName === "IFRAME" && _this5.element.parentNode) {
            if (_this5.element.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== _this5.element.parentNode) {
              _this5.element.parentNode.parentNode.removeChild(_this5.element.parentNode);
            } else {
              _this5.element.parentNode.removeChild(_this5.element);
            }
          }
          if (_this5.element && _this5.element.nodeName === "DIV" && _this5.element.parentNode) {
            _this5.element.removeAttribute("data-vimeo-initialized");
            var iframe = _this5.element.querySelector("iframe");
            if (iframe && iframe.parentNode) {
              if (iframe.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== iframe.parentNode) {
                iframe.parentNode.parentNode.removeChild(iframe.parentNode);
              } else {
                iframe.parentNode.removeChild(iframe);
              }
            }
          }
          _this5._window.removeEventListener("message", _this5._onMessage);
          if (screenfull.isEnabled) {
            screenfull.off("fullscreenchange", _this5.fullscreenchangeHandler);
          }
          resolve();
        });
      }
      /**
       * A promise to get the autopause behavior of the video.
       *
       * @promise GetAutopausePromise
       * @fulfill {boolean} Whether autopause is turned on or off.
       * @reject {UnsupportedError} Autopause is not supported with the current
       *         player or browser.
       */
      /**
       * Get the autopause behavior for this player.
       *
       * @return {GetAutopausePromise}
       */
    }, {
      key: "getAutopause",
      value: function getAutopause() {
        return this.get("autopause");
      }
      /**
       * A promise to set the autopause behavior of the video.
       *
       * @promise SetAutopausePromise
       * @fulfill {boolean} Whether autopause is turned on or off.
       * @reject {UnsupportedError} Autopause is not supported with the current
       *         player or browser.
       */
      /**
       * Enable or disable the autopause behavior of this player.
       *
       * By default, when another video is played in the same browser, this
       * player will automatically pause. Unless you have a specific reason
       * for doing so, we recommend that you leave autopause set to the
       * default (`true`).
       *
       * @param {boolean} autopause
       * @return {SetAutopausePromise}
       */
    }, {
      key: "setAutopause",
      value: function setAutopause(autopause) {
        return this.set("autopause", autopause);
      }
      /**
       * A promise to get the buffered property of the video.
       *
       * @promise GetBufferedPromise
       * @fulfill {Array} Buffered Timeranges converted to an Array.
       */
      /**
       * Get the buffered property of the video.
       *
       * @return {GetBufferedPromise}
       */
    }, {
      key: "getBuffered",
      value: function getBuffered() {
        return this.get("buffered");
      }
      /**
       * @typedef {Object} CameraProperties
       * @prop {number} props.yaw - Number between 0 and 360.
       * @prop {number} props.pitch - Number between -90 and 90.
       * @prop {number} props.roll - Number between -180 and 180.
       * @prop {number} props.fov - The field of view in degrees.
       */
      /**
       * A promise to get the camera properties of the player.
       *
       * @promise GetCameraPromise
       * @fulfill {CameraProperties} The camera properties.
       */
      /**
       * For 360° videos get the camera properties for this player.
       *
       * @return {GetCameraPromise}
       */
    }, {
      key: "getCameraProps",
      value: function getCameraProps() {
        return this.get("cameraProps");
      }
      /**
       * A promise to set the camera properties of the player.
       *
       * @promise SetCameraPromise
       * @fulfill {Object} The camera was successfully set.
       * @reject {RangeError} The range was out of bounds.
       */
      /**
       * For 360° videos set the camera properties for this player.
       *
       * @param {CameraProperties} camera The camera properties
       * @return {SetCameraPromise}
       */
    }, {
      key: "setCameraProps",
      value: function setCameraProps(camera) {
        return this.set("cameraProps", camera);
      }
      /**
       * A representation of a chapter.
       *
       * @typedef {Object} VimeoChapter
       * @property {number} startTime The start time of the chapter.
       * @property {object} title The title of the chapter.
       * @property {number} index The place in the order of Chapters. Starts at 1.
       */
      /**
       * A promise to get chapters for the video.
       *
       * @promise GetChaptersPromise
       * @fulfill {VimeoChapter[]} The chapters for the video.
       */
      /**
       * Get an array of all the chapters for the video.
       *
       * @return {GetChaptersPromise}
       */
    }, {
      key: "getChapters",
      value: function getChapters() {
        return this.get("chapters");
      }
      /**
       * A promise to get the currently active chapter.
       *
       * @promise GetCurrentChaptersPromise
       * @fulfill {VimeoChapter|undefined} The current chapter for the video.
       */
      /**
       * Get the currently active chapter for the video.
       *
       * @return {GetCurrentChaptersPromise}
       */
    }, {
      key: "getCurrentChapter",
      value: function getCurrentChapter() {
        return this.get("currentChapter");
      }
      /**
       * A promise to get the accent color of the player.
       *
       * @promise GetColorPromise
       * @fulfill {string} The hex color of the player.
       */
      /**
       * Get the accent color for this player. Note this is deprecated in place of `getColorTwo`.
       *
       * @return {GetColorPromise}
       */
    }, {
      key: "getColor",
      value: function getColor() {
        return this.get("color");
      }
      /**
       * A promise to get all colors for the player in an array.
       *
       * @promise GetColorsPromise
       * @fulfill {string[]} The hex colors of the player.
       */
      /**
       * Get all the colors for this player in an array: [colorOne, colorTwo, colorThree, colorFour]
       *
       * @return {GetColorPromise}
       */
    }, {
      key: "getColors",
      value: function getColors() {
        return npo_src.all([this.get("colorOne"), this.get("colorTwo"), this.get("colorThree"), this.get("colorFour")]);
      }
      /**
       * A promise to set the accent color of the player.
       *
       * @promise SetColorPromise
       * @fulfill {string} The color was successfully set.
       * @reject {TypeError} The string was not a valid hex or rgb color.
       * @reject {ContrastError} The color was set, but the contrast is
       *         outside of the acceptable range.
       * @reject {EmbedSettingsError} The owner of the player has chosen to
       *         use a specific color.
       */
      /**
       * Set the accent color of this player to a hex or rgb string. Setting the
       * color may fail if the owner of the video has set their embed
       * preferences to force a specific color.
       * Note this is deprecated in place of `setColorTwo`.
       *
       * @param {string} color The hex or rgb color string to set.
       * @return {SetColorPromise}
       */
    }, {
      key: "setColor",
      value: function setColor(color) {
        return this.set("color", color);
      }
      /**
       * A promise to set all colors for the player.
       *
       * @promise SetColorsPromise
       * @fulfill {string[]} The colors were successfully set.
       * @reject {TypeError} The string was not a valid hex or rgb color.
       * @reject {ContrastError} The color was set, but the contrast is
       *         outside of the acceptable range.
       * @reject {EmbedSettingsError} The owner of the player has chosen to
       *         use a specific color.
       */
      /**
       * Set the colors of this player to a hex or rgb string. Setting the
       * color may fail if the owner of the video has set their embed
       * preferences to force a specific color.
       * The colors should be passed in as an array: [colorOne, colorTwo, colorThree, colorFour].
       * If a color should not be set, the index in the array can be left as null.
       *
       * @param {string[]} colors Array of the hex or rgb color strings to set.
       * @return {SetColorsPromise}
       */
    }, {
      key: "setColors",
      value: function setColors(colors) {
        if (!Array.isArray(colors)) {
          return new npo_src(function(resolve, reject) {
            return reject(new TypeError("Argument must be an array."));
          });
        }
        var nullPromise = new npo_src(function(resolve) {
          return resolve(null);
        });
        var colorPromises = [colors[0] ? this.set("colorOne", colors[0]) : nullPromise, colors[1] ? this.set("colorTwo", colors[1]) : nullPromise, colors[2] ? this.set("colorThree", colors[2]) : nullPromise, colors[3] ? this.set("colorFour", colors[3]) : nullPromise];
        return npo_src.all(colorPromises);
      }
      /**
       * A representation of a cue point.
       *
       * @typedef {Object} VimeoCuePoint
       * @property {number} time The time of the cue point.
       * @property {object} data The data passed when adding the cue point.
       * @property {string} id The unique id for use with removeCuePoint.
       */
      /**
       * A promise to get the cue points of a video.
       *
       * @promise GetCuePointsPromise
       * @fulfill {VimeoCuePoint[]} The cue points added to the video.
       * @reject {UnsupportedError} Cue points are not supported with the current
       *         player or browser.
       */
      /**
       * Get an array of the cue points added to the video.
       *
       * @return {GetCuePointsPromise}
       */
    }, {
      key: "getCuePoints",
      value: function getCuePoints() {
        return this.get("cuePoints");
      }
      /**
       * A promise to get the current time of the video.
       *
       * @promise GetCurrentTimePromise
       * @fulfill {number} The current time in seconds.
       */
      /**
       * Get the current playback position in seconds.
       *
       * @return {GetCurrentTimePromise}
       */
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.get("currentTime");
      }
      /**
       * A promise to set the current time of the video.
       *
       * @promise SetCurrentTimePromise
       * @fulfill {number} The actual current time that was set.
       * @reject {RangeError} the time was less than 0 or greater than the
       *         video’s duration.
       */
      /**
       * Set the current playback position in seconds. If the player was
       * paused, it will remain paused. Likewise, if the player was playing,
       * it will resume playing once the video has buffered.
       *
       * You can provide an accurate time and the player will attempt to seek
       * to as close to that time as possible. The exact time will be the
       * fulfilled value of the promise.
       *
       * @param {number} currentTime
       * @return {SetCurrentTimePromise}
       */
    }, {
      key: "setCurrentTime",
      value: function setCurrentTime(currentTime) {
        return this.set("currentTime", currentTime);
      }
      /**
       * A promise to get the duration of the video.
       *
       * @promise GetDurationPromise
       * @fulfill {number} The duration in seconds.
       */
      /**
       * Get the duration of the video in seconds. It will be rounded to the
       * nearest second before playback begins, and to the nearest thousandth
       * of a second after playback begins.
       *
       * @return {GetDurationPromise}
       */
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.get("duration");
      }
      /**
       * A promise to get the ended state of the video.
       *
       * @promise GetEndedPromise
       * @fulfill {boolean} Whether or not the video has ended.
       */
      /**
       * Get the ended state of the video. The video has ended if
       * `currentTime === duration`.
       *
       * @return {GetEndedPromise}
       */
    }, {
      key: "getEnded",
      value: function getEnded() {
        return this.get("ended");
      }
      /**
       * A promise to get the loop state of the player.
       *
       * @promise GetLoopPromise
       * @fulfill {boolean} Whether or not the player is set to loop.
       */
      /**
       * Get the loop state of the player.
       *
       * @return {GetLoopPromise}
       */
    }, {
      key: "getLoop",
      value: function getLoop() {
        return this.get("loop");
      }
      /**
       * A promise to set the loop state of the player.
       *
       * @promise SetLoopPromise
       * @fulfill {boolean} The loop state that was set.
       */
      /**
       * Set the loop state of the player. When set to `true`, the player
       * will start over immediately once playback ends.
       *
       * @param {boolean} loop
       * @return {SetLoopPromise}
       */
    }, {
      key: "setLoop",
      value: function setLoop(loop2) {
        return this.set("loop", loop2);
      }
      /**
       * A promise to set the muted state of the player.
       *
       * @promise SetMutedPromise
       * @fulfill {boolean} The muted state that was set.
       */
      /**
       * Set the muted state of the player. When set to `true`, the player
       * volume will be muted.
       *
       * @param {boolean} muted
       * @return {SetMutedPromise}
       */
    }, {
      key: "setMuted",
      value: function setMuted(muted) {
        return this.set("muted", muted);
      }
      /**
       * A promise to get the muted state of the player.
       *
       * @promise GetMutedPromise
       * @fulfill {boolean} Whether or not the player is muted.
       */
      /**
       * Get the muted state of the player.
       *
       * @return {GetMutedPromise}
       */
    }, {
      key: "getMuted",
      value: function getMuted() {
        return this.get("muted");
      }
      /**
       * A promise to get the paused state of the player.
       *
       * @promise GetLoopPromise
       * @fulfill {boolean} Whether or not the video is paused.
       */
      /**
       * Get the paused state of the player.
       *
       * @return {GetLoopPromise}
       */
    }, {
      key: "getPaused",
      value: function getPaused() {
        return this.get("paused");
      }
      /**
       * A promise to get the playback rate of the player.
       *
       * @promise GetPlaybackRatePromise
       * @fulfill {number} The playback rate of the player on a scale from 0 to 2.
       */
      /**
       * Get the playback rate of the player on a scale from `0` to `2`.
       *
       * @return {GetPlaybackRatePromise}
       */
    }, {
      key: "getPlaybackRate",
      value: function getPlaybackRate() {
        return this.get("playbackRate");
      }
      /**
       * A promise to set the playbackrate of the player.
       *
       * @promise SetPlaybackRatePromise
       * @fulfill {number} The playback rate was set.
       * @reject {RangeError} The playback rate was less than 0 or greater than 2.
       */
      /**
       * Set the playback rate of the player on a scale from `0` to `2`. When set
       * via the API, the playback rate will not be synchronized to other
       * players or stored as the viewer's preference.
       *
       * @param {number} playbackRate
       * @return {SetPlaybackRatePromise}
       */
    }, {
      key: "setPlaybackRate",
      value: function setPlaybackRate(playbackRate) {
        return this.set("playbackRate", playbackRate);
      }
      /**
       * A promise to get the played property of the video.
       *
       * @promise GetPlayedPromise
       * @fulfill {Array} Played Timeranges converted to an Array.
       */
      /**
       * Get the played property of the video.
       *
       * @return {GetPlayedPromise}
       */
    }, {
      key: "getPlayed",
      value: function getPlayed() {
        return this.get("played");
      }
      /**
       * A promise to get the qualities available of the current video.
       *
       * @promise GetQualitiesPromise
       * @fulfill {Array} The qualities of the video.
       */
      /**
       * Get the qualities of the current video.
       *
       * @return {GetQualitiesPromise}
       */
    }, {
      key: "getQualities",
      value: function getQualities() {
        return this.get("qualities");
      }
      /**
       * A promise to get the current set quality of the video.
       *
       * @promise GetQualityPromise
       * @fulfill {string} The current set quality.
       */
      /**
       * Get the current set quality of the video.
       *
       * @return {GetQualityPromise}
       */
    }, {
      key: "getQuality",
      value: function getQuality() {
        return this.get("quality");
      }
      /**
       * A promise to set the video quality.
       *
       * @promise SetQualityPromise
       * @fulfill {number} The quality was set.
       * @reject {RangeError} The quality is not available.
       */
      /**
       * Set a video quality.
       *
       * @param {string} quality
       * @return {SetQualityPromise}
       */
    }, {
      key: "setQuality",
      value: function setQuality(quality) {
        return this.set("quality", quality);
      }
      /**
       * A promise to get the remote playback availability.
       *
       * @promise RemotePlaybackAvailabilityPromise
       * @fulfill {boolean} Whether remote playback is available.
       */
      /**
       * Get the availability of remote playback.
       *
       * @return {RemotePlaybackAvailabilityPromise}
       */
    }, {
      key: "getRemotePlaybackAvailability",
      value: function getRemotePlaybackAvailability() {
        return this.get("remotePlaybackAvailability");
      }
      /**
       * A promise to get the current remote playback state.
       *
       * @promise RemotePlaybackStatePromise
       * @fulfill {string} The state of the remote playback: connecting, connected, or disconnected.
       */
      /**
       * Get the current remote playback state.
       *
       * @return {RemotePlaybackStatePromise}
       */
    }, {
      key: "getRemotePlaybackState",
      value: function getRemotePlaybackState() {
        return this.get("remotePlaybackState");
      }
      /**
       * A promise to get the seekable property of the video.
       *
       * @promise GetSeekablePromise
       * @fulfill {Array} Seekable Timeranges converted to an Array.
       */
      /**
       * Get the seekable property of the video.
       *
       * @return {GetSeekablePromise}
       */
    }, {
      key: "getSeekable",
      value: function getSeekable() {
        return this.get("seekable");
      }
      /**
       * A promise to get the seeking property of the player.
       *
       * @promise GetSeekingPromise
       * @fulfill {boolean} Whether or not the player is currently seeking.
       */
      /**
       * Get if the player is currently seeking.
       *
       * @return {GetSeekingPromise}
       */
    }, {
      key: "getSeeking",
      value: function getSeeking() {
        return this.get("seeking");
      }
      /**
       * A promise to get the text tracks of a video.
       *
       * @promise GetTextTracksPromise
       * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
       */
      /**
       * Get an array of the text tracks that exist for the video.
       *
       * @return {GetTextTracksPromise}
       */
    }, {
      key: "getTextTracks",
      value: function getTextTracks() {
        return this.get("textTracks");
      }
      /**
       * A promise to get the embed code for the video.
       *
       * @promise GetVideoEmbedCodePromise
       * @fulfill {string} The `<iframe>` embed code for the video.
       */
      /**
       * Get the `<iframe>` embed code for the video.
       *
       * @return {GetVideoEmbedCodePromise}
       */
    }, {
      key: "getVideoEmbedCode",
      value: function getVideoEmbedCode() {
        return this.get("videoEmbedCode");
      }
      /**
       * A promise to get the id of the video.
       *
       * @promise GetVideoIdPromise
       * @fulfill {number} The id of the video.
       */
      /**
       * Get the id of the video.
       *
       * @return {GetVideoIdPromise}
       */
    }, {
      key: "getVideoId",
      value: function getVideoId() {
        return this.get("videoId");
      }
      /**
       * A promise to get the title of the video.
       *
       * @promise GetVideoTitlePromise
       * @fulfill {number} The title of the video.
       */
      /**
       * Get the title of the video.
       *
       * @return {GetVideoTitlePromise}
       */
    }, {
      key: "getVideoTitle",
      value: function getVideoTitle() {
        return this.get("videoTitle");
      }
      /**
       * A promise to get the native width of the video.
       *
       * @promise GetVideoWidthPromise
       * @fulfill {number} The native width of the video.
       */
      /**
       * Get the native width of the currently‐playing video. The width of
       * the highest‐resolution available will be used before playback begins.
       *
       * @return {GetVideoWidthPromise}
       */
    }, {
      key: "getVideoWidth",
      value: function getVideoWidth() {
        return this.get("videoWidth");
      }
      /**
       * A promise to get the native height of the video.
       *
       * @promise GetVideoHeightPromise
       * @fulfill {number} The native height of the video.
       */
      /**
       * Get the native height of the currently‐playing video. The height of
       * the highest‐resolution available will be used before playback begins.
       *
       * @return {GetVideoHeightPromise}
       */
    }, {
      key: "getVideoHeight",
      value: function getVideoHeight() {
        return this.get("videoHeight");
      }
      /**
       * A promise to get the vimeo.com url for the video.
       *
       * @promise GetVideoUrlPromise
       * @fulfill {number} The vimeo.com url for the video.
       * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
       */
      /**
       * Get the vimeo.com url for the video.
       *
       * @return {GetVideoUrlPromise}
       */
    }, {
      key: "getVideoUrl",
      value: function getVideoUrl() {
        return this.get("videoUrl");
      }
      /**
       * A promise to get the volume level of the player.
       *
       * @promise GetVolumePromise
       * @fulfill {number} The volume level of the player on a scale from 0 to 1.
       */
      /**
       * Get the current volume level of the player on a scale from `0` to `1`.
       *
       * Most mobile devices do not support an independent volume from the
       * system volume. In those cases, this method will always return `1`.
       *
       * @return {GetVolumePromise}
       */
    }, {
      key: "getVolume",
      value: function getVolume() {
        return this.get("volume");
      }
      /**
       * A promise to set the volume level of the player.
       *
       * @promise SetVolumePromise
       * @fulfill {number} The volume was set.
       * @reject {RangeError} The volume was less than 0 or greater than 1.
       */
      /**
       * Set the volume of the player on a scale from `0` to `1`. When set
       * via the API, the volume level will not be synchronized to other
       * players or stored as the viewer’s preference.
       *
       * Most mobile devices do not support setting the volume. An error will
       * *not* be triggered in that situation.
       *
       * @param {number} volume
       * @return {SetVolumePromise}
       */
    }, {
      key: "setVolume",
      value: function setVolume(volume) {
        return this.set("volume", volume);
      }
      /** @typedef {import('./lib/timing-object.types').TimingObject} TimingObject */
      /** @typedef {import('./lib/timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions */
      /** @typedef {import('./lib/timing-src-connector').TimingSrcConnector} TimingSrcConnector */
      /**
       * Connects a TimingObject to the video player (https://webtiming.github.io/timingobject/)
       *
       * @param {TimingObject} timingObject
       * @param {TimingSrcConnectorOptions} options
       *
       * @return {Promise<TimingSrcConnector>}
       */
    }, {
      key: "setTimingSrc",
      value: function() {
        var _setTimingSrc = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(timingObject, options) {
          var _this6 = this;
          var connector;
          return _regeneratorRuntime().wrap(function _callee$(_context3) {
            while (1)
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (timingObject) {
                    _context3.next = 2;
                    break;
                  }
                  throw new TypeError("A Timing Object must be provided.");
                case 2:
                  _context3.next = 4;
                  return this.ready();
                case 4:
                  connector = new TimingSrcConnector(this, timingObject, options);
                  postMessage(this, "notifyTimingObjectConnect");
                  connector.addEventListener("disconnect", function() {
                    return postMessage(_this6, "notifyTimingObjectDisconnect");
                  });
                  return _context3.abrupt("return", connector);
                case 8:
                case "end":
                  return _context3.stop();
              }
          }, _callee, this);
        }));
        function setTimingSrc(_x, _x2) {
          return _setTimingSrc.apply(this, arguments);
        }
        return setTimingSrc;
      }()
    }]);
    return Player2;
  }();
  if (!isNode) {
    screenfull = initializeScreenfull();
    initializeEmbeds();
    resizeEmbeds();
    initAppendVideoMetadata();
    checkUrlTimeParam();
  }
  var player_es_default = Player;

  // src/page/growth-outbound/index.js
  var import_gsap = __toESM(require_gsap(), 1);

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/ScrollTrigger.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/Observer.js
  init_live_reload();
  function _defineProperties2(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties2(Constructor, staticProps);
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
  var _addListener = function _addListener2(element, type, func, passive2, capture) {
    return element.addEventListener(type, func, {
      passive: passive2 !== false,
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
  var _getTarget = function _getTarget2(t3, self2) {
    return (self2 && self2._ctx && self2._ctx.selector || gsap.utils.toArray)(t3)[0] || (typeof t3 === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t3) : null);
  };
  var _getScrollFunc = function _getScrollFunc2(element, _ref) {
    var s3 = _ref.s, sc = _ref.sc;
    _isViewport(element) && (element = _doc.scrollingElement || _docEl);
    var i3 = _scrollers.indexOf(element), offset2 = sc === _vertical.sc ? 1 : 2;
    !~i3 && (i3 = _scrollers.push(element) - 1);
    _scrollers[i3 + offset2] || _addListener(element, "scroll", _onScroll);
    var prev = _scrollers[i3 + offset2], func = prev || (_scrollers[i3 + offset2] = _scrollCacheFunc(_getProxyProp(element, s3), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
      return arguments.length ? element[s3] = value : element[s3];
    })));
    func.target = element;
    prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth");
    return func;
  };
  var _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = _getTime(), t22 = t1, min2 = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min2 * 3), update2 = function update3(value2, force) {
      var t3 = _getTime();
      if (force || t3 - t1 > min2) {
        v2 = v1;
        v1 = value2;
        t22 = t1;
        t1 = t3;
      } else if (useDelta) {
        v1 += value2;
      } else {
        v1 = v2 + (value2 - v2) / (t3 - t22) * (t1 - t22);
      }
    }, reset = function reset2() {
      v2 = v1 = useDelta ? 0 : v1;
      t22 = t1 = 0;
    }, getVelocity = function getVelocity2(latestValue) {
      var tOld = t22, vOld = v2, t3 = _getTime();
      (latestValue || latestValue === 0) && latestValue !== v1 && update2(latestValue);
      return t1 === t22 || t3 - t22 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t3 : t1) - tOld) * 1e3;
    };
    return {
      update: update2,
      reset,
      getVelocity
    };
  };
  var _getEvent = function _getEvent2(e7, preventDefault) {
    preventDefault && !e7._gsapAllow && e7.preventDefault();
    return e7.changedTouches ? e7.changedTouches[0] : e7;
  };
  var _getAbsoluteMax = function _getAbsoluteMax2(a2) {
    var max2 = Math.max.apply(Math, a2), min2 = Math.min.apply(Math, a2);
    return Math.abs(max2) >= Math.abs(min2) ? max2 : min2;
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
    function Observer3(vars) {
      this.init(vars);
    }
    var _proto = Observer3.prototype;
    _proto.init = function init(vars) {
      _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
      ScrollTrigger || _setScrollTrigger();
      var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce3 = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event2 = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick2 = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
      this.target = target = _getTarget(target) || _docEl;
      this.vars = vars;
      ignore && (ignore = gsap.utils.toArray(ignore));
      tolerance = tolerance || 1e-9;
      dragMinimum = dragMinimum || 0;
      wheelSpeed = wheelSpeed || 1;
      scrollSpeed = scrollSpeed || 1;
      type = type || "wheel,touch,pointer";
      debounce3 = debounce3 !== false;
      lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22);
      var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self2 = this, prevDeltaX = 0, prevDeltaY = 0, passive2 = vars.passive || !preventDefault, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
        return onClickTime = _getTime();
      }, _ignoreCheck = function _ignoreCheck2(e7, isPointerOrTouch) {
        return (self2.event = e7) && ignore && ~ignore.indexOf(e7.target) || isPointerOrTouch && limitToTouch && e7.pointerType !== "touch" || ignoreCheck && ignoreCheck(e7, isPointerOrTouch);
      }, onStopFunc = function onStopFunc2() {
        self2._vx.reset();
        self2._vy.reset();
        onStopDelayedCall.pause();
        onStop && onStop(self2);
      }, update2 = function update3() {
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
        debounce3 ? id || (id = requestAnimationFrame(update2)) : update2();
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
        debounce3 ? id || (id = requestAnimationFrame(update2)) : update2();
      }, _onDrag = function _onDrag2(e7) {
        if (_ignoreCheck(e7, 1)) {
          return;
        }
        e7 = _getEvent(e7, preventDefault);
        var x2 = e7.clientX, y2 = e7.clientY, dx = x2 - self2.x, dy = y2 - self2.y, isDragging = self2.isDragging;
        self2.x = x2;
        self2.y = y2;
        if (isDragging || Math.abs(self2.startX - x2) >= dragMinimum || Math.abs(self2.startY - y2) >= dragMinimum) {
          onDrag && (dragged = true);
          isDragging || (self2.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
          isDragging || onDragStart && onDragStart(self2);
        }
      }, _onPress = self2.onPress = function(e7) {
        if (_ignoreCheck(e7, 1) || e7 && e7.button) {
          return;
        }
        self2.axis = axis = null;
        onStopDelayedCall.pause();
        self2.isPressed = true;
        e7 = _getEvent(e7);
        prevDeltaX = prevDeltaY = 0;
        self2.startX = self2.x = e7.clientX;
        self2.startY = self2.y = e7.clientY;
        self2._vx.reset();
        self2._vy.reset();
        _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive2, true);
        self2.deltaX = self2.deltaY = 0;
        onPress && onPress(self2);
      }, _onRelease = self2.onRelease = function(e7) {
        if (_ignoreCheck(e7, 1)) {
          return;
        }
        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        var isTrackingDrag = !isNaN(self2.y - self2.startY), wasDragging = self2.isDragging, isDragNotClick = wasDragging && (Math.abs(self2.x - self2.startX) > 3 || Math.abs(self2.y - self2.startY) > 3), eventData = _getEvent(e7);
        if (!isDragNotClick && isTrackingDrag) {
          self2._vx.reset();
          self2._vy.reset();
          if (preventDefault && allowClicks) {
            gsap.delayedCall(0.08, function() {
              if (_getTime() - onClickTime > 300 && !e7.defaultPrevented) {
                if (e7.target.click) {
                  e7.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e7.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }
        self2.isDragging = self2.isGesturing = self2.isPressed = false;
        onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
        onDragEnd && wasDragging && onDragEnd(self2);
        onRelease && onRelease(self2, isDragNotClick);
      }, _onGestureStart = function _onGestureStart2(e7) {
        return e7.touches && e7.touches.length > 1 && (self2.isGesturing = true) && onGestureStart(e7, self2.isDragging);
      }, _onGestureEnd = function _onGestureEnd2() {
        return (self2.isGesturing = false) || onGestureEnd(self2);
      }, onScroll2 = function onScroll3(e7) {
        if (_ignoreCheck(e7)) {
          return;
        }
        var x2 = scrollFuncX(), y2 = scrollFuncY();
        onDelta((x2 - scrollX) * scrollSpeed, (y2 - scrollY) * scrollSpeed, 1);
        scrollX = x2;
        scrollY = y2;
        onStop && onStopDelayedCall.restart(true);
      }, _onWheel = function _onWheel2(e7) {
        if (_ignoreCheck(e7)) {
          return;
        }
        e7 = _getEvent(e7, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e7.deltaMode === 1 ? lineHeight : e7.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
        onDelta(e7.deltaX * multiplier, e7.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      }, _onMove = function _onMove2(e7) {
        if (_ignoreCheck(e7)) {
          return;
        }
        var x2 = e7.clientX, y2 = e7.clientY, dx = x2 - self2.x, dy = y2 - self2.y;
        self2.x = x2;
        self2.y = y2;
        moved = true;
        onStop && onStopDelayedCall.restart(true);
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      }, _onHover = function _onHover2(e7) {
        self2.event = e7;
        onHover(self2);
      }, _onHoverEnd = function _onHoverEnd2(e7) {
        self2.event = e7;
        onHoverEnd(self2);
      }, _onClick = function _onClick2(e7) {
        return _ignoreCheck(e7) || _getEvent(e7, preventDefault) && onClick2(self2);
      };
      onStopDelayedCall = self2._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
      self2.deltaX = self2.deltaY = 0;
      self2._vx = _getVelocityProp(0, 50, true);
      self2._vy = _getVelocityProp(0, 50, true);
      self2.scrollX = scrollFuncX;
      self2.scrollY = scrollFuncY;
      self2.isDragging = self2.isGesturing = self2.isPressed = false;
      _context(this);
      self2.enable = function(e7) {
        if (!self2.isEnabled) {
          _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll2, passive2, capture);
          type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive2, capture);
          if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
            _addListener(target, _eventTypes[0], _onPress, passive2, capture);
            _addListener(ownerDoc, _eventTypes[2], _onRelease);
            _addListener(ownerDoc, _eventTypes[3], _onRelease);
            allowClicks && _addListener(target, "click", clickCapture, true, true);
            onClick2 && _addListener(target, "click", _onClick);
            onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
            onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
            onHover && _addListener(target, _pointerType + "enter", _onHover);
            onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
            onMove && _addListener(target, _pointerType + "move", _onMove);
          }
          self2.isEnabled = true;
          e7 && e7.type && _onPress(e7);
          onEnable && onEnable(self2);
        }
        return self2;
      };
      self2.disable = function() {
        if (self2.isEnabled) {
          _observers.filter(function(o3) {
            return o3 !== self2 && _isViewport(o3.target);
          }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          if (self2.isPressed) {
            self2._vx.reset();
            self2._vy.reset();
            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          }
          _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll2, capture);
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
        var i3 = _observers.indexOf(self2);
        i3 >= 0 && _observers.splice(i3, 1);
        _normalizer === self2 && (_normalizer = 0);
      };
      _observers.push(self2);
      isNormalizer && _isViewport(target) && (_normalizer = self2);
      self2.enable(event2);
    };
    _createClass2(Observer3, [{
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
    return Observer3;
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
    return _observers.filter(function(o3) {
      return o3.vars.id === id;
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
  var _isViewport3 = function _isViewport4(e7) {
    return !!~_root2.indexOf(e7);
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
    var s3 = _ref2.s, d2 = _ref2.d2, d3 = _ref2.d, a2 = _ref2.a;
    return Math.max(0, (s3 = "scroll" + d2) && (a2 = _getProxyProp(element, s3)) ? a2() - _getBoundsFunc(element)()[d3] : _isViewport3(element) ? (_docEl2[s3] || _body2[s3]) - _getViewportDimension(d2) : element[s3] - element["offset" + d2]);
  };
  var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events2) {
    for (var i3 = 0; i3 < _autoRefresh.length; i3 += 3) {
      (!events2 || ~events2.indexOf(_autoRefresh[i3 + 1])) && func(_autoRefresh[i3], _autoRefresh[i3 + 1], _autoRefresh[i3 + 2]);
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
  var _setDefaults = function _setDefaults2(obj, defaults2) {
    for (var p2 in defaults2) {
      p2 in obj || (obj[p2] = defaults2[p2]);
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
      var i3;
      if (!direction) {
        return snap(value);
      }
      if (direction > 0) {
        value -= threshold;
        for (i3 = 0; i3 < a2.length; i3++) {
          if (a2[i3] >= value) {
            return a2[i3];
          }
        }
        return a2[i3 - 1];
      } else {
        i3 = a2.length;
        value += threshold;
        while (i3--) {
          if (a2[i3] <= value) {
            return a2[i3];
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
  var _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset2, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e7 = _doc2.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body2 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset2 + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e7._isStart = isStart;
    e7.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e7.style.cssText = css;
    e7.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e7, parent.children[0]) : parent.appendChild(e7);
    e7._offset = e7["offset" + direction.op.d2];
    _positionMarker(e7, 0, direction, isStart);
    return e7;
  };
  var _positionMarker = function _positionMarker2(marker, start2, direction, flipped) {
    var vars = {
      display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start2 + "px";
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
    for (var i3 = 0; i3 < _savedStyles.length; i3 += 5) {
      if (!media || _savedStyles[i3 + 4] && _savedStyles[i3 + 4].query === media) {
        _savedStyles[i3].style.cssText = _savedStyles[i3 + 1];
        _savedStyles[i3].getBBox && _savedStyles[i3].setAttribute("transform", _savedStyles[i3 + 2] || "");
        _savedStyles[i3 + 3].uncache = 1;
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
  var _hideAllMarkers = function _hideAllMarkers2(hide2) {
    return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
      return el.style.display = hide2 ? "none" : "block";
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
    _triggers.slice(0).forEach(function(t3) {
      return t3.refresh();
    });
    _isReverted = false;
    _triggers.forEach(function(t3) {
      if (t3._subPinOffset && t3.pin) {
        var prop = t3.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t3.pin[prop];
        t3.revert(true, 1);
        t3.adjustPinSpacing(t3.pin[prop] - original);
        t3.refresh();
      }
    });
    _clampingMax = 1;
    _hideAllMarkers(true);
    _triggers.forEach(function(t3) {
      var max2 = _maxScroll(t3.scroller, t3._dir), endClamp = t3.vars.end === "max" || t3._endClamp && t3.end > max2, startClamp = t3._startClamp && t3.start >= max2;
      (endClamp || startClamp) && t3.setPositions(startClamp ? max2 - 1 : t3.start, endClamp ? Math.max(startClamp ? max2 : t3.start + 1, max2) : t3.end, true);
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
    _triggers.forEach(function(t3) {
      return _isFunction(t3.vars.onRefresh) && t3.vars.onRefresh(t3);
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
      var i3 = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p2;
      while (i3--) {
        p2 = _propNamesToCopy[i3];
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
      var style = state.t.style, l2 = state.length, i3 = 0, p2, value;
      (state.t._gsap || gsap2.core.getCache(state.t)).uncache = 1;
      for (; i3 < l2; i3 += 2) {
        value = state[i3 + 1];
        p2 = state[i3];
        if (value) {
          style[p2] = value;
        } else if (style[p2]) {
          style.removeProperty(p2.replace(_capsExp, "-$1").toLowerCase());
        }
      }
    }
  };
  var _getState = function _getState2(element) {
    var l2 = _stateProps.length, style = element.style, state = [], i3 = 0;
    for (; i3 < l2; i3++) {
      state.push(_stateProps[i3], style[_stateProps[i3]]);
    }
    state.t = element;
    return state;
  };
  var _copyState = function _copyState2(state, override, omitOffsets) {
    var result = [], l2 = state.length, i3 = omitOffsets ? 8 : 0, p2;
    for (; i3 < l2; i3 += 2) {
      p2 = state[i3];
      result.push(p2, p2 in override ? override[p2] : state[i3 + 1]);
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
  var _reparent = function _reparent2(element, parent, top2, left2) {
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
        style.top = top2;
        style.left = left2;
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
      }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start2, end2, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset2, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
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
        _scrollers.forEach(function(o3) {
          return _isFunction(o3) && o3.target === (isViewport ? _doc2.scrollingElement || _docEl2 : scroller) && (o3.smooth = false);
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
            var progress = (scroll - start2) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap2.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
            endValue = snapFunc(naturalEnd, self2);
            _isNumber(endValue) || (endValue = naturalEnd);
            endScroll = Math.round(start2 + endValue * change);
            if (scroll <= end2 && scroll >= start2 && endScroll !== scroll) {
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
        offset2 = markerStartTrigger["offset" + direction.op.d2];
        var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
        markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset2, 0, containerAnimation);
        markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset2, 0, containerAnimation);
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
        var r3 = revert !== false || !self2.enabled, prevRefreshing = _refreshing;
        if (r3 !== self2.isReverted) {
          if (r3) {
            prevScroll = Math.max(scrollFunc(), self2.scroll.rec || 0);
            prevProgress = self2.progress;
            prevAnimProgress = animation && animation.progress();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m2) {
            return m2.style.display = r3 ? "none" : "block";
          });
          if (r3) {
            _refreshing = self2;
            self2.update(r3);
          }
          if (pin && (!pinReparent || !self2.isActive)) {
            if (r3) {
              _swapPinOut(pin, spacer, pinOriginalState);
            } else {
              _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
            }
          }
          r3 || self2.update(r3);
          _refreshing = prevRefreshing;
          self2.isReverted = r3;
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
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max2 = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01, offset3 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self2.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self2), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self2)) || 0, i3 = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
        if (markers && _isObject(position)) {
          markerStartOffset = gsap2.getProperty(markerStartTrigger, direction.p);
          markerEndOffset = gsap2.getProperty(markerEndTrigger, direction.p);
        }
        while (i3--) {
          curTrigger = _triggers[i3];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self2);
          curPin = curTrigger.pin;
          if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert(true, true);
          }
          if (curTrigger !== _triggers[i3]) {
            triggerIndex--;
            i3--;
          }
        }
        _isFunction(parsedStart) && (parsedStart = parsedStart(self2));
        parsedStart = _parseClamp(parsedStart, "start", self2);
        start2 = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max2, containerAnimation, self2._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
        _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self2));
        if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset3 = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap2.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start2) : start2) + offset3;
            parsedEndTrigger = trigger;
          }
        }
        parsedEnd = _parseClamp(parsedEnd, "end", self2);
        end2 = Math.max(start2, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max2), parsedEndTrigger, size, direction, scrollFunc() + offset3, markerEnd, markerEndTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max2, containerAnimation, self2._endClamp && "_endClamp")) || -1e-3;
        offset3 = 0;
        i3 = triggerIndex;
        while (i3--) {
          curTrigger = _triggers[i3];
          curPin = curTrigger.pin;
          if (curPin && curTrigger.start - curTrigger._pinPush <= start2 && !containerAnimation && curTrigger.end > 0) {
            cs2 = curTrigger.end - (self2._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
            if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start2 || curPin === pinnedContainer) && isNaN(parsedStart)) {
              offset3 += cs2 * (1 - curTrigger.progress);
            }
            curPin === pin && (otherPinOffset += cs2);
          }
        }
        start2 += offset3;
        end2 += offset3;
        self2._startClamp && (self2._startClamp += offset3);
        if (self2._endClamp && !_refreshingAll) {
          self2._endClamp = end2 || -1e-3;
          end2 = Math.min(end2, _maxScroll(scroller, direction));
        }
        change = end2 - start2 || (start2 -= 0.01) && 1e-3;
        if (isFirstRefresh) {
          prevProgress = gsap2.utils.clamp(0, 1, gsap2.utils.normalize(start2, end2, prevScroll));
        }
        self2._pinPush = otherPinOffset;
        if (markerStart && offset3) {
          cs2 = {};
          cs2[direction.a] = "+=" + offset3;
          pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
          gsap2.set([markerStart, markerEnd], cs2);
        }
        if (pin && !(_clampingMax && self2.end >= _maxScroll(scroller, direction))) {
          cs2 = _getComputedStyle(pin);
          isVertical = direction === _vertical;
          scroll = scrollFunc();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          if (!max2 && end2 > 1) {
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
            i3 = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            if (i3) {
              spacerState.push(direction.d, i3 + _px);
              spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i3 + _px);
            }
            _setState(spacerState);
            if (pinnedContainer) {
              _triggers.forEach(function(t3) {
                if (t3.pin === pinnedContainer && t3.vars.pinSpacing !== false) {
                  t3._subPinOffset = true;
                }
              });
            }
            useFixedPosition && scrollFunc(prevScroll);
          } else {
            i3 = _getSize(pin, direction);
            i3 && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i3 + _px);
          }
          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll - start2 : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll - start2) + _px,
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
              start2 -= bounds._pinOffset;
              end2 -= bounds._pinOffset;
            }
            bounds = bounds.parentNode;
          }
        }
        revertedPins && revertedPins.forEach(function(t3) {
          return t3.revert(false, true);
        });
        self2.start = start2;
        self2.end = end2;
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
          animation && !isToggle && animation.totalProgress(containerAnimation && start2 < -1e-3 && !prevProgress ? gsap2.utils.normalize(start2, end2, 0) : prevProgress, true);
          self2.progress = isFirstRefresh || (scroll1 - start2) / change === prevProgress ? 0 : prevProgress;
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
        return animation && animation.labels && (start2 || self2.refresh() || start2) + animation.labels[label] / animation.duration() * change || 0;
      };
      self2.getTrailing = function(name) {
        var i3 = _triggers.indexOf(self2), a2 = self2.direction > 0 ? _triggers.slice(0, i3).reverse() : _triggers.slice(i3 + 1);
        return (_isString(name) ? a2.filter(function(t3) {
          return t3.vars.preventOverlaps === name;
        }) : a2).filter(function(t3) {
          return self2.direction > 0 ? t3.end <= start2 : t3.start >= end2;
        });
      };
      self2.update = function(reset, recordVelocity, forceFake) {
        if (containerAnimation && !forceFake && !reset) {
          return;
        }
        var scroll = _refreshingAll === true ? prevScroll : self2.scroll(), p2 = reset ? 0 : (scroll - start2) / change, clipped = p2 < 0 ? 0 : p2 > 1 ? 1 : p2 || 0, prevProgress2 = self2.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = containerAnimation ? scrollFunc() : scroll;
          if (snap) {
            snap2 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }
        if (anticipatePin && pin && !_refreshing && !_startup2 && _lastScrollTime) {
          if (!clipped && start2 < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
            clipped = 1e-4;
          } else if (clipped === 1 && end2 > scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
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
          preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self2) : self2.getTrailing(preventOverlaps).forEach(function(t3) {
            return t3.endAnimation();
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
              isAtMax = !reset && clipped > prevProgress2 && end2 + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
              if (pinReparent) {
                if (!reset && (isActive || isAtMax)) {
                  var bounds = _getBounds(pin, true), _offset = scroll - start2;
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
          var n3 = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n3 + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n3);
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
          var i3 = spacerState.indexOf(direction.d) + 1;
          spacerState[i3] = parseFloat(spacerState[i3]) + amount + _px;
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
            var i3 = _triggers.length;
            while (i3--) {
              if (_triggers[i3].scroller === scroller && _triggers[i3] !== self2) {
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
        var i3 = _triggers.indexOf(self2);
        i3 >= 0 && _triggers.splice(i3, 1);
        i3 === _i && _direction > 0 && _i--;
        i3 = 0;
        _triggers.forEach(function(t3) {
          return t3.scroller === self2.scroller && (i3 = 1);
        });
        i3 || _refreshingAll || (self2.scroll.rec = 0);
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
          i3 = 0;
          _triggers.forEach(function(t3) {
            return t3.pin === pin && i3++;
          });
          i3 || (pinCache.spacer = 0);
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
          start2 || end2 || self2.refresh();
        };
        gsap2.delayedCall(0.01, self2.update);
        change = 0.01;
        start2 = end2 = 0;
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
    ScrollTrigger3.defaults = function defaults2(config) {
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
      for (var i3 = 0; i3 < _scrollers.length; i3 += 3) {
        _wheelListener(_removeListener3, _scrollers[i3], _scrollers[i3 + 1]);
        _wheelListener(_removeListener3, _scrollers[i3], _scrollers[i3 + 2]);
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
          var bodyStyle = _body2.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap2.core.Animation.prototype, bounds, i3;
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
          for (i3 = 0; i3 < _scrollers.length; i3 += 3) {
            _wheelListener(_removeListener3, _scrollers[i3], _scrollers[i3 + 1]);
            _wheelListener(_removeListener3, _scrollers[i3], _scrollers[i3 + 2]);
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
      var t3 = _getTarget(target), i3 = _scrollers.indexOf(t3), isViewport = _isViewport3(t3);
      if (~i3) {
        _scrollers.splice(i3, isViewport ? 6 : 2);
      }
      if (vars) {
        isViewport ? _proxies.unshift(_win2, vars, _body2, vars, _docEl2, vars) : _proxies.unshift(t3, vars);
      }
    };
    ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
      _triggers.forEach(function(t3) {
        return t3._ctx && t3._ctx.query === query && t3._ctx.kill(true, true);
      });
    };
    ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
      var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(), offset2 = bounds[horizontal ? _width : _height] * ratio || 0;
      return horizontal ? bounds.right - offset2 > 0 && bounds.left + offset2 < _win2.innerWidth : bounds.bottom - offset2 > 0 && bounds.top + offset2 < _win2.innerHeight;
    };
    ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
      _isString(element) && (element = _getTarget(element));
      var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset2 = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
      return horizontal ? (bounds.left + offset2) / _win2.innerWidth : (bounds.top + offset2) / _win2.innerHeight;
    };
    ScrollTrigger3.killAll = function killAll(allowListeners) {
      _triggers.slice(0).forEach(function(t3) {
        return t3.vars.id !== "ScrollSmoother" && t3.kill();
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
        var i3 = _savedStyles.indexOf(target);
        i3 >= 0 && _savedStyles.splice(i3, 5);
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
    return _triggers.filter(function(t3) {
      return t3.vars.id !== "ScrollSmoother";
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
    var a2 = _listeners[type], i3 = a2 && a2.indexOf(callback);
    i3 >= 0 && a2.splice(i3, 1);
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
  var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end2, max2) {
    current > max2 ? scrollFunc(max2) : current < 0 && scrollFunc(0);
    return end2 > max2 ? (max2 - current) / (end2 - current) : end2 < 0 ? current / (current - end2) : 1;
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
    var event2 = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event2.changedTouches ? event2.changedTouches[0] : event2).target, cache = node._gsap || gsap2.core.getCache(node), time = _getTime2(), cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
      while (node && node !== _body2 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
        node = node.parentNode;
      }
      cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
      cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
      event2.stopPropagation();
      event2._gsapAllow = true;
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
  var _captureInputs = function _captureInputs2(e7) {
    var isInput = _inputExp.test(e7.target.tagName);
    if (isInput || _inputIsFocused) {
      e7._gsapAllow = true;
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
        var offset2 = _round(self2.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset2);
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
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize2 = function onResize3() {
      updateClamps();
      if (tween.isActive() && tween.vars.scrollY > maxY) {
        scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
      }
    };
    content && gsap2.set(content, {
      y: "+=0"
    });
    vars.ignoreCheck = function(e7) {
      return _fixIOSBug && e7.type === "touchmove" && ignoreDrag(e7) || scale > 1.05 && e7.type !== "touchstart" || self2.isGesturing || e7.touches && e7.touches.length > 1;
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
            onUpdate: onResize2,
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
      ScrollTrigger2.addEventListener("refresh", onResize2);
      _addListener3(_win2, "resize", onResize2);
      if (scrollFuncY.smooth) {
        scrollFuncY.target.style.scrollBehavior = "auto";
        scrollFuncY.smooth = scrollFuncX.smooth = false;
      }
      inputObserver.enable();
    };
    vars.onDisable = function() {
      _allowNativePanning(target, true);
      _removeListener3(_win2, "resize", onResize2);
      ScrollTrigger2.removeEventListener("refresh", onResize2);
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
  function e2(e7, t3) {
    var n3 = Object.keys(e7);
    if (Object.getOwnPropertySymbols) {
      var r3 = Object.getOwnPropertySymbols(e7);
      t3 && (r3 = r3.filter(function(t4) {
        return Object.getOwnPropertyDescriptor(e7, t4).enumerable;
      })), n3.push.apply(n3, r3);
    }
    return n3;
  }
  function t2(t3) {
    for (var n3 = 1; n3 < arguments.length; n3++) {
      var r3 = null != arguments[n3] ? arguments[n3] : {};
      n3 % 2 ? e2(Object(r3), true).forEach(function(e7) {
        s2(t3, e7, r3[e7]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : e2(Object(r3)).forEach(function(e7) {
        Object.defineProperty(t3, e7, Object.getOwnPropertyDescriptor(r3, e7));
      });
    }
    return t3;
  }
  function n2(e7) {
    return n2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e8) {
      return typeof e8;
    } : function(e8) {
      return e8 && "function" == typeof Symbol && e8.constructor === Symbol && e8 !== Symbol.prototype ? "symbol" : typeof e8;
    }, n2(e7);
  }
  function r2(e7, t3) {
    if (!(e7 instanceof t3))
      throw new TypeError("Cannot call a class as a function");
  }
  function i2(e7, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e7, r3.key, r3);
    }
  }
  function o2(e7, t3, n3) {
    return t3 && i2(e7.prototype, t3), n3 && i2(e7, n3), Object.defineProperty(e7, "prototype", { writable: false }), e7;
  }
  function s2(e7, t3, n3) {
    return t3 in e7 ? Object.defineProperty(e7, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e7[t3] = n3, e7;
  }
  function a(e7, t3) {
    if ("function" != typeof t3 && null !== t3)
      throw new TypeError("Super expression must either be null or a function");
    e7.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t3 && l(e7, t3);
  }
  function u(e7) {
    return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e8) {
      return e8.__proto__ || Object.getPrototypeOf(e8);
    }, u(e7);
  }
  function l(e7, t3) {
    return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e8, t4) {
      return e8.__proto__ = t4, e8;
    }, l(e7, t3);
  }
  function c(e7, t3) {
    if (null == e7)
      return {};
    var n3, r3, i3 = function(e8, t4) {
      if (null == e8)
        return {};
      var n4, r4, i4 = {}, o4 = Object.keys(e8);
      for (r4 = 0; r4 < o4.length; r4++)
        n4 = o4[r4], t4.indexOf(n4) >= 0 || (i4[n4] = e8[n4]);
      return i4;
    }(e7, t3);
    if (Object.getOwnPropertySymbols) {
      var o3 = Object.getOwnPropertySymbols(e7);
      for (r3 = 0; r3 < o3.length; r3++)
        n3 = o3[r3], t3.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e7, n3) && (i3[n3] = e7[n3]);
    }
    return i3;
  }
  function d(e7, t3) {
    if (t3 && ("object" == typeof t3 || "function" == typeof t3))
      return t3;
    if (void 0 !== t3)
      throw new TypeError("Derived constructors may only return object or undefined");
    return function(e8) {
      if (void 0 === e8)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e8;
    }(e7);
  }
  function h(e7) {
    var t3 = function() {
      if ("undefined" == typeof Reflect || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if ("function" == typeof Proxy)
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (e8) {
        return false;
      }
    }();
    return function() {
      var n3, r3 = u(e7);
      if (t3) {
        var i3 = u(this).constructor;
        n3 = Reflect.construct(r3, arguments, i3);
      } else
        n3 = r3.apply(this, arguments);
      return d(this, n3);
    };
  }
  function f(e7, t3) {
    return function(e8) {
      if (Array.isArray(e8))
        return e8;
    }(e7) || function(e8, t4) {
      var n3 = null == e8 ? null : "undefined" != typeof Symbol && e8[Symbol.iterator] || e8["@@iterator"];
      if (null == n3)
        return;
      var r3, i3, o3 = [], s3 = true, a2 = false;
      try {
        for (n3 = n3.call(e8); !(s3 = (r3 = n3.next()).done) && (o3.push(r3.value), !t4 || o3.length !== t4); s3 = true)
          ;
      } catch (e9) {
        a2 = true, i3 = e9;
      } finally {
        try {
          s3 || null == n3.return || n3.return();
        } finally {
          if (a2)
            throw i3;
        }
      }
      return o3;
    }(e7, t3) || _(e7, t3) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function p(e7) {
    return function(e8) {
      if (Array.isArray(e8))
        return g(e8);
    }(e7) || function(e8) {
      if ("undefined" != typeof Symbol && null != e8[Symbol.iterator] || null != e8["@@iterator"])
        return Array.from(e8);
    }(e7) || _(e7) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _(e7, t3) {
    if (e7) {
      if ("string" == typeof e7)
        return g(e7, t3);
      var n3 = Object.prototype.toString.call(e7).slice(8, -1);
      return "Object" === n3 && e7.constructor && (n3 = e7.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e7) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? g(e7, t3) : void 0;
    }
  }
  function g(e7, t3) {
    (null == t3 || t3 > e7.length) && (t3 = e7.length);
    for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++)
      r3[n3] = e7[n3];
    return r3;
  }
  function v(e7, t3) {
    var n3 = "undefined" != typeof Symbol && e7[Symbol.iterator] || e7["@@iterator"];
    if (!n3) {
      if (Array.isArray(e7) || (n3 = _(e7)) || t3 && e7 && "number" == typeof e7.length) {
        n3 && (e7 = n3);
        var r3 = 0, i3 = function() {
        };
        return { s: i3, n: function() {
          return r3 >= e7.length ? { done: true } : { done: false, value: e7[r3++] };
        }, e: function(e8) {
          throw e8;
        }, f: i3 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o3, s3 = true, a2 = false;
    return { s: function() {
      n3 = n3.call(e7);
    }, n: function() {
      var e8 = n3.next();
      return s3 = e8.done, e8;
    }, e: function(e8) {
      a2 = true, o3 = e8;
    }, f: function() {
      try {
        s3 || null == n3.return || n3.return();
      } finally {
        if (a2)
          throw o3;
      }
    } };
  }
  var m = { DEBUG: false, LIB_VERSION: "1.105.8" };
  var y = Array.isArray;
  var b = Object.prototype;
  var k = b.hasOwnProperty;
  var w = b.toString;
  var S = y || function(e7) {
    return "[object Array]" === w.call(e7);
  };
  var F = function(e7) {
    return "[object Uint8Array]" === w.call(e7);
  };
  var P = function(e7) {
    return "function" == typeof e7;
  };
  var R = function(e7) {
    return e7 === Object(e7) && !S(e7);
  };
  var I = function(e7) {
    return void 0 === e7;
  };
  var E = function(e7) {
    return "[object String]" == w.call(e7);
  };
  var x = function(e7) {
    return null === e7;
  };
  var C = function(e7) {
    return "[object Number]" == w.call(e7);
  };
  var O = function(e7) {
    return "[object Boolean]" === w.call(e7);
  };
  var T = "undefined" != typeof window ? window : void 0;
  var $ = "undefined" != typeof globalThis ? globalThis : T;
  var A = Array.prototype;
  var M = A.forEach;
  var q = A.indexOf;
  var D = null == $ ? void 0 : $.navigator;
  var L = null == $ ? void 0 : $.document;
  var N = null == $ ? void 0 : $.location;
  var B = null == $ ? void 0 : $.fetch;
  var j = null == $ ? void 0 : $.XMLHttpRequest;
  var H = null == D ? void 0 : D.userAgent;
  var U = null != T ? T : {};
  var W = "[PostHog.js]";
  var V = { _log: function(e7) {
    if (T && (m.DEBUG || U.POSTHOG_DEBUG) && !I(T.console) && T.console) {
      for (var t3 = ("__rrweb_original__" in T.console[e7]) ? T.console[e7].__rrweb_original__ : T.console[e7], n3 = arguments.length, r3 = new Array(n3 > 1 ? n3 - 1 : 0), i3 = 1; i3 < n3; i3++)
        r3[i3 - 1] = arguments[i3];
      t3.apply(void 0, [W].concat(r3));
    }
  }, info: function() {
    for (var e7 = arguments.length, t3 = new Array(e7), n3 = 0; n3 < e7; n3++)
      t3[n3] = arguments[n3];
    V._log.apply(V, ["log"].concat(t3));
  }, warn: function() {
    for (var e7 = arguments.length, t3 = new Array(e7), n3 = 0; n3 < e7; n3++)
      t3[n3] = arguments[n3];
    V._log.apply(V, ["warn"].concat(t3));
  }, error: function() {
    for (var e7 = arguments.length, t3 = new Array(e7), n3 = 0; n3 < e7; n3++)
      t3[n3] = arguments[n3];
    V._log.apply(V, ["error"].concat(t3));
  }, critical: function() {
    for (var e7, t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++)
      n3[r3] = arguments[r3];
    (e7 = console).error.apply(e7, [W].concat(n3));
  }, uninitializedWarning: function(e7) {
    V.error("You must initialize PostHog before calling ".concat(e7));
  } };
  var G = {};
  var z = function(e7) {
    return e7.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
  function Q(e7, t3, n3) {
    if (S(e7)) {
      if (M && e7.forEach === M)
        e7.forEach(t3, n3);
      else if ("length" in e7 && e7.length === +e7.length) {
        for (var r3 = 0, i3 = e7.length; r3 < i3; r3++)
          if (r3 in e7 && t3.call(n3, e7[r3], r3) === G)
            return;
      }
    }
  }
  function Y(e7, t3, n3) {
    if (!x(e7) && !I(e7)) {
      if (S(e7))
        return Q(e7, t3, n3);
      for (var r3 in e7)
        if (k.call(e7, r3) && t3.call(n3, e7[r3], r3) === G)
          return;
    }
  }
  var J = function(e7) {
    for (var t3 = arguments.length, n3 = new Array(t3 > 1 ? t3 - 1 : 0), r3 = 1; r3 < t3; r3++)
      n3[r3 - 1] = arguments[r3];
    return Q(n3, function(t4) {
      for (var n4 in t4)
        void 0 !== t4[n4] && (e7[n4] = t4[n4]);
    }), e7;
  };
  function K(e7, t3) {
    return -1 !== e7.indexOf(t3);
  }
  function X(e7) {
    for (var t3 = Object.keys(e7), n3 = t3.length, r3 = new Array(n3); n3--; )
      r3[n3] = [t3[n3], e7[t3[n3]]];
    return r3;
  }
  var Z = function() {
    return Date.now = Date.now || function() {
      return +/* @__PURE__ */ new Date();
    }, Date.now();
  };
  var ee = function(e7) {
    try {
      return e7();
    } catch (e8) {
      return;
    }
  };
  var te = function(e7) {
    return function() {
      try {
        for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++)
          n3[r3] = arguments[r3];
        return e7.apply(this, n3);
      } catch (e8) {
        V.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), V.critical(e8);
      }
    };
  };
  var ne = function(e7) {
    var t3 = {};
    return Y(e7, function(e8, n3) {
      E(e8) && e8.length > 0 && (t3[n3] = e8);
    }), t3;
  };
  function re(e7, t3) {
    return n3 = e7, r3 = function(e8) {
      return E(e8) && !x(t3) ? e8.slice(0, t3) : e8;
    }, i3 = /* @__PURE__ */ new Set(), function e8(t4, n4) {
      return t4 !== Object(t4) ? r3 ? r3(t4, n4) : t4 : i3.has(t4) ? void 0 : (i3.add(t4), S(t4) ? (o3 = [], Q(t4, function(t5) {
        o3.push(e8(t5));
      })) : (o3 = {}, Y(t4, function(t5, n5) {
        i3.has(t5) || (o3[n5] = e8(t5, n5));
      })), o3);
      var o3;
    }(n3);
    var n3, r3, i3;
  }
  function ie(e7) {
    var t3, n3, r3, i3, o3, s3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a2 = 0, u2 = 0, l2 = "", c2 = [];
    if (!e7)
      return e7;
    e7 = oe(e7);
    do {
      t3 = (o3 = e7.charCodeAt(a2++) << 16 | e7.charCodeAt(a2++) << 8 | e7.charCodeAt(a2++)) >> 18 & 63, n3 = o3 >> 12 & 63, r3 = o3 >> 6 & 63, i3 = 63 & o3, c2[u2++] = s3.charAt(t3) + s3.charAt(n3) + s3.charAt(r3) + s3.charAt(i3);
    } while (a2 < e7.length);
    switch (l2 = c2.join(""), e7.length % 3) {
      case 1:
        l2 = l2.slice(0, -2) + "==";
        break;
      case 2:
        l2 = l2.slice(0, -1) + "=";
    }
    return l2;
  }
  var oe = function(e7) {
    var t3, n3, r3, i3, o3 = "";
    for (t3 = n3 = 0, r3 = (e7 = (e7 + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, i3 = 0; i3 < r3; i3++) {
      var s3 = e7.charCodeAt(i3), a2 = null;
      s3 < 128 ? n3++ : a2 = s3 > 127 && s3 < 2048 ? String.fromCharCode(s3 >> 6 | 192, 63 & s3 | 128) : String.fromCharCode(s3 >> 12 | 224, s3 >> 6 & 63 | 128, 63 & s3 | 128), x(a2) || (n3 > t3 && (o3 += e7.substring(t3, n3)), o3 += a2, t3 = n3 = i3 + 1);
    }
    return n3 > t3 && (o3 += e7.substring(t3, e7.length)), o3;
  };
  var se = function() {
    function e7(t3) {
      return t3 && (t3.preventDefault = e7.preventDefault, t3.stopPropagation = e7.stopPropagation), t3;
    }
    return e7.preventDefault = function() {
      this.returnValue = false;
    }, e7.stopPropagation = function() {
      this.cancelBubble = true;
    }, function(t3, n3, r3, i3, o3) {
      if (t3)
        if (t3.addEventListener && !i3)
          t3.addEventListener(n3, r3, !!o3);
        else {
          var s3 = "on" + n3, a2 = t3[s3];
          t3[s3] = function(t4, n4, r4) {
            return function(i4) {
              if (i4 = i4 || e7(null == T ? void 0 : T.event)) {
                var o4, s4 = true;
                P(r4) && (o4 = r4(i4));
                var a3 = n4.call(t4, i4);
                return false !== o4 && false !== a3 || (s4 = false), s4;
              }
            };
          }(t3, r3, a2);
        }
      else
        V.error("No valid element provided to register_event");
    };
  }();
  function ae(e7, t3) {
    var n3 = function() {
      if (!L)
        return t3("document not found");
      var n4 = L.createElement("script");
      n4.type = "text/javascript", n4.src = e7, n4.onload = function(e8) {
        return t3(void 0, e8);
      }, n4.onerror = function(e8) {
        return t3(e8);
      };
      var r3, i3 = L.querySelectorAll("body > script");
      i3.length > 0 ? null === (r3 = i3[0].parentNode) || void 0 === r3 || r3.insertBefore(n4, i3[0]) : L.body.appendChild(n4);
    };
    null != L && L.body ? n3() : null == L || L.addEventListener("DOMContentLoaded", n3);
  }
  function ue(e7) {
    return e7 ? z(e7).split(/\s+/) : [];
  }
  function le(e7) {
    var t3 = "";
    switch (n2(e7.className)) {
      case "string":
        t3 = e7.className;
        break;
      case "object":
        t3 = ("baseVal" in e7.className ? e7.className.baseVal : null) || e7.getAttribute("class") || "";
        break;
      default:
        t3 = "";
    }
    return ue(t3);
  }
  function ce(e7) {
    var t3 = "";
    return ve(e7) && !me(e7) && e7.childNodes && e7.childNodes.length && Y(e7.childNodes, function(e8) {
      fe(e8) && e8.textContent && (t3 += z(e8.textContent).split(/(\s+)/).filter(ye).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255));
    }), z(t3);
  }
  function de(e7) {
    return !!e7 && 1 === e7.nodeType;
  }
  function he(e7, t3) {
    return !!e7 && !!e7.tagName && e7.tagName.toLowerCase() === t3.toLowerCase();
  }
  function fe(e7) {
    return !!e7 && 3 === e7.nodeType;
  }
  function pe(e7) {
    return !!e7 && 11 === e7.nodeType;
  }
  var _e = ["a", "button", "form", "input", "select", "textarea", "label"];
  function ge(e7, t3) {
    var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    if (!T || !e7 || he(e7, "html") || !de(e7))
      return false;
    if (null != r3 && r3.url_allowlist) {
      var i3 = T.location.href, o3 = r3.url_allowlist;
      if (o3 && !o3.some(function(e8) {
        return i3.match(e8);
      }))
        return false;
    }
    if (null != r3 && r3.dom_event_allowlist) {
      var s3 = r3.dom_event_allowlist;
      if (s3 && !s3.some(function(e8) {
        return t3.type === e8;
      }))
        return false;
    }
    for (var a2 = false, u2 = [e7], l2 = true, c2 = e7; c2.parentNode && !he(c2, "body"); )
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
    if (!function(e8, t4) {
      var r4 = null == t4 ? void 0 : t4.element_allowlist;
      if (I(r4))
        return true;
      var i4, o4 = v(e8);
      try {
        var s4 = function() {
          var e9 = i4.value;
          if (r4.some(function(t5) {
            return e9.tagName.toLowerCase() === t5;
          }))
            return { v: true };
        };
        for (o4.s(); !(i4 = o4.n()).done; ) {
          var a3 = s4();
          if ("object" === n2(a3))
            return a3.v;
        }
      } catch (e9) {
        o4.e(e9);
      } finally {
        o4.f();
      }
      return false;
    }(u2, r3))
      return false;
    if (!function(e8, t4) {
      var r4 = null == t4 ? void 0 : t4.css_selector_allowlist;
      if (I(r4))
        return true;
      var i4, o4 = v(e8);
      try {
        var s4 = function() {
          var e9 = i4.value;
          if (r4.some(function(t5) {
            return e9.matches(t5);
          }))
            return { v: true };
        };
        for (o4.s(); !(i4 = o4.n()).done; ) {
          var a3 = s4();
          if ("object" === n2(a3))
            return a3.v;
        }
      } catch (e9) {
        o4.e(e9);
      } finally {
        o4.f();
      }
      return false;
    }(u2, r3))
      return false;
    var h2 = T.getComputedStyle(e7);
    if (h2 && "pointer" === h2.getPropertyValue("cursor") && "click" === t3.type)
      return true;
    var f2 = e7.tagName.toLowerCase();
    switch (f2) {
      case "html":
        return false;
      case "form":
        return "submit" === t3.type;
      case "input":
      case "select":
      case "textarea":
        return "change" === t3.type || "click" === t3.type;
      default:
        return a2 ? "click" === t3.type : "click" === t3.type && (_e.indexOf(f2) > -1 || "true" === e7.getAttribute("contenteditable"));
    }
  }
  function ve(e7) {
    for (var t3 = e7; t3.parentNode && !he(t3, "body"); t3 = t3.parentNode) {
      var n3 = le(t3);
      if (K(n3, "ph-sensitive") || K(n3, "ph-no-capture"))
        return false;
    }
    if (K(le(e7), "ph-include"))
      return true;
    var r3 = e7.type || "";
    if (E(r3))
      switch (r3.toLowerCase()) {
        case "hidden":
        case "password":
          return false;
      }
    var i3 = e7.name || e7.id || "";
    if (E(i3)) {
      if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i3.replace(/[^a-zA-Z0-9]/g, "")))
        return false;
    }
    return true;
  }
  function me(e7) {
    return !!(he(e7, "input") && !["button", "checkbox", "submit", "reset"].includes(e7.type) || he(e7, "select") || he(e7, "textarea") || "true" === e7.getAttribute("contenteditable"));
  }
  function ye(e7) {
    if (x(e7) || I(e7))
      return false;
    if (E(e7)) {
      e7 = z(e7);
      if (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((e7 || "").replace(/[- ]/g, "")))
        return false;
      if (/(^\d{3}-?\d{2}-?\d{4}$)/.test(e7))
        return false;
    }
    return true;
  }
  function be(e7) {
    var t3 = ce(e7);
    return ye(t3 = "".concat(t3, " ").concat(ke(e7)).trim()) ? t3 : "";
  }
  function ke(e7) {
    var t3 = "";
    return e7 && e7.childNodes && e7.childNodes.length && Y(e7.childNodes, function(e8) {
      var n3;
      if (e8 && "span" === (null === (n3 = e8.tagName) || void 0 === n3 ? void 0 : n3.toLowerCase()))
        try {
          var r3 = ce(e8);
          t3 = "".concat(t3, " ").concat(r3).trim(), e8.childNodes && e8.childNodes.length && (t3 = "".concat(t3, " ").concat(ke(e8)).trim());
        } catch (e9) {
          V.error(e9);
        }
    }), t3;
  }
  function we(e7) {
    return function(e8) {
      var n3 = e8.map(function(e9) {
        var n4, r3, i3 = "";
        if (e9.tag_name && (i3 += e9.tag_name), e9.attr_class) {
          e9.attr_class.sort();
          var o3, s3 = v(e9.attr_class);
          try {
            for (s3.s(); !(o3 = s3.n()).done; ) {
              var a2 = o3.value;
              i3 += ".".concat(a2.replace(/"/g, ""));
            }
          } catch (e10) {
            s3.e(e10);
          } finally {
            s3.f();
          }
        }
        var u2 = t2(t2(t2(t2({}, e9.text ? { text: e9.text } : {}), {}, { "nth-child": null !== (n4 = e9.nth_child) && void 0 !== n4 ? n4 : 0, "nth-of-type": null !== (r3 = e9.nth_of_type) && void 0 !== r3 ? r3 : 0 }, e9.href ? { href: e9.href } : {}), e9.attr_id ? { attr_id: e9.attr_id } : {}), e9.attributes), l2 = {};
        return X(u2).sort(function(e10, t3) {
          var n5 = f(e10, 1)[0], r4 = f(t3, 1)[0];
          return n5.localeCompare(r4);
        }).forEach(function(e10) {
          var t3 = f(e10, 2), n5 = t3[0], r4 = t3[1];
          return l2[Se(n5.toString())] = Se(r4.toString());
        }), i3 += ":", i3 += X(u2).map(function(e10) {
          var t3 = f(e10, 2), n5 = t3[0], r4 = t3[1];
          return "".concat(n5, '="').concat(r4, '"');
        }).join("");
      });
      return n3.join(";");
    }(function(e8) {
      return e8.map(function(e9) {
        var t3, n3, r3 = { text: null === (t3 = e9.$el_text) || void 0 === t3 ? void 0 : t3.slice(0, 400), tag_name: e9.tag_name, href: null === (n3 = e9.attr__href) || void 0 === n3 ? void 0 : n3.slice(0, 2048), attr_class: Fe(e9), attr_id: e9.attr__id, nth_child: e9.nth_child, nth_of_type: e9.nth_of_type, attributes: {} };
        return X(e9).filter(function(e10) {
          return 0 === f(e10, 1)[0].indexOf("attr__");
        }).forEach(function(e10) {
          var t4 = f(e10, 2), n4 = t4[0], i3 = t4[1];
          return r3.attributes[n4] = i3;
        }), r3;
      });
    }(e7));
  }
  function Se(e7) {
    return e7.replace(/"|\\"/g, '\\"');
  }
  function Fe(e7) {
    var t3 = e7.attr__class;
    return t3 ? S(t3) ? t3 : ue(t3) : void 0;
  }
  var Pe = function() {
    function e7(t3) {
      r2(this, e7), this.clicks = [], this.enabled = t3;
    }
    return o2(e7, [{ key: "isRageClick", value: function(e8, t3, n3) {
      if (!this.enabled)
        return false;
      var r3 = this.clicks[this.clicks.length - 1];
      if (r3 && Math.abs(e8 - r3.x) + Math.abs(t3 - r3.y) < 30 && n3 - r3.timestamp < 1e3) {
        if (this.clicks.push({ x: e8, y: t3, timestamp: n3 }), 3 === this.clicks.length)
          return true;
      } else
        this.clicks = [{ x: e8, y: t3, timestamp: n3 }];
      return false;
    } }]), e7;
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
  function ze(e7, t3) {
    return t3.length > e7 ? t3.slice(0, e7) + "..." : t3;
  }
  var Qe = { _initializedTokens: [], _isDisabledServerSide: null, _isAutocaptureEnabled: false, _setIsAutocaptureEnabled: function(e7) {
    var t3, n3 = x(this._isDisabledServerSide) ? !(null === (t3 = e7.persistence) || void 0 === t3 || !t3.props[xe]) : this._isDisabledServerSide, r3 = !!e7.config.autocapture;
    this._isAutocaptureEnabled = r3 && !n3;
  }, _previousElementSibling: function(e7) {
    if (e7.previousElementSibling)
      return e7.previousElementSibling;
    var t3 = e7;
    do {
      t3 = t3.previousSibling;
    } while (t3 && !de(t3));
    return t3;
  }, _getAugmentPropertiesFromElement: function(e7) {
    if (!ve(e7))
      return {};
    var t3 = {};
    return Y(e7.attributes, function(e8) {
      if (0 === e8.name.indexOf("data-ph-capture-attribute")) {
        var n3 = e8.name.replace("data-ph-capture-attribute-", ""), r3 = e8.value;
        n3 && r3 && ye(r3) && (t3[n3] = r3);
      }
    }), t3;
  }, _getPropertiesFromElement: function(e7, t3, n3) {
    var r3, i3 = e7.tagName.toLowerCase(), o3 = { tag_name: i3 };
    _e.indexOf(i3) > -1 && !n3 && ("a" === i3.toLowerCase() || "button" === i3.toLowerCase() ? o3.$el_text = ze(1024, be(e7)) : o3.$el_text = ze(1024, ce(e7)));
    var s3 = le(e7);
    s3.length > 0 && (o3.classes = s3.filter(function(e8) {
      return "" !== e8;
    }));
    var a2 = null === (r3 = this.config) || void 0 === r3 ? void 0 : r3.element_attribute_ignorelist;
    Y(e7.attributes, function(n4) {
      var r4;
      if ((!me(e7) || -1 !== ["name", "id", "class"].indexOf(n4.name)) && ((null == a2 || !a2.includes(n4.name)) && !t3 && ye(n4.value) && (r4 = n4.name, !E(r4) || "_ngcontent" !== r4.substring(0, 10) && "_nghost" !== r4.substring(0, 7)))) {
        var i4 = n4.value;
        "class" === n4.name && (i4 = ue(i4).join(" ")), o3["attr__" + n4.name] = ze(1024, i4);
      }
    });
    for (var u2 = 1, l2 = 1, c2 = e7; c2 = this._previousElementSibling(c2); )
      u2++, c2.tagName === e7.tagName && l2++;
    return o3.nth_child = u2, o3.nth_of_type = l2, o3;
  }, _getDefaultProperties: function(e7) {
    return { $event_type: e7, $ce_version: 1 };
  }, _extractCustomPropertyValue: function(e7) {
    var t3 = [];
    return Y(null == L ? void 0 : L.querySelectorAll(e7.css_selector), function(e8) {
      var n3;
      ["input", "select"].indexOf(e8.tagName.toLowerCase()) > -1 ? n3 = e8.value : e8.textContent && (n3 = e8.textContent), ye(n3) && t3.push(n3);
    }), t3.join(", ");
  }, _getCustomProperties: function(e7) {
    var t3 = this, n3 = {};
    return Y(this._customProperties, function(r3) {
      Y(r3.event_selectors, function(i3) {
        Y(null == L ? void 0 : L.querySelectorAll(i3), function(i4) {
          K(e7, i4) && ve(i4) && (n3[r3.name] = t3._extractCustomPropertyValue(r3));
        });
      });
    }), n3;
  }, _getEventTarget: function(e7) {
    return I(e7.target) ? e7.srcElement || null : null !== (t3 = e7.target) && void 0 !== t3 && t3.shadowRoot ? e7.composedPath()[0] || null : e7.target || null;
    var t3;
  }, _captureEvent: function(e7, t3) {
    var n3, r3 = this, i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "$autocapture", o3 = this._getEventTarget(e7);
    (fe(o3) && (o3 = o3.parentNode || null), "$autocapture" === i3 && "click" === e7.type && e7 instanceof MouseEvent) && (null !== (n3 = this.rageclicks) && void 0 !== n3 && n3.isRageClick(e7.clientX, e7.clientY, (/* @__PURE__ */ new Date()).getTime()) && this._captureEvent(e7, t3, "$rageclick"));
    if (o3 && ge(o3, e7, this.config)) {
      for (var s3, a2, u2 = [o3], l2 = o3; l2.parentNode && !he(l2, "body"); )
        pe(l2.parentNode) ? (u2.push(l2.parentNode.host), l2 = l2.parentNode.host) : (u2.push(l2.parentNode), l2 = l2.parentNode);
      var c2, d2 = [], h2 = {}, f2 = false;
      if (Y(u2, function(e8) {
        var n4 = ve(e8);
        "a" === e8.tagName.toLowerCase() && (c2 = e8.getAttribute("href"), c2 = n4 && ye(c2) && c2), K(le(e8), "ph-no-capture") && (f2 = true), d2.push(r3._getPropertiesFromElement(e8, t3.config.mask_all_element_attributes, t3.config.mask_all_text));
        var i4 = r3._getAugmentPropertiesFromElement(e8);
        J(h2, i4);
      }), t3.config.mask_all_text || ("a" === o3.tagName.toLowerCase() || "button" === o3.tagName.toLowerCase() ? d2[0].$el_text = be(o3) : d2[0].$el_text = ce(o3)), c2 && (d2[0].attr__href = c2), f2)
        return false;
      var p2 = J(this._getDefaultProperties(e7.type), t3.elementsChainAsString ? { $elements_chain: we(d2) } : { $elements: d2 }, null !== (s3 = d2[0]) && void 0 !== s3 && s3.$el_text ? { $el_text: null === (a2 = d2[0]) || void 0 === a2 ? void 0 : a2.$el_text } : {}, this._getCustomProperties(u2), h2);
      return t3.capture(i3, p2), true;
    }
  }, _navigate: function(e7) {
    T && (T.location.href = e7);
  }, _addDomEventHandlers: function(e7) {
    var t3 = this;
    if (T && L) {
      var n3 = function(n4) {
        n4 = n4 || (null == T ? void 0 : T.event), t3._captureEvent(n4, e7);
      };
      se(L, "submit", n3, false, true), se(L, "change", n3, false, true), se(L, "click", n3, false, true);
    }
  }, _customProperties: [], rageclicks: null, config: void 0, init: function(e7) {
    var t3;
    O(e7.__autocapture) || (this.config = e7.__autocapture), null !== (t3 = this.config) && void 0 !== t3 && t3.url_allowlist && (this.config.url_allowlist = this.config.url_allowlist.map(function(e8) {
      return new RegExp(e8);
    })), this.rageclicks = new Pe(e7.config.rageclick);
  }, afterDecideResponse: function(e7, t3) {
    var n3 = t3.config.token;
    this._initializedTokens.indexOf(n3) > -1 ? V.info('autocapture already initialized for token "' + n3 + '"') : (t3.persistence && t3.persistence.register(s2({}, xe, !!e7.autocapture_opt_out)), this._isDisabledServerSide = !!e7.autocapture_opt_out, this._setIsAutocaptureEnabled(t3), this._initializedTokens.push(n3), e7 && e7.config && e7.config.enable_collect_everything && this._isAutocaptureEnabled ? (e7.custom_properties && (this._customProperties = e7.custom_properties), this._addDomEventHandlers(t3)) : t3.__autocapture = false);
  }, enabledForProject: function(e7, t3, n3) {
    if (!e7)
      return true;
    t3 = I(t3) ? 10 : t3, n3 = I(n3) ? 10 : n3;
    for (var r3 = 0, i3 = 0; i3 < e7.length; i3++)
      r3 += e7.charCodeAt(i3);
    return r3 % t3 < n3;
  }, isBrowserSupported: function() {
    return P(null == L ? void 0 : L.querySelectorAll);
  } };
  !function(e7) {
    for (var t3 in e7)
      P(e7[t3]) && (e7[t3] = e7[t3].bind(e7));
  }(Qe), function(e7) {
    for (var t3 in e7)
      P(e7[t3]) && (e7[t3] = te(e7[t3]));
  }(Qe);
  var Ye = "$active_feature_flags";
  var Je = "$override_feature_flags";
  var Ke = "$feature_flag_payloads";
  var Xe = function(e7) {
    var t3, n3 = {}, r3 = v(X(e7 || {}));
    try {
      for (r3.s(); !(t3 = r3.n()).done; ) {
        var i3 = f(t3.value, 2), o3 = i3[0], s3 = i3[1];
        s3 && (n3[o3] = s3);
      }
    } catch (e8) {
      r3.e(e8);
    } finally {
      r3.f();
    }
    return n3;
  };
  var Ze = function() {
    function e7(t3) {
      r2(this, e7), this.instance = t3, this._override_warning = false, this.featureFlagEventHandlers = [], this.reloadFeatureFlagsQueued = false, this.reloadFeatureFlagsInAction = false;
    }
    return o2(e7, [{ key: "getFlags", value: function() {
      return Object.keys(this.getFlagVariants());
    } }, { key: "getFlagVariants", value: function() {
      var e8 = this.instance.get_property(De), t3 = this.instance.get_property(Je);
      if (!t3)
        return e8 || {};
      for (var n3 = J({}, e8), r3 = Object.keys(t3), i3 = 0; i3 < r3.length; i3++)
        false === t3[r3[i3]] ? delete n3[r3[i3]] : n3[r3[i3]] = t3[r3[i3]];
      return this._override_warning || (V.warn(" Overriding feature flags!", { enabledFlags: e8, overriddenFlags: t3, finalFlags: n3 }), this._override_warning = true), n3;
    } }, { key: "getFlagPayloads", value: function() {
      return this.instance.get_property(Ke) || {};
    } }, { key: "reloadFeatureFlags", value: function() {
      this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = true, this._startReloadTimer());
    } }, { key: "setAnonymousDistinctId", value: function(e8) {
      this.$anon_distinct_id = e8;
    } }, { key: "setReloadingPaused", value: function(e8) {
      this.reloadFeatureFlagsInAction = e8;
    } }, { key: "resetRequestQueue", value: function() {
      this.reloadFeatureFlagsQueued = false;
    } }, { key: "_startReloadTimer", value: function() {
      var e8 = this;
      this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout(function() {
        !e8.reloadFeatureFlagsInAction && e8.reloadFeatureFlagsQueued && (e8.reloadFeatureFlagsQueued = false, e8._reloadFeatureFlagsRequest());
      }, 5);
    } }, { key: "_reloadFeatureFlagsRequest", value: function() {
      var e8 = this;
      if (!this.instance.config.advanced_disable_feature_flags) {
        this.setReloadingPaused(true);
        var t3 = this.instance.config.token, n3 = this.instance.get_property(Ne), r3 = this.instance.get_property(Be), i3 = ie(JSON.stringify({ token: t3, distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups(), $anon_distinct_id: this.$anon_distinct_id, person_properties: n3, group_properties: r3, disable_flags: this.instance.config.advanced_disable_feature_flags || void 0 }));
        this.instance._send_request(this.instance.requestRouter.endpointFor("api", "/decide/?v=3"), { data: i3 }, { method: "POST" }, this.instance._prepare_callback(function(t4) {
          e8.$anon_distinct_id = void 0, e8.receivedFeatureFlags(t4), e8.setReloadingPaused(false), e8._startReloadTimer();
        }));
      }
    } }, { key: "getFeatureFlag", value: function(e8) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) {
        var n3, r3 = this.getFlagVariants()[e8], i3 = "".concat(r3), o3 = this.instance.get_property(He) || {};
        if (t3.send_event || !("send_event" in t3)) {
          if (!(e8 in o3) || !o3[e8].includes(i3))
            S(o3[e8]) ? o3[e8].push(i3) : o3[e8] = [i3], null === (n3 = this.instance.persistence) || void 0 === n3 || n3.register(s2({}, He, o3)), this.instance.capture("$feature_flag_called", { $feature_flag: e8, $feature_flag_response: r3 });
        }
        return r3;
      }
      V.warn('getFeatureFlag for key "' + e8 + `" failed. Feature flags didn't load in time.`);
    } }, { key: "getFeatureFlagPayload", value: function(e8) {
      return this.getFlagPayloads()[e8];
    } }, { key: "isFeatureEnabled", value: function(e8) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0)
        return !!this.getFeatureFlag(e8, t3);
      V.warn('isFeatureEnabled for key "' + e8 + `" failed. Feature flags didn't load in time.`);
    } }, { key: "addFeatureFlagsHandler", value: function(e8) {
      this.featureFlagEventHandlers.push(e8);
    } }, { key: "removeFeatureFlagsHandler", value: function(e8) {
      this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(function(t3) {
        return t3 !== e8;
      });
    } }, { key: "receivedFeatureFlags", value: function(e8) {
      if (this.instance.persistence) {
        this.instance.decideEndpointWasHit = true;
        var n3 = this.getFlagVariants(), r3 = this.getFlagPayloads();
        !function(e9, n4) {
          var r4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o3 = e9.featureFlags, a2 = e9.featureFlagPayloads;
          if (o3)
            if (S(o3)) {
              var u2, l2 = {};
              if (o3)
                for (var c2 = 0; c2 < o3.length; c2++)
                  l2[o3[c2]] = true;
              n4 && n4.register((s2(u2 = {}, Ye, o3), s2(u2, De, l2), u2));
            } else {
              var d2, h2 = o3, f2 = a2;
              e9.errorsWhileComputingFlags && (h2 = t2(t2({}, r4), h2), f2 = t2(t2({}, i3), f2)), n4 && n4.register((s2(d2 = {}, Ye, Object.keys(Xe(h2))), s2(d2, De, h2 || {}), s2(d2, Ke, f2 || {}), d2));
            }
        }(e8, this.instance.persistence, n3, r3), this._fireFeatureFlagsCallbacks();
      }
    } }, { key: "override", value: function(e8) {
      if (!this.instance.__loaded || !this.instance.persistence)
        return V.uninitializedWarning("posthog.feature_flags.override");
      if (this._override_warning = false, false === e8)
        this.instance.persistence.unregister(Je);
      else if (S(e8)) {
        for (var t3 = {}, n3 = 0; n3 < e8.length; n3++)
          t3[e8[n3]] = true;
        this.instance.persistence.register(s2({}, Je, t3));
      } else
        this.instance.persistence.register(s2({}, Je, e8));
    } }, { key: "onFeatureFlags", value: function(e8) {
      var t3 = this;
      if (this.addFeatureFlagsHandler(e8), this.instance.decideEndpointWasHit) {
        var n3 = this._prepareFeatureFlagsForCallbacks(), r3 = n3.flags, i3 = n3.flagVariants;
        e8(r3, i3);
      }
      return function() {
        return t3.removeFeatureFlagsHandler(e8);
      };
    } }, { key: "updateEarlyAccessFeatureEnrollment", value: function(e8, n3) {
      var r3, i3, o3 = s2({}, "$feature_enrollment/".concat(e8), n3);
      this.instance.capture("$feature_enrollment_update", { $feature_flag: e8, $feature_enrollment: n3, $set: o3 }), this.setPersonPropertiesForFlags(o3, false);
      var a2 = t2(t2({}, this.getFlagVariants()), {}, s2({}, e8, n3));
      null === (r3 = this.instance.persistence) || void 0 === r3 || r3.register((s2(i3 = {}, Ye, Object.keys(Xe(a2))), s2(i3, De, a2), i3)), this._fireFeatureFlagsCallbacks();
    } }, { key: "getEarlyAccessFeatures", value: function(e8) {
      var t3 = this, n3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r3 = this.instance.get_property(Le);
      if (r3 && !n3)
        return e8(r3);
      this.instance._send_request(this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token)), {}, { method: "GET" }, function(n4) {
        var r4, i3 = n4.earlyAccessFeatures;
        return null === (r4 = t3.instance.persistence) || void 0 === r4 || r4.register(s2({}, Le, i3)), e8(i3);
      });
    } }, { key: "_prepareFeatureFlagsForCallbacks", value: function() {
      var e8 = this.getFlags(), t3 = this.getFlagVariants();
      return { flags: e8.filter(function(e9) {
        return t3[e9];
      }), flagVariants: Object.keys(t3).filter(function(e9) {
        return t3[e9];
      }).reduce(function(e9, n3) {
        return e9[n3] = t3[n3], e9;
      }, {}) };
    } }, { key: "_fireFeatureFlagsCallbacks", value: function() {
      var e8 = this._prepareFeatureFlagsForCallbacks(), t3 = e8.flags, n3 = e8.flagVariants;
      this.featureFlagEventHandlers.forEach(function(e9) {
        return e9(t3, n3);
      });
    } }, { key: "setPersonPropertiesForFlags", value: function(e8) {
      var n3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r3 = this.instance.get_property(Ne) || {};
      this.instance.register(s2({}, Ne, t2(t2({}, r3), e8))), n3 && this.instance.reloadFeatureFlags();
    } }, { key: "resetPersonPropertiesForFlags", value: function() {
      this.instance.unregister(Ne);
    } }, { key: "setGroupPropertiesForFlags", value: function(e8) {
      var n3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r3 = this.instance.get_property(Be) || {};
      0 !== Object.keys(r3).length && Object.keys(r3).forEach(function(n4) {
        r3[n4] = t2(t2({}, r3[n4]), e8[n4]), delete e8[n4];
      }), this.instance.register(s2({}, Be, t2(t2({}, r3), e8))), n3 && this.instance.reloadFeatureFlags();
    } }, { key: "resetGroupPropertiesForFlags", value: function(e8) {
      if (e8) {
        var n3 = this.instance.get_property(Be) || {};
        this.instance.register(s2({}, Be, t2(t2({}, n3), {}, s2({}, e8, {}))));
      } else
        this.instance.unregister(Be);
    } }]), e7;
  }();
  Math.trunc || (Math.trunc = function(e7) {
    return e7 < 0 ? Math.ceil(e7) : Math.floor(e7);
  }), Number.isInteger || (Number.isInteger = function(e7) {
    return C(e7) && isFinite(e7) && Math.floor(e7) === e7;
  });
  var et = "0123456789abcdef";
  var tt = function() {
    function e7(t3) {
      if (r2(this, e7), this.bytes = t3, 16 !== t3.length)
        throw new TypeError("not 128-bit length");
    }
    return o2(e7, [{ key: "toString", value: function() {
      for (var e8 = "", t3 = 0; t3 < this.bytes.length; t3++)
        e8 = e8 + et.charAt(this.bytes[t3] >>> 4) + et.charAt(15 & this.bytes[t3]), 3 !== t3 && 5 !== t3 && 7 !== t3 && 9 !== t3 || (e8 += "-");
      if (36 !== e8.length)
        throw new Error("Invalid UUIDv7 was generated");
      return e8;
    } }, { key: "clone", value: function() {
      return new e7(this.bytes.slice(0));
    } }, { key: "equals", value: function(e8) {
      return 0 === this.compareTo(e8);
    } }, { key: "compareTo", value: function(e8) {
      for (var t3 = 0; t3 < 16; t3++) {
        var n3 = this.bytes[t3] - e8.bytes[t3];
        if (0 !== n3)
          return Math.sign(n3);
      }
      return 0;
    } }], [{ key: "fromFieldsV7", value: function(t3, n3, r3, i3) {
      if (!Number.isInteger(t3) || !Number.isInteger(n3) || !Number.isInteger(r3) || !Number.isInteger(i3) || t3 < 0 || n3 < 0 || r3 < 0 || i3 < 0 || t3 > 281474976710655 || n3 > 4095 || r3 > 1073741823 || i3 > 4294967295)
        throw new RangeError("invalid field value");
      var o3 = new Uint8Array(16);
      return o3[0] = t3 / Math.pow(2, 40), o3[1] = t3 / Math.pow(2, 32), o3[2] = t3 / Math.pow(2, 24), o3[3] = t3 / Math.pow(2, 16), o3[4] = t3 / Math.pow(2, 8), o3[5] = t3, o3[6] = 112 | n3 >>> 8, o3[7] = n3, o3[8] = 128 | r3 >>> 24, o3[9] = r3 >>> 16, o3[10] = r3 >>> 8, o3[11] = r3, o3[12] = i3 >>> 24, o3[13] = i3 >>> 16, o3[14] = i3 >>> 8, o3[15] = i3, new e7(o3);
    } }]), e7;
  }();
  var nt = function() {
    function e7() {
      r2(this, e7), s2(this, "timestamp", 0), s2(this, "counter", 0), s2(this, "random", new ot());
    }
    return o2(e7, [{ key: "generate", value: function() {
      var e8 = this.generateOrAbort();
      if (I(e8)) {
        this.timestamp = 0;
        var t3 = this.generateOrAbort();
        if (I(t3))
          throw new Error("Could not generate UUID after timestamp reset");
        return t3;
      }
      return e8;
    } }, { key: "generateOrAbort", value: function() {
      var e8 = Date.now();
      if (e8 > this.timestamp)
        this.timestamp = e8, this.resetCounter();
      else {
        if (!(e8 + 1e4 > this.timestamp))
          return;
        this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter());
      }
      return tt.fromFieldsV7(this.timestamp, Math.trunc(this.counter / Math.pow(2, 30)), this.counter & Math.pow(2, 30) - 1, this.random.nextUint32());
    } }, { key: "resetCounter", value: function() {
      this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
    } }]), e7;
  }();
  var rt = function(e7) {
    if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG)
      throw new Error("no cryptographically strong RNG available");
    for (var t3 = 0; t3 < e7.length; t3++)
      e7[t3] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
    return e7;
  };
  T && !I(T.crypto) && crypto.getRandomValues && (rt = function(e7) {
    return crypto.getRandomValues(e7);
  });
  var it;
  var ot = function() {
    function e7() {
      r2(this, e7), s2(this, "buffer", new Uint32Array(8)), s2(this, "cursor", 1 / 0);
    }
    return o2(e7, [{ key: "nextUint32", value: function() {
      return this.cursor >= this.buffer.length && (rt(this.buffer), this.cursor = 0), this.buffer[this.cursor++];
    } }]), e7;
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
  function dt(e7, t3) {
    if (t3) {
      var n3 = function(e8) {
        var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
        if (lt)
          return lt;
        if (!t4)
          return "";
        if (["localhost", "127.0.0.1"].includes(e8))
          return "";
        for (var n4 = e8.split("."), r4 = Math.min(n4.length, 8), i3 = "dmn_chk_" + st(), o3 = new RegExp("(^|;)\\s*" + i3 + "=1"); !lt && r4--; ) {
          var s3 = n4.slice(r4).join("."), a2 = i3 + "=1;domain=." + s3;
          t4.cookie = a2, o3.test(t4.cookie) && (t4.cookie = a2 + ";expires=" + ut, lt = s3);
        }
        return lt;
      }(e7);
      if (!n3) {
        var r3 = function(e8) {
          var t4 = e8.match(ct);
          return t4 ? t4[0] : "";
        }(e7);
        r3 !== n3 && V.info("Warning: cookie subdomain discovery mismatch", r3, n3), n3 = r3;
      }
      return n3 ? "; domain=." + n3 : "";
    }
    return "";
  }
  var ht = { is_supported: function() {
    return !!L;
  }, error: function(e7) {
    V.error("cookieStore error: " + e7);
  }, get: function(e7) {
    if (L) {
      try {
        for (var t3 = e7 + "=", n3 = L.cookie.split(";").filter(function(e8) {
          return e8.length;
        }), r3 = 0; r3 < n3.length; r3++) {
          for (var i3 = n3[r3]; " " == i3.charAt(0); )
            i3 = i3.substring(1, i3.length);
          if (0 === i3.indexOf(t3))
            return decodeURIComponent(i3.substring(t3.length, i3.length));
        }
      } catch (e8) {
      }
      return null;
    }
  }, parse: function(e7) {
    var t3;
    try {
      t3 = JSON.parse(ht.get(e7)) || {};
    } catch (e8) {
    }
    return t3;
  }, set: function(e7, t3, n3, r3, i3) {
    if (L)
      try {
        var o3 = "", s3 = "", a2 = dt(L.location.hostname, r3);
        if (n3) {
          var u2 = /* @__PURE__ */ new Date();
          u2.setTime(u2.getTime() + 24 * n3 * 60 * 60 * 1e3), o3 = "; expires=" + u2.toUTCString();
        }
        i3 && (s3 = "; secure");
        var l2 = e7 + "=" + encodeURIComponent(JSON.stringify(t3)) + o3 + "; SameSite=Lax; path=/" + a2 + s3;
        return l2.length > 3686.4 && V.warn("cookieStore warning: large cookie, len=" + l2.length), L.cookie = l2, l2;
      } catch (e8) {
        return;
      }
  }, remove: function(e7, t3) {
    try {
      ht.set(e7, "", -1, t3);
    } catch (e8) {
      return;
    }
  } };
  var ft = null;
  var pt = { is_supported: function() {
    if (!x(ft))
      return ft;
    var e7 = true;
    if (I(T))
      e7 = false;
    else
      try {
        var t3 = "__mplssupport__";
        pt.set(t3, "xyz"), '"xyz"' !== pt.get(t3) && (e7 = false), pt.remove(t3);
      } catch (t4) {
        e7 = false;
      }
    return e7 || V.error("localStorage unsupported; falling back to cookie store"), ft = e7, e7;
  }, error: function(e7) {
    V.error("localStorage error: " + e7);
  }, get: function(e7) {
    try {
      return null == T ? void 0 : T.localStorage.getItem(e7);
    } catch (e8) {
      pt.error(e8);
    }
    return null;
  }, parse: function(e7) {
    try {
      return JSON.parse(pt.get(e7)) || {};
    } catch (e8) {
    }
    return null;
  }, set: function(e7, t3) {
    try {
      null == T || T.localStorage.setItem(e7, JSON.stringify(t3));
    } catch (e8) {
      pt.error(e8);
    }
  }, remove: function(e7) {
    try {
      null == T || T.localStorage.removeItem(e7);
    } catch (e8) {
      pt.error(e8);
    }
  } };
  var _t = ["distinct_id", Me, qe];
  var gt = t2(t2({}, pt), {}, { parse: function(e7) {
    try {
      var t3 = {};
      try {
        t3 = ht.parse(e7) || {};
      } catch (e8) {
      }
      var n3 = J(t3, JSON.parse(pt.get(e7) || "{}"));
      return pt.set(e7, n3), n3;
    } catch (e8) {
    }
    return null;
  }, set: function(e7, t3, n3, r3, i3) {
    try {
      pt.set(e7, t3);
      var o3 = {};
      _t.forEach(function(e8) {
        t3[e8] && (o3[e8] = t3[e8]);
      }), Object.keys(o3).length && ht.set(e7, o3, n3, r3, i3);
    } catch (e8) {
      pt.error(e8);
    }
  }, remove: function(e7, t3) {
    try {
      null == T || T.localStorage.removeItem(e7), ht.remove(e7, t3);
    } catch (e8) {
      pt.error(e8);
    }
  } });
  var vt = {};
  var mt = { is_supported: function() {
    return true;
  }, error: function(e7) {
    V.error("memoryStorage error: " + e7);
  }, get: function(e7) {
    return vt[e7] || null;
  }, parse: function(e7) {
    return vt[e7] || null;
  }, set: function(e7, t3) {
    vt[e7] = t3;
  }, remove: function(e7) {
    delete vt[e7];
  } };
  var yt = null;
  var bt = { is_supported: function() {
    if (!x(yt))
      return yt;
    if (yt = true, I(T))
      yt = false;
    else
      try {
        var e7 = "__support__";
        bt.set(e7, "xyz"), '"xyz"' !== bt.get(e7) && (yt = false), bt.remove(e7);
      } catch (e8) {
        yt = false;
      }
    return yt;
  }, error: function(e7) {
    V.error("sessionStorage error: ", e7);
  }, get: function(e7) {
    try {
      return null == T ? void 0 : T.sessionStorage.getItem(e7);
    } catch (e8) {
      bt.error(e8);
    }
    return null;
  }, parse: function(e7) {
    try {
      return JSON.parse(bt.get(e7)) || null;
    } catch (e8) {
    }
    return null;
  }, set: function(e7, t3) {
    try {
      null == T || T.sessionStorage.setItem(e7, JSON.stringify(t3));
    } catch (e8) {
      bt.error(e8);
    }
  }, remove: function(e7) {
    try {
      null == T || T.sessionStorage.removeItem(e7);
    } catch (e8) {
      bt.error(e8);
    }
  } };
  var kt = ["localhost", "127.0.0.1"];
  var wt = !(!j || !("withCredentials" in new j())) || !!B;
  var St = function(e7) {
    var t3 = null == L ? void 0 : L.createElement("a");
    return I(t3) ? null : (t3.href = e7, t3);
  };
  var Ft = function(e7, t3) {
    return !!function(e8) {
      try {
        new RegExp(e8);
      } catch (e9) {
        return false;
      }
      return true;
    }(t3) && new RegExp(t3).test(e7);
  };
  var Pt = function(e7, t3) {
    for (var n3, r3 = ((e7.split("#")[0] || "").split("?")[1] || "").split("&"), i3 = 0; i3 < r3.length; i3++) {
      var o3 = r3[i3].split("=");
      if (o3[0] === t3) {
        n3 = o3;
        break;
      }
    }
    if (!S(n3) || n3.length < 2)
      return "";
    var s3 = n3[1];
    try {
      s3 = decodeURIComponent(s3);
    } catch (e8) {
      V.error("Skipping decoding for malformed query param: " + s3);
    }
    return s3.replace(/\+/g, " ");
  };
  var Rt = function(e7, t3) {
    var n3 = e7.match(new RegExp(t3 + "=([^&]*)"));
    return n3 ? n3[1] : null;
  };
  var It = { campaignParams: function(e7) {
    var t3 = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gbraid", "wbraid", "fbclid", "msclkid"].concat(e7 || []), n3 = {};
    return Y(t3, function(e8) {
      var t4 = L ? Pt(L.URL, e8) : "";
      t4.length && (n3[e8] = t4);
    }), n3;
  }, searchEngine: function() {
    var e7 = null == L ? void 0 : L.referrer;
    return e7 ? 0 === e7.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e7.search("https?://(.*)bing.com") ? "bing" : 0 === e7.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e7.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null;
  }, searchInfo: function() {
    var e7 = It.searchEngine(), t3 = "yahoo" != e7 ? "q" : "p", n3 = {};
    if (!x(e7)) {
      n3.$search_engine = e7;
      var r3 = L ? Pt(L.referrer, t3) : "";
      r3.length && (n3.ph_keyword = r3);
    }
    return n3;
  }, browser: function(e7, t3, n3) {
    return t3 = t3 || "", n3 || K(e7, " OPR/") ? K(e7, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e7) ? "BlackBerry" : K(e7, "IEMobile") || K(e7, "WPDesktop") ? "Internet Explorer Mobile" : K(e7, "SamsungBrowser/") ? "Samsung Internet" : K(e7, "Edge") || K(e7, "Edg/") ? "Microsoft Edge" : K(e7, "FBIOS") ? "Facebook Mobile" : K(e7, "Chrome") ? "Chrome" : K(e7, "CriOS") ? "Chrome iOS" : K(e7, "UCWEB") || K(e7, "UCBrowser") ? "UC Browser" : K(e7, "FxiOS") ? "Firefox iOS" : K(t3, "Apple") || function(e8) {
      return K(e8, "Safari") && !K(e8, "Chrome") && !K(e8, "Android");
    }(e7) ? K(e7, "Mobile") ? "Mobile Safari" : "Safari" : K(e7, "Android") ? "Android Mobile" : K(e7, "Konqueror") || K(e7, "konqueror") ? "Konqueror" : K(e7, "Firefox") ? "Firefox" : K(e7, "MSIE") || K(e7, "Trident/") ? "Internet Explorer" : K(e7, "Gecko") ? "Mozilla" : "";
  }, browserVersion: function(e7, t3, n3) {
    var r3 = { "Internet Explorer Mobile": [/rv:(\d+(\.\d+)?)/], "Microsoft Edge": [/Edge?\/(\d+(\.\d+)?)/], Chrome: [/Chrome\/(\d+(\.\d+)?)/], "Chrome iOS": [/CriOS\/(\d+(\.\d+)?)/], "UC Browser": [/(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/], Safari: [/Version\/(\d+(\.\d+)?)/], "Mobile Safari": [/Version\/(\d+(\.\d+)?)/], Opera: [/(Opera|OPR)\/(\d+(\.\d+)?)/], Firefox: [/Firefox\/(\d+(\.\d+)?)/], "Firefox iOS": [/FxiOS\/(\d+(\.\d+)?)/], Konqueror: [/Konqueror[:/]?(\d+(\.\d+)?)/i], BlackBerry: [/BlackBerry (\d+(\.\d+)?)/, /Version\/(\d+(\.\d+)?)/], "Android Mobile": [/android\s(\d+(\.\d+)?)/], "Samsung Internet": [/SamsungBrowser\/(\d+(\.\d+)?)/], "Internet Explorer": [/(rv:|MSIE )(\d+(\.\d+)?)/], Mozilla: [/rv:(\d+(\.\d+)?)/] }[It.browser(e7, t3, n3)];
    if (I(r3))
      return null;
    for (var i3 = 0; i3 < r3.length; i3++) {
      var o3 = r3[i3], s3 = e7.match(o3);
      if (s3)
        return parseFloat(s3[s3.length - 2]);
    }
    return null;
  }, browserLanguage: function() {
    return navigator.language || navigator.userLanguage;
  }, os: function(e7) {
    if (/Windows/i.test(e7)) {
      if (/Phone/.test(e7) || /WPDesktop/.test(e7))
        return { os_name: "Windows Phone", os_version: "" };
      var t3 = /Windows NT ([0-9.]+)/i.exec(e7);
      return t3 && t3[1] ? { os_name: "Windows", os_version: t3[1] } : { os_name: "Windows", os_version: "" };
    }
    if (/(iPhone|iPad|iPod)/.test(e7)) {
      var n3 = /OS (\d+)_(\d+)_?(\d+)?/i.exec(e7);
      return n3 && n3[1] ? { os_name: "iOS", os_version: [n3[1], n3[2], n3[3] || "0"].join(".") } : { os_name: "iOS", os_version: "" };
    }
    if (/Android/.test(e7)) {
      var r3 = /Android (\d+)\.(\d+)\.?(\d+)?/i.exec(e7);
      return r3 && r3[1] ? { os_name: "Android", os_version: [r3[1], r3[2], r3[3] || "0"].join(".") } : { os_name: "Android", os_version: "" };
    }
    if (/(BlackBerry|PlayBook|BB10)/i.test(e7))
      return { os_name: "BlackBerry", os_version: "" };
    if (/Mac/i.test(e7)) {
      var i3 = /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i.exec(e7);
      return i3 && i3[1] ? { os_name: "Mac OS X", os_version: [i3[1], i3[2], i3[3] || "0"].join(".") } : { os_name: "Mac OS X", os_version: "" };
    }
    return /Linux/.test(e7) ? { os_name: "Linux", os_version: "" } : /CrOS/.test(e7) ? { os_name: "Chrome OS", os_version: "" } : { os_name: "", os_version: "" };
  }, device: function(e7) {
    return /Windows Phone/i.test(e7) || /WPDesktop/.test(e7) ? "Windows Phone" : /iPad/.test(e7) ? "iPad" : /iPod/.test(e7) ? "iPod Touch" : /iPhone/.test(e7) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e7) ? "BlackBerry" : /Android/.test(e7) && !/Mobile/.test(e7) ? "Android Tablet" : /Android/.test(e7) ? "Android" : "";
  }, deviceType: function(e7) {
    var t3 = this.device(e7);
    return "iPad" === t3 || "Android Tablet" === t3 ? "Tablet" : t3 ? "Mobile" : "Desktop";
  }, referrer: function() {
    return (null == L ? void 0 : L.referrer) || "$direct";
  }, referringDomain: function() {
    var e7;
    return null != L && L.referrer && (null === (e7 = St(L.referrer)) || void 0 === e7 ? void 0 : e7.host) || "$direct";
  }, properties: function() {
    if (!H)
      return {};
    var e7 = It.os(H), t3 = e7.os_name, n3 = e7.os_version;
    return J(ne({ $os: t3, $os_version: n3, $browser: It.browser(H, navigator.vendor, U.opera), $device: It.device(H), $device_type: It.deviceType(H) }), { $current_url: null == N ? void 0 : N.href, $host: null == N ? void 0 : N.host, $pathname: null == N ? void 0 : N.pathname, $raw_user_agent: H.length > 1e3 ? H.substring(0, 997) + "..." : H, $browser_version: It.browserVersion(H, navigator.vendor, U.opera), $browser_language: It.browserLanguage(), $screen_height: null == T ? void 0 : T.screen.height, $screen_width: null == T ? void 0 : T.screen.width, $viewport_height: null == T ? void 0 : T.innerHeight, $viewport_width: null == T ? void 0 : T.innerWidth, $lib: "web", $lib_version: m.LIB_VERSION, $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10), $time: Z() / 1e3 });
  }, people_properties: function() {
    if (!H)
      return {};
    var e7 = It.os(H), t3 = e7.os_name, n3 = e7.os_version;
    return J(ne({ $os: t3, $os_version: n3, $browser: It.browser(H, navigator.vendor, U.opera) }), { $browser_version: It.browserVersion(H, navigator.vendor, U.opera) });
  } };
  var Et = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"];
  var xt = function() {
    function e7(t3) {
      r2(this, e7);
      var n3 = "";
      t3.token && (n3 = t3.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), this.props = {}, this.campaign_params_saved = false, this.custom_campaign_params = t3.custom_campaign_params || [], t3.persistence_name ? this.name = "ph_" + t3.persistence_name : this.name = "ph_" + n3 + "_posthog", -1 === Et.indexOf(t3.persistence.toLowerCase()) && (V.critical("Unknown persistence type " + t3.persistence + "; falling back to localStorage+cookie"), t3.persistence = "localStorage+cookie");
      var i3 = t3.persistence.toLowerCase();
      "localstorage" === i3 && pt.is_supported() ? this.storage = pt : "localstorage+cookie" === i3 && gt.is_supported() ? this.storage = gt : "sessionstorage" === i3 && bt.is_supported() ? this.storage = bt : "memory" === i3 ? this.storage = mt : "cookie" === i3 ? this.storage = ht : gt.is_supported() ? this.storage = gt : this.storage = ht, this.load(), this.update_config(t3), this.save();
    }
    return o2(e7, [{ key: "properties", value: function() {
      var e8 = {};
      return Y(this.props, function(t3, n3) {
        if (n3 === De && R(t3))
          for (var r3 = Object.keys(t3), i3 = 0; i3 < r3.length; i3++)
            e8["$feature/".concat(r3[i3])] = t3[r3[i3]];
        else
          s3 = n3, a2 = false, (x(o3 = Ge) ? a2 : q && o3.indexOf === q ? -1 != o3.indexOf(s3) : (Y(o3, function(e9) {
            if (a2 || (a2 = e9 === s3))
              return G;
          }), a2)) || (e8[n3] = t3);
        var o3, s3, a2;
      }), e8;
    } }, { key: "load", value: function() {
      if (!this.disabled) {
        var e8 = this.storage.parse(this.name);
        e8 && (this.props = J({}, e8));
      }
    } }, { key: "save", value: function() {
      this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure);
    } }, { key: "remove", value: function() {
      this.storage.remove(this.name, false), this.storage.remove(this.name, true);
    } }, { key: "clear", value: function() {
      this.remove(), this.props = {};
    } }, { key: "register_once", value: function(e8, t3, n3) {
      var r3 = this;
      if (R(e8)) {
        I(t3) && (t3 = "None"), this.expire_days = I(n3) ? this.default_expiry : n3;
        var i3 = false;
        if (Y(e8, function(e9, n4) {
          r3.props.hasOwnProperty(n4) && r3.props[n4] !== t3 || (r3.props[n4] = e9, i3 = true);
        }), i3)
          return this.save(), true;
      }
      return false;
    } }, { key: "register", value: function(e8, t3) {
      var n3 = this;
      if (R(e8)) {
        this.expire_days = I(t3) ? this.default_expiry : t3;
        var r3 = false;
        if (Y(e8, function(t4, i3) {
          e8.hasOwnProperty(i3) && n3.props[i3] !== t4 && (n3.props[i3] = t4, r3 = true);
        }), r3)
          return this.save(), true;
      }
      return false;
    } }, { key: "unregister", value: function(e8) {
      e8 in this.props && (delete this.props[e8], this.save());
    } }, { key: "update_campaign_params", value: function() {
      this.campaign_params_saved || (this.register(It.campaignParams(this.custom_campaign_params)), this.campaign_params_saved = true);
    } }, { key: "update_search_keyword", value: function() {
      this.register(It.searchInfo());
    } }, { key: "update_referrer_info", value: function() {
      this.register({ $referrer: this.props.$referrer || It.referrer(), $referring_domain: this.props.$referring_domain || It.referringDomain() });
    } }, { key: "get_referrer_info", value: function() {
      return ne({ $referrer: this.props.$referrer, $referring_domain: this.props.$referring_domain });
    } }, { key: "safe_merge", value: function(e8) {
      return Y(this.props, function(t3, n3) {
        n3 in e8 || (e8[n3] = t3);
      }), e8;
    } }, { key: "update_config", value: function(e8) {
      this.default_expiry = this.expire_days = e8.cookie_expiration, this.set_disabled(e8.disable_persistence), this.set_cross_subdomain(e8.cross_subdomain_cookie), this.set_secure(e8.secure_cookie);
    } }, { key: "set_disabled", value: function(e8) {
      this.disabled = e8, this.disabled ? this.remove() : this.save();
    } }, { key: "set_cross_subdomain", value: function(e8) {
      e8 !== this.cross_subdomain && (this.cross_subdomain = e8, this.remove(), this.save());
    } }, { key: "get_cross_subdomain", value: function() {
      return !!this.cross_subdomain;
    } }, { key: "set_secure", value: function(e8) {
      e8 !== this.secure && (this.secure = e8, this.remove(), this.save());
    } }, { key: "set_event_timer", value: function(e8, t3) {
      var n3 = this.props[Ee] || {};
      n3[e8] = t3, this.props[Ee] = n3, this.save();
    } }, { key: "remove_event_timer", value: function(e8) {
      var t3 = (this.props[Ee] || {})[e8];
      return I(t3) || (delete this.props[Ee][e8], this.save()), t3;
    } }, { key: "get_user_state", value: function() {
      return this.props[Ue] || "anonymous";
    } }, { key: "set_user_state", value: function(e8) {
      this.props[Ue] = e8, this.save();
    } }, { key: "get_quota_limits", value: function() {
      return this.props[We] || {};
    } }, { key: "set_quota_limits", value: function(e8) {
      this.props[We] = e8, this.save();
    } }]), e7;
  }();
  var Ct = 2;
  var Ot = 4;
  var Tt = o2(function e3(t3) {
    var n3, i3, o3 = this, a2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r2(this, e3), s2(this, "bucketSize", 100), s2(this, "refillRate", 10), s2(this, "mutationBuckets", {}), s2(this, "loggedTracker", {}), s2(this, "refillBuckets", function() {
      Object.keys(o3.mutationBuckets).forEach(function(e7) {
        o3.mutationBuckets[e7] = o3.mutationBuckets[e7] + o3.refillRate, o3.mutationBuckets[e7] >= o3.bucketSize && delete o3.mutationBuckets[e7];
      });
    }), s2(this, "getNodeOrRelevantParent", function(e7) {
      var t4 = o3.rrweb.mirror.getNode(e7);
      if ("svg" !== (null == t4 ? void 0 : t4.nodeName) && t4 instanceof Element) {
        var n4 = t4.closest("svg");
        if (n4)
          return [o3.rrweb.mirror.getId(n4), n4];
      }
      return [e7, t4];
    }), s2(this, "numberOfChanges", function(e7) {
      var t4, n4, r3, i4, o4, s3, a3, u2;
      return (null !== (t4 = null === (n4 = e7.removes) || void 0 === n4 ? void 0 : n4.length) && void 0 !== t4 ? t4 : 0) + (null !== (r3 = null === (i4 = e7.attributes) || void 0 === i4 ? void 0 : i4.length) && void 0 !== r3 ? r3 : 0) + (null !== (o4 = null === (s3 = e7.texts) || void 0 === s3 ? void 0 : s3.length) && void 0 !== o4 ? o4 : 0) + (null !== (a3 = null === (u2 = e7.adds) || void 0 === u2 ? void 0 : u2.length) && void 0 !== a3 ? a3 : 0);
    }), s2(this, "throttleMutations", function(e7) {
      if (3 !== e7.type || 0 !== e7.data.source)
        return e7;
      var t4 = e7.data, n4 = o3.numberOfChanges(t4);
      t4.attributes && (t4.attributes = t4.attributes.filter(function(e8) {
        var t5, n5, r4, i4 = f(o3.getNodeOrRelevantParent(e8.id), 2), s3 = i4[0], a3 = i4[1];
        if (0 === o3.mutationBuckets[s3])
          return false;
        (o3.mutationBuckets[s3] = null !== (t5 = o3.mutationBuckets[s3]) && void 0 !== t5 ? t5 : o3.bucketSize, o3.mutationBuckets[s3] = Math.max(o3.mutationBuckets[s3] - 1, 0), 0 === o3.mutationBuckets[s3]) && (o3.loggedTracker[s3] || (o3.loggedTracker[s3] = true, null === (n5 = (r4 = o3.options).onBlockedNode) || void 0 === n5 || n5.call(r4, s3, a3)));
        return e8;
      }));
      var r3 = o3.numberOfChanges(t4);
      return 0 !== r3 || n4 === r3 ? e7 : void 0;
    }), this.rrweb = t3, this.options = a2, this.refillRate = null !== (n3 = this.options.refillRate) && void 0 !== n3 ? n3 : this.refillRate, this.bucketSize = null !== (i3 = this.options.bucketSize) && void 0 !== i3 ? i3 : this.bucketSize, setInterval(function() {
      o3.refillBuckets();
    }, 1e3);
  });
  var $t = function(e7) {
    return e7[e7.DomContentLoaded = 0] = "DomContentLoaded", e7[e7.Load = 1] = "Load", e7[e7.FullSnapshot = 2] = "FullSnapshot", e7[e7.IncrementalSnapshot = 3] = "IncrementalSnapshot", e7[e7.Meta = 4] = "Meta", e7[e7.Custom = 5] = "Custom", e7[e7.Plugin = 6] = "Plugin", e7;
  }($t || {});
  var At = { initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"], maskRequestFn: function(e7) {
    return e7;
  }, recordHeaders: false, recordBody: false, recordInitialRequests: false, recordPerformance: false, performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"], payloadSizeLimitBytes: 1e6 };
  var Mt = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"];
  var qt = ["/s/", "/e/", "/i/vo/e/"];
  function Dt(e7, t3, n3, r3) {
    var i3 = null == t3 ? void 0 : t3["content-length"];
    return I(i3) ? "[SessionReplay] no content-length header for ".concat(r3, ", cannot determine payload size") : i3 && parseInt(i3) > n3 ? "[SessionReplay] ".concat(r3, " body too large to record") : e7;
  }
  var Lt = function(e7, n3) {
    var r3, i3, o3, s3 = e7.session_recording, a2 = false !== s3.recordHeaders && n3.recordHeaders, u2 = false !== s3.recordBody && n3.recordBody, l2 = false !== s3.recordPerformance && n3.recordPerformance, c2 = (r3 = s3, o3 = Math.min(1e6, null !== (i3 = r3.payloadSizeLimitBytes) && void 0 !== i3 ? i3 : 1e6), function(e8) {
      return null != e8 && e8.requestBody && (e8.requestBody = Dt(e8.requestBody, e8.requestHeaders, o3, "Request")), null != e8 && e8.responseBody && (e8.responseBody = Dt(e8.responseBody, e8.responseHeaders, o3, "Response")), e8;
    }), d2 = function(e8) {
      return c2(function(e9) {
        var t4 = St(e9.name);
        if (!(t4 && t4.pathname && qt.includes(t4.pathname)))
          return e9;
      }((t3 = e8, Object.keys(null !== (n4 = t3.requestHeaders) && void 0 !== n4 ? n4 : {}).forEach(function(e9) {
        var n5;
        Mt.includes(e9.toLowerCase()) && (null === (n5 = t3.requestHeaders) || void 0 === n5 || delete n5[e9]);
      }), t3)));
      var t3, n4;
    }, h2 = P(e7.session_recording.maskNetworkRequestFn);
    return h2 && P(e7.session_recording.maskCapturedNetworkRequestFn) && V.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), h2 && (e7.session_recording.maskCapturedNetworkRequestFn = function(n4) {
      var r4 = e7.session_recording.maskNetworkRequestFn({ url: n4.name });
      return t2(t2({}, n4), {}, { name: null == r4 ? void 0 : r4.url });
    }), s3.maskRequestFn = P(e7.session_recording.maskCapturedNetworkRequestFn) ? function(t3) {
      var n4, r4, i4, o4 = d2(t3);
      return o4 && null !== (n4 = null === (r4 = (i4 = e7.session_recording).maskCapturedNetworkRequestFn) || void 0 === r4 ? void 0 : r4.call(i4, o4)) && void 0 !== n4 ? n4 : void 0;
    } : void 0, s3.maskRequestFn || (s3.maskRequestFn = d2), t2(t2(t2({}, At), s3), {}, { recordHeaders: a2, recordBody: u2, recordPerformance: l2, recordInitialRequests: l2 });
  };
  var Nt = "__ph_opt_in_out_";
  function Bt(e7, t3) {
    Qt(true, e7, t3);
  }
  function jt(e7, t3) {
    Qt(false, e7, t3);
  }
  function Ht(e7, t3) {
    return "1" === zt(e7, t3);
  }
  function Ut(e7, t3) {
    return !!function(e8) {
      if (e8 && e8.respectDnt) {
        var t4 = e8 && e8.window || T, n3 = null == t4 ? void 0 : t4.navigator, r3 = false;
        return Y([null == n3 ? void 0 : n3.doNotTrack, n3.msDoNotTrack, t4.doNotTrack], function(e9) {
          K([true, 1, "1", "yes"], e9) && (r3 = true);
        }), r3;
      }
      return false;
    }(t3) || "0" === zt(e7, t3);
  }
  function Wt(e7, t3) {
    Vt(t3 = t3 || {}).remove(Gt(e7, t3), !!t3.crossSubdomainCookie);
  }
  function Vt(e7) {
    return "localStorage" === (e7 = e7 || {}).persistenceType ? pt : "localStorage+cookie" === e7.persistenceType ? gt : ht;
  }
  function Gt(e7, t3) {
    return ((t3 = t3 || {}).persistencePrefix || Nt) + e7;
  }
  function zt(e7, t3) {
    return Vt(t3).get(Gt(e7, t3));
  }
  function Qt(e7, t3, n3) {
    E(t3) && t3.length ? (Vt(n3 = n3 || {}).set(Gt(t3, n3), e7 ? 1 : 0, C(n3.cookieExpiration) ? n3.cookieExpiration : null, n3.crossSubdomainCookie, n3.secureCookie), n3.capture && e7 && n3.capture(n3.captureEventName || "$opt_in", n3.captureProperties || {}, { send_instantly: true })) : V.error("gdpr." + (e7 ? "optIn" : "optOut") + " called with an invalid token");
  }
  function Yt(e7) {
    var t3 = false;
    try {
      var n3 = e7.config.token, r3 = e7.config.respect_dnt, i3 = e7.config.opt_out_capturing_persistence_type, o3 = e7.config.opt_out_capturing_cookie_prefix || void 0, s3 = e7.config.window;
      n3 && (t3 = Ut(n3, { respectDnt: r3, persistenceType: i3, persistencePrefix: o3, window: s3 }));
    } catch (e8) {
      V.error("Unexpected error when checking capturing opt-out status: " + e8);
    }
    return t3;
  }
  var Jt;
  var Kt = 3e5;
  var Xt = Kt;
  !function(e7) {
    e7[e7.Mutation = 0] = "Mutation", e7[e7.MouseMove = 1] = "MouseMove", e7[e7.MouseInteraction = 2] = "MouseInteraction", e7[e7.Scroll = 3] = "Scroll", e7[e7.ViewportResize = 4] = "ViewportResize", e7[e7.Input = 5] = "Input", e7[e7.TouchMove = 6] = "TouchMove", e7[e7.MediaInteraction = 7] = "MediaInteraction", e7[e7.StyleSheetRule = 8] = "StyleSheetRule", e7[e7.CanvasMutation = 9] = "CanvasMutation", e7[e7.Font = 10] = "Font", e7[e7.Log = 11] = "Log", e7[e7.Drag = 12] = "Drag", e7[e7.StyleDeclaration = 13] = "StyleDeclaration", e7[e7.Selection = 14] = "Selection", e7[e7.AdoptedStyleSheet = 15] = "AdoptedStyleSheet";
  }(Jt || (Jt = {}));
  var Zt = [Jt.MouseMove, Jt.MouseInteraction, Jt.Scroll, Jt.ViewportResize, Jt.Input, Jt.TouchMove, Jt.MediaInteraction, Jt.Drag];
  var en = function(e7) {
    return { rrwebMethod: e7, enqueuedAt: Date.now(), attempt: 1 };
  };
  var tn = function() {
    function e7(t3) {
      var n3 = this;
      if (r2(this, e7), s2(this, "queuedRRWebEvents", []), s2(this, "isIdle", false), s2(this, "_linkedFlagSeen", false), s2(this, "_lastActivityTimestamp", Date.now()), s2(this, "windowId", null), s2(this, "sessionId", null), s2(this, "_linkedFlag", null), s2(this, "_sampleRate", null), s2(this, "_minimumDuration", null), s2(this, "_forceAllowLocalhostNetworkCapture", false), this.instance = t3, this._captureStarted = false, this._endpoint = "/s/", this.stopRrweb = void 0, this.receivedDecide = false, null == T || T.addEventListener("beforeunload", function() {
        n3._flushBuffer();
      }), null == T || T.addEventListener("offline", function() {
        n3._tryAddCustomEvent("browser offline", {});
      }), null == T || T.addEventListener("online", function() {
        n3._tryAddCustomEvent("browser online", {});
      }), !this.instance.sessionManager)
        throw V.error("Session recording started without valid sessionManager"), new Error("Session recording started without valid sessionManager. This is a bug.");
      this.buffer = this.clearBuffer();
    }
    return o2(e7, [{ key: "started", get: function() {
      return this._captureStarted;
    } }, { key: "sessionManager", get: function() {
      if (!this.instance.sessionManager)
        throw V.error("Session recording started without valid sessionManager"), new Error("Session recording started without valid sessionManager. This is a bug.");
      return this.instance.sessionManager;
    } }, { key: "isSampled", get: function() {
      return C(this._sampleRate) ? this.instance.get_property(qe) : null;
    } }, { key: "sessionDuration", get: function() {
      var e8, t3, n3 = null === (e8 = this.buffer) || void 0 === e8 ? void 0 : e8.data[(null === (t3 = this.buffer) || void 0 === t3 ? void 0 : t3.data.length) - 1], r3 = this.sessionManager.checkAndGetSessionAndWindowId(true).sessionStartTimestamp;
      return n3 ? n3.timestamp - r3 : null;
    } }, { key: "isRecordingEnabled", get: function() {
      var e8 = !!this.instance.get_property(Ce), t3 = !this.instance.config.disable_session_recording;
      return T && e8 && t3;
    } }, { key: "isConsoleLogCaptureEnabled", get: function() {
      var e8 = !!this.instance.get_property(Oe), t3 = this.instance.config.enable_recording_console_log;
      return null != t3 ? t3 : e8;
    } }, { key: "canvasRecording", get: function() {
      var e8 = this.instance.get_property(Ae);
      return e8 && e8.fps && e8.quality ? { enabled: e8.enabled, fps: e8.fps, quality: e8.quality } : void 0;
    } }, { key: "recordingVersion", get: function() {
      var e8, t3 = this.instance.get_property(Te);
      return (null === (e8 = this.instance.config.session_recording) || void 0 === e8 ? void 0 : e8.recorderVersion) || t3 || "v1";
    } }, { key: "networkPayloadCapture", get: function() {
      var e8, t3, n3 = this.instance.get_property($e), r3 = { recordHeaders: null === (e8 = this.instance.config.session_recording) || void 0 === e8 ? void 0 : e8.recordHeaders, recordBody: null === (t3 = this.instance.config.session_recording) || void 0 === t3 ? void 0 : t3.recordBody }, i3 = (null == r3 ? void 0 : r3.recordHeaders) || (null == n3 ? void 0 : n3.recordHeaders), o3 = (null == r3 ? void 0 : r3.recordBody) || (null == n3 ? void 0 : n3.recordBody), s3 = this.instance.config.capture_performance || (null == n3 ? void 0 : n3.capturePerformance);
      return i3 || o3 || s3 ? { recordHeaders: i3, recordBody: o3, recordPerformance: s3 } : void 0;
    } }, { key: "status", get: function() {
      return this.receivedDecide ? this.isRecordingEnabled ? E(this._linkedFlag) && !this._linkedFlagSeen ? "buffering" : O(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "disabled" : "buffering";
    } }, { key: "startRecordingIfEnabled", value: function() {
      this.isRecordingEnabled ? (this.startCaptureAndTrySendingQueuedSnapshots(), V.info("[SessionRecording] started")) : (this.stopRecording(), this.clearBuffer());
    } }, { key: "stopRecording", value: function() {
      this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this._captureStarted = false, V.info("[SessionRecording] stopped"));
    } }, { key: "makeSamplingDecision", value: function(e8) {
      var t3, n3 = this.sessionId !== e8;
      if (C(this._sampleRate)) {
        var r3, i3 = this.isSampled;
        if (n3 || !O(i3))
          r3 = Math.random() < this._sampleRate;
        else
          r3 = i3;
        r3 || V.warn("[SessionSampling] Sample rate (".concat(this._sampleRate, ") has determined that this sessionId (").concat(e8, ") will not be sent to the server.")), null === (t3 = this.instance.persistence) || void 0 === t3 || t3.register(s2({}, qe, r3));
      } else {
        var o3;
        null === (o3 = this.instance.persistence) || void 0 === o3 || o3.register(s2({}, qe, null));
      }
    } }, { key: "afterDecideResponse", value: function(e8) {
      var n3, r3, i3, o3, a2, u2, l2, c2, d2, h2, f2, p2 = this;
      this.instance.persistence && this.instance.persistence.register((s2(f2 = {}, Ce, !!e8.sessionRecording), s2(f2, Oe, null === (a2 = e8.sessionRecording) || void 0 === a2 ? void 0 : a2.consoleLogRecordingEnabled), s2(f2, Te, null === (u2 = e8.sessionRecording) || void 0 === u2 ? void 0 : u2.recorderVersion), s2(f2, $e, t2({ capturePerformance: e8.capturePerformance }, null === (l2 = e8.sessionRecording) || void 0 === l2 ? void 0 : l2.networkPayloadCapture)), s2(f2, Ae, { enabled: null === (c2 = e8.sessionRecording) || void 0 === c2 ? void 0 : c2.recordCanvas, fps: null === (d2 = e8.sessionRecording) || void 0 === d2 ? void 0 : d2.canvasFps, quality: null === (h2 = e8.sessionRecording) || void 0 === h2 ? void 0 : h2.canvasQuality }), f2));
      var _2 = null === (n3 = e8.sessionRecording) || void 0 === n3 ? void 0 : n3.sampleRate;
      this._sampleRate = I(_2) || x(_2) ? null : parseFloat(_2);
      var g2, v2 = null === (r3 = e8.sessionRecording) || void 0 === r3 ? void 0 : r3.minimumDurationMilliseconds;
      (this._minimumDuration = I(v2) ? null : v2, this._linkedFlag = (null === (i3 = e8.sessionRecording) || void 0 === i3 ? void 0 : i3.linkedFlag) || null, null !== (o3 = e8.sessionRecording) && void 0 !== o3 && o3.endpoint) && (this._endpoint = null === (g2 = e8.sessionRecording) || void 0 === g2 ? void 0 : g2.endpoint);
      if (C(this._sampleRate) && this.sessionManager.onSessionId(function(e9) {
        p2.makeSamplingDecision(e9);
      }), E(this._linkedFlag)) {
        var m2 = this._linkedFlag;
        this.instance.onFeatureFlags(function(e9) {
          p2._linkedFlagSeen = e9.includes(m2);
        });
      }
      this.receivedDecide = true, this.startRecordingIfEnabled();
    } }, { key: "log", value: function(e8) {
      var t3, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
      null === (t3 = this.instance.sessionRecording) || void 0 === t3 || t3.onRRwebEmit({ type: 6, data: { plugin: "rrweb/console@1", payload: { level: n3, trace: [], payload: [JSON.stringify(e8)] } }, timestamp: Z() });
    } }, { key: "startCaptureAndTrySendingQueuedSnapshots", value: function() {
      this._startCapture();
    } }, { key: "_startCapture", value: function() {
      var e8 = this;
      if (!I(Object.assign) && !(this._captureStarted || this.instance.config.disable_session_recording || Yt(this.instance))) {
        this._captureStarted = true, this.sessionManager.checkAndGetSessionAndWindowId();
        var t3 = "v2" === this.recordingVersion ? "recorder-v2.js" : "recorder.js";
        this.instance.__loaded_recorder_version !== this.recordingVersion ? ae(this.instance.requestRouter.endpointFor("assets", "/static/".concat(t3, "?v=").concat(m.LIB_VERSION)), function(n3) {
          if (n3)
            return V.error("Could not load ".concat(t3), n3);
          e8._onScriptLoaded();
        }) : this._onScriptLoaded();
      }
    } }, { key: "_isInteractiveEvent", value: function(e8) {
      var t3;
      return 3 === e8.type && -1 !== Zt.indexOf(null === (t3 = e8.data) || void 0 === t3 ? void 0 : t3.source);
    } }, { key: "_updateWindowAndSessionIds", value: function(e8) {
      var t3 = this._isInteractiveEvent(e8);
      t3 || this.isIdle || e8.timestamp - this._lastActivityTimestamp > Xt && (this.isIdle = true, this._tryAddCustomEvent("sessionIdle", { reason: "user inactivity", timeSinceLastActive: e8.timestamp - this._lastActivityTimestamp, threshold: Xt }));
      var n3 = false;
      if (t3 && (this._lastActivityTimestamp = e8.timestamp, this.isIdle && (this.isIdle = false, this._tryAddCustomEvent("sessionNoLongerIdle", { reason: "user activity", type: e8.type }), n3 = true)), !this.isIdle) {
        var r3 = this.sessionManager.checkAndGetSessionAndWindowId(!t3, e8.timestamp), i3 = r3.windowId, o3 = r3.sessionId, s3 = this.sessionId !== o3, a2 = this.windowId !== i3;
        this.windowId = i3, this.sessionId = o3, (n3 || -1 === [Ct, Ot].indexOf(e8.type) && (a2 || s3)) && this._tryTakeFullSnapshot();
      }
    } }, { key: "_tryRRWebMethod", value: function(e8) {
      try {
        return e8.rrwebMethod(), true;
      } catch (t3) {
        return V.warn("[Session-Recording] could not emit queued rrweb event.", t3), this.queuedRRWebEvents.length < 10 && this.queuedRRWebEvents.push({ enqueuedAt: e8.enqueuedAt || Date.now(), attempt: e8.attempt++, rrwebMethod: e8.rrwebMethod }), false;
      }
    } }, { key: "_tryAddCustomEvent", value: function(e8, t3) {
      var n3 = this;
      return this._tryRRWebMethod(en(function() {
        return n3.rrwebRecord.addCustomEvent(e8, t3);
      }));
    } }, { key: "_tryTakeFullSnapshot", value: function() {
      var e8 = this;
      return this._tryRRWebMethod(en(function() {
        return e8.rrwebRecord.takeFullSnapshot();
      }));
    } }, { key: "_onScriptLoaded", value: function() {
      var e8, n3 = this, r3 = { blockClass: "ph-no-capture", blockSelector: void 0, ignoreClass: "ph-ignore-input", maskTextClass: "ph-mask", maskTextSelector: void 0, maskTextFn: void 0, maskAllInputs: true, maskInputOptions: {}, maskInputFn: void 0, slimDOMOptions: {}, collectFonts: false, inlineStylesheet: true, recordCrossOriginIframes: false };
      this.rrwebRecord = T.rrweb ? T.rrweb.record : T.rrwebRecord;
      for (var i3 = this.instance.config.session_recording, o3 = 0, s3 = Object.entries(i3 || {}); o3 < s3.length; o3++) {
        var a2 = f(s3[o3], 2), u2 = a2[0], l2 = a2[1];
        u2 in r3 && (r3[u2] = l2);
      }
      if (this.canvasRecording && this.canvasRecording.enabled && (r3.recordCanvas = true, r3.sampling = { canvas: this.canvasRecording.fps }, r3.dataURLOptions = { type: "image/webp", quality: this.canvasRecording.quality }), this.rrwebRecord) {
        this.mutationRateLimiter = null !== (e8 = this.mutationRateLimiter) && void 0 !== e8 ? e8 : new Tt(this.rrwebRecord, { onBlockedNode: function(e9, t3) {
          var r4 = "Too many mutations on node '".concat(e9, "'. Rate limiting. This could be due to SVG animations or something similar");
          V.info(r4, { node: t3 }), n3.log("[PostHog Recorder] " + r4, "warn");
        } }), this._scheduleFullSnapshot();
        var c2 = this._gatherRRWebPlugins();
        this.stopRrweb = this.rrwebRecord(t2({ emit: function(e9) {
          n3.onRRwebEmit(e9);
        }, plugins: c2 }, r3)), this.instance._addCaptureHook(function(e9) {
          try {
            if ("$pageview" === e9) {
              var t3 = T ? n3._maskUrl(T.location.href) : "";
              if (!t3)
                return;
              n3._tryAddCustomEvent("$pageview", { href: t3 }), n3._tryTakeFullSnapshot();
            }
          } catch (e10) {
            V.error("Could not add $pageview to rrweb session", e10);
          }
        }), this._lastActivityTimestamp = Date.now(), this.isIdle = false, this._tryAddCustomEvent("$session_options", { sessionRecordingOptions: r3, activePlugins: c2.map(function(e9) {
          return null == e9 ? void 0 : e9.name;
        }) }), this._tryAddCustomEvent("$posthog_config", { config: this.instance.config });
      } else
        V.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.");
    } }, { key: "_scheduleFullSnapshot", value: function() {
      var e8 = this;
      this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), this._fullSnapshotTimer = setInterval(function() {
        e8._tryTakeFullSnapshot();
      }, Kt);
    } }, { key: "_gatherRRWebPlugins", value: function() {
      var e8 = [];
      (U.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled && e8.push(U.rrwebConsoleRecord.getRecordConsolePlugin()), this.networkPayloadCapture && P(U.getRecordNetworkPlugin)) && (!kt.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? e8.push(U.getRecordNetworkPlugin(Lt(this.instance.config, this.networkPayloadCapture))) : V.info("[SessionReplay-NetworkCapture] not started because we are on localhost."));
      return e8;
    } }, { key: "onRRwebEmit", value: function(e8) {
      if (this._processQueuedEvents(), e8 && R(e8)) {
        if (e8.type === $t.Meta) {
          var t3 = this._maskUrl(e8.data.href);
          if (!t3)
            return;
          e8.data.href = t3;
        }
        e8.type === $t.FullSnapshot && this._scheduleFullSnapshot();
        var n3 = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e8) : e8;
        if (n3) {
          var r3 = function(e9) {
            var t4 = e9;
            if (t4 && R(t4) && 6 === t4.type && R(t4.data) && "rrweb/console@1" === t4.data.plugin) {
              t4.data.payload.payload.length > 10 && (t4.data.payload.payload = t4.data.payload.payload.slice(0, 10), t4.data.payload.payload.push("...[truncated]"));
              for (var n4 = [], r4 = 0; r4 < t4.data.payload.payload.length; r4++)
                t4.data.payload.payload[r4] && t4.data.payload.payload[r4].length > 2e3 ? n4.push(t4.data.payload.payload[r4].slice(0, 2e3) + "...[truncated]") : n4.push(t4.data.payload.payload[r4]);
              return t4.data.payload.payload = n4, e9;
            }
            return e9;
          }(n3), i3 = JSON.stringify(r3).length;
          if (this._updateWindowAndSessionIds(r3), !this.isIdle || r3.type === $t.Custom) {
            var o3 = { $snapshot_bytes: i3, $snapshot_data: r3, $session_id: this.sessionId, $window_id: this.windowId };
            "disabled" !== this.status ? this._captureSnapshotBuffered(o3) : this.clearBuffer();
          }
        }
      }
    } }, { key: "_processQueuedEvents", value: function() {
      var e8 = this;
      if (this.queuedRRWebEvents.length) {
        var t3 = p(this.queuedRRWebEvents);
        this.queuedRRWebEvents = [], t3.forEach(function(n3) {
          Date.now() - n3.enqueuedAt > 2e3 ? e8._tryAddCustomEvent("rrwebQueueTimeout", { enqueuedAt: n3.enqueuedAt, attempt: n3.attempt, queueLength: t3.length }) : e8._tryRRWebMethod(n3) && e8._tryAddCustomEvent("rrwebQueueSuccess", { enqueuedAt: n3.enqueuedAt, attempt: n3.attempt, queueLength: t3.length });
        });
      }
    } }, { key: "_maskUrl", value: function(e8) {
      var t3 = this.instance.config.session_recording;
      if (t3.maskNetworkRequestFn) {
        var n3, r3 = { url: e8 };
        return null === (n3 = r3 = t3.maskNetworkRequestFn(r3)) || void 0 === n3 ? void 0 : n3.url;
      }
      return e8;
    } }, { key: "clearBuffer", value: function() {
      return this.buffer = void 0, { size: 0, data: [], sessionId: this.sessionId, windowId: this.windowId };
    } }, { key: "_flushBuffer", value: function() {
      var e8 = this;
      this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
      var t3 = this._minimumDuration, n3 = this.sessionDuration, r3 = C(n3) && n3 >= 0, i3 = C(t3) && r3 && n3 < t3;
      return "buffering" === this.status || i3 ? (this.flushBufferTimer = setTimeout(function() {
        e8._flushBuffer();
      }, 2e3), this.buffer || this.clearBuffer()) : this.buffer && 0 !== this.buffer.data.length ? (this._captureSnapshot({ $snapshot_bytes: this.buffer.size, $snapshot_data: this.buffer.data, $session_id: this.buffer.sessionId, $window_id: this.buffer.windowId }), this.clearBuffer()) : this.buffer || this.clearBuffer();
    } }, { key: "_captureSnapshotBuffered", value: function(e8) {
      var t3, n3 = this, r3 = 2 + ((null === (t3 = this.buffer) || void 0 === t3 ? void 0 : t3.data.length) || 0);
      (!this.buffer || this.buffer.size + e8.$snapshot_bytes + r3 > 943718.4 || this.buffer.sessionId && this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), x(this.buffer.sessionId) && !x(this.sessionId) && (this.buffer.sessionId = this.sessionId, this.buffer.windowId = this.windowId), this.buffer.size += e8.$snapshot_bytes, this.buffer.data.push(e8.$snapshot_data), this.flushBufferTimer || (this.flushBufferTimer = setTimeout(function() {
        n3._flushBuffer();
      }, 2e3));
    } }, { key: "_captureSnapshot", value: function(e8) {
      this.instance.capture("$snapshot", e8, { method: "POST", _url: this.instance.requestRouter.endpointFor("api", this._endpoint), _noTruncate: true, _batchKey: "recordings", _metrics: { rrweb_full_snapshot: e8.$snapshot_data.type === Ct } });
    } }]), e7;
  }();
  var nn = function() {
    function e7(t3) {
      r2(this, e7), this.instance = t3, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags();
    }
    return o2(e7, [{ key: "call", value: function() {
      var e8 = this, t3 = ie(JSON.stringify({ token: this.instance.config.token, distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups(), person_properties: this.instance.get_property(Ne), group_properties: this.instance.get_property(Be), disable_flags: this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load || void 0 }));
      this.instance._send_request(this.instance.requestRouter.endpointFor("api", "/decide/?v=3"), { data: t3, verbose: true }, { method: "POST" }, function(t4) {
        return e8.parseDecideResponse(t4);
      });
    } }, { key: "parseDecideResponse", value: function(e8) {
      var t3, n3 = this;
      if (this.instance.featureFlags.setReloadingPaused(false), this.instance.featureFlags._startReloadTimer(), 0 !== (null == e8 ? void 0 : e8.status)) {
        if (!L || !L.body)
          return V.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(function() {
            n3.parseDecideResponse(e8);
          }, 500);
        this.instance.toolbar.afterDecideResponse(e8), null === (t3 = this.instance.sessionRecording) || void 0 === t3 || t3.afterDecideResponse(e8), Qe.afterDecideResponse(e8, this.instance), this.instance._afterDecideResponse(e8), this.instance.config.advanced_disable_feature_flags_on_first_load || this.instance.config.advanced_disable_feature_flags || this.instance.featureFlags.receivedFeatureFlags(e8);
        var r3 = null == T ? void 0 : T.extendPostHogWithSurveys;
        e8.surveys && !r3 && ae(this.instance.requestRouter.endpointFor("assets", "/static/surveys.js"), function(e9) {
          if (e9)
            return V.error("Could not load surveys script", e9);
          T.extendPostHogWithSurveys(n3.instance);
        });
        var i3 = null == T ? void 0 : T.extendPostHogWithExceptionAutoCapture;
        if (e8.autocaptureExceptions && e8.autocaptureExceptions && I(i3) && ae(this.instance.requestRouter.endpointFor("assets", "/static/exception-autocapture.js"), function(t4) {
          if (t4)
            return V.error("Could not load exception autocapture script", t4);
          T.extendPostHogWithExceptionAutocapture(n3.instance, e8);
        }), e8.siteApps)
          if (this.instance.config.opt_in_site_apps) {
            var o3, s3 = v(e8.siteApps);
            try {
              var a2 = function() {
                var e9 = o3.value, t4 = e9.id, r4 = e9.url, i4 = n3.instance.requestRouter.endpointFor("assets", r4);
                U["__$$ph_site_app_".concat(t4)] = n3.instance, ae(i4, function(e10) {
                  e10 && V.error("Error while initializing PostHog app with config id ".concat(t4), e10);
                });
              };
              for (s3.s(); !(o3 = s3.n()).done; )
                a2();
            } catch (e9) {
              s3.e(e9);
            } finally {
              s3.f();
            }
          } else
            e8.siteApps.length > 0 && V.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
      } else
        V.error("Failed to fetch feature flags from PostHog.");
    } }]), e7;
  }();
  var rn = ["source"];
  var on = null != T && T.location ? Rt(T.location.hash, "__posthog") || Rt(location.hash, "state") : null;
  var sn = function() {
    function e7(t3) {
      r2(this, e7), this.instance = t3;
    }
    return o2(e7, [{ key: "afterDecideResponse", value: function(e8) {
      var n3 = e8.toolbarParams || e8.editorParams || (e8.toolbarVersion ? { toolbarVersion: e8.toolbarVersion } : {});
      e8.isAuthenticated && n3.toolbarVersion && 0 === n3.toolbarVersion.indexOf("toolbar") && this.loadToolbar(t2({}, n3));
    } }, { key: "maybeLoadToolbar", value: function() {
      var e8, t3, n3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, r3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
      if (!T || !L)
        return false;
      n3 = null !== (e8 = n3) && void 0 !== e8 ? e8 : T.location, i3 = null !== (t3 = i3) && void 0 !== t3 ? t3 : T.history;
      try {
        if (!r3) {
          try {
            T.localStorage.setItem("test", "test"), T.localStorage.removeItem("test");
          } catch (e9) {
            return false;
          }
          r3 = null == T ? void 0 : T.localStorage;
        }
        var o3, s3 = on || Rt(n3.hash, "__posthog") || Rt(n3.hash, "state"), a2 = s3 ? ee(function() {
          return JSON.parse(atob(decodeURIComponent(s3)));
        }) || ee(function() {
          return JSON.parse(decodeURIComponent(s3));
        }) : null;
        return a2 && "ph_authorize" === a2.action ? ((o3 = a2).source = "url", o3 && Object.keys(o3).length > 0 && (a2.desiredHash ? n3.hash = a2.desiredHash : i3 ? i3.replaceState("", L.title, n3.pathname + n3.search) : n3.hash = "")) : ((o3 = JSON.parse(r3.getItem("_postHogToolbarParams") || "{}")).source = "localstorage", delete o3.userIntent), !(!o3.token || this.instance.config.token !== o3.token) && (this.loadToolbar(o3), true);
      } catch (e9) {
        return false;
      }
    } }, { key: "loadToolbar", value: function(e8) {
      var n3 = this;
      if (!T || U._postHogToolbarLoaded)
        return false;
      U._postHogToolbarLoaded = true;
      var r3 = 3e5, i3 = Math.floor(Date.now() / r3) * r3, o3 = this.instance.requestRouter.endpointFor("assets", "/static/toolbar.js?t=".concat(i3)), s3 = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics, a2 = t2(t2({ token: this.instance.config.token }, e8), {}, { apiURL: this.instance.requestRouter.endpointFor("api") }, s3 ? { instrument: false } : {});
      a2.source;
      var u2 = c(a2, rn);
      return T.localStorage.setItem("_postHogToolbarParams", JSON.stringify(u2)), ae(o3, function(e9) {
        e9 ? V.error("Failed to load toolbar", e9) : (U.ph_load_toolbar || U.ph_load_editor)(a2, n3.instance);
      }), se(T, "turbolinks:load", function() {
        U._postHogToolbarLoaded = false, n3.loadToolbar(a2);
      }), true;
    } }, { key: "_loadEditor", value: function(e8) {
      return this.loadToolbar(e8);
    } }, { key: "maybeLoadEditor", value: function() {
      var e8 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
      return this.maybeLoadToolbar(e8, t3, n3);
    } }]), e7;
  }();
  var an = function() {
    function e7() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
      r2(this, e7), this.isPolling = true, this._event_queue = [], this._empty_queue_count = 0, this._poller = void 0, this._pollInterval = t3;
    }
    return o2(e7, [{ key: "setPollInterval", value: function(e8) {
      this._pollInterval = e8, this.isPolling && this.poll();
    } }, { key: "poll", value: function() {
    } }, { key: "unload", value: function() {
    } }, { key: "getTime", value: function() {
      return (/* @__PURE__ */ new Date()).getTime();
    } }]), e7;
  }();
  var un = function(e7) {
    a(i3, an);
    var n3 = h(i3);
    function i3(e8) {
      var t3, o3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
      return r2(this, i3), (t3 = n3.call(this, o3)).handlePollRequest = e8, t3;
    }
    return o2(i3, [{ key: "enqueue", value: function(e8, t3, n4) {
      this._event_queue.push({ url: e8, data: t3, options: n4 }), this.isPolling || (this.isPolling = true, this.poll());
    } }, { key: "poll", value: function() {
      var e8 = this;
      clearTimeout(this._poller), this._poller = setTimeout(function() {
        if (e8._event_queue.length > 0) {
          var t3 = e8.formatQueue(), n4 = function(n5) {
            var r4 = t3[n5], i4 = r4.url, o3 = r4.data, s3 = r4.options;
            Y(o3, function(t4, n6) {
              o3[n6].offset = Math.abs(o3[n6].timestamp - e8.getTime()), delete o3[n6].timestamp;
            }), e8.handlePollRequest(i4, o3, s3);
          };
          for (var r3 in t3)
            n4(r3);
          e8._event_queue.length = 0, e8._empty_queue_count = 0;
        } else
          e8._empty_queue_count++;
        e8._empty_queue_count > 4 && (e8.isPolling = false, e8._empty_queue_count = 0), e8.isPolling && e8.poll();
      }, this._pollInterval);
    } }, { key: "unload", value: function() {
      var e8 = this;
      clearTimeout(this._poller);
      var n4 = this._event_queue.length > 0 ? this.formatQueue() : {};
      this._event_queue.length = 0;
      var r3 = Object.values(n4);
      [].concat(p(r3.filter(function(e9) {
        return 0 === e9.url.indexOf("/e");
      })), p(r3.filter(function(e9) {
        return 0 !== e9.url.indexOf("/e");
      }))).map(function(n5) {
        var r4 = n5.url, i4 = n5.data, o3 = n5.options;
        e8.handlePollRequest(r4, i4, t2(t2({}, o3), {}, { transport: "sendBeacon" }));
      });
    } }, { key: "formatQueue", value: function() {
      var e8 = {};
      return Y(this._event_queue, function(t3) {
        var n4 = t3.url, r3 = t3.data, i4 = t3.options, o3 = (i4 ? i4._batchKey : null) || n4;
        I(e8[o3]) && (e8[o3] = { data: [], url: n4, options: i4 }), i4 && e8[o3].options && e8[o3].options._metrics && !e8[o3].options._metrics.rrweb_full_snapshot && (e8[o3].options._metrics.rrweb_full_snapshot = i4._metrics.rrweb_full_snapshot), e8[o3].data.push(r3);
      }), e8;
    } }]), i3;
  }();
  var ln = Uint8Array;
  var cn = Uint16Array;
  var dn = Uint32Array;
  var hn = new ln([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
  var fn = new ln([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
  var pn = new ln([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var _n = function(e7, t3) {
    for (var n3 = new cn(31), r3 = 0; r3 < 31; ++r3)
      n3[r3] = t3 += 1 << e7[r3 - 1];
    var i3 = new dn(n3[30]);
    for (r3 = 1; r3 < 30; ++r3)
      for (var o3 = n3[r3]; o3 < n3[r3 + 1]; ++o3)
        i3[o3] = o3 - n3[r3] << 5 | r3;
    return [n3, i3];
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
  var Sn = function(e7, t3, n3) {
    for (var r3 = e7.length, i3 = 0, o3 = new cn(t3); i3 < r3; ++i3)
      ++o3[e7[i3] - 1];
    var s3, a2 = new cn(t3);
    for (i3 = 0; i3 < t3; ++i3)
      a2[i3] = a2[i3 - 1] + o3[i3 - 1] << 1;
    if (n3) {
      s3 = new cn(1 << t3);
      var u2 = 15 - t3;
      for (i3 = 0; i3 < r3; ++i3)
        if (e7[i3])
          for (var l2 = i3 << 4 | e7[i3], c2 = t3 - e7[i3], d2 = a2[e7[i3] - 1]++ << c2, h2 = d2 | (1 << c2) - 1; d2 <= h2; ++d2)
            s3[bn[d2] >>> u2] = l2;
    } else
      for (s3 = new cn(r3), i3 = 0; i3 < r3; ++i3)
        s3[i3] = bn[a2[e7[i3] - 1]++] >>> 15 - e7[i3];
    return s3;
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
  var xn = function(e7) {
    return (e7 / 8 >> 0) + (7 & e7 && 1);
  };
  var Cn = function(e7, t3, n3) {
    (null == t3 || t3 < 0) && (t3 = 0), (null == n3 || n3 > e7.length) && (n3 = e7.length);
    var r3 = new (e7 instanceof cn ? cn : e7 instanceof dn ? dn : ln)(n3 - t3);
    return r3.set(e7.subarray(t3, n3)), r3;
  };
  var On = function(e7, t3, n3) {
    n3 <<= 7 & t3;
    var r3 = t3 / 8 >> 0;
    e7[r3] |= n3, e7[r3 + 1] |= n3 >>> 8;
  };
  var Tn = function(e7, t3, n3) {
    n3 <<= 7 & t3;
    var r3 = t3 / 8 >> 0;
    e7[r3] |= n3, e7[r3 + 1] |= n3 >>> 8, e7[r3 + 2] |= n3 >>> 16;
  };
  var $n = function(e7, t3) {
    for (var n3 = [], r3 = 0; r3 < e7.length; ++r3)
      e7[r3] && n3.push({ s: r3, f: e7[r3] });
    var i3 = n3.length, o3 = n3.slice();
    if (!i3)
      return [new ln(0), 0];
    if (1 == i3) {
      var s3 = new ln(n3[0].s + 1);
      return s3[n3[0].s] = 1, [s3, 1];
    }
    n3.sort(function(e8, t4) {
      return e8.f - t4.f;
    }), n3.push({ s: -1, f: 25001 });
    var a2 = n3[0], u2 = n3[1], l2 = 0, c2 = 1, d2 = 2;
    for (n3[0] = { s: -1, f: a2.f + u2.f, l: a2, r: u2 }; c2 != i3 - 1; )
      a2 = n3[n3[l2].f < n3[d2].f ? l2++ : d2++], u2 = n3[l2 != c2 && n3[l2].f < n3[d2].f ? l2++ : d2++], n3[c2++] = { s: -1, f: a2.f + u2.f, l: a2, r: u2 };
    var h2 = o3[0].s;
    for (r3 = 1; r3 < i3; ++r3)
      o3[r3].s > h2 && (h2 = o3[r3].s);
    var f2 = new cn(h2 + 1), p2 = An(n3[c2 - 1], f2, 0);
    if (p2 > t3) {
      r3 = 0;
      var _2 = 0, g2 = p2 - t3, v2 = 1 << g2;
      for (o3.sort(function(e8, t4) {
        return f2[t4.s] - f2[e8.s] || e8.f - t4.f;
      }); r3 < i3; ++r3) {
        var m2 = o3[r3].s;
        if (!(f2[m2] > t3))
          break;
        _2 += v2 - (1 << p2 - f2[m2]), f2[m2] = t3;
      }
      for (_2 >>>= g2; _2 > 0; ) {
        var y2 = o3[r3].s;
        f2[y2] < t3 ? _2 -= 1 << t3 - f2[y2]++ - 1 : ++r3;
      }
      for (; r3 >= 0 && _2; --r3) {
        var b2 = o3[r3].s;
        f2[b2] == t3 && (--f2[b2], ++_2);
      }
      p2 = t3;
    }
    return [new ln(f2), p2];
  };
  var An = function e4(t3, n3, r3) {
    return -1 == t3.s ? Math.max(e4(t3.l, n3, r3 + 1), e4(t3.r, n3, r3 + 1)) : n3[t3.s] = r3;
  };
  var Mn = function(e7) {
    for (var t3 = e7.length; t3 && !e7[--t3]; )
      ;
    for (var n3 = new cn(++t3), r3 = 0, i3 = e7[0], o3 = 1, s3 = function(e8) {
      n3[r3++] = e8;
    }, a2 = 1; a2 <= t3; ++a2)
      if (e7[a2] == i3 && a2 != t3)
        ++o3;
      else {
        if (!i3 && o3 > 2) {
          for (; o3 > 138; o3 -= 138)
            s3(32754);
          o3 > 2 && (s3(o3 > 10 ? o3 - 11 << 5 | 28690 : o3 - 3 << 5 | 12305), o3 = 0);
        } else if (o3 > 3) {
          for (s3(i3), --o3; o3 > 6; o3 -= 6)
            s3(8304);
          o3 > 2 && (s3(o3 - 3 << 5 | 8208), o3 = 0);
        }
        for (; o3--; )
          s3(i3);
        o3 = 1, i3 = e7[a2];
      }
    return [n3.subarray(0, r3), t3];
  };
  var qn = function(e7, t3) {
    for (var n3 = 0, r3 = 0; r3 < t3.length; ++r3)
      n3 += e7[r3] * t3[r3];
    return n3;
  };
  var Dn = function(e7, t3, n3) {
    var r3 = n3.length, i3 = xn(t3 + 2);
    e7[i3] = 255 & r3, e7[i3 + 1] = r3 >>> 8, e7[i3 + 2] = 255 ^ e7[i3], e7[i3 + 3] = 255 ^ e7[i3 + 1];
    for (var o3 = 0; o3 < r3; ++o3)
      e7[i3 + o3 + 4] = n3[o3];
    return 8 * (i3 + 4 + r3);
  };
  var Ln = function(e7, t3, n3, r3, i3, o3, s3, a2, u2, l2, c2) {
    On(t3, c2++, n3), ++i3[256];
    for (var d2 = $n(i3, 15), h2 = d2[0], f2 = d2[1], p2 = $n(o3, 15), _2 = p2[0], g2 = p2[1], v2 = Mn(h2), m2 = v2[0], y2 = v2[1], b2 = Mn(_2), k2 = b2[0], w2 = b2[1], S2 = new cn(19), F2 = 0; F2 < m2.length; ++F2)
      S2[31 & m2[F2]]++;
    for (F2 = 0; F2 < k2.length; ++F2)
      S2[31 & k2[F2]]++;
    for (var P2 = $n(S2, 7), R2 = P2[0], I2 = P2[1], E2 = 19; E2 > 4 && !R2[pn[E2 - 1]]; --E2)
      ;
    var x2, C2, O2, T2, $2 = l2 + 5 << 3, A2 = qn(i3, Fn) + qn(o3, Pn) + s3, M2 = qn(i3, h2) + qn(o3, _2) + s3 + 14 + 3 * E2 + qn(S2, R2) + (2 * S2[16] + 3 * S2[17] + 7 * S2[18]);
    if ($2 <= A2 && $2 <= M2)
      return Dn(t3, c2, e7.subarray(u2, u2 + l2));
    if (On(t3, c2, 1 + (M2 < A2)), c2 += 2, M2 < A2) {
      x2 = Sn(h2, f2, 0), C2 = h2, O2 = Sn(_2, g2, 0), T2 = _2;
      var q2 = Sn(R2, I2, 0);
      On(t3, c2, y2 - 257), On(t3, c2 + 5, w2 - 1), On(t3, c2 + 10, E2 - 4), c2 += 14;
      for (F2 = 0; F2 < E2; ++F2)
        On(t3, c2 + 3 * F2, R2[pn[F2]]);
      c2 += 3 * E2;
      for (var D2 = [m2, k2], L2 = 0; L2 < 2; ++L2) {
        var N2 = D2[L2];
        for (F2 = 0; F2 < N2.length; ++F2) {
          var B2 = 31 & N2[F2];
          On(t3, c2, q2[B2]), c2 += R2[B2], B2 > 15 && (On(t3, c2, N2[F2] >>> 5 & 127), c2 += N2[F2] >>> 12);
        }
      }
    } else
      x2 = In, C2 = Fn, O2 = En, T2 = Pn;
    for (F2 = 0; F2 < a2; ++F2)
      if (r3[F2] > 255) {
        B2 = r3[F2] >>> 18 & 31;
        Tn(t3, c2, x2[B2 + 257]), c2 += C2[B2 + 257], B2 > 7 && (On(t3, c2, r3[F2] >>> 23 & 31), c2 += hn[B2]);
        var j2 = 31 & r3[F2];
        Tn(t3, c2, O2[j2]), c2 += T2[j2], j2 > 3 && (Tn(t3, c2, r3[F2] >>> 5 & 8191), c2 += fn[j2]);
      } else
        Tn(t3, c2, x2[r3[F2]]), c2 += C2[r3[F2]];
    return Tn(t3, c2, x2[256]), c2 + C2[256];
  };
  var Nn = new dn([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
  var Bn = new ln(0);
  var jn = function() {
    for (var e7 = new dn(256), t3 = 0; t3 < 256; ++t3) {
      for (var n3 = t3, r3 = 9; --r3; )
        n3 = (1 & n3 && 3988292384) ^ n3 >>> 1;
      e7[t3] = n3;
    }
    return e7;
  }();
  var Hn = function() {
    var e7 = 4294967295;
    return { p: function(t3) {
      for (var n3 = e7, r3 = 0; r3 < t3.length; ++r3)
        n3 = jn[255 & n3 ^ t3[r3]] ^ n3 >>> 8;
      e7 = n3;
    }, d: function() {
      return 4294967295 ^ e7;
    } };
  };
  var Un = function(e7, t3, n3, r3, i3) {
    return function(e8, t4, n4, r4, i4, o3) {
      var s3 = e8.length, a2 = new ln(r4 + s3 + 5 * (1 + Math.floor(s3 / 7e3)) + i4), u2 = a2.subarray(r4, a2.length - i4), l2 = 0;
      if (!t4 || s3 < 8)
        for (var c2 = 0; c2 <= s3; c2 += 65535) {
          var d2 = c2 + 65535;
          d2 < s3 ? l2 = Dn(u2, l2, e8.subarray(c2, d2)) : (u2[c2] = o3, l2 = Dn(u2, l2, e8.subarray(c2, s3)));
        }
      else {
        for (var h2 = Nn[t4 - 1], f2 = h2 >>> 13, p2 = 8191 & h2, _2 = (1 << n4) - 1, g2 = new cn(32768), v2 = new cn(_2 + 1), m2 = Math.ceil(n4 / 3), y2 = 2 * m2, b2 = function(t5) {
          return (e8[t5] ^ e8[t5 + 1] << m2 ^ e8[t5 + 2] << y2) & _2;
        }, k2 = new dn(25e3), w2 = new cn(288), S2 = new cn(32), F2 = 0, P2 = 0, R2 = (c2 = 0, 0), I2 = 0, E2 = 0; c2 < s3; ++c2) {
          var x2 = b2(c2), C2 = 32767 & c2, O2 = v2[x2];
          if (g2[C2] = O2, v2[x2] = C2, I2 <= c2) {
            var T2 = s3 - c2;
            if ((F2 > 7e3 || R2 > 24576) && T2 > 423) {
              l2 = Ln(e8, u2, 0, k2, w2, S2, P2, R2, E2, c2 - E2, l2), R2 = F2 = P2 = 0, E2 = c2;
              for (var $2 = 0; $2 < 286; ++$2)
                w2[$2] = 0;
              for ($2 = 0; $2 < 30; ++$2)
                S2[$2] = 0;
            }
            var A2 = 2, M2 = 0, q2 = p2, D2 = C2 - O2 & 32767;
            if (T2 > 2 && x2 == b2(c2 - D2))
              for (var L2 = Math.min(f2, T2) - 1, N2 = Math.min(32767, c2), B2 = Math.min(258, T2); D2 <= N2 && --q2 && C2 != O2; ) {
                if (e8[c2 + A2] == e8[c2 + A2 - D2]) {
                  for (var j2 = 0; j2 < B2 && e8[c2 + j2] == e8[c2 + j2 - D2]; ++j2)
                    ;
                  if (j2 > A2) {
                    if (A2 = j2, M2 = D2, j2 > L2)
                      break;
                    var H2 = Math.min(D2, j2 - 2), U2 = 0;
                    for ($2 = 0; $2 < H2; ++$2) {
                      var W2 = c2 - D2 + $2 + 32768 & 32767, V2 = W2 - g2[W2] + 32768 & 32767;
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
              k2[R2++] = e8[c2], ++w2[e8[c2]];
          }
        }
        l2 = Ln(e8, u2, o3, k2, w2, S2, P2, R2, E2, c2 - E2, l2), o3 || (l2 = Dn(u2, l2, Bn));
      }
      return Cn(a2, 0, r4 + xn(l2) + i4);
    }(e7, null == t3.level ? 6 : t3.level, null == t3.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e7.length)))) : 12 + t3.mem, n3, r3, !i3);
  };
  var Wn = function(e7, t3, n3) {
    for (; n3; ++t3)
      e7[t3] = n3, n3 >>>= 8;
  };
  var Vn = function(e7, t3) {
    var n3 = t3.filename;
    if (e7[0] = 31, e7[1] = 139, e7[2] = 8, e7[8] = t3.level < 2 ? 4 : 9 == t3.level ? 2 : 0, e7[9] = 3, 0 != t3.mtime && Wn(e7, 4, Math.floor(new Date(t3.mtime || Date.now()) / 1e3)), n3) {
      e7[3] = 8;
      for (var r3 = 0; r3 <= n3.length; ++r3)
        e7[r3 + 10] = n3.charCodeAt(r3);
    }
  };
  var Gn = function(e7) {
    return 10 + (e7.filename && e7.filename.length + 1 || 0);
  };
  function zn(e7, t3) {
    void 0 === t3 && (t3 = {});
    var n3 = Hn(), r3 = e7.length;
    n3.p(e7);
    var i3 = Un(e7, t3, Gn(t3), 8), o3 = i3.length;
    return Vn(i3, t3), Wn(i3, o3 - 8, n3.d()), Wn(i3, o3 - 4, r3), i3;
  }
  function Qn(e7, t3) {
    var n3 = e7.length;
    if (!t3 && "undefined" != typeof TextEncoder)
      return new TextEncoder().encode(e7);
    for (var r3 = new ln(e7.length + (e7.length >>> 1)), i3 = 0, o3 = function(e8) {
      r3[i3++] = e8;
    }, s3 = 0; s3 < n3; ++s3) {
      if (i3 + 5 > r3.length) {
        var a2 = new ln(i3 + 8 + (n3 - s3 << 1));
        a2.set(r3), r3 = a2;
      }
      var u2 = e7.charCodeAt(s3);
      u2 < 128 || t3 ? o3(u2) : u2 < 2048 ? (o3(192 | u2 >>> 6), o3(128 | 63 & u2)) : u2 > 55295 && u2 < 57344 ? (o3(240 | (u2 = 65536 + (1047552 & u2) | 1023 & e7.charCodeAt(++s3)) >>> 18), o3(128 | u2 >>> 12 & 63), o3(128 | u2 >>> 6 & 63), o3(128 | 63 & u2)) : (o3(224 | u2 >>> 12), o3(128 | u2 >>> 6 & 63), o3(128 | 63 & u2));
    }
    return Cn(r3, 0, i3);
  }
  !function(e7) {
    e7.GZipJS = "gzip-js", e7.Base64 = "base64";
  }(Rn || (Rn = {}));
  var Yn = function(e7, t3, n3) {
    var r3 = t3 || {};
    r3.ip = n3.ip ? 1 : 0, r3._ = (/* @__PURE__ */ new Date()).getTime().toString(), r3.ver = m.LIB_VERSION;
    var i3 = e7.split("?");
    if (i3.length > 1) {
      var o3, s3 = v(i3[1].split("&"));
      try {
        for (s3.s(); !(o3 = s3.n()).done; ) {
          var a2 = o3.value.split("=")[0];
          I(r3[a2]) || delete r3[a2];
        }
      } catch (e8) {
        s3.e(e8);
      } finally {
        s3.f();
      }
    }
    var u2 = e7.indexOf("?") > -1 ? "&" : "?";
    return e7 + u2 + function(e8) {
      var t4, n4, r4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", i4 = [];
      return Y(e8, function(e9, r5) {
        I(e9) || I(r5) || "undefined" === r5 || (t4 = encodeURIComponent(e9.toString()), n4 = encodeURIComponent(r5), i4[i4.length] = n4 + "=" + t4);
      }), i4.join(r4);
    }(r3);
  };
  var Jn = function e5(t3, n3) {
    if (n3.blob && t3.buffer)
      return new Blob([F(t3) ? t3 : t3.buffer], { type: "text/plain" });
    if (n3.sendBeacon || n3.blob) {
      var r3 = e5(t3, { method: "POST" });
      return new Blob([r3], { type: "application/x-www-form-urlencoded" });
    }
    return "POST" !== n3.method ? null : (i3 = S(t3) || F(t3) ? "data=" + encodeURIComponent(t3) : "data=" + encodeURIComponent(t3.data), "compression" in t3 && t3.compression && (i3 += "&compression=" + t3.compression), i3);
    var i3;
  };
  var Kn = function(e7) {
    if (B && "fetch" === e7.options.transport) {
      var n3, r3 = Jn(e7.data, e7.options), i3 = new Headers();
      Y(i3, function(e8, t3) {
        i3.append(t3, e8);
      }), "POST" !== e7.options.method || e7.options.blob || i3.append("Content-Type", "application/x-www-form-urlencoded");
      var o3 = e7.url;
      return C(e7.retriesPerformedSoFar) && e7.retriesPerformedSoFar > 0 && (o3 = Yn(o3, { retry_count: e7.retriesPerformedSoFar }, {})), void B(o3, { method: (null === (n3 = e7.options) || void 0 === n3 ? void 0 : n3.method) || "GET", headers: i3, keepalive: "POST" === e7.options.method, body: r3 }).then(function(n4) {
        var r4 = n4.status;
        return n4.text().then(function(n5) {
          var o4, s3;
          if (null === (o4 = e7.onResponse) || void 0 === o4 || o4.call(e7, { statusCode: r4, responseText: n5 }), 200 !== r4)
            P(e7.onError) && e7.onError({ statusCode: r4, responseText: n5 }), (r4 < 400 || r4 > 500) && e7.retryQueue.enqueue(t2(t2({}, e7), {}, { headers: i3, retriesPerformedSoFar: (e7.retriesPerformedSoFar || 0) + 1 })), null === (s3 = e7.callback) || void 0 === s3 || s3.call(e7, { status: 0 });
          else
            try {
              var a2;
              null === (a2 = e7.callback) || void 0 === a2 || a2.call(e7, JSON.parse(n5));
            } catch (e8) {
              V.error(e8);
            }
        });
      }).catch(function(t3) {
        var n4;
        V.error(t3), null === (n4 = e7.callback) || void 0 === n4 || n4.call(e7, { status: 0 });
      });
    }
    return Xn(e7);
  };
  var Xn = function(e7) {
    var t3 = e7.url, n3 = e7.data, r3 = e7.headers, i3 = e7.options, o3 = e7.callback, s3 = e7.retriesPerformedSoFar, a2 = e7.retryQueue, u2 = e7.onError, l2 = e7.timeout, c2 = void 0 === l2 ? 6e4 : l2, d2 = e7.onResponse;
    C(s3) && s3 > 0 && (t3 = Yn(t3, { retry_count: s3 }, {}));
    var h2 = new XMLHttpRequest();
    h2.open(i3.method || "GET", t3, true);
    var f2 = Jn(n3, i3);
    Y(r3, function(e8, t4) {
      h2.setRequestHeader(t4, e8);
    }), "POST" !== i3.method || i3.blob || h2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), h2.timeout = c2, h2.withCredentials = true, h2.onreadystatechange = function() {
      if (4 === h2.readyState) {
        var e8 = { statusCode: h2.status, responseText: h2.responseText };
        if (null == d2 || d2(e8), 200 === h2.status) {
          if (o3) {
            var l3;
            try {
              l3 = JSON.parse(h2.responseText);
            } catch (e9) {
              return void V.error(e9);
            }
            o3(l3);
          }
        } else
          P(u2) && u2(e8), (h2.status < 400 || h2.status > 500) && a2.enqueue({ url: t3, data: n3, options: i3, headers: r3, retriesPerformedSoFar: (s3 || 0) + 1, callback: o3 }), null == o3 || o3({ status: 0 });
      }
    }, h2.send(f2);
  };
  var Zn;
  var er = function(e7) {
    a(i3, an);
    var n3 = h(i3);
    function i3(e8, t3) {
      var o3;
      return r2(this, i3), (o3 = n3.call(this)).isPolling = false, o3.queue = [], o3.areWeOnline = true, o3.onRequestError = e8, o3.rateLimiter = t3, !I(T) && "onLine" in T.navigator && (o3.areWeOnline = T.navigator.onLine, T.addEventListener("online", function() {
        o3._handleWeAreNowOnline();
      }), T.addEventListener("offline", function() {
        o3.areWeOnline = false;
      })), o3;
    }
    return o2(i3, [{ key: "enqueue", value: function(e8) {
      var t3 = e8.retriesPerformedSoFar || 0;
      if (!(t3 >= 10)) {
        var n4 = function(e9) {
          var t4 = 3e3 * Math.pow(2, e9), n5 = t4 / 2, r4 = Math.min(18e5, t4), i5 = (Math.random() - 0.5) * (r4 - n5);
          return Math.ceil(r4 + i5);
        }(t3), r3 = new Date(Date.now() + n4);
        this.queue.push({ retryAt: r3, requestData: e8 });
        var i4 = "Enqueued failed request for retry in ".concat(n4);
        navigator.onLine || (i4 += " (Browser is offline)"), V.warn(i4), this.isPolling || (this.isPolling = true, this.poll());
      }
    } }, { key: "poll", value: function() {
      var e8 = this;
      this._poller && clearTimeout(this._poller), this._poller = setTimeout(function() {
        e8.areWeOnline && e8.queue.length > 0 && e8.flush(), e8.poll();
      }, this._pollInterval);
    } }, { key: "flush", value: function() {
      var e8 = new Date(Date.now()), t3 = this.queue.filter(function(t4) {
        return t4.retryAt < e8;
      });
      if (t3.length > 0) {
        this.queue = this.queue.filter(function(t4) {
          return t4.retryAt >= e8;
        });
        var n4, r3 = v(t3);
        try {
          for (r3.s(); !(n4 = r3.n()).done; ) {
            var i4 = n4.value.requestData;
            this._executeXhrRequest(i4);
          }
        } catch (e9) {
          r3.e(e9);
        } finally {
          r3.f();
        }
      }
    } }, { key: "unload", value: function() {
      this._poller && (clearTimeout(this._poller), this._poller = void 0);
      var e8, n4 = v(this.queue);
      try {
        for (n4.s(); !(e8 = n4.n()).done; ) {
          var r3 = e8.value.requestData, i4 = r3.url, o3 = r3.data, s3 = r3.options;
          if (this.rateLimiter.isRateLimited(s3._batchKey))
            V.warn("[RetryQueue] is quota limited. Dropping request.");
          else
            try {
              null == T || T.navigator.sendBeacon(i4, Jn(o3, t2(t2({}, s3), {}, { sendBeacon: true })));
            } catch (e9) {
              V.error(e9);
            }
        }
      } catch (e9) {
        n4.e(e9);
      } finally {
        n4.f();
      }
      this.queue = [];
    } }, { key: "_executeXhrRequest", value: function(e8) {
      var t3 = e8.url, n4 = e8.data, r3 = e8.options, i4 = e8.headers, o3 = e8.callback, s3 = e8.retriesPerformedSoFar;
      this.rateLimiter.isRateLimited(r3._batchKey) || Kn({ url: t3, data: n4 || {}, options: r3 || {}, headers: i4 || {}, retriesPerformedSoFar: s3 || 0, callback: o3, retryQueue: this, onError: this.onRequestError, onResponse: this.rateLimiter.checkForLimiting });
    } }, { key: "_handleWeAreNowOnline", value: function() {
      this.areWeOnline = true, this.flush();
    } }]), i3;
  }();
  var tr = 1800;
  var nr = function() {
    function e7(t3, n3, i3, o3) {
      r2(this, e7), s2(this, "_sessionIdChangedHandlers", []), this.config = t3, this.persistence = n3, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = i3 || st, this._windowIdGenerator = o3 || st;
      var a2 = t3.persistence_name || t3.token, u2 = t3.session_idle_timeout_seconds || tr;
      if (C(u2) ? u2 > tr ? V.warn("session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.") : u2 < 60 && V.warn("session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.") : (V.warn("session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."), u2 = tr), this._sessionTimeoutMs = 1e3 * Math.min(Math.max(u2, 60), tr), this._window_id_storage_key = "ph_" + a2 + "_window_id", this._primary_window_exists_storage_key = "ph_" + a2 + "_primary_window_exists", this._canUseSessionStorage()) {
        var l2 = bt.parse(this._window_id_storage_key), c2 = bt.parse(this._primary_window_exists_storage_key);
        l2 && !c2 ? this._windowId = l2 : bt.remove(this._window_id_storage_key), bt.set(this._primary_window_exists_storage_key, true);
      }
      this._listenToReloadWindow();
    }
    return o2(e7, [{ key: "onSessionId", value: function(e8) {
      var t3 = this;
      return I(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e8), this._sessionId && e8(this._sessionId, this._windowId), function() {
        t3._sessionIdChangedHandlers = t3._sessionIdChangedHandlers.filter(function(t4) {
          return t4 !== e8;
        });
      };
    } }, { key: "_canUseSessionStorage", value: function() {
      return "memory" !== this.config.persistence && !this.persistence.disabled && bt.is_supported();
    } }, { key: "_setWindowId", value: function(e8) {
      e8 !== this._windowId && (this._windowId = e8, this._canUseSessionStorage() && bt.set(this._window_id_storage_key, e8));
    } }, { key: "_getWindowId", value: function() {
      return this._windowId ? this._windowId : this._canUseSessionStorage() ? bt.parse(this._window_id_storage_key) : null;
    } }, { key: "_setSessionId", value: function(e8, t3, n3) {
      e8 === this._sessionId && t3 === this._sessionActivityTimestamp && n3 === this._sessionStartTimestamp || (this._sessionStartTimestamp = n3, this._sessionActivityTimestamp = t3, this._sessionId = e8, this.persistence.register(s2({}, Me, [t3, e8, n3])));
    } }, { key: "_getSessionId", value: function() {
      if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp)
        return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
      var e8 = this.persistence.props[Me];
      return S(e8) && 2 === e8.length && e8.push(e8[0]), e8 || [0, null, 0];
    } }, { key: "resetSessionId", value: function() {
      this._setSessionId(null, null, null);
    } }, { key: "_listenToReloadWindow", value: function() {
      var e8 = this;
      null == T || T.addEventListener("beforeunload", function() {
        e8._canUseSessionStorage() && bt.remove(e8._primary_window_exists_storage_key);
      });
    } }, { key: "checkAndGetSessionAndWindowId", value: function() {
      var e8 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t3 = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || (/* @__PURE__ */ new Date()).getTime(), n3 = f(this._getSessionId(), 3), r3 = n3[0], i3 = n3[1], o3 = n3[2], s3 = this._getWindowId(), a2 = o3 && o3 > 0 && Math.abs(t3 - o3) > 864e5, u2 = false, l2 = !i3, c2 = !e8 && Math.abs(t3 - r3) > this._sessionTimeoutMs;
      l2 || c2 || a2 ? (i3 = this._sessionIdGenerator(), s3 = this._windowIdGenerator(), V.info("[SessionId] new session ID generated", { sessionId: i3, windowId: s3, changeReason: { noSessionId: l2, activityTimeout: c2, sessionPastMaximumLength: a2 } }), o3 = t3, u2 = true) : s3 || (s3 = this._windowIdGenerator(), u2 = true);
      var d2 = 0 === r3 || !e8 || a2 ? t3 : r3, h2 = 0 === o3 ? (/* @__PURE__ */ new Date()).getTime() : o3;
      return this._setWindowId(s3), this._setSessionId(i3, d2, h2), u2 && this._sessionIdChangedHandlers.forEach(function(e9) {
        return e9(i3, s3);
      }), { sessionId: i3, windowId: s3, sessionStartTimestamp: h2 };
    } }]), e7;
  }();
  !function(e7) {
    e7.US = "us", e7.EU = "eu", e7.CUSTOM = "custom";
  }(Zn || (Zn = {}));
  var rr = function() {
    function e7(t3) {
      r2(this, e7), this.instance = t3;
    }
    return o2(e7, [{ key: "apiHost", get: function() {
      return this.instance.config.api_host.replace(/\/$/, "");
    } }, { key: "uiHost", get: function() {
      var e8;
      return null === (e8 = this.instance.config.ui_host) || void 0 === e8 ? void 0 : e8.replace(/\/$/, "");
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
    } }, { key: "endpointFor", value: function(e8) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      if (t3 && (t3 = "/" === t3[0] ? t3 : "/".concat(t3)), "ui" === e8)
        return (this.uiHost || this.apiHost) + t3;
      if (!this.instance.config.__preview_ingestion_endpoints || this.region === Zn.CUSTOM)
        return this.apiHost + t3;
      var n3 = "i.posthog.com" + t3;
      switch (e8) {
        case "assets":
          return "https://".concat(this.region, "-assets.").concat(n3);
        case "api":
          return "https://".concat(this.region, ".").concat(n3);
      }
    } }]), e7;
  }();
  var ir = o2(function e6(t3, n3, i3, o3) {
    r2(this, e6), this.name = "posthog-js", this.setupOnce = function(e7) {
      e7(function(e8) {
        var r3, s3, a2, u2, l2;
        if ("error" !== e8.level || !t3.__loaded)
          return e8;
        e8.tags || (e8.tags = {});
        var c2 = t3.requestRouter.endpointFor("ui", "/person/" + t3.get_distinct_id());
        e8.tags["PostHog Person URL"] = c2, t3.sessionRecordingStarted() && (e8.tags["PostHog Recording URL"] = t3.get_session_replay_url({ withTimestamp: true }));
        var d2 = (null === (r3 = e8.exception) || void 0 === r3 ? void 0 : r3.values) || [], h2 = { $exception_message: null === (s3 = d2[0]) || void 0 === s3 ? void 0 : s3.value, $exception_type: null === (a2 = d2[0]) || void 0 === a2 ? void 0 : a2.type, $exception_personURL: c2, $sentry_event_id: e8.event_id, $sentry_exception: e8.exception, $sentry_exception_message: null === (u2 = d2[0]) || void 0 === u2 ? void 0 : u2.value, $sentry_exception_type: null === (l2 = d2[0]) || void 0 === l2 ? void 0 : l2.type, $sentry_tags: e8.tags };
        return n3 && i3 && (h2.$sentry_url = (o3 || "https://sentry.io/organizations/") + n3 + "/issues/?project=" + i3 + "&query=" + e8.event_id), t3.capture("$exception", h2), e8;
      });
    };
  });
  var or = function() {
    function e7(t3) {
      var n3 = this;
      r2(this, e7), s2(this, "_hasSeenPageView", false), s2(this, "_updateScrollData", function() {
        var e8, t4, r3, i3;
        n3._pageViewData || (n3._pageViewData = n3._createPageViewData());
        var o3 = n3._pageViewData, s3 = n3._scrollY(), a2 = n3._scrollHeight(), u2 = n3._contentY(), l2 = n3._contentHeight();
        o3.lastScrollY = s3, o3.maxScrollY = Math.max(s3, null !== (e8 = o3.maxScrollY) && void 0 !== e8 ? e8 : 0), o3.maxScrollHeight = Math.max(a2, null !== (t4 = o3.maxScrollHeight) && void 0 !== t4 ? t4 : 0), o3.lastContentY = u2, o3.maxContentY = Math.max(u2, null !== (r3 = o3.maxContentY) && void 0 !== r3 ? r3 : 0), o3.maxContentHeight = Math.max(l2, null !== (i3 = o3.maxContentHeight) && void 0 !== i3 ? i3 : 0);
      }), this._instance = t3;
    }
    return o2(e7, [{ key: "_createPageViewData", value: function() {
      var e8;
      return { pathname: null !== (e8 = null == T ? void 0 : T.location.pathname) && void 0 !== e8 ? e8 : "" };
    } }, { key: "doPageView", value: function() {
      var e8, n3;
      return this._hasSeenPageView ? (n3 = this._pageViewData, this._pageViewData = this._createPageViewData()) : (this._hasSeenPageView = true, n3 = void 0, this._pageViewData || (this._pageViewData = this._createPageViewData())), setTimeout(this._updateScrollData, 0), t2({ $prev_pageview_pathname: null === (e8 = n3) || void 0 === e8 ? void 0 : e8.pathname }, this._calculatePrevPageScrollProperties(n3));
    } }, { key: "doPageLeave", value: function() {
      var e8 = this._pageViewData;
      return t2({ $prev_pageview_pathname: null == e8 ? void 0 : e8.pathname }, this._calculatePrevPageScrollProperties(e8));
    } }, { key: "_calculatePrevPageScrollProperties", value: function(e8) {
      if (!e8 || null == e8.maxScrollHeight || null == e8.lastScrollY || null == e8.maxScrollY || null == e8.maxContentHeight || null == e8.lastContentY || null == e8.maxContentY)
        return {};
      var t3 = e8.maxScrollHeight, n3 = e8.lastScrollY, r3 = e8.maxScrollY, i3 = e8.maxContentHeight, o3 = e8.lastContentY, s3 = e8.maxContentY;
      return t3 = Math.ceil(t3), n3 = Math.ceil(n3), r3 = Math.ceil(r3), i3 = Math.ceil(i3), o3 = Math.ceil(o3), s3 = Math.ceil(s3), { $prev_pageview_last_scroll: n3, $prev_pageview_last_scroll_percentage: t3 <= 1 ? 1 : sr(n3 / t3, 0, 1), $prev_pageview_max_scroll: r3, $prev_pageview_max_scroll_percentage: t3 <= 1 ? 1 : sr(r3 / t3, 0, 1), $prev_pageview_last_content: o3, $prev_pageview_last_content_percentage: i3 <= 1 ? 1 : sr(o3 / i3, 0, 1), $prev_pageview_max_content: s3, $prev_pageview_max_content_percentage: i3 <= 1 ? 1 : sr(s3 / i3, 0, 1) };
    } }, { key: "startMeasuringScrollPosition", value: function() {
      null == T || T.addEventListener("scroll", this._updateScrollData, true), null == T || T.addEventListener("scrollend", this._updateScrollData, true), null == T || T.addEventListener("resize", this._updateScrollData);
    } }, { key: "stopMeasuringScrollPosition", value: function() {
      null == T || T.removeEventListener("scroll", this._updateScrollData), null == T || T.removeEventListener("scrollend", this._updateScrollData), null == T || T.removeEventListener("resize", this._updateScrollData);
    } }, { key: "_scrollElement", value: function() {
      if (!this._instance.config.scroll_root_selector)
        return null == T ? void 0 : T.document.documentElement;
      var e8, t3 = v(S(this._instance.config.scroll_root_selector) ? this._instance.config.scroll_root_selector : [this._instance.config.scroll_root_selector]);
      try {
        for (t3.s(); !(e8 = t3.n()).done; ) {
          var n3 = e8.value, r3 = null == T ? void 0 : T.document.querySelector(n3);
          if (r3)
            return r3;
        }
      } catch (e9) {
        t3.e(e9);
      } finally {
        t3.f();
      }
    } }, { key: "_scrollHeight", value: function() {
      var e8 = this._scrollElement();
      return e8 ? Math.max(0, e8.scrollHeight - e8.clientHeight) : 0;
    } }, { key: "_scrollY", value: function() {
      if (this._instance.config.scroll_root_selector) {
        var e8 = this._scrollElement();
        return e8 && e8.scrollTop || 0;
      }
      return T && (T.scrollY || T.pageYOffset || T.document.documentElement.scrollTop) || 0;
    } }, { key: "_contentHeight", value: function() {
      var e8 = this._scrollElement();
      return (null == e8 ? void 0 : e8.scrollHeight) || 0;
    } }, { key: "_contentY", value: function() {
      var e8 = this._scrollElement(), t3 = (null == e8 ? void 0 : e8.clientHeight) || 0;
      return this._scrollY() + t3;
    } }]), e7;
  }();
  function sr(e7, t3, n3) {
    return Math.max(t3, Math.min(e7, n3));
  }
  var ar;
  var ur;
  var lr;
  var cr = { icontains: function(e7) {
    return !!T && T.location.href.toLowerCase().indexOf(e7.toLowerCase()) > -1;
  }, regex: function(e7) {
    return !!T && Ft(T.location.href, e7);
  }, exact: function(e7) {
    return (null == T ? void 0 : T.location.href) === e7;
  } };
  var dr = function() {
    function e7(t3) {
      r2(this, e7), this.instance = t3;
    }
    return o2(e7, [{ key: "getSurveys", value: function(e8) {
      var t3 = this, n3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r3 = this.instance.get_property(je);
      if (r3 && !n3)
        return e8(r3);
      this.instance._send_request(this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)), {}, { method: "GET" }, function(n4) {
        var r4, i3 = n4.surveys || [];
        return null === (r4 = t3.instance.persistence) || void 0 === r4 || r4.register(s2({}, je, i3)), e8(i3);
      });
    } }, { key: "getActiveMatchingSurveys", value: function(e8) {
      var t3 = this, n3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      this.getSurveys(function(n4) {
        var r3 = n4.filter(function(e9) {
          return !(!e9.start_date || e9.end_date);
        }).filter(function(e9) {
          var t4, n5, r4, i3;
          if (!e9.conditions)
            return true;
          var o3 = null === (t4 = e9.conditions) || void 0 === t4 || !t4.url || cr[null !== (n5 = null === (r4 = e9.conditions) || void 0 === r4 ? void 0 : r4.urlMatchType) && void 0 !== n5 ? n5 : "icontains"](e9.conditions.url), s3 = null === (i3 = e9.conditions) || void 0 === i3 || !i3.selector || (null == L ? void 0 : L.querySelector(e9.conditions.selector));
          return o3 && s3;
        }).filter(function(e9) {
          if (!e9.linked_flag_key && !e9.targeting_flag_key)
            return true;
          var n5 = !e9.linked_flag_key || t3.instance.featureFlags.isFeatureEnabled(e9.linked_flag_key), r4 = !e9.targeting_flag_key || t3.instance.featureFlags.isFeatureEnabled(e9.targeting_flag_key);
          return n5 && r4;
        });
        return e8(r3);
      }, n3);
    } }]), e7;
  }();
  var hr = function() {
    function e7() {
      var t3 = this;
      r2(this, e7), s2(this, "limits", {}), s2(this, "checkForLimiting", function(e8) {
        var n3 = e8.responseText;
        if (n3 && n3.length)
          try {
            (JSON.parse(n3).quota_limited || []).forEach(function(e9) {
              V.info("[RateLimiter] ".concat(e9 || "events", " is quota limited.")), t3.limits[e9] = (/* @__PURE__ */ new Date()).getTime() + 6e4;
            });
          } catch (e9) {
            return void V.warn('[RateLimiter] could not rate limit - continuing. Error: "'.concat(null == e9 ? void 0 : e9.message, '"'), { text: n3 });
          }
      });
    }
    return o2(e7, [{ key: "isRateLimited", value: function(e8) {
      var t3 = this.limits[e8 || "events"] || false;
      return false !== t3 && (/* @__PURE__ */ new Date()).getTime() < t3;
    } }]), e7;
  }();
  var fr = function() {
    return t2({ initialPathName: (null == N ? void 0 : N.pathname) || "", referringDomain: It.referringDomain() }, It.campaignParams());
  };
  var pr = function() {
    function e7(t3, n3, i3) {
      var o3 = this;
      r2(this, e7), s2(this, "_onSessionIdCallback", function(e8) {
        var t4 = o3._getStoredProps();
        if (!t4 || t4.sessionId !== e8) {
          var n4 = { sessionId: e8, props: o3._sessionSourceParamGenerator() };
          o3._persistence.register(s2({}, Ve, n4));
        }
      }), this._sessionIdManager = t3, this._persistence = n3, this._sessionSourceParamGenerator = i3 || fr, this._sessionIdManager.onSessionId(this._onSessionIdCallback);
    }
    return o2(e7, [{ key: "_getStoredProps", value: function() {
      return this._persistence.props[Ve];
    } }, { key: "getSessionProps", value: function() {
      var e8, t3 = null === (e8 = this._getStoredProps()) || void 0 === e8 ? void 0 : e8.props;
      return t3 ? { $client_session_initial_referring_host: t3.referringDomain, $client_session_initial_pathname: t3.initialPathName, $client_session_initial_utm_source: t3.utm_source, $client_session_initial_utm_campaign: t3.utm_campaign, $client_session_initial_utm_medium: t3.utm_medium, $client_session_initial_utm_content: t3.utm_content, $client_session_initial_utm_term: t3.utm_term } : {};
    } }]), e7;
  }();
  var _r = ["ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
  var gr = function(e7, t3) {
    if (!e7)
      return false;
    var n3 = e7.toLowerCase();
    return _r.concat(t3 || []).some(function(e8) {
      var t4 = e8.toLowerCase();
      return n3.includes ? n3.includes(t4) : -1 !== n3.indexOf(t4);
    });
  };
  !function(e7) {
    e7[e7.INIT_MODULE = 0] = "INIT_MODULE", e7[e7.INIT_SNIPPET = 1] = "INIT_SNIPPET";
  }(ar || (ar = {}));
  var vr = function() {
  };
  var mr = {};
  var yr = "posthog";
  var br = !wt && -1 === (null == H ? void 0 : H.indexOf("MSIE")) && -1 === (null == H ? void 0 : H.indexOf("Mozilla"));
  var kr = function() {
    var e7, t3, n3;
    return { api_host: "https://app.posthog.com", api_method: "POST", api_transport: "XHR", ui_host: null, token: "", autocapture: true, rageclick: true, cross_subdomain_cookie: (t3 = null == L ? void 0 : L.location, n3 = null == t3 ? void 0 : t3.hostname, !!E(n3) && "herokuapp.com" !== n3.split(".").slice(-2).join(".")), persistence: "localStorage+cookie", persistence_name: "", cookie_name: "", loaded: vr, store_google: true, custom_campaign_params: [], custom_blocked_useragents: [], save_referrer: true, capture_pageview: true, capture_pageleave: true, debug: false, verbose: false, cookie_expiration: 365, upgrade: false, disable_session_recording: false, disable_persistence: false, disable_cookie: false, enable_recording_console_log: void 0, secure_cookie: "https:" === (null == T || null === (e7 = T.location) || void 0 === e7 ? void 0 : e7.protocol), ip: true, opt_out_capturing_by_default: false, opt_out_persistence_by_default: false, opt_out_useragent_filter: false, opt_out_capturing_persistence_type: "localStorage", opt_out_capturing_cookie_prefix: null, opt_in_site_apps: false, property_blacklist: [], respect_dnt: false, sanitize_properties: null, request_headers: {}, inapp_protocol: "//", inapp_link_new_window: false, request_batching: true, properties_string_max_length: 65535, session_recording: {}, mask_all_element_attributes: false, mask_all_text: false, advanced_disable_decide: false, advanced_disable_feature_flags: false, advanced_disable_feature_flags_on_first_load: false, advanced_disable_toolbar_metrics: false, on_request_error: function(e8) {
      var t4 = "Bad HTTP status: " + e8.statusCode + " " + e8.responseText;
      V.error(t4);
    }, get_device_id: function(e8) {
      return e8;
    }, _onCapture: vr, capture_performance: void 0, name: "posthog", callback_fn: "posthog._jsc", bootstrap: {}, disable_compression: false, session_idle_timeout_seconds: 1800 };
  };
  var wr = function(e7, t3, n3, r3) {
    var i3, o3 = n3 !== yr && lr ? n3 ? lr[n3] : void 0 : lr, s3 = { initComplete: false, syncCode: false }, a2 = function(e8) {
      return function(t4) {
        s3[e8] || (s3[e8] = true, s3.initComplete && s3.syncCode && (null == r3 || r3(t4)));
      };
    };
    if (o3 && ur === ar.INIT_MODULE)
      i3 = o3;
    else {
      if (o3 && !S(o3))
        return void V.error("You have already initialized " + n3);
      i3 = new Fr();
    }
    if (i3._init(e7, t3, n3, a2("initComplete")), i3.toolbar.maybeLoadToolbar(), i3.sessionRecording = new tn(i3), i3.sessionRecording.startRecordingIfEnabled(), i3.config.disable_scroll_properties || i3.pageViewManager.startMeasuringScrollPosition(), i3.__autocapture = i3.config.autocapture, Qe._setIsAutocaptureEnabled(i3), Qe._isAutocaptureEnabled) {
      i3.__autocapture = i3.config.autocapture;
      Qe.enabledForProject(i3.config.token, 100, 100) ? Qe.isBrowserSupported() ? Qe.init(i3) : (i3.__autocapture = false, V.info("Disabling Automatic Event Collection because this browser is not supported")) : (i3.__autocapture = false, V.info("Not in active bucket: disabling Automatic Event Collection."));
    }
    return m.DEBUG = m.DEBUG || i3.config.debug, !I(o3) && S(o3) && (i3._execute_array.call(i3.people, o3.people), i3._execute_array(o3)), a2("syncCode")(i3), i3;
  };
  var Sr = function() {
    function e7() {
      r2(this, e7), s2(this, "__forceAllowLocalhost", false);
    }
    return o2(e7, [{ key: "_forceAllowLocalhost", get: function() {
      return this.__forceAllowLocalhost;
    }, set: function(e8) {
      V.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e8;
    } }]), e7;
  }();
  var Fr = function() {
    function e7() {
      var t3 = this;
      r2(this, e7), s2(this, "webPerformance", new Sr()), this.config = kr(), this.compression = {}, this.decideEndpointWasHit = false, this.SentryIntegration = ir, this.segmentIntegration = function() {
        return function(e8) {
          Promise && Promise.resolve || V.warn("This browser does not have Promise support, and can not use the segment integration");
          var t4 = function(t5, n3) {
            t5.event.userId || t5.event.anonymousId === e8.get_distinct_id() || e8.reset(), t5.event.userId && t5.event.userId !== e8.get_distinct_id() && (e8.register({ distinct_id: t5.event.userId }), e8.reloadFeatureFlags());
            var r3 = e8._calculate_event_properties(n3, t5.event.properties);
            return t5.event.properties = Object.assign({}, r3, t5.event.properties), t5;
          };
          return { name: "PostHog JS", type: "enrichment", version: "1.0.0", isLoaded: function() {
            return true;
          }, load: function() {
            return Promise.resolve();
          }, track: function(e9) {
            return t4(e9, e9.event.event);
          }, page: function(e9) {
            return t4(e9, "$pageview");
          }, identify: function(e9) {
            return t4(e9, "$identify");
          }, screen: function(e9) {
            return t4(e9, "$screen");
          } };
        }(t3);
      }, this.__captureHooks = [], this.__request_queue = [], this.__loaded = false, this.__loaded_recorder_version = void 0, this.__autocapture = void 0, this._jsc = function() {
      }, this.analyticsDefaultEndpoint = "/e/", this.elementsChainAsString = false, this.featureFlags = new Ze(this), this.toolbar = new sn(this), this.pageViewManager = new or(this), this.surveys = new dr(this), this.rateLimiter = new hr(), this.requestRouter = new rr(this), this.people = { set: function(e8, n3, r3) {
        var i3 = E(e8) ? s2({}, e8, n3) : e8;
        t3.setPersonProperties(i3), null == r3 || r3({});
      }, set_once: function(e8, n3, r3) {
        var i3 = E(e8) ? s2({}, e8, n3) : e8;
        t3.setPersonProperties(void 0, i3), null == r3 || r3({});
      } };
    }
    return o2(e7, [{ key: "init", value: function(e8, t3, n3) {
      if (I(n3))
        V.critical("You must name your new library: init(token, config, name)");
      else {
        if (n3 !== yr) {
          var r3 = wr(e8, t3, n3, function(e9) {
            lr[n3] = e9, e9._loaded();
          });
          return lr[n3] = r3, r3;
        }
        V.critical("You must initialize the main posthog object right after you include the PostHog js snippet");
      }
    } }, { key: "_init", value: function(e8) {
      var n3, r3, i3, o3 = this, s3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a2 = arguments.length > 2 ? arguments[2] : void 0, u2 = arguments.length > 3 ? arguments[3] : void 0;
      this.__loaded = true, this.config = {}, this._triggered_notifs = [];
      var l2, c2 = { segmentRegister: false, syncCode: false }, d2 = function(e9) {
        return function() {
          c2[e9] || (c2[e9] = true, c2.segmentRegister && c2.syncCode && (null == u2 || u2(o3)));
        };
      };
      (s3.request_headers = s3.request_headers || s3.xhr_headers, this.set_config(J({}, kr(), s3, { name: a2, token: e8, callback_fn: (a2 === yr ? a2 : yr + "." + a2) + "._jsc" })), this._jsc = function() {
      }, null != T && null !== (n3 = T.rrweb) && void 0 !== n3 && n3.record || null != T && T.rrwebRecord) && (this.__loaded_recorder_version = null == T || null === (l2 = T.rrweb) || void 0 === l2 ? void 0 : l2.version);
      if (this.persistence = new xt(this.config), this._requestQueue = new un(this._handle_queued_event.bind(this)), this._retryQueue = new er(this.config.on_request_error, this.rateLimiter), this.__captureHooks = [], this.__request_queue = [], this.sessionManager = new nr(this.config, this.persistence), this.sessionPropsManager = new pr(this.sessionManager, this.persistence), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new xt(t2(t2({}, this.config), {}, { persistence: "sessionStorage" })), this._gdpr_init(), s3.segment ? (this.config.get_device_id = function() {
        return s3.segment.user().anonymousId();
      }, s3.segment.user().id() && (this.register({ distinct_id: s3.segment.user().id() }), this.persistence.set_user_state("identified")), s3.segment.register(this.segmentIntegration()).then(d2("segmentRegister"))) : d2("segmentRegister")(), void 0 !== (null === (r3 = s3.bootstrap) || void 0 === r3 ? void 0 : r3.distinctID)) {
        var h2, f2, p2 = this.config.get_device_id(st()), _2 = null !== (h2 = s3.bootstrap) && void 0 !== h2 && h2.isIdentifiedID ? p2 : s3.bootstrap.distinctID;
        this.persistence.set_user_state(null !== (f2 = s3.bootstrap) && void 0 !== f2 && f2.isIdentifiedID ? "identified" : "anonymous"), this.register({ distinct_id: s3.bootstrap.distinctID, $device_id: _2 });
      }
      if (this._hasBootstrappedFeatureFlags()) {
        var g2, v2, m2 = Object.keys((null === (g2 = s3.bootstrap) || void 0 === g2 ? void 0 : g2.featureFlags) || {}).filter(function(e9) {
          var t3, n4;
          return !(null === (t3 = s3.bootstrap) || void 0 === t3 || null === (n4 = t3.featureFlags) || void 0 === n4 || !n4[e9]);
        }).reduce(function(e9, t3) {
          var n4, r4;
          return e9[t3] = (null === (n4 = s3.bootstrap) || void 0 === n4 || null === (r4 = n4.featureFlags) || void 0 === r4 ? void 0 : r4[t3]) || false, e9;
        }, {}), y2 = Object.keys((null === (v2 = s3.bootstrap) || void 0 === v2 ? void 0 : v2.featureFlagPayloads) || {}).filter(function(e9) {
          return m2[e9];
        }).reduce(function(e9, t3) {
          var n4, r4, i4, o4;
          null !== (n4 = s3.bootstrap) && void 0 !== n4 && null !== (r4 = n4.featureFlagPayloads) && void 0 !== r4 && r4[t3] && (e9[t3] = null === (i4 = s3.bootstrap) || void 0 === i4 || null === (o4 = i4.featureFlagPayloads) || void 0 === o4 ? void 0 : o4[t3]);
          return e9;
        }, {});
        this.featureFlags.receivedFeatureFlags({ featureFlags: m2, featureFlagPayloads: y2 });
      }
      if (!this.get_distinct_id()) {
        var b2 = this.config.get_device_id(st());
        this.register_once({ distinct_id: b2, $device_id: b2 }, ""), this.persistence.set_user_state("anonymous");
      }
      null == T || null === (i3 = T.addEventListener) || void 0 === i3 || i3.call(T, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), d2("syncCode")();
    } }, { key: "_afterDecideResponse", value: function(e8) {
      var t3;
      if (this.compression = {}, e8.supportedCompression && !this.config.disable_compression) {
        var n3, r3 = {}, i3 = v(e8.supportedCompression);
        try {
          for (i3.s(); !(n3 = i3.n()).done; ) {
            r3[n3.value] = true;
          }
        } catch (e9) {
          i3.e(e9);
        } finally {
          i3.f();
        }
        this.compression = r3;
      }
      null !== (t3 = e8.analytics) && void 0 !== t3 && t3.endpoint && (this.analyticsDefaultEndpoint = e8.analytics.endpoint), e8.elementsChainAsString && (this.elementsChainAsString = e8.elementsChainAsString), e8.__preview_ingestion_endpoints && (this.config.__preview_ingestion_endpoints = e8.__preview_ingestion_endpoints);
    } }, { key: "_loaded", value: function() {
      var e8 = this.config.advanced_disable_decide;
      e8 || this.featureFlags.setReloadingPaused(true);
      try {
        this.config.loaded(this);
      } catch (e9) {
        V.critical("`loaded` function failed", e9);
      }
      this._start_queue_if_opted_in(), this.config.capture_pageview && L && this.capture("$pageview", { title: L.title }, { send_instantly: true }), e8 || (new nn(this).call(), this.featureFlags.resetRequestQueue());
    } }, { key: "_start_queue_if_opted_in", value: function() {
      var e8;
      this.has_opted_out_capturing() || this.config.request_batching && (null === (e8 = this._requestQueue) || void 0 === e8 || e8.poll());
    } }, { key: "_dom_loaded", value: function() {
      var e8 = this;
      this.has_opted_out_capturing() || Q(this.__request_queue, function(t3) {
        e8._send_request.apply(e8, p(t3));
      }), this.__request_queue = [], this._start_queue_if_opted_in();
    } }, { key: "_prepare_callback", value: function(e8, t3) {
      if (I(e8))
        return null;
      if (wt)
        return function(n4) {
          e8(n4, t3);
        };
      var n3 = this._jsc, r3 = "" + Math.floor(1e8 * Math.random()), i3 = this.config.callback_fn + "[" + r3 + "]";
      return n3[r3] = function(i4) {
        delete n3[r3], e8(i4, t3);
      }, i3;
    } }, { key: "_handle_unload", value: function() {
      var e8, t3;
      this.config.request_batching ? (this.config.capture_pageview && this.config.capture_pageleave && this.capture("$pageleave"), null === (e8 = this._requestQueue) || void 0 === e8 || e8.unload(), null === (t3 = this._retryQueue) || void 0 === t3 || t3.unload()) : this.config.capture_pageview && this.config.capture_pageleave && this.capture("$pageleave", null, { transport: "sendBeacon" });
    } }, { key: "_handle_queued_event", value: function(e8, t3, n3) {
      var r3 = JSON.stringify(t3);
      this.__compress_and_send_json_request(e8, r3, n3 || mr, vr);
    } }, { key: "__compress_and_send_json_request", value: function(e8, n3, r3, i3) {
      var o3 = function(e9, n4, r4) {
        return e9 === Rn.GZipJS ? [zn(Qn(n4), { mtime: 0 }), t2(t2({}, r4), {}, { blob: true, urlQueryArgs: { compression: Rn.GZipJS } })] : [{ data: ie(n4) }, r4];
      }(this.compression[Rn.GZipJS] ? Rn.GZipJS : Rn.Base64, n3, r3), s3 = f(o3, 2), a2 = s3[0], u2 = s3[1];
      this._send_request(e8, a2, u2, i3);
    } }, { key: "_send_request", value: function(e8, n3, r3, i3) {
      if (this.__loaded && this._retryQueue && !this.rateLimiter.isRateLimited(r3._batchKey))
        if (br)
          this.__request_queue.push([e8, n3, r3, i3]);
        else {
          var o3 = { method: this.config.api_method, transport: this.config.api_transport, verbose: this.config.verbose };
          r3 = J(o3, r3 || {}), wt || (r3.method = "GET");
          var s3 = T && "sendBeacon" in T.navigator && "sendBeacon" === r3.transport;
          if (e8 = Yn(e8, r3.urlQueryArgs || {}, { ip: this.config.ip }), s3)
            try {
              null == T || T.navigator.sendBeacon(e8, Jn(n3, t2(t2({}, r3), {}, { sendBeacon: true })));
            } catch (e9) {
            }
          else if (wt || !L)
            try {
              Kn({ url: e8, data: n3, headers: this.config.request_headers, options: r3, callback: i3, retriesPerformedSoFar: 0, retryQueue: this._retryQueue, onError: this.config.on_request_error, onResponse: this.rateLimiter.checkForLimiting });
            } catch (e9) {
              V.error(e9);
            }
          else {
            var a2, u2 = L.createElement("script");
            u2.type = "text/javascript", u2.async = true, u2.defer = true, u2.src = e8;
            var l2 = L.getElementsByTagName("script")[0];
            null === (a2 = l2.parentNode) || void 0 === a2 || a2.insertBefore(u2, l2);
          }
        }
    } }, { key: "_execute_array", value: function(e8) {
      var t3, n3 = this, r3 = [], i3 = [], o3 = [];
      Q(e8, function(e9) {
        e9 && (t3 = e9[0], S(t3) ? o3.push(e9) : P(e9) ? e9.call(n3) : S(e9) && "alias" === t3 ? r3.push(e9) : S(e9) && -1 !== t3.indexOf("capture") && P(n3[t3]) ? o3.push(e9) : i3.push(e9));
      });
      var s3 = function(e9, t4) {
        Q(e9, function(e10) {
          if (S(e10[0])) {
            var n4 = t4;
            Y(e10, function(e11) {
              n4 = n4[e11[0]].apply(n4, e11.slice(1));
            });
          } else
            this[e10[0]].apply(this, e10.slice(1));
        }, t4);
      };
      s3(r3, this), s3(i3, this), s3(o3, this);
    } }, { key: "_hasBootstrappedFeatureFlags", value: function() {
      var e8, t3;
      return (null === (e8 = this.config.bootstrap) || void 0 === e8 ? void 0 : e8.featureFlags) && Object.keys(null === (t3 = this.config.bootstrap) || void 0 === t3 ? void 0 : t3.featureFlags).length > 0 || false;
    } }, { key: "push", value: function(e8) {
      this._execute_array([e8]);
    } }, { key: "capture", value: function(e8, n3) {
      var r3, i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mr;
      if (!this.__loaded || !this.sessionPersistence || !this._requestQueue)
        return V.uninitializedWarning("posthog.capture");
      if (!Yt(this)) {
        var o3 = (i3 = i3 || mr).transport;
        if (o3 && (i3.transport = o3), !I(e8) && E(e8)) {
          if (!H || this.config.opt_out_useragent_filter || !gr(H, this.config.custom_blocked_useragents)) {
            this.sessionPersistence.update_search_keyword(), this.config.store_google && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info();
            var s3 = { uuid: st(), event: e8, properties: this._calculate_event_properties(e8, n3 || {}) };
            "$identify" === e8 && (s3.$set = i3.$set, s3.$set_once = i3.$set_once), (s3 = re(s3, i3._noTruncate ? null : this.config.properties_string_max_length)).timestamp = i3.timestamp || /* @__PURE__ */ new Date();
            var a2 = t2(t2({}, s3.properties.$set), s3.$set);
            (function(e9) {
              if (R(e9)) {
                for (var t3 in e9)
                  if (k.call(e9, t3))
                    return false;
                return true;
              }
              return false;
            })(a2) || this.setPersonPropertiesForFlags(a2), V.info("send", s3);
            var u2 = JSON.stringify(s3), l2 = null !== (r3 = i3._url) && void 0 !== r3 ? r3 : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint), c2 = i3 !== mr;
            return !this.config.request_batching || c2 && !i3._batchKey || i3.send_instantly ? this.__compress_and_send_json_request(l2, u2, i3) : this._requestQueue.enqueue(l2, s3, i3), this._invokeCaptureHooks(e8, s3), s3;
          }
        } else
          V.error("No event name provided to posthog.capture");
      }
    } }, { key: "_addCaptureHook", value: function(e8) {
      this.__captureHooks.push(e8);
    } }, { key: "_invokeCaptureHooks", value: function(e8, t3) {
      this.config._onCapture(e8, t3), Y(this.__captureHooks, function(t4) {
        return t4(e8);
      });
    } }, { key: "_calculate_event_properties", value: function(e8, n3) {
      if (!this.persistence || !this.sessionPersistence)
        return n3;
      var r3 = this.persistence.remove_event_timer(e8), i3 = t2({}, n3);
      if (i3.token = this.config.token, "$snapshot" === e8) {
        var o3 = t2(t2({}, this.persistence.properties()), this.sessionPersistence.properties());
        return i3.distinct_id = o3.distinct_id, i3;
      }
      var s3 = It.properties();
      if (this.sessionManager) {
        var a2 = this.sessionManager.checkAndGetSessionAndWindowId(), u2 = a2.sessionId, l2 = a2.windowId;
        i3.$session_id = u2, i3.$window_id = l2;
      }
      if (this.sessionPropsManager && this.config.__preview_send_client_session_params && ("$pageview" === e8 || "$pageleave" === e8 || "$autocapture" === e8)) {
        var c2 = this.sessionPropsManager.getSessionProps();
        i3 = J(i3, c2);
      }
      if (!this.config.disable_scroll_properties) {
        var d2 = {};
        "$pageview" === e8 ? d2 = this.pageViewManager.doPageView() : "$pageleave" === e8 && (d2 = this.pageViewManager.doPageLeave()), i3 = J(i3, d2);
      }
      if ("$pageview" === e8 && L && (i3.title = L.title), "$performance_event" === e8) {
        var h2 = this.persistence.properties();
        return i3.distinct_id = h2.distinct_id, i3.$current_url = s3.$current_url, i3;
      }
      if (!I(r3)) {
        var f2 = (/* @__PURE__ */ new Date()).getTime() - r3;
        i3.$duration = parseFloat((f2 / 1e3).toFixed(3));
      }
      H && this.config.opt_out_useragent_filter && (i3.$browser_type = gr(H, this.config.custom_blocked_useragents) ? "bot" : "browser"), i3 = J({}, It.properties(), this.persistence.properties(), this.sessionPersistence.properties(), i3);
      var p2 = this.config.property_blacklist;
      S(p2) ? Y(p2, function(e9) {
        delete i3[e9];
      }) : V.error("Invalid value for property_blacklist config: " + p2);
      var _2 = this.config.sanitize_properties;
      return _2 && (i3 = _2(i3, e8)), i3;
    } }, { key: "register", value: function(e8, t3) {
      var n3;
      null === (n3 = this.persistence) || void 0 === n3 || n3.register(e8, t3);
    } }, { key: "register_once", value: function(e8, t3, n3) {
      var r3;
      null === (r3 = this.persistence) || void 0 === r3 || r3.register_once(e8, t3, n3);
    } }, { key: "register_for_session", value: function(e8) {
      var t3;
      null === (t3 = this.sessionPersistence) || void 0 === t3 || t3.register(e8);
    } }, { key: "unregister", value: function(e8) {
      var t3;
      null === (t3 = this.persistence) || void 0 === t3 || t3.unregister(e8);
    } }, { key: "unregister_for_session", value: function(e8) {
      var t3;
      null === (t3 = this.sessionPersistence) || void 0 === t3 || t3.unregister(e8);
    } }, { key: "_register_single", value: function(e8, t3) {
      this.register(s2({}, e8, t3));
    } }, { key: "getFeatureFlag", value: function(e8, t3) {
      return this.featureFlags.getFeatureFlag(e8, t3);
    } }, { key: "getFeatureFlagPayload", value: function(e8) {
      var t3 = this.featureFlags.getFeatureFlagPayload(e8);
      try {
        return JSON.parse(t3);
      } catch (e9) {
        return t3;
      }
    } }, { key: "isFeatureEnabled", value: function(e8, t3) {
      return this.featureFlags.isFeatureEnabled(e8, t3);
    } }, { key: "reloadFeatureFlags", value: function() {
      this.featureFlags.reloadFeatureFlags();
    } }, { key: "updateEarlyAccessFeatureEnrollment", value: function(e8, t3) {
      this.featureFlags.updateEarlyAccessFeatureEnrollment(e8, t3);
    } }, { key: "getEarlyAccessFeatures", value: function(e8) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return this.featureFlags.getEarlyAccessFeatures(e8, t3);
    } }, { key: "onFeatureFlags", value: function(e8) {
      return this.featureFlags.onFeatureFlags(e8);
    } }, { key: "onSessionId", value: function(e8) {
      var t3, n3;
      return null !== (t3 = null === (n3 = this.sessionManager) || void 0 === n3 ? void 0 : n3.onSessionId(e8)) && void 0 !== t3 ? t3 : function() {
      };
    } }, { key: "getSurveys", value: function(e8) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      this.surveys.getSurveys(e8, t3);
    } }, { key: "getActiveMatchingSurveys", value: function(e8) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      this.surveys.getActiveMatchingSurveys(e8, t3);
    } }, { key: "identify", value: function(e8, t3, n3) {
      if (!this.__loaded || !this.persistence)
        return V.uninitializedWarning("posthog.identify");
      if (C(e8) && (e8 = e8.toString(), V.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), e8)
        if (["distinct_id", "distinctid"].includes(e8.toLowerCase()))
          V.critical('The string "'.concat(e8, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'));
        else {
          var r3 = this.get_distinct_id();
          if (this.register({ $user_id: e8 }), !this.get_property("$device_id")) {
            var i3 = r3;
            this.register_once({ $had_persisted_distinct_id: true, $device_id: i3 }, "");
          }
          e8 !== r3 && e8 !== this.get_property(Ie) && (this.unregister(Ie), this.register({ distinct_id: e8 }));
          var o3 = "anonymous" === this.persistence.get_user_state();
          e8 !== r3 && o3 ? (this.persistence.set_user_state("identified"), this.setPersonPropertiesForFlags(t3 || {}, false), this.capture("$identify", { distinct_id: e8, $anon_distinct_id: r3 }, { $set: t3 || {}, $set_once: n3 || {} }), this.featureFlags.setAnonymousDistinctId(r3)) : (t3 || n3) && this.setPersonProperties(t3, n3), e8 !== r3 && (this.reloadFeatureFlags(), this.unregister(He));
        }
      else
        V.error("Unique user id has not been set in posthog.identify");
    } }, { key: "setPersonProperties", value: function(e8, t3) {
      (e8 || t3) && (this.setPersonPropertiesForFlags(e8 || {}), this.capture("$set", { $set: e8 || {}, $set_once: t3 || {} }));
    } }, { key: "group", value: function(e8, n3, r3) {
      if (e8 && n3) {
        var i3 = this.getGroups();
        i3[e8] !== n3 && this.resetGroupPropertiesForFlags(e8), this.register({ $groups: t2(t2({}, i3), {}, s2({}, e8, n3)) }), r3 && (this.capture("$groupidentify", { $group_type: e8, $group_key: n3, $group_set: r3 }), this.setGroupPropertiesForFlags(s2({}, e8, r3))), i3[e8] === n3 || r3 || this.reloadFeatureFlags();
      } else
        V.error("posthog.group requires a group type and group key");
    } }, { key: "resetGroups", value: function() {
      this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
    } }, { key: "setPersonPropertiesForFlags", value: function(e8) {
      var t3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      this.featureFlags.setPersonPropertiesForFlags(e8, t3);
    } }, { key: "resetPersonPropertiesForFlags", value: function() {
      this.featureFlags.resetPersonPropertiesForFlags();
    } }, { key: "setGroupPropertiesForFlags", value: function(e8) {
      var t3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      this.featureFlags.setGroupPropertiesForFlags(e8, t3);
    } }, { key: "resetGroupPropertiesForFlags", value: function(e8) {
      this.featureFlags.resetGroupPropertiesForFlags(e8);
    } }, { key: "reset", value: function(e8) {
      var t3, n3, r3, i3;
      if (!this.__loaded)
        return V.uninitializedWarning("posthog.reset");
      var o3 = this.get_property("$device_id");
      null === (t3 = this.persistence) || void 0 === t3 || t3.clear(), null === (n3 = this.sessionPersistence) || void 0 === n3 || n3.clear(), null === (r3 = this.persistence) || void 0 === r3 || r3.set_user_state("anonymous"), null === (i3 = this.sessionManager) || void 0 === i3 || i3.resetSessionId();
      var s3 = this.config.get_device_id(st());
      this.register_once({ distinct_id: s3, $device_id: e8 ? s3 : o3 }, "");
    } }, { key: "get_distinct_id", value: function() {
      return this.get_property("distinct_id");
    } }, { key: "getGroups", value: function() {
      return this.get_property("$groups") || {};
    } }, { key: "get_session_id", value: function() {
      var e8, t3;
      return null !== (e8 = null === (t3 = this.sessionManager) || void 0 === t3 ? void 0 : t3.checkAndGetSessionAndWindowId(true).sessionId) && void 0 !== e8 ? e8 : "";
    } }, { key: "get_session_replay_url", value: function(e8) {
      if (!this.sessionManager)
        return "";
      var t3 = this.sessionManager.checkAndGetSessionAndWindowId(true), n3 = t3.sessionId, r3 = t3.sessionStartTimestamp, i3 = this.requestRouter.endpointFor("ui", "/replay/" + n3);
      if (null != e8 && e8.withTimestamp && r3) {
        var o3, s3 = null !== (o3 = e8.timestampLookBack) && void 0 !== o3 ? o3 : 10;
        if (!r3)
          return i3;
        var a2 = Math.max(Math.floor(((/* @__PURE__ */ new Date()).getTime() - r3) / 1e3) - s3, 0);
        i3 += "?t=".concat(a2);
      }
      return i3;
    } }, { key: "alias", value: function(e8, t3) {
      return e8 === this.get_property(Re) ? (V.critical("Attempting to create alias for existing People user - aborting."), -2) : (I(t3) && (t3 = this.get_distinct_id()), e8 !== t3 ? (this._register_single(Ie, e8), this.capture("$create_alias", { alias: e8, distinct_id: t3 })) : (V.warn("alias matches current distinct_id - skipping api call."), this.identify(e8), -1));
    } }, { key: "set_config", value: function(e8) {
      var n3, r3, i3 = t2({}, this.config);
      if (R(e8) && (J(this.config, e8), this.config.persistence_name || (this.config.persistence_name = this.config.cookie_name), this.config.disable_persistence || (this.config.disable_persistence = this.config.disable_cookie), null === (n3 = this.persistence) || void 0 === n3 || n3.update_config(this.config), null === (r3 = this.sessionPersistence) || void 0 === r3 || r3.update_config(this.config), pt.is_supported() && "true" === pt.get("ph_debug") && (this.config.debug = true), this.config.debug && (m.DEBUG = true), this.sessionRecording && !I(e8.disable_session_recording))) {
        var o3 = i3.disable_session_recording !== e8.disable_session_recording, s3 = !Yt(this) && !e8.disable_session_recording && !this.sessionRecording.started;
        (o3 || s3) && (e8.disable_session_recording ? this.sessionRecording.stopRecording() : this.sessionRecording.startRecordingIfEnabled());
      }
    } }, { key: "startSessionRecording", value: function() {
      this.set_config({ disable_session_recording: false });
    } }, { key: "stopSessionRecording", value: function() {
      this.set_config({ disable_session_recording: true });
    } }, { key: "sessionRecordingStarted", value: function() {
      var e8;
      return !(null === (e8 = this.sessionRecording) || void 0 === e8 || !e8.started);
    } }, { key: "loadToolbar", value: function(e8) {
      return this.toolbar.loadToolbar(e8);
    } }, { key: "get_property", value: function(e8) {
      var t3;
      return null === (t3 = this.persistence) || void 0 === t3 ? void 0 : t3.props[e8];
    } }, { key: "getSessionProperty", value: function(e8) {
      var t3;
      return null === (t3 = this.sessionPersistence) || void 0 === t3 ? void 0 : t3.props[e8];
    } }, { key: "toString", value: function() {
      var e8, t3 = null !== (e8 = this.config.name) && void 0 !== e8 ? e8 : yr;
      return t3 !== yr && (t3 = yr + "." + t3), t3;
    } }, { key: "_gdpr_init", value: function() {
      "localStorage" === this.config.opt_out_capturing_persistence_type && pt.is_supported() && (!this.has_opted_in_capturing() && this.has_opted_in_capturing({ persistence_type: "cookie" }) && this.opt_in_capturing({ enable_persistence: false }), !this.has_opted_out_capturing() && this.has_opted_out_capturing({ persistence_type: "cookie" }) && this.opt_out_capturing({ clear_persistence: false }), this.clear_opt_in_out_capturing({ persistence_type: "cookie", enable_persistence: false })), this.has_opted_out_capturing() ? this._gdpr_update_persistence({ clear_persistence: true }) : this.has_opted_in_capturing() || !this.config.opt_out_capturing_by_default && !ht.get("ph_optout") || (ht.remove("ph_optout"), this.opt_out_capturing({ clear_persistence: this.config.opt_out_persistence_by_default }));
    } }, { key: "_gdpr_update_persistence", value: function(e8) {
      var t3, n3, r3, i3, o3;
      if (e8 && e8.clear_persistence)
        r3 = true;
      else {
        if (!e8 || !e8.enable_persistence)
          return;
        r3 = false;
      }
      this.config.disable_persistence || (null === (t3 = this.persistence) || void 0 === t3 ? void 0 : t3.disabled) === r3 || (null === (i3 = this.persistence) || void 0 === i3 || i3.set_disabled(r3));
      this.config.disable_persistence || (null === (n3 = this.sessionPersistence) || void 0 === n3 ? void 0 : n3.disabled) === r3 || (null === (o3 = this.sessionPersistence) || void 0 === o3 || o3.set_disabled(r3));
    } }, { key: "_gdpr_call_func", value: function(e8, t3) {
      return t3 = J({ capture: this.capture.bind(this), persistence_type: this.config.opt_out_capturing_persistence_type, cookie_prefix: this.config.opt_out_capturing_cookie_prefix, cookie_expiration: this.config.cookie_expiration, cross_subdomain_cookie: this.config.cross_subdomain_cookie, secure_cookie: this.config.secure_cookie }, t3 || {}), pt.is_supported() || "localStorage" !== t3.persistence_type || (t3.persistence_type = "cookie"), e8(this.config.token, { capture: t3.capture, captureEventName: t3.capture_event_name, captureProperties: t3.capture_properties, persistenceType: t3.persistence_type, persistencePrefix: t3.cookie_prefix, cookieExpiration: t3.cookie_expiration, crossSubdomainCookie: t3.cross_subdomain_cookie, secureCookie: t3.secure_cookie });
    } }, { key: "opt_in_capturing", value: function(e8) {
      e8 = J({ enable_persistence: true }, e8 || {}), this._gdpr_call_func(Bt, e8), this._gdpr_update_persistence(e8);
    } }, { key: "opt_out_capturing", value: function(e8) {
      var t3 = J({ clear_persistence: true }, e8 || {});
      this._gdpr_call_func(jt, t3), this._gdpr_update_persistence(t3);
    } }, { key: "has_opted_in_capturing", value: function(e8) {
      return this._gdpr_call_func(Ht, e8);
    } }, { key: "has_opted_out_capturing", value: function(e8) {
      return this._gdpr_call_func(Ut, e8);
    } }, { key: "clear_opt_in_out_capturing", value: function(e8) {
      var t3 = J({ enable_persistence: true }, null != e8 ? e8 : {});
      this._gdpr_call_func(Wt, t3), this._gdpr_update_persistence(t3);
    } }, { key: "debug", value: function(e8) {
      false === e8 ? (null == T || T.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({ debug: false })) : (null == T || T.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({ debug: true }));
    } }]), e7;
  }();
  !function(e7, t3) {
    for (var n3 = 0; n3 < t3.length; n3++)
      e7.prototype[t3[n3]] = te(e7.prototype[t3[n3]]);
  }(Fr, ["identify"]);
  var Pr;
  var Rr;
  var Ir = {};
  var Er = function() {
    lr.init = function(e7, t3, n3) {
      if (n3)
        return lr[n3] || (lr[n3] = Ir[n3] = wr(e7 || "", t3 || {}, n3, function(e8) {
          lr[n3] = Ir[n3] = e8, e8._loaded();
        })), lr[n3];
      var r3 = lr;
      return Ir[yr] ? r3 = Ir[yr] : e7 && (r3 = wr(e7, t3 || {}, yr, function(e8) {
        Ir[yr] = e8, e8._loaded();
      }), Ir[yr] = r3), lr = r3, ur === ar.INIT_SNIPPET && (U[yr] = lr), Y(Ir, function(e8, t4) {
        t4 !== yr && (lr[t4] = e8);
      }), r3;
    };
  };
  !function(e7) {
    e7.Popover = "popover", e7.API = "api", e7.Widget = "widget";
  }(Pr || (Pr = {})), function(e7) {
    e7.Open = "open", e7.MultipleChoice = "multiple_choice", e7.SingleChoice = "single_choice", e7.Rating = "rating", e7.Link = "link";
  }(Rr || (Rr = {}));
  var xr = (ur = ar.INIT_MODULE, lr = new Fr(), Er(), lr.init(), function() {
    function e7() {
      e7.done || (e7.done = true, br = false, Y(Ir, function(e8) {
        e8._dom_loaded();
      }));
    }
    null != L && L.addEventListener && ("complete" === L.readyState ? e7() : L.addEventListener("DOMContentLoaded", e7, false)), T && se(T, "load", e7, true);
  }(), lr);

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/swiper.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/swiper-core.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/ssr-window.esm.mjs
  init_live_reload();
  function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
  }
  function extend(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach((key) => {
      if (typeof target[key] === "undefined")
        target[key] = src[key];
      else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
  }

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/utils.mjs
  init_live_reload();
  function classesToTokens(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return classes2.trim().split(" ").filter((c2) => !!c2.trim());
  }
  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e7) {
      }
      try {
        delete object[key];
      } catch (e7) {
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle2(el) {
    const window2 = getWindow();
    let style;
    if (window2.getComputedStyle) {
      style = window2.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = "x";
    }
    const window2 = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle2(el);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform.split(", ").map((a2) => a2.replace(",", ".")).join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m41;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[12]);
      else
        curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m42;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[13]);
      else
        curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject2(o3) {
    return typeof o3 === "object" && o3 !== null && o3.constructor && Object.prototype.toString.call(o3).slice(8, -1) === "Object";
  }
  function isNode2(node) {
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend2() {
    const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
    const noExtend = ["__proto__", "constructor", "prototype"];
    for (let i3 = 1; i3 < arguments.length; i3 += 1) {
      const nextSource = i3 < 0 || arguments.length <= i3 ? void 0 : arguments[i3];
      if (nextSource !== void 0 && nextSource !== null && !isNode2(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    let {
      swiper: swiper2,
      targetPosition,
      side
    } = _ref;
    const window2 = getWindow();
    const startPosition = -swiper2.translate;
    let startTime = null;
    let time;
    const duration = swiper2.params.speed;
    swiper2.wrapperEl.style.scrollSnapType = "none";
    window2.cancelAnimationFrame(swiper2.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => {
      return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = () => {
      time = (/* @__PURE__ */ new Date()).getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper2.wrapperEl.scrollTo({
        [side]: currentPosition
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper2.wrapperEl.style.overflow = "hidden";
        swiper2.wrapperEl.style.scrollSnapType = "";
        setTimeout(() => {
          swiper2.wrapperEl.style.overflow = "";
          swiper2.wrapperEl.scrollTo({
            [side]: currentPosition
          });
        });
        window2.cancelAnimationFrame(swiper2.cssModeFrameID);
        return;
      }
      swiper2.cssModeFrameID = window2.requestAnimationFrame(animate);
    };
    animate();
  }
  function elementChildren(element, selector) {
    if (selector === void 0) {
      selector = "";
    }
    return [...element.children].filter((el) => el.matches(selector));
  }
  function showWarning(text) {
    try {
      console.warn(text);
      return;
    } catch (err) {
    }
  }
  function createElement(tag, classes2) {
    if (classes2 === void 0) {
      classes2 = [];
    }
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
    return el;
  }
  function elementPrevAll(el, selector) {
    const prevEls = [];
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling;
      if (selector) {
        if (prev.matches(selector))
          prevEls.push(prev);
      } else
        prevEls.push(prev);
      el = prev;
    }
    return prevEls;
  }
  function elementNextAll(el, selector) {
    const nextEls = [];
    while (el.nextElementSibling) {
      const next = el.nextElementSibling;
      if (selector) {
        if (next.matches(selector))
          nextEls.push(next);
      } else
        nextEls.push(next);
      el = next;
    }
    return nextEls;
  }
  function elementStyle(el, prop) {
    const window2 = getWindow();
    return window2.getComputedStyle(el, null).getPropertyValue(prop);
  }
  function elementIndex(el) {
    let child = el;
    let i3;
    if (child) {
      i3 = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1)
          i3 += 1;
      }
      return i3;
    }
    return void 0;
  }
  function elementParents(el, selector) {
    const parents = [];
    let parent = el.parentElement;
    while (parent) {
      if (selector) {
        if (parent.matches(selector))
          parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentElement;
    }
    return parents;
  }
  function elementOuterSize(el, size, includeMargins) {
    const window2 = getWindow();
    if (includeMargins) {
      return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    }
    return el.offsetWidth;
  }

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/swiper-core.mjs
  var support;
  function calcSupport() {
    const window2 = getWindow();
    const document2 = getDocument();
    return {
      smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
      touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }
  var deviceCached;
  function calcDevice(_temp) {
    let {
      userAgent
    } = _temp === void 0 ? {} : _temp;
    const support2 = getSupport();
    const window2 = getWindow();
    const platform = window2.navigator.platform;
    const ua = userAgent || window2.navigator.userAgent;
    const device = {
      ios: false,
      android: false
    };
    const screenWidth = window2.screen.width;
    const screenHeight = window2.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad)
        ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    return device;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }
  var browser;
  function calcBrowser() {
    const window2 = getWindow();
    let needPerspectiveFix = false;
    function isSafari() {
      const ua = window2.navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    if (isSafari()) {
      const ua = String(window2.navigator.userAgent);
      if (ua.includes("Version/")) {
        const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
      }
    }
    return {
      isSafari: needPerspectiveFix || isSafari(),
      needPerspectiveFix,
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }
  function Resize(_ref) {
    let {
      swiper: swiper2,
      on: on2,
      emit
    } = _ref;
    const window2 = getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper2 || swiper2.destroyed || !swiper2.initialized)
        return;
      emit("beforeResize");
      emit("resize");
    };
    const createObserver = () => {
      if (!swiper2 || swiper2.destroyed || !swiper2.initialized)
        return;
      observer = new ResizeObserver((entries) => {
        animationFrame = window2.requestAnimationFrame(() => {
          const {
            width,
            height
          } = swiper2;
          let newWidth = width;
          let newHeight = height;
          entries.forEach((_ref2) => {
            let {
              contentBoxSize,
              contentRect,
              target
            } = _ref2;
            if (target && target !== swiper2.el)
              return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper2.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window2.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper2.el) {
        observer.unobserve(swiper2.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper2 || swiper2.destroyed || !swiper2.initialized)
        return;
      emit("orientationchange");
    };
    on2("init", () => {
      if (swiper2.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
        createObserver();
        return;
      }
      window2.addEventListener("resize", resizeHandler);
      window2.addEventListener("orientationchange", orientationChangeHandler);
    });
    on2("destroy", () => {
      removeObserver();
      window2.removeEventListener("resize", resizeHandler);
      window2.removeEventListener("orientationchange", orientationChangeHandler);
    });
  }
  function Observer2(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on: on2,
      emit
    } = _ref;
    const observers = [];
    const window2 = getWindow();
    const attach = function(target, options) {
      if (options === void 0) {
        options = {};
      }
      const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
      const observer = new ObserverFunc((mutations) => {
        if (swiper2.__preventObserver__)
          return;
        if (mutations.length === 1) {
          emit("observerUpdate", mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate2() {
          emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
        childList: typeof options.childList === "undefined" ? true : options.childList,
        characterData: typeof options.characterData === "undefined" ? true : options.characterData
      });
      observers.push(observer);
    };
    const init = () => {
      if (!swiper2.params.observer)
        return;
      if (swiper2.params.observeParents) {
        const containerParents = elementParents(swiper2.hostEl);
        for (let i3 = 0; i3 < containerParents.length; i3 += 1) {
          attach(containerParents[i3]);
        }
      }
      attach(swiper2.hostEl, {
        childList: swiper2.params.observeSlideChildren
      });
      attach(swiper2.wrapperEl, {
        attributes: false
      });
    };
    const destroy = () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on2("init", init);
    on2("destroy", destroy);
  }
  var eventsEmitter = {
    on(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (typeof handler !== "function")
        return self2;
      const method = priority ? "unshift" : "push";
      events2.split(" ").forEach((event2) => {
        if (!self2.eventsListeners[event2])
          self2.eventsListeners[event2] = [];
        self2.eventsListeners[event2][method](handler);
      });
      return self2;
    },
    once(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (typeof handler !== "function")
        return self2;
      function onceHandler() {
        self2.off(events2, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self2, args);
      }
      onceHandler.__emitterProxy = handler;
      return self2.on(events2, onceHandler, priority);
    },
    onAny(handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (typeof handler !== "function")
        return self2;
      const method = priority ? "unshift" : "push";
      if (self2.eventsAnyListeners.indexOf(handler) < 0) {
        self2.eventsAnyListeners[method](handler);
      }
      return self2;
    },
    offAny(handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (!self2.eventsAnyListeners)
        return self2;
      const index = self2.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self2.eventsAnyListeners.splice(index, 1);
      }
      return self2;
    },
    off(events2, handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (!self2.eventsListeners)
        return self2;
      events2.split(" ").forEach((event2) => {
        if (typeof handler === "undefined") {
          self2.eventsListeners[event2] = [];
        } else if (self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler, index) => {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self2.eventsListeners[event2].splice(index, 1);
            }
          });
        }
      });
      return self2;
    },
    emit() {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (!self2.eventsListeners)
        return self2;
      let events2;
      let data;
      let context;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events2 = args[0];
        data = args.slice(1, args.length);
        context = self2;
      } else {
        events2 = args[0].events;
        data = args[0].data;
        context = args[0].context || self2;
      }
      data.unshift(context);
      const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
      eventsArray.forEach((event2) => {
        if (self2.eventsAnyListeners && self2.eventsAnyListeners.length) {
          self2.eventsAnyListeners.forEach((eventHandler) => {
            eventHandler.apply(context, [event2, ...data]);
          });
        }
        if (self2.eventsListeners && self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler) => {
            eventHandler.apply(context, data);
          });
        }
      });
      return self2;
    }
  };
  function updateSize() {
    const swiper2 = this;
    let width;
    let height;
    const el = swiper2.el;
    if (typeof swiper2.params.width !== "undefined" && swiper2.params.width !== null) {
      width = swiper2.params.width;
    } else {
      width = el.clientWidth;
    }
    if (typeof swiper2.params.height !== "undefined" && swiper2.params.height !== null) {
      height = swiper2.params.height;
    } else {
      height = el.clientHeight;
    }
    if (width === 0 && swiper2.isHorizontal() || height === 0 && swiper2.isVertical()) {
      return;
    }
    width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
    height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width))
      width = 0;
    if (Number.isNaN(height))
      height = 0;
    Object.assign(swiper2, {
      width,
      height,
      size: swiper2.isHorizontal() ? width : height
    });
  }
  function updateSlides() {
    const swiper2 = this;
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(swiper2.getDirectionLabel(label)) || 0);
    }
    const params = swiper2.params;
    const {
      wrapperEl,
      slidesEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL
    } = swiper2;
    const isVirtual = swiper2.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper2.virtual.slides.length : swiper2.slides.length;
    const slides = elementChildren(slidesEl, `.${swiper2.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper2.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper2);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper2);
    }
    const previousSnapGridLength = swiper2.snapGrid.length;
    const previousSlidesGridLength = swiper2.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    swiper2.virtualSize = -spaceBetween;
    slides.forEach((slideEl) => {
      if (rtl) {
        slideEl.style.marginLeft = "";
      } else {
        slideEl.style.marginRight = "";
      }
      slideEl.style.marginBottom = "";
      slideEl.style.marginTop = "";
    });
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper2.grid;
    if (gridEnabled) {
      swiper2.grid.initSlides(slides);
    } else if (swiper2.grid) {
      swiper2.grid.unsetSlides();
    }
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
      return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for (let i3 = 0; i3 < slidesLength; i3 += 1) {
      slideSize = 0;
      let slide2;
      if (slides[i3])
        slide2 = slides[i3];
      if (gridEnabled) {
        swiper2.grid.updateSlide(i3, slide2, slides);
      }
      if (slides[i3] && elementStyle(slide2, "display") === "none")
        continue;
      if (params.slidesPerView === "auto") {
        if (shouldResetSlideSize) {
          slides[i3].style[swiper2.getDirectionLabel("width")] = ``;
        }
        const slideStyles = getComputedStyle(slide2);
        const currentTransform = slide2.style.transform;
        const currentWebKitTransform = slide2.style.webkitTransform;
        if (currentTransform) {
          slide2.style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper2.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
        } else {
          const width = getDirectionPropertyValue(slideStyles, "width");
          const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
          const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
          const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
          const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
          const boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            const {
              clientWidth,
              offsetWidth
            } = slide2;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide2.style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
        if (slides[i3]) {
          slides[i3].style[swiper2.getDirectionLabel("width")] = `${slideSize}px`;
        }
      }
      if (slides[i3]) {
        slides[i3].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i3 !== 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i3 === 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3)
          slidePosition = 0;
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper2.params.slidesPerGroupSkip, index)) % swiper2.params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper2.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper2.virtualSize = Math.max(swiper2.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
      wrapperEl.style.width = `${swiper2.virtualSize + spaceBetween}px`;
    }
    if (params.setWrapperSize) {
      wrapperEl.style[swiper2.getDirectionLabel("width")] = `${swiper2.virtualSize + spaceBetween}px`;
    }
    if (gridEnabled) {
      swiper2.grid.updateWrapperSize(slideSize, snapGrid);
    }
    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i3 = 0; i3 < snapGrid.length; i3 += 1) {
        let slidesGridItem = snapGrid[i3];
        if (params.roundLengths)
          slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i3] <= swiper2.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper2.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper2.virtualSize - swiperSize);
      }
    }
    if (isVirtual && params.loop) {
      const size = slidesSizesGrid[0] + spaceBetween;
      if (params.slidesPerGroup > 1) {
        const groups = Math.ceil((swiper2.virtual.slidesBefore + swiper2.virtual.slidesAfter) / params.slidesPerGroup);
        const groupSize = size * params.slidesPerGroup;
        for (let i3 = 0; i3 < groups; i3 += 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
      }
      for (let i3 = 0; i3 < swiper2.virtual.slidesBefore + swiper2.virtual.slidesAfter; i3 += 1) {
        if (params.slidesPerGroup === 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + size);
        }
        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
        swiper2.virtualSize += size;
      }
    }
    if (snapGrid.length === 0)
      snapGrid = [0];
    if (spaceBetween !== 0) {
      const key = swiper2.isHorizontal() && rtl ? "marginLeft" : swiper2.getDirectionLabel("marginRight");
      slides.filter((_2, slideIndex) => {
        if (!params.cssMode || params.loop)
          return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).forEach((slideEl) => {
        slideEl.style[key] = `${spaceBetween}px`;
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map((snap) => {
        if (snap <= 0)
          return -offsetBefore;
        if (snap > maxSnap)
          return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      if (allSlidesSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach((snap, snapIndex) => {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach((snap, snapIndex) => {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper2, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper2.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
      const addToSnapGrid = -swiper2.snapGrid[0];
      const addToSlidesGrid = -swiper2.slidesGrid[0];
      swiper2.snapGrid = swiper2.snapGrid.map((v2) => v2 + addToSnapGrid);
      swiper2.slidesGrid = swiper2.slidesGrid.map((v2) => v2 + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper2.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper2.params.watchOverflow)
        swiper2.checkOverflow();
      swiper2.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper2.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress) {
      swiper2.updateSlidesOffset();
    }
    swiper2.emit("slidesUpdated");
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
      const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
      const hasClassBackfaceClassAdded = swiper2.el.classList.contains(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded)
          swiper2.el.classList.add(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper2.el.classList.remove(backFaceHiddenClass);
      }
    }
  }
  function updateAutoHeight(speed) {
    const swiper2 = this;
    const activeSlides = [];
    const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
    let newHeight = 0;
    let i3;
    if (typeof speed === "number") {
      swiper2.setTransition(speed);
    } else if (speed === true) {
      swiper2.setTransition(swiper2.params.speed);
    }
    const getSlideByIndex = (index) => {
      if (isVirtual) {
        return swiper2.slides[swiper2.getSlideIndexByData(index)];
      }
      return swiper2.slides[index];
    };
    if (swiper2.params.slidesPerView !== "auto" && swiper2.params.slidesPerView > 1) {
      if (swiper2.params.centeredSlides) {
        (swiper2.visibleSlides || []).forEach((slide2) => {
          activeSlides.push(slide2);
        });
      } else {
        for (i3 = 0; i3 < Math.ceil(swiper2.params.slidesPerView); i3 += 1) {
          const index = swiper2.activeIndex + i3;
          if (index > swiper2.slides.length && !isVirtual)
            break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper2.activeIndex));
    }
    for (i3 = 0; i3 < activeSlides.length; i3 += 1) {
      if (typeof activeSlides[i3] !== "undefined") {
        const height = activeSlides[i3].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight || newHeight === 0)
      swiper2.wrapperEl.style.height = `${newHeight}px`;
  }
  function updateSlidesOffset() {
    const swiper2 = this;
    const slides = swiper2.slides;
    const minusOffset = swiper2.isElement ? swiper2.isHorizontal() ? swiper2.wrapperEl.offsetLeft : swiper2.wrapperEl.offsetTop : 0;
    for (let i3 = 0; i3 < slides.length; i3 += 1) {
      slides[i3].swiperSlideOffset = (swiper2.isHorizontal() ? slides[i3].offsetLeft : slides[i3].offsetTop) - minusOffset - swiper2.cssOverflowAdjustment();
    }
  }
  function updateSlidesProgress(translate2) {
    if (translate2 === void 0) {
      translate2 = this && this.translate || 0;
    }
    const swiper2 = this;
    const params = swiper2.params;
    const {
      slides,
      rtlTranslate: rtl,
      snapGrid
    } = swiper2;
    if (slides.length === 0)
      return;
    if (typeof slides[0].swiperSlideOffset === "undefined")
      swiper2.updateSlidesOffset();
    let offsetCenter = -translate2;
    if (rtl)
      offsetCenter = translate2;
    slides.forEach((slideEl) => {
      slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
    });
    swiper2.visibleSlidesIndexes = [];
    swiper2.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper2.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    for (let i3 = 0; i3 < slides.length; i3 += 1) {
      const slide2 = slides[i3];
      let slideOffset = slide2.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper2.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper2.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper2.slidesSizesGrid[i3];
      const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper2.size - swiper2.slidesSizesGrid[i3];
      const isVisible = slideBefore >= 0 && slideBefore < swiper2.size - 1 || slideAfter > 1 && slideAfter <= swiper2.size || slideBefore <= 0 && slideAfter >= swiper2.size;
      if (isVisible) {
        swiper2.visibleSlides.push(slide2);
        swiper2.visibleSlidesIndexes.push(i3);
        slides[i3].classList.add(params.slideVisibleClass);
      }
      if (isFullyVisible) {
        slides[i3].classList.add(params.slideFullyVisibleClass);
      }
      slide2.progress = rtl ? -slideProgress : slideProgress;
      slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
  }
  function updateProgress(translate2) {
    const swiper2 = this;
    if (typeof translate2 === "undefined") {
      const multiplier = swiper2.rtlTranslate ? -1 : 1;
      translate2 = swiper2 && swiper2.translate && swiper2.translate * multiplier || 0;
    }
    const params = swiper2.params;
    const translatesDiff = swiper2.maxTranslate() - swiper2.minTranslate();
    let {
      progress,
      isBeginning,
      isEnd,
      progressLoop
    } = swiper2;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate2 - swiper2.minTranslate()) / translatesDiff;
      const isBeginningRounded = Math.abs(translate2 - swiper2.minTranslate()) < 1;
      const isEndRounded = Math.abs(translate2 - swiper2.maxTranslate()) < 1;
      isBeginning = isBeginningRounded || progress <= 0;
      isEnd = isEndRounded || progress >= 1;
      if (isBeginningRounded)
        progress = 0;
      if (isEndRounded)
        progress = 1;
    }
    if (params.loop) {
      const firstSlideIndex = swiper2.getSlideIndexByData(0);
      const lastSlideIndex = swiper2.getSlideIndexByData(swiper2.slides.length - 1);
      const firstSlideTranslate = swiper2.slidesGrid[firstSlideIndex];
      const lastSlideTranslate = swiper2.slidesGrid[lastSlideIndex];
      const translateMax = swiper2.slidesGrid[swiper2.slidesGrid.length - 1];
      const translateAbs = Math.abs(translate2);
      if (translateAbs >= firstSlideTranslate) {
        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
      } else {
        progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
      }
      if (progressLoop > 1)
        progressLoop -= 1;
    }
    Object.assign(swiper2, {
      progress,
      progressLoop,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight)
      swiper2.updateSlidesProgress(translate2);
    if (isBeginning && !wasBeginning) {
      swiper2.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper2.emit("reachEnd toEdge");
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper2.emit("fromEdge");
    }
    swiper2.emit("progress", progress);
  }
  function updateSlidesClasses() {
    const swiper2 = this;
    const {
      slides,
      params,
      slidesEl,
      activeIndex
    } = swiper2;
    const isVirtual = swiper2.virtual && params.virtual.enabled;
    const gridEnabled = swiper2.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector) => {
      return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
    };
    slides.forEach((slideEl) => {
      slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
    });
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
      if (params.loop) {
        let slideIndex = activeIndex - swiper2.virtual.slidesBefore;
        if (slideIndex < 0)
          slideIndex = swiper2.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper2.virtual.slides.length)
          slideIndex -= swiper2.virtual.slides.length;
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
      } else {
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
      }
    } else {
      if (gridEnabled) {
        activeSlide = slides.filter((slideEl) => slideEl.column === activeIndex)[0];
        nextSlide = slides.filter((slideEl) => slideEl.column === activeIndex + 1)[0];
        prevSlide = slides.filter((slideEl) => slideEl.column === activeIndex - 1)[0];
      } else {
        activeSlide = slides[activeIndex];
      }
    }
    if (activeSlide) {
      activeSlide.classList.add(params.slideActiveClass);
      if (gridEnabled) {
        if (nextSlide) {
          nextSlide.classList.add(params.slideNextClass);
        }
        if (prevSlide) {
          prevSlide.classList.add(params.slidePrevClass);
        }
      } else {
        nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }
        if (nextSlide) {
          nextSlide.classList.add(params.slideNextClass);
        }
        prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
        if (prevSlide) {
          prevSlide.classList.add(params.slidePrevClass);
        }
      }
    }
    swiper2.emitSlidesClasses();
  }
  var processLazyPreloader = (swiper2, imageEl) => {
    if (!swiper2 || swiper2.destroyed || !swiper2.params)
      return;
    const slideSelector = () => swiper2.isElement ? `swiper-slide` : `.${swiper2.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
      let lazyEl = slideEl.querySelector(`.${swiper2.params.lazyPreloaderClass}`);
      if (!lazyEl && swiper2.isElement) {
        if (slideEl.shadowRoot) {
          lazyEl = slideEl.shadowRoot.querySelector(`.${swiper2.params.lazyPreloaderClass}`);
        } else {
          requestAnimationFrame(() => {
            if (slideEl.shadowRoot) {
              lazyEl = slideEl.shadowRoot.querySelector(`.${swiper2.params.lazyPreloaderClass}`);
              if (lazyEl)
                lazyEl.remove();
            }
          });
        }
      }
      if (lazyEl)
        lazyEl.remove();
    }
  };
  var unlazy = (swiper2, index) => {
    if (!swiper2.slides[index])
      return;
    const imageEl = swiper2.slides[index].querySelector('[loading="lazy"]');
    if (imageEl)
      imageEl.removeAttribute("loading");
  };
  var preload = (swiper2) => {
    if (!swiper2 || swiper2.destroyed || !swiper2.params)
      return;
    let amount = swiper2.params.lazyPreloadPrevNext;
    const len = swiper2.slides.length;
    if (!len || !amount || amount < 0)
      return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper2.params.slidesPerView === "auto" ? swiper2.slidesPerViewDynamic() : Math.ceil(swiper2.params.slidesPerView);
    const activeIndex = swiper2.activeIndex;
    if (swiper2.params.grid && swiper2.params.grid.rows > 1) {
      const activeColumn = activeIndex;
      const preloadColumns = [activeColumn - amount];
      preloadColumns.push(...Array.from({
        length: amount
      }).map((_2, i3) => {
        return activeColumn + slidesPerView + i3;
      }));
      swiper2.slides.forEach((slideEl, i3) => {
        if (preloadColumns.includes(slideEl.column))
          unlazy(swiper2, i3);
      });
      return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper2.params.rewind || swiper2.params.loop) {
      for (let i3 = activeIndex - amount; i3 <= slideIndexLastInView + amount; i3 += 1) {
        const realIndex = (i3 % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView)
          unlazy(swiper2, realIndex);
      }
    } else {
      for (let i3 = Math.max(activeIndex - amount, 0); i3 <= Math.min(slideIndexLastInView + amount, len - 1); i3 += 1) {
        if (i3 !== activeIndex && (i3 > slideIndexLastInView || i3 < activeIndex)) {
          unlazy(swiper2, i3);
        }
      }
    }
  };
  function getActiveIndexByTranslate(swiper2) {
    const {
      slidesGrid,
      params
    } = swiper2;
    const translate2 = swiper2.rtlTranslate ? swiper2.translate : -swiper2.translate;
    let activeIndex;
    for (let i3 = 0; i3 < slidesGrid.length; i3 += 1) {
      if (typeof slidesGrid[i3 + 1] !== "undefined") {
        if (translate2 >= slidesGrid[i3] && translate2 < slidesGrid[i3 + 1] - (slidesGrid[i3 + 1] - slidesGrid[i3]) / 2) {
          activeIndex = i3;
        } else if (translate2 >= slidesGrid[i3] && translate2 < slidesGrid[i3 + 1]) {
          activeIndex = i3 + 1;
        }
      } else if (translate2 >= slidesGrid[i3]) {
        activeIndex = i3;
      }
    }
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === "undefined")
        activeIndex = 0;
    }
    return activeIndex;
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper2 = this;
    const translate2 = swiper2.rtlTranslate ? swiper2.translate : -swiper2.translate;
    const {
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex
    } = swiper2;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex) => {
      let realIndex2 = aIndex - swiper2.virtual.slidesBefore;
      if (realIndex2 < 0) {
        realIndex2 = swiper2.virtual.slides.length + realIndex2;
      }
      if (realIndex2 >= swiper2.virtual.slides.length) {
        realIndex2 -= swiper2.virtual.slides.length;
      }
      return realIndex2;
    };
    if (typeof activeIndex === "undefined") {
      activeIndex = getActiveIndexByTranslate(swiper2);
    }
    if (snapGrid.indexOf(translate2) >= 0) {
      snapIndex = snapGrid.indexOf(translate2);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper2.params.loop) {
      if (snapIndex !== previousSnapIndex) {
        swiper2.snapIndex = snapIndex;
        swiper2.emit("snapIndexChange");
      }
      return;
    }
    if (activeIndex === previousIndex && swiper2.params.loop && swiper2.virtual && swiper2.params.virtual.enabled) {
      swiper2.realIndex = getVirtualRealIndex(activeIndex);
      return;
    }
    const gridEnabled = swiper2.grid && params.grid && params.grid.rows > 1;
    let realIndex;
    if (swiper2.virtual && params.virtual.enabled && params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else if (gridEnabled) {
      const firstSlideInColumn = swiper2.slides.filter((slideEl) => slideEl.column === activeIndex)[0];
      let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
      if (Number.isNaN(activeSlideIndex)) {
        activeSlideIndex = Math.max(swiper2.slides.indexOf(firstSlideInColumn), 0);
      }
      realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper2.slides[activeIndex]) {
      const slideIndex = swiper2.slides[activeIndex].getAttribute("data-swiper-slide-index");
      if (slideIndex) {
        realIndex = parseInt(slideIndex, 10);
      } else {
        realIndex = activeIndex;
      }
    } else {
      realIndex = activeIndex;
    }
    Object.assign(swiper2, {
      previousSnapIndex,
      snapIndex,
      previousRealIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    if (swiper2.initialized) {
      preload(swiper2);
    }
    swiper2.emit("activeIndexChange");
    swiper2.emit("snapIndexChange");
    if (swiper2.initialized || swiper2.params.runCallbacksOnInit) {
      if (previousRealIndex !== realIndex) {
        swiper2.emit("realIndexChange");
      }
      swiper2.emit("slideChange");
    }
  }
  function updateClickedSlide(el, path) {
    const swiper2 = this;
    const params = swiper2.params;
    let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
    if (!slide2 && swiper2.isElement && path && path.length > 1 && path.includes(el)) {
      [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
        if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
          slide2 = pathEl;
        }
      });
    }
    let slideFound = false;
    let slideIndex;
    if (slide2) {
      for (let i3 = 0; i3 < swiper2.slides.length; i3 += 1) {
        if (swiper2.slides[i3] === slide2) {
          slideFound = true;
          slideIndex = i3;
          break;
        }
      }
    }
    if (slide2 && slideFound) {
      swiper2.clickedSlide = slide2;
      if (swiper2.virtual && swiper2.params.virtual.enabled) {
        swiper2.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
      } else {
        swiper2.clickedIndex = slideIndex;
      }
    } else {
      swiper2.clickedSlide = void 0;
      swiper2.clickedIndex = void 0;
      return;
    }
    if (params.slideToClickedSlide && swiper2.clickedIndex !== void 0 && swiper2.clickedIndex !== swiper2.activeIndex) {
      swiper2.slideToClickedSlide();
    }
  }
  var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
  };
  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? "x" : "y";
    }
    const swiper2 = this;
    const {
      params,
      rtlTranslate: rtl,
      translate: translate2,
      wrapperEl
    } = swiper2;
    if (params.virtualTranslate) {
      return rtl ? -translate2 : translate2;
    }
    if (params.cssMode) {
      return translate2;
    }
    let currentTranslate = getTranslate(wrapperEl, axis);
    currentTranslate += swiper2.cssOverflowAdjustment();
    if (rtl)
      currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }
  function setTranslate(translate2, byController) {
    const swiper2 = this;
    const {
      rtlTranslate: rtl,
      params,
      wrapperEl,
      progress
    } = swiper2;
    let x2 = 0;
    let y2 = 0;
    const z2 = 0;
    if (swiper2.isHorizontal()) {
      x2 = rtl ? -translate2 : translate2;
    } else {
      y2 = translate2;
    }
    if (params.roundLengths) {
      x2 = Math.floor(x2);
      y2 = Math.floor(y2);
    }
    swiper2.previousTranslate = swiper2.translate;
    swiper2.translate = swiper2.isHorizontal() ? x2 : y2;
    if (params.cssMode) {
      wrapperEl[swiper2.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper2.isHorizontal() ? -x2 : -y2;
    } else if (!params.virtualTranslate) {
      if (swiper2.isHorizontal()) {
        x2 -= swiper2.cssOverflowAdjustment();
      } else {
        y2 -= swiper2.cssOverflowAdjustment();
      }
      wrapperEl.style.transform = `translate3d(${x2}px, ${y2}px, ${z2}px)`;
    }
    let newProgress;
    const translatesDiff = swiper2.maxTranslate() - swiper2.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate2 - swiper2.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper2.updateProgress(translate2);
    }
    swiper2.emit("setTranslate", swiper2.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
    if (translate2 === void 0) {
      translate2 = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    const swiper2 = this;
    const {
      params,
      wrapperEl
    } = swiper2;
    if (swiper2.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate2 = swiper2.minTranslate();
    const maxTranslate2 = swiper2.maxTranslate();
    let newTranslate;
    if (translateBounds && translate2 > minTranslate2)
      newTranslate = minTranslate2;
    else if (translateBounds && translate2 < maxTranslate2)
      newTranslate = maxTranslate2;
    else
      newTranslate = translate2;
    swiper2.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper2.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (!swiper2.support.smoothScroll) {
          animateCSSModeScroll({
            swiper: swiper2,
            targetPosition: -newTranslate,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: -newTranslate,
          behavior: "smooth"
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper2.setTransition(0);
      swiper2.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper2.emit("beforeTransitionStart", speed, internal);
        swiper2.emit("transitionEnd");
      }
    } else {
      swiper2.setTransition(speed);
      swiper2.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper2.emit("beforeTransitionStart", speed, internal);
        swiper2.emit("transitionStart");
      }
      if (!swiper2.animating) {
        swiper2.animating = true;
        if (!swiper2.onTranslateToWrapperTransitionEnd) {
          swiper2.onTranslateToWrapperTransitionEnd = function transitionEnd2(e7) {
            if (!swiper2 || swiper2.destroyed)
              return;
            if (e7.target !== this)
              return;
            swiper2.wrapperEl.removeEventListener("transitionend", swiper2.onTranslateToWrapperTransitionEnd);
            swiper2.onTranslateToWrapperTransitionEnd = null;
            delete swiper2.onTranslateToWrapperTransitionEnd;
            if (runCallbacks) {
              swiper2.emit("transitionEnd");
            }
          };
        }
        swiper2.wrapperEl.addEventListener("transitionend", swiper2.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }
  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };
  function setTransition(duration, byController) {
    const swiper2 = this;
    if (!swiper2.params.cssMode) {
      swiper2.wrapperEl.style.transitionDuration = `${duration}ms`;
      swiper2.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
    }
    swiper2.emit("setTransition", duration, byController);
  }
  function transitionEmit(_ref) {
    let {
      swiper: swiper2,
      runCallbacks,
      direction,
      step
    } = _ref;
    const {
      activeIndex,
      previousIndex
    } = swiper2;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex)
        dir = "next";
      else if (activeIndex < previousIndex)
        dir = "prev";
      else
        dir = "reset";
    }
    swiper2.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper2.emit(`slideResetTransition${step}`);
        return;
      }
      swiper2.emit(`slideChangeTransition${step}`);
      if (dir === "next") {
        swiper2.emit(`slideNextTransition${step}`);
      } else {
        swiper2.emit(`slidePrevTransition${step}`);
      }
    }
  }
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper2 = this;
    const {
      params
    } = swiper2;
    if (params.cssMode)
      return;
    if (params.autoHeight) {
      swiper2.updateAutoHeight();
    }
    transitionEmit({
      swiper: swiper2,
      runCallbacks,
      direction,
      step: "Start"
    });
  }
  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper2 = this;
    const {
      params
    } = swiper2;
    swiper2.animating = false;
    if (params.cssMode)
      return;
    swiper2.setTransition(0);
    transitionEmit({
      swiper: swiper2,
      runCallbacks,
      direction,
      step: "End"
    });
  }
  var transition = {
    setTransition,
    transitionStart,
    transitionEnd
  };
  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      index = parseInt(index, 10);
    }
    const swiper2 = this;
    let slideIndex = index;
    if (slideIndex < 0)
      slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled
    } = swiper2;
    if (swiper2.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
      return false;
    }
    const skip = Math.min(swiper2.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper2.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    const translate2 = -snapGrid[snapIndex];
    if (params.normalizeSlideIndex) {
      for (let i3 = 0; i3 < slidesGrid.length; i3 += 1) {
        const normalizedTranslate = -Math.floor(translate2 * 100);
        const normalizedGrid = Math.floor(slidesGrid[i3] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i3 + 1] * 100);
        if (typeof slidesGrid[i3 + 1] !== "undefined") {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i3;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i3 + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i3;
        }
      }
    }
    if (swiper2.initialized && slideIndex !== activeIndex) {
      if (!swiper2.allowSlideNext && (rtl ? translate2 > swiper2.translate && translate2 > swiper2.minTranslate() : translate2 < swiper2.translate && translate2 < swiper2.minTranslate())) {
        return false;
      }
      if (!swiper2.allowSlidePrev && translate2 > swiper2.translate && translate2 > swiper2.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper2.emit("beforeSlideChangeStart");
    }
    swiper2.updateProgress(translate2);
    let direction;
    if (slideIndex > activeIndex)
      direction = "next";
    else if (slideIndex < activeIndex)
      direction = "prev";
    else
      direction = "reset";
    if (rtl && -translate2 === swiper2.translate || !rtl && translate2 === swiper2.translate) {
      swiper2.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper2.updateAutoHeight();
      }
      swiper2.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper2.setTranslate(translate2);
      }
      if (direction !== "reset") {
        swiper2.transitionStart(runCallbacks, direction);
        swiper2.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper2.isHorizontal();
      const t3 = rtl ? translate2 : -translate2;
      if (speed === 0) {
        const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
        if (isVirtual) {
          swiper2.wrapperEl.style.scrollSnapType = "none";
          swiper2._immediateVirtual = true;
        }
        if (isVirtual && !swiper2._cssModeVirtualInitialSet && swiper2.params.initialSlide > 0) {
          swiper2._cssModeVirtualInitialSet = true;
          requestAnimationFrame(() => {
            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t3;
          });
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t3;
        }
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper2.wrapperEl.style.scrollSnapType = "";
            swiper2._immediateVirtual = false;
          });
        }
      } else {
        if (!swiper2.support.smoothScroll) {
          animateCSSModeScroll({
            swiper: swiper2,
            targetPosition: t3,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: t3,
          behavior: "smooth"
        });
      }
      return true;
    }
    swiper2.setTransition(speed);
    swiper2.setTranslate(translate2);
    swiper2.updateActiveIndex(slideIndex);
    swiper2.updateSlidesClasses();
    swiper2.emit("beforeTransitionStart", speed, internal);
    swiper2.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper2.transitionEnd(runCallbacks, direction);
    } else if (!swiper2.animating) {
      swiper2.animating = true;
      if (!swiper2.onSlideToWrapperTransitionEnd) {
        swiper2.onSlideToWrapperTransitionEnd = function transitionEnd2(e7) {
          if (!swiper2 || swiper2.destroyed)
            return;
          if (e7.target !== this)
            return;
          swiper2.wrapperEl.removeEventListener("transitionend", swiper2.onSlideToWrapperTransitionEnd);
          swiper2.onSlideToWrapperTransitionEnd = null;
          delete swiper2.onSlideToWrapperTransitionEnd;
          swiper2.transitionEnd(runCallbacks, direction);
        };
      }
      swiper2.wrapperEl.addEventListener("transitionend", swiper2.onSlideToWrapperTransitionEnd);
    }
    return true;
  }
  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      const indexAsNumber = parseInt(index, 10);
      index = indexAsNumber;
    }
    const swiper2 = this;
    const gridEnabled = swiper2.grid && swiper2.params.grid && swiper2.params.grid.rows > 1;
    let newIndex = index;
    if (swiper2.params.loop) {
      if (swiper2.virtual && swiper2.params.virtual.enabled) {
        newIndex = newIndex + swiper2.virtual.slidesBefore;
      } else {
        let targetSlideIndex;
        if (gridEnabled) {
          const slideIndex = newIndex * swiper2.params.grid.rows;
          targetSlideIndex = swiper2.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
        } else {
          targetSlideIndex = swiper2.getSlideIndexByData(newIndex);
        }
        const cols = gridEnabled ? Math.ceil(swiper2.slides.length / swiper2.params.grid.rows) : swiper2.slides.length;
        const {
          centeredSlides
        } = swiper2.params;
        let slidesPerView = swiper2.params.slidesPerView;
        if (slidesPerView === "auto") {
          slidesPerView = swiper2.slidesPerViewDynamic();
        } else {
          slidesPerView = Math.ceil(parseFloat(swiper2.params.slidesPerView, 10));
          if (centeredSlides && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
          }
        }
        let needLoopFix = cols - targetSlideIndex < slidesPerView;
        if (centeredSlides) {
          needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
        }
        if (needLoopFix) {
          const direction = centeredSlides ? targetSlideIndex < swiper2.activeIndex ? "prev" : "next" : targetSlideIndex - swiper2.activeIndex - 1 < swiper2.params.slidesPerView ? "next" : "prev";
          swiper2.loopFix({
            direction,
            slideTo: true,
            activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
            slideRealIndex: direction === "next" ? swiper2.realIndex : void 0
          });
        }
        if (gridEnabled) {
          const slideIndex = newIndex * swiper2.params.grid.rows;
          newIndex = swiper2.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
        } else {
          newIndex = swiper2.getSlideIndexByData(newIndex);
        }
      }
    }
    requestAnimationFrame(() => {
      swiper2.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper2;
  }
  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper2 = this;
    const {
      enabled,
      params,
      animating
    } = swiper2;
    if (!enabled)
      return swiper2;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper2.slidesPerViewDynamic("current", true), 1);
    }
    const increment = swiper2.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper2.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding)
        return false;
      swiper2.loopFix({
        direction: "next"
      });
      swiper2._clientLeft = swiper2.wrapperEl.clientLeft;
      if (swiper2.activeIndex === swiper2.slides.length - 1 && params.cssMode) {
        requestAnimationFrame(() => {
          swiper2.slideTo(swiper2.activeIndex + increment, speed, runCallbacks, internal);
        });
        return true;
      }
    }
    if (params.rewind && swiper2.isEnd) {
      return swiper2.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper2.slideTo(swiper2.activeIndex + increment, speed, runCallbacks, internal);
  }
  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper2 = this;
    const {
      params,
      snapGrid,
      slidesGrid,
      rtlTranslate,
      enabled,
      animating
    } = swiper2;
    if (!enabled)
      return swiper2;
    const isVirtual = swiper2.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding)
        return false;
      swiper2.loopFix({
        direction: "prev"
      });
      swiper2._clientLeft = swiper2.wrapperEl.clientLeft;
    }
    const translate2 = rtlTranslate ? swiper2.translate : -swiper2.translate;
    function normalize(val) {
      if (val < 0)
        return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate2);
    const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
      let prevSnapIndex;
      snapGrid.forEach((snap, snapIndex) => {
        if (normalizedTranslate >= snap) {
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== "undefined") {
        prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0)
        prevIndex = swiper2.activeIndex - 1;
      if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper2.slidesPerViewDynamic("previous", true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper2.isBeginning) {
      const lastIndex = swiper2.params.virtual && swiper2.params.virtual.enabled && swiper2.virtual ? swiper2.virtual.slides.length - 1 : swiper2.slides.length - 1;
      return swiper2.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper2.activeIndex === 0 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper2.slideTo(prevIndex, speed, runCallbacks, internal);
      });
      return true;
    }
    return swiper2.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper2 = this;
    return swiper2.slideTo(swiper2.activeIndex, speed, runCallbacks, internal);
  }
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    const swiper2 = this;
    let index = swiper2.activeIndex;
    const skip = Math.min(swiper2.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper2.params.slidesPerGroup);
    const translate2 = swiper2.rtlTranslate ? swiper2.translate : -swiper2.translate;
    if (translate2 >= swiper2.snapGrid[snapIndex]) {
      const currentSnap = swiper2.snapGrid[snapIndex];
      const nextSnap = swiper2.snapGrid[snapIndex + 1];
      if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper2.params.slidesPerGroup;
      }
    } else {
      const prevSnap = swiper2.snapGrid[snapIndex - 1];
      const currentSnap = swiper2.snapGrid[snapIndex];
      if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index -= swiper2.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper2.slidesGrid.length - 1);
    return swiper2.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    const swiper2 = this;
    const {
      params,
      slidesEl
    } = swiper2;
    const slidesPerView = params.slidesPerView === "auto" ? swiper2.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper2.clickedIndex;
    let realIndex;
    const slideSelector = swiper2.isElement ? `swiper-slide` : `.${params.slideClass}`;
    if (params.loop) {
      if (swiper2.animating)
        return;
      realIndex = parseInt(swiper2.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper2.loopedSlides - slidesPerView / 2 || slideToIndex > swiper2.slides.length - swiper2.loopedSlides + slidesPerView / 2) {
          swiper2.loopFix();
          slideToIndex = swiper2.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
          nextTick(() => {
            swiper2.slideTo(slideToIndex);
          });
        } else {
          swiper2.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper2.slides.length - slidesPerView) {
        swiper2.loopFix();
        slideToIndex = swiper2.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper2.slideTo(slideToIndex);
        });
      } else {
        swiper2.slideTo(slideToIndex);
      }
    } else {
      swiper2.slideTo(slideToIndex);
    }
  }
  var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };
  function loopCreate(slideRealIndex) {
    const swiper2 = this;
    const {
      params,
      slidesEl
    } = swiper2;
    if (!params.loop || swiper2.virtual && swiper2.params.virtual.enabled)
      return;
    const initSlides = () => {
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      slides.forEach((el, index) => {
        el.setAttribute("data-swiper-slide-index", index);
      });
    };
    const gridEnabled = swiper2.grid && params.grid && params.grid.rows > 1;
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper2.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper2.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides) => {
      for (let i3 = 0; i3 < amountOfSlides; i3 += 1) {
        const slideEl = swiper2.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
        swiper2.slidesEl.append(slideEl);
      }
    };
    if (shouldFillGroup) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = slidesPerGroup - swiper2.slides.length % slidesPerGroup;
        addBlankSlides(slidesToAdd);
        swiper2.recalcSlides();
        swiper2.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else if (shouldFillGrid) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = params.grid.rows - swiper2.slides.length % params.grid.rows;
        addBlankSlides(slidesToAdd);
        swiper2.recalcSlides();
        swiper2.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else {
      initSlides();
    }
    swiper2.loopFix({
      slideRealIndex,
      direction: params.centeredSlides ? void 0 : "next"
    });
  }
  function loopFix(_temp) {
    let {
      slideRealIndex,
      slideTo: slideTo2 = true,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController,
      byMousewheel
    } = _temp === void 0 ? {} : _temp;
    const swiper2 = this;
    if (!swiper2.params.loop)
      return;
    swiper2.emit("beforeLoopFix");
    const {
      slides,
      allowSlidePrev,
      allowSlideNext,
      slidesEl,
      params
    } = swiper2;
    const {
      centeredSlides
    } = params;
    swiper2.allowSlidePrev = true;
    swiper2.allowSlideNext = true;
    if (swiper2.virtual && params.virtual.enabled) {
      if (slideTo2) {
        if (!params.centeredSlides && swiper2.snapIndex === 0) {
          swiper2.slideTo(swiper2.virtual.slides.length, 0, false, true);
        } else if (params.centeredSlides && swiper2.snapIndex < params.slidesPerView) {
          swiper2.slideTo(swiper2.virtual.slides.length + swiper2.snapIndex, 0, false, true);
        } else if (swiper2.snapIndex === swiper2.snapGrid.length - 1) {
          swiper2.slideTo(swiper2.virtual.slidesBefore, 0, false, true);
        }
      }
      swiper2.allowSlidePrev = allowSlidePrev;
      swiper2.allowSlideNext = allowSlideNext;
      swiper2.emit("loopFix");
      return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === "auto") {
      slidesPerView = swiper2.slidesPerViewDynamic();
    } else {
      slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
      if (centeredSlides && slidesPerView % 2 === 0) {
        slidesPerView = slidesPerView + 1;
      }
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
      loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper2.loopedSlides = loopedSlides;
    const gridEnabled = swiper2.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides) {
      showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
    } else if (gridEnabled && params.grid.fill === "row") {
      showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    }
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper2.activeIndex;
    if (typeof activeSlideIndex === "undefined") {
      activeSlideIndex = swiper2.getSlideIndex(slides.filter((el) => el.classList.contains(params.slideActiveClass))[0]);
    } else {
      activeIndex = activeSlideIndex;
    }
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
    if (activeColIndexWithShift < loopedSlides) {
      slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
      for (let i3 = 0; i3 < loopedSlides - activeColIndexWithShift; i3 += 1) {
        const index = i3 - Math.floor(i3 / cols) * cols;
        if (gridEnabled) {
          const colIndexToPrepend = cols - index - 1;
          for (let i4 = slides.length - 1; i4 >= 0; i4 -= 1) {
            if (slides[i4].column === colIndexToPrepend)
              prependSlidesIndexes.push(i4);
          }
        } else {
          prependSlidesIndexes.push(cols - index - 1);
        }
      }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
      slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
      for (let i3 = 0; i3 < slidesAppended; i3 += 1) {
        const index = i3 - Math.floor(i3 / cols) * cols;
        if (gridEnabled) {
          slides.forEach((slide2, slideIndex) => {
            if (slide2.column === index)
              appendSlidesIndexes.push(slideIndex);
          });
        } else {
          appendSlidesIndexes.push(index);
        }
      }
    }
    swiper2.__preventObserver__ = true;
    requestAnimationFrame(() => {
      swiper2.__preventObserver__ = false;
    });
    if (isPrev) {
      prependSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    if (isNext) {
      appendSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    swiper2.recalcSlides();
    if (params.slidesPerView === "auto") {
      swiper2.updateSlides();
    } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
      swiper2.slides.forEach((slide2, slideIndex) => {
        swiper2.grid.updateSlide(slideIndex, slide2, swiper2.slides);
      });
    }
    if (params.watchSlidesProgress) {
      swiper2.updateSlidesOffset();
    }
    if (slideTo2) {
      if (prependSlidesIndexes.length > 0 && isPrev) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper2.slidesGrid[activeIndex];
          const newSlideTranslate = swiper2.slidesGrid[activeIndex + slidesPrepended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper2.setTranslate(swiper2.translate - diff);
          } else {
            swiper2.slideTo(activeIndex + slidesPrepended, 0, false, true);
            if (setTranslate2) {
              swiper2.touchEventsData.startTranslate = swiper2.touchEventsData.startTranslate - diff;
              swiper2.touchEventsData.currentTranslate = swiper2.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          if (setTranslate2) {
            const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
            swiper2.slideTo(swiper2.activeIndex + shift, 0, false, true);
            swiper2.touchEventsData.currentTranslate = swiper2.translate;
          }
        }
      } else if (appendSlidesIndexes.length > 0 && isNext) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper2.slidesGrid[activeIndex];
          const newSlideTranslate = swiper2.slidesGrid[activeIndex - slidesAppended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper2.setTranslate(swiper2.translate - diff);
          } else {
            swiper2.slideTo(activeIndex - slidesAppended, 0, false, true);
            if (setTranslate2) {
              swiper2.touchEventsData.startTranslate = swiper2.touchEventsData.startTranslate - diff;
              swiper2.touchEventsData.currentTranslate = swiper2.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
          swiper2.slideTo(swiper2.activeIndex - shift, 0, false, true);
        }
      }
    }
    swiper2.allowSlidePrev = allowSlidePrev;
    swiper2.allowSlideNext = allowSlideNext;
    if (swiper2.controller && swiper2.controller.control && !byController) {
      const loopParams = {
        slideRealIndex,
        direction,
        setTranslate: setTranslate2,
        activeSlideIndex,
        byController: true
      };
      if (Array.isArray(swiper2.controller.control)) {
        swiper2.controller.control.forEach((c2) => {
          if (!c2.destroyed && c2.params.loop)
            c2.loopFix({
              ...loopParams,
              slideTo: c2.params.slidesPerView === params.slidesPerView ? slideTo2 : false
            });
        });
      } else if (swiper2.controller.control instanceof swiper2.constructor && swiper2.controller.control.params.loop) {
        swiper2.controller.control.loopFix({
          ...loopParams,
          slideTo: swiper2.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        });
      }
    }
    swiper2.emit("loopFix");
  }
  function loopDestroy() {
    const swiper2 = this;
    const {
      params,
      slidesEl
    } = swiper2;
    if (!params.loop || swiper2.virtual && swiper2.params.virtual.enabled)
      return;
    swiper2.recalcSlides();
    const newSlidesOrder = [];
    swiper2.slides.forEach((slideEl) => {
      const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
      newSlidesOrder[index] = slideEl;
    });
    swiper2.slides.forEach((slideEl) => {
      slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl) => {
      slidesEl.append(slideEl);
    });
    swiper2.recalcSlides();
    swiper2.slideTo(swiper2.realIndex, 0);
  }
  var loop = {
    loopCreate,
    loopFix,
    loopDestroy
  };
  function setGrabCursor(moving) {
    const swiper2 = this;
    if (!swiper2.params.simulateTouch || swiper2.params.watchOverflow && swiper2.isLocked || swiper2.params.cssMode)
      return;
    const el = swiper2.params.touchEventsTarget === "container" ? swiper2.el : swiper2.wrapperEl;
    if (swiper2.isElement) {
      swiper2.__preventObserver__ = true;
    }
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper2.isElement) {
      requestAnimationFrame(() => {
        swiper2.__preventObserver__ = false;
      });
    }
  }
  function unsetGrabCursor() {
    const swiper2 = this;
    if (swiper2.params.watchOverflow && swiper2.isLocked || swiper2.params.cssMode) {
      return;
    }
    if (swiper2.isElement) {
      swiper2.__preventObserver__ = true;
    }
    swiper2[swiper2.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    if (swiper2.isElement) {
      requestAnimationFrame(() => {
        swiper2.__preventObserver__ = false;
      });
    }
  }
  var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
  };
  function closestElement(selector, base) {
    if (base === void 0) {
      base = this;
    }
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow())
        return null;
      if (el.assignedSlot)
        el = el.assignedSlot;
      const found = el.closest(selector);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function preventEdgeSwipe(swiper2, event2, startX) {
    const window2 = getWindow();
    const {
      params
    } = swiper2;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === "prevent") {
        event2.preventDefault();
        return true;
      }
      return false;
    }
    return true;
  }
  function onTouchStart(event2) {
    const swiper2 = this;
    const document2 = getDocument();
    let e7 = event2;
    if (e7.originalEvent)
      e7 = e7.originalEvent;
    const data = swiper2.touchEventsData;
    if (e7.type === "pointerdown") {
      if (data.pointerId !== null && data.pointerId !== e7.pointerId) {
        return;
      }
      data.pointerId = e7.pointerId;
    } else if (e7.type === "touchstart" && e7.targetTouches.length === 1) {
      data.touchId = e7.targetTouches[0].identifier;
    }
    if (e7.type === "touchstart") {
      preventEdgeSwipe(swiper2, e7, e7.targetTouches[0].pageX);
      return;
    }
    const {
      params,
      touches,
      enabled
    } = swiper2;
    if (!enabled)
      return;
    if (!params.simulateTouch && e7.pointerType === "mouse")
      return;
    if (swiper2.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper2.animating && params.cssMode && params.loop) {
      swiper2.loopFix();
    }
    let targetEl = e7.target;
    if (params.touchEventsTarget === "wrapper") {
      if (!swiper2.wrapperEl.contains(targetEl))
        return;
    }
    if ("which" in e7 && e7.which === 3)
      return;
    if ("button" in e7 && e7.button > 0)
      return;
    if (data.isTouched && data.isMoved)
      return;
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    const eventPath = e7.composedPath ? e7.composedPath() : e7.path;
    if (swipingClassHasValue && e7.target && e7.target.shadowRoot && eventPath) {
      targetEl = eventPath[0];
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e7.target && e7.target.shadowRoot);
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
      swiper2.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!targetEl.closest(params.swipeHandler))
        return;
    }
    touches.currentX = e7.pageX;
    touches.currentY = e7.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    if (!preventEdgeSwipe(swiper2, e7, startX)) {
      return;
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper2.allowClick = true;
    swiper2.updateSize();
    swiper2.swipeDirection = void 0;
    if (params.threshold > 0)
      data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
      preventDefault = false;
      if (targetEl.nodeName === "SELECT") {
        data.isTouched = false;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl) {
      document2.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper2.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
      e7.preventDefault();
    }
    if (params.freeMode && params.freeMode.enabled && swiper2.freeMode && swiper2.animating && !params.cssMode) {
      swiper2.freeMode.onTouchStart();
    }
    swiper2.emit("touchStart", e7);
  }
  function onTouchMove(event2) {
    const document2 = getDocument();
    const swiper2 = this;
    const data = swiper2.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      enabled
    } = swiper2;
    if (!enabled)
      return;
    if (!params.simulateTouch && event2.pointerType === "mouse")
      return;
    let e7 = event2;
    if (e7.originalEvent)
      e7 = e7.originalEvent;
    if (e7.type === "pointermove") {
      if (data.touchId !== null)
        return;
      const id = e7.pointerId;
      if (id !== data.pointerId)
        return;
    }
    let targetTouch;
    if (e7.type === "touchmove") {
      targetTouch = [...e7.changedTouches].filter((t3) => t3.identifier === data.touchId)[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId)
        return;
    } else {
      targetTouch = e7;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper2.emit("touchMoveOpposite", e7);
      }
      return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e7.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper2.allowTouchMove) {
      if (!e7.target.matches(data.focusableElements)) {
        swiper2.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
      if (swiper2.isVertical()) {
        if (pageY < touches.startY && swiper2.translate <= swiper2.maxTranslate() || pageY > touches.startY && swiper2.translate >= swiper2.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper2.translate <= swiper2.maxTranslate() || pageX > touches.startX && swiper2.translate >= swiper2.minTranslate()) {
        return;
      }
    }
    if (document2.activeElement) {
      if (e7.target === document2.activeElement && e7.target.matches(data.focusableElements)) {
        data.isMoved = true;
        swiper2.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper2.emit("touchMove", e7);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper2.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper2.params.threshold)
      return;
    if (typeof data.isScrolling === "undefined") {
      let touchAngle;
      if (swiper2.isHorizontal() && touches.currentY === touches.startY || swiper2.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper2.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper2.emit("touchMoveOpposite", e7);
    }
    if (typeof data.startMoving === "undefined") {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper2.allowClick = false;
    if (!params.cssMode && e7.cancelable) {
      e7.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e7.stopPropagation();
    }
    let diff = swiper2.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper2.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
      diff = Math.abs(diff) * (rtl ? 1 : -1);
      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
      touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper2.touchesDirection;
    swiper2.swipeDirection = diff > 0 ? "prev" : "next";
    swiper2.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper2.params.loop && !params.cssMode;
    const allowLoopFix = swiper2.touchesDirection === "next" && swiper2.allowSlideNext || swiper2.touchesDirection === "prev" && swiper2.allowSlidePrev;
    if (!data.isMoved) {
      if (isLoop && allowLoopFix) {
        swiper2.loopFix({
          direction: swiper2.swipeDirection
        });
      }
      data.startTranslate = swiper2.getTranslate();
      swiper2.setTransition(0);
      if (swiper2.animating) {
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true
        });
        swiper2.wrapperEl.dispatchEvent(evt);
      }
      data.allowMomentumBounce = false;
      if (params.grabCursor && (swiper2.allowSlideNext === true || swiper2.allowSlidePrev === true)) {
        swiper2.setGrabCursor(true);
      }
      swiper2.emit("sliderFirstMove", e7);
    }
    let loopFixed;
    (/* @__PURE__ */ new Date()).getTime();
    if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper2.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
        startTranslate: data.currentTranslate
      });
      data.loopSwapReset = true;
      data.startTranslate = data.currentTranslate;
      return;
    }
    swiper2.emit("sliderMove", e7);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper2.minTranslate() - swiper2.slidesSizesGrid[swiper2.activeIndex + 1] : swiper2.minTranslate())) {
        swiper2.loopFix({
          direction: "prev",
          setTranslate: true,
          activeSlideIndex: 0
        });
      }
      if (data.currentTranslate > swiper2.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper2.minTranslate() - 1 + (-swiper2.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
        }
      }
    } else if (diff < 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper2.maxTranslate() + swiper2.slidesSizesGrid[swiper2.slidesSizesGrid.length - 1] : swiper2.maxTranslate())) {
        swiper2.loopFix({
          direction: "next",
          setTranslate: true,
          activeSlideIndex: swiper2.slides.length - (params.slidesPerView === "auto" ? swiper2.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
      }
      if (data.currentTranslate < swiper2.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper2.maxTranslate() + 1 - (swiper2.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
        }
      }
    }
    if (disableParentSwiper) {
      e7.preventedByNestedSwiper = true;
    }
    if (!swiper2.allowSlideNext && swiper2.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper2.allowSlidePrev && swiper2.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper2.allowSlidePrev && !swiper2.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper2.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode)
      return;
    if (params.freeMode && params.freeMode.enabled && swiper2.freeMode || params.watchSlidesProgress) {
      swiper2.updateActiveIndex();
      swiper2.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper2.freeMode) {
      swiper2.freeMode.onTouchMove();
    }
    swiper2.updateProgress(data.currentTranslate);
    swiper2.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event2) {
    const swiper2 = this;
    const data = swiper2.touchEventsData;
    let e7 = event2;
    if (e7.originalEvent)
      e7 = e7.originalEvent;
    let targetTouch;
    const isTouchEvent = e7.type === "touchend" || e7.type === "touchcancel";
    if (!isTouchEvent) {
      if (data.touchId !== null)
        return;
      if (e7.pointerId !== data.pointerId)
        return;
      targetTouch = e7;
    } else {
      targetTouch = [...e7.changedTouches].filter((t3) => t3.identifier === data.touchId)[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId)
        return;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e7.type)) {
      const proceed = ["pointercancel", "contextmenu"].includes(e7.type) && (swiper2.browser.isSafari || swiper2.browser.isWebView);
      if (!proceed) {
        return;
      }
    }
    data.pointerId = null;
    data.touchId = null;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      slidesGrid,
      enabled
    } = swiper2;
    if (!enabled)
      return;
    if (!params.simulateTouch && e7.pointerType === "mouse")
      return;
    if (data.allowTouchCallbacks) {
      swiper2.emit("touchEnd", e7);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper2.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper2.allowSlideNext === true || swiper2.allowSlidePrev === true)) {
      swiper2.setGrabCursor(false);
    }
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (swiper2.allowClick) {
      const pathTree = e7.path || e7.composedPath && e7.composedPath();
      swiper2.updateClickedSlide(pathTree && pathTree[0] || e7.target, pathTree);
      swiper2.emit("tap click", e7);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper2.emit("doubleTap doubleClick", e7);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper2.destroyed)
        swiper2.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper2.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper2.translate : -swiper2.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode && params.freeMode.enabled) {
      swiper2.freeMode.onTouchEnd({
        currentPos
      });
      return;
    }
    const swipeToLast = currentPos >= -swiper2.maxTranslate() && !swiper2.params.loop;
    let stopIndex = 0;
    let groupSize = swiper2.slidesSizesGrid[0];
    for (let i3 = 0; i3 < slidesGrid.length; i3 += i3 < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      const increment2 = i3 < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i3 + increment2] !== "undefined") {
        if (swipeToLast || currentPos >= slidesGrid[i3] && currentPos < slidesGrid[i3 + increment2]) {
          stopIndex = i3;
          groupSize = slidesGrid[i3 + increment2] - slidesGrid[i3];
        }
      } else if (swipeToLast || currentPos >= slidesGrid[i3]) {
        stopIndex = i3;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper2.isBeginning) {
        rewindLastIndex = params.virtual && params.virtual.enabled && swiper2.virtual ? swiper2.virtual.slides.length - 1 : swiper2.slides.length - 1;
      } else if (swiper2.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper2.slideTo(swiper2.activeIndex);
        return;
      }
      if (swiper2.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio)
          swiper2.slideTo(params.rewind && swiper2.isEnd ? rewindFirstIndex : stopIndex + increment);
        else
          swiper2.slideTo(stopIndex);
      }
      if (swiper2.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper2.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper2.slideTo(rewindLastIndex);
        } else {
          swiper2.slideTo(stopIndex);
        }
      }
    } else {
      if (!params.shortSwipes) {
        swiper2.slideTo(swiper2.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper2.navigation && (e7.target === swiper2.navigation.nextEl || e7.target === swiper2.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper2.swipeDirection === "next") {
          swiper2.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper2.swipeDirection === "prev") {
          swiper2.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e7.target === swiper2.navigation.nextEl) {
        swiper2.slideTo(stopIndex + increment);
      } else {
        swiper2.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    const swiper2 = this;
    const {
      params,
      el
    } = swiper2;
    if (el && el.offsetWidth === 0)
      return;
    if (params.breakpoints) {
      swiper2.setBreakpoint();
    }
    const {
      allowSlideNext,
      allowSlidePrev,
      snapGrid
    } = swiper2;
    const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
    swiper2.allowSlideNext = true;
    swiper2.allowSlidePrev = true;
    swiper2.updateSize();
    swiper2.updateSlides();
    swiper2.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper2.isEnd && !swiper2.isBeginning && !swiper2.params.centeredSlides && !isVirtualLoop) {
      swiper2.slideTo(swiper2.slides.length - 1, 0, false, true);
    } else {
      if (swiper2.params.loop && !isVirtual) {
        swiper2.slideToLoop(swiper2.realIndex, 0, false, true);
      } else {
        swiper2.slideTo(swiper2.activeIndex, 0, false, true);
      }
    }
    if (swiper2.autoplay && swiper2.autoplay.running && swiper2.autoplay.paused) {
      clearTimeout(swiper2.autoplay.resizeTimeout);
      swiper2.autoplay.resizeTimeout = setTimeout(() => {
        if (swiper2.autoplay && swiper2.autoplay.running && swiper2.autoplay.paused) {
          swiper2.autoplay.resume();
        }
      }, 500);
    }
    swiper2.allowSlidePrev = allowSlidePrev;
    swiper2.allowSlideNext = allowSlideNext;
    if (swiper2.params.watchOverflow && snapGrid !== swiper2.snapGrid) {
      swiper2.checkOverflow();
    }
  }
  function onClick(e7) {
    const swiper2 = this;
    if (!swiper2.enabled)
      return;
    if (!swiper2.allowClick) {
      if (swiper2.params.preventClicks)
        e7.preventDefault();
      if (swiper2.params.preventClicksPropagation && swiper2.animating) {
        e7.stopPropagation();
        e7.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    const swiper2 = this;
    const {
      wrapperEl,
      rtlTranslate,
      enabled
    } = swiper2;
    if (!enabled)
      return;
    swiper2.previousTranslate = swiper2.translate;
    if (swiper2.isHorizontal()) {
      swiper2.translate = -wrapperEl.scrollLeft;
    } else {
      swiper2.translate = -wrapperEl.scrollTop;
    }
    if (swiper2.translate === 0)
      swiper2.translate = 0;
    swiper2.updateActiveIndex();
    swiper2.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper2.maxTranslate() - swiper2.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper2.translate - swiper2.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper2.progress) {
      swiper2.updateProgress(rtlTranslate ? -swiper2.translate : swiper2.translate);
    }
    swiper2.emit("setTranslate", swiper2.translate, false);
  }
  function onLoad(e7) {
    const swiper2 = this;
    processLazyPreloader(swiper2, e7.target);
    if (swiper2.params.cssMode || swiper2.params.slidesPerView !== "auto" && !swiper2.params.autoHeight) {
      return;
    }
    swiper2.update();
  }
  function onDocumentTouchStart() {
    const swiper2 = this;
    if (swiper2.documentTouchHandlerProceeded)
      return;
    swiper2.documentTouchHandlerProceeded = true;
    if (swiper2.params.touchReleaseOnEdges) {
      swiper2.el.style.touchAction = "auto";
    }
  }
  var events = (swiper2, method) => {
    const document2 = getDocument();
    const {
      params,
      el,
      wrapperEl,
      device
    } = swiper2;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    document2[domMethod]("touchstart", swiper2.onDocumentTouchStart, {
      passive: false,
      capture
    });
    el[domMethod]("touchstart", swiper2.onTouchStart, {
      passive: false
    });
    el[domMethod]("pointerdown", swiper2.onTouchStart, {
      passive: false
    });
    document2[domMethod]("touchmove", swiper2.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("pointermove", swiper2.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("touchend", swiper2.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerup", swiper2.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointercancel", swiper2.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("touchcancel", swiper2.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerout", swiper2.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerleave", swiper2.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("contextmenu", swiper2.onTouchEnd, {
      passive: true
    });
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]("click", swiper2.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]("scroll", swiper2.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper2[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    } else {
      swiper2[swiperMethod]("observerUpdate", onResize, true);
    }
    el[domMethod]("load", swiper2.onLoad, {
      capture: true
    });
  };
  function attachEvents() {
    const swiper2 = this;
    const {
      params
    } = swiper2;
    swiper2.onTouchStart = onTouchStart.bind(swiper2);
    swiper2.onTouchMove = onTouchMove.bind(swiper2);
    swiper2.onTouchEnd = onTouchEnd.bind(swiper2);
    swiper2.onDocumentTouchStart = onDocumentTouchStart.bind(swiper2);
    if (params.cssMode) {
      swiper2.onScroll = onScroll.bind(swiper2);
    }
    swiper2.onClick = onClick.bind(swiper2);
    swiper2.onLoad = onLoad.bind(swiper2);
    events(swiper2, "on");
  }
  function detachEvents() {
    const swiper2 = this;
    events(swiper2, "off");
  }
  var events$1 = {
    attachEvents,
    detachEvents
  };
  var isGridEnabled = (swiper2, params) => {
    return swiper2.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper2 = this;
    const {
      realIndex,
      initialized,
      params,
      el
    } = swiper2;
    const breakpoints2 = params.breakpoints;
    if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0)
      return;
    const breakpoint = swiper2.getBreakpoint(breakpoints2, swiper2.params.breakpointsBase, swiper2.el);
    if (!breakpoint || swiper2.currentBreakpoint === breakpoint)
      return;
    const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
    const breakpointParams = breakpointOnlyParams || swiper2.originalParams;
    const wasMultiRow = isGridEnabled(swiper2, params);
    const isMultiRow = isGridEnabled(swiper2, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      swiper2.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper2.emitContainerClasses();
    }
    ["navigation", "pagination", "scrollbar"].forEach((prop) => {
      if (typeof breakpointParams[prop] === "undefined")
        return;
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper2[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper2[prop].enable();
      }
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) {
      swiper2.changeDirection();
    }
    extend2(swiper2.params, breakpointParams);
    const isEnabled = swiper2.params.enabled;
    const hasLoop = swiper2.params.loop;
    Object.assign(swiper2, {
      allowTouchMove: swiper2.params.allowTouchMove,
      allowSlideNext: swiper2.params.allowSlideNext,
      allowSlidePrev: swiper2.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper2.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper2.enable();
    }
    swiper2.currentBreakpoint = breakpoint;
    swiper2.emit("_beforeBreakpoint", breakpointParams);
    if (initialized) {
      if (needsReLoop) {
        swiper2.loopDestroy();
        swiper2.loopCreate(realIndex);
        swiper2.updateSlides();
      } else if (!wasLoop && hasLoop) {
        swiper2.loopCreate(realIndex);
        swiper2.updateSlides();
      } else if (wasLoop && !hasLoop) {
        swiper2.loopDestroy();
      }
    }
    swiper2.emit("breakpoint", breakpointParams);
  }
  function getBreakpoint(breakpoints2, base, containerEl) {
    if (base === void 0) {
      base = "window";
    }
    if (!breakpoints2 || base === "container" && !containerEl)
      return void 0;
    let breakpoint = false;
    const window2 = getWindow();
    const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints2).map((point) => {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point
        };
      }
      return {
        value: point,
        point
      };
    });
    points.sort((a2, b2) => parseInt(a2.value, 10) - parseInt(b2.value, 10));
    for (let i3 = 0; i3 < points.length; i3 += 1) {
      const {
        point,
        value
      } = points[i3];
      if (base === "window") {
        if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }
  var breakpoints = {
    setBreakpoint,
    getBreakpoint
  };
  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((classNames) => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper2 = this;
    const {
      classNames,
      params,
      rtl,
      el,
      device
    } = swiper2;
    const suffixes = prepareClasses(["initialized", params.direction, {
      "free-mode": swiper2.params.freeMode && params.freeMode.enabled
    }, {
      "autoheight": params.autoHeight
    }, {
      "rtl": rtl
    }, {
      "grid": params.grid && params.grid.rows > 1
    }, {
      "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
    }, {
      "android": device.android
    }, {
      "ios": device.ios
    }, {
      "css-mode": params.cssMode
    }, {
      "centered": params.cssMode && params.centeredSlides
    }, {
      "watch-progress": params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper2.emitContainerClasses();
  }
  function removeClasses() {
    const swiper2 = this;
    const {
      el,
      classNames
    } = swiper2;
    el.classList.remove(...classNames);
    swiper2.emitContainerClasses();
  }
  var classes = {
    addClasses,
    removeClasses
  };
  function checkOverflow() {
    const swiper2 = this;
    const {
      isLocked: wasLocked,
      params
    } = swiper2;
    const {
      slidesOffsetBefore
    } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper2.slides.length - 1;
      const lastSlideRightEdge = swiper2.slidesGrid[lastSlideIndex] + swiper2.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper2.isLocked = swiper2.size > lastSlideRightEdge;
    } else {
      swiper2.isLocked = swiper2.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper2.allowSlideNext = !swiper2.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper2.allowSlidePrev = !swiper2.isLocked;
    }
    if (wasLocked && wasLocked !== swiper2.isLocked) {
      swiper2.isEnd = false;
    }
    if (wasLocked !== swiper2.isLocked) {
      swiper2.emit(swiper2.isLocked ? "lock" : "unlock");
    }
  }
  var checkOverflow$1 = {
    checkOverflow
  };
  var defaults = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: "swiper",
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== "object" || moduleParams === null) {
        extend2(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
        params[moduleParamName].auto = true;
      }
      if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
        params[moduleParamName].auto = true;
      }
      if (!(moduleParamName in params && "enabled" in moduleParams)) {
        extend2(allModulesParams, obj);
        return;
      }
      if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName])
        params[moduleParamName] = {
          enabled: false
        };
      extend2(allModulesParams, obj);
    };
  }
  var prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
  };
  var extendedDefaults = {};
  var Swiper = class _Swiper {
    constructor() {
      let el;
      let params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params)
        params = {};
      params = extend2({}, params);
      if (el && !params.el)
        params.el = el;
      const document2 = getDocument();
      if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
        const swipers = [];
        document2.querySelectorAll(params.el).forEach((containerEl) => {
          const newParams = extend2({}, params, {
            el: containerEl
          });
          swipers.push(new _Swiper(newParams));
        });
        return swipers;
      }
      const swiper2 = this;
      swiper2.__swiper__ = true;
      swiper2.support = getSupport();
      swiper2.device = getDevice({
        userAgent: params.userAgent
      });
      swiper2.browser = getBrowser();
      swiper2.eventsListeners = {};
      swiper2.eventsAnyListeners = [];
      swiper2.modules = [...swiper2.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper2.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper2.modules.forEach((mod) => {
        mod({
          params,
          swiper: swiper2,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper2.on.bind(swiper2),
          once: swiper2.once.bind(swiper2),
          off: swiper2.off.bind(swiper2),
          emit: swiper2.emit.bind(swiper2)
        });
      });
      const swiperParams = extend2({}, defaults, allModulesParams);
      swiper2.params = extend2({}, swiperParams, extendedDefaults, params);
      swiper2.originalParams = extend2({}, swiper2.params);
      swiper2.passedParams = extend2({}, params);
      if (swiper2.params && swiper2.params.on) {
        Object.keys(swiper2.params.on).forEach((eventName) => {
          swiper2.on(eventName, swiper2.params.on[eventName]);
        });
      }
      if (swiper2.params && swiper2.params.onAny) {
        swiper2.onAny(swiper2.params.onAny);
      }
      Object.assign(swiper2, {
        enabled: swiper2.params.enabled,
        el,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return swiper2.params.direction === "horizontal";
        },
        isVertical() {
          return swiper2.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        // Locks
        allowSlideNext: swiper2.params.allowSlideNext,
        allowSlidePrev: swiper2.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          // Form elements to match
          focusableElements: swiper2.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper2.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper2.emit("_swiper");
      if (swiper2.params.init) {
        swiper2.init();
      }
      return swiper2;
    }
    getDirectionLabel(property) {
      if (this.isHorizontal()) {
        return property;
      }
      return {
        "width": "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        "marginRight": "marginBottom"
      }[property];
    }
    getSlideIndex(slideEl) {
      const {
        slidesEl,
        params
      } = this;
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      const firstSlideIndex = elementIndex(slides[0]);
      return elementIndex(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
      return this.getSlideIndex(this.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
    }
    recalcSlides() {
      const swiper2 = this;
      const {
        slidesEl,
        params
      } = swiper2;
      swiper2.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    enable() {
      const swiper2 = this;
      if (swiper2.enabled)
        return;
      swiper2.enabled = true;
      if (swiper2.params.grabCursor) {
        swiper2.setGrabCursor();
      }
      swiper2.emit("enable");
    }
    disable() {
      const swiper2 = this;
      if (!swiper2.enabled)
        return;
      swiper2.enabled = false;
      if (swiper2.params.grabCursor) {
        swiper2.unsetGrabCursor();
      }
      swiper2.emit("disable");
    }
    setProgress(progress, speed) {
      const swiper2 = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min2 = swiper2.minTranslate();
      const max2 = swiper2.maxTranslate();
      const current = (max2 - min2) * progress + min2;
      swiper2.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper2.updateActiveIndex();
      swiper2.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper2 = this;
      if (!swiper2.params._emitClasses || !swiper2.el)
        return;
      const cls = swiper2.el.className.split(" ").filter((className) => {
        return className.indexOf("swiper") === 0 || className.indexOf(swiper2.params.containerModifierClass) === 0;
      });
      swiper2.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
      const swiper2 = this;
      if (swiper2.destroyed)
        return "";
      return slideEl.className.split(" ").filter((className) => {
        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper2.params.slideClass) === 0;
      }).join(" ");
    }
    emitSlidesClasses() {
      const swiper2 = this;
      if (!swiper2.params._emitClasses || !swiper2.el)
        return;
      const updates = [];
      swiper2.slides.forEach((slideEl) => {
        const classNames = swiper2.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper2.emit("_slideClass", slideEl, classNames);
      });
      swiper2.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view, exact) {
      if (view === void 0) {
        view = "current";
      }
      if (exact === void 0) {
        exact = false;
      }
      const swiper2 = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex
      } = swiper2;
      let spv = 1;
      if (typeof params.slidesPerView === "number")
        return params.slidesPerView;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
        let breakLoop;
        for (let i3 = activeIndex + 1; i3 < slides.length; i3 += 1) {
          if (slides[i3] && !breakLoop) {
            slideSize += slides[i3].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
        for (let i3 = activeIndex - 1; i3 >= 0; i3 -= 1) {
          if (slides[i3] && !breakLoop) {
            slideSize += slides[i3].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
      } else {
        if (view === "current") {
          for (let i3 = activeIndex + 1; i3 < slides.length; i3 += 1) {
            const slideInView = exact ? slidesGrid[i3] + slidesSizesGrid[i3] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i3] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          for (let i3 = activeIndex - 1; i3 >= 0; i3 -= 1) {
            const slideInView = slidesGrid[activeIndex] - slidesGrid[i3] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper2 = this;
      if (!swiper2 || swiper2.destroyed)
        return;
      const {
        snapGrid,
        params
      } = swiper2;
      if (params.breakpoints) {
        swiper2.setBreakpoint();
      }
      [...swiper2.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper2, imageEl);
        }
      });
      swiper2.updateSize();
      swiper2.updateSlides();
      swiper2.updateProgress();
      swiper2.updateSlidesClasses();
      function setTranslate2() {
        const translateValue = swiper2.rtlTranslate ? swiper2.translate * -1 : swiper2.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper2.maxTranslate()), swiper2.minTranslate());
        swiper2.setTranslate(newTranslate);
        swiper2.updateActiveIndex();
        swiper2.updateSlidesClasses();
      }
      let translated;
      if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
        setTranslate2();
        if (params.autoHeight) {
          swiper2.updateAutoHeight();
        }
      } else {
        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper2.isEnd && !params.centeredSlides) {
          const slides = swiper2.virtual && params.virtual.enabled ? swiper2.virtual.slides : swiper2.slides;
          translated = swiper2.slideTo(slides.length - 1, 0, false, true);
        } else {
          translated = swiper2.slideTo(swiper2.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper2.snapGrid) {
        swiper2.checkOverflow();
      }
      swiper2.emit("update");
    }
    changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      const swiper2 = this;
      const currentDirection = swiper2.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
        return swiper2;
      }
      swiper2.el.classList.remove(`${swiper2.params.containerModifierClass}${currentDirection}`);
      swiper2.el.classList.add(`${swiper2.params.containerModifierClass}${newDirection}`);
      swiper2.emitContainerClasses();
      swiper2.params.direction = newDirection;
      swiper2.slides.forEach((slideEl) => {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper2.emit("changeDirection");
      if (needUpdate)
        swiper2.update();
      return swiper2;
    }
    changeLanguageDirection(direction) {
      const swiper2 = this;
      if (swiper2.rtl && direction === "rtl" || !swiper2.rtl && direction === "ltr")
        return;
      swiper2.rtl = direction === "rtl";
      swiper2.rtlTranslate = swiper2.params.direction === "horizontal" && swiper2.rtl;
      if (swiper2.rtl) {
        swiper2.el.classList.add(`${swiper2.params.containerModifierClass}rtl`);
        swiper2.el.dir = "rtl";
      } else {
        swiper2.el.classList.remove(`${swiper2.params.containerModifierClass}rtl`);
        swiper2.el.dir = "ltr";
      }
      swiper2.update();
    }
    mount(element) {
      const swiper2 = this;
      if (swiper2.mounted)
        return true;
      let el = element || swiper2.params.el;
      if (typeof el === "string") {
        el = document.querySelector(el);
      }
      if (!el) {
        return false;
      }
      el.swiper = swiper2;
      if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") {
        swiper2.isElement = true;
      }
      const getWrapperSelector = () => {
        return `.${(swiper2.params.wrapperClass || "").trim().split(" ").join(".")}`;
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = el.shadowRoot.querySelector(getWrapperSelector());
          return res;
        }
        return elementChildren(el, getWrapperSelector())[0];
      };
      let wrapperEl = getWrapper();
      if (!wrapperEl && swiper2.params.createElements) {
        wrapperEl = createElement("div", swiper2.params.wrapperClass);
        el.append(wrapperEl);
        elementChildren(el, `.${swiper2.params.slideClass}`).forEach((slideEl) => {
          wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper2, {
        el,
        wrapperEl,
        slidesEl: swiper2.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
        hostEl: swiper2.isElement ? el.parentNode.host : el,
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
        rtlTranslate: swiper2.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
        wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
      });
      return true;
    }
    init(el) {
      const swiper2 = this;
      if (swiper2.initialized)
        return swiper2;
      const mounted = swiper2.mount(el);
      if (mounted === false)
        return swiper2;
      swiper2.emit("beforeInit");
      if (swiper2.params.breakpoints) {
        swiper2.setBreakpoint();
      }
      swiper2.addClasses();
      swiper2.updateSize();
      swiper2.updateSlides();
      if (swiper2.params.watchOverflow) {
        swiper2.checkOverflow();
      }
      if (swiper2.params.grabCursor && swiper2.enabled) {
        swiper2.setGrabCursor();
      }
      if (swiper2.params.loop && swiper2.virtual && swiper2.params.virtual.enabled) {
        swiper2.slideTo(swiper2.params.initialSlide + swiper2.virtual.slidesBefore, 0, swiper2.params.runCallbacksOnInit, false, true);
      } else {
        swiper2.slideTo(swiper2.params.initialSlide, 0, swiper2.params.runCallbacksOnInit, false, true);
      }
      if (swiper2.params.loop) {
        swiper2.loopCreate();
      }
      swiper2.attachEvents();
      const lazyElements = [...swiper2.el.querySelectorAll('[loading="lazy"]')];
      if (swiper2.isElement) {
        lazyElements.push(...swiper2.hostEl.querySelectorAll('[loading="lazy"]'));
      }
      lazyElements.forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper2, imageEl);
        } else {
          imageEl.addEventListener("load", (e7) => {
            processLazyPreloader(swiper2, e7.target);
          });
        }
      });
      preload(swiper2);
      swiper2.initialized = true;
      preload(swiper2);
      swiper2.emit("init");
      swiper2.emit("afterInit");
      return swiper2;
    }
    destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      const swiper2 = this;
      const {
        params,
        el,
        wrapperEl,
        slides
      } = swiper2;
      if (typeof swiper2.params === "undefined" || swiper2.destroyed) {
        return null;
      }
      swiper2.emit("beforeDestroy");
      swiper2.initialized = false;
      swiper2.detachEvents();
      if (params.loop) {
        swiper2.loopDestroy();
      }
      if (cleanStyles) {
        swiper2.removeClasses();
        el.removeAttribute("style");
        wrapperEl.removeAttribute("style");
        if (slides && slides.length) {
          slides.forEach((slideEl) => {
            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            slideEl.removeAttribute("style");
            slideEl.removeAttribute("data-swiper-slide-index");
          });
        }
      }
      swiper2.emit("destroy");
      Object.keys(swiper2.eventsListeners).forEach((eventName) => {
        swiper2.off(eventName);
      });
      if (deleteInstance !== false) {
        swiper2.el.swiper = null;
        deleteProps(swiper2);
      }
      swiper2.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend2(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults;
    }
    static installModule(mod) {
      if (!_Swiper.prototype.__modules__)
        _Swiper.prototype.__modules__ = [];
      const modules = _Swiper.prototype.__modules__;
      if (typeof mod === "function" && modules.indexOf(mod) < 0) {
        modules.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach((m2) => _Swiper.installModule(m2));
        return _Swiper;
      }
      _Swiper.installModule(module);
      return _Swiper;
    }
  };
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer2]);

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/index.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/virtual.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/keyboard.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/mousewheel.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/navigation.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/create-element-if-not-defined.mjs
  init_live_reload();
  function createElementIfNotDefined(swiper2, originalParams, params, checkProps) {
    if (swiper2.params.createElements) {
      Object.keys(checkProps).forEach((key) => {
        if (!params[key] && params.auto === true) {
          let element = elementChildren(swiper2.el, `.${checkProps[key]}`)[0];
          if (!element) {
            element = createElement("div", checkProps[key]);
            element.className = checkProps[key];
            swiper2.el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/navigation.mjs
  function Navigation(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on: on2,
      emit
    } = _ref;
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    });
    swiper2.navigation = {
      nextEl: null,
      prevEl: null
    };
    const makeElementsArray = (el) => (Array.isArray(el) ? el : [el]).filter((e7) => !!e7);
    function getEl(el) {
      let res;
      if (el && typeof el === "string" && swiper2.isElement) {
        res = swiper2.el.querySelector(el);
        if (res)
          return res;
      }
      if (el) {
        if (typeof el === "string")
          res = [...document.querySelectorAll(el)];
        if (swiper2.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper2.el.querySelectorAll(el).length === 1) {
          res = swiper2.el.querySelector(el);
        }
      }
      if (el && !res)
        return el;
      return res;
    }
    function toggleEl(el, disabled) {
      const params = swiper2.params.navigation;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (subEl) {
          subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
          if (subEl.tagName === "BUTTON")
            subEl.disabled = disabled;
          if (swiper2.params.watchOverflow && swiper2.enabled) {
            subEl.classList[swiper2.isLocked ? "add" : "remove"](params.lockClass);
          }
        }
      });
    }
    function update2() {
      const {
        nextEl,
        prevEl
      } = swiper2.navigation;
      if (swiper2.params.loop) {
        toggleEl(prevEl, false);
        toggleEl(nextEl, false);
        return;
      }
      toggleEl(prevEl, swiper2.isBeginning && !swiper2.params.rewind);
      toggleEl(nextEl, swiper2.isEnd && !swiper2.params.rewind);
    }
    function onPrevClick(e7) {
      e7.preventDefault();
      if (swiper2.isBeginning && !swiper2.params.loop && !swiper2.params.rewind)
        return;
      swiper2.slidePrev();
      emit("navigationPrev");
    }
    function onNextClick(e7) {
      e7.preventDefault();
      if (swiper2.isEnd && !swiper2.params.loop && !swiper2.params.rewind)
        return;
      swiper2.slideNext();
      emit("navigationNext");
    }
    function init() {
      const params = swiper2.params.navigation;
      swiper2.params.navigation = createElementIfNotDefined(swiper2, swiper2.originalParams.navigation, swiper2.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      });
      if (!(params.nextEl || params.prevEl))
        return;
      let nextEl = getEl(params.nextEl);
      let prevEl = getEl(params.prevEl);
      Object.assign(swiper2.navigation, {
        nextEl,
        prevEl
      });
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const initButton = (el, dir) => {
        if (el) {
          el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        }
        if (!swiper2.enabled && el) {
          el.classList.add(...params.lockClass.split(" "));
        }
      };
      nextEl.forEach((el) => initButton(el, "next"));
      prevEl.forEach((el) => initButton(el, "prev"));
    }
    function destroy() {
      let {
        nextEl,
        prevEl
      } = swiper2.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const destroyButton = (el, dir) => {
        el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        el.classList.remove(...swiper2.params.navigation.disabledClass.split(" "));
      };
      nextEl.forEach((el) => destroyButton(el, "next"));
      prevEl.forEach((el) => destroyButton(el, "prev"));
    }
    on2("init", () => {
      if (swiper2.params.navigation.enabled === false) {
        disable();
      } else {
        init();
        update2();
      }
    });
    on2("toEdge fromEdge lock unlock", () => {
      update2();
    });
    on2("destroy", () => {
      destroy();
    });
    on2("enable disable", () => {
      let {
        nextEl,
        prevEl
      } = swiper2.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (swiper2.enabled) {
        update2();
        return;
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper2.params.navigation.lockClass));
    });
    on2("click", (_s, e7) => {
      let {
        nextEl,
        prevEl
      } = swiper2.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const targetEl = e7.target;
      if (swiper2.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
        if (swiper2.pagination && swiper2.params.pagination && swiper2.params.pagination.clickable && (swiper2.pagination.el === targetEl || swiper2.pagination.el.contains(targetEl)))
          return;
        let isHidden;
        if (nextEl.length) {
          isHidden = nextEl[0].classList.contains(swiper2.params.navigation.hiddenClass);
        } else if (prevEl.length) {
          isHidden = prevEl[0].classList.contains(swiper2.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          emit("navigationShow");
        } else {
          emit("navigationHide");
        }
        [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper2.params.navigation.hiddenClass));
      }
    });
    const enable = () => {
      swiper2.el.classList.remove(...swiper2.params.navigation.navigationDisabledClass.split(" "));
      init();
      update2();
    };
    const disable = () => {
      swiper2.el.classList.add(...swiper2.params.navigation.navigationDisabledClass.split(" "));
      destroy();
    };
    Object.assign(swiper2.navigation, {
      enable,
      disable,
      update: update2,
      init,
      destroy
    });
  }

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/pagination.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/classes-to-selector.mjs
  init_live_reload();
  function classesToSelector(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return `.${classes2.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
  }

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/pagination.mjs
  function Pagination(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on: on2,
      emit
    } = _ref;
    const pfx = "swiper-pagination";
    extendParams({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets",
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: (number) => number,
        formatFractionTotal: (number) => number,
        bulletClass: `${pfx}-bullet`,
        bulletActiveClass: `${pfx}-bullet-active`,
        modifierClass: `${pfx}-`,
        currentClass: `${pfx}-current`,
        totalClass: `${pfx}-total`,
        hiddenClass: `${pfx}-hidden`,
        progressbarFillClass: `${pfx}-progressbar-fill`,
        progressbarOppositeClass: `${pfx}-progressbar-opposite`,
        clickableClass: `${pfx}-clickable`,
        lockClass: `${pfx}-lock`,
        horizontalClass: `${pfx}-horizontal`,
        verticalClass: `${pfx}-vertical`,
        paginationDisabledClass: `${pfx}-disabled`
      }
    });
    swiper2.pagination = {
      el: null,
      bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    const makeElementsArray = (el) => (Array.isArray(el) ? el : [el]).filter((e7) => !!e7);
    function isPaginationDisabled() {
      return !swiper2.params.pagination.el || !swiper2.pagination.el || Array.isArray(swiper2.pagination.el) && swiper2.pagination.el.length === 0;
    }
    function setSideBullets(bulletEl, position) {
      const {
        bulletActiveClass
      } = swiper2.params.pagination;
      if (!bulletEl)
        return;
      bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}`);
        bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
        if (bulletEl) {
          bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
        }
      }
    }
    function onBulletClick(e7) {
      const bulletEl = e7.target.closest(classesToSelector(swiper2.params.pagination.bulletClass));
      if (!bulletEl) {
        return;
      }
      e7.preventDefault();
      const index = elementIndex(bulletEl) * swiper2.params.slidesPerGroup;
      if (swiper2.params.loop) {
        if (swiper2.realIndex === index)
          return;
        swiper2.slideToLoop(index);
      } else {
        swiper2.slideTo(index);
      }
    }
    function update2() {
      const rtl = swiper2.rtl;
      const params = swiper2.params.pagination;
      if (isPaginationDisabled())
        return;
      let el = swiper2.pagination.el;
      el = makeElementsArray(el);
      let current;
      let previousIndex;
      const slidesLength = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.virtual.slides.length : swiper2.slides.length;
      const total = swiper2.params.loop ? Math.ceil(slidesLength / swiper2.params.slidesPerGroup) : swiper2.snapGrid.length;
      if (swiper2.params.loop) {
        previousIndex = swiper2.previousRealIndex || 0;
        current = swiper2.params.slidesPerGroup > 1 ? Math.floor(swiper2.realIndex / swiper2.params.slidesPerGroup) : swiper2.realIndex;
      } else if (typeof swiper2.snapIndex !== "undefined") {
        current = swiper2.snapIndex;
        previousIndex = swiper2.previousSnapIndex;
      } else {
        previousIndex = swiper2.previousIndex || 0;
        current = swiper2.activeIndex || 0;
      }
      if (params.type === "bullets" && swiper2.pagination.bullets && swiper2.pagination.bullets.length > 0) {
        const bullets = swiper2.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          bulletSize = elementOuterSize(bullets[0], swiper2.isHorizontal() ? "width" : "height", true);
          el.forEach((subEl) => {
            subEl.style[swiper2.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
          });
          if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
            dynamicBulletIndex += current - (previousIndex || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.forEach((bulletEl) => {
          const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s3) => typeof s3 === "string" && s3.includes(" ") ? s3.split(" ") : s3).flat();
          bulletEl.classList.remove(...classesToRemove);
        });
        if (el.length > 1) {
          bullets.forEach((bullet) => {
            const bulletIndex = elementIndex(bullet);
            if (bulletIndex === current) {
              bullet.classList.add(...params.bulletActiveClass.split(" "));
            } else if (swiper2.isElement) {
              bullet.setAttribute("part", "bullet");
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
              }
              if (bulletIndex === firstIndex) {
                setSideBullets(bullet, "prev");
              }
              if (bulletIndex === lastIndex) {
                setSideBullets(bullet, "next");
              }
            }
          });
        } else {
          const bullet = bullets[current];
          if (bullet) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          }
          if (swiper2.isElement) {
            bullets.forEach((bulletEl, bulletIndex) => {
              bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
            });
          }
          if (params.dynamicBullets) {
            const firstDisplayedBullet = bullets[firstIndex];
            const lastDisplayedBullet = bullets[lastIndex];
            for (let i3 = firstIndex; i3 <= lastIndex; i3 += 1) {
              if (bullets[i3]) {
                bullets[i3].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
              }
            }
            setSideBullets(firstDisplayedBullet, "prev");
            setSideBullets(lastDisplayedBullet, "next");
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
          const offsetProp = rtl ? "right" : "left";
          bullets.forEach((bullet) => {
            bullet.style[swiper2.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
          });
        }
      }
      el.forEach((subEl, subElIndex) => {
        if (params.type === "fraction") {
          subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
            fractionEl.textContent = params.formatFractionCurrent(current + 1);
          });
          subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
            totalEl.textContent = params.formatFractionTotal(total);
          });
        }
        if (params.type === "progressbar") {
          let progressbarDirection;
          if (params.progressbarOpposite) {
            progressbarDirection = swiper2.isHorizontal() ? "vertical" : "horizontal";
          } else {
            progressbarDirection = swiper2.isHorizontal() ? "horizontal" : "vertical";
          }
          const scale = (current + 1) / total;
          let scaleX = 1;
          let scaleY = 1;
          if (progressbarDirection === "horizontal") {
            scaleX = scale;
          } else {
            scaleY = scale;
          }
          subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
            progressEl.style.transitionDuration = `${swiper2.params.speed}ms`;
          });
        }
        if (params.type === "custom" && params.renderCustom) {
          subEl.innerHTML = params.renderCustom(swiper2, current + 1, total);
          if (subElIndex === 0)
            emit("paginationRender", subEl);
        } else {
          if (subElIndex === 0)
            emit("paginationRender", subEl);
          emit("paginationUpdate", subEl);
        }
        if (swiper2.params.watchOverflow && swiper2.enabled) {
          subEl.classList[swiper2.isLocked ? "add" : "remove"](params.lockClass);
        }
      });
    }
    function render2() {
      const params = swiper2.params.pagination;
      if (isPaginationDisabled())
        return;
      const slidesLength = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.virtual.slides.length : swiper2.grid && swiper2.params.grid.rows > 1 ? swiper2.slides.length / Math.ceil(swiper2.params.grid.rows) : swiper2.slides.length;
      let el = swiper2.pagination.el;
      el = makeElementsArray(el);
      let paginationHTML = "";
      if (params.type === "bullets") {
        let numberOfBullets = swiper2.params.loop ? Math.ceil(slidesLength / swiper2.params.slidesPerGroup) : swiper2.snapGrid.length;
        if (swiper2.params.freeMode && swiper2.params.freeMode.enabled && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }
        for (let i3 = 0; i3 < numberOfBullets; i3 += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper2, i3, params.bulletClass);
          } else {
            paginationHTML += `<${params.bulletElement} ${swiper2.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
          }
        }
      }
      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper2, params.currentClass, params.totalClass);
        } else {
          paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
        }
      }
      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper2, params.progressbarFillClass);
        } else {
          paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
        }
      }
      swiper2.pagination.bullets = [];
      el.forEach((subEl) => {
        if (params.type !== "custom") {
          subEl.innerHTML = paginationHTML || "";
        }
        if (params.type === "bullets") {
          swiper2.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
        }
      });
      if (params.type !== "custom") {
        emit("paginationRender", el[0]);
      }
    }
    function init() {
      swiper2.params.pagination = createElementIfNotDefined(swiper2, swiper2.originalParams.pagination, swiper2.params.pagination, {
        el: "swiper-pagination"
      });
      const params = swiper2.params.pagination;
      if (!params.el)
        return;
      let el;
      if (typeof params.el === "string" && swiper2.isElement) {
        el = swiper2.el.querySelector(params.el);
      }
      if (!el && typeof params.el === "string") {
        el = [...document.querySelectorAll(params.el)];
      }
      if (!el) {
        el = params.el;
      }
      if (!el || el.length === 0)
        return;
      if (swiper2.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
        el = [...swiper2.el.querySelectorAll(params.el)];
        if (el.length > 1) {
          el = el.filter((subEl) => {
            if (elementParents(subEl, ".swiper")[0] !== swiper2.el)
              return false;
            return true;
          })[0];
        }
      }
      if (Array.isArray(el) && el.length === 1)
        el = el[0];
      Object.assign(swiper2.pagination, {
        el
      });
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (params.type === "bullets" && params.clickable) {
          subEl.classList.add(...(params.clickableClass || "").split(" "));
        }
        subEl.classList.add(params.modifierClass + params.type);
        subEl.classList.add(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.type === "bullets" && params.dynamicBullets) {
          subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
          dynamicBulletIndex = 0;
          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }
        if (params.type === "progressbar" && params.progressbarOpposite) {
          subEl.classList.add(params.progressbarOppositeClass);
        }
        if (params.clickable) {
          subEl.addEventListener("click", onBulletClick);
        }
        if (!swiper2.enabled) {
          subEl.classList.add(params.lockClass);
        }
      });
    }
    function destroy() {
      const params = swiper2.params.pagination;
      if (isPaginationDisabled())
        return;
      let el = swiper2.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => {
          subEl.classList.remove(params.hiddenClass);
          subEl.classList.remove(params.modifierClass + params.type);
          subEl.classList.remove(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
          if (params.clickable) {
            subEl.classList.remove(...(params.clickableClass || "").split(" "));
            subEl.removeEventListener("click", onBulletClick);
          }
        });
      }
      if (swiper2.pagination.bullets)
        swiper2.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
    }
    on2("changeDirection", () => {
      if (!swiper2.pagination || !swiper2.pagination.el)
        return;
      const params = swiper2.params.pagination;
      let {
        el
      } = swiper2.pagination;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on2("init", () => {
      if (swiper2.params.pagination.enabled === false) {
        disable();
      } else {
        init();
        render2();
        update2();
      }
    });
    on2("activeIndexChange", () => {
      if (typeof swiper2.snapIndex === "undefined") {
        update2();
      }
    });
    on2("snapIndexChange", () => {
      update2();
    });
    on2("snapGridLengthChange", () => {
      render2();
      update2();
    });
    on2("destroy", () => {
      destroy();
    });
    on2("enable disable", () => {
      let {
        el
      } = swiper2.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList[swiper2.enabled ? "remove" : "add"](swiper2.params.pagination.lockClass));
      }
    });
    on2("lock unlock", () => {
      update2();
    });
    on2("click", (_s, e7) => {
      const targetEl = e7.target;
      const el = makeElementsArray(swiper2.pagination.el);
      if (swiper2.params.pagination.el && swiper2.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper2.params.pagination.bulletClass)) {
        if (swiper2.navigation && (swiper2.navigation.nextEl && targetEl === swiper2.navigation.nextEl || swiper2.navigation.prevEl && targetEl === swiper2.navigation.prevEl))
          return;
        const isHidden = el[0].classList.contains(swiper2.params.pagination.hiddenClass);
        if (isHidden === true) {
          emit("paginationShow");
        } else {
          emit("paginationHide");
        }
        el.forEach((subEl) => subEl.classList.toggle(swiper2.params.pagination.hiddenClass));
      }
    });
    const enable = () => {
      swiper2.el.classList.remove(swiper2.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper2.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.remove(swiper2.params.pagination.paginationDisabledClass));
      }
      init();
      render2();
      update2();
    };
    const disable = () => {
      swiper2.el.classList.add(swiper2.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper2.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.add(swiper2.params.pagination.paginationDisabledClass));
      }
      destroy();
    };
    Object.assign(swiper2.pagination, {
      enable,
      disable,
      render: render2,
      update: update2,
      init,
      destroy
    });
  }

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/scrollbar.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/parallax.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/zoom.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/controller.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/a11y.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/history.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/hash-navigation.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/autoplay.mjs
  init_live_reload();
  function Autoplay(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on: on2,
      emit,
      params
    } = _ref;
    swiper2.autoplay = {
      running: false,
      paused: false,
      timeLeft: 0
    };
    extendParams({
      autoplay: {
        enabled: false,
        delay: 3e3,
        waitForTransition: true,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false
      }
    });
    let timeout;
    let raf;
    let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayTimeLeft;
    let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    let wasPaused;
    let isTouched;
    let pausedByTouch;
    let touchStartTimeout;
    let slideChanged;
    let pausedByInteraction;
    let pausedByPointerEnter;
    function onTransitionEnd(e7) {
      if (!swiper2 || swiper2.destroyed || !swiper2.wrapperEl)
        return;
      if (e7.target !== swiper2.wrapperEl)
        return;
      swiper2.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
      if (pausedByPointerEnter) {
        return;
      }
      resume();
    }
    const calcTimeLeft = () => {
      if (swiper2.destroyed || !swiper2.autoplay.running)
        return;
      if (swiper2.autoplay.paused) {
        wasPaused = true;
      } else if (wasPaused) {
        autoplayDelayCurrent = autoplayTimeLeft;
        wasPaused = false;
      }
      const timeLeft = swiper2.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
      swiper2.autoplay.timeLeft = timeLeft;
      emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
      raf = requestAnimationFrame(() => {
        calcTimeLeft();
      });
    };
    const getSlideDelay = () => {
      let activeSlideEl;
      if (swiper2.virtual && swiper2.params.virtual.enabled) {
        activeSlideEl = swiper2.slides.filter((slideEl) => slideEl.classList.contains("swiper-slide-active"))[0];
      } else {
        activeSlideEl = swiper2.slides[swiper2.activeIndex];
      }
      if (!activeSlideEl)
        return void 0;
      const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
      return currentSlideDelay;
    };
    const run = (delayForce) => {
      if (swiper2.destroyed || !swiper2.autoplay.running)
        return;
      cancelAnimationFrame(raf);
      calcTimeLeft();
      let delay = typeof delayForce === "undefined" ? swiper2.params.autoplay.delay : delayForce;
      autoplayDelayTotal = swiper2.params.autoplay.delay;
      autoplayDelayCurrent = swiper2.params.autoplay.delay;
      const currentSlideDelay = getSlideDelay();
      if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
        delay = currentSlideDelay;
        autoplayDelayTotal = currentSlideDelay;
        autoplayDelayCurrent = currentSlideDelay;
      }
      autoplayTimeLeft = delay;
      const speed = swiper2.params.speed;
      const proceed = () => {
        if (!swiper2 || swiper2.destroyed)
          return;
        if (swiper2.params.autoplay.reverseDirection) {
          if (!swiper2.isBeginning || swiper2.params.loop || swiper2.params.rewind) {
            swiper2.slidePrev(speed, true, true);
            emit("autoplay");
          } else if (!swiper2.params.autoplay.stopOnLastSlide) {
            swiper2.slideTo(swiper2.slides.length - 1, speed, true, true);
            emit("autoplay");
          }
        } else {
          if (!swiper2.isEnd || swiper2.params.loop || swiper2.params.rewind) {
            swiper2.slideNext(speed, true, true);
            emit("autoplay");
          } else if (!swiper2.params.autoplay.stopOnLastSlide) {
            swiper2.slideTo(0, speed, true, true);
            emit("autoplay");
          }
        }
        if (swiper2.params.cssMode) {
          autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
          requestAnimationFrame(() => {
            run();
          });
        }
      };
      if (delay > 0) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          proceed();
        }, delay);
      } else {
        requestAnimationFrame(() => {
          proceed();
        });
      }
      return delay;
    };
    const start2 = () => {
      autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
      swiper2.autoplay.running = true;
      run();
      emit("autoplayStart");
    };
    const stop = () => {
      swiper2.autoplay.running = false;
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
      emit("autoplayStop");
    };
    const pause = (internal, reset) => {
      if (swiper2.destroyed || !swiper2.autoplay.running)
        return;
      clearTimeout(timeout);
      if (!internal) {
        pausedByInteraction = true;
      }
      const proceed = () => {
        emit("autoplayPause");
        if (swiper2.params.autoplay.waitForTransition) {
          swiper2.wrapperEl.addEventListener("transitionend", onTransitionEnd);
        } else {
          resume();
        }
      };
      swiper2.autoplay.paused = true;
      if (reset) {
        if (slideChanged) {
          autoplayTimeLeft = swiper2.params.autoplay.delay;
        }
        slideChanged = false;
        proceed();
        return;
      }
      const delay = autoplayTimeLeft || swiper2.params.autoplay.delay;
      autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
      if (swiper2.isEnd && autoplayTimeLeft < 0 && !swiper2.params.loop)
        return;
      if (autoplayTimeLeft < 0)
        autoplayTimeLeft = 0;
      proceed();
    };
    const resume = () => {
      if (swiper2.isEnd && autoplayTimeLeft < 0 && !swiper2.params.loop || swiper2.destroyed || !swiper2.autoplay.running)
        return;
      autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
      if (pausedByInteraction) {
        pausedByInteraction = false;
        run(autoplayTimeLeft);
      } else {
        run();
      }
      swiper2.autoplay.paused = false;
      emit("autoplayResume");
    };
    const onVisibilityChange = () => {
      if (swiper2.destroyed || !swiper2.autoplay.running)
        return;
      const document2 = getDocument();
      if (document2.visibilityState === "hidden") {
        pausedByInteraction = true;
        pause(true);
      }
      if (document2.visibilityState === "visible") {
        resume();
      }
    };
    const onPointerEnter = (e7) => {
      if (e7.pointerType !== "mouse")
        return;
      pausedByInteraction = true;
      pausedByPointerEnter = true;
      if (swiper2.animating || swiper2.autoplay.paused)
        return;
      pause(true);
    };
    const onPointerLeave = (e7) => {
      if (e7.pointerType !== "mouse")
        return;
      pausedByPointerEnter = false;
      if (swiper2.autoplay.paused) {
        resume();
      }
    };
    const attachMouseEvents = () => {
      if (swiper2.params.autoplay.pauseOnMouseEnter) {
        swiper2.el.addEventListener("pointerenter", onPointerEnter);
        swiper2.el.addEventListener("pointerleave", onPointerLeave);
      }
    };
    const detachMouseEvents = () => {
      swiper2.el.removeEventListener("pointerenter", onPointerEnter);
      swiper2.el.removeEventListener("pointerleave", onPointerLeave);
    };
    const attachDocumentEvents = () => {
      const document2 = getDocument();
      document2.addEventListener("visibilitychange", onVisibilityChange);
    };
    const detachDocumentEvents = () => {
      const document2 = getDocument();
      document2.removeEventListener("visibilitychange", onVisibilityChange);
    };
    on2("init", () => {
      if (swiper2.params.autoplay.enabled) {
        attachMouseEvents();
        attachDocumentEvents();
        start2();
      }
    });
    on2("destroy", () => {
      detachMouseEvents();
      detachDocumentEvents();
      if (swiper2.autoplay.running) {
        stop();
      }
    });
    on2("_freeModeStaticRelease", () => {
      if (pausedByTouch || pausedByInteraction) {
        resume();
      }
    });
    on2("_freeModeNoMomentumRelease", () => {
      if (!swiper2.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on2("beforeTransitionStart", (_s, speed, internal) => {
      if (swiper2.destroyed || !swiper2.autoplay.running)
        return;
      if (internal || !swiper2.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on2("sliderFirstMove", () => {
      if (swiper2.destroyed || !swiper2.autoplay.running)
        return;
      if (swiper2.params.autoplay.disableOnInteraction) {
        stop();
        return;
      }
      isTouched = true;
      pausedByTouch = false;
      pausedByInteraction = false;
      touchStartTimeout = setTimeout(() => {
        pausedByInteraction = true;
        pausedByTouch = true;
        pause(true);
      }, 200);
    });
    on2("touchEnd", () => {
      if (swiper2.destroyed || !swiper2.autoplay.running || !isTouched)
        return;
      clearTimeout(touchStartTimeout);
      clearTimeout(timeout);
      if (swiper2.params.autoplay.disableOnInteraction) {
        pausedByTouch = false;
        isTouched = false;
        return;
      }
      if (pausedByTouch && swiper2.params.cssMode)
        resume();
      pausedByTouch = false;
      isTouched = false;
    });
    on2("slideChange", () => {
      if (swiper2.destroyed || !swiper2.autoplay.running)
        return;
      slideChanged = true;
    });
    Object.assign(swiper2.autoplay, {
      start: start2,
      stop,
      pause,
      resume
    });
  }

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/thumbs.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/free-mode.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/grid.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/manipulation.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/effect-fade.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/effect-init.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/effect-target.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/effect-virtual-transition-end.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/effect-cube.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/effect-flip.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/create-shadow.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/effect-coverflow.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/effect-creative.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/effect-cards.mjs
  init_live_reload();

  // node_modules/.pnpm/tippy.js@6.3.7/node_modules/tippy.js/dist/tippy.esm.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/index.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js
  init_live_reload();
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/index.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
  init_live_reload();
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
  init_live_reload();
  function getWindow2(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
  function isElement(node) {
    var OwnElement = getWindow2(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow2(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow2(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style = styleProperties.reduce(function(style2, property) {
          style2[property] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  var applyStyles_default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect,
    requires: ["computeStyles"]
  };

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
  init_live_reload();
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
  init_live_reload();
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
  init_live_reload();
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow2(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y2,
      right: x2 + width,
      bottom: y2 + height,
      left: x2,
      x: x2,
      y: y2
    };
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
  init_live_reload();
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
  init_live_reload();
  function getComputedStyle3(element) {
    return getWindow2(element).getComputedStyle(element);
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
  init_live_reload();
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
  init_live_reload();
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle3(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle3(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle3(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow2(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle3(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle3(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
  init_live_reload();
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
  init_live_reload();
  function within(min2, value, max2) {
    return max(min2, min(value, max2));
  }
  function withinMaxClamp(min2, value, max2) {
    var v2 = within(min2, value, max2);
    return v2 > max2 ? max2 : v2;
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
  init_live_reload();
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
  init_live_reload();
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
  function effect2(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  }
  var arrow_default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect2,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
  init_live_reload();
  function getVariation(placement) {
    return placement.split("-")[1];
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x2 = _ref.x, y2 = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x2 * dpr) / dpr || 0,
      y: round(y2 * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x: x2,
      y: y2
    }) : {
      x: x2,
      y: y2
    };
    x2 = _ref3.x;
    y2 = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow2(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle3(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y2 -= offsetY - popperRect.height;
        y2 *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x2 -= offsetX - popperRect.width;
        x2 *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x: x2,
      y: y2
    }, getWindow2(popper2)) : {
      x: x2,
      y: y2
    };
    x2 = _ref4.x;
    y2 = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  var computeStyles_default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/eventListeners.js
  init_live_reload();
  var passive = {
    passive: true
  };
  function effect3(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow2(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  var eventListeners_default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn2() {
    },
    effect: effect3,
    data: {}
  };

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
  init_live_reload();
  var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash[matched];
    });
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
  init_live_reload();
  var hash2 = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash2[matched];
    });
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
  init_live_reload();
  function getWindowScroll(node) {
    var win = getWindow2(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
  function getViewportRect(element, strategy) {
    var win = getWindow2(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x2 = 0;
    var y2 = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x2 = visualViewport.offsetLeft;
        y2 = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x2 + getWindowScrollBarX(element),
      y: y2
    };
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
  init_live_reload();
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y2 = -winScroll.scrollTop;
    if (getComputedStyle3(body || html).direction === "rtl") {
      x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x: x2,
      y: y2
    };
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
  init_live_reload();
  function isScrollParent(element) {
    var _getComputedStyle3 = getComputedStyle3(element), overflow = _getComputedStyle3.overflow, overflowX = _getComputedStyle3.overflowX, overflowY = _getComputedStyle3.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow2(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
  init_live_reload();
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle3(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
  init_live_reload();
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
        default:
      }
    }
    return offsets;
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
  init_live_reload();
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements2.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements2;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a2, b2) {
      return overflows[a2] - overflows[b2];
    });
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i3 = 0; i3 < placements2.length; i3++) {
      var placement = placements2[i3];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i3) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i3).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i2 = numberOfChecks; _i2 > 0; _i2--) {
        var _ret = _loop(_i2);
        if (_ret === "break")
          break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  var flip_default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
  init_live_reload();
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  var hide_default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
  init_live_reload();
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x2;
      state.modifiersData.popperOffsets.y += y2;
    }
    state.modifiersData[name] = data;
  }
  var offset_default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
  init_live_reload();
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  var popperOffsets_default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
  init_live_reload();
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min2 = offset2 + overflow[mainSide];
      var max2 = offset2 - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset2 + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
  var preventOverflow_default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/createPopper.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
  init_live_reload();

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
  init_live_reload();
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
  function getNodeScroll(node) {
    if (node === getWindow2(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
  init_live_reload();
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
  init_live_reload();
  function debounce(fn3) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn3());
          });
        });
      }
      return pending;
    };
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergeByName.js
  init_live_reload();
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/createPopper.js
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions2 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper2(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions2;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions2),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions2, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m2) {
            return m2.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn3 === "function") {
              state = fn3({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect5 = _ref.effect;
          if (typeof effect5 === "function") {
            var cleanupFn = effect5({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn3) {
          return fn3();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }

  // node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/popper.js
  init_live_reload();
  var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
  var createPopper = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });

  // node_modules/.pnpm/tippy.js@6.3.7/node_modules/tippy.js/dist/tippy.esm.js
  var BOX_CLASS = "tippy-box";
  var CONTENT_CLASS = "tippy-content";
  var BACKDROP_CLASS = "tippy-backdrop";
  var ARROW_CLASS = "tippy-arrow";
  var SVG_ARROW_CLASS = "tippy-svg-arrow";
  var TOUCH_OPTIONS = {
    passive: true,
    capture: true
  };
  var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
    return document.body;
  };
  function hasOwnProperty(obj, key) {
    return {}.hasOwnProperty.call(obj, key);
  }
  function getValueAtIndexOrReturn(value, index, defaultValue) {
    if (Array.isArray(value)) {
      var v2 = value[index];
      return v2 == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v2;
    }
    return value;
  }
  function isType(value, type) {
    var str = {}.toString.call(value);
    return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
  }
  function invokeWithArgsOrReturn(value, args) {
    return typeof value === "function" ? value.apply(void 0, args) : value;
  }
  function debounce2(fn3, ms) {
    if (ms === 0) {
      return fn3;
    }
    var timeout;
    return function(arg) {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        fn3(arg);
      }, ms);
    };
  }
  function removeProperties(obj, keys) {
    var clone = Object.assign({}, obj);
    keys.forEach(function(key) {
      delete clone[key];
    });
    return clone;
  }
  function splitBySpaces(value) {
    return value.split(/\s+/).filter(Boolean);
  }
  function normalizeToArray(value) {
    return [].concat(value);
  }
  function pushIfUnique(arr, value) {
    if (arr.indexOf(value) === -1) {
      arr.push(value);
    }
  }
  function unique(arr) {
    return arr.filter(function(item, index) {
      return arr.indexOf(item) === index;
    });
  }
  function getBasePlacement2(placement) {
    return placement.split("-")[0];
  }
  function arrayFrom(value) {
    return [].slice.call(value);
  }
  function removeUndefinedProps(obj) {
    return Object.keys(obj).reduce(function(acc, key) {
      if (obj[key] !== void 0) {
        acc[key] = obj[key];
      }
      return acc;
    }, {});
  }
  function div() {
    return document.createElement("div");
  }
  function isElement2(value) {
    return ["Element", "Fragment"].some(function(type) {
      return isType(value, type);
    });
  }
  function isNodeList(value) {
    return isType(value, "NodeList");
  }
  function isMouseEvent(value) {
    return isType(value, "MouseEvent");
  }
  function isReferenceElement(value) {
    return !!(value && value._tippy && value._tippy.reference === value);
  }
  function getArrayOfElements(value) {
    if (isElement2(value)) {
      return [value];
    }
    if (isNodeList(value)) {
      return arrayFrom(value);
    }
    if (Array.isArray(value)) {
      return value;
    }
    return arrayFrom(document.querySelectorAll(value));
  }
  function setTransitionDuration(els, value) {
    els.forEach(function(el) {
      if (el) {
        el.style.transitionDuration = value + "ms";
      }
    });
  }
  function setVisibilityState(els, state) {
    els.forEach(function(el) {
      if (el) {
        el.setAttribute("data-state", state);
      }
    });
  }
  function getOwnerDocument(elementOrElements) {
    var _element$ownerDocumen;
    var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
    return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
  }
  function isCursorOutsideInteractiveBorder(popperTreeData, event2) {
    var clientX = event2.clientX, clientY = event2.clientY;
    return popperTreeData.every(function(_ref) {
      var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
      var interactiveBorder = props.interactiveBorder;
      var basePlacement = getBasePlacement2(popperState.placement);
      var offsetData = popperState.modifiersData.offset;
      if (!offsetData) {
        return true;
      }
      var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
      var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
      var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
      var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
      var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
      var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
      var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
      var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
      return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
    });
  }
  function updateTransitionEndListener(box, action, listener) {
    var method = action + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function(event2) {
      box[method](event2, listener);
    });
  }
  function actualContains(parent, child) {
    var target = child;
    while (target) {
      var _target$getRootNode;
      if (parent.contains(target)) {
        return true;
      }
      target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
    }
    return false;
  }
  var currentInput = {
    isTouch: false
  };
  var lastMouseMoveTime = 0;
  function onDocumentTouchStart2() {
    if (currentInput.isTouch) {
      return;
    }
    currentInput.isTouch = true;
    if (window.performance) {
      document.addEventListener("mousemove", onDocumentMouseMove);
    }
  }
  function onDocumentMouseMove() {
    var now2 = performance.now();
    if (now2 - lastMouseMoveTime < 20) {
      currentInput.isTouch = false;
      document.removeEventListener("mousemove", onDocumentMouseMove);
    }
    lastMouseMoveTime = now2;
  }
  function onWindowBlur() {
    var activeElement = document.activeElement;
    if (isReferenceElement(activeElement)) {
      var instance = activeElement._tippy;
      if (activeElement.blur && !instance.state.isVisible) {
        activeElement.blur();
      }
    }
  }
  function bindGlobalEventListeners() {
    document.addEventListener("touchstart", onDocumentTouchStart2, TOUCH_OPTIONS);
    window.addEventListener("blur", onWindowBlur);
  }
  var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
  var isIE11 = isBrowser ? (
    // @ts-ignore
    !!window.msCrypto
  ) : false;
  function createMemoryLeakWarning(method) {
    var txt = method === "destroy" ? "n already-" : " ";
    return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
  }
  function clean(value) {
    var spacesAndTabs = /[ \t]{2,}/g;
    var lineStartWithSpaces = /^[ \t]*/gm;
    return value.replace(spacesAndTabs, " ").replace(lineStartWithSpaces, "").trim();
  }
  function getDevMessage(message) {
    return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\u{1F477}\u200D This is a development-only message. It will be removed in production.\n  ");
  }
  function getFormattedMessage(message) {
    return [
      getDevMessage(message),
      // title
      "color: #00C584; font-size: 1.3em; font-weight: bold;",
      // message
      "line-height: 1.5",
      // footer
      "color: #a6a095;"
    ];
  }
  var visitedMessages;
  if (true) {
    resetVisitedMessages();
  }
  function resetVisitedMessages() {
    visitedMessages = /* @__PURE__ */ new Set();
  }
  function warnWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
      var _console;
      visitedMessages.add(message);
      (_console = console).warn.apply(_console, getFormattedMessage(message));
    }
  }
  function errorWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
      var _console2;
      visitedMessages.add(message);
      (_console2 = console).error.apply(_console2, getFormattedMessage(message));
    }
  }
  function validateTargets(targets) {
    var didPassFalsyValue = !targets;
    var didPassPlainObject = Object.prototype.toString.call(targets) === "[object Object]" && !targets.addEventListener;
    errorWhen(didPassFalsyValue, ["tippy() was passed", "`" + String(targets) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" "));
    errorWhen(didPassPlainObject, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
  }
  var pluginProps = {
    animateFill: false,
    followCursor: false,
    inlinePositioning: false,
    sticky: false
  };
  var renderProps = {
    allowHTML: false,
    animation: "fade",
    arrow: true,
    content: "",
    inertia: false,
    maxWidth: 350,
    role: "tooltip",
    theme: "",
    zIndex: 9999
  };
  var defaultProps = Object.assign({
    appendTo: TIPPY_DEFAULT_APPEND_TO,
    aria: {
      content: "auto",
      expanded: "auto"
    },
    delay: 0,
    duration: [300, 250],
    getReferenceClientRect: null,
    hideOnClick: true,
    ignoreAttributes: false,
    interactive: false,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: "",
    offset: [0, 10],
    onAfterUpdate: function onAfterUpdate() {
    },
    onBeforeUpdate: function onBeforeUpdate() {
    },
    onCreate: function onCreate() {
    },
    onDestroy: function onDestroy() {
    },
    onHidden: function onHidden() {
    },
    onHide: function onHide() {
    },
    onMount: function onMount() {
    },
    onShow: function onShow() {
    },
    onShown: function onShown() {
    },
    onTrigger: function onTrigger() {
    },
    onUntrigger: function onUntrigger() {
    },
    onClickOutside: function onClickOutside() {
    },
    placement: "top",
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: false,
    touch: true,
    trigger: "mouseenter focus",
    triggerTarget: null
  }, pluginProps, renderProps);
  var defaultKeys = Object.keys(defaultProps);
  var setDefaultProps = function setDefaultProps2(partialProps) {
    if (true) {
      validateProps(partialProps, []);
    }
    var keys = Object.keys(partialProps);
    keys.forEach(function(key) {
      defaultProps[key] = partialProps[key];
    });
  };
  function getExtendedPassedProps(passedProps) {
    var plugins = passedProps.plugins || [];
    var pluginProps2 = plugins.reduce(function(acc, plugin) {
      var name = plugin.name, defaultValue = plugin.defaultValue;
      if (name) {
        var _name;
        acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
      }
      return acc;
    }, {});
    return Object.assign({}, passedProps, pluginProps2);
  }
  function getDataAttributeProps(reference2, plugins) {
    var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
      plugins
    }))) : defaultKeys;
    var props = propKeys.reduce(function(acc, key) {
      var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
      if (!valueAsString) {
        return acc;
      }
      if (key === "content") {
        acc[key] = valueAsString;
      } else {
        try {
          acc[key] = JSON.parse(valueAsString);
        } catch (e7) {
          acc[key] = valueAsString;
        }
      }
      return acc;
    }, {});
    return props;
  }
  function evaluateProps(reference2, props) {
    var out = Object.assign({}, props, {
      content: invokeWithArgsOrReturn(props.content, [reference2])
    }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
    out.aria = Object.assign({}, defaultProps.aria, out.aria);
    out.aria = {
      expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
      content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
    };
    return out;
  }
  function validateProps(partialProps, plugins) {
    if (partialProps === void 0) {
      partialProps = {};
    }
    if (plugins === void 0) {
      plugins = [];
    }
    var keys = Object.keys(partialProps);
    keys.forEach(function(prop) {
      var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
      var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop);
      if (didPassUnknownProp) {
        didPassUnknownProp = plugins.filter(function(plugin) {
          return plugin.name === prop;
        }).length === 0;
      }
      warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", "\n\n", "All props: https://atomiks.github.io/tippyjs/v6/all-props/\n", "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
    });
  }
  var innerHTML = function innerHTML2() {
    return "innerHTML";
  };
  function dangerouslySetInnerHTML(element, html) {
    element[innerHTML()] = html;
  }
  function createArrowElement(value) {
    var arrow2 = div();
    if (value === true) {
      arrow2.className = ARROW_CLASS;
    } else {
      arrow2.className = SVG_ARROW_CLASS;
      if (isElement2(value)) {
        arrow2.appendChild(value);
      } else {
        dangerouslySetInnerHTML(arrow2, value);
      }
    }
    return arrow2;
  }
  function setContent(content, props) {
    if (isElement2(props.content)) {
      dangerouslySetInnerHTML(content, "");
      content.appendChild(props.content);
    } else if (typeof props.content !== "function") {
      if (props.allowHTML) {
        dangerouslySetInnerHTML(content, props.content);
      } else {
        content.textContent = props.content;
      }
    }
  }
  function getChildren(popper2) {
    var box = popper2.firstElementChild;
    var boxChildren = arrayFrom(box.children);
    return {
      box,
      content: boxChildren.find(function(node) {
        return node.classList.contains(CONTENT_CLASS);
      }),
      arrow: boxChildren.find(function(node) {
        return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
      }),
      backdrop: boxChildren.find(function(node) {
        return node.classList.contains(BACKDROP_CLASS);
      })
    };
  }
  function render(instance) {
    var popper2 = div();
    var box = div();
    box.className = BOX_CLASS;
    box.setAttribute("data-state", "hidden");
    box.setAttribute("tabindex", "-1");
    var content = div();
    content.className = CONTENT_CLASS;
    content.setAttribute("data-state", "hidden");
    setContent(content, instance.props);
    popper2.appendChild(box);
    box.appendChild(content);
    onUpdate(instance.props, instance.props);
    function onUpdate(prevProps, nextProps) {
      var _getChildren = getChildren(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
      if (nextProps.theme) {
        box2.setAttribute("data-theme", nextProps.theme);
      } else {
        box2.removeAttribute("data-theme");
      }
      if (typeof nextProps.animation === "string") {
        box2.setAttribute("data-animation", nextProps.animation);
      } else {
        box2.removeAttribute("data-animation");
      }
      if (nextProps.inertia) {
        box2.setAttribute("data-inertia", "");
      } else {
        box2.removeAttribute("data-inertia");
      }
      box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
      if (nextProps.role) {
        box2.setAttribute("role", nextProps.role);
      } else {
        box2.removeAttribute("role");
      }
      if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
        setContent(content2, instance.props);
      }
      if (nextProps.arrow) {
        if (!arrow2) {
          box2.appendChild(createArrowElement(nextProps.arrow));
        } else if (prevProps.arrow !== nextProps.arrow) {
          box2.removeChild(arrow2);
          box2.appendChild(createArrowElement(nextProps.arrow));
        }
      } else if (arrow2) {
        box2.removeChild(arrow2);
      }
    }
    return {
      popper: popper2,
      onUpdate
    };
  }
  render.$$tippy = true;
  var idCounter = 1;
  var mouseMoveListeners = [];
  var mountedInstances = [];
  function createTippy(reference2, passedProps) {
    var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
    var showTimeout;
    var hideTimeout;
    var scheduleHideAnimationFrame;
    var isVisibleFromClick = false;
    var didHideDueToDocumentMouseDown = false;
    var didTouchMove = false;
    var ignoreOnFirstUpdate = false;
    var lastTriggerEvent;
    var currentTransitionEndListener;
    var onFirstUpdate;
    var listeners = [];
    var debouncedOnMouseMove = debounce2(onMouseMove, props.interactiveDebounce);
    var currentTarget;
    var id = idCounter++;
    var popperInstance = null;
    var plugins = unique(props.plugins);
    var state = {
      // Is the instance currently enabled?
      isEnabled: true,
      // Is the tippy currently showing and not transitioning out?
      isVisible: false,
      // Has the instance been destroyed?
      isDestroyed: false,
      // Is the tippy currently mounted to the DOM?
      isMounted: false,
      // Has the tippy finished transitioning in?
      isShown: false
    };
    var instance = {
      // properties
      id,
      reference: reference2,
      popper: div(),
      popperInstance,
      props,
      state,
      plugins,
      // methods
      clearDelayTimeouts,
      setProps,
      setContent: setContent2,
      show,
      hide: hide2,
      hideWithInteractivity,
      enable,
      disable,
      unmount,
      destroy
    };
    if (!props.render) {
      if (true) {
        errorWhen(true, "render() function has not been supplied.");
      }
      return instance;
    }
    var _props$render = props.render(instance), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
    popper2.setAttribute("data-tippy-root", "");
    popper2.id = "tippy-" + instance.id;
    instance.popper = popper2;
    reference2._tippy = instance;
    popper2._tippy = instance;
    var pluginsHooks = plugins.map(function(plugin) {
      return plugin.fn(instance);
    });
    var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
    addListeners();
    handleAriaExpandedAttribute();
    handleStyles();
    invokeHook("onCreate", [instance]);
    if (props.showOnCreate) {
      scheduleShow();
    }
    popper2.addEventListener("mouseenter", function() {
      if (instance.props.interactive && instance.state.isVisible) {
        instance.clearDelayTimeouts();
      }
    });
    popper2.addEventListener("mouseleave", function() {
      if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) {
        getDocument2().addEventListener("mousemove", debouncedOnMouseMove);
      }
    });
    return instance;
    function getNormalizedTouchSettings() {
      var touch = instance.props.touch;
      return Array.isArray(touch) ? touch : [touch, 0];
    }
    function getIsCustomTouchBehavior() {
      return getNormalizedTouchSettings()[0] === "hold";
    }
    function getIsDefaultRenderFn() {
      var _instance$props$rende;
      return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
    }
    function getCurrentTarget() {
      return currentTarget || reference2;
    }
    function getDocument2() {
      var parent = getCurrentTarget().parentNode;
      return parent ? getOwnerDocument(parent) : document;
    }
    function getDefaultTemplateChildren() {
      return getChildren(popper2);
    }
    function getDelay(isShow) {
      if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
        return 0;
      }
      return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
    }
    function handleStyles(fromHide) {
      if (fromHide === void 0) {
        fromHide = false;
      }
      popper2.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
      popper2.style.zIndex = "" + instance.props.zIndex;
    }
    function invokeHook(hook, args, shouldInvokePropsHook) {
      if (shouldInvokePropsHook === void 0) {
        shouldInvokePropsHook = true;
      }
      pluginsHooks.forEach(function(pluginHooks) {
        if (pluginHooks[hook]) {
          pluginHooks[hook].apply(pluginHooks, args);
        }
      });
      if (shouldInvokePropsHook) {
        var _instance$props;
        (_instance$props = instance.props)[hook].apply(_instance$props, args);
      }
    }
    function handleAriaContentAttribute() {
      var aria = instance.props.aria;
      if (!aria.content) {
        return;
      }
      var attr = "aria-" + aria.content;
      var id2 = popper2.id;
      var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
      nodes.forEach(function(node) {
        var currentValue = node.getAttribute(attr);
        if (instance.state.isVisible) {
          node.setAttribute(attr, currentValue ? currentValue + " " + id2 : id2);
        } else {
          var nextValue = currentValue && currentValue.replace(id2, "").trim();
          if (nextValue) {
            node.setAttribute(attr, nextValue);
          } else {
            node.removeAttribute(attr);
          }
        }
      });
    }
    function handleAriaExpandedAttribute() {
      if (hasAriaExpanded || !instance.props.aria.expanded) {
        return;
      }
      var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
      nodes.forEach(function(node) {
        if (instance.props.interactive) {
          node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false");
        } else {
          node.removeAttribute("aria-expanded");
        }
      });
    }
    function cleanupInteractiveMouseListeners() {
      getDocument2().removeEventListener("mousemove", debouncedOnMouseMove);
      mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
        return listener !== debouncedOnMouseMove;
      });
    }
    function onDocumentPress(event2) {
      if (currentInput.isTouch) {
        if (didTouchMove || event2.type === "mousedown") {
          return;
        }
      }
      var actualTarget = event2.composedPath && event2.composedPath()[0] || event2.target;
      if (instance.props.interactive && actualContains(popper2, actualTarget)) {
        return;
      }
      if (normalizeToArray(instance.props.triggerTarget || reference2).some(function(el) {
        return actualContains(el, actualTarget);
      })) {
        if (currentInput.isTouch) {
          return;
        }
        if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) {
          return;
        }
      } else {
        invokeHook("onClickOutside", [instance, event2]);
      }
      if (instance.props.hideOnClick === true) {
        instance.clearDelayTimeouts();
        instance.hide();
        didHideDueToDocumentMouseDown = true;
        setTimeout(function() {
          didHideDueToDocumentMouseDown = false;
        });
        if (!instance.state.isMounted) {
          removeDocumentPress();
        }
      }
    }
    function onTouchMove2() {
      didTouchMove = true;
    }
    function onTouchStart2() {
      didTouchMove = false;
    }
    function addDocumentPress() {
      var doc = getDocument2();
      doc.addEventListener("mousedown", onDocumentPress, true);
      doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
      doc.addEventListener("touchstart", onTouchStart2, TOUCH_OPTIONS);
      doc.addEventListener("touchmove", onTouchMove2, TOUCH_OPTIONS);
    }
    function removeDocumentPress() {
      var doc = getDocument2();
      doc.removeEventListener("mousedown", onDocumentPress, true);
      doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
      doc.removeEventListener("touchstart", onTouchStart2, TOUCH_OPTIONS);
      doc.removeEventListener("touchmove", onTouchMove2, TOUCH_OPTIONS);
    }
    function onTransitionedOut(duration, callback) {
      onTransitionEnd(duration, function() {
        if (!instance.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
          callback();
        }
      });
    }
    function onTransitionedIn(duration, callback) {
      onTransitionEnd(duration, callback);
    }
    function onTransitionEnd(duration, callback) {
      var box = getDefaultTemplateChildren().box;
      function listener(event2) {
        if (event2.target === box) {
          updateTransitionEndListener(box, "remove", listener);
          callback();
        }
      }
      if (duration === 0) {
        return callback();
      }
      updateTransitionEndListener(box, "remove", currentTransitionEndListener);
      updateTransitionEndListener(box, "add", listener);
      currentTransitionEndListener = listener;
    }
    function on2(eventType, handler, options) {
      if (options === void 0) {
        options = false;
      }
      var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
      nodes.forEach(function(node) {
        node.addEventListener(eventType, handler, options);
        listeners.push({
          node,
          eventType,
          handler,
          options
        });
      });
    }
    function addListeners() {
      if (getIsCustomTouchBehavior()) {
        on2("touchstart", onTrigger2, {
          passive: true
        });
        on2("touchend", onMouseLeave, {
          passive: true
        });
      }
      splitBySpaces(instance.props.trigger).forEach(function(eventType) {
        if (eventType === "manual") {
          return;
        }
        on2(eventType, onTrigger2);
        switch (eventType) {
          case "mouseenter":
            on2("mouseleave", onMouseLeave);
            break;
          case "focus":
            on2(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
            break;
          case "focusin":
            on2("focusout", onBlurOrFocusOut);
            break;
        }
      });
    }
    function removeListeners() {
      listeners.forEach(function(_ref) {
        var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
        node.removeEventListener(eventType, handler, options);
      });
      listeners = [];
    }
    function onTrigger2(event2) {
      var _lastTriggerEvent;
      var shouldScheduleClickHide = false;
      if (!instance.state.isEnabled || isEventListenerStopped(event2) || didHideDueToDocumentMouseDown) {
        return;
      }
      var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
      lastTriggerEvent = event2;
      currentTarget = event2.currentTarget;
      handleAriaExpandedAttribute();
      if (!instance.state.isVisible && isMouseEvent(event2)) {
        mouseMoveListeners.forEach(function(listener) {
          return listener(event2);
        });
      }
      if (event2.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
        shouldScheduleClickHide = true;
      } else {
        scheduleShow(event2);
      }
      if (event2.type === "click") {
        isVisibleFromClick = !shouldScheduleClickHide;
      }
      if (shouldScheduleClickHide && !wasFocused) {
        scheduleHide(event2);
      }
    }
    function onMouseMove(event2) {
      var target = event2.target;
      var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
      if (event2.type === "mousemove" && isCursorOverReferenceOrPopper) {
        return;
      }
      var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
        var _instance$popperInsta;
        var instance2 = popper3._tippy;
        var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
        if (state2) {
          return {
            popperRect: popper3.getBoundingClientRect(),
            popperState: state2,
            props
          };
        }
        return null;
      }).filter(Boolean);
      if (isCursorOutsideInteractiveBorder(popperTreeData, event2)) {
        cleanupInteractiveMouseListeners();
        scheduleHide(event2);
      }
    }
    function onMouseLeave(event2) {
      var shouldBail = isEventListenerStopped(event2) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
      if (shouldBail) {
        return;
      }
      if (instance.props.interactive) {
        instance.hideWithInteractivity(event2);
        return;
      }
      scheduleHide(event2);
    }
    function onBlurOrFocusOut(event2) {
      if (instance.props.trigger.indexOf("focusin") < 0 && event2.target !== getCurrentTarget()) {
        return;
      }
      if (instance.props.interactive && event2.relatedTarget && popper2.contains(event2.relatedTarget)) {
        return;
      }
      scheduleHide(event2);
    }
    function isEventListenerStopped(event2) {
      return currentInput.isTouch ? getIsCustomTouchBehavior() !== event2.type.indexOf("touch") >= 0 : false;
    }
    function createPopperInstance() {
      destroyPopperInstance();
      var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
      var arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
      var computedReference = getReferenceClientRect ? {
        getBoundingClientRect: getReferenceClientRect,
        contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
      } : reference2;
      var tippyModifier = {
        name: "$$tippy",
        enabled: true,
        phase: "beforeWrite",
        requires: ["computeStyles"],
        fn: function fn3(_ref2) {
          var state2 = _ref2.state;
          if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
            ["placement", "reference-hidden", "escaped"].forEach(function(attr) {
              if (attr === "placement") {
                box.setAttribute("data-placement", state2.placement);
              } else {
                if (state2.attributes.popper["data-popper-" + attr]) {
                  box.setAttribute("data-" + attr, "");
                } else {
                  box.removeAttribute("data-" + attr);
                }
              }
            });
            state2.attributes.popper = {};
          }
        }
      };
      var modifiers = [{
        name: "offset",
        options: {
          offset: offset2
        }
      }, {
        name: "preventOverflow",
        options: {
          padding: {
            top: 2,
            bottom: 2,
            left: 5,
            right: 5
          }
        }
      }, {
        name: "flip",
        options: {
          padding: 5
        }
      }, {
        name: "computeStyles",
        options: {
          adaptive: !moveTransition
        }
      }, tippyModifier];
      if (getIsDefaultRenderFn() && arrow2) {
        modifiers.push({
          name: "arrow",
          options: {
            element: arrow2,
            padding: 3
          }
        });
      }
      modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
      instance.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
        placement,
        onFirstUpdate,
        modifiers
      }));
    }
    function destroyPopperInstance() {
      if (instance.popperInstance) {
        instance.popperInstance.destroy();
        instance.popperInstance = null;
      }
    }
    function mount() {
      var appendTo = instance.props.appendTo;
      var parentNode;
      var node = getCurrentTarget();
      if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
        parentNode = node.parentNode;
      } else {
        parentNode = invokeWithArgsOrReturn(appendTo, [node]);
      }
      if (!parentNode.contains(popper2)) {
        parentNode.appendChild(popper2);
      }
      instance.state.isMounted = true;
      createPopperInstance();
      if (true) {
        warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper2, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", "\n\n", "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", "\n\n", "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", "\n\n", "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
      }
    }
    function getNestedPopperTree() {
      return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
    }
    function scheduleShow(event2) {
      instance.clearDelayTimeouts();
      if (event2) {
        invokeHook("onTrigger", [instance, event2]);
      }
      addDocumentPress();
      var delay = getDelay(true);
      var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
      if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
        delay = touchDelay;
      }
      if (delay) {
        showTimeout = setTimeout(function() {
          instance.show();
        }, delay);
      } else {
        instance.show();
      }
    }
    function scheduleHide(event2) {
      instance.clearDelayTimeouts();
      invokeHook("onUntrigger", [instance, event2]);
      if (!instance.state.isVisible) {
        removeDocumentPress();
        return;
      }
      if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event2.type) >= 0 && isVisibleFromClick) {
        return;
      }
      var delay = getDelay(false);
      if (delay) {
        hideTimeout = setTimeout(function() {
          if (instance.state.isVisible) {
            instance.hide();
          }
        }, delay);
      } else {
        scheduleHideAnimationFrame = requestAnimationFrame(function() {
          instance.hide();
        });
      }
    }
    function enable() {
      instance.state.isEnabled = true;
    }
    function disable() {
      instance.hide();
      instance.state.isEnabled = false;
    }
    function clearDelayTimeouts() {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      cancelAnimationFrame(scheduleHideAnimationFrame);
    }
    function setProps(partialProps) {
      if (true) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("setProps"));
      }
      if (instance.state.isDestroyed) {
        return;
      }
      invokeHook("onBeforeUpdate", [instance, partialProps]);
      removeListeners();
      var prevProps = instance.props;
      var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
        ignoreAttributes: true
      }));
      instance.props = nextProps;
      addListeners();
      if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
        cleanupInteractiveMouseListeners();
        debouncedOnMouseMove = debounce2(onMouseMove, nextProps.interactiveDebounce);
      }
      if (prevProps.triggerTarget && !nextProps.triggerTarget) {
        normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
          node.removeAttribute("aria-expanded");
        });
      } else if (nextProps.triggerTarget) {
        reference2.removeAttribute("aria-expanded");
      }
      handleAriaExpandedAttribute();
      handleStyles();
      if (onUpdate) {
        onUpdate(prevProps, nextProps);
      }
      if (instance.popperInstance) {
        createPopperInstance();
        getNestedPopperTree().forEach(function(nestedPopper) {
          requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
        });
      }
      invokeHook("onAfterUpdate", [instance, partialProps]);
    }
    function setContent2(content) {
      instance.setProps({
        content
      });
    }
    function show() {
      if (true) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("show"));
      }
      var isAlreadyVisible = instance.state.isVisible;
      var isDestroyed = instance.state.isDestroyed;
      var isDisabled = !instance.state.isEnabled;
      var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
      var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
      if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
        return;
      }
      if (getCurrentTarget().hasAttribute("disabled")) {
        return;
      }
      invokeHook("onShow", [instance], false);
      if (instance.props.onShow(instance) === false) {
        return;
      }
      instance.state.isVisible = true;
      if (getIsDefaultRenderFn()) {
        popper2.style.visibility = "visible";
      }
      handleStyles();
      addDocumentPress();
      if (!instance.state.isMounted) {
        popper2.style.transition = "none";
      }
      if (getIsDefaultRenderFn()) {
        var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
        setTransitionDuration([box, content], 0);
      }
      onFirstUpdate = function onFirstUpdate2() {
        var _instance$popperInsta2;
        if (!instance.state.isVisible || ignoreOnFirstUpdate) {
          return;
        }
        ignoreOnFirstUpdate = true;
        void popper2.offsetHeight;
        popper2.style.transition = instance.props.moveTransition;
        if (getIsDefaultRenderFn() && instance.props.animation) {
          var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
          setTransitionDuration([_box, _content], duration);
          setVisibilityState([_box, _content], "visible");
        }
        handleAriaContentAttribute();
        handleAriaExpandedAttribute();
        pushIfUnique(mountedInstances, instance);
        (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
        invokeHook("onMount", [instance]);
        if (instance.props.animation && getIsDefaultRenderFn()) {
          onTransitionedIn(duration, function() {
            instance.state.isShown = true;
            invokeHook("onShown", [instance]);
          });
        }
      };
      mount();
    }
    function hide2() {
      if (true) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hide"));
      }
      var isAlreadyHidden = !instance.state.isVisible;
      var isDestroyed = instance.state.isDestroyed;
      var isDisabled = !instance.state.isEnabled;
      var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
      if (isAlreadyHidden || isDestroyed || isDisabled) {
        return;
      }
      invokeHook("onHide", [instance], false);
      if (instance.props.onHide(instance) === false) {
        return;
      }
      instance.state.isVisible = false;
      instance.state.isShown = false;
      ignoreOnFirstUpdate = false;
      isVisibleFromClick = false;
      if (getIsDefaultRenderFn()) {
        popper2.style.visibility = "hidden";
      }
      cleanupInteractiveMouseListeners();
      removeDocumentPress();
      handleStyles(true);
      if (getIsDefaultRenderFn()) {
        var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
        if (instance.props.animation) {
          setTransitionDuration([box, content], duration);
          setVisibilityState([box, content], "hidden");
        }
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      if (instance.props.animation) {
        if (getIsDefaultRenderFn()) {
          onTransitionedOut(duration, instance.unmount);
        }
      } else {
        instance.unmount();
      }
    }
    function hideWithInteractivity(event2) {
      if (true) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hideWithInteractivity"));
      }
      getDocument2().addEventListener("mousemove", debouncedOnMouseMove);
      pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
      debouncedOnMouseMove(event2);
    }
    function unmount() {
      if (true) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("unmount"));
      }
      if (instance.state.isVisible) {
        instance.hide();
      }
      if (!instance.state.isMounted) {
        return;
      }
      destroyPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        nestedPopper._tippy.unmount();
      });
      if (popper2.parentNode) {
        popper2.parentNode.removeChild(popper2);
      }
      mountedInstances = mountedInstances.filter(function(i3) {
        return i3 !== instance;
      });
      instance.state.isMounted = false;
      invokeHook("onHidden", [instance]);
    }
    function destroy() {
      if (true) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("destroy"));
      }
      if (instance.state.isDestroyed) {
        return;
      }
      instance.clearDelayTimeouts();
      instance.unmount();
      removeListeners();
      delete reference2._tippy;
      instance.state.isDestroyed = true;
      invokeHook("onDestroy", [instance]);
    }
  }
  function tippy(targets, optionalProps) {
    if (optionalProps === void 0) {
      optionalProps = {};
    }
    var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
    if (true) {
      validateTargets(targets);
      validateProps(optionalProps, plugins);
    }
    bindGlobalEventListeners();
    var passedProps = Object.assign({}, optionalProps, {
      plugins
    });
    var elements = getArrayOfElements(targets);
    if (true) {
      var isSingleContentElement = isElement2(passedProps.content);
      var isMoreThanOneReferenceElement = elements.length > 1;
      warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", "\n\n", "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", "\n\n", "1) content: element.innerHTML\n", "2) content: () => element.cloneNode(true)"].join(" "));
    }
    var instances = elements.reduce(function(acc, reference2) {
      var instance = reference2 && createTippy(reference2, passedProps);
      if (instance) {
        acc.push(instance);
      }
      return acc;
    }, []);
    return isElement2(targets) ? instances[0] : instances;
  }
  tippy.defaultProps = defaultProps;
  tippy.setDefaultProps = setDefaultProps;
  tippy.currentInput = currentInput;
  var applyStylesModifier = Object.assign({}, applyStyles_default, {
    effect: function effect4(_ref) {
      var state = _ref.state;
      var initialStyles = {
        popper: {
          position: state.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      Object.assign(state.elements.popper.style, initialStyles.popper);
      state.styles = initialStyles;
      if (state.elements.arrow) {
        Object.assign(state.elements.arrow.style, initialStyles.arrow);
      }
    }
  });
  tippy.setDefaultProps({
    render
  });
  var tippy_esm_default = tippy;

  // src/utils/accordeon-autoclose.ts
  init_live_reload();
  function setUpAccordions() {
    const accordions = document.querySelectorAll('[data-click="accordion"]');
    accordions.forEach(function(accordion) {
      accordion.addEventListener("click", function() {
        if (!this.classList.contains("open")) {
          document.querySelectorAll('[data-click="accordion"].open').forEach(function(openAccordion) {
            openAccordion.click();
            openAccordion.classList.remove("open");
          });
          this.classList.add("open");
        } else {
          this.classList.remove("open");
        }
      });
    });
  }

  // src/page/growth-outbound/index.js
  import_gsap.gsap.registerPlugin(ScrollTrigger2);
  if (!window.location.host.includes("127.0.0.1") && !window.location.host.includes("localhost") && !window.location.host.includes("webflow.io")) {
    xr.init("phc_wPpJiWuuJP2Nx2sJdyyhDEyVyBkIvVH7uT90AHUsHHK", {
      api_host: "https://app.posthog.com"
    });
  }
  setUpAccordions();
  tippy_esm_default("[data-tippy-content]");
  var lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger2.update);
  import_gsap.gsap.ticker.add((time) => {
    lenis.raf(time * 1e3);
  });
  import_gsap.gsap.ticker.lagSmoothing(0);
  var avatars = document.querySelectorAll("[data-hero-avatar]");
  var textSlideActive = document.querySelector("[slider-active]");
  var textSlideTotal = document.querySelector("[slider-total]");
  var coursTitre = document.querySelectorAll("[data-cours-titre]");
  var coursText = document.querySelectorAll("[data-cours-text]");
  var playBtnVideo = document.querySelector("[data-video-play]");
  var restartBtnVideo = document.querySelector("[data-video-restart]");
  var controlsVideo = document.querySelector("[data-video-controls]");
  var pauseBtnVideo = document.querySelector("[data-video-pause]");
  var videoWrap = document.querySelector("[data-video-wrap]");
  var videoCmsWrap = document.querySelectorAll("[data-video-cms]");
  var videoThumb = document.querySelector("[data-thumbnail]");
  var appearElements = document.querySelectorAll("[data-nf-card]");
  var player = new player_es_default(videoWrap.id, {
    id: videoWrap.getAttribute("data-video-wrap"),
    width: videoWrap.offsetWidth,
    loop: true,
    controls: false,
    // Cela supprime les contrôles de lecture
    title: false,
    // Supprime l'affichage du titre
    byline: false,
    // Supprime l'affichage du créateur de la vidéo
    portrait: false,
    // Supprime l'image du profil du propriétaire
    autoplay: true,
    muted: true,
    playsinline: true
  });
  player.on("play", function() {
    videoThumb.classList.add("hide");
  });
  var firstStartVideo = () => {
    videoThumb.classList.add("hide");
    playBtnVideo.classList.add("hide");
    controlsVideo.classList.remove("hide");
    restartVideo();
    player.setVolume(1);
  };
  var restartVideo = () => {
    player.setCurrentTime(0).then(function() {
      player.play();
      controlsVideo.classList.remove("hide");
    }).catch(function(error) {
      console.error(error);
    });
  };
  var pauseVideo = () => {
    player.pause();
  };
  playBtnVideo.addEventListener("click", firstStartVideo);
  restartBtnVideo.addEventListener("click", restartVideo);
  pauseBtnVideo.addEventListener("click", pauseVideo);
  avatars.forEach(function(avatar) {
    avatar.addEventListener("mouseover", function() {
      this.classList.add("is-out");
    });
    avatar.addEventListener("mouseout", function() {
      this.classList.remove("is-out");
    });
  });
  var swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    speed: 0,
    allowTouchMove: true,
    autoplay: {
      delay: 7e3,
      waitForTransition: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  swiper.on("slideChange", function() {
    let tl = import_gsap.gsap.timeline({ ease: "power2.out" });
    import_gsap.gsap.set(".swiper-slide", { opacity: 0 });
    tl.fromTo(".swiper-slide", { opacity: 0 }, { opacity: 1 });
    textSlideActive.textContent = swiper.realIndex + 1;
    textSlideTotal.textContent = swiper.slides.length;
  });
  coursText.forEach((text, index) => {
    ScrollTrigger2.create({
      trigger: text,
      start: "top 30%",
      end: "top 30%",
      // markers: true,
      onEnter: () => {
        if (index > 0) {
          coursTitre[index - 1].classList.remove("is-active");
          coursText[index - 1].classList.remove("is-active");
        }
        coursTitre[index].classList.add("is-active");
        coursText[index].classList.add("is-active");
      },
      onEnterBack: () => {
        if (index > 0) {
          coursTitre[index].classList.remove("is-active");
          coursTitre[index - 1].classList.add("is-active");
          coursText[index].classList.remove("is-active");
          coursText[index - 1].classList.add("is-active");
        }
      }
    });
  });
  coursText[0].classList.add("is-active");
  coursTitre[0].classList.add("is-active");
  coursTitre.forEach((btn, index) => {
    btn.addEventListener("click", function() {
      coursText[index].scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  appearElements.forEach(function(card) {
    const section = card.closest("section");
    import_gsap.gsap.from(card, {
      scale: 0,
      // Part de l'échelle 0
      opacity: 0,
      ease: "power2.out",
      stagger: 0.2,
      duration: 0.8,
      // Durée de l'animation en secondes
      scrollTrigger: {
        markers: false,
        trigger: section,
        // Le déclencheur d'animation
        start: "top 80%"
        // Position de départ pour déclencher
      }
    });
  });
  videoCmsWrap.forEach(function(video) {
    const videoID = video.getAttribute("data-video-cms");
    if (videoID) {
      const playerCours = new player_es_default(video, {
        id: videoID,
        width: video.offsetWidth,
        loop: true,
        controls: false,
        // Cela supprime les contrôles de lecture
        title: false,
        // Supprime l'affichage du titre
        byline: false,
        // Supprime l'affichage du créateur de la vidéo
        portrait: false,
        // Supprime l'image du profil du propriétaire
        autoplay: true,
        muted: true
      });
    }
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

@vimeo/player/dist/player.es.js:
  (*! @vimeo/player v2.21.0 | (c) 2024 Vimeo | MIT License | https://github.com/vimeo/player.js *)
  (*!
   * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
   * https://github.com/polygonplanet/weakmap-polyfill
   * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
   * @license MIT
   *)
  (*! Native Promise Only
      v0.8.1 (c) Kyle Simpson
      MIT License: http://getify.mit-license.org
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
