import data from '../assets/main'
import bengaliToNumeric from '../utils/banglaNumeric'

class SourceData{
    constructor(){
        this.data = data
    }

    getMainData(){
        return this.data
    }
    banglaAll(){
        return this.data['bangla_alphabets']
    }
    banglaSingle(id){
        return this.data['bangla_alphabets'].find(alphabet=> alphabet._id === id)
    }
    banglaVowel(){
        return this.data['bangla_alphabets'].filter(alphabet=> alphabet.vowel === true)
    }
    banglaConstant(){
        return this.data['bangla_alphabets'].filter(alphabet=> alphabet.vowel === false)
    }
    karAll(){
        return this.data['bangla_kar']
    }
    karSingle(id){
        return this.data['bangla_kar'].find(alphabet=> alphabet._id === id)
    }
    puncuationAll(){
        return this.data['bagla_punctuation_marks']
    }
    puncuationSingle(id){
        return this.data['bagla_punctuation_marks'].find(alphabet=> alphabet._id === id)
    }
    folaAll(){
        return this.data['bangla_fola']
    }
    folaSingle(id){
        return this.data['bangla_fola'].find(alphabet=> alphabet._id === id)
    }
    englishAll(){
        return this.data['enslish_alphabets']
    }
    englishSingle(id){
        return this.data['enslish_alphabets'].find(alphabet=> alphabet._id === id)
    }
    arabicAll(){
        return this.data['arabic_alphabets']
    }
    arabicSingle(id){
        return this.data['arabic_alphabets'].find(alphabet=> alphabet._id === id)
    }
    numbersBangla(){
        return this.data['numbers'].filter(number=> number.lang === 'bn').sort((a, b) => bengaliToNumeric[a.letter] - bengaliToNumeric[b.letter])
    }
    numbersEnglish(){
        return this.data['numbers'].filter(number=> number.lang === 'en').sort((a,b)=>a.letter - b.letter )
    }
    daysBangla(){
        return this.data['days'].filter(day=> day.lang === 'bn')
    }
    daysEnglish(){
        return this.data['days'].filter(day=> day.lang === 'en')
    }
    monthsBangla(){
        return this.data['months'].filter(month=> month.lang === 'bn')
    }
    monthsEnglish(){
        return this.data['months'].filter(month=> month.lang === 'en')
    }
    seasonsBangla(){
        return this.data['seasons'].filter(season=> season.lang === 'bn')
    }
    seasonsEnglish(){
        return this.data['seasons'].filter(season=> season.lang === 'en')
    }
    colors(){
        return this.data['colors']
    }
}
const Source = new SourceData()
export default Source