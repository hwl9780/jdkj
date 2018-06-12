var Sex = {
    _sex : function(){
        var sex = form.getFeildValue("F_sex");
        alert(sex);
        if(sex="1"){
            alert("性别必须为男");
        }else{
            return true;
        }
    }
}
EntityForm.validate = function(){
    return Sex._sex();
};