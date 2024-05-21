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
        path : ''
    },
    {
        title : 'অংক',
        image : number,
        path : ''
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

export {
    home,
    bangla_page
}