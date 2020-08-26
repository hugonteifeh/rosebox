import { serializeOverflow } from './core/overflow'

import { serializeDisplay } from './core/display'
import { serializeWidth } from './core/width'
import { serializeHeight } from './core/height'
import { serializeBackgroundColor } from './core/background-color'
import {
  serializeTop,
  serializeRight,
  serializeBottom,
  serializeLeft,
} from './core/box-offsets'
import { serializeBoxSizingValue } from './core/box-sizing'
import { serializeColor } from './core/color'
import { serializeMaxHeight } from './core/max-height'
import { serializeMaxWidth } from './core/max-width'
import { serializeMinHeightValue } from './core/min-height'
import { serializeMinWidth } from './core/min-width'
import { serializeOpacity } from './core/opacity'
import {
  serializeBorderColor,
  serializeBorderTopColor,
  serializeBorderRightColor,
  serializeBorderBottomColor,
  serializeBorderLeftColor,
} from './core/border-color'
import { serializeCursor } from './core/cursor'
import {
  serializeBorderTopRightRadius,
  serializeBorderBottomRightRadius,
  serializeBorderBottomLeftRadius,
  serializeBorderTopLeftRadius,
  serializeBorderRadius,
} from './core/border-radius'
import {
  serializeBorderTopStyle,
  serializeBorderRightStyle,
  serializeBorderBottomStyle,
  serializeBorderLeftStyle,
  serializeBorderStyle,
} from './core/border-style'
import {
  serializeBorderTopWidth,
  serializeBorderRightWidth,
  serializeBorderBottomWidth,
  serializeBorderLeftWidth,
  serializeBorderWidth,
} from './core/border-width'
//import { serializeTextDecorationValue } from './core/text-decoration'
import {
  serializeBorderTop,
  serializeBorderRight,
  serializeBorderBottom,
  serializeBorderLeft,
  serializeBorder,
} from './core/border'
import { serializeFontSize } from './core/font-size'
import { serializeFontFamily } from './core/font-family'
import { serializeFlexBasis } from './core/flexbox/flex-basis'
import { serializeFlexDirectionValue } from './core/flexbox/flex-direction'
import { serializeFlexGrow } from './core/flexbox/flex-grow'
import { serializeFlexShrink } from './core/flexbox/flex-shrink'
import { serializeFlexWrap } from './core/flexbox/flex-wrap'
import { serializeFlex } from './core/flexbox/flex'
import { serializeLetterSpacing } from './core/letter-spacing'
import { serializeLineHeight } from './core/line-height'
import {
  serializeMarginTopValue,
  serializeMarginRightValue,
  serializeMarginBottomValue,
  serializeMarginLeftValue,
  serializeMargin,
  serializeMarginX,
  serializeMarginY,
} from './core/margin'
import {
  serializePaddingTopValue,
  serializePaddingRightValue,
  serializePaddingBottomValue,
  serializePaddingLeftValue,
  serializePadding,
  serializePaddingX,
  serializePaddingY,
} from './core/padding'
import { serializeOrder } from './core/flexbox/order'
import { serializeTransitionProperty } from './core/transition-property'
import { serializeTransitionDelay } from './core/transition-delay'
import { serializeTransitionTimingFunction } from './core/transition-timing-function'
import { serializeTransition } from './core/transition'
import { serializeTransitionDuration } from './core/transition-duration'
import { serializeBoxShadow } from './core/box-shadow'
import { serializeAlignItems } from './core/align-items'
import { serializeTransform } from './core/transform'
import { serializeTransformOrigin } from './core/transform-origin'
import { serializePerspectiveOrigin } from './core/perspective-origin'
import { serializePerspectivePropertyValue } from './core/perspective'
import { serializeFontStretch } from './core/font-stretch'
import { serializeFontSizeAdjust } from './core/font-size-adjust'
import { serializeFontVariationSettings } from './core/font-variation-settings'
import { serializeFontSynthesis } from './core/font-synthesis'
import { serializeAlignContent } from './core/align-content'
import { serializeFontVariantLigatures } from './core/font-variant-ligatures'
import { serializeBackgroundImage } from './core/background-image'
import { serializeBackgroundPosition } from './core/background-position'
import { serializeWordSpacing } from './core/word-spacing'
import { serializeAlignSelf } from './core/align-self'
import { serializeBackgroundSize } from './core/background-size'
import { serializeBackfaceVisibility } from './core/backface-visibility'
import { serializeAnimationName } from './core/animation-name'
import { serializeAnimationDuration } from './core/animation-duration'
import { serializeAnimationTimingFunction } from './core/animation-timing-function'
import { serializeAnimationDelay } from './core/animation-delay'
import { serializeAnimationIterationCount } from './core/animation-iteration-count'
import { serializeAnimationDirection } from './core/animation-direction'
import { serializeAnimationPlayState } from './core/animation-play-state'
import { serializeAnimationFillMode } from './core/animation-fill-mode'
import { serializeAnimation } from './core/animation'
import { serializeWillChange } from './core/will-change'
import { serializeVolume } from './core/volume'
import { serializeVerticalAlign } from './core/vertical-align'
import { serializeTextUnderlinePosition } from './core/text-underline-position'
import { serializeTextUnderlineOffset } from './core/text-underline-offset'
import { serializeVoiceVolume } from './core/voice-volume'
import { serializeVoiceRate } from './core/voice-rate'
import { serializeTextTransform } from './core/text-transform'
import { serializeTextEmphasisColor } from './core/text-emphasis-color'
import { serializeTextEmphasisSkip } from './core/text-emphasis-skip'
import { serializeTextEmphasisPosition } from './core/text-emphasis-position'

export const funcMap: any = {
  alignContent: serializeAlignContent,
  alignItems: serializeAlignItems,
  animation: serializeAnimation,
  animationDuration: serializeAnimationDuration,
  animationTimingFunction: serializeAnimationTimingFunction,
  animationDelay: serializeAnimationDelay,
  animationIterationCount: serializeAnimationIterationCount,
  animationDirection: serializeAnimationDirection,
  animationPlayState: serializeAnimationPlayState,
  animationFillMode: serializeAnimationFillMode,
  borderTopColor: serializeBorderTopColor,
  borderRightColor: serializeBorderRightColor,
  borderBottomColor: serializeBorderBottomColor,
  borderLeftColor: serializeBorderLeftColor,
  borderColor: serializeBorderColor,
  borderTopRightRadius: serializeBorderTopRightRadius,
  borderBottomRightRadius: serializeBorderBottomRightRadius,
  borderBottomLeftRadius: serializeBorderBottomLeftRadius,
  borderTopLeftRadius: serializeBorderTopLeftRadius,
  borderRadius: serializeBorderRadius,
  borderTop: serializeBorderTop,
  borderRight: serializeBorderRight,
  borderBottom: serializeBorderBottom,
  borderLeft: serializeBorderLeft,
  border: serializeBorder,
  borderTopStyle: serializeBorderTopStyle,
  borderRightStyle: serializeBorderRightStyle,
  borderBottomStyle: serializeBorderBottomStyle,
  borderLeftStyle: serializeBorderLeftStyle,
  borderStyle: serializeBorderStyle,
  borderTopWidth: serializeBorderTopWidth,
  borderRightWidth: serializeBorderRightWidth,
  borderBottomWidth: serializeBorderBottomWidth,
  borderLeftWidth: serializeBorderLeftWidth,
  borderWidth: serializeBorderWidth,
  backgroundColor: serializeBackgroundColor,
  backgroundImage: serializeBackgroundImage,
  backgroundPosition: serializeBackgroundPosition,
  boxShadow: serializeBoxShadow,
  cursor: serializeCursor,
  display: serializeDisplay,
  width: serializeWidth,
  height: serializeHeight,
  minHeight: serializeMinHeightValue,
  maxHeight: serializeMaxHeight,
  minWidth: serializeMinWidth,
  maxWidth: serializeMaxWidth,
  color: serializeColor,
  top: serializeTop,
  right: serializeRight,
  bottom: serializeBottom,
  left: serializeLeft,
  flexBasis: serializeFlexBasis,
  flexDirection: serializeFlexDirectionValue,
  flexGrow: serializeFlexGrow,
  flexShrink: serializeFlexShrink,
  boxSizing: serializeBoxSizingValue,
  opacity: serializeOpacity,
  overflow: serializeOverflow,
  //textDecoration: serializeTextDecorationValue,
  textTransform: serializeTextTransform,
  textEmphasisColor: serializeTextEmphasisColor,
  textEmphasisSkip: serializeTextEmphasisSkip,
  textEmphasisPosition: serializeTextEmphasisPosition,
  fontSize: serializeFontSize,
  fontStretch: serializeFontStretch,
  fontSizeAdjust: serializeFontSizeAdjust,
  fontFamily: serializeFontFamily,
  fontVariationSettings: serializeFontVariationSettings,
  fontSynthesis: serializeFontSynthesis,
  flexWrap: serializeFlexWrap,
  flex: serializeFlex,
  letterSpacing: serializeLetterSpacing,
  lineHeight: serializeLineHeight,
  marginTop: serializeMarginTopValue,
  marginRight: serializeMarginRightValue,
  marginBottom: serializeMarginBottomValue,
  marginLeft: serializeMarginLeftValue,
  margin: serializeMargin,
  marginX: serializeMarginX,
  marginY: serializeMarginY,
  paddingTop: serializePaddingTopValue,
  paddingRight: serializePaddingRightValue,
  paddingBottom: serializePaddingBottomValue,
  paddingLeft: serializePaddingLeftValue,
  padding: serializePadding,
  paddingX: serializePaddingX,
  paddingY: serializePaddingY,
  order: serializeOrder,
  transitionProperty: serializeTransitionProperty,
  transitionDelay: serializeTransitionDelay,
  transitionTimingFunction: serializeTransitionTimingFunction,
  transition: serializeTransition,
  transitionDuration: serializeTransitionDuration,
  animationName: serializeAnimationName,
  transform: serializeTransform,
  transformOrigin: serializeTransformOrigin,
  perspectiveOrigin: serializePerspectiveOrigin,
  perspective: serializePerspectivePropertyValue,
  fontVariantLigatures: serializeFontVariantLigatures,
  wordSpacing: serializeWordSpacing,
  alignSelf: serializeAlignSelf,
  backgroundSize: serializeBackgroundSize,
  backfaceVisibility: serializeBackfaceVisibility,
  willChange: serializeWillChange,
  volume: serializeVolume,
  verticalAlign: serializeVerticalAlign,
  textUnderlinePosition: serializeTextUnderlinePosition,
  textUnderlineOffset: serializeTextUnderlineOffset,
  voiceVolume: serializeVoiceVolume,
  voiceRate: serializeVoiceRate,
}
