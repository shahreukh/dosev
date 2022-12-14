(function(factory){
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    factory(window.jQuery || window.Zepto || window.$);
  };
}(function($){
  if (typeof Zepto === 'function' || typeof Zepto === 'object') {
    var ioDim = function(dimension, includeBorder) {
      return function (includeMargin) {
        var sides, size, elem;
        if (this) {
          elem = this;
          size = elem[dimension]();
          sides = {
            width: ['left', 'right'],
            height: ['top', 'bottom']
          };
          sides[dimension].forEach(function(side) {
            if (!elem.css('box-sizing') || elem.css('box-sizing') === 'content-box') {
              size += parseInt(elem.css('padding-' + side), 10);
              if (includeBorder) {
                size += parseInt(elem.css('border-' + side + '-width'), 10);
              };
            };
            if (includeMargin) {
              size += parseInt(elem.css('margin-' + side), 10);
            };
          });
          return size;
        } else {
          return null;
        };
      };
    };
    ['width', 'height'].forEach(function(dimension) {
      var Dimension = dimension.substr(0,1).toUpperCase() + dimension.substr(1);
      if (typeof Zepto.fn['inner' + Dimension] === 'undefined') {
        Zepto.fn['inner' + Dimension] = ioDim(dimension, false);
      };
      if (typeof Zepto.fn['outer' + Dimension] === 'undefined') {
        Zepto.fn['outer' + Dimension] = ioDim(dimension, true);
      };
    });
  };

  var dialog = {
    dom: {},
    isElement: function(o){
      if (o && (typeof HTMLElement === 'function' || typeof HTMLElement === 'object') && o instanceof HTMLElement) {
        return true;
      } else {
        return (o && o.nodeType && o.nodeType === 1) ? true : false;
      };
    },
    isJquery: function(o){
      return (o && o.length && (typeof jQuery === 'function' || typeof jQuery === 'object') && o instanceof jQuery) ? true : false;
    },
    isZepto: function(o){
      return (o && o.length && (typeof Zepto === 'function' || typeof Zepto === 'object') && Zepto.zepto.isZ(o)) ? true : false;
    }
  };

  dialog.init = function(opt, ok, no){
    var self = this;

    self.dom.docHtml = $('html');
    self.dom.box = $('<div></div>', {'id': 'cxdialog', 'class': 'cxdialog'});
    self.dom.overlay = $('<div></div>', {'id': 'cxdialog_overlay', 'class': 'cxdialog_overlay'});
    self.dom.holder = $('<div></div>', {'id': 'cxdialog_holder', 'class': 'cxdialog_holder'});
    self.dom.title = $('<div></div>', {'class': 'cxdialog_title'});
    self.dom.info = $('<div></div>', {'class': 'cxdialog_info'});
    self.dom.btns = $('<div></div>', {'class': 'cxdialog_btns'});
    self.dom.closeBtn = $('<a></a>', {'rel': 'cxdialog', 'rev': 'close'});

    $(document).ready(function() {
      self.dom.box.appendTo('body').after(self.dom.overlay);
    });

    self.isIE6 = !!window.ActiveXObject && !window.XMLHttpRequest;

    self.dom.box.on('click', 'a', function(){
      var _rel = this.rel;
      var _rev = this.rev;
      var _result;

      if (_rel !== 'cxdialog') {return};

      if (_rev === 'close') {
        self.exit();

      } else {
        for (var i = 0, l = self.btnCache.length; i < l; i++) {
          if (self.btnCache[i].name === _rev && typeof self.btnCache[i].callback === 'function') {
            _result = self.btnCache[i].callback();
            break;
          };
        };
      };

      if (_result !== false) {
        self.exit();
      };

      return false;
    });
  };

  dialog.format = function(opt, ok, no){
    var self = this;
    self.exit();

    if (typeof opt === 'string' && !opt.length) {return};

    if (typeof opt === 'string' || self.isElement(opt) || self.isJquery(opt) || self.isZepto(opt)) {
      opt = {
        info: opt
      };
    } else if (typeof opt !== 'object') {
      return;
    };

    if (typeof ok === 'function') {opt.ok = ok};
    if (typeof no === 'function') {opt.no = no};

    opt = $.extend({}, $.cxDialog.defaults, opt);

    self.dom.box.attr('class', 'cxdialog');

    self.setContent(opt);
    self.show(opt);
  };

  dialog.setContent = function(opt){
    var self = this;
    var _timeStamp = new Date().getTime();

    self.dom.box.empty();

    if (typeof opt.title === 'string' && opt.title.length) {
      self.dom.title.html(opt.title).appendTo(self.dom.box);
    };

    self.infoCache = undefined;

    if (typeof opt.info === 'string' && opt.info.length) {
      self.dom.info.html(opt.info).appendTo(self.dom.box);

    } else if (self.isElement(opt.info) || self.isJquery(opt.info) || self.isZepto(opt.info)) {
      var _cacheDom = self.isElement(opt.info) ? $(opt.info) : opt.info;
      self.infoCache = {
        dom: _cacheDom
      };

      var _style = _cacheDom.attr('style');

      if (typeof _style === 'string' && _style.length) {
        self.infoCache.styleText = _style;
      };

      self.dom.holder.css({
        'float': _cacheDom.css('float'),
        'display': _cacheDom.css('display'),
        'visibility': _cacheDom.css('visibility'),
        'position': _cacheDom.css('position'),
        'width': _cacheDom.outerWidth(),
        'height': _cacheDom.outerHeight()
      }).insertAfter(_cacheDom);

      _cacheDom.css('display', 'block').appendTo(self.dom.box);

    } else {
      opt.info = String(opt.info);
      self.dom.info.html(opt.info).appendTo(self.dom.box);
    };

    self.btnCache = [];

    if (typeof opt.ok === 'function') {
      self.btnCache.push({
        name: 'btn_ok',
        className: 'btn_ok',
        text: opt.okText,
        callback: opt.ok
      });
    };
    if (typeof opt.no === 'function') {
      self.btnCache.push({
        name: 'btn_no',
        className: 'btn_no',
        text: opt.noText,
        callback: opt.no
      });
    };

    for (var i = 0, l = opt.buttons.length; i < l; i++) {
      self.btnCache.push({
        name: 'btn_' + _timeStamp + '_' + i,
        className: 'btn_' + i,
        text: opt.buttons[i].text,
        callback: opt.buttons[i].callback
      });
    };

    if (self.btnCache.length) {
      var _html = '';
      for (var i = 0, l = self.btnCache.length; i < l; i++) {
        _html += '<a class="' + self.btnCache[i].className + '" rel="cxdialog" rev="' + self.btnCache[i].name + '">' + self.btnCache[i].text + '</a>';
      };
      self.dom.btns.html(_html).appendTo(self.dom.box);
    };

    if (opt.closeBtn) {
      self.dom.closeBtn.appendTo(self.dom.box);
    };
  };

  dialog.show = function(opt){
    var self = this;

    if (opt.lockScroll === true) {
      self.dom.docHtml.addClass('cxdialog_lock');
    };

    if (typeof opt.background === 'string') {
      self.dom.overlay.css('background', opt.background);
    } else {
      self.dom.overlay.css('display', 'none');
    };

    if (typeof opt.baseClass === 'string' && opt.baseClass.length) {
      self.dom.box.addClass(opt.baseClass);
    };

    self.dom.box.removeAttr('style');

    var _cssAttr = {};

    if (self.isIE6) {
      _cssAttr.top = document.documentElement.scrollTop + window.screen.availHeight / 4;
    };

    if (opt.width > 0) {
      _cssAttr.width = opt.width;
      _cssAttr.marginLeft = -(opt.width / 2);
    } else {
      _cssAttr.marginLeft = -(self.dom.box.outerWidth() / 2);
    };

    if (opt.height > 0) {
      _cssAttr.height = opt.height;
      _cssAttr.marginTop = -(opt.height / 2);
    } else {
      _cssAttr.marginTop = -(self.dom.box.outerHeight() / 2);
    };

    if (opt.zIndex > 0) {
      _cssAttr.zIndex = opt.zIndex;
    };

    self.dom.box.css(_cssAttr).addClass('in');
  };

  dialog.backDom = function(){
    var self = this;

    if (self.infoCache && (self.isJquery(self.infoCache.dom) || self.isZepto(self.infoCache.dom))) {
      if (typeof self.infoCache.styleText === 'string' && self.infoCache.styleText.length) {
        self.infoCache.dom.attr('style', self.infoCache.styleText);
      } else {
        self.infoCache.dom.removeAttr('style');
      };

      self.infoCache.dom.insertAfter(self.dom.holder);

      self.dom.holder.remove();
    };

    self.infoCache = undefined;
  };

  dialog.exit = function(){
    var self = this;

    self.backDom();

    self.btnCache = undefined;

    self.dom.box.removeClass('in').addClass('out');
    if (typeof $.cxDialog.defaults.background !== 'string') {
      self.dom.overlay.css('display', '');
    };
    self.dom.docHtml.removeClass('cxdialog_lock');
  };

  $.cxDialog = function(){
    dialog.format.apply(dialog, arguments);
  };

  $.cxDialog.close = function(){
    dialog.exit.apply(dialog);
  };

  $.cxDialog.defaults = {
    title: '',
    info: '',
    ok: null,
    okText: '??? ???',
    no: null,
    noText: '??? ???',
    buttons: [],
    closeBtn: false,
    lockScroll: false,
    baseClass: '',
    background: '',
    width: 0,
    height: 0
  };

  dialog.init();
}));