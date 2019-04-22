"use strict";var exports=module.exports={};
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('../../npm/babel-runtime/core-js/object/get-prototype-of.js');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('../../npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('../../npm/babel-runtime/helpers/createClass.js');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('../../npm/babel-runtime/helpers/possibleConstructorReturn.js');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('../../npm/babel-runtime/helpers/inherits.js');

var _inherits3 = _interopRequireDefault(_inherits2);

var _labradorImmutable = require('../../npm/labrador-immutable/index.js');

var _seamlessImmutable = require('../../npm/seamless-immutable/src/seamless-immutable.js');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _redux = require('../../npm/redux/es/index.js');

var _labradorRedux = require('../../npm/labrador-redux/index.js');

var _request = require('../../utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _specialitem = require('../../components/specialitem/specialitem.js');

var _specialitem2 = _interopRequireDefault(_specialitem);

var _cart = require('../../redux/cart.js');

var cartActions = _interopRequireWildcard(_cart);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var object = _labradorImmutable.PropTypes.object,
    func = _labradorImmutable.PropTypes.func;

var Cart = function (_Component) {
  (0, _inherits3.default)(Cart, _Component);

  function Cart(props) {
    (0, _classCallCheck3.default)(this, Cart);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Cart.__proto__ || (0, _getPrototypeOf2.default)(Cart)).call(this, props));

    _this.handleAdd = function (id) {
      _this.props.addTodo(id);
    };

    _this.state = (0, _seamlessImmutable2.default)({});
    return _this;
  }

  (0, _createClass3.default)(Cart, [{
    key: 'children',
    value: function children() {
      var _this2 = this;

      var listArrs = this.state.baseData.products;
      console.log(this.handleAdd);
      return {
        shoppinglist: listArrs.map(function (item) {
          return {
            component: _specialitem2.default,
            key: item.areaitemid,
            props: {
              // info: item.productInfo,
              mainimg3: item.productInfo.mainimg3,
              productname: item.productInfo.productname,
              originalprice: item.productInfo.originalprice,
              id: item.productInfo.id,
              sellStatus: item.productInfo.sellStatus,
              onAdd: _this2.handleAdd
            }
          };
        })
      };
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var _this3 = this;

      _request2.default.fetchCartData().then(function (result) {
        // console.log('***fetchCartData()', result);
        _this3.setState({
          baseData: result.data.data.venders[0]
        });
        // console.log('===== state' + this.state.itemArr);
      }).then(function (error) {
        console.log(error);
      });
    }
  }]);
  return Cart;
}(_labradorImmutable.Component);

Cart.propTypes = {
  baseData: object,
  addTodo: func
};
Cart.defaultProps = {
  baseData: {}
};
exports.default = (0, _labradorRedux.connect)(function (_ref) {
  var todos = _ref.todos;
  return { todos: todos };
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({
    addTodo: cartActions.add
  }, dispatch);
})(Cart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiY2FydEFjdGlvbnMiLCJvYmplY3QiLCJmdW5jIiwiQ2FydCIsInByb3BzIiwiaGFuZGxlQWRkIiwiaWQiLCJhZGRUb2RvIiwic3RhdGUiLCJsaXN0QXJycyIsImJhc2VEYXRhIiwicHJvZHVjdHMiLCJjb25zb2xlIiwibG9nIiwic2hvcHBpbmdsaXN0IiwibWFwIiwiaXRlbSIsImNvbXBvbmVudCIsImtleSIsImFyZWFpdGVtaWQiLCJtYWluaW1nMyIsInByb2R1Y3RJbmZvIiwicHJvZHVjdG5hbWUiLCJvcmlnaW5hbHByaWNlIiwic2VsbFN0YXR1cyIsIm9uQWRkIiwiZmV0Y2hDYXJ0RGF0YSIsInRoZW4iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsImRhdGEiLCJ2ZW5kZXJzIiwiZXJyb3IiLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJ0b2RvcyIsImRpc3BhdGNoIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxXOzs7Ozs7SUFFSkMsTSxnQ0FBQUEsTTtJQUFRQyxJLGdDQUFBQSxJOztJQUVWQyxJOzs7QUFVSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtJQUNYQSxLQURXOztBQUFBLFVBd0NuQkMsU0F4Q21CLEdBd0NQLFVBQUNDLEVBQUQsRUFBUTtBQUNsQixZQUFLRixLQUFMLENBQVdHLE9BQVgsQ0FBbUJELEVBQW5CO0FBQ0QsS0ExQ2tCOztBQUVqQixVQUFLRSxLQUFMLEdBQWEsaUNBQVUsRUFBVixDQUFiO0FBRmlCO0FBR2xCOzs7OytCQUVVO0FBQUE7O0FBQ1QsVUFBTUMsV0FBVyxLQUFLRCxLQUFMLENBQVdFLFFBQVgsQ0FBb0JDLFFBQXJDO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSxLQUFLUixTQUFqQjtBQUNBLGFBQU87QUFDTFMsc0JBQWNMLFNBQVNNLEdBQVQsQ0FBYSxVQUFDQyxJQUFEO0FBQUEsaUJBQVc7QUFDcENDLDRDQURvQztBQUVwQ0MsaUJBQUtGLEtBQUtHLFVBRjBCO0FBR3BDZixtQkFBTztBQUNMO0FBQ0FnQix3QkFBVUosS0FBS0ssV0FBTCxDQUFpQkQsUUFGdEI7QUFHTEUsMkJBQWFOLEtBQUtLLFdBQUwsQ0FBaUJDLFdBSHpCO0FBSUxDLDZCQUFlUCxLQUFLSyxXQUFMLENBQWlCRSxhQUozQjtBQUtMakIsa0JBQUlVLEtBQUtLLFdBQUwsQ0FBaUJmLEVBTGhCO0FBTUxrQiwwQkFBWVIsS0FBS0ssV0FBTCxDQUFpQkcsVUFOeEI7QUFPTEMscUJBQU8sT0FBS3BCO0FBUFA7QUFINkIsV0FBWDtBQUFBLFNBQWI7QUFEVCxPQUFQO0FBZUQ7Ozs2QkFHUTtBQUFBOztBQUNQLHdCQUFRcUIsYUFBUixHQUNDQyxJQURELENBQ00sVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCO0FBQ0EsZUFBS0MsUUFBTCxDQUFjO0FBQ1puQixvQkFBVWtCLE9BQU9FLElBQVAsQ0FBWUEsSUFBWixDQUFpQkMsT0FBakIsQ0FBeUIsQ0FBekI7QUFERSxTQUFkO0FBR0E7QUFDRCxPQVBELEVBUUNKLElBUkQsQ0FRTSxVQUFDSyxLQUFELEVBQVc7QUFDZnBCLGdCQUFRQyxHQUFSLENBQVltQixLQUFaO0FBQ0QsT0FWRDtBQVdEOzs7OztBQWhERzdCLEksQ0FDRzhCLFMsR0FBWTtBQUNqQnZCLFlBQVVULE1BRE87QUFFakJNLFdBQVNMO0FBRlEsQztBQURmQyxJLENBTUcrQixZLEdBQWU7QUFDcEJ4QixZQUFVO0FBRFUsQztrQkFtRFQsNEJBQ2I7QUFBQSxNQUFHeUIsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZ0IsRUFBRUEsWUFBRixFQUFoQjtBQUFBLENBRGEsRUFFYixVQUFDQyxRQUFEO0FBQUEsU0FBYywrQkFBbUI7QUFDL0I3QixhQUFTUCxZQUFZcUM7QUFEVSxHQUFuQixFQUVYRCxRQUZXLENBQWQ7QUFBQSxDQUZhLEVBS2JqQyxJQUxhLEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAnbGFicmFkb3ItaW1tdXRhYmxlJztcbmltcG9ydCBpbW11dGFibGUgZnJvbSAnc2VhbWxlc3MtaW1tdXRhYmxlJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdsYWJyYWRvci1yZWR1eCc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCBzaG9wcGluZ2l0ZW0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zcGVjaWFsaXRlbS9zcGVjaWFsaXRlbSc7XG5pbXBvcnQgKiBhcyBjYXJ0QWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9jYXJ0JztcblxuY29uc3QgeyBvYmplY3QsIGZ1bmMgfSA9IFByb3BUeXBlcztcblxuY2xhc3MgQ2FydCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYmFzZURhdGE6IG9iamVjdCxcbiAgICBhZGRUb2RvOiBmdW5jXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBiYXNlRGF0YToge31cbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gaW1tdXRhYmxlKHt9KTtcbiAgfVxuXG4gIGNoaWxkcmVuKCkge1xuICAgIGNvbnN0IGxpc3RBcnJzID0gdGhpcy5zdGF0ZS5iYXNlRGF0YS5wcm9kdWN0cztcbiAgICBjb25zb2xlLmxvZyh0aGlzLmhhbmRsZUFkZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3BwaW5nbGlzdDogbGlzdEFycnMubWFwKChpdGVtKSA9PiAoe1xuICAgICAgICBjb21wb25lbnQ6IHNob3BwaW5naXRlbSxcbiAgICAgICAga2V5OiBpdGVtLmFyZWFpdGVtaWQsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgLy8gaW5mbzogaXRlbS5wcm9kdWN0SW5mbyxcbiAgICAgICAgICBtYWluaW1nMzogaXRlbS5wcm9kdWN0SW5mby5tYWluaW1nMyxcbiAgICAgICAgICBwcm9kdWN0bmFtZTogaXRlbS5wcm9kdWN0SW5mby5wcm9kdWN0bmFtZSxcbiAgICAgICAgICBvcmlnaW5hbHByaWNlOiBpdGVtLnByb2R1Y3RJbmZvLm9yaWdpbmFscHJpY2UsXG4gICAgICAgICAgaWQ6IGl0ZW0ucHJvZHVjdEluZm8uaWQsXG4gICAgICAgICAgc2VsbFN0YXR1czogaXRlbS5wcm9kdWN0SW5mby5zZWxsU3RhdHVzLFxuICAgICAgICAgIG9uQWRkOiB0aGlzLmhhbmRsZUFkZFxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICB9O1xuICB9XG5cblxuICBvbkxvYWQoKSB7XG4gICAgcmVxdWVzdC5mZXRjaENhcnREYXRhKClcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnKioqZmV0Y2hDYXJ0RGF0YSgpJywgcmVzdWx0KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBiYXNlRGF0YTogcmVzdWx0LmRhdGEuZGF0YS52ZW5kZXJzWzBdXG4gICAgICB9KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCc9PT09PSBzdGF0ZScgKyB0aGlzLnN0YXRlLml0ZW1BcnIpO1xuICAgIH0pXG4gICAgLnRoZW4oKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVBZGQgPSAoaWQpID0+IHtcbiAgICB0aGlzLnByb3BzLmFkZFRvZG8oaWQpO1xuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoeyB0b2RvcyB9KSA9PiAoeyB0b2RvcyB9KSxcbiAgKGRpc3BhdGNoKSA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMoe1xuICAgIGFkZFRvZG86IGNhcnRBY3Rpb25zLmFkZFxuICB9LCBkaXNwYXRjaClcbikoQ2FydCk7XG4iXX0=
Page(require('../../npm/labrador/index.js')._createPage(exports.default));
