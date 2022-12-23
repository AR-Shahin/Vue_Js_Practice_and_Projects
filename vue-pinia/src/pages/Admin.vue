<template>
    <div>
        <h4>Admin Page</h4>
        <div class="row">
            <div class="col-md-4">
                <ul class="list-group">
                    <RouterLink to="/admin" 
                        class="list-group-item active">
                        Dashboard
                    </RouterLink>
                    
                    <RouterLink :to="{name: 'admin_profile'}" 
                        class="list-group-item">
                        Profile
                    </RouterLink>
                  
                </ul>
            </div>
            <div class="col-md-8">
                <RouterView/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { RouterLink ,RouterView} from 'vue-router';

</script>

<style lang="scss" scoped>

</style>