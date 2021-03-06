import { Percentage, GlobalCssKeyword, serializeAtomicValue, ValueOrFunc } from '../shared'

export type OpacityCSSProp = 'opacity'

export const serializeOpacity = (x: number | Percentage | GlobalCssKeyword): { opacity: string | number } => ({
    opacity: serializeAtomicValue(x),
})

/** @hide */
type OpacityPropValue = number | Percentage | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type OpacityDeclaration = {
    /**
     * Maps to CSS's **`opacity`** property
     * @category RBProperty
     * @formalSyntaxForValue <number> | <percentage>
     * @added 0.2.0
     * @implementationReference https://drafts.csswg.org/css-color-4/#typedef-alpha-value
     */
    opacity: OpacityPropValue
}

export type OpacityDeclarationJSS = {
    opacity: ValueOrFunc<OpacityPropValue>
}

export const op01 = { opacity: 0.1 }
export const op02 = { opacity: 0.2 }
export const op03 = { opacity: 0.3 }
export const op04 = { opacity: 0.4 }
export const op05 = { opacity: 0.5 }
export const op06 = { opacity: 0.6 }
export const op07 = { opacity: 0.7 }
export const op08 = { opacity: 0.8 }
export const op09 = { opacity: 0.9 }
export const op1 = { opacity: 1 }
