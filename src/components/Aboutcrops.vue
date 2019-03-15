<template>
	<div>
		<div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">

            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" @click="showModal = false">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <h2>DESCRIPTION</h2>
                  <h3>{{crops.category}}</h3>
                  <h3>{{crops.uses}}</h3>
                  <h3>{{crops.growing_period}}</h3>
                  <h3>{{crops.further_info}}</h3>
                  <h2>DATA</h2>
                  <h3>{{crops.temp_abs_min}}</h3>
                  <h3>{{crops.temp_abs_max}}</h3>
                  <h3>{{crops.temp_opt_min}}</h3>
                  <h3>{{crops.temp_opt_max}}</h3>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

	</div>
</template>

<script>

</script>