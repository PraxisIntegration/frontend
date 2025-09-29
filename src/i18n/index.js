import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enGB from "./en-GB";
import ruRU from "./ru-RU";
import arSA from "./ar-SA";
import csCZ from "./cs-CZ";
import zhCN from "./zh-CN";
import zhTW from "./zh-TW";
import nlNL from "./nl-NL";
import tlPH from "./tl-PH";
import fiFI from "./fi-FI";
import frFR from "./fr-FR";
import deDE from "./de-DE";
import elGR from "./el-GR";
import heIL from "./he-IL";
import hiIN from "./hi-IN";
import huHU from "./hu-HU";
import itIT from "./it-IT";
import idID from "./id-ID";
import jaJP from "./ja-JP";
import koKR from "./ko-KR";
import ltLT from "./lt-LT";
import msMY from "./ms-MY";
import plPL from "./pl-PL";
import ptPT from "./pt-PT";
import skSK from "./sk-SK";
import esES from "./es-ES";
import svSE from "./sv-SE";
import thTH from "./th-TH";
import trTR from "./tr-TR";
import viVN from "./vi-VN";
import hyAM from "./hy-AM";
import bgBG from "./bg-BG";
import khKH from "./kh-KH";
import daDK from "./da-DK";
import etEE from "./et-EE";
import kaGE from "./ka-GE";
import lvLV from "./lv-LV";
import nnNO from "./nn-NO";
import srRS from "./sr-RS";
import slSI from "./sl-SI";
import taIN from "./ta-IN";
import ukUA from "./uk-UA";
import sqAL from "./sq-AL";

const resources = {
  "en-GB": { translation: enGB },
  "ru-RU": { translation: ruRU },
  "ar-SA": { translation: arSA },
  "cs-CZ": { translation: csCZ },
  "zh-CN": { translation: zhCN },
  "zh-TW": { translation: zhTW },
  "nl-NL": { translation: nlNL },
  "tl-PH": { translation: tlPH },
  "fi-FI": { translation: fiFI },
  "fr-FR": { translation: frFR },
  "de-DE": { translation: deDE },
  "el-GR": { translation: elGR },
  "he-IL": { translation: heIL },
  "hi-IN": { translation: hiIN },
  "hu-HU": { translation: huHU },
  "it-IT": { translation: itIT },
  "id-ID": { translation: idID },
  "ja-JP": { translation: jaJP },
  "ko-KR": { translation: koKR },
  "lt-LT": { translation: ltLT },
  "ms-MY": { translation: msMY },
  "pl-PL": { translation: plPL },
  "pt-PT": { translation: ptPT },
  "sk-SK": { translation: skSK },
  "es-ES": { translation: esES },
  "sv-SE": { translation: svSE },
  "th-TH": { translation: thTH },
  "tr-TR": { translation: trTR },
  "vi-VN": { translation: viVN },
  "hy-AM": { translation: hyAM },
  "bg-BG": { translation: bgBG },
  "kh-KH": { translation: khKH },
  "da-DK": { translation: daDK },
  "et-EE": { translation: etEE },
  "ka-GE": { translation: kaGE },
  "lv-LV": { translation: lvLV },
  "nn-NO": { translation: nnNO },
  "sr-RS": { translation: srRS },
  "sl-SI": { translation: slSI },
  "ta-IN": { translation: taIN },
  "uk-UA": { translation: ukUA },
  "sq-AL": { translation: sqAL },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en-GB",
  fallbackLng: "en-GB",
  interpolation: { escapeValue: false },
});

export default i18n;
