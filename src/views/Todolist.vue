<template>
<div>

  <h1>Todo一覧</h1>
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
        <tr v-for="(todo,index) in todos" :key='index'>
          <td>{{todo.title}}</td>
          <td>{{todo.content}}</td>
          <td>{{todo.when}}</td>
          <td>{{todo.progress}}</td>
          <td>{{todo.memo}}</td>
          <button @click="deleteConfirm(index)">削除</button>
        
          <button @click="edit(todo)">編集</button> 
        </tr>
      </tbody>

    </table>
    </div>
</template>

<script>

    import {mapActions} from "vuex";

    export default {
        data(){
            return {
                todos:[]
            }
        },
        created(){
            this.todos = this.$store.state.todos;
        },
        methods:{
            deleteConfirm(index){
                if(confirm("削除してよろしいですか？")){
                    this.deletetodos(index);
                }
            },
            edit(todo){
            this.$router.push({name:'todo_edit', params:{todo_item:todo}})
        },
            ...mapActions(["deletetodos"]),
        }
    }
</script>