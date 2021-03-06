import { Color, PropType, ValueOrFunc } from '../shared'
import { GlobalCssKeyword, serializeAtomicValue } from '../shared'

const serializeBorderSideColor = (property: string) => (x: Color | GlobalCssKeyword) => ({
    [property]: serializeAtomicValue(x),
})

/**
 * Creates a declaration object for the **`border-top-color`** property.
 * @category Declaration function
 * @formalSyntaxForValue <color>
 * @added 0.1.5
 * @implentationReference hhttps://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
 */
export const serializeBorderTopColor = (type: PropType) =>
    serializeBorderSideColor(type === 'inline' ? 'borderTopColor' : 'border-top-color')
export const serializeBorderRightColor = (type: PropType) =>
    serializeBorderSideColor(type === 'inline' ? 'borderRightColor' : 'border-right-color')
export const serializeBorderBottomColor = (type: PropType) =>
    serializeBorderSideColor(type === 'inline' ? 'borderBottomColor' : 'border-bottom-color')
export const serializeBorderLeftColor = (type: PropType) =>
    serializeBorderSideColor(type === 'inline' ? 'borderLeftColor' : 'border-left-color')

/** @hide */
type BorderSidePropValue = Color | GlobalCssKeyword
/**
 * @category RBDeclarationTypeAlias
 */
export type BorderTopColorDeclaration = {
    /**
     * Maps to CSS's **`border-top-color`** property
     * @initial currentColor
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderTopColor: BorderSidePropValue
}
export type BorderTopColorDeclarationJSS = {
    borderTopColor: ValueOrFunc<BorderSidePropValue>
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderRightColorDeclaration = {
    /**
     * Maps to CSS's **`border-right-color`** property
     * @initial currentColor
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderRightColor: BorderSidePropValue
}
export type BorderRightColorDeclarationJSS = {
    borderRightColor: ValueOrFunc<BorderSidePropValue>
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderBottomColorDeclaration = {
    /**
     * Maps to CSS's **`border-bottom-color`** property
     * @initial currentColor
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderBottomColor: BorderSidePropValue
}
export type BorderBottomColorDeclarationJSS = {
    borderBottomColor: ValueOrFunc<BorderSidePropValue>
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderLeftColorDeclaration = {
    /**
     * Maps to CSS's **`border-left-color`** property
     * @initial currentColor
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderLeftColor: BorderSidePropValue
}
export type BorderLeftColorDeclarationJSS = {
    borderLeftColor: ValueOrFunc<BorderSidePropValue>
}

/**
 * @hide
 */
type BorderColor = Color | [Color, Color, Color, Color]

export const serializeBorderColor = (type: PropType) => (
    x: GlobalCssKeyword | BorderColor,
): {
    [key: string]: string
} => {
    const propName = type === 'inline' ? 'borderColor' : 'border-color'
    return {
        [propName]: !Array.isArray(x)
            ? serializeAtomicValue(x)
            : x.reduce((acc, item) => acc + ' ' + serializeAtomicValue(item), '').trim(),
    }
}

/** @hide */
type BorderColorPropValue = BorderColor | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderColorDeclaration = {
    /**
     * Maps to CSS's **`border-color`** property
     * @initial (see individual properties)
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderColor: BorderColorPropValue
}
export type BorderColorDeclarationJSS = {
    borderColor: ValueOrFunc<BorderColorPropValue>
}
