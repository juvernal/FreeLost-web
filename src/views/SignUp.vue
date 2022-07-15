<template>
	<HeaderView/>
    <div class="signin">
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form" @submit.prevent="login">
					<span class="login100-form-title p-b-49">
						Register
					</span>

					<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is required">
						<span class="label-input100">Username</span>
						<input class="input100" type="text" name="username" v-model="username" placeholder="Type your username">
						<span class="focus-input100" data-symbol="&#xf206;"></span>
					</div>

                    <div class="wrap-input100 validate-input m-b-23" data-validate = "Email is required">
						<span class="label-input100">Email</span>
						<input class="input100" type="email" name="email" v-model="email" placeholder="Type your Email">
						<span class="focus-input100" data-symbol="&#xf159;"></span>
					</div>

                    <div class="wrap-input100 validate-input m-b-23" data-validate = "Email is required">
						<span class="label-input100">Telephone</span>
						<input class="input100" type="number" name="telephone" v-model="telephone" placeholder="Type your Phone number">
						<span class="focus-input100" data-symbol="&#xf2c8;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100">Password</span>
						<input class="input100" type="password" name="pass" v-model="password" placeholder="Type your password">
						<span class="focus-input100" data-symbol="&#xf190;"></span>
					</div>

                    <div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100">Confirm Password</span>
						<input class="input100" type="password" name="pass" v-model="confirmpassword" placeholder="Retype your password">
						<span class="focus-input100" data-symbol="&#xf191;"></span>
					</div>
					
					<div class="text-right p-t-8 p-b-31">
						<a href="#">
							
						</a>
					</div>
					
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn" type="submit" >
								Register
							</button>
						</div>
					</div>

					
					<div class="flex-col-c p-t-155">
						<span class="txt1 p-b-17">
							Or Sign In
						</span>

						<router-link :to="{name: 'signin'}" class="txt2"> Login</router-link>
					</div>
				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>

    </div>
	<FooterView/>
</template>

<script>
    import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	import axios from 'axios';
	import { freelost } from '@/constante/const';

  export default {
    components: {
      HeaderView, FooterView
    },
      data() {
		return{
			username : "",
			password : "",
			email : "",
			telephone : "",	
			confirmpassword: "",

			users:''
			
		};
	},
	methods: {
		async login(){
			//localStorage.setItem('connect',true)
             await axios.post(freelost+'/users/new',{
				email: this.email,
				password: this.password,
                username:this.username,
				telephone:this.telephone

			} ).then(response=>{
			
			
				this.$router.push('/connexion'),
				this.users=response.data
				console.log('connexion ok')
				//localStorage.setItem('connect',true);
			}).catch({
				//console.log(e.response.data)
				
			});

			//this.$router.push('/connexion')
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