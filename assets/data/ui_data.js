//homepage
import bangla from '../app_image/bangla.png'
import english from '../app_image/english.png'
import arabic from '../app_image/arabic.png'
import season from '../app_image/season.png'
import month from '../app_image/month.png'
import day from '../app_image/day.png'
import number from '../app_image/number.png'
import color from '../app_image/color.png'
//bangla
import bangla_vowel from '../app_image/bangla_vowel.png'
import bangla_constant from '../app_image/bangla_constant.png'
import bangla_fola from '../app_image/bangla_fola.png'
import bangla_kar from '../app_image/bangla_kar.png'
import bangla_punctuation from '../app_image/bangla_punctuation.png'
//english
import english_capital from '../app_image/english_capital.png'
import english_small from '../app_image/english_small.png'
//math
import math_bangla from '../app_image/math_bangla.png'
import math_english from '../app_image/math_english.png'
import math_table from '../app_image/math_table.png'
//day
import day_bangla from '../app_image/day.png'
import day_english from '../app_image/day_english.png'
//month
import month_bangla from '../app_image/month.png'
import month_english from '../app_image/month_english.png'
//season
import season_bangla from '../app_image/season.png'
import season_english from '../app_image/season_english.png'

const home = [
    {
        title: 'আরবি',
        image: arabic,
        path: '/arabic'
    },
    {
        title: 'বাংলা',
        image: bangla,
        path: '/bangla'
    },
    {
        title: 'ইংরেজি',
        image: english,
        path: '/english'
    },
    {
        title: 'অংক',
        image: number,
        path: '/math'
    },
    {
        title: 'বারের নাম',
        image: day,
        path: '/day'
    },
    {
        title: 'মাসের নাম',
        image: month,
        path: '/month'
    },
    {
        title: 'ঋতু (কাল)',
        image: season,
        path: '/season'
    },
    {
        title: 'রং পরিচিতি',
        image: color,
        path: '/color'
    },
    {
        title: 'Game',
        image: color,
        path: '/game/bangla/alphabet_match'
    },
]

const bangla_page = [
    {
        title: 'স্বরবর্ণ',
        image: bangla_vowel,
        path: '/bangla/vowel'
    },
    {
        title: 'ব্যঞ্জনবর্ণ',
        image: bangla_constant,
        path: '/bangla/constant'
    },
    {
        title: 'বাংলা কার',
        image: bangla_kar,
        path: '/bangla/kar'
    },
    {
        title: 'বাংলা ফলা',
        image: bangla_fola,
        path: '/bangla/fola'
    },
    {
        title: 'যতিচিহ্ন',
        image: bangla_punctuation,
        path: '/bangla/punctuation'
    },
]

const english_page = [
    {
        title: 'বড় হাতের বর্ণ',
        image: english_capital,
        path: '/english/capital'
    },
    {
        title: 'ছোট হাতের বর্ণ',
        image: english_small,
        path: '/english/small'
    },
]

const math_page = [
    {
        title: 'সংখ্যা (১-১০০)',
        image: math_bangla,
        path: '/math/bangla'
    },
    {
        title: 'Number (1-100)',
        image: math_english,
        path: '/math/english'
    },
    {
        title: 'নামতা',
        image: math_table,
        path: '/math/table'
    },
]

const day_page = [
    {
        title: 'বাংলা নাম',
        image: day_bangla,
        path: '/day/bangla'
    },
    {
        title: 'ইংরেজি নাম',
        image: day_english,
        path: '/day/english'
    }
]

const month_page = [
    {
        title: 'বাংলা নাম',
        image: month_bangla,
        path: '/month/bangla'
    },
    {
        title: 'ইংরেজি নাম',
        image: month_english,
        path: '/month/english'
    }
]

const season_page = [
    {
        title: 'বাংলা নাম',
        image: season_bangla,
        path: '/season/bangla'
    },
    {
        title: 'ইংরেজি নাম',
        image: season_english,
        path: '/season/english'
    }
]

export {
    home,
    bangla_page,
    english_page,
    math_page,
    day_page,
    month_page,
    season_page
}