class InfoView{
    constructor(){
        this.jatekvegeElem=$(".jatekvege");
        this.kovetkezoJatekos=$(".kovetkezoJatekos");
    }
    setJatekVege(ertek){
        this.jatekvegeElem.html(ertek);
    }
    setKovetkezoJatekos(ertek){
        this.kovetkezoJatekos.html(ertek);
    }
}
