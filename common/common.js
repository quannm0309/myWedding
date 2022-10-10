
const ds = [

];
const avatar = [

];


class NGONNGU {
    static setLangDB(language) {
        localStorage.setItem(Constant.LANGUAGE, language);
    }

    static getLangDB() {
        return localStorage.getItem(Constant.LANGUAGE);
    }

    static createNewLang() {
        var lang = this.getLangDB();
        if(lang) {
            return;
        }
        var language = window.navigator.userLanguage || window.navigator.language;
        if(language == "ja") {
            this.setLangDB(Language.JP);
        }
        else{
            this.setLangDB(Language.VN);
        }

    }

    static setLangId(lang) {
        if(!lang){return;}
        $("#wedding_id").text(lang.wedding);
        if($("#content_id")){
            $("#content_id").html(lang.content);
            $("#date_id").text(lang.date);
            $("#checkin_id").text(lang.checkin);
            $("#party_id").text(lang.party);
            $("#Addr_id").text(lang.Addr);
            $("#deadline_id").html(lang.deadline);
            $("#button_id").text(lang.button);
        }
        if($("#need_id"))
        {
            $("#need_id").text(lang.need);
            $("#choise_id").text(lang.choise);
            $("#input_accepts_id").val(lang.accepts);
            $("#accepts_id").html(lang.accepts_span);
            $("#input_declines_id").val(lang.declines);
            $("#declines_id").html(lang.declines_span);
            $("#browser").attr("placeholder",lang.name);
            $("#mesage_id").text(lang.Message);
            $("#memo").attr("placeholder",lang.Messageinf);
            $("#buttonans_id").text(lang.buttonans);
            $("#back_id").text(lang.back);
            $("#conffirm_id").text(lang.conffirm);
            $("#acceptdecline_id").text(lang.acceptdecline);
            $("#name2_id").text(lang.name2);
            $("#Message2_id").text(lang.Message);
            $("#btnconf_id").text(lang.btnconf);
            $("#edit_id").text(lang.edit);
        }   

        if($("#thanks_id"))
        {
            $("#thanks_id").text(lang.thanks);
            $("#backtop_id").text(lang.backtop);
        }
    }

    static changeToggleSwitch(lang){
        if (lang == 1) {
            // turn toggle switch off
            $("#language-toggle").attr("checked", false);
            $('#div_toggle_id').click();
          } else {
            // turn toggle switch ON
            $('#language-toggle').attr("checked", true);
            $('#div_toggle_id').click();
          }
    }

    static refreshLang() {
        NGONNGU.createNewLang();
        var lang = NGONNGU.getLangDB();
        var trans = data.jp;
        if(lang == 1)
        {trans = data.vn}
        this.changeToggleSwitch(lang)
        this.setLangId(trans);
    }

    static getObjLang() {
        var lang = NGONNGU.getLangDB();
        var trans = data.jp;
        if(lang == 1)
        {trans = data.vn}
        return trans;
    }
}