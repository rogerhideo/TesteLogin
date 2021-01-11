<template>
<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
		<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
			Sign in to your account
		</h2>
	</div>
	
	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">			

				<BaseInput
        				label="User Name"        
					id="user_name"
					name="user_name"
        				type="text"
					autocomplete="user_name"
					v-model="userName"
        				class="bshadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      				:class="{ error: $v.userName.$error }"
        				@blur="$v.userName.$touch()"
      			/>
      				<template v-if="$v.userName.$error">
        					<p v-if="!$v.userName.required" class="errorMessage">
          						User Name is required.
        					</p>
      				</template>

				<BaseInput
        				label="Password"        
					id="password"
					name="password"
        				type="password"
					autocomplete="current-password"
					v-model="password"
        				class="bshadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      				:class="{ error: $v.password.$error }"
        				@blur="$v.password.$touch()"
      			/>
      				<template v-if="$v.password.$error">
        					<p v-if="!$v.password.required" class="errorMessage">
          						Password is required.
        					</p>
      				</template>	

				<div>
					<button  @click="authenticationSigin" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Sign in
					</button>
				</div>			
		</div>
	</div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import { required } from 'vuelidate/lib/validators'
//import store from '@/store'
import NProgress from 'nprogress'

export default {
	data() {
		return {
			userName: '', 
			password: ''							
		}
	},
	validations: {
			userName: { required },
			password: { required }			
	},
	methods :{
	    	authenticationSigin(){
			NProgress.start()
			this.$store.dispatch('user/fetchAllUsers')
			.then(() => {
				for (var user of this.user.users){
					console.log('começo for')
					console.log('1user : ' + user.userName + ' password: ' + user.password )
					if (this.userName === user.userName){
						console.log('if username')
						if (this.password === user.password){
							console.log('if password')
							const notification = {
								type: 'success',
								message: 'Your login is Succesfull !'
							}
							this.$store.dispatch('notification/add', notification, { root: true })
							this.$router.push({
								name: 'DashBoard',
								path: '/dashboard'
							})
							break;
						}
						else{
							const notification = {
								type: 'error',
								message: 'Your password is wrong. Try Again: '
						}
						this.$store.dispatch('notification/add', notification, { root: true })
						}
					}
				}
			})
			.catch(() => {
				NProgress.done()
			})
			}
    	},
	mounted () {
		this.$store.dispatch('user/fetchAllUsers');
	},
	
	computed: {
		...mapState(['user'])
	}
    		
    
}

</script>
