alert(`مرحبا في موقعي الذي سيحسب درجتك`)
let grade = prompt(`اكتب درجتك بالارقام`)
console.log (grade)
if (grade>90 && grade<=100) {
    console.log(`%c لقد حصلت على امتياز` , 'background: #222; color: #bada55' )
}
else if (grade>80&&grade<=89) {

  console.log(`%cلقد حصلت على جيد جدا` , 'background: #222; color: #bada55')  
}
else if (grade>70&&grade<=79) {

    console.log(`%cلقد حصلت على جيد` , 'background: #222; color: #bada55')
}
else if (grade>60&&grade<=69) {
console.log(`%cلقد حصلت على مقبول` , 'background: #222; color: #bada55')

}
else if (grade>50&&grade<=59) {
    console.log(`%cلقد حصلت على ضعيف` , 'background: #222; color: #bada55')
}
else if (grade<=50) {



    console.log (`%c راسب`, 'background: #222; color: #bada55' )
}

// جافاسكربت ليست جافا
