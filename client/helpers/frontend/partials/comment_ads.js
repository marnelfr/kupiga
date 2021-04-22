let template = Template.commentAds

class GoodsQuiz {

    constructor() {
        this.quiz
    }

    getQuiz (quiz) {
        this.quiz = quiz
        let tab = []
        for(let num=1; num < 15; num++){
            if(!!this.quiz["q"+num]){
                let ans = this.getAns(this.quiz['q'+num])
                tab.push({
                    quiz: this.quiz["q"+num].quiz,
                    answers: ans
                })
            }else{
                break
            }
        }
        return tab
    }

    getAns(quiz) {
        let answer = quiz.answers
        let tab = []
        if(!!answer.ans1){
            tab.push(answer.ans1)
        }
        if(!!answer.ans2){
            tab.push(answer.ans2)
        }
        if(!!answer.ans3){
            tab.push(answer.ans3)
        }
        if(!!answer.ans4){
            tab.push(answer.ans4)
        }
        return tab
    }

    additionnalQuiz() {
        $('#quiz-btn').hide('slow')
        $('#text-com').hide('slow').text("Questionnaire").show('slow')
        $("#div-comment").hide('slow')
        $('#q0').show('slow')
        Session.set('user-comment', $('#comment').val())
    }

}
let goodsQuiz = new GoodsQuiz()

template.onCreated(() => {
    let id = Session.get('goods-info')
    id = id.goodsId
    Meteor.subscribe('goodsQuiz', id)
    Session.set('user-answer', {})
    Session.set('user-comment', '')
    Session.set('t', 0)
})

template.onRendered(() => {


    //console.log(Quiz.find().fetch())

})

template.onDestroyed(() => {
    Meteor.call('userIp', (error, userId) => { //On a dans userId ici, l'id identifiant l'utilisateur suivant qu'il est connecté à un compte ou pas
        let id = Session.get('goods-info')
        goodsId = id.goodsId

        let comment = Session.get('user-comment')
        //console.log(comment !== '')
        if(comment !== ''){
            let old = Consult.findOne({
                userId: userId,
                goodsId: goodsId
            })
            if(old){
                old.comment = comment
                Consult.update(old._id, {$set: old}, (error) => {
                    if(error) alert(erro.reason)
                })
            }
        }
        let ans = Session.get('user-answer')
        //console.log(ans)
        //console.log(!!ans.q1)
        if(!!ans.q1){
            Answer.insert({
                userId: userId,
                goodsId: goodsId,
                answers: ans,
                answeredAt: new Date()
            })
        }
    })
        //console.log('Fermer')
})

template.helpers({
    'name': () => {
        let info = Session.get('goods-info')
        return info.name
    },
    'url': () => {
        let info = Session.get('goods-info')
        let url = info.url
        url = url.split('"')
        return url[1]
    },
    'quiz': () => {
        let id = Session.get('goods-info')
        id = id.goodsId
        return goodsQuiz.getQuiz(Quiz.findOne({goodsId: id}))
    },
    'last': () => { //Si on veut vraiment remercier l'utilisateur après les questions
        let quiz = goodsQuiz.getQuiz(Quiz.findOne())
        return "q" + quiz.length
    },
    'touche': (index) => parseInt(index) + 1
    //Pas besoin d'avoir un input hidden pour id. On l'a en session et on pourra y faire recour au moment opportun
})

template.events({
    'click #quiz-btn': (e) => {
        e.preventDefault()
        goodsQuiz.additionnalQuiz()
    },
    'click .anss': (e) => {
        e.preventDefault()
        let target = e.currentTarget

        let id = target.parentElement.id
        let old = id
        id = id.split('q')
        id = parseInt(id[1])
        id++
        let quiz = "q" + id

        let answer = target.innerText
        answer = answer.substr(3)

        let goodsId = Session.get('goods-info')
        goodsId = goodsId.goodsId

        let info = Session.get('user-answer')
        info[quiz] = answer

        Session.set("user-answer", info)

        $('#'+old).hide('slow')
        let qq = $('#q'+id);
        //console.log(!!qq[0])
        if(!!qq[0]){
            qq.show('slow')
            qq.select()
        }else{
            Modal.hide('commentAds')
        }
    },
    'keydown #comment': (e) => {
        let t = Session.get('t')
        if(t === 0){
            t++
            Session.set('t', t)
            let i = setInterval(function () {
                let info = document.querySelector('.info-comment')
                if(parseInt(info.style.opacity) === 0) info.style.opacity = 1
                else info.style.opacity = 0
            }, 1000)
            setTimeout(function () {
                clearInterval(i)
            }, 11000)
        }
        if(e.keyCode === 9){
            e.preventDefault()
            goodsQuiz.additionnalQuiz()
        }
    }
})