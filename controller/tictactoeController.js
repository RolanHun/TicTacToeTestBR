class TTTController{
    constructor(){
        const tomb=[];
        new Jatekter(tomb);
        this.info = new InfoView();
        const kiertekel = new Kiertekel(tomb);
        this.lepes = 0;
        $(window).on("kivalaszt",(event)=>{
            let aktelem=event.detail;
            if (this.lepes % 2 == 0){
                aktelem.setElem("X");
                this.info.setKovetkezoJatekos("X következik!");
            }
            else{
                aktelem.setElem("O");
                this.info.setKovetkezoJatekos("O következik!");
            }
            this.lepes++;
            if (kiertekel.ellenorzes()==="X") {
                this.info.setJatekVege("X Nyert")
                this.jatekVege(tomb);
            }
            else if(kiertekel.ellenorzes()==="O"){
                this.info.setJatekVege("O Nyert")
                this.jatekVege(tomb);
            }
            else if(this.lepes===9){
                this.info.setJatekVege("Döntetlen")
            }
        })
    }
    jatekVege(tomb){
        this.info.setKovetkezoJatekos("Vége");
        tomb.forEach(element => {
            element.aktiv=false;
        });
    }
}