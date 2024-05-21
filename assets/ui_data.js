//homepage
import bangla from '../assets/bangla.png'
import english from '../assets/english.png'
import arabic from '../assets/arabic.png'
import season from '../assets/season.png'
import month from '../assets/month.png'
import day from '../assets/day.png'
import number from '../assets/number.png'
import color from '../assets/color.png'
//bangla
import bangla_vowel from '../assets/bangla_vowel.png'
import bangla_constant from '../assets/bangla_constant.png'
import bangla_fola from '../assets/bangla_fola.png'
import bangla_kar from '../assets/bangla_kar.png'
import bangla_punctuation from '../assets/bangla_punctuation.png'
//english
import english_capital from '../assets/english_capital.png'
import english_small from '../assets/english_small.png'
//math
import math_bangla from '../assets/math_bangla.png'
import math_english from '../assets/math_english.png'
import math_table from '../assets/math_table.png'

const home = [
    {
        title : 'আরবি',
        image : arabic,
        path : ''
    },
    {
        title : 'বাংলা',
        image : bangla,
        path : '/bangla'
    },
    {
        title : 'ইংরেজি',
        image : english,
        path : '/english'
    },
    {
        title : 'অংক',
        image : number,
        path : '/math'
    },
    {
        title : 'বারের নাম',
        image : day,
        path : ''
    },
    {
        title : 'মাসের নাম',
        image : month,
        path : ''
    },
    {
        title : 'ঋতু (কাল)',
        image : season,
        path : ''
    },
    {
        title : 'রং পরিচিতি',
        image : color,
        path : ''
    },
]

const bangla_page = [
    {
        title : 'স্বরবর্ণ',
        image : bangla_vowel,
        path : '/bangla/vowel'
    },
    {
        title : 'ব্যঞ্জনবর্ণ',
        image : bangla_constant,
        path : '/bangla/constant'
    },
    {
        title : 'বাংলা কার',
        image : bangla_kar,
        path : '/bangla/kar'
    },
    {
        title : 'বাংলা ফলা',
        image : bangla_fola,
        path : '/bangla/fola'
    },
    {
        title : 'যতিচিহ্ন',
        image : bangla_punctuation,
        path : '/bangla/punctuation'
    },
]

const english_page = [
    {
        title : 'বড় হাতের বর্ণ',
        image : english_capital,
        path : '/english/capital'
    },
    {
        title : 'ছোট হাতের বর্ণ',
        image : english_small,
        path : '/english/small'
    },
]

const math_page = [
    {
        title : 'সংখ্যা (১-১০০)',
        image : math_bangla,
        path : '/math/bangla'
    },
    {
        title : 'Number (1-100)',
        image : math_english,
        path : '/math/english'
    },
    {
        title : 'নামতা',
        image : math_table,
        path : '/math/table'
    },
]

export {
    home,
    bangla_page,
    english_page,
    math_page
}