<template>
    <div>
        <div class="row">
            <div class="col-xl-3 col-sm-12 d-flex">
                <div class="icon-topic-list">
                    <font-awesome-icon class="icon" icon="fa-solid fa-users" />
                </div>
                <div>
                    <div class="pt-2">
                        <a href="/" data-bs-toggle="collapse" class="nav-link px-0">
                            <font-awesome-icon icon="fa-solid fa-house-chimney" />
                            <span class="txt-dashboard">dashboard / Census List</span>
                        </a>
                    </div>
                    <div class="txt-topic">
                        <p>Census List</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-9 col-sm-12 row-btn">
                <button class="btn-pending btn btn-light dropdown-toggle mr7" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pending (2)
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                </div>
                <div class="btn-group btn-group-toggle mr7 ft" data-toggle="buttons">
                    <label class="btn btn-primary active">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass-minus" />
                    </label>
                    <label class="btn btn-primary">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass-plus" />
                    </label>
                </div>
                <div class="btn-group btn-group-toggle mr7 ft" data-toggle="buttons">
                    <label class="btn btn-primary active">
                        <font-awesome-icon icon="fa-solid fa-chevron-left" />
                    </label>
                    <label class="btn btn-primary">
                        <font-awesome-icon icon="fa-solid fa-chevron-right" />
                    </label>
                </div>
                <select class="selectpicker mr7">
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                </select>
                <button type="button" class="btn btn-danger mr7">
                    <font-awesome-icon icon="fa-solid fa-arrows-rotate" />
                </button>
                <button type="button" class="btn btn-primary mr7">
                    <font-awesome-icon icon="fa-solid fa-circle-info" />
                </button>
                <button type="button" class="btn btn-warning mr7 btn-locate">Locate Column</button>
                <button type="button" class="btn btn-primary mr7">
                    <font-awesome-icon icon="fa-solid fa-table-columns" />
                </button>
                <button type="button" class="btn-member btn btn-primary mr7">
                    Member <font-awesome-icon icon="fa-solid fa-pencil" />
                </button>
                <button type="button" class="btn btn-primary">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </button>
            </div>
        </div>
        <div class="row row-table">
            <CensusTable />
        </div>
        <div class="row row-des">All premiums shown are insicative only.</div>

    </div>
</template>

<script>
import CensusDetail from "./CensusDetail.vue";
import CensusTable from './CensusTable.vue';

export default {
    data() {
        return {
            isDashboard: false,
        };
    },
    components: {
        CensusTable,
    },
    methods: {
        loadDashBoard() {
            this.$router.addRoute({
                name: "detail",
                path: "/census-detail",
                component: CensusDetail,
            });
            this.$router.push({
                name: "detail",
            });
            console.log(this.$router.options.routes);
            this.isDashboard = true;
        },
    },
};
</script>

<style scoped>
@media (max-width: 576px) {
    .row-btn {
        justify-content: end;
        align-items: center;
        display: inline !important;
    }
}

p {
    margin: 0;
}

button {
    height: 40px;
}

.mr7 {
    margin-right: 7px;
}

.ft {
    width: fit-content;
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

.btn-group-toggle {
    height: fit-content;
}

.row-btn {
    justify-content: end;
    align-items: center;
    display: flex;
}

.selectpicker {
    height: 35px;
}

.btn-locate,
.btn-member,
.btn-pending {
    font-size: 12px;
}

.row-table {
    margin: 15px 25px;
}
.row-des {
    margin: 15px 5px;
    font-size: 12px;
}
</style>