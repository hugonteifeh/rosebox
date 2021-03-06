import { GlobalCssKeyword, LineStyle } from '../shared'
import { Color, DoubleBar3, LineWidth, ValueOrFunc } from '../shared'

import { serializeAtomicValue } from '../shared'

export const serializeOutline = (x: DoubleBar3<Color, LineStyle, LineWidth> | GlobalCssKeyword) => ({
    outline: !Array.isArray(x)
        ? typeof x === 'string'
            ? x
            : serializeAtomicValue(x)
        : (x as (Color | LineStyle | LineWidth)[]).reduce(
              (acc, item, idx) => acc + serializeAtomicValue(item) + (idx === x.length - 1 ? '' : ' '),
              '',
          ),
})

/** @hide */
type OutlinePropValue = DoubleBar3<Color, LineStyle, LineWidth> | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type OutlineDeclaration = {
    /**
     * Maps to CSS's **`outline`** property
     * @category RBProperty
     */
    outline: OutlinePropValue
}

export type OutlineDeclarationJSS = {
    outline: ValueOrFunc<OutlinePropValue>
}
