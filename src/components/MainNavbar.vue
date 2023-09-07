<template>
    <div>
        <nav class="navbar justify-content-between">
            <img width="15%" src="/assets/logo.png">
            <form class="form-inline d-flex">
                <font-awesome-icon class="icon" icon="fa-solid fa-user" />
                <div class="txt-user-nav">
                    <p><b>Test_User</b></p>
                    <p>TH_Test_Group</p>
                </div>
            </form>
        </nav>
        <div class="txt-view-policy">
            <b>Viewing Policy Name:</b>
            1215537 Health
        </div>
    </div>
</template>

<style scoped>
.form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
}

p {
    margin: 0;
    text-align: initial;
}

.navbar {
    background-color: white;
    padding: 10px 20px;
}

.txt-user-nav {
    font-size: 10px;
}

.icon {
    font-size: 24px;
    padding: 2px;
}

.txt-view-policy {
    font-size: 11px;
    text-align: initial;
    color: white;
    padding: 2px;
    background-color: black;

}
</style>