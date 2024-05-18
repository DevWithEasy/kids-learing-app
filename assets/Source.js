import data from '../assets/data.json'

class SourceData{
    constructor(){
        this.data = data
    }

    getMainData(){
        return this.data
    }
    banglaAll(){
        return this.data['bangla_alphabet']
    }
    banglaSingle(id){
        return this.data['bangla_alphabet'].find(alphabet=> alphabet._id === id)
    }
    karAll(){
        return this.data['bangla_kar']
    }
    karSingle(id){
        return this.data['bangla_kar'].find(alphabet=> alphabet._id === id)
    }
    puncuationAll(){
        return this.data['bangla_puncuation']
    }
    puncuationSingle(id){
        return this.data['bangla_puncuation'].find(alphabet=> alphabet._id === id)
    }
    folaAll(){
        return this.data['bangla_fola']
    }
    folaSingle(id){
        return this.data['bangla_fola'].find(alphabet=> alphabet._id === id)
    }
    englishAll(){
        return this.data['english_alphabet']
    }
    englishSingle(id){
        return this.data['english_alphabet'].find(alphabet=> alphabet._id === id)
    }
    arabicAll(){
        return this.data['arabic_alphabet']
    }
    arabicSingle(id){
        return this.data['arabic_alphabet'].find(alphabet=> alphabet._id === id)
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