<template>
  <div class="accordion mt-5" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Add Task
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <form @submit="onSubmit">
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-1 col-form-label"
                >Task</label
              >
              <div class="col-sm-11">
                <input
                  type="text"
                  v-model="text"
                  name="text"
                  class="form-control"
                  id="inputEmail3"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword3" class="col-sm-1 col-form-label"
                >Day & Time</label
              >
              <div class="col-sm-11">
                <input
                  type="text"
                  v-model="day"
                  name="date"
                  class="form-control"
                  id="inputPassword3"
                />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-sm-10 offset-sm-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    v-model="reminder"
                    name="reminder"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label class="form-check-label" for="gridCheck1">
                    Set reminder
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" class="btn" style="background: #ffc048">
              Save Task
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AddTaskComponent",
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.text || !this.day) {
        alert("Please add all value");
        return;
      }

      const newTask = {
        // id: Math.floor(Math.random() * 1000),
        description: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      this.$emit("add-task", newTask);
      console.log(newTask);

      this.text = "";
      this.day = "";
      this.reminder = false;
    },
  },
};
</script>