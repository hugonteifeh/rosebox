import { Angle } from './angle'
import { Color } from './color'
import { Percentage } from './percentage'
import { LengthPercentage, RBType, serializeAtomicValue } from './shared'

type LinearColorStop = Color | [Color, LengthPercentage]
type ColorStopList = (LinearColorStop | Percentage)[]

export const serializeLinearGradient = (val: Gradient): string => {
  const { data } = val
  const { direction,  colorStopList} = data
  const angleStr = direction ? `${serializeAtomicValue(direction)}, ` : ''
  const colorstopStr = (colorStopList).reduce(
    (acc, item, idx) =>
      acc +
      serializeColorStopListItem(item) +
      (idx === colorStopList.length - 1 ? '' : ', '),
    ''
  )
  return `linear-gradient(${angleStr}${colorstopStr})`
}


type ToSideOrCorner = 
| 'to left' | 'to right'
| 'to top' | 'to bottom'
| 'to left top' | 'to top left'
| 'to left bottom' | 'to bottom left'
| 'to right top' | 'to top right'
| 'to right bottom' | 'to bottom right'

/**
 * @skip
 */
type LinearGradientParamsObj = {
  direction?: Angle | ToSideOrCorner,
  colorStopList: ColorStopList
}

/**
 *
 * A type that maps to CSS's **`<gradient>`** type.
 * @added 0.1.0
 */
export class Gradient<A extends 'linear-gradient' | 'radial-gradient' = any>
  implements RBType<LinearGradientParamsObj> {
  gradientType: A
  data: LinearGradientParamsObj
  valueConstructor: Function

  private constructor(gradientType: A, x: LinearGradientParamsObj) {
    this.gradientType = gradientType
    this.valueConstructor = Gradient.linGrad
    this.data = x
  }

<<<<<<< HEAD
  /** @category Value constructor 
   * Creates a linear-gradient.
=======
  /**
   * Constructs a value of type **`Gradient<linear-gradient>`**. This function maps to CSS's **`linear-gradient()`**
>>>>>>> master
  */
  static linGrad(x: LinearGradientParamsObj): Gradient<'linear-gradient'> {
    return new Gradient('linear-gradient', x)
  }

  serialize(): string {
    return serializeLinearGradient(this)
  }
}

<<<<<<< HEAD
=======
/** @category Value constructor */
>>>>>>> master
export const linGrad = Gradient.linGrad

const serializeColorStopListItem = (
  x: LinearColorStop | Percentage
): string => {
  return !Array.isArray(x)
    ? serializeAtomicValue(x)
    : `${serializeAtomicValue(x[0])} ${serializeAtomicValue(x[1])}`
}
