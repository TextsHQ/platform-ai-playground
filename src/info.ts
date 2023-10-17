import {
  PlatformInfo,
  Attribute,
  MessageDeletionMode,
} from '@textshq/platform-sdk'

const icon = '<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="5" fill="black"/><path d="M13.2117 6.91057C13.3478 6.50651 13.3948 6.07848 13.3497 5.65505C13.3047 5.23163 13.1685 4.82257 12.9504 4.45519C12.2868 3.31587 10.9531 2.72978 9.65065 3.00512C9.28999 2.6094 8.83013 2.31426 8.31724 2.14934C7.80436 1.98441 7.2565 1.95551 6.72871 2.06553C6.20091 2.17556 5.71176 2.42063 5.31037 2.77615C4.90899 3.13166 4.6095 3.5851 4.44199 4.09092C4.01907 4.17647 3.61954 4.35008 3.2701 4.60015C2.92065 4.85022 2.62934 5.17097 2.41563 5.54099C1.74483 6.67846 1.8971 8.11335 2.79212 9.08919C2.6556 9.49307 2.60808 9.92104 2.65276 10.3445C2.69743 10.7679 2.83327 11.1771 3.05117 11.5446C3.71549 12.6843 5.05004 13.2703 6.35328 12.9946C6.63982 13.3129 6.9919 13.5672 7.38601 13.7406C7.78012 13.9139 8.20718 14.0024 8.63869 14C9.97367 14.0012 11.1565 13.151 11.5642 11.8971C11.9871 11.8114 12.3866 11.6377 12.736 11.3876C13.0854 11.1376 13.3768 10.8169 13.5906 10.447C14.2533 9.31151 14.1004 7.88436 13.2117 6.91057ZM8.63862 13.2146C8.10574 13.2155 7.58956 13.0312 7.18059 12.6943L7.25255 12.654L9.67461 11.2749C9.73489 11.24 9.78493 11.1903 9.81983 11.1306C9.85472 11.0709 9.87327 11.0032 9.87365 10.9343V7.5658L10.8976 8.15011C10.9027 8.15265 10.907 8.15632 10.9104 8.16083C10.9137 8.16535 10.9159 8.17058 10.9168 8.17609V10.9674C10.9142 12.2075 9.89574 13.212 8.63862 13.2146ZM3.74176 11.1519C3.47452 10.6967 3.37857 10.1632 3.47076 9.64512L3.54272 9.68771L5.96715 11.0667C6.02714 11.1015 6.09544 11.1198 6.165 11.1198C6.23456 11.1198 6.30286 11.1015 6.36286 11.0667L9.32446 9.38256V10.5488C9.32417 10.5548 9.32252 10.5607 9.31962 10.566C9.31671 10.5713 9.31264 10.5759 9.30769 10.5794L6.85448 11.9751C5.7643 12.5946 4.37154 12.2263 3.74176 11.1519ZM3.10384 5.94792C3.37294 5.4898 3.79769 5.14037 4.30289 4.9615V7.80003C4.30198 7.86862 4.31975 7.9362 4.35434 7.9957C4.38893 8.05521 4.43908 8.10446 4.49956 8.13833L7.44677 9.81547L6.4228 10.3998C6.41726 10.4027 6.41108 10.4042 6.40481 10.4042C6.39853 10.4042 6.39236 10.4027 6.38682 10.3998L3.93842 9.00643C2.85041 8.38442 2.4773 7.01158 3.10384 5.93607V5.94792ZM11.5163 7.87577L8.55954 6.18209L9.58107 5.60019C9.58661 5.59729 9.59278 5.59577 9.59906 5.59577C9.60533 5.59577 9.61151 5.59729 9.61704 5.60019L12.0655 6.99582C12.4399 7.20892 12.745 7.52265 12.9454 7.9004C13.1457 8.27815 13.233 8.70433 13.1971 9.12918C13.1611 9.55403 13.0034 9.96003 12.7423 10.2998C12.4812 10.6395 12.1275 10.899 11.7226 11.0479V8.20924C11.7204 8.14078 11.7003 8.07404 11.6642 8.01556C11.628 7.95709 11.5771 7.90896 11.5163 7.87577ZM12.5355 6.36423L12.4635 6.32164L10.0439 4.93077C9.98355 4.89583 9.91484 4.87741 9.84487 4.87741C9.77489 4.87741 9.70618 4.89583 9.64583 4.93077L6.6866 6.61486V5.44864C6.68599 5.44273 6.687 5.43676 6.68954 5.43137C6.69207 5.42597 6.69602 5.42135 6.70099 5.41798L9.14938 4.02462C9.52465 3.81138 9.95371 3.70794 10.3864 3.7264C10.8191 3.74487 11.2375 3.88447 11.5926 4.12889C11.9478 4.37331 12.2251 4.71244 12.3921 5.1066C12.5591 5.50077 12.6088 5.93369 12.5355 6.35472V6.36423ZM6.12784 8.43162L5.10386 7.84972C5.09875 7.84667 5.09438 7.84254 5.09106 7.83763C5.08774 7.83273 5.08555 7.82716 5.08465 7.82133V5.03709C5.08523 4.60999 5.20905 4.19187 5.44164 3.83162C5.67424 3.47137 6.006 3.18388 6.39812 3.00276C6.79025 2.82164 7.22655 2.75438 7.656 2.80883C8.08546 2.86328 8.49033 3.03721 8.82327 3.31027L8.75131 3.35051L6.32925 4.7296C6.26897 4.76448 6.21893 4.81422 6.18404 4.87394C6.14914 4.93367 6.13059 5.00131 6.13021 5.07024L6.12784 8.43162ZM6.68422 7.24887L8.00316 6.49902L9.32446 7.24887V8.74856L8.0079 9.49847L6.68667 8.74856L6.68422 7.24887Z" fill="white"/></svg>'

const info: PlatformInfo = {
  name: 'ai-playground',
  version: '1.0.0',
  displayName: 'AI Playground',
  icon,
  loginMode: 'custom',
  deletionMode: MessageDeletionMode.UNSUPPORTED,
  attributes: new Set([
    Attribute.NO_SUPPORT_GROUP_THREAD_CREATION,
    // Attribute.NO_SUPPORT_SINGLE_THREAD_CREATION,
    Attribute.NO_SUPPORT_TYPING_INDICATOR,
    Attribute.CANNOT_MESSAGE_SELF,
  ]),
  attachments: {
    noSupport: true,
  },
}

export default info
