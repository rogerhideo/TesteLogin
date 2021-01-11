<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="event-header">
      <h1 class="title">{{ user.userName }}</h1>
      <h5>Email: {{ user.email }}</h5>
    </div>
    <div class="pt-5">   
      <p>User details</p>
    </div>
    <div class="pt-5">    
    <p>{{ user.streetAddress }}</p>
    
      <ul>
        <li>{{ user.city }}</li>
        <li>{{ user.stateP }}</li>
        <li>{{ user.country }}</li>
        <li>{{ user.postalCode }}</li>
      </ul>
    
    </div>
  </div>
</template>

<script>

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}

</script>

<style lag="scss" scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
