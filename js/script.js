// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus:
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

const app=new Vue(
    {
        el:"#root",
        data:{
            img:[
                "https://images.unsplash.com/photo-1561531698-15b6885791b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1525898171639-bbf6bf5b3c93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1533029026076-7160c0f3187b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1460533893735-45cea2212645?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            ],
            imgIndice:0,
        },
        methods:{
            avanti:function(){
                this.imgIndice++;
                if(this.imgIndice>=this.img.length){
                    this.imgIndice=0;
                }
            },
            indietro:function(){
                this.imgIndice--;
                if(this.imgIndice== -1){
                    this.imgIndice = this.img.length -1;
                };
            },
            selectedImg:function(selectedcImg){
                if(this.imgIndice==selectedcImg){
                    return "active";
                }
                return "";
            },
            changeImg:function(index){

            }
        }
    }
);