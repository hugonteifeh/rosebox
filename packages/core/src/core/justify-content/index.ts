import { GlobalCssKeyword, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'

type ContentDistribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch'

type JustifyContentValue =
    | 'normal'
    | ContentDistribution
    | 'center'
    | ['safe', 'center']
    | ['unsafe', 'center']
    | 'start'
    | ['safe', 'start']
    | ['unsafe', 'start']
    | 'end'
    | ['safe', 'end']
    | ['unsafe', 'end']
    | 'flex-start'
    | ['safe', 'flex-start']
    | ['unsafe', 'flex-start']
    | 'flex-end'
    | ['safe', 'flex-end']
    | ['unsafe', 'flex-end']
    | 'left'
    | ['safe', 'left']
    | ['unsafe', 'left']
    | 'right'
    | ['safe', 'right']
    | ['unsafe', 'right']

/** @hide */
type JustifyContentPropValue = JustifyContentValue | GlobalCssKeyword

const serializeAlignItemsPropValue = (x: JustifyContentPropValue): string =>
    Array.isArray(x) ? `${serializeAtomicValue(x[0])} ${serializeAtomicValue(x[1])}` : serializeAtomicValue(x)

export const serializeJustifyContent = (type: PropType) => (x: JustifyContentPropValue): { [key: string]: string } => {
    const propName = type === 'inline' ? 'justifyContent' : 'justify-content'
    return {
        [propName]: serializeAlignItemsPropValue(x),
    }
}

/**
 * @category RBDeclarationTypeAlias
 */
export type JustifyContentDeclaration = {
    /**
     * Maps to CSS's **`justify-content`** property
     * @inital auto
     * @definition https://www.w3.org/TR/2020/WD-css-align-3-20200421/#justify-self-property
     * @specification {@link https://www.w3.org/TR/2020/WD-css-align-3-20200421/ CSS Box Alignment Module Level 3}.
     */
    justifyContent: JustifyContentPropValue
}

export type JustifyContentDeclarationJSS = {
    justifyContent: ValueOrFunc<JustifyContentPropValue>
}
