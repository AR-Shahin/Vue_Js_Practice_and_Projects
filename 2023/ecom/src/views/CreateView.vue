<template>
    <div>
        <div class="d-flex justify-content-center">
            <RouterLink class="btn btn-sm btn-success" :to="{name:'home'}">Back</RouterLink>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form action="">
                    <div class="my-2">
                        <label for="">Title</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter your title">
                    </div>
                    <div class="my-2">
                        <label for="">Image</label>
                        <input type="file" class="form-control" id="image">
                    </div>
                    <div class="my-2">
                        <label for="">Status : </label>
                        <div class="d-inline mx-3">
                            <input type="radio" name="status" class="ml-2" value="1"> Active
                            <input type="radio" name="status" value="0"> Inactive
                        </div>
                    </div>
                    <div class="my-2">
                        <button class="btn btn-sm btn-success">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <hr>
    </div>
</template>
<style lang="scss" scoped>

</style>



