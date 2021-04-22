let template = Template.addPublication

template.onRendered(() => {
    Session.set('answernumber', 0)
    Session.set('quiznumber', 1) //Contiendra quand l'utilisateur cliquera sur enregistrer, le nombre total de question
})
//Fonction qui enlève disabled du btn enregistrer si condition renmplie
let canSave = () => {
    let img = false,
        img1 = $('#img1'),
        img2 = $('#img2'),
        img3 = $('#img3'),
        type = $('#type')

    if(
        picValidation(img1) &&
        picValidation(img2) &&
        picValidation(img3) &&
        valideType(type)
    ) img = true

    if(img && !!$('#nom').val() && !!$('#description').val()){
        document.querySelector('#save-post').removeAttribute('disabled')
    }else{
        document.querySelector('#save-post').setAttribute('disabled', true)
    }
}

let valideType = (p) => {
    if(document.getElementById('big-ad').checked){
        return p.val() !== null
    }
    return true
}

//Sous fonction de canSave
let picValidation = (p) => {
    let inp = p[0]
    if(inp.value.toString() !== ''){
        let type = inp.files[0].type
        if(type === "image/jpeg" || type === "image/png"){
            return true
        }else{
            p.parent().css('backgroundColor', 'red')
            document.querySelector('#save-post').setAttribute('disabled', true)
        }
    }
    return false
}

let addAnswerInput = (e, parent) => {
    let q = Session.get('quiznumber'),
        num = parseInt(Session.get('answernumber')),
        em = 'ère'
    Session.set('answernumber', ++num)
    let id = 'q'+q+'r'+num

    if(num !== 1){
        em = 'ème'
    }
    if(num<5){
        let div = parent
        div.setAttribute('id', 'ans')
        $(`
                <div style="display: none" class="answer">
                    <input type="text" id="${id}" class="form-control reponse" placeholder="${num} ${em} réponse">
                </div>
            `).insertAfter($('#ans')).show('slow')
        $('#'+id).select()
        div.removeAttribute('id')
    }
}

let addQuizInput = () => {
    Session.set('answernumber', 0)
    let num = parseInt(Session.get('quiznumber'))
    Session.set('quiznumber', ++num)

    let quiz = $('#quiz')
    let id = 'q'+num,
        holder = num+'ème question'

    $(`
            <div style="display: none" class="quiz">
                <label class="quiz-label">Question ${num}</label>
                <div class="input-group input-group">
                    <input type="text" placeholder="${holder}" id="${id}" class="form-control question">
                    <span class="input-group-btn">
                        <button type="button" class="btn btn-info btn-flat repondre"><i class="fa fa-registered"></i></button>
                    </span>
                </div>
            </div>
        `).insertAfter($('#lesquiz')).show('slow')
    $('#'+id).select()
}

let restPost = () => {
    $('#lecorps').animate({
        opacity: 0
    }, 500)

    Meteor.setTimeout(() => {
        let img1 = $('#img1'),
            img2 = $('#img2'),
            img3 = $('#img3'),
            big = $('#big-ad')
        let q = document.querySelector('#quiz'),
            check = document.querySelector('#check')

        $('#nom').val('')
        $('#description').val('')

        img1['0'].value = ""
        img2['0'].value = ""
        img3['0'].value = ""
        img1.parent().css('backgroundColor', '')
        img2.parent().css('backgroundColor', '')
        img3.parent().css('backgroundColor', '')

        big['0'].checked = false
        check.classList = "fa fa-times big-ad"

        $('#quiz').hide('slow')

        q.parentElement.removeChild(q)

        $(`
            <div style="display: none" id="quiz">
                <div id="lesquiz" class="col-md-12">
                    <span style="font-size: 17px;"><i class="fa fa-question-circle"></i> Questions secondaires</span>
                    <div class="btn-group pull-right">
                        <button id="addquiz" type="button" class="btn btn-info"><i class="fa fa-plus"></i></button>
                    </div>
                    <hr style="margin-top: 10px; margin-bottom: 1px">
                </div>
                <div class="quiz">
                    <div class="form-group">
                        <label>Type</label>
                        <select id="type" class="form-control">
                            <option  disabled="disabled" selected>--Selectionner un type--</option>
                            <option>Produit</option>
                            <option>Entreprise</option>
                            <option>Service</option>
                        </select>
                    </div>
                    <label class="quiz-label">Question 1</label>
                    <div class="input-group input-group">
                        <input id="q1" type="text" class="form-control">
                        <span class="input-group-btn">
                        <button type="button" class="btn btn-info btn-flat repondre"><i class="fa fa-registered"></i></button>
                    </span>
                    </div>
                </div>
            </div>
        `).insertAfter(big.parent().parent())
    }, 500)

    $('#lecorps').animate({
        opacity: 1
    }, 500)
}


template.events({
    'change #type': (e) => {
        canSave()
    },
    'keydown .question': (e) => {
        //console.log(e)
        if(e.keyCode === 13 || e.keyCode === 9){
            e.preventDefault()
            let n = Session.get('answernumber')
            n++
            if(n <= 4){
                addAnswerInput(e, document.querySelector('.quiz'))
            }else{
                addQuizInput()
            }
        }
    },
    'keydown .reponse': (e) => {
        if(e.keyCode === 13){
            e.preventDefault()
            let n = Session.get('answernumber')
            n++
            if(n <= 4){
                addAnswerInput(e, e.currentTarget.parentElement)
            }else{
                addQuizInput()
            }
        }
        if(e.keyCode === 9){
            e.preventDefault()
            addQuizInput()
        }
    },
    'click #reset-post': () => {
        restPost()
    },
    'change #nom': () => {
        canSave()
    },
    'change #description': () => {
        canSave()
    },
    'change #img1': () => {
        let img1 = $('#img1');
        if (img1['0'].value.toString() !== '') {
            img1.parent().css('backgroundColor', 'rgba(0,124,0,0.25)')
        }else{
            img1.parent().css('backgroundColor', '')
        }
        canSave()
    },
    'change #img2': () => {
        let img1 = $('#img2');
        if (img1['0'].value.toString() !== '') {
            img1.parent().css('backgroundColor', 'rgba(0,124,0,0.25)')
        }else{
            img1.parent().css('backgroundColor', '')
        }
        canSave()
    },
    'change #img3': () => {
        let img1 = $('#img3');
        if (img1['0'].value.toString() !== '') {
            img1.parent().css('backgroundColor', 'rgba(0,124,0,0.25)')
        }else{
            img1.parent().css('backgroundColor', '')
        }
        canSave()
    },

    'change #big-ad': (e) => {
        canSave()
        let check = document.querySelector('#check'),
            parent = $('#big-ad').parent()

        if (document.getElementById('big-ad').checked){
            check.classList = "fa fa-check big-ad"
            parent.css({
                backgroundColor: '#e6e5e5',
                boxShadow: 'inset 0 3px 5px rgba(0, 0, 0, .125)'
            })
            $('#quiz').show('slow')
            $('#q1').select()
        }else{
            check.classList = "fa fa-times big-ad"
            parent.css({
                backgroundColor: '',
                boxShadow: ''
            })
            $('#quiz').hide('slow')
        }
    },

    'click .repondre': (e) => {
        addAnswerInput(e, e.currentTarget.parentElement.parentElement.parentElement)
    },

    'click #addquiz': () => {
        addQuizInput()
    },

    'click #save-post': (e) => {
        e.preventDefault()

        let nom = $('#nom').val(), post,
            description = $('#description').val(),
            big = $('#big-ad')['0'].checked,
            type = $('#type').val(),
            allQuiz = {}

        for(let i=Session.get('quiznumber'), tquiz=1; i>=tquiz; i--){
            let quizId = 'q'+i,
                quiz = $('#'+quizId).val(),
                allAns = {}

            // On verifie si l'imput de la question n'est pas vide.
            // Si vide, on passe à la question suivant. Sinon, on stock la question dans quiz
            if(!quiz) continue

            //Par question, on parcourt les réponses et on est stock dans allAns
            for(let j=1; j<5; j++){
                let val = $('#'+quizId+'r'+j).val(),
                    key = 'ans'+j
                if(!val) break
                allAns[key] = val
            }

            //a chaque quiz ses answers
            allQuiz[quizId] = {
                answers: allAns,
                quiz: quiz
            }
        }

        if(big){
            post = {
                name: nom,
                description: description,
                big: big,
                type: type.toLowerCase(),
                valid: false,
                oui: 0,
                non: 0,
                masquer: 0,
                adorer: 0
            }
        }else{
            post = {
                name: nom,
                description: description,
                big: big,
                valid: false,
                oui: 0,
                non: 0,
            }
        }
        Meteor.call('goodInsert', post, allQuiz, (error, result) => {
            if(error) return alert(error.reason)
            if(result.goodsExist){
                return alert('Vous avez déjà enregistré ce produit')
                // TODO: On redirigera l'utilisateur vers la publication pour un genre edit
            }
            if(result._id){
                let goodsId = result._id
                let errors = []
                let img1 = new FS.File($('#img1')[0].files[0])
                img1.userId = Meteor.userId()
                img1.goodsId = goodsId

                let img2 = new FS.File($('#img2')[0].files[0])
                img2.userId = Meteor.userId()
                img2.goodsId = goodsId

                let img3 = new FS.File($('#img3')[0].files[0])
                img3.userId = Meteor.userId()
                img3.goodsId = goodsId

                Images.insert(img1, (error) => {
                    if(error) errors[1] = error.reason
                })
                Images.insert(img2, (error) => {
                    if(error) errors[2] = error.reason
                })
                Images.insert(img3, (error) => {
                    if(error) errors[3] = error.reason
                })
                if(errors.length >= 1){
                    console.log(errors)
                }else{
                    alert('Ok')
                    restPost()
                }
            }
        })
    }
})


