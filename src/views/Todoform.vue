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
          <td><input type="text" v-model="todo.title" disabled></td>
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
          <button @click="submit()">編集</button>
        </tr>
      </tbody>
    </table>

    <div>
      <router-link to="/Todolist">ToDo一覧画面に戻る！！</router-link>
    </div>
  </div>
</template>


<script>

    import {mapActions} from "vuex";

    export default {
        data(){
            return {
                todo:{},
            }
        },
        created(){
          const todo =this.$route.params.todo_item
            // this.todos = this.$store.state.todos;
            this.todo = todo
        },
        methods:{
            submit(){
            this.todoupdate(this.todo)
            this.$router.push({name:"Todolist"})
        },
            ...mapActions(["todoupdate"]),
        }
    }
</script>
