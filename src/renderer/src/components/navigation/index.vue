<template>
    <div style="width: 100%;margin-top: 1.5vh;">
        <!-- <Search /> -->
        <a-row class="grid-demo">
            <a-col :flex="7">
                <Search />
            </a-col>
            <a-col :flex="5">
                <a-space size="large">
                    <div @click="openCloseBut" >
                        <SettingBut title="展&nbsp;&nbsp;开"/>
                    </div>
                    <SettingBut title="装&nbsp;&nbsp;扮"/>
                    <SettingBut title="设&nbsp;&nbsp;置"/>
                </a-space>
            </a-col>
        </a-row>
    </div>
</template>

<script lang="ts" setup name="Navigation">
import Search from './search.vue';
import SettingBut from './settingbut.vue';


function openCloseBut(){
    console.log("开合")
}

</script>

<style lang="less" scoped>
.grid-demo .arco-col {
    display: grid;
    place-items: center;
    height: 45px;
}
</style>