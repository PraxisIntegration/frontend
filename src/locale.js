export const SUPPORTED_LOCALES = [
  "ar-SA",
  "cs-CZ",
  "zh-CN",
  "zh-TW",
  "nl-NL",
  "en-GB",
  "tl-PH",
  "fi-FI",
  "fr-FR",
  "de-DE",
  "el-GR",
  "he-IL",
  "hi-IN",
  "hu-HU",
  "it-IT",
  "id-ID",
  "ja-JP",
  "ko-KR",
  "lt-LT",
  "ms-MY",
  "pl-PL",
  "pt-PT",
  "ru-RU",
  "sk-SK",
  "es-ES",
  "sv-SE",
  "th-TH",
  "tr-TR",
  "vi-VN",
  "hy-AM",
  "bg-BG",
  "kh-KH",
  "da-DK",
  "et-EE",
  "ka-GE",
  "lv-LV",
  "nn-NO",
  "sr-RS",
  "sl-SI",
  "ta-IN",
  "uk-UA",
  "sq-AL",
];

const LANGUAGE_TO_DEFAULT_LOCALE = {
  ar: "ar-SA",
  cs: "cs-CZ",
  zh: "zh-CN",
  nl: "nl-NL",
  en: "en-GB",
  tl: "tl-PH",
  fi: "fi-FI",
  fr: "fr-FR",
  de: "de-DE",
  el: "el-GR",
  he: "he-IL",
  hi: "hi-IN",
  hu: "hu-HU",
  it: "it-IT",
  id: "id-ID",
  ja: "ja-JP",
  ko: "ko-KR",
  lt: "lt-LT",
  ms: "ms-MY",
  pl: "pl-PL",
  pt: "pt-PT",
  ru: "ru-RU",
  sk: "sk-SK",
  es: "es-ES",
  sv: "sv-SE",
  th: "th-TH",
  tr: "tr-TR",
  vi: "vi-VN",
  hy: "hy-AM",
  bg: "bg-BG",
  kh: "kh-KH",
  da: "da-DK",
  et: "et-EE",
  ka: "ka-GE",
  lv: "lv-LV",
  nn: "nn-NO",
  sr: "sr-RS",
  sl: "sl-SI",
  ta: "ta-IN",
  uk: "uk-UA",
  sq: "sq-AL",
};

export function normalizeLocale(input, fallback = "en-GB") {
  if (!input || typeof input !== "string") return fallback;
  const cleaned = input.trim().replace("_", "-").toLowerCase();

  if (cleaned.includes("-")) {
    const [lang, region] = cleaned.split("-");
    const candidate = `${lang}-${region.toUpperCase()}`;
    return SUPPORTED_LOCALES.includes(candidate)
      ? candidate
      : LANGUAGE_TO_DEFAULT_LOCALE[lang] || fallback;
  }

  const lang = cleaned;
  return LANGUAGE_TO_DEFAULT_LOCALE[lang] || fallback;
}

export function isRTL(locale) {
  return locale === "ar-SA" || locale === "he-IL";
}
