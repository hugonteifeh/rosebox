import { per, style } from '../../index'
import { px, rem, s, ms, ident, pos } from '../../index'
import { rgb, hex, hsl } from '../color'
import { steps } from '../transition-timing-function'
import { skew } from '../transform/skew'
import { deg } from '../shared'
import { translateX } from '../transform'

test('style', () => {
  const received = style({
    backgroundColor: rgb(2, 3, 4),
    width: per(3),
    height: px(100),
    boxSizing: 'border-box',
    color: hex('#000'),
    maxHeight: px(190),
    maxWidth: per(100),
    minHeight: rem(12),
    minWidth: px(60),
    opacity: per(20),
    overflowX: 'clip',
    overflowY: 'auto',
    overflow: ['auto', 'hidden'],
    position: 'relative',
    visibility: 'collapse',
    zIndex: 3,
    textDecoration: 'orchid',
    fontSize: rem(1.2),
    fontWeight: 300,
    fontFamily: 'Arial',
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 1,
    flexWrap: 'nowrap',
    flex: [px(100), 0, 1],
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
    transitionProperty: ['backgroundColor', 'color', ident('test')],
    transitionDelay: [ms(300), ms(1000)],
    textTransform: 'lowercase full-width full-size-kana',
    transitionTimingFunction: steps(3, 'jump-both'),
    transition: [steps(3, 'jump-both'), ms(1000)],
    transitionDuration: ms(500),
    boxShadow: ['inset', [px(10), px(10)], rgb(155, 155, 155)],
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    transform: [skew(deg(10), deg(10)), translateX(per(30))],
    alignContent: 'space-evenly',
    backfaceVisibility: 'hidden',
    transformStyle: 'flat',
    perspectiveOrigin: pos(px(40), px(20)),
    perspective: px(30),
    objectFit: 'fill',
    alignSelf: ['safe', 'center'],
  })

  const expected = {
    backgroundColor: 'rgb(2, 3, 4)',
    width: '3%',
    height: '100px',
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
    cursor: 'pointer',
    display: 'flex block',
    zIndex: 3,
    textTransform: 'lowercase full-width full-size-kana',
    textDecoration: 'orchid',
    fontSize: '1.2rem',
    fontWeight: 300,
    fontFamily: 'Arial',
    flexDirection: 'column',
    flexShrink: 1,
    flexWrap: 'nowrap',
    flex: '100px 0 1',
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
    transitionProperty: 'backgroundColor, color, test',
    transitionDelay: '300ms, 1000ms',
    transitionTimingFunction: 'steps(3, jump-both)',
    transition: 'steps(3, jump-both) 1000ms',
    transitionDuration: '500ms',
    boxShadow: 'inset 10px 10px rgb(155, 155, 155)',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    transform: 'skew(10deg, 10deg) translateX(30%)',
    alignContent: 'space-evenly',
    backfaceVisibility: 'hidden',
    transformStyle: 'flat',
    perspectiveOrigin: '40px 20px',
    perspective: '30px',
    objectFit: 'fill',
    alignSelf: 'safe center',
  }
  expect(received).toEqual(expected)
})

test('Test Time<s>', () => {
  const received = s(3)
  const expected = {
    __tag: 'Time',
    value: [3, 's'],
  }
  expect(received).toEqual(expected)
})

test('Test Time<ms>', () => {
  const received = ms(3)
  const expected = {
    __tag: 'Time',
    value: [3, 'ms'],
  }
  expect(received).toEqual(expected)
})
