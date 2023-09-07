<template>
    <div>
        <div class="col-xl-12 col-sm-12 d-flex">
            <div class="icon-topic-list">
                <font-awesome-icon class="icon" icon="fa-solid fa-users" />
            </div>
            <div>
                <div class="pt-2">
                    <a href="/" data-bs-toggle="collapse" class="nav-link px-0">
                        <font-awesome-icon icon="fa-solid fa-house-chimney" />
                        <span class="txt-dashboard">dashboard / Census List / Census Detail</span>
                    </a>
                </div>
                <div class="txt-topic">
                    <p>Census Detail</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-10 col-sm-12">
                <div class="row-topic">
                    <p>Health Policy Infomation</p>
                </div>
                <div>
                    <form class="form-datail">
                        <fieldset disabled>
                            <div class="e-input txt">
                                <label for="firstname">
                                    First Name
                                    <p class="asterisk">*</p>
                                </label>
                                <input type="text" id="firstname" class="form-control" :value="item.firstName">
                            </div>
                            <div class="e-input txt">
                                <label for="lastname">
                                    Last Name
                                    <p class="asterisk">*</p>
                                </label>
                                <input type="text" id="lastname" class="form-control" :value="item.lastName">
                            </div>
                            <div class="e-input">
                                <label for="gender" class="form-label">
                                    Gender
                                    <p class="asterisk">*</p>
                                </label>
                                <select class="form-select" id="gender" name="gender" :value="item.gender">
                                    <option value="M">M</option>
                                    <option value="F">F</option>
                                </select>
                                <br>
                            </div>
                            <div class="e-input txt">
                                <label for="lastname">
                                    Date of Birth
                                    <p class="asterisk">*</p>
                                </label>
                                <input type="text" id="lastname" class="form-control" :value="item.date_of_birth">
                            </div>
                            <div class="e-input">
                                <label for="gender" class="form-label">
                                    Nationality
                                    <p class="asterisk">*</p>
                                </label>
                                <select class="form-select" id="gender" name="gender" :value="item.nationality">
                                    <option value="Afghan">Afghan</option>
                                </select>
                                <br>
                            </div>
                            <div class="e-input">
                                <label for="gender" class="form-label">
                                    Location
                                    <p class="asterisk">*</p>
                                </label>
                                <select class="form-select" id="gender" name="gender" :value="item.location">
                                    <option value="Singapore">Singapore</option>
                                </select>
                                <br>
                            </div>
                            <div class="e-input">
                                <label for="gender" class="form-label">
                                    Group Code
                                    <p class="asterisk">*</p>
                                </label>
                                <select class="form-select" id="gender" name="gender" :value="item.group_code">
                                    <option value="A">Group A</option>
                                    <option value="B">Group B</option>
                                    <option value="C">Group C</option>
                                </select>
                                <br>
                            </div>
                            <div class="e-input">
                                <label for="gender" class="form-label">
                                    Plan
                                    <p class="asterisk">*</p>
                                </label>
                                <select class="form-select" id="gender" name="gender" :value="item.plan">
                                    <option value="1">Plan 1</option>
                                    <option value="2">Plan 2</option>
                                    <option value="3">Plan 3</option>
                                </select>
                                <br>
                            </div>
                            <div class="e-input">
                                <label for="gender" class="form-label">
                                    Area of Cover
                                    <p class="asterisk">*</p>
                                </label>
                                <select class="form-select" id="gender" name="gender" :value="item.area">
                                    <option value="C">Worldwide C</option>
                                </select>
                                <br>
                            </div>
                            <div class="e-input">
                                <label for="gender" class="form-label">
                                    Status
                                    <p class="asterisk">*</p>
                                </label>
                                <select class="form-select" id="gender" name="gender" :value="item.status">
                                    <option value="Spouse">Spouse</option>
                                </select>
                                <br>
                            </div>
                            <div class="e-input txt">
                                <label for="lastname">
                                    Local Salary
                                    <p class="asterisk">*</p>
                                </label>
                                <input type="text" id="lastname" class="form-control" :value="item.salary">
                            </div>
                            <div class="e-input">
                                <label for="gender" class="form-label">
                                    File
                                </label>
                                <div class="custom-file mb-3">
                                    <input type="file" class="custom-file-input" id="customFile" name="filename">
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div class="col-xl-2 col-sm-12">
                <div class="row-btn">
                    <button type="button" class="btn btn-warning">Edit</button>
                    <button type="button" class="btn btn-success">Add benefits</button>
                    <button type="button" class="btn btn-primary">Mobillity/Transfer</button>
                    <button type="button" class="btn btn-danger">Terminate</button>
                </div>
                <div class="row-btn mt-4">
                    <button type="button" class="btn btn-light">Save Changes</button>
                    <button type="button" class="btn btn-dark">Cancel</button>
                </div>
                <div class="row-info">
                    <div class="d-flex">
                        <font-awesome-icon icon="fa-solid fa-circle-exclamation" style="color: #dda31c; margin: 2px;"/>
                        <p class="txt-extra">Pending updates</p>
                    </div>
                    <div class="d-flex">
                        <font-awesome-icon icon="fa-solid fa-ban" style="margin: 2px;"/>
                        <p class="txt-extra">Rejected updates</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item: this.$route.params,
        };
    },
};
</script>

<style scoped>
p {
    margin: 0;
}

label {
    font-size: 12px;
    margin: 5px 0 0 0;
}
button {
    width: 130px;
    margin: 4px;
    font-size: 12px;
}
fieldset {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

}
.txt {
    padding-bottom: 24px;
}
.icon-topic-list {
    font-size: 45px;
    margin-right: 10px;
}

.txt-dashboard {
    font-size: 12px;
}

.fa-house-chimney {
    font-size: 10px;
    margin-right: 3px;
}

.txt-topic {
    text-align: initial;
    font-size: 24px;
    font-weight: 600;
    line-height: 25px;
}

.row-topic {
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: rgb(54 142 213);
    height: 40px;
    border-radius: 4px;
    padding: 8px 15px;
    text-align: start;
}

.form-datail {
    text-align: start;
}

.e-input {
    margin: 0 4px;
}

.asterisk {
    color: red;
    display: contents;
}
.row-btn {
    text-align: start;
    display: grid;
}
.row-info{
    margin: 15px 0 101px 0;
    font-size: 13px;
}
</style>