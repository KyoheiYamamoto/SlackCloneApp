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

export default {
 components: {
   Messages,
   ChatForm
 }
}
</script>
