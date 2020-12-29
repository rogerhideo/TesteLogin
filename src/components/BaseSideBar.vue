<template>
<div class="h-screen flex overflow-hidden bg-white">
	<div class="md:hidden">
		<div class="fixed inset-0 flex z-40">
		<transition
				enter-active-class="transition-opacity ease-linear duration-300"
				enter-class="opacity-0"
				enter-to-class="opacity-100"
				leave-active-class="transition-opacity ease-linear duration-300"
				leave-class="opacity-100"
				leave-to-class="opacity-0"
		>
			<div class="fixed inset-0" v-show="isOpen">
				<div class="absolute inset-0 bg-gray-600 opacity-75"></div>
			</div>
		</transition>			
			
		<transition
			enter-active-class="transition ease-in-out duration-300 transform"
			enter-class="-translate-x-full"
			enter-to-class="otranslate-x-0"
			leave-active-class="transition ease-in-out duration-300 transform"
			leave-class="translate-x-0"
			leave-to-class="translate-x-full"
		>
			<div 
				class="relative flex-1 flex flex-col max-w-xs w-full bg-white"
				v-show="isOpen"
			>
				<div class="absolute top-0 right-0 -mr-12 pt-2">
					<button 
						class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						@click="isOpen = false"
					>
						<span class="sr-only">Close sidebar</span>
						<BaseIcon
							d="M6 18L18 6M6 6l12 12"	
						/>
					</button>
				</div>
				<div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
					<Logo/>
					<CategorieList/>
				</div>
				<div class="flex-shrink-0 flex border-t border-gray-200 p-4">
					<ProfileCard/>
				</div>
			</div>
		</transition>
			<div class="flex-shrink-0 w-14">
				<!-- Force sidebar to shrink to fit close icon -->
			</div>
		</div>
	</div>
	
	<!-- Static sidebar for desktop -->
	<div class="hidden md:flex md:flex-shrink-0">
		<div class="flex flex-col w-64">			
			<div class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
				<div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
					<Logo/>					
					<CategorieList/>						
				</div>
				<div class="flex-shrink-0 flex border-t border-gray-200 p-4">
					<ProfileCard/>
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-col w-0 flex-1 overflow-hidden">
		<div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
			<button 
				class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
				@click="isOpen = true"
			>
				<span class="sr-only">Open sidebar</span>
					<!-- Heroicon name: menu -->
				<BaseIcon
					d="M4 6h16M4 12h16M4 18h16"	
				/>	

			</button>
		</div>
		<main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
			<div class="py-6">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
					<h1 class="text-2xl font-semibold text-gray-900">{{ mainTitle }}</h1>
				</div>
				<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
						<!-- Replace with your content -->
					<div class="py-4">
						<div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
							<slot name="body"></slot>	
						</div>
					</div>
						<!-- /End replace -->
				</div>
			</div>
		</main>
	</div>
</div>
</template>

<script>
import CategorieList from '@/components/CategorieList.vue';
import Logo from '@/components/Logo.vue';
import ProfileCard from '@/components/ProfileCard.vue';
      export default {
		data: () => ({
			isOpen: false,
		}),
	    	props:{ 
                mainTitle:{
			  type: String,
			  required: true
		    }
            },
		components: {
			CategorieList,
			Logo,
			ProfileCard
			}
		}
</script>

