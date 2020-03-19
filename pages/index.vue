<template>
 <div class="container">
   <div class="chats-layout">
     <messages />
   </div>
   <div class="input-layout">
     <chat-form />
   </div>
 </div>
</template>

<script>
import Messages from '~/components/Messages.vue'
import ChatForm from '~/components/ChatForm.vue'
import { db } from '~/plugins/firebase'
export default {
 components: {
   Messages,
   ChatForm
 },
 mounted(){
  //  channel id を指定して、doc  id を指定します。
db.collection('channels').doc('O7DJtaAU6nmCxmPIyXdC').get()
    .then((doc) =>{
     console.log('doc.id: ', doc.id)
     console.log('doc.data(): ', doc.data())
 })
}
</script>
