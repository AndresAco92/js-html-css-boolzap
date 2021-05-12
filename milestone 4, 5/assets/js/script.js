const app = new Vue({
  el: '#root',
  data: {

    nome: 'Dart Fener', 
    pic: '_vader',
    position: 0,
    messaggio:'',
    utente:'',
    active_box: true,
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ] 
  },
  methods: {

    mouse(index){
      this.position = index;
    },
    messaggio_out(){
      if(this.messaggio.length > 0){
        this.contacts[this.position].messages.push({
          text: this.messaggio,
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          status: 'sent'
        });
      }
      setTimeout(()=>{
        this.contacts[this.position].messages.push({
          text: 'ok',
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          status: 'received'
        });
      }, 1000);
      this.messaggio = "";
    },
    search_ut(valore){
      let person = valore.toLowerCase();
      this.contacts.forEach((contact) => {
        if(contact.name.toLowerCase().includes(person)){
          contact.visible = true;
        }else{
          contact.visible = false;
        }
      });
    },
    last_acc(index){
      let contact_sms = this.contacts[index].messages
      return contact_sms[contact_sms.length-1].date;
    },
    last_sms(index){
      let contact_sms = this.contacts[index].messages
      return contact_sms[contact_sms.length-1].text;
    },
    min_menu(){
      this.active_box = !this.active_box;
    }
  }
});