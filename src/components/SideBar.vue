<template>
    <div class="bg-gray col-auto col-md-3 col-xl-2 px-sm-2 px-0">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <div class="txt-head-menu">
                <p class="txt-topic-side d-none d-sm-inline">Welcome</p>
                <p class="txt-sub-topic-side d-none d-sm-inline"><b>Test_User</b> | TH Test Group</p>
            </div>
            <div>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="dashboard" class="nav-link align-middle px-0 d-flex">
                            <font-awesome-icon icon="fa-solid fa-table-columns" />
                            <span class="ms-3 d-none d-sm-inline" :style="[$route.name == 'dashboard' ? {'color': 'black'} : {'color': '#565959'}]">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <font-awesome-icon class="icon" icon="fa-solid fa-users" />
                            <span class="ms-3 d-none d-sm-inline"  :style="[$route.name == 'main' ? {'color': 'black'} : {'color': '#565959'}]">Census Details</span>
                        </a>
                    </li>
                    <li>
                        <a href="history" class="nav-link px-0 align-middle">
                            <font-awesome-icon icon="fa-solid fa-clock-rotate-left" />
                            <span class="ms-3 d-none d-sm-inline" :style="[$route.name == 'history' ? {'color': 'black'} : {'color': '#565959'}]">History Logs</span></a>
                    </li>
                    <li>
                        <a href="setting" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <font-awesome-icon icon="fa-solid fa-gear" />
                            <span class="ms-3 d-none d-sm-inline" :style="[$route.name == 'setting' ? {'color': 'black'} : {'color': '#565959'}]">Account Settings</span></a>
                    </li>
                </ul>
            </div>
            <hr>
        </div>
    </div>
</template>

<style scoped>
.txt-head-menu {
    display: grid;
    text-decoration: none;
    text-align: left;
    margin-bottom: 65px;
    color: #565959;
}

span {
    color: #565959;
    font-weight: 600;
    font-size: 13px;
}

p {
    margin: 0;
}

.txt-topic-side {
    font-size: 24px;
    font-weight: 600;
}

.txt-sub-topic-side {
    font-size: 13px;
}

.bg-gray {
    background-color: #e3e3e3;
}</style>