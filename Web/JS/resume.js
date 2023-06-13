// form repeater
$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})

function handleEducationTypeChange(selectElement) {
    var degreeInput = selectElement.parentNode.nextElementSibling.querySelector('.edu_degree');
    if (selectElement.value === 'college') {
        degreeInput.disabled = false;
    } else {
        degreeInput.disabled = true;
        degreeInput.value = '';
    }
    generateCV();
}
