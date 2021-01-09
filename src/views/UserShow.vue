<template>
  <div>
    <div class="event-header">
      <h1 class="title">{{ user.userName }}</h1>
      <h5>Email: {{ user.email }}</h5>
    </div>
    
    <h2>User details</h2>
    <p>{{ user.streetAddress }}</p>
    <h2>
      <ul>
        <li>{{ user.city }}</li>
        <li>{{ user.stateP }}</li>
        <li>{{ user.country }}</li>
        <li>{{ user.postalCode }}</li>
      </ul>
    </h2>
  
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
