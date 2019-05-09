<template>
    <div>
        <div class="alert alert-danger" v-show="errors && errors.length>0">
            <li v-for="error in errors">{{error}}</li>
        </div>
        <div class="card add-client m-2 p-2">
            <form>


                <h4 class="text-center">Welcome to Personal Trainer App!!!</h4>
                <h5 class="card-title">Add new client </h5>


                <div class="form-group">
                    <label for="name">Name</label>
                    <!-- TODO v-model -->
                    <input id="name" class="form-control" v-model.trim="newClientName">
                </div>

                <div class="form-group">
                    <label for="when">Start Date</label>
                    <!-- TODO v-model -->
                    <input id="when" class="form-control" type="date" v-model.lazy="newStartDate">
                </div>
                <br>
                <div class="form-group">
                    <label for="type">Target?</label>
                    <!-- TODO create a select. v-model type -->
                    <!-- TODO create one option for each type  -->
                    <select class="form-control" v-model="type">
                        <option v-for="type in types" v-bind:value="type">{{type}}</option>
                    </select>
                </div>

                <div class="form-check-inline">
                    <!-- TODO v-model, v-bind value -->
                    <input id="v2" class="form-check-input" type="radio" v-bind:value="male" v-model="malefemale">
                    <label class="form-check-label" for="v1">{{male}}</label>
                </div>

                <div class="form-check-inline">
                    <!-- TODO v-model, v-bind value -->
                    <input id="v1" class="form-check-input" type="radio" v-bind:value="female" v-model="malefemale">
                    <label class="form-check-label" for="v1">{{female}}</label>
                </div>

                <!-- TODO v-on:click event handler -->
                <button class="btn btn-primary" v-on:click.prevent="addClient"> Add</button>
            </form>
        </div>

    </div>
</template>


<script>
    export default{
        name:'NewClientForm',
        data() {
            return {
                newClientName:'',
                newStartDate: '',
                type:'loseweight',
                malefemale:'male',
                types:['loseweight','buildmuscle','competition'],
                male:'male',
                female:'female',
                errors: []
            }
        },
        methods:{
            addClient() {
                this.errors=[]
                if(this.newClientName && this.newStartDate){
                    let client = {name: this.newClientName, when: this.newStartDate,present:false}
                    this.$emit('client-added',client)
                    this.newClientName = ''
                    this.newStartDate = ''
                }else{
                    this.errors.push('Name and Start date are required.')
                }
            }

        }
    }



</script>


<style>

</style>