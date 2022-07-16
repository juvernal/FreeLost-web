<template>
	<HeaderView />
    <div class="signin">
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<!--class="login100-form validate-form"-->
				<form >
					<span class="login100-form-title p-b-49">
						Login
					</span>

					<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span class="label-input100">Username</span>
						<input v-model="user" class="input100" type="text" name="username" placeholder="Type your username">
						<span class="focus-input100" data-symbol="&#xf206;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100">Password</span>
						<input v-model="pass" class="input100" type="password" name="pass" placeholder="Type your password">
						<span class="focus-input100" data-symbol="&#xf190;"></span>
					</div>
					
					<div class="text-right p-t-8 p-b-31">
						<a href="#">
							Forgot password?
						</a>
					</div>
					
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							 <button class="login100-form-btn" @click="submit">
								Login
							 </button>
						</div>
					</div>

					
					<div class="flex-col-c p-t-155">
						<span class="txt1 p-b-17">
							Or Sign Up Using {{ users.username }}
						</span>

						<router-link :to="{name: 'signup'}" class="txt2">  Register</router-link>
					</div>
				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>

    </div>
	<FooterViewVue/>
</template>

<script>
    import HeaderView from '@/components/HeaderView.vue'
	import {freelost} from '@/constante/const.js'
	import axios from 'axios'
	import FooterViewVue from '@/components/FooterView.vue'

  export default {
	/* eslint-disable */
    components: {
      HeaderView,FooterViewVue
    },
	"rules": {
    "no-mixed-spaces-and-tabs": 0,
  },
	data() {
		return{
			user : "",
			pass: "",
			users: []
		};
	},
	methods: {
		async submit(e){
			e.preventDefault();
			
			await axios.post(freelost+'/auth/signin',{
				email: this.user,
				password: this.pass
			} ).then(response=>{
				this.users = response.data
				console.log(response.data)
				localStorage.setItem('user',JSON.stringify(response.data))
				localStorage.setItem('admin',JSON.parse(localStorage.getItem('user'))['type'])
				//console.log(localStorage.getItem(user).email)
				this.$router.push('/')
				//localStorage.setItem('connect',true);
			}).catch(e=>{
				//console.log(e.response.data)
				console.log('error')
			});

			
			
		}
	}
  }
</script>

<style lang="css" scoped>
	.container-login100{
		background-image: url('@/assets/images/banner-bg.jpg');
	}
	.login100-form-btn{
        background-color: #08650e;
    }
</style>