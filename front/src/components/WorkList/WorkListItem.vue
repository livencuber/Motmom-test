<template>
    <div class="d-flex justify-content-between align-items-center">
        <div class="form-check d-flex align-items-center">
            <input type="checkbox" class="form-check-input mt-0" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1"><span class="badge badge-primary">{{event.created | moment("hh:mm")}}</span> {{event.name}}</label>
        </div>
        <button type="button" class="btn btn-danger ml-1"><i class="fas fa-trash-alt"></i></button>
    </div>
</template>

<script>
export default {
  name: 'WorkListItem',
  props: ['event']
}
</script>

<style scoped>

</style>
