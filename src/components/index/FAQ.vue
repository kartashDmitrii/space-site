<template>
  <div class="faq container small-container">
    <div class="column">
      <SmallFAQ v-for="(faq,i) in evenFAQ" :desc="faq" :key="i"/>
    </div>
    <div class="column">
      <SmallFAQ v-for="(faq,i) in oddFAQ" :desc="faq" :key="i"/>
    </div>
  </div>
</template>

<script>
import SmallFAQ from "@/components/blocks/faq/SmallFAQ";
export default {
name: "FAQ",
  components: {SmallFAQ},
  data(){
    return {
      faq: [
        {
          name: 'Главное — очень кратко',
          text: 'Lorem iluptatum? A dolor dolorem doloremque dolorum esse, facere fuga fugiat fugit ipsam iure, labore laborum magni maiores molestias nulla perspiciatis placeat possimus quasi reiciendis rem similique sit soluta ullam ut vel veniam voluptate. Animi at corporis cumque deserunt fugit ipsam iste numquam, odit porro quis quisquam tempore temporibus voluptates? Ab alias consequatur dolorum illum minus nam officiis rerum. Ea est iste, libero placeat quaerat reiciendis temporibus vel. Culpa cum cumque facilis ipsa libero magni, modi mollitia numquam qui, quos, totam voluptatum. Aspernatur, commodi mollitia nihil optio quo quod quos rem temporibus. Blanditiis distinctio explicabo maiores nostrum placeat quo suscipit vero vitae. Corporis deserunt ducimus eos esse fuga fugiat, laudantium maxime. Accusantium consectetur cum cupiditate doloremque error hic iure laudantium maxime nemo nesciunt officiis perspiciatis quos sint temporibus ut, voluptas voluptates! Quaerat, rem, unde.'
        },
        {
          name: 'Отзывы о компании',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur ex inventore iste laborum neque repellat totam voluptatum? A dolor dolorem doloremque dolorum esse, facere fuga fugiat fugit ipsam iure, labore laborum magni maiores molestias nulla perspiciatis placeat possimus quasi reiciendis rem similique sit soluta ullam ut vel veniam voluptate. Animi at corporis cumque deserunt fugit ipsam iste numquam, odit porro quis quisquam tempore temporibus voluptates? Ab alias consequatur dolorum illum minus nam officiis rerum. Ea est iste, libero placeat quaerat reiciendis temporibus vel. Culpa cum cumque facilis ipsa libero magni, modi mollitia numquam qui, quos, totam voluptatum. Aspernatur, commodi mollitia nihil optio quo quod quos rem temporibus. Blanditiis distinctio explicabo maiores nostrum placeat quo suscipit vero vitae. Corporis deserunt ducimus eos esse fuga fugiat, laudantium maxime. Accusantium consectetur cum cupiditate doloremque error hic iure laudantium maxime nemo nesciunt officiis perspiciatis quos sint temporibus ut, voluptas voluptates! Quaerat, rem, unde.'
        },
        {
          name: 'Услуги компании',
          text: 'Lorem ipsum doletur ex inventore iste laborum neque repellat totam voluptatum? A dolor dolorem doloremque dolorum esse, facere fuga fugiat fugit ipsam iure, labore laborum magni maiores molestias nulla perspiciatis placeat possimus quasi reiciendis rem similique sit soluta ullam ut vel veniam voluptate. Animi at corporis cumque deserunt fugit ipsam iste numquam, odit porro quis quisquam tempore temporibus voluptates? Ab alias consequatur dolorum illum minus nam officiis rerum. Ea est iste, libero placeat quaerat reiciendis temporibus vel. Culpa cum cumque facilis ipsa libero magni, modi mollitia numquam qui, quos, totam voluptatum. Aspernatur, commodi mollitia nihil optio quo quod quos rem temporibus. Blanditiis distinctio explicabo maiores nostrum placeat quo suscipit vero vitae. Corporis deserunt ducimus eos esse fuga fugiat, laudantium maxime. Accusantium consectetur cum cupiditate doloremque error hic iure laudantium maxime nemo nesciunt officiis perspiciatis quos sint temporibus ut, voluptas voluptates! Quaerat, rem, unde.'
        },
        {
          name: 'Очень важная инфа (!)',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur ex inventore iste laborum neque repellat totam voluptatum? A dolor dolorem doloremque dolorum esse, facere fuga fugiat fugit ipsam iure, labore laborum magni maiores molestias nulla perspiciatis placeat possimus quasi reiciendis rem similique sit soluta ullam ut vel veniam voluptate. Animi at corporis cumque deserunt fugit ipsam iste numquam, odit porro quis quisquam tempore temporibus voluptates? Ab alias consequatur dolorum illum minus nam officiis rerum. Ea est iste, libero placeat quaerat reiciendis temporibus vel. Culpa cum cumque facilis ipsa libero magni, modi mollitia numquam qui, quos, totam voluptatum. Aspernatur, commodi mollitia nihil optio quo quod quos rem temporibus. Blanditiis distinctio explicabo maiores nostrum placeat quo suscipit vero vitae. Corporis deserunt ducimus eos esse fuga fugiat, laudantium maxime. Accusantium consectetur cum cupiditate doloremque error hic iure laudantium maxime nemo nesciunt officiis perspiciatis quos sint temporibus ut, voluptas voluptates! Quaerat, rem, unde.'
        },
        {
          name: 'Стоимость разработки',
          text: 'Loreconsectetur adipisicing elit. At consectetur ex inventore iste laborum neque repellat totam voluptatum? A dolor dolorem doloremque dolorum esse, facere fuga fugiat fugit ipsam iure, labore laborum magni maiores molestias nulla perspiciatis placeat possimus quasi reiciendis rem similique sit soluta ullam ut vel veniam voluptate. Animi at corporis cumque deserunt fugit ipsam iste numquam, odit porro quis quisquam tempore temporibus voluptates? Ab alias consequatur dolorum illum minus nam officiis rerum. Ea est iste, libero placeat quaerat reiciendis temporibus vel. Culpa cum cumque facilis ipsa libero magni, modi mollitia numquam qui, quos, totam voluptatum. Aspernatur, commodi mollitia nihil optio quo quod quos rem temporibus. Blanditiis distinctio explicabo maiores nostrum placeat quo suscipit vero vitae. Corporis deserunt ducimus eos esse fuga fugiat, laudantium maxime. Accusantium consectetur cum cupiditate doloremque error hic iure laudantium maxime nemo nesciunt officiis perspiciatis quos sint temporibus ut, voluptas voluptates! Quaerat, rem, unde.'
        },
        {
          name: 'Обязательно к чтению',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur ex inventore iste laborumit amet, consectetur adipisicing elit. At consectetur ex inventore iste laborumit amet, consectetur adipisicing elit. At consectetur ex inventore iste laborumit amet, consectetur adipisicing elit. At consectetur ex inventore iste laborumit amet, consectetur adipisicing elit. At consectetur ex inventore iste laborum neque repellat totam voluptatum? A dolor dolorem doloremque dolorum esse, facere fuga fugiat fugit ipsam iure, labore laborum magni maiores molestias nulla perspiciatis placeat possimus quasi reiciendis rem similique sit soluta ullam ut vel veniam voluptate. Animi at corporis cumque deserunt fugit ipsam iste numquam, odit porro quis quisquam tempore temporibus voluptates? Ab alias consequatur dolorum illum minus nam officiis rerum. Ea est iste, libero placeat quaerat reiciendis temporibus vel. Culpa cum cumque facilis ipsa libero magni, modi mollitia numquam qui, quos, totam voluptatum. Aspernatur, commodi mollitia nihil optio quo quod quos rem temporibus. Blanditiis distinctio explicabo maiores nostrum placeat quo suscipit vero vitae. Corporis deserunt ducimus eos esse fuga fugiat, laudantium maxime. Accusantium consectetur cum cupiditate doloremque error hic iure laudantium maxime nemo nesciunt officiis perspiciatis quos sint temporibus ut, voluptas voluptates! Quaerat, rem, unde.'
        },
        {
          name: 'Преимущества Space',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur ex inventore iste laborum neque repellat totam voluptatum? A dolor dolorem doloremque dolorum esse, facere fuga fugiat fugit ipsam iure, labore laborum magni maiores molestias nulla perspiciatis placeat possimus quasi reiciendis rem similique sit soluta ullam ut vel veniam voluptate. Animi at corporis cumque deserunt fugit ipsam iste numquam, odit porro quis quisquam tempore temporibus voluptates? Ab alias consequatur dolorum illum minus nam officiis rerum. Ea est iste, libero placeat quaerat reiciendis temporibus vel. Culpa cum cumque facilis ipsa libero magni, modi mollitia numquam qui, quos, totam voluptatum. Aspernatur, commodi mollitia nihil optio quo quod quos rem temporibus. Blanditiis distinctio explicabo maiores nostrum placeat quo suscipit vero vitae. Corporis deserunt ducimus eos esse fuga fugiat, laudantium maxime. Accusantium consectetur cum cupiditate doloremque error hic iure laudantium maxime nemo nesciunt officiis perspiciatis quos sint temporibus ut, voluptas voluptates! Quaerat, rem, unde.'
        },
        {
          name: 'Не допустите эти ошибки',
          text: ' deserunt fugit ipsam iste numquam, odit porro quis quisquam tempore temporibus voluptates? Ab alias consequatur dolorum illum minus nam officiis rerum. Ea est iste, libero placeat quaerat reiciendis temporibus vel. Culpa cum cumque facilis ipsa libero magni, modi mollitia numquam qui, quos, totam voluptatum. Aspernatur, commodi mollitia nihil optio quo quod quos rem temporibus. Blanditiis distinctio explicabo maiores nostrum placeat quo suscipit vero vitae. Corporis deserunt ducimus eos esse fuga fugiat, laudantium maxime. Accusantium consectetur cum cupiditate doloremque error hic iure laudantium maxime nemo nesciunt officiis perspiciatis quos sint temporibus ut, voluptas voluptates! Quaerat, rem, unde.'
        },
      ]
    }
  },
  computed: {
    oddFAQ(){
      let oddFaq = [];
      this.faq.forEach( (elem,index) => {
        if (index % 2 === 1){
          oddFaq.push(elem)
        }
      })
      return oddFaq
    },
    evenFAQ(){
      let evenFaq = [];
      this.faq.forEach( (elem,index) => {
        if (index % 2 === 0){
          evenFaq.push(elem)
        }
      })
      return evenFaq
    }
  }
}
</script>

<style scoped lang="sass">
.faq
  display: grid
  grid-template-columns: 1fr 1fr
  grid-column-gap: 30px
  grid-auto-rows: auto
  align-items: flex-start
  margin-bottom: 150px
  .column
    display: grid
    grid-template-columns: 1fr
    grid-auto-rows: auto
    .elem:last-child
      border-bottom: 1px solid #ffffff
</style>