import {
  flex,
  compose,
  width,
  per,
  __style2__,
  __RoseBoxCssProperties__,
} from '../index'
import { height } from '../core/height'
import { px } from '../core/shared/value-constructors'
import { rgb } from '../core/color'

test('compose', () => {
  const received = compose([flex(1), width(per(3)), height(per(40))])
  const expected = {
    flex: '1',
    width: '3%',
    height: '40%',
  }
  expect(received).toEqual(expected)
})

test('__style2__', () => {
  const widthStyle: __RoseBoxCssProperties__ = {
    width: per(3),
    height: px(100),
    backgroundColor: rgb([2, 3, 4]),
  }
  const received = __style2__(widthStyle)
  const expected = {
    width: '3%',
    height: '100px',
    backgroundColor: 'rgb(2, 3, 4)',
  }
  expect(received).toEqual(expected)
})
