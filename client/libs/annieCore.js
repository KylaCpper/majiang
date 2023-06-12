window.__extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * annie引擎类的基类
     * @class annie.AObject
     * @since 1.0.0
     */
    var AObject = (function () {
        function AObject() {
            this._id = 0;
            this._id = AObject._object_id++;
        }
        /**
         * 每一个annie引擎对象都会有一个唯一的id码。
         * @method getInstanceId
         * @public
         * @since 1.0.0
         * @returns {number}
         * @example
         *      //获取 annie引擎类对象唯一码
         *      trace(this.getInstanceId());
         */
        AObject.prototype.getInstanceId = function () {
            return this._id;
        };
        AObject._object_id = 0;
        return AObject;
    }());
    annie.AObject = AObject;
    /**
     * 事件触发基类
     * @class annie.EventDispatcher
     * @extends annie.AObject
     * @public
     * @since 1.0.0
     */
    var EventDispatcher = (function (_super) {
        __extends(EventDispatcher, _super);
        function EventDispatcher() {
            _super.call(this);
            this.eventTypes = null;
            this.eventTypes = {};
        }
        /**
         * 看看有多少mouse或者touch侦听数
         * @method getMouseEventCount
         * @returns {number}
         * @static
         * @private
         * @since 1.0.0
         * @param {string} type 获取事件类型，默认是所有
         */
        EventDispatcher.getMouseEventCount = function (type) {
            if (type === void 0) { type = ""; }
            var count = 0;
            if (type == "") {
                //返回所有鼠标事件数
                for (var item in EventDispatcher._MECO) {
                    if (item.indexOf("onMouse") == 0) {
                        count += EventDispatcher._MECO[item];
                    }
                }
            }
            else {
                if (EventDispatcher._MECO[type]) {
                    count = EventDispatcher._MECO[type];
                }
            }
            return count;
        };
        /**
         * 给对象添加一个侦听
         * @method addEventListener
         * @public
         * @since 1.0.0
         * @param {string} type 侦听类形
         * @param {Function}listener 侦听后的回调方法,如果这个方法是类实例的方法,为了this引用的正确性,请在方法参数后加上.bind(this);
         * @example
         *      this.addEventListener(annie.Event.ADD_TO_STAGE,function(e){trace(this);}.bind(this));
         */
        EventDispatcher.prototype.addEventListener = function (type, listener) {
            if (!type) {
                trace("添加侦听的type值为undefined");
                return;
            }
            var s = this;
            if (!s.eventTypes[type]) {
                s.eventTypes[type] = [];
            }
            if (s.eventTypes[type].indexOf(listener) < 0) {
                s.eventTypes[type].push(listener);
                s._changeMouseCount(type, true);
            }
        };
        /**
         * 增加或删除相应mouse或touch侦听记数
         * @method _changeMouseCount
         * @private
         * @since 1.0.0
         * @param {string} type
         * @param {boolean} isAdd
         */
        EventDispatcher.prototype._changeMouseCount = function (type, isAdd) {
            var count = isAdd ? 1 : -1;
            if (!EventDispatcher._MECO[type]) {
                EventDispatcher._MECO[type] = 0;
            }
            EventDispatcher._MECO[type] += count;
            if (EventDispatcher._MECO[type] < 0) {
                EventDispatcher._MECO[type] = 0;
            }
            EventDispatcher._totalMEC += count;
        };
        /**
         * 广播侦听
         * @method dispatchEvent
         * @public
         * @since 1.0.0
         * @param {annie.Event|string} event 广播所带的事件对象,如果传的是字符串则直接自动生成一个的事件对象,事件类型就是你传入进来的字符串的值
         * @param {Object} data 广播后跟着事件一起传过去的其他任信息,默认值为null
         * @returns {boolean} 如果有收听者则返回true
         */
        EventDispatcher.prototype.dispatchEvent = function (event, data) {
            if (data === void 0) { data = null; }
            var s = this;
            if (typeof (event) == "string") {
                event = new annie.Event(event);
            }
            var listeners = s.eventTypes[event.type];
            if (listeners) {
                var len = listeners.length;
                if (event.target == null) {
                    event.target = s;
                }
                if (data != null) {
                    event.data = data;
                }
                for (var i = 0; i < len; i++) {
                    listeners[i](event);
                }
                return true;
            }
            else {
                return false;
            }
        };
        /**
         * 是否有添加过此类形的侦听
         * @method hasEventListener
         * @public
         * @since 1.0.0
         * @param {string} type 侦听类形
         * @returns {boolean} 如果有则返回true
         */
        EventDispatcher.prototype.hasEventListener = function (type) {
            if (this.eventTypes[type]) {
                return true;
            }
            return false;
        };
        /**
         * 移除对应类型的侦听
         * @method removeEventListener
         * @public
         * @since 1.0.0
         * @param {string} type 要移除的侦听类型
         * @param {Function} listener 及侦听时绑定的回调方法
         */
        EventDispatcher.prototype.removeEventListener = function (type, listener) {
            var s = this;
            var listeners = s.eventTypes[type];
            if (listeners) {
                var len = listeners.length;
                for (var i = len - 1; i >= 0; i--) {
                    if (listeners[i] === listener) {
                        listeners.splice(i, 1);
                        if (type.indexOf("onMouse") == 0) {
                            s._changeMouseCount(type, false);
                        }
                    }
                }
            }
        };
        /**
         * 移除对象中所有的侦听
         * @method removeAllEventListener
         * @public
         * @since 1.0.0
         */
        EventDispatcher.prototype.removeAllEventListener = function () {
            var s = this;
            for (var type in s.eventTypes) {
                if (type.indexOf("onMouse") == 0) {
                    for (var j = 0; j < s.eventTypes[type].length; j++) {
                        s._changeMouseCount(type, false);
                    }
                }
            }
            s.eventTypes = {};
        };
        /**
         * 全局的鼠标事件的监听数对象表
         * @property _MECO
         * @private
         * @since 1.0.0
         */
        EventDispatcher._MECO = {};
        EventDispatcher._totalMEC = 0;
        return EventDispatcher;
    }(AObject));
    annie.EventDispatcher = EventDispatcher;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * 事件类,annie引擎中一切事件的基类
     * @class annie.Event
     * @extends annie.AObject
     * @public
     * @since 1.0.0
     */
    var Event = (function (_super) {
        __extends(Event, _super);
        /**
         * @method Event
         * @param {string} type 事件类型
         */
        function Event(type) {
            _super.call(this);
            /**
             * 事件类型名
             * @property type
             * @type {string}
             * @public
             * @since 1.0.0
             */
            this.type = "";
            /**
             * 触发此事件的对象
             * @property target
             * @public
             * @since 1.0.0
             * @type {any}
             */
            this.target = null;
            /**
             * 随着事件一起附带的信息对象
             * 所有需要随事件一起发送的信息都可以放在此对象中
             * @property data
             * @public
             * @since 1.0.0
             * @type {any}
             * @default null
             */
            this.data = null;
            /**
             * 是否阻止事件向下冒泡
             * @property _pd
             * @type {boolean}
             * @private
             * @since 1.0.0
             */
            this._pd = false;
            this.type = type;
        }
        /**
         * 阻止向下冒泡事件,如果在接收到事件后调用事件的这个方法,那么这个事件将不会再向显示对象的子级派送
         * @method preventDefault
         * @public
         * @since 1.0.0
         */
        Event.prototype.preventDefault = function () {
            this._pd = true;
        };
        /**
         * 舞台尺寸发生变化时触发
         * @Event
         * @property RESIZE
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        Event.RESIZE = "onResize";
        /**
         * 舞台初始化完成后会触发的事件
         * @Event
         * @property ON_STAGE_INIT
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        Event.INIT_TO_STAGE = "onInitStage";
        /**
         * 显示对象加入到舞台事件
         * @Event
         * @property ADD_TO_STAGE
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        Event.ADD_TO_STAGE = "onAddToStage";
        /**
         * 显示对象从舞台移出事件
         * @Event
         * @property REMOVE_TO_STAGE
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        Event.REMOVE_TO_STAGE = "onRemoveToStage";
        /**
         * 显示对象 循环帧事件
         * @Event
         * @property ENTER_FRAME
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        Event.ENTER_FRAME = "onEnterFrame";
        /**
         * MovieClip 播放完成事件
         * @Event
         * @property END_FRAME
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        Event.END_FRAME = "onEndFrame";
        /**
         * MovieClip 帧标签事件
         * @Event
         * @property CALL_FRAME
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        Event.CALL_FRAME = "onCallFrame";
        /**
         * 完成事件
         * @Event
         * @property COMPLETE
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        Event.COMPLETE = "onComplete";
        /**
         * 加载过程事件
         * @Event
         * @property PROGRESS
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        Event.PROGRESS = "onProgress";
        /**
         * 出错事件
         * @Event
         * @property ERROR
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        Event.ERROR = "onError";
        /**
         * 中断事件
         * @Event
         * @property ABORT
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        Event.ABORT = "onAbort";
        /**
         * 开始事件
         * @Event
         * @property START
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        Event.START = "onStart";
        return Event;
    }(annie.AObject));
    annie.Event = Event;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * 鼠标事件类,电脑端鼠标,移动设备端的触摸都使用此事件来监听
     * @class annie.MouseEvent
     * @extends annie.Event
     * @public
     * @since 1.0.0
     */
    var MouseEvent = (function (_super) {
        __extends(MouseEvent, _super);
        /**
         * @method MouseEvent
         * @public
         * @since 1.0.0
         * @param {string} type
         */
        function MouseEvent(type) {
            _super.call(this, type);
            /**
             * mouse或touch事件时rootDiv坐标x点
             * @property clientX
             * @public
             * @since 1.0.0
             * @type {number}
             */
            this.clientX = 0;
            /**
             * mouse或touch事件时rootDiv坐标y点
             * @property clientY
             * @public
             * @since 1.0.0
             * @type {number}
             */
            this.clientY = 0;
            /**
             * mouse或touch事件时全局坐标x点
             * @property stageX
             * @public
             * @since 1.0.0
             * @type {number}
             */
            this.stageX = 0;
            /**
             * mouse或touch事件时全局坐标y点
             * @property stageY
             * @public
             * @since 1.0.0
             * @type {number}
             */
            this.stageY = 0;
            /**
             * mouse或touch事件时本地坐标x点
             * @property localX
             * @public
             * @since 1.0.0
             * @type {number}
             */
            this.localX = 0;
            /**
             * mouse或touch事件时本地坐标y点
             * @property localY
             * @public
             * @since 1.0.0
             * @type {number}
             */
            this.localY = 0;
            /**
             * 绑定此事件的侦听对象
             * @property currentTarget
             * @public
             * @since 1.0.0
             * @type{annie.DisplayObject}
             * @default null
             */
            this.currentTarget = null;
        }
        /**
         * 鼠标或者手指按下事件
         * @property MOUSE_DOWN
         * @static
         * @public
         * @since 1.0.0
         * @type {string}
         */
        MouseEvent.MOUSE_DOWN = "onMouseDown";
        /**
         * 鼠标或者手指抬起事件
         * @property MOUSE_UP
         * @static
         * @public
         * @since 1.0.0
         * @type {string}
         */
        MouseEvent.MOUSE_UP = "onMouseUp";
        /**
         * 鼠标或者手指单击
         * @property CLICK
         * @static
         * @public
         * @since 1.0.0
         * @type {string}
         */
        MouseEvent.CLICK = "onMouseClick";
        /**
         * 鼠标或者手指移动事件
         * @property MOUSE_MOVE
         * @static
         * @public
         * @since 1.0.0
         * @type {string}
         */
        MouseEvent.MOUSE_MOVE = "onMouseMove";
        /**
         * 鼠标或者手指移入到显示对象上里触发的事件
         * @property MOUSE_OVER
         * @static
         * @public
         * @since 1.0.0
         * @type {string}
         */
        MouseEvent.MOUSE_OVER = "onMouseOver";
        /**
         * 鼠标或者手指移出显示对象边界触发的事件
         * @property MOUSE_OUT
         * @static
         * @public
         * @since 1.0.0
         * @type {string}
         */
        MouseEvent.MOUSE_OUT = "onMouseOut";
        return MouseEvent;
    }(annie.Event));
    annie.MouseEvent = MouseEvent;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * @class annie.Point
     * @extends annie.AObject
     * @since 1.0.0
     * @public
     */
    var Point = (function (_super) {
        __extends(Point, _super);
        /**
         * 构造函数
         * @method Point
         * @public
         * @since 1.0.0
         * @param x
         * @param y
         */
        function Point(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            _super.call(this);
            /**
             * @property x
             * @public
             * @since 1.0.0
             * @type{number}
             */
            this.x = 0;
            /**
             * @property y
             * @since 1.0.0
             * @public
             * @type {number}
             */
            this.y = 0;
            var s = this;
            s.x = x;
            s.y = y;
        }
        /**
         * 求两点之间的距离
         * @method distance
         * @static
         * @param p1
         * @param p2
         * @returns {number}
         */
        Point.distance = function (p1, p2) {
            return Math.sqrt(p1.x * p1.x * +p1.y * p2.y);
        };
        return Point;
    }(annie.AObject));
    annie.Point = Point;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    var PI = Math.PI;
    var HalfPI = PI >> 1;
    var PacPI = PI + HalfPI;
    var TwoPI = PI << 1;
    var DEG_TO_RAD = Math.PI / 180;
    function cos(angle) {
        switch (angle) {
            case HalfPI:
            case -PacPI:
                return 0;
            case PI:
            case -PI:
                return -1;
            case PacPI:
            case -HalfPI:
                return 0;
            default:
                return Math.cos(angle);
        }
    }
    /**
     * @private
     */
    function sin(angle) {
        switch (angle) {
            case HalfPI:
            case -PacPI:
                return 1;
            case PI:
            case -PI:
                return 0;
            case PacPI:
            case -HalfPI:
                return -1;
            default:
                return Math.sin(angle);
        }
    }
    /**
     * 2维矩阵,不熟悉的朋友可以找相关书箱看看
     * @class annie.Matrix
     * @extends annie.AObject
     * @public
     * @since 1.0.0
     */
    var Matrix = (function (_super) {
        __extends(Matrix, _super);
        /**
         * 构造函数
         * @method Matrix
         * @param {number} a
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @param {number} tx
         * @param {number} ty
         * @public
         * @since 1.0.0
         */
        function Matrix(a, b, c, d, tx, ty) {
            if (a === void 0) { a = 1; }
            if (b === void 0) { b = 0; }
            if (c === void 0) { c = 0; }
            if (d === void 0) { d = 1; }
            if (tx === void 0) { tx = 0; }
            if (ty === void 0) { ty = 0; }
            _super.call(this);
            /**
             * @property a
             * @type {number}
             * @public
             * @default 1
             * @since 1.0.0
             */
            this.a = 1;
            /**
             * @property b
             * @public
             * @since 1.0.0
             * @type {number}
             */
            this.b = 0;
            /**
             * @property c
             * @type {number}
             * @public
             * @since 1.0.0
             */
            this.c = 0;
            /**
             * @property d
             * @type {number}
             * @public
             * @since 1.0.0
             */
            this.d = 1;
            /**
             * @property tx
             * @type {number}
             * @public
             * @since 1.0.0
             */
            this.tx = 0;
            /**
             * @property ty
             * @type {number}
             * @since 1.0.0
             * @public
             */
            this.ty = 0;
            /**
             * 将一个点通过矩阵变换后的点
             * @method transformPoint
             * @param {number} x
             * @param {number} y
             * @param {annie.Point} 默认为空，如果不为null，则返回的是Point就是此对象，如果为null，则返回来的Point是新建的对象
             * @returns {annie.Point}
             * @public
             * @since 1.0.0
             */
            this.transformPoint = function (x, y, bp) {
                if (bp === void 0) { bp = null; }
                var s = this;
                if (!bp) {
                    bp = new annie.Point();
                }
                bp.x = x * s.a + y * s.c + s.tx;
                bp.y = x * s.b + y * s.d + s.ty;
                return bp;
            };
            /**
             * 矩阵相乘
             * @method prepend
             * @public
             * @since 1.0.0
             * @param {annie.Matrix} mtx
             */
            this.prepend = function (mtx) {
                var s = this;
                var a = mtx.a;
                var b = mtx.b;
                var c = mtx.c;
                var d = mtx.d;
                var tx = mtx.tx;
                var ty = mtx.ty;
                var a1 = s.a;
                var c1 = s.c;
                var tx1 = s.tx;
                s.a = a * a1 + c * s.b;
                s.b = b * a1 + d * s.b;
                s.c = a * c1 + c * s.d;
                s.d = b * c1 + d * s.d;
                s.tx = a * tx1 + c * s.ty + tx;
                s.ty = b * tx1 + d * s.ty + ty;
            };
            var s = this;
            s.a = a;
            s.b = b;
            s.c = c;
            s.d = d;
            s.tx = tx;
            s.ty = ty;
        }
        /**
         * 复制一个矩阵
         * @method clone
         * @since 1.0.0
         * @public
         * @returns {annie.Matrix}
         */
        Matrix.prototype.clone = function () {
            var s = this;
            return new Matrix(s.a, s.b, s.c, s.d, s.tx, s.ty);
        };
        /**
         * 从一个矩阵里赋值给这个矩阵
         * @method setFrom
         * @param {annie.Matrix} mtx
         * @public
         * @since 1.0.0
         */
        Matrix.prototype.setFrom = function (mtx) {
            var s = this;
            s.a = mtx.a;
            s.b = mtx.b;
            s.c = mtx.c;
            s.d = mtx.d;
            s.tx = mtx.tx;
            s.ty = mtx.ty;
        };
        /**
         * 将矩阵恢复成原始矩阵
         * @method
         * @public
         * @since 1.0.0
         */
        Matrix.prototype.identity = function () {
            var s = this;
            s.a = s.d = 1;
            s.b = s.c = s.tx = s.ty = 0;
        };
        /**
         * 反转一个矩阵
         * @method
         * @returns {Matrix}
         * @since 1.0.0
         * @public
         */
        Matrix.prototype.invert = function () {
            var s = this;
            var target = new Matrix(s.a, s.b, s.c, s.d, s.tx, s.ty);
            var a = s.a;
            var b = s.b;
            var c = s.c;
            var d = s.d;
            var tx = s.tx;
            var ty = s.ty;
            if (b == 0 && c == 0) {
                if (a == 0 || d == 0) {
                    target.a = target.d = target.tx = target.ty = 0;
                }
                else {
                    a = target.a = 1 / a;
                    d = target.d = 1 / d;
                    target.tx = -a * tx;
                    target.ty = -d * ty;
                }
                return target;
            }
            var determinant = a * d - b * c;
            if (determinant == 0) {
                target.identity();
                return target;
            }
            determinant = 1 / determinant;
            var k = target.a = d * determinant;
            b = target.b = -b * determinant;
            c = target.c = -c * determinant;
            d = target.d = a * determinant;
            target.tx = -(k * tx + c * ty);
            target.ty = -(b * tx + d * ty);
            return target;
        };
        /**
         * 设置一个矩阵通过普通的显示对象的相关九大属性
         * @method createBox
         * @param {number} x
         * @param {number} y
         * @param {number} scaleX
         * @param {number} scaleY
         * @param {number} rotation
         * @param {number} skewX
         * @param {number} skewY
         * @param {number} ax
         * @param {number} ay
         * @since 1.0.0
         * @public
         */
        Matrix.prototype.createBox = function (x, y, scaleX, scaleY, rotation, skewX, skewY, ax, ay) {
            var s = this;
            if (rotation != 0) {
                skewX = skewY = rotation % 360;
            }
            else {
                skewX %= 360;
                skewY %= 360;
            }
            if ((skewX == 0) && (skewY == 0)) {
                s.a = scaleX;
                s.b = s.c = 0;
                s.d = scaleY;
            }
            else {
                skewX *= DEG_TO_RAD;
                skewY *= DEG_TO_RAD;
                var u = cos(skewX);
                var v = sin(skewX);
                if (skewX == skewY) {
                    s.a = u * scaleX;
                    s.b = v * scaleX;
                }
                else {
                    s.a = cos(skewY) * scaleX;
                    s.b = sin(skewY) * scaleX;
                }
                s.c = -v * scaleY;
                s.d = u * scaleY;
            }
            ;
            s.tx = x + ax - (ax * s.a + ay * s.c);
            s.ty = y + ay - (ax * s.b + ay * s.d);
        };
        /**
         * 判断两个矩阵是否相等
         * @method isEqual
         * @static
         * @public
         * @since 1.0.0
         * @param {annie.Matrix} m1
         * @param {annie.Matrix} m2
         * @returns {boolean}
         */
        Matrix.isEqual = function (m1, m2) {
            return m1.tx == m2.tx && m1.ty == m2.ty && m1.a == m2.a && m1.b == m2.b && m1.c == m2.c && m1.d == m2.d;
        };
        return Matrix;
    }(annie.AObject));
    annie.Matrix = Matrix;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     *
     * @class annie.Rectangle
     * @extends annie.AObject
     * @public
     * @since 1.0.0
     */
    var Rectangle = (function (_super) {
        __extends(Rectangle, _super);
        /**
         * 构造函数
         * @method Rectangle
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         */
        function Rectangle(x, y, width, height) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            _super.call(this);
            /**
             * @property x
             * @public
             * @since 1.0.0
             * @type{number}
             * @default 0
             */
            this.x = 0;
            /**
             * @property y
             * @public
             * @since 1.0.0
             * @type{number}
             * @default 0
             */
            this.y = 0;
            /**
             * @property width
             * @public
             * @since 1.0.0
             * @type{number}
             * @default 0
             */
            this.width = 0;
            /**
             * @property height
             * @public
             * @since 1.0.0
             * @type{number}
             * @default 0
             */
            this.height = 0;
            this.x = x;
            this.y = y;
            this.height = height;
            this.width = width;
        }
        /**
         * 判断一个点是否在矩形内包括边
         * @method isPointIn
         * @param {annie.Point} point
         * @returns {boolean}
         * @public
         * @since 1.0.0
         */
        Rectangle.prototype.isPointIn = function (point) {
            var s = this;
            return point.x >= s.x && point.x <= (s.x + s.width) && point.y >= s.y && point.y <= (s.y + s.height);
        };
        /**
         * 将多个矩形合成为一个大的矩形
         * 返回包含所有给定的矩阵拼合之后的一个最小矩形
         * @method createFromRects
         * @param {annie.Rectangle} rect
         * @param {..arg} arg
         * @public
         * @since 1.0.0
         * @static
         */
        Rectangle.createFromRects = function (rect) {
            var arg = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                arg[_i - 1] = arguments[_i];
            }
            var x = rect.x, y = rect.y, w = rect.width, h = rect.height, wx1, wx2, hy1, hy2;
            for (var i = 0; i < arg.length; i++) {
                if (arg[i] == null)
                    continue;
                wx1 = x + w;
                hy1 = y + h;
                wx2 = arg[i].x + arg[i].width;
                hy2 = arg[i].y + arg[i].height;
                if (x > arg[i].x) {
                    x = arg[i].x;
                }
                if (y > arg[i].y) {
                    y = arg[i].y;
                }
                if (wx1 < wx2) {
                    wx1 = wx2;
                }
                if (hy1 < hy2) {
                    hy1 = hy2;
                }
            }
            return new Rectangle(x, y, wx1 - x, hy1 - y);
        };
        /**
         * 通过一系列点来生成一个矩形
         * 返回包含所有给定的点的最小矩形
         * @method createFromPoints
         * @static
         * @public
         * @since 1.0.0
         * @param {annie.Point} p1
         * @param {..arg} ary
         * @returns {annie.Rectangle}
         */
        Rectangle.createFromPoints = function (p1) {
            var arg = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                arg[_i - 1] = arguments[_i];
            }
            var x = p1.x, y = p1.y, w = p1.x, h = p1.y;
            for (var i = 0; i < arg.length; i++) {
                if (arg[i] == null)
                    continue;
                if (x > arg[i].x) {
                    x = arg[i].x;
                }
                if (y > arg[i].y) {
                    x = arg[i].y;
                }
                if (w < arg[i].x) {
                    w = arg[i].x;
                }
                if (h < arg[i].y) {
                    h = arg[i].y;
                }
            }
            return new Rectangle(x, y, w, h);
        };
        /**
         * 判读两个矩形是否相交
         * @method testRectCross
         * @public
         * @since 1.0.2
         * @param r1
         * @param r2
         * @return {boolean}
         */
        Rectangle.testRectCross = function (ra, rb) {
            var a_cx, a_cy; /* 第一个中心点*/
            var b_cx, b_cy; /* 第二个中心点*/
            a_cx = ra.x + (ra.width / 2);
            a_cy = ra.y + (ra.height / 2);
            b_cx = rb.x + (rb.width / 2);
            b_cy = rb.y + (rb.height / 2);
            return ((Math.abs(a_cx - b_cx) <= (ra.width / 2 + rb.width / 2)) && (Math.abs(a_cy - b_cy) <= (ra.height / 2 + rb.height / 2)));
        };
        return Rectangle;
    }(annie.AObject));
    annie.Rectangle = Rectangle;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * 显示对象抽奖类,不能直接实例化。一切显示对象的基类,包含了显示对象需要的一切属性
     * DisplayObject 类本身不包含任何用于在屏幕上呈现内容的 API。
     * 因此，如果要创建 DisplayObject 类的自定义子类，您将需要扩展其中一个具有在屏幕
     * 上呈现内容的 API 的子类，如 Shape、Sprite、Bitmap、TextField 或 MovieClip 类。
     * @class annie.DisplayObject
     * @since 1.0.0
     * @extends annie.EventDispatcher
     */
    var DisplayObject = (function (_super) {
        __extends(DisplayObject, _super);
        /**
         * @method DisplayObject
         * @since 1.0.0
         * @public
         */
        function DisplayObject() {
            _super.call(this);
            /**
             * 此显示对象所在的舞台对象,如果此对象没有被添加到显示对象列表中,此对象为空。
             * @property stage
             * @public
             * @since 1.0.0
             * @type {Stage}
             * @default null;
             * @readonly
             * */
            this.stage = null;
            /**
             * 显示对象在显示列表上的最终表现出来的透明度,此透明度会继承父级的透明度依次相乘得到最终的值
             * @property cAlpha
             * @private
             * @type {number}
             * @since 1.0.0
             * @default 1
             */
            this.cAlpha = 1;
            /**
             * 显示对象上对显示列表上的最终合成的矩阵,此矩阵会继承父级的显示属性依次相乘得到最终的值
             * @property cMatrix
             * @private
             * @type {annie.Matrix}
             * @default null
             * @since 1.0.0
             */
            this.cMatrix = new annie.Matrix();
            /**
             * 因为每次enterFrame事件时都生成一个Event非常浪费资源,所以做成一个全局的
             * @property _enterFrameEvent
             * @private
             * @type {annie.Event}
             * @default null
             * @since 1.0.0
             */
            this._enterFrameEvent = null;
            /**
             * 是否可以接受点击事件,如果设置为false,此显示对象将无法接收到点击事件
             * @property mouseEnable
             * @type {boolean}
             * @public
             * @since 1.0.0
             * @default true
             */
            this.mouseEnable = true;
            /**
             * 显示对象上对显示列表上的最终的所有滤镜组
             * @property cFilters
             * @private
             * @default []
             * @since 1.0.0
             * @type {Array}
             */
            this.cFilters = [];
            /**
             * 缓存着的滤镜组信息，通过此信息来判断滤镜是否有更新以此来告诉对象是否需要更新缓存视觉
             * @property cCacheFilters
             * @private
             * @default []
             * @since 1.0.0
             * @type {Array}
             */
            this.cCacheFilters = [];
            /**
             * 是否需要更新缓存的开关
             * @property _isNeedUpdate
             * @private
             * @type {boolean}
             * @since 1.0.0
             * @default true
             */
            this._isNeedUpdate = true;
            /**
             * 每一个显示对象都可以给他启一个名字,这样我们在查找子级的时候就可以直接用this.getChildrndByName("name")获取到这个对象的引用
             * @property name
             * @since 1.0.0
             * @public
             * @type {string}
             * @default ""
             */
            this.name = "";
            /**
             * 显示对象位置x
             * @property x
             * @public
             * @since 1.0.0
             * @type {number}
             * @default 0
             */
            this.x = 0;
            /**
             * 显示对象位置y
             * @property y
             * @public
             * @since 1.0.0
             * @type {number}
             * @default 0
             */
            this.y = 0;
            /**
             * 显示对象x方向的缩放值
             * @property scaleX
             * @public
             * @since 1.0.0
             * @type {number}
             * @default 1
             */
            this.scaleX = 1;
            /**
             * 显示对象y方向的缩放值
             * @property scaleY
             * @public
             * @since 1.0.0
             * @type {number}
             * @default 1
             */
            this.scaleY = 1;
            /**
             * 显示对象旋转角度
             * @property rotation
             * @public
             * @since 1.0.0
             * @type {number}
             * @default 0
             */
            this.rotation = 0;
            /**
             * 显示对象透明度
             * @property alpha
             * @public
             * @since 1.0.0
             * @type {number}
             * @default 1
             */
            this.alpha = 1;
            /**
             * 显示对象x方向的斜切值
             * @property skewX
             * @public
             * @since 1.0.0
             * @type {number}
             * @default 0
             */
            this.skewX = 0;
            /**
             * 显示对象y方向的斜切值
             * @property skewY
             * @public
             * @since 1.0.0
             * @type {number}
             * @default 0
             */
            this.skewY = 0;
            /**
             * 显示对象上x方向的缩放或旋转点
             * @property anchorX
             * @public
             * @since 1.0.0
             * @type {number}
             * @default 0
             */
            this.anchorX = 0;
            /**
             * 显示对象上y方向的缩放或旋转点
             * @property anchorY
             * @pubic
             * @since 1.0.0
             * @type {number}
             * @default 0
             */
            this.anchorY = 0;
            /**
             * 显未对象是否可见
             * @property visible
             * @public
             * @since 1.0.0
             * @type {boolean}
             * @default 0
             */
            this.visible = true;
            // /**
            //  * 显示对象的混合模式
            //  * @property blendMode
            //  * @public
            //  * @since 1.0.0
            //  * @type {number}
            //  * @default 0
            //  */
            // public blendMode:number = 0;
            /**
             * 显示对象的变形矩阵
             * @property matrix
             * @public
             * @since 1.0.0
             * @type {annie.Matrix}
             * @default null
             */
            this.matrix = new annie.Matrix();
            /**
             * 显示对象的遮罩, 是一个Shape显示对象或是一个只包含shape显示对象的MovieClip
             * @property mask
             * @public
             * @since 1.0.0
             * @type {annie.DisplayObject}
             * @default null
             */
            this.mask = null;
            /**
             * 显示对象的滤镜数组
             * @property filters
             * @since 1.0.0
             * @public
             * @type {Array}
             * @default null
             */
            this.filters = null;
            /**
             * 显示对象的父级
             * @property parent
             * @since 1.0.0
             * @public
             * @type {annie.Sprite}
             * @default null
             * @readonly
             */
            this.parent = null;
            //需要用webgl渲染的信息
            this._glInfo = {};
        }
        /**
         *将全局坐标转换到本地坐标值
         * @method globalToLocal
         * @since 1.0.0
         * @public
         * @param {annie.Point} point
         * @returns {annie.Point}
         */
        DisplayObject.prototype.globalToLocal = function (point, bp) {
            if (bp === void 0) { bp = null; }
            return this.cMatrix.invert().transformPoint(point.x, point.y, bp);
        };
        /**
         *将本地坐标转换到全局坐标值
         * @method localToGlobal
         * @public
         * @since 1.0.0
         * @param {annie.Point} point
         * @returns {annie.Point}
         */
        DisplayObject.prototype.localToGlobal = function (point, bp) {
            if (bp === void 0) { bp = null; }
            return this.cMatrix.transformPoint(point.x, point.y, bp);
        };
        /**
         * 点击碰撞测试,就是舞台上的一个point是否在显示对象内,在则返回该对象，不在则返回null
         * @method hitTestPoint
         * @public
         * @since 1.0.0
         * @param {annie.Point} globalPoint 全局坐标中的一个点
         * @param {boolean} isMouseEvent 是否是鼠标事件调用此方法,用户一般无须理会,除非你要模拟鼠标点击可以
         * @returns {annie.DisplayObject}
         */
        DisplayObject.prototype.hitTestPoint = function (globalPoint, isMouseEvent) {
            if (isMouseEvent === void 0) { isMouseEvent = false; }
            var s = this;
            if (!s.visible)
                return null;
            if (isMouseEvent && !s.mouseEnable)
                return null;
            if (s.getBounds().isPointIn(s.globalToLocal(globalPoint, DisplayObject._bp))) {
                return s;
            }
            return null;
        };
        /**
         * 获取对象的自身的没有任何形变的原始姿态下的原点坐标及宽高,抽像方法
         * @method getBounds
         * @public
         * @since 1.0.0
         * @returns {annie.Rectangle}
         */
        DisplayObject.prototype.getBounds = function () {
            return null;
        };
        /**
         * 获取对象形变后外切矩形。
         * 可以从这个方法中读取到此显示对象变形后x方向上的宽主y方向上的高
         * @method getDrawRect
         * @public
         * @since 1.0.0
         * @returns {annie.Rectangle}
         */
        DisplayObject.prototype.getDrawRect = function () {
            var s = this;
            var rect;
            var bounds = s.getBounds();
            if (bounds) {
                var p1 = s.matrix.transformPoint(bounds.x, bounds.y);
                var p2 = s.matrix.transformPoint(bounds.x + bounds.width, bounds.y + bounds.height);
                rect = annie.Rectangle.createFromPoints(p1, p2);
                rect.width -= rect.x;
                rect.height -= rect.y;
            }
            return rect;
        };
        /**
         * 更新函数
         * @method update
         * @public
         * @since 1.0.0
         */
        DisplayObject.prototype.update = function () {
            var s = this;
            s.matrix.createBox(s.x, s.y, s.scaleX, s.scaleY, s.rotation, s.skewX, s.skewY, s.anchorX, s.anchorY);
            s.cFilters.length = 0;
            s.cMatrix.setFrom(s.matrix);
            if (s.parent) {
                s.cMatrix.prepend(s.parent.cMatrix);
                s.cAlpha = s.alpha * s.parent.cAlpha;
                if (s.parent.cFilters && s.parent.cFilters.length > 0) {
                    var len = s.parent.cFilters.length;
                    var pf = s.parent.cFilters;
                    for (var i = 0; i < len; i++) {
                        s.cFilters[i] = pf[i];
                    }
                }
            }
            else {
                s.cAlpha = s.alpha;
            }
            if (s.visible) {
                //如果visible为true更新他们的显示列表信息
                if (s.filters && s.filters.length > 0) {
                    var len = s.filters.length;
                    var sf = s.filters;
                    for (var i = 0; i < len; i++) {
                        s.cFilters.push(sf[i]);
                    }
                }
                //判读是否显示对象链上是否有滤镜更新
                if (s.cFilters.length > 0) {
                    var cLen = s.cFilters.length;
                    var isNeedUpdateFilters = false;
                    if (s.cCacheFilters.length != cLen) {
                        isNeedUpdateFilters = true;
                    }
                    else {
                        for (var i = 0; i < cLen; i++) {
                            if (s.cFilters[i].toString() != s.cCacheFilters[i]) {
                                isNeedUpdateFilters = true;
                                break;
                            }
                        }
                    }
                    if (isNeedUpdateFilters) {
                        s._isNeedUpdate = true;
                        s.cCacheFilters.length = 0;
                        for (var i = 0; i < cLen; i++) {
                            s.cCacheFilters[i] = s.cFilters[i].toString();
                        }
                    }
                }
                else if (s.cCacheFilters.length > 0) {
                    s.cCacheFilters.length = 0;
                    s._isNeedUpdate = true;
                }
            }
            //enterFrame事件,因为enterFrame不会冒泡所以不需要调用s._enterFrameEvent._pd=false
            if (s.hasEventListener("onEnterFrame")) {
                if (!s._enterFrameEvent) {
                    s._enterFrameEvent = new annie.Event("onEnterFrame");
                }
                s.dispatchEvent(s._enterFrameEvent);
            }
        };
        /**
         * 抽象方法
         * 调用此方法将显示对象渲染到屏幕
         * @method render
         * @public
         * @since 1.0.0
         * @param {annie.IRender} renderObj
         */
        DisplayObject.prototype.render = function (renderObj) {
            //this.isNeedUpdate =false;
        };
        /**
         * 调用些方法会冒泡的将事件向显示列表下方传递
         * @method _onDispatchBubbledEvent
         * @private
         * @since 1.0.0
         * @param {string} type
         * @private
         */
        DisplayObject.prototype._onDispatchBubbledEvent = function (type) {
            var s = this;
            s.stage = s.parent.stage;
            s.dispatchEvent(type);
            if (type == "onRemoveToStage") {
                s.stage = null;
            }
        };
        /**
         * 返回显示对象的宽和高
         * @method getWH
         * @public
         * @since 1.0.0
         * @returns {width: number, height: number}
         */
        DisplayObject.prototype.getWH = function () {
            var s = this;
            var dr = s.getDrawRect();
            return { width: dr.width, height: dr.height };
        };
        /**
         * 设置显示对象的宽和高
         * @method setWH
         * @public
         * @since 1.0.0
         * @param {number} w
         * @param {number} h
         */
        DisplayObject.prototype.setWH = function (w, h) {
            var s = this;
            var wh = s.getWH();
            if (w != 0) {
                var sx = w / wh.width;
                s.scaleX *= sx;
            }
            if (h != 0) {
                var sy = h / wh.height;
                s.scaleY *= sy;
            }
        };
        /**
         * 为了hitTestPoint，localToGlobal，globalToLocal等方法不复新不重复生成新的点对象而节约内存
         * @type {annie.Point}
         * @private
         * @static
         */
        DisplayObject._bp = new annie.Point();
        /**
         * 画缓存位图的时候需要使用
         * @property _bitmapCanvas
         * @private
         * @static
         * @since 1.0.0
         * @type {Canvas}
         */
        DisplayObject._canvas = window.document.createElement("canvas");
        return DisplayObject;
    }(annie.EventDispatcher));
    annie.DisplayObject = DisplayObject;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * 利用 Bitmap() 构造函数，可以创建包含对 BitmapData 对象的引用的 Bitmap 对象。
     * 创建了 Bitmap 对象后，使用父 Sprite 实例的 addChild() 或 addChildAt() 方法将位图放在显示列表中。
     * 一个 Bitmap 对象可在若干 Bitmap 对象之中共享其 BitmapData 引用，
     * 与转换属性或旋转属性无关。由于能够创建引用相同 BitmapData 对象的多个 Bitmap 对象，
     * 因此，多个显示对象可以使用相同的复杂 BitmapData 对象，而不会因为每个显示对象实例使用一个 BitmapData 对象而产生内存开销。
     * @class annie.Bitmap
     * @public
     * @extends annie.DisplayObject
     * @since 1.0.0
     */
    var Bitmap = (function (_super) {
        __extends(Bitmap, _super);
        /**
         * 构造函数
         * @method Bitmap
         * @since 1.0.0
         * @public
         * @param {Image|Video|other} bitmapData 一个HTMl Image的实例
         * @param {annie.Rectangle} rect 设置显示Image的区域,不设置些值则全部显示Image的内容
         */
        function Bitmap(bitmapData, rect) {
            if (bitmapData === void 0) { bitmapData = null; }
            if (rect === void 0) { rect = null; }
            _super.call(this);
            /**
             * HTML的一个Image对象或者是canvas对象或者是video对象
             * @property bitmapData
             * @public
             * @since 1.0.0
             * @type {any}
             * @default null
             */
            this.bitmapData = null;
            /**
             * 有时候一张大图，我们只需要显示他的部分。其他不显示,对你可能猜到了
             * SpriteSheet就用到了这个属性。默认为null表示全尺寸显示bitmapData需要显示的范围
             * @property rect
             * @public
             * @since 1.0.0
             * @type {annie.Rectangle}
             * @default null
             */
            this.rect = null;
            /**
             * 缓存起来的纹理对象。最后真正送到渲染器去渲染的对象
             * @property _cacheImg
             * @private
             * @since 1.0.0
             * @type {any}
             * @default null
             */
            this._cacheImg = null;
            this._realCacheImg = null;
            /**
             * @property _cacheX
             * @private
             * @since 1.0.0
             * @type {number}
             * @default 0
             */
            this._cacheX = 0;
            /**
             * @property _cacheY
             * @private
             * @since 1.0.0
             * @type {number}
             * @default 0
             */
            this._cacheY = 0;
            /**
             * @property _isCache
             * @private
             * @since 1.0.0
             * @type {boolean}
             * @default false
             */
            this._isCache = false;
            var s = this;
            s.bitmapData = bitmapData;
            s.rect = rect;
        }
        /**
         * 重写渲染
         * @method render
         * @param {annie.IRender} renderObj
         * @public
         * @since 1.0.0
         */
        Bitmap.prototype.render = function (renderObj) {
            if (this._cacheImg) {
                renderObj.draw(this, 0);
            }
            //super.render();
        };
        /**
         * 重写刷新
         * @method update
         * @public
         * @since 1.0.0
         */
        Bitmap.prototype.update = function () {
            var s = this;
            _super.prototype.update.call(this);
            //滤镜
            if (s._isNeedUpdate) {
                if (!s.bitmapData || (s.bitmapData.nodeName == "IMG" && !s.bitmapData.complete))
                    return;
                if (s["cFilters"] && s["cFilters"].length > 0) {
                    if (!s._realCacheImg) {
                        s._realCacheImg = window.document.createElement("canvas");
                    }
                    var _canvas = s._realCacheImg;
                    var tr = s.rect;
                    var w = tr ? tr.width : s.bitmapData.width;
                    var h = tr ? tr.height : s.bitmapData.height;
                    var newW = w + 20;
                    var newH = h + 20;
                    _canvas.width = newW;
                    _canvas.height = newH;
                    _canvas.style.width = newW / annie.devicePixelRatio + "px";
                    _canvas.style.height = newH / annie.devicePixelRatio + "px";
                    var ctx = _canvas.getContext("2d");
                    ctx.clearRect(0, 0, newW, newH);
                    ctx.translate(10, 10);
                    ctx.shadowBlur = 0;
                    ctx.shadowColor = "#0";
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;
                    /////////////////////
                    var cf = s.cFilters;
                    var cfLen = cf.length;
                    for (var i = 0; i < cfLen; i++) {
                        if (s.cFilters[i].type == "Shadow") {
                            ctx.shadowBlur = cf[i].blur;
                            ctx.shadowColor = cf[i].color;
                            ctx.shadowOffsetX = cf[i].offsetX;
                            ctx.shadowOffsetY = cf[i].offsetY;
                            break;
                        }
                    }
                    ////////////////////
                    if (tr) {
                        ctx.drawImage(s.bitmapData, tr.x, tr.y, w, h, 0, 0, w, h);
                    }
                    else {
                        ctx.drawImage(s.bitmapData, 0, 0);
                    }
                    var len = s["cFilters"].length;
                    var imageData = ctx.getImageData(0, 0, newW, newH);
                    for (var i = 0; i < len; i++) {
                        var f = s["cFilters"][i];
                        f.drawFilter(imageData);
                    }
                    ctx.putImageData(imageData, 0, 0);
                    //s._realCacheImg.src = _canvas.toDataURL("image/png");
                    s._cacheImg = s._realCacheImg;
                    s._cacheX = -10;
                    s._cacheY = -10;
                    s._isCache = true;
                }
                else {
                    s._isCache = false;
                    s._cacheX = 0;
                    s._cacheY = 0;
                    s._cacheImg = s.bitmapData;
                }
                //给webgl更新新
                s._isNeedUpdate = false;
                annie.WGRender.setDisplayInfo(s, 0);
            }
        };
        /**
         * 重写getBounds
         * 获取Bitmap对象的Bounds
         * @method getBounds
         * @public
         * @since 1.0.0
         * @returns {annie.Rectangle}
         */
        Bitmap.prototype.getBounds = function () {
            var s = this;
            var r = new annie.Rectangle();
            if (s.rect) {
                r.width = s.rect.width;
                r.height = s.rect.height;
            }
            else {
                r.width = s.bitmapData ? s.bitmapData.width : 0;
                r.height = s.bitmapData ? s.bitmapData.height : 0;
            }
            return r;
        };
        /**
         * 从SpriteSheet的大图中剥离出单独的小图以供特殊用途
         * @method convertToImage
         * @static
         * @public
         * @since 1.0.0
         * @param {annie.Bitmap} bitmap
         * @return {Image}
         */
        Bitmap.convertToImage = function (bitmap) {
            if (!bitmap.bitmapData || (bitmap.bitmapData.nodeName == "IMG" && !bitmap.bitmapData.complete))
                return;
            if (!bitmap.rect) {
                return bitmap.bitmapData;
            }
            else {
                var _canvas = annie.DisplayObject._canvas;
                var w = bitmap.rect.width;
                var h = bitmap.rect.height;
                _canvas.width = w;
                _canvas.height = h;
                var ctx = _canvas.getContext("2d");
                var tr = bitmap.rect;
                ctx.clearRect(0, 0, w, h);
                ctx.drawImage(bitmap.bitmapData, tr.x, tr.y, w, h, 0, 0, w, h);
                var _realCacheImg = window.document.createElement("img");
                _realCacheImg.src = _canvas.toDataURL("image/png");
                return _realCacheImg;
            }
        };
        return Bitmap;
    }(annie.DisplayObject));
    annie.Bitmap = Bitmap;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * 矢量对象
     * @class annie.Shape
     * @extends annie.DisplayObject
     * @since 1.0.0
     * @public
     */
    var Shape = (function (_super) {
        __extends(Shape, _super);
        function Shape() {
            _super.call(this);
            /**
             * 一个数组，每个元素也是一个数组[类型 0是属性,1是方法,名字 执行的属性或方法名,参数]
             * @property _command
             * @private
             * @since 1.0.0
             * @type {Array}
             * @default []
             */
            this._command = [];
            /**
             * @property _cacheCanvas
             * @since 1.0.0
             * @private
             * @type {Canvas}
             */
            this._cacheImg = window.document.createElement("canvas");
            this._cacheX = 0;
            this._cacheY = 0;
            /**
             * 碰撞或鼠标点击时的检测精度,为false只会粗略检测,如果形状规则,建议使用,检测速度快。
             * 为true则会进行像素检测,只会检测有像素区域,检测效果好,建议需要严格的点击碰撞检测
             * @property hitPixel
             * @public
             * @since 1.0.0
             * @type {boolean}
             * @default true
             */
            this.hitPixel = true;
            /**
             * 径向渐变填充 一般给Flash2x用
             * @method beginRadialGradientFill
             * @param {Array} colors 一组颜色值
             * @param {Array} ratios 一组范围比例值
             * @param {Array} points 一组点
             * @public
             * @since 1.0.0
             */
            this.beginRadialGradientFill = function (colors, ratios, points) {
                this._fill(Shape.getGradientColor(colors, ratios, points));
            };
            /**
             * 画径向渐变的线条 一般给Flash2x用
             * @method beginRadialGradientStroke
             * @param {Array} colors 一组颜色值
             * @param {Array} ratios 一组范围比例值
             * @param {Array} points 一组点
             * @param {number} lineWidth
             * @public
             * @since 1.0.0
             */
            this.beginRadialGradientStroke = function (colors, ratios, points, lineWidth) {
                if (lineWidth === void 0) { lineWidth = 1; }
                this._stroke(Shape.getGradientColor(colors, ratios, points), lineWidth);
            };
            /**
             * 解析一段路径 一般给Flash2x用
             * @method decodePath
             * @param {string} data
             * @public
             * @since 1.0.0
             */
            this.decodePath = function (data) {
                var s = this;
                var instructions = ["moveTo", "lineTo", "quadraticCurveTo", "bezierCurveTo", "closePath"];
                var paramCount = [2, 2, 4, 6, 0];
                var i = 0, l = data.length;
                var params;
                var x = 0, y = 0;
                var base64 = Shape.BASE_64;
                while (i < l) {
                    var c = data.charAt(i);
                    var n = base64[c];
                    var fi = n >> 3; // highest order bits 1-3 code for operation.
                    var f = instructions[fi];
                    // check that we have a valid instruction & that the unused bits are empty:
                    if (!f || (n & 3)) {
                        throw ("bad path data (@" + i + "): " + c);
                    }
                    var pl = paramCount[fi];
                    if (!fi) {
                        x = y = 0;
                    } // move operations reset the position.
                    params = [];
                    i++;
                    var charCount = (n >> 2 & 1) + 2; // 4th header bit indicates number size for this operation.
                    for (var p = 0; p < pl; p++) {
                        var num = base64[data.charAt(i)];
                        var sign = (num >> 5) ? -1 : 1;
                        num = ((num & 31) << 6) | (base64[data.charAt(i + 1)]);
                        if (charCount == 3) {
                            num = (num << 6) | (base64[data.charAt(i + 2)]);
                        }
                        num = sign * num / 10;
                        if (p % 2) {
                            x = (num += x);
                        }
                        else {
                            y = (num += y);
                        }
                        params[p] = num;
                        i += charCount;
                    }
                    s.addDraw(f, params);
                }
            };
        }
        /**
         * 通过一系统参数获取生成颜色或渐变所需要的对象
         * 一般给用户使用较少,Flash2x工具自动使用
         * @method getGradientColor
         * @static
         * @param {string} colors
         * @param {number}ratios
         * @param {annie.Point} points
         * @returns {any}
         * @since 1.0.0
         * @pubic
         */
        Shape.getGradientColor = function (colors, ratios, points) {
            var colorObj;
            var ctx = annie.DisplayObject["_canvas"].getContext("2d");
            if (points.length == 4) {
                colorObj = ctx.createLinearGradient(points[0], points[1], points[2], points[3]);
            }
            else {
                colorObj = ctx.createRadialGradient(points[0], points[1], points[2], points[3], points[4], points[5]);
            }
            for (var i = 0, l = colors.length; i < l; i++) {
                colorObj.addColorStop(ratios[i], colors[i]);
            }
            return colorObj;
        };
        /**
         * 设置位图填充时需要使用的方法,一般给用户使用较少,Flash2x工具自动使用
         * @method getBitmapStyle
         * @static
         * @param {Image} image HTML Image元素
         * @returns {CanvasPattern}
         * @public
         * @since 1.0.0
         */
        Shape.getBitmapStyle = function (image) {
            var ctx = annie.DisplayObject["_canvas"].getContext("2d");
            return ctx.createPattern(image, "repeat");
        };
        /**
         * 通过24位颜色值和一个透明度值生成RGBA值
         * @method getRGBA
         * @static
         * @public
         * @since 1.0.0
         * @param {string} color 字符串的颜色值,如:#33ffee
         * @param {number} alpha 0-1区间的一个数据 0完全透明 1完全不透明
         * @returns {string}
         */
        Shape.getRGBA = function (color, alpha) {
            if (color.indexOf("0x") == 0) {
                color = color.replace("0x", "#");
            }
            if (color.length < 7) {
                color = "#000000";
            }
            if (alpha != 1) {
                var r = parseInt("0x" + color.substr(1, 2));
                var g = parseInt("0x" + color.substr(3, 2));
                var b = parseInt("0x" + color.substr(5, 2));
                color = "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
            }
            return color;
        };
        /**
         * 添加一条绘画指令,具体可以查阅Html Canvas画图方法
         * @method addDraw
         * @param {string} commandName ctx指令的方法名 如moveTo lineTo arcTo等
         * @param {Array} params
         * @public
         * @since 1.0.0
         */
        Shape.prototype.addDraw = function (commandName, params) {
            var s = this;
            s._isNeedUpdate = true;
            s._command.push([1, commandName, params]);
        };
        /**
         * 画一个带圆角的矩形
         * @method drawRoundRect
         * @param {number} x 点x值
         * @param {number} y 点y值
         * @param {number} w 宽
         * @param {number} h 高
         * @param {number} rTL 左上圆角半径
         * @param {number} rTR 右上圆角半径
         * @param {number} rBL 左下圆角半径
         * @param {number} rBR 右上圆角半径
         * @public
         * @since 1.0.0
         */
        Shape.prototype.drawRoundRect = function (x, y, w, h, rTL, rTR, rBL, rBR) {
            if (rTL === void 0) { rTL = 0; }
            if (rTR === void 0) { rTR = 0; }
            if (rBL === void 0) { rBL = 0; }
            if (rBR === void 0) { rBR = 0; }
            //var ctx = DisplayObject._canvas.getContext("2d");
            var max = (w < h ? w : h) / 2;
            var mTL = 0, mTR = 0, mBR = 0, mBL = 0;
            if (rTL < 0) {
                rTL *= (mTL = -1);
            }
            if (rTL > max) {
                rTL = max;
            }
            if (rTR < 0) {
                rTR *= (mTR = -1);
            }
            if (rTR > max) {
                rTR = max;
            }
            if (rBR < 0) {
                rBR *= (mBR = -1);
            }
            if (rBR > max) {
                rBR = max;
            }
            if (rBL < 0) {
                rBL *= (mBL = -1);
            }
            if (rBL > max) {
                rBL = max;
            }
            var c = this._command;
            c.push([1, "moveTo", [x + w - rTR, y]]);
            c.push([1, "arcTo", [x + w + rTR * mTR, y - rTR * mTR, x + w, y + rTR, rTR]]);
            c.push([1, "lineTo", [x + w, y + h - rBR]]);
            c.push([1, "arcTo", [x + w + rBR * mBR, y + h + rBR * mBR, x + w - rBR, y + h, rBR]]);
            c.push([1, "lineTo", [x + rBL, y + h]]);
            c.push([1, "arcTo", [x - rBL * mBL, y + h + rBL * mBL, x, y + h - rBL, rBL]]);
            c.push([1, "lineTo", [x, y + rTL]]);
            c.push([1, "arcTo", [x - rTL * mTL, y - rTL * mTL, x + rTL, y, rTL]]);
            c.push([1, "closePath", []]);
        };
        /**
         * 绘画时移动到某一点
         * @method moveTo
         * @param {number} x
         * @param {number} y
         * @public
         * @since 1.0.0
         */
        Shape.prototype.moveTo = function (x, y) {
            this._command.push([1, "moveTo", [x, y]]);
        };
        /**
         * 从上一点画到某一点,如果没有设置上一点，则上一占默认为(0,0)
         * @method lineTo
         * @param {number} x
         * @param {number} y
         * @public
         * @since 1.0.0
         */
        Shape.prototype.lineTo = function (x, y) {
            this._command.push([1, "lineTo", [x, y]]);
        };
        /**
         * 从上一点画弧到某一点,如果没有设置上一点，则上一占默认为(0,0)
         * @method arcTo
         * @param {number} x
         * @param {number} y
         * @public
         * @since 1.0.0
         */
        Shape.prototype.arcTo = function (x, y) {
            this._command.push([1, "arcTo", [x, y]]);
        };
        /**
         * 二次贝赛尔曲线
         * 从上一点画二次贝赛尔曲线到某一点,如果没有设置上一点，则上一占默认为(0,0)
         * @method quadraticCurveTo
         * @param {number} cpX 控制点X
         * @param {number} cpX 控制点Y
         * @param {number} x 终点X
         * @param {number} y 终点Y
         * @public
         * @since 1.0.0
         */
        Shape.prototype.quadraticCurveTo = function (cpX, cpY, x, y) {
            this._command.push([1, "quadraticCurveTo", [cpX, cpY, x, y]]);
        };
        /**
         * 三次贝赛尔曲线
         * 从上一点画二次贝赛尔曲线到某一点,如果没有设置上一点，则上一占默认为(0,0)
         * @method bezierCurveTo
         * @param {number} cp1X 1控制点X
         * @param {number} cp1Y 1控制点Y
         * @param {number} cp2X 2控制点X
         * @param {number} cp2Y 2控制点Y
         * @param {number} x 终点X
         * @param {number} y 终点Y
         * @public
         * @since 1.0.0
         */
        Shape.prototype.bezierCurveTo = function (cp1X, cp1Y, cp2X, cp2Y, x, y) {
            this._command.push([1, "bezierCurveTo", [cp1X, cp1Y, cp2X, cp2Y, x, y]]);
        };
        /**
         * 闭合一个绘画路径
         * @method closePath
         * @public
         * @since 1.0.0
         */
        Shape.prototype.closePath = function () {
            this._command.push([1, "closePath", []]);
        };
        /**
         * 画一个矩形
         * @method drawRect
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @public
         * @since 1.0.0
         */
        Shape.prototype.drawRect = function (x, y, w, h) {
            var c = this._command;
            c.push([1, "moveTo", [x, y]]);
            c.push([1, "lineTo", [x + w, y]]);
            c.push([1, "lineTo", [x + w, y + h]]);
            c.push([1, "lineTo", [x, y + h]]);
            c.push([1, "closePath", []]);
        };
        /**
         * 画一个弧形
         * @method drawArc
         * @param {number} x 起始点x
         * @param {number} y 起始点y
         * @param {number} radius 半径
         * @param {number} start 开始角度
         * @param {number} end 结束角度
         * @public
         * @since 1.0.0
         */
        Shape.prototype.drawArc = function (x, y, radius, start, end) {
            this._command.push([1, "arc", [x, y, radius, start / 180 * Math.PI, end / 180 * Math.PI]]);
        };
        /**
         * 画一个圆
         * @method drawCircle
         * @param {number} x 圆心x
         * @param {number} y 圆心y
         * @param {number} radius 半径
         * @public
         * @since 1.0.0
         */
        Shape.prototype.drawCircle = function (x, y, radius) {
            this._command.push([1, "arc", [x, y, radius, 0, 2 * Math.PI]]);
        };
        /**
         * 画一个椭圆
         * @method drawEllipse
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @public
         * @since 1.0.0
         */
        Shape.prototype.drawEllipse = function (x, y, w, h) {
            var k = 0.5522848;
            var ox = (w / 2) * k;
            var oy = (h / 2) * k;
            var xe = x + w;
            var ye = y + h;
            var xm = x + w / 2;
            var ym = y + h / 2;
            var c = this._command;
            c.push([1, "moveTo", [x, ym]]);
            c.push([1, "bezierCurveTo", [x, ym - oy, xm - ox, y, xm, y]]);
            c.push([1, "bezierCurveTo", [xm + ox, y, xe, ym - oy, xe, ym]]);
            c.push([1, "bezierCurveTo", [xe, ym + oy, xm + ox, ye, xm, ye]]);
            c.push([1, "bezierCurveTo", [xm - ox, ye, x, ym + oy, x, ym]]);
        };
        /**
         * 清除掉之前所有绘画的东西
         * @method clear
         * @public
         * @since 1.0.0
         */
        Shape.prototype.clear = function () {
            var s = this;
            s._command = [];
            s._isNeedUpdate = true;
        };
        /**
         * 开始绘画填充,如果想画的东西有颜色填充,一定要从此方法开始
         * @method beginFill
         * @param {string} color 颜色值 单色和RGBA格式
         * @public
         * @since 1.0.0
         */
        Shape.prototype.beginFill = function (color) {
            this._fill(color);
        };
        /**
         * 线性渐变填充 一般给Flash2x用
         * @method beginLinearGradientFill
         * @param {Array} colors 一组颜色值
         * @param {Array} ratios 一组范围比例值
         * @param {Array} points 一组点
         * @public
         * @since 1.0.0
         */
        Shape.prototype.beginLinearGradientFill = function (colors, ratios, points) {
            this._fill(Shape.getGradientColor(colors, ratios, points));
        };
        /**
         * 位图填充 一般给Flash2x用
         * @method beginBitmapFill
         * @param {Image} image
         * @param {annie.Matrix} matrix
         * @public
         * @since 1.0.0
         */
        Shape.prototype.beginBitmapFill = function (image, matrix) {
            var s = this;
            if (matrix) {
                s._isBitmapFill = matrix;
            }
            s._fill(Shape.getBitmapStyle(image));
        };
        Shape.prototype._fill = function (fillStyle) {
            var c = this._command;
            c.push([0, "fillStyle", fillStyle]);
            c.push([1, "beginPath", []]);
            this._isNeedUpdate = true;
        };
        /**
         * 给线条着色
         * @method beginStroke
         * @param {string} color
         * @param {number} lineWidth
         * @public
         * @since 1.0.0
         */
        Shape.prototype.beginStroke = function (color, lineWidth) {
            if (lineWidth === void 0) { lineWidth = 1; }
            this._stroke(color, lineWidth);
        };
        /**
         * 画线性渐变的线条 一般给Flash2x用
         * @method beginLinearGradientStroke
         * @param {Array} colors 一组颜色值
         * @param {Array} ratios 一组范围比例值
         * @param {Array} points 一组点
         * @param {number} lineWidth
         * @public
         * @since 1.0.0
         */
        Shape.prototype.beginLinearGradientStroke = function (colors, ratios, points, lineWidth) {
            if (lineWidth === void 0) { lineWidth = 1; }
            this._stroke(Shape.getGradientColor(colors, ratios, points), lineWidth);
        };
        /**
         * 线条位图填充 一般给Flash2x用
         * @method beginBitmapStroke
         * @param {Image} image
         * @param {annie.Matrix} matrix
         * @param {number} lineWidth
         * @public
         * @since 1.0.0
         */
        Shape.prototype.beginBitmapStroke = function (image, matrix, lineWidth) {
            if (lineWidth === void 0) { lineWidth = 1; }
            var s = this;
            if (matrix) {
                s._isBitmapStroke = matrix;
            }
            s._stroke(Shape.getBitmapStyle(image), lineWidth);
        };
        Shape.prototype._stroke = function (strokeStyle, width) {
            var c = this._command;
            c.push([0, "lineWidth", width]);
            c.push([0, "strokeStyle", strokeStyle]);
            c.push([1, "beginPath", []]);
            this._isNeedUpdate = true;
        };
        /**
         * 结束填充
         * @method endFill
         * @public
         * @since 1.0.0
         */
        Shape.prototype.endFill = function () {
            var s = this;
            var c = s._command;
            var m = s._isBitmapFill;
            if (m) {
                //c.push([1, "save", []]);
                c.push([2, "setTransform", [m.a, m.b, m.c, m.d, m.tx, m.ty]]);
            }
            c.push([1, "fill", []]);
            if (m) {
                s._isBitmapFill = null;
            }
        };
        /**
         * 结束画线
         * @method endStroke
         * @public
         * @since 1.0.0
         */
        Shape.prototype.endStroke = function () {
            var s = this;
            var c = s._command;
            var m = s._isBitmapStroke;
            if (m) {
                //c.push([1, "save", []]);
                //如果为2则还需要特别处理
                c.push([2, "setTransform", [m.a, m.b, m.c, m.d, m.tx, m.ty]]);
            }
            c.push([1, "stroke", []]);
            if (m) {
                s._isBitmapStroke = null;
            }
        };
        /**
         * 重写渲染
         * @method render
         * @param {annie.IRender} renderObj
         * @public
         * @since 1.0.0
         */
        Shape.prototype.render = function (renderObj) {
            var s = this;
            if (s._cacheImg.src != "") {
                renderObj.draw(s, 1);
            }
            //super.render();
        };
        /**
         * 重写刷新
         * @method update
         * @public
         * @since 1.0.0
         */
        Shape.prototype.update = function () {
            var s = this;
            _super.prototype.update.call(this);
            if (s._isNeedUpdate) {
                //更新缓存
                var cLen = s._command.length;
                var leftX;
                var leftY;
                var buttonRightX;
                var buttonRightY;
                var i;
                if (cLen > 0) {
                    //确定是否有数据,如果有数据的话就计算出缓存图的宽和高
                    var data;
                    var lastX = 0;
                    var lastY = 0;
                    var lineWidth = 0;
                    for (i = 0; i < cLen; i++) {
                        data = s._command[i];
                        if (data[0] == 1) {
                            if (data[1] == "moveTo" || data[1] == "lineTo" || data[1] == "arcTo" || data[1] == "bezierCurveTo") {
                                if (leftX == undefined) {
                                    leftX = data[2][0];
                                }
                                if (leftY == undefined) {
                                    leftY = data[2][1];
                                }
                                if (buttonRightX == undefined) {
                                    buttonRightX = data[2][0];
                                }
                                if (buttonRightY == undefined) {
                                    buttonRightY = data[2][1];
                                }
                                if (data[1] == "bezierCurveTo") {
                                    leftX = Math.min(leftX, data[2][0], data[2][2], data[2][4]);
                                    leftY = Math.min(leftY, data[2][1], data[2][3], data[2][5]);
                                    buttonRightX = Math.max(buttonRightX, data[2][0], data[2][2], data[2][4]);
                                    buttonRightY = Math.max(buttonRightY, data[2][1], data[2][3], data[2][5]);
                                    lastX = data[2][4];
                                    lastY = data[2][5];
                                }
                                else {
                                    leftX = Math.min(leftX, data[2][0]);
                                    leftY = Math.min(leftY, data[2][1]);
                                    buttonRightX = Math.max(buttonRightX, data[2][0]);
                                    buttonRightY = Math.max(buttonRightY, data[2][1]);
                                    lastX = data[2][0];
                                    lastY = data[2][1];
                                }
                            }
                            else if (data[1] == "quadraticCurveTo") {
                                //求中点
                                var mid1X = (lastX + data[2][0]) * 0.5;
                                var mid1Y = (lastX + data[2][1]) * 0.5;
                                var mid2X = (data[2][0] + data[2][2]) * 0.5;
                                var mid2Y = (data[2][1] + data[2][3]) * 0.5;
                                if (leftX == undefined) {
                                    leftX = mid1X;
                                }
                                if (leftY == undefined) {
                                    leftY = mid1Y;
                                }
                                if (buttonRightX == undefined) {
                                    buttonRightX = mid1X;
                                }
                                if (buttonRightY == undefined) {
                                    buttonRightY = mid1Y;
                                }
                                leftX = Math.min(leftX, mid1X, mid2X, data[2][2]);
                                leftY = Math.min(leftY, mid1Y, mid2Y, data[2][3]);
                                buttonRightX = Math.max(buttonRightX, mid1X, mid2X, data[2][2]);
                                buttonRightY = Math.max(buttonRightY, mid1Y, mid2Y, data[2][3]);
                                lastX = data[2][2];
                                lastY = data[2][3];
                            }
                            else if (data[1] == "arc") {
                                var yuanPointX = data[2][0];
                                var yuanPointY = data[2][1];
                                var radio = data[2][2];
                                var yuanLeftX = yuanPointX - radio;
                                var yuanLeftY = yuanPointY - radio;
                                var yuanBRX = yuanPointX + radio;
                                var yuanBRY = yuanPointY + radio;
                                if (leftX == undefined) {
                                    leftX = yuanLeftX;
                                }
                                if (leftY == undefined) {
                                    leftY = yuanLeftY;
                                }
                                if (buttonRightX == undefined) {
                                    buttonRightX = yuanBRX;
                                }
                                if (buttonRightY == undefined) {
                                    buttonRightY = yuanBRY;
                                }
                                leftX = Math.min(leftX, yuanLeftX);
                                leftY = Math.min(leftY, yuanLeftY);
                                buttonRightX = Math.max(buttonRightX, yuanBRX);
                                buttonRightY = Math.max(buttonRightY, yuanBRY);
                            }
                        }
                        else {
                            if (data[1] == "lineWidth") {
                                if (lineWidth < data[2]) {
                                    lineWidth = data[2];
                                }
                            }
                        }
                    }
                    if (leftX != undefined) {
                        leftX -= 20 + lineWidth >> 1;
                        leftY -= 20 + lineWidth >> 1;
                        buttonRightX += 20 + lineWidth >> 1;
                        buttonRightY += 20 + lineWidth >> 1;
                        var w = buttonRightX - leftX;
                        var h = buttonRightY - leftY;
                        s._cacheX = leftX;
                        s._cacheY = leftY;
                        ///////////////////////////
                        var _canvas = s._cacheImg;
                        _canvas.width = w;
                        _canvas.height = h;
                        _canvas.style.width = w / annie.devicePixelRatio + "px";
                        _canvas.style.height = h / annie.devicePixelRatio + "px";
                        var ctx = _canvas["getContext"]('2d');
                        ctx.clearRect(0, 0, w, h);
                        ctx.setTransform(1, 0, 0, 1, -leftX, -leftY);
                        /////////////////////
                        if (s["cFilters"] && s["cFilters"].length > 0) {
                            var cf = s.cFilters;
                            var cfLen = cf.length;
                            for (var i = 0; i < cfLen; i++) {
                                if (s.cFilters[i].type == "Shadow") {
                                    ctx.shadowBlur += cf[i].blur;
                                    ctx.shadowColor += cf[i].color;
                                    ctx.shadowOffsetX += cf[i].offsetX;
                                    ctx.shadowOffsetY += cf[i].offsetY;
                                    break;
                                }
                            }
                        }
                        else {
                            ctx.shadowBlur = 0;
                            ctx.shadowColor = "#0";
                            ctx.shadowOffsetX = 0;
                            ctx.shadowOffsetY = 0;
                        }
                        ////////////////////
                        var data;
                        for (i = 0; i < cLen; i++) {
                            data = s._command[i];
                            if (data[0] > 0) {
                                var paramsLen = data[2].length;
                                if (paramsLen == 0) {
                                    ctx[data[1]]();
                                }
                                else if (paramsLen == 2) {
                                    ctx[data[1]](data[2][0], data[2][1]);
                                }
                                else if (paramsLen == 4) {
                                    ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3]);
                                }
                                else if (paramsLen == 5) {
                                    ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3], data[2][4]);
                                }
                                else if (paramsLen == 6) {
                                    if (data[0] == 2) {
                                        //位图填充
                                        data[2][4] -= leftX;
                                        data[2][5] -= leftY;
                                    }
                                    ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3], data[2][4], data[2][5]);
                                }
                            }
                            else {
                                ctx[data[1]] = data[2];
                            }
                        }
                        ///////////////////////////
                        //滤镜
                        if (s["cFilters"] && s["cFilters"].length > 0) {
                            var len = s["cFilters"].length;
                            var imageData = ctx.getImageData(0, 0, w, h);
                            for (var i = 0; i < len; i++) {
                                var f = s["cFilters"][i];
                                f.drawFilter(imageData);
                            }
                            ctx.putImageData(imageData, 0, 0);
                        }
                    }
                    else {
                        s._cacheImg.width = 0;
                        s._cacheImg.height = 0;
                        s._cacheX = 0;
                        s._cacheY = 0;
                    }
                }
                else {
                    s._cacheImg.width = 0;
                    s._cacheImg.height = 0;
                    s._cacheX = 0;
                    s._cacheY = 0;
                }
                s._isNeedUpdate = false;
                annie.WGRender.setDisplayInfo(s, 1);
            }
        };
        /*private _drawPath(){
            var s=this;
            var leftX:number=s._cacheX,leftY:number=s._cacheY,w:number=s._cacheW,h:number=s._cacheH;
            var _canvas = DisplayObject._canvas;
            _canvas.width = w;
            _canvas.height = h;
            var ctx = _canvas["getContext"]('2d');
            ctx.setTransform(1, 0, 0, 1, -leftX, -leftY);
            ctx.clearRect(leftX, leftY, w + 1, h + 1);
            var data;
            var cLen:number=s._command.length;
            for (var i = 0; i < cLen; i++) {
                data = s._command[i];
                if (data[0]>0) {
                    var paramsLen = data[2].length;
                    if (paramsLen == 0) {
                        ctx[data[1]]();
                    } else if (paramsLen == 2) {
                        ctx[data[1]](data[2][0], data[2][1]);
                    } else if (paramsLen == 4) {
                        ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3]);
                    }else if(paramsLen==5){
                        ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3], data[2][4]);
                    }else if(paramsLen==6){
                        if(data[0]==2){
                            //位图填充
                            data[2][4]-=leftX;
                            data[2][5]-=leftY;
                        }
                        ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3], data[2][4], data[2][5]);
                    }
                }else {
                    ctx[data[1]] = data[2];
                }
            }
        }*/
        /**
         * 重写getBounds
         * @method getBounds
         * @public
         * @since 1.0.0
         * @returns {annie.Rectangle}
         */
        Shape.prototype.getBounds = function () {
            var s = this;
            var r = new annie.Rectangle();
            if (s._cacheImg) {
                r.x = s._cacheX + 20;
                r.y = s._cacheY + 20;
                r.width = s._cacheImg.width - 20;
                r.height = s._cacheImg.height - 20;
            }
            return r;
        };
        /**
         * 重写hitTestPoint
         * @method  hitTestPoint
         * @param {annie.Point} globalPoint
         * @param {boolean} isMouseEvent
         * @returns {any}
         * @public
         * @since 1.0.0
         */
        Shape.prototype.hitTestPoint = function (globalPoint, isMouseEvent) {
            if (isMouseEvent === void 0) { isMouseEvent = false; }
            var s = this;
            if (isMouseEvent && !s.mouseEnable)
                return null;
            //如果都不在缓存范围内,那就更不在矢量范围内了;如果在则继续看
            var p = s.globalToLocal(globalPoint, annie.DisplayObject._bp);
            if (s.getBounds().isPointIn(p)) {
                if (!s.hitPixel) {
                    return s;
                }
                //继续检测
                var _canvas = annie.DisplayObject["_canvas"];
                _canvas.width = 1;
                _canvas.height = 1;
                var ctx = _canvas["getContext"]('2d');
                ctx.clearRect(0, 0, 1, 1);
                ctx.setTransform(1, 0, 0, 1, s._cacheX - p.x, s._cacheY - p.y);
                ctx.drawImage(s._cacheImg, 0, 0);
                if (ctx.getImageData(0, 0, 1, 1).data[3] > 0) {
                    return s;
                }
                ;
            }
            return null;
        };
        /**
         * 如果有的话,改变矢量对象的边框或者填充的颜色.
         * @method changeColor
         * @param {Object} infoObj
         * @param {string} infoObj.fillColor 填充颜色值，如"#fff" 或者 "rgba(255,255,255,1)";
         * @param {string} infoObj.strokeColor 线条颜色值，如"#fff" 或者 "rgba(255,255,255,1)";
         * @param {number} infoObj.lineWidth 线条的粗细，如"1,2,3...";
         * @public
         * @since 1.0.2
         */
        Shape.prototype.changeColor = function (infoObj) {
            var s = this;
            var cLen = s._command.length;
            var c = s._command;
            for (var i = 0; i < cLen; i++) {
                if (c[i][0] == 0) {
                    if (c[i][1] == "fillStyle" && infoObj.fillColor && c[i][2] != infoObj.fillColor) {
                        c[i][2] = infoObj.fillColor;
                        s._isNeedUpdate = true;
                    }
                    if (c[i][1] == "strokeStyle" && infoObj.strokeColor && c[i][2] != infoObj.strokeColor) {
                        c[i][2] = infoObj.strokeColor;
                        s._isNeedUpdate = true;
                    }
                    if (c[i][1] == "lineWidth" && infoObj.lineWidth && c[i][2] != infoObj.lineWidth) {
                        c[i][2] = infoObj.lineWidth;
                        s._isNeedUpdate = true;
                    }
                }
            }
        };
        Shape.BASE_64 = {
            "A": 0,
            "B": 1,
            "C": 2,
            "D": 3,
            "E": 4,
            "F": 5,
            "G": 6,
            "H": 7,
            "I": 8,
            "J": 9,
            "K": 10,
            "L": 11,
            "M": 12,
            "N": 13,
            "O": 14,
            "P": 15,
            "Q": 16,
            "R": 17,
            "S": 18,
            "T": 19,
            "U": 20,
            "V": 21,
            "W": 22,
            "X": 23,
            "Y": 24,
            "Z": 25,
            "a": 26,
            "b": 27,
            "c": 28,
            "d": 29,
            "e": 30,
            "f": 31,
            "g": 32,
            "h": 33,
            "i": 34,
            "j": 35,
            "k": 36,
            "l": 37,
            "m": 38,
            "n": 39,
            "o": 40,
            "p": 41,
            "q": 42,
            "r": 43,
            "s": 44,
            "t": 45,
            "u": 46,
            "v": 47,
            "w": 48,
            "x": 49,
            "y": 50,
            "z": 51,
            "0": 52,
            "1": 53,
            "2": 54,
            "3": 55,
            "4": 56,
            "5": 57,
            "6": 58,
            "7": 59,
            "8": 60,
            "9": 61,
            "+": 62,
            "/": 63
        };
        return Shape;
    }(annie.DisplayObject));
    annie.Shape = Shape;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * 显示对象的容器类,可以将其他显示对象放入其中,是annie引擎的核心容器类.
     * Sprite 类是基本显示列表构造块：一个可显示图形并且也可包含子项的显示列表节点。
     * Sprite 对象与影片剪辑类似，但没有时间轴。Sprite 是不需要时间轴的对象的相应基类。
     * 例如，Sprite 将是通常不使用时间轴的用户界面 (UI) 组件的逻辑基类
     * @class annie.Sprite
     * @extends annie.DisplayObject
     * @public
     * @since 1.0.0
     */
    var Sprite = (function (_super) {
        __extends(Sprite, _super);
        function Sprite() {
            _super.call(this);
            /**
             * 是否可以让children接收鼠标事件
             * @property mouseChildren
             * @type {boolean}
             * @default true
             * @public
             * @since 1.0.0
             */
            this.mouseChildren = true;
            /**
             * 显示对象的child列表
             * @property children
             * @type {Array}
             * @public
             * @since 1.0.0
             * @default []
             * @readonly
             */
            this.children = [];
        }
        /**
         * 添加一个显示对象到Sprite
         * @method addChild
         * @param {annie.DisplayObject} child
         * @public
         * @since 1.0.0
         */
        Sprite.prototype.addChild = function (child) {
            this.addChildAt(child, this.children.length);
        };
        /**
         * 从Sprite中移除一个child
         * @method removeChild
         * @public
         * @since 1.0.0
         * @param {annie.DisplayObject} child
         */
        Sprite.prototype.removeChild = function (child) {
            var s = this;
            var len = s.children.length;
            for (var i = 0; i < len; i++) {
                if (s.children[i] == child) {
                    s.removeChildAt(i);
                    break;
                }
            }
        };
        //全局遍历
        Sprite._getElementsByName = function (rex, root, isOnlyOne, isRecursive, resultList) {
            var len = root.children.length;
            if (len > 0) {
                var name;
                var child;
                for (var i = 0; i < len; i++) {
                    child = root.children[i];
                    name = child.name;
                    if (name && name != "") {
                        if (rex.test(name)) {
                            resultList.push(child);
                            if (isOnlyOne) {
                                return;
                            }
                        }
                    }
                    if (isRecursive) {
                        if (child["children"] != null) {
                            Sprite._getElementsByName(rex, child, isOnlyOne, isRecursive, resultList);
                        }
                    }
                }
            }
        };
        /**
         * 通过给displayObject设置的名字来获取一个child,可以使用正则匹配查找
         * @method getChildByName
         * @param {string} name 对象的具体名字或是一个正则表达式
         * @param {boolean} isOnlyOne 默认为true,如果为true,只返回最先找到的对象,如果为false则会找到所有匹配的对象数组
         * @param {boolean} isRecursive false,如果为true,则会递归查找下去,而不只是查找当前对象中的child,child里的child也会找,依此类推
         * @returns {any} 返回一个对象,或者一个对象数组,没有找到则返回空
         * @public
         * @since 1.0.0
         */
        Sprite.prototype.getChildByName = function (name, isOnlyOne, isRecursive) {
            if (isOnlyOne === void 0) { isOnlyOne = true; }
            if (isRecursive === void 0) { isRecursive = false; }
            if (!name)
                return null;
            var s = this;
            var rex;
            if (typeof (name) == "string") {
                rex = new RegExp("^" + name + "$");
            }
            else {
                rex = name;
            }
            var elements = [];
            Sprite._getElementsByName(rex, s, isOnlyOne, isRecursive, elements);
            var len = elements.length;
            if (len == 0) {
                return null;
            }
            else if (len == 1) {
                return elements[0];
            }
            else {
                return elements;
            }
        };
        /**
         * 添加一个child到Sprite中并指定添加到哪个层级
         * @method addChildAt
         * @param {annie.DisplayObject} child
         * @param {number} index 从0开始
         * @pubic
         * @since 1.0.0
         */
        Sprite.prototype.addChildAt = function (child, index) {
            var s = this;
            var sameParent = s == child.parent;
            var len;
            if (child.parent) {
                if (!sameParent) {
                    child.parent.removeChild(child);
                }
                else {
                    len = s.children.length;
                    for (var i = 0; i < len; i++) {
                        if (s.children[i] == child) {
                            s.children.splice(i, 1);
                            break;
                        }
                    }
                }
            }
            child.parent = s;
            len = s.children.length;
            if (index >= len) {
                s.children.push(child);
            }
            else if (index == 0) {
                s.children.unshift(child);
            }
            else {
                s.children.splice(index, 0, child);
            }
            if (s.stage && !sameParent) {
                child._onDispatchBubbledEvent("onAddToStage");
            }
        };
        /**
         * 获取Sprite中指定层级一个child
         * @method getChildAt
         * @param {number} index 从0开始
         * @pubic
         * @since 1.0.0
         * @return {annie.DisplayObject}
         */
        Sprite.prototype.getChildAt = function (index) {
            if ((this.children.length - 1) >= index) {
                return this.children[index];
            }
            else {
                return null;
            }
        };
        /**
         * 获取Sprite中一个child所在的层级索引，找到则返回索引数，未找到则返回-1
         * @method getChildIndex
         * @param {annie.DisplayObject} child 子对象
         * @pubic
         * @since 1.0.2
         * @return {number}
         */
        Sprite.prototype.getChildIndex = function (child) {
            var len = this.children.length;
            for (var i = 0; i < len; i++) {
                if (this.children[i] == child) {
                    return i;
                }
            }
            return -1;
        };
        /**
         * 调用此方法对Sprite及其child触发一次指定事件
         * @method _onDispatchBubbledEvent
         * @private
         * @param {string} type
         * @since 1.0.0
         */
        Sprite.prototype._onDispatchBubbledEvent = function (type) {
            var s = this;
            var len = s.children.length;
            s.stage = s.parent.stage;
            for (var i = 0; i < len; i++) {
                s.children[i]._onDispatchBubbledEvent(type);
            }
            _super.prototype._onDispatchBubbledEvent.call(this, type);
        };
        /**
         * 移除指定层级上的孩子
         * @method removeChildAt
         * @param {number} index 从0开始
         * @public
         * @since 1.0.0
         */
        Sprite.prototype.removeChildAt = function (index) {
            var s = this;
            var child;
            var len = s.children.length;
            if (len == 0)
                return;
            if (index == len) {
                child = s.children.pop();
            }
            else if (index == 0) {
                child = s.children.shift();
            }
            else {
                child = s.children.splice(index, 1)[0];
            }
            child._onDispatchBubbledEvent("onRemoveToStage");
            child.parent = null;
        };
        /**
         * 移除Sprite上的所有child
         * @method removeAllChildren
         * @public
         * @since 1.0.0
         */
        Sprite.prototype.removeAllChildren = function () {
            var s = this;
            var len = s.children.length;
            for (var i = len - 1; i >= 0; i--) {
                s.removeChildAt(i);
            }
        };
        /**
         * 重写刷新
         * @method update
         * @public
         * @since 1.0.0
         */
        Sprite.prototype.update = function () {
            var s = this;
            _super.prototype.update.call(this);
            var len = s.children.length;
            var child;
            for (var i = len - 1; i >= 0; i--) {
                child = s.children[i];
                //因为悬浮的html元素要时时更新来检查他的visible属性
                child.update();
            }
        };
        /**
         * 重写碰撞测试
         * @method hitTestPoint
         * @param {annie.Point} globalPoint
         * @param {boolean} isMouseEvent
         * @returns {any}
         * @public
         * @since 1.0.0
         */
        Sprite.prototype.hitTestPoint = function (globalPoint, isMouseEvent) {
            if (isMouseEvent === void 0) { isMouseEvent = false; }
            var s = this;
            if (!s.visible)
                return null;
            if (isMouseEvent && !s.mouseEnable)
                return null;
            var len = s.children.length;
            var hitDisplayObject;
            var child;
            //这里特别注意是从上往下遍历
            for (var i = len - 1; i >= 0; i--) {
                //TODO 这里要考虑遮罩
                child = s.children[i];
                if (child.mask) {
                    //看看点是否在遮罩内
                    if (!child.mask.hitTestPoint(globalPoint, isMouseEvent)) {
                        //如果都不在遮罩里面,那还检测什么直接检测下一个
                        continue;
                    }
                }
                hitDisplayObject = child.hitTestPoint(globalPoint, isMouseEvent);
                if (hitDisplayObject) {
                    return hitDisplayObject;
                }
            }
            return null;
        };
        /**
         * 重写getBounds
         * @method getBounds
         * @returns {any}
         * @since 1.0.0
         * @public
         */
        Sprite.prototype.getBounds = function () {
            var s = this;
            var len = s.children.length;
            if (len == 0) {
                return null;
            }
            var rect = s.children[0].getDrawRect();
            for (var i = 1; i < len; i++) {
                rect = annie.Rectangle.createFromRects(rect, s.children[i].getDrawRect());
            }
            return rect;
        };
        /**
         * 重写渲染
         * @method render
         * @param {annie.IRender} renderObj
         * @public
         * @since 1.0.0
         */
        Sprite.prototype.render = function (renderObj) {
            var s = this;
            var maskObj;
            var maskObjIds = [];
            var child;
            var len = s.children.length;
            for (var i = 0; i < len; i++) {
                child = s.children[i];
                if (child.cAlpha > 0 && child.visible) {
                    if (maskObj) {
                        if (child.mask) {
                            if (child.mask != maskObj) {
                                renderObj.endMask();
                                maskObj = child.mask;
                                var mId = maskObj.getInstanceId();
                                //就是检测遮罩是否被更新过。因为动画遮罩反复更新的话他会播放同一次渲染要确定只能更新一回。
                                if (maskObjIds.indexOf(mId) < 0) {
                                    maskObj.parent = s;
                                    maskObj.stage = s.stage;
                                    if (s.totalFrames && maskObj.totalFrames) {
                                        maskObj.gotoAndStop(s.currentFrame);
                                    }
                                    maskObj.update();
                                    maskObjIds.push(mId);
                                }
                                renderObj.beginMask(maskObj);
                            }
                        }
                        else {
                            renderObj.endMask();
                            maskObj = null;
                        }
                    }
                    else {
                        if (child.mask) {
                            maskObj = child.mask;
                            var mId = maskObj.getInstanceId();
                            if (maskObjIds.indexOf(mId) < 0) {
                                maskObj.parent = s;
                                maskObj.stage = s.stage;
                                if (s.totalFrames && maskObj.totalFrames) {
                                    maskObj.gotoAndStop(s.currentFrame);
                                }
                                maskObj.update();
                                maskObjIds.push(mId);
                            }
                            renderObj.beginMask(maskObj);
                        }
                    }
                    child.render(renderObj);
                }
            }
            if (maskObj) {
                renderObj.endMask();
            }
        };
        return Sprite;
    }(annie.DisplayObject));
    annie.Sprite = Sprite;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * 抽象类 一般不直接使用
     * @class annie.Media
     * @extends annie.AObject
     * @public
     * @since 1.0.0
     */
    var Media = (function (_super) {
        __extends(Media, _super);
        /**
         * 构造函数
         * @method Media
         * @param {string|HtmlElement} src
         * @param {string} type
         * @since 1.0.0
         */
        function Media(src, type) {
            _super.call(this);
            /**
             * html 标签 有可能是audio 或者 video
             * @property media
             * @type {Video|Audio}
             * @public
             * @since 1.0.0
             */
            this.media = null;
            /**
             * 媒体类型 VIDEO 或者 AUDIO
             * @type {string}
             * @since 1.0.0
             * @since 1.0.0
             */
            this.type = "";
            this._loop = 0;
            var s = this;
            if (typeof (src) == "string") {
                s.media = document.createElement(type);
                s.media.src = src;
            }
            else {
                s.media = src;
            }
            s._SBWeixin = s._weixinSB.bind(s);
            s.media.addEventListener('ended', function () {
                s._loop--;
                if (s._loop > 0) {
                    s.play(0, s._loop);
                }
                else {
                    s.media.pause();
                }
                s.dispatchEvent("onPlayEnd");
            }.bind(s), false);
            s.type = type.toLocaleUpperCase();
            s.media.addEventListener("timeupdate", function () {
                s.dispatchEvent("onPlayUpdate", { currentTime: s.media.currentTime });
            }, false);
        }
        /**
         * 开始播放媒体
         * @method play
         * @param {number} start 开始点 默认为0
         * @param {number} loop 循环次数
         * @public
         * @since 1.0.0
         */
        Media.prototype.play = function (start, loop) {
            var s = this;
            s._loop = loop;
            //TODO 好像设置了也没什么用，后期再看看
            try {
                s.media.currentTime = start;
            }
            catch (e) {
                trace(e);
            }
            //马蛋的有些ios微信无法自动播放,需要做一些特殊处理
            try {
                WeixinJSBridge.invoke("getNetworkType", {}, s._SBWeixin);
            }
            catch (e) {
                s.media.play();
            }
        };
        Media.prototype._weixinSB = function () {
            this.media.play();
        };
        /**
         * 停止播放
         * @method stop
         * @public
         * @since 1.0.0
         */
        Media.prototype.stop = function () {
            this.media.pause();
            this.media.currentTime = 0;
        };
        /**
         * 暂停播放
         * @method pause
         * @public
         * @since 1.0.0
         */
        Media.prototype.pause = function () {
            this.media.pause();
        };
        return Media;
    }(annie.EventDispatcher));
    annie.Media = Media;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * 声音类
     * @class annie.Sound
     * @extends annie.Media
     * @public
     * @since 1.0.0
     */
    var Sound = (function (_super) {
        __extends(Sound, _super);
        function Sound(src) {
            _super.call(this, src, "Audio");
        }
        return Sound;
    }(annie.Media));
    annie.Sound = Sound;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * 视频类
     * @class annie.Video
     * @extends annie.Media
     * @public
     * @since 1.0.0
     */
    var Video = (function (_super) {
        __extends(Video, _super);
        function Video(src, width, height) {
            _super.call(this, src, "Video");
            var s = this;
            s.media.setAttribute("webkit-playsinline", "true");
            s.media.setAttribute("x-webkit-airplay", "true");
            s.media.width = width;
            s.media.height = height;
        }
        return Video;
    }(annie.Media));
    annie.Video = Video;
})(annie || (annie = {}));
/**
 * Created by anlun on 16/8/8.
 */
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * 将img序列的内容画到canvas里
     * @class annie.ImageFrames
     * @extends annie.Bitmap
     * @public
     * @since 1.0.0
     */
    var ImageFrames = (function (_super) {
        __extends(ImageFrames, _super);
        /**
         * 被始化一个序列图视频
         * @method ImageFrames 构架函数
         * @param src
         * @param width
         * @param height
         * @since 1.0.0
         */
        function ImageFrames(src, width, height) {
            _super.call(this);
            /**
             * img文件所在的文件夹路径
             * @property src
             * @type {string}
             * @public
             * @since 1.0.0
             */
            this.src = "";
            this._lastSrc = "";
            /**
             * 当前播放到序列的哪一帧
             * @property currentFrame
             * @public
             * @since 1.0.0
             * @type{number}
             * @default 0
             */
            this.currentFrame = 0;
            /**
             * 当前播放的序列所在的spriteSheet大图引用
             * @property currentBitmap
             * @since 1.0.0
             * @public
             * @default null
             * @type {number}
             */
            this.currentBitmap = null;
            /**
             * 序列的总帧数
             * @property totalsFrame
             * @since 1.0.0
             * @public
             * @type{number}
             * @default 1;
             */
            this.totalsFrame = 1;
            /**
             * 当前帧所在的spriteSheet里的位置区域
             * @property rect
             * @public
             * @since 1.0.0
             * @type {annie.Rectangle}
             */
            this.rect = null;
            /**
             * 是否循环播放
             * @property loop
             * @public
             * @since 1.0.0
             * @type {boolean}
             */
            this.loop = false;
            this._isLoaded = false;
            /**
             * 是否能播放状态
             * @type {boolean}
             */
            this.canPlay = false;
            /**
             * 是否在播放中
             * @property isPlaying
             * @type {boolean}
             * @public
             * @since 1.0.0
             */
            this.isPlaying = true;
            /**
             * 是否在自动播放
             * @property autoplay
             * @type {boolean}
             * @public
             * @since 1.0.0
             */
            this.autoplay = false;
            var s = this;
            s.src = src;
            s.rect = new annie.Rectangle(0, 0, width, height);
            s.list = [];
            s._urlLoader = new annie.URLLoader();
            s._urlLoader.addEventListener(annie.Event.COMPLETE, s.success.bind(s));
        }
        /**
         * 资源加载成功
         * @private
         * @since 1.0.0
         * @param e
         */
        ImageFrames.prototype.success = function (e) {
            var s = this;
            if (e.data.type == "json") {
                //加载到了配置文件
                s._configInfo = {};
                for (var item in e.data.response) {
                    s._configInfo[item] = e.data.response[item];
                }
                s._startTime = Date.now();
                s._urlLoader.responseType = "image";
                s.loadImage();
            }
            else {
                //加载到了图片
                s.list.push(e.data.response);
                s._currentLoadIndex = s.list.length;
                if (s._currentLoadIndex == s._configInfo.totalsPage) {
                    //加载结束,抛出结束事件
                    if (!s.canPlay) {
                        s.canPlay = true;
                    }
                    s._isLoaded = true;
                    s.dispatchEvent("onload");
                }
                else {
                    s.loadImage();
                    var bufferFrame = s._currentLoadIndex * s._configInfo.pageCount;
                    if (bufferFrame >= 30) {
                        if (bufferFrame == 30) {
                            //判断网速
                            var _endTime = Date.now();
                            var time = _endTime - s._startTime;
                            if (time < 500) {
                                s._needBufferFrame = 30;
                            }
                            else if (time < 1000) {
                                s._needBufferFrame = 60;
                            }
                            else if (time < 1500) {
                                s._needBufferFrame = 90;
                            }
                            else if (time < 2000) {
                                s._needBufferFrame = 120;
                            }
                            else if (time < 2500) {
                                s._needBufferFrame = 150;
                            }
                            else {
                                s._needBufferFrame = 180;
                            }
                        }
                        if (bufferFrame >= s._needBufferFrame && !s.canPlay) {
                            s.canPlay = true;
                            s.dispatchEvent("oncanplay");
                        }
                    }
                }
            }
        };
        /**
         * 如果需要单独使用ImageFrames的话,你需要时间调用update来刷新视频的播放进度,使用VideoPlayer的类将无需考虑
         * @method update
         * @since 1.0.0
         * @public
         */
        ImageFrames.prototype.update = function () {
            var s = this;
            if (s.canPlay && s.autoplay) {
                if (s.currentFrame == s._configInfo.totalsFrame) {
                    //播放结束事件
                    s.currentFrame = 0;
                    if (!s.loop) {
                        s.autoplay = false;
                        s.isPlaying = false;
                    }
                    s.dispatchEvent("onPlayEnd");
                }
                else {
                    if (s.currentFrame < (s._currentLoadIndex * s._configInfo.pageCount - 1) || s._isLoaded) {
                        //////////////////////////////渲染//////////////////////////////////
                        var pageIndex = Math.floor(s.currentFrame / s._configInfo.pageCount);
                        var rowIndex = s.currentFrame % s._configInfo.pageCount;
                        var x = Math.floor(rowIndex / s._configInfo.rowCount);
                        var y = rowIndex % s._configInfo.rowCount;
                        s.rect.x = y * (s._configInfo.dis + s._configInfo.width) + s._configInfo.dis;
                        s.rect.y = x * (s._configInfo.dis + s._configInfo.height) + s._configInfo.dis;
                        s.rect.width = s._configInfo.width;
                        s.rect.height = s._configInfo.height;
                        s.currentBitmap = s.list[pageIndex];
                        s.currentFrame++;
                        if (!s.isPlaying) {
                            s.isPlaying = true;
                        }
                    }
                    else {
                        s.canPlay = false;
                        s.isPlaying = false;
                    }
                }
                s.dispatchEvent("onPlayUpdate", { currentTime: s._currentLoadIndex });
            }
            s.checkChange();
        };
        ImageFrames.prototype.checkChange = function () {
            var s = this;
            if (s._lastSrc != s.src) {
                //开始初始化
                if (s.src != "") {
                    //加载配置文件
                    s._urlLoader.responseType = "json";
                    s._urlLoader.load(s.src + "/config.json");
                    s.canPlay = false;
                    s._currentLoadIndex = 0;
                    s.currentFrame = 0;
                    s._needBufferFrame = 1000;
                    s._isLoaded = false;
                    s._lastSrc = s.src;
                }
                else {
                    s.clear();
                }
            }
        };
        ImageFrames.prototype.loadImage = function () {
            var s = this;
            s._urlLoader.load(s.src + "/" + s._configInfo.name + s._currentLoadIndex + s._configInfo.type);
        };
        /**
         * 播放视频,如果autoplay为true则会加载好后自动播放
         * @method play
         * @public
         * @since 1.0.0
         */
        ImageFrames.prototype.play = function () {
            this.autoplay = true;
        };
        /**
         * 停止播放,如果需要继续播放请再次调用play()方法
         * @method pause
         * @public
         * @since 1.0.0
         */
        ImageFrames.prototype.pause = function () {
            this.autoplay = false;
        };
        /**
         *如果播放了视频后不已不再需要的话,这个时候可以调用这个方法进行资源清理,以方便垃圾回收。
         * 调用此方法后,此对象一样可以再次设置src重新使用。或者直接进行src的更换,系统会自动调用此方法以清除先前的序列在内存的资源
         * @method clear
         * @public
         * @since 1.0.0
         */
        ImageFrames.prototype.clear = function () {
            var s = this;
            s._urlLoader.loadCancel();
            s.list = [];
            s.src = "";
            s._lastSrc = "";
        };
        return ImageFrames;
    }(annie.EventDispatcher));
    annie.ImageFrames = ImageFrames;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    var McFrame = (function () {
        function McFrame() {
            var s = this;
            s.frameChildList = new Array();
            s.keyIndex = 0;
            s.eventName = "";
            s.soundName = "";
            s.soundScene = "";
            s.soundTimes = 1;
        }
        McFrame.prototype.setDisplayInfo = function (display, displayBaseInfo, displayExtendInfo) {
            if (displayBaseInfo === void 0) { displayBaseInfo = null; }
            if (displayExtendInfo === void 0) { displayExtendInfo = null; }
            var s = this;
            var info = {
                display: display,
                x: 0,
                y: 0,
                scaleX: 1,
                scaleY: 1,
                rotation: 0,
                skewX: 0,
                skewY: 0,
                alpha: 1
            };
            annie.RESManager.d(info, displayBaseInfo, displayExtendInfo);
            s.frameChildList.push(info);
        };
        McFrame.prototype.setGraphicInfo = function (loopType, firstFrame, parentFrameIndex) {
            var s = this;
            var lastIndex = s.frameChildList.length - 1;
            s.frameChildList[lastIndex].graphicInfo = {
                loopType: loopType,
                firstFrame: firstFrame,
                parentFrameIndex: parentFrameIndex
            };
        };
        return McFrame;
    }());
    /**
     * annie引擎核心类
     * @class annie.MovieClip
     * @since 1.0.0
     * @public
     * @extends annie.Sprite
     */
    var MovieClip = (function (_super) {
        __extends(MovieClip, _super);
        //private _isOnStage:boolean=false;
        function MovieClip() {
            _super.call(this);
            /**
             * 时间轴 一般给Flash2x工具使用
             * @property _timeline
             * @private
             * @since 1.0.0
             * @type {Array}
             */
            this._timeline = [];
            /**
             * 有些时候我们需要在一个时间轴动画类中添加子元素
             * 在默认情况下，MovieClip只有在停止播放的情况下
             * 使用addChild等方法添加到mc中的子级对象是可见的
             * 为了能够在动画播放期间的任意时刻都能使添加的对象可见
             * 我们给MovieClip添加了一个特殊的子级容器对象，你只需要将你的显示
             * 对象添加到这个特殊的容器对象中，就能在整个动画期间，被添加的显示对象都可见
             * 此container容器会一直在mc的最上层
             * @since 1.0.2
             * @public
             * @property container
             * @type {annie.Sprite}
             */
            this.container = new annie.Sprite();
            /**
             * mc的当前帧
             * @property currentFrame
             * @public
             * @since 1.0.0
             * @type {number}
             * @default 1
             * @readonly
             */
            this.currentFrame = 1;
            /**
             * 当前动画是否处于播放状态
             * @property isPlaying
             * @readOnly
             * @public
             * @since 1.0.0
             * @type {boolean}
             * @default true
             * @readonly
             */
            this.isPlaying = true;
            /**
             * 动画的播放方向,是顺着播还是在倒着播
             * @property isFront
             * @public
             * @since 1.0.0
             * @type {boolean}
             * @default true
             * @readonly
             */
            this.isFront = true;
            /**
             * 当前动画的总帧数
             * @property totalFrames
             * @public
             * @since 1.0.0
             * @type {number}
             * @default 1
             * @readonly
             */
            this.totalFrames = 1;
            this._scriptLayer = [];
            this._labelFrame = {};
            this._frameLabel = {};
            this._isNeedUpdateChildren = true;
            this._isUpdateFrame = false;
            this._mouseEvent = function (e) {
                if (e.type == annie.MouseEvent.MOUSE_DOWN) {
                    this.gotoAndStop(2);
                }
                else {
                    this.gotoAndStop(1);
                }
            };
            var s = this;
            s.addChild(s.container);
        }
        /**
         * 调用止方法将停止当前帧
         * @method stop
         * @public
         * @since 1.0.0
         */
        MovieClip.prototype.stop = function () {
            var s = this;
            //s._isNeedUpdateChildren = true;
            s.isPlaying = false;
        };
        /**
         * Flash2x工具调用的方法,用户一般不需要使用
         * @method as
         * @private
         * @since 1.0.0
         * @param {Function} frameScript
         * @param {number} frameIndex
         */
        MovieClip.prototype.as = function (frameScript, frameIndex) {
            var s = this;
            s._scriptLayer[frameIndex] = frameScript;
        };
        /**
         * 给时间轴添加回调函数,当时间轴播放到当前帧时,此函数将被调用.注意,之前在此帧上添加的所有代码将被覆盖,包括从Fla文件中当前帧的代码.
         * @method addFrameScript
         * @public
         * @since 1.0.0
         * @param {number} frameIndex {number} 要将代码添加到哪一帧,从0开始.0就是第一帧,1是第二帧...
         * @param {Function}frameScript {Function} 时间轴播放到当前帧时要执行回调方法
         */
        MovieClip.prototype.addFrameScript = function (frameIndex, frameScript) {
            var s = this;
            s.as(frameScript, frameIndex);
        };
        /**
         * @移除帧上的回调方法
         * @method removeFrameScript
         * @public
         * @since 1.0.0
         * @param {number} frameIndex
         */
        MovieClip.prototype.removeFrameScript = function (frameIndex) {
            var s = this;
            if (s._scriptLayer[frameIndex]) {
                s._scriptLayer[frameIndex] = null;
            }
        };
        //addLayer
        /**
         * Flash2x工具调用的方法,用户一般不需要使用
         * @method a
         * @private
         * @since 1.0.0
         * @returns {annie.MovieClip}
         */
        MovieClip.prototype.a = function () {
            var s = this;
            s._currentLayer = [];
            s._timeline.unshift(s._currentLayer);
            return s;
        };
        //addFrame
        /**
         * Flash2x工具调用的方法,用户一般不需要使用
         * @method b
         * @private
         * @since 1.0.0
         * @returns {annie.MovieClip}
         * @param {number} count
         */
        MovieClip.prototype.b = function (count) {
            var s = this;
            s._currentLayerFrame = new McFrame();
            s._currentLayerFrame.keyIndex = s._currentLayer.length;
            for (var i = 0; i < count; i++) {
                s._currentLayer.push(s._currentLayerFrame);
            }
            if (s.totalFrames < s._currentLayer.length) {
                s.totalFrames = s._currentLayer.length;
            }
            return s;
        };
        //setFrameDisplay
        /**
         * Flash2x工具调用的方法,用户一般不需要使用
         * @method c
         * @private
         * @since 1.0.0
         * @param {annie.DisplayObject} display
         * @param {Object} displayBaseInfo
         * @param {Object} displayExtendInfo
         * @returns {annie.MovieClip}
         */
        MovieClip.prototype.c = function (display, displayBaseInfo, displayExtendInfo) {
            if (displayBaseInfo === void 0) { displayBaseInfo = null; }
            if (displayExtendInfo === void 0) { displayExtendInfo = null; }
            var s = this;
            s._currentLayerFrame.setDisplayInfo(display, displayBaseInfo, displayExtendInfo);
            return s;
        };
        //setGraphic
        /**
         * Flash2x工具调用的方法,用户一般不需要使用
         * @method g
         * @private
         * @since 1.0.0
         * @param loopType
         * @param {number} firstFrame
         * @param {number} parentFrameIndex
         * @returns {annie.MovieClip}
         */
        MovieClip.prototype.g = function (loopType, firstFrame, parentFrameIndex) {
            var s = this;
            s._currentLayerFrame.setGraphicInfo(loopType, firstFrame, parentFrameIndex);
            return s;
        };
        /**
         * 当将mc设置为图形动画模式时需要设置的相关信息 Flash2x工具调用的方法,用户一般不需要使用
         * @method setGraphicInfo
         * @public
         * @since 1.0.0
         * @param{Object} graphicInfo
         */
        MovieClip.prototype.setGraphicInfo = function (graphicInfo) {
            var s = this;
            s._graphicInfo = graphicInfo;
        };
        /**
         * 将一个mc变成按钮来使用 如果mc在于2帧,那么点击此mc将自动有被按钮的状态,无需用户自己写代码
         * @method initButton
         * @public
         * @since 1.0.0
         */
        MovieClip.prototype.initButton = function () {
            var s = this;
            s.mouseChildren = false;
            //将mc设置成按钮形式
            if (s.totalFrames > 1) {
                s.gotoAndStop(1);
                s.addEventListener("onMouseDown", this._mouseEvent.bind(this));
                s.addEventListener("onMouseUp", this._mouseEvent.bind(this));
                s.addEventListener("onMouseOut", this._mouseEvent.bind(this));
            }
        };
        //setLabelFrame;
        /**
         * Flash2x工具调用的方法,用户一般不需要使用
         * @method d
         * @private
         * @since 1.0.0
         * @param {string} name
         * @param {number} index
         * @returns {annie.MovieClip}
         */
        MovieClip.prototype.d = function (name, index) {
            var s = this;
            s._labelFrame[name] = index + 1;
            s._frameLabel[index + 1] = name;
            return s;
        };
        //getFrameLabel
        /**
         * mc的当前帧的标签名,没有则为空
         * @method getCurrentLabel
         * @public
         * @since 1.0.0
         * @returns {string}
         * */
        MovieClip.prototype.getCurrentLabel = function () {
            var s = this;
            return s._frameLabel[s.currentFrame] ? s._frameLabel[s.currentFrame] : "";
        };
        //setFrameEvent
        /**
         * Flash2x工具调用的方法,用户一般不需要使用
         * @method e
         * @private
         * @since 1.0.0
         * @param {string} eventName
         * @returns {annie.MovieClip}
         */
        MovieClip.prototype.e = function (eventName) {
            var s = this;
            s._currentLayerFrame.eventName = eventName;
            return s;
        };
        //setSoundName
        /**
         * Flash2x工具调用的方法,用户一般不需要使用
         * @method f
         * @private
         * @since 1.0.0
         * @param {string} sceneName
         * @param {string} soundName
         * @param {number} times
         * @returns {annie.MovieClip}
         */
        MovieClip.prototype.f = function (sceneName, soundName, times) {
            var s = this;
            s._currentLayerFrame.soundName = soundName;
            s._currentLayerFrame.soundScene = sceneName;
            s._currentLayerFrame.soundTimes = times;
            return s;
        };
        /**
         * 将播放头向后移一帧并停在下一帧,如果本身在最后一帧则不做任何反应
         * @method nextFrame
         * @since 1.0.0
         * @public
         */
        MovieClip.prototype.nextFrame = function () {
            var s = this;
            if (s.currentFrame < s.totalFrames) {
                s.currentFrame++;
                s._isNeedUpdateChildren = true;
            }
            s.isPlaying = false;
            s._isUpdateFrame = false;
        };
        /**
         * 将播放头向前移一帧并停在下一帧,如果本身在第一帧则不做任何反应
         * @method prevFrame
         * @since 1.0.0
         * @public
         */
        MovieClip.prototype.prevFrame = function () {
            var s = this;
            if (s.currentFrame > 1) {
                s.currentFrame--;
                s._isNeedUpdateChildren = true;
            }
            s.isPlaying = false;
            s._isUpdateFrame = false;
        };
        /**
         * 将播放头跳转到指定帧并停在那一帧,如果本身在第一帧则不做任何反应
         * @method gotoAndStop
         * @public
         * @since 1.0.0
         * @param {number} frameIndex{number|string} 批定帧的帧数或指定帧的标签名
         */
        MovieClip.prototype.gotoAndStop = function (frameIndex) {
            var s = this;
            s.isPlaying = false;
            var tempFrame;
            if (typeof (frameIndex) == "string") {
                if (s._labelFrame[frameIndex] != undefined) {
                    tempFrame = s._labelFrame[frameIndex];
                }
                else {
                    trace("未找到帧标签叫'" + frameIndex + "'的帧");
                }
            }
            else if (typeof (frameIndex) == "number") {
                if (frameIndex > s.totalFrames) {
                    frameIndex = s.totalFrames;
                }
                if (frameIndex < 1) {
                    frameIndex = 1;
                }
                tempFrame = frameIndex;
            }
            if (s.currentFrame != tempFrame) {
                s.currentFrame = tempFrame;
                s._isNeedUpdateChildren = true;
                s._isUpdateFrame = false;
            }
        };
        /**
         * 如果当前时间轴停在某一帧,调用此方法将继续播放.
         * @method play
         * @public
         * @since 1.0.0
         */
        MovieClip.prototype.play = function (isFront) {
            if (isFront === void 0) { isFront = true; }
            var s = this;
            s.isPlaying = true;
            if (isFront == undefined) {
                s.isFront = true;
            }
            else {
                s.isFront = isFront;
            }
            s._isUpdateFrame = true;
        };
        /**
         * 将播放头跳转到指定帧并从那一帧开始继续播放
         * @method gotoAndPlay
         * @public
         * @since 1.0.0
         * @param {number} frameIndex 批定帧的帧数或指定帧的标签名
         * @param {boolean} isFront 跳到指定帧后是向前播放, 还是向后播放.不设置些参数将默认向前播放
         */
        MovieClip.prototype.gotoAndPlay = function (frameIndex, isFront) {
            if (isFront === void 0) { isFront = true; }
            var s = this;
            if (isFront == undefined) {
                s.isFront = true;
            }
            else {
                s.isFront = isFront;
            }
            s.isPlaying = true;
            var tempFrame;
            if (typeof (frameIndex) == "string") {
                if (s._labelFrame[frameIndex] != undefined) {
                    tempFrame = s._labelFrame[frameIndex];
                }
                else {
                    trace("未找到帧标签叫'" + frameIndex + "'的帧");
                }
            }
            else if (typeof (frameIndex) == "number") {
                if (frameIndex > s.totalFrames) {
                    frameIndex = s.totalFrames;
                }
                if (frameIndex < 1) {
                    frameIndex = 1;
                }
                tempFrame = frameIndex;
            }
            if (s.currentFrame != tempFrame) {
                s.currentFrame = tempFrame;
                s._isUpdateFrame = false;
                s._isNeedUpdateChildren = true;
            }
        };
        /**
         * 动画播放过程中更改movieClip中的一个child的显示属性，
         * 如果是停止状态，可以直接设置子级显示属性
         * 因为moveClip在播放的过程中是无法更新子级的显示属性的，
         * 比如你要更新子级的坐标，透明度，旋转等等，这些更改都会无效
         * 因为，moveClip自己记录了子级每一帧的这些属性，所有你需要通过
         * 此方法告诉moveClip我要自己控制这些属性
         * @method setFrameChild
         * @public
         * @since 1.0.0
         * @param {annie.DisplayObject} child
         * @param {Object} attr
         */
        MovieClip.prototype.setFrameChild = function (child, attr) {
            child._donotUpdateinMC = child._donotUpdateinMC || {};
            for (var i in attr) {
                if (attr[i] != null) {
                    child._donotUpdateinMC[i] = attr[i];
                }
                else {
                    delete child._donotUpdateinMC[attr[i]];
                }
            }
        };
        /**
         * 重写刷新
         * @method update
         * @public
         * @since 1.0.0
         */
        MovieClip.prototype.update = function () {
            //super.update();
            var s = this;
            if (s.pauseUpdate)
                return;
            if (s._graphicInfo) {
                //核心代码
                //loopType,firstFrame,parentFrameIndex
                var curParentFrameIndex = s.parent["currentFrame"] ? s.parent["currentFrame"] : 1;
                var tempCurrentFrame = 1;
                var pStartFrame = s._graphicInfo.parentFrameIndex + 1;
                var cStartFrame = s._graphicInfo.firstFrame + 1;
                if (s._graphicInfo.loopType == "play once") {
                    if (curParentFrameIndex - pStartFrame >= 0) {
                        tempCurrentFrame = curParentFrameIndex - pStartFrame + cStartFrame;
                        if (tempCurrentFrame > s.totalFrames) {
                            tempCurrentFrame = s.totalFrames;
                        }
                    }
                }
                else if (s._graphicInfo.loopType == "loop") {
                    if (curParentFrameIndex - pStartFrame >= 0) {
                        tempCurrentFrame = (curParentFrameIndex - pStartFrame + cStartFrame) % s.totalFrames;
                    }
                    if (tempCurrentFrame == 0) {
                        tempCurrentFrame = s.totalFrames;
                    }
                }
                else {
                    tempCurrentFrame = cStartFrame;
                }
                if (s.currentFrame != tempCurrentFrame) {
                    s.currentFrame = tempCurrentFrame;
                    s._isNeedUpdateChildren = true;
                }
                s.isPlaying = false;
            }
            else {
                if (s.isPlaying && s._isUpdateFrame) {
                    //核心代码
                    if (s.isFront) {
                        s.currentFrame++;
                        if (s.currentFrame > s.totalFrames) {
                            s.currentFrame = 1;
                        }
                    }
                    else {
                        s.currentFrame--;
                        if (s.currentFrame < 1) {
                            s.currentFrame = s.totalFrames;
                        }
                    }
                    s._isNeedUpdateChildren = true;
                }
            }
            s._isUpdateFrame = true;
            if (s._isNeedUpdateChildren) {
                var layerCount = s._timeline.length;
                var frameCount = 0;
                var frame = null;
                var displayObject = null;
                var infoObject = null;
                var frameChildrenCount = 0;
                var lastFrameChildren = s.children;
                var i;
                var frameEvents = [];
                for (i = 0; i < s.children.length - 1; i++) {
                    lastFrameChildren[i].parent = null;
                }
                s.children = [];
                for (i = 0; i < layerCount; i++) {
                    frameCount = s._timeline[i].length;
                    if (s.currentFrame <= frameCount) {
                        frame = s._timeline[i][s.currentFrame - 1];
                        if (frame == undefined)
                            continue;
                        if (frame.keyIndex == (s.currentFrame - 1)) {
                            if (frame.soundName != "") {
                                annie.RESManager.getMediaByName(frame.soundScene, frame.soundName).play(0, frame.soundTimes);
                            }
                            if (frame.eventName != "" && s.hasEventListener(annie.Event.CALL_FRAME)) {
                                var event = new annie.Event(annie.Event.CALL_FRAME);
                                event.data = { frameIndex: s.currentFrame, frameName: frame.eventName };
                                frameEvents.push(event);
                            }
                        }
                        frameChildrenCount = frame.frameChildList.length;
                        for (var j = 0; j < frameChildrenCount; j++) {
                            infoObject = frame.frameChildList[j];
                            displayObject = infoObject.display;
                            displayObject.x = infoObject.x;
                            displayObject.y = infoObject.y;
                            displayObject.scaleX = infoObject.scaleX;
                            displayObject.scaleY = infoObject.scaleY;
                            displayObject.rotation = infoObject.rotation;
                            displayObject.skewX = infoObject.skewX;
                            displayObject.skewY = infoObject.skewY;
                            displayObject.alpha = infoObject.alpha;
                            if (infoObject.filters) {
                                displayObject.filters = infoObject.filters;
                            }
                            else {
                                displayObject.filters = null;
                            }
                            if (infoObject.graphicInfo) {
                                displayObject["_graphicInfo"] = infoObject.graphicInfo;
                            }
                            else {
                                if (displayObject["_graphicInfo"]) {
                                    displayObject["_graphicInfo"] = null;
                                }
                            }
                            if (displayObject["_donotUpdateinMC"] != undefined) {
                                for (var o in displayObject["_donotUpdateinMC"]) {
                                    if (displayObject["_donotUpdateinMC"][o] != undefined) {
                                        displayObject[o] = displayObject["_donotUpdateinMC"][o];
                                    }
                                }
                            }
                            displayObject.parent = s;
                            s.children.push(displayObject);
                            if (lastFrameChildren.indexOf(displayObject) < 0) {
                                displayObject._onDispatchBubbledEvent("onAddToStage");
                            }
                        }
                    }
                }
                s._isNeedUpdateChildren = false;
                //update一定要放在事件处理之前
                var len = lastFrameChildren.length;
                for (i = 0; i < len; i++) {
                    if (!lastFrameChildren[i].parent) {
                        lastFrameChildren[i].parent = s;
                        lastFrameChildren[i]._onDispatchBubbledEvent("onRemoveToStage");
                        lastFrameChildren[i].parent = null;
                    }
                }
                s.children.push(s.container);
                _super.prototype.update.call(this);
                //看看是否到了第一帧，或是最后一帧,如果是准备事件
                if ((s.currentFrame == 1 && !s.isFront) || (s.currentFrame == s.totalFrames && s.isFront)) {
                    if (s.hasEventListener(annie.Event.END_FRAME)) {
                        var event = new annie.Event(annie.Event.END_FRAME);
                        event.data = {
                            frameIndex: s.currentFrame,
                            frameName: s.currentFrame == 1 ? "firstFrame" : "endFrame"
                        };
                        frameEvents.push(event);
                    }
                }
                //看看是否有帧事件,有则派发
                var len = frameEvents.length;
                for (i = 0; i < len; i++) {
                    s.dispatchEvent(frameEvents[i]);
                }
                //看看是否有回调,有则调用
                if (s._scriptLayer[s.currentFrame - 1] != undefined) {
                    s._scriptLayer[s.currentFrame - 1]();
                }
            }
            else {
                _super.prototype.update.call(this);
            }
        };
        /**
         * 触发显示列表上相关的事件
         * @method _onDispatchBubbledEvent
         * @param {string} type
         * @private
         */
        MovieClip.prototype._onDispatchBubbledEvent = function (type) {
            _super.prototype._onDispatchBubbledEvent.call(this, type);
            if (type == "onRemoveToStage") {
                var s = this;
                s.currentFrame = 1;
                s.isPlaying = true;
                s.isFront = true;
                s._isNeedUpdateChildren = true;
                s._isUpdateFrame = false;
            }
        };
        return MovieClip;
    }(annie.Sprite));
    annie.MovieClip = MovieClip;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * 此类对于需要在canvas上放置html其他类型元素的时候非常有用<br/>
     * 比如有时候我们需要放置一个注册,登录或者其他的内容.这些内容包含了输入框<br/>
     * 或者下拉框什么的,无法在canvas里实现,但这些元素又跟canvas里面的元素<br/>
     * 位置,大小,缩放对应.就相当于是annie里的一个显示对象一样。可以随意设置他的<br/>
     * 属性,那么将你的html元素通过此类封装成annie的显示对象再合适不过了
     * @class annie.FloatDisplay
     * @extends annie.DisplayObject
     * @public
     * @since 1.0.0
     */
    var FloatDisplay = (function (_super) {
        __extends(FloatDisplay, _super);
        function FloatDisplay() {
            _super.call(this);
            /**
             * 需要封装起来的html元素的引用。你可以通过这个引用来调用或设置此元素自身的属性方法和事件,甚至是样式
             * @property htmlElement
             * @public
             * @since 1.0.0
             * @type{HtmlElement}
             */
            this.htmlElement = null;
            /**
             * 上一交刷新时保留的数据
             * @property _oldProps
             * @private
             * @since 1.0.0
             * @type {{alpha: number, matrix: {a: number, b: number, c: number, d: number, tx: number, ty: number}}}
             */
            this._oldProps = { alpha: 1, matrix: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 } };
            /**
             * 是否已经添加了舞台事件
             * @property _isAdded
             * @since 1.0.0
             * @type {boolean}
             * @private
             */
            this._isAdded = false;
            var s = this;
            s.addEventListener(annie.Event.REMOVE_TO_STAGE, function (e) {
                if (s.htmlElement) {
                    s.htmlElement.style.display = "none";
                }
            });
            s.addEventListener(annie.Event.ADD_TO_STAGE, function (e) {
                if (!s._isAdded) {
                    s._isAdded = true;
                    s.stage.rootDiv.insertBefore(s.htmlElement, s.stage.rootDiv.childNodes[0]);
                }
                else {
                    if (s.htmlElement && s.visible) {
                        s.htmlElement.style.display = "inline";
                    }
                }
            });
        }
        /**
         * 初始化方法
         * @method init
         * @public
         * @since 1.0.0
         * @param {HtmlElement} htmlElement 需要封装起来的html元素的引用。你可以通过这个引用来调用或设置此元素自身的属性方法和事件,甚至是样式
         */
        FloatDisplay.prototype.init = function (htmlElement) {
            var s = this;
            if (typeof (htmlElement) == "string") {
                htmlElement = document.getElementById(htmlElement);
            }
            var style = htmlElement.style;
            style.position = "absolute";
            style.display = "none";
            style.transformOrigin = style.WebkitTransformOrigin = "0 0 0";
            s.htmlElement = htmlElement;
        };
        /**
         * 删除html元素,这样就等于解了封装
         * @method delElement
         * @since 1.0.0
         * @public
         */
        FloatDisplay.prototype.delElement = function () {
            var elem = this.htmlElement;
            if (elem) {
                elem.style.display = "none";
                if (elem.parentNode) {
                    elem.parentNode.removeChild(elem);
                }
                this._isAdded = false;
                this.htmlElement = null;
            }
        };
        /**
         * 重写刷新
         * @method update
         * @public
         * @since 1.0.0
         */
        FloatDisplay.prototype.update = function () {
            _super.prototype.update.call(this);
            var s = this;
            var o = s.htmlElement;
            if (!o) {
                return;
            }
            var style = o.style;
            var visible = s.visible;
            var parent = s.parent;
            while (visible && parent) {
                visible = parent.visible;
                parent = parent.parent;
            }
            var show = visible ? "inline" : "none";
            if (show != style.display) {
                style.display = show;
            }
            if (!s.visible) {
                return;
            }
            var props = new Object;
            props.alpha = s["cAlpha"];
            var mtx = s["cMatrix"];
            var oldProps = s._oldProps;
            var d = annie.devicePixelRatio;
            if (!annie.Matrix.isEqual(oldProps.matrix, mtx)) {
                style.transform = style.webkitTransform = "matrix(" + (mtx.a / d) + "," + (mtx.b / d) + "," + (mtx.c / d) + "," + (mtx.d / d) + "," + (mtx.tx / d) + "," + (mtx.ty / d) + ")";
                oldProps.matrix = { tx: mtx.tx, ty: mtx.ty, a: mtx.a, b: mtx.b, c: mtx.c, d: mtx.d };
            }
            if (oldProps.alpha != props.alpha) {
                style.opacity = props.alpha;
                oldProps.alpha = props.alpha;
            }
        };
        /**
         * 重写getBounds
         * @method getBounds
         * @public
         * @since 1.0.0
         * @returns {annie.Rectangle}
         */
        FloatDisplay.prototype.getBounds = function () {
            var s = this;
            var r = new annie.Rectangle();
            if (s.htmlElement) {
                var hs = s.htmlElement.style;
                r.width = parseInt(hs.width);
                r.height = parseInt(hs.height);
            }
            return r;
        };
        return FloatDisplay;
    }(annie.DisplayObject));
    annie.FloatDisplay = FloatDisplay;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * 将video的内容或者是序列图画到canvas里形成连续播放的效果,以方便做交互
     * @class annie.VideoPlayer
     * @extends annie.Bitmap
     * @public
     * @since 1.0.0
     */
    var VideoPlayer = (function (_super) {
        __extends(VideoPlayer, _super);
        /**
         * @method VideoPlayer
         * @param {string} src
         * @param {number} width
         * @param {number} height
         * @param {number} type 视频类型 值为0则会自动检测android下用序列图,其他系统下支持mp4的用mp4,不支持mp4的用序列图\n,值为1时全部使用序列图,值为2时全部使用mp4
         */
        function VideoPlayer(src, type, width, height) {
            if (type === void 0) { type = 0; }
            _super.call(this);
            /**
             * 播放的视频类型 值为0是序列图,1是视频 只读
             * @property videoType
             * @public
             * @since 1.0.0
             * @type {number}
             * @default 0
             */
            this.videoType = 0;
            var isUseVideo = true;
            if (type == 0) {
                if (annie.osType == "android") {
                    isUseVideo = false;
                }
                else {
                    //检测是否支持mp4,如果不支持,也将用序列
                    var testVideo = document.createElement("video");
                    isUseVideo = testVideo.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') == "probably";
                }
            }
            else if (type == 1) {
                isUseVideo = false;
            }
            if (isUseVideo) {
                this.video = new annie.Video(src + ".mp4", width, height);
            }
            else {
                this.video = new annie.ImageFrames(src, width, height);
            }
            this.videoType = isUseVideo ? 1 : 0;
        }
        /**
         * 重写update
         * @method update
         * @public
         * @since 1.0.0
         */
        VideoPlayer.prototype.update = function () {
            //刷新视频
            if (this.videoType == 0) {
                this.video.update();
                this.rect = this.video.rect;
                this["_cacheImg"] = this.bitmapData = this.video.currentBitmap;
            }
            else {
                this["_cacheImg"] = this.bitmapData = this.video;
            }
            _super.prototype.update.call(this);
        };
        return VideoPlayer;
    }(annie.Bitmap));
    annie.VideoPlayer = VideoPlayer;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * 动态文本类,有时需要在canvas里有一个动态文本,能根据我们的显示内容来改变
     * @class annie.TextField
     * @extends annie.DisplayObject
     * @since 1.0.0
     * @public
     */
    var TextField = (function (_super) {
        __extends(TextField, _super);
        function TextField() {
            _super.call(this);
            this._cacheImg = window.document.createElement("canvas");
            this._cacheX = 0;
            this._cacheY = 0;
            this._cacheObject = { bold: false, italic: false, size: 12, lineType: "single", text: "ILoveAnnie", textAlign: "left", font: "Arial", color: "#fff", lineWidth: 0, lineHeight: 0 };
            /**
             * 文本的对齐方式
             * @property textAlign
             * @public
             * @since 1.0.0
             * @type {string}
             * @default left
             */
            this.textAlign = "left";
            /**
             * 文本的行高
             * @property lineHeight
             * @public
             * @since 1.0.0
             * @type {number}
             * @default 0
             */
            this.lineHeight = 0;
            /**
             * 文本的宽
             * @property lineWidth
             * @public
             * @since 1.0.0
             * @type {number}
             * @default 0
             */
            this.lineWidth = 0;
            /**
             * 文本类型,单行还是多行 single multi
             * @property lineType
             * @public
             * @since 1.0.0
             * @type {string} 两种 single和multi
             * @default single
             */
            this.lineType = "single";
            /**
             * 文本内容
             * @property text
             * @type {string}
             * @public
             * @default ""
             * @since 1.0.0
             */
            this.text = "";
            /**
             * 文本的css字体样式
             * @property font
             * @public
             * @since 1.0.0
             * @type {string}
             * @default 12px Arial
             */
            this.font = "Arial";
            /**
             * 文本的size
             * @property size
             * @public
             * @since 1.0.0
             * @type {number}
             * @default 12
             */
            this.size = 12;
            /**
             * 文本的颜色值
             * @property color
             * @type {string}
             * @public
             * @since 1.0.0
             * @default #fff
             */
            this.color = "#fff";
            /**
             * 文本是否倾斜
             * @property italic
             * @public
             * @since
             * @default false
             * @type {boolean}
             */
            this.italic = false;
            /**
             * 文本是否加粗
             * @property bold
             * @public
             * @since
             * @default false
             * @type {boolean}
             */
            this.bold = false;
        }
        /**
         * 设置文本在canvas里的渲染样式
         * @param ctx
         * @private
         * @since 1.0.0
         */
        TextField.prototype._prepContext = function (ctx) {
            var s = this;
            var font = s.size || 12;
            font += "px ";
            font += s.font;
            //font-weight:bold;font-style:italic;
            if (s.bold) {
                font = "bold " + font;
            }
            if (s.italic) {
                font = "italic " + font;
            }
            ctx.font = font;
            ctx.textAlign = this.textAlign || "left";
            ctx.textBaseline = "top";
            ctx.fillStyle = this.color;
        };
        /**
         * 获取文本宽
         * @method _getMeasuredWidth
         * @param text
         * @return {number}
         * @private
         * @since 1.0.0
         */
        TextField.prototype._getMeasuredWidth = function (text) {
            var ctx = this._cacheImg.getContext("2d");
            //ctx.save();
            var w = ctx.measureText(text).width;
            //ctx.restore();
            return w;
        };
        /**
         * 重写 render
         * @method render
         * @return {annie.Rectangle}
         * @public
         * @since 1.0.0
         */
        TextField.prototype.render = function (renderObj) {
            var s = this;
            if (s._cacheImg.src != "") {
                renderObj.draw(s, 2);
            }
            //super.render();
        };
        /**
         * 重写 update
         * @method update
         * @return {annie.Rectangle}
         * @public
         * @since 1.0.0
         */
        TextField.prototype.update = function () {
            var s = this;
            if (s.pauseUpdate)
                return;
            _super.prototype.update.call(this);
            for (var item in s._cacheObject) {
                if (s._cacheObject[item] != s[item]) {
                    s._cacheObject[item] = s[item];
                    s._isNeedUpdate = true;
                }
            }
            if (s._isNeedUpdate) {
                s.text += "";
                var can = s._cacheImg;
                var ctx = can.getContext("2d");
                var hardLines = s.text.toString().split(/(?:\r\n|\r|\n)/);
                var realLines = [];
                s._prepContext(ctx);
                var lineH;
                if (s.lineHeight) {
                    lineH = s.lineHeight;
                }
                else {
                    lineH = s._getMeasuredWidth("M") * 1.2;
                }
                if (!s.lineWidth) {
                    s.lineWidth = lineH * 10;
                }
                else {
                    if (s.lineWidth < lineH) {
                        s.lineWidth = lineH;
                    }
                }
                if (s.text.indexOf("\n") < 0 && s.lineType == "single") {
                    realLines.push(hardLines[0]);
                    var str = hardLines[0];
                    var lineW = s._getMeasuredWidth(str);
                    if (lineW > s.lineWidth) {
                        var w = s._getMeasuredWidth(str[0]);
                        var lineStr = str[0];
                        var wordW = 0;
                        var strLen = str.length;
                        for (var j = 1; j < strLen; j++) {
                            wordW = ctx.measureText(str[j]).width;
                            w += wordW;
                            if (w > s.lineWidth) {
                                realLines[0] = lineStr;
                                break;
                            }
                            else {
                                lineStr += str[j];
                            }
                        }
                    }
                }
                else {
                    for (var i = 0, l = hardLines.length; i < l; i++) {
                        var str = hardLines[i];
                        var w = s._getMeasuredWidth(str[0]);
                        var lineStr = str[0];
                        var wordW = 0;
                        var strLen = str.length;
                        for (var j = 1; j < strLen; j++) {
                            wordW = ctx.measureText(str[j]).width;
                            w += wordW;
                            if (w > this.lineWidth) {
                                realLines.push(lineStr);
                                lineStr = str[j];
                                w = wordW;
                            }
                            else {
                                lineStr += str[j];
                            }
                        }
                        realLines.push(lineStr);
                    }
                }
                var maxH = lineH * realLines.length;
                var maxW = s.lineWidth;
                var tx = 0;
                if (s.textAlign == "center") {
                    tx = maxW * 0.5;
                }
                else if (s.textAlign == "right") {
                    tx = maxW;
                }
                can.width = maxW + 20;
                can.height = maxH + 20;
                can.style.width = can.width / annie.devicePixelRatio + "px";
                can.style.height = can.height / annie.devicePixelRatio + "px";
                ctx.clearRect(0, 0, maxW, maxH);
                ctx.setTransform(1, 0, 0, 1, tx + 10, 10);
                /////////////////////
                if (s["cFilters"] && s["cFilters"].length > 0) {
                    var cf = s.cFilters;
                    var cfLen = cf.length;
                    for (var i = 0; i < cfLen; i++) {
                        if (s.cFilters[i].type == "Shadow") {
                            ctx.shadowBlur = cf[i].blur;
                            ctx.shadowColor = cf[i].color;
                            ctx.shadowOffsetX = cf[i].offsetX;
                            ctx.shadowOffsetY = cf[i].offsetY;
                            break;
                        }
                    }
                }
                else {
                    ctx.shadowBlur = 0;
                    ctx.shadowColor = "#0";
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;
                }
                ////////////////////
                s._prepContext(ctx);
                for (var i = 0; i < realLines.length; i++) {
                    ctx.fillText(realLines[i], 0, i * lineH, maxW);
                }
                //滤镜
                if (s["cFilters"] && s["cFilters"].length > 0) {
                    var len = s["cFilters"].length;
                    var imageData = ctx.getImageData(0, 0, maxW + 20, maxH + 20);
                    for (var i = 0; i < len; i++) {
                        var f = s["cFilters"][i];
                        f.drawFilter(imageData);
                        trace(s["cFilters"][i].type);
                    }
                    ctx.putImageData(imageData, 0, 0);
                }
                s._cacheX = -10;
                s._cacheY = -10;
                s._isNeedUpdate = false;
                annie.WGRender.setDisplayInfo(s, 2);
            }
        };
        /**
         * 重写 getBounds
         * @method getBounds
         * @return {annie.Rectangle}
         * @public
         * @since 1.0.0
         */
        TextField.prototype.getBounds = function () {
            var s = this;
            var r = new annie.Rectangle();
            if (s._cacheImg) {
                r.x = 0;
                r.y = 0;
                r.width = s._cacheImg.width - 20;
                r.height = s._cacheImg.height - 20;
            }
            return r;
        };
        return TextField;
    }(annie.DisplayObject));
    annie.TextField = TextField;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * 输入文本,此文本类是annie.FloatDisplay对象的典型代表
     * @class annie.InputText
     * @public
     * @since 1.0.0
     * @extends annie.FloatDisplay
     */
    var InputText = (function (_super) {
        __extends(InputText, _super);
        /**
         * @method InputText
         * @public
         * @since 1.0.0
         * @param {string} inputType multiline 多行 password 密码 singleline 单行
         */
        function InputText(inputType) {
            _super.call(this);
            /**
             * 输入文本的类型.
             * multiline 多行
             * password 密码
             * singleline 单行
             * @property inputType
             * @public
             * @since 1.0.0
             * @type {string}
             * @default "singleline"
             */
            this.inputType = "singleline";
            var input = null;
            var s = this;
            if (inputType != "multiline") {
                input = document.createElement("input");
                if (inputType == "password") {
                    input.type = "password";
                }
                else {
                    input.type = "text";
                }
            }
            else {
                input = document.createElement("textarea");
                input.style.resize = "none";
                input.style.overflow = "hidden";
            }
            s.inputType = inputType;
            s.init(input);
        }
        InputText.prototype.init = function (htmlElement) {
            _super.prototype.init.call(this, htmlElement);
            //默认设置
            var s = this;
            s.htmlElement.style.outline = "none";
            s.htmlElement.style.borderWidth = "thin";
            s.htmlElement.style.borderColor = "#000";
        };
        /**
         * 被始化输入文件的一些属性
         * @method initInfo
         * @public
         * @since 1.0.0
         * @param {string} text 默认文字
         * @param {number} w 文本宽
         * @param {number} h 文本高
         * @param {string}color 文字颜色
         * @param {string}align 文字的对齐方式
         * @param {number}size  文字大小
         * @param {string}font  文字所使用的字体
         * @param {boolean}showBorder 是否需要显示边框
         * @param {number}lineSpacing 如果是多行,请设置行高
         */
        InputText.prototype.initInfo = function (text, w, h, color, align, size, font, showBorder, lineSpacing) {
            var s = this;
            s.htmlElement.placeholder = text;
            s.htmlElement.style.width = w + "px";
            s.htmlElement.style.height = h + "px";
            //font包括字体和大小
            s.htmlElement.style.font = size + "px " + font;
            s.htmlElement.style.color = color;
            s.htmlElement.style.textAlign = align;
            /////////////////////设置边框//////////////
            s.setBorder(showBorder);
            //color:blue; text-align:center"
            if (s.inputType == "multiLine") {
                s.htmlElement.style.lineHeight = lineSpacing + "px";
            }
        };
        /**
         * 设置文本是否为粗体
         * @method setBold
         * @param {boolean} bold true或false
         * @public
         * @since 1.0.0
         */
        InputText.prototype.setBold = function (bold) {
            var s = this.htmlElement.style;
            if (bold) {
                s.fontWeight = "bold";
            }
            else {
                s.fontWeight = "normal";
            }
        };
        /**
         * 设置文本是否倾斜
         * @method setItalic
         * @param {boolean} italic true或false
         * @public
         * @since 1.0.0
         */
        InputText.prototype.setItalic = function (italic) {
            var s = this.htmlElement.style;
            if (italic) {
                s.fontStyle = "italic";
            }
            else {
                s.fontStyle = "normal";
            }
        };
        /**
         * 设置是否有边框
         * @method setBorder
         * @param {boolean} show true或false
         * @public
         * @sinc 1.0.0
         */
        InputText.prototype.setBorder = function (show) {
            var s = this;
            if (show) {
                s.htmlElement.style.borderStyle = "inset";
                s.htmlElement.style.backgroundColor = "#fff";
            }
            else {
                s.htmlElement.style.borderStyle = "none";
                s.htmlElement.style.backgroundColor = "transparent";
            }
        };
        /**
         * 获取输入文本的值,因为输入文本调用了html的input标签,所以不能直接像动态文本那样用textObj.text获取值或者设置值
         * @method getText
         * @public
         * @since 1.0.0
         * @returns {string}
         */
        InputText.prototype.getText = function () {
            var s = this;
            if (s.htmlElement) {
                return s.htmlElement.value;
            }
        };
        /**
         * 设置输入文本的值,因为输入文本调用了html的input标签,所以不能直接像动态文本那样用textObj.text获取值或者设置值
         * @method setText
         * @param {string} text
         */
        InputText.prototype.setText = function (text) {
            var s = this;
            if (s.htmlElement) {
                s.htmlElement.value = text;
            }
        };
        return InputText;
    }(annie.FloatDisplay));
    annie.InputText = InputText;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * Stage 表示显示 canvas 内容的整个区域，所有显示对象的顶级显示容器
     * 无法以全局方式访问 Stage 对象,而是需要利用DisplayObject实例的getStage()方法进行访问
     * @class annie.Stage
     * @extends annie.Sprite
     * @public
     * @since 1.0.0
     */
    var Stage = (function (_super) {
        __extends(Stage, _super);
        /**
         * 显示对象入口函数
         * @method Stage
         * @param {string} rootDivId
         * @param {number} desW 舞台宽
         * @param {number} desH 舞台高
         * @param {number} fps 刷新率
         * @param {string} scaleMode 缩放模式 StageScaleMode
         * @param {string} bgColor 背景颜色-1为透明
         * @param {number} renderType 渲染模式0:canvas 1:webGl 2:dom
         * @public
         * @since 1.0.0
         */
        function Stage(rootDivId, desW, desH, frameRate, scaleMode, renderType) {
            if (rootDivId === void 0) { rootDivId = "annieEngine"; }
            if (desW === void 0) { desW = 640; }
            if (desH === void 0) { desH = 1040; }
            if (frameRate === void 0) { frameRate = 30; }
            if (scaleMode === void 0) { scaleMode = "fixedHeight"; }
            if (renderType === void 0) { renderType = 0; }
            _super.call(this);
            /**
             * 整个引擎的最上层的div元素,
             * 承载canvas的那个div html元素
             * @property rootDiv
             * @public
             * @since 1.0.0
             * @type {Html Div}
             * @default null
             */
            this.rootDiv = null;
            /**
             * 当前stage所使用的渲染器
             * 渲染器有两种,一种是canvas 一种是webGl
             * @property renderObj
             * @public
             * @since 1.0.0
             * @type {IRender}
             * @default null
             */
            this.renderObj = null;
            /**
             * 渲染模式值 只读 CANVAS:0, webGl: 1
             * @property renderType
             * @readonly
             * @public
             * @since 1.0.0
             * @type {number}
             * @default 0
             * @readonly
             */
            this.renderType = 0;
            /**
             * 如果值为true则暂停更新当前显示对象及所有子对象。在视觉上就相当于界面停止了,但一样能会接收鼠标事件<br/>
             * 有时候背景为大量动画的一个对象时,当需要弹出一个框或者其他内容,或者模糊一个背景时可以设置此属性让<br/>
             * 对象视觉暂停更新
             * @property pause
             * @type {boolean}
             * @public
             * @since 1.0.0
             * @default false
             */
            this.pause = false;
            /**
             * 舞台在设备里截取后的可见区域,有些时候知道可见区域是非常重要的,因为这样你就可以根据舞台的可见区域做自适应了。
             * @property viewRect
             * @public
             * @readonly
             * @since 1.0.0
             * @type {annie.Rectangle}
             * @default {x:0,y:0,width:0,height:0}
             * @readonly
             * @example
             *      //始终让一个对象顶对齐，或者
             */
            this.viewRect = new annie.Rectangle();
            /**
             * 当设备尺寸更新，或者旋转后是否自动更新方向
             * 端默认不开启
             * @property autoSteering
             * @public
             * @since 1.0.0
             * @type {boolean}
             * @default false
             */
            this.autoSteering = false;
            /**
             * 当设备尺寸更新，或者旋转后是否自动更新尺寸。
             * @property autoResize
             * @public
             * @since 1.0.0
             * @type {boolean}
             * @default false
             */
            this.autoResize = false;
            /**
             * 舞台的尺寸宽,也就是我们常说的设计尺寸
             * @property width
             * @public
             * @since 1.0.0
             * @default 320
             * @type {number}
             * @readonly
             */
            this.width = 0;
            /**
             * 舞台的尺寸高,也就是我们常说的设计尺寸
             * @property height
             * @public
             * @since 1.0.0
             * @default 240
             * @type {number}
             * @readonly
             */
            this.height = 0;
            /**
             * 舞台在当前设备中的真实高
             * @property divHeight
             * @public
             * @since 1.0.0
             * @default 320
             * @type {number}
             * @readonly
             */
            this.divHeight = 0;
            /**
             * 舞台在当前设备中的真实宽
             * @property divWidth
             * @public
             * @since 1.0.0
             * @default 240
             * @readonly
             * @type {number}
             */
            this.divWidth = 0;
            /**
             * 舞台的背景色
             * 默认就是透明背景
             * 可能设置一个颜色值改变舞台背景
             * @property bgColor
             * @public
             * @since 1.0.0
             * @type {string}
             * @default "";
             */
            this.bgColor = "";
            /**
             * 舞台的缩放模式
             * 默认为空就是无缩放的真实大小
             * "noBorder" 无边框模式
             * ”showAll" 显示所有内容
             * “fixedWidth" 固定宽
             * ”fixedHeight" 固定高
             * @property scaleMode
             * @public
             * @since 1.0.0
             * @default "onScale"
             * @type {string}
             * @example
             *      //动态更改stage的对齐方式示例
             *      //以下代码放到一个舞台的显示对象的构造函数中
             *      var s=this;
             *      s.addEventListener(annie.Event.ADD_TO_STAGE,function(e){
             *          var i=0;
             *          s.stage.addEventListener(annie.MouseEvent.CLICK,function(e){
             *              var aList=[annie.StageScaleMode.EXACT_FIT,annie.StageScaleMode.NO_BORDER,annie.StageScaleMode.NO_SCALE,annie.StageScaleMode.SHOW_ALL,annie.StageScaleMode.FIXED_WIDTH,annie.StageScaleMode.FIXED_HEIGHT]
             *              var state=e.currentTarget;
             *              state.scaleMode=aList[i];
             *              state.resize();
             *              if(i>5){i=0;}
             *          }
             *      }
             *
             */
            this.scaleMode = "onScale";
            /**
             * 原始为60的刷新速度时的计数器
             * @property _flush
             * @private
             * @since 1.0.0
             * @default 0
             * @type {number}
             */
            this._flush = 0;
            /**
             * 当前的刷新次数计数器
             * @property _currentFlush
             * @private
             * @since 1.0.0
             * @default 0
             * @type {number}
             */
            this._currentFlush = 0;
            /**
             * 每一次需要刷新整个引擎时积累的鼠标或触摸事件信息对象,同一刷新阶段内相同的事件类型将会被后面的同类事件覆盖
             * @type {Object}
             * @private
             */
            this._mouseEventInfo = {};
            this._lastDpList = [];
            /**
             * 这个是鼠标事件的对象池,因为如果用户有监听鼠标事件,如果不建立对象池,那每一秒将会new Fps个数的事件对象,影响性能
             * @type {Array}
             * @private
             */
            this._ml = [];
            /**
             * 刷新mouse或者touch事件
             * @private
             */
            this._mouseDownPoint = new annie.Point(0, 0);
            /**
             * html的鼠标或单点触摸对应的引擎事件类型名
             * @type {{mousedown: string, mouseup: string, mousemove: string, touchstart: string, touchmove: string, touchend: string}}
             * @private
             */
            this._mouseEventTypes = {
                mousedown: "onMouseDown",
                mouseup: "onMouseUp",
                mousemove: "onMouseMove",
                touchstart: "onMouseDown",
                touchmove: "onMouseMove",
                touchend: "onMouseUp"
            };
            /**
             * 当document有鼠标或触摸事件时调用
             * @param e
             */
            this.onMouseEvent = function (e) {
                //检查是否有
                var s = this;
                s._mouseEventInfo[s._mouseEventTypes[e.type]] = e;
                //阻止向下冒泡
            };
            /**
             * 设置舞台的对齐模式
             */
            this.setAlign = function () {
                var s = this;
                var divH = s.divHeight * annie.devicePixelRatio;
                var divW = s.divWidth * annie.devicePixelRatio;
                var desH = s.height;
                var desW = s.width;
                //设备是否为竖屏
                var isDivH = divH > divW;
                //内容是否为竖屏内容
                var isDesH = desH > desW;
                var scaleY = 1;
                var scaleX = 1;
                s.x = (divW - desW) / 2;
                s.y = (divH - desH) / 2;
                if (s.autoSteering) {
                    if (isDesH != isDivH) {
                        var d = divH;
                        divH = divW;
                        divW = d;
                    }
                }
                if (s.scaleMode != "noScale") {
                    scaleY = divH / desH;
                    scaleX = divW / desW;
                    switch (s.scaleMode) {
                        case "noBorder":
                            if (scaleX > scaleY) {
                                scaleY = scaleX;
                            }
                            else {
                                scaleX = scaleY;
                            }
                            break;
                        case "showAll":
                            if (scaleX < scaleY) {
                                scaleY = scaleX;
                            }
                            else {
                                scaleX = scaleY;
                            }
                            break;
                        case "fixedWidth":
                            scaleY = scaleX;
                            break;
                        case "fixedHeight":
                            scaleX = scaleY;
                            break;
                    }
                }
                s.scaleX = scaleX;
                s.scaleY = scaleY;
                s.viewRect.x = (desW - divW / scaleX) / 2;
                s.viewRect.y = (desH - divH / scaleY) / 2;
                s.viewRect.width = desW - s.viewRect.x * 2;
                s.viewRect.height = desH - s.viewRect.y * 2;
                if (s.autoSteering) {
                    if (isDesH == isDivH) {
                        s.rotation = 0;
                    }
                    else {
                        s.rotation = 90;
                    }
                }
                else {
                    s.rotation = 0;
                }
            };
            /**
             * 当舞台尺寸发生改变时,如果stage autoResize 为 true，则此方法会自己调用；
             * 如果设置stage autoResize 为 false 你需要手动调用此方法以更新界面.
             * 不管autoResize 的状态是什么，你只要侦听 了stage 的 annie.Event.RESIZE 事件
             * 都可以接收到舞台变化的通知。
             * @method resize
             * @public
             * @since 1.0.0
             * @
             */
            this.resize = function () {
                var s = this;
                var whObj = s.getRootDivWH(s.rootDiv);
                //这里判断
                if ((s.divWidth + s.divHeight) == 0 || Math.abs((whObj.h + whObj.w) - (s.divWidth + s.divHeight)) < 100) {
                    s.divHeight = whObj.h;
                    s.divWidth = whObj.w;
                    s.renderObj.reSize();
                    s.setAlign();
                }
            };
            var s = this;
            s.stage = this;
            if (annie.osType == "pc") {
                s.autoResize = true;
            }
            else {
                s.autoSteering = true;
                s.autoResize = true;
            }
            s._lastMousePoint = new annie.Point();
            s.name = "stageInstance_" + s.getInstanceId();
            var div = document.getElementById(rootDivId);
            s.renderType = renderType;
            s.width = desW;
            s.height = desH;
            s.rootDiv = div;
            s.setFrameRate(frameRate);
            s.scaleMode = scaleMode;
            s.anchorX = desW / 2;
            s.anchorY = desH / 2;
            if (renderType == 0) {
                //canvas
                s.renderObj = new annie.CanvasRender(s);
            }
            else {
                //webgl
                s.renderObj = new annie.WGRender(s);
            }
            s.renderObj.init();
            window.addEventListener("resize", function (e) {
                if (s.autoResize) {
                    s.resize();
                }
                var event = new annie.Event("onResize");
                s.dispatchEvent(event);
            });
            setTimeout(function () {
                s.resize();
                s.update();
                //同时添加到主更新循环中
                Stage.addUpdateObj(s);
                //告诉大家我初始化完成
                //判断debug,如果debug等于true并且之前没有加载过则加载debug所需要的js文件
                if (annie.debug && !Stage._isLoadedVConsole) {
                    var script = document.createElement("script");
                    script.onload = function () {
                        s.dispatchEvent(new annie.Event("onInitStage"));
                        script.onload = null;
                    };
                    document.head.appendChild(script);
                    script.src = "libs/vConsole.min.js";
                }
                else {
                    s.dispatchEvent(new annie.Event("onInitStage"));
                }
            }, 100);
            var rc = s.renderObj.rootContainer;
            var mouseEvent = s.onMouseEvent.bind(s);
            if (annie.osType != "pc") {
                rc.addEventListener("touchstart", mouseEvent);
                rc.addEventListener('touchmove', mouseEvent);
                rc.addEventListener('touchend', mouseEvent);
            }
            else {
                rc.addEventListener("mousedown", mouseEvent);
                rc.addEventListener('mousemove', mouseEvent);
                rc.addEventListener('mouseup', mouseEvent);
            }
        }
        /**
         * 刷新函数
         * @method update
         */
        Stage.prototype.update = function () {
            var s = this;
            if (!s.pause) {
                _super.prototype.update.call(this);
            }
        };
        /**
         * 渲染函数
         * @method render
         * @param renderObj
         */
        Stage.prototype.render = function (renderObj) {
            if (!this.pause) {
                renderObj.begin();
                _super.prototype.render.call(this, renderObj);
            }
            //检查mouse或touch事件是否有，如果有的话，就触发事件函数
            if (annie.EventDispatcher._totalMEC > 0) {
                this._mt();
            }
        };
        Stage.prototype._initMouseEvent = function (event, cp, sp) {
            event["_pd"] = false;
            event.clientX = cp.x;
            event.clientY = cp.y;
            event.stageX = sp.x;
            event.stageY = sp.y;
        };
        Stage.prototype._mt = function () {
            var s = this;
            var mt = s._mouseEventInfo;
            var points;
            var events = [];
            var event;
            //stageMousePoint
            var sp;
            //localPoint;
            var lp;
            //clientPoint
            var cp;
            //事件个数
            var eLen = 0;
            for (var item in mt) {
                if (annie.osType == "pc") {
                    points = [mt[item]];
                }
                else {
                    if (mt[item].targetTouches) {
                        points = mt[item].targetTouches;
                    }
                }
                if (points && points.length > 0) {
                    s._lastMousePoint.x = (points[0].clientX - points[0].target.offsetLeft) * annie.devicePixelRatio;
                    s._lastMousePoint.y = (points[0].clientY - points[0].target.offsetTop) * annie.devicePixelRatio;
                }
                //这个地方检查是所有显示对象列表里是否有添加任何鼠标或触碰事件,有的话就检测,没有的话就算啦。
                cp = s._lastMousePoint;
                sp = s.globalToLocal(cp, annie.DisplayObject._bp);
                if (annie.EventDispatcher.getMouseEventCount(item) > 0) {
                    if (!s._ml[eLen]) {
                        event = new annie.MouseEvent(item);
                        s._ml[eLen] = event;
                    }
                    else {
                        event = s._ml[eLen];
                        event.type = item;
                    }
                    events.push(event);
                    s._initMouseEvent(event, cp, sp);
                    eLen++;
                }
                if (item == "onMouseDown") {
                    s._mouseDownPoint.x = cp.x;
                    s._mouseDownPoint.y = cp.y;
                    //清空上次存在的显示列表
                    s._lastDpList = null;
                }
                else if (item == "onMouseUp") {
                    if (Math.abs(s._mouseDownPoint.x - cp.x) <= 1 && Math.abs(s._mouseDownPoint.y - cp.y) <= 1) {
                        //click事件
                        //这个地方检查是所有显示对象列表里是否有添加对应的事件
                        if (annie.EventDispatcher.getMouseEventCount("onMouseClick") > 0) {
                            if (!s._ml[eLen]) {
                                event = new annie.MouseEvent("onMouseClick");
                                s._ml[eLen] = event;
                            }
                            else {
                                event = s._ml[eLen];
                                event.type = "onMouseClick";
                            }
                            events.push(event);
                            s._initMouseEvent(event, cp, sp);
                            eLen++;
                        }
                    }
                }
            }
            if (eLen > 0) {
                //证明有事件那么就开始遍历显示列表。就算有多个事件也不怕，因为坐标点相同，所以只需要遍历一次
                var d = s.hitTestPoint(cp, true);
                var displayList = [];
                if (d) {
                    //证明有点击到事件,然后从最底层追上来,看看一路是否有人添加过mouse或touch事件,还要考虑mousechildren和阻止事件方法
                    //找出真正的target,因为有些父级可能会mouseChildren=false;
                    while (d) {
                        if (d["mouseChildren"] === false) {
                            //丢掉之前的层级,因为根本没用了
                            displayList.length = 0;
                        }
                        displayList.push(d);
                        d = d.parent;
                    }
                }
                else {
                    displayList.push(s);
                }
                var len = displayList.length;
                displayList.reverse();
                for (var i = 0; i < len; i++) {
                    d = displayList[i];
                    for (var j = 0; j < eLen; j++) {
                        if (events[j]["_pd"] === false) {
                            if (d.hasEventListener(events[j].type)) {
                                events[j].currentTarget = d;
                                events[j].target = displayList[len - 1];
                                lp = d.globalToLocal(cp);
                                events[j].localX = lp.x;
                                events[j].localY = lp.y;
                                d.dispatchEvent(events[j]);
                            }
                        }
                    }
                }
                //最后要和上一次的遍历者对比下，如果不相同则要触发onMouseOver和onMouseOut
                if (s._lastDpList) {
                    //从第二个开始，因为第一个对象始终是stage顶级对象
                    var len1 = s._lastDpList.length;
                    var len2 = displayList.length;
                    len = len1 > len2 ? len1 : len2;
                    var isDiff = false;
                    var overEvent;
                    var outEvent;
                    for (var i = 1; i < len; i++) {
                        if (!isDiff) {
                            if (s._lastDpList[i] != displayList[i]) {
                                //好就是这里，需要确定哪些有onMouseOver,哪些有onMouseOut
                                isDiff = true;
                                if (!s._ml[eLen]) {
                                    overEvent = new annie.MouseEvent("onMouseOver");
                                    s._ml[eLen] = overEvent;
                                }
                                else {
                                    overEvent = s._ml[eLen];
                                    overEvent.type = "onMouseOver";
                                }
                                s._initMouseEvent(overEvent, cp, sp);
                                eLen++;
                                if (!s._ml[eLen]) {
                                    outEvent = new annie.MouseEvent("onMouseOut");
                                    s._ml[eLen] = outEvent;
                                }
                                else {
                                    outEvent = s._ml[eLen];
                                    outEvent.type = "onMouseOut";
                                }
                                s._initMouseEvent(outEvent, cp, sp);
                            }
                        }
                        if (isDiff) {
                            if (s._lastDpList[i]) {
                                //触发onMouseOut事件
                                if (outEvent["_pd"] === false) {
                                    d = s._lastDpList[i];
                                    if (d.hasEventListener("onMouseOut")) {
                                        outEvent.currentTarget = d;
                                        outEvent.target = s._lastDpList[len1 - 1];
                                        lp = d.globalToLocal(cp);
                                        outEvent.localX = lp.x;
                                        outEvent.localY = lp.y;
                                        d.dispatchEvent(outEvent);
                                    }
                                }
                            }
                            if (displayList[i]) {
                                //触发onMouseOver事件
                                if (overEvent["_pd"] === false) {
                                    d = displayList[i];
                                    if (d.hasEventListener("onMouseOver")) {
                                        overEvent.currentTarget = d;
                                        overEvent.target = displayList[len2 - 1];
                                        lp = d.globalToLocal(cp);
                                        overEvent.localX = lp.x;
                                        overEvent.localY = lp.y;
                                        d.dispatchEvent(overEvent);
                                    }
                                }
                            }
                        }
                    }
                }
                s._lastDpList = displayList;
            }
            s._mouseEventInfo = {};
        };
        /**
         * 循环刷新页面的函数
         */
        Stage.prototype.flush = function () {
            var s = this;
            if (s._flush == 0) {
                s.update();
                s.render(s.renderObj);
            }
            else {
                //将更新和渲染分放到两个不同的时间更新值来执行,这样可以减轻cpu同时执行的压力。
                if (s._currentFlush == 0) {
                    s.update();
                    s._currentFlush = s._flush;
                }
                else {
                    if (s._currentFlush == s._flush) {
                        s.render(s.renderObj);
                    }
                    s._currentFlush--;
                }
            }
        };
        /**
         * 引擎的刷新率,就是一秒中执行多少次刷新
         * @method setFrameRate
         * @param {number} fps 最好是60的倍数如 1 2 3 6 10 12 15 20 30 60
         * @since 1.0.0
         * @public
         */
        Stage.prototype.setFrameRate = function (fps) {
            var s = this;
            s._flush = 60 / fps - 1 >> 0;
            if (s._flush < 0) {
                s._flush = 0;
            }
        };
        /**
         * 引擎的刷新率,就是一秒中执行多少次刷新
         * @method getFrameRate
         * @since 1.0.0
         * @public
         */
        Stage.prototype.getFrameRate = function () {
            return 60 / (this._flush + 1);
        };
        /**
         * 获取引擎所在的div宽高
         * @method getRootDivWH
         * @public
         * @since 1.0.0
         * @param {HTMLDivElement} div
         * @returns {{w: number, h: number}}
         */
        Stage.prototype.getRootDivWH = function (div) {
            var sw = div.style.width;
            var sh = div.style.height;
            var iw = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;
            var ih = window.innerHeight || document.documentElement.clientHeight
                || document.body.clientHeight;
            var vW = parseInt(sw);
            var vH = parseInt(sh);
            if (vW.toString() == "NaN") {
                vW = iw;
            }
            else {
                if (sw.indexOf("%") > 0) {
                    vW *= iw / 100;
                }
            }
            if (vH.toString() == "NaN") {
                vH = ih;
            }
            else {
                if (sh.indexOf("%") > 0) {
                    vH *= ih / 100;
                }
            }
            return { w: vW, h: vH };
        };
        /**
         * 当一个stage不再需要使用,或者要从浏览器移除之前,请先停止它,避免内存泄漏
         * @method kill
         * @since 1.0.0
         * @public
         */
        Stage.prototype.kill = function () {
            Stage.removeUpdateObj(this);
        };
        Stage.prototype.getBounds = function () {
            return this.viewRect;
        };
        /**
         *
         */
        Stage.flushAll = function () {
            var len = Stage.allUpdateObjList.length;
            for (var i = 0; i < len; i++) {
                Stage.allUpdateObjList[i] && Stage.allUpdateObjList[i].flush();
            }
            requestAnimationFrame(Stage.flushAll);
        };
        /**
         * 添加一个刷新对象，这个对象里一定要有一个 flush 函数。
         * 因为一但添加，这个对象的 flush 函数会以stage的fps间隔调用
         * 如，你的stage是30fps 那么你这个对象的 flush 函数1秒会调用30次。
         * @method addUpdateObj
         * @param target 要循化调用 flush 函数的对象
         * @public
         * @since
         */
        Stage.addUpdateObj = function (target) {
            var isHave = false;
            var len = Stage.allUpdateObjList.length;
            for (var i = 0; i < len; i++) {
                if (Stage.allUpdateObjList[i] === target) {
                    isHave = true;
                    break;
                }
            }
            if (!isHave) {
                Stage.allUpdateObjList.push(target);
            }
        };
        /**
         * 移除掉已经添加的循环刷新对象
         * @method removeUpdateObj
         * @param target
         * @private
         * @since 1.0.0
         */
        Stage.removeUpdateObj = function (target) {
            var len = Stage.allUpdateObjList.length;
            for (var i = 0; i < len; i++) {
                if (Stage.allUpdateObjList[i] === target) {
                    Stage.allUpdateObjList.splice(i, 1);
                    break;
                }
            }
        };
        /**
         * 上一次鼠标或触碰经过的显示对象列表
         * @type {Array}
         * @private
         */
        Stage._isLoadedVConsole = false;
        /**
         * 要循环调用 flush 函数对象列表
         * @type {Array}
         */
        Stage.allUpdateObjList = [];
        return Stage;
    }(annie.Sprite));
    annie.Stage = Stage;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * 投影或者发光滤镜
     * @class annie.ShadowFilter
     * @extends annie.AObject
     * @public
     * @since 1.0.0
     */
    var ShadowFilter = (function (_super) {
        __extends(ShadowFilter, _super);
        /**
         * @method ShadowFilter
         * @param {string} color
         * @param {number} offsetX
         * @param {number} offsetY
         * @param {number} blur
         */
        function ShadowFilter(color, offsetX, offsetY, blur) {
            if (color === void 0) { color = "black"; }
            if (offsetX === void 0) { offsetX = 2; }
            if (offsetY === void 0) { offsetY = 2; }
            if (blur === void 0) { blur = 2; }
            _super.call(this);
            /**
             * 颜色值
             * @property color
             * @public
             * @readonly
             * @since 1.0.0
             * @default black
             * @type {string}
             */
            this.color = "black";
            /**
             * x方向投影距离
             * @property offsetX
             * @public
             * @readonly
             * @since 1.0.0
             * @default 2
             * @type {number}
             */
            this.offsetX = 2;
            /**
             * y方向投影距离
             * @property offsetY
             * @public
             * @readonly
             * @since 1.0.0
             * @default 2
             * @type {number}
             */
            this.offsetY = 2;
            /**
             * 模糊值
             * @property blur
             * @public
             * @readonly
             * @since 1.0.0
             * @default 2
             * @type {number}
             */
            this.blur = 2;
            /**
             * 滤镜类型 只读
             * @property color
             * @public
             * @readonly
             * @since 1.0.0
             * @default Shadow
             * @type {string}
             */
            this.type = "Shadow";
            var s = this;
            s.offsetX = offsetX;
            s.offsetY = offsetY;
            s.blur = blur;
            s.color = color;
        }
        /**
         *获取滤镜的字符串表现形式以方便比较两个滤镜是否效果一样
         * @method toString
         * @public
         * @since 1.0.0
         * @return {string}
         */
        ShadowFilter.prototype.toString = function () {
            var s = this;
            return s.type + s.offsetX + s.offsetY + s.blur + s.color;
        };
        /**
         * 绘画滤镜效果
         * @method drawFilter
         * @public
         * @since 1.0.0
         * @param {ImageData} imageData
         */
        ShadowFilter.prototype.drawFilter = function (imageData) {
            if (imageData === void 0) { imageData = null; }
            //什么也不要做
        };
        return ShadowFilter;
    }(annie.AObject));
    annie.ShadowFilter = ShadowFilter;
    /**
     * 普通变色滤镜
     * @class annie.ColorFilter
     * @extends annie.AObject
     * @public
     * @since 1.0.0
     */
    var ColorFilter = (function (_super) {
        __extends(ColorFilter, _super);
        /**
         * @method ColorFilter
         * @param {number} redMultiplier
         * @param {number} greenMultiplier
         * @param {number} blueMultiplier
         * @param {number} alphaMultiplier
         * @param {number} redOffset
         * @param {number} greenOffset
         * @param {number} blueOffset
         * @param {number} alphaOffset
         */
        function ColorFilter(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
            if (redMultiplier === void 0) { redMultiplier = 1; }
            if (greenMultiplier === void 0) { greenMultiplier = 1; }
            if (blueMultiplier === void 0) { blueMultiplier = 1; }
            if (alphaMultiplier === void 0) { alphaMultiplier = 1; }
            if (redOffset === void 0) { redOffset = 0; }
            if (greenOffset === void 0) { greenOffset = 0; }
            if (blueOffset === void 0) { blueOffset = 0; }
            if (alphaOffset === void 0) { alphaOffset = 0; }
            _super.call(this);
            /**
             * @property redMultiplier
             * @public
             * @since 1.0.0
             * @readonly
             * @type {number}
             */
            this.redMultiplier = 0;
            /**
             * @property redOffset
             * @public
             * @readonly
             * @since 1.0.0
             * @type {number}
             */
            this.redOffset = 0;
            /**
             * @property greenMultiplier
             * @public
             * @readonly
             * @since 1.0.0
             * @type {number}
             */
            this.greenMultiplier = 0;
            /**
             * @property greenOffset
             * @public
             * @readonly
             * @since 1.0.0
             * @type {number}
             */
            this.greenOffset = 0;
            /**
             * @property blueMultiplier
             * @public
             * @readonly
             * @since 1.0.0
             * @type {number}
             */
            this.blueMultiplier = 0;
            /**
             * @property blueOffset
             * @public
             * @readonly
             * @since 1.0.0
             * @type {number}
             */
            this.blueOffset = 0;
            /**
             * @property alphaMultiplier
             * @public
             * @readonly
             * @since 1.0.0
             * @type {number}
             */
            this.alphaMultiplier = 0;
            /**
             * @property alphaOffset
             * @public
             * @readonly
             * @since 1.0.0
             * @type {number}
             */
            this.alphaOffset = 0;
            /**
             * @property type
             * @public
             * @readonly
             * @since 1.0.0
             * @type {string}
             */
            this.type = "Color";
            var s = this;
            s.redMultiplier = redMultiplier;
            s.greenMultiplier = greenMultiplier;
            s.blueMultiplier = blueMultiplier;
            s.alphaMultiplier = alphaMultiplier;
            s.redOffset = redOffset;
            s.greenOffset = greenOffset;
            s.blueOffset = blueOffset;
            s.alphaOffset = alphaOffset;
        }
        /**
         * 绘画滤镜效果
         * @method drawFilter
         * @param {ImageData} imageData
         * @since 1.0.0
         * @public
         */
        ColorFilter.prototype.drawFilter = function (imageData) {
            if (imageData === void 0) { imageData = null; }
            if (!imageData)
                return;
            var s = this;
            var data = imageData.data;
            var l = data.length;
            for (var i = 0; i < l; i += 4) {
                data[i] = data[i] * s.redMultiplier + s.redOffset;
                data[i + 1] = data[i + 1] * s.greenMultiplier + s.greenOffset;
                data[i + 2] = data[i + 2] * s.blueMultiplier + s.blueOffset;
                data[i + 3] = data[i + 3] * s.alphaMultiplier + s.alphaOffset;
            }
        };
        /**
         *获取滤镜的字符串表现形式以方便比较两个滤镜是否效果一样
         * @method toString
         * @public
         * @since 1.0.0
         * @return {string}
         */
        ColorFilter.prototype.toString = function () {
            var s = this;
            return s.type + s.redMultiplier + s.greenMultiplier + s.blueMultiplier + s.alphaMultiplier + s.redOffset + s.greenOffset + s.blueOffset + s.alphaOffset;
        };
        return ColorFilter;
    }(annie.AObject));
    annie.ColorFilter = ColorFilter;
    /**
     * 矩阵变色滤镜
     * @class annie.ColorMatrixFilter
     * @extends annie.AObject
     * @public
     * @since 1.0.0
     */
    var ColorMatrixFilter = (function (_super) {
        __extends(ColorMatrixFilter, _super);
        /**
         * @method ColorMatrixFilter
         * @param {number} brightness
         * @param {number} contrast
         * @param {number} saturation
         * @param {number} hue
         * @public
         * @since 1.0.0
         */
        function ColorMatrixFilter(brightness, contrast, saturation, hue) {
            _super.call(this);
            /**
             * @property brightness
             * @public
             * @readonly
             * @since 1.0.0
             * @type {number}
             */
            this.brightness = 0;
            /**
             * @property contrast
             * @public
             * @readonly
             * @since 1.0.0
             * @type {number}
             */
            this.contrast = 0;
            /**
             * @property saturation
             * @public
             * @readonly
             * @since 1.0.0
             * @type {number}
             */
            this.saturation = 0;
            /**
             * @property hue
             * @public
             * @readonly
             * @since 1.0.0
             * @type {number}
             */
            this.hue = 0;
            /**
             * 滤镜类型 只读
             * @property type
             * @public
             * @readonly
             * @since 1.0.0
             * @type {string}
             */
            this.type = "ColorMatrix";
            var s = this;
            s.brightness = brightness;
            s.contrast = contrast;
            s.saturation = saturation;
            s.hue = hue;
            s.colorMatrix = [
                1, 0, 0, 0, 0,
                0, 1, 0, 0, 0,
                0, 0, 1, 0, 0,
                0, 0, 0, 1, 0,
                0, 0, 0, 0, 1
            ];
            //brightness
            brightness = s._cleanValue(brightness, 255);
            if (brightness != 0) {
                s._multiplyMatrix([
                    1, 0, 0, 0, brightness,
                    0, 1, 0, 0, brightness,
                    0, 0, 1, 0, brightness,
                    0, 0, 0, 1, 0,
                    0, 0, 0, 0, 1
                ]);
            }
            //contrast
            contrast = this._cleanValue(contrast, 100);
            var x;
            if (contrast != 0) {
                if (contrast < 0) {
                    x = 127 + contrast / 100 * 127;
                }
                else {
                    x = contrast % 1;
                    if (x == 0) {
                        x = ColorMatrixFilter.DELTA_INDEX[contrast];
                    }
                    else {
                        x = ColorMatrixFilter.DELTA_INDEX[(contrast << 0)] * (1 - x) + ColorMatrixFilter.DELTA_INDEX[(contrast << 0) + 1] * x; // use linear interpolation for more granularity.
                    }
                    x = x * 127 + 127;
                }
                s._multiplyMatrix([
                    x / 127, 0, 0, 0, 0.5 * (127 - x),
                    0, x / 127, 0, 0, 0.5 * (127 - x),
                    0, 0, x / 127, 0, 0.5 * (127 - x),
                    0, 0, 0, 1, 0,
                    0, 0, 0, 0, 1
                ]);
            }
            //saturation
            saturation = this._cleanValue(saturation, 100);
            if (saturation != 0) {
                x = 1 + ((saturation > 0) ? 3 * saturation / 100 : saturation / 100);
                var lumR = 0.3086;
                var lumG = 0.6094;
                var lumB = 0.0820;
                s._multiplyMatrix([
                    lumR * (1 - x) + x, lumG * (1 - x), lumB * (1 - x), 0, 0,
                    lumR * (1 - x), lumG * (1 - x) + x, lumB * (1 - x), 0, 0,
                    lumR * (1 - x), lumG * (1 - x), lumB * (1 - x) + x, 0, 0,
                    0, 0, 0, 1, 0,
                    0, 0, 0, 0, 1
                ]);
            }
            //hue
            hue = this._cleanValue(hue, 180) / 180 * Math.PI;
            if (hue != 0) {
                var cosVal = Math.cos(hue);
                var sinVal = Math.sin(hue);
                var lumR = 0.213;
                var lumG = 0.715;
                var lumB = 0.072;
                s._multiplyMatrix([
                    lumR + cosVal * (1 - lumR) + sinVal * (-lumR), lumG + cosVal * (-lumG) + sinVal * (-lumG), lumB + cosVal * (-lumB) + sinVal * (1 - lumB), 0, 0,
                    lumR + cosVal * (-lumR) + sinVal * (0.143), lumG + cosVal * (1 - lumG) + sinVal * (0.140), lumB + cosVal * (-lumB) + sinVal * (-0.283), 0, 0,
                    lumR + cosVal * (-lumR) + sinVal * (-(1 - lumR)), lumG + cosVal * (-lumG) + sinVal * (lumG), lumB + cosVal * (1 - lumB) + sinVal * (lumB), 0, 0,
                    0, 0, 0, 1, 0,
                    0, 0, 0, 0, 1
                ]);
            }
        }
        /**
         * 绘画滤镜效果
         * @method drawFilter
         * @param {ImageData} imageData
         * @since 1.0.0
         * @public
         */
        ColorMatrixFilter.prototype.drawFilter = function (imageData) {
            if (imageData === void 0) { imageData = null; }
            if (!imageData)
                return;
            var data = imageData.data;
            var l = data.length;
            var r, g, b, a;
            var mtx = this.colorMatrix;
            var m0 = mtx[0], m1 = mtx[1], m2 = mtx[2], m3 = mtx[3], m4 = mtx[4];
            var m5 = mtx[5], m6 = mtx[6], m7 = mtx[7], m8 = mtx[8], m9 = mtx[9];
            var m10 = mtx[10], m11 = mtx[11], m12 = mtx[12], m13 = mtx[13], m14 = mtx[14];
            var m15 = mtx[15], m16 = mtx[16], m17 = mtx[17], m18 = mtx[18], m19 = mtx[19];
            for (var i = 0; i < l; i += 4) {
                r = data[i];
                g = data[i + 1];
                b = data[i + 2];
                a = data[i + 3];
                data[i] = r * m0 + g * m1 + b * m2 + a * m3 + m4; //red
                data[i + 1] = r * m5 + g * m6 + b * m7 + a * m8 + m9; //green
                data[i + 2] = r * m10 + g * m11 + b * m12 + a * m13 + m14; //blue
                data[i + 3] = r * m15 + g * m16 + b * m17 + a * m18 + m19; //alpha
            }
        };
        ColorMatrixFilter.prototype._multiplyMatrix = function (colorMat) {
            var i, j, k, col = [];
            for (i = 0; i < 5; i++) {
                for (j = 0; j < 5; j++) {
                    col[j] = this.colorMatrix[j + i * 5];
                }
                for (j = 0; j < 5; j++) {
                    var val = 0;
                    for (k = 0; k < 5; k++) {
                        val += colorMat[j + k * 5] * col[k];
                    }
                    this.colorMatrix[j + i * 5] = val;
                }
            }
        };
        ColorMatrixFilter.prototype._cleanValue = function (value, limit) {
            return Math.min(limit, Math.max(-limit, value));
        };
        /**
         *获取滤镜的字符串表现形式以方便比较两个滤镜是否效果一样
         * @method toString
         * @public
         * @since 1.0.0
         * @return {string}
         */
        ColorMatrixFilter.prototype.toString = function () {
            var s = this;
            return s.type + s.brightness + s.hue + s.saturation + s.contrast;
        };
        ColorMatrixFilter.DELTA_INDEX = [
            0, 0.01, 0.02, 0.04, 0.05, 0.06, 0.07, 0.08, 0.1, 0.11,
            0.12, 0.14, 0.15, 0.16, 0.17, 0.18, 0.20, 0.21, 0.22, 0.24,
            0.25, 0.27, 0.28, 0.30, 0.32, 0.34, 0.36, 0.38, 0.40, 0.42,
            0.44, 0.46, 0.48, 0.5, 0.53, 0.56, 0.59, 0.62, 0.65, 0.68,
            0.71, 0.74, 0.77, 0.80, 0.83, 0.86, 0.89, 0.92, 0.95, 0.98,
            1.0, 1.06, 1.12, 1.18, 1.24, 1.30, 1.36, 1.42, 1.48, 1.54,
            1.60, 1.66, 1.72, 1.78, 1.84, 1.90, 1.96, 2.0, 2.12, 2.25,
            2.37, 2.50, 2.62, 2.75, 2.87, 3.0, 3.2, 3.4, 3.6, 3.8,
            4.0, 4.3, 4.7, 4.9, 5.0, 5.5, 6.0, 6.5, 6.8, 7.0,
            7.3, 7.5, 7.8, 8.0, 8.4, 8.7, 9.0, 9.4, 9.6, 9.8,
            10.0
        ];
        return ColorMatrixFilter;
    }(annie.AObject));
    annie.ColorMatrixFilter = ColorMatrixFilter;
    /**
     * 模糊滤镜
     * @class annie.BlurFilter
     * @extends annie.AOjbect
     * @public
     * @since 1.0.0
     */
    var BlurFilter = (function (_super) {
        __extends(BlurFilter, _super);
        /**
         * @method BlurFilter
         * @public
         * @since 1.0.0
         * @param {number} blurX
         * @param {number} blurY
         * @param {number} quality
         */
        function BlurFilter(blurX, blurY, quality) {
            if (blurX === void 0) { blurX = 2; }
            if (blurY === void 0) { blurY = 2; }
            if (quality === void 0) { quality = 1; }
            _super.call(this);
            /**
             * 滤镜类型 只读
             * @property type
             * @public
             * @readonly
             * @since 1.0.0
             * @type {string}
             */
            this.type = "blur";
            /**
             * @property blurX
             * @public
             * @readonly
             * @since 1.0.0
             * @type {number}
             */
            this.blurX = 0;
            /**
             * @property blurY
             * @public
             * @readonly
             * @since 1.0.0
             * @type {number}
             */
            this.blurY = 0;
            /**
             * @property quality
             * @public
             * @readonly
             * @since 1.0.0
             * @type {number}
             */
            this.quality = 1;
            var s = this;
            s.blurX = blurX > 8 ? 8 : blurX;
            s.blurY = blurY > 8 ? 8 : blurY;
            s.quality = quality > 3 ? 3 : quality;
        }
        /**
         *获取滤镜的字符串表现形式以方便比较两个滤镜是否效果一样
         * @method toString
         * @public
         * @since 1.0.0
         * @return {string}
         */
        BlurFilter.prototype.toString = function () {
            var s = this;
            return s.type + s.blurX + s.blurY + s.quality;
        };
        /**
         * 绘画滤镜效果
         * @method drawFilter
         * @param {ImageData} imageData
         * @since 1.0.0
         * @public
         */
        BlurFilter.prototype.drawFilter = function (imageData) {
            if (imageData === void 0) { imageData = null; }
            var s = this;
            var radiusX = s.blurX >> 1;
            if (isNaN(radiusX) || radiusX < 0)
                return false;
            var radiusY = s.blurY >> 1;
            if (isNaN(radiusY) || radiusY < 0)
                return false;
            if (radiusX == 0 && radiusY == 0)
                return false;
            var iterations = s.quality;
            if (isNaN(iterations) || iterations < 1)
                iterations = 1;
            iterations |= 0;
            if (iterations > 3)
                iterations = 3;
            if (iterations < 1)
                iterations = 1;
            var px = imageData.data;
            var x = 0, y = 0, i = 0, p = 0, yp = 0, yi = 0, yw = 0, r = 0, g = 0, b = 0, a = 0, pr = 0, pg = 0, pb = 0, pa = 0;
            var divx = (radiusX + radiusX + 1) | 0;
            var divy = (radiusY + radiusY + 1) | 0;
            var w = imageData.width | 0;
            var h = imageData.height | 0;
            var w1 = (w - 1) | 0;
            var h1 = (h - 1) | 0;
            var rxp1 = (radiusX + 1) | 0;
            var ryp1 = (radiusY + 1) | 0;
            var ssx = { r: 0, b: 0, g: 0, a: 0 };
            var sx = ssx;
            for (i = 1; i < divx; i++) {
                sx = sx.n = { r: 0, b: 0, g: 0, a: 0 };
            }
            sx.n = ssx;
            var ssy = { r: 0, b: 0, g: 0, a: 0 };
            var sy = ssy;
            for (i = 1; i < divy; i++) {
                sy = sy.n = { r: 0, b: 0, g: 0, a: 0 };
            }
            sy.n = ssy;
            var si = null;
            var mtx = BlurFilter.MUL_TABLE[radiusX] | 0;
            var stx = BlurFilter.SHG_TABLE[radiusX] | 0;
            var mty = BlurFilter.MUL_TABLE[radiusY] | 0;
            var sty = BlurFilter.SHG_TABLE[radiusY] | 0;
            while (iterations-- > 0) {
                yw = yi = 0;
                var ms = mtx;
                var ss = stx;
                for (y = h; --y > -1;) {
                    r = rxp1 * (pr = px[(yi) | 0]);
                    g = rxp1 * (pg = px[(yi + 1) | 0]);
                    b = rxp1 * (pb = px[(yi + 2) | 0]);
                    a = rxp1 * (pa = px[(yi + 3) | 0]);
                    sx = ssx;
                    for (i = rxp1; --i > -1;) {
                        sx.r = pr;
                        sx.g = pg;
                        sx.b = pb;
                        sx.a = pa;
                        sx = sx.n;
                    }
                    for (i = 1; i < rxp1; i++) {
                        p = (yi + ((w1 < i ? w1 : i) << 2)) | 0;
                        r += (sx.r = px[p]);
                        g += (sx.g = px[p + 1]);
                        b += (sx.b = px[p + 2]);
                        a += (sx.a = px[p + 3]);
                        sx = sx.n;
                    }
                    si = ssx;
                    for (x = 0; x < w; x++) {
                        px[yi++] = (r * ms) >>> ss;
                        px[yi++] = (g * ms) >>> ss;
                        px[yi++] = (b * ms) >>> ss;
                        px[yi++] = (a * ms) >>> ss;
                        p = ((yw + ((p = x + radiusX + 1) < w1 ? p : w1)) << 2);
                        r -= si.r - (si.r = px[p]);
                        g -= si.g - (si.g = px[p + 1]);
                        b -= si.b - (si.b = px[p + 2]);
                        a -= si.a - (si.a = px[p + 3]);
                        si = si.n;
                    }
                    yw += w;
                }
                ms = mty;
                ss = sty;
                for (x = 0; x < w; x++) {
                    yi = (x << 2) | 0;
                    r = (ryp1 * (pr = px[yi])) | 0;
                    g = (ryp1 * (pg = px[(yi + 1) | 0])) | 0;
                    b = (ryp1 * (pb = px[(yi + 2) | 0])) | 0;
                    a = (ryp1 * (pa = px[(yi + 3) | 0])) | 0;
                    sy = ssy;
                    for (i = 0; i < ryp1; i++) {
                        sy.r = pr;
                        sy.g = pg;
                        sy.b = pb;
                        sy.a = pa;
                        sy = sy.n;
                    }
                    yp = w;
                    for (i = 1; i <= radiusY; i++) {
                        yi = (yp + x) << 2;
                        r += (sy.r = px[yi]);
                        g += (sy.g = px[yi + 1]);
                        b += (sy.b = px[yi + 2]);
                        a += (sy.a = px[yi + 3]);
                        sy = sy.n;
                        if (i < h1) {
                            yp += w;
                        }
                    }
                    yi = x;
                    si = ssy;
                    if (iterations > 0) {
                        for (y = 0; y < h; y++) {
                            p = yi << 2;
                            px[p + 3] = pa = (a * ms) >>> ss;
                            if (pa > 0) {
                                px[p] = ((r * ms) >>> ss);
                                px[p + 1] = ((g * ms) >>> ss);
                                px[p + 2] = ((b * ms) >>> ss);
                            }
                            else {
                                px[p] = px[p + 1] = px[p + 2] = 0;
                            }
                            p = (x + (((p = y + ryp1) < h1 ? p : h1) * w)) << 2;
                            r -= si.r - (si.r = px[p]);
                            g -= si.g - (si.g = px[p + 1]);
                            b -= si.b - (si.b = px[p + 2]);
                            a -= si.a - (si.a = px[p + 3]);
                            si = si.n;
                            yi += w;
                        }
                    }
                    else {
                        for (y = 0; y < h; y++) {
                            p = yi << 2;
                            px[p + 3] = pa = (a * ms) >>> ss;
                            if (pa > 0) {
                                pa = 255 / pa;
                                px[p] = ((r * ms) >>> ss) * pa;
                                px[p + 1] = ((g * ms) >>> ss) * pa;
                                px[p + 2] = ((b * ms) >>> ss) * pa;
                            }
                            else {
                                px[p] = px[p + 1] = px[p + 2] = 0;
                            }
                            p = (x + (((p = y + ryp1) < h1 ? p : h1) * w)) << 2;
                            r -= si.r - (si.r = px[p]);
                            g -= si.g - (si.g = px[p + 1]);
                            b -= si.b - (si.b = px[p + 2]);
                            a -= si.a - (si.a = px[p + 3]);
                            si = si.n;
                            yi += w;
                        }
                    }
                }
            }
        };
        BlurFilter.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9];
        BlurFilter.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1];
        return BlurFilter;
    }(annie.AObject));
    annie.BlurFilter = BlurFilter;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * Canvas 渲染器
     * @class annie.CanvasRender
     * @extends annie.AObject
     * @implements IRender
     * @public
     * @since 1.0.0
     */
    var CanvasRender = (function (_super) {
        __extends(CanvasRender, _super);
        /**
         * @CanvasRender
         * @param {annie.Stage} stage
         * @public
         * @since 1.0.0
         */
        function CanvasRender(stage) {
            _super.call(this);
            /**
             * 渲染器所在最上层的对象
             * @property rootContainer
             * @public
             * @since 1.0.0
             * @type {any}
             * @default null
             */
            this.rootContainer = null;
            this._stage = stage;
        }
        /**
         * 开始渲染时执行
         * @method begin
         * @since 1.0.0
         * @public
         */
        CanvasRender.prototype.begin = function () {
            var s = this;
            var c = s.rootContainer;
            s._ctx.setTransform(1, 0, 0, 1, 0, 0);
            if (s._stage.bgColor != "") {
                s._ctx.fillStyle = s._stage.bgColor;
                s._ctx.fillRect(0, 0, c.width + 1, c.height + 1);
            }
            else {
                s._ctx.clearRect(0, 0, c.width + 1, c.height + 1);
            }
        };
        /**
         * 开始有遮罩时调用
         * @method beginMask
         * @param {annie.DisplayObject} target
         * @public
         * @since 1.0.0
         */
        CanvasRender.prototype.beginMask = function (target) {
            var s = this;
            var isHadPath = false;
            if (target.children && target.children.length > 0) {
                target = target.children[0];
            }
            if (target._command) {
                s._ctx.save();
                s._ctx.globalAlpha = 0;
                var tm = target.cMatrix;
                s._ctx.setTransform(tm.a, tm.b, tm.c, tm.d, tm.tx, tm.ty);
                var data;
                var cLen = target._command.length;
                for (var i = 0; i < cLen; i++) {
                    data = target._command[i];
                    if (data[0] == 1) {
                        isHadPath = true;
                        var paramsLen = data[2].length;
                        if (paramsLen == 0) {
                            s._ctx[data[1]]();
                        }
                        else if (paramsLen == 2) {
                            s._ctx[data[1]](data[2][0], data[2][1]);
                        }
                        else if (paramsLen == 4) {
                            s._ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3]);
                        }
                        else if (paramsLen == 5) {
                            s._ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3], data[2][4]);
                        }
                        else if (paramsLen == 6) {
                            s._ctx[data[1]](data[2][0], data[2][1], data[2][2], data[2][3], data[2][4], data[2][5]);
                        }
                    }
                }
                s._ctx.restore();
            }
            //和后面endMask的restore对应
            s._ctx.save();
            if (isHadPath) {
                s._ctx.clip();
            }
        };
        /**
         * 结束遮罩时调用
         * @method endMask
         * @public
         * @since 1.0.0
         */
        CanvasRender.prototype.endMask = function () {
            this._ctx.restore();
        };
        /**
         * 调用渲染
         * @public
         * @since 1.0.0
         * @method draw
         * @param {annie.DisplayObject} target 显示对象
         * @param {number} type 0图片 1矢量 2文字 3容器
         */
        CanvasRender.prototype.draw = function (target, type) {
            var s = this;
            if (!target._cacheImg || (target._cacheImg.nodeName == "IMG" && !target._cacheImg.complete))
                return;
            //s._ctx.save();
            s._ctx.globalAlpha = target.cAlpha;
            var tm = target.cMatrix;
            s._ctx.setTransform(tm.a, tm.b, tm.c, tm.d, tm.tx, tm.ty);
            if (type == 0) {
                //图片
                if (target._cacheImg) {
                    var tr = target.rect;
                    //因为如果有滤镜的话是重新画了图的,所以尺寸什么的跟SpriteSheet无关了
                    if (tr && !target._isCache) {
                        s._ctx.drawImage(target._cacheImg, tr.x, tr.y, tr.width, tr.height, 0, 0, tr.width, tr.height);
                    }
                    else {
                        s._ctx.translate(target._cacheX, target._cacheY);
                        s._ctx.drawImage(target._cacheImg, 0, 0);
                    }
                }
            }
            else {
                //矢量和文字
                if (target._cacheImg) {
                    //需要渲染缓存
                    s._ctx.translate(target._cacheX, target._cacheY);
                    s._ctx.drawImage(target._cacheImg, 0, 0);
                }
            }
            //s._ctx.restore();
        };
        /**
         * 初始化渲染器
         * @public
         * @since 1.0.0
         * @method init
         */
        CanvasRender.prototype.init = function () {
            var s = this;
            if (!s.rootContainer) {
                s.rootContainer = document.createElement("canvas");
                s._stage.rootDiv.appendChild(s.rootContainer);
            }
            var c = s.rootContainer;
            s._ctx = c["getContext"]('2d');
        };
        /**
         * 当舞台尺寸改变时会调用
         * @public
         * @since 1.0.0
         * @method reSize
         */
        CanvasRender.prototype.reSize = function () {
            var s = this;
            var c = s.rootContainer;
            c.width = s._stage.divWidth * annie.devicePixelRatio;
            c.height = s._stage.divHeight * annie.devicePixelRatio;
            c.style.width = s._stage.divWidth + "px";
            c.style.height = s._stage.divHeight + "px";
        };
        return CanvasRender;
    }(annie.AObject));
    annie.CanvasRender = CanvasRender;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * WebGl 渲染器
     * @class annie.WGRender
     * @extends annie.AObject
     * @implements IRender
     * @public
     * @since 1.0.2
     */
    var WGRender = (function (_super) {
        __extends(WGRender, _super);
        /**
         * @CanvasRender
         * @param {annie.Stage} stage
         * @public
         * @since 1.0.2
         */
        function WGRender(stage) {
            _super.call(this);
            /**
             * 渲染器所在最上层的对象
             * @property rootContainer
             * @public
             * @since 1.0.2
             * @type {any}
             * @default null
             */
            this.rootContainer = null;
            this._maxTextureCount = 32;
            this._uniformTexture = 0;
            this._uniformMaskTexture = 0;
            this._posAttr = 0;
            this._textAttr = 0;
            this._maskObjList = [];
            this._maskTexture = null;
            this._maskSrcTexture = null;
            this._textures = [];
            this._curTextureId = -1;
            this._stage = stage;
        }
        /**
         * 开始渲染时执行
         * @method begin
         * @since 1.0.2
         * @public
         */
        WGRender.prototype.begin = function () {
            var s = this;
            var gl = s._gl;
            if (s._stage.bgColor != "") {
                var color = s._stage.bgColor;
                var r = parseInt("0x" + color.substr(1, 2));
                var g = parseInt("0x" + color.substr(3, 2));
                var b = parseInt("0x" + color.substr(5, 2));
                gl.clearColor(r / 255, g / 255, b / 255, 1.0);
            }
            else {
                gl.clearColor(0.0, 0.0, 0.0, 0.0);
            }
            gl.clear(gl.COLOR_BUFFER_BIT);
            s._maskObjList = [];
        };
        /**
         * 开始有遮罩时调用
         * @method beginMask
         * @param {annie.DisplayObject} target
         * @public
         * @since 1.0.2
         */
        WGRender.prototype.beginMask = function (target) {
            //更新缓冲模板
            var s = this;
            var gl = s._gl;
            gl.bindFramebuffer(gl.FRAMEBUFFER, s._maskFbo);
            gl.viewport(0, 0, 1024, 1024);
            gl.disable(gl.BLEND);
            if (s._maskObjList.length == 0) {
                gl.clearColor(0.0, 0.0, 0.0, 0.0);
                gl.clear(gl.COLOR_BUFFER_BIT);
                gl.bindTexture(gl.TEXTURE_2D, s._maskTexture);
                gl.copyTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 0, 0, 1024, 1024, 0);
            }
            s._maskObjList.push(target);
            //告诉shader这个时候是画遮罩本身的帧缓冲
            gl.uniform1i(s._uMask, s._maskObjList.length * 100);
            s.draw(target, 1);
            gl.bindTexture(gl.TEXTURE_2D, s._maskTexture);
            gl.copyTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 0, 0, 1024, 1024, 0);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.uniform1i(s._uMask, s._maskObjList.length);
            gl.viewport(0, 0, s._dW, s._dH);
            gl.enable(gl.BLEND);
        };
        /**
         * 结束遮罩时调用
         * @method endMask
         * @public
         * @since 1.0.2
         */
        WGRender.prototype.endMask = function () {
            var s = this;
            var gl = s._gl;
            var len = s._maskObjList.length;
            if (len > 1) {
                s._maskObjList.pop();
                var mlCopy = s._maskObjList.concat();
                s._maskObjList.length = 0;
                for (var i = 0; i < mlCopy.length; i++) {
                    s.beginMask(mlCopy[i]);
                }
            }
            else {
                gl.uniform1i(s._uMask, 0);
                s._maskObjList.length = 0;
            }
        };
        /**
         * 当舞台尺寸改变时会调用
         * @public
         * @since 1.0.2
         * @method reSize
         */
        WGRender.prototype.reSize = function () {
            var s = this;
            var c = s.rootContainer;
            c.width = s._stage.divWidth * annie.devicePixelRatio;
            c.height = s._stage.divHeight * annie.devicePixelRatio;
            c.style.width = s._stage.divWidth + "px";
            c.style.height = s._stage.divHeight + "px";
            s._gl.viewport(0, 0, c.width, c.height);
            s._dW = c.width;
            s._dH = c.height;
            s._pMatrix = new Float32Array([
                1 / s._dW * 2, 0.0, 0.0,
                0.0, -1 / s._dH * 2, 0.0,
                -1.0, 1.0, 1.0
            ]);
        };
        WGRender.prototype._getShader = function (id) {
            var s = this;
            var gl = s._gl;
            // Find the shader script element
            var shaderText = "";
            // Create the shader object instance
            var shader = null;
            if (id == 0) {
                shaderText = 'precision highp float;' +
                    'varying vec2 v_TC;' +
                    'varying vec2 v_MP;' +
                    'uniform sampler2D u_texture;' +
                    'uniform sampler2D u_maskTexture;' +
                    'uniform float u_A;' +
                    'uniform int u_Mask;' +
                    'void main() {' +
                    'if(u_Mask==0){' +
                    'gl_FragColor = texture2D(u_texture, v_TC)*u_A;' +
                    '}else if(u_Mask>=100){' +
                    'vec4 textColor = texture2D(u_texture, v_TC);' +
                    'gl_FragColor = texture2D(u_maskTexture, v_MP);' +
                    'if(textColor.a>0.0){if(u_Mask==100){gl_FragColor.r=textColor.a;}else if(u_Mask==200&&gl_FragColor.r>0.0){gl_FragColor.g=textColor.a;}else if(u_Mask==300&&gl_FragColor.r>0.0&&gl_FragColor.g>0.0){gl_FragColor.b=textColor.a;}else if(u_Mask==400&&gl_FragColor.r>0.0&&gl_FragColor.g>0.0&&gl_FragColor.b>0.0){gl_FragColor.a=textColor.a;}}' +
                    '}else{' +
                    'vec4 textColor=texture2D(u_maskTexture, v_MP);' +
                    'float maskStep=0.0;' +
                    'if(u_Mask==1){' +
                    'maskStep=textColor.r;' +
                    '}else if(u_Mask==2){' +
                    'maskStep=textColor.g;' +
                    '}else if(u_Mask==3){' +
                    'maskStep=textColor.b;' +
                    '}else if(u_Mask==4){' +
                    'maskStep=textColor.a;' +
                    '}' +
                    'gl_FragColor = texture2D(u_texture, v_TC)*u_A*maskStep;' +
                    '}' +
                    '}';
                shader = gl.createShader(gl.FRAGMENT_SHADER);
            }
            else {
                shaderText = 'precision highp float;' +
                    'attribute vec2 a_P;' +
                    'attribute vec2 a_TC;' +
                    'varying vec2 v_TC;' +
                    'varying vec2 v_MP;' +
                    'uniform mat3 vMatrix;' +
                    'uniform mat3 pMatrix;' +
                    'void main() {' +
                    'gl_Position =vec4((pMatrix*vMatrix*vec3(a_P, 1.0)).xy, 1.0, 1.0);' +
                    'v_MP=(gl_Position.xy+vec2(1.0,1.0))*0.5;' +
                    'v_TC = a_TC;' +
                    '}';
                shader = gl.createShader(gl.VERTEX_SHADER);
            }
            // Set the shader source code in the shader object instance and compile the shader
            gl.shaderSource(shader, shaderText);
            gl.compileShader(shader);
            // Attach the shaders to the shader program
            gl.attachShader(s._program, shader);
            return shader;
        };
        /**
         * 初始化渲染器
         * @public
         * @since 1.0.2
         * @method init
         */
        WGRender.prototype.init = function () {
            var s = this;
            if (!s.rootContainer) {
                s.rootContainer = document.createElement("canvas");
                s._stage.rootDiv.appendChild(s.rootContainer);
            }
            var c = s.rootContainer;
            var gl = c.getContext("webgl") || c.getContext('experimental-webgl');
            s._gl = gl;
            s._program = gl.createProgram();
            var _program = s._program;
            //初始化顶点着色器和片元着色器
            s._getShader(0);
            s._getShader(1);
            //链接到gpu
            gl.linkProgram(_program);
            //使用当前编译的程序
            gl.useProgram(_program);
            //改变y轴方向,以对应纹理坐标
            //gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
            //设置支持有透明度纹理
            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
            //取消深度检测
            gl.disable(gl.DEPTH_TEST);
            //开启混合模式
            gl.enable(gl.BLEND);
            gl.disable(gl.CULL_FACE);
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            // 新建缓存
            s._buffer = gl.createBuffer();
            //
            s._pMI = gl.getUniformLocation(s._program, 'pMatrix');
            s._vMI = gl.getUniformLocation(s._program, 'vMatrix');
            s._uA = gl.getUniformLocation(s._program, 'u_A');
            s._uMask = gl.getUniformLocation(s._program, 'u_Mask');
            //
            s._cM = new annie.Matrix();
            s._maxTextureCount = 3; // gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
            s._uniformTexture = gl.getUniformLocation(s._program, "u_texture");
            s._uniformMaskTexture = gl.getUniformLocation(s._program, "u_maskTexture");
            s._posAttr = gl.getAttribLocation(s._program, "a_P");
            s._textAttr = gl.getAttribLocation(s._program, "a_TC");
            gl.enableVertexAttribArray(s._posAttr);
            gl.enableVertexAttribArray(s._textAttr);
            s.initMaskBuffer();
        };
        WGRender.prototype.setBuffer = function (buffer, data) {
            var s = this;
            var gl = s._gl;
            //绑定buffer
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
            //将buffer赋值给一变量
            gl.vertexAttribPointer(s._posAttr, 2, gl.FLOAT, false, 4 * 4, 0);
            gl.vertexAttribPointer(s._textAttr, 2, gl.FLOAT, false, 4 * 4, 4 * 2);
        };
        /**
         *  调用渲染
         * @public
         * @since 1.0.2
         * @method draw
         * @param {annie.DisplayObject} target 显示对象
         * @param {number} type 0图片 1矢量 2文字 3容器
         */
        WGRender.prototype.draw = function (target, type) {
            var s = this;
            if (!target._cacheImg || (target._cacheImg.nodeName == "IMG" && !target._cacheImg.complete))
                return;
            var gl = s._gl;
            var gi = target._glInfo;
            ////////////////////////////////////////////
            var vertices = [
                //x,y,textureX,textureY
                0.0, 0.0, gi.x, gi.y,
                gi.pw, 0.0, gi.w, gi.y,
                0.0, gi.ph, gi.x, gi.h,
                gi.pw, gi.ph, gi.w, gi.h
            ];
            var img = target._cacheImg;
            var m;
            if (img._annieType > 0) {
                m = s._cM;
                m.identity();
                if (img._annieType == 2) {
                    m.tx = target._cacheX * 2;
                    m.ty = target._cacheY * 2;
                }
                else {
                    m.tx = -img.width;
                    m.ty = -img.height;
                }
                m.prepend(target.cMatrix);
            }
            else {
                m = target.cMatrix;
            }
            var vMatrix = new Float32Array([
                m.a, m.b, 0,
                m.c, m.d, 0,
                m.tx, m.ty, 1
            ]);
            //if(s._maskObjList.length>0) {
            gl.uniform1i(s._uniformMaskTexture, s.activeTexture(s._maskTexture, true));
            //}
            gl.uniform1i(s._uniformTexture, s.activeTexture(img.texture));
            s.setBuffer(s._buffer, new Float32Array(vertices));
            gl.uniform1f(s._uA, target.cAlpha);
            gl.uniformMatrix3fv(s._pMI, false, s._pMatrix);
            gl.uniformMatrix3fv(s._vMI, false, vMatrix);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        };
        WGRender.prototype.activeTexture = function (texture, isMaskTexture) {
            if (isMaskTexture === void 0) { isMaskTexture = false; }
            var s = this;
            var gl = s._gl;
            var newId = -1;
            var isHave = false;
            if (isMaskTexture) {
                newId = 0;
                if (s._textures[0] == texture) {
                    isHave = true;
                }
            }
            else {
                for (var i = 1; i < s._maxTextureCount; i++) {
                    if (s._textures[i] == null) {
                        newId = i;
                        break;
                    }
                    if (s._textures[i] == texture) {
                        newId = i;
                        isHave = true;
                        break;
                    }
                }
                if (newId < 0) {
                    if (s._curTextureId < s._maxTextureCount - 1) {
                        s._curTextureId++;
                    }
                    else {
                        s._curTextureId = 1;
                    }
                    newId = s._curTextureId;
                }
            }
            gl.activeTexture(gl["TEXTURE" + newId]);
            //if(!isHave||newId ==0) {
            gl.bindTexture(gl.TEXTURE_2D, texture);
            //}
            s._textures[newId] = texture;
            return newId;
        };
        WGRender.prototype.initMaskBuffer = function () {
            var s = this;
            s._maskFbo = s.createFramebuffer(1024, 1024);
            s._maskSrcTexture = s._maskFbo.texture;
            s._maskTexture = s.createTexture(null, 1024, 1024);
        };
        WGRender.prototype.createTexture = function (bitmapData, width, height) {
            if (bitmapData === void 0) { bitmapData = null; }
            if (width === void 0) { width = 1; }
            if (height === void 0) { height = 1; }
            var gl = this._gl;
            var texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);
            var b = bitmapData;
            var h, w;
            if (bitmapData) {
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmapData);
                w = bitmapData.width;
                h = bitmapData.height;
            }
            else {
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
                w = width;
                h = height;
            }
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            texture.bitmapData = b;
            texture.width = w;
            texture.height = h;
            gl.bindTexture(gl.TEXTURE_2D, null);
            return texture;
        };
        WGRender.prototype.updateTexture = function (texture, bitmapData) {
            var s = this;
            var gl = s._gl;
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmapData);
            gl.bindTexture(gl.TEXTURE_2D, null);
        };
        WGRender.prototype.createFramebuffer = function (width, height) {
            var s = this;
            var gl = s._gl;
            var fb = gl.createFramebuffer();
            fb.width = width;
            fb.height = height;
            gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
            var texture = s.createTexture(null, width, height);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
            fb.texture = texture;
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            return fb;
        };
        /**
         * 设置webgl要渲染的东西
         * @method _setGlInfo
         * @param target
         * @param type
         * @private
         * @since 1.0.2
         */
        WGRender.setDisplayInfo = function (target, type) {
            //判断是不是webgl渲染模式
            if (!target.stage || target.stage.renderType != 1)
                return;
            if (target.stage) {
                var gi = target._glInfo;
                var renderObj = target.stage.renderObj;
                var tc = target.rect;
                var img = target._cacheImg;
                if (tc) {
                    gi.x = tc.x / img.width;
                    gi.y = tc.y / img.height;
                    gi.w = (tc.x + tc.width) / img.width;
                    gi.h = (tc.y + tc.height) / img.height;
                    gi.pw = tc.width;
                    gi.ph = tc.height;
                }
                else {
                    var cX = target._cacheX;
                    var cY = target._cacheY;
                    gi.x = cX / img.width;
                    gi.y = cY / img.height;
                    gi.w = (img.width - cX) / img.width;
                    gi.h = (img.height - cY) / img.height;
                    gi.pw = (img.width - cX * 2);
                    gi.ph = (img.height - cY * 2);
                    //因为不是雪碧图有可能中途更新了效果，但引用没变，所以需要标记告诉webgl需要更新纹理
                    img._annieType = type;
                    if (img.texture) {
                        renderObj.updateTexture(img.texture, img);
                    }
                }
            }
            if (!img.texture) {
                img.texture = renderObj.createTexture(img);
            }
        };
        return WGRender;
    }(annie.AObject));
    annie.WGRender = WGRender;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    var Eval = eval.bind(window);
    /**
     * 资源加载类,后台请求,加载资源和后台交互都可以使用此类
     * @class annie.URLLoader
     * @extends annie.EventDispatcher
     * @public
     * @since 1.0.0
     */
    var URLLoader = (function (_super) {
        __extends(URLLoader, _super);
        /**
         * @param type text json js xml image sound css svg video unKnow
         */
        function URLLoader() {
            _super.call(this);
            /**
             * 后台返回来的数据类弄
             * @property responseType
             * @type {string}
             * @default null
             * @public
             * @since 1.0.0
             */
            this.responseType = null;
            /**
             * 请求的url地址
             * @property url
             * @public
             * @since 1.0.0
             * @type {string}
             */
            this.url = "";
            /**
             * 请求后台的类型 get post
             * @property method
             * @type {string}
             * @default get
             * @public
             * @since 1.0.0
             */
            this.method = "get";
            /**
             * 需要像后台传送的数据对象
             * @property data
             * @public
             * @since 1.0.0
             * @default null
             * @type {Object}
             */
            this.data = null;
            /**
             * 格式化post请求参数
             * @method _fqs
             * @param data
             * @param query
             * @return {string}
             * @private
             * @since 1.0.0
             */
            this._fqs = function (data, query) {
                var params = [];
                if (data) {
                    for (var n in data) {
                        params.push(encodeURIComponent(n) + "=" + encodeURIComponent(data[n]));
                    }
                }
                if (query) {
                    params = params.concat(query);
                }
                return params.join("&");
            };
            //formatURIString
            /**
             * 格式化get 请求参数
             * @method _fus
             * @param src
             * @param data
             * @return {any}
             * @private
             */
            this._fus = function (src, data) {
                var s = this;
                if (data == null || data == "") {
                    return src;
                }
                var query = [];
                var idx = src.indexOf("?");
                if (idx != -1) {
                    var q = src.slice(idx + 1);
                    query = query.concat(q.split("&"));
                    return src.slice(0, idx) + "?" + s._fqs(data, query);
                }
                else {
                    return src + "?" + s._fqs(data, query);
                }
            };
        }
        /**
         * 取消加载
         * @method loadCancel
         * @public
         * @since 1.0.0
         */
        URLLoader.prototype.loadCancel = function () {
            var s = this;
            if (s._req) {
                s._req.abort();
            }
        };
        /**
         * 加载或请求数据
         * @method load
         * @public
         * @since 1.0.0
         * @param {string} url
         * @param {boolean} isBinaryData 是否向后台发送二进制数据包手blob byteArray等
         */
        URLLoader.prototype.load = function (url, isBinaryData) {
            if (isBinaryData === void 0) { isBinaryData = false; }
            var s = this;
            s.loadCancel();
            if (s.responseType == null || s.responseType == "") {
                //看看是什么后缀
                var urlSplit = url.split(".");
                var extStr = urlSplit[urlSplit.length - 1];
                var ext = extStr.split("?")[0].toLocaleLowerCase();
                if (ext == "mp3" || ext == "ogg" || ext == "wav") {
                    s.responseType = "sound";
                }
                else if (ext == "jpg" || ext == "jpeg" || ext == "png" || ext == "gif") {
                    s.responseType = "image";
                }
                else if (ext == "css") {
                    s.responseType = "css";
                }
                else if (ext == "mp4") {
                    s.responseType = "video";
                }
                else if (ext == "svg") {
                    s.responseType = "svg";
                }
                else if (ext == "xml") {
                    s.responseType = "xml";
                }
                else if (ext == "json") {
                    s.responseType = "json";
                }
                else if (ext == "txt") {
                    s.responseType = "text";
                }
                else if (ext == "js") {
                    s.responseType = "js";
                }
                else {
                    s.responseType = "unKnow";
                }
            }
            var req = null;
            if (!s._req) {
                s._req = new XMLHttpRequest();
                req = s._req;
                req.timeout = 5000;
                req.withCredentials = false;
                req.onprogress = function (event) {
                    if (!event || event.loaded > 0 && event.total == 0) {
                        return; // Sometimes we get no "total", so just ignore the progress event.
                    }
                    s.dispatchEvent("onProgress", { loadedBytes: event.loaded, totalBytes: event.total });
                };
                req.onerror = function (event) {
                    reSendTimes++;
                    if (reSendTimes > 3) {
                        s.dispatchEvent("onError", event["message"]);
                    }
                    else {
                        //断线重连
                        req.abort();
                        if (!s.data) {
                            req.send();
                        }
                        else {
                            if (isBinaryData) {
                                req.send(s.data);
                            }
                            else {
                                req.send(s._fqs(s.data, null));
                            }
                        }
                    }
                };
                req.onreadystatechange = function (event) {
                    var t = event.target;
                    if (t["readyState"] == 4) {
                        var e = new annie.Event("onComplete");
                        var result = t["response"];
                        e.data = { type: s.responseType, response: null };
                        var item;
                        switch (s.responseType) {
                            case "css":
                                item = document.createElement("link");
                                item.rel = "stylesheet";
                                item.href = s.url;
                                break;
                            case "image":
                            case "sound":
                            case "video":
                                var isBlob = true;
                                if (s.responseType == "image") {
                                    item = document.createElement("img");
                                    item.onload = function () {
                                        if (isBlob) {
                                            URL.revokeObjectURL(item.src);
                                        }
                                        item.onload = null;
                                    };
                                }
                                else {
                                    if (s.responseType == "sound") {
                                        item = document.createElement("AUDIO");
                                    }
                                    else if (s.responseType == "video") {
                                        item = document.createElement("VIDEO");
                                    }
                                    item.preload = true;
                                    item.load();
                                    item.onloadeddata = function () {
                                        if (isBlob) {
                                        }
                                        item.onloadeddata = null;
                                    };
                                }
                                try {
                                    item.src = URL.createObjectURL(result);
                                }
                                catch (err) {
                                    isBlob = false;
                                    item.src = s.url;
                                }
                                break;
                            case "json":
                                item = JSON.parse(result);
                                break;
                            case "xml":
                                item = t["responseXML"];
                                break;
                            case "js":
                                Eval(result);
                                break;
                            case "text":
                            case "unKnow":
                            default:
                                item = result;
                                break;
                        }
                        e.data["response"] = item;
                        s.data = null;
                        s.responseType = "";
                        //req.onerror = null;
                        //s._req.onreadystatechange=null;
                        //req.onprogress = null;
                        s.dispatchEvent(e);
                    }
                };
            }
            else {
                req = s._req;
            }
            var reSendTimes = 0;
            if (s.data && s.method.toLocaleLowerCase() == "get") {
                s.url = s._fus(url, s.data);
                s.data = null;
            }
            else {
                s.url = url;
            }
            if (s.responseType == "image" || s.responseType == "sound" || s.responseType == "video") {
                req.responseType = "blob";
            }
            else {
                req.responseType = "text";
            }
            req.open(s.method, s.url, true);
            if (!s.data) {
                req.send();
            }
            else {
                req.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                if (isBinaryData) {
                    req.send(s.data);
                }
                else {
                    req.send(s._fqs(s.data, null));
                }
            }
            /*req.onloadstart = function (e) {
             s.dispatchEvent("onStart");
             };*/
        };
        return URLLoader;
    }(annie.EventDispatcher));
    annie.URLLoader = URLLoader;
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    /**
     * 资源加载管理模块
     * @module annie.RESManager
     * @class annie.RESManager
     */
    var RESManager;
    (function (RESManager) {
        /**
         * 存储加载资源的总对象
         * @type {Object}
         */
        var res = {};
        /**
         * 加载器是否正在加载中
         */
        var _isLoading;
        /**
         * 加载中的场景名列表
         */
        var _loadSceneNames;
        /**
         * 加载地址的域名地址或前缀
         */
        var _domain;
        /**
         * 当前加载到哪一个资源
         */
        var _loadIndex;
        /**
         * 当前加载的总资源数
         */
        var _totalLoadRes;
        /**
         * 当前已经加载的资源数
         */
        var _loadedLoadRes;
        /**
         * 加载资源的完成回调
         */
        var _completeCallback;
        /**
         * 加载资源时的进度回调
         */
        var _progressCallback;
        /**
         * 加载配置文件的加载器
         */
        var _JSONQueue;
        /**
         * 加载资源文件的加载器
         */
        var _loaderQueue;
        /**
         * 加载器是否初始化过
         */
        var _isInited;
        /**
         * 当前加载的资源配置文件内容
         */
        var _currentConfig;
        /**
         * 获取当前加载的时间当作随机数用
         */
        var _time;
        /**
         * 加载资源数和总资源数的比
         */
        var _loadPer;
        /**
         * 单个资源占总资源数的比
         */
        var _loadSinglePer;
        /**
         * 加载一个flash2x转换的文件内容,如果未加载完成继续调用此方法将会刷新加载器,中断未被加载完成的资源!
         * @method loadScene
         * @public
         * @static
         * @since 1.0.0
         * @param {string} sceneName fla通过flash2x转换时设置的包名
         * @param {Function} progressFun 加载进度回调,回调参数为当前的进度值1-100.
         * @param {Function} completeFun 加载完成回高,无回调参数
         * @param {string} domain 加载时要设置的url前缀,默认则不更改加载路径。
         */
        RESManager.loadScene = function (sceneName, progressFun, completeFun, domain) {
            if (domain === void 0) { domain = ""; }
            //加载资源配置文件
            if (_isLoading) {
                _JSONQueue.loadCancel();
                _loaderQueue.loadCancel();
            }
            _loadSceneNames = [];
            if (domain == undefined) {
                domain = "";
            }
            _domain = domain;
            if (typeof (sceneName) == "string") {
                if (!isLoadedScene(sceneName)) {
                    _loadSceneNames.push(sceneName);
                    res[sceneName] = new Object();
                }
            }
            else {
                var len = sceneName.length;
                for (var i = 0; i < len; i++) {
                    if (!isLoadedScene(sceneName[i])) {
                        res[sceneName[i]] = new Object();
                        _loadSceneNames.push(sceneName[i]);
                    }
                }
            }
            if (_loadSceneNames.length == 0) {
                if (completeFun) {
                    completeFun();
                }
                return;
            }
            if (!_isInited) {
                _time = new Date().getTime();
                _JSONQueue = new annie.URLLoader();
                _JSONQueue.addEventListener(annie.Event.COMPLETE, onCFGComplete);
                _loaderQueue = new annie.URLLoader();
                _loaderQueue.addEventListener(annie.Event.COMPLETE, _onRESComplete);
                _loaderQueue.addEventListener(annie.Event.PROGRESS, _onRESProgress);
            }
            _loadPer = 0;
            _loadIndex = 0;
            _totalLoadRes = 0;
            _loadedLoadRes = 0;
            _isLoading = true;
            _completeCallback = completeFun;
            _progressCallback = progressFun;
            _currentConfig = [];
            _loadConfig();
        };
        function _loadConfig() {
            _JSONQueue.load(_domain + "resource/" + _loadSceneNames[_loadIndex] + "/" + _loadSceneNames[_loadIndex] + ".res.json?t=" + _time);
        }
        function onCFGComplete(e) {
            //配置文件加载完成
            var resList = e.data.response;
            _currentConfig.push(resList);
            _totalLoadRes += resList.length;
            _loadIndex++;
            if (_loadSceneNames[_loadIndex]) {
                _loadConfig();
            }
            else {
                //所有配置文件加载完成,那就开始加载资源
                _loadIndex = 0;
                _loadSinglePer = 1 / _totalLoadRes;
                _loadRes();
            }
        }
        function _onRESProgress(e) {
            if (_progressCallback) {
                _progressCallback((_loadPer + e.data.loadedBytes / e.data.totalBytes * _loadSinglePer) * 100 >> 0);
            }
        }
        function _onRESComplete(e) {
            if (e.data.type != "js" && e.data.type != "css") {
                var id = _currentConfig[_loadIndex][0].id;
                var scene = _loadSceneNames[_loadIndex];
                if (e.data.type == "sound") {
                    res[scene][id] = new annie.Sound(e.data.response);
                }
                else {
                    res[scene][id] = e.data.response;
                }
            }
            _checkComplete();
        }
        function _checkComplete() {
            _loadedLoadRes++;
            _loadPer = _loadedLoadRes / _totalLoadRes;
            _currentConfig[_loadIndex].shift();
            if (_currentConfig[_loadIndex].length > 0) {
                _loadRes();
            }
            else {
                _loadIndex++;
                if (_loadIndex == _loadSceneNames.length) {
                    //全部资源加载完成
                    _isLoading = false;
                    //_progressCallback(100);
                    _completeCallback();
                }
                else {
                    _loadRes();
                }
            }
        }
        function _loadRes() {
            var url = _domain + _currentConfig[_loadIndex][0].src;
            _loaderQueue.load(url);
        }
        /**
         * 判断一个场景是否已经被加载
         * @method isLoadedScene
         * @public
         * @static
         * @since 1.0.0
         * @param {string} sceneName
         * @returns {boolean}
         */
        function isLoadedScene(sceneName) {
            if (res[sceneName] != undefined && res[sceneName] != null) {
                return true;
            }
            else {
                return false;
            }
        }
        RESManager.isLoadedScene = isLoadedScene;
        /**
         * 删除一个场景资源,以方便系统垃圾回收
         * @method unLoadScene
         * @public
         * @static
         * @since 1.0.2
         * @param {string} sceneName
         * @param {WebGLRenderingContext} 如果是webgl渲染模式，请设置渲染的webgl对象，以方便删除不再需要使用的texture对象
         */
        function unLoadScene(sceneName, gl) {
            if (gl === void 0) { gl = null; }
            //删除webgl贴图资源
            if (gl) {
                for (var item in res[sceneName]) {
                    if (res[sceneName][item].nodeName && res[sceneName][item].nodeName == "IMG" && res[sceneName][item].texture) {
                        gl.deleteTexture(res[sceneName][item].texture);
                    }
                }
            }
            delete res[sceneName];
            var scene = eval(sceneName);
            for (var i in scene) {
                delete scene[i];
            }
            eval(sceneName + "=null;");
        }
        RESManager.unLoadScene = unLoadScene;
        /**
         * 获取已经加载场景中的声音或视频资源
         * @method getMediaByName
         * @public
         * @static
         * @since 1.0.0
         * @param {string} sceneName
         * @param {string} mediaName
         * @returns {any}
         */
        function getMediaByName(sceneName, mediaName) {
            var s = res;
            if (s[sceneName][mediaName]) {
                return s[sceneName][mediaName];
            }
            return null;
        }
        RESManager.getMediaByName = getMediaByName;
        /**
         * 通过已经加载场景中的图片资源创建Bitmap对象实例,此方法一般给Flash2x工具自动调用
         * @method b
         * @public
         * @since 1.0.0
         * @static
         * @param {string} sceneName
         * @param {string} imageName
         * @returns {any}
         */
        function b(sceneName, imageName) {
            var s = res;
            var isFind = false;
            if (s[sceneName][imageName]) {
                return new annie.Bitmap(s[sceneName][imageName]);
            }
            else {
                var m = 0;
                while (s[sceneName]["F2xSSIMG" + m]) {
                    var data = s[sceneName]["F2xSSIMGData" + m];
                    if (data[imageName] != undefined) {
                        isFind = true;
                        var imgData = data[imageName];
                        var spriteSheet = s[sceneName]["F2xSSIMG" + m];
                        //return {image: spriteSheet, rect: imgData};
                        return new annie.Bitmap(spriteSheet, imgData);
                    }
                    m++;
                }
                return null;
            }
        }
        RESManager.b = b;
        /**
         * 用一个对象批量设置另一个对象的属性值,此方法一般给Flash2x工具自动调用
         * @method d
         * @public
         * @static
         * @since 1.0.0
         * @param {Object} display
         * @param {Object} baseInfo
         * @param {Object} extendInfo
         */
        function d(display, baseInfo, extendInfo) {
            if (baseInfo === void 0) { baseInfo = null; }
            if (extendInfo === void 0) { extendInfo = null; }
            if (baseInfo) {
                if (baseInfo.x != undefined) {
                    display.x = baseInfo.x;
                }
                if (baseInfo.y != undefined) {
                    display.y = baseInfo.y;
                }
                if (baseInfo.a != undefined) {
                    display.scaleX = baseInfo.a;
                }
                if (baseInfo.b != undefined) {
                    display.scaleY = baseInfo.b;
                }
                if (baseInfo.r != undefined) {
                    display.rotation = baseInfo.r;
                }
                if (baseInfo.c != undefined) {
                    display.skewX = baseInfo.c;
                }
                if (baseInfo.d != undefined) {
                    display.skewY = baseInfo.d;
                }
                if (baseInfo.o != undefined) {
                    display.alpha = baseInfo.o;
                }
                if (baseInfo.v != undefined) {
                    display.visible = baseInfo.v;
                }
            }
            if (extendInfo && extendInfo.length > 0) {
                var index = 0;
                display.filters = [];
                while (extendInfo[index] != undefined) {
                    if (extendInfo[index] == 0) {
                        display.filters.push(new annie.ColorFilter(extendInfo[index + 1], extendInfo[index + 2], extendInfo[index + 3], extendInfo[index + 4], extendInfo[index + 5], extendInfo[index + 6], extendInfo[index + 7], extendInfo[index + 8]));
                        index += 9;
                    }
                    else if (extendInfo[index] == 1) {
                        display.filters.push(new annie.BlurFilter(extendInfo[index + 1], extendInfo[index + 2], extendInfo[index + 3]));
                        index += 4;
                    }
                    else if (extendInfo[index] == 2) {
                        var blur = (extendInfo[index + 1] + extendInfo[index + 2]) * 0.5;
                        var color = annie.Shape.getRGBA(extendInfo[index + 4], extendInfo[index + 5]);
                        var offsetX = extendInfo[index + 7] * Math.cos(extendInfo[index + 6] / 180 * Math.PI);
                        var offsetY = extendInfo[index + 7] * Math.sin(extendInfo[index + 6] / 180 * Math.PI);
                        display.filters.push(new annie.ShadowFilter(color, offsetX, offsetY, blur));
                        index += 8;
                    }
                    else if (extendInfo[index] == 3) {
                        var blur = (extendInfo[index + 1] + extendInfo[index + 2]) * 0.5;
                        var color = annie.Shape.getRGBA(extendInfo[index + 4], extendInfo[index + 5]);
                        display.filters.push(new annie.ShadowFilter(color, 0, 0, blur));
                        index += 6;
                    }
                    else if (extendInfo[index] == 4) {
                        display.filters.push(new annie.ColorMatrixFilter(extendInfo[index + 1], extendInfo[index + 2], extendInfo[index + 3], extendInfo[index + 4]));
                        index += 5;
                    }
                }
            }
        }
        RESManager.d = d;
        /**
         * 创建一个动态文本或输入文本,此方法一般给Flash2x工具自动调用
         * @method t
         * @public
         * @static
         * @since 1.0.0
         * @param {number} type
         * @param {string} text
         * @param {number} size
         * @param {string} color
         * @param {string} face
         * @param {number} top
         * @param {number} left
         * @param {number} width
         * @param {number} height
         * @param {number} lineSpacing
         * @param {string} align
         * @param {boolean} italic
         * @param {boolean} bold
         * @param {string} lineType
         * @param {boolean} showBorder
         * @returns {annie.TextFiled|annie.InputText}
         */
        function t(type, text, size, color, face, top, left, width, height, lineSpacing, align, italic, bold, lineType, showBorder) {
            if (italic === void 0) { italic = false; }
            if (bold === void 0) { bold = false; }
            if (lineType === void 0) { lineType = "single"; }
            if (showBorder === void 0) { showBorder = false; }
            var textObj;
            if (type == 0 || type == 1) {
                textObj = new annie.TextField();
                textObj.text = text;
                textObj.font = face;
                textObj.size = size;
                textObj.lineWidth = width;
                textObj.lineHeight = lineSpacing;
                textObj.textAlign = align;
                textObj.italic = italic;
                textObj.bold = bold;
                textObj.color = color;
                textObj.lineType = lineType;
            }
            else {
                textObj = new annie.InputText(lineType);
                textObj.initInfo(text, width, height, color, align, size, face, showBorder, lineSpacing / size);
                if (italic) {
                    textObj.setItalic(true);
                }
                if (bold) {
                    textObj.setBold(true);
                }
            }
            return textObj;
        }
        RESManager.t = t;
        /**
         * 获取矢量位图填充所需要的位图,为什么写这个方法,是因为作为矢量填充的位图不能存在于SpriteSheet中,要单独画出来才能正确的填充到矢量中
         */
        function sb(sceneName, bitmapName) {
            var sbName = "_f2x_s" + bitmapName;
            if (res[sceneName][sbName]) {
                return res[sceneName][sbName];
            }
            else {
                var bitmapData = null;
                var bitmap = b(sceneName, bitmapName);
                if (bitmap) {
                    if (bitmap.rect) {
                        //从SpriteSheet中取出Image单独存放
                        bitmapData = annie.Bitmap.convertToImage(bitmap);
                    }
                    else {
                        bitmapData = bitmap.bitmapData;
                    }
                    res[sceneName][sbName] = bitmapData;
                    return bitmapData;
                }
                else {
                    trace("error:矢量位图填充时,未找到位图资源!");
                    return null;
                }
            }
        }
        /**
         * 创建一个Shape矢量对象,此方法一般给Flash2x工具自动调用
         * @method s
         * @public
         * @static
         * @since 1.0.0
         * @param {Object} pathObj
         * @param {Object} fillObj
         * @param {Object} strokeObj
         * @returns {annie.Shape}
         */
        function s(pathObj, fillObj, strokeObj) {
            var shape = new annie.Shape();
            if (fillObj) {
                if (fillObj.type == 0) {
                    shape.beginFill(fillObj.color);
                }
                else if (fillObj.type == 1) {
                    shape.beginRadialGradientFill(fillObj.gradient[0], fillObj.gradient[1], fillObj.points);
                }
                else if (fillObj.type == 2) {
                    shape.beginLinearGradientFill(fillObj.gradient[0], fillObj.gradient[1], fillObj.points);
                }
                else {
                    shape.beginBitmapFill(sb(fillObj.bitmapScene, fillObj.bitmapName), fillObj.matrix);
                }
            }
            if (strokeObj) {
                if (strokeObj.type == 0) {
                    shape.beginStroke(strokeObj.color, strokeObj.lineWidth);
                }
                else if (strokeObj.type == 1) {
                    shape.beginRadialGradientStroke(strokeObj.gradient[0], strokeObj.gradient[1], strokeObj.points, strokeObj.lineWidth);
                }
                else if (strokeObj.type == 2) {
                    shape.beginLinearGradientStroke(strokeObj.gradient[0], strokeObj.gradient[1], strokeObj.points, strokeObj.lineWidth);
                }
                else {
                    shape.beginBitmapStroke(sb(strokeObj.bitmapScene, strokeObj.bitmapName), strokeObj.matrix, strokeObj.lineWidth);
                }
            }
            if (pathObj.type == 0) {
                shape.decodePath(pathObj.data);
            }
            else {
                shape.drawRoundRect(pathObj.data.x, pathObj.data.y, pathObj.data.w, pathObj.data.h, pathObj.data.topLeftRadius, pathObj.data.topRightRadius, pathObj.data.bottomLeftRadius, pathObj.data.bottomRightRadius);
            }
            if (fillObj) {
                shape.endFill();
            }
            if (strokeObj) {
                shape.endStroke();
            }
            return shape;
        }
        RESManager.s = s;
        /**
         * 向后台请求或者传输数据的快速简便方法,比直接用URLLoader要方便,小巧
         * @method ajax
         * @public
         * @since 1.0.0
         * @param info 向后台传送数据所需要设置的信息
         * @param {url} info.url 向后台请求的地址
         * @param {string} info.type 向后台请求的类型 get 和 post,默认为get
         * @param {Function} info.success 发送成功后的回调方法,后台数据将通过参数传回
         * @param {Function} info.error 发送出错后的回调方法,出错信息通过参数传回
         * @param {Object} info.data 向后台发送的信息对象,默认为null
         * @param {string} info.responseType 后台返回数据的类型,默认为"json"
         */
        function ajax(info) {
            var urlLoader = new annie.URLLoader();
            urlLoader.method = info.type == undefined ? "get" : info.type;
            urlLoader.data = info.data == undefined ? null : info.data;
            urlLoader.responseType = info.responseType == undefined ? "text" : info.responseType;
            if (info.success != undefined) {
                urlLoader.addEventListener(annie.Event.COMPLETE, info.success);
            }
            if (info.error != undefined) {
                urlLoader.addEventListener(annie.Event.ERROR, info.error);
            }
            urlLoader.load(info.url);
        }
        RESManager.ajax = ajax;
    })(RESManager = annie.RESManager || (annie.RESManager = {}));
})(annie || (annie = {}));
/**
 * @module annie
 */
var annie;
(function (annie) {
    var isUpdateTween = true;
    var TweenObj = (function (_super) {
        __extends(TweenObj, _super);
        function TweenObj() {
            _super.call(this);
            this._currentFrame = 0;
            this._totalFrames = 0;
            this._isLoop = 0;
            this._delay = 0;
            this._isFront = true;
            this._cParams = null;
            this._loop = false;
        }
        /**
         * 初始化数据
         * @method init
         * @param target
         * @param times
         * @param data
         * @param isTo
         * @public
         * @since 1.0.0
         */
        TweenObj.prototype.init = function (target, times, data, isTo) {
            if (isTo === void 0) { isTo = true; }
            var s = this;
            s._currentFrame = 1;
            s._totalFrames = times * 30 >> 0;
            s.target = target;
            s._isTo = isTo;
            s._isLoop = 0;
            s._startData = {};
            s._disData = {};
            s._delay = 0;
            s._isFront = true;
            s._ease = null;
            s._update = null;
            s._cParams = null;
            s._loop = false;
            s._completeFun = null;
            for (var item in data) {
                switch (item) {
                    case "useFrame":
                        if (data[item] == true) {
                            s._totalFrames = times;
                        }
                        break;
                    case "yoyo":
                        if (data[item] === false) {
                            s._isLoop = 0;
                        }
                        else if (data[item] === true) {
                            s._isLoop = 32767;
                        }
                        else {
                            s._isLoop = data[item];
                        }
                        break;
                    case "delay":
                        s._delay = data[item];
                        break;
                    case "ease":
                        s._ease = data[item];
                        break;
                    case "onUpdate":
                        s._update = data[item];
                        break;
                    case "onComplete":
                        s._completeFun = data[item];
                        break;
                    case "completeParams":
                        s._cParams = data[item];
                        break;
                    case "loop":
                        s._loop = data[item];
                        break;
                    default:
                        if (typeof (data[item]) == "number") {
                            if (isTo) {
                                s._startData[item] = target[item];
                                s._disData[item] = data[item] - target[item];
                            }
                            else {
                                s._startData[item] = data[item];
                                s._disData[item] = target[item] - data[item];
                            }
                        }
                }
            }
        };
        /**
         * 更新数据
         * @method update
         * @since 1.0.0
         * @public
         */
        TweenObj.prototype.update = function () {
            var s = this;
            if (s._isFront && s._delay > 0) {
                s._delay--;
                return;
            }
            //更新数据
            var per = s._currentFrame / s._totalFrames;
            if (s._ease) {
                per = s._ease(per);
            }
            for (var item in s._disData) {
                s.target[item] = s._startData[item] + s._disData[item] * per;
            }
            if (s._update) {
                s._update();
            }
            var cf = s._completeFun;
            var pm = s._cParams;
            if (s._isFront) {
                s._currentFrame++;
                if (s._currentFrame > s._totalFrames) {
                    if (s._loop) {
                        s._currentFrame = 1;
                    }
                    else {
                        if (s._isLoop > 0) {
                            s._isFront = false;
                            s._currentFrame = s._totalFrames;
                            s._isLoop--;
                        }
                        else {
                            Tween.kill(s.getInstanceId());
                        }
                    }
                    if (cf) {
                        cf.apply(null, pm);
                    }
                }
            }
            else {
                s._currentFrame--;
                if (s._currentFrame < 0) {
                    if (s._isLoop > 0) {
                        s._isFront = true;
                        s._currentFrame = 1;
                    }
                    else {
                        Tween.kill(s.getInstanceId());
                    }
                    if (cf) {
                        cf.apply(null, pm);
                    }
                }
            }
        };
        return TweenObj;
    }(annie.AObject));
    /**
     * 全局静态单列类,不要实例化此类
     * @class annie.Tween
     * @public
     * @since 1.0.0
     */
    var Tween = (function () {
        function Tween() {
        }
        /**
         * 将target对象的属性数值渐变到data中对应属性指定的数值
         * @method to
         * @static
         * @param {Object} target
         * @param {number} totalFrame 总时间长度 用帧数来表示时间
         * @param {Object} data 包含target对象的各种数字类型属性及其他一些方法属性
         * @param {number:boolean} data.yoyo 是否向摆钟一样来回循环,默认为false.设置为true则会无限循环,或想只运行指定的摆动次数,将此参数设置为数字就行了。
         * @param {number:boolean} data.loop 是否循环播放。
         * @param {Function} data.onComplete 完成函数. 默认为null
         * @param {Array} data.completeParams 完成函数参数. 默认为null，可以给完成函数里传参数
         * @param {Function} data.onUpdate 进入每帧后执行函数.默认为null
         * @param {Function} data.ease 缓动类型方法
         * @param {boolean} data.useFrame 为false用时间秒值;为true则是以帧为单位
         * @param {number} data.delay 延时，useFrame为true以帧为单位 useFrame为false以秒为单位
         * @public
         * @since 1.0.0
         */
        Tween.to = function (target, totalFrame, data) {
            return Tween.createTween(target, totalFrame, data, true);
        };
        /**
         * 将target对象从data中指定的属性数值渐变到target属性当前的数值
         * @method from
         * @static
         * @param {Object} target
         * @param {number} totalFrame 总时间长度 用帧数来表示时间
         * @param {Object} data 包含target对象的各种数字类型属性及其他一些方法属性
         * @param {number:boolean} data.yoyo 是否向摆钟一样来回循环,默认为false.设置为true则会无限循环,或想只运行指定的摆动次数,将此参数设置为数字就行了。
         * @param {number:boolean} data.loop 是否循环播放。
         * @param {Function} data.onComplete 完成结束函数. 默认为null
         * @param {Array} data.completeParams 完成函数参数. 默认为null，可以给完成函数里传参数
         * @param {Function} data.onUpdate 进入每帧后执行函数.默认为null
         * @param {Function} data.ease 缓动类型方法
         * @param {boolean} data.useFrame 为false用时间秒值;为true则是以帧为单位
         * @param {number} data.delay 延时，useFrame为true以帧为单位 useFrame为false以秒为单位
         * @public
         * @since 1.0.0
         */
        Tween.from = function (target, totalFrame, data) {
            return Tween.createTween(target, totalFrame, data, false);
        };
        Tween.createTween = function (target, totalFrame, data, isTo) {
            var tweenOjb;
            var len = Tween._tweenList.length;
            for (var i = 0; i < len; i++) {
                if (target == Tween._tweenList[i].target) {
                    tweenOjb = Tween._tweenList[i];
                    break;
                }
            }
            if (!tweenOjb) {
                len = Tween._tweenPool.length;
                if (len > 0) {
                    tweenOjb = Tween._tweenPool[0];
                    Tween._tweenPool.shift();
                }
                else {
                    tweenOjb = new TweenObj();
                }
                Tween._tweenList.push(tweenOjb);
            }
            tweenOjb.init(target, totalFrame, data, isTo);
            return tweenOjb.getInstanceId();
        };
        /**
         * 销毁所有正在运行的Tween对象
         * @method killAll
         * @static
         * @public
         * @since 1.0.0
         */
        Tween.killAll = function () {
            var len = Tween._tweenList.length;
            for (var i = 0; i < len; i++) {
                Tween._tweenList[i].target = null;
                Tween._tweenList[i]._completeFun = null;
                Tween._tweenList[i]._cParams = null;
                Tween._tweenList[i]._update = null;
                Tween._tweenList[i]._ease = null;
                Tween._tweenList[i]._loop = false;
                Tween._tweenPool.push(Tween._tweenList[i]);
            }
            Tween._tweenList.length = 0;
        };
        /**
         * @通过创建Tween对象返回时的唯一id来销毁对应的Tween对象
         * @method kill
         * @static
         * @public
         * @param {annie.Tween} tween
         * @since 1.0.0
         */
        Tween.kill = function (tweenId) {
            var len = Tween._tweenList.length;
            for (var i = 0; i < len; i++) {
                if (Tween._tweenList[i].getInstanceId() == tweenId) {
                    Tween._tweenList[i].target = null;
                    Tween._tweenList[i]._completeFun = null;
                    Tween._tweenList[i]._cParams = null;
                    Tween._tweenList[i]._update = null;
                    Tween._tweenList[i]._ease = null;
                    Tween._tweenList[i]._loop = null;
                    Tween._tweenPool.push(Tween._tweenList[i]);
                    Tween._tweenList.splice(i, 1);
                    break;
                }
            }
        };
        /**
         * quadraticIn缓动类型
         * @method quadraticIn
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.quadraticIn = function (k) {
            return k * k;
        };
        /**
         * quadraticOut 缓动类型
         * @method quadraticOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.quadraticOut = function (k) {
            return k * (2 - k);
        };
        /**
         * quadraticInOut 缓动类型
         * @method quadraticInOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.quadraticInOut = function (k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k;
            }
            return -0.5 * (--k * (k - 2) - 1);
        };
        /**
         * cubicIn 缓动类型
         * @method cubicIn
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.cubicIn = function (k) {
            return k * k * k;
        };
        /**
         * cubicOut 缓动类型
         * @method cubicOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.cubicOut = function (k) {
            return --k * k * k + 1;
        };
        /**
         * cubicInOut 缓动类型
         * @method cubicInOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.cubicInOut = function (k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k;
            }
            return 0.5 * ((k -= 2) * k * k + 2);
        };
        /**
         * quarticIn 缓动类型
         * @method quarticIn
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.quarticIn = function (k) {
            return k * k * k * k;
        };
        /**
         * quarticOut 缓动类型
         * @method quarticOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.quarticOut = function (k) {
            return 1 - (--k * k * k * k);
        };
        /**
         * quarticInOut 缓动类型
         * @method quarticInOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.quarticInOut = function (k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k * k;
            }
            return -0.5 * ((k -= 2) * k * k * k - 2);
        };
        /**
         * quinticIn 缓动类型
         * @method quinticIn
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.quinticIn = function (k) {
            return k * k * k * k * k;
        };
        /**
         * quinticOut 缓动类型
         * @method quinticOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.quinticOut = function (k) {
            return --k * k * k * k * k + 1;
        };
        /**
         * quinticInOut 缓动类型
         * @method quinticInOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.quinticInOut = function (k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k * k * k;
            }
            return 0.5 * ((k -= 2) * k * k * k * k + 2);
        };
        /**
         * sinusoidalIn 缓动类型
         * @method sinusoidalIn
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.sinusoidalIn = function (k) {
            return 1 - Math.cos(k * Math.PI / 2);
        };
        /**
         * sinusoidalOut 缓动类型
         * @method sinusoidalOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.sinusoidalOut = function (k) {
            return Math.sin(k * Math.PI / 2);
        };
        /**
         * sinusoidalInOut 缓动类型
         * @method sinusoidalInOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.sinusoidalInOut = function (k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        };
        /**
         * exponentialIn 缓动类型
         * @method exponentialIn
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.exponentialIn = function (k) {
            return k === 0 ? 0 : Math.pow(1024, k - 1);
        };
        /**
         * exponentialOut 缓动类型
         * @method exponentialOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.exponentialOut = function (k) {
            return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        };
        /**
         * exponentialInOut 缓动类型
         * @method exponentialInOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.exponentialInOut = function (k) {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(1024, k - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
        };
        /**
         * circularIn 缓动类型
         * @method circularIn
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.circularIn = function (k) {
            return 1 - Math.sqrt(1 - k * k);
        };
        /**
         * circularOut 缓动类型
         * @method circularOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.circularOut = function (k) {
            return Math.sqrt(1 - (--k * k));
        };
        /**
         * circularInOut 缓动类型
         * @method circularInOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.circularInOut = function (k) {
            if ((k *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - k * k) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        };
        /**
         * elasticIn 缓动类型
         * @method elasticIn
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.elasticIn = function (k) {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
        };
        /**
         * elasticOut 缓动类型
         * @method elasticOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.elasticOut = function (k) {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
        };
        /**
         * elasticInOut 缓动类型
         * @method elasticInOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.elasticInOut = function (k) {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            k *= 2;
            if (k < 1) {
                return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
            }
            return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
        };
        /**
         * backIn 缓动类型
         * @method backIn
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.backIn = function (k) {
            var s = 1.70158;
            return k * k * ((s + 1) * k - s);
        };
        /**
         * backOut 缓动类型
         * @method backOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.backOut = function (k) {
            var s = 1.70158;
            return --k * k * ((s + 1) * k + s) + 1;
        };
        /**
         * backInOut 缓动类型
         * @method backInOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.backInOut = function (k) {
            var s = 1.70158 * 1.525;
            if ((k *= 2) < 1) {
                return 0.5 * (k * k * ((s + 1) * k - s));
            }
            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
        };
        /**
         * bounceIn 缓动类型
         * @method bounceIn
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.bounceIn = function (k) {
            return 1 - Tween.bounceOut(1 - k);
        };
        /**
         * bounceOut 缓动类型
         * @method bounceOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.bounceOut = function (k) {
            if (k < (1 / 2.75)) {
                return 7.5625 * k * k;
            }
            else if (k < (2 / 2.75)) {
                return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
            }
            else if (k < (2.5 / 2.75)) {
                return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
            }
            else {
                return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
            }
        };
        /**
         * bounceInOut 缓动类型
         * @method bounceInOut
         * @static
         * @public
         * @since 1.0.0
         * @param {number}k
         * @returns {number}
         */
        Tween.bounceInOut = function (k) {
            if (k < 0.5) {
                return Tween.bounceIn(k * 2) * 0.5;
            }
            return Tween.bounceOut(k * 2 - 1) * 0.5 + 0.5;
        };
        /**
         * 这里之所有要独立运行,是因为可能存在多个stage，不能把这个跟其中任何一个stage放在一起update
         * @method flush
         * @private
         * @since 1.0.0
         */
        Tween.flush = function () {
            if (isUpdateTween) {
                var len = Tween._tweenList.length;
                for (var i = len - 1; i >= 0; i--) {
                    Tween._tweenList[i].update();
                }
            }
            isUpdateTween = !isUpdateTween;
        };
        Tween._tweenPool = [];
        Tween._tweenList = [];
        return Tween;
    }());
    annie.Tween = Tween;
})(annie || (annie = {}));
/**
 * @class annie
 */
var annie;
(function (annie) {
    /**
     * 是否开启调试模式
     * @public
     * @since 1.0.1
     * @public
     * @property debug
     * @type {boolean}
     * @example
     *      //在初始化stage之前输入以下代码，将会在界面调出调度面板
     *      annie.debug=true;
     */
    annie.debug = false;
    /**
     * annie引擎的版本号
     * @public
     * @since 1.0.1
     * @property version
     * @type {string}
     * @example
     *      //打印当前引擎的版本号
     *      trace(annie.version);
     */
    annie.version = "1.0.2";
    /**
     * 设备的retina值,简单点说就是几个像素表示设备上的一个点
     * @property annie.devicePixelRatio
     * @type {number}
     * @since 1.0.0
     * @public
     * @static
     * @example
     *      //打印当前设备的retina值
     *      trace(annie.devicePixelRatio);
     */
    annie.devicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
    /**
     * 当前设备是否是移动端或或是pc端,移动端是ios 或者 android
     * @property annie.osType
     * @since 1.0.0
     * @public
     * @type {string|string}
     * @static
     * @example
     *      //获取当前设备类型
     *      trace(annie.osType);
     */
    annie.osType = (function () {
        var n = navigator.userAgent.toLocaleLowerCase();
        var reg1 = /android/;
        var reg2 = /iphone|ipod|ipad/;
        if (reg1.test(n)) {
            return "android";
        }
        else if (reg2.test(n)) {
            return "ios";
        }
        else {
            return "pc";
        }
    })();
    /**
     * 一个 StageScaleMode 中指定要使用哪种缩放模式的值。以下是有效值：
     * StageScaleMode.EXACT_FIT -- 整个应用程序在指定区域中可见，但不尝试保持原始高宽比。可能会发生扭曲，应用程序可能会拉伸或压缩显示。
     * StageScaleMode.SHOW_ALL -- 整个应用程序在指定区域中可见，且不发生扭曲，同时保持应用程序的原始高宽比。应用程序的两侧可能会显示边框。
     * StageScaleMode.NO_BORDER -- 整个应用程序填满指定区域，不发生扭曲，但有可能进行一些裁切，同时保持应用程序的原始高宽比。
     * StageScaleMode.NO_SCALE -- 整个应用程序的大小固定，因此，即使播放器窗口的大小更改，它也会保持不变。如果播放器窗口比内容小，则可能进行一些裁切。
     * StageScaleMode.FIXED_WIDTH -- 整个应用程序的宽固定，因此，即使播放器窗口的大小更改，它也会保持不变。如果播放器窗口比内容小，则可能进行一些裁切。
     * StageScaleMode.FIXED_HEIGHT -- 整个应用程序的高固定，因此，即使播放器窗口的大小更改，它也会保持不变。如果播放器窗口比内容小，则可能进行一些裁切。
     * @property annie.StageScaleMode
     * @type {Object}
     * @public
     * @since 1.0.0
     * @static
     * @example
     *      //动态更改stage的对齐方式示例
     *      //以下代码放到一个舞台的显示对象的构造函数中
     *      var s=this;
     *      s.addEventListener(annie.Event.ADD_TO_STAGE,function(e){
     *          var i=0;
     *          s.stage.addEventListener(annie.MouseEvent.CLICK,function(e){
     *              var aList=[annie.StageScaleMode.EXACT_FIT,annie.StageScaleMode.NO_BORDER,annie.StageScaleMode.NO_SCALE,annie.StageScaleMode.SHOW_ALL,annie.StageScaleMode.FIXED_WIDTH,annie.StageScaleMode.FIXED_HEIGHT]
     *              var state=e.currentTarget;
     *              state.scaleMode=aList[i];
     *              state.resize();
     *              if(i>5){i=0;}
     *          }
     *      }
     *
     */
    annie.StageScaleMode = {
        EXACT_FIT: "exactFit",
        NO_BORDER: "noBorder",
        NO_SCALE: "noScale",
        SHOW_ALL: "showAll",
        FIXED_WIDTH: "fixedWidth",
        FIXED_HEIGHT: "fixedHeight"
    };
    /**
     * 跳转到指定网址
     * @method navigateToURL
     * @public
     * @since 1.0.0
     * @param {string} url
     * @static
     * @example
     *      annie.navigateToURL("http://www.annie2x.com");
     */
    function navigateToURL(url) {
        window.location.href = url;
    }
    annie.navigateToURL = navigateToURL;
    /**
     * 向后台发送数据,但不会理会任何的后台反馈
     * @method sendToURL
     * @public
     * @since 1.0.0
     * @param {string} url
     * @static
     * @example
     *      annie.sendToURL("http://www.annie2x.com");
     */
    function sendToURL(url) {
        var req = new XMLHttpRequest();
        req.open("get", url, true);
        req.send();
    }
    annie.sendToURL = sendToURL;
    /**
     * 是否允许html页面接受滑动事件。如:有些时候需要叠加一些很长的div元素在canvas上面。
     * 这个时候如果不开启这个允许滑动属性，则无法下拉div显示超出屏幕外的内容
     * @property canTouchMove
     * @type {boolean}
     * @static
     * @since 1.0.0
     * @public
     * @type{boolean}
     * @default false
     */
    annie.canHTMLTouchMove = false;
    // 作为将显示对象导出成图片的render渲染器
    var _dRender = null;
    /**
     * 将显示对象转成base64的图片数据
     * @method toDisplayDataURL
     * @static
     * @param {annie.DisplayObject} obj 显示对象
     * @param {annie.Rectangle} rect 需要裁切的区域，默认不裁切
     * @param {Object} typeInfo {type:"png"}  或者 {type:"jpeg",quality:100}  png格式不需要设置quality，jpeg 格式需要设置quality的值 从1-100
     * @param {string} bgColor 颜色值如 #fff,rgba(255,23,34,44)等！默认值为空的情况下，jpeg格式的话就是黑色底，png格式的话就是透明底
     * @return {string} base64格式数据
     */
    annie.toDisplayDataURL = function (obj, rect, typeInfo, bgColor) {
        if (rect === void 0) { rect = null; }
        if (typeInfo === void 0) { typeInfo = null; }
        if (bgColor === void 0) { bgColor = ""; }
        if (!_dRender) {
            _dRender = new annie.CanvasRender(null);
        }
        _dRender._stage = obj;
        _dRender.rootContainer = annie.DisplayObject["_canvas"];
        //设置宽高,如果obj没有添加到舞台上就去截图的话,会出现宽高不准的时候，需要刷新一下。
        if (!obj.stage) {
            obj.update();
        }
        var whObj = obj.getBounds();
        var w = rect ? rect.width : whObj.width;
        var h = rect ? rect.height : whObj.height;
        _dRender.rootContainer.width = w;
        _dRender.rootContainer.height = h;
        _dRender._ctx = _dRender.rootContainer["getContext"]('2d');
        if (bgColor == "") {
            _dRender._ctx.clearRect(0, 0, w, h);
        }
        else {
            _dRender._ctx.fillStyle = bgColor;
            _dRender._ctx.fillRect(0, 0, w, h);
        }
        var objInfo = { p: obj.parent, x: obj.x, y: obj.y, scX: obj.scaleX, scY: obj.scaleY, r: obj.rotation, skX: obj.skewX, skY: obj.skewY };
        obj.parent = null;
        obj.x = rect ? -rect.x : 0;
        obj.y = rect ? -rect.y : 0;
        obj.scaleX = obj.scaleY = 1;
        obj.rotation = obj.skewX = obj.skewY = 0;
        obj.update();
        obj.render(_dRender);
        obj.parent = objInfo.p;
        obj.x = objInfo.x;
        obj.y = objInfo.y;
        obj.scaleX = objInfo.scX;
        obj.scaleY = objInfo.scY;
        obj.rotation = objInfo.r;
        obj.skewX = objInfo.skX;
        obj.skewY = objInfo.skY;
        if (!typeInfo) {
            typeInfo = { type: "png" };
        }
        return _dRender.rootContainer.toDataURL("image/" + typeInfo.type, typeInfo.quality);
    };
})(annie || (annie = {}));
/**
 * @class 全局
 */
/**
 * 往控制台打印调试信息
 * @method trace
 * @param {Object} arg 任何个数,任意类型的参数
 * @since 1.0.0
 * @public
 * @static
 * @example
 *      trace(1);
 *      trace(1,"hello");
 */
var trace = function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i - 0] = arguments[_i];
    }
    for (var i in arguments) {
        console.log(arguments[i]);
    }
};
/**
 * 全局事件触发器
 * @static
 * @property  globalDispatcher
 * @type {annie.EventDispatcher}
 * @public
 * @since 1.0.0
 * @example
 *      //A代码放到任何合适的地方
 *      globalDispatcher.addEventListener("myTest",function(e){
 *          trace("收到了其他地方发来的消息:"+e.data);
 *      });
 *
 *      //B代码放到任何一个可以点击的对象的构造函数中
 *      this.addEventListener(annie.MouseEvent.CLICK,function(e){
 *          globalDispatcher.dispatchEvent("myTest","我是小可");
 *      });
 *
 */
var globalDispatcher = new annie.EventDispatcher();
//禁止页面滑动
document.ontouchmove = function (e) {
    if (!annie.canHTMLTouchMove || !annie.debug) {
        e.preventDefault();
    }
};
window.Flash2x = annie.RESManager;
window.F2xContainer = annie.Sprite;
window.F2xMovieClip = annie.MovieClip;
window.F2xText = annie.TextField;
window.F2xInputText = annie.InputText;
window.F2xBitmap = annie.Bitmap;
window.F2xShape = annie.Shape;
annie.Stage["addUpdateObj"](annie.Tween);
annie.Stage["flushAll"]();
window.annie=annie;

module.exports=annie;