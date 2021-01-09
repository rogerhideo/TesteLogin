<template>
    <div id="app">
      
      <NotificationContainer />
      <router-view :key="$route.fullPath" />
    </div>
</template>

<script>
import NotificationContainer from '@/components/NotificationContainer.vue'
export default {
  components: {
    NotificationContainer
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.-text-error {
		color: tomato;
	}
	.error {
	border: 1px solid red;
	}
	
	.errorMessage {
	color: red;
	}
	.button:disabled {
		-webkit-transform: scale(1);
		transform: scale(1);
		box-shadow: none;
		background: #eeeeee;
	}
</style>
