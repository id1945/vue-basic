<template>
  <div>
    <select v-model="selected" id="deptList">
        <option v-for="(dept, id) in depts" :key="id" v-bind:value="dept.name">
            {{dept.name}}
        </option>
    </select>
    <pre>{{selected}}</pre>
  </div>
</template>

<script>
  const departments = [{
      id: 1,
      name: "Department 1"
    },
    {
      id: 2,
      name: "Department 2"
    },
    {
      id: 3,
      name: "Department 3"
    },
  ]
  export default {
    data() {
      return {
        selected: '',
        depts: departments
      }
    }

  }
</script>