import { Color, serializeColor } from '../color'
import { GlobalCssKeyword, isGlobalCssKeyword } from '../shared'

const serializeBorderSideColor = (property: string) => (
  value: Color | GlobalCssKeyword
) => ({
  [property]: isGlobalCssKeyword(value) ? value : serializeColor(value),
})

/**
 * Creates a declaration object for the **`border-top-color`** property.
 * @category Declaration function
 * @formalSyntaxForValue <color>
 * @added 0.1.5
 * @implentationReference hhttps://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
 */
export const serializeBorderTopColor = serializeBorderSideColor(
  'borderTopColor'
)
export const serializeBorderRightColor = serializeBorderSideColor(
  'borderRightColor'
)
export const serializeBorderBottomColor = serializeBorderSideColor(
  'borderBottomColor'
)
export const serializeBorderLeftColor = serializeBorderSideColor(
  'borderLeftColor'
)

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderTopColorDeclaration = {
  /**
   * Maps to CSS's **`border-top-color`** property
   * @category RBProperty
   * @formalSyntaxForValue <color>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
   */
  borderTopColor: Color | GlobalCssKeyword
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderRightColorDeclaration = {
  /**
   * Maps to CSS's **`border-right-color`** property
   * @category RBProperty
   * @formalSyntaxForValue <color>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
   */
  borderRightColor: Color | GlobalCssKeyword
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderBottomColorDeclaration = {
  /**
   * Maps to CSS's **`border-bottom-color`** property
   * @category RBProperty
   * @formalSyntaxForValue <color>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
   */
  borderBottomColor: Color | GlobalCssKeyword
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderLeftColorDeclaration = {
  /**
   * Maps to CSS's **`border-left-color`** property
   * @category RBProperty
   * @formalSyntaxForValue <color>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
   */
  borderLeftColor: Color | GlobalCssKeyword
}

/**
 * @hide
 */
type BorderColor = Color | [Color, Color, Color, Color]

export const serializeBorderColor = (
  value: GlobalCssKeyword | BorderColor
): {
  borderColor: string
} => ({
  borderColor: isGlobalCssKeyword(value)
    ? value
    : !Array.isArray(value)
    ? serializeColor(value)
    : (value as Color[])
        .reduce((acc: any, item) => acc + ' ' + serializeColor(item), '')
        .trim(),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderColorDeclaration = {
  /**
   * Maps to CSS's **`border-color`** property
   * @category RBProperty
   * @formalSyntaxForValue <color>{1,4}
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
   */
  borderColor: BorderColor | GlobalCssKeyword
}
