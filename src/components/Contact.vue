<template >
    <div class="contact">
      <header2/>
<!-- content -->
<div class="body2">
  <div class="main">
    <section id="content">
      <div class="wrapper">
        <article class="col1">
          <div class="pad2">
            <h2 class="pad_bot1 pad_top1">Contact Us </h2>
            <form id="ContactForm" action="#">
              <div>
                <div  class="wrapper"> <span>Your Username:</span>
                  <input type="text" class="input" >
                </div>
                <div  class="wrapper"> <span>Your E-mail:</span>
                  <input type="text" class="input" >
                </div>
                <div  class="textarea_box"> <span>Your Message:</span>
                  <textarea name="textarea" cols="1" rows="1"></textarea>
                </div>
                <span>&nbsp;</span> <a href="#" class="button" type="reset">Clear</a> <a href="#" class="button">Send</a> </div>
            </form>
          </div>
        </article>
       
      </div>
      <div class="wrapper">
        <article class="col1">
          <div class="pad2">
            <h2 class="pad_bot1">About Us</h2>
            <p class="pad_bot1"><strong>Integer dui leo, dignissim ut interdum ac, ultricies a risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dignissim nunc sit amet odio pharetra hendrerit. </strong></p>
            <p class="pad_bot2">Nulla justo ante, posuere sed hendrerit et, lacinia ultricies ligula. Integer ac lacus vel massa venenatis suscipit in vel nulla. Donec quis placerat erat. Nam id lectus at lacus ullamcorper viverra. Mauris lacinia rutrum purus quis pretium. Pellentesque in tortor quam. Quisque et risus dolor, in consequat nunc. Vivamus sagittis consectetur nisi eget luctus. Maecenas pellentesque placerat dui in iaculis.</p>
          </div>
          
          <div class="pad2"> <a href="#" class="button">Read more</a> </div>
        </article>
        <article class="col2">
          <div class="pad1">
            <h3>Our Contacts</h3>
            <div class="address"> Ouest-Dschang<br>
              Palais de Justice<br>
              <span> Wathsapp:<br>
              Telephone:<br>
              E-mail: </span> +237 658 36 98 74<br>
              +237 678 54 20 39<br>
              <a href="#">freelost@gmail.com</a> </div>
            </div>
        </article>
      </div>
    </section>
  </div>
</div>
    </div>
</template>
<script>
    import Header2 from '@/components/Header2.vue'
    export default {
        components: {
            Header2
        }
    }
</script>
<style lang="">
    
</style>