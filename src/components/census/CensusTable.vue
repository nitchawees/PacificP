<template>
    <div class="table-responsive">
        <table class="table table-hover">
            <thead class="thead-dark">
                <tr>
                    <th>Family</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Age of Start</th>
                    <th>Date of Birth</th>
                    <th>Nationality</th>
                    <th>Location</th>
                    <th>Group Code</th>
                    <th>Plan</th>
                    <th>Area of Cover</th>
                    <th>Status</th>
                    <th>Local Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id" @click="loadDashBoard(item)">
                    <td>{{item.famliy_id}}</td>
                    <td>{{item.firstName}}</td>
                    <td>{{item.lastName}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.gender}}</td>
                    <td>{{item.age}}</td>
                    <td>{{item.date_of_birth}}</td>
                    <td>{{item.nationality}}</td>
                    <td>{{item.location}}</td>
                    <td>{{item.group_code}}</td>
                    <td>{{item.Plan}}</td>
                    <td>{{item.area}}</td>
                    <td>{{item.status}}</td>
                    <td>{{item.salary}}</td>
                </tr>
            </tbody>
        </table>
        <router-view v-if="isDashboard" name="detail"></router-view>
    </div>
</template>

<script>
import CensusDetail from "./CensusDetail.vue";

export default {
    data() {
        return {
            items: [
                { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', famliy_id: '10', gender: "M", age: "29", date_of_birth: "01 Jan 2000", nationality: "Afghan", location: "Singapore", group_code: "A", plan: "1", area: "C", status: "Spouse", salary: "25000" },
                { firstName: 'June', lastName: 'Polarem', email: 'June@test.com', famliy_id: '225', gender: "F", age: "50", date_of_birth: "18 Jun 2000", nationality: "Afghan", location: "Singapore", group_code: "B", plan: "2", area: "C", status: "Spouse", salary: "45000" },
                { firstName: 'Adam', lastName: 'Peekoid', email: 'Adam@test.com', famliy_id: '1', gender: "M", age: "42", date_of_birth: "25 Mar 2000", nationality: "Afghan", location: "Singapore", group_code: "C", plan: "3", area: "C", status: "Spouse", salary: "30000" },
                { firstName: 'Samantha', lastName: 'Bolphine', email: 'Samantha@test.com', famliy_id: '87', gender: "F", age: "25", date_of_birth: "04 Jan 2000", nationality: "Afghan", location: "Singapore", group_code: "C", Plan: "3", area: "C", status: "Spouse", salary: "18000" },
            ]
        };
    },
    methods: {
        loadDashBoard(item) {
            this.$router.addRoute({
                name: "detail",
                path: "/census-detail",
                component: CensusDetail,
            });
            this.$router.push({
                name: "detail",
                params: item
            });
            this.isDashboard = true;
        },
    },
};
</script>

<style scoped>
tr {
    font-size: 12px;
}
</style>