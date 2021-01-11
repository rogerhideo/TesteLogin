<template>
      <BaseSideBar mainTitle="Create User"> 
            <template v-slot:body>
		<form class="space-y-8 divide-y divide-gray-200" @submit.prevent="createUser">
			<div class="space-y-8 divide-y divide-gray-200">
				
				<div class="pt-8">
					<div>
						<h3 class="text-lg leading-6 font-medium text-gray-900">
							Personal Information
						</h3>
						<p class="mt-1 text-sm text-gray-500">
							Use a permanent address where you can receive mail.
						</p>
					</div>
					
					<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
						
						<BaseInput
							label="User Name "        
							id="user_name"
							name="user_name"
							type="text"
							autocomplete="given-name"
							v-model="user.userName"
							class="bshadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
							:class="{ error: $v.user.userName.$error }"
							@blur="$v.user.userName.$touch()"
							/>
							<template v-if="$v.user.userName.$error">
								<p v-if="!$v.user.userName.required" class="errorMessage">
									User Name is required.
								</p>
							</template>

						<BaseInput
							label="Email Address"        
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							v-model="user.email"
							class="bshadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
							:class="{ error: $v.user.email.$error }"
							@blur="$v.user.email.$touch()"
							/>
							<template v-if="$v.user.email.$error">
								<p v-if="!$v.user.email.required" class="errorMessage">
									Email is required.
								</p>
							</template>
						<BaseInput
							label="Password"        
							id="password"
							name="password"
							type="password"
							v-model="user.password"
							class="bshadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
							:class="{ error: $v.user.password.$error }"
							@blur="$v.user.password.$touch()"
							/>
							<template v-if="$v.user.password.$error">
								<p v-if="!$v.user.password.required" class="errorMessage">
									Password is required.
								</p>
							</template>
						
						<div class="sm:col-span-6">
							<label for="country" class="block text-sm font-medium text-gray-700">Country / Region</label>
							<select v-model="user.country" :class="{ error: $v.user.country.$error }"
							@blur="$v.user.country.$touch()" >
							<option v-for="country in countries" :key="country">{{ country }}</option>
							</select>
						</div>

						<template v-if="$v.user.country.$error">
								<p v-if="!$v.user.country.required" class="errorMessage">
									Country / Region is required.
								</p>
						</template>

						<BaseInput
							label="Street Address"        
							id="street_address"
							name="street_address"
							type="text"
							autocomplete="street-address"
							v-model="user.streetAddress"
							class="bshadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
							:class="{ error: $v.user.streetAddress.$error }"
							@blur="$v.user.streetAddress.$touch()"
							/>
							<template v-if="$v.user.streetAddress.$error">
								<p v-if="!$v.user.streetAddress.required" class="errorMessage">
									Street Address is required.
								</p>
							</template>

						<BaseInput
							label="City"        
							id="city"
							name="city"
							type="text"
							v-model="user.city"
							class="bshadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
							:class="{ error: $v.user.city.$error }"
							@blur="$v.user.city.$touch()"
							/>
							<template v-if="$v.user.city.$error">
								<p v-if="!$v.user.city.required" class="errorMessage">
									City is required.
								</p>
							</template>

						<BaseInput
							label="State / Province"        
							id="state"
							name="state"
							type="text"
							v-model="user.stateP"
							class="bshadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
							:class="{ error: $v.user.stateP.$error }"
							@blur="$v.user.stateP.$touch()"
							/>
							<template v-if="$v.user.stateP.$error">
								<p v-if="!$v.user.stateP.required" class="errorMessage">
									State / Province is required.
								</p>
							</template>


						<BaseInput
							label="ZIP / Postal"        
							id="zip"
							name="zip"
							type="text"
							autocomplete="postal-code"
							v-model ="user.postalCode"
							class="bshadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
							:class="{ error: $v.user.postalCode.$error }"
							@blur="$v.user.postalCode.$touch()"
							/>
							<template v-if="$v.user.postalCode.$error">
								<p v-if="!$v.user.postalCode.required" class="errorMessage">
									Postal Code is required.
								</p>
							</template>
				
					</div>
				</div>
			</div>
			<div class="pt-5">
				<div class="flex justify-end">
					<button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Cancel
					</button>
					<button type="submit" :disabled="$v.$anyError" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Save
					</button>
				</div>
			</div>
			<div>
				<p v-if="$v.$anyError" class="errorMessage">
					Please fill out the required field(s).
				</p>
			</div>
		</form>
</template>
      </BaseSideBar>
</template>

<script>
import NProgress from 'nprogress'
import { required } from 'vuelidate/lib/validators'


export default {
  data() {
    return {
      countries: this.$store.state.countries,
      user: this.createFreshUserObject()
    }
  },
  validations: {
    user: {
      userName: { required },
      email: { required },
      password: { required },
      country: { required },
      streetAddress: { required },
	city: { required },
	stateP: { required },
	postalCode: { required }
    }
  },
  methods: {
    createUser() {
	this.$v.$touch()    
	if (!this.$v.$invalid) {    
      NProgress.start()
      this.$store
        .dispatch('user/createUser', this.user)
        .then(() => {
          this.$router.push({
            name: 'user-show',
            params: { id: this.user.id }
          })
          this.user = this.createFreshUserObject()
        })
        .catch(() => {
          NProgress.done()
	  })
	  }
    },
    createFreshUserObject() {
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        userName: '',
        email: '',
        password: '',
        country: '',
        streetAddress: '',
        city: '',
        stateP: '',
        postalCode: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
	
</style>