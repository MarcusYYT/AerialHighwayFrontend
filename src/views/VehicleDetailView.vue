<!-- <script setup>
import { ref, onMounted, Vue } from 'vue';
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import {
    TitleComponent,
    TooltipComponent,
    GridComponent
} from 'echarts/components'
import { VChart, install } from 'vue-echarts'
import { useRoute } from "vue-router";
import axios from "axios";


use([
    CanvasRenderer,
    LineChart,
    TitleComponent,
    TooltipComponent,
    GridComponent
])

install()



const route = useRoute();
const vehicleId = route.params.vehicle_id;
const data = ref([]);
const options = ref({});

onMounted(async () => {
    const response = await axios.get(`http://localhost:8000/api/vehicle/vehicledetail/${vehicleId}`);
    data.value = response.data;

    const videoFrameCnt = data.value.map((item) => item.video_frame_cnt);
    const speed = data.value.map((item) => item.speed);

    options.value = {
        xAxis: {
            type: 'category',
            data: videoFrameCnt
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: speed,
                type: 'line',
                smooth: true
            }
        ]
    };
});
</script>
  
<template>
    <div class="chart">
        <v-chart :options="options" autoresize />
    </div>
</template>
  
  
  
<style scoped>
.chart {
    width: 100%;
    height: 400px;
}
</style>
   -->

<template>
<div>

</div>
</template>

<script setup>
const route = useRoute();
const vehicleId = route.params.vehicle_id;
const data = ref([]);
const options = ref({});

onMounted(async () => {
    const response = await axios.get(`http://localhost:8000/api/vehicle/vehicledetail/${vehicleId}`);
    data.value = response.data;

    const videoFrameCnt = data.value.map((item) => item.video_frame_cnt);
    const speed = data.value.map((item) => item.speed);

    options.value = {
        xAxis: {
            type: 'category',
            data: videoFrameCnt
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: speed,
                type: 'line',
                smooth: true
            }
        ]
    };
});
</script>

<style lang="scss" scoped>

</style>