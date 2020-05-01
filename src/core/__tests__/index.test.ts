import { per, style, RoseboxProperties } from '../../index'
import { px, rem, s, ms, ident } from '../shared/value-constructors'
import { rgb, hex, hsl } from '../color'
import { steps } from '../transition-timing-function'

test('style', () => {
  const widthStyle: RoseboxProperties = {
    backgroundColor: rgb([2, 3, 4]),
    width: per(3),
    height: px(100),
    top: px(3),
    right: px(3),
    bottom: per(10),
    left: rem(5),
    boxSizing: 'border-box',
    color: hex('#000'),
    maxHeight: px(190),
    maxWidth: per(100),
    minHeight: rem(12),
    minWidth: px(60),
    opacity: per(20),
    overflowX: 'clip',
    overflowY: 'auto',
    overflow: 'auto hidden',
    position: 'relative',
    visibility: 'collapse',
    borderColor: hsl([3, per(3), per(3)]),
    borderTopColor: hsl([3, per(3), per(3)]),
    borderRightColor: hsl([3, per(3), per(3)]),
    borderBottomColor: hsl([3, per(3), per(3)]),
    borderLeftColor: hsl([3, per(3), per(3)]),
    cursor: 'pointer',
    display: 'flex block',
    borderTopRightRadius: px(3),
    borderBottomRightRadius: per(20),
    borderBottomLeftRadius: rem(3),
    borderTopLeftRadius: 'unset',
    borderRadius: [per(10), per(20)],
    borderTopStyle: 'dotted',
    borderRightStyle: 'double',
    borderBottomStyle: 'groove',
    borderLeftStyle: 'none',
    borderStyle: ['dotted', 'hidden', 'inset', 'none'],
    borderTopWidth: px(10),
    borderRightWidth: px(100),
    borderBottomWidth: px(1),
    borderLeftWidth: px(2),
    borderWidth: px(100),
    zIndex: 3,
    textDecoration: 'orchid',
    borderTop: [px(1), 'solid', 'black'],
    borderRight: [px(1), 'solid', 'black'],
    borderBottom: ['solid', 'black', px(1)],
    borderLeft: [rgb([1, 2, 3]), 'solid', px(1)],
    fontSize: rem(1.2),
    fontWeight: 300,
    fontFamily: 'Arial',
    flexBasis: 'content',
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 1,
    flexWrap: 'nowrap',
    flex: [0, px(100)],
    letterSpacing: px(1),
    lineHeight: 'normal',
    marginTop: px(40),
    marginRight: px(40),
    marginBottom: px(100),
    marginLeft: rem(3),
    margin: [px(3), rem(3), per(20), per(20)],
    paddingTop: px(40),
    paddingRight: px(10),
    paddingBottom: px(10),
    paddingLeft: px(10),
    padding: [px(3), rem(3), per(20), per(20)],
    textAlign: 'center',
    order: 1,
    transitionProperty: ['background-color', 'color', ident('test')],
    transitionDelay: [ms(300), ms(1000)],
    textTransform: 'lowercase full-width full-size-kana',
    transitionTimingFunction: steps(3, 'jump-both'),
    transition: [steps(3, 'jump-both'), ms(1000)],
    transitionDuration: ms(500),
    boxShadow: ['inset', [px(10), px(10)], rgb([155, 155, 155])],
  }
  const received = style(widthStyle)
  const expected = {
    backgroundColor: 'rgb(2, 3, 4)',
    width: '3%',
    height: '100px',
    top: '3px',
    right: '3px',
    bottom: '10%',
    left: '5rem',
    boxSizing: 'border-box',
    color: '#000',
    maxHeight: '190px',
    maxWidth: '100%',
    minHeight: '12rem',
    minWidth: '60px',
    opacity: '20%',
    overflowX: 'clip',
    overflowY: 'auto',
    overflow: 'auto hidden',
    position: 'relative',
    visibility: 'collapse',
    borderColor: 'hsl(3, 3%, 3%)',
    borderTopColor: 'hsl(3, 3%, 3%)',
    borderRightColor: 'hsl(3, 3%, 3%)',
    borderBottomColor: 'hsl(3, 3%, 3%)',
    borderLeftColor: 'hsl(3, 3%, 3%)',
    cursor: 'pointer',
    display: 'flex block',
    borderTopRightRadius: '3px',
    borderBottomRightRadius: '20%',
    borderBottomLeftRadius: '3rem',
    borderTopLeftRadius: 'unset',
    borderRadius: '10% 20%',
    borderTopStyle: 'dotted',
    borderRightStyle: 'double',
    borderBottomStyle: 'groove',
    borderLeftStyle: 'none',
    borderStyle: 'dotted hidden inset none',
    borderTopWidth: '10px',
    borderRightWidth: '100px',
    borderBottomWidth: '1px',
    borderLeftWidth: '2px',
    borderWidth: '100px',
    zIndex: 3,
    textTransform: 'lowercase full-width full-size-kana',
    textDecoration: 'orchid',
    borderTop: '1px solid black',
    borderRight: '1px solid black',
    borderBottom: 'solid black 1px',
    borderLeft: 'rgb(1, 2, 3) solid 1px',
    fontSize: '1.2rem',
    fontWeight: 300,
    fontFamily: 'Arial',
    flexBasis: 'content',
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 1,
    flexWrap: 'nowrap',
    flex: '0 100px',
    letterSpacing: '1px',
    lineHeight: 'normal',
    marginTop: '40px',
    marginRight: '40px',
    marginBottom: '100px',
    marginLeft: '3rem',
    margin: '3px 3rem 20% 20%',
    paddingTop: '40px',
    paddingRight: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px',
    padding: '3px 3rem 20% 20%',
    textAlign: 'center',
    order: 1,
    transitionProperty: 'background-color, color, test',
    transitionDelay: '300ms, 1000ms',
    transitionTimingFunction: 'steps(3, jump-both)',
    transition: 'steps(3, jump-both) 1000ms',
    transitionDuration: '500ms',
    boxShadow: 'inset 10px 10px rgb(155, 155, 155)'
  }
  expect(received).toEqual(expected)
})

test('Test Time<s>', () => {
  const received = s(3)
  const expected = {
    __tag: 'Time',
    value: [3, 's']
  }
  expect(received).toEqual(expected)
})

test('Test Time<ms>', () => {
  const received = ms(3)
  const expected = {
    __tag: 'Time',
    value: [3, 'ms']
  }
  expect(received).toEqual(expected)
})