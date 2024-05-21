import data from '../assets/main'

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
    numbers(){
        return this.data['numbers']
    }
    days(){
        return this.data['days']
    }
    months(){
        return this.data['months']
    }
    seasons(){
        return this.data['seasons']
    }
    colors(){
        return this.data['colors']
    }
}
const Source = new SourceData()
export default Source