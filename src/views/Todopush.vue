<template>

  <div class="about">

    <h1>ToDoを追加しよう！！</h1>


    <table>

      <thead>
        <tr>
          <td>タイトル</td>
          <td>内容</td>
          <td>期日</td>
          <td>進捗率(0-100)</td>
          <td>メモ</td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><input type="text" v-model="todo.title"></td>
          <td><input type="text" v-model="todo.content"></td>
          <td><input type="text" v-model="todo.when"></td>
          <td>
            <select v-model="todo.progress">
              <option>0</option>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
              <option>60</option>
              <option>70</option>
              <option>80</option>
              <option>90</option>
              <option>100</option>
            </select>
          </td>
          <td><input type="text" v-model="todo.memo"></td>
          <td><button @click="push">ToDo追加！</button></td>
        </tr>
      </tbody>

    </table>

    <div>
      <router-link to="/Todolist">ToDo一覧画面に戻る！！</router-link>
    </div>

  </div>

</template>


<script>
  import {mapActions} from 'vuex'

  export default {

    data(){
      return{
        todo:{},
      }
    },

    methods:{
      ...mapActions(["todoPush"]),

      push(){
        if(this.todo !== {}){
          console.log(this.todo);
          this.todoPush(this.todo);
          this.$router.push({name:'Todolist'})
        }
      }


    }






  }



//TODO追加画面
//-新しいTODOを追加する画面
//-入力する情報は「タイトル」「内容」「期日」「進捗率0-100」「メモ」
//-追加ボタン（押下でTODOに追加を行う、何も入力されていない場合、追加することができない、追加後は一覧に遷移)
//-TODO一覧に戻るリンク

</script>
